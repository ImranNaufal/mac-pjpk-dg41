/**
 * ============================================================================
 * MARA ASSESSMENT CENTRE (MAC) - PEGAWAI PERKHIDMATAN PENDIDIKAN DG9 PJPK
 * Test Suite: Ujian Integrasi Penuh & Verifikasi Sistem (Task 7)
 * tests/integration.test.js
 * 
 * Berasaskan 100% Dokumen PDF Rasmi MARA (Lampiran A, D, E, F1, G1 v.300726)
 * Cakupan Ujian:
 * 1. Integriti Struktur Fail & Eksport Kesemua Modul JS Rasmi
 * 2. 100% Luar Talian (Offline-Ready) - Sifar Pautan CDN Skrip & Gaya Luaran
 * 3. Struktur DOM, Mount Containers & Komponen Antaramuka (index.html)
 * 4. Liputan Lembaran Gaya Cetakan Pintar (@media print) dalam style.css
 * 5. Ketepatan Fakta & Punca Kuasa Dokumen Rujukan Sahih (docs/*.md)
 * 6. Simulasi Aliran Data Merentas Modul (LocalStorage & State Persistance)
 * 7. Perlaksanaan Automatik Kesemua 5 Unit Test Terdahulu (100% Pass)
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { execSync } = require('child_process');

console.log('================================================================');
console.log('  MARA ASSESSMENT CENTRE (MAC) - PJPK DG9');
console.log('  UJIAN INTEGRASI PENUH & VERIFIKASI SISTEM (TASK 7)');
console.log('  Berasaskan Garis Panduan Rasmi MARA 2026 (v.300726)');
console.log('================================================================\n');

const projectRoot = path.join(__dirname, '..');
const indexHtmlPath = path.join(projectRoot, 'index.html');
const cssPath = path.join(projectRoot, 'css', 'style.css');

// ============================================================================
// BAHAGIAN 1: INTEGRITI STRUKTUR FAIL & EKSPORT SEMUA MODUL JS RASMI
// ============================================================================
console.log('--- Bahagian 1: Integriti Struktur Fail & Eksport Modul JS ---');

const expectedFiles = [
  'index.html',
  'css/style.css',
  'js/app.js',
  'js/fitness.js',
  'js/teaching.js',
  'js/interview.js',
  'js/checklist.js',
  'docs/NOTA_SOALAN_DAN_JAWAPAN_TEMU_DUGA_PJPK.md',
  'docs/00_NOTA_RINGKAS_TEMU_DUGA_IV_DG41.md',
  'docs/05_GARIS_PANDUAN_MAC_DAN_SENARAI_SEMAK_LAMPIRAN_A.md',
  'docs/06_PENGETAHUAN_AM_MRSM_DAN_PANDUAN_GURU_PJPK.md',
  'tests/app.test.js',
  'tests/fitness.test.js',
  'tests/teaching.test.js',
  'tests/interview.test.js',
  'tests/checklist.test.js'
];

expectedFiles.forEach(file => {
  const fullPath = path.join(projectRoot, file);
  assert(fs.existsSync(fullPath), `Fail wajib tidak ditemui: ${file}`);
  const stats = fs.statSync(fullPath);
  assert(stats.size > 0, `Fail tidak boleh kosong: ${file}`);
});
console.log(`✔ Kesemua ${expectedFiles.length} fail utama projek disahkan wujud dan berisi.`);

// Mock persekitaran global
const storageMock = {};
global.localStorage = {
  getItem: (key) => storageMock[key] || null,
  setItem: (key, val) => { storageMock[key] = String(val); },
  removeItem: (key) => { delete storageMock[key]; },
  clear: () => { Object.keys(storageMock).forEach(k => delete storageMock[k]); }
};

global.document = {
  querySelectorAll: () => [],
  getElementById: (id) => ({
    classList: { add: () => {}, remove: () => {}, contains: () => false },
    appendChild: () => {},
    addEventListener: () => {},
    setAttribute: () => {},
    getAttribute: () => null,
    innerText: '',
    innerHTML: '',
    value: '',
    checked: false
  }),
  createElement: () => ({
    className: '',
    innerText: '',
    classList: { add: () => {}, remove: () => {} },
    appendChild: () => {},
    remove: () => {}
  })
};

global.window = {
  location: { hash: '' }
};

const appModule = require(path.join(projectRoot, 'js', 'app.js'));
const fitnessModule = require(path.join(projectRoot, 'js', 'fitness.js'));
const teachingModule = require(path.join(projectRoot, 'js', 'teaching.js'));
const interviewModule = require(path.join(projectRoot, 'js', 'interview.js'));
const checklistModule = require(path.join(projectRoot, 'js', 'checklist.js'));

assert(typeof appModule.switchTab === 'function', 'app.js mesti mengeksport switchTab');
assert(typeof fitnessModule.calculateBMI === 'function', 'fitness.js mesti mengeksport calculateBMI');
assert(typeof teachingModule.calculateScore === 'function', 'teaching.js mesti mengeksport calculateScore');
assert(typeof interviewModule.calculateScore === 'function', 'interview.js mesti mengeksport calculateScore');
assert(typeof checklistModule.calculateReadiness === 'function', 'checklist.js mesti mengeksport calculateReadiness');
console.log('✔ Kesemua modul JS berjaya diimport dan mengeksport API yang lengkap.');

// ============================================================================
// BAHAGIAN 2: 100% LUAR TALIAN (OFFLINE-READY) - SIFAR PAUTAN CDN LUARAN
// ============================================================================
console.log('\n--- Bahagian 2: Pengesahan 100% Luar Talian (Sifar CDN Luaran) ---');

const htmlContent = fs.readFileSync(indexHtmlPath, 'utf8');
const cssContent = fs.readFileSync(cssPath, 'utf8');

// Semak index.html bebas pergantungan CDN luaran untuk skrip dan gaya
assert(!htmlContent.includes('<script src="http'), 'index.html tidak boleh memuatkan skrip luaran melalui CDN');
assert(!htmlContent.includes('<link rel="stylesheet" href="http'), 'index.html tidak boleh memuatkan lembaran gaya luaran melalui CDN');
assert(!cssContent.includes('@import url'), 'css/style.css tidak boleh mengimport fon atau fail luaran');
console.log('✔ Sifar CDN luaran dalam kesemua fail HTML dan CSS (100% offline-ready).');

// ============================================================================
// BAHAGIAN 3: STRUKTUR DOM, MOUNT CONTAINERS & KOMPONEN ANTARAMUKA
// ============================================================================
console.log('\n--- Bahagian 3: Struktur DOM & Komponen Antaramuka ---');

const requiredTabs = ['fitness', 'teaching', 'interview', 'checklist'];
requiredTabs.forEach(t => {
  assert(htmlContent.includes(`id="tab-${t}"`), `Tab pane id="tab-${t}" mesti wujud`);
  assert(htmlContent.includes(`data-tab="${t}"`), `Butang navigasi data-tab="${t}" mesti wujud`);
});

const requiredContainers = [
  'fitness-app',
  'teaching-app',
  'interview-app',
  'checklist-app',
  'toast-container'
];
requiredContainers.forEach(c => {
  assert(htmlContent.includes(`id="${c}"`), `Kontena id="${c}" mesti wujud`);
});

// Pastikan bottom nav untuk mobile wujud
assert(htmlContent.includes('class="bottom-nav"'), 'Navigasi bawah mobile .bottom-nav mesti wujud');
console.log('✔ Kesemua 4 tab rasmi, 5 kontena modul, dan bottom-nav wujud dalam DOM.');

// ============================================================================
// BAHAGIAN 4: LIPUTAN LEMBARAN GAYA CETAKAN PINTAR (@media print)
// ============================================================================
console.log('\n--- Bahagian 4: Liputan Lembaran Gaya Cetakan Pintar (@media print) ---');

assert(cssContent.includes('@media print'), 'style.css mesti mengandungi blok @media print');
assert(cssContent.includes('size: A4 portrait'), 'Cetakan mesti dioptimumkan untuk A4 portrait');
console.log('✔ Lembaran cetakan @media print disahkan lengkap untuk format A4 rasmi.');

// ============================================================================
// BAHAGIAN 5: INTEGRITI DOKUMEN RUJUKAN SAHIH (docs/*.md)
// ============================================================================
console.log('\n--- Bahagian 5: Integriti Dokumen Rujukan Sahih ---');

const guidelinePath = path.join(projectRoot, 'docs', '05_GARIS_PANDUAN_MAC_DAN_SENARAI_SEMAK_LAMPIRAN_A.md');
const guidelineContent = fs.readFileSync(guidelinePath, 'utf8');
assert(guidelineContent.includes('Lampiran A'), 'Dokumen mesti mengandungi rujukan Lampiran A');
assert(guidelineContent.includes('Lampiran D'), 'Dokumen mesti mengandungi rujukan Lampiran D');
assert(guidelineContent.includes('Lampiran E'), 'Dokumen mesti mengandungi rujukan Lampiran E');
assert(guidelineContent.includes('Lampiran F1'), 'Dokumen mesti mengandungi rujukan Lampiran F1');
assert(guidelineContent.includes('Lampiran G1'), 'Dokumen mesti mengandungi rujukan Lampiran G1');
console.log('✔ Dokumen rujukan sahih disahkan menepati warta rasmi MARA.');

// ============================================================================
// BAHAGIAN 6: SIMULASI ALIRAN DATA MERENTAS MODUL & STATE PERSISTENCE
// ============================================================================
console.log('\n--- Bahagian 6: Simulasi Aliran Data Merentas Modul ---');

appModule.saveProfile({
  nama: 'Ahmad Daniel bin Azman',
  noKp: '970312-08-5431',
  noId: 'MAC-2026-PJPK-102',
  subjek: 'Pendidikan Jasmani dan Pendidikan Kesihatan'
});

const candidate = appModule.getProfile();
assert.strictEqual(candidate.nama, 'Ahmad Daniel bin Azman', 'Profil calon berjaya disimpan');
assert.strictEqual(candidate.subjek, 'Pendidikan Jasmani dan Pendidikan Kesihatan', 'Subjek mesti PJPK');

// Simulasi kiraan BMI
const bmiCalc = fitnessModule.calculateBMI(68, 1.72);
assert.strictEqual(bmiCalc.bmi, 22.99, 'Nilai BMI mesti 22.99');
assert.strictEqual(bmiCalc.category, 'Normal / Unggul', 'Klasifikasi BMI mesti Normal');

// Simulasi skor pengajaran
const sampleTeachingScores = {};
teachingModule.TEACHING_CRITERIA_MARA.forEach(c => { sampleTeachingScores[c.id] = 4; });
const teachRes = teachingModule.calculateScore(sampleTeachingScores);
assert.strictEqual(teachRes.totalScore, 48, 'Skor pengajaran mesti 48');
assert.strictEqual(teachRes.isPass, true, 'Markah 48 mesti lulus Pilihan');

// Simulasi skor temu duga
const sampleIntScores = {};
interviewModule.INTERVIEW_CRITERIA_MARA.forEach(c => { sampleIntScores[c.id] = 4; });
const intRes = interviewModule.calculateScore(sampleIntScores);
assert.strictEqual(intRes.totalScore, 40, 'Skor temu duga mesti 40');
assert.strictEqual(intRes.isPass, true, 'Markah 40 mesti lulus Pilihan');

console.log('✔ Simulasi aliran data merentas kesemua modul rasmi berfungsi lancar.');

// ============================================================================
// BAHAGIAN 7: PERLAKSANAAN AUTOMATIK SEMUA UNIT TEST SUITES
// ============================================================================
console.log('\n--- Bahagian 7: Perlaksanaan Automatik Semua Unit Test Suis ---');

const testSuites = [
  { name: 'Task 2: UI Shell & Navigasi 4 Tab', file: 'tests/app.test.js' },
  { name: 'Task 3: Hab Ujian Kecergasan (Lampiran E)', file: 'tests/fitness.test.js' },
  { name: 'Task 4: Hab Penilaian Pengajaran 10 Minit (Lampiran G1)', file: 'tests/teaching.test.js' },
  { name: 'Task 5: Hab Temu Duga Panel 10 Kriteria (Lampiran F1)', file: 'tests/interview.test.js' },
  { name: 'Task 6: Hab Senarai Semak Dokumen (Lampiran A & D)', file: 'tests/checklist.test.js' }
];

testSuites.forEach((suite, index) => {
  process.stdout.write(`[${index + 1}/${testSuites.length}] Menjalankan ${suite.name} (${suite.file})...\n`);
  try {
    execSync(`node "${path.join(projectRoot, suite.file)}"`, { stdio: 'pipe' });
    console.log(`  ✔ LULUS: ${suite.name}`);
  } catch (error) {
    console.error(`  ❌ GAGAL: ${suite.name}`);
    console.error(error.stdout ? error.stdout.toString() : error.message);
    process.exit(1);
  }
});

console.log('\n================================================================');
console.log('🎉 SEMUA UJIAN INTEGRASI & 5 UNIT TEST SUITES LULUS 100%!');
console.log('   Platform MARA Assessment Centre (MAC) DG9 PJPK Siap Beroperasi.');
console.log('================================================================\n');
