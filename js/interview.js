/**
 * ==========================================================================
 * MARA ASSESSMENT CENTRE (MAC) - HAB TEMU DUGA PANEL (LAMPIRAN F1)
 * Module: js/interview.js
 * Berasaskan 100% Dokumen Rasmi MARA:
 * - Borang Penilaian Temu Duga (Gred 5 - Gred 9) Lampiran F1 (v.300726)
 * - Garis Panduan Program MAC Lampiran A (Klausa 4.2 & 4.4)
 * Pure Vanilla JavaScript (ES6+) • 100% Offline-Ready
 * ==========================================================================
 */

const MACInterview = (function () {
  'use strict';

  const INTERVIEW_DURATION_SEC = 1800; // 30 minit tepat (Klausa 4.2)

  // 10 Kriteria Penilaian Rasmi Lampiran F1 MARA (Skala 1 - 5, Markah Penuh: 50)
  const INTERVIEW_CRITERIA_MARA = [
    {
      number: 1,
      id: 'crit_penampilan',
      title: 'Penampilan',
      desc: 'Calon yang berpakaian kemas, baik, bersopan, bersedia dan yakin.',
      questionExample: 'Bagaimanakah penampilan dan etika diri anda melambangkan keperibadian seorang pendidik MARA yang berwibawa di maktab?',
      guidance: 'Kemas, mematuhi etika pakaian rasmi/sukan PJPK, postur tegak, hubungan mata (eye contact) mesra, senyuman tenang, bersopan santun.'
    },
    {
      number: 2,
      id: 'crit_kelayakan',
      title: 'Kelayakan',
      desc: 'Kelayakan calon adalah bertepatan dengan subjek yang dimohon.',
      questionExample: 'Nyatakan latar belakang akademik dan kepakaran sukan/kecergasan anda yang melayakkan anda mengajar subjek PJPK di MRSM.',
      guidance: 'Ijazah PJPK/Sains Sukan/Pendidikan yang diiktiraf MQA, lesen kejurulatihan, sijil pertolongan cemas, dan pengalaman membimbing sukan.'
    },
    {
      number: 3,
      id: 'crit_sikap',
      title: 'Sikap',
      desc: 'Calon adalah positif dalam ucapan dan tindakan, menunjukkan keupayaan untuk mengenal pasti apa yang perlu dilakukan dan melakukannya sebelum ditanya atau sebelum keadaan mengkehendakinya.',
      questionExample: 'Berikan satu situasi di mana anda mengambil inisiatif proaktif menyelesaikan masalah sebelum diarahkan oleh pihak pengurusan.',
      guidance: 'Fokus sifat inisiatif kendiri, kesanggupan berkorban masa demi kebajikan pelajar asrama, dan sikap pantas bertindak mengelak risiko keselamatan.'
    },
    {
      number: 4,
      id: 'crit_komunikasi',
      title: 'Kemahiran Komunikasi',
      desc: 'Calon itu mampu bertutur dan menulis (jika diuji) dengan baik dan lancar, dan mampu melahirkan idea-idea dan meletakkan mereka pada keseluruhan meyakinkan.',
      questionExample: 'Bagaimanakah anda berkomunikasi secara berkesan dengan ibu bapa yang risau tentang keselamatan anak mereka dalam aktiviti amali sukan lasak?',
      guidance: 'Percakapan tersusun, nada suara meyakinkan, dwibahasa fasih, penyampaian idea jelas, menggunakan fakta dan protokol keselamatan SOP rasmi.'
    },
    {
      number: 5,
      id: 'crit_keyakinan',
      title: 'Tahap keyakinan',
      desc: 'Calon mampu bercakap dan membawa dirinya dengan yakin, memaparkan bahawa dia mempunyai kepercayaan kepada idea-idea mereka sendiri dan mempunyai keupayaan untuk berjaya.',
      questionExample: 'Mengapakah anda yakin anda adalah calon terbaik untuk jawatan Pegawai Perkhidmatan Pendidikan DG9 MARA ini berbanding calon lain?',
      guidance: 'Teguh dengan kepakaran diri tanpa riak, keyakinan tinggi terhadap nilai tambah yang boleh disumbangkan kepada pembangunan maktab dan sukan MARA.'
    },
    {
      number: 6,
      id: 'crit_menggerak',
      title: 'Mengerak dan Mengenalpasti',
      desc: 'Calon yang mampu membangun dan bekerja ke arah mencapai matlamat bagi menyokong misi organisasi, dan bertekad untuk mencapai matlamat organisasi dan untuk memenuhi matlamat peribadi.',
      questionExample: 'Sejauh manakah anda memahami mandat penubuhan MARA di bawah Akta 249 dan bagaimana anda menterjemahkannya dalam melahirkan modal insan unggul?',
      guidance: 'Kefahaman jitu terhadap mandat Akta 249 mengangkat martabat Bumiputera luar bandar, melahirkan generasi saintis, profesional dan usahawan berakhlak mulia.'
    },
    {
      number: 7,
      id: 'crit_interpersonal',
      title: 'Kemahiran Interpersonal',
      desc: 'Calon mampu memahami dan mentafsir kebimbangan orang lain serta berkomunikasi dengan kesedaran dan empati kepada orang lain.',
      questionExample: 'Jika seorang pelajar asrama mengalami kemurungan akibat tekanan akademik dan mengasingkan diri, bagaimanakah anda menggunakan pendekatan PJPK untuk membantunya?',
      guidance: 'Empati mendalam, mendengar secara aktif (active listening), membina sokongan emosi positif melalui sukan rekreasi dan sistem homeroom MRSM.'
    },
    {
      number: 8,
      id: 'crit_analitikal',
      title: 'Kemahiran Analitikal',
      desc: 'Calon mampu menganalisis masalah dengan menggunakan pendekatan yang logik, sistematik dan tersusun.',
      questionExample: 'Jika data ujian kecergasan fizikal pelajar maktab menunjukkan peratusan obesiti yang meningkat, apakah pendekatan analisis yang anda lakukan?',
      guidance: 'Menganalisis punca data secara saintifik, mengenal pasti pola pemakanan dan tabiat sedentari, serta merangka program intervensi berasaskan data.'
    },
    {
      number: 9,
      id: 'crit_inovasi',
      title: 'Inovasi dan Kreativiti',
      desc: 'Calon mampu menunjukkan sokongan untuk inovasidan perubahan yang diperlukan untuk meningkatkan keberkesanan organisasi.',
      questionExample: 'Apakah idea inovatif yang anda boleh bawa bagi meningkatkan minat murid terhadap kecergasan fizikal dalam kekangan masa asrama yang padat?',
      guidance: 'Penggunaan gamifikasi aktiviti fizikal, integrasi aplikasi jejak langkah, rekreasi malam kreatif, atau modul kecergasan kendiri yang menjimatkan masa.'
    },
    {
      number: 10,
      id: 'crit_merancang',
      title: 'Merancang dan Menganjurkan',
      desc: 'Calon mampu merancang dan mengatur kerja-kerja untuk memaksimumkan penggunaan masa, mempunyai keupayaan untuk menjalankan pelbagai tugas dan menentukan kesesuaian untuk memenuhi keperluan kerja.',
      questionExample: 'Bagaimanakah anda mengimbangi pelbagai tanggungjawab serentak sebagai guru akademik, jurulatih sukan maktab, dan warden asrama?',
      guidance: 'Matriks keutamaan kerja (Eisenhower matrix), perancangan takwim tahunan teliti, delegasi tugasan, dan disiplin pengurusan masa yang tinggi.'
    }
  ];

  // State Pemasa Temu Duga
  let timerInterval = null;
  let remainingSec = INTERVIEW_DURATION_SEC;
  let isTimerRunning = false;
  let audioCtx = null;

  function playTone(freq = 880, dur = 0.2) {
    if (typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtx) audioCtx = new AudioCtx();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + dur);
    } catch (e) {}
  }

  /**
   * Mengira markah daripada 10 kriteria Lampiran F1 dan menentukan keputusan rasmi MARA
   */
  function calculateScore(scoresMap = {}) {
    let totalScore = 0;
    INTERVIEW_CRITERIA_MARA.forEach(c => {
      const val = parseInt(scoresMap[c.id], 10) || 0;
      totalScore += val;
    });

    const isPass = totalScore >= 40;
    const decision = isPass ? 'Pilihan' : 'Gagal';
    const decisionFull = isPass ? 'Pilihan ( 40 – 50 )' : 'Gagal ( < 40 )';

    return {
      totalScore,
      maxScore: 50,
      isPass,
      decision,
      decisionFull
    };
  }

  // Kawalan Pemasa 30 Minit
  function startTimer() {
    if (isTimerRunning) return;
    isTimerRunning = true;
    playTone(1000, 0.4);

    if (window.MACApp && typeof window.MACApp.showToast === 'function') {
      window.MACApp.showToast('Sesi Temu Duga Kumpulan 30 Minit Bermula!', 'info');
    }

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      remainingSec--;
      updateTimerUI();

      if (remainingSec === 300) { // 5 minit terakhir
        playTone(660, 0.4);
        if (window.MACApp && typeof window.MACApp.showToast === 'function') {
          window.MACApp.showToast('⚠️ Peringatan: 5 Minit Terakhir Temu Duga!', 'warning');
        }
      } else if (remainingSec <= 0) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        playTone(440, 1.0);
        if (window.MACApp && typeof window.MACApp.showToast === 'function') {
          window.MACApp.showToast('🛑 Masa Temu Duga 30 Minit Telah Tamat!', 'danger');
        }
        updateTimerUI();
      }
    }, 1000);

    updateTimerUI();
  }

  function pauseTimer() {
    if (!isTimerRunning) return;
    clearInterval(timerInterval);
    isTimerRunning = false;
    updateTimerUI();
  }

  function resetTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    remainingSec = INTERVIEW_DURATION_SEC;
    updateTimerUI();
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function updateTimerUI() {
    const displayEl = document.getElementById('interview-timer-display');
    const btnStart = document.getElementById('btn-int-start');
    const btnPause = document.getElementById('btn-int-pause');
    const btnReset = document.getElementById('btn-int-reset');

    if (displayEl) {
      displayEl.innerText = formatTime(remainingSec);
      if (remainingSec <= 300 && remainingSec > 0) {
        displayEl.style.color = '#F59E0B'; // Kuning
      } else if (remainingSec === 0) {
        displayEl.style.color = '#EF4444'; // Merah
      } else {
        displayEl.style.color = '#10B981'; // Hijau
      }
    }

    if (btnStart) btnStart.disabled = isTimerRunning;
    if (btnPause) btnPause.disabled = !isTimerRunning;
    if (btnReset) btnReset.disabled = isTimerRunning && remainingSec === INTERVIEW_DURATION_SEC;
  }

  /**
   * Render Antaramuka Hab Temu Duga Lampiran F1
   */
  function render(containerId = 'interview-app') {
    if (typeof document === 'undefined') return;
    const container = document.getElementById(containerId);
    if (!container) return;

    let savedScores = {};
    let savedNotes = { kekuatan: '', kelemahan: '', ulasan: '' };

    try {
      const stored = localStorage.getItem('mac_interview_scores');
      if (stored) savedScores = JSON.parse(stored);
      const storedNotes = localStorage.getItem('mac_interview_notes');
      if (storedNotes) savedNotes = JSON.parse(storedNotes);
    } catch (e) {}

    const currentResult = calculateScore(savedScores);

    // Bina baris jadual rubrik Lampiran F1
    let rubricRowsHtml = '';
    INTERVIEW_CRITERIA_MARA.forEach(item => {
      const curVal = savedScores[item.id] || 4; // Lalai 4
      let radiosHtml = '';
      for (let sc = 1; sc <= 5; sc++) {
        radiosHtml += `
          <label class="rubric-score-opt">
            <input type="radio" name="score_${item.id}" value="${sc}" ${curVal === sc ? 'checked' : ''} onchange="MACInterview.handleScoreChange('${item.id}', ${sc})">
            <span>${sc}</span>
          </label>
        `;
      }

      rubricRowsHtml += `
        <tr>
          <td class="font-bold text-center">${item.number}</td>
          <td>
            <div class="rubric-criterion-label"><strong>${item.title}</strong></div>
            <p class="text-sm text-secondary mt-1">${item.desc}</p>
            <div class="interview-guide-bubble mt-2">
              <span class="badge-subtle">Contoh Soalan:</span> <em>"${item.questionExample}"</em><br>
              <span class="badge-subtle mt-1">Tips Panel:</span> <small class="text-muted">${item.guidance}</small>
            </div>
          </td>
          <td class="text-center">
            <div class="rubric-score-group">
              ${radiosHtml}
            </div>
          </td>
        </tr>
      `;
    });

    container.innerHTML = `
      <div class="module-wrapper">
        <!-- Banner Tajuk Modul -->
        <div class="module-header-banner">
          <div class="module-header-text">
            <h2>FASA 3: TEMU DUGA PANEL (LAMPIRAN F1)</h2>
            <p>Borang Penilaian Temu Duga (Gred 5 - Gred 9) MARA Assessment Centre (v.300726) • Tempoh: 30 Minit Kumpulan</p>
          </div>
          <button type="button" class="btn btn-secondary" onclick="window.print()">
            🖨️ Cetak Borang Lampiran F1 (A4)
          </button>
        </div>

        <!-- Kad Pemasa Temu Duga Kumpulan 30 Minit -->
        <div class="card mb-4">
          <div class="card-header border-navy">
            <h3 class="card-heading">PEMASA TEMU DUGA KUMPULAN (30 MINIT - KLAUSA 4.2)</h3>
            <span class="badge badge-info">30 Minit Kumpulan</span>
          </div>
          <div class="card-body text-center">
            <div class="teaching-timer-box">
              <div id="interview-timer-display" class="teaching-timer-digits">30:00</div>
              <p class="text-muted text-sm mt-2">Temu Duga dijalankan selama 30 minit secara berkumpulan di bilik yang sama mengikut Klausa 4.2 Lampiran A.</p>
            </div>

            <div class="btn-group-row mt-3">
              <button type="button" class="btn btn-primary btn-large" id="btn-int-start">
                ▶️ Mula 30 Minit
              </button>
              <button type="button" class="btn btn-secondary btn-large" id="btn-int-pause" disabled>
                ⏸️ Jeda
              </button>
              <button type="button" class="btn btn-ghost btn-large" id="btn-int-reset">
                🔄 Semula
              </button>
            </div>
          </div>
        </div>

        <!-- Kad Skor & Rubrik Lampiran F1 (10 Kriteria) -->
        <div class="card">
          <div class="card-header border-red">
            <h3 class="card-heading">SEKSYEN 1 : PENILAIAN TEMU DUGA (10 KRITERIA RASMI MARA)</h3>
            <span class="badge badge-mara">Skala 1 - 5 (5 Tertinggi) • Markah Penuh: 50</span>
          </div>
          <div class="card-body">
            <!-- Kad Ringkasan Markah -->
            <div class="score-summary-bar mb-4">
              <div class="score-summary-item">
                <span class="text-xs text-muted">Jumlah Markah Temu Duga:</span>
                <strong id="display-interview-total" class="text-2xl">${currentResult.totalScore} / 50</strong>
              </div>
              <div class="score-summary-item">
                <span class="text-xs text-muted">Status Cadangan Panel:</span>
                <strong id="display-interview-decision" class="text-xl ${currentResult.isPass ? 'text-emerald' : 'text-danger'}">
                  ${currentResult.decisionFull}
                </strong>
              </div>
            </div>

            <!-- Jadual 10 Kriteria Lampiran F1 -->
            <div class="table-responsive">
              <table class="table-custom rubric-table">
                <thead>
                  <tr>
                    <th style="width: 5%;">Bil</th>
                    <th style="width: 65%;">10 Kriteria Penilaian Temu Duga Lampiran F1</th>
                    <th style="width: 30%;" class="text-center">Skor (1 - 5)</th>
                  </tr>
                </thead>
                <tbody>
                  ${rubricRowsHtml}
                </tbody>
              </table>
            </div>

            <!-- Seksyen 2: Kekuatan & Kelemahan -->
            <div class="mt-4 form-grid-2">
              <div class="form-group">
                <label for="int-kekuatan"><strong>SEKSYEN 2 : KEKUATAN CALON:</strong></label>
                <textarea id="int-kekuatan" class="input-field" rows="3" placeholder="Catatan kekuatan penguasaan subjek, kemahiran komunikasi, karisma pendidik...">${savedNotes.kekuatan}</textarea>
              </div>
              <div class="form-group">
                <label for="int-kelemahan"><strong>KELEMAHAN CALON:</strong></label>
                <textarea id="int-kelemahan" class="input-field" rows="3" placeholder="Catatan ruang penambahbaikan calon...">${savedNotes.kelemahan}</textarea>
              </div>
            </div>

            <!-- Seksyen 3: Ulasan Keseluruhan Panel -->
            <div class="form-group mt-3">
              <label for="int-ulasan"><strong>SEKSYEN 3 : ULASAN KESELURUHAN PANEL:</strong></label>
              <textarea id="int-ulasan" class="input-field" rows="3" placeholder="Ulasan keseluruhan potensi calon sebagai Pegawai Perkhidmatan Pendidikan DG9 MARA...">${savedNotes.ulasan}</textarea>
            </div>

            <!-- Seksyen 4: Cadangan Panel (Pilihan 40-50 vs Gagal <40) -->
            <div class="cadangan-panel-box mt-4">
              <h4 class="font-bold text-navy">SEKSYEN 4 : CADANGAN PANEL (LAMPIRAN F1)</h4>
              <div class="radio-group-row mt-2">
                <div class="cadangan-pill ${currentResult.totalScore >= 40 ? 'pill-active-green' : ''}">
                  <span class="check-box-indicator">${currentResult.totalScore >= 40 ? '☑' : '☐'}</span>
                  <strong>Pilihan ( 40 – 50 )</strong>
                </div>
                <div class="cadangan-pill ${currentResult.totalScore < 40 ? 'pill-active-red' : ''}">
                  <span class="check-box-indicator">${currentResult.totalScore < 40 ? '☑' : '☐'}</span>
                  <strong>Gagal ( &lt; 40 )</strong>
                </div>
              </div>
            </div>

            <div class="mt-4">
              <button type="button" class="btn btn-primary" id="btn-save-interview">💾 Simpan Skor &amp; Catatan Temu Duga</button>
            </div>
          </div>
        </div>

      </div>
    `;

    // Pasang Event Listeners
    setupEventListeners();
  }

  function handleScoreChange(criterionId, scoreVal) {
    let savedScores = {};
    try {
      const stored = localStorage.getItem('mac_interview_scores');
      if (stored) savedScores = JSON.parse(stored);
    } catch (e) {}

    savedScores[criterionId] = parseInt(scoreVal, 10);
    try {
      localStorage.setItem('mac_interview_scores', JSON.stringify(savedScores));
    } catch (e) {}

    const res = calculateScore(savedScores);
    const totEl = document.getElementById('display-interview-total');
    const decEl = document.getElementById('display-interview-decision');
    if (totEl) totEl.innerText = `${res.totalScore} / 50`;
    if (decEl) {
      decEl.innerText = res.decisionFull;
      decEl.className = `text-xl ${res.isPass ? 'text-emerald' : 'text-danger'}`;
    }
  }

  function setupEventListeners() {
    const btnStart = document.getElementById('btn-int-start');
    const btnPause = document.getElementById('btn-int-pause');
    const btnReset = document.getElementById('btn-int-reset');

    if (btnStart) btnStart.addEventListener('click', startTimer);
    if (btnPause) btnPause.addEventListener('click', pauseTimer);
    if (btnReset) btnReset.addEventListener('click', resetTimer);

    const btnSave = document.getElementById('btn-save-interview');
    if (btnSave) {
      btnSave.addEventListener('click', () => {
        const notes = {
          kekuatan: document.getElementById('int-kekuatan').value,
          kelemahan: document.getElementById('int-kelemahan').value,
          ulasan: document.getElementById('int-ulasan').value
        };

        try {
          localStorage.setItem('mac_interview_notes', JSON.stringify(notes));
        } catch (e) {}

        if (window.MACApp && typeof window.MACApp.showToast === 'function') {
          window.MACApp.showToast('Skor dan Catatan Temu Duga berjaya disimpan.', 'success');
        }
      });
    }
  }

  // Auto-render bila dimuatkan dalam pelayar
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => render());
    } else {
      render();
    }
  }

  return {
    INTERVIEW_DURATION_SEC,
    INTERVIEW_CRITERIA_MARA,
    calculateScore,
    handleScoreChange,
    startTimer,
    pauseTimer,
    resetTimer,
    render
  };
})();

// Eksport untuk Node.js & Pelayar
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MACInterview;
}
if (typeof window !== 'undefined') {
  window.MACInterview = MACInterview;
}
