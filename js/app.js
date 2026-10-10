/**
 * ==========================================================================
 * MARA ASSESSMENT CENTRE (MAC) - DG9 PJPK PLATFORM
 * Core Application Engine & State Controller
 * Aligned 100% with MARA Official PDF Guidelines (v.300726)
 * Pure Vanilla JavaScript (ES6+) • 100% Offline-Ready
 * ==========================================================================
 */

const MACApp = (function () {
  'use strict';

  // 4 Tab Rasmi Berdasarkan Dokumen PDF MARA (Lampiran A, D, E, F1, G1)
  const VALID_TABS = ['fitness', 'teaching', 'interview', 'checklist'];
  const STORAGE_KEYS = {
    ACTIVE_TAB: 'mac_active_tab',
    PROFILE: 'mac_candidate_profile'
  };

  /**
   * Mengurus penukaran tab dengan lancar & kemaskini URL hash
   */
  function switchTab(tabId) {
    if (!VALID_TABS.includes(tabId)) {
      tabId = 'fitness';
    }

    // Kemaskini state tab panes
    if (typeof document !== 'undefined') {
      const panes = document.querySelectorAll('.tab-pane');
      panes.forEach(pane => {
        if (pane.id === `tab-${tabId}`) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });

      // Kemaskini tab navigation buttons (Desktop & iPad)
      const tabBtns = document.querySelectorAll('.tab-btn');
      tabBtns.forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');
        } else {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        }
      });

      // Kemaskini bottom navigation buttons (Mobile)
      const bNavBtns = document.querySelectorAll('.bottom-nav-btn');
      bNavBtns.forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      // Kemaskini hash pelayar jika wujud
      if (typeof window !== 'undefined' && window.location) {
        try {
          window.location.hash = tabId;
        } catch (e) {
          // Abaikan dalam persekitaran ujian ketat
        }
      }
    }

    // Simpan ke localStorage
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEYS.ACTIVE_TAB, tabId);
      }
    } catch (e) {
      console.warn('LocalStorage tidak dapat diakses:', e);
    }

    return tabId;
  }

  /**
   * Paparan notifikasi toast sementara yang mesra sentuhan
   */
  function showToast(message, type = 'info', duration = 3000) {
    if (typeof document === 'undefined') return;
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerText = message;
    container.appendChild(toast);

    setTimeout(() => {
      if (toast && toast.classList) toast.classList.add('toast-show');
    }, 10);

    setTimeout(() => {
      if (toast && toast.classList) toast.classList.remove('toast-show');
      setTimeout(() => {
        if (toast && toast.remove) {
          toast.remove();
        } else if (toast && toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, duration);
  }

  /**
   * Mendapatkan profil calon terkini daripada localStorage
   */
  function getProfile() {
    const defaultProfile = {
      nama: 'Calon MAC DG9',
      noKp: '',
      noId: 'MAC-2026-PJPK',
      subjek: 'Pendidikan Jasmani dan Pendidikan Kesihatan'
    };

    try {
      if (typeof localStorage !== 'undefined') {
        const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
        if (saved) {
          return { ...defaultProfile, ...JSON.parse(saved) };
        }
      }
    } catch (e) {
      console.warn('Gagal membaca profil dari storage:', e);
    }
    return defaultProfile;
  }

  /**
   * Menyimpan profil calon ke localStorage & kemaskini paparan header
   */
  function saveProfile(data) {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(data));
      }
      updateHeaderProfileUI(data);
      showToast('Profil calon berjaya dikemaskini.', 'success');
      return true;
    } catch (e) {
      console.warn('Gagal menyimpan profil:', e);
      return false;
    }
  }

  /**
   * Kemaskini UI header profil
   */
  function updateHeaderProfileUI(profile) {
    if (typeof document === 'undefined') return;
    const nameEl = document.getElementById('display-candidate-name');
    const idEl = document.getElementById('display-candidate-id');
    if (nameEl && profile.nama) {
      nameEl.innerText = profile.nama;
    }
    if (idEl && profile.noId) {
      idEl.innerText = `ID: ${profile.noId}`;
    }
  }

  /**
   * Inisialisasi event listeners & pemulihan tab aktif
   */
  function init() {
    if (typeof document === 'undefined') return;

    // Muat profil calon
    const profile = getProfile();
    updateHeaderProfileUI(profile);

    // Dengar klik pada butang tab atas (Desktop & iPad)
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const targetTab = this.getAttribute('data-tab');
        if (targetTab) switchTab(targetTab);
      });
    });

    // Dengar klik pada butang tab bawah (Mobile)
    const bNavBtns = document.querySelectorAll('.bottom-nav-btn');
    bNavBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const targetTab = this.getAttribute('data-tab');
        if (targetTab) switchTab(targetTab);
      });
    });

    // Modal Profil
    const btnEditProfile = document.getElementById('btn-edit-profile');
    const profileModal = document.getElementById('profile-modal');
    const btnCloseProfile = document.getElementById('btn-close-profile');
    const btnCancelProfile = document.getElementById('btn-cancel-profile');
    const btnSaveProfile = document.getElementById('btn-save-profile');

    if (btnEditProfile && profileModal) {
      btnEditProfile.addEventListener('click', () => {
        const cur = getProfile();
        const inputName = document.getElementById('input-candidate-name');
        const inputKp = document.getElementById('input-candidate-kp');
        const inputId = document.getElementById('input-candidate-id');
        if (inputName) inputName.value = cur.nama || '';
        if (inputKp) inputKp.value = cur.noKp || '';
        if (inputId) inputId.value = cur.noId || '';
        profileModal.classList.remove('hidden');
      });
    }

    if (btnCloseProfile && profileModal) {
      btnCloseProfile.addEventListener('click', () => profileModal.classList.add('hidden'));
    }
    if (btnCancelProfile && profileModal) {
      btnCancelProfile.addEventListener('click', () => profileModal.classList.add('hidden'));
    }

    if (btnSaveProfile && profileModal) {
      btnSaveProfile.addEventListener('click', () => {
        const inputName = document.getElementById('input-candidate-name');
        const inputKp = document.getElementById('input-candidate-kp');
        const inputId = document.getElementById('input-candidate-id');
        const nama = inputName ? inputName.value.trim() : '';
        const noKp = inputKp ? inputKp.value.trim() : '';
        const noId = inputId ? inputId.value.trim() : '';

        if (!nama) {
          showToast('Sila masukkan nama calon.', 'warning');
          return;
        }

        saveProfile({
          nama,
          noKp,
          noId: noId || 'MAC-2026-PJPK',
          subjek: 'Pendidikan Jasmani dan Pendidikan Kesihatan'
        });
        profileModal.classList.add('hidden');
      });
    }

    // Tentukan tab awal
    let initialTab = 'fitness';
    try {
      if (typeof window !== 'undefined' && window.location && window.location.hash) {
        const hash = window.location.hash.replace('#', '');
        if (VALID_TABS.includes(hash)) initialTab = hash;
      } else if (typeof localStorage !== 'undefined') {
        const saved = localStorage.getItem(STORAGE_KEYS.ACTIVE_TAB);
        if (VALID_TABS.includes(saved)) initialTab = saved;
      }
    } catch (e) {
      console.warn('Gagal membaca tab awal:', e);
    }

    switchTab(initialTab);
  }

  // Auto init bila DOM sedia dalam pelayar
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }

  return {
    VALID_TABS,
    switchTab,
    showToast,
    getProfile,
    saveProfile,
    init
  };
})();

// Eksport untuk kegunaan Node.js (ujian unit) & Browser global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MACApp;
}
if (typeof window !== 'undefined') {
  window.MACApp = MACApp;
}
