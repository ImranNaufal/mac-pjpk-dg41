/**
 * Automated Unit Test for Task 5: Hab Temu Duga Panel 10 Kriteria (Lampiran F1)
 * Aligned 100% with MARA Assessment Centre (MAC) Official PDF Lampiran F1 & Lampiran A (v.300726)
 */

const assert = require('assert');
const path = require('path');

console.log('--- Memulakan Ujian Unit Hab Temu Duga Panel (Lampiran F1) ---');

// Mock DOM & storage
const storageMock = {};
global.localStorage = {
  getItem: (k) => storageMock[k] || null,
  setItem: (k, v) => { storageMock[k] = String(v); },
  removeItem: (k) => { delete storageMock[k]; }
};

global.document = {
  getElementById: (id) => ({
    value: '',
    innerText: '',
    innerHTML: '',
    style: {},
    classList: { add: () => {}, remove: () => {}, toggle: () => {} },
    addEventListener: () => {}
  }),
  querySelectorAll: () => []
};

const interviewModule = require(path.join(__dirname, '..', 'js', 'interview.js'));

// 1. Ujian 10 Kriteria Penilaian Lampiran F1
console.log('Ujian 1: 10 Kriteria Penilaian Rasmi Lampiran F1 MARA');
const criteria = interviewModule.INTERVIEW_CRITERIA_MARA;
assert(Array.isArray(criteria), 'INTERVIEW_CRITERIA_MARA mesti berbentuk array');
assert.strictEqual(criteria.length, 10, 'Mesti ada tepat 10 kriteria penilaian mengikut Lampiran F1');

const expectedIds = [
  'crit_penampilan', 'crit_kelayakan', 'crit_sikap',
  'crit_komunikasi', 'crit_keyakinan', 'crit_menggerak',
  'crit_interpersonal', 'crit_analitikal', 'crit_inovasi',
  'crit_merancang'
];

expectedIds.forEach((id, idx) => {
  const found = criteria.find(c => c.id === id);
  assert(found, `Kriteria ${idx + 1} dengan id "${id}" mesti wujud`);
  assert.strictEqual(found.number, idx + 1, `Nombor kriteria mesti ${idx + 1}`);
});
console.log('✔ Kesemua 10 kriteria penilaian rasmi Lampiran F1 disahkan wujud.');

// 2. Ujian Pengiraan Markah & Penentuan Gred (Pilihan 40-50 vs Gagal <40)
console.log('Ujian 2: Pengiraan Markah & Keputusan Rasmi MARA (Pilihan 40-50 vs Gagal <40)');

// Kes Cemerlang: Markah 5 bagi kesemua 10 kriteria = 50 mata
const perfectScores = {};
expectedIds.forEach(id => { perfectScores[id] = 5; });
const resultPerfect = interviewModule.calculateScore(perfectScores);
assert.strictEqual(resultPerfect.totalScore, 50, 'Jumlah markah sempurna mesti 50');
assert.strictEqual(resultPerfect.decision, 'Pilihan', 'Keputusan bagi 50 markah mesti "Pilihan ( 40 – 50 )"');
assert.strictEqual(resultPerfect.isPass, true, 'isPass mesti true bagi markah 50');

// Kes Sempadan Lulus: Markah 4 bagi kesemua 10 kriteria = 40 mata
const borderScores = {};
expectedIds.forEach(id => { borderScores[id] = 4; });
const resultBorder = interviewModule.calculateScore(borderScores);
assert.strictEqual(resultBorder.totalScore, 40, 'Jumlah markah sempadan mesti 40');
assert.strictEqual(resultBorder.decision, 'Pilihan', 'Keputusan bagi 40 markah mesti "Pilihan ( 40 – 50 )"');
assert.strictEqual(resultBorder.isPass, true, 'isPass mesti true bagi markah 40');

// Kes Gagal: Markah 39 mata (< 40)
const failScores = { ...borderScores };
failScores['crit_merancang'] = 3; // 40 - 1 = 39 mata
const resultFail = interviewModule.calculateScore(failScores);
assert.strictEqual(resultFail.totalScore, 39, 'Jumlah markah mesti 39');
assert.strictEqual(resultFail.decision, 'Gagal', 'Keputusan bagi 39 markah mesti "Gagal ( < 40 )"');
assert.strictEqual(resultFail.isPass, false, 'isPass mesti false bagi markah 39');

console.log('✔ Logik pemarkahan 10 kriteria dan gred keputusan rasmi MARA disahkan tepat.');

// 3. Ujian Pemasa Temu Duga Kumpulan 30 Minit (Klausa 4.2)
console.log('Ujian 3: Pemasa Temu Duga Kumpulan 30 Minit (Klausa 4.2)');
assert.strictEqual(interviewModule.INTERVIEW_DURATION_SEC, 1800, 'Tempoh temu duga mesti tepat 30 minit (1800 saat)');
console.log('✔ Konfigurasi pemasa 30 minit Lampiran A Klausa 4.2 disahkan.');

// 4. Ujian Integriti Bank 35 Soalan Temu Duga DG41
console.log('Ujian 4: Integriti Bank 35 Soalan Temu Duga DG41');
const questions = interviewModule.INTERVIEW_QUESTIONS;
assert(Array.isArray(questions), 'INTERVIEW_QUESTIONS mesti berbentuk array');
assert.strictEqual(questions.length, 35, 'Mesti ada tepat 35 soalan dalam bank soalan temu duga');

const categoryCounts = { mara: 0, mrsm: 0, pjpk: 0, star: 0, spot: 0 };
questions.forEach(q => {
  assert(q.id >= 1 && q.id <= 35, `ID soalan mesti antara 1 dan 35 (dijumpai: ${q.id})`);
  assert(q.category && ['mara', 'mrsm', 'pjpk', 'star', 'spot'].includes(q.category), `Kategori tidak sah: ${q.category}`);
  categoryCounts[q.category]++;

  // Sahkan struktur STAR
  assert(q.question && q.question.length > 10, `Teks soalan #${q.id} tidak lengkap`);
  assert(q.focusArea && q.focusArea.length > 5, `Fokus utama #${q.id} tidak lengkap`);
  assert(q.starAnswer, `starAnswer untuk soalan #${q.id} mesti wujud`);
  assert(q.starAnswer.situation && q.starAnswer.situation.length > 10, `Situation #${q.id} tidak lengkap`);
  assert(q.starAnswer.task && q.starAnswer.task.length > 10, `Task #${q.id} tidak lengkap`);
  assert(q.starAnswer.action && q.starAnswer.action.length > 20, `Action #${q.id} tidak lengkap`);
  assert(q.starAnswer.result && q.starAnswer.result.length > 10, `Result #${q.id} tidak lengkap`);

  // Sahkan kata kunci & perangkap
  assert(Array.isArray(q.keywords) && q.keywords.length >= 2, `Keywords #${q.id} mesti ada sekurang-kurangnya 2`);
  assert(Array.isArray(q.pitfalls) && q.pitfalls.length >= 1, `Pitfalls #${q.id} mesti ada sekurang-kurangnya 1`);
});

assert.strictEqual(categoryCounts.mara, 7, 'Kategori "mara" mesti mengandungi tepat 7 soalan');
assert.strictEqual(categoryCounts.mrsm, 7, 'Kategori "mrsm" mesti mengandungi tepat 7 soalan');
assert.strictEqual(categoryCounts.pjpk, 7, 'Kategori "pjpk" mesti mengandungi tepat 7 soalan');
assert.strictEqual(categoryCounts.star, 7, 'Kategori "star" mesti mengandungi tepat 7 soalan');
assert.strictEqual(categoryCounts.spot, 7, 'Kategori "spot" mesti mengandungi tepat 7 soalan');

// Sahkan kesemua 35 soalan mempunyai skrip jawapan lisan terus (DIRECT_SPOKEN_SCRIPTS)
const directScripts = interviewModule.DIRECT_SPOKEN_SCRIPTS;
assert(directScripts && typeof directScripts === 'object', 'DIRECT_SPOKEN_SCRIPTS mesti wujud');
for (let i = 1; i <= 35; i++) {
  assert(typeof directScripts[i] === 'string' && directScripts[i].length > 50, `Skrip jawapan terus untuk Soalan #${i} mesti lengkap`);
}
console.log('✔ Kesemua 35 soalan merentasi 5 kategori rasmi mempunyai Skrip Jawapan Lisan Terus & format STAR lengkap.');

// 5. Ujian Eksport Fungsi Interaktif Bank Soalan
console.log('Ujian 5: Eksport Fungsi Interaktif Bank Soalan');
const requiredMethods = [
  'calculateScore', 'handleScoreChange', 'startTimer', 'pauseTimer', 'resetTimer',
  'setCategoryFilter', 'handleSearchInput', 'clearSearch', 'toggleQuestionAccordion',
  'toggleAllQuestions', 'togglePracticed', 'copyQuestionText', 'startOralTimer',
  'stopOralTimer', 'resetOralTimer', 'switchSubView', 'toggleQuickNotes', 'render'
];
requiredMethods.forEach(method => {
  assert.strictEqual(typeof interviewModule[method], 'function', `Fungsi "${method}" mesti dieksport`);
});
console.log(`✔ Kesemua ${requiredMethods.length} fungsi pengurusan temu duga dan bank soalan disahkan dieksport.`);

console.log('\n============================================================');
console.log('🎉 SEMUA UJIAN HAB TEMU DUGA & BANK SOALAN TELAH LULUS 100%!');
console.log('============================================================\n');

