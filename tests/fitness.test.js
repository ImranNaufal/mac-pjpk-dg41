/**
 * Test Suite: Hab Kecergasan Fizikal (Bleep Test 20m & Kalkulator SEGAK KPM)
 * Task 4 Verification:
 * 1. Bleep Test Speed Tables (Level 1 - 21) & Interval Timing
 * 2. VO2 Max Calculation (Ramsbottom & Léger 1988) & DG41 Benchmarks
 * 3. Web Audio Tone Generation (Sine Wave / Frequencies)
 * 4. BMI Formula & Classification
 * 5. SEGAK 5-Battery Norm Lookups (Lelaki & Perempuan, 1-5 Skor)
 * 6. SEGAK Composite Grading (Gred A-E, 1-5 Bintang) & F.I.T.T. Interventions
 * 7. HTML & UI Integration inside #fitness-app
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('--- Memulakan Ujian Unit: Hab Kecergasan Fizikal (Task 4) ---');

// 1. Ujian Kewujudan Fail
const fitnessJsPath = path.join(__dirname, '..', 'js', 'fitness.js');
const indexHtmlPath = path.join(__dirname, '..', 'index.html');

assert(fs.existsSync(fitnessJsPath), 'Fail js/fitness.js mesti wujud');
console.log('✔ Fail js/fitness.js wujud.');

// 2. Muat Modul fitness.js
const FitnessModule = require(fitnessJsPath);
assert(FitnessModule, 'Modul FitnessModule mesti dieksport');

const {
  BleepTestEngine,
  SEGAKCalculator,
  BLEEP_LEVELS,
  SEGAK_NORMS,
  FitnessUI
} = FitnessModule;

assert(typeof BleepTestEngine === 'function' || typeof BleepTestEngine === 'object', 'BleepTestEngine mesti wujud.');
assert(typeof SEGAKCalculator === 'function' || typeof SEGAKCalculator === 'object', 'SEGAKCalculator mesti wujud.');
assert(Array.isArray(BLEEP_LEVELS) || typeof BLEEP_LEVELS === 'object', 'BLEEP_LEVELS mesti wujud.');
assert(SEGAK_NORMS, 'SEGAK_NORMS mesti wujud.');
console.log('✔ Eksport utama FitnessModule (BleepTestEngine, SEGAKCalculator, BLEEP_LEVELS, SEGAK_NORMS) disahkan.');

// ============================================================================
// BAHAGIAN 1: UJIAN JADUAL KELAJUAN BLEEP TEST & SELA MASA 20M
// ============================================================================
console.log('\n--- Ujian 1: Jadual Kelajuan & Sela Masa Bleep Test (Protokol Luc Léger) ---');

const bleepEngine = typeof BleepTestEngine === 'function' ? new BleepTestEngine() : BleepTestEngine;

// Semak bilangan tahap (Level 1 hingga 21)
const levels = bleepEngine.levels || BLEEP_LEVELS;
assert(levels.length >= 21, `Bleep test mesti menyokong sekurang-kurangnya 21 tahap, ditemui: ${levels.length}`);

// Level 1: Kelajuan 8.5 km/j, 7 shuttles, sela masa ~8.47s
const l1 = bleepEngine.getLevelInfo(1);
assert.strictEqual(l1.level, 1, 'Tahap 1 mesti mempunyai level 1');
assert.strictEqual(l1.speedKmH, 8.5, 'Tahap 1 kelajuan mesti 8.5 km/j');
assert.strictEqual(l1.shuttles, 7, 'Tahap 1 mesti 7 ulang-alik');
const expectedDurationL1 = (20 / (8.5 / 3.6)) * 1000;
assert(Math.abs(l1.shuttleDurationMs - expectedDurationL1) < 50, `Sela masa Level 1 mesti tepat (~8471ms), dapat: ${l1.shuttleDurationMs}ms`);

// Level 2: Kelajuan 9.0 km/j, 8 shuttles, sela masa tepat 8000ms
const l2 = bleepEngine.getLevelInfo(2);
assert.strictEqual(l2.speedKmH, 9.0, 'Tahap 2 kelajuan mesti 9.0 km/j');
assert.strictEqual(l2.shuttles, 8, 'Tahap 2 mesti 8 ulang-alik');
assert.strictEqual(Math.round(l2.shuttleDurationMs), 8000, 'Tahap 2 sela masa mesti 8000ms');

// Level 8: Kelajuan 12.0 km/j, 10 shuttles, sela masa 6000ms
const l8 = bleepEngine.getLevelInfo(8);
assert.strictEqual(l8.speedKmH, 12.0, 'Tahap 8 kelajuan mesti 12.0 km/j');
assert.strictEqual(l8.shuttles, 10, 'Tahap 8 mesti 10 ulang-alik');
assert.strictEqual(Math.round(l8.shuttleDurationMs), 6000, 'Tahap 8 sela masa mesti 6000ms');

// Level 21: Kelajuan 18.5 km/j, 16 shuttles, sela masa ~3892ms
const l21 = bleepEngine.getLevelInfo(21);
assert.strictEqual(l21.speedKmH, 18.5, 'Tahap 21 kelajuan mesti 18.5 km/j');
assert.strictEqual(l21.shuttles, 16, 'Tahap 21 mesti 16 ulang-alik');

// Jumlah kumulatif jarak dan ulang-alik sehingga Level 21 (239 shuttles, 4,780 meter)
const totalShuttles = levels.reduce((sum, lvl) => sum + lvl.shuttles, 0);
assert.strictEqual(totalShuttles, 239, `Jumlah keseluruhan ulang-alik sehingga Level 21 mesti 239, dapat: ${totalShuttles}`);
console.log('✔ Jadual kelajuan dan sela masa Level 1-21 disahkan tepat mengikut protokol rasmi.');

// ============================================================================
// BAHAGIAN 2: UJIAN FORMULA VO2 MAX & SASARAN KELAYAKAN MAC DG41
// ============================================================================
console.log('\n--- Ujian 2: Formula VO2 Max & Penanda Aras DG41 ---');

// Kaedah Ramsbottom 1988: VO2 Max = -24.4 + (6.0 * speed)
// Level 8 (12.0 km/j): VO2 Max = -24.4 + (6.0 * 12.0) = 47.6 ml/kg/min
const vo2L8 = bleepEngine.calculateVO2Max(8, 1);
assert(vo2L8.vo2Max >= 47.0 && vo2L8.vo2Max <= 48.0, `VO2 Max Level 8.1 mesti ~47.6, dapat: ${vo2L8.vo2Max}`);
assert.strictEqual(vo2L8.category, 'Baik', `Klasifikasi Level 8 mesti 'Baik', dapat: ${vo2L8.category}`);
assert(vo2L8.qualifiesMale === true, 'Level 8.1 mesti melepasi kelayakan minimum calon Lelaki DG41 (min Level 8.1)');
assert(vo2L8.qualifiesFemale === true, 'Level 8.1 melepasi kelayakan wanita');

// Level 6 (11.0 km/j): VO2 Max = -24.4 + (6.0 * 11.0) = 41.6 ml/kg/min
const vo2L6 = bleepEngine.calculateVO2Max(6, 1);
assert(vo2L6.vo2Max >= 41.0 && vo2L6.vo2Max <= 42.0, `VO2 Max Level 6.1 mesti ~41.6, dapat: ${vo2L6.vo2Max}`);
assert(vo2L6.qualifiesFemale === true, 'Level 6.1 mesti melepasi kelayakan minimum calon Wanita DG41 (min Level 6.1)');
assert(vo2L6.qualifiesMale === false, 'Level 6.1 belum melepasi sasaran minimum calon Lelaki DG41 (perlu min 8.1)');

// Level 10 (13.0 km/j): VO2 Max = -24.4 + (6.0 * 13.0) = 53.6 ml/kg/min (Cemerlang)
const vo2L10 = bleepEngine.calculateVO2Max(10, 5);
assert(vo2L10.vo2Max > 50, `VO2 Max Level 10.5 mesti > 50, dapat: ${vo2L10.vo2Max}`);
assert.strictEqual(vo2L10.isExcellentMale, true, 'Level 10.5 mesti capai tahap Cemerlang Lelaki DG41');
assert.strictEqual(vo2L10.isExcellentFemale, true, 'Level 10.5 mesti capai tahap Cemerlang Wanita DG41');

// Sokongan formula multivariat Léger 1988 dengan umur
const vo2Léger = bleepEngine.calculateVO2Max(8, 10, 24); // speed 12.0, age 24
assert(vo2Léger.legerMultivariate !== undefined, 'Mesti menyediakan kiraan Léger multivariate apabila umur dibekalkan');
console.log('✔ Formula anggaran VO2 Max dan penanda aras kelayakan DG41 Lelaki & Wanita disahkan.');

// ============================================================================
// BAHAGIAN 3: ENJIN AUDIO BLEEP & PENGENDALIAN KITARAN HAYAT
// ============================================================================
console.log('\n--- Ujian 3: Kitaran Hayat Enjin Bleep & Web Audio Fallback ---');

// Uji sokongan playBeep tanpa ralat dalam persekitaran bukan pelayar (Node.js)
assert.doesNotThrow(() => {
  bleepEngine.playBeep(850, 0.15); // Turn beep
  bleepEngine.playBeep(1200, 0.3); // Level change beep
}, 'playBeep mesti selamat dipanggil tanpa ralat walaupun tiada Web Audio API di Node.js');

// Kitaran hayat asas enjin
bleepEngine.reset();
const initState = bleepEngine.getState();
assert.strictEqual(initState.isRunning, false, 'Enjin tidak patut berjalan sebelum start()');
assert.strictEqual(initState.currentLevel, 1, 'Tahap permulaan mesti 1');
assert.strictEqual(initState.currentShuttle, 1, 'Ulang-alik permulaan mesti 1');
assert.strictEqual(initState.totalDistance, 0, 'Jarak permulaan mesti 0 meter');

console.log('✔ Enjin audio bleep selamat dan kitaran hayat sedia digunakan.');

// ============================================================================
// BAHAGIAN 4: UJIAN FORMULA BMI & KLASIFIKASI KPM
// ============================================================================
console.log('\n--- Ujian 4: Formula BMI & Klasifikasi KPM SEGAK ---');

const segakCalc = typeof SEGAKCalculator === 'function' ? new SEGAKCalculator() : SEGAKCalculator;

// Berat 65kg, Tinggi 172cm -> BMI = 65 / (1.72^2) = 21.97 (Normal / Berat Badan Unggul)
const bmiNormal = segakCalc.calculateBMI(65, 172);
assert.strictEqual(bmiNormal.value, 22.0, `BMI 65kg/172cm mesti 22.0, dapat: ${bmiNormal.value}`);
assert.strictEqual(bmiNormal.status, 'Berat Badan Unggul', `Status BMI mesti 'Berat Badan Unggul', dapat: ${bmiNormal.status}`);

// Kurang Berat Badan (< 18.5)
const bmiUnder = segakCalc.calculateBMI(45, 165); // 45 / (1.65^2) = 16.53
assert(bmiUnder.value < 18.5, 'BMI bawah 18.5');
assert.strictEqual(bmiUnder.status, 'Kurang Berat Badan', `Status mesti 'Kurang Berat Badan', dapat: ${bmiUnder.status}`);

// Berlebihan Berat Badan (25.0 - 29.9)
const bmiOver = segakCalc.calculateBMI(80, 170); // 80 / (1.7^2) = 27.68
assert(bmiOver.value >= 25.0 && bmiOver.value < 30.0, 'BMI dalam julat 25.0-29.9');
assert.strictEqual(bmiOver.status, 'Berlebihan Berat Badan', `Status mesti 'Berlebihan Berat Badan', dapat: ${bmiOver.status}`);

// Obesiti (>= 30.0)
const bmiObese = segakCalc.calculateBMI(95, 165); // 95 / (1.65^2) = 34.89
assert(bmiObese.value >= 30.0, 'BMI mesti >= 30');
assert.strictEqual(bmiObese.status, 'Obesiti', `Status mesti 'Obesiti', dapat: ${bmiObese.status}`);
console.log('✔ Formula dan 4 klasifikasi BMI KPM disahkan tepat.');

// ============================================================================
// BAHAGIAN 5: UJIAN SKOR 4 BATERI SEGAK KPM (LELAKI & PEREMPUAN)
// ============================================================================
console.log('\n--- Ujian 5: Skor 4 Bateri SEGAK Mengikut Norma Jantina (Skor 1 - 5) ---');

// 1. Naik Turun Bangku 3 Minit (Kadar Nadi Seminit - bpm)
// Lelaki: <=83: 5, 84-101: 4, 102-120: 3, 121-139: 2, >=140: 1
assert.strictEqual(segakCalc.getStepTestScore(80, 'lelaki'), 5, 'Lelaki 80 bpm mesti skor 5');
assert.strictEqual(segakCalc.getStepTestScore(95, 'lelaki'), 4, 'Lelaki 95 bpm mesti skor 4');
assert.strictEqual(segakCalc.getStepTestScore(110, 'lelaki'), 3, 'Lelaki 110 bpm mesti skor 3');
assert.strictEqual(segakCalc.getStepTestScore(130, 'lelaki'), 2, 'Lelaki 130 bpm mesti skor 2');
assert.strictEqual(segakCalc.getStepTestScore(145, 'lelaki'), 1, 'Lelaki 145 bpm mesti skor 1');

// Perempuan: <=90: 5, 91-110: 4, 111-129: 3, 130-149: 2, >=150: 1
assert.strictEqual(segakCalc.getStepTestScore(88, 'perempuan'), 5, 'Perempuan 88 bpm mesti skor 5');
assert.strictEqual(segakCalc.getStepTestScore(105, 'perempuan'), 4, 'Perempuan 105 bpm mesti skor 4');
assert.strictEqual(segakCalc.getStepTestScore(120, 'perempuan'), 3, 'Perempuan 120 bpm mesti skor 3');
assert.strictEqual(segakCalc.getStepTestScore(140, 'perempuan'), 2, 'Perempuan 140 bpm mesti skor 2');
assert.strictEqual(segakCalc.getStepTestScore(155, 'perempuan'), 1, 'Perempuan 155 bpm mesti skor 1');

// 2. Tekan Tubi 1 Minit (Ulangan)
// Lelaki: >=32: 5, 25-31: 4, 17-24: 3, 9-16: 2, <=8: 1
assert.strictEqual(segakCalc.getPushUpScore(35, 'lelaki'), 5, 'Lelaki 35 ulangan mesti skor 5');
assert.strictEqual(segakCalc.getPushUpScore(28, 'lelaki'), 4, 'Lelaki 28 ulangan mesti skor 4');
assert.strictEqual(segakCalc.getPushUpScore(20, 'lelaki'), 3, 'Lelaki 20 ulangan mesti skor 3');
assert.strictEqual(segakCalc.getPushUpScore(12, 'lelaki'), 2, 'Lelaki 12 ulangan mesti skor 2');
assert.strictEqual(segakCalc.getPushUpScore(5, 'lelaki'), 1, 'Lelaki 5 ulangan mesti skor 1');

// Perempuan: >=26: 5, 19-25: 4, 12-18: 3, 5-11: 2, <=4: 1
assert.strictEqual(segakCalc.getPushUpScore(27, 'perempuan'), 5, 'Perempuan 27 ulangan mesti skor 5');
assert.strictEqual(segakCalc.getPushUpScore(22, 'perempuan'), 4, 'Perempuan 22 ulangan mesti skor 4');
assert.strictEqual(segakCalc.getPushUpScore(15, 'perempuan'), 3, 'Perempuan 15 ulangan mesti skor 3');
assert.strictEqual(segakCalc.getPushUpScore(8, 'perempuan'), 2, 'Perempuan 8 ulangan mesti skor 2');
assert.strictEqual(segakCalc.getPushUpScore(3, 'perempuan'), 1, 'Perempuan 3 ulangan mesti skor 1');

// 3. Ringkuk Tubi Separa 1 Minit (Ulangan)
// Lelaki: >=24: 5, 19-23: 4, 13-18: 3, 7-12: 2, <=6: 1
assert.strictEqual(segakCalc.getCurlUpScore(25, 'lelaki'), 5, 'Lelaki 25 curl-up mesti skor 5');
assert.strictEqual(segakCalc.getCurlUpScore(20, 'lelaki'), 4, 'Lelaki 20 curl-up mesti skor 4');
assert.strictEqual(segakCalc.getCurlUpScore(15, 'lelaki'), 3, 'Lelaki 15 curl-up mesti skor 3');
assert.strictEqual(segakCalc.getCurlUpScore(9, 'lelaki'), 2, 'Lelaki 9 curl-up mesti skor 2');
assert.strictEqual(segakCalc.getCurlUpScore(4, 'lelaki'), 1, 'Lelaki 4 curl-up mesti skor 1');

// Perempuan: >=21: 5, 16-20: 4, 10-15: 3, 5-9: 2, <=4: 1
assert.strictEqual(segakCalc.getCurlUpScore(23, 'perempuan'), 5, 'Perempuan 23 curl-up mesti skor 5');
assert.strictEqual(segakCalc.getCurlUpScore(18, 'perempuan'), 4, 'Perempuan 18 curl-up mesti skor 4');
assert.strictEqual(segakCalc.getCurlUpScore(12, 'perempuan'), 3, 'Perempuan 12 curl-up mesti skor 3');
assert.strictEqual(segakCalc.getCurlUpScore(7, 'perempuan'), 2, 'Perempuan 7 curl-up mesti skor 2');
assert.strictEqual(segakCalc.getCurlUpScore(2, 'perempuan'), 1, 'Perempuan 2 curl-up mesti skor 1');

// 4. Jangkauan Melunjur (cm)
// Lelaki: >=44.0: 5, 38.0-43.9: 4, 31.0-37.9: 3, 23.0-30.9: 2, <=22.9: 1
assert.strictEqual(segakCalc.getSitAndReachScore(46.5, 'lelaki'), 5, 'Lelaki 46.5cm mesti skor 5');
assert.strictEqual(segakCalc.getSitAndReachScore(40.0, 'lelaki'), 4, 'Lelaki 40.0cm mesti skor 4');
assert.strictEqual(segakCalc.getSitAndReachScore(34.0, 'lelaki'), 3, 'Lelaki 34.0cm mesti skor 3');
assert.strictEqual(segakCalc.getSitAndReachScore(25.5, 'lelaki'), 2, 'Lelaki 25.5cm mesti skor 2');
assert.strictEqual(segakCalc.getSitAndReachScore(18.0, 'lelaki'), 1, 'Lelaki 18.0cm mesti skor 1');

// Perempuan: >=41.0: 5, 35.0-40.9: 4, 28.0-34.9: 3, 20.0-27.9: 2, <=19.9: 1
assert.strictEqual(segakCalc.getSitAndReachScore(43.0, 'perempuan'), 5, 'Perempuan 43.0cm mesti skor 5');
assert.strictEqual(segakCalc.getSitAndReachScore(38.5, 'perempuan'), 4, 'Perempuan 38.5cm mesti skor 4');
assert.strictEqual(segakCalc.getSitAndReachScore(30.0, 'perempuan'), 3, 'Perempuan 30.0cm mesti skor 3');
assert.strictEqual(segakCalc.getSitAndReachScore(22.0, 'perempuan'), 2, 'Perempuan 22.0cm mesti skor 2');
assert.strictEqual(segakCalc.getSitAndReachScore(15.0, 'perempuan'), 1, 'Perempuan 15.0cm mesti skor 1');
console.log('✔ Kesemua 4 bateri fizikal SEGAK KPM untuk Lelaki & Perempuan disahkan mengikut norma.');

// ============================================================================
// BAHAGIAN 6: UJIAN SISTEM PENGGREDAN KESELURUHAN & CADANGAN INTERVENSI
// ============================================================================
console.log('\n--- Ujian 6: Penggredan Keseluruhan (Gred A-E) & Intervensi PJPK ---');

// Calon Cemerlang (Markah Penuh 20 -> Gred A, 5 Bintang)
const candidateA = segakCalc.evaluateSEGAK({
  gender: 'lelaki',
  age: 24,
  weight: 68,
  height: 175,
  stepBpm: 78,      // 5 mata
  pushUps: 36,      // 5 mata
  curlUps: 25,      // 5 mata
  sitAndReach: 46.0 // 5 mata
});
assert.strictEqual(candidateA.totalScore, 20, `Calon cemerlang mesti 20 markah, dapat: ${candidateA.totalScore}`);
assert.strictEqual(candidateA.grade, 'A', `Gred mesti 'A', dapat: ${candidateA.grade}`);
assert.strictEqual(candidateA.stars, 5, `Bintang mesti 5, dapat: ${candidateA.stars}`);
assert.strictEqual(candidateA.interpretation, 'Kecergasan Sangat Tinggi');
assert(Array.isArray(candidateA.interventions), 'interventions mesti dalam bentuk array');

// Calon Gred B (15 - 17 Mata -> 4 Bintang)
const candidateB = segakCalc.evaluateSEGAK({
  gender: 'lelaki',
  age: 24,
  weight: 70,
  height: 173,
  stepBpm: 95,      // 4 mata
  pushUps: 28,      // 4 mata
  curlUps: 20,      // 4 mata
  sitAndReach: 40.0 // 4 mata -> total 16
});
assert.strictEqual(candidateB.totalScore, 16);
assert.strictEqual(candidateB.grade, 'B');
assert.strictEqual(candidateB.stars, 4);
assert.strictEqual(candidateB.interpretation, 'Kecergasan Tinggi');

// Calon Gred C (12 - 14 Mata -> 3 Bintang)
const candidateC = segakCalc.evaluateSEGAK({
  gender: 'perempuan',
  age: 23,
  weight: 54,
  height: 160,
  stepBpm: 120,     // 3 mata
  pushUps: 15,      // 3 mata
  curlUps: 14,      // 3 mata
  sitAndReach: 32.0 // 3 mata -> total 12
});
assert.strictEqual(candidateC.totalScore, 12);
assert.strictEqual(candidateC.grade, 'C');
assert.strictEqual(candidateC.stars, 3);
assert.strictEqual(candidateC.interpretation, 'Cergas');

// Calon Gred D (8 - 11 Mata -> 2 Bintang)
const candidateD = segakCalc.evaluateSEGAK({
  gender: 'lelaki',
  age: 25,
  weight: 85,
  height: 170,      // BMI 29.4 (Berlebihan Berat Badan)
  stepBpm: 135,     // 2 mata
  pushUps: 12,      // 2 mata
  curlUps: 10,      // 2 mata
  sitAndReach: 28.0 // 2 mata -> total 8
});
assert.strictEqual(candidateD.totalScore, 8);
assert.strictEqual(candidateD.grade, 'D');
assert.strictEqual(candidateD.stars, 2);
assert.strictEqual(candidateD.interpretation, 'Kurang Cergas');
// Pastikan ada cadangan intervensi kardiovaskular dan berat badan
const dTexts = candidateD.interventions.join(' ');
assert(dTexts.includes('Kardiovaskular') || dTexts.includes('aerobik'), 'Intervensi D mesti cadangkan latihan kardiovaskular/aerobik');

// Calon Gred E (4 - 7 Mata -> 1 Bintang)
const candidateE = segakCalc.evaluateSEGAK({
  gender: 'perempuan',
  age: 26,
  weight: 85,
  height: 155,      // BMI 35.4 (Obesiti)
  stepBpm: 158,     // 1 mata
  pushUps: 2,       // 1 mata
  curlUps: 3,       // 1 mata
  sitAndReach: 15.0 // 1 mata -> total 4
});
assert.strictEqual(candidateE.totalScore, 4);
assert.strictEqual(candidateE.grade, 'E');
assert.strictEqual(candidateE.stars, 1);
assert.strictEqual(candidateE.interpretation, 'Tidak Cergas');
console.log('✔ Penggredan A hingga E serta intervensi pedagogi F.I.T.T. disahkan berfungsi.');

// ============================================================================
// BAHAGIAN 7: UJIAN INTEGRASI UI & KONTENA HTML
// ============================================================================
console.log('\n--- Ujian 7: Struktur UI & Integrasi index.html ---');

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
assert(indexHtml.includes('id="fitness-app"'), 'Kontena #fitness-app mesti wujud dalam index.html');
assert(indexHtml.includes('js/fitness.js'), 'index.html mesti memuatkan skrip js/fitness.js');

console.log('\n--- SEMUA UJIAN UNIT HAB KECERGASAN FIZIKAL LULUS 100%! ---');
