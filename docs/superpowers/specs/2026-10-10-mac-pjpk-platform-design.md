# Spesifikasi Reka Bentuk Platform Latihan MARA Assessment Centre (MAC)
## Jawatan: Pegawai Perkhidmatan Pendidikan (DG41) - Pendidikan Jasmani dan Kesihatan (PJPK)
**Tarikh:** 10 Oktober 2026  
**Status:** Disahkan & Diluluskan Calon  

---

## 1. Pengenalan & Matlamat Projek

Platform ini dibangunkan sebagai sistem latihan bersepadu setempat (*All-in-One Training Platform & Knowledge Hub*) untuk membantu calon menghadapi dan lulus **MARA Assessment Centre (MAC)** bagi skim **Pegawai Perkhidmatan Pendidikan Gred DG41 (Pendidikan Jasmani dan Pendidikan Kesihatan / PJPK)** di bawah Majlis Amanah Rakyat (MARA) / Maktab Rendah Sains MARA (MRSM).

Setiap maklumat, modul soalan, norma kecergasan, dan panduan pengajaran adalah bersumberkan rujukan sahih kerajaan dan agensi berkaitan (Portal Rasmi MARA, MyPersonaliti MARA, DSKP KSSM PJPK KPM, Buku Panduan Ujian SEGAK KPM, dan Protokol Luc Léger).

---

## 2. Seni Bina Sistem (System Architecture)

### 2.1 Teknologi & Format
* **Format:** Standalone Single Page Application (SPA) responsif berasaskan HTML5, CSS3 moden, dan Vanilla JavaScript (ES6+).
* **Kebolehcapaian:** Beroperasi sepenuhnya secara luar talian (*100% offline-ready*), boleh dibuka terus melalui pelayar web (Chrome, Edge, Safari, Firefox) tanpa sebarang pemasangan perisian atau pelayan luaran.
* **Pengurusan Data:** `localStorage` pelayar web digunakan untuk menyimpan rekod percubaan ujian psikometrik, rekod masa/tahap Bleep Test, dan catatan peribadi pengguna secara setempat.
* **Audio Interaktif:** Enjin audio Bleep Test dijana menggunakan **Web Audio API** secara sintesis gelombang (beeps frekuensi tepat) bagi memastikan kebolehfungsian tanpa memerlukan muat turun fail audio luaran.
* **Ciri Cetakan (*Print-Ready*):** Dilengkapi dengan lembaran gaya cetakan khas (*print CSS*) untuk membolehkan templat RPH, jadual norma SEGAK, dan nota temuduga dicetak terus ke format fizikal A4 atau disimpan sebagai PDF.

### 2.2 Struktur Fail Projek
```text
MAC/
├── index.html                   # Halaman utama (Dashboard & Navigasi Modul)
├── css/
│   └── style.css                # Penggayaan UI moden korporat MARA & print CSS
├── js/
│   ├── app.js                   # Kawalan navigasi tab, notifikasi & state
│   ├── psychometric.js          # Enjin ujian psikometrik & penganalisis konsistensi
│   ├── fitness.js               # Enjin audio Bleep Test (Web Audio API) & kalkulator SEGAK
│   ├── microteaching.js         # Penjana & templat RPH KSSM PJPK MRSM 10-15 minit
│   └── interview.js             # Simulator soalan temuduga & panduan kaedah STAR
├── docs/                        # Kit Nota Lengkap & Rujukan Sahih
│   ├── 01_FAKTA_DAN_AKTA_MARA.md
│   ├── 02_PANDUAN_BLEEP_TEST_DAN_SEGAK.md
│   ├── 03_RPH_LENGKAP_PJPK_MRSM.md
│   └── 04_BANK_SOALAN_TEMUDUGA_DG41.md
└── docs/superpowers/specs/
    └── 2026-10-10-mac-pjpk-platform-design.md
```

---

## 3. Perincian 5 Modul Utama

### Modul 1: Simulator Ujian Psikometrik (MyPersonaliti & Integriti)
* **Format Soalan:** Pilihan skala Likert (Sangat Tidak Bersetuju, Tidak Bersetuju, Bersetuju, Sangat Bersetuju) atau Ya/Tidak berasaskan format MyPersonaliti MARA.
* **Domain Penilaian:**
  1. Integriti & Amanah Perkhidmatan Awam (anti-rasuah, ketelusan, patuh prosedur).
  2. Kestabilan Emosi & Kawalan Diri (pengurusan tekanan murid asrama & beban tugas).
  3. Sikap Kerjasama & Kepimpinan Guru.
  4. Ketekalan / Pengesanan Hipokrit (*Lie Scale / Trap Questions* berpasangan).
* **Fungsi:** Pemasa undur ujian, pengiraan skor domain secara automatik, petunjuk indeks konsistensi (Hijau / Kuning / Merah), dan huraian rasional jawapan.

### Modul 2: Hab Kecergasan Fizikal (Enjin Bleep Test & Kalkulator SEGAK)
* **Enjin Bleep Test 20 Meter:**
  * Protokol piawai Luc Léger (Kelajuan mula 8.5 km/j, pertambahan 0.5 km/j setiap tahap, jarak larian 20 meter).
  * Audio beeps automatik melalui Web Audio API (nada frekuensi tinggi untuk beep ulang-alik, nada berkembar untuk kenaikan tahap).
  * Paparan masa nyata: Level, Shuttle, Larian Kumulatif, Masa Sisa, dan Anggaran $VO_2\text{ Max}$ ($VO_2\text{ Max} = 18.0 + 6.0 \times \text{Kelajuan Akhir}$).
* **Kalkulator Standard SEGAK KPM (Khusus Guru PJPK):**
  * 5 Bateri Ujian: Indeks Jisim Badan (BMI), Naik Turun Bangku 3 Minit (Kadar Nadi), Tekan Tubi 1 Minit, Ringkuk Tubi Separa 1 Minit, Jangkauan Melunjur.
  * Padanan automatik dengan Jadual Norma SEGAK Kebangsaan KPM (Gred A - Sangat Tinggi hingga Gred E).

### Modul 3: Hab Micro-Teaching PJPK (MRSM / 10–15 Minit)
* **Kepatuhan Kurikulum:** Berdasarkan Standard Kandungan (SK) dan Standard Pembelajaran (SP) DSKP KSSM PJPK KPM.
* **3 Templat Lengkap RPH:**
  1. *Kemahiran Sukan (Serangan):* Hantaran Pendek & Kawalan Bola (Futsal/Bola Sepak) - Tingkatan 2.
  2. *Kecergasan Fizikal:* Kapasiti Aerobik & Kiraan Kadar Nadi Latihan (*Target Heart Rate*) - Tingkatan 4.
  3. *Pendidikan Kesihatan (Pertolongan Cemas):* Pengurusan Kecederaan Akut Kaedah P.R.I.C.E - Tingkatan 1.
* **Rubrik Pemarkahan Panel:** Borang semakan kriteria pemarkahan (Set Induksi, Kawalan Kelas, Ansur Maju, Pengurusan Alatan/Keselamatan, Nada Suara, Penutup/Refleksi).

### Modul 4: Simulator Temu Duga Panel MARA (Teknik STAR)
* **Kategori Soalan Sahih:**
  1. *Fakta Organisasi:* Akta MARA 1966, visi & misi, struktur pendidikan MARA.
  2. *Sistem MRSM:* Falsafah SPMRSM, program khas (Ulul Albab, IGCSE, Premier, PKP), peranan guru asrama.
  3. *Pedagogi & Isu PJPK:* Pengurusan murid pasif/obes, keselamatan alatan padang, pelaksanaan SEGAK.
  4. *Soalan Situasi / Tingkah Laku:* Kaedah STAR (*Situation, Task, Action, Result*).
* **Interaktiviti:** Mod kad soalan rawak (*flashcards*), pemasa berfikir/bercakap, dan senarai kata kunci markah tinggi (*scoring keywords*).

### Modul 5: Pusat Rujukan Sahih & Kit Nota Cetak
* Pengumpulan nota padat berasaskan sumber tulen:
  * `01_FAKTA_DAN_AKTA_MARA.md`
  * `02_PANDUAN_BLEEP_TEST_DAN_SEGAK.md`
  * `03_RPH_LENGKAP_PJPK_MRSM.md`
  * `04_BANK_SOALAN_TEMUDUGA_DG41.md`
* Butang cetak satu klik (*One-Click Print*) pada setiap halaman web untuk paparan terus ke PDF.

---

## 4. Pelan Pengujian & Verifikasi

1. **Ujian Logik Psikometrik:** Mengesahkan formula penskoran dan pengesanan soalan perangkap konsistensi berfungsi dengan tepat.
2. **Ujian Enjin Bleep Test:** Mengesahkan sela masa masa beep dan frekuensi audio Web Audio API bertepatan dengan jadual kelajuan Luc Léger.
3. **Ujian Kalkulator SEGAK:** Mengesahkan formula gred sepadan dengan buku panduan SEGAK KPM bagi kategori umur 17+ / dewasa.
4. **Ujian Responsif & Cetakan:** Memastikan susun atur paparan kemas di skrin komputer dan cetakan fail PDF tidak terpotong.
