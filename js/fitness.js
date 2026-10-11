/**
 * ==========================================================================
 * MARA ASSESSMENT CENTRE (MAC) - HAB UJIAN KECERGASAN (LAMPIRAN E)
 * Module: js/fitness.js
 * Berasaskan 100% Borang Penilaian Ujian Kecergasan Lampiran E (v.300726)
 * Pure Vanilla JavaScript (ES6+) • Web Audio API Synthesizer (100% Luar Talian)
 * ==========================================================================
 */

const MACFitness = (function () {
  'use strict';

  // Jadual Rasmi Bleep Test 10 Peringkat Lampiran E MARA (v.300726)
  // Jumlah keseluruhan pusingan: 7+8+8+9+9+10+10+11+11+11 = 94 pusingan
  const BLEEP_TABLE_MARA = [
    { level: 1, shuttles: 7, speedKmH: 8.5, intervalSec: 8.47 },
    { level: 2, shuttles: 8, speedKmH: 9.0, intervalSec: 8.00 },
    { level: 3, shuttles: 8, speedKmH: 9.5, intervalSec: 7.58 },
    { level: 4, shuttles: 9, speedKmH: 10.0, intervalSec: 7.20 },
    { level: 5, shuttles: 9, speedKmH: 10.5, intervalSec: 6.86 },
    { level: 6, shuttles: 10, speedKmH: 11.0, intervalSec: 6.55 },
    { level: 7, shuttles: 10, speedKmH: 11.5, intervalSec: 6.26 },
    { level: 8, shuttles: 11, speedKmH: 12.0, intervalSec: 6.00 },
    { level: 9, shuttles: 11, speedKmH: 12.5, intervalSec: 5.76 },
    { level: 10, shuttles: 11, speedKmH: 13.0, intervalSec: 5.54 }
  ];

  // State Pemasa Bleep Test
  let audioCtx = null;
  let isRunning = false;
  let currentLevelIdx = 0; // 0..9 (Peringkat 1..10)
  let currentShuttle = 0;   // 1..shuttles
  let totalCompletedShuttles = 0;
  let timerInterval = null;
  let countdownSec = 0;

  /**
   * Mengira Indeks Jisim Badan (BMI) Mengikut Formula Rasmi Lampiran E:
   * BMI = Berat (kg) / (Tinggi (m) x Tinggi (m))
   */
  function calculateBMI(weightKg, heightM) {
    const w = parseFloat(weightKg);
    const h = parseFloat(heightM);

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
      return { bmi: 0, category: 'Tidak Sah', color: '#64748B' };
    }

    const bmiVal = +(w / (h * h)).toFixed(2);
    let category = '';
    let color = '';

    if (bmiVal < 18.5) {
      category = 'Kurang Berat Badan';
      color = '#0284C7'; // Info blue
    } else if (bmiVal <= 24.9) {
      category = 'Normal / Unggul';
      color = '#059669'; // Success green
    } else if (bmiVal <= 29.9) {
      category = 'Berlebihan Berat Badan';
      color = '#D97706'; // Warning yellow
    } else {
      category = 'Obesiti';
      color = '#DC2626'; // Danger red
    }

    return {
      bmi: bmiVal,
      category,
      color,
      formula: `BMI = ${w} kg / (${h} m x ${h} m) = ${bmiVal} kg/m²`
    };
  }

  /**
   * Semakan Syarat Pengecualian Kesihatan Mengikut Klausa 3.3 & 3.4 Lampiran A
   */
  function checkExemption(opts = {}) {
    if (opts.isPregnant) {
      return {
        exempted: true,
        reason: 'Dikecualikan di bawah Klausa 3.4 Lampiran A. Sila kemukakan sesalinan muka hadapan Buku Rekod Kesihatan Ibu kepada Urus Setia MAC.'
      };
    }
    if (opts.medicalCondition && opts.medicalCondition.trim().length > 0) {
      return {
        exempted: true,
        reason: `Dikecualikan di bawah Klausa 3.3 Lampiran A (${opts.medicalCondition.trim()}). Sila kemukakan sesalinan bukti masalah kesihatan kepada Urus Setia MAC.`
      };
    }
    return {
      exempted: false,
      reason: 'Layak dan diwajibkan menduduki Ujian Bleep Test 20m.'
    };
  }

  /**
   * Sintesis Nada Audio Bleep (Web Audio API - Sifar Sambungan Internet)
   */
  function playTone(freq = 880, duration = 0.25) {
    if (typeof window === 'undefined') return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!audioCtx) audioCtx = new AudioContext();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn('Audio bip tidak dapat dimainkan:', e);
    }
  }

  /**
   * Memulakan Sesi Bleep Test
   */
  function startBleepTest() {
    if (isRunning) return;
    isRunning = true;
    currentLevelIdx = 0;
    currentShuttle = 1;
    totalCompletedShuttles = 0;

    playTone(1000, 0.5); // Nada permulaan tinggi
    if (window.MACApp && typeof window.MACApp.showToast === 'function') {
      window.MACApp.showToast('Ujian Bleep Test 20m bermula! Peringkat 1 Pusingan 1.', 'info');
    }

    runNextShuttle();
    updateBleepUI();
  }

  /**
   * Menjalankan kiraan pusingan semasa
   */
  function runNextShuttle() {
    if (!isRunning) return;
    const curLevel = BLEEP_TABLE_MARA[currentLevelIdx];
    countdownSec = curLevel.intervalSec;

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      countdownSec -= 0.1;
      if (countdownSec <= 0) {
        clearInterval(timerInterval);
        handleShuttleComplete();
      } else {
        updateTimerDisplay();
      }
    }, 100);
  }

  /**
   * Apabila pusingan tamat secara automatik mengikut sela masa
   */
  function handleShuttleComplete() {
    playTone(880, 0.2); // Nada bip biasa
    totalCompletedShuttles++;

    const curLevel = BLEEP_TABLE_MARA[currentLevelIdx];
    if (currentShuttle < curLevel.shuttles) {
      currentShuttle++;
    } else {
      // Peringkat selesai, mara ke peringkat seterusnya
      if (currentLevelIdx < BLEEP_TABLE_MARA.length - 1) {
        currentLevelIdx++;
        currentShuttle = 1;
        playTone(1320, 0.4); // Nada bip 3-kali ganda tanda naik peringkat
        if (window.MACApp && typeof window.MACApp.showToast === 'function') {
          window.MACApp.showToast(`Peringkat ${currentLevelIdx + 1} bermula! (${BLEEP_TABLE_MARA[currentLevelIdx].speedKmH} km/j)`, 'warning');
        }
      } else {
        // Tamat semua 10 Peringkat (94 pusingan!)
        finishBleepTest('Tahniah! Anda telah menamatkan kesemua 10 Peringkat Bleep Test (94 pusingan)!');
        return;
      }
    }

    updateBleepUI();
    runNextShuttle();
  }

  /**
   * Butang manual 'Catat Pusingan' (apabila calon tiba di garisan 20m)
   */
  function recordCurrentShuttle() {
    if (!isRunning) return;
    playTone(660, 0.15);
    handleShuttleComplete();
  }

  /**
   * Berhenti / Gagal menamatkan larian
   */
  function stopBleepTest() {
    if (!isRunning) return;
    clearInterval(timerInterval);
    isRunning = false;
    playTone(440, 0.6); // Nada tamat rendah

    const lvl = currentLevelIdx + 1;
    const sht = currentShuttle;
    const msg = `Larian ditamatkan pada Peringkat ${lvl}, Pusingan ${sht} (Jumlah: ${totalCompletedShuttles} pusingan).`;

    if (window.MACApp && typeof window.MACApp.showToast === 'function') {
      window.MACApp.showToast(msg, 'info');
    }

    // Simpan ke localStorage
    try {
      localStorage.setItem('mac_fitness_last_bleep', JSON.stringify({
        level: lvl,
        shuttle: sht,
        totalShuttles: totalCompletedShuttles,
        date: new Date().toLocaleDateString('ms-MY')
      }));
    } catch (e) {}

    updateBleepUI();
  }

  function finishBleepTest(msg) {
    clearInterval(timerInterval);
    isRunning = false;
    playTone(1760, 0.8);
    if (window.MACApp && typeof window.MACApp.showToast === 'function') {
      window.MACApp.showToast(msg, 'success');
    }
    updateBleepUI();
  }

  function updateTimerDisplay() {
    const el = document.getElementById('bleep-countdown');
    if (el) {
      el.innerText = Math.max(0, countdownSec).toFixed(1) + 's';
    }
  }

  function updateBleepUI() {
    const lvlEl = document.getElementById('bleep-current-level');
    const shtEl = document.getElementById('bleep-current-shuttle');
    const totEl = document.getElementById('bleep-total-shuttles');
    const spdEl = document.getElementById('bleep-current-speed');
    const startBtn = document.getElementById('btn-bleep-start');
    const stopBtn = document.getElementById('btn-bleep-stop');
    const tapBtn = document.getElementById('btn-bleep-tap');

    const curLvl = BLEEP_TABLE_MARA[currentLevelIdx];
    if (lvlEl) lvlEl.innerText = isRunning ? `Peringkat ${curLvl.level}` : '-';
    if (shtEl) shtEl.innerText = isRunning ? `Pusingan ${currentShuttle} / ${curLvl.shuttles}` : '-';
    if (totEl) totEl.innerText = `${totalCompletedShuttles} / 94`;
    if (spdEl) spdEl.innerText = isRunning ? `${curLvl.speedKmH} km/j` : '-';

    if (startBtn) startBtn.disabled = isRunning;
    if (stopBtn) stopBtn.disabled = !isRunning;
    if (tapBtn) tapBtn.disabled = !isRunning;

    // Kemaskini Grid Peringkat
    BLEEP_TABLE_MARA.forEach((item, idx) => {
      for (let s = 1; s <= item.shuttles; s++) {
        const cell = document.getElementById(`cell-${item.level}-${s}`);
        if (cell) {
          if (idx < currentLevelIdx || (idx === currentLevelIdx && s <= currentShuttle)) {
            cell.classList.add('cell-active');
          } else {
            cell.classList.remove('cell-active');
          }
        }
      }
    });
  }

  /**
   * Render Antaramuka Hab Kecergasan Lampiran E
   */
  function render(containerId = 'fitness-app') {
    if (typeof document === 'undefined') return;
    const container = document.getElementById(containerId);
    if (!container) return;

    let savedBmi = { bmi: 0, category: '-', color: '#64748B' };
    let savedWeight = '';
    let savedHeight = '';
    let isSmoker = 'tidak';
    let healthNotes = '';

    try {
      const storedBmi = localStorage.getItem('mac_fitness_bmi');
      if (storedBmi) {
        const parsed = JSON.parse(storedBmi);
        savedWeight = parsed.weight || '';
        savedHeight = parsed.height || '';
        if (savedWeight && savedHeight) {
          savedBmi = calculateBMI(savedWeight, savedHeight);
        }
      }
      isSmoker = localStorage.getItem('mac_fitness_smoker') || 'tidak';
      healthNotes = localStorage.getItem('mac_fitness_health_notes') || '';
    } catch (e) {}

    // Bina Jadual Grid 10 Peringkat Lampiran E
    let tableRowsHtml = '';
    BLEEP_TABLE_MARA.forEach(row => {
      let cellsHtml = '';
      for (let s = 1; s <= 11; s++) {
        if (s <= row.shuttles) {
          cellsHtml += `<td id="cell-${row.level}-${s}" class="bleep-cell">${s}</td>`;
        } else {
          cellsHtml += `<td class="bleep-cell bleep-cell-empty">-</td>`;
        }
      }
      tableRowsHtml += `
        <tr>
          <td class="font-bold text-center">Peringkat ${row.level} (${row.speedKmH} km/j)</td>
          ${cellsHtml}
        </tr>
      `;
    });

    container.innerHTML = `
      <div class="module-wrapper">
        <!-- Banner Tajuk Modul -->
        <div class="module-header-banner">
          <div class="module-header-text">
            <h2>FASA 1: UJIAN KECERGASAN (LAMPIRAN E)</h2>
            <p>Borang Penilaian Ujian Kecergasan MARA Assessment Centre (v.300726) • Tempoh: Anggaran 60 Minit</p>
          </div>
          <button type="button" class="btn btn-secondary" onclick="window.print()">
            🖨️ Cetak Borang Lampiran E (A4)
          </button>
        </div>

        <div class="grid grid-2">
          <!-- Kad 1: Seksyen 1 - BMI (Indeks Jisim Badan) -->
          <div class="card">
            <div class="card-header border-red">
              <h3 class="card-heading">SEKSYEN 1 : INDEKS JISIM BADAN (BMI)</h3>
              <span class="badge badge-mara">Wajib</span>
            </div>
            <div class="card-body">
              <div class="formula-box">
                <strong>Pengiraan Indeks Jisim Badan:</strong><br>
                <code>BMI = Berat (kg) / [Tinggi (m) x Tinggi (m)]</code>
              </div>

              <div class="form-grid-2 mt-3">
                <div class="form-group">
                  <label for="input-weight">Berat Badan (kg):</label>
                  <input type="number" step="0.1" id="input-weight" class="input-field" placeholder="Cth: 70" value="${savedWeight}">
                </div>
                <div class="form-group">
                  <label for="input-height">Ketinggian (m):</label>
                  <input type="number" step="0.01" id="input-height" class="input-field" placeholder="Cth: 1.75" value="${savedHeight}">
                </div>
              </div>

              <div class="bmi-result-card mt-3" style="border-left: 5px solid ${savedBmi.color};">
                <div class="bmi-value-text">
                  <span>Nilai BMI:</span>
                  <strong id="display-bmi-value">${savedBmi.bmi > 0 ? savedBmi.bmi + ' kg/m²' : '--'}</strong>
                </div>
                <div class="bmi-category-text">
                  <span>Klasifikasi:</span>
                  <span id="display-bmi-cat" class="font-bold" style="color: ${savedBmi.color};">${savedBmi.category}</span>
                </div>
              </div>

              <div class="mt-3">
                <button type="button" class="btn btn-primary w-full" id="btn-calc-bmi">Kira &amp; Simpan BMI</button>
              </div>
            </div>
          </div>

          <!-- Kad 2: Seksyen 2 - Sejarah Kesihatan & Pengecualian -->
          <div class="card">
            <div class="card-header border-navy">
              <h3 class="card-heading">SEKSYEN 2 : SEJARAH KESIHATAN</h3>
              <span class="badge badge-info">Deklarasi</span>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label><strong>Adakah Anda Merokok?</strong></label>
                <div class="radio-group-row">
                  <label class="radio-label">
                    <input type="radio" name="health_smoker" value="ya" ${isSmoker === 'ya' ? 'checked' : ''}> Ya
                  </label>
                  <label class="radio-label">
                    <input type="radio" name="health_smoker" value="tidak" ${isSmoker !== 'ya' ? 'checked' : ''}> Tidak
                  </label>
                </div>
              </div>

              <div class="form-group mt-3">
                <label for="input-health-notes"><strong>Sejarah Kesihatan Diri (Jika ada masalah):</strong></label>
                <textarea id="input-health-notes" class="input-field" rows="3" placeholder="Sila nyatakan jika ada sebarang masalah kesihatan fizikal atau rawatan hospital...">${healthNotes}</textarea>
              </div>

              <div class="notice-box-sm mt-2">
                <small>
                  <strong>Klausa 3.3 &amp; 3.4 Lampiran A:</strong> Calon yang mengalami masalah kesihatan kritikal atau mengandung boleh dikecualikan dengan mengemukakan bukti perubatan / sesalinan muka depan Buku Rekod Kesihatan Ibu kepada Urus Setia.
                </small>
              </div>

              <div class="mt-3">
                <button type="button" class="btn btn-secondary w-full" id="btn-save-health">Simpan Sejarah Kesihatan</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Kad 3: Seksyen 3 - Bleep Test 20m Rasmi MARA -->
        <div class="card mt-4">
          <div class="card-header border-gold">
            <h3 class="card-heading">SEKSYEN 3 : BLEEP TEST (LARIAN 20 METER/PUSINGAN)</h3>
            <span class="badge badge-gold">10 Peringkat • 94 Pusingan</span>
          </div>
          <div class="card-body">
            <!-- Papan Pemuka Larian Touch-Friendly (iPad & Mobile) -->
            <div class="bleep-dashboard-grid">
              <div class="bleep-stat-box">
                <span class="bleep-stat-label">Peringkat Semasa</span>
                <strong id="bleep-current-level" class="bleep-stat-val text-primary">-</strong>
              </div>
              <div class="bleep-stat-box">
                <span class="bleep-stat-label">Pusingan</span>
                <strong id="bleep-current-shuttle" class="bleep-stat-val text-navy">-</strong>
              </div>
              <div class="bleep-stat-box">
                <span class="bleep-stat-label">Kelajuan Larian</span>
                <strong id="bleep-current-speed" class="bleep-stat-val text-amber">-</strong>
              </div>
              <div class="bleep-stat-box">
                <span class="bleep-stat-label">Kiraan Sela Masa</span>
                <strong id="bleep-countdown" class="bleep-stat-val text-emerald">0.0s</strong>
              </div>
              <div class="bleep-stat-box">
                <span class="bleep-stat-label">Jumlah Selesai</span>
                <strong id="bleep-total-shuttles" class="bleep-stat-val">0 / 94</strong>
              </div>
            </div>

            <!-- Butang Kawalan Larian Bersaiz Besar (Mudah Ditekan di Padang) -->
            <div class="bleep-controls-grid mt-4">
              <button type="button" class="btn btn-primary btn-large" id="btn-bleep-start">
                ▶️ Mula Bleep Test
              </button>
              <button type="button" class="btn btn-success btn-large" id="btn-bleep-tap" disabled>
                👟 Sampai Garisan (Catat Pusingan)
              </button>
              <button type="button" class="btn btn-danger btn-large" id="btn-bleep-stop" disabled>
                ⏹️ Berhenti / Tamat Larian
              </button>
            </div>

            <!-- Jadual 10 Peringkat Mengikut Lampiran E -->
            <div class="mobile-scroll-hint">👈 Leret jadual ke kanan untuk pusingan 1 hingga 11 👉</div>
            <div class="table-responsive mt-2">
              <table class="table-custom bleep-table">
                <thead>
                  <tr>
                    <th style="width: 22%;">Peringkat</th>
                    <th colspan="11" class="text-center">Pusingan (20 meter/pusingan)</th>
                  </tr>
                  <tr class="subhead">
                    <th>(Kelajuan km/j)</th>
                    <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th>
                  </tr>
                </thead>
                <tbody>
                  ${tableRowsHtml}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Kad 4: Seksyen 4 - Keputusan Rasmi MARA -->
        <div class="card mt-4 print-only-border">
          <div class="card-header bg-subtle">
            <h3 class="card-heading">SEKSYEN 4 : KEPUTUSAN (Untuk Kegunaan MARA Sahaja)</h3>
          </div>
          <div class="card-body">
            <div class="form-grid-3">
              <div class="form-group">
                <label>Markah / Keputusan:</label>
                <div class="signature-box">______________________</div>
              </div>
              <div class="form-group">
                <label>Tandatangan &amp; Cap Jawatan:</label>
                <div class="signature-box">______________________</div>
              </div>
              <div class="form-group">
                <label>Tarikh:</label>
                <div class="signature-box">______ / ______ / 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Pasang Event Listeners
    setupEventListeners();
  }

  function setupEventListeners() {
    const btnCalcBmi = document.getElementById('btn-calc-bmi');
    if (btnCalcBmi) {
      btnCalcBmi.addEventListener('click', () => {
        const w = document.getElementById('input-weight').value;
        const h = document.getElementById('input-height').value;
        const res = calculateBMI(w, h);

        const valEl = document.getElementById('display-bmi-value');
        const catEl = document.getElementById('display-bmi-cat');
        if (valEl) valEl.innerText = res.bmi > 0 ? `${res.bmi} kg/m²` : '--';
        if (catEl) {
          catEl.innerText = res.category;
          catEl.style.color = res.color;
        }

        try {
          localStorage.setItem('mac_fitness_bmi', JSON.stringify({ weight: w, height: h, bmi: res.bmi }));
        } catch (e) {}

        if (window.MACApp && typeof window.MACApp.showToast === 'function') {
          window.MACApp.showToast(`BMI Berjaya Dikira: ${res.bmi} kg/m² (${res.category})`, 'success');
        }
      });
    }

    const btnSaveHealth = document.getElementById('btn-save-health');
    if (btnSaveHealth) {
      btnSaveHealth.addEventListener('click', () => {
        const smokerRadios = document.getElementsByName('health_smoker');
        let smokerVal = 'tidak';
        smokerRadios.forEach(r => { if (r.checked) smokerVal = r.value; });
        const notes = document.getElementById('input-health-notes').value;

        try {
          localStorage.setItem('mac_fitness_smoker', smokerVal);
          localStorage.setItem('mac_fitness_health_notes', notes);
        } catch (e) {}

        if (window.MACApp && typeof window.MACApp.showToast === 'function') {
          window.MACApp.showToast('Maklumat Sejarah Kesihatan berjaya disimpan.', 'success');
        }
      });
    }

    const startBtn = document.getElementById('btn-bleep-start');
    const stopBtn = document.getElementById('btn-bleep-stop');
    const tapBtn = document.getElementById('btn-bleep-tap');

    if (startBtn) startBtn.addEventListener('click', startBleepTest);
    if (stopBtn) stopBtn.addEventListener('click', stopBleepTest);
    if (tapBtn) tapBtn.addEventListener('click', recordCurrentShuttle);
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
    BLEEP_TABLE_MARA,
    calculateBMI,
    checkExemption,
    startBleepTest,
    stopBleepTest,
    recordCurrentShuttle,
    render
  };
})();

// Eksport untuk Node.js & Pelayar
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MACFitness;
}
if (typeof window !== 'undefined') {
  window.MACFitness = MACFitness;
}
