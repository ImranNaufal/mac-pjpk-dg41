/**
 * Test Suite: Enjin Simulator Ujian Psikometrik (MyPersonaliti & Integriti)
 * Task 3 Verification: Scoring Engine, Consistency/Lie Scale Detection, Timer & Questions Bank
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('--- Memulakan Ujian Unit: Enjin Psikometrik (MyPersonaliti & Integriti) ---');

// 1. Ujian Kewujudan Fail
const engineFilePath = path.join(__dirname, '..', 'js', 'psychometric.js');
const indexHtmlPath = path.join(__dirname, '..', 'index.html');

assert(fs.existsSync(engineFilePath), 'Fail js/psychometric.js mesti wujud');
console.log('✔ Fail js/psychometric.js wujud.');

// 2. Muat Turun Modul
const PsychometricModule = require(engineFilePath);
const PsychometricEngine = PsychometricModule.PsychometricEngine || PsychometricModule;

assert(typeof PsychometricEngine === 'function' || typeof PsychometricEngine === 'object', 'PsychometricEngine mesti dieksport sebagai fungsi kelas atau objek.');
console.log('✔ PsychometricEngine berjaya diimport.');

// Inisialisasi Enjin
const engine = typeof PsychometricEngine === 'function' ? new PsychometricEngine() : PsychometricEngine;

// 3. Ujian Bank Soalan & Liputan Domain
console.log('\n--- Ujian 1: Bank Soalan & Domain ---');
const questions = typeof engine.getQuestions === 'function' ? engine.getQuestions() : engine.questions;
assert(Array.isArray(questions), 'Bank soalan mesti dalam bentuk array.');
assert(questions.length >= 30, `Bank soalan mesti sekurang-kurangnya 30 soalan, ditemui: ${questions.length}`);

const EXPECTED_DOMAINS = ['integrity', 'emotional', 'leadership', 'interpersonal', 'resilience'];
const domainCounts = { integrity: 0, emotional: 0, leadership: 0, interpersonal: 0, resilience: 0 };

questions.forEach((q, idx) => {
  assert(q.id !== undefined, `Soalan #${idx + 1} mesti mempunyai id.`);
  assert(typeof q.text === 'string' && q.text.length > 15, `Soalan #${q.id} mesti mempunyai teks situasi yang bermakna.`);
  assert(EXPECTED_DOMAINS.includes(q.domain), `Soalan #${q.id} domain tidak sah: ${q.domain}`);
  assert(typeof q.reverse === 'boolean', `Soalan #${q.id} mesti mempunyai flag reverse (boolean).`);
  domainCounts[q.domain]++;
});

EXPECTED_DOMAINS.forEach(dom => {
  assert(domainCounts[dom] >= 5, `Domain ${dom} mesti mempunyai sekurang-kurangnya 5 soalan (ditemui: ${domainCounts[dom]})`);
});
console.log(`✔ Kesemua 5 domain disahkan lengkap dengan ${questions.length} soalan situasi.`);

// 4. Ujian Sistem Pengesanan Konsistensi / Soalan Perangkap (Lie Scale)
console.log('\n--- Ujian 2: Pasangan Soalan Perangkap (Cross-Check Trap Scale) ---');
const trapPairs = typeof engine.getTrapPairs === 'function' ? engine.getTrapPairs() : engine.trapPairs;
assert(Array.isArray(trapPairs), 'trapPairs mesti dalam bentuk array.');
assert(trapPairs.length >= 4, `Mesti ada sekurang-kurangnya 4 pasang soalan cross-check trap (ditemui: ${trapPairs.length}).`);

trapPairs.forEach((pair, idx) => {
  assert(pair.q1 !== undefined && pair.q2 !== undefined, `Pasangan #${idx + 1} mesti mengandungi q1 dan q2.`);
  const qA = questions.find(q => q.id === pair.q1);
  const qB = questions.find(q => q.id === pair.q2);
  assert(qA, `Soalan q1 id ${pair.q1} tidak dijumpai dalam bank soalan.`);
  assert(qB, `Soalan q2 id ${pair.q2} tidak dijumpai dalam bank soalan.`);
  assert(typeof pair.description === 'string', `Pasangan #${idx + 1} mesti ada deskripsi kriteria integriti.`);
});
console.log(`✔ ${trapPairs.length} pasangan soalan perangkap (cross-check) disahkan sah dan wujud.`);

// 5. Ujian Kitaran Ujian & Pemasa (Exam Lifecycle & Timer)
console.log('\n--- Ujian 3: Kitaran Ujian & Pemasa ---');
engine.resetExam();
assert.strictEqual(engine.isExamActive(), false, 'Ujian tidak sepatutnya aktif selepas reset.');

engine.startExam(30);
assert.strictEqual(engine.isExamActive(), true, 'Ujian mesti aktif selepas startExam(30).');
assert.strictEqual(engine.getRemainingSeconds(), 30 * 60, 'Masa permulaan mesti bersamaan 1800 saat (30 minit).');

// Format masa pemasa
assert.strictEqual(engine.formatTime(1800), '30:00', '1800 saat mesti diformat sebagai "30:00".');
assert.strictEqual(engine.formatTime(299), '04:59', '299 saat mesti diformat sebagai "04:59".');
assert.strictEqual(engine.formatTime(45), '00:45', '45 saat mesti diformat sebagai "00:45".');
console.log('✔ Pemasa dan format masa berfungsi.');

// 6. Ujian Penskoran: Calon Cemerlang & Konsisten
console.log('\n--- Ujian 4: Penskoran Calon Cemerlang & Konsisten ---');
engine.resetExam();
engine.startExam(30);

// Berikan jawapan ideal untuk setiap soalan:
// Jika reverse = false -> 4 (Sangat Setuju)
// Jika reverse = true  -> 1 (Sangat Tidak Setuju)
questions.forEach(q => {
  const idealAnswer = q.reverse ? 1 : 4;
  engine.submitAnswer(q.id, idealAnswer);
});

const idealResult = engine.calculateScore();
assert(idealResult.overallScore >= 90, `Skor keseluruhan ideal mesti >= 90%, dapat: ${idealResult.overallScore}`);
assert.strictEqual(idealResult.consistencyIndex, 100, `Indeks konsistensi ideal mesti 100%, dapat: ${idealResult.consistencyIndex}`);
assert.strictEqual(idealResult.lieScore, 0, `Skor pembohongan/perangkap ideal mesti 0, dapat: ${idealResult.lieScore}`);
assert.strictEqual(idealResult.status, 'LULUS CEMERLANG', `Status ideal mesti 'LULUS CEMERLANG', dapat: ${idealResult.status}`);
EXPECTED_DOMAINS.forEach(dom => {
  assert(idealResult.domainScores[dom] >= 90, `Domain ${dom} ideal mesti >= 90%`);
});
console.log('✔ Calon jujur dan berintegriti tinggi memperolehi status LULUS CEMERLANG dengan konsistensi 100%.');

// 7. Ujian Pengesanan Jawapan Bercanggah / Hipokrit (Lie Scale Contradiction)
console.log('\n--- Ujian 5: Pengesanan Jawapan Bercanggah / Hipokrit (Trap / Lie Scale) ---');
engine.resetExam();
engine.startExam(30);

// Calon menjawab skor tinggi untuk soalan normal, TETAPI juga menjawab skor tinggi untuk soalan songsang/perangkap
// Contoh: Mengaku sangat berintegriti (Q1: 4), tetapi mengaku sanggup palsukan rekod jika ditekan (Q16: 4)
questions.forEach(q => {
  // Calon sentiasa memilih 4 untuk SEMUA soalan tanpa membaca (faking good / reckless agreement)
  engine.submitAnswer(q.id, 4);
});

const inconsistentResult = engine.calculateScore();
assert(inconsistentResult.consistencyIndex < 60, `Indeks konsistensi mesti jatuh bawah 60% jika bercanggah, dapat: ${inconsistentResult.consistencyIndex}`);
assert(inconsistentResult.lieScore > 0, `Skor perangkap/lieScore mesti > 0, dapat: ${inconsistentResult.lieScore}`);
assert.strictEqual(inconsistentResult.status, 'DIRAGUI (TIDAK KONSISTEN)', `Status calon bercanggah mesti 'DIRAGUI (TIDAK KONSISTEN)', dapat: ${inconsistentResult.status}`);
assert(Array.isArray(inconsistentResult.detailedFeedback) && inconsistentResult.detailedFeedback.length > 0, 'detailedFeedback mesti melaporkan percanggahan jawapan.');
console.log(`✔ Sistem berjaya mengesan calon hipokrit/bercanggah (Konsistensi: ${inconsistentResult.consistencyIndex}%, Status: ${inconsistentResult.status}).`);

// 8. Ujian Calon Skor Rendah (Perlu Perbaikan)
console.log('\n--- Ujian 6: Calon Skor Rendah (PERLU PERBAIKAN) ---');
engine.resetExam();
engine.startExam(30);

// Calon menjawab jawapan bertentangan dengan etika keguruan secara konsisten rendah
questions.forEach(q => {
  const badAnswer = q.reverse ? 4 : 1;
  engine.submitAnswer(q.id, badAnswer);
});

const lowResult = engine.calculateScore();
assert(lowResult.overallScore < 50, `Skor calon rendah mesti < 50%, dapat: ${lowResult.overallScore}`);
assert.strictEqual(lowResult.status, 'PERLU PERBAIKAN', `Status calon rendah mesti 'PERLU PERBAIKAN', dapat: ${lowResult.status}`);
console.log('✔ Calon markah rendah berjaya diklasifikasikan sebagai PERLU PERBAIKAN.');

// 9. Ujian Integrasi UI dalam `#psychometric-app`
console.log('\n--- Ujian 7: Struktur UI & Integrasi DOM ---');
const indexContent = fs.readFileSync(indexHtmlPath, 'utf8');
assert(indexContent.includes('id="psychometric-app"'), 'Kontena #psychometric-app mesti wujud dalam index.html');
assert(indexContent.includes('js/psychometric.js'), 'index.html mesti memuatkan skrip js/psychometric.js');

engine.resetExam();
console.log('\n--- SEMUA UJIAN PSIKOMETRIK LULUS DENGAN CEMERLANG! ---');

