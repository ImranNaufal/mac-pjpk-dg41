/**
 * Test Suite: Simulator Temu Duga Panel MARA (Teknik STAR) - Task 6
 * 
 * Verifikasi:
 * 1. Kewujudan fail js/interview.js & eksport modul.
 * 2. Integriti 28 Soalan Sahih MAC MARA DG41 (Akta 249, MRSM, PJPK, STAR):
 *    - 4 Kategori: mara (7), mrsm (7), pjpk (7), star (7).
 *    - Metadata lengkap: id, category, question, focusArea, starAnswer (S.T.A.R), keywords, pitfalls.
 * 3. Enjin Penapisan Kategori & Carian Teks Pantas:
 *    - filterByCategory: mara, mrsm, pjpk, star, all.
 *    - searchQuestions: carian teks soalan, kata kunci, fokus penilaian.
 * 4. Penjana Sesi Simulasi Temu Duga Seimbang (Mock Session Generator):
 *    - 5 Soalan Seimbang: Sekurang-kurangnya 1 MARA, 1 MRSM, 1 PJPK, 2 STAR.
 *    - Tiada soalan berulang dalam satu sesi.
 * 5. Pemasa Lisan Temu Duga (Oral Response Timer):
 *    - Kawalan pemasa 2 minit (120 saat) & 3 minit (180 saat).
 *    - Format paparan mm:ss & sokongan Web Audio beep fallback.
 * 6. Penilaian Kendiri & Penyimpanan Rekod (localStorage Persistence):
 *    - Rekod penarafan 1-5 bintang & catatan peribadi calon.
 *    - Kiraan kemajuan soalan dilatih daripada 28 soalan.
 *    - Kemaskini penunjuk dashboard 'mac_interview_practiced_count'.
 * 7. Integrasi UI & index.html (#interview-app) & Bebas CDN Luaran.
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('--- Memulakan Ujian Unit: Simulator Temu Duga Panel MARA (Task 6) ---');

// Mock persekitaran localStorage & window
const mockStorage = {};
const mockLocalStorage = {
  getItem: (key) => mockStorage[key] || null,
  setItem: (key, val) => { mockStorage[key] = String(val); },
  removeItem: (key) => { delete mockStorage[key]; },
  clear: () => { Object.keys(mockStorage).forEach(k => delete mockStorage[k]); }
};
global.localStorage = mockLocalStorage;
if (typeof window !== 'undefined') {
  window.localStorage = mockLocalStorage;
}

// ============================================================================
// BAHAGIAN 1: UJIAN KEWUJUDAN FAIL & EKSPORT MODUL
// ============================================================================
console.log('\n--- Ujian 1: Kewujudan Fail & Eksport Modul ---');

const interviewJsPath = path.join(__dirname, '..', 'js', 'interview.js');
const indexHtmlPath = path.join(__dirname, '..', 'index.html');

assert(fs.existsSync(interviewJsPath), 'Fail js/interview.js mesti wujud');
console.log('✔ Fail js/interview.js wujud.');

const InterviewModule = require(interviewJsPath);
assert(InterviewModule, 'Modul InterviewModule mesti dieksport');

const {
  InterviewSimulator,
  INTERVIEW_QUESTIONS,
  InterviewTimer,
  InterviewUI
} = InterviewModule;

assert(typeof InterviewSimulator === 'function' || typeof InterviewSimulator === 'object', 'InterviewSimulator mesti wujud');
assert(Array.isArray(INTERVIEW_QUESTIONS), 'INTERVIEW_QUESTIONS mesti merupakan tatasusunan (Array)');
console.log('✔ Eksport utama InterviewModule (InterviewSimulator, INTERVIEW_QUESTIONS, InterviewTimer, InterviewUI) disahkan.');

// ============================================================================
// BAHAGIAN 2: INTEGRITI 28 SOALAN SAHIH MENGIKUT 4 KATEGORI
// ============================================================================
console.log('\n--- Ujian 2: Integriti 28 Soalan Sahih MAC MARA DG41 ---');

const simulator = typeof InterviewSimulator === 'function' ? new InterviewSimulator() : InterviewSimulator;

const allQuestions = simulator.getAllQuestions ? simulator.getAllQuestions() : INTERVIEW_QUESTIONS;
assert.strictEqual(allQuestions.length, 28, `Jumlah soalan mesti tepat 28 (ditemui: ${allQuestions.length})`);
console.log('✔ Jumlah keseluruhan soalan tepat 28.');

// Semak taburan 4 kategori: mara (7), mrsm (7), pjpk (7), star (7)
const categories = ['mara', 'mrsm', 'pjpk', 'star'];
const categoryCounts = { mara: 0, mrsm: 0, pjpk: 0, star: 0 };

allQuestions.forEach((q, idx) => {
  assert(q.id, `Soalan #${idx + 1} mesti mempunyai id`);
  assert(categories.includes(q.category), `Soalan #${q.id} kategori tidak sah: ${q.category}`);
  categoryCounts[q.category]++;

  assert(typeof q.question === 'string' && q.question.trim().length > 15, `Soalan #${q.id} teks soalan tidak lengkap`);
  assert(typeof q.focusArea === 'string' && q.focusArea.trim().length > 3, `Soalan #${q.id} mesti ada focusArea`);

  // Semak struktur STAR
  assert(q.starAnswer && typeof q.starAnswer === 'object', `Soalan #${q.id} mesti mempunyai objek starAnswer`);
  assert(q.starAnswer.situation && q.starAnswer.situation.trim().length > 10, `Soalan #${q.id} mesti ada Situation (S)`);
  assert(q.starAnswer.task && q.starAnswer.task.trim().length > 10, `Soalan #${q.id} mesti ada Task (T)`);
  assert(q.starAnswer.action && q.starAnswer.action.trim().length > 15, `Soalan #${q.id} mesti ada Action (A)`);
  assert(q.starAnswer.result && q.starAnswer.result.trim().length > 10, `Soalan #${q.id} mesti ada Result (R)`);

  // Semak kata kunci markah tinggi (keywords)
  assert(Array.isArray(q.keywords) && q.keywords.length >= 3, `Soalan #${q.id} mesti mempunyai sekurang-kurangnya 3 kata kunci`);

  // Semak pitfalls
  assert(q.pitfalls, `Soalan #${q.id} mesti mempunyai pitfalls`);
  if (Array.isArray(q.pitfalls)) {
    assert(q.pitfalls.length >= 1, `Soalan #${q.id} mesti ada sekurang-kurangnya 1 pantang larang`);
  } else {
    assert(typeof q.pitfalls === 'string' && q.pitfalls.trim().length > 5, `Soalan #${q.id} pitfalls mesti bermakna`);
  }
});

assert.strictEqual(categoryCounts.mara, 7, `Kategori 'mara' mesti mempunyai tepat 7 soalan, dikira: ${categoryCounts.mara}`);
assert.strictEqual(categoryCounts.mrsm, 7, `Kategori 'mrsm' mesti mempunyai tepat 7 soalan, dikira: ${categoryCounts.mrsm}`);
assert.strictEqual(categoryCounts.pjpk, 7, `Kategori 'pjpk' mesti mempunyai tepat 7 soalan, dikira: ${categoryCounts.pjpk}`);
assert.strictEqual(categoryCounts.star, 7, `Kategori 'star' mesti mempunyai tepat 7 soalan, dikira: ${categoryCounts.star}`);
console.log('✔ Taburan 28 soalan merentasi 4 kategori disahkan (7 mara, 7 mrsm, 7 pjpk, 7 star) beserta struktur STAR lengkap.');

// Semak kandungan penting soalan khusus
const q1 = simulator.getQuestionById(1);
assert(q1.question.includes('Akta 249') || q1.question.includes('ditubuhkan'), 'Soalan 1 mesti berkenaan Akta 249 / penubuhan MARA');
assert(JSON.stringify(q1).includes('1966') || JSON.stringify(q1).includes('RIDA'), 'Soalan 1 mesti mengandungi fakta 1966 atau RIDA');

const q16 = simulator.getQuestionById(16);
assert(q16.question.toLowerCase().includes('bleep test') || q16.question.toLowerCase().includes('rebah'), 'Soalan 16 mesti isu murid rebah / Bleep Test');
assert(JSON.stringify(q16).toUpperCase().includes('CPR') || JSON.stringify(q16).toUpperCase().includes('DRCAB'), 'Soalan 16 mesti mengandungi SOP CPR / DRCAB');

const q22 = simulator.getQuestionById(22);
assert(q22.category === 'star', 'Soalan 22 mesti dalam kategori star');
console.log('✔ Kandungan spesifik soalan temuduga (Akta 249, CPR Bleep Test, Situasi STAR) disahkan tepat.');

// ============================================================================
// BAHAGIAN 3: ENJIN PENAPISAN KATEGORI & CARIAN TEKS PANTAS
// ============================================================================
console.log('\n--- Ujian 3: Penapisan Kategori & Carian Teks Pantas ---');

// 3.1 Penapisan Kategori
const maraQuestions = simulator.filterByCategory('mara');
assert.strictEqual(maraQuestions.length, 7, 'filterByCategory("mara") mesti pulangkan 7 soalan');
assert(maraQuestions.every(q => q.category === 'mara'), 'Semua soalan mesti berkategori mara');

const mrsmQuestions = simulator.filterByCategory('mrsm');
assert.strictEqual(mrsmQuestions.length, 7, 'filterByCategory("mrsm") mesti pulangkan 7 soalan');

const pjpkQuestions = simulator.filterByCategory('pjpk');
assert.strictEqual(pjpkQuestions.length, 7, 'filterByCategory("pjpk") mesti pulangkan 7 soalan');

const starQuestions = simulator.filterByCategory('star');
assert.strictEqual(starQuestions.length, 7, 'filterByCategory("star") mesti pulangkan 7 soalan');

const allFiltered = simulator.filterByCategory('all');
assert.strictEqual(allFiltered.length, 28, 'filterByCategory("all") mesti pulangkan semua 28 soalan');

const semuaFiltered = simulator.filterByCategory('semua');
assert.strictEqual(semuaFiltered.length, 28, 'filterByCategory("semua") mesti pulangkan semua 28 soalan');
console.log('✔ Penapisan mengikut kategori (mara, mrsm, pjpk, star, all/semua) berfungsi dengan betul.');

// 3.2 Carian Teks Pantas
const searchAkta = simulator.searchQuestions('Akta 249');
assert(searchAkta.length >= 1, 'Carian "Akta 249" mesti memulangkan sekurang-kurangnya 1 soalan');
assert(searchAkta.some(q => q.id === 1), 'Carian "Akta 249" mesti merangkumi Soalan 1');

const searchHomeroom = simulator.searchQuestions('Homeroom');
assert(searchHomeroom.length >= 1, 'Carian "Homeroom" mesti memulangkan soalan berkaitan homeroom');

const searchFutsal = simulator.searchQuestions('futsal');
assert(searchFutsal.length >= 1, 'Carian "futsal" mesti mengesan soalan 25 (pergaduhan futsal)');

const searchEmpty = simulator.searchQuestions('');
assert.strictEqual(searchEmpty.length, 28, 'Carian kosong mesti mengembalikan semua 28 soalan');
console.log('✔ Enjin carian teks (soalan, fokus, kata kunci) disahkan tepat dan responsif.');

// ============================================================================
// BAHAGIAN 4: PENJANA SESI SIMULASI TEMU DUGA SEIMBANG (MOCK SESSION)
// ============================================================================
console.log('\n--- Ujian 4: Penjana Sesi Simulasi Temu Duga Seimbang (Mock Session) ---');

// Uji penjanaan sesi 5 soalan (1 MARA + 1 MRSM + 1 PJPK + 2 STAR)
for (let iter = 1; iter <= 10; iter++) {
  const session = simulator.generateMockSession(5);
  assert.strictEqual(session.length, 5, `Sesi #${iter} mesti mengandungi tepat 5 soalan`);

  // Semak tiada soalan berulang
  const ids = session.map(q => q.id);
  const uniqueIds = new Set(ids);
  assert.strictEqual(uniqueIds.size, 5, `Sesi #${iter} tidak boleh mempunyai soalan berulang`);

  // Semak komposisi seimbang
  const cCounts = { mara: 0, mrsm: 0, pjpk: 0, star: 0 };
  session.forEach(q => { cCounts[q.category]++; });

  assert(cCounts.mara >= 1, `Sesi #${iter} mesti mengandungi sekurang-kurangnya 1 soalan MARA (ditemui: ${cCounts.mara})`);
  assert(cCounts.mrsm >= 1, `Sesi #${iter} mesti mengandungi sekurang-kurangnya 1 soalan MRSM (ditemui: ${cCounts.mrsm})`);
  assert(cCounts.pjpk >= 1, `Sesi #${iter} mesti mengandungi sekurang-kurangnya 1 soalan PJPK (ditemui: ${cCounts.pjpk})`);
  assert(cCounts.star >= 2, `Sesi #${iter} mesti mengandungi sekurang-kurangnya 2 soalan situasi STAR (ditemui: ${cCounts.star})`);
}
console.log('✔ Penjana simulasi mock temu duga (1 MARA + 1 MRSM + 1 PJPK + 2 STAR) disahkan seimbang tanpa soalan berulang dalam 10 kali percubaan rawak.');

// ============================================================================
// BAHAGIAN 5: PEMASA LISAN TEMU DUGA (ORAL RESPONSE TIMER)
// ============================================================================
console.log('\n--- Ujian 5: Pemasa Lisan Temu Duga (Oral Response Timer) ---');

const timer = typeof InterviewTimer === 'function' ? new InterviewTimer() : simulator.getTimer();
assert(timer, 'Pemasa temu duga mesti boleh diakses');

// Format masa mm:ss
assert.strictEqual(timer.formatTime(120), '02:00', '120 saat mesti diformat sebagai 02:00');
assert.strictEqual(timer.formatTime(180), '03:00', '180 saat mesti diformat sebagai 03:00');
assert.strictEqual(timer.formatTime(65), '01:05', '65 saat mesti diformat sebagai 01:05');
assert.strictEqual(timer.formatTime(5), '00:05', '5 saat mesti diformat sebagai 00:05');

// Kitaran hayat pemasa
timer.start(120);
assert.strictEqual(timer.isRunning(), true, 'Pemasa mesti berjalan selepas start(120)');
assert.strictEqual(timer.getRemainingSeconds(), 120, 'Baki masa awal mesti 120s');

timer.pause();
assert.strictEqual(timer.isPaused(), true, 'Pemasa mesti dijeda selepas pause()');

timer.resume();
assert.strictEqual(timer.isRunning(), true, 'Pemasa mesti menyambung selepas resume()');

timer.reset(180);
assert.strictEqual(timer.isRunning(), false, 'Pemasa mesti berhenti selepas reset()');
assert.strictEqual(timer.getRemainingSeconds(), 180, 'Baki masa selepas reset(180) mesti 180s');

// Web Audio Beep Fallback
assert.doesNotThrow(() => {
  timer.playBeep();
}, 'Pemanggilan playBeep() tidak boleh menyebabkan exception walaupun dalam persekitaran tanpa audio');
console.log('✔ Kitaran pemasa (start, pause, resume, reset, formatTime, beep fallback) disahkan.');

// ============================================================================
// BAHAGIAN 6: PENILAIAN KENDIRI & PENYIMPANAN REKOD (LOCALSTORAGE)
// ============================================================================
console.log('\n--- Ujian 6: Penilaian Kendiri & Penyimpanan Rekod (localStorage) ---');

simulator.resetRatings();
assert.strictEqual(simulator.getPracticedCount(), 0, 'Bilangan asal latihan kendiri mesti 0');

// Rekod soalan 1 (rating 5, nota mantap)
const rec1 = simulator.recordSelfRating(1, 5, 'Kuasai Seksyen 6(1) Akta 249 dan kaitan PJPK');
assert.strictEqual(rec1.rating, 5, 'Rating mesti 5');
assert.strictEqual(rec1.questionId, 1, 'questionId mesti 1');
assert(rec1.notes.includes('Seksyen 6(1)'), 'Nota mesti disimpan');
assert(rec1.timestamp, 'Mesti ada cap masa timestamp');

// Semak data disimpan dalam localStorage
const savedRec1 = simulator.getSelfRating(1);
assert.strictEqual(savedRec1.rating, 5);
assert.strictEqual(simulator.getPracticedCount(), 1, 'Soalan dilatih kini mesti 1');

// Rekod soalan 22 (rating 4)
simulator.recordSelfRating(22, 4, 'Bagus dalam pembahagian masa matriks Eisenhower');
assert.strictEqual(simulator.getPracticedCount(), 2, 'Soalan dilatih kini mesti 2');

// Semak kemaskini rating soalan sedia ada (tidak tambah count pendua)
simulator.recordSelfRating(1, 4, 'Ulangkaji kali ke-2');
assert.strictEqual(simulator.getPracticedCount(), 2, 'Soalan sama diulang tidak patut tambah kiraan soalan unik');
const updatedRec1 = simulator.getSelfRating(1);
assert.strictEqual(updatedRec1.rating, 4, 'Rating dikemaskini kepada 4');

// Semak pengesahan input rating tidak sah
assert.throws(() => {
  simulator.recordSelfRating(1, 0, 'Invalid rating');
}, /rating tidak sah|invalid rating/i, 'Rating 0 mesti ditolak');

assert.throws(() => {
  simulator.recordSelfRating(1, 6, 'Invalid rating');
}, /rating tidak sah|invalid rating/i, 'Rating 6 mesti ditolak');

// Semak penyimpanan kunci dashboard KPI
const kpiStored = global.localStorage.getItem('mac_interview_practiced_count');
assert.strictEqual(kpiStored, '2', 'Kunci dashboard KPI mac_interview_practiced_count mesti dikemaskini kepada 2');
console.log('✔ Penyimpanan rekod penilaian kendiri, nota, validasi 1-5 bintang, dan KPI dashboard disahkan.');

// ============================================================================
// BAHAGIAN 7: INTEGRASI INDEX.HTML & KONTENA #interview-app
// ============================================================================
console.log('\n--- Ujian 7: Integrasi index.html & Skrip js/interview.js ---');

const htmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

// Semak pautan skrip dalam index.html
assert(
  htmlContent.includes('<script src="js/interview.js"></script>'),
  'index.html mesti mengandungi tag <script src="js/interview.js"></script>'
);
console.log('✔ index.html memuatkan js/interview.js.');

// Semak kontena #interview-app
assert(
  htmlContent.includes('id="interview-app"'),
  'index.html mesti mengandungi kontena #interview-app'
);
console.log('✔ Kontena #interview-app disahkan wujud.');

// Pastikan tiada CDN luaran diselitkan untuk skrip dan stylesheet (100% offline-ready)
assert(!htmlContent.includes('<script src="http'), 'index.html tidak boleh memuatkan skrip luaran melalui CDN');
assert(!htmlContent.includes('<link rel="stylesheet" href="http'), 'index.html tidak boleh memuatkan lembaran gaya luaran melalui CDN');
console.log('✔ Bebas CDN luaran dikekalkan (100% offline-ready).');

console.log('\n============================================================');
console.log('🎉 SEMUA UJIAN SIMULATOR TEMU DUGA (TASK 6) TELAH LULUS 100%!');
console.log('============================================================\n');
