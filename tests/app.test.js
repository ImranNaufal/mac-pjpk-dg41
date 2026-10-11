/**
 * Automated Verification Test for Task 2 (UI Shell, Tab Navigation & Responsive Mobile/iPad Layout)
 * Aligned 100% with MARA Assessment Centre (MAC) Official PDF Guidelines (v.300726)
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('--- Memulakan Ujian Verifikasi Task 2 (UI Shell & Navigasi 4 Tab Rasmi MAC) ---');

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

// Pastikan tiada pautan CDN luaran untuk skrip dan stylesheet (100% offline)
assert(!htmlContent.includes('<script src="http'), 'index.html tidak boleh memuatkan skrip luaran melalui CDN');
assert(!htmlContent.includes('<link rel="stylesheet" href="http'), 'index.html tidak boleh memuatkan lembaran gaya luaran melalui CDN');
console.log('✔ index.html 100% bebas CDN skrip dan gaya luaran.');

// Pastikan 5 tab rasmi MAC (termasuk Page Sumber Nota Ringkas IV 'docs') wujud
const expectedTabs = ['fitness', 'teaching', 'interview', 'docs', 'checklist'];
expectedTabs.forEach(tabId => {
  assert(htmlContent.includes(`data-tab="${tabId}"`), `Butang tab "${tabId}" mesti ada dalam index.html`);
  assert(htmlContent.includes(`id="tab-${tabId}"`), `Seksyen tab pane "tab-${tabId}" mesti ada dalam index.html`);
});
console.log('✔ Kesemua 5 tab rasmi MAC (fitness, teaching, interview, docs, checklist) wujud.');

// Pastikan tab-tab luar yang tidak relevan telah dibuang sepenuhnya dari navigasi
const purgedTabs = ['psychometric', 'essay', 'microteaching', 'groupdiscussion'];
purgedTabs.forEach(tabId => {
  assert(!htmlContent.includes(`data-tab="${tabId}"`), `Tab lapuk "${tabId}" tidak boleh wujud dalam navigasi index.html`);
});
console.log('✔ Tiada saki-baki tab lapuk (psikometrik, esei, ldk) dalam navigasi.');

// Pastikan ID kontena bagi setiap modul rasmi wujud
assert(htmlContent.includes('id="fitness-app"'), 'Kontena #fitness-app mesti wujud');
assert(htmlContent.includes('id="teaching-app"'), 'Kontena #teaching-app mesti wujud');
assert(htmlContent.includes('id="interview-app"'), 'Kontena #interview-app mesti wujud');
assert(htmlContent.includes('id="checklist-app"'), 'Kontena #checklist-app mesti wujud');
assert(htmlContent.includes('id="toast-container"'), 'Kontena #toast-container mesti wujud');
console.log('✔ Kesemua ID kontena modul rasmi wujud.');

// 3. Semak css/style.css
const cssContent = fs.readFileSync(cssPath, 'utf8');
assert(cssContent.includes('#8B0000'), 'CSS mesti mengandungi warna Crimson MARA #8B0000');
assert(cssContent.includes('#0A2540'), 'CSS mesti mengandungi warna Navy MARA #0A2540');
assert(cssContent.includes('@media print'), 'CSS mesti mengandungi arahan @media print untuk cetakan PDF/A4');
assert(cssContent.includes('@media'), 'CSS mesti mengandungi media queries untuk reka bentuk responsif');
assert(!cssContent.includes('@import url'), 'CSS tidak boleh mempunyai @import url luaran');
console.log('✔ style.css disahkan menepati tema korporat MARA, responsif dan cetakan.');

// 4. Semak logik js/app.js menggunakan mock
const storageMock = {};
global.localStorage = {
  getItem: (key) => storageMock[key] || null,
  setItem: (key, val) => { storageMock[key] = String(val); },
  removeItem: (key) => { delete storageMock[key]; },
  clear: () => { Object.keys(storageMock).forEach(k => delete storageMock[k]); }
};

const domMock = {
  activeTab: 'fitness',
  elements: {}
};

global.document = {
  querySelectorAll: (selector) => {
    return [];
  },
  getElementById: (id) => {
    return {
      classList: {
        add: () => {},
        remove: () => {},
        contains: () => false
      },
      appendChild: () => {},
      addEventListener: () => {},
      setAttribute: () => {},
      getAttribute: () => null,
      innerText: '',
      innerHTML: '',
      value: ''
    };
  },
  createElement: () => ({
    className: '',
    innerText: '',
    classList: {
      add: () => {},
      remove: () => {},
      contains: () => false
    },
    appendChild: () => {},
    remove: () => {}
  })
};

global.window = {
  location: { hash: '' }
};

const appModule = require(jsPath);
assert(typeof appModule.switchTab === 'function', 'app.js mesti mengeksport fungsi switchTab');
assert(typeof appModule.showToast === 'function', 'app.js mesti mengeksport fungsi showToast');
assert(typeof appModule.getProfile === 'function', 'app.js mesti mengeksport fungsi getProfile');
assert(typeof appModule.saveProfile === 'function', 'app.js mesti mengeksport fungsi saveProfile');

// Uji switchTab
appModule.switchTab('teaching');
assert.strictEqual(global.localStorage.getItem('mac_active_tab'), 'teaching', 'Tab aktif mesti disimpan dalam localStorage');

// Uji profil calon
appModule.saveProfile({
  nama: 'Muhammad Harith',
  noKp: '950215-01-5521',
  noId: 'MAC-2026-PJPK-088',
  subjek: 'Pendidikan Jasmani dan Pendidikan Kesihatan'
});

const profile = appModule.getProfile();
assert.strictEqual(profile.nama, 'Muhammad Harith', 'Profil calon mesti disimpan dan dipulihkan dengan tepat');
assert.strictEqual(profile.subjek, 'Pendidikan Jasmani dan Pendidikan Kesihatan', 'Subjek calon mesti PJPK');

console.log('✔ Pengurusan state dan profil calon dalam app.js disahkan berfungsi.');

console.log('\n============================================================');
console.log('🎉 SEMUA UJIAN ASAS UI, SHELL & TAB NAVIGATION LULUS 100%!');
console.log('============================================================\n');
