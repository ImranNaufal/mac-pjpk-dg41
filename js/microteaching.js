/**
 * ==========================================================================
 * MARA ASSESSMENT CENTRE (MAC) - PJPK DG41 PLATFORM
 * Hab Micro-Teaching PJPK MRSM: Templat DSKP, Pemasa Fasa & Rubrik MARA
 * Module: microteaching.js
 * 100% Offline-Ready | Pure Vanilla JS (ES6+) & Node.js Compatible
 * ==========================================================================
 */

(function (global) {
  'use strict';

  // ==========================================================================
  // 1. TIGA (3) TEMPLAT RASMI DSKP KSSM PJPK SIAP GUNA
  // ==========================================================================
  const DSKP_TEMPLATES = {
    futsal: {
      key: 'futsal',
      title: 'Kemahiran Futsal & Bola Sepak: Hantaran Pendek dan Kawalan Bola Menggunakan Bahagian Dalam Kaki',
      subject: 'Pendidikan Jasmani dan Pendidikan Kesihatan (PJPK)',
      form: 'Tingkatan 2 Bitara',
      duration: '12 Minit (Simulasi Micro-Teaching)',
      field: 'Kemahiran Sukan Kategori Serangan (Futsal / Bola Sepak)',
      theme: 'Kemahiran Asas Bola Sepak / Futsal (Kategori Serangan)',
      sk: [
        '1.3 Melakukan kemahiran asas bola sepak dengan lakuan yang betul.',
        '2.3 Mengaplikasikan pengetahuan konsep pergerakan dan strategi dalam permainan bola sepak.',
        '5.2 Menunjukkan keyakinan dan tanggungjawab kendiri semasa melakukan aktiviti fizikal.'
      ],
      sp: [
        '1.3.1 (Psikomotor) Melakukan hantaran pendek dan mengawal bola leret menggunakan bahagian dalam kaki dengan lakuan yang betul ke arah sasaran.',
        '2.3.1 (Kognitif) Menyatakan titik kontak (point of contact) pada kaki dan bola semasa melakukan hantaran pendek serta cara menyerap daya semasa mengawal bola.',
        '5.2.2 (Afektif) Menunjukkan semangat kerjasama dan komitmen semasa melakukan aktiviti berpasangan.'
      ],
      objectives: {
        psychomotor: 'Melakukan sekurang-kurangnya 4 daripada 5 hantaran leret dan kawalan bola menggunakan bahagian dalam kaki dengan tepat pada jarak 5 meter kepada rakan.',
        cognitive: 'Menjelaskan secara lisan dua titik kontak utama (kaki dominan menghadap sasaran, kontak tengah bola) dan konsep serapan daya semasa menerima bola.',
        affective: 'Mempamerkan interaksi positif, kerjasama berpasukan, dan memberi galakan kepada pasangan semasa latih tubi ansur maju.'
      },
      successCriteria: 'Saya dapat menolak bola menggunakan bahagian dalam kaki tepat ke kaki rakan pada jarak 5 meter dan mengawal bola leret daripada rakan dalam lingkungan satu meter dari badan.',
      teachingAids: '6 biji bola futsal bersaiz 4, 12 keping kon penanda mini (marker cones), 1 wisel rasmi, 1 jam randik, 1 papan putih mini taktikal.',
      bbm: '6 biji bola futsal bersaiz 4, 12 keping kon penanda mini (marker cones), 1 wisel rasmi, 1 jam randik, 1 papan putih mini taktikal.',
      values: 'Kerjasama, Kejujuran, Kesabaran, Disiplin Kendiri, Semangat Kesukanan.',
      emk: 'Sains & Teknologi (Hukum Gerakan Newton ke-3 - Aksi & Reaksi), Nilai Murni.',
      strategy: 'Pembelajaran Kontekstual, Komunikasi Berpasangan (Think-Pair-Share), Latih Tubi Ansur Maju.',
      phases: [
        {
          phaseName: 'Set Induksi & Pemanasan Badan',
          duration: '2 Minit',
          focus: 'Semakan kesihatan (PAR-Q) & kehadiran, perkaitan sukan hantaran tepat, dan pemanasan badan dinamik berfokus sendi buku lali (ankle).',
          activities: '1. Guru meniup wisel mengumpulkan murid dalam formasi ladam kuda (separa bulatan).\n2. Guru menyoal: "Siapakah pemain tengah dunia yang terkenal dengan ketepatan hantaran pendek?" (Contoh: Modric / De Bruyne).\n3. Mengaitkan kepentingan ketepatan hantaran dalam membina serangan bola sepak maktab.\n4. Regangan dinamik pantas: larian anak, regangan groin & hamstring.',
          safety: 'Pastikan permukaan lantai gelanggang kering, bebas halangan dan kasut bertali kemas.',
          notes: 'Pemeriksaan keselamatan dan kesediaan fizikal murid.'
        },
        {
          phaseName: 'Perkembangan 1: Demonstrasi & Latih Tubi Statik',
          duration: '3 Minit',
          focus: 'Demonstrasi guru fasa lakuan hantaran dan kawalan bahagian dalam kaki serta latih tubi berpasangan jarak 3 meter.',
          activities: '1. Demonstrasi teknik guru tanpa bola (shadow practice), kemudian dengan bola sebenar.\n2. Fasa lakuan: Kaki sokongan 10-15cm di sisi bola, ayun kaki dominan ke belakang, buka pergelangan kaki ke luar, kontak tengah bola, ikut lajak (follow-through).\n3. Latih Tubi 1 (Static Pass): Berpasangan jarak 3 meter, ulangan 10 kali setiap pasangan.\n4. Maklum balas serta-merta guru elak kesilapan lazim menendang guna hujung jari (toepoke).',
          safety: 'Jarak antara setiap pasangan sekurang-kurangnya 3 meter untuk mengelakkan perlanggaran bola.',
          notes: 'KBAT: Mengapa kaki sokongan perlu berada di sisi bola? (Imbangan & arah sasaran).'
        },
        {
          phaseName: 'Perkembangan 2 & Kemuncak: Ansur Maju Pintu Kon & Rondo',
          duration: '4.5 Minit',
          focus: 'Ansur maju hantaran bergerak menerusi pintu sasaran kon (Gate Passing) dan permainan kecil beradaptasi Rondo 3v1.',
          activities: '1. Ansur Maju 2: Murid bergerak satu langkah ke sisi sebelum menghantar bola menerusi pintu kon mini berjarak 1 meter pada jarak 5 meter.\n2. Pasangan mengawal bola sebelum melepasi zon kawalan (1 mata bagi hantaran tepat).\n3. Kemuncak / Permainan Kecil: Rondo 3 Lawan 1 (Keep-Away) dalam petak 5m x 5m.\n4. Syarat: Maksimum 2 sentuhan (kawalan pertama, hantaran kedua). Bertukar peranan sekiranya pertahanan memintas.',
          safety: 'Murid mengawal kelajuan bola agar tidak tersasar ke petak kumpulan bersebelahan.',
          notes: 'Pembezaan (Differentiation): Murid mahir lebarkan jarak 7 meter; murid sederhana kekalkan 4 meter.'
        },
        {
          phaseName: 'Penutup, Penyejukan Badan & Refleksi',
          duration: '2.5 Minit',
          focus: 'Penyejukan badan (cool-down), rumusan kognitif, semakan kriteria kejayaan dan pentaksiran PBD.',
          activities: '1. Melonggarkan otot betis dan paha secara santai dan pernafasan terkawal.\n2. Guru bersoal jawab: "Apakah yang berlaku pada bola jika kita menendang bahagian bawah atau atas bola?"\n3. Semakan kriteria kejayaan: Murid menunjukkan isyarat ibu jari jika berjaya menguasai kemahiran.\n4. Guru memuji disiplin kelas dan merekod pemerhatian pentaksiran PBD (TP3 & TP4).',
          safety: 'Semak keadaan hidrasi dan pastikan tiada murid mengalami kecederaan atau kekejangan.',
          notes: 'Pentaksiran Bilik Darjah (PBD): Senarai semak pemerhatian guru.'
        }
      ]
    },

    aerobic: {
      key: 'aerobic',
      title: 'Kapasiti Aerobik & Kadar Nadi Latihan Kaedah Karvonen',
      subject: 'Pendidikan Jasmani dan Pendidikan Kesihatan (PJPK)',
      form: 'Tingkatan 4 Al-Farabi',
      duration: '12 Minit (Simulasi Micro-Teaching)',
      field: 'Komponen Kecergasan Berlandaskan Kesihatan (Kapasiti Aerobik)',
      theme: 'Kecergasan Fizikal: Kapasiti Aerobik & Prinsip Latihan Fisiologi',
      sk: [
        '3.1 Melakukan aktiviti meningkatkan kapasiti aerobik.',
        '4.1 Mengaplikasikan pengetahuan prinsip latihan bagi meningkatkan kapasiti aerobik.',
        '5.1 Mematuhi dan mengamalkan elemen pengurusan dan keselamatan.'
      ],
      sp: [
        '3.1.1 (Psikomotor) Melakukan aktiviti larian berterusan dengan mengekalkan intensiti dalam Zon Kadar Nadi Latihan (Target Heart Rate Zone).',
        '4.1.2 (Kognitif) Menghitung Kadar Nadi Maksimum (MHR), Kadar Nadi Rizab (HRR), dan Kadar Nadi Latihan (THR) pada intensiti 65% - 85% menggunakan Kaedah Karvonen.',
        '5.1.2 (Afektif) Mengenal pasti ruang yang selamat untuk melakukan aktiviti fizikal dan bertanggungjawab ke atas keselamatan diri serta rakan.'
      ],
      objectives: {
        psychomotor: 'Mengesan denyutan nadi radial/karotid sendiri dalam tempoh 10 saat dan mendarabkan dengan 6 selepas aktiviti larian dengan teknik palpasi yang betul.',
        cognitive: 'Menghitung anggaran MHR (220 - Umur), HRR (MHR - RHR), dan THR kendiri mengikut Kaedah Karvonen pada intensiti 70% secara tepat pada kad indeks poket.',
        affective: 'Menunjukkan kesedaran tentang kepentingan mengekalkan kecergasan daya tahan kardiovaskular untuk kecemerlangan akademik dan kehidupan asrama maktab.'
      },
      successCriteria: 'Saya dapat menghitung THR intensiti 70% saya dengan betul dan mengekalkan larian dalam zon aerobik sasaran (150 - 175 bpm).',
      teachingAids: 'Kad indeks formula Karvonen poket, 16 keping kon penanda 3 warna (Merah, Kuning, Hijau), 1 jam randik digital, wisel, carta formula mudah alih.',
      bbm: 'Kad indeks formula Karvonen poket, 16 keping kon penanda 3 warna (Merah, Kuning, Hijau), 1 jam randik digital, wisel, carta formula mudah alih.',
      values: 'Tanggungjawab Kendiri, Menghargai Kesihatan Jantung, Disiplin, Kerjasama.',
      emk: 'Sains Fisiologi & Matematik (Aplikasi peratusan algebra), Nilai Murni.',
      strategy: 'Pembelajaran Masteri, Inkuiri Terbimbing, Pembelajaran Terbeza mengikut zon nadi fisiologi.',
      phases: [
        {
          phaseName: 'Set Induksi & Palpasi Nadi Rehat',
          duration: '2 Minit',
          focus: 'Pengenalan enjin badan manusia (jantung) dan teknik mengesan nadi arteri radial (pergelangan tangan) dan karotid (leher).',
          activities: '1. Guru membimbing murid meletakkan jari telunjuk dan hantu pada arteri radial tangan masing-masing.\n2. Kiraan nadi rehat (RHR) selama 10 saat x 6.\n3. Guru menyoal: "Mengapa atlet maraton mempunyai kadar nadi rehat yang lebih rendah daripada individu biasa?" (Isipadu strok jantung lebih besar / jantung efisien).',
          safety: 'Peringatan keselamatan: Jangan menekan kedua-dua arteri karotid serentak bagi mengelakkan sekatan aliran darah ke otak.',
          notes: 'Semakan kesediaan fisiologi dan hidrasi calon murid.'
        },
        {
          phaseName: 'Perkembangan 1: Teori Pantas & Pengiraan Kaedah Karvonen',
          duration: '3.5 Minit',
          focus: 'Penerangan formula Karvonen: MHR = 220 - Umur, HRR = MHR - RHR, THR = (HRR x %Intensiti) + RHR.',
          activities: '1. Guru mempamerkan carta formula Karvonen pada papan mudah alih.\n2. Murid Tingkatan 4 (umur 16) mengira pantas pada kad indeks masing-masing:\n   - MHR = 220 - 16 = 204 bpm.\n   - Andaikan RHR = 70 bpm, HRR = 204 - 70 = 134 bpm.\n   - THR 70% = (134 x 0.70) + 70 = 93.8 + 70 = 164 bpm.\n3. Guru menyemak ketepatan kiraan murid secara berpasangan.',
          safety: 'Pastikan murid duduk tegak dengan selesa semasa pengiraan.',
          notes: 'Integrasi Matematik & Sains Sukan rentas kurikulum.'
        },
        {
          phaseName: 'Perkembangan 2 & Kemuncak: Larian Fartlek & Pemetaan Zon Nadi',
          duration: '4 Minit',
          focus: 'Praktikal larian fartlek pendek (larian anak, lari pantas 70%, jalan pantas) dan pengelasan zon warna kon.',
          activities: '1. Murid melakukan pusingan gelanggang: Larian anak (1 pusingan), lari pantas striding 70% kelajuan (1 pusingan), jalan cergas (separuh pusingan).\n2. Wisel ditiup: Murid berhenti dan mengesan nadi 10 saat serta-merta (x 6).\n3. Murid bergerak ke stesen warna kon mengikut zon dicapai:\n   - Kon Hijau: Zon Aerobik Tercapai (150 - 175 bpm).\n   - Kon Kuning: Di bawah sasaran (<150 bpm).\n   - Kon Merah: Melebihi sasaran (>180 bpm).',
          safety: 'Pantau murid yang mengalami sesak nafas luar biasa atau pucat (cyanosis). Hentikan larian serta-merta jika pening.',
          notes: 'Pembelajaran Terbeza (Differentiated Learning): Menilai kesesuaian intensiti senaman kendiri.'
        },
        {
          phaseName: 'Penutup, Penyejukan Badan & Refleksi Kecergasan MRSM',
          duration: '2.5 Minit',
          focus: 'Penyejukan badan santai, pernafasan dalam (deep breathing), dan rumusan faedah kapasiti aerobik kepada fokus akademik maktab.',
          activities: '1. Senaman pernafasan dalam dan regangan statik bahagian anggota bawah.\n2. Guru merumuskan: Latihan kardiovaskular konsisten meningkatkan kecekapan bekalan oksigen ke otak, menyokong ketahanan belajar malam dan hafazan Quran pelajar MRSM.\n3. Semakan kriteria kejayaan dan pengemasan alatan kon.',
          safety: 'Pastikan kadar nadi kembali menghampiri kadar nadi rehat sebelum bersurai.',
          notes: 'Penerapan amalan gaya hidup sihat berterusan di asrama maktab.'
        }
      ]
    },

    firstaid: {
      key: 'firstaid',
      title: 'Pengurusan Kecederaan Sukan Akut Kaedah P.R.I.C.E vs Pantang Larang H.A.R.M',
      subject: 'Pendidikan Kesihatan (Komponen PEERS - Pertolongan Cemas)',
      form: 'Tingkatan 1 Pintar',
      duration: '12 Minit (Simulasi Micro-Teaching)',
      field: 'Pertolongan Cemas (Pengurusan Kecederaan Akut Otot & Sendi)',
      theme: 'Pendidikan Kesihatan Reproduktif & Sosial: Pertolongan Cemas',
      sk: [
        '9.1 Pengetahuan asas pertolongan cemas dan kemahiran bertindak mengikut situasi (Kecederaan Terseliuh & Regangan Otot).'
      ],
      sp: [
        '9.1.1 (Kognitif) Menyatakan maksud kecederaan terseliuh (sprain) dan kejang/regangan otot (strain).',
        '9.1.2 (Psikomotor) Mengaplikasikan prinsip dan prosedur P.R.I.C.E dalam pengurusan kecederaan terseliuh dan regangan.',
        '9.1.3 (Afektif) Menunjukkan sikap tenang, empati, dan keyakinan dalam memberikan bantuan kecemasan awal kepada rakan.'
      ],
      objectives: {
        psychomotor: 'Melaksanakan prosedur balutan ais dan balutan mampatan (crepe bandage) kaedah P.R.I.C.E pada buku lali pasangan secara kemas dan betul.',
        cognitive: 'Menghuraikan fungsi fisiologi setiap langkah P.R.I.C.E (Protect, Rest, Ice, Compression, Elevation) dan menyenaraikan 4 pantang larang kaedah H.A.R.M (Heat, Alcohol, Running, Massage).',
        affective: 'Menunjukkan sifat prihatin, tenang, dan empati ketika merawat rakan yang mengalami kecederaan sukan di maktab.'
      },
      successCriteria: 'Saya dapat melakukan balutan mampatan angka 8 dengan ketegangan sesuai (capillary refill < 2 saat) dan menerangkan mengapa urutan dilarang sama sekali dalam 72 jam pertama kecederaan.',
      teachingAids: '10 pek ais gel berbalut tuala nipis, 10 gulung crepe bandage 7.5cm, 5 bantal sokongan kaki, kad situasi kuiz PRICE vs HARM.',
      bbm: '10 pek ais gel berbalut tuala nipis, 10 gulung crepe bandage 7.5cm, 5 bantal sokongan kaki, kad situasi kuiz PRICE vs HARM.',
      values: 'Kasih Sayang, Tanggungjawab Sivik, Empati, Ketenangan di bawah Tekanan.',
      emk: 'Sains Kesihatan & Biologi (Fisiologi hemostasis, vasokonstriksi & edema), Nilai Murni.',
      strategy: 'Simulasi Amali Klinikal Berpasangan (Doktor & Pesakit), Inkuiri Terbimbing, Gamifikasi Kad Situasi.',
      phases: [
        {
          phaseName: 'Set Induksi: Senario Kecemasan Sukan MRSM',
          duration: '2 Minit',
          focus: 'Senario kecemasan Kejohanan Sukan MRSM (KSM) dan perbezaan asas Sprain (ligamen) vs Strain (otot/tendon).',
          activities: '1. Guru mengemukakan situasi: "Bayangkan rakan anda mendarat secara salah dalam kejohanan bola jaring maktab dan buku lalinya bengkak serta-merta. Apakah tindakan pertama anda?"\n2. Mengumpulkan jawapan murid (meletakkan minyak panas, mengurut dsb.).\n3. Guru membetulkan salah faham umum dan memperkenalkan prinsip saintifik P.R.I.C.E.',
          safety: 'Memupuk kesedaran bahawa rawatan yang salah boleh memburukkan kecederaan murid.',
          notes: 'Membetulkan mitos urutan tradisional pada fasa akut kecederaan.'
        },
        {
          phaseName: 'Perkembangan 1: Demonstrasi Teknik Balutan P.R.I.C.E',
          duration: '3.5 Minit',
          focus: 'Demonstrasi guru langkah Protect, Rest, Ice (vasokonstriksi), Compression (balutan angka 8), dan Elevation (melebihi paras jantung).',
          activities: '1. Guru mendemonstrasikan balutan pada murid sukarelawan:\n   - Protect & Rest: Hentikan aktiviti serta-merta.\n   - Ice: Letak pek ais berbalut tuala selama 15-20 minit (elak sentuhan terus ais ke kulit bagi mencegah frostbite).\n   - Compression: Balutan angka 8 dari arah distal ke proksimal menggunakan crepe bandage.\n   - Ujian peredaran: Picit kuku jari kaki (capillary refill test < 2 saat) untuk sahkan balutan tidak terlalu ketat.\n   - Elevation: Letakkan bantal sokongan melebihi paras jantung untuk kurangkan bengkak.',
          safety: 'Pastikan balutan tidak terlalu ketat sehingga menyekat aliran darah arteri (kebas atau pucat).',
          notes: 'Penerangan fisiologi serapan edema dan pengecilan salur darah mikro.'
        },
        {
          phaseName: 'Perkembangan 2 & Kemuncak: Latih Tubi Pasangan & Kuiz PRICE vs HARM',
          duration: '4 Minit',
          focus: 'Simulasi amali berpasangan (peranan Doktor & Pesakit) dan cabaran respon pantas pantang larang H.A.R.M.',
          activities: '1. Murid berpasangan mengaplikasikan balutan mampatan dan elevasi kaki pada rakan masing-masing.\n2. Guru bergerak memeriksa kekemasan dan ketegangan balutan.\n3. Kemuncak: Kuiz Respons Kad Situasi (Hijau = Tindakan PRICE betul / Merah = Bahaya HARM):\n   - Situasi A: Sapu minyak panas pada bengkak baharu (MERAH - Heat!).\n   - Situasi B: Urut sendi terseliuh (MERAH - Massage!).\n   - Situasi C: Tuam pek ais 15 minit (HIJAU - Ice!).',
          safety: 'Murid mengendalikan kaki rakan dengan cermat dan sopan tanpa sentuhan kasar.',
          notes: 'Menanam kefahaman mendalam tentang 4 pantang larang H.A.R.M dalam 72 jam pertama.'
        },
        {
          phaseName: 'Penutup, Refleksi & Komitmen Pertolongan Cemas',
          duration: '2.5 Minit',
          focus: 'Rumusan integriti rawatan awal guru MRSM, lafaz akronim bersama, dan pengemasan peralatan perubatan.',
          activities: '1. Guru menekankan: "Tindakan pertolongan cemas tepat dalam tempoh 10 minit pertama menentukan tempoh pemulihan atlet maktab sama ada seminggu atau berbulan-bulan."\n2. Murid melafazkan bersama-sama prinsip P.R.I.C.E dan pantang larang H.A.R.M.\n3. Semakan kriteria kejayaan dan pengemasan pek ais serta pembalut.',
          safety: 'Kemaskan alatan balutan dengan bersih dan kemas.',
          notes: 'Penerapan nilai kasih sayang, empati dan tanggungjawab sivik.'
        }
      ]
    }
  };

  // ==========================================================================
  // 2. DATA RUBRIK PENILAIAN PANEL MAC MARA (7 KRITERIA, WAJARAN 100%)
  // ==========================================================================
  const RUBRIC_CRITERIA = [
    {
      id: 'rph_quality',
      key: 'rph_quality',
      label: '1. Kualiti RPH & Persediaan Dokumen',
      weight: 10,
      description: 'Format standard KSSM/MRSM, objektif eksplisit (SMART 3 domain), kriteria kejayaan terukur, pemetaan masa dan alatan.',
      descriptors: {
        5: 'RPH amat lengkap mengikut piawaian standard KSSM/MRSM, objektif eksplisit (SMART 3 domain: psikomotor, kognitif, afektif), kriteria kejayaan terukur, pemetaan masa realistik, dan susunan alatan dirancang rapi.',
        4: 'RPH lengkap mengikut format standard KSSM, objektif jelas merangkumi domain utama, kriteria kejayaan dinyatakan, dan alatan dirancang dengan baik.',
        3: 'RPH memenuhi sebahagian format asas, objektif agak umum, perancangan masa mencukupi tetapi perincian aktiviti PdPc kurang spesifik.',
        2: 'RPH tidak tersusun kemas, objektif kabur atau tidak terukur, tiada kriteria kejayaan yang jelas, dan alatan tidak dirancang teliti.',
        1: 'RPH tidak menepati format piawai KSSM/MRSM, tiada objektif 3 domain yang sah, atau dokumen persediaan tidak disediakan dengan rapi.'
      }
    },
    {
      id: 'induction',
      key: 'induction',
      label: '2. Daya Tarikan Set Induksi',
      weight: 15,
      description: 'Permulaan bertenaga, menarik perhatian dalam 90-120 saat, semakan kesihatan (PAR-Q), inkuiri/isu semasa dan kaitan objektif.',
      descriptors: {
        5: 'Permulaan amat bertenaga, memukau perhatian panel/murid dalam tempoh 90 saat, menyemak kesediaan & keselamatan murid (PAR-Q), mencetuskan inkuiri sukan yang mencabar, dan mengaitkan objektif secara lancar.',
        4: 'Permulaan ceria dan yakin, menarik minat dalam tempoh 2 minit, menyemak kesihatan asas murid, dan mengaitkan topik pembelajaran dengan jelas.',
        3: 'Permulaan memuaskan tetapi mengambil masa agak panjang (>2.5 minit), semakan kesihatan ringkas, dan perkaitan topik bersifat langsung tanpa unsur inkuiri.',
        2: 'Permulaan mendatar, pasif, mengambil masa terlalu lama, kurang interaksi dengan murid, atau terlupa menyemak kesihatan asas.',
        1: 'Tiada set induksi yang jelas, terus memulakan pengajaran tanpa menarik minat, atau mengabaikan semakan keselamatan murid.'
      }
    },
    {
      id: 'content_mastery',
      key: 'content_mastery',
      label: '3. Penguasaan Isi Kandungan & Demonstrasi',
      weight: 25,
      description: 'Konsep biomekanik/fisiologi sukan tepat, demonstrasi 3D kemas, ansur maju sistematik, dan pembetulan kesilapan serta-merta.',
      descriptors: {
        5: 'Penguasaan konsep biomekanik/fisiologi sukan yang amat mendalam, demonstrasi teknik sempurna (flawless 3D technique), penerangan fasa pergerakan tepat, ansur maju sistematik, dan pembetulan kesilapan teknik serta-merta.',
        4: 'Penguasaan isi kandungan baik, demonstrasi kemahiran kemas dan jelas, ansur maju teratur, serta memberi maklum balas pembetulan kepada murid.',
        3: 'Penguasaan konsep asas memuaskan, demonstrasi dilakukan tetapi kurang penekanan fasa lakuan, ansur maju terhad, pembetulan kesilapan lambat.',
        2: 'Kurang yakin dalam demonstrasi kemahiran, terdapat kekeliruan konsep sains sukan, ansur maju tidak teratur, dan mengabaikan teknik salah murid.',
        1: 'Penguasaan konsep lemah, demonstrasi salah atau tiada demonstrasi praktikal, tiada ansur maju PdPc.'
      }
    },
    {
      id: 'communication',
      key: 'communication',
      label: '4. Komunikasi Suara Guru Padang & Bahasa Badan',
      weight: 15,
      description: 'Vokal padang lantang & berwibawa (commanding projection), disiplin wisel, kontak mata, bahasa badan tangkas, bahasa Melayu baku.',
      descriptors: {
        5: 'Vokal padang amat lantang, jelas dan berwibawa (commanding projection), penggunaan wisel berdisiplin tinggi, kontak mata menyeluruh, bahasa badan tangkas, bahasa Melayu baku yang fasih dan santun.',
        4: 'Suara jelas dan bertenaga, nada bersesuaian dengan suasana padang/gelanggang, penggunaan wisel berkesan, bahasa badan positif dan kemas.',
        3: 'Suara sederhana jelas, kadang-kala tenggelam, kontak mata terhad kepada sebahagian murid, pergerakan agak statik di hadapan kelas.',
        2: 'Suara perlahan atau monoton, kurang keyakinan vokal guru sukan, wisel kurang berdisiplin, bahasa rojak atau pergerakan kaku.',
        1: 'Suara tidak dapat didengar dengan jelas, pasif berdiri setempat, tiada unjuran suara guru PJPK, komunikasi tidak berkesan.'
      }
    },
    {
      id: 'class_management',
      key: 'class_management',
      label: '5. Pengurusan Kelas, Alatan & Keselamatan (Duty of Care)',
      weight: 15,
      description: 'Susun atur gelanggang ergonomik, transisi pergerakan kemas, kawalan masa tepat (10-12 minit), sentiasa peka keselamatan.',
      descriptors: {
        5: 'Susun atur gelanggang/kon ergonomik dan selamat, arahan transisi pergerakan murid amat kemas, kawalan masa tepat (10-12 minit), sentiasa peka terhadap bahaya padang (duty of care).',
        4: 'Pengurusan alatan teratur, kawalan pergerakan murid baik, fasa masa dipatuhi, langkah keselamatan diamalkan sepanjang sesi.',
        3: 'Pengurusan kelas memuaskan, murid agak lambat bergerak antara aktiviti, susunan kon mencukupi, masa berlarutan sedikit.',
        2: 'Alatan berselerak atau menghalang laluan larian, murid terbiar menunggu giliran terlalu lama, masa melebihi had yang ditetapkan.',
        1: 'Kelas tidak terkawal, pengabaian elemen keselamatan yang boleh mendatangkan bahaya fizikal murid, alatan membahayakan.'
      }
    },
    {
      id: 'pak21_kbat',
      key: 'pak21_kbat',
      label: '6. Pedagogi Abad Ke-21 (PAK-21) & KBAT',
      weight: 10,
      description: 'Pembelajaran berpusatkan murid, tugasan terbeza (differentiation), soalan KBAT mencabar pemikiran analisis, bahan visual.',
      descriptors: {
        5: 'Pembelajaran berpusatkan murid secara maksimum, tugasan terbeza mengikut keupayaan murid (differentiated learning), soalan KBAT mencabar pemikiran analisis, penggunaan bahan visual/taktikal inovatif.',
        4: 'Aktiviti aktif berpusatkan murid, terdapat soalan menguji pemikiran kognitif, menggalakkan kerjasama berpasangan (Think-Pair-Share).',
        3: 'Terdapat elemen interaksi murid tetapi lebih berpusatkan arahan guru, soalan KBAT bersifat hafalan fakta mudah.',
        2: 'Pengajaran satu hala (syarahan tanpa penglibatan aktif murid), tiada soalan mencabar pemikiran, tiada penyesuaian untuk pelbagai aras murid.',
        1: 'Pasif sepenuhnya, tiada ciri pedagogi moden PAK-21, pengajaran tradisional yang membosankan.'
      }
    },
    {
      id: 'closing_reflection',
      key: 'closing_reflection',
      label: '7. Penutup, Refleksi & Penilaian PBD',
      weight: 10,
      description: 'Penutup berstruktur, penyejukan badan teratur, semakan kriteria kejayaan, rumusan kognitif, nilai murni MRSM, kemas alatan.',
      descriptors: {
        5: 'Penutup berstruktur kemas dengan penyejukan badan teratur, semakan kriteria kejayaan bersama murid, rumusan kognitif mantap, penegasan nilai murni kehidupan MRSM, alatan dikemas tertib.',
        4: 'Penutup lengkap dengan regangan santai, bersoal jawab merumus isi pelajaran, mengaitkan nilai murni dan mengemas alatan PdPc.',
        3: 'Penutup ringkas, penyejukan badan tergesa-gesa kerana mengejar masa, rumusan dibuat secara umum.',
        2: 'Menghentikan pengajaran secara mendadak, melangkau fasa penyejukan badan atau refleksi, alatan ditinggalkan tanpa dikemas.',
        1: 'Tiada penutup kerana masa terputus sebelum fasa berakhir, tiada rumusan atau pentaksiran PBD murid.'
      }
    }
  ];

  // ==========================================================================
  // 3. PEMASA FASA SIMULASI MICRO-TEACHING (10, 12, 15 MINIT)
  // ==========================================================================
  class MicroTeachingTimer {
    constructor() {
      this.durationMinutes = 12;
      this.elapsedSeconds = 0;
      this.timerInterval = null;
      this.running = false;
      this.paused = false;
      this.soundEnabled = true;
      this.audioCtx = null;
      this.onTick = null;
      this.onPhaseChange = null;
      this.onComplete = null;
      this.currentPhaseIndex = 1;
    }

    /**
     * Mengira maklumat fasa mengikut saat berlalu dan jumlah minit
     */
    getPhaseInfo(elapsedSeconds, totalDurationMinutes = 12) {
      const totalSec = totalDurationMinutes * 60;
      const elapsed = Math.max(0, Math.min(elapsedSeconds, totalSec));
      const remainingTotal = totalSec - elapsed;

      let p1End, p2End;

      if (totalDurationMinutes === 10) {
        p1End = 120; // 0 - 2 minit (Induksi)
        p2End = 480; // 2 - 8 minit (Perkembangan)
      } else if (totalDurationMinutes === 15) {
        p1End = 180; // 0 - 3 minit (Induksi)
        p2End = 660; // 3 - 11 minit (Perkembangan)
      } else {
        // 12 Minit (Lalai)
        p1End = 150; // 0 - 2.5 minit
        p2End = 600; // 2.5 - 10 minit
      }

      let phaseIndex = 1;
      let phaseName = 'Fasa 1: Set Induksi & Pemanasan Badan';
      let phaseTimeRange = `0:00 - ${Math.floor(p1End / 60)}:${String(p1End % 60).padStart(2, '0')}`;
      let guidance = 'Pemeriksaan kesihatan murid (PAR-Q), semakan kasut bertali, tarikan minat dalam 90 saat, pemanasan badan dinamik, dan penerangan kriteria kejayaan.';
      let phaseEndSec = p1End;
      let phaseStartSec = 0;

      if (elapsed > p2End) {
        phaseIndex = 3;
        phaseName = 'Fasa 3: Penutup, Penyejukan Badan & Refleksi';
        phaseTimeRange = `${Math.floor(p2End / 60)}:${String(p2End % 60).padStart(2, '0')} - ${totalDurationMinutes}:00`;
        guidance = 'Aktiviti penyejukan badan santai, soal jawab KBAT kognitif, semakan kriteria kejayaan (ibu jari), penegasan nilai murni kehidupan MRSM, kemas alatan.';
        phaseStartSec = p2End;
        phaseEndSec = totalSec;
      } else if (elapsed > p1End) {
        phaseIndex = 2;
        phaseName = 'Fasa 2: Perkembangan & Ansur Maju Kemahiran';
        phaseTimeRange = `${Math.floor(p1End / 60)}:${String(p1End % 60).padStart(2, '0')} - ${Math.floor(p2End / 60)}:${String(p2End % 60).padStart(2, '0')}`;
        guidance = 'Demonstrasi teknik guru 3D yang sempurna, latih tubi ansur maju statik ke dinamik, maklum balas pembetulan kesilapan serta-merta, aplikasi permainan kecil.';
        phaseStartSec = p1End;
        phaseEndSec = p2End;
      }

      const timeRemainingInPhase = Math.max(0, phaseEndSec - elapsed);
      const isPhaseWarning = (timeRemainingInPhase <= 30 && timeRemainingInPhase > 0) || (remainingTotal <= 30 && remainingTotal > 0);
      let warningLevel = 'none';
      if (remainingTotal <= 15) {
        warningLevel = 'final-warning';
      } else if (isPhaseWarning) {
        warningLevel = 'phase-ending';
      }

      return {
        phaseIndex,
        phaseName,
        phaseTimeRange,
        guidance,
        phaseStartSec,
        phaseEndSec,
        timeRemainingInPhase,
        timeRemainingTotal: remainingTotal,
        isPhaseWarning,
        warningLevel,
        progressPercent: Math.min(100, (elapsed / totalSec) * 100)
      };
    }

    /**
     * Memainkan bunyi bip lembut menggunakan Web Audio API (Offline Synthesizer)
     */
    playBeep(type = 'tick') {
      if (!this.soundEnabled) return;
      if (typeof window === 'undefined') return;

      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;

        if (!this.audioCtx) {
          this.audioCtx = new AudioContextClass();
        }

        if (this.audioCtx.state === 'suspended') {
          this.audioCtx.resume();
        }

        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        const now = this.audioCtx.currentTime;

        if (type === 'phase') {
          // Double beep nada tinggi untuk perubahan fasa
          osc.type = 'sine';
          osc.frequency.setValueAtTime(659.25, now); // E5
          osc.frequency.setValueAtTime(880, now + 0.15); // A5
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
          osc.start(now);
          osc.stop(now + 0.35);
        } else if (type === 'complete') {
          // Triad nada penamat
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(523.25, now); // C5
          osc.frequency.setValueAtTime(659.25, now + 0.2); // E5
          osc.frequency.setValueAtTime(783.99, now + 0.4); // G5
          gain.gain.setValueAtTime(0.25, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
          osc.start(now);
          osc.stop(now + 0.8);
        } else {
          // Bip lembut
          osc.type = 'sine';
          osc.frequency.setValueAtTime(440, now);
          gain.gain.setValueAtTime(0.1, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
          osc.start(now);
          osc.stop(now + 0.1);
        }
      } catch (e) {
        // Abaikan jika audio dihalang oleh dasar autoplay pelayar
      }
    }

    start(durationMinutes = 12, callbacks = {}) {
      this.durationMinutes = durationMinutes;
      this.onTick = callbacks.onTick || null;
      this.onPhaseChange = callbacks.onPhaseChange || null;
      this.onComplete = callbacks.onComplete || null;

      this.running = true;
      this.paused = false;
      this.currentPhaseIndex = 1;

      if (this.timerInterval) {
        clearInterval(this.timerInterval);
      }

      const totalSec = this.durationMinutes * 60;

      // Pencetus awal
      if (this.onTick) {
        this.onTick(this.getPhaseInfo(this.elapsedSeconds, this.durationMinutes));
      }

      this.timerInterval = setInterval(() => {
        if (!this.running || this.paused) return;

        this.elapsedSeconds++;
        const currentInfo = this.getPhaseInfo(this.elapsedSeconds, this.durationMinutes);

        // Semak perubahan fasa
        if (currentInfo.phaseIndex !== this.currentPhaseIndex) {
          this.currentPhaseIndex = currentInfo.phaseIndex;
          this.playBeep('phase');
          if (this.onPhaseChange) {
            this.onPhaseChange(currentInfo);
          }
        }

        if (this.onTick) {
          this.onTick(currentInfo);
        }

        // Semak tamat masa
        if (this.elapsedSeconds >= totalSec) {
          this.stop();
          this.playBeep('complete');
          if (this.onComplete) {
            this.onComplete(currentInfo);
          }
        }
      }, 1000);

      return this;
    }

    pause() {
      if (this.running) {
        this.paused = true;
      }
      return this;
    }

    resume() {
      if (this.running && this.paused) {
        this.paused = false;
      }
      return this;
    }

    stop() {
      this.running = false;
      this.paused = false;
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
      return this;
    }

    reset() {
      this.stop();
      this.elapsedSeconds = 0;
      this.currentPhaseIndex = 1;
      if (this.onTick) {
        this.onTick(this.getPhaseInfo(0, this.durationMinutes));
      }
      return this;
    }

    isRunning() {
      return this.running && !this.paused;
    }

    isPaused() {
      return this.running && this.paused;
    }

    getDurationMinutes() {
      return this.durationMinutes;
    }

    getElapsedSeconds() {
      return this.elapsedSeconds;
    }

    getRemainingSeconds() {
      return Math.max(0, this.durationMinutes * 60 - this.elapsedSeconds);
    }
  }

  // ==========================================================================
  // 4. KELAS UTAMA: MICRO-TEACHING HUB (FACADE & BUSINESS LOGIC)
  // ==========================================================================
  class MicroTeachingHub {
    constructor() {
      this.templates = DSKP_TEMPLATES;
      this.rubricCriteria = RUBRIC_CRITERIA;
      this.timer = new MicroTeachingTimer();
      this.currentRPH = this.loadTemplate('futsal');
      this.lastEvaluation = null;
    }

    /**
     * Memuatkan templat DSKP mengikut kunci
     */
    loadTemplate(templateKey) {
      if (!templateKey || !this.templates[templateKey]) {
        throw new Error(`Templat DSKP tidak ditemui bagi kunci: '${templateKey}'. Pilihan yang sah: futsal, aerobic, firstaid.`);
      }
      // Klon objek untuk mengelakkan mutasi rujukan
      const raw = this.templates[templateKey];
      this.currentRPH = JSON.parse(JSON.stringify(raw));
      return this.currentRPH;
    }

    /**
     * Mendapatkan semua templat DSKP yang tersedia
     */
    getTemplates() {
      return this.templates;
    }

    /**
     * Mengesahkan data RPH
     */
    validateRPH(data) {
      const errors = [];
      if (!data) {
        return { valid: false, errors: ['Tiada data RPH dibekalkan.'] };
      }

      if (!data.subject || typeof data.subject !== 'string' || data.subject.trim() === '') {
        errors.push('Mata pelajaran mesti diisi.');
      }
      if (!data.topic && !data.title) {
        errors.push('Tajuk atau topik pembelajaran mesti diisi.');
      }
      if (!data.form || typeof data.form !== 'string' || data.form.trim() === '') {
        errors.push('Tingkatan/kelas sasaran mesti diisi.');
      }
      if (!data.sk || (Array.isArray(data.sk) && data.sk.length === 0)) {
        errors.push('Standard Kandungan (SK) mesti diisi.');
      }
      if (!data.sp || (Array.isArray(data.sp) && data.sp.length === 0)) {
        errors.push('Standard Pembelajaran (SP) mesti diisi.');
      }
      if (!data.objectives) {
        errors.push('Objektif pembelajaran mesti diisi.');
      } else {
        if (!data.objectives.psychomotor || data.objectives.psychomotor.trim() === '') {
          errors.push('Objektif psikomotor mesti diisi.');
        }
        if (!data.objectives.cognitive || data.objectives.cognitive.trim() === '') {
          errors.push('Objektif kognitif mesti diisi.');
        }
        if (!data.objectives.affective || data.objectives.affective.trim() === '') {
          errors.push('Objektif afektif mesti diisi.');
        }
      }

      return {
        valid: errors.length === 0,
        errors
      };
    }

    /**
     * Mengesahkan dan menjana struktur RPH standard MRSM lengkap
     */
    generateRPH(customData) {
      const val = this.validateRPH(customData);
      if (!val.valid) {
        throw new Error(`Data RPH kustom tidak sah: ${val.errors.join('; ')}`);
      }

      const generatedAt = new Date().toISOString();
      const formattedDate = new Date().toLocaleDateString('ms-MY', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      const title = customData.topic || customData.title;
      const topic = title;

      // Fasa piawai jika tiada
      const phases = Array.isArray(customData.phases) && customData.phases.length > 0
        ? customData.phases
        : [
            {
              phaseName: 'Set Induksi & Pemanasan Badan',
              duration: '2 Minit',
              focus: 'Semakan kesihatan, persediaan murid & aktiviti pemanasan badan dinamik.',
              activities: 'Pemeriksaan fizikal murid, perkaitan sukan, regangan dinamik pantas.',
              safety: 'Pastikan kawasan selamat dan pakaian sukan kemas.',
              notes: 'Pemerhatian awal kesediaan murid.'
            },
            {
              phaseName: 'Perkembangan: Demonstrasi & Latih Tubi Ansur Maju',
              duration: '7 Minit',
              focus: 'Demonstrasi guru, latih tubi ansur maju kemahiran & pembetulan kesilapan serta-merta.',
              activities: 'Demonstrasi teknik langkah demi langkah, latih tubi berpasangan/kumpulan, maklum balas guru.',
              safety: 'Jarakkan murid untuk mengelakkan perlanggaran.',
              notes: 'Penerapan konsep biomekanik dan koordinasi.'
            },
            {
              phaseName: 'Penutup, Penyejukan Badan & Refleksi',
              duration: '3 Minit',
              focus: 'Penyejukan badan, soal jawab KBAT & penilaian kriteria kejayaan.',
              activities: 'Aktiviti melonggarkan otot, rumusan kognitif, semakan kriteria kejayaan bersama murid.',
              safety: 'Semak tanda-tanda keletihan atau kepucatan murid.',
              notes: 'Pentaksiran Bilik Darjah (PBD).'
            }
          ];

      const rph = {
        key: customData.key || 'custom_' + Date.now(),
        candidateName: customData.candidateName || 'Calon Pegawai DG41 PJPK',
        mrsmBranch: customData.mrsmBranch || 'MRSM Malaysia',
        subject: customData.subject,
        form: customData.form,
        duration: customData.duration || '12–15 Minit (Simulasi Micro-Teaching)',
        topic,
        title,
        field: customData.field || customData.theme || 'Kemahiran PJPK KSSM',
        theme: customData.theme || customData.field || 'Kemahiran PJPK KSSM',
        sk: Array.isArray(customData.sk) ? customData.sk : [customData.sk],
        sp: Array.isArray(customData.sp) ? customData.sp : [customData.sp],
        objectives: {
          psychomotor: customData.objectives.psychomotor,
          cognitive: customData.objectives.cognitive,
          affective: customData.objectives.affective
        },
        successCriteria: customData.successCriteria || 'Saya dapat melaksanakan lakuan kemahiran dengan betul dan menjawab soalan refleksi.',
        teachingAids: customData.teachingAids || customData.bbm || 'Alatan sukan bersesuaian, wisel, jam randik, kon penanda.',
        bbm: customData.teachingAids || customData.bbm || 'Alatan sukan bersesuaian, wisel, jam randik, kon penanda.',
        values: customData.values || 'Kerjasama, Kejujuran, Disiplin, Tanggungjawab Kendiri.',
        emk: customData.emk || 'Nilai Murni, Sains & Teknologi.',
        strategy: customData.strategy || 'Pembelajaran Berpusatkan Murid, Latih Tubi Ansur Maju, PAK-21.',
        phases,
        generatedAt,
        formattedDate
      };

      this.currentRPH = rph;
      return rph;
    }

    /**
     * Menukar RPH kepada format teks salin-pantas (Clipboard-ready text)
     */
    exportRPHText(rph = this.currentRPH) {
      if (!rph) return '';

      const skList = Array.isArray(rph.sk) ? rph.sk.join('\n  * ') : rph.sk;
      const spList = Array.isArray(rph.sp) ? rph.sp.join('\n  * ') : rph.sp;

      let phasesText = '';
      if (Array.isArray(rph.phases)) {
        phasesText = rph.phases.map((p, idx) => {
          return `\n${idx + 1}. [${p.phaseName || p.name}] (${p.duration})\n` +
                 `   Fokus: ${p.focus || '-'}\n` +
                 `   Aktiviti:\n   ${(p.activities || '').split('\n').join('\n   ')}\n` +
                 `   Keselamatan / Catatan: ${p.safety || p.notes || '-'}`;
        }).join('\n');
      }

      return `========================================================================
RANCANGAN PENGAJARAN HARIAN (RPH) MICRO-TEACHING MRSM
PUSAT PENILAIAN MARA (MAC) - SKIM DG41 PJPK
========================================================================
Nama Calon: ${rph.candidateName || 'Calon DG41 PJPK'}
Institusi : ${rph.mrsmBranch || 'MRSM (Sistem SPMRSM MARA)'}
Mata Pelajaran: ${rph.subject}
Tingkatan : ${rph.form}
Tempoh    : ${rph.duration}
Tajuk / Fokus: ${rph.topic || rph.title}
Bidang / Tema: ${rph.field || rph.theme || '-'}

------------------------------------------------------------------------
STANDARD KURIKULUM (DSKP KSSM)
------------------------------------------------------------------------
Standard Kandungan (SK):
  * ${skList}

Standard Pembelajaran (SP):
  * ${spList}

------------------------------------------------------------------------
OBJEKTIF PEMBELAJARAN (3 DOMAIN)
------------------------------------------------------------------------
Pada akhir sesi PdPc, murid dapat:
1. Psikomotor: ${rph.objectives?.psychomotor || '-'}
2. Kognitif  : ${rph.objectives?.cognitive || '-'}
3. Afektif   : ${rph.objectives?.affective || '-'}

Kriteria Kejayaan (Success Criteria):
"${rph.successCriteria || '-'}"

Alat Bantu Mengajar (BBM): ${rph.teachingAids || rph.bbm || '-'}
Elemen Merentas Kurikulum (EMK): ${rph.emk || '-'}
Nilai Murni: ${rph.values || '-'}

------------------------------------------------------------------------
PERINCIAN LANGKAH & AKTIVITI PdPc BERFASA
------------------------------------------------------------------------${phasesText}

========================================================================
Tarikh Cetakan / Penjanaan: ${rph.formattedDate || new Date().toLocaleDateString('ms-MY')}
MARA Assessment Centre (MAC) Official Preparation Hub
========================================================================`;
    }

    /**
     * Menjana dokumen HTML untuk paparan pratonton dan cetakan A4
     */
    exportRPHHtml(rph = this.currentRPH) {
      if (!rph) return '';

      const skItems = Array.isArray(rph.sk)
        ? rph.sk.map(s => `<li>${s}</li>`).join('')
        : `<li>${rph.sk}</li>`;

      const spItems = Array.isArray(rph.sp)
        ? rph.sp.map(s => `<li>${s}</li>`).join('')
        : `<li>${rph.sp}</li>`;

      let phaseRows = '';
      if (Array.isArray(rph.phases)) {
        phaseRows = rph.phases.map(p => `
          <tr>
            <td class="rph-phase-col">
              <strong>${p.phaseName || p.name}</strong><br>
              <span class="badge badge-sm badge-outline">${p.duration}</span>
            </td>
            <td class="rph-focus-col">${p.focus || '-'}</td>
            <td class="rph-act-col">${(p.activities || '').replace(/\n/g, '<br>')}</td>
            <td class="rph-safe-col">
              <div class="rph-safe-tag"><strong>Keselamatan:</strong> ${p.safety || '-'}</div>
              ${p.notes ? `<div class="rph-notes-tag mt-1"><strong>Catatan/EMK:</strong> ${p.notes}</div>` : ''}
            </td>
          </tr>
        `).join('');
      }

      return `
        <div class="rph-container rph-print-document">
          <div class="rph-doc-header">
            <div class="rph-header-top">
              <span class="rph-badge">MARA ASSESSMENT CENTRE (MAC)</span>
              <span class="rph-meta-date">${rph.formattedDate || ''}</span>
            </div>
            <h3 class="rph-doc-title">RANCANGAN PENGAJARAN HARIAN (RPH) MICRO-TEACHING</h3>
            <p class="rph-doc-sub">Skim Pegawai Perkhidmatan Pendidikan DG41 &bull; Pendidikan Jasmani &amp; Kesihatan (PJPK) &bull; Bahagian Pendidikan Menengah MARA</p>
          </div>

          <div class="rph-meta-table-wrap">
            <table class="rph-meta-table">
              <tbody>
                <tr>
                  <th>Nama Calon</th>
                  <td>${rph.candidateName || 'Calon DG41 PJPK'}</td>
                  <th>Maktab Cadangan</th>
                  <td>${rph.mrsmBranch || 'MRSM (Sistem SPMRSM)'}</td>
                </tr>
                <tr>
                  <th>Mata Pelajaran</th>
                  <td><strong>${rph.subject}</strong></td>
                  <th>Tingkatan</th>
                  <td>${rph.form}</td>
                </tr>
                <tr>
                  <th>Tajuk / Fokus</th>
                  <td colspan="3"><strong class="text-maroon">${rph.topic || rph.title}</strong></td>
                </tr>
                <tr>
                  <th>Bidang / Tema</th>
                  <td>${rph.field || rph.theme || '-'}</td>
                  <th>Masa Sesi</th>
                  <td><span class="badge badge-gold">${rph.duration}</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="rph-section">
            <h4 class="rph-section-title">1. Standard Kurikulum (DSKP KSSM KPM)</h4>
            <div class="rph-two-col">
              <div class="rph-box">
                <div class="rph-box-title">Standard Kandungan (SK)</div>
                <ul class="rph-list">${skItems}</ul>
              </div>
              <div class="rph-box">
                <div class="rph-box-title">Standard Pembelajaran (SP)</div>
                <ul class="rph-list">${spItems}</ul>
              </div>
            </div>
          </div>

          <div class="rph-section">
            <h4 class="rph-section-title">2. Objektif Pembelajaran &amp; Kriteria Kejayaan</h4>
            <div class="rph-box bg-subtle">
              <p class="rph-lead-text">Pada akhir sesi pengajaran dan pemudahcaraan (PdPc), murid dapat:</p>
              <ol class="rph-obj-list">
                <li><strong>Psikomotor:</strong> ${rph.objectives?.psychomotor || '-'}</li>
                <li><strong>Kognitif:</strong> ${rph.objectives?.cognitive || '-'}</li>
                <li><strong>Afektif:</strong> ${rph.objectives?.affective || '-'}</li>
              </ol>
              <div class="rph-success-criteria-callout">
                <strong>Kriteria Kejayaan (Success Criteria):</strong>
                <em>"${rph.successCriteria || '-'}"</em>
              </div>
            </div>
          </div>

          <div class="rph-section">
            <h4 class="rph-section-title">3. Bahan Bantu Mengajar (BBM) &amp; Elemen Merentas Kurikulum (EMK)</h4>
            <div class="rph-info-grid">
              <div><strong>Alat Bantu Mengajar (BBM):</strong> ${rph.teachingAids || rph.bbm || '-'}</div>
              <div><strong>Nilai Murni:</strong> ${rph.values || '-'}</div>
              <div><strong>Elemen Merentas Kurikulum (EMK):</strong> ${rph.emk || '-'}</div>
              <div><strong>Strategi Pedagogi:</strong> ${rph.strategy || '-'}</div>
            </div>
          </div>

          <div class="rph-section">
            <h4 class="rph-section-title">4. Jadual Aktiviti Pengajaran &amp; Pembelajaran (PdPc)</h4>
            <table class="table rph-phases-table">
              <thead>
                <tr>
                  <th style="width: 18%;">Fasa / Masa</th>
                  <th style="width: 22%;">Fokus Pembelajaran</th>
                  <th style="width: 38%;">Aktiviti PdPc</th>
                  <th style="width: 22%;">Catatan &amp; Keselamatan</th>
                </tr>
              </thead>
              <tbody>
                ${phaseRows}
              </tbody>
            </table>
          </div>

          <div class="rph-doc-footer">
            <div class="rph-sign-box">
              <div class="rph-sign-line">Tandatangan Calon Guru DG41</div>
              <div class="rph-sign-meta">${rph.candidateName || 'Calon PJPK'}</div>
            </div>
            <div class="rph-sign-box text-right">
              <div class="rph-sign-line">Tandatangan &amp; Pengesahan Panel Penilai MARA</div>
              <div class="rph-sign-meta">Bahagian Pendidikan Menengah (BPM) MARA</div>
            </div>
          </div>
        </div>
      `;
    }

    /**
     * Membuka paparan cetakan kemas dokumen pengajaran A4
     */
    printRPH(rph = this.currentRPH) {
      if (typeof window !== 'undefined' && typeof window.print === 'function') {
        window.print();
      }
      return true;
    }

    /**
     * Mendapatkan senarai kriteria rubrik
     */
    getRubricCriteria() {
      return this.rubricCriteria;
    }

    /**
     * Mengira jumlah markah rubrik panel penilai MARA (7 kriteria, 100%)
     * @param {Object} scores - Skor 1 hingga 5 bagi setiap kriteria
     */
    evaluateRubric(scores = {}) {
      const breakdown = [];
      let totalWeightedScore = 0;

      for (const item of this.rubricCriteria) {
        const key = item.id;
        const score = scores[key];

        if (score === undefined || score === null) {
          throw new Error(`Skor bagi kriteria '${item.label}' (${key}) tidak dibekalkan.`);
        }

        const numScore = Number(score);
        if (isNaN(numScore) || numScore < 1 || numScore > 5) {
          throw new Error(`Skor tidak sah bagi '${item.label}': ${score}. Skor mesti berada dalam julat 1 hingga 5 bintang.`);
        }

        // Skor wajaran: (numScore / 5) * weight
        const weightedScore = (numScore / 5) * item.weight;
        totalWeightedScore += weightedScore;

        const descriptor = item.descriptors ? item.descriptors[numScore] : '';

        breakdown.push({
          id: item.id,
          label: item.label,
          weight: item.weight,
          rawScore: numScore,
          weightedScore: Math.round(weightedScore * 10) / 10,
          maxWeightedScore: item.weight,
          descriptor,
          isStrong: numScore >= 4,
          isNeedsWork: numScore <= 2
        });
      }

      // Bulatkan peratusan kepada 1 tempat perpuluhan atau integer tepat
      const percentage = Math.round(totalWeightedScore * 10) / 10;

      let gradeBand = '';
      let verdict = '';
      let isRecommended = false;

      if (percentage >= 85) {
        gradeBand = 'Cemerlang';
        verdict = 'Cemerlang / Sangat Disyorkan (Layak Dilantik Guru PJPK DG41 MRSM)';
        isRecommended = true;
      } else if (percentage >= 70) {
        gradeBand = 'Kepujian / Baik';
        verdict = 'Kepujian / Disyorkan (Memenuhi Piawaian Pedagogi MARA)';
        isRecommended = true;
      } else if (percentage >= 60) {
        gradeBand = 'Lulus Bersyarat';
        verdict = 'Lulus Bersyarat / Perlu Bimbingan & Pemantauan';
        isRecommended = false;
      } else {
        gradeBand = 'Lemah / Tidak Mencapai Tahap';
        verdict = 'Tidak Mencapai Tahap Minimum (Gagal / Tidak Disyorkan)';
        isRecommended = false;
      }

      // Rumusan maklum balas automatik panel (Personalized Coaching Feedback)
      const strongItems = breakdown.filter(b => b.isStrong).map(b => b.label);
      const weakItems = breakdown.filter(b => b.isNeedsWork).map(b => b.label);

      let feedback = '';
      if (percentage >= 85) {
        feedback = `Prestasi cemerlang! Anda mempamerkan penguasaan menyeluruh standard pengajaran mikro MRSM. Kekuatan utama dikesan dalam: ${strongItems.join(', ')}. Teruskan mengekalkan unjuran vokal yang berwibawa, demonstrasi 3D yang tepat, dan penekanan keselamatan murid.`;
      } else if (percentage >= 70) {
        feedback = `Prestasi yang kukuh dan memenuhi piawaian kemasukan MRSM. ${strongItems.length > 0 ? `Aspek yang baik: ${strongItems.join(', ')}. ` : ''}${weakItems.length > 0 ? `Beri tumpuan latihan tambahan pada: ${weakItems.join(', ')} sebelum hari penilaian sebenar.` : 'Tingkatkan ketelitian kawalan masa dan soalan KBAT untuk melonjakkan skor ke tahap Cemerlang.'}`;
      } else if (percentage >= 60) {
        feedback = `Calon berada di tahap sederhana. Walaupun beberapa elemen asas dicapai, penambahbaikan segera diperlukan terutamanya dalam: ${weakItems.length > 0 ? weakItems.join(', ') : 'pengurusan masa, vokal guru padang, dan ansur maju PdPc'}. Pastikan demonstrasi teknik kemahiran dilatih tubi dengan lebih mantap.`;
      } else {
        feedback = `Tahap kesediaan masih lemah dan belum mencapai piawaian minimum guru PJPK MRSM. Kelemahan ketara dikesan pada: ${weakItems.join(', ')}. Calon disarankan mengulang kaji semula DSKP KSSM, berlatih proyeksi suara padang, dan menstrukturkan semula RPH mengikut format rasmi MARA.`;
      }

      const result = {
        percentage,
        totalWeightedScore,
        gradeBand,
        verdict,
        isRecommended,
        feedback,
        breakdown,
        evaluatedAt: new Date().toISOString()
      };

      this.lastEvaluation = result;
      return result;
    }

    /**
     * Mengakses pemasa fasa
     */
    getTimer() {
      return this.timer;
    }

    startTimer(durationMinutes = 12, callbacks = {}) {
      return this.timer.start(durationMinutes, callbacks);
    }

    stopTimer() {
      return this.timer.stop();
    }
  }

  // ==========================================================================
  // 5. PENGURUS UI INTERAKTIF (#microteaching-app)
  // ==========================================================================
  const MicroTeachingUI = {
    hub: null,
    container: null,

    init(containerElement) {
      if (!containerElement) return;
      this.container = containerElement;
      this.hub = new MicroTeachingHub();
      this.render();
      this.bindEvents();
    },

    render() {
      if (!this.container) return;

      const currentRPH = this.hub.currentRPH || this.hub.loadTemplate('futsal');
      const criteria = this.hub.getRubricCriteria();

      this.container.innerHTML = `
        <div class="microteaching-wrapper">
          <!-- NAVIGASI SUB-SEKSYEN / TABS DALAMAN -->
          <div class="sub-nav-bar mb-4">
            <button type="button" class="sub-nav-btn active" data-subtab="rph-editor">
              <svg class="icon-inline" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
              </svg>
              1. Templat &amp; Editor RPH
            </button>
            <button type="button" class="sub-nav-btn" data-subtab="phase-timer">
              <svg class="icon-inline" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
              </svg>
              2. Pemasa Fasa Micro-Teaching
            </button>
            <button type="button" class="sub-nav-btn" data-subtab="rubric-eval">
              <svg class="icon-inline" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              3. Borang Rubrik Panel MARA (100%)
            </button>
          </div>

          <!-- ============================================================== -->
          <!-- BAHAGIAN 1: PILIHAN TEMPLAT & EDITOR RPH PINTAR                -->
          <!-- ============================================================== -->
          <div class="subtab-pane active" id="pane-rph-editor">
            <!-- Kad Pemilihan Templat -->
            <div class="card p-3 mb-4 bg-subtle">
              <div class="d-flex justify-between items-center flex-wrap gap-2">
                <div>
                  <h4 class="m-0 text-maroon">Pilihan Templat Rasmi DSKP KSSM PJPK</h4>
                  <p class="text-sm text-muted m-0">Muat terus perancangan pengajaran micro-teaching yang lengkap atau bina RPH kustom.</p>
                </div>
                <div class="btn-group-wrap flex-wrap gap-2">
                  <button type="button" class="btn btn-sm btn-outline active-tpl-btn" data-tpl="futsal">
                    ⚽ Futsal (Tingkatan 2)
                  </button>
                  <button type="button" class="btn btn-sm btn-outline" data-tpl="aerobic">
                    ❤️ Aerobik &amp; Karvonen (Tingkatan 4)
                  </button>
                  <button type="button" class="btn btn-sm btn-outline" data-tpl="firstaid">
                    🩹 P.R.I.C.E (Tingkatan 1)
                  </button>
                  <button type="button" class="btn btn-sm btn-primary" id="btn-custom-rph-modal">
                    ✍️ Bina RPH Kustom
                  </button>
                </div>
              </div>
            </div>

            <!-- Palang Tindakan Cetakan & Salin -->
            <div class="d-flex justify-between items-center mb-3 flex-wrap gap-2">
              <div class="d-flex items-center gap-2">
                <span class="badge badge-gold" id="lbl-active-tpl-badge">Templat: ${currentRPH.title.substring(0, 30)}...</span>
                <span class="badge badge-outline">${currentRPH.form}</span>
              </div>
              <div class="btn-group-wrap gap-2">
                <button type="button" class="btn btn-sm btn-secondary" id="btn-copy-rph-text">
                  📋 Salin Teks RPH
                </button>
                <button type="button" class="btn btn-sm btn-gold btn-print" id="btn-print-rph-doc">
                  🖨️ Cetak Format A4 / PDF
                </button>
              </div>
            </div>

            <!-- Kontena Pratonton RPH Standard MRSM -->
            <div class="card p-4 rph-view-card" id="rph-preview-container">
              ${this.hub.exportRPHHtml(currentRPH)}
            </div>
          </div>

          <!-- ============================================================== -->
          <!-- BAHAGIAN 2: PEMASA FASA SIMULASI MICRO-TEACHING                -->
          <!-- ============================================================== -->
          <div class="subtab-pane" id="pane-phase-timer" style="display:none;">
            <div class="grid grid-2-1 gap-4">
              <!-- Kolum Kiri: Paparan Jam & Fasa -->
              <div class="card p-4 text-center">
                <div class="d-flex justify-between items-center mb-3">
                  <span class="badge badge-primary">Simulasi Latihan Mengajar</span>
                  <div class="d-flex items-center gap-2">
                    <label for="timer-duration-select" class="text-xs text-muted m-0">Tempoh Sesi:</label>
                    <select id="timer-duration-select" class="form-select form-select-sm">
                      <option value="10">10 Minit (Ujian Pantas)</option>
                      <option value="12" selected>12 Minit (Optimum MAC MRSM)</option>
                      <option value="15">15 Minit (Maksimum Panel)</option>
                    </select>
                  </div>
                </div>

                <!-- Lencana Fasa Semasa -->
                <div class="phase-indicator-pill mb-2">
                  <span class="badge badge-gold badge-lg" id="timer-phase-badge">Fasa 1: Set Induksi</span>
                  <span class="text-sm text-muted ml-2" id="timer-phase-range">0:00 - 2:30</span>
                </div>

                <!-- Paparan Jam Digital Besar -->
                <div class="timer-display-box my-3">
                  <div class="timer-digits text-crimson" id="timer-display-digits">12:00</div>
                  <div class="timer-sub-digits text-muted" id="timer-elapsed-text">Berlalu: 00:00 / Baki: 12:00</div>
                </div>

                <!-- Bar Kemajuan Visual Fasa -->
                <div class="progress-bar-wrap mb-3">
                  <div class="progress-bar-fill bg-crimson" id="timer-progress-fill" style="width: 0%;"></div>
                </div>

                <!-- Amaran Visual Perubahan Fasa -->
                <div id="timer-warning-banner" class="alert alert-warning py-2 mb-3" style="display:none;">
                  ⚠️ Amaran: Menghampiri pertukaran fasa dalam 30 saat! Sila bersedia beralih langkah PdPc.
                </div>

                <!-- Butang Kawalan Pemasa -->
                <div class="btn-group-wrap justify-center gap-2 mt-2">
                  <button type="button" class="btn btn-primary btn-lg" id="btn-timer-start">
                    ▶ Mula Latihan
                  </button>
                  <button type="button" class="btn btn-secondary btn-lg" id="btn-timer-pause" style="display:none;">
                    ⏸ Jeda
                  </button>
                  <button type="button" class="btn btn-outline btn-lg" id="btn-timer-reset">
                    🔄 Tetap Semula
                  </button>
                  <button type="button" class="btn btn-outline-light btn-sm" id="btn-timer-sound" title="Bunyi Bip">
                    🔔 Bip Audio: Aktif
                  </button>
                </div>
              </div>

              <!-- Kolum Kanan: Bimbingan Tindakan Guru Mengikut Fasa -->
              <div class="card p-4">
                <h4 class="card-heading-sm border-bottom pb-2">Bimbingan Tindakan Guru Padang</h4>
                <div class="phase-guidance-box my-3 p-3 bg-subtle rounded border-l-crimson" id="phase-guidance-content">
                  <strong>Fasa 1: Set Induksi (0 - 2.5 Minit)</strong>
                  <p class="text-sm mt-1 mb-0">
                    Pemeriksaan kesihatan murid (PAR-Q), semakan kasut bertali, tarikan minat dalam 90 saat, pemanasan badan dinamik, dan penerangan kriteria kejayaan.
                  </p>
                </div>

                <div class="phase-timeline-compact mt-3">
                  <div class="timeline-step step-active" id="step-fasa-1">
                    <span class="step-num">1</span>
                    <div class="step-text">
                      <strong>Set Induksi</strong>
                      <span class="text-xs text-muted block">PAR-Q &bull; Pemanasan Badan &bull; Objektif</span>
                    </div>
                  </div>
                  <div class="timeline-step" id="step-fasa-2">
                    <span class="step-num">2</span>
                    <div class="step-text">
                      <strong>Perkembangan &amp; Kemuncak</strong>
                      <span class="text-xs text-muted block">Demonstrasi 3D &bull; Ansur Maju &bull; Rondo / Aplikasi</span>
                    </div>
                  </div>
                  <div class="timeline-step" id="step-fasa-3">
                    <span class="step-num">3</span>
                    <div class="step-text">
                      <strong>Penutup &amp; Refleksi</strong>
                      <span class="text-xs text-muted block">Cool-down &bull; KBAT &bull; Semak Kriteria &bull; PBD</span>
                    </div>
                  </div>
                </div>

                <div class="callout callout-info mt-3 text-xs">
                  💡 <strong>Tips Masa Panel:</strong> Kegagalan melengkapkan fasa penutup kerana masa terputus akan menjejaskan markah Kriteria 7 (Refleksi &amp; PBD). Sentiasa pantau baki masa!
                </div>
              </div>
            </div>
          </div>

          <!-- ============================================================== -->
          <!-- BAHAGIAN 3: BORANG SEMAKAN RUBRIK PENILAI MAC MARA (100%)       -->
          <!-- ============================================================== -->
          <div class="subtab-pane" id="pane-rubric-eval" style="display:none;">
            <div class="grid grid-2-1 gap-4">
              <!-- Kolum Kiri: 7 Kriteria Penilaian -->
              <div class="card p-4">
                <div class="border-bottom pb-2 mb-3">
                  <h4 class="card-heading-sm text-maroon m-0">Borang Rubrik Penilaian Panel MARA Assessment Centre</h4>
                  <p class="text-xs text-muted m-0">Nilaikan tahap kesediaan anda pada setiap dimensi (1 = Sangat Lemah, 5 = Cemerlang). Markah penuh: 100%.</p>
                </div>

                <form id="form-rubric-eval">
                  ${criteria.map(crit => `
                    <div class="rubric-item-card mb-3 p-3 bg-subtle rounded border" data-crit="${crit.id}">
                      <div class="d-flex justify-between items-center flex-wrap gap-1 mb-1">
                        <strong class="text-sm font-semibold">${crit.label}</strong>
                        <span class="badge badge-outline">Wajaran: ${crit.weight}%</span>
                      </div>
                      <p class="text-xs text-muted mb-2">${crit.description}</p>
                      
                      <!-- Pemilihan Skor Bintang 1-5 -->
                      <div class="d-flex items-center gap-2">
                        <span class="text-xs font-semibold text-muted">Skor Anda:</span>
                        <div class="star-rating-group" data-target="${crit.id}">
                          ${[1, 2, 3, 4, 5].map(star => `
                            <button type="button" class="star-btn ${star <= 4 ? 'active' : ''}" data-score="${star}" title="${star} Bintang">
                              ★
                            </button>
                          `).join('')}
                        </div>
                        <input type="hidden" name="${crit.id}" value="4" class="rubric-score-input" id="input-${crit.id}">
                        <span class="text-xs font-bold text-crimson ml-2 score-display" id="lbl-${crit.id}">4 / 5</span>
                      </div>
                    </div>
                  `).join('')}

                  <div class="btn-group-wrap gap-2 mt-3">
                    <button type="button" class="btn btn-primary" id="btn-calc-rubric">
                      📊 Kira Skor Kelayakan &amp; Ulasan Panel
                    </button>
                    <button type="button" class="btn btn-outline" id="btn-reset-rubric">
                      🔄 Reset Penilaian
                    </button>
                  </div>
                </form>
              </div>

              <!-- Kolum Kanan: Skor Kumulatif & Ulasan Automatik Panel -->
              <div>
                <div class="card p-4 text-center mb-3">
                  <span class="badge badge-gold">Skor Keseluruhan Panel</span>
                  <div class="score-circle-display my-3">
                    <div class="display-percent text-crimson" id="eval-score-percent">80.0%</div>
                    <div class="badge badge-success badge-lg mt-1" id="eval-verdict-badge">Kepujian / Disyorkan</div>
                  </div>
                  <div class="text-xs text-muted" id="eval-status-text">
                    Memenuhi Piawaian Pedagogi MARA
                  </div>
                </div>

                <!-- Kad Ulasan Bimbingan Panel -->
                <div class="card p-4">
                  <h4 class="card-heading-sm border-bottom pb-2">Ulasan Bimbingan Panel Penilai</h4>
                  <div class="feedback-text-box mt-2 text-sm text-secondary" id="eval-feedback-box">
                    Prestasi yang kukuh dan memenuhi piawaian kemasukan MRSM. Aspek demonstrasi teknik kemahiran dan kawalan kelas telah dirancang dengan baik. Tingkatkan penekanan soalan KBAT untuk melonjakkan skor ke tahap Cemerlang.
                  </div>

                  <div class="mt-3 border-top pt-2">
                    <strong class="text-xs text-muted block mb-1">Skor Minimum DG41:</strong>
                    <div class="text-xs space-y-1">
                      <div>🟢 <strong>&ge; 85%:</strong> Cemerlang (Sangat Disyorkan Lantikan)</div>
                      <div>🟡 <strong>70% - 84%:</strong> Kepujian (Disyorkan)</div>
                      <div>🟠 <strong>60% - 69%:</strong> Lulus Bersyarat (Perlu Bimbingan)</div>
                      <div>🔴 <strong>&lt; 60%:</strong> Tidak Disyorkan (Gagal)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ================================================================ -->
        <!-- MODAL BINA RPH KUSTOM                                            -->
        <!-- ================================================================ -->
        <div id="modal-custom-rph" class="modal-backdrop" role="dialog" aria-modal="true" style="display:none;">
          <div class="modal-card modal-card-lg">
            <div class="modal-header">
              <h3 class="modal-title">Bina RPH Kustom Micro-Teaching DSKP</h3>
              <button type="button" class="btn-close" id="btn-close-rph-modal">&times;</button>
            </div>
            <div class="modal-body max-h-600 overflow-y-auto">
              <form id="form-custom-rph">
                <div class="grid grid-2 gap-3 mb-3">
                  <div>
                    <label class="form-label" for="inp-candidate-name">Nama Calon:</label>
                    <input type="text" id="inp-candidate-name" class="form-control" value="Calon DG41 PJPK" required>
                  </div>
                  <div>
                    <label class="form-label" for="inp-mrsm-branch">Cawangan MRSM / Pusat MAC:</label>
                    <input type="text" id="inp-mrsm-branch" class="form-control" value="MRSM Premier / Bitara">
                  </div>
                </div>

                <div class="grid grid-2 gap-3 mb-3">
                  <div>
                    <label class="form-label" for="inp-subject">Mata Pelajaran:</label>
                    <input type="text" id="inp-subject" class="form-control" value="Pendidikan Jasmani dan Pendidikan Kesihatan" required>
                  </div>
                  <div>
                    <label class="form-label" for="inp-form">Tingkatan:</label>
                    <input type="text" id="inp-form" class="form-control" value="Tingkatan 2 Bitara" required>
                  </div>
                </div>

                <div class="grid grid-2 gap-3 mb-3">
                  <div>
                    <label class="form-label" for="inp-topic">Tajuk / Kemahiran Fokus:</label>
                    <input type="text" id="inp-topic" class="form-control" placeholder="Contoh: Sepak Sila Sepak Takraw" required>
                  </div>
                  <div>
                    <label class="form-label" for="inp-duration">Masa Sesi:</label>
                    <input type="text" id="inp-duration" class="form-control" value="12 Minit (Simulasi Micro-Teaching)">
                  </div>
                </div>

                <div class="mb-3">
                  <label class="form-label" for="inp-sk">Standard Kandungan (SK):</label>
                  <input type="text" id="inp-sk" class="form-control" placeholder="1.2 Melakukan kemahiran..." required>
                </div>

                <div class="mb-3">
                  <label class="form-label" for="inp-sp">Standard Pembelajaran (SP):</label>
                  <input type="text" id="inp-sp" class="form-control" placeholder="1.2.1 Melakukan sepakan..." required>
                </div>

                <div class="mb-3">
                  <label class="form-label">Objektif Pembelajaran (3 Domain SMART):</label>
                  <div class="space-y-2">
                    <input type="text" id="inp-obj-psy" class="form-control" placeholder="Psikomotor: Melakukan 4 daripada 5 lakuan..." required>
                    <input type="text" id="inp-obj-cog" class="form-control" placeholder="Kognitif: Menerangkan titik kontak..." required>
                    <input type="text" id="inp-obj-aff" class="form-control" placeholder="Afektif: Menunjukkan kerjasama..." required>
                  </div>
                </div>

                <div class="mb-3">
                  <label class="form-label" for="inp-success-crit">Kriteria Kejayaan (Success Criteria):</label>
                  <input type="text" id="inp-success-crit" class="form-control" placeholder="Saya dapat melakukan...">
                </div>

                <div class="grid grid-2 gap-3 mb-3">
                  <div>
                    <label class="form-label" for="inp-bbm">Alat Bantu Mengajar (BBM):</label>
                    <input type="text" id="inp-bbm" class="form-control" placeholder="Bola, kon, wisel, jam randik">
                  </div>
                  <div>
                    <label class="form-label" for="inp-values">Nilai Murni &amp; EMK:</label>
                    <input type="text" id="inp-values" class="form-control" placeholder="Kerjasama, Disiplin Kendiri">
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline" id="btn-cancel-custom-rph">Batal</button>
              <button type="button" class="btn btn-primary" id="btn-submit-custom-rph">Jana RPH Kustom</button>
            </div>
          </div>
        </div>
      `;
    },

    bindEvents() {
      if (!this.container) return;

      // 1. Navigasi Sub-Tab
      const subNavBtns = this.container.querySelectorAll('.sub-nav-btn');
      subNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetSubtab = btn.getAttribute('data-subtab');
          subNavBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const panes = this.container.querySelectorAll('.subtab-pane');
          panes.forEach(p => {
            p.style.display = 'none';
            p.classList.remove('active');
          });

          const activePane = this.container.querySelector(`#pane-${targetSubtab}`);
          if (activePane) {
            activePane.style.display = 'block';
            activePane.classList.add('active');
          }
        });
      });

      // 2. Butang Pilihan Templat Pantas
      const tplBtns = this.container.querySelectorAll('[data-tpl]');
      tplBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const tplKey = btn.getAttribute('data-tpl');
          tplBtns.forEach(b => b.classList.remove('active-tpl-btn', 'btn-primary'));
          btn.classList.add('active-tpl-btn', 'btn-primary');

          const rph = this.hub.loadTemplate(tplKey);
          const previewContainer = this.container.querySelector('#rph-preview-container');
          if (previewContainer) {
            previewContainer.innerHTML = this.hub.exportRPHHtml(rph);
          }

          const badge = this.container.querySelector('#lbl-active-tpl-badge');
          if (badge) {
            badge.textContent = `Templat: ${rph.title.substring(0, 30)}...`;
          }

          if (typeof window !== 'undefined' && typeof window.showToast === 'function') {
            window.showToast(`Templat DSKP '${rph.title}' berjaya dimuatkan.`, 'success');
          }
        });
      });

      // 3. Salin Teks RPH
      const btnCopy = this.container.querySelector('#btn-copy-rph-text');
      if (btnCopy) {
        btnCopy.addEventListener('click', () => {
          const text = this.hub.exportRPHText();
          if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
              btnCopy.textContent = '✔ Disalin ke Papan Keratan!';
              setTimeout(() => { btnCopy.textContent = '📋 Salin Teks RPH'; }, 2500);
            }).catch(() => {
              this.fallbackCopy(text, btnCopy);
            });
          } else {
            this.fallbackCopy(text, btnCopy);
          }
        });
      }

      // 4. Cetak RPH
      const btnPrint = this.container.querySelector('#btn-print-rph-doc');
      if (btnPrint) {
        btnPrint.addEventListener('click', () => {
          this.hub.printRPH();
        });
      }

      // 5. Modal RPH Kustom
      const btnOpenModal = this.container.querySelector('#btn-custom-rph-modal');
      const modalCustom = this.container.querySelector('#modal-custom-rph');
      const btnCloseModal = this.container.querySelector('#btn-close-rph-modal');
      const btnCancelModal = this.container.querySelector('#btn-cancel-custom-rph');
      const btnSubmitModal = this.container.querySelector('#btn-submit-custom-rph');

      if (btnOpenModal && modalCustom) {
        btnOpenModal.addEventListener('click', () => {
          modalCustom.style.display = 'flex';
        });
      }
      if (btnCloseModal && modalCustom) {
        btnCloseModal.addEventListener('click', () => {
          modalCustom.style.display = 'none';
        });
      }
      if (btnCancelModal && modalCustom) {
        btnCancelModal.addEventListener('click', () => {
          modalCustom.style.display = 'none';
        });
      }

      if (btnSubmitModal && modalCustom) {
        btnSubmitModal.addEventListener('click', () => {
          const topic = this.container.querySelector('#inp-topic')?.value?.trim();
          if (!topic) {
            alert('Sila isi tajuk pembelajaran kemahiran kustom.');
            return;
          }

          const customData = {
            candidateName: this.container.querySelector('#inp-candidate-name')?.value?.trim() || 'Calon DG41 PJPK',
            mrsmBranch: this.container.querySelector('#inp-mrsm-branch')?.value?.trim() || 'MRSM Premier',
            subject: this.container.querySelector('#inp-subject')?.value?.trim() || 'Pendidikan Jasmani dan Pendidikan Kesihatan',
            form: this.container.querySelector('#inp-form')?.value?.trim() || 'Tingkatan 2 Bitara',
            topic,
            duration: this.container.querySelector('#inp-duration')?.value?.trim() || '12 Minit (Simulasi Micro-Teaching)',
            sk: this.container.querySelector('#inp-sk')?.value?.trim() || '1.1 Kemahiran asas pergerakan.',
            sp: this.container.querySelector('#inp-sp')?.value?.trim() || '1.1.1 Melakukan kemahiran dengan lakuan betul.',
            objectives: {
              psychomotor: this.container.querySelector('#inp-obj-psy')?.value?.trim() || 'Melakukan kemahiran dengan betul.',
              cognitive: this.container.querySelector('#inp-obj-cog')?.value?.trim() || 'Menyatakan fasa lakuan utama.',
              affective: this.container.querySelector('#inp-obj-aff')?.value?.trim() || 'Menunjukkan sikap kerjasama berpasangan.'
            },
            successCriteria: this.container.querySelector('#inp-success-crit')?.value?.trim(),
            teachingAids: this.container.querySelector('#inp-bbm')?.value?.trim(),
            values: this.container.querySelector('#inp-values')?.value?.trim()
          };

          const rph = this.hub.generateRPH(customData);
          const previewContainer = this.container.querySelector('#rph-preview-container');
          if (previewContainer) {
            previewContainer.innerHTML = this.hub.exportRPHHtml(rph);
          }

          const badge = this.container.querySelector('#lbl-active-tpl-badge');
          if (badge) {
            badge.textContent = `Kustom: ${rph.topic.substring(0, 30)}...`;
          }

          modalCustom.style.display = 'none';
        });
      }

      // 6. Pemasa Fasa Simulasi
      this.bindTimerEvents();

      // 7. Kalkulator Rubrik Penilai
      this.bindRubricEvents();
    },

    fallbackCopy(text, btnElement) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        btnElement.textContent = '✔ Disalin!';
        setTimeout(() => { btnElement.textContent = '📋 Salin Teks RPH'; }, 2500);
      } catch (err) {
        alert('Gagal menyalin teks secara automatik.');
      }
      document.body.removeChild(textarea);
    },

    bindTimerEvents() {
      const timer = this.hub.getTimer();
      const btnStart = this.container.querySelector('#btn-timer-start');
      const btnPause = this.container.querySelector('#btn-timer-pause');
      const btnReset = this.container.querySelector('#btn-timer-reset');
      const btnSound = this.container.querySelector('#btn-timer-sound');
      const durationSelect = this.container.querySelector('#timer-duration-select');

      const digits = this.container.querySelector('#timer-display-digits');
      const elapsedText = this.container.querySelector('#timer-elapsed-text');
      const progressFill = this.container.querySelector('#timer-progress-fill');
      const phaseBadge = this.container.querySelector('#timer-phase-badge');
      const phaseRange = this.container.querySelector('#timer-phase-range');
      const warningBanner = this.container.querySelector('#timer-warning-banner');
      const guidanceBox = this.container.querySelector('#phase-guidance-content');

      const step1 = this.container.querySelector('#step-fasa-1');
      const step2 = this.container.querySelector('#step-fasa-2');
      const step3 = this.container.querySelector('#step-fasa-3');

      const updateUI = (info) => {
        const remaining = info.timeRemainingTotal;
        const min = Math.floor(remaining / 60);
        const sec = remaining % 60;
        if (digits) {
          digits.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
        }

        const elapsed = timer.getElapsedSeconds();
        const elMin = Math.floor(elapsed / 60);
        const elSec = elapsed % 60;
        if (elapsedText) {
          elapsedText.textContent = `Berlalu: ${String(elMin).padStart(2, '0')}:${String(elSec).padStart(2, '0')} / Baki: ${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
        }

        if (progressFill) {
          progressFill.style.width = `${info.progressPercent}%`;
        }

        if (phaseBadge) {
          phaseBadge.textContent = info.phaseName;
        }
        if (phaseRange) {
          phaseRange.textContent = info.phaseTimeRange;
        }

        if (warningBanner) {
          if (info.isPhaseWarning) {
            warningBanner.style.display = 'block';
            if (info.warningLevel === 'final-warning') {
              warningBanner.className = 'alert alert-danger py-2 mb-3';
              warningBanner.textContent = '🚨 PERINGATAN AKHIR: Baki masa kurang 15 saat! Segera tamatkan pengajaran anda.';
            } else {
              warningBanner.className = 'alert alert-warning py-2 mb-3';
              warningBanner.textContent = '⚠️ Amaran: Menghampiri pertukaran fasa dalam 30 saat! Sila bersedia beralih langkah PdPc.';
            }
          } else {
            warningBanner.style.display = 'none';
          }
        }

        if (guidanceBox) {
          guidanceBox.innerHTML = `<strong>${info.phaseName}</strong><p class="text-sm mt-1 mb-0">${info.guidance}</p>`;
        }

        // Kemaskini langkah aktif
        [step1, step2, step3].forEach((s, idx) => {
          if (!s) return;
          if (idx + 1 === info.phaseIndex) {
            s.className = 'timeline-step step-active';
          } else if (idx + 1 < info.phaseIndex) {
            s.className = 'timeline-step step-completed';
          } else {
            s.className = 'timeline-step';
          }
        });
      };

      if (btnStart) {
        btnStart.addEventListener('click', () => {
          const duration = parseInt(durationSelect?.value || '12', 10);
          if (timer.isPaused()) {
            timer.resume();
            btnStart.style.display = 'none';
            if (btnPause) btnPause.style.display = 'inline-block';
          } else {
            timer.start(duration, {
              onTick: updateUI,
              onPhaseChange: (info) => {
                updateUI(info);
              },
              onComplete: (info) => {
                updateUI(info);
                if (btnStart) {
                  btnStart.textContent = '▶ Mula Semula';
                  btnStart.style.display = 'inline-block';
                }
                if (btnPause) btnPause.style.display = 'none';
              }
            });
            btnStart.style.display = 'none';
            if (btnPause) btnPause.style.display = 'inline-block';
          }
        });
      }

      if (btnPause) {
        btnPause.addEventListener('click', () => {
          timer.pause();
          btnPause.style.display = 'none';
          if (btnStart) {
            btnStart.textContent = '▶ Sambung';
            btnStart.style.display = 'inline-block';
          }
        });
      }

      if (btnReset) {
        btnReset.addEventListener('click', () => {
          const duration = parseInt(durationSelect?.value || '12', 10);
          timer.reset();
          if (btnStart) {
            btnStart.textContent = '▶ Mula Latihan';
            btnStart.style.display = 'inline-block';
          }
          if (btnPause) btnPause.style.display = 'none';
          updateUI(timer.getPhaseInfo(0, duration));
        });
      }

      if (btnSound) {
        btnSound.addEventListener('click', () => {
          timer.soundEnabled = !timer.soundEnabled;
          btnSound.textContent = timer.soundEnabled ? '🔔 Bip Audio: Aktif' : '🔕 Bip Audio: Bisu';
        });
      }

      if (durationSelect) {
        durationSelect.addEventListener('change', () => {
          const duration = parseInt(durationSelect.value, 10);
          timer.reset();
          updateUI(timer.getPhaseInfo(0, duration));
        });
      }
    },

    bindRubricEvents() {
      // Bintang Penilaian
      const starGroups = this.container.querySelectorAll('.star-rating-group');
      starGroups.forEach(group => {
        const critId = group.getAttribute('data-target');
        const starBtns = group.querySelectorAll('.star-btn');
        const hiddenInput = this.container.querySelector(`#input-${critId}`);
        const scoreDisplay = this.container.querySelector(`#lbl-${critId}`);

        starBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const score = parseInt(btn.getAttribute('data-score'), 10);
            if (hiddenInput) hiddenInput.value = score;
            if (scoreDisplay) scoreDisplay.textContent = `${score} / 5`;

            starBtns.forEach(b => {
              const bScore = parseInt(b.getAttribute('data-score'), 10);
              if (bScore <= score) {
                b.classList.add('active');
              } else {
                b.classList.remove('active');
              }
            });

            this.calculateRubricUI();
          });
        });
      });

      const btnCalc = this.container.querySelector('#btn-calc-rubric');
      if (btnCalc) {
        btnCalc.addEventListener('click', () => {
          this.calculateRubricUI();
        });
      }

      const btnReset = this.container.querySelector('#btn-reset-rubric');
      if (btnReset) {
        btnReset.addEventListener('click', () => {
          const inputs = this.container.querySelectorAll('.rubric-score-input');
          inputs.forEach(inp => {
            inp.value = '4';
            const critId = inp.id.replace('input-', '');
            const lbl = this.container.querySelector(`#lbl-${critId}`);
            if (lbl) lbl.textContent = '4 / 5';

            const grp = this.container.querySelector(`.star-rating-group[data-target="${critId}"]`);
            if (grp) {
              const stars = grp.querySelectorAll('.star-btn');
              stars.forEach(s => {
                const sc = parseInt(s.getAttribute('data-score'), 10);
                if (sc <= 4) s.classList.add('active');
                else s.classList.remove('active');
              });
            }
          });
          this.calculateRubricUI();
        });
      }

      // Kiraan awal
      this.calculateRubricUI();
    },

    calculateRubricUI() {
      const scores = {};
      const criteria = this.hub.getRubricCriteria();

      criteria.forEach(crit => {
        const inp = this.container.querySelector(`#input-${crit.id}`);
        scores[crit.id] = inp ? parseInt(inp.value, 10) : 4;
      });

      try {
        const evalResult = this.hub.evaluateRubric(scores);

        const scorePercent = this.container.querySelector('#eval-score-percent');
        const verdictBadge = this.container.querySelector('#eval-verdict-badge');
        const statusText = this.container.querySelector('#eval-status-text');
        const feedbackBox = this.container.querySelector('#eval-feedback-box');

        if (scorePercent) scorePercent.textContent = `${evalResult.percentage}%`;

        if (verdictBadge) {
          verdictBadge.textContent = evalResult.gradeBand;
          if (evalResult.percentage >= 85) {
            verdictBadge.className = 'badge badge-success badge-lg mt-1';
          } else if (evalResult.percentage >= 70) {
            verdictBadge.className = 'badge badge-primary badge-lg mt-1';
          } else if (evalResult.percentage >= 60) {
            verdictBadge.className = 'badge badge-warning badge-lg mt-1';
          } else {
            verdictBadge.className = 'badge badge-danger badge-lg mt-1';
          }
        }

        if (statusText) statusText.textContent = evalResult.verdict;
        if (feedbackBox) feedbackBox.textContent = evalResult.feedback;

        // Simpan ke localStorage untuk dashboard KPI jika dalam persekitaran pelayar
        if (typeof window !== 'undefined' && window.localStorage) {
          try {
            window.localStorage.setItem('mac_microteaching_last_score', String(evalResult.percentage));
            window.localStorage.setItem('mac_microteaching_grade', evalResult.gradeBand);
          } catch (e) {}
        }
      } catch (e) {
        console.error('Ralat mengira rubrik:', e);
      }
    }
  };

  // ==========================================================================
  // 6. PENGEKSPORTAN MODUL & AUTO-MOUNTING PERSEKITARAN BROWSER
  // ==========================================================================
  const MicroteachingModule = {
    MicroTeachingHub,
    DSKP_TEMPLATES,
    RUBRIC_CRITERIA,
    MicroTeachingTimer,
    MicroTeachingUI
  };

  if (typeof window !== 'undefined') {
    window.MicroTeachingHub = MicroTeachingHub;
    window.DSKP_TEMPLATES = DSKP_TEMPLATES;
    window.RUBRIC_CRITERIA = RUBRIC_CRITERIA;
    window.MicroTeachingTimer = MicroTeachingTimer;
    window.MicroTeachingUI = MicroTeachingUI;
    window.MicroteachingModule = MicroteachingModule;

    const autoMountMicroteaching = () => {
      const container = document.getElementById('microteaching-app');
      if (container) {
        MicroTeachingUI.init(container);
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', autoMountMicroteaching);
    } else {
      autoMountMicroteaching();
    }

    if (typeof document !== 'undefined') {
      document.addEventListener('mac:tab-switched', (e) => {
        if (e.detail && e.detail.tabId === 'microteaching') {
          const container = document.getElementById('microteaching-app');
          if (container && !container.querySelector('.microteaching-wrapper')) {
            MicroTeachingUI.init(container);
          }
        }
      });
    }
  }

  // Pengeksportan untuk Node.js (Unit Testing)
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = MicroteachingModule;
  }

})(typeof window !== 'undefined' ? window : global);
