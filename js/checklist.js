/**
 * ==========================================================================
 * MARA ASSESSMENT CENTRE (MAC) - HAB SENARAI SEMAK & PANDUAN (LAMPIRAN A & D)
 * Module: js/checklist.js
 * Berasaskan 100% Dokumen Rasmi MARA:
 * - Garis Panduan Program MAC Lampiran A (v.300726)
 * - Borang Permohonan Jawatan Lampiran D (v.300726)
 * Pure Vanilla JavaScript (ES6+) • 100% Offline-Ready
 * ==========================================================================
 */

const MACChecklist = (function () {
  'use strict';

  // 10 Dokumen Asal Mengikut Klausa 1 Lampiran A
  const ORIGINAL_DOCS_MARA = [
    { code: '1.1', item: '1.1 Sijil Kelahiran', note: 'Wajib' },
    { code: '1.2', item: '1.2 Sijil SPM', note: 'Wajib (Kepujian Bahasa Melayu)' },
    { code: '1.3', item: '1.3 Sijil STPM / Matrikulasi / Diploma – Yang Berkaitan', note: 'Jika Berkaitan' },
    { code: '1.4', item: '1.4 Transkrip Diploma – Jika Berkaitan', note: 'Jika Berkaitan' },
    { code: '1.5', item: '1.5 Sijil Ijazah Sarjana Muda / Sarjana / PhD – Yang Berkaitan', note: 'Wajib (PJPK/Sains Sukan/Pendidikan)' },
    { code: '1.6', item: '1.6 Transkrip Ijazah Sarjana Muda / Sarjana / PhD – Yang Berkaitan', note: 'Wajib (Transkrip Lengkap)' },
    { code: '1.7', item: '1.7 Sijil Diploma Pendidikan – Jika Berkaitan', note: 'Jika Berkaitan' },
    { code: '1.8', item: '1.8 Transkrip Diploma Pendidikan – Jika Berkaitan', note: 'Jika Berkaitan' },
    { code: '1.9', item: '1.9 Sijil Tahfiz / Diploma Tahfiz - Jika Berkaitan', note: 'Jika Berkaitan' },
    { code: '1.10', item: '1.10 Sijil Ujian Bahasa Inggeris CEFR – Jika Berkaitan', note: 'Jika Berkaitan (MUET/CEFR)' }
  ];

  // 18 Salinan Dokumen Serahan Urus Setia Mengikut Klausa 2 Lampiran A
  const COPY_DOCS_MARA = [
    { code: '2.1', item: 'Borang Penilaian Pengajaran – Lampiran G1', copies: 2, required: true },
    { code: '2.2', item: 'Borang Penilaian Temu Duga – Lampiran F1', copies: 4, required: true },
    { code: '2.3', item: 'Borang Permohonan Jawatan – Lampiran D', copies: 1, required: true },
    { code: '2.4', item: 'Resume', copies: 1, required: true },
    { code: '2.5', item: 'Salinan Kad Pengenalan *', copies: 1, required: true },
    { code: '2.6', item: 'Salinan Sijil Kelahiran *', copies: 1, required: true },
    { code: '2.7', item: 'Salinan SPM *', copies: 1, required: true },
    { code: '2.8', item: 'Salinan STPM / Matrikulasi / Diploma *', copies: 1, required: false },
    { code: '2.9', item: 'Salinan Transkrip Diploma * - Jika Berkaitan', copies: 1, required: false },
    { code: '2.10', item: 'Pengiktirafan Diploma (MQA / MQR) - Jika Berkaitan', copies: 1, required: false },
    { code: '2.11', item: 'Salinan Sijil Sarjana Muda / Sarjana / PhD *', copies: 1, required: true },
    { code: '2.12', item: 'Salinan Transkrip Ijazah Sarjana Muda / Sarjana / PhD *', copies: 1, required: true },
    { code: '2.13', item: 'Pengiktirafan Ijazah Sarjana Muda / Sarjana / PhD (MQA / MQR)', copies: 1, required: true },
    { code: '2.14', item: 'Salinan Sijil Diploma Pendidikan * – Jika Berkaitan', copies: 1, required: false },
    { code: '2.15', item: 'Salinan Transkrip Diploma Pendidikan * – Jika Berkaitan', copies: 1, required: false },
    { code: '2.16', item: 'Pengiktirafan Diploma Pendidikan (MQA / MQR) – Jika Berkaitan', copies: 1, required: false },
    { code: '2.17', item: 'Salinan Sijil Tahfiz / Diploma Tahfiz * – Jika Berkaitan', copies: 1, required: false },
    { code: '2.18', item: 'Salinan Sijil Ujian Bahasa Inggeris CEFR – Jika Berkaitan', copies: 1, required: false }
  ];

  // Dokumen Lain (Klausa 3 Lampiran A)
  const OTHER_DOCS_MARA = {
    lampiranECopies: 1,
    passportPhotos: 8
  };

  // 12 Seksyen Borang Permohonan Jawatan Lampiran D
  const LAMPIRAN_D_SECTIONS = [
    { sec: 1, title: 'SEKSYEN 1 : BUTIRAN PERIBADI' },
    { sec: 2, title: 'SEKSYEN 2 : BUTIRAN KELUARGA' },
    { sec: 3, title: 'SEKSYEN 3 : LATAR BELAKANG PENDIDIKAN' },
    { sec: 4, title: 'SEKSYEN 4 : PENGALAMAN PEKERJAAN' },
    { sec: 5, title: 'SEKSYEN 5 : BUTIRAN PEKERJAAN SEMASA' },
    { sec: 6, title: 'SEKSYEN 6 : RUJUKAN (Bukan dalam Kalangan Saudara-mara)' },
    { sec: 7, title: 'SEKSYEN 7 : TAHAP PENGUASAAN BAHASA' },
    { sec: 8, title: 'SEKSYEN 8 : HOBI / SUKAN' },
    { sec: 9, title: 'SEKSYEN 9 : KEAHLIAN PROFESIONAL' },
    { sec: 10, title: 'SEKSYEN 10 : PERAKUAN KESIHATAN' },
    { sec: 11, title: 'SEKSYEN 11 : KETERANGAN AM' },
    { sec: 12, title: 'SEKSYEN 12 : PENGAKUAN' }
  ];

  /**
   * Mengira Peratusan Kesediaan Fail Dokumen
   */
  function calculateReadiness(checkedMap = {}) {
    let completedCount = 0;
    const totalDocs = ORIGINAL_DOCS_MARA.length + COPY_DOCS_MARA.length; // 10 + 18 = 28

    ORIGINAL_DOCS_MARA.forEach(d => {
      if (checkedMap[`orig_${d.code}`]) completedCount++;
    });

    COPY_DOCS_MARA.forEach(d => {
      if (checkedMap[`copy_${d.code}`]) completedCount++;
    });

    const percentage = Math.round((completedCount / totalDocs) * 100);

    return {
      completedCount,
      totalDocs,
      percentage
    };
  }

  /**
   * Render Antaramuka Hab Senarai Semak & Panduan Lampiran A & D
   */
  function render(containerId = 'checklist-app') {
    if (typeof document === 'undefined') return;
    const container = document.getElementById(containerId);
    if (!container) return;

    let checkedState = {};
    let formDData = {};

    try {
      const storedChk = localStorage.getItem('mac_checklist_state');
      if (storedChk) checkedState = JSON.parse(storedChk);
      const storedFormD = localStorage.getItem('mac_lampiran_d_data');
      if (storedFormD) formDData = JSON.parse(storedFormD);
    } catch (e) {}

    const readiness = calculateReadiness(checkedState);

    // Bina senarai semak dokumen asal (10 perkara)
    let origListHtml = '';
    ORIGINAL_DOCS_MARA.forEach(item => {
      const isChecked = !!checkedState[`orig_${item.code}`];
      origListHtml += `
        <li class="checklist-item-row">
          <label class="checklist-label">
            <input type="checkbox" id="chk_orig_${item.code}" ${isChecked ? 'checked' : ''} onchange="MACChecklist.handleCheckChange('orig_${item.code}', this.checked)">
            <span class="checklist-text">${item.item}</span>
          </label>
          <span class="badge ${item.note.includes('Wajib') ? 'badge-mara' : 'badge-subtle'}">${item.note}</span>
        </li>
      `;
    });

    // Bina senarai semak salinan dokumen urus setia (18 perkara)
    let copyListHtml = '';
    COPY_DOCS_MARA.forEach(item => {
      const isChecked = !!checkedState[`copy_${item.code}`];
      copyListHtml += `
        <li class="checklist-item-row">
          <label class="checklist-label">
            <input type="checkbox" id="chk_copy_${item.code}" ${isChecked ? 'checked' : ''} onchange="MACChecklist.handleCheckChange('copy_${item.code}', this.checked)">
            <span class="checklist-text">${item.code} ${item.item}</span>
          </label>
          <span class="badge badge-gold">${item.copies} Salinan</span>
        </li>
      `;
    });

    container.innerHTML = `
      <div class="module-wrapper">
        <!-- Banner Tajuk Modul -->
        <div class="module-header-banner">
          <div class="module-header-text">
            <h2>PANDUAN CALON &amp; SENARAI SEMAK FAIL (LAMPIRAN A &amp; D)</h2>
            <p>Garis Panduan Program MARA Assessment Centre (MAC) Pegawai Perkhidmatan Pendidikan DG9 (v.300726)</p>
          </div>
          <button type="button" class="btn btn-secondary" onclick="window.print()">
            🖨️ Cetak Senarai Semak &amp; Borang D (A4)
          </button>
        </div>

        <!-- Bar Status Kesediaan Fail Dokumen -->
        <div class="card mb-4">
          <div class="card-body">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h3 class="card-heading">STATUS KESEDIAAN DOKUMEN &amp; FAIL CALON</h3>
                <p class="text-sm text-muted">Pastikan dokumen asal disusun mengikut urutan dan salinan telah disahkan.</p>
              </div>
              <div class="text-right">
                <span id="display-readiness-percent" class="text-2xl font-bold text-primary">${readiness.percentage}%</span>
                <div class="text-xs text-muted" id="display-readiness-count">${readiness.completedCount} daripada ${readiness.totalDocs} Dokumen Ditandakan</div>
              </div>
            </div>
            <div class="progress-bar-wrap mt-3">
              <div id="display-readiness-bar" class="progress-bar-fill bg-mara" style="width: ${readiness.percentage}%;"></div>
            </div>
          </div>
        </div>

        <!-- Kad Peringatan Penting Klausa 1 - 6 Lampiran A -->
        <div class="grid grid-2 mb-4">
          <div class="card">
            <div class="card-header border-red">
              <h3 class="card-heading">⏰ TARIKH, MASA &amp; ETIKA PAKAIAN (KLAUSA 1 &amp; 5)</h3>
            </div>
            <div class="card-body text-sm">
              <ul class="clean-bullet-list">
                <li><strong>Waktu Pendaftaran:</strong> <strong>7.30 pagi hingga 8.00 pagi</strong>. Calon diminta hadir awal bagi urusan pendaftaran. Program berlangsung hingga lewat petang.</li>
                <li><strong>Etika Pakaian Calon PJPK:</strong> <strong>Wajib terus berpakaian sukan semasa mendaftar</strong> bagi melancarkan Ujian Kecergasan &amp; Penilaian Pengajaran.</li>
                <li><strong>Salinan Disahkan Benar:</strong> Salinan sijil mesti disahkan oleh <strong>Pegawai Kerajaan Kumpulan Pengurusan &amp; Profesional (Gred 9 / Gred 41 ke atas)</strong> atau Peguam / Pesuruhjaya Sumpah.</li>
                <li><strong>Pengiktirafan MQA/MQR:</strong> Surat pengiktirafan ijazah hendaklah dimuat turun melalui portal rasmi MQA memastikan tarikh pengiktirafan selari dengan tarikh graduasi.</li>
              </ul>
            </div>
          </div>

          <div class="card">
            <div class="card-header border-navy">
              <h3 class="card-heading">📌 KEPERLUAN DOKUMEN LAIN (KLAUSA 3)</h3>
            </div>
            <div class="card-body text-sm">
              <ul class="clean-bullet-list">
                <li><strong>Gambar Berukuran Pasport:</strong> <strong>8 Keping</strong> gambar terkini berlatar belakang biru/putih (ditampal pada Lampiran D, E, F1 dan G1).</li>
                <li><strong>Borang Penilaian Kecergasan (Lampiran E):</strong> 1 Salinan (diserahkan kepada urus setia sejurus selepas tamat Ujian Bleep Test).</li>
                <li><strong>Telefon Bimbit:</strong> Hendaklah berada dalam <strong>mod senyap</strong> sepanjang program.</li>
                <li><strong>Larangan Rakaman:</strong> Calon <strong>DILARANG mengambil gambar atau video</strong> sepanjang program MAC berlangsung.</li>
                <li><strong>Penginapan &amp; Makanan:</strong> Tidak disediakan oleh penganjur. Sebarang kos adalah tanggungan sendiri.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="grid grid-2">
          <!-- Senarai 1: Dokumen Asal (10 Perkara) -->
          <div class="card">
            <div class="card-header border-gold">
              <h3 class="card-heading">1. DOKUMEN ASAL (SUSUNAN DALAM FAIL)</h3>
              <span class="badge badge-gold">10 Dokumen</span>
            </div>
            <div class="card-body">
              <p class="text-xs text-muted mb-2">Disusun di dalam satu fail mengikut urutan bilangan 1.1 hingga 1.10:</p>
              <ul class="checklist-items-container">
                ${origListHtml}
              </ul>
              <small class="text-muted block mt-2">* Sijil-sijil asal lain (kejurulatihan, BLS, dsb.) boleh diletakkan selepas 1.10.</small>
            </div>
          </div>

          <!-- Senarai 2: Salinan Dokumen Urus Setia (18 Perkara) -->
          <div class="card">
            <div class="card-header border-emerald">
              <h3 class="card-heading">2. SALINAN DOKUMEN (SERAH KEPADA URUS SETIA)</h3>
              <span class="badge badge-mara">18 Dokumen</span>
            </div>
            <div class="card-body">
              <p class="text-xs text-muted mb-2">Diserahkan kepada urus setia semasa sesi pendaftaran:</p>
              <ul class="checklist-items-container">
                ${copyListHtml}
              </ul>
              <div class="notice-box-sm mt-3">
                <small><strong>Penting:</strong> Borang G1 (2 salinan), F1 (4 salinan), dan D (1 salinan) perlu lengkap diisi dengan butiran calon sebelum hadir.</small>
              </div>
            </div>
          </div>
        </div>

        <!-- Borang Digital Lampiran D (Borang Permohonan Jawatan 12 Seksyen) -->
        <div class="card mt-4 print-only-border">
          <div class="card-header bg-subtle">
            <h3 class="card-heading">BORANG PERMOHONAN JAWATAN MARA ASSESSMENT CENTER (LAMPIRAN D v.300726)</h3>
            <span class="badge badge-mara">12 Seksyen</span>
          </div>
          <div class="card-body">
            <p class="text-sm text-muted mb-3">Isi maklumat permohonan di bawah untuk menjana Borang Permohonan Jawatan Lampiran D yang kemas dan sedia dicetak (1 Salinan):</p>
            
            <form id="form-lampiran-d" onsubmit="event.preventDefault();">
              <!-- Seksyen 1: Butiran Peribadi -->
              <h4 class="font-bold text-navy border-b pb-1 mb-2">SEKSYEN 1 : BUTIRAN PERIBADI</h4>
              <div class="form-grid-2">
                <div class="form-group">
                  <label for="d-nama">Nama Penuh:</label>
                  <input type="text" id="d-nama" class="input-field" value="${formDData.nama || ''}" placeholder="Cth: Muhammad Harith bin Roslan">
                </div>
                <div class="form-group">
                  <label for="d-kp">No. Kad Pengenalan:</label>
                  <input type="text" id="d-kp" class="input-field" value="${formDData.kp || ''}" placeholder="950101-01-1234">
                </div>
              </div>

              <div class="form-group mt-2">
                <label for="d-alamat">Alamat Surat Menyurat:</label>
                <textarea id="d-alamat" class="input-field" rows="2" placeholder="Alamat lengkap surat menyurat...">${formDData.alamat || ''}</textarea>
              </div>

              <div class="form-grid-3 mt-2">
                <div class="form-group">
                  <label for="d-tel">No. Telefon Bimbit:</label>
                  <input type="text" id="d-tel" class="input-field" value="${formDData.tel || ''}" placeholder="012-3456789">
                </div>
                <div class="form-group">
                  <label for="d-emel">Alamat E-mel:</label>
                  <input type="email" id="d-emel" class="input-field" value="${formDData.emel || ''}" placeholder="harith@email.com">
                </div>
                <div class="form-group">
                  <label for="d-jantina">Jantina:</label>
                  <select id="d-jantina" class="input-field">
                    <option value="Lelaki" ${formDData.jantina === 'Lelaki' ? 'selected' : ''}>Lelaki</option>
                    <option value="Perempuan" ${formDData.jantina === 'Perempuan' ? 'selected' : ''}>Perempuan</option>
                  </select>
                </div>
              </div>

              <!-- Seksyen 3: Latar Belakang Pendidikan -->
              <h4 class="font-bold text-navy border-b pb-1 mt-4 mb-2">SEKSYEN 3 : LATAR BELAKANG PENDIDIKAN</h4>
              <div class="form-grid-3">
                <div class="form-group">
                  <label for="d-ipt">Nama IPT / Universiti:</label>
                  <input type="text" id="d-ipt" class="input-field" value="${formDData.ipt || ''}" placeholder="Cth: Universiti Pendidikan Sultan Idris (UPSI)">
                </div>
                <div class="form-group">
                  <label for="d-bidang">Kelulusan Tertinggi / Bidang:</label>
                  <input type="text" id="d-bidang" class="input-field" value="${formDData.bidang || 'Ijazah Sarjana Muda Pendidikan (PJPK) dengan Kepujian'}" placeholder="PJPK / Sains Sukan">
                </div>
                <div class="form-group">
                  <label for="d-pngk">Keputusan / PNGK (CGPA):</label>
                  <input type="text" id="d-pngk" class="input-field" value="${formDData.pngk || ''}" placeholder="Cth: 3.65">
                </div>
              </div>

              <!-- Seksyen 12: Pengakuan -->
              <div class="notice-box-sm mt-4">
                <strong>SEKSYEN 12 : PENGAKUAN</strong><br>
                <small>Saya dengan ini mengesahkan bahawa segala keterangan yang diberikan di dalam borang ini adalah benar, dan faham sekiranya pada bila-bila masa selepas ditawarkan perkhidmatan didapati pengakuan di dalam borang ini tidak benar/palsu, MARA berhak untuk menamatkan perkhidmatan saya tanpa sebarang notis.</small>
              </div>

              <div class="btn-group-row mt-3">
                <button type="button" class="btn btn-primary" id="btn-save-form-d">💾 Simpan Maklumat Lampiran D</button>
                <button type="button" class="btn btn-secondary" onclick="window.print()">🖨️ Cetak Borang Lampiran D (A4)</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    `;

    setupEventListeners();
  }

  function handleCheckChange(itemKey, isChecked) {
    let checkedState = {};
    try {
      const stored = localStorage.getItem('mac_checklist_state');
      if (stored) checkedState = JSON.parse(stored);
    } catch (e) {}

    checkedState[itemKey] = !!isChecked;

    try {
      localStorage.setItem('mac_checklist_state', JSON.stringify(checkedState));
    } catch (e) {}

    const res = calculateReadiness(checkedState);
    const pctEl = document.getElementById('display-readiness-percent');
    const cntEl = document.getElementById('display-readiness-count');
    const barEl = document.getElementById('display-readiness-bar');

    if (pctEl) pctEl.innerText = `${res.percentage}%`;
    if (cntEl) cntEl.innerText = `${res.completedCount} daripada ${res.totalDocs} Dokumen Ditandakan`;
    if (barEl) barEl.style.width = `${res.percentage}%`;
  }

  function setupEventListeners() {
    const btnSaveFormD = document.getElementById('btn-save-form-d');
    if (btnSaveFormD) {
      btnSaveFormD.addEventListener('click', () => {
        const formData = {
          nama: document.getElementById('d-nama').value,
          kp: document.getElementById('d-kp').value,
          alamat: document.getElementById('d-alamat').value,
          tel: document.getElementById('d-tel').value,
          emel: document.getElementById('d-emel').value,
          jantina: document.getElementById('d-jantina').value,
          ipt: document.getElementById('d-ipt').value,
          bidang: document.getElementById('d-bidang').value,
          pngk: document.getElementById('d-pngk').value
        };

        try {
          localStorage.setItem('mac_lampiran_d_data', JSON.stringify(formData));
        } catch (e) {}

        if (window.MACApp && typeof window.MACApp.showToast === 'function') {
          window.MACApp.showToast('Maklumat Borang Lampiran D berjaya disimpan.', 'success');
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
    ORIGINAL_DOCS_MARA,
    COPY_DOCS_MARA,
    OTHER_DOCS_MARA,
    LAMPIRAN_D_SECTIONS,
    calculateReadiness,
    handleCheckChange,
    render
  };
})();

// Eksport untuk Node.js & Pelayar
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MACChecklist;
}
if (typeof window !== 'undefined') {
  window.MACChecklist = MACChecklist;
}
