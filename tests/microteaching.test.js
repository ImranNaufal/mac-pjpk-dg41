/**
 * Test Suite: Hab Micro-Teaching PJPK MRSM & Penjana RPH (Task 5)
 * 
 * Verifikasi:
 * 1. Kewujudan fail js/microteaching.js & eksport modul.
 * 2. 3 Templat Rasmi DSKP KSSM PJPK:
 *    - Futsal (Tingkatan 2 - Kategori Serangan)
 *    - Kapasiti Aerobik & Formula Karvonen (Tingkatan 4 - Kecergasan)
 *    - Pertolongan Cemas P.R.I.C.E vs H.A.R.M (Tingkatan 1 - Pendidikan Kesihatan)
 * 3. Enjin Validasi & Penjana RPH Kustom Standard MRSM:
 *    - Semakan medan mandatori (SK, SP, Objektif 3 Domain, Fasa Aktiviti, Keselamatan)
 *    - Penjanaan format teks dan HTML dokumen A4
 * 4. Pemasa Fasa Simulasi Micro-Teaching (10, 12, 15 Minit):
 *    - Fasa 1: Set Induksi & Pemanasan Badan
 *    - Fasa 2: Perkembangan & Ansur Maju Kemahiran
 *    - Fasa 3: Penutup, Penyejukan Badan & Refleksi
 *    - Pengesanan amaran visual / sela masa fasa
 * 5. Kalkulator Rubrik Penilai Panel MAC MARA (7 Kriteria, Skala 100%):
 *    - Wajaran 7 kriteria rasmi (10%, 15%, 25%, 15%, 15%, 10%, 10%)
 *    - Kiraan skor wajaran, penggredan, dan rumusan maklum balas panel
 * 6. Integrasi UI & index.html (#microteaching-app)
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('--- Memulakan Ujian Unit: Hab Micro-Teaching PJPK MRSM (Task 5) ---');

// ============================================================================
// BAHAGIAN 1: UJIAN KEWUJUDAN FAIL & MODUL
// ============================================================================
console.log('\n--- Ujian 1: Kewujudan Fail & Eksport Modul ---');

const microteachingJsPath = path.join(__dirname, '..', 'js', 'microteaching.js');
const indexHtmlPath = path.join(__dirname, '..', 'index.html');

assert(fs.existsSync(microteachingJsPath), 'Fail js/microteaching.js mesti wujud');
console.log('✔ Fail js/microteaching.js wujud.');

const MicroteachingModule = require(microteachingJsPath);
assert(MicroteachingModule, 'Modul MicroteachingModule mesti dieksport');

const {
  MicroTeachingHub,
  DSKP_TEMPLATES,
  RUBRIC_CRITERIA,
  MicroTeachingTimer,
  MicroTeachingUI
} = MicroteachingModule;

assert(typeof MicroTeachingHub === 'function' || typeof MicroTeachingHub === 'object', 'MicroTeachingHub mesti wujud.');
assert(DSKP_TEMPLATES && typeof DSKP_TEMPLATES === 'object', 'DSKP_TEMPLATES mesti wujud.');
assert(Array.isArray(RUBRIC_CRITERIA) || typeof RUBRIC_CRITERIA === 'object', 'RUBRIC_CRITERIA mesti wujud.');
console.log('✔ Eksport utama MicroteachingModule (MicroTeachingHub, DSKP_TEMPLATES, RUBRIC_CRITERIA) disahkan.');

// ============================================================================
// BAHAGIAN 2: UJIAN 3 TEMPLAT RASMI DSKP KSSM PJPK SIAP GUNA
// ============================================================================
console.log('\n--- Ujian 2: Muatan & Integriti 3 Templat Rasmi DSKP KSSM ---');

const hub = typeof MicroTeachingHub === 'function' ? new MicroTeachingHub() : MicroTeachingHub;

// 2.1 Semak senarai kunci templat rasmi
const expectedTemplateKeys = ['futsal', 'aerobic', 'firstaid'];
expectedTemplateKeys.forEach(key => {
  const tpl = hub.loadTemplate(key);
  assert(tpl, `Templat '${key}' mesti boleh dimuatkan oleh hub.loadTemplate('${key}')`);
  assert.strictEqual(tpl.key, key, `Templat key mesti padan: ${key}`);
  assert(tpl.title && tpl.title.length > 5, `Templat '${key}' mesti mempunyai tajuk bermakna`);
  assert(tpl.subject, `Templat '${key}' mesti mempunyai mata pelajaran`);
  assert(tpl.form, `Templat '${key}' mesti mempunyai maklumat tingkatan`);
  assert(tpl.duration, `Templat '${key}' mesti mempunyai tempoh masa (cth: 12-15 Minit)`);
  assert(tpl.theme || tpl.field, `Templat '${key}' mesti mempunyai bidang/tema DSKP`);

  // Semak Standard Kandungan (SK) & Standard Pembelajaran (SP)
  assert(tpl.sk && (Array.isArray(tpl.sk) ? tpl.sk.length > 0 : typeof tpl.sk === 'string'), `Templat '${key}' mesti mempunyai SK`);
  assert(tpl.sp && (Array.isArray(tpl.sp) ? tpl.sp.length > 0 : typeof tpl.sp === 'string'), `Templat '${key}' mesti mempunyai SP`);

  // Semak Objektif 3 Domain (Psikomotor, Kognitif, Afektif)
  assert(tpl.objectives, `Templat '${key}' mesti mempunyai struktur objektif`);
  assert(tpl.objectives.psychomotor && tpl.objectives.psychomotor.length > 10, `Objektif psikomotor '${key}' mesti jelas`);
  assert(tpl.objectives.cognitive && tpl.objectives.cognitive.length > 10, `Objektif kognitif '${key}' mesti jelas`);
  assert(tpl.objectives.affective && tpl.objectives.affective.length > 10, `Objektif afektif '${key}' mesti jelas`);

  // Semak Kriteria Kejayaan & Alatan (BBM)
  assert(tpl.successCriteria, `Templat '${key}' mesti mempunyai kriteria kejayaan`);
  assert(tpl.teachingAids || tpl.bbm, `Templat '${key}' mesti mempunyai senarai alatan/BBM`);

  // Semak Fasa Aktiviti PdPc (Sekurang-kurangnya 3 fasa: Induksi, Perkembangan, Penutup)
  assert(Array.isArray(tpl.phases) && tpl.phases.length >= 3, `Templat '${key}' mesti mempunyai sekurang-kurangnya 3 fasa PdPc`);
  
  tpl.phases.forEach((phase, pIdx) => {
    assert(phase.phaseName || phase.name, `Fasa #${pIdx + 1} templat '${key}' mesti ada nama fasa`);
    assert(phase.duration, `Fasa #${pIdx + 1} templat '${key}' mesti ada tempoh masa`);
    assert(phase.activities, `Fasa #${pIdx + 1} templat '${key}' mesti ada perincian aktiviti`);
    assert(phase.safety || phase.notes, `Fasa #${pIdx + 1} templat '${key}' mesti ada catatan keselamatan / EMK`);
  });
});
console.log('✔ Kesemua 3 templat rasmi DSKP (futsal, aerobic, firstaid) lengkap dengan metadata, objektif 3 domain, dan jadual fasa PdPc.');

// 2.2 Semak kandungan khusus setiap templat
const futsalTpl = hub.loadTemplate('futsal');
assert(futsalTpl.title.toLowerCase().includes('futsal') || futsalTpl.title.toLowerCase().includes('bola sepak'), 'Templat futsal mesti berkaitan bola sepak/futsal');
assert(futsalTpl.form.includes('2'), 'Futsal mesti sasaran Tingkatan 2');

const aerobicTpl = hub.loadTemplate('aerobic');
assert(aerobicTpl.title.toLowerCase().includes('aerobik') || aerobicTpl.title.toLowerCase().includes('karvonen'), 'Templat aerobic mesti berkaitan kapasiti aerobik/Karvonen');
assert(aerobicTpl.form.includes('4'), 'Aerobik mesti sasaran Tingkatan 4');
assert(JSON.stringify(aerobicTpl).includes('Karvonen') || JSON.stringify(aerobicTpl).includes('MHR'), 'Aerobic mesti ada rujukan Karvonen');

const firstaidTpl = hub.loadTemplate('firstaid');
assert(firstaidTpl.title.toUpperCase().includes('P.R.I.C.E') || firstaidTpl.title.toUpperCase().includes('PRICE'), 'Templat firstaid mesti berkaitan kaedah P.R.I.C.E');
assert(firstaidTpl.form.includes('1'), 'Firstaid mesti sasaran Tingkatan 1');
console.log('✔ Pengkhususan subjek, tingkatan, dan topik spesifik 3 templat disahkan tepat.');

// 2.3 Ralat muatan templat tidak sah
assert.throws(() => {
  hub.loadTemplate('invalid_template_xyz');
}, /tidak ditemui|unknown|invalid/i, 'Memuatkan templat tidak sah mesti melemparkan ralat atau pengecualian');
console.log('✔ Pengendalian ralat templat tidak sah berfungsi.');

// ============================================================================
// BAHAGIAN 3: ENJIN VALIDASI & PENJANA RPH KUSTOM STANDARD MRSM
// ============================================================================
console.log('\n--- Ujian 3: Validasi & Penjanaan RPH Kustom MRSM ---');

// 3.1 Validasi RPH tidak lengkap (medan wajib hilang)
const incompleteData = {
  subject: 'PJPK'
  // Tiada title, form, sk, sp, objectives
};
const valResult = hub.validateRPH(incompleteData);
assert.strictEqual(valResult.valid, false, 'RPH tanpa medan mandatori mesti gagal validasi');
assert(Array.isArray(valResult.errors) && valResult.errors.length > 0, 'Mesti senaraikan medan yang tidak lengkap');
console.log(`✔ Pengesanan RPH tidak lengkap berjaya (${valResult.errors.length} ralat dikesan).`);

// 3.2 Menjana RPH kustom yang lengkap
const validCustomData = {
  candidateName: 'Ahmad Daniel bin Razak',
  mrsmBranch: 'MRSM Tun Abdul Razak',
  subject: 'Pendidikan Jasmani dan Pendidikan Kesihatan',
  form: 'Tingkatan 3 Cerdas',
  duration: '15 Minit',
  topic: 'Kemahiran Bola Tampar: Servis Bawah Tangan',
  theme: 'Kemahiran Sukan Kategori Jaring',
  sk: '1.4 Melakukan kemahiran asas bola tampar dengan lakuan yang betul',
  sp: '1.4.1 Melakukan servis bawah tangan ke sasaran dengan betul',
  objectives: {
    psychomotor: 'Murid dapat melakukan sekurang-kurangnya 3 daripada 5 servis bawah tangan melepasi jaring ke zon sasaran.',
    cognitive: 'Murid dapat menyatakan fasa kontak tangan pada bola (bawah belakang bola).',
    affective: 'Murid mempamerkan sikap bekerjasama mengutip bola semasa giliran rakan.'
  },
  successCriteria: 'Saya dapat memukul bola melepasi jaring dengan kontak tapak tangan yang kemas.',
  teachingAids: '6 biji bola tampar, 1 jaring, 10 kon penanda, wisel',
  values: 'Bekerjasama, Keyakinan Diri, Disiplin',
  phases: [
    {
      phaseName: 'Set Induksi (Pemanasan Badan)',
      duration: '3 Minit',
      focus: 'Pemeriksaan kesihatan & regangan dinamik bahu',
      activities: 'Larian anak keliling gelanggang, regangan sendi glenohumeral, soal jawab servis.',
      safety: 'Pastikan tiada bola berselerak di kawasan larian.'
    },
    {
      phaseName: 'Perkembangan 1: Ansur Maju Servis',
      duration: '4 Minit',
      focus: 'Lakuan hayunan tangan dan kontak bola',
      activities: 'Demonstrasi teknik guru, latih tubi servis bayang (shadow), servis jarak 3 meter berpasangan.',
      safety: 'Jarak antara pasangan sekurang-kurangnya 3 meter.'
    },
    {
      phaseName: 'Perkembangan 2 & Kemuncak',
      duration: '5 Minit',
      focus: 'Servis melepasi jaring ke zon sasaran mata',
      activities: 'Servis melepasi jaring 2.15m ke petak bernombor 1, 2, 3 di gelanggang lawan.',
      safety: 'Murid menunggu giliran di belakang garisan servis.'
    },
    {
      phaseName: 'Penutup & Refleksi',
      duration: '3 Minit',
      focus: 'Penyejukan badan & semakan objektif',
      activities: 'Aktiviti melonggarkan otot deltoid, soal jawab KBAT titik sentuhan bola, rumusan PBD.',
      safety: 'Semak keadaan hidrasi murid.'
    }
  ]
};

const generatedRPH = hub.generateRPH(validCustomData);
assert(generatedRPH, 'generateRPH mesti memulangkan objek RPH');
assert.strictEqual(generatedRPH.topic, validCustomData.topic);
assert.strictEqual(generatedRPH.candidateName, 'Ahmad Daniel bin Razak');
assert(generatedRPH.phases && generatedRPH.phases.length === 4);
assert(generatedRPH.formattedDate || generatedRPH.generatedAt, 'Mesti ada tarikh/masa penjanaan');
console.log('✔ Penjanaan struktur RPH kustom lengkap disahkan.');

// 3.3 Penukaran format teks (export text)
const textOutput = hub.exportRPHText(generatedRPH);
assert(typeof textOutput === 'string' && textOutput.length > 200, 'Format teks RPH mesti panjang dan berstruktur');
assert(textOutput.includes('Servis Bawah Tangan'), 'Teks RPH mesti mengandungi tajuk');
assert(textOutput.includes('Psikomotor'), 'Teks RPH mesti mengandungi bahagian psikomotor');
assert(textOutput.includes('Ahmad Daniel'), 'Teks RPH mesti mengandungi nama calon');
console.log('✔ Penukaran RPH ke format teks salin-pantas (*clipboard ready*) disahkan.');

// 3.4 Penukaran format HTML untuk cetakan A4
const htmlOutput = hub.exportRPHHtml(generatedRPH);
assert(typeof htmlOutput === 'string' && htmlOutput.includes('<div'), 'Format HTML RPH mesti sah');
assert(htmlOutput.includes('rph-print-document') || htmlOutput.includes('rph-container'), 'HTML RPH mesti ada kelas pembungkus cetakan');
assert(htmlOutput.includes('Jadual Aktiviti') || htmlOutput.includes('table') || htmlOutput.includes('fasa'), 'HTML RPH mesti memaparkan jadual fasa PdPc');
console.log('✔ Penjanaan dokumen HTML cetakan A4 standard MRSM disahkan.');

// ============================================================================
// BAHAGIAN 4: PEMASA FASA SIMULASI MICRO-TEACHING (10, 12, 15 MINIT)
// ============================================================================
console.log('\n--- Ujian 4: Pemasa Fasa Simulasi Micro-Teaching & Amaran Visual ---');

const timer = typeof MicroTeachingTimer === 'function' ? new MicroTeachingTimer() : hub.getTimer();
assert(timer, 'Pemasa mesti boleh diakses');

// 4.1 Ujian pembahagian fasa bagi 15 minit (900 saat)
const phaseInfo15_start = timer.getPhaseInfo(60, 15); // saat ke-60 (Minit 1) -> Fasa 1 (Induksi)
assert.strictEqual(phaseInfo15_start.phaseIndex, 1, 'Minit 1 (60s) mesti dalam Fasa 1 (Induksi)');
assert(phaseInfo15_start.phaseName.includes('Induksi'), 'Nama fasa 1 mesti mengandungi Induksi');

const phaseInfo15_mid = timer.getPhaseInfo(360, 15); // saat ke-360 (Minit 6) -> Fasa 2 (Perkembangan)
assert.strictEqual(phaseInfo15_mid.phaseIndex, 2, 'Minit 6 (360s) mesti dalam Fasa 2 (Perkembangan)');
assert(phaseInfo15_mid.phaseName.includes('Perkembangan'), 'Nama fasa 2 mesti mengandungi Perkembangan');

const phaseInfo15_end = timer.getPhaseInfo(750, 15); // saat ke-750 (Minit 12.5) -> Fasa 3 (Penutup)
assert.strictEqual(phaseInfo15_end.phaseIndex, 3, 'Minit 12.5 (750s) mesti dalam Fasa 3 (Penutup)');
assert(phaseInfo15_end.phaseName.includes('Penutup') || phaseInfo15_end.phaseName.includes('Refleksi'), 'Nama fasa 3 mesti mengandungi Penutup/Refleksi');

// 4.2 Ujian pembahagian fasa bagi 10 minit (600 saat)
const phaseInfo10_f1 = timer.getPhaseInfo(60, 10);
assert.strictEqual(phaseInfo10_f1.phaseIndex, 1, 'Minit 1 dalam mod 10 minit mesti Fasa 1');

const phaseInfo10_f2 = timer.getPhaseInfo(300, 10);
assert.strictEqual(phaseInfo10_f2.phaseIndex, 2, 'Minit 5 dalam mod 10 minit mesti Fasa 2');

const phaseInfo10_f3 = timer.getPhaseInfo(540, 10);
assert.strictEqual(phaseInfo10_f3.phaseIndex, 3, 'Minit 9 dalam mod 10 minit mesti Fasa 3');
console.log('✔ Pembahagian sela masa fasa (10 minit & 15 minit) disahkan tepat.');

// 4.3 Ujian panduan tindakan guru & amaran visual amaran fasa
assert(phaseInfo15_start.guidance && phaseInfo15_start.guidance.length > 10, 'Setiap fasa mesti membekalkan bimbingan tindakan guru');
assert(phaseInfo15_mid.guidance && phaseInfo15_mid.guidance.length > 10, 'Fasa 2 mesti ada bimbingan demonstrasi/ansur maju');
assert(phaseInfo15_end.guidance && phaseInfo15_end.guidance.length > 10, 'Fasa 3 mesti ada bimbingan penyejukan/KBAT');

// Semak amaran fasa (cth. 30 saat sebelum fasa berakhir)
const nearPhaseEndAlert = timer.getPhaseInfo(170, 15); // 10 saat sebelum tamat fasa 1 (tamat pada 180s)
assert(nearPhaseEndAlert.isPhaseWarning === true || nearPhaseEndAlert.warningLevel !== 'none', 'Mesti ada amaran visual apabila menghampiri peralihan fasa');
console.log('✔ Amaran visual dan bimbingan tindakan guru disahkan.');

// 4.4 Ujian kitaran hidup pemasa (Start, Pause, Resume, Stop)
timer.start(10);
assert.strictEqual(timer.isRunning(), true, 'Pemasa mesti aktif selepas start()');
assert.strictEqual(timer.getDurationMinutes(), 10, 'Tempoh pemasa mesti 10');

timer.pause();
assert.strictEqual(timer.isPaused(), true, 'Pemasa mesti dijeda selepas pause()');

timer.resume();
assert.strictEqual(timer.isRunning(), true, 'Pemasa mesti menyambung semula selepas resume()');

timer.stop();
assert.strictEqual(timer.isRunning(), false, 'Pemasa mesti berhenti selepas stop()');
console.log('✔ Kitaran kawalan pemasa (start, pause, resume, stop) berfungsi dengan betul.');

// ============================================================================
// BAHAGIAN 5: KALKULATOR RUBRIK PENILAI PANEL MAC MARA (7 KRITERIA)
// ============================================================================
console.log('\n--- Ujian 5: Kalkulator Rubrik Penilai Panel MAC MARA (100% Skala) ---');

// 5.1 Semak 7 Kriteria Rasmi & Wajaran 100%
const criteria = hub.getRubricCriteria ? hub.getRubricCriteria() : RUBRIC_CRITERIA;
const criteriaList = Array.isArray(criteria) ? criteria : Object.values(criteria);
assert.strictEqual(criteriaList.length, 7, `Mesti ada tepat 7 kriteria penilaian MARA (ditemui: ${criteriaList.length})`);

const totalWeight = criteriaList.reduce((sum, c) => sum + c.weight, 0);
assert.strictEqual(totalWeight, 100, `Jumlah wajaran 7 kriteria mesti tepat 100%, dikira: ${totalWeight}%`);

const expectedKeys = [
  'rph_quality',
  'induction',
  'content_mastery',
  'communication',
  'class_management',
  'pak21_kbat',
  'closing_reflection'
];
expectedKeys.forEach(k => {
  const item = criteriaList.find(c => c.id === k || c.key === k);
  assert(item, `Kriteria penilaian rasmi '${k}' mesti wujud dalam senarai`);
  assert(item.weight > 0, `Kriteria '${k}' mesti mempunyai wajaran positif`);
  assert(item.label, `Kriteria '${k}' mesti mempunyai label tajuk`);
  assert(item.descriptors && (item.descriptors.excellent || item.descriptors[5]), `Kriteria '${k}' mesti mempunyai deskriptor cemerlang`);
});
console.log('✔ Kesemua 7 kriteria penilaian MARA disahkan dengan wajaran kumulatif tepat 100%.');

// 5.2 Ujian Skor Penuh (Semua 5/5 Bintang = 100%)
const perfectScores = {
  rph_quality: 5,
  induction: 5,
  content_mastery: 5,
  communication: 5,
  class_management: 5,
  pak21_kbat: 5,
  closing_reflection: 5
};
const evalPerfect = hub.evaluateRubric(perfectScores);
assert.strictEqual(evalPerfect.percentage, 100, `Skor penuh semua 5 bintang mesti 100%, dikira: ${evalPerfect.percentage}`);
assert.strictEqual(evalPerfect.isRecommended, true, 'Calon skor 100% mesti disyorkan');
assert(evalPerfect.gradeBand.toLowerCase().includes('cemerlang') || evalPerfect.verdict.toLowerCase().includes('cemerlang'), 'Gred mesti Cemerlang');
console.log('✔ Ujian markah penuh (100% - Cemerlang) disahkan.');

// 5.3 Ujian Skor 4 Bintang (Semua 4/5 = 80%)
const goodScores = {
  rph_quality: 4,
  induction: 4,
  content_mastery: 4,
  communication: 4,
  class_management: 4,
  pak21_kbat: 4,
  closing_reflection: 4
};
const evalGood = hub.evaluateRubric(goodScores);
assert.strictEqual(evalGood.percentage, 80, `Skor semua 4 bintang mesti 80%, dikira: ${evalGood.percentage}`);
assert.strictEqual(evalGood.isRecommended, true, 'Calon skor 80% mesti disyorkan (Kepujian)');
assert(evalGood.gradeBand.toLowerCase().includes('kepujian') || evalGood.gradeBand.toLowerCase().includes('baik'), 'Gred mesti Kepujian/Baik');
console.log('✔ Ujian markah kepujian (80%) disahkan.');

// 5.4 Ujian Skor Campuran (Weighted Calculation)
// Wajaran:
// rph_quality: 10%  (5 -> 10.0)
// induction: 15%    (4 -> 12.0)
// content_mastery: 25% (4 -> 20.0)
// communication: 15% (5 -> 15.0)
// class_management: 15% (4 -> 12.0)
// pak21_kbat: 10%   (4 -> 8.0)
// closing_reflection: 10% (5 -> 10.0)
// Jumlah: 10 + 12 + 20 + 15 + 12 + 8 + 10 = 87.0%
const mixedScores = {
  rph_quality: 5,
  induction: 4,
  content_mastery: 4,
  communication: 5,
  class_management: 4,
  pak21_kbat: 4,
  closing_reflection: 5
};
const evalMixed = hub.evaluateRubric(mixedScores);
assert.strictEqual(evalMixed.percentage, 87, `Skor campuran mesti 87%, dikira: ${evalMixed.percentage}`);
assert(Array.isArray(evalMixed.breakdown) && evalMixed.breakdown.length === 7, 'Mesti ada pecahan bagi 7 kriteria');
assert(evalMixed.feedback && evalMixed.feedback.length > 20, 'Mesti menjana ulasan panel komprehensif');
console.log('✔ Ujian kiraan wajaran skor campuran (87.0%) disahkan tepat.');

// 5.5 Ujian Skor Lemah (< 60% - Gagal / Tidak Disyorkan)
const weakScores = {
  rph_quality: 2,
  induction: 2,
  content_mastery: 2,
  communication: 2,
  class_management: 2,
  pak21_kbat: 2,
  closing_reflection: 2
}; // 40%
const evalWeak = hub.evaluateRubric(weakScores);
assert.strictEqual(evalWeak.percentage, 40, `Skor semua 2 bintang mesti 40%, dikira: ${evalWeak.percentage}`);
assert.strictEqual(evalWeak.isRecommended, false, 'Calon skor 40% tidak boleh disyorkan');
assert(evalWeak.feedback.toLowerCase().includes('lemah') || evalWeak.verdict.toLowerCase().includes('tidak'), 'Maklum balas mesti menyatakan kelemahan ketara');
console.log('✔ Ujian penilaian calon lemah (<60%) disahkan.');

// 5.6 Pengesahan Ralat Skor Tidak Sah
assert.throws(() => {
  hub.evaluateRubric({ rph_quality: 6 }); // Lebih dari 5
}, /skor tidak sah|invalid score|range/i, 'Skor melebihi 5 mesti melemparkan ralat');
console.log('✔ Pengesanan input skor tidak sah berfungsi.');

// ============================================================================
// BAHAGIAN 6: INTEGRASI INDEX.HTML & KONTENA #microteaching-app
// ============================================================================
console.log('\n--- Ujian 6: Integrasi index.html & Skrip js/microteaching.js ---');

const htmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

// Semak pautan skrip dalam index.html
assert(
  htmlContent.includes('<script src="js/microteaching.js"></script>'),
  'index.html mesti mengandungi tag <script src="js/microteaching.js"></script>'
);
console.log('✔ index.html memuatkan js/microteaching.js.');

// Semak kontena #microteaching-app
assert(
  htmlContent.includes('id="microteaching-app"'),
  'index.html mesti mengandungi kontena #microteaching-app'
);
console.log('✔ Kontena #microteaching-app disahkan wujud.');

// Pastikan tiada CDN luaran diselitkan untuk skrip dan stylesheet (100% offline-ready)
assert(!htmlContent.includes('<script src="http'), 'index.html tidak boleh memuatkan skrip luaran melalui CDN');
assert(!htmlContent.includes('<link rel="stylesheet" href="http'), 'index.html tidak boleh memuatkan lembaran gaya luaran melalui CDN');
console.log('✔ Bebas CDN luaran dikekalkan (100% offline-ready).');

console.log('\n============================================================');
console.log('🎉 SEMUA UJIAN HAB MICRO-TEACHING (TASK 5) TELAH LULUS 100%!');
console.log('============================================================\n');
