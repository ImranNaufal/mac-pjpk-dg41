/**
 * ============================================================================
 * MARA ASSESSMENT CENTRE (MAC) - SKIM DG41 PJPK
 * Test Suite: Ujian Integrasi Penuh & Verifikasi Sistem (Task 7)
 * tests/integration.test.js
 * 
 * Cakupan Ujian:
 * 1. Integriti Struktur Fail & Eksport Kesemua 5 Modul JS
 * 2. 100% Luar Talian (Offline-Ready) - Sifar Pautan CDN/URL Luaran
 * 3. Struktur DOM, Mount Containers & Komponen Antaramuka (index.html)
 * 4. Liputan Lembaran Gaya Cetakan Pintar (@media print) dalam style.css
 * 5. Ketepatan Fakta & Punca Kuasa Dokumen Rujukan Sahih (docs/*.md)
 * 6. Simulasi Aliran Data Merentas Modul (Cross-Module State & Dashboard KPIs)
 * 7. Perlaksanaan Automatik Kesemua 5 Unit Test Terdahulu (100% Pass)
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { execSync } = require('child_process');

console.log('================================================================');
console.log('  MARA ASSESSMENT CENTRE (MAC) - PJPK DG41');
console.log('  UJIAN INTEGRASI PENUH & VERIFIKASI SISTEM (TASK 7)');
console.log('================================================================\n');

const projectRoot = path.join(__dirname, '..');
const indexHtmlPath = path.join(projectRoot, 'index.html');
const cssPath = path.join(projectRoot, 'css', 'style.css');

// ============================================================================
// BAHAGIAN 1: INTEGRITI STRUKTUR FAIL & EKSPORT SEMUA MODUL JS
// ============================================================================
console.log('--- Bahagian 1: Integriti Struktur Fail & Eksport Modul JS ---');

const expectedFiles = [
  'index.html',
  'css/style.css',
  'js/app.js',
  'js/psychometric.js',
  'js/fitness.js',
  'js/essay.js',
  'js/microteaching.js',
  'js/interview.js',
  'js/groupdiscussion.js',
  'docs/01_FAKTA_DAN_AKTA_MARA.md',
  'docs/02_PANDUAN_BLEEP_TEST_DAN_SEGAK.md',
  'docs/03_RPH_LENGKAP_PJPK_MRSM.md',
  'docs/04_BANK_SOALAN_TEMUDUGA_DG41.md',
  'docs/05_PANDUAN_PENULISAN_ESEI_MAC.md',
  'docs/06_PANDUAN_LDK_DINAMIKA_KUMPULAN.md',
  'tests/app.test.js',
  'tests/psychometric.test.js',
  'tests/fitness.test.js',
  'tests/essay.test.js',
  'tests/microteaching.test.js',
  'tests/interview.test.js',
  'tests/groupdiscussion.test.js'
];

expectedFiles.forEach(file => {
  const fullPath = path.join(projectRoot, file);
  assert(fs.existsSync(fullPath), `Fail penting mesti wujud: ${file}`);
  const stat = fs.statSync(fullPath);
  assert(stat.size > 0, `Fail tidak boleh kosong: ${file}`);
});
console.log(`✔ Kesemua ${expectedFiles.length} fail utama projek disahkan wujud dan berisi.`);

// Pengesahan Eksport Setiap Modul JS
const appModulePath = path.join(projectRoot, 'js', 'app.js');
const psychometricModulePath = path.join(projectRoot, 'js', 'psychometric.js');
const fitnessModulePath = path.join(projectRoot, 'js', 'fitness.js');
const essayModulePath = path.join(projectRoot, 'js', 'essay.js');
const microteachingModulePath = path.join(projectRoot, 'js', 'microteaching.js');
const interviewModulePath = path.join(projectRoot, 'js', 'interview.js');
const groupdiscussionModulePath = path.join(projectRoot, 'js', 'groupdiscussion.js');

// Mock persekitaran ringkas untuk import Node.js
const mockStorage = {};
global.localStorage = {
  getItem: (key) => mockStorage[key] || null,
  setItem: (key, val) => { mockStorage[key] = String(val); },
  removeItem: (key) => { delete mockStorage[key]; },
  clear: () => { Object.keys(mockStorage).forEach(k => delete mockStorage[k]); }
};
global.window = {
  localStorage: global.localStorage,
  print: () => {},
  addEventListener: () => {},
  location: { hash: '' }
};
global.document = {
  getElementById: () => null,
  querySelectorAll: () => [],
  addEventListener: () => {},
  dispatchEvent: () => {}
};

const MACApp = require(appModulePath);
const PsychometricModule = require(psychometricModulePath);
const FitnessModule = require(fitnessModulePath);
const EssayModule = require(essayModulePath);
const MicroteachingModule = require(microteachingModulePath);
const InterviewModule = require(interviewModulePath);
const GroupDiscussionModule = require(groupdiscussionModulePath);

assert(MACApp && typeof MACApp.switchTab === 'function', 'MACApp mesti dieksport dengan switchTab');
assert(PsychometricModule && (PsychometricModule.PsychometricEngine || typeof PsychometricModule === 'function'), 'PsychometricModule mesti dieksport');
assert(FitnessModule && FitnessModule.BleepTestEngine && FitnessModule.SEGAKCalculator, 'FitnessModule mesti mengeksport BleepTestEngine & SEGAKCalculator');
assert(EssayModule && (EssayModule.EssayEngine || EssayModule.MACEssayModule), 'EssayModule mesti dieksport');
assert(MicroteachingModule && MicroteachingModule.MicroTeachingHub && MicroteachingModule.DSKP_TEMPLATES, 'MicroteachingModule mesti mengeksport MicroTeachingHub & DSKP_TEMPLATES');
assert(InterviewModule && InterviewModule.InterviewSimulator && InterviewModule.INTERVIEW_QUESTIONS, 'InterviewModule mesti mengeksport InterviewSimulator & INTERVIEW_QUESTIONS');
assert(GroupDiscussionModule && (GroupDiscussionModule.LDKEngine || GroupDiscussionModule.MACGroupDiscussionModule), 'GroupDiscussionModule mesti dieksport');
console.log('✔ Kesemua modul JS berjaya diimport dan mengeksport API yang lengkap.\n');

// ============================================================================
// BAHAGIAN 2: 100% LUAR TALIAN (OFFLINE-READY) - SIFAR PAUTAN CDN LUARAN
// ============================================================================
console.log('--- Bahagian 2: Pengesahan 100% Luar Talian (Sifar CDN / URL Luaran) ---');

const clientCodeFiles = [
  'index.html',
  'css/style.css',
  'js/app.js',
  'js/psychometric.js',
  'js/fitness.js',
  'js/essay.js',
  'js/microteaching.js',
  'js/interview.js',
  'js/groupdiscussion.js'
];

const externalUrlPattern = /(https?:\/\/[^\s"'<>]+)/gi;

clientCodeFiles.forEach(relPath => {
  const filePath = path.join(projectRoot, relPath);
  const content = fs.readFileSync(filePath, 'utf8');
  
  const matches = content.match(externalUrlPattern) || [];
  // Kecualikan namespace SVG rasmi W3C (xmlns="http://www.w3.org/2000/svg")
  const disallowedUrls = matches.filter(url => !url.includes('www.w3.org/2000/svg'));

  assert.strictEqual(
    disallowedUrls.length,
    0,
    `Fail ${relPath} dilarang mempunyai pautan URL internet luaran. Ditemui: ${JSON.stringify(disallowedUrls)}`
  );
});

// Semak juga tiada @import url luaran dalam CSS
const cssContent = fs.readFileSync(cssPath, 'utf8');
assert(!cssContent.includes('@import url'), 'css/style.css tidak boleh mengandungi @import url luaran');
assert(!cssContent.includes('http://') && !cssContent.includes('https://'), 'css/style.css 100% bebas pautan web luar');

// Semak index.html hanya menggunakan skrip dan link setempat
const htmlContent = fs.readFileSync(indexHtmlPath, 'utf8');
assert(htmlContent.includes('<link rel="stylesheet" href="css/style.css">'), 'index.html mesti memuatkan css/style.css tempatan');
assert(htmlContent.includes('<script src="js/psychometric.js"></script>'), 'index.html mesti memuatkan js/psychometric.js');
assert(htmlContent.includes('<script src="js/fitness.js"></script>'), 'index.html mesti memuatkan js/fitness.js');
assert(htmlContent.includes('<script src="js/essay.js"></script>'), 'index.html mesti memuatkan js/essay.js');
assert(htmlContent.includes('<script src="js/microteaching.js"></script>'), 'index.html mesti memuatkan js/microteaching.js');
assert(htmlContent.includes('<script src="js/interview.js"></script>'), 'index.html mesti memuatkan js/interview.js');
assert(htmlContent.includes('<script src="js/groupdiscussion.js"></script>'), 'index.html mesti memuatkan js/groupdiscussion.js');
assert(htmlContent.includes('<script src="js/app.js"></script>'), 'index.html mesti memuatkan js/app.js');

console.log('✔ Sifar CDN luaran atau pautan internet dalam kesemua fail HTML, CSS, dan JS.');
console.log('✔ Platform disahkan 100% offline-ready & bebas risiko sekatan rangkaian.\n');

// ============================================================================
// BAHAGIAN 3: STRUKTUR DOM, MOUNT CONTAINERS & INTERFACE (index.html)
// ============================================================================
console.log('--- Bahagian 3: Struktur DOM & Integrasi Komponen index.html ---');

// Header korporat & Lambang
assert(htmlContent.includes('corp-header'), 'Header korporat MARA mesti wujud');
assert(htmlContent.includes('brand-crest'), 'Lambang MARA mesti wujud');
assert(htmlContent.includes('100% Luar Talian'), 'Lencana "100% Luar Talian" mesti wujud');
assert(htmlContent.includes('id="btn-global-print"'), 'Butang cetak global mesti wujud');

// 8 Tab Navigasi & Tab Panes Mengikut Aliran Stesen Hari Penilaian MAC
const requiredTabs = ['dashboard', 'psychometric', 'fitness', 'essay', 'microteaching', 'interview', 'groupdiscussion', 'docs'];
requiredTabs.forEach(tab => {
  assert(htmlContent.includes(`data-tab="${tab}"`), `Butang navigasi tab "${tab}" mesti wujud`);
  assert(htmlContent.includes(`id="tab-${tab}"`), `Seksyen tab pane "#tab-${tab}" mesti wujud`);
});

// Mount Containers untuk Setiap Modul
const requiredContainers = [
  'psychometric-app',
  'fitness-app',
  'essay-app',
  'microteaching-app',
  'interview-app',
  'groupdiscussion-app',
  'toast-container',
  'modal-doc-viewer',
  'modal-guide'
];
requiredContainers.forEach(containerId => {
  assert(htmlContent.includes(`id="${containerId}"`), `Kontena penting "#${containerId}" mesti wujud`);
});

// Komponen Profil Calon & KPI Dashboard
assert(htmlContent.includes('id="candidate-name-input"'), 'Input nama calon mesti wujud');
assert(htmlContent.includes('id="btn-save-name"'), 'Butang simpan nama calon mesti wujud');
assert(htmlContent.includes('id="candidate-display-tag"'), 'Tag paparan nama calon mesti wujud');
assert(htmlContent.includes('id="kpi-psychometric-status"'), 'KPI psikometrik mesti wujud');
assert(htmlContent.includes('id="kpi-fitness-status"'), 'KPI kecergasan mesti wujud');
assert(htmlContent.includes('id="kpi-microteaching-status"'), 'KPI microteaching mesti wujud');
assert(htmlContent.includes('id="kpi-interview-status"'), 'KPI temuduga mesti wujud');
assert(htmlContent.includes('id="dashboard-checklist"'), 'Senarai semak dokumen mesti wujud');

console.log('✔ Kesemua 8 tab modul, 9 kontena dinamik, profil calon dan KPI wujud dalam DOM index.html.\n');

// ============================================================================
// BAHAGIAN 4: LIPUTAN LEMBARAN GAYA CETAKAN PINTAR (@media print)
// ============================================================================
console.log('--- Bahagian 4: Liputan Lembaran Gaya Cetakan Pintar (@media print) ---');

assert(cssContent.includes('@media print'), 'css/style.css mesti mengandungi blok @media print');
assert(cssContent.includes('size: A4 portrait'), '@media print mesti menetapkan saiz A4 portrait');
assert(cssContent.includes('margin: 15mm') || cssContent.includes('margin: 10mm'), '@media print mesti mempunyai tetapan margin yang kemas');

// Elemen web yang disembunyikan semasa cetakan
const hiddenPrintSelectors = [
  '.main-nav',
  '.header-actions',
  '.btn',
  '.btn-close',
  '.toast-container',
  '.modal-backdrop'
];
hiddenPrintSelectors.forEach(sel => {
  assert(cssContent.includes(sel), `Elemen interaktif "${sel}" mesti disasarkan untuk disembunyikan dalam cetakan`);
});

// Kawalan Paparan Tab Aktif
assert(cssContent.includes('.tab-pane.active'), 'Gaya cetak mesti memaparkan tab pane yang aktif');
assert(cssContent.includes('break-inside: avoid') || cssContent.includes('page-break-inside: avoid'), 'Gaya cetak mesti mengelakkan pemotongan kad antara halaman');

// Butang cetak khusus wujud dalam pelbagai bahagian
const printButtonCount = (htmlContent.match(/btn-print|window\.print\(\)/g) || []).length;
assert(printButtonCount >= 4, `Sekurang-kurangnya 4 butang cetak mesti ada dalam antaramuka, ditemui: ${printButtonCount}`);

console.log('✔ Lembaran cetakan @media print disahkan lengkap (A4 portrait, elemen navigasi disorok, tab aktif dikekalkan).');
console.log(`✔ Disahkan ${printButtonCount} titik butang cetak mesra cetakan merentasi antaramuka.\n`);

// ============================================================================
// BAHAGIAN 5: KETEPATAN FAKTA & PUNCA KUASA DOKUMEN RUJUKAN SAHIH (docs/*.md)
// ============================================================================
console.log('--- Bahagian 5: Integriti Dokumen Rujukan Sahih (docs/*.md) ---');

// Dokumen 1: Fakta & Akta MARA
const doc1 = fs.readFileSync(path.join(projectRoot, 'docs/01_FAKTA_DAN_AKTA_MARA.md'), 'utf8');
assert(doc1.includes('Akta Majlis Amanah Rakyat 1966') || doc1.includes('Akta 249'), 'Dokumen 1 mesti mengandungi Akta 249');
assert(doc1.includes('1 Mac 1966'), 'Dokumen 1 mesti menyatakan tarikh penubuhan 1 Mac 1966');
assert(doc1.includes('RIDA'), 'Dokumen 1 mesti menerangkan asal-usul RIDA');
assert(doc1.includes('Seksyen 6(1)'), 'Dokumen 1 mesti memperincikan Seksyen 6(1)');
assert(doc1.includes('MRSM') && doc1.includes('DG41'), 'Dokumen 1 mesti menyentuh skim DG41 MRSM');

// Dokumen 2: Panduan Bleep Test & SEGAK
const doc2 = fs.readFileSync(path.join(projectRoot, 'docs/02_PANDUAN_BLEEP_TEST_DAN_SEGAK.md'), 'utf8');
assert(doc2.includes('Luc Léger') || doc2.includes('Luc Leger'), 'Dokumen 2 mesti memetik Protokol Luc Léger');
assert(doc2.includes('20 meter') || doc2.includes('20m'), 'Dokumen 2 mesti menyatakan jarak 20 meter');
assert(doc2.includes('VO2') || doc2.includes('VO_2'), 'Dokumen 2 mesti menghuraikan VO2 Max');
assert(doc2.includes('SEGAK'), 'Dokumen 2 mesti mengandungi panduan SEGAK KPM');
assert(doc2.includes('Naik Turun Bangku'), 'Dokumen 2 mesti mengandungi bateri Naik Turun Bangku');
assert(doc2.includes('Tekan Tubi'), 'Dokumen 2 mesti mengandungi bateri Tekan Tubi');
assert(doc2.includes('Ringkuk Tubi Separa'), 'Dokumen 2 mesti mengandungi bateri Ringkuk Tubi Separa');
assert(doc2.includes('Jangkauan Melunjur'), 'Dokumen 2 mesti mengandungi bateri Jangkauan Melunjur');

// Dokumen 3: RPH Lengkap PJPK MRSM
const doc3 = fs.readFileSync(path.join(projectRoot, 'docs/03_RPH_LENGKAP_PJPK_MRSM.md'), 'utf8');
assert(doc3.includes('Futsal') || doc3.includes('Bola Sepak'), 'Dokumen 3 mesti mengandungi RPH Futsal/Bola Sepak');
assert(doc3.includes('Aerobik') || doc3.includes('Karvonen'), 'Dokumen 3 mesti mengandungi RPH Kapasiti Aerobik & Formula Karvonen');
assert(doc3.includes('P.R.I.C.E') || doc3.includes('Pertolongan Cemas'), 'Dokumen 3 mesti mengandungi RPH Pertolongan Cemas P.R.I.C.E');
assert(doc3.includes('Psikomotor') && doc3.includes('Kognitif') && doc3.includes('Afektif'), 'Dokumen 3 mesti menyenaraikan 3 domain objektif');

// Dokumen 4: Bank Soalan Temu Duga DG41
const doc4 = fs.readFileSync(path.join(projectRoot, 'docs/04_BANK_SOALAN_TEMUDUGA_DG41.md'), 'utf8');
assert(doc4.includes('STAR') || doc4.includes('Situation, Task, Action, Result'), 'Dokumen 4 mesti merangkumi teknik STAR');
assert(doc4.includes('25') || doc4.includes('28'), 'Dokumen 4 mesti mengandungi bank soalan temu duga komprehensif');
assert(doc4.includes('Akta 249') || doc4.includes('MARA'), 'Dokumen 4 mesti menyentuh soalan fakta MARA');

// Dokumen 5: Panduan Penulisan Esei MAC (BI & BM)
const doc5 = fs.readFileSync(path.join(projectRoot, 'docs/05_PANDUAN_PENULISAN_ESEI_MAC.md'), 'utf8');
assert(doc5.includes('PEEL') || doc5.includes('P.E.E.L'), 'Dokumen 5 mesti mengandungi kaedah PEEL');
assert(doc5.includes('350') && doc5.includes('500'), 'Dokumen 5 mesti menetapkan sasaran 350-500 patah perkataan');
assert(doc5.includes('MRSM'), 'Dokumen 5 mesti menghuraikan konteks MRSM dan MARA');

// Dokumen 6: Panduan Dinamika Kumpulan (LDK)
const doc6 = fs.readFileSync(path.join(projectRoot, 'docs/06_PANDUAN_LDK_DINAMIKA_KUMPULAN.md'), 'utf8');
assert(doc6.includes('15') && (doc6.includes('minit') || doc6.includes('Minit')), 'Dokumen 6 mesti menyatakan tempoh 15 minit meja bulat');
assert(doc6.includes('Kajian Kes') || doc6.includes('senario'), 'Dokumen 6 mesti mengandungi 5 kajian kes maktab');
assert(doc6.includes('konsensus') || doc6.includes('Konsensus'), 'Dokumen 6 mesti menekankan persepakatan konsensus');

console.log('✔ Kesemua 6 kit nota rujukan sahih menepati rujukan rasmi perundangan, KPM, dan MARA.\n');

// ============================================================================
// BAHAGIAN 6: SIMULASI ALIRAN DATA MERENTAS MODUL & DASHBOARD KPIS
// ============================================================================
console.log('--- Bahagian 6: Simulasi Aliran Data Merentas Modul & Dashboard KPIs ---');

// Mock DOM yang lebih terperinci untuk menguji interaksi merentas modul
class MockDOMElement {
  constructor(id = '', tag = 'div', className = '') {
    this.id = id;
    this.tagName = tag.toUpperCase();
    this.className = className;
    this.style = {};
    this.textContent = '';
    this.innerHTML = '';
    this.value = '';
    this.checked = false;
    this.attributes = {};
    this.classList = {
      classes: new Set(className ? className.split(' ').filter(Boolean) : []),
      add: (c) => this.classList.classes.add(c),
      remove: (c) => this.classList.classes.delete(c),
      contains: (c) => this.classList.classes.has(c),
      toggle: (c, force) => {
        if (force === undefined) {
          if (this.classList.classes.has(c)) this.classList.classes.delete(c);
          else this.classList.classes.add(c);
        } else if (force) {
          this.classList.classes.add(c);
        } else {
          this.classList.classes.delete(c);
        }
      }
    };
    this.listeners = {};
  }
  setAttribute(name, val) { this.attributes[name] = String(val); }
  getAttribute(name) { return this.attributes[name] || null; }
  addEventListener(event, fn) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(fn);
  }
  trigger(event, eventObj = {}) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(fn => fn(eventObj));
    }
  }
}

const mockElements = {
  'candidate-name-input': new MockDOMElement('candidate-name-input', 'input'),
  'btn-save-name': new MockDOMElement('btn-save-name', 'button'),
  'candidate-display-tag': new MockDOMElement('candidate-display-tag', 'span'),
  'kpi-psychometric-status': new MockDOMElement('kpi-psychometric-status', 'div'),
  'kpi-fitness-status': new MockDOMElement('kpi-fitness-status', 'div'),
  'kpi-microteaching-status': new MockDOMElement('kpi-microteaching-status', 'div'),
  'kpi-interview-status': new MockDOMElement('kpi-interview-status', 'div'),
  'toast-container': new MockDOMElement('toast-container', 'div')
};

requiredTabs.forEach(t => {
  const btn = new MockDOMElement(`tab-btn-${t}`, 'button', 'nav-tab');
  btn.setAttribute('data-tab', t);
  mockElements[`tab-btn-${t}`] = btn;

  const pane = new MockDOMElement(`tab-${t}`, 'section', 'tab-pane');
  mockElements[`tab-${t}`] = pane;
});

global.document = {
  getElementById: (id) => mockElements[id] || new MockDOMElement(id),
  querySelectorAll: (selector) => {
    if (selector === '.nav-tab') {
      return requiredTabs.map(t => mockElements[`tab-btn-${t}`]);
    }
    if (selector === '.tab-pane') {
      return requiredTabs.map(t => mockElements[`tab-${t}`]);
    }
    if (selector.includes('.check-box')) {
      return [];
    }
    return [];
  },
  createElement: (tag) => new MockDOMElement('', tag),
  addEventListener: () => {},
  dispatchEvent: () => {}
};

// 1. Simpan Profil Calon
const candidateTestName = 'Ahmad Firdaus bin Ismail';
localStorage.setItem(MACApp.STORAGE_KEYS.CANDIDATE_NAME, candidateTestName);

assert.strictEqual(
  localStorage.getItem(MACApp.STORAGE_KEYS.CANDIDATE_NAME),
  candidateTestName,
  'Nama calon mesti disimpan dalam localStorage ("mac_candidate_name")'
);
console.log(`✔ Pendaftaran profil calon berjaya disimulasikan: "${candidateTestName}".`);

// 2. Simulasi Penyelesaian Ujian Psikometrik (Task 3)
localStorage.setItem(MACApp.STORAGE_KEYS.LAST_PSYCHO_SCORE, '95% (LULUS CEMERLANG)');

// 3. Simulasi Skor Kecergasan Bleep Test & SEGAK (Task 4)
localStorage.setItem(MACApp.STORAGE_KEYS.LAST_BLEEP_LEVEL, 'L8.2 (VO2: 41.2 ml/kg/min)');
localStorage.setItem(MACApp.STORAGE_KEYS.LAST_SEGAK_GRADE, 'Gred A (19/20 - Sangat Cergas)');

// 4. Simulasi Skor Micro-Teaching (Task 5)
localStorage.setItem('mac_microteaching_last_score', '88.5');

// 5. Simulasi Soalan Temu Duga Dilatih (Task 6)
localStorage.setItem(MACApp.STORAGE_KEYS.LAST_INTERVIEW_COUNT, '12');

// 6. Kemaskini Dashboard KPI
MACApp.updateDashboardStats();

assert.strictEqual(
  mockElements['kpi-psychometric-status'].textContent,
  'Skor: 95% (LULUS CEMERLANG)',
  'KPI Psikometrik mesti dikemaskini'
);
assert.strictEqual(
  mockElements['kpi-fitness-status'].textContent,
  'Level: L8.2 (VO2: 41.2 ml/kg/min)',
  'KPI Kecergasan mesti dikemaskini'
);
assert.strictEqual(
  mockElements['kpi-microteaching-status'].textContent,
  'Skor: 88.5%',
  'KPI Microteaching mesti dikemaskini'
);
assert.strictEqual(
  mockElements['kpi-interview-status'].textContent,
  '12 Soalan Dilatih',
  'KPI Temu Duga mesti dikemaskini'
);
console.log('✔ Kesemua 4 penunjuk metrik KPI Dashboard berjaya mencerminkan data dari modul-modul berkaitan.');

// 7. Navigasi Penuh Merentas Semua Tab
requiredTabs.forEach(t => {
  const result = MACApp.switchTab(t);
  assert.strictEqual(result, t, `Navigasi ke "${t}" mesti berjaya`);
  assert.strictEqual(localStorage.getItem('mac_active_tab'), t, `localStorage mac_active_tab mesti "${t}"`);
});
console.log('✔ Kitaran pertukaran tab merentasi kesemua 8 modul berfungsi lancar dengan konsistensi state.\n');

// ============================================================================
// BAHAGIAN 7: PERLAKSANAAN AUTOMATIK KESEMUA 7 UNIT TEST SUITES (100% PASS)
// ============================================================================
console.log('--- Bahagian 7: Perlaksanaan Automatik Semua Unit Test Suis ---');

const testSuites = [
  { file: 'tests/app.test.js', label: 'Task 2: Navigasi UI, Tab & Pengurusan State' },
  { file: 'tests/psychometric.test.js', label: 'Task 3: Simulator Psikometrik MyPersonaliti' },
  { file: 'tests/fitness.test.js', label: 'Task 4: Hab Kecergasan Bleep Test & SEGAK' },
  { file: 'tests/essay.test.js', label: 'Task Esei: Modul Penulisan Esei (BI/BM)' },
  { file: 'tests/microteaching.test.js', label: 'Task 5: Hab Micro-Teaching & RPH DSKP' },
  { file: 'tests/interview.test.js', label: 'Task 6: Simulator Temu Duga Panel & Teknik STAR' },
  { file: 'tests/groupdiscussion.test.js', label: 'Task LDK: Modul Dinamika Kumpulan (LDK)' }
];

testSuites.forEach((suite, idx) => {
  const fullTestPath = path.join(projectRoot, suite.file);
  console.log(`[${idx + 1}/7] Menjalankan ${suite.label} (${suite.file})...`);
  try {
    const output = execSync(`node "${fullTestPath}"`, {
      cwd: projectRoot,
      encoding: 'utf8',
      stdio: 'pipe'
    });
    // Pastikan tiada ralat dalam output
    assert(!output.toLowerCase().includes('fail:'), `Ujian ${suite.file} tidak boleh mengandungi ralat kegagalan.`);
    console.log(`  ✔ LULUS: ${suite.label}`);
  } catch (err) {
    console.error(`  ❌ GAGAL: ${suite.label}`);
    if (err.stdout) console.error(err.stdout);
    if (err.stderr) console.error(err.stderr);
    throw new Error(`Ujian ${suite.file} gagal dilaksanakan: ${err.message}`);
  }
});

console.log('\n================================================================');
console.log('🎉 SEMUA UJIAN INTEGRASI & 7 UNIT TEST SUITES LULUS 100%!');
console.log('   Platform MARA Assessment Centre (MAC) DG41 PJPK Siap Beroperasi.');
console.log('================================================================\n');
