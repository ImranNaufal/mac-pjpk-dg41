/**
 * Automated Verification Test for Task 2 (UI, Tab Navigation & State Engine)
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('--- Memulakan Ujian Verifikasi Task 2 (UI & Tab Navigation) ---');

// 1. Ujian Kewujudan Fail
const indexHtmlPath = path.join(__dirname, '..', 'index.html');
const cssPath = path.join(__dirname, '..', 'css', 'style.css');
const jsPath = path.join(__dirname, '..', 'js', 'app.js');

assert(fs.existsSync(indexHtmlPath), 'index.html mesti wujud');
assert(fs.existsSync(cssPath), 'css/style.css mesti wujud');
assert(fs.existsSync(jsPath), 'js/app.js mesti wujud');
console.log('✔ Fail index.html, css/style.css, dan js/app.js disahkan wujud.');

// 2. Semak Kandungan index.html
const htmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

// Pastikan tiada pautan CDN luaran
const externalCdnPattern = /(https?:\/\/(?!www\.w3\.org\/2000\/svg)[^\s"'<>]+)/gi;
const externalLinks = htmlContent.match(externalCdnPattern) || [];
assert.strictEqual(externalLinks.length, 0, `index.html tidak boleh mempunyai sambungan internet luaran: ${JSON.stringify(externalLinks)}`);
console.log('✔ index.html 100% bebas CDN luaran.');

// Pastikan kesemua 8 tab navigation wujud mengikut stesen MAC
const expectedTabs = ['dashboard', 'psychometric', 'fitness', 'essay', 'microteaching', 'interview', 'groupdiscussion', 'docs'];
expectedTabs.forEach(tabId => {
  assert(htmlContent.includes(`data-tab="${tabId}"`), `Butang tab "${tabId}" mesti ada dalam index.html`);
  assert(htmlContent.includes(`id="tab-${tabId}"`), `Seksyen tab pane "tab-${tabId}" mesti ada dalam index.html`);
});
console.log('✔ Kesemua 8 tab navigation (dashboard, psychometric, fitness, essay, microteaching, interview, groupdiscussion, docs) wujud.');

// Pastikan ID kontena bagi setiap modul wujud
assert(htmlContent.includes('id="psychometric-app"'), 'Kontena #psychometric-app mesti wujud untuk Task 3');
assert(htmlContent.includes('id="fitness-app"'), 'Kontena #fitness-app mesti wujud untuk Task 4');
assert(htmlContent.includes('id="essay-app"'), 'Kontena #essay-app mesti wujud untuk Modul Esei');
assert(htmlContent.includes('id="microteaching-app"'), 'Kontena #microteaching-app mesti wujud untuk Task 5');
assert(htmlContent.includes('id="interview-app"'), 'Kontena #interview-app mesti wujud untuk Task 6');
assert(htmlContent.includes('id="groupdiscussion-app"'), 'Kontena #groupdiscussion-app mesti wujud untuk Modul LDK');
assert(htmlContent.includes('id="toast-container"'), 'Kontena #toast-container mesti wujud');
console.log('✔ Kesemua ID kontena modul sedia diintegrasikan.');

// 3. Semak css/style.css
const cssContent = fs.readFileSync(cssPath, 'utf8');
assert(cssContent.includes('#8B0000'), 'CSS mesti mengandungi warna Crimson MARA #8B0000');
assert(cssContent.includes('#0A2540'), 'CSS mesti mengandungi warna Navy MARA #0A2540');
assert(cssContent.includes('@media print'), 'CSS mesti mengandungi arahan @media print untuk cetakan PDF/A4');
assert(!cssContent.includes('@import url'), 'CSS tidak boleh mempunyai @import url luaran');
console.log('✔ style.css disahkan menepati piawaian tema korporat MARA dan media print.');

// 4. Semak logik js/app.js menggunakan persekitaran mock DOM
// Buat persekitaran Mock Storage & DOM Ringkas
const storageMock = {};
global.localStorage = {
  getItem: (key) => storageMock[key] || null,
  setItem: (key, val) => { storageMock[key] = String(val); },
  removeItem: (key) => { delete storageMock[key]; },
  clear: () => { Object.keys(storageMock).forEach(k => delete storageMock[k]); }
};

// Mock DOM Elements
class MockElement {
  constructor(id = '', className = '') {
    this.id = id;
    this.className = className;
    this.classList = {
      classes: new Set(className ? className.split(' ') : []),
      add: (c) => this.classList.classes.add(c),
      remove: (c) => this.classList.classes.delete(c),
      toggle: (c, force) => {
        if (force === undefined) {
          if (this.classList.classes.has(c)) this.classList.classes.delete(c);
          else this.classList.classes.add(c);
        } else if (force) {
          this.classList.classes.add(c);
        } else {
          this.classList.classes.delete(c);
        }
      },
      contains: (c) => this.classList.classes.has(c)
    };
    this.attributes = {};
    this.children = [];
    this.style = {};
    this.textContent = '';
    this.innerHTML = '';
  }
  getAttribute(name) { return this.attributes[name] || null; }
  setAttribute(name, val) { this.attributes[name] = String(val); }
  addEventListener() {}
  appendChild(child) { this.children.push(child); }
  removeChild(child) {
    const idx = this.children.indexOf(child);
    if (idx > -1) this.children.splice(idx, 1);
  }
  querySelector() { return new MockElement(); }
}

const mockButtons = expectedTabs.map(t => {
  const btn = new MockElement(`tab-btn-${t}`, 'nav-tab');
  btn.setAttribute('data-tab', t);
  return btn;
});

const mockPanes = expectedTabs.map(t => {
  const p = new MockElement(`tab-${t}`, 'tab-pane');
  return p;
});

const toastContainer = new MockElement('toast-container', 'toast-container');
const mainContent = new MockElement('main-content', 'main-content');

global.document = {
  getElementById: (id) => {
    if (id === 'toast-container') return toastContainer;
    if (id === 'main-content') return mainContent;
    const pane = mockPanes.find(p => p.id === id);
    if (pane) return pane;
    const btn = mockButtons.find(b => b.id === id);
    if (btn) return btn;
    return new MockElement(id);
  },
  querySelectorAll: (selector) => {
    if (selector === '.nav-tab') return mockButtons;
    if (selector === '.tab-pane') return mockPanes;
    if (selector.includes('data-action="switch-tab"')) return [];
    if (selector.includes('.check-box')) return [];
    return [];
  },
  createElement: (tag) => new MockElement('', tag),
  addEventListener: () => {},
  dispatchEvent: () => {}
};

global.window = {
  location: { hash: '' },
  history: { replaceState: (state, title, url) => { global.window.location.hash = url; } },
  print: () => { console.log('Mock window.print dipanggil'); },
  addEventListener: () => {},
  scrollY: 0
};

global.CustomEvent = class {
  constructor(name, opts) {
    this.name = name;
    this.detail = opts ? opts.detail : {};
  }
};

// Muat modul app.js
const MACApp = require(jsPath);

assert(MACApp, 'MACApp modul mesti dieksport');
assert.strictEqual(typeof MACApp.switchTab, 'function', 'MACApp.switchTab mesti merupakan fungsi');
assert.strictEqual(typeof MACApp.showToast, 'function', 'MACApp.showToast mesti merupakan fungsi');
assert.strictEqual(typeof MACApp.printCurrentTab, 'function', 'MACApp.printCurrentTab mesti merupakan fungsi');
console.log('✔ API asas MACApp disahkan lengkap.');

// Uji switchTab
expectedTabs.forEach(tab => {
  const result = MACApp.switchTab(tab);
  assert.strictEqual(result, tab, `switchTab("${tab}") harus mengembalikan "${tab}"`);
  assert.strictEqual(localStorage.getItem(MACApp.STORAGE_KEYS.ACTIVE_TAB), tab, `localStorage mesti menyimpan "${tab}"`);

  // Semak kelas active pada butang & pane
  const activeBtn = mockButtons.find(b => b.getAttribute('data-tab') === tab);
  assert(activeBtn.classList.contains('active'), `Butang "${tab}" mesti mempunyai kelas "active"`);

  const activePane = mockPanes.find(p => p.id === `tab-${tab}`);
  assert(activePane.classList.contains('active'), `Pane "tab-${tab}" mesti mempunyai kelas "active"`);
});
console.log('✔ switchTab dan penyimpanan localStorage berfungsi dengan sempurna bagi kesemua 6 modul.');

// Uji fallback tab tidak sah
const fallbackResult = MACApp.switchTab('unknown-invalid-tab');
assert.strictEqual(fallbackResult, 'dashboard', 'Tab yang tidak sah harus kembali kepada "dashboard"');
console.log('✔ Fallback tab ke "dashboard" berjaya disahkan.');

// Uji showToast
const toast = MACApp.showToast('Ujian Berjaya!', 'success');
assert(toast, 'showToast mesti mengembalikan elemen toast');
assert(toastContainer.children.includes(toast), 'Toast mesti dimasukkan ke dalam #toast-container');
console.log('✔ showToast berjaya menjana notifikasi.');

// Uji Dokumen Rujukan Summaries
assert(MACApp.DOC_SUMMARIES[1], 'DOC_SUMMARIES 1 mesti wujud');
assert(MACApp.DOC_SUMMARIES[2], 'DOC_SUMMARIES 2 mesti wujud');
assert(MACApp.DOC_SUMMARIES[3], 'DOC_SUMMARIES 3 mesti wujud');
assert(MACApp.DOC_SUMMARIES[4], 'DOC_SUMMARIES 4 mesti wujud');
assert(MACApp.DOC_SUMMARIES[5], 'DOC_SUMMARIES 5 mesti wujud');
assert(MACApp.DOC_SUMMARIES[6], 'DOC_SUMMARIES 6 mesti wujud');
console.log('✔ Kesemua 6 ringkasan dokumen rujukan sahih disahkan sedia.');

console.log('\n--- SEMUA UJIAN VERIFIKASI TASK 2 LULUS 100%! ---');
