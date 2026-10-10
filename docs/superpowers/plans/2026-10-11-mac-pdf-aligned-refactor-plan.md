# Penstrukturan Semula Platform MAC DG9 Berdasarkan Dokumen PDF Rasmi MARA Implementation Plan

- **Goal:** Membina semula platform persediaan calon MARA Assessment Centre (MAC) Pegawai Perkhidmatan Pendidikan DG9 (PJPK) berasaskan 100% dokumen PDF rasmi MARA (Lampiran A, D, E, F1, G1 v.300726), membersihkan modul-modul lama yang tidak relevan, serta mengoptimumkan UI/UX khusus untuk paparan telefon pintar (mobile) dan tablet (iPad).
- **Architecture:** Aplikasi web satu halaman (SPA) modular berasaskan HTML5, CSS3 moden (Flexbox/Grid dengan reka bentuk adaptif mobile/tablet), JavaScript ES6 asli, dan sintesis audio Web Audio API (100% luar talian / sifar CDN).
- **Tech Stack:** Pure Vanilla JavaScript (ES6+), HTML5 Semantic, CSS3 Media Queries (Mobile, iPad, Print), Node.js Test Runner / Assertions.

---

### File Structure Map

- `index.html`: Struktur utama 4 tab (Kecergasan, Pengajaran, Temu Duga, Senarai Semak & Dokumen) berserta navigasi responsif.
- `css/style.css`: Penggayaan moden korporat MARA (#8B0000 Crimson, #0A2540 Navy), susun atur kad responsif, butang mesra sentuhan (`min-height: 48px`), navigasi tab bawah untuk skrin kecil, serta format cetakan A4 `@media print` untuk borang rasmi (D, E, F1, G1).
- `js/app.js`: Pengurusan navigasi tab, pemulihan keadaan (*state persistence*) melalui LocalStorage, profil calon, dan sistem notifikasi toast.
- `js/fitness.js`: Enjin kecergasan Lampiran E (Kalkulator BMI, kaji selidik kesihatan & merokok, dan pensintesis Bleep Test 20m 10 Peringkat / 94 Pusingan).
- `js/teaching.js`: Enjin penilaian pengajaran Lampiran G1 (Pemasa 10 minit berisyarat audio, pembina RPH format bebas, senarai semak alatan PJPK tanpa projektor, dan kalkulator rubrik 12 kriteria rasmi).
- `js/interview.js`: Enjin temu duga panel Lampiran F1 (Pemasa 30 minit, panduan 10 kriteria rasmi MARA, borang markah 50 mata, dan cadangan gred).
- `js/checklist.js`: Enjin senarai semak dokumen Lampiran A (10 dokumen asal, 18 salinan urus setia, 8 gambar pasport, panduan pakaian sukan pendaftaran/PdP) dan borang digital Lampiran D.
- `tests/fitness.test.js`: Ujian unit formula BMI dan jadual Bleep Test 10 Peringkat Lampiran E.
- `tests/teaching.test.js`: Ujian unit rubrik 12 kriteria Lampiran G1 dan pemasa 10 minit.
- `tests/interview.test.js`: Ujian unit rubrik 10 kriteria Lampiran F1 dan pengiraan gred 40–50.
- `tests/checklist.test.js`: Ujian unit integriti senarai semak dokumen dan borang D.
- `tests/integration.test.js`: Ujian integrasi penuh sistem (sifar CDN, responsif DOM, fungsi eksport modul, kelulusan 100%).
- `README.md`: Panduan rasmi penggunaan platform berlandaskan dokumen PDF MARA 2026.

---

### Task 1: Pembersihan Modul Hipotetikal Lama (Purge Legacy Files & References)
- **Files:** `tests/psychometric.test.js`, `tests/essay.test.js`, `tests/groupdiscussion.test.js`, `tests/microteaching.test.js`, `js/psychometric.js`, `js/essay.js`, `js/groupdiscussion.js`, `js/microteaching.js`, `docs/*.md`.
- **Steps:**
  1. Buang fail-fail JavaScript modul yang tidak terdapat dalam PDF rasmi (`psychometric.js`, `essay.js`, `groupdiscussion.js`, `microteaching.js`).
  2. Buang fail-fail ujian modul lama yang tidak lagi sah.
  3. Kemas kini dokumen rujukan dalam `docs/` supaya berasaskan Lampiran A, D, E, F1, dan G1.
  4. Sahkan struktur fail bersih daripada rujukan lama.
  5. *Commit: `chore: purge non-PDF hypothetical modules and legacy tests`*.

---

### Task 2: Pembangunan Asas UI/UX Responsif (Mobile & iPad-First Shell)
- **Files:** `index.html`, `css/style.css`, `js/app.js`, `tests/app.test.js`.
- **Steps:**
  1. Tulis ujian unit `tests/app.test.js` untuk mengesahkan 4 tab teras (`#tab-fitness`, `#tab-teaching`, `#tab-interview`, `#tab-checklist`), ketiadaan tab lama, dan ketiadaan sebarang CDN luaran.
  2. Kemas kini `index.html` dengan struktur 4 tab yang kemas, kad ringkasan pantas di bahagian atas, dan navigasi yang menyokong *touch target* besar untuk tablet dan telefon.
  3. Perbaharui `css/style.css` dengan tipografi sistem yang tajam, susun atur fleksibel responsif (media queries untuk `<640px` mobile, `641px–1024px` iPad/tablet, dan desktop), serta navigasi tab bawah (*bottom app bar*) yang mesra jari pada telefon.
  4. Kemas kini `js/app.js` untuk mengurus pertukaran 4 tab dan simpanan data calon dalam `localStorage`.
  5. Jalankan `node tests/app.test.js` sehingga lulus 100%.
  6. *Commit: `feat(ui): implement responsive mobile/iPad layout shell with 4 core MAC tabs`*.

---

### Task 3: Pembangunan Hab Ujian Kecergasan (Lampiran E)
- **Files:** `js/fitness.js`, `tests/fitness.test.js`, `index.html`, `css/style.css`.
- **Steps:**
  1. Tulis ujian unit `tests/fitness.test.js` untuk:
     - Formula BMI mengikut Lampiran E: $BMI = \frac{\text{berat}}{\text{tinggi}^2}$.
     - Jadual pusingan rasmi MARA Peringkat 1 hingga 10: `[7, 8, 8, 9, 9, 10, 10, 11, 11, 11]` (jumlah 94 pusingan).
     - Pengesanan status pengecualian kesihatan / mengandung mengikut Klausa 3.3 & 3.4.
  2. Laksanakan `js/fitness.js`:
     - Kalkulator BMI interaktif dengan status klasifikasi.
     - Soal selidik sejarah kesihatan & status merokok.
     - Enjin Bleep Test 20m berasaskan Web Audio API dengan pemasa tepat mengikut jadual 10 peringkat MARA, butang mula/jeda/rekod yang besar untuk skrin sentuh, dan visual grid 10 peringkat.
     - Butang Cetak Borang Penilaian Kecergasan (Lampiran E).
  3. Sambungkan `js/fitness.js` ke `#tab-fitness` dalam `index.html`.
  4. Jalankan `node tests/fitness.test.js` sehingga lulus 100%.
  5. *Commit: `feat(fitness): implement Lampiran E BMI calculator and official MARA 10-level Bleep Test engine`*.

---

### Task 4: Pembangunan Hab Penilaian Pengajaran 10 Minit (Lampiran G1 & Klausa 4.3)
- **Files:** `js/teaching.js`, `tests/teaching.test.js`, `index.html`, `css/style.css`.
- **Steps:**
  1. Tulis ujian unit `tests/teaching.test.js` untuk:
     - 12 kriteria pemarkahan Lampiran G1 (skala 1–5, markah penuh 60).
     - Logik kelulusan rasmi: Pilihan (48–60) vs Gagal (<48).
     - Pemasa 10 minit dan status peringatan 2 minit akhir.
     - Pengesanan peringatan mandatori PJPK (pakaian sukan, tiada projektor, bawa peralatan sukan sendiri).
  2. Laksanakan `js/teaching.js`:
     - Pemasa interaktif 10 minit dengan butang kawalan sentuh mesra tablet/telefon dan isyarat audio.
     - Borang Penjana RPH Format Bebas (Klausa 4.3.3) khas untuk mata pelajaran Pendidikan Jasmani (SK/SP, Objektif, Ansur Maju, Alatan yang dibawa).
     - Borang Rubrik Penilaian Kendiri / Panel Lampiran G1 dengan 12 kriteria skala 1–5 dan pengiraan markah automatik.
     - Butang Cetak Borang Penilaian Pengajaran Lampiran G1 & Cetak RPH (format A4 rasmi).
  3. Sambungkan `js/teaching.js` ke `#tab-teaching` dalam `index.html`.
  4. Jalankan `node tests/teaching.test.js` sehingga lulus 100%.
  5. *Commit: `feat(teaching): implement Lampiran G1 10-minute timer, free-format RPH maker, and 12-criteria rubric`*.

---

### Task 5: Pembangunan Hab Temu Duga Panel (Lampiran F1 & Klausa 4.4)
- **Files:** `js/interview.js`, `tests/interview.test.js`, `index.html`, `css/style.css`.
- **Steps:**
  1. Tulis ujian unit `tests/interview.test.js` untuk:
     - 10 kriteria pemarkahan Lampiran F1 (skala 1–5, markah penuh 50).
     - Logik kelulusan rasmi: Pilihan (40–50) vs Gagal (<40).
     - Pemasa sesi temu duga 30 minit.
  2. Laksanakan `js/interview.js`:
     - Pemasa sesi temu duga kumpulan 30 minit.
     - Paparan panduan 10 Dimensi Penilaian MARA dengan huraian terperinci kriteria panel dan tips jawapan cemerlang.
     - Borang Rubrik Penilaian Temu Duga Lampiran F1 (10 kriteria, catatan kekuatan/kelemahan, ulasan panel, cadangan Pilihan vs Gagal).
     - Butang Cetak Borang Penilaian Temu Duga Lampiran F1 (format A4 rasmi).
  3. Sambungkan `js/interview.js` ke `#tab-interview` dalam `index.html`.
  4. Jalankan `node tests/interview.test.js` sehingga lulus 100%.
  5. *Commit: `feat(interview): implement Lampiran F1 30-minute interview timer, 10 official MARA criteria, and rubric`*.

---

### Task 6: Pembangunan Hab Senarai Semak Dokumen & Panduan Calon (Lampiran A & D)
- **Files:** `js/checklist.js`, `tests/checklist.test.js`, `index.html`, `css/style.css`.
- **Steps:**
  1. Tulis ujian unit `tests/checklist.test.js` untuk mengesahkan:
     - 10 item senarai semak dokumen asal (Klausa 1 Lampiran A).
     - 18 item salinan dokumen urus setia (Klausa 2 Lampiran A).
     - Keperluan 8 keping gambar pasport dan salinan borang (G1 x2, F1 x4, D x1, E x1).
     - Simpanan status semakan (*checked*) dalam LocalStorage.
  2. Laksanakan `js/checklist.js`:
     - Senarai semak interaktif dokumen asal dan salinan dengan pengira peratusan kesediaan fail.
     - Kad peringatan penting: Masa pendaftaran 7.30–8.00 pagi, etika pakaian sukan sejak pendaftaran dan semasa PdP PJPK, telefon mod senyap, dilarang ambil foto/video.
     - Penjana borang digital Lampiran D (Borang Permohonan Jawatan 12 seksyen) untuk pengisian mudah dan cetakan formal.
  3. Sambungkan `js/checklist.js` ke `#tab-checklist` dalam `index.html`.
  4. Jalankan `node tests/checklist.test.js` sehingga lulus 100%.
  5. *Commit: `feat(checklist): implement Lampiran A interactive document checklists and Lampiran D application form`*.

---

### Task 7: Pengujian Integrasi Penuh, Verifikasi Responsif iPad/Mobile & Kemas Kini GitHub
- **Files:** `tests/integration.test.js`, `README.md`, `css/style.css`.
- **Steps:**
  1. Kemas kini `tests/integration.test.js` untuk menguji kesemua 4 modul teras baharu, sifar CDN, liputan cetakan `@media print`, dan sifar pautan luaran yang tidak perlu.
  2. Jalankan kesemua ujian unit dan integrasi:
     - `node tests/app.test.js`
     - `node tests/fitness.test.js`
     - `node tests/teaching.test.js`
     - `node tests/interview.test.js`
     - `node tests/checklist.test.js`
     - `node tests/integration.test.js`
  3. Kemas kini `README.md` dengan dokumentasi penuh berpandukan 100% dokumen PDF rasmi MARA 2026.
  4. Tolak (*git push*) perubahan terkini ke GitHub repository `ImranNaufal/mac-pjpk-dg41` dan sahkan laman web GitHub Pages aktif.
  5. *Commit: `feat(integration): complete official PDF refactor, full test pass, and mobile/iPad optimization`*.
