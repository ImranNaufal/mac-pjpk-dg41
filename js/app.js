/**
 * ==========================================================================
 * MARA ASSESSMENT CENTRE (MAC) - PJPK DG41 PLATFORM
 * Core Application Engine & State Controller
 * Module: app.js
 * 100% Offline-Ready | Pure Vanilla JS (ES6+)
 * ==========================================================================
 */

const MACApp = (function () {
  'use strict';

  // Senarai Tab Sah
  const VALID_TABS = ['dashboard', 'psychometric', 'fitness', 'microteaching', 'interview', 'docs'];
  const STORAGE_KEYS = {
    ACTIVE_TAB: 'mac_active_tab',
    CANDIDATE_NAME: 'mac_candidate_name',
    CHECKLIST_PREFIX: 'mac_chk_',
    LAST_PSYCHO_SCORE: 'mac_psychometric_last_score',
    LAST_BLEEP_LEVEL: 'mac_bleep_last_level',
    LAST_SEGAK_GRADE: 'mac_segak_last_grade',
    LAST_INTERVIEW_COUNT: 'mac_interview_practiced_count'
  };

  // Ringkasan Dokumen Rujukan Sahih untuk Modal Viewer
  const DOC_SUMMARIES = {
    1: {
      title: 'Dokumen 01: Fakta Rasmi, Akta MARA 1966 & Sistem MRSM',
      category: 'Akta 249 & Organisasi MARA',
      file: 'docs/01_FAKTA_DAN_AKTA_MARA.md',
      content: `
        <h4>1. Latar Belakang & Akta MARA 1966 (Akta 249)</h4>
        <p>Majlis Amanah Rakyat (MARA) ditubuhkan secara rasmi pada <strong>1 Mac 1966</strong> di bawah <em>Akta Majlis Amanah Rakyat 1966 (Akta 249)</em>, menggantikan Lembaga Kemajuan Kampung dan Perusahaan (RIDA - didirikan 1950) berikutan resolusi Kongres Ekonomi Bumiputera Pertama (1965).</p>
        
        <h4>2. Visi & Misi MARA</h4>
        <ul>
          <li><strong>Visi:</strong> Menjadi sebuah organisasi amanah yang unggul dan diberkati untuk mengangkat martabat bangsa.</li>
          <li><strong>Misi:</strong> Menerajui bidang keusahawanan, pendidikan dan pelaburan untuk penguasaan ekuiti Bumiputera.</li>
        </ul>

        <h4>3. Bahagian Pendidikan Menengah (BPM) & Rangkaian MRSM</h4>
        <p>BPM menguruskan <strong>55 buah Maktab Rendah Sains MARA (MRSM)</strong> di seluruh Malaysia dengan misi menyediakan pendidikan menengah berkualiti tinggi dan berteraskan sains, teknologi, kejuruteraan dan matematik (STEM) serta nilai keusahawanan holistik.</p>

        <h4>4. Enam (6) Program Sistem Pendidikan MRSM (SPMRSM)</h4>
        <ol>
          <li><strong>MRSM Premier:</strong> Mengintegrasikan kurikulum kebangsaan KSSM dengan modul khas MARA (Pembangunan Sahsiah, Keusahawanan &amp; Robotik).</li>
          <li><strong>MRSM Ulul Albab:</strong> Menggabungkan kurikulum KSSM, Tahfiz Al-Quran (hafazan 30 juzuk), dan Bahasa Arab.</li>
          <li><strong>MRSM IGCSE:</strong> Mengintegrasikan kurikulum Cambridge IGCSE dan KSSM SPM serentak.</li>
          <li><strong>MRSM Program Khas Pendidikan (PKP):</strong> Khusus bagi pelajar berpencapaian akademik luar biasa (Gifted &amp; Talented).</li>
          <li><strong>MRSM Bitara:</strong> Menumpukan pembangunan potensi akademik dan kepimpinan pintar.</li>
          <li><strong>MRSM Teknikal:</strong> Penekanan awal dalam bidang sains kejuruteraan dan teknikal tinggi.</li>
        </ol>

        <h4>5. Peranan Khusus Guru PJPK MRSM</h4>
        <p>Guru PJPK di MRSM memikul tanggungjawab membudayakan gaya hidup sihat dalam kalangan pelajar pintar, melatih pasukan sukan maktab, memantau audit SEGAK tahunan, serta bertindak sebagai guru homeroom dan warden asrama.</p>
      `
    },
    2: {
      title: 'Dokumen 02: Panduan Lengkap Bleep Test 20m & Ujian SEGAK KPM',
      category: 'Kecergasan Fizikal & Piawaian Ujian',
      file: 'docs/02_PANDUAN_BLEEP_TEST_DAN_SEGAK.md',
      content: `
        <h4>1. Protokol Larian Ulang-Alik 20 Meter (Luc Léger 1988)</h4>
        <p>Ujian ketahanan kardiovaskular piawai yang memerlukan peserta berlari antara dua garisan berjarak tepat <strong>20 meter</strong> mengikut isyarat bunyi bip berkala.</p>
        <ul>
          <li><strong>Kelajuan Mula:</strong> 8.5 km/j pada Tahap 1 (selang masa 8.47–9.00 saat).</li>
          <li><strong>Kenaikan Kelajuan:</strong> Bertambah 0.5 km/j pada setiap peningkatan tahap seterusnya.</li>
          <li><strong>Formula Anggaran VO2 Max:</strong> <code>VO2 Max = 18.0 + (6.0 &times; Kelajuan Akhir km/j)</code></li>
          <li><strong>Penanda Guru PJPK:</strong> Sasaran minimum Tahap 6.5 ke atas (anggaran VO2 Max > 38 ml/kg/min) untuk teladan kecergasan guru.</li>
        </ul>

        <h4>2. Lima (5) Bateri Ujian Standard SEGAK KPM</h4>
        <ol>
          <li><strong>Indeks Jisim Badan (BMI):</strong> Kiraan nisbah berat (kg) per tinggi kuasa dua (m&sup2;).</li>
          <li><strong>Naik Turun Bangku 3 Minit:</strong> Ketinggian bangku 30.5 cm, irama 96 ketukan seminit (metronom), kiraan nadi pemulihan selama 60 saat.</li>
          <li><strong>Tekan Tubi 1 Minit:</strong> Menguji daya tahan otot anggota atas (Lelaki: Tekan Tubi Penuh; Perempuan: Tekan Tubi Ubah Suai berlutut).</li>
          <li><strong>Ringkuk Tubi Separa 1 Minit:</strong> Menguji daya tahan otot abdomen (jarak anjakan pita pelekat 10 cm, irama 50 ketukan seminit).</li>
          <li><strong>Jangkauan Melunjur:</strong> Menguji kelenturan otot belakang dan hamstring menggunakan kotak SEGAK berstandard KPM.</li>
        </ol>

        <h4>3. Penggredan Standard SEGAK KPM</h4>
        <ul>
          <li><strong>Gred A (19–20 Mata):</strong> Kecergasan Sangat Tinggi (Bintang Penuh).</li>
          <li><strong>Gred B (15–18 Mata):</strong> Kecergasan Tinggi.</li>
          <li><strong>Gred C (11–14 Mata):</strong> Kecergasan Sederhana.</li>
          <li><strong>Gred D (8–10 Mata):</strong> Kurang Cergas.</li>
          <li><strong>Gred E (4–7 Mata):</strong> Tidak Cergas.</li>
        </ul>
      `
    },
    3: {
      title: 'Dokumen 03: 3 Set Lengkap RPH DSKP KSSM PJPK MRSM & Rubrik Panel',
      category: 'Pedagogi, RPH & Micro-Teaching',
      file: 'docs/03_RPH_LENGKAP_PJPK_MRSM.md',
      content: `
        <h4>1. Format Micro-Teaching PJPK MRSM (10–15 Minit)</h4>
        <p>Sesi demonstrasi praktikal dihadapan panel penilai MRSM yang menuntut calon menyampaikan pengajaran tersusun, vokal bertenaga, ansur maju kemahiran tepat, dan penekanan keselamatan murid.</p>

        <h4>2. Tiga (3) Templat Lengkap DSKP KSSM</h4>
        <ol>
          <li><strong>Kemahiran Sukan: Futsal / Bola Sepak (Hantaran Leret &amp; Kawalan Bola) - Tingkatan 2:</strong>
            <p>SK: 1.3 &bull; SP: 1.3.1, 2.3.1, 5.2.2. Menekankan ketepatan hantaran bahagian dalam kaki, kedudukan kaki sokongan, dan kawalan bola lantun.</p>
          </li>
          <li><strong>Kecergasan Fizikal: Kapasiti Aerobik &amp; Kadar Nadi Latihan (KNL) - Tingkatan 4:</strong>
            <p>SK: 3.1 &bull; SP: 3.1.1, 4.1.1, 5.1.1. Formula Karvonen: <code>KNL = [(KNM - KNR) &times; % Intensiti] + KNR</code>.</p>
          </li>
          <li><strong>Pendidikan Kesihatan: Pertolongan Cemas Kaedah P.R.I.C.E - Tingkatan 1:</strong>
            <p>SK: 9.1 &bull; SP: 9.1.1, 9.1.2. Pengurusan kecederaan terseliuh: Protect (Lindung), Rest (Rehat), Ice (Ais), Compress (Tekap), Elevate (Tinggikan).</p>
          </li>
        </ol>

        <h4>3. Rubrik Penilaian Panel MRSM (100%)</h4>
        <ul>
          <li><strong>Set Induksi (15%):</strong> Rangsangan minat, pemanasan badan dinamik, vokal guru.</li>
          <li><strong>Penyampaian &amp; Ansur Maju (25%):</strong> Kejelasan demonstrasi, pembetulan kesalahan segera.</li>
          <li><strong>Kawalan Kelas &amp; Nada Suara (20%):</strong> Arahan berwibawa, kedudukan guru (menghadap semua murid).</li>
          <li><strong>Pengurusan Alatan &amp; Keselamatan (15%):</strong> Susunan kon kemas, tiada bahaya fizikal.</li>
          <li><strong>Interaksi &amp; Penglibatan Aktif (15%):</strong> Komunikasi dua hala, peneguhan positif.</li>
          <li><strong>Penutup &amp; Refleksi (10%):</strong> Menyejukkan badan, semakan kefahaman murid.</li>
        </ul>
      `
    },
    4: {
      title: 'Dokumen 04: Bank 25 Soalan Temu Duga DG41 MARA & Jawapan STAR',
      category: 'Simulator Temu Duga & Kaedah STAR',
      file: 'docs/04_BANK_SOALAN_TEMUDUGA_DG41.md',
      content: `
        <h4>1. Format Jawapan Teknik STAR</h4>
        <p>Kaedah berstruktur yang amat disukai oleh panel penilai MARA bagi menilai kecekapan dan integriti calon:</p>
        <ul>
          <li><strong>S - Situation:</strong> Huraikan latar belakang senario atau cabaran secara ringkas dan tepat.</li>
          <li><strong>T - Task:</strong> Nyatakan tugas dan tanggungjawab utama anda sebagai pendidik/pegawai.</li>
          <li><strong>A - Action:</strong> Jelaskan tindakan spesifik, profesional, dan beretika yang anda ambil.</li>
          <li><strong>R - Result:</strong> Nyatakan hasil positif yang terukur serta pengajaran yang diperoleh.</li>
        </ul>

        <h4>2. Empat Kluster Soalan Temu Duga MARA</h4>
        <ol>
          <li><strong>Kluster 1: Fakta Organisasi &amp; Akta 249:</strong> Penubuhan MARA, visi/misi, moto keusahawanan, kaitan pendidikan Bumiputera.</li>
          <li><strong>Kluster 2: Falsafah MRSM &amp; Guru Asrama:</strong> Program Ulul Albab/IGCSE, penyesuaian diri dalam persekitaran asrama penuh 24 jam, homeroom.</li>
          <li><strong>Kluster 3: Pedagogi PJPK &amp; Keselamatan:</strong> Isu obesiti pelajar, murid pasif mengasingkan diri, cuaca panas terlampau, audit integriti SEGAK.</li>
          <li><strong>Kluster 4: Situasi Kecemasan &amp; Sahsiah:</strong> Kemalangan semasa kelas amali, konflik disiplin asrama, menangani ibu bapa berprofil tinggi.</li>
        </ol>

        <h4>3. Kata Kunci Pemarkahan Tinggi Panel</h4>
        <p>Suntikkan kata kunci berikut secara bersahaja: <em>"Amanah Bangsa", "Keselamatan Murid Diutamakan", "Standard DSKP KSSM", "Teladan Kecergasan", "Ansur Maju", "Kesejahteraan Asrama"</em>.</p>
      `
    }
  };

  /**
   * Mengubah tab aktif dan mengemaskini paparan serta localStorage
   * @param {string} tabId ID tab (e.g. 'dashboard', 'psychometric', etc.)
   * @param {boolean} updateHistory Sama ada mahu menukar hash URL
   */
  function switchTab(tabId, updateHistory = true) {
    if (!VALID_TABS.includes(tabId)) {
      console.warn(`Tab ID "${tabId}" tidak wujud. Menukar kepada tab "dashboard".`);
      tabId = 'dashboard';
    }

    // 1. Kemaskini Nav Tab Buttons
    const tabButtons = document.querySelectorAll('.nav-tab');
    tabButtons.forEach(btn => {
      const isTarget = btn.getAttribute('data-tab') === tabId;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    });

    // 2. Kemaskini Tab Panes
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => {
      const isTarget = pane.id === `tab-${tabId}`;
      pane.classList.toggle('active', isTarget);
    });

    // 3. Simpan ke localStorage
    try {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, tabId);
    } catch (e) {
      console.warn('Gagal menyimpan tab ke localStorage:', e);
    }

    // 4. Kemaskini URL Hash tanpa reload
    if (updateHistory) {
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', `#${tabId}`);
      } else {
        window.location.hash = tabId;
      }
    }

    // 5. Skrol ke atas kawasan kandungan jika perlu
    const mainContent = document.getElementById('main-content');
    if (mainContent && window.scrollY > 150) {
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }

    // 6. Pencetus event khusus bagi modul luaran
    const event = new CustomEvent('mac:tab-switched', { detail: { tabId } });
    document.dispatchEvent(event);

    return tabId;
  }

  /**
   * Memaparkan notifikasi interaktif (Toast)
   * @param {string} message Mesej notifikasi
   * @param {string} type Jenis: 'info' | 'success' | 'warning' | 'error'
   * @param {number} duration Tempoh paparan dalam milisaat (lalai: 3500)
   */
  function showToast(message, type = 'info', duration = 3500) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'status');

    // Ikon mengikut jenis
    let iconSvg = '';
    if (type === 'success') {
      iconSvg = '<svg class="icon-inline" style="color:#059669;" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>';
    } else if (type === 'error') {
      iconSvg = '<svg class="icon-inline" style="color:#DC2626;" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.586 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>';
    } else if (type === 'warning') {
      iconSvg = '<svg class="icon-inline" style="color:#D97706;" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>';
    } else {
      iconSvg = '<svg class="icon-inline" style="color:#0284C7;" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>';
    }

    toast.innerHTML = `
      ${iconSvg}
      <span class="toast-msg">${message}</span>
      <button type="button" class="toast-close" aria-label="Tutup">&times;</button>
    `;

    // Butang tutup manual
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
      dismissToast(toast);
    });

    container.appendChild(toast);

    // Auto dismiss
    const timer = setTimeout(() => {
      dismissToast(toast);
    }, duration);

    toast._dismissTimer = timer;
    return toast;
  }

  function dismissToast(toast) {
    if (!toast) return;
    if (toast._dismissTimer) clearTimeout(toast._dismissTimer);
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 200);
  }

  /**
   * Fungsi Cetakan Pintar Mengikut Tab Semasa
   */
  function printCurrentTab() {
    const activeTabId = localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB) || 'dashboard';
    showToast(`Menyediakan paparan cetak untuk modul: ${activeTabId.toUpperCase()}...`, 'info', 2000);
    setTimeout(() => {
      window.print();
    }, 300);
  }

  /**
   * Pengurusan Modal Panduan Calon MAC
   */
  function openGuideModal() {
    const modal = document.getElementById('modal-guide');
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  }

  function closeGuideModal() {
    const modal = document.getElementById('modal-guide');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  /**
   * Pengurusan Modal Pembaca Ringkasan Dokumen
   * @param {number} docId Nombor dokumen (1, 2, 3, 4)
   */
  function showDocModal(docId) {
    const docData = DOC_SUMMARIES[docId];
    if (!docData) return;

    const modal = document.getElementById('modal-doc-viewer');
    const titleEl = document.getElementById('modal-doc-title');
    const bodyEl = document.getElementById('modal-doc-body');

    if (!modal || !titleEl || !bodyEl) return;

    titleEl.textContent = docData.title;
    bodyEl.innerHTML = `
      <div style="margin-bottom:1rem; display:flex; align-items:center; justify-content:space-between; gap:1rem; flex-wrap:wrap;">
        <span class="badge badge-gold">${docData.category}</span>
        <code style="font-size:0.75rem; color:#64748B;">Fail Rujukan: ${docData.file}</code>
      </div>
      <div class="doc-body-content">
        ${docData.content}
      </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeDocModal() {
    const modal = document.getElementById('modal-doc-viewer');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  /**
   * Pengurusan Profil & Nama Calon
   */
  function initCandidateProfile() {
    const input = document.getElementById('candidate-name-input');
    const saveBtn = document.getElementById('btn-save-name');
    const displayTag = document.getElementById('candidate-display-tag');

    if (!input || !saveBtn) return;

    // Muat nama tersimpan
    const savedName = localStorage.getItem(STORAGE_KEYS.CANDIDATE_NAME);
    if (savedName) {
      input.value = savedName;
      if (displayTag) {
        displayTag.textContent = `${savedName} • Calon DG41 PJPK`;
      }
    }

    // Fungsi Simpan
    const doSave = () => {
      const name = input.value.trim();
      if (!name) {
        showToast('Sila masukkan nama calon anda.', 'warning');
        return;
      }
      try {
        localStorage.setItem(STORAGE_KEYS.CANDIDATE_NAME, name);
        if (displayTag) {
          displayTag.textContent = `${name} • Calon DG41 PJPK`;
        }
        showToast(`Nama calon berjaya disimpan: ${name}`, 'success');
      } catch (e) {
        showToast('Ralat semasa menyimpan nama.', 'error');
      }
    };

    saveBtn.addEventListener('click', doSave);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        doSave();
      }
    });
  }

  /**
   * Pengurusan Senarai Semak Dokumen (Checklist) di Dashboard
   */
  function initChecklist() {
    const checkboxes = document.querySelectorAll('.check-box[data-check]');
    checkboxes.forEach(cb => {
      const checkKey = STORAGE_KEYS.CHECKLIST_PREFIX + cb.getAttribute('data-check');
      const isChecked = localStorage.getItem(checkKey) === 'true';
      cb.checked = isChecked;

      cb.addEventListener('change', () => {
        try {
          localStorage.setItem(checkKey, cb.checked ? 'true' : 'false');
          if (cb.checked) {
            showToast('Item dokumen ditandakan selesai.', 'success', 2000);
          }
        } catch (e) {
          console.warn('Gagal menyimpan status semakan:', e);
        }
      });
    });
  }

  /**
   * Kemaskini Penunjuk KPI Dashboard daripada LocalStorage
   */
  function updateDashboardStats() {
    // 1. Psikometrik
    const psychoScore = localStorage.getItem(STORAGE_KEYS.LAST_PSYCHO_SCORE);
    const psychoEl = document.getElementById('kpi-psychometric-status');
    if (psychoEl && psychoScore) {
      psychoEl.textContent = `Skor: ${psychoScore}`;
      psychoEl.style.color = '#059669';
    }

    // 2. Kecergasan (Bleep / SEGAK)
    const bleepLevel = localStorage.getItem(STORAGE_KEYS.LAST_BLEEP_LEVEL);
    const fitnessEl = document.getElementById('kpi-fitness-status');
    if (fitnessEl && bleepLevel) {
      fitnessEl.textContent = `Level: ${bleepLevel}`;
      fitnessEl.style.color = '#059669';
    }

    // 3. Temu Duga
    const interviewCount = localStorage.getItem(STORAGE_KEYS.LAST_INTERVIEW_COUNT);
    const interviewEl = document.getElementById('kpi-interview-status');
    if (interviewEl && interviewCount) {
      interviewEl.textContent = `${interviewCount} Soalan Dilatih`;
      interviewEl.style.color = '#059669';
    }
  }

  /**
   * Inisialisasi Butang Navigasi Pantas & Event Listeners
   */
  function initEventListeners() {
    // 1. Tab Nav Buttons
    const navButtons = document.querySelectorAll('.nav-tab');
    navButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetTab = btn.getAttribute('data-tab');
        if (targetTab) {
          switchTab(targetTab);
        }
      });
    });

    // 2. Elemen dengan [data-action="switch-tab"]
    const switchTriggers = document.querySelectorAll('[data-action="switch-tab"]');
    switchTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const targetTab = trigger.getAttribute('data-target');
        if (targetTab) {
          switchTab(targetTab);
        }
      });
    });

    // 3. Global Print Button
    const printBtn = document.getElementById('btn-global-print');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        printCurrentTab();
      });
    }

    // 4. Modal Guide Listeners
    const openGuideBtn = document.getElementById('btn-open-guide');
    const openGuideDashBtn = document.getElementById('btn-dashboard-open-guide');
    const closeGuideBtn = document.getElementById('btn-close-guide');
    const guideOkBtn = document.getElementById('btn-modal-guide-ok');
    const modalGuide = document.getElementById('modal-guide');

    if (openGuideBtn) openGuideBtn.addEventListener('click', openGuideModal);
    if (openGuideDashBtn) openGuideDashBtn.addEventListener('click', openGuideModal);
    if (closeGuideBtn) closeGuideBtn.addEventListener('click', closeGuideModal);
    if (guideOkBtn) guideOkBtn.addEventListener('click', closeGuideModal);

    if (modalGuide) {
      modalGuide.addEventListener('click', (e) => {
        if (e.target === modalGuide) {
          closeGuideModal();
        }
      });
    }

    // 5. Modal Doc Viewer Listeners
    const closeDocBtn = document.getElementById('btn-close-doc-viewer');
    const closeDocFooterBtn = document.getElementById('btn-doc-close');
    const printDocBtn = document.getElementById('btn-doc-print');
    const modalDocViewer = document.getElementById('modal-doc-viewer');

    if (closeDocBtn) closeDocBtn.addEventListener('click', closeDocModal);
    if (closeDocFooterBtn) closeDocFooterBtn.addEventListener('click', closeDocModal);
    if (printDocBtn) {
      printDocBtn.addEventListener('click', () => {
        window.print();
      });
    }

    if (modalDocViewer) {
      modalDocViewer.addEventListener('click', (e) => {
        if (e.target === modalDocViewer) {
          closeDocModal();
        }
      });
    }

    // 6. Escape Key untuk tutup semua modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeGuideModal();
        closeDocModal();
      }
    });

    // 7. Hashchange listener untuk navigasi sejarah pelayar
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && VALID_TABS.includes(hash)) {
        switchTab(hash, false);
      }
    });
  }

  /**
   * Permulaan Aplikasi (App Bootstrap)
   */
  function init() {
    initEventListeners();
    initCandidateProfile();
    initChecklist();
    updateDashboardStats();

    // Tentukan tab aktif permulaan
    let initialTab = 'dashboard';
    const hash = window.location.hash.replace('#', '');
    if (hash && VALID_TABS.includes(hash)) {
      initialTab = hash;
    } else {
      const stored = localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB);
      if (stored && VALID_TABS.includes(stored)) {
        initialTab = stored;
      }
    }

    switchTab(initialTab, false);
    console.log('MARA Assessment Centre (MAC) App diaktifkan secara luar talian.');
  }

  // Lancarkan bila DOM siap
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }

  // Pendedahan Awam API
  return {
    switchTab,
    showToast,
    printCurrentTab,
    openGuideModal,
    closeGuideModal,
    showDocModal,
    closeDocModal,
    updateDashboardStats,
    VALID_TABS,
    STORAGE_KEYS,
    DOC_SUMMARIES
  };
})();

// Sokongan Global Browser & Node.js Environment untuk Testing
if (typeof window !== 'undefined') {
  window.MACApp = MACApp;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MACApp;
}
