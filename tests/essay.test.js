/**
 * tests/essay.test.js
 * Unit Test Suite: Modul Penulisan Esei MAC MARA DG41
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('--- Memulakan Ujian Unit: Modul Penulisan Esei (Essay Hub) ---');

// 1. Ujian Kewujudan Fail
const essayFilePath = path.join(__dirname, '../js/essay.js');
assert.ok(fs.existsSync(essayFilePath), 'Fail js/essay.js mesti wujud.');
console.log('✔ Fail js/essay.js wujud.');

// 2. Eksport & Muatan Modul dalam Node.js
const mockLocalStorage = {
  store: {},
  getItem(k) { return this.store[k] || null; },
  setItem(k, v) { this.store[k] = String(v); },
  removeItem(k) { delete this.store[k]; }
};

const mockWindow = {
  localStorage: mockLocalStorage,
  AudioContext: class {
    createOscillator() {
      return {
        type: 'sine',
        frequency: { setValueAtTime() {} },
        connect() {},
        start() {},
        stop() {}
      };
    }
    createGain() {
      return {
        gain: { setValueAtTime() {}, exponentialRampToValueAtTime() {} },
        connect() {}
      };
    }
    close() {}
  }
};

const scriptCode = fs.readFileSync(essayFilePath, 'utf8');
const moduleFn = new Function('window', 'global', scriptCode);
moduleFn(mockWindow, mockWindow);

const EssayModule = mockWindow.MACEssayModule;
assert.ok(EssayModule, 'MACEssayModule mesti dieksport.');
const { ESSAY_TOPICS, EssayEngine, EssayTimer, EssayUI } = EssayModule;
assert.ok(Array.isArray(ESSAY_TOPICS), 'ESSAY_TOPICS mesti berupa array.');
assert.strictEqual(ESSAY_TOPICS.length, 5, 'Mesti mengandungi tepat 5 tajuk esei autentik.');
console.log('✔ Modul js/essay.js berjaya dimuatkan dengan 5 tajuk autentik.');

// 3. Ujian Integriti 5 Tajuk Esei & Model Essays
const engine = new EssayEngine();
ESSAY_TOPICS.forEach(topic => {
  assert.ok(topic.id, 'Setiap tajuk mesti mempunyai ID unik.');
  assert.ok(topic.title, 'Setiap tajuk mesti mempunyai tajuk.');
  assert.ok(topic.language, 'Setiap tajuk mesti menyatakan bahasa (BM/BI).');
  assert.ok(topic.guide && topic.guide.points, 'Setiap tajuk mesti mempunyai panduan rangka.');
  assert.ok(topic.modelEssay && topic.modelEssay.length > 200, 'Setiap tajuk mesti mempunyai model karangan lengkap.');
  assert.ok(Array.isArray(topic.keywords) && topic.keywords.length >= 4, 'Setiap tajuk mesti mempunyai sekurang-kurangnya 4 kata kunci.');
});
console.log('✔ Integriti 5 tajuk esei, rangka karangan, dan model esei disahkan.');

// 4. Ujian Pengiraan Perkataan (Word Count Logic)
const sampleText = 'Majlis Amanah Rakyat (MARA) merupakan institusi unggul pemerkasaan sosioekonomi Bumiputera.';
const wordCount = engine.countWords(sampleText);
assert.strictEqual(wordCount, 10, 'Pengiraan patah perkataan mesti tepat.');
assert.strictEqual(engine.countWords(''), 0, 'Teks kosong mesti mengembalikan 0 patah perkataan.');
assert.strictEqual(engine.countWords('   Tiga   perkataan   sahaja   '), 3, 'Ruang putih berganda mesti dikendalikan dengan betul.');
console.log('✔ Enjin pengiraan perkataan disahkan tepat.');

// 5. Ujian Kitaran Pemasa Esei
const timer = new EssayTimer();
assert.strictEqual(timer.formatTime(2700), '45:00', 'Format 2700 saat mesti 45:00.');
assert.strictEqual(timer.formatTime(3600), '60:00', 'Format 3600 saat mesti 60:00.');
assert.strictEqual(timer.formatTime(65), '01:05', 'Format 65 saat mesti 01:05.');
console.log('✔ Logik pemasa esei disahkan.');

// 6. Ujian Simpan & Muat Draf (LocalStorage)
const testTopicId = 1;
const testContent = 'Ini adalah draf latihan esei calon DG41 PJPK.';
engine.saveDraft(testTopicId, testContent);
const loaded = engine.loadDraft(testTopicId);
assert.strictEqual(loaded, testContent, 'Draf yang dimuatkan mesti sepadan dengan draf yang disimpan.');
console.log('✔ Sistem simpan draf ke LocalStorage disahkan berfungsi.');

// 7. Pengesahan Bebas CDN Luaran
assert.ok(!scriptCode.includes('http://'), 'Tiada pautan tidak selamat http:// dibenarkan.');
assert.ok(!scriptCode.includes('https://cdnjs'), 'Tiada CDN luaran dibenarkan.');
assert.ok(!scriptCode.includes('https://cdn'), 'Tiada CDN luaran dibenarkan.');
console.log('✔ 100% bebas CDN luaran disahkan.');

console.log('============================================================');
console.log('🎉 SEMUA UJIAN MODUL PENULISAN ESEI (ESSAY) LULUS 100%!');
console.log('============================================================');
