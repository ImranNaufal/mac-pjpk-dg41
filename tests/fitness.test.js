/**
 * Automated Unit Test for Task 3: Hab Ujian Kecergasan (Lampiran E)
 * Aligned 100% with MARA Assessment Centre (MAC) Official PDF Lampiran E v.300726
 */

const assert = require('assert');
const path = require('path');

console.log('--- Memulakan Ujian Unit Hab Kecergasan Lampiran E (BMI & Bleep Test) ---');

// Mock localStorage & DOM
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

const fitnessModule = require(path.join(__dirname, '..', 'js', 'fitness.js'));

// 1. Ujian Pengiraan BMI mengikut Formula Rasmi Lampiran E
console.log('Ujian 1: Formula BMI Rasmi Lampiran E');
const bmiResult = fitnessModule.calculateBMI(70, 1.75);
assert.strictEqual(bmiResult.bmi, 22.86, 'Nilai BMI mesti 22.86 bagi berat 70kg dan tinggi 1.75m');
assert.strictEqual(bmiResult.category, 'Normal / Unggul', 'Klasifikasi BMI 22.86 mesti Normal / Unggul');

const bmiOver = fitnessModule.calculateBMI(85, 1.70);
assert.strictEqual(bmiOver.bmi, 29.41, 'Nilai BMI mesti 29.41 bagi 85kg dan 1.70m');
assert.strictEqual(bmiOver.category, 'Berlebihan Berat Badan', 'Klasifikasi BMI 29.41 mesti Berlebihan Berat Badan');

const bmiUnder = fitnessModule.calculateBMI(45, 1.65);
assert.strictEqual(bmiUnder.bmi, 16.53, 'Nilai BMI mesti 16.53 bagi 45kg dan 1.65m');
assert.strictEqual(bmiUnder.category, 'Kurang Berat Badan', 'Klasifikasi BMI 16.53 mesti Kurang Berat Badan');

console.log('✔ Pengiraan BMI dan klasifikasi kesihatan lulus 100%.');

// 2. Ujian Jadual Bleep Test 10 Peringkat Lampiran E MARA
console.log('Ujian 2: Jadual Pusingan Bleep Test Rasmi MARA (Lampiran E)');
const bleepTable = fitnessModule.BLEEP_TABLE_MARA;
assert(Array.isArray(bleepTable), 'BLEEP_TABLE_MARA mesti berbentuk array');
assert.strictEqual(bleepTable.length, 10, 'Jadual Bleep Test mesti mempunyai tepat 10 Peringkat mengikut Lampiran E');

const expectedShuttles = [7, 8, 8, 9, 9, 10, 10, 11, 11, 11];
let totalShuttles = 0;
bleepTable.forEach((lvl, idx) => {
  assert.strictEqual(lvl.level, idx + 1, `Peringkat indeks ${idx} mesti nombor ${idx + 1}`);
  assert.strictEqual(lvl.shuttles, expectedShuttles[idx], `Peringkat ${idx + 1} mesti mempunyai ${expectedShuttles[idx]} pusingan`);
  totalShuttles += lvl.shuttles;
});

assert.strictEqual(totalShuttles, 94, 'Jumlah keseluruhan pusingan Bleep Test Lampiran E MARA mesti 94 pusingan');
console.log(`✔ Jadual 10 Peringkat disahkan tepat mengikut Lampiran E (Jumlah: ${totalShuttles} pusingan).`);

// 3. Ujian Sela Masa & Kelajuan Bleep Test
console.log('Ujian 3: Penentukuran Kelajuan & Sela Masa Bip');
assert.strictEqual(bleepTable[0].speedKmH, 8.5, 'Peringkat 1 bermula pada kelajuan 8.5 km/j');
assert(bleepTable[0].intervalSec > 8.4 && bleepTable[0].intervalSec < 8.6, 'Sela masa Peringkat 1 sekitar 8.47 saat (20 meter pada 8.5 km/j)');
assert.strictEqual(bleepTable[9].speedKmH, 13.0, 'Peringkat 10 mencapai kelajuan 13.0 km/j');

console.log('✔ Sela kelajuan Bleep Test disahkan tepat mengikut protokol 20 meter.');

// 4. Ujian Pengecualian Kesihatan & Mengandung (Klausa 3.3 & 3.4)
console.log('Ujian 4: Semakan Status Pengecualian Kesihatan');
const excPregnant = fitnessModule.checkExemption({ isPregnant: true, medicalCondition: '' });
assert.strictEqual(excPregnant.exempted, true, 'Calon mengandung dikecualikan mengikut Klausa 3.4');
assert(excPregnant.reason.includes('Buku Rekod Kesihatan Ibu'), 'Syarat dokumen mesti menyatakan Buku Rekod Kesihatan Ibu');

const excMedical = fitnessModule.checkExemption({ isPregnant: false, medicalCondition: 'Asma Kronik' });
assert.strictEqual(excMedical.exempted, true, 'Calon bermasalah kesihatan dikecualikan mengikut Klausa 3.3');

console.log('✔ Logik pengecualian kesihatan Lampiran A Klausa 3.3 & 3.4 lulus.');

console.log('\n============================================================');
console.log('🎉 SEMUA UJIAN HAB KECERGASAN (LAMPIRAN E) TELAH LULUS 100%!');
console.log('============================================================\n');
