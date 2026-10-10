/**
 * Automated Unit Test for Task 4: Hab Penilaian Pengajaran 10 Minit (Lampiran G1)
 * Aligned 100% with MARA Assessment Centre (MAC) Official PDF Lampiran G1 & Lampiran A (v.300726)
 */

const assert = require('assert');
const path = require('path');

console.log('--- Memulakan Ujian Unit Hab Penilaian Pengajaran (Lampiran G1) ---');

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
    classList: { add: () => {}, remove: () => {} },
    addEventListener: () => {}
  }),
  querySelectorAll: () => []
};

const teachingModule = require(path.join(__dirname, '..', 'js', 'teaching.js'));

// 1. Ujian 12 Kriteria Penilaian Lampiran G1
console.log('Ujian 1: 12 Kriteria Penilaian Rasmi Lampiran G1');
const criteria = teachingModule.TEACHING_CRITERIA_MARA;
assert(Array.isArray(criteria), 'TEACHING_CRITERIA_MARA mesti berbentuk array');
assert.strictEqual(criteria.length, 12, 'Mesti ada tepat 12 kriteria penilaian mengikut Lampiran G1');

const expectedIds = [
  'rph_objektif', 'rph_kandungan',
  'pdp_induksi', 'pdp_kelancaran', 'pdp_kejelasan', 'pdp_suara',
  'pdp_perhatian', 'pdp_penyoalan', 'pdp_bbm', 'pdp_penilaian',
  'pdp_kreativiti', 'pdp_penutup'
];

expectedIds.forEach(id => {
  const found = criteria.find(c => c.id === id);
  assert(found, `Kriteria dengan id "${id}" mesti wujud dalam Lampiran G1`);
});
console.log('✔ Kesemua 12 kriteria penilaian Lampiran G1 disahkan wujud.');

// 2. Ujian Pengiraan Skor & Logik Gred Pilihan vs Gagal
console.log('Ujian 2: Pengiraan Markah & Penentuan Gred (Pilihan 48-60 vs Gagal <48)');

// Kes Cemerlang: Markah 5 untuk setiap 12 kriteria = 60 mata
const perfectScores = {};
expectedIds.forEach(id => { perfectScores[id] = 5; });
const resultPerfect = teachingModule.calculateScore(perfectScores);
assert.strictEqual(resultPerfect.totalScore, 60, 'Jumlah markah sempurna mesti 60');
assert.strictEqual(resultPerfect.decision, 'Pilihan', 'Keputusan bagi 60 markah mesti "Pilihan ( 48 – 60 )"');
assert.strictEqual(resultPerfect.isPass, true, 'isPass mesti true bagi markah 60');

// Kes Sempadan Lulus: Markah 4 bagi setiap kriteria = 48 mata
const borderScores = {};
expectedIds.forEach(id => { borderScores[id] = 4; });
const resultBorder = teachingModule.calculateScore(borderScores);
assert.strictEqual(resultBorder.totalScore, 48, 'Jumlah markah sempadan mesti 48');
assert.strictEqual(resultBorder.decision, 'Pilihan', 'Keputusan bagi 48 markah mesti "Pilihan ( 48 – 60 )"');
assert.strictEqual(resultBorder.isPass, true, 'isPass mesti true bagi markah 48');

// Kes Gagal: Markah 47 mata (< 48)
const failScores = { ...borderScores };
failScores['pdp_penutup'] = 3; // 48 - 1 = 47 mata
const resultFail = teachingModule.calculateScore(failScores);
assert.strictEqual(resultFail.totalScore, 47, 'Jumlah markah mesti 47');
assert.strictEqual(resultFail.decision, 'Gagal', 'Keputusan bagi 47 markah mesti "Gagal ( < 48 )"');
assert.strictEqual(resultFail.isPass, false, 'isPass mesti false bagi markah 47');

console.log('✔ Logik pemarkahan 12 kriteria dan keputusan rasmi MARA disahkan tepat.');

// 3. Ujian Pemasa 10 Minit (Klausa 4.2)
console.log('Ujian 3: Pemasa Pengajaran 10 Minit & Fasa Peringatan');
assert.strictEqual(teachingModule.TEACHING_DURATION_SEC, 600, 'Tempoh pengajaran mesti tepat 10 minit (600 saat)');
assert.strictEqual(teachingModule.WARNING_TIME_SEC, 120, 'Peringatan 2 minit akhir mesti pada baki 120 saat');

console.log('✔ Konfigurasi pemasa 10 minit Lampiran A Klausa 4.2 disahkan.');

// 4. Ujian Validasi RPH Format Bebas
console.log('Ujian 4: Validasi RPH Format Bebas');
const validRph = {
  tajuk: 'Kemahiran Asas Futsal - Hantaran Leret',
  tingkatan: 'Tingkatan 2',
  objektif: 'Murid dapat melakukan sekurang-kurangnya 4 daripada 5 hantaran leret dengan teknik kemas.',
  alatan: '4 biji bola futsal, 10 kon penanda, wisel.',
  setInduksi: 'Aktiviti pemanasan badan dinamik dan tayangan demonstrasi ringkas.',
  perkembangan: 'Latih tubi berpasangan secara ansur maju jarak 3 meter ke 5 meter.',
  penutup: 'Aktiviti menyejukkan badan dan sesi refleksi kognitif.'
};
const rphCheck = teachingModule.validateRPH(validRph);
assert.strictEqual(rphCheck.isValid, true, 'RPH yang lengkap mesti disahkan sah');

console.log('✔ Validasi RPH format bebas lulus 100%.');

console.log('\n============================================================');
console.log('🎉 SEMUA UJIAN HAB PENGAJARAN (LAMPIRAN G1) TELAH LULUS 100%!');
console.log('============================================================\n');
