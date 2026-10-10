/**
 * tests/groupdiscussion.test.js
 * Unit Test Suite: Modul Dinamika Kumpulan / LDK MAC MARA DG41
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('--- Memulakan Ujian Unit: Modul Dinamika Kumpulan (LDK Hub) ---');

// 1. Ujian Kewujudan Fail
const ldkFilePath = path.join(__dirname, '../js/groupdiscussion.js');
assert.ok(fs.existsSync(ldkFilePath), 'Fail js/groupdiscussion.js mesti wujud.');
console.log('✔ Fail js/groupdiscussion.js wujud.');

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

const scriptCode = fs.readFileSync(ldkFilePath, 'utf8');
const moduleFn = new Function('window', 'global', scriptCode);
moduleFn(mockWindow, mockWindow);

const LDKModule = mockWindow.MACGroupDiscussionModule;
assert.ok(LDKModule, 'MACGroupDiscussionModule mesti dieksport.');
const { LDK_CASES, CANDIDATE_ROLES, GOLDEN_PHRASES, LDKEngine, LDKTimer, LDKUI } = LDKModule;

assert.ok(Array.isArray(LDK_CASES), 'LDK_CASES mesti berupa array.');
assert.strictEqual(LDK_CASES.length, 5, 'Mesti mengandungi tepat 5 kajian kes situasi MRSM.');
assert.ok(Array.isArray(CANDIDATE_ROLES), 'CANDIDATE_ROLES mesti berupa array.');
assert.strictEqual(CANDIDATE_ROLES.length, 5, 'Mesti mengandungi 5 peranan strategik calon.');
console.log('✔ Modul js/groupdiscussion.js berjaya dimuatkan dengan 5 kes & 5 peranan watak.');

// 3. Integriti 5 Kajian Kes
const engine = new LDKEngine();
LDK_CASES.forEach(c => {
  assert.ok(c.id, 'Kajian kes mesti mempunyai ID.');
  assert.ok(c.title, 'Kajian kes mesti mempunyai tajuk.');
  assert.ok(c.scenario && c.scenario.length > 50, 'Kajian kes mesti mempunyai huraian senario terperinci.');
  assert.ok(c.task, 'Kajian kes mesti mempunyai arahan tugasan kumpulan.');
  assert.ok(Array.isArray(c.guidingQuestions) && c.guidingQuestions.length >= 3, 'Mesti ada soalan panduan.');
  assert.ok(Array.isArray(c.recommendedSolutions) && c.recommendedSolutions.length >= 3, 'Mesti ada cadangan penyelesaian.');
});
console.log('✔ Integriti 5 kajian kes situasi MRSM disahkan.');

// 4. Logik Pemasa Berfasa (Phase Timer)
const timer = new LDKTimer();
assert.strictEqual(timer.formatTime(900), '15:00', '900 saat mesti diformat sebagai 15:00.');
assert.strictEqual(timer.getPhase(900).phaseNumber, 1, 'Minit pertama adalah Fasa 1 (Analisis).');
assert.strictEqual(timer.getPhase(700).phaseNumber, 2, 'Masa 700 saat baki adalah Fasa 2 (Sumbang Saran).');
assert.strictEqual(timer.getPhase(150).phaseNumber, 3, 'Masa 150 saat baki adalah Fasa 3 (Rumusan Konsensus).');
console.log('✔ Enjin pemasa berfasa 15 minit disahkan.');

// 5. Ujian Kalkulator Rubrik Penilaian Panel LDK (100% Wajaran)
const sampleScores = { leadership: 4, teamwork: 5, communication: 4, ideaQuality: 5 };
const rubricResult = engine.evaluateRubric(sampleScores);
assert.strictEqual(rubricResult.totalPercentage, 90, 'Skor wajaran mesti dikira dengan betul.');
assert.strictEqual(rubricResult.verdict, 'CEMERLANG (LAYAK DG41)', 'Skor 90% mesti mendapat status Cemerlang.');
console.log('✔ Kalkulator rubrik panel LDK 4 dimensi (100% skala) disahkan tepat.');

// 6. Ujian Bebas CDN Luaran
assert.ok(!scriptCode.includes('http://'), 'Tiada pautan tidak selamat http:// dibenarkan.');
assert.ok(!scriptCode.includes('https://cdnjs'), 'Tiada CDN luaran dibenarkan.');
assert.ok(!scriptCode.includes('https://cdn'), 'Tiada CDN luaran dibenarkan.');
console.log('✔ 100% bebas CDN luaran disahkan.');

console.log('============================================================');
console.log('🎉 SEMUA UJIAN MODUL DINAMIKA KUMPULAN (LDK) LULUS 100%!');
console.log('============================================================');
