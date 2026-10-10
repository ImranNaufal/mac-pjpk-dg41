# MAC PJPK Training Platform & Knowledge Hub Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Membina platform interaktif setempat (web app luar talian) berserta kit nota rujukan lengkap untuk persediaan dan kelulusan MARA Assessment Centre (MAC) Pegawai Perkhidmatan Pendidikan DG41 Pendidikan Jasmani dan Kesihatan (PJPK).

**Architecture:** Standalone Single Page Application (SPA) responsif tanpa perisian luar, dibina dengan HTML5, CSS3 korporat MARA, Vanilla JS moden, Web Audio API untuk Bleep Test beeps, dan localStorage untuk rekod kemajuan. Dilengkapi fail nota kajian markdown yang boleh dicetak terus ke format A4/PDF.

**Tech Stack:** HTML5, CSS3 (Modern Responsive & Print CSS), Vanilla JavaScript (ES6+), Web Audio API (Tone/Beep Synthesizer), Node.js (untuk ujian unit logik penskoran).

## Global Constraints
- 100% luar talian (*offline-ready*), tiada pergantungan kepada CDN luaran yang memerlukan internet semasa penggunaan.
- Setiap fakta mesti bersumberkan portal rasmi kerajaan/MARA (Akta MARA 1966, DSKP KSSM PJPK KPM, Buku Panduan SEGAK KPM, Protokol Luc Léger).
- Navigasi tab pantas tanpa muat semula halaman (*no page reload*).
- Setiap modul utama mempunyai butang cetak (*print-friendly*).

---

### Task 1: Rujukan & Kit Nota Sahih PJPK MARA (Knowledge Base Documents)

**Files:**
- Create: `c:\Users\it-01995\Downloads\MAC\docs\01_FAKTA_DAN_AKTA_MARA.md`
- Create: `c:\Users\it-01995\Downloads\MAC\docs\02_PANDUAN_BLEEP_TEST_DAN_SEGAK.md`
- Create: `c:\Users\it-01995\Downloads\MAC\docs\03_RPH_LENGKAP_PJPK_MRSM.md`
- Create: `c:\Users\it-01995\Downloads\MAC\docs\04_BANK_SOALAN_TEMUDUGA_DG41.md`

**Interfaces:**
- Produces: 4 fail markdown rujukan sahih yang mengandungi ringkasan akta, jadual norma kecergasan, 3 contoh RPH DSKP KSSM PJPK MRSM, dan bank soalan temuduga STAR.

- [ ] **Step 1: Tulis 01_FAKTA_DAN_AKTA_MARA.md**
  Mengandungi sejarah MARA, Akta 249 (1966), visi, misi, carta organisasi MARA, Bahagian Pendidikan Menengah (BPM), dan Sistem Pendidikan MRSM (SPMRSM).

- [ ] **Step 2: Tulis 02_PANDUAN_BLEEP_TEST_DAN_SEGAK.md**
  Mengandungi protokol larian 20m Luc Léger, jadual kelajuan setiap tahap, formula VO2 Max, dan 5 bateri Ujian SEGAK KPM berserta norma skor kebangsaan.

- [ ] **Step 3: Tulis 03_RPH_LENGKAP_PJPK_MRSM.md**
  Mengandungi 3 set RPH DSKP KSSM Menengah bagi sesi 10–15 minit (Futsal/Bola Sepak, Kapasiti Aerobik & Kadar Nadi Latihan, dan Pertolongan Cemas P.R.I.C.E).

- [ ] **Step 4: Tulis 04_BANK_SOALAN_TEMUDUGA_DG41.md**
  Mengandungi soalan lazim panel MARA, isu sukan/obesiti MRSM, etika guru asrama, dan jawapan berstruktur format STAR.

- [ ] **Step 5: Semak ketepatan fakta dan format**
  Sahkan tiada placeholder dan semua rujukan pautan/akta dinyatakan dengan jelas.

---

### Task 2: Asas UI, Reka Bentuk Korporat MARA & Navigasi Tab

**Files:**
- Create: `c:\Users\it-01995\Downloads\MAC\index.html`
- Create: `c:\Users\it-01995\Downloads\MAC\css\style.css`
- Create: `c:\Users\it-01995\Downloads\MAC\js\app.js`

**Interfaces:**
- Produces: `switchTab(tabId)` function dalam `app.js` untuk mengawal pertukaran 5 tab utama (Dashboard, Psikometrik, Kecergasan, Micro-Teaching, Temuduga, Sumber).
- Produces: Sistem tema warna korporat MARA (#8B0000 Crimson Red, #0A2540 Deep Navy, #FFFFFF) dan CSS responsif.

- [ ] **Step 1: Tulis struktur HTML kerangka utama (`index.html`)**
  Sediakan header korporat, bar navigasi tab, bekas kontena 5 modul, dan modal panduan.

- [ ] **Step 2: Tulis CSS penggayaan moden & print stylesheet (`css/style.css`)**
  Sediakan reka bentuk kad, butang, tipografi kemas, penunjuk status, dan `@media print` untuk cetakan A4.

- [ ] **Step 3: Tulis logik navigasi dan state management (`js/app.js`)**
  Sediakan pertukaran tab aktif, penyimpanan tab terakhir di `localStorage`, dan fungsi pemberitahuan (*toast message*).

- [ ] **Step 4: Uji paparan antaramuka asas**
  Buka dalam pelayar web dan pastikan pertukaran tab berjalan lancar tanpa ralat konsol.

---

### Task 3: Enjin Simulator Ujian Psikometrik (MyPersonaliti & Integriti)

**Files:**
- Create: `c:\Users\it-01995\Downloads\MAC\js\psychometric.js`
- Create: `c:\Users\it-01995\Downloads\MAC\tests\psychometric.test.js`

**Interfaces:**
- Produces: `PsychometricEngine` dengan method:
  - `startExam(durationMinutes)`
  - `submitAnswer(questionId, value)`
  - `calculateScore()` -> `{ integrityScore, emotionalScore, leadershipScore, consistencyIndex, lieScore, status }`
  - `resetExam()`

- [ ] **Step 1: Tulis unit test bagi logik penskoran psikometrik (`tests/psychometric.test.js`)**
  Uji pengesanan jawapan bercanggah (*lie scale / inconsistency check*) dan penskoran domain.

- [ ] **Step 2: Jalankan ujian untuk sahkan ia gagal sebelum implementasi**
  Jalankan ujian dengan `node tests/psychometric.test.js`.

- [ ] **Step 3: Bina `js/psychometric.js` dengan bank soalan sebenar**
  Masukkan 30+ soalan situasi integriti dan sahsiah guru berpasangan, pemasa undur interaktif, dan algoritma pengesanan manipulasi jawapan.

- [ ] **Step 4: Jalankan ujian unit untuk sahkan ia lulus**
  Pastikan `node tests/psychometric.test.js` lulus 100%.

- [ ] **Step 5: Integrasikan paparan UI Psikometrik dalam `index.html`**
  Sambungkan borang soalan, pemasa visual, dan kad keputusan grafik.

---

### Task 4: Hab Kecergasan Fizikal (Bleep Test Web Audio & Kalkulator SEGAK)

**Files:**
- Create: `c:\Users\it-01995\Downloads\MAC\js\fitness.js`
- Create: `c:\Users\it-01995\Downloads\MAC\tests\fitness.test.js`

**Interfaces:**
- Produces: `BleepTestEngine` dengan method:
  - `start()`, `pause()`, `stop()`
  - `playBeep(frequency, duration)` via Web Audio API
  - `calculateVO2Max(level, shuttle)`
- Produces: `SEGAKCalculator` dengan method:
  - `calculateBMI(weight, height)`
  - `gradeStepTest(gender, pulse)`
  - `gradePushUp(gender, count)`
  - `gradeCurlUp(gender, count)`
  - `gradeSitReach(gender, cm)`
  - `getOverallGrade(scores)`

- [ ] **Step 1: Tulis unit test untuk pengiraan VO2 Max dan norma SEGAK KPM (`tests/fitness.test.js`)**
  Uji kesahihan formula kiraan skor norma SEGAK lelaki dan perempuan mengikut piawai KPM.

- [ ] **Step 2: Jalankan ujian untuk sahkan ia gagal**
  Jalankan `node tests/fitness.test.js`.

- [ ] **Step 3: Bina `js/fitness.js`**
  Implementasikan sintesis audio Web Audio API (gelombang *sine wave* 800Hz / 1200Hz), pemasa selang masa mengikut jadual Luc Léger 20m, dan kalkulator lengkap 5 bateri SEGAK KPM.

- [ ] **Step 4: Jalankan ujian unit untuk sahkan ia lulus**
  Jalankan `node tests/fitness.test.js` dan pastikan lulus.

- [ ] **Step 5: Integrasikan paparan UI Kecergasan dalam `index.html`**
  Paparan papan meter kelajuan, tahap larian, butang kawalan audio, dan borang kalkulator SEGAK.

---

### Task 5: Hab Micro-Teaching PJPK MRSM & Penjana RPH

**Files:**
- Create: `c:\Users\it-01995\Downloads\MAC\js\microteaching.js`

**Interfaces:**
- Produces: `MicroTeachingHub` dengan method:
  - `loadTemplate(topicKey)`
  - `generateCustomRPH(formData)`
  - `startDeliveryTimer(durationMinutes)`
  - `printRPH()`

- [ ] **Step 1: Bina `js/microteaching.js`**
  Sediakan 3 templat terperinci DSKP KSSM PJPK (Kemahiran Sukan, Kecergasan, Pendidikan Kesihatan), senarai rubrik panel MRSM, dan pemasa simulasi 10/15 minit.

- [ ] **Step 2: Tambah fungsi pemasa latihan mengajar bersuara/visual**
  Pemasa dengan amaran: Minit ke-0 (Set Induksi), Minit ke-3 (Perkembangan/Latihan), Minit ke-11 (Penutup/Refleksi).

- [ ] **Step 3: Integrasikan ke dalam tab Micro-Teaching pada `index.html`**
  Paparan templat RPH boleh sunting, rubrik pemarkahan kendiri, dan butang cetak RPH.

---

### Task 6: Simulator Temu Duga Panel MARA (Teknik STAR)

**Files:**
- Create: `c:\Users\it-01995\Downloads\MAC\js\interview.js`

**Interfaces:**
- Produces: `InterviewSimulator` dengan method:
  - `getRandomQuestion(category)`
  - `filterByCategory(category)`
  - `revealSTARGuide(questionId)`
  - `toggleTimer(seconds)`

- [ ] **Step 1: Bina `js/interview.js`**
  Mengandungi bank 25+ soalan lazim panel MARA DG41 yang dibahagikan kepada 4 kategori (Fakta MARA, Sistem MRSM, Isu PJPK, dan Soalan Situasi STAR).

- [ ] **Step 2: Bina ciri latihan interaktif kad soalan (*Flashcards*)**
  Fungsi kad flip/reveal untuk melihat jawapan ideal, kata kunci markah tinggi (*scoring keywords*), dan pemasa menjawab 2 minit.

- [ ] **Step 3: Integrasikan ke dalam tab Temu Duga pada `index.html`**
  Sambungkan penapis kategori, navigasi kad soalan, dan panel panduan teknik STAR.

---

### Task 7: Verifikasi Keseluruhan, Pengujian Paparan & Cetakan

**Files:**
- Create: `c:\Users\it-01995\Downloads\MAC\README.md`

**Interfaces:**
- Produces: Panduan pengguna lengkap dalam `README.md` dan platform berfungsi 100% tanpa sebarang ralat.

- [ ] **Step 1: Jalankan semua ujian automatik (Node.js)**
  Pastikan semua unit tests psikometrik dan kecergasan lulus.

- [ ] **Step 2: Semak ketiadaan ralat konsol dan keserasian luar talian**
  Sahkan semua pautan, skrip dan fail CSS dimuat secara setempat tanpa ralat 404.

- [ ] **Step 3: Uji fungsi cetak (*Print to PDF*)**
  Sahkan format cetakan RPH, jadual norma SEGAK, dan ringkasan nota temuduga kemas dan teratur.

- [ ] **Step 4: Kemas kini fail `README.md`**
  Sertakan panduan langkah demi langkah cara melancarkan dan menggunakan platform.
