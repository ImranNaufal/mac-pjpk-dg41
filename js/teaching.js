/**
 * ==========================================================================
 * MARA ASSESSMENT CENTRE (MAC) - HAB PENILAIAN PENGAJARAN (LAMPIRAN G1)
 * Module: js/teaching.js
 * Berasaskan 100% Dokumen Rasmi MARA:
 * - Borang Penilaian Pengajaran Lampiran G1 (v.300726)
 * - Garis Panduan Program MAC Lampiran A (Klausa 4.2 & 4.3)
 * Pure Vanilla JavaScript (ES6+) • 100% Offline-Ready
 * ==========================================================================
 */

const MACTeaching = (function () {
  'use strict';

  const TEACHING_DURATION_SEC = 600; // 10 minit tepat (Klausa 4.2)
  const WARNING_TIME_SEC = 120;      // Peringatan 2 minit akhir

  // 12 Kriteria Penilaian Rasmi Lampiran G1 MARA (Skala 1 - 5, Markah Penuh: 60)
  const TEACHING_CRITERIA_MARA = [
    {
      id: 'rph_objektif',
      section: '1. Rancangan Pengajaran',
      label: 'a. Objektif',
      desc: 'Objektif eksplisit, boleh diukur (SMART), dan bertepatan dengan fokus PdP Pendidikan Jasmani.'
    },
    {
      id: 'rph_kandungan',
      section: '1. Rancangan Pengajaran',
      label: 'b. Isi kandungan',
      desc: 'Isi kandungan tersusun, mengikut ansur maju pedagogi dan peringkat kemahiran murid.'
    },
    {
      id: 'pdp_induksi',
      section: '2. Pengajaran',
      label: 'a. Set induksi',
      desc: 'Menarik perhatian, merangsang minat murid, mengaitkan pengetahuan sedia ada & pemanasan badan.'
    },
    {
      id: 'pdp_kelancaran',
      section: '2. Pengajaran (b. Penyampaian)',
      label: 'i. Kelancaran',
      desc: 'Penyampaian lancar, teratur tanpa teragak-agak, transisi aktiviti yang kemas.'
    },
    {
      id: 'pdp_kejelasan',
      section: '2. Pengajaran (b. Penyampaian)',
      label: 'ii. Kejelasan penerangan',
      desc: 'Arahan teknik sukan tepat, jelas, padat, dan mudah difahami oleh murid.'
    },
    {
      id: 'pdp_suara',
      section: '2. Pengajaran (b. Penyampaian)',
      label: 'iii. Suara',
      desc: 'Lontaran suara lantang, nada dinamik, intonasi bertenaga bersesuaian dengan suasana padang/gelanggang.'
    },
    {
      id: 'pdp_perhatian',
      section: '2. Pengajaran',
      label: 'c. Perhatian terhadap pelajar',
      desc: 'Sentiasa memantau pergerakan murid, memberi maklum balas serta-merta, prihatin keselamatan.'
    },
    {
      id: 'pdp_penyoalan',
      section: '2. Pengajaran',
      label: 'd. Penyoalan',
      desc: 'Teknik penyoalan mencabar pemikiran kognitif, menguji kefahaman mekanik lakuan teknik.'
    },
    {
      id: 'pdp_bbm',
      section: '2. Pengajaran',
      label: 'e. Penggunaan bahan bantu mengajar',
      desc: 'Kreativiti alatan sukan yang dibawa sendiri (bola, kon, marker), optimasi alatan tanpa projektor.'
    },
    {
      id: 'pdp_penilaian',
      section: '2. Pengajaran',
      label: 'f. Penilaian Pembelajaran',
      desc: 'Membuat pentaksiran amali lakuan, membetulkan kesilapan murid dengan pembetulan teknikal.'
    },
    {
      id: 'pdp_kreativiti',
      section: '2. Pengajaran',
      label: 'g. Kreativiti',
      desc: 'Pendekatan pengajaran menarik, variasi latih tubi ansur maju, motivasi tinggi.'
    },
    {
      id: 'pdp_penutup',
      section: '2. Pengajaran',
      label: 'h. Penutup',
      desc: 'Aktiviti menyejukkan badan, rumusan isi pelajaran, penegasan nilai murni dan disiplin asrama.'
    }
  ];

  // State Pemasa
  let timerInterval = null;
  let remainingSec = TEACHING_DURATION_SEC;
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
   * Mengira markah daripada 12 kriteria Lampiran G1 dan menentukan status kelulusan rasmi
   */
  function calculateScore(scoresMap = {}) {
    let totalScore = 0;
    TEACHING_CRITERIA_MARA.forEach(c => {
      const val = parseInt(scoresMap[c.id], 10) || 0;
      totalScore += val;
    });

    const isPass = totalScore >= 48;
    const decision = isPass ? 'Pilihan' : 'Gagal';
    const decisionFull = isPass ? 'Pilihan ( 48 – 60 )' : 'Gagal ( < 48 )';

    return {
      totalScore,
      maxScore: 60,
      isPass,
      decision,
      decisionFull
    };
  }

  /**
   * Pengesahan RPH format bebas (Klausa 4.3.3)
   */
  function validateRPH(rph) {
    if (!rph) return { isValid: false, message: 'Data RPH kosong.' };
    const required = ['tajuk', 'objektif', 'alatan', 'setInduksi', 'perkembangan', 'penutup'];
    for (const f of required) {
      if (!rph[f] || rph[f].trim().length === 0) {
        return { isValid: false, message: `Sila lengkapkan ruangan: ${f}` };
      }
    }
    return { isValid: true, message: 'RPH sah dan lengkap.' };
  }

  // Kawalan Pemasa 10 Minit
  function startTimer() {
    if (isTimerRunning) return;
    isTimerRunning = true;
    playTone(1000, 0.4);

    if (window.MACApp && typeof window.MACApp.showToast === 'function') {
      window.MACApp.showToast('Simulasi Pengajaran 10 Minit Bermula!', 'info');
    }

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      remainingSec--;
      updateTimerUI();

      if (remainingSec === WARNING_TIME_SEC) {
        playTone(660, 0.5);
        if (window.MACApp && typeof window.MACApp.showToast === 'function') {
          window.MACApp.showToast('⚠️ Peringatan: Tinggal 2 Minit Akhir!', 'warning');
        }
      } else if (remainingSec <= 0) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        playTone(440, 1.0);
        if (window.MACApp && typeof window.MACApp.showToast === 'function') {
          window.MACApp.showToast('🛑 Masa Pengajaran 10 Minit Telah Tamat!', 'danger');
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
    remainingSec = TEACHING_DURATION_SEC;
    updateTimerUI();
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function updateTimerUI() {
    const displayEl = document.getElementById('teaching-timer-display');
    const phaseEl = document.getElementById('teaching-timer-phase');
    const btnStart = document.getElementById('btn-timer-start');
    const btnPause = document.getElementById('btn-timer-pause');
    const btnReset = document.getElementById('btn-timer-reset');

    if (displayEl) {
      displayEl.innerText = formatTime(remainingSec);
      if (remainingSec <= WARNING_TIME_SEC && remainingSec > 0) {
        displayEl.style.color = '#F59E0B'; // Kuning amaran
      } else if (remainingSec === 0) {
        displayEl.style.color = '#EF4444'; // Merah tamat
      } else {
        displayEl.style.color = '#10B981'; // Hijau berjalan
      }
    }

    if (phaseEl) {
      const elapsed = TEACHING_DURATION_SEC - remainingSec;
      if (elapsed <= 120) {
        phaseEl.innerText = 'Fasa 1: Set Induksi & Pemanasan Badan (00:00 - 02:00)';
      } else if (elapsed <= 480) {
        phaseEl.innerText = 'Fasa 2: Perkembangan & Latih Tubi Ansur Maju Kemahiran (02:00 - 08:00)';
      } else {
        phaseEl.innerText = 'Fasa 3: Penutup, Menyejukkan Badan & Soal Jawab (08:00 - 10:00)';
      }
    }

    if (btnStart) btnStart.disabled = isTimerRunning;
    if (btnPause) btnPause.disabled = !isTimerRunning;
    if (btnReset) btnReset.disabled = isTimerRunning && remainingSec === TEACHING_DURATION_SEC;
  }

  /**
   * Render Antaramuka Hab Penilaian Pengajaran Lampiran G1
   */
  function render(containerId = 'teaching-app') {
    if (typeof document === 'undefined') return;
    const container = document.getElementById(containerId);
    if (!container) return;

    // Muat data tersimpan
    let savedScores = {};
    let savedRph = {
      tajuk: 'Kemahiran Asas Futsal - Hantaran Leret & Kawalan Bola',
      tingkatan: 'Tingkatan 2',
      objektif: 'Pada akhir pengajaran, murid dapat:\n1. Melakukan sekurang-kurangnya 4 daripada 5 hantaran leret menggunakan bahagian dalam kaki dengan teknik yang betul.\n2. Menyatakan kedudukan kaki sokongan yang betul semasa melakukan hantaran leret.',
      alatan: '4 biji bola futsal, 12 kon penanda, wisel, jam randik.',
      setInduksi: '• Penerangan ringkas objektif & pemeriksaan tahap kesihatan murid.\n• Aktiviti pemanasan badan dinamik berpasangan (regangan otot quadriceps, hamstring & gastrocnemius).',
      perkembangan: '• Ansur Maju 1 (2 minit): Demonstrasi guru teknik hantaran leret kaki dominan.\n• Ansur Maju 2 (2 minit): Latih tubi statik berpasangan jarak 3 meter (10 kali ulangan).\n• Ansur Maju 3 (2 minit): Latih tubi dinamik bergerak selari (hantaran dan lari ke ruang kosong).',
      penutup: '• Aktiviti menyejukkan badan (cooling down) & regangan statik.\n• Soal jawab kognitif (kenapa kaki sokongan perlu berada di sisi bola?).\n• Penegasan nilai murni: Kerjasama, disiplin dan keselamatan alatan.'
    };

    try {
      const storedScores = localStorage.getItem('mac_teaching_scores');
      if (storedScores) savedScores = JSON.parse(storedScores);
      const storedRph = localStorage.getItem('mac_teaching_rph');
      if (storedRph) savedRph = JSON.parse(storedRph);
    } catch (e) {}

    // Hitung skor semasa
    const currentResult = calculateScore(savedScores);

    // Bina jadual borang rubrik Lampiran G1
    let rubricRowsHtml = '';
    TEACHING_CRITERIA_MARA.forEach((item, idx) => {
      const curVal = savedScores[item.id] || 4; // Lalai 4
      let radiosHtml = '';
      for (let sc = 1; sc <= 5; sc++) {
        radiosHtml += `
          <label class="rubric-score-opt">
            <input type="radio" name="score_${item.id}" value="${sc}" ${curVal === sc ? 'checked' : ''} onchange="MACTeaching.handleScoreChange('${item.id}', ${sc})">
            <span>${sc}</span>
          </label>
        `;
      }

      rubricRowsHtml += `
        <tr>
          <td class="font-bold">${idx + 1}</td>
          <td>
            <div class="rubric-criterion-label"><strong>${item.section}</strong> - ${item.label}</div>
            <small class="text-muted">${item.desc}</small>
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
            <h2>FASA 2: PENILAIAN PENGAJARAN (LAMPIRAN G1)</h2>
            <p>Borang Penilaian Pengajaran MARA Assessment Centre (v.300726) • Tempoh: 10 Minit Seorang</p>
          </div>
          <button type="button" class="btn btn-secondary" onclick="window.print()">
            🖨️ Cetak Borang Lampiran G1 &amp; RPH (A4)
          </button>
        </div>

        <!-- Peringatan Mandatori PJPK (Klausa 4.3 & 5.2 Lampiran A) -->
        <div class="alert-box-mara mb-4">
          <div class="alert-box-header">
            <span class="alert-icon">⚠️</span>
            <strong>SYARAT MANDATORI CALON PENDIDIKAN JASMANI DAN PENDIDIKAN KESIHATAN (PJPK):</strong>
          </div>
          <ul class="alert-box-list mt-2">
            <li><strong>Klausa 4.3.9:</strong> Calon PJPK perlu bersedia untuk PdP <strong>PENDIDIKAN JASMANI</strong>. Peralatan sukan <strong>tidak disediakan</strong> dan calon <strong>boleh/wajib membawa peralatan sukan yang diperlukan</strong>.</li>
            <li><strong>Klausa 4.3.6:</strong> <strong>DILARANG menggunakan projektor</strong> semasa Penilaian Pengajaran ini.</li>
            <li><strong>Klausa 4.3.7:</strong> Urus setia hanya menyediakan <strong>papan putih dan pen marker</strong> sahaja.</li>
            <li><strong>Klausa 4.3.3:</strong> Calon dikehendaki menyediakan <strong>Rancangan Pengajaran Harian (RPH)</strong> untuk dikemukakan kepada panel (format bebas).</li>
            <li><strong>Klausa 5.2.1:</strong> Calon PJPK diminta untuk <strong>menggunakan pakaian sukan</strong> semasa sesi Penilaian Pengajaran.</li>
          </ul>
        </div>

        <div class="grid grid-2">
          <!-- Kad 1: Pemasa Simulasi Pengajaran 10 Minit -->
          <div class="card">
            <div class="card-header border-red">
              <h3 class="card-heading">PEMASA SIMULASI PENGAJARAN (10 MINIT)</h3>
              <span class="badge badge-mara">Klausa 4.2</span>
            </div>
            <div class="card-body text-center">
              <div class="teaching-timer-box">
                <div id="teaching-timer-display" class="teaching-timer-digits">10:00</div>
                <div id="teaching-timer-phase" class="teaching-timer-phase text-muted mt-2">
                  Fasa 1: Set Induksi &amp; Pemanasan Badan (00:00 - 02:00)
                </div>
              </div>

              <!-- Butang Kawalan Pemasa -->
              <div class="btn-group-row mt-4">
                <button type="button" class="btn btn-primary btn-large" id="btn-timer-start">
                  ▶️ Mula 10 Minit
                </button>
                <button type="button" class="btn btn-secondary btn-large" id="btn-timer-pause" disabled>
                  ⏸️ Jeda
                </button>
                <button type="button" class="btn btn-ghost btn-large" id="btn-timer-reset">
                  🔄 Semula
                </button>
              </div>

              <div class="phase-breakdown-card mt-4 text-left">
                <h4 class="font-bold text-sm text-navy">Cadangan Pembahagian Masa (10 Minit):</h4>
                <ul class="text-xs text-muted mt-1">
                  <li><strong>00:00 - 02:00 (2 Min):</strong> Set Induksi, salam, semakan kesihatan murid, pemanasan badan dinamik berpasangan.</li>
                  <li><strong>02:00 - 08:00 (6 Min):</strong> Penerangan objektif, tunjuk cara teknik amali, latih tubi ansur maju 1, 2, 3 bersama alatan.</li>
                  <li><strong>08:00 - 10:00 (2 Min):</strong> Menyejukkan badan (cooling down), soal jawab pemikiran kognitif, penilaian &amp; refleksi.</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Kad 2: Pembina RPH Format Bebas (Klausa 4.3.3) -->
          <div class="card">
            <div class="card-header border-navy">
              <h3 class="card-heading">PENJANA RPH FORMAT BEBAS (KLAUSA 4.3.3)</h3>
              <span class="badge badge-info">Format Bebas</span>
            </div>
            <div class="card-body">
              <form id="form-rph" onsubmit="event.preventDefault();">
                <div class="form-grid-2">
                  <div class="form-group">
                    <label for="rph-tajuk"><strong>Tajuk Kemahiran PJ:</strong></label>
                    <input type="text" id="rph-tajuk" class="input-field" value="${savedRph.tajuk}">
                  </div>
                  <div class="form-group">
                    <label for="rph-tingkatan"><strong>Tingkatan:</strong></label>
                    <input type="text" id="rph-tingkatan" class="input-field" value="${savedRph.tingkatan}">
                  </div>
                </div>

                <div class="form-group mt-2">
                  <label for="rph-objektif"><strong>Objektif Pembelajaran:</strong></label>
                  <textarea id="rph-objektif" class="input-field" rows="2">${savedRph.objektif}</textarea>
                </div>

                <div class="form-group mt-2">
                  <label for="rph-alatan"><strong>Peralatan Sukan Dibawa Sendiri (Klausa 4.3.9):</strong></label>
                  <input type="text" id="rph-alatan" class="input-field" value="${savedRph.alatan}">
                </div>

                <div class="form-group mt-2">
                  <label for="rph-induksi"><strong>Set Induksi (2 Minit):</strong></label>
                  <textarea id="rph-induksi" class="input-field" rows="2">${savedRph.setInduksi}</textarea>
                </div>

                <div class="form-group mt-2">
                  <label for="rph-perkembangan"><strong>Perkembangan / Latih Tubi Ansur Maju (6 Minit):</strong></label>
                  <textarea id="rph-perkembangan" class="input-field" rows="3">${savedRph.perkembangan}</textarea>
                </div>

                <div class="form-group mt-2">
                  <label for="rph-penutup"><strong>Penutup &amp; Refleksi (2 Minit):</strong></label>
                  <textarea id="rph-penutup" class="input-field" rows="2">${savedRph.penutup}</textarea>
                </div>

                <div class="btn-group-row mt-3">
                  <button type="button" class="btn btn-primary" id="btn-save-rph">💾 Simpan RPH</button>
                  <button type="button" class="btn btn-secondary" onclick="window.print()">🖨️ Cetak RPH (A4)</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Kad 3: Borang Penilaian Pengajaran Lampiran G1 (12 Kriteria) -->
        <div class="card mt-4">
          <div class="card-header border-gold">
            <h3 class="card-heading">SEKSYEN 1 : PENILAIAN PENGAJARAN (LAMPIRAN G1)</h3>
            <span class="badge badge-gold">Skala 1 - 5 (5 Tertinggi) • Markah Penuh: 60</span>
          </div>
          <div class="card-body">
            <!-- Kad Skor Ringkasan -->
            <div class="score-summary-bar mb-4">
              <div class="score-summary-item">
                <span class="text-xs text-muted">Jumlah Markah Pengajaran:</span>
                <strong id="display-teaching-total" class="text-2xl">${currentResult.totalScore} / 60</strong>
              </div>
              <div class="score-summary-item">
                <span class="text-xs text-muted">Status Kelayakan Panel:</span>
                <strong id="display-teaching-decision" class="text-xl ${currentResult.isPass ? 'text-emerald' : 'text-danger'}">
                  ${currentResult.decisionFull}
                </strong>
              </div>
            </div>

            <!-- Jadual 12 Kriteria -->
            <div class="table-responsive">
              <table class="table-custom rubric-table">
                <thead>
                  <tr>
                    <th style="width: 5%;">Bil</th>
                    <th style="width: 65%;">Kriteria Penilaian Lampiran G1</th>
                    <th style="width: 30%;" class="text-center">Skor (1 - 5)</th>
                  </tr>
                </thead>
                <tbody>
                  ${rubricRowsHtml}
                </tbody>
              </table>
            </div>

            <!-- Cadangan Panel (Seksyen 4 Lampiran G1) -->
            <div class="cadangan-panel-box mt-4">
              <h4 class="font-bold text-navy">SEKSYEN 4 : CADANGAN PANEL (LAMPIRAN G1)</h4>
              <div class="radio-group-row mt-2">
                <div class="cadangan-pill ${currentResult.totalScore >= 48 ? 'pill-active-green' : ''}">
                  <span class="check-box-indicator">${currentResult.totalScore >= 48 ? '☑' : '☐'}</span>
                  <strong>Pilihan ( 48 – 60 )</strong>
                </div>
                <div class="cadangan-pill ${currentResult.totalScore < 48 ? 'pill-active-red' : ''}">
                  <span class="check-box-indicator">${currentResult.totalScore < 48 ? '☑' : '☐'}</span>
                  <strong>Gagal ( &lt; 48 )</strong>
                </div>
              </div>
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
      const stored = localStorage.getItem('mac_teaching_scores');
      if (stored) savedScores = JSON.parse(stored);
    } catch (e) {}

    savedScores[criterionId] = parseInt(scoreVal, 10);
    try {
      localStorage.setItem('mac_teaching_scores', JSON.stringify(savedScores));
    } catch (e) {}

    // Kemaskini skor
    const res = calculateScore(savedScores);
    const totEl = document.getElementById('display-teaching-total');
    const decEl = document.getElementById('display-teaching-decision');
    if (totEl) totEl.innerText = `${res.totalScore} / 60`;
    if (decEl) {
      decEl.innerText = res.decisionFull;
      decEl.className = `text-xl ${res.isPass ? 'text-emerald' : 'text-danger'}`;
    }
  }

  function setupEventListeners() {
    const btnStart = document.getElementById('btn-timer-start');
    const btnPause = document.getElementById('btn-timer-pause');
    const btnReset = document.getElementById('btn-timer-reset');

    if (btnStart) btnStart.addEventListener('click', startTimer);
    if (btnPause) btnPause.addEventListener('click', pauseTimer);
    if (btnReset) btnReset.addEventListener('click', resetTimer);

    const btnSaveRph = document.getElementById('btn-save-rph');
    if (btnSaveRph) {
      btnSaveRph.addEventListener('click', () => {
        const rphData = {
          tajuk: document.getElementById('rph-tajuk').value,
          tingkatan: document.getElementById('rph-tingkatan').value,
          objektif: document.getElementById('rph-objektif').value,
          alatan: document.getElementById('rph-alatan').value,
          setInduksi: document.getElementById('rph-induksi').value,
          perkembangan: document.getElementById('rph-perkembangan').value,
          penutup: document.getElementById('rph-penutup').value
        };

        const check = validateRPH(rphData);
        if (!check.isValid) {
          if (window.MACApp && typeof window.MACApp.showToast === 'function') {
            window.MACApp.showToast(check.message, 'warning');
          }
          return;
        }

        try {
          localStorage.setItem('mac_teaching_rph', JSON.stringify(rphData));
        } catch (e) {}

        if (window.MACApp && typeof window.MACApp.showToast === 'function') {
          window.MACApp.showToast('Rancangan Pengajaran Harian (RPH) berjaya disimpan.', 'success');
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
    TEACHING_DURATION_SEC,
    WARNING_TIME_SEC,
    TEACHING_CRITERIA_MARA,
    calculateScore,
    validateRPH,
    handleScoreChange,
    startTimer,
    pauseTimer,
    resetTimer,
    render
  };
})();

// Eksport untuk Node.js & Pelayar
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MACTeaching;
}
if (typeof window !== 'undefined') {
  window.MACTeaching = MACTeaching;
}
