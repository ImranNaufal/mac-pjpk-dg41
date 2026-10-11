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

  // 5 Tab Rasmi (Termasuk Page Sumber: Nota Ringkas Soalan & Jawapan IV)
  const VALID_TABS = ['fitness', 'teaching', 'interview', 'docs', 'checklist'];
  const STORAGE_KEYS = {
    ACTIVE_TAB: 'mac_active_tab',
    PROFILE: 'mac_candidate_profile'
  };

  // Ringkasan Penuh 6 Kit Nota Ringkas Soalan & Jawapan Temu Duga (Page Sumber IV)
  const DOC_SUMMARIES = {
    1: {
      title: 'Nota IV 01: Fakta Rasmi, Akta MARA 1966 (Akta 249) & Pimpinan MARA (Soalan 1 – 7)',
      content: `
        <h4>S1. Tujuan Penubuhan MARA Mengikut Akta 249 & Peranan Guru PJPK</h4>
        <ul>
          <li><strong>Tarikh & Sejarah:</strong> Ditubuhkan pada <strong>1 Mac 1966</strong> di bawah <strong>Akta Majlis Amanah Rakyat 1966 (Akta 249)</strong> bagi menggantikan RIDA hasil resolusi Kongres Ekonomi Bumiputera Pertama (1965).</li>
          <li><strong>Seksyen 6(1) Akta 249:</strong> Kewajipan MARA memajukan, menggalakkan, memudahkan serta menjalankan pembangunan ekonomi dan kemasyarakatan khususnya di kawasan luar bandar.</li>
          <li><strong>Kaitan Guru PJPK:</strong> Membina modal insan Bumiputera yang cergas kardiorespiratori, berdaya tahan mental (<em>grit</em>), dan berdisiplin tinggi supaya mampu bersaing di peringkat global.</li>
        </ul>

        <h4>S2. Visi, Misi, Moto MARA & Terjemahan Dalam PJPK</h4>
        <ul>
          <li><strong>Visi:</strong> <em>"Menjadi organisasi amanah yang unggul dan diberkati untuk mengangkat martabat bangsa."</em></li>
          <li><strong>Misi:</strong> <em>"Menerajui bidang keusahawanan, pendidikan dan pelaburan untuk penguasaan ekuiti Bumiputera."</em></li>
          <li><strong>Moto / Slogan:</strong> <strong>"Keusahawanan dan Pendidikan Global"</strong>.</li>
          <li><strong>Aplikasi PJPK:</strong> (1) Integriti mutlak Ujian SEGAK tanpa manipulasi data; (2) Pedagogi PAK-21 & sains sukan moden; (3) Latih murid urus Karnival Sukan Maktab (bajet & penajaan keusahawanan).</li>
        </ul>

        <h4>S3. Perbezaan Utama MRSM Berbanding Sekolah Harian KPM</h4>
        <ol>
          <li><strong>Agensi:</strong> MRSM di bawah <strong>Bahagian Pendidikan Menengah (BPM) MARA & KKDW</strong> (bukan KPM).</li>
          <li><strong>Ekosistem Asrama 100%:</strong> Pembentukan karakter, STEM & sahsiah berjalan 24 jam sehari.</li>
          <li><strong>Sistem Homeroom:</strong> Setiap guru menjadi ibu bapa angkat rasmi kepada 10–15 orang pelajar.</li>
          <li><strong>Peranan Multi-Role Guru:</strong> Pendidik PdPc (pagi) ➔ Jurulatih Sukan (petang) ➔ Penasihat Homeroom & Warden Asrama (malam).</li>
        </ol>

        <h4>S4. Enam (6) Aliran SPMRSM & Pendekatan PJPK</h4>
        <ol>
          <li><strong>MRSM Premier:</strong> KSSM + Modul Sahsiah/Keusahawanan MARA ➔ Imbangi sukan prestasi tinggi & akademik.</li>
          <li><strong>MRSM Ulul Albab:</strong> Tahfiz 30 Juzuk Al-Quran ➔ Fokus kardio & pernafasan diafragma untuk stamina hafazan.</li>
          <li><strong>MRSM IGCSE:</strong> Dwi-Sijil SPM & Cambridge ➔ Jadikan PJ terapi pelepasan stres (<em>burnout reliever</em>).</li>
          <li><strong>MRSM Bitara (PKP):</strong> Pelajar pintar berbakat (<em>Gifted</em>) ➔ Sukan taktikal & penyelesaian masalah KBAT.</li>
          <li><strong>MRSM IB-MYP:</strong> Kurikulum inkuiri antarabangsa ➔ Pentaksiran 4 Kriteria Rubrik IBO (A, B, C, D).</li>
          <li><strong>MRSM Teknikal:</strong> Sains kejuruteraan (MRSM Bentong) ➔ Fokus keselamatan & biomekanik pergerakan.</li>
        </ol>

        <h4>S5. Barisan Pucuk Pimpinan KKDW & MARA (Terkini 2026)</h4>
        <ul>
          <li><strong>Menteri KKDW:</strong> YAB Dato' Seri Dr. Ahmad Zahid bin Hamidi</li>
          <li><strong>Pengerusi MARA:</strong> YB Datuk Dr. Asyraf Wajdi bin Dato' Dusuki</li>
          <li><strong>Ketua Pengarah MARA:</strong> YBhg. Dato' Zulfikri bin Osman</li>
          <li><strong>Timbalan Ketua Pengarah (Pendidikan):</strong> YBhg. Ir. Dr. Mahzan bin Teh</li>
          <li><strong>Pengarah BPM MARA:</strong> YBrs. Tuan Haji Shahrizal bin Mohd Saderi</li>
        </ul>

        <h4>S6 & S7. Sebab Memilih MARA & Sumbangan PJPK Kepada Modal Insan</h4>
        <ul>
          <li><strong>Motivasi MARA:</strong> Roh <em>"Amanah Rakyat"</em> membela pelajar luar bandar & B40 (kuota 60% B40 & program <strong>BUDI MARA</strong>) melalui didikan holistik 24 jam.</li>
          <li><strong>Falsafah PJPK:</strong> <em>"Mens sana in corpore sano"</em> — senaman aerobik tingkatkan aliran oksigen ke otak (neurogenesis), daya ingatan STEM, dan ketahanan emosi bangkit daripada kegagalan (<em>resilience</em>).</li>
        </ul>
      `
    },
    2: {
      title: 'Nota IV 02: Budaya MRSM, Homeroom, Warden Asrama & Sifar Buli (Soalan 8 – 14)',
      content: `
        <h4>S8. Strategi Mengimbangi Tugas Guru PJPK & Warden Asrama</h4>
        <ul>
          <li><strong>Pengurusan Masa Berasaskan Blok (Time-Blocking):</strong> Siang (7.30 pagi – 4.30 petang) fokus 100% PdPc, RPH & kokurikulum; Malam fokus rondaan asrama, prep malam & kebajikan murid.</li>
          <li><strong>Pengupayaan Kepimpinan Pelajar:</strong> Gerakkan <strong>Badan Wakil Pelajar (BWP)</strong>, Jawatankuasa Asrama & Ketua Dormitori untuk kawalan disiplin kendiri.</li>
          <li><strong>Kecergasan Kendiri:</strong> Kekalkan stamina fizikal guru supaya kekal bertenaga tanpa <em>burnout</em>.</li>
        </ul>

        <h4>S9. Peranan Guru Homeroom & Cara Bantu Anak Homeroom Murung</h4>
        <ol>
          <li><strong>Pertemuan Empat Mata Tanpa Menghakimi:</strong> Sesi hati ke hati santai (<em>active listening</em>) bagi menyiasat punca (<em>homesick</em>, masalah rakan, atau akademik).</li>
          <li><strong>Terapi Riadah Homeroom:</strong> Ajak berjoging/riadah petang bersama ahli homeroom untuk merembeskan hormon endorfin.</li>
          <li><strong>Intervensi Bersepadu:</strong> Rujuk Guru Kaunseling (UBK), maklumkan perkembangan kepada ibu bapa kandung, dan lantik <em>peer buddy</em> akademik dalam homeroom.</li>
        </ol>

        <h4>S10. Menangani Isu Buli ("You Touch, You Go!") Melalui Sukan</h4>
        <ul>
          <li><strong>Ketegasan Prinsip MARA:</strong> Pegang teguh polisi sifar buli <strong>"You Touch, You Go!"</strong>.</li>
          <li><strong>Penyaluran Tenaga Remaja:</strong> Anjurkan Liga Sukan Antara Asrama/Homeroom waktu petang supaya tenaga fizikal disalurkan secara sihat.</li>
          <li><strong>Etika Kesukanan (Sportsmanship):</strong> Didik prinsip bahawa yang kuat melindungi yang lemah, tiada keistimewaan senioriti di atas padang.</li>
          <li><strong>Kawalan Titik Buta (Blind Spots):</strong> Pastikan stor sukan berkunci & pantau bilik basuh/koridor semasa rondaan warden.</li>
        </ul>

        <h4>S11. Subjek PJPK Sebagai Pelepas Tekanan (Stress Reliever) Jadual Padat</h4>
        <ul>
          <li><strong>Mekanisme Fisiologi:</strong> Senaman sederhana merangsang hormon <strong>Endorfin, Dopamin & Serotonin</strong> sambil menurunkan hormon <strong>Kortisol</strong> (stres).</li>
          <li><strong>Pendekatan Joyful Learning:</strong> Guna permainan bersyarat menyeronokkan (TGfU) dan teknik pernafasan diafragma semasa penyejukan badan (<em>cooling down</em>).</li>
        </ul>

        <h4>S12, S13 & S14. Penempatan Pedalaman, Kejohanan KEJORA/SUPER & Etika Pakaian</h4>
        <ul>
          <li><strong>Penempatan Sabah/Sarawak/Pedalaman:</strong> <strong>Bersedia 100% tanpa syarat</strong> di mana-mana 58 MRSM; pelajar luar bandar memiliki bakat & daya tahan fizikal semula jadi yang tinggi.</li>
          <li><strong>Persediaan KEJORA & SUPER:</strong> Guna <strong>Periodisasi Latihan 4 Fasa</strong> (Persediaan Umum ➔ Khusus ➔ Pra-Pertandingan ➔ Pertandingan & <em>Tapering</em>) + jaga nutrisi dewan selera.</li>
          <li><strong>Etika Pakaian Guru PJPK:</strong> Di padang: Baju-T sukan berkolar <em>tuck-in</em>, seluar trek gelap sopan, kasut sukan bertali & wisel. Di kelas/pejabat: Pakaian formal korporat MARA / kemeja bertali leher / baju kurung.</li>
        </ul>
      `
    },
    3: {
      title: 'Nota IV 03: Pedagogi PJPK, Obesiti, SOP Kecemasan D.R.C.A.B & SEGAK (Soalan 15 – 21)',
      content: `
        <h4>S15. Mengendalikan Murid Obesiti / Pasif Enggan Berpeluh</h4>
        <ul>
          <li><strong>Sifar Body Shaming:</strong> Elakkan memalukan murid di hadapan rakan; panggil secara peribadi dengan empati.</li>
          <li><strong>Pedagogi Terbeza (Differentiated Instruction):</strong> Ubah suai intensiti mengikut F.I.T.T (cth: jalan pantas <em>brisk walking</em> berbanding larian pecut bagi melindungi sendi lutut).</li>
          <li><strong>Pelibatan Peranan & Small Wins:</strong> Beri peranan kepimpinan teknikal (pengadil/pencatat masa) dan puji setiap peningkatan kecil.</li>
        </ul>

        <h4>S16. SOP Kecemasan Murid Rebah Semasa Bleep Test (Langkah Demi Langkah)</h4>
        <ol>
          <li><strong>Hentikan Ujian Serta-Merta:</strong> Tiup wisel panjang & arahkan murid lain berundur bagi ruang pengudaraan.</li>
          <li><strong>D (Danger) & R (Response):</strong> Pastikan kawasan selamat, tepuk bahu & panggil nama murid.</li>
          <li><strong>Aktifkan Bantuan Kecemasan:</strong> Hantar 2 murid panggil Guru Bertugas/Pusat Kesihatan Maktab, hubungi <strong>999</strong>, dan bawa peti First Aid serta peranti <strong>AED</strong>.</li>
          <li><strong>C.A.B (Circulation, Airway, Breathing):</strong> Periksa nadi karotid & pernafasan (&lt;10 saat). Jika tiada nadi/nafas, mulakan <strong>CPR (30 tekanan dada : 2 hembusan)</strong> & guna AED. Jika bernafas (pitam), letakkan dalam <strong>Recovery Position</strong> & tinggikan sedikit kaki.</li>
          <li><strong>Dokumentasi & Waris:</strong> Lapor segera kepada Pengetua/PK HEM untuk maklumkan ibu bapa & tulis laporan rasmi.</li>
        </ol>

        <h4>S17 & S18. Liabiliti Undang-Undang (Duty of Care) & Pentaksiran PBD</h4>
        <ul>
          <li><strong>Duty of Care & In Loco Parentis:</strong> (1) Audit keselamatan padang & tiang gol 10 minit sebelum kelas; (2) Saringan kesihatan <strong>PAR-Q</strong>; (3) <strong>Pengawasan Berterusan</strong> (jangan sesekali tinggal kelas tanpa guru); (4) Kunci stor sukan.</li>
          <li><strong>PBD Adil 3 Domain DSKP:</strong> Nilai merentas <strong>Psikomotor</strong> (ansur maju kendiri), <strong>Kognitif</strong> (kefahaman strategi), dan <strong>Afektif Standard 5.0</strong> (disiplin, kerjasama & kesukanan) — murid kurang mahir motor tetap boleh capai TP5/TP6.</li>
        </ul>

        <h4>S19, S20 & S21. Pelan Intervensi SEGAK, KBAT (TGfU) & Topik Sensitif PEERS</h4>
        <ul>
          <li><strong>Intervensi 3 Penjuru (Jika 25% Murid Overweight):</strong> (1) Kelab <em>Smart Fitness</em> petang (preskripsi F.I.T.T); (2) Semak menu dewan selera bersama PK HEM (kurangkan gula/minyak); (3) Kempen literasi kalori & pertandingan BMI Homeroom.</li>
          <li><strong>KBAT Dalam PJ:</strong> Guna pendekatan <strong>TGfU (Teaching Games for Understanding)</strong> dengan soalan inkuiri taktikal (cth: <em>"Bagaimana membuka ruang kosong dalam situasi 3 lawan 2?"</em>).</li>
          <li><strong>Strategi Mengajar PEERS (75% PK):</strong> Tetapkan kerangka saintifik biologi, undang-undang & batas agama • Asingkan jantina bagi topik sensitif • Sediakan <strong>Kotak Soalan Tanpa Nama (Anonymous Question Box)</strong>.</li>
        </ul>
      `
    },
    4: {
      title: 'Nota IV 04: Jawapan Ringkas 7 Situasi Krisis & Integriti Format S.T.A.R (Soalan 22 – 28)',
      content: `
        <h4>S22. Bertembung 3 Tugas Serentak (Latih Pasukan KSM + Data SEGAK + Warden)</h4>
        <ul>
          <li><strong>Tindakan (Action):</strong> Guna <strong>Matriks Eisenhower</strong>. Pagi: agih tugas semakan data SEGAK bersama panitia PJPK menggunakan hamparan digital. Petang (5.00–6.30 ptg): latihan taktikal berfokus 90 minit dibantu kapten pasukan. Malam: rondaan warden asrama & semak draf akhir laporan selepas jam 11.00 malam.</li>
          <li><strong>Hasil (Result):</strong> Data SEGAK dihantar 24 jam sebelum tarikh tutup, pasukan bersedia ke KSM, dan asrama kekal terkawal.</li>
        </ul>

        <h4>S23. Guru Senior Pinjam Alatan Sukan Mahal Tanpa Rekod Stor</h4>
        <ul>
          <li><strong>Tindakan (Action):</strong> Temu secara <strong>empat mata dengan berhemah</strong> (elak memalukan di bilik guru). Maklumkan sedang kemas kini audit inventori bulanan untuk PK Kokurikulum dan minta beliau lengkapkan <strong>Buku Log Pinjaman Rasmi</strong>. Jika berdegil, lapor ikut saluran pentadbiran.</li>
          <li><strong>Hasil (Result):</strong> Alatan dipulangkan dengan baik, integriti Tatacara Pengurusan Stor MARA terpelihara, hubungan kerja kekal harmoni.</li>
        </ul>

        <h4>S24. Ibu Bapa Datang Marah Kerana Anak Rebah Kepenatan Di Padang</h4>
        <ul>
          <li><strong>Tindakan (Action):</strong> Jemput ke bilik rundingan + hidang air + amalkan <strong>Active Listening</strong> tanpa mencelah. Tunjukkan bukti <strong>RPH rasmi & Pekeliling Ujian SEGAK</strong> (jelaskan ia pentaksiran kurikulum, bukan dendaan). Terangkan SOP rehat di tempat teduh & air glukosa telah diberikan segera.</li>
          <li><strong>Hasil (Result):</strong> Kemarahan ibu bapa reda, salah faham selesai secara profesional, dan imej maktab terpelihara.</li>
        </ul>

        <h4>S25. Dua Pelajar Asrama Bertumbuk Semasa Perlawanan Futsal</h4>
        <ul>
          <li><strong>Tindakan (Action):</strong> Tiup wisel panjang & hentikan perlawanan serta-merta ➔ <strong>Pisahkan kedua-dua pelajar pada jarak 15 meter</strong> & arahkan pemain lain duduk tenang ➔ Beri rawatan ais <strong>P.R.I.C.E</strong> jika ada lebam ➔ Lakukan sesi mediasi & bermaafan selepas emosi reda ➔ Lapor kepada Warden & Guru Disiplin.</li>
          <li><strong>Hasil (Result):</strong> Pergaduhan tidak merebak ke asrama, kedua-dua pelajar insaf dan berdamai.</li>
        </ul>

        <h4>S26, S27 & S28. Rainy Day Plan, Murid Palsukan MC SEGAK & Program FitFest</h4>
        <ul>
          <li><strong>S26 (Hujan Ribut & Dewan Digunakan):</strong> Aktifkan <strong>Rainy Day Lesson Plan</strong> di bilik darjah/seminar — jalankan analisis video taktikal, teori PEERS, atau senaman mobiliti ruang terhad (<em>desk-ercise</em>).</li>
          <li><strong>S27 (Murid Palsukan MC Elak SEGAK):</strong> Sahkan ketulenan dengan klinik secara sulit ➔ Panggil empat mata secara empati (kenal pasti punca takut diejek tidak larat tekan tubi) ➔ Beri amaran integriti + latih secara ansur maju waktu petang sehingga yakin ambil ujian ulangan.</li>
          <li><strong>S28 (Kejayaan Program Sukan):</strong> Anjurkan <strong>"Cabaran 10,000 Langkah & Obstacle FitFest Antara Asrama"</strong> — capai 95% penyertaan warga sekolah & tingkatkan skor kardiorespiratori sebanyak 18%.</li>
        </ul>
      `
    },
    5: {
      title: 'Nota IV 05: Spot Emas Panel, Skrip Pitch 60s, Keusahawanan & Jawapan English (Soalan 29 – 35)',
      content: `
        <h4>S29. (English) Why Should MARA Hire You & How P.E. Supports Ivy League Aspirations?</h4>
        <p><em>"MARA should hire me because I bring a complete package of sports science expertise, CPR certification, and 100% readiness for MRSM's 24-hour boarding school ecosystem—as a P.E. teacher, Homeroom advisor, and hostel warden. Top global universities like the Ivy League look beyond straight A's; they seek grit, leadership, and teamwork. Through my P.E. classes, I build students' cardiovascular endurance—which scientifically boosts cognitive stamina for long study hours—while helping them build a strong sports leadership portfolio."</em></p>

        <h4>S30. (English) How Do You Eradicate Toxic Seniority & Bullying Through Sports?</h4>
        <p><em>"First, I strictly enforce MARA's zero-tolerance 'You Touch, You Go!' anti-bullying policy. On the sports pitch, seniority carries zero privileges; respect is earned purely through discipline and fair play. Second, I implement a Cross-Batch Sports Buddy System where Form 4 and Form 5 seniors mentor Form 1 juniors in athletic skills. Third, I conduct mandatory post-match reflection and handshake sessions to cultivate brotherhood and humility."</em></p>

        <h4>S31. Skrip Pengenalan Diri Padat 60 Saat (Elevator Pitch)</h4>
        <p><em>"Assalamualaikum dan salam sejahtera Tuan/Puan Panel. Saya [Nama Anda], graduan Ijazah Sarjana Muda Pendidikan Jasmani dan Pendidikan Kesihatan dari [Universiti Anda]. Kekuatan utama saya merangkumi 3 aspek: (1) Penguasaan pedagogi DSKP PJPK dan sains sukan yang terbukti apabila saya berjaya meningkatkan kelulusan kecergasan murid sebanyak 22% semasa praktikum; (2) Kemahiran kejurulatihan sukan serta pentauliahan Pertolongan Cemas/CPR; dan (3) Kesediaan 100% memikul 4 peranan serentak di asrama penuh 24 jam sebagai Guru PJPK, Jurulatih, Penasihat Homeroom, dan Warden Asrama di mana-mana 58 buah MRSM seluruh Malaysia."</em></p>

        <h4>S32 & S33. Keusahawanan Sukan MARA & Integriti Mutlak Data SEGAK</h4>
        <ul>
          <li><strong>S32 (Keusahawanan Sukan):</strong> Anjurkan <strong>Karnival Sukan & Ekspo Keusahawanan Maktab</strong> di mana pelajar menguruskan penajaan (<em>sponsorship</em>), mereka bentuk & menjual jersi rumah sukan, mengira bajet/ROI, dan membuka gerai nutrisi sukan.</li>
          <li><strong>S33 (Integriti Data SEGAK):</strong> Laksanakan <strong>Semakan Silang 3 Pihak</strong> (murid pelaku, murid pencatat rakan sebaya, pengesahan guru) + tandatangan terus pada Borang Skor + bentang pelan intervensi F.I.T.T berdasarkan data sebenar.</li>
        </ul>

        <h4>S34 & S35. Dilema Warden 2:30 Pagi & Isu Obesiti Makan 5 Kali Sehari Di Asrama</h4>
        <ul>
          <li><strong>S34 (Bawa Murid Sakit Ke Hospital 2:30 Pagi vs Kelas 7:30 Pagi):</strong> Utamakan nyawa murid ikut SOP Asrama (maklum PK HEM & ibu bapa, bawa ke hospital) ➔ Atur giliran pemantauan dengan warden kedua pada jam 5:30 pagi ➔ Maklumkan Ketua Panitia & ubah suai kelas 7:30 pagi kepada teori PK / aktiviti berisiko rendah demi keselamatan murid.</li>
          <li><strong>S35 (Pelajar Makan 5 Kali Sehari & Sedentari):</strong> Lancarkan program riadah wajib <strong>"Active Dorm, Sharp Mind"</strong> ikut preskripsi F.I.T.T (4 kali seminggu, 40 minit kardio menyeronokkan) + kerjasama Jawatankuasa Dewan Selera kurangkan minuman manis + pendidikan kalori (<em>Calorie In vs Calorie Out</em>).</li>
        </ul>
      `
    },
    6: {
      title: 'Nota IV 06: Cheat Sheet Fakta Pantas MARA/MRSM 2026 & Kata Kunci Panel (Hafal 2 Minit)',
      content: `
        <h4>1. Fakta Sejarah & Punca Kuasa MARA</h4>
        <ul>
          <li><strong>Tarikh Penubuhan:</strong> <strong>1 Mac 1966</strong> (menggantikan RIDA yang ditubuhkan pada 1950).</li>
          <li><strong>Akta Parlimen:</strong> <strong>Akta Majlis Amanah Rakyat 1966 (Akta 249)</strong> — <strong>Seksyen 6(1)</strong> (Pembangunan ekonomi & sosial Bumiputera luar bandar).</li>
          <li><strong>Kementerian Naungan:</strong> Kementerian Kemajuan Desa dan Wilayah (<strong>KKDW</strong>).</li>
          <li><strong>Moto Korporat:</strong> <em>"Keusahawanan dan Pendidikan Global"</em>.</li>
          <li><strong>Nilai Teras (KITA MARA):</strong> Integriti, Amanah, Prihatin, Kualiti, Kerja Berpasukan.</li>
        </ul>

        <h4>2. Fakta Penting Maktab Rendah Sains MARA (MRSM)</h4>
        <ul>
          <li><strong>Bahagian Mengurus:</strong> Bahagian Pendidikan Menengah (<strong>BPM</strong>) MARA.</li>
          <li><strong>Jumlah MRSM Terkini:</strong> <strong>58 buah MRSM</strong> di seluruh Malaysia (MRSM pertama: <strong>MRSM Seremban, 1972</strong> — model <em>Bronx High School of Science, NY</em>).</li>
          <li><strong>Dasar Pengambilan B40:</strong> Kuota sekurang-kurangnya <strong>60% pelajar B40</strong> + bantuan penuh <strong>Program BUDI MARA</strong>.</li>
          <li><strong>Polisi Disiplin:</strong> Sifar kompromi buli — <strong>"You Touch, You Go!"</strong> (terus tamat pengajian).</li>
          <li><strong>Kejohanan Sukan Utama:</strong> <strong>KEJORA</strong> (Olahraga MRSM Se-Malaysia) & <strong>SUPER</strong> (Sukan Perdana MRSM).</li>
        </ul>

        <h4>3. Formula Sains Sukan & Pedagogi PJPK Wajib Sebut</h4>
        <ul>
          <li><strong>Formula Karvonen (Kadar Nadi Latihan):</strong> <code>KNL = [(220 - Umur - KNR) × % Intensiti] + KNR</code></li>
          <li><strong>Preskripsi Latihan F.I.T.T:</strong> <em>Frequency</em> (Kekerapan), <em>Intensity</em> (Intensiti), <em>Time</em> (Masa), <em>Type</em> (Jenis).</li>
          <li><strong>Rawatan Kecederaan & Kecemasan:</strong> <strong>P.R.I.C.E</strong> (Terseliuh/Lebam) & <strong>D.R.C.A.B</strong> (Rebah/CPR 30:2 + AED).</li>
          <li><strong>Pedagogi KBAT Sukan:</strong> <strong>TGfU</strong> (<em>Teaching Games for Understanding</em>) & <strong>PBD 3 Domain</strong> (Psikomotor, Kognitif, Afektif Standard 5.0).</li>
        </ul>
      `
    }
  };

  /**
   * Buka Modal Pratonton Nota Ringkas IV (Page Sumber)
   */
  function showDocModal(docId) {
    if (typeof document === 'undefined') return;
    const modal = document.getElementById('modal-doc-viewer');
    const titleEl = document.getElementById('modal-doc-title');
    const bodyEl = document.getElementById('modal-doc-body');
    const doc = DOC_SUMMARIES[docId];
    if (!modal || !doc) return;

    if (titleEl) titleEl.innerText = doc.title;
    if (bodyEl) bodyEl.innerHTML = doc.content;
    modal.style.display = 'flex';
  }

  /**
   * Tutup Modal Pratonton Nota Ringkas IV
   */
  function closeDocModal() {
    if (typeof document === 'undefined') return;
    const modal = document.getElementById('modal-doc-viewer');
    if (modal) modal.style.display = 'none';
  }

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

    // Modal Doc Viewer (Page Sumber Nota Ringkas IV)
    const closeDocBtn = document.getElementById('btn-close-doc-viewer');
    const modalDocViewer = document.getElementById('modal-doc-viewer');
    if (closeDocBtn) {
      closeDocBtn.addEventListener('click', closeDocModal);
    }
    if (modalDocViewer) {
      modalDocViewer.addEventListener('click', (e) => {
        if (e.target === modalDocViewer) closeDocModal();
      });
    }

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
    DOC_SUMMARIES,
    switchTab,
    showToast,
    showDocModal,
    closeDocModal,
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
