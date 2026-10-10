/**
 * Automated Unit Test for Task 6: Hab Senarai Semak Dokumen & Panduan Calon (Lampiran A & D)
 * Aligned 100% with MARA Assessment Centre (MAC) Official PDF Lampiran A & Lampiran D (v.300726)
 */

const assert = require('assert');
const path = require('path');

console.log('--- Memulakan Ujian Unit Hab Senarai Semak Dokumen (Lampiran A & D) ---');

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
    checked: false,
    classList: { add: () => {}, remove: () => {} },
    addEventListener: () => {}
  }),
  querySelectorAll: () => []
};

const checklistModule = require(path.join(__dirname, '..', 'js', 'checklist.js'));

// 1. Ujian 10 Dokumen Asal Mengikut Susunan Klausa 1 Lampiran A
console.log('Ujian 1: 10 Dokumen Asal Mengikut Susunan Klausa 1 Lampiran A');
const originalDocs = checklistModule.ORIGINAL_DOCS_MARA;
assert(Array.isArray(originalDocs), 'ORIGINAL_DOCS_MARA mesti berbentuk array');
assert.strictEqual(originalDocs.length, 10, 'Mesti ada tepat 10 dokumen asal dalam Klausa 1');
assert.strictEqual(originalDocs[0].item, '1.1 Sijil Kelahiran');
assert.strictEqual(originalDocs[1].item, '1.2 Sijil SPM');
assert.strictEqual(originalDocs[9].item, '1.10 Sijil Ujian Bahasa Inggeris CEFR – Jika Berkaitan');
console.log('✔ Senarai 10 dokumen asal disusun tepat mengikut Klausa 1 Lampiran A.');

// 2. Ujian 18 Salinan Dokumen Serahan Urus Setia Mengikut Klausa 2 Lampiran A
console.log('Ujian 2: 18 Salinan Dokumen Serahan Urus Setia (Klausa 2 Lampiran A)');
const copyDocs = checklistModule.COPY_DOCS_MARA;
assert(Array.isArray(copyDocs), 'COPY_DOCS_MARA mesti berbentuk array');
assert.strictEqual(copyDocs.length, 18, 'Mesti ada tepat 18 salinan dokumen dalam Klausa 2');

// Periksa salinan spesifik yang kritikal
const g1Doc = copyDocs.find(d => d.code === '2.1');
assert.strictEqual(g1Doc.copies, 2, 'Lampiran G1 mesti 2 salinan mengikut perkara 2.1');

const f1Doc = copyDocs.find(d => d.code === '2.2');
assert.strictEqual(f1Doc.copies, 4, 'Lampiran F1 mesti 4 salinan mengikut perkara 2.2');

const dDoc = copyDocs.find(d => d.code === '2.3');
assert.strictEqual(dDoc.copies, 1, 'Lampiran D mesti 1 salinan mengikut perkara 2.3');

console.log('✔ Bilangan salinan borang rasmi G1 (2), F1 (4), D (1) disahkan tepat mengikut Klausa 2.');

// 3. Ujian Keperluan Dokumen Lain (Klausa 3 Lampiran A)
console.log('Ujian 3: Keperluan Gambar Pasport & Borang E (Klausa 3 Lampiran A)');
const otherDocs = checklistModule.OTHER_DOCS_MARA;
assert.strictEqual(otherDocs.passportPhotos, 8, 'Mesti memerlukan tepat 8 keping gambar berukuran pasport (perkara 3.2)');
assert.strictEqual(otherDocs.lampiranECopies, 1, 'Borang Penilaian Kecergasan Lampiran E mesti 1 salinan (perkara 3.1)');

console.log('✔ Keperluan 8 keping gambar pasport dan Lampiran E disahkan tepat.');

// 4. Ujian Pengiraan Peratusan Kesediaan Fail
console.log('Ujian 4: Pengiraan Peratusan Kesediaan Fail Dokumen');
const allCompleted = {};
originalDocs.forEach(d => { allCompleted[`orig_${d.code}`] = true; });
copyDocs.forEach(d => { allCompleted[`copy_${d.code}`] = true; });

const readinessFull = checklistModule.calculateReadiness(allCompleted);
assert.strictEqual(readinessFull.percentage, 100, 'Peratusan mesti 100% apabila semua ditandakan');
assert.strictEqual(readinessFull.completedCount, 28, 'Jumlah dokumen lengkap mesti 28 (10 asal + 18 salinan)');

console.log('✔ Pengiraan peratusan kesediaan fail dokumen lulus.');

// 5. Ujian Struktur Borang Permohonan Lampiran D (12 Seksyen)
console.log('Ujian 5: 12 Seksyen Borang Permohonan Jawatan Lampiran D');
const formSections = checklistModule.LAMPIRAN_D_SECTIONS;
assert(Array.isArray(formSections), 'LAMPIRAN_D_SECTIONS mesti berbentuk array');
assert.strictEqual(formSections.length, 12, 'Lampiran D mesti mengandungi tepat 12 seksyen');
assert.strictEqual(formSections[0].title, 'SEKSYEN 1 : BUTIRAN PERIBADI');
assert.strictEqual(formSections[11].title, 'SEKSYEN 12 : PENGAKUAN');

console.log('✔ Struktur 12 Seksyen Lampiran D disahkan lengkap.');

console.log('\n============================================================');
console.log('🎉 SEMUA UJIAN HAB SENARAI SEMAK (LAMPIRAN A & D) LULUS 100%!');
console.log('============================================================\n');
