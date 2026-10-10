# Reka Bentuk Penstrukturan Semula Platform MAC Berdasarkan Dokumen PDF Rasmi MARA 2026

**Tarikh:** 11 Oktober 2026  
**Dokumen Rujukan Tunggal:** Dokumen PDF Rasmi MARA (Lampiran A, Lampiran D, Lampiran E, Lampiran F1, Lampiran G1 v.300726)  
**Sasaran:** Calon Pegawai Perkhidmatan Pendidikan DG9 (Pendidikan Jasmani dan Pendidikan Kesihatan - PJPK)

---

## 1. Latar Belakang & Rasional Penstrukturan Semula

Sebelum ini, platform telah dibina dengan beberapa modul hipotetikal luar (seperti Ujian Psikometrik MyPersonaliti 30 soalan, Esei Bertulis PEEL dwibahasa, LDK Dinamika Kumpulan, dan kalkulator 5 bateri SEGAK sekolah).

Berdasarkan dokumen rasmi terkini MARA:
- **Garis Panduan Program MARA Assessment Centre (MAC) Pegawai Perkhidmatan Pendidikan DG9 Tahun 2026 (Lampiran A)**
- **Borang Permohonan Jawatan (Lampiran D v.300726)**
- **Borang Penilaian Ujian Kecergasan (Lampiran E v.300726)**
- **Borang Penilaian Temu Duga (Lampiran F1 v.300726)**
- **Borang Penilaian Pengajaran (Lampiran G1 v.300726)**

Pusat Penilaian MARA (MAC) bagi jawatan ini **HANYA** mempunyai **dua (2) komponen / tiga (3) fasa penilaian** sahaja:
1. **Ujian Kecergasan (Anggaran 60 minit)** – BMI, Sejarah Kesihatan & Bleep Test Peringkat 1–10 (Lampiran E).
2. **Penilaian Pengajaran (10 minit)** – Demonstrasi amali PdP PJ di hadapan panel, RPH format bebas, alatan sukan sendiri, tanpa projektor (Lampiran G1 & Klausa 4.3).
3. **Temu Duga Panel (30 minit)** – Sesi temu duga kumpulan dinilai berasaskan 10 kriteria rasmi MARA (Lampiran F1 & Klausa 4.4).
Ditambah satu hab sokongan:
4. **Senarai Semak Dokumen & Panduan Calon (Lampiran A & D)** – Pengurusan fail asal (10 perkara), salinan urus setia (18 perkara), 8 keping gambar pasport, dan etika pakaian sukan/rasmi.

---

## 2. Struktur Modul & Fungsi Terperinci (100% Daripada PDF)

### Modul 1: Hab Ujian Kecergasan (Lampiran E)
- **Komponen 1.1: Pengiraan Indeks Jisim Badan (BMI)**
  - Formula tepat: $\text{BMI} = \frac{\text{Berat (kg)}}{\text{Tinggi (m)} \times \text{Tinggi (m)}}$
  - Input: Berat (kg), Tinggi (m). Output: Nilai BMI ($kg/m^2$) dan klasifikasi standard kesihatan.
- **Komponen 1.2: Soal Selidik Sejarah Kesihatan (Seksyen 2 Lampiran E)**
  - Pilihan status merokok: Ya / Tidak.
  - Catatan sejarah kesihatan diri.
  - Maklumat pengecualian (masalah kesihatan kritikal / buku rekod ibu mengandung mengikut Klausa 3.3 & 3.4 Lampiran A).
- **Komponen 1.3: Audio Pemasa Bleep Test Rasmi MARA (Seksyen 3 Lampiran E)**
  - Mengikut jadual rasmi pusingan 20 meter Lampiran E:
    - Peringkat 1: 7 pusingan
    - Peringkat 2: 8 pusingan
    - Peringkat 3: 8 pusingan
    - Peringkat 4: 9 pusingan
    - Peringkat 5: 9 pusingan
    - Peringkat 6: 10 pusingan
    - Peringkat 7: 10 pusingan
    - Peringkat 8: 11 pusingan
    - Peringkat 9: 11 pusingan
    - Peringkat 10: 11 pusingan
    - *(Jumlah Penuh: 94 pusingan)*.
  - Kawalan audio Web Audio API (sintesis nada bip tulen tanpa internet): Mula, Jeda, Butang Catat Pusingan Semasa (*Tap to Record*).
  - Paparan interaktif grid 10 peringkat menunjukkan pusingan yang telah berjaya diselesaikan.
  - Butang Cetak Borang Penilaian Kecergasan (Lampiran E) bersama skor calon.

---

### Modul 2: Hab Penilaian Pengajaran 10 Minit (Lampiran G1 & Klausa 4.3)
- **Komponen 2.1: Pemasa Simulasi Pengajaran 10 Minit**
  - Pemasa undur 10 minit tepat (Klausa 4.2 Lampiran A).
  - Isyarat audio/visual pada minit ke-8 (peringatan 2 minit akhir) dan minit ke-10 (tamat).
- **Komponen 2.2: Garis Panduan Khusus PdP PJPK (Klausa 4.3 Lampiran A)**
  - Peringatan: Calon PJPK perlu bersedia untuk Pengajaran & Pembelajaran PENDIDIKAN JASMANI (Klausa 4.3.9).
  - Peringatan alatan: Peralatan sukan **tidak disediakan**, calon **wajib membawa sendiri** alatan yang diperlukan (Klausa 4.3.5 & 4.3.9).
  - **LARANGAN KERAS:** Calon **dilarang menggunakan projektor** (Klausa 4.3.6). Urus setia hanya sedia papan putih dan pen marker (Klausa 4.3.7).
  - Pakaian: Calon PJPK diminta menggunakan pakaian sukan semasa sesi Penilaian Pengajaran (Klausa 5.2.1).
- **Komponen 2.3: Pembina RPH Format Bebas (Klausa 4.3.3)**
  - Calon dikehendaki menyediakan RPH untuk dikemukakan kepada panel (format bebas).
  - Borang penyedia ringkas: Tajuk, Tingkatan, Objektif Pembelajaran, Alatan Sukan yang Dibawa, Set Induksi (2-3 minit), Fasa Ansur Maju/Aktiviti Utama (5-6 minit), Penutup/Refleksi (2 minit).
  - Butang Cetak RPH (format kemas A4).
- **Komponen 2.4: Rubrik Rasmi Panel Pengajaran (Lampiran G1)**
  - 12 kriteria penilaian tepat (Skala 1 - 5, Markah Penuh 60):
    1. *Rancangan Pengajaran:*
       - a. Objektif (1–5)
       - b. Isi kandungan (1–5)
    2. *Pengajaran:*
       - a. Set induksi (1–5)
       - b. Penyampaian:
         - i. Kelancaran (1–5)
         - ii. Kejelasan penerangan (1–5)
         - iii. Suara (1–5)
       - c. Perhatian terhadap pelajar (1–5)
       - d. Penyoalan (1–5)
       - e. Penggunaan bahan bantu mengajar (1–5)
       - f. Penilaian pembelajaran (1–5)
       - g. Kreativiti (1–5)
       - h. Penutup (1–5)
  - Pengiraan markah automatik & penetapan keputusan rasmi MARA:
    - **Pilihan (48 – 60)**
    - **Gagal (< 48)**
  - Cetakan Borang Lampiran G1 rasmi.

---

### Modul 3: Hab Temu Duga Panel 30 Minit (Lampiran F1 & Klausa 4.4)
- **Komponen 3.1: Pemasa Temu Duga Kumpulan (30 Minit)**
  - Sesi temu duga selama 30 minit berkumpulan di bilik yang sama (Klausa 4.2).
- **Komponen 3.2: 10 Dimensi Penilaian Temu Duga MARA (Lampiran F1)**
  - Kriteria 1: **Penampilan** – Berpakaian kemas, baik, bersopan, bersedia dan yakin.
  - Kriteria 2: **Kelayakan** – Kelayakan bertepatan dengan subjek PJPK yang dimohon.
  - Kriteria 3: **Sikap** – Positif dalam ucapan & tindakan, proaktif melakukan sebelum diminta.
  - Kriteria 4: **Kemahiran Komunikasi** – Bertutur & menulis dengan lancar, melahirkan idea meyakinkan.
  - Kriteria 5: **Tahap Keyakinan** – Bercakap dan membawa diri dengan yakin, percaya pada idea sendiri.
  - Kriteria 6: **Menggerak dan Mengenalpasti** – Bekerja ke arah misi organisasi MARA, bertekad mencapai matlamat organisasi & peribadi.
  - Kriteria 7: **Kemahiran Interpersonal** – Memahami kebimbangan orang lain, berkomunikasi dengan kesedaran & empati.
  - Kriteria 8: **Kemahiran Analitikal** – Menganalisis masalah dengan pendekatan logik, sistematik dan tersusun.
  - Kriteria 9: **Inovasi dan Kreativiti** – Menyokong inovasi & perubahan untuk meningkatkan keberkesanan organisasi.
  - Kriteria 10: **Merancang dan Menganjurkan** – Merancang dan mengatur kerja untuk memaksimumkan penggunaan masa, pelbagai tugas.
- **Komponen 3.3: Panduan Jawapan & Soalan Contoh Berfokuskan 10 Kriteria**
  - Soalan khusus bagi setiap 10 kriteria beserta tips jawapan menonjolkan ciri calon Pilihan (40–50).
- **Komponen 3.4: Rubrik Rasmi Panel Temu Duga (Lampiran F1)**
  - Penilaian 10 kriteria (Skala 1–5, Markah Penuh 50).
  - Keputusan rasmi MARA:
    - **Pilihan (40 – 50)**
    - **Gagal (< 40)**
  - Ruang ulasan kekuatan, kelemahan, dan ulasan keseluruhan panel.
  - Cetakan Borang Lampiran F1 rasmi.

---

### Modul 4: Senarai Semak Dokumen & Panduan Calon (Lampiran A & Lampiran D)
- **Komponen 4.1: Senarai Semak Dokumen Asal Dalam Fail (Klausa 1 Lampiran A)**
  - 1.1 Sijil Kelahiran
  - 1.2 Sijil SPM
  - 1.3 Sijil STPM / Matrikulasi / Diploma
  - 1.4 Transkrip Diploma
  - 1.5 Sijil Ijazah Sarjana Muda / Sarjana / PhD
  - 1.6 Transkrip Ijazah Sarjana Muda / Sarjana / PhD
  - 1.7 Sijil Diploma Pendidikan
  - 1.8 Transkrip Diploma Pendidikan
  - 1.9 Sijil Tahfiz / Diploma Tahfiz
  - 1.10 Sijil Ujian Bahasa Inggeris CEFR
  - *Sijil-sijil asal lain (kejurulatihan dsb.) disusun selepas 1.10.
- **Komponen 4.2: Senarai Semak Salinan Dokumen Serahan Urus Setia (Klausa 2 & 3 Lampiran A)**
  - Lampiran G1 (Penilaian Pengajaran) – **2 Salinan**
  - Lampiran F1 (Penilaian Temu Duga) – **4 Salinan**
  - Lampiran D (Borang Permohonan) – **1 Salinan**
  - Resume – **1 Salinan**
  - Salinan Kad Pengenalan (Disahkan) – **1 Salinan**
  - Salinan Sijil Kelahiran (Disahkan) – **1 Salinan**
  - Salinan SPM (Disahkan) – **1 Salinan**
  - Salinan Ijazah & Transkrip (Disahkan) – **1 Salinan**
  - Pengiktirafan Kelayakan MQA / MQR (Klausa 5 Lampiran A) – **1 Salinan**
  - Lampiran E (Ujian Kecergasan) – **1 Salinan** (diserah selepas ujian)
  - Gambar Terkini Berukuran Pasport – **8 Keping** (ditampal pada D, E, F1, G1)
- **Komponen 4.3: Peraturan Am & Peringatan Penting (Klausa 5 Lampiran A)**
  - Masa Pendaftaran: 7.30 pagi – 8.00 pagi.
  - Etika Pakaian: Terus berpakaian sukan semasa mendaftar (pakaian sukan untuk Ujian Kecergasan & PdP PJPK).
  - Peringatan: Makanan/penginapan tidak disediakan, telefon mod senyap, DILARANG mengambil gambar/video.
- **Komponen 4.4: Penjana Borang Permohonan Digital (Lampiran D v.300726)**
  - Borang input interaktif mengikut 12 seksyen Lampiran D untuk memudahkan calon mengisi butiran diri dan mencetak borang yang kemas.

---

## 3. Reka Bentuk UI/UX Responsif (Mobile & iPad-First)

1. **Navigasi Tab Ramping (4 Tab Sahaja):**
   - 🏃 **Ujian Kecergasan** (BMI & Bleep Test)
   - ⏱️ **Penilaian Pengajaran** (10 Minit & RPH)
   - 👔 **Temu Duga Panel** (10 Kriteria & Simulasi)
   - 📋 **Senarai Semak & Panduan** (Lampiran A & D)
2. **Kemas untuk Skrin Sentuh (Mobile / Tablet):**
   - Bar navigasi bawah (*bottom bar*) atau tab atas bersaiz sentuh (*touch target* $\ge 48px$).
   - Butang mula pemasa, butang rekod pusingan bleep test yang besar dan mudah ditekan ketika di padang/gelanggang.
   - Kad-kad ringkas, kontras warna korporat MARA (#8B0000 Crimson, #0A2540 Navy, putih, kelabu lembut).
   - Tipografi menggunakan sistem fon tanpa muat turun CDN luaran (100% luar talian).
3. **Mesra Cetakan (@media print):**
   - Setiap borang (E, F1, G1, D, RPH) boleh dicetak dalam format A4 tepat menyerupai format borang MARA asal.

---

## 4. Pengesahan Kualiti & Ujian (Test Plan)

1. **Ujian Unit (TDD):**
   - `tests/fitness.test.js`: Pengiraan BMI formula Lampiran E, jadual pusingan Bleep Test Peringkat 1–10 (jumlah 94 pusingan).
   - `tests/teaching.test.js`: 12 kriteria rubrik Lampiran G1, pengiraan skor 1–60, logik gred Pilihan (48–60) vs Gagal (<48), pemasa 10 minit.
   - `tests/interview.test.js`: 10 kriteria rubrik Lampiran F1, pengiraan skor 1–50, logik gred Pilihan (40–50) vs Gagal (<40), pemasa 30 minit.
   - `tests/checklist.test.js`: Senarai semak dokumen asal (10 item), dokumen salinan (18 item), 8 keping gambar, simpanan status tick dalam LocalStorage.
2. **Ujian Integrasi (`tests/integration.test.js`):**
   - Memastikan sifar CDN luaran.
   - Memastikan semua tab dan komponen responsif wujud dalam DOM.
   - Memastikan tiada lagi kod atau rujukan lama (psikometrik, esei, ldk, segak sekolah).
