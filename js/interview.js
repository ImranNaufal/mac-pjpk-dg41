/**
 * ==========================================================================
 * MARA ASSESSMENT CENTRE (MAC) - HAB TEMU DUGA PANEL & BANK SOALAN STAR
 * Module: js/interview.js
 * 
 * Menggabungkan:
 * 1. DOKUMEN RASMI MARA:
 *    - Borang Penilaian Temu Duga (Gred 5 - Gred 9) Lampiran F1 (v.300726)
 *    - Garis Panduan Program MAC Lampiran A (Klausa 4.2 & 4.4)
 *    - Skala 10 Kriteria Penilaian Rasmi (50 Markah Penuh, Lulus/Pilihan >= 40)
 *    - Pemasa 30 Minit Temu Duga Kumpulan Rasmi
 * 2. BANK SOALAN SEBENAR & PANDUAN JAWAPAN FORMAT S.T.A.R:
 *    - 28 Soalan Lengkap berasaskan docs/04_BANK_SOALAN_TEMUDUGA_DG41.md
 *    - 4 Kategori (Akta MARA, Budaya MRSM, PJPK & Keselamatan, Situasi STAR)
 *    - Huraian S-T-A-R, Kata Kunci Wajib & Perangkap Calon
 *    - Pemasa Latihan Lisan (1-3 Minit) & Penjejak Kemajuan Kendiri
 * 
 * Pure Vanilla JavaScript (ES6+) • 100% Offline-Ready (Sifar CDN Luaran)
 * ==========================================================================
 */

const MACInterview = (function () {
  'use strict';

  // ==========================================================================
  // BAHAGIAN 1: DATA 10 KRITERIA RASMI LAMPIRAN F1 & PEMASA 30 MINIT
  // ==========================================================================
  const INTERVIEW_DURATION_SEC = 1800; // 30 minit tepat (Klausa 4.2)

  // 10 Kriteria Penilaian Rasmi Lampiran F1 MARA (Skala 1 - 5, Markah Penuh: 50)
  const INTERVIEW_CRITERIA_MARA = [
    {
      number: 1,
      id: 'crit_penampilan',
      title: 'Penampilan',
      desc: 'Calon yang berpakaian kemas, baik, bersopan, bersedia dan yakin.',
      questionExample: 'Bagaimanakah penampilan dan etika diri anda melambangkan keperibadian seorang pendidik MARA yang berwibawa di maktab?',
      guidance: 'Kemas, mematuhi etika pakaian rasmi/sukan PJPK, postur tegak, hubungan mata (eye contact) mesra, senyuman tenang, bersopan santun.'
    },
    {
      number: 2,
      id: 'crit_kelayakan',
      title: 'Kelayakan',
      desc: 'Kelayakan calon adalah bertepatan dengan subjek yang dimohon.',
      questionExample: 'Nyatakan latar belakang akademik dan kepakaran sukan/kecergasan anda yang melayakkan anda mengajar subjek PJPK di MRSM.',
      guidance: 'Ijazah PJPK/Sains Sukan/Pendidikan yang diiktiraf MQA, lesen kejurulatihan, sijil pertolongan cemas, dan pengalaman membimbing sukan.'
    },
    {
      number: 3,
      id: 'crit_sikap',
      title: 'Sikap',
      desc: 'Calon adalah positif dalam ucapan dan tindakan, menunjukkan keupayaan untuk mengenal pasti apa yang perlu dilakukan dan melakukannya sebelum ditanya atau sebelum keadaan mengkehendakinya.',
      questionExample: 'Berikan satu situasi di mana anda mengambil inisiatif proaktif menyelesaikan masalah sebelum diarahkan oleh pihak pengurusan.',
      guidance: 'Fokus sifat inisiatif kendiri, kesanggupan berkorban masa demi kebajikan pelajar asrama, dan sikap pantas bertindak mengelak risiko keselamatan.'
    },
    {
      number: 4,
      id: 'crit_komunikasi',
      title: 'Kemahiran Komunikasi',
      desc: 'Calon itu mampu bertutur dan menulis (jika diuji) dengan baik dan lancar, dan mampu melahirkan idea-idea dan meletakkan mereka pada keseluruhan meyakinkan.',
      questionExample: 'Bagaimanakah anda berkomunikasi secara berkesan dengan ibu bapa yang risau tentang keselamatan anak mereka dalam aktiviti amali sukan lasak?',
      guidance: 'Percakapan tersusun, nada suara meyakinkan, dwibahasa fasih, penyampaian idea jelas, menggunakan fakta dan protokol keselamatan SOP rasmi.'
    },
    {
      number: 5,
      id: 'crit_keyakinan',
      title: 'Tahap keyakinan',
      desc: 'Calon mampu bercakap dan membawa dirinya dengan yakin, memaparkan bahawa dia mempunyai kepercayaan kepada idea-idea mereka sendiri dan mempunyai keupayaan untuk berjaya.',
      questionExample: 'Mengapakah anda yakin anda adalah calon terbaik untuk jawatan Pegawai Perkhidmatan Pendidikan DG9 MARA ini berbanding calon lain?',
      guidance: 'Teguh dengan kepakaran diri tanpa riak, keyakinan tinggi terhadap nilai tambah yang boleh disumbangkan kepada pembangunan maktab dan sukan MARA.'
    },
    {
      number: 6,
      id: 'crit_menggerak',
      title: 'Mengerak dan Mengenalpasti',
      desc: 'Calon yang mampu membangun dan bekerja ke arah mencapai matlamat bagi menyokong misi organisasi, dan bertekad untuk mencapai matlamat organisasi dan untuk memenuhi matlamat peribadi.',
      questionExample: 'Sejauh manakah anda memahami mandat penubuhan MARA di bawah Akta 249 dan bagaimana anda menterjemahkannya dalam melahirkan modal insan unggul?',
      guidance: 'Kefahaman jitu terhadap mandat Akta 249 mengangkat martabat Bumiputera luar bandar, melahirkan generasi saintis, profesional dan usahawan berakhlak mulia.'
    },
    {
      number: 7,
      id: 'crit_interpersonal',
      title: 'Kemahiran Interpersonal',
      desc: 'Calon mampu memahami dan mentafsir kebimbangan orang lain serta berkomunikasi dengan kesedaran dan empati kepada orang lain.',
      questionExample: 'Jika seorang pelajar asrama mengalami kemurungan akibat tekanan akademik dan mengasingkan diri, bagaimanakah anda menggunakan pendekatan PJPK untuk membantunya?',
      guidance: 'Empati mendalam, mendengar secara aktif (active listening), membina sokongan emosi positif melalui sukan rekreasi dan sistem homeroom MRSM.'
    },
    {
      number: 8,
      id: 'crit_analitikal',
      title: 'Kemahiran Analitikal',
      desc: 'Calon mampu menganalisis masalah dengan menggunakan pendekatan yang logik, sistematik dan tersusun.',
      questionExample: 'Jika data ujian kecergasan fizikal pelajar maktab menunjukkan peratusan obesiti yang meningkat, apakah pendekatan analisis yang anda lakukan?',
      guidance: 'Menganalisis punca data secara saintifik, mengenal pasti pola pemakanan dan tabiat sedentari, serta merangka program intervensi berasaskan data.'
    },
    {
      number: 9,
      id: 'crit_inovasi',
      title: 'Inovasi dan Kreativiti',
      desc: 'Calon mampu menunjukkan sokongan untuk inovasidan perubahan yang diperlukan untuk meningkatkan keberkesanan organisasi.',
      questionExample: 'Apakah idea inovatif yang anda boleh bawa bagi meningkatkan minat murid terhadap kecergasan fizikal dalam kekangan masa asrama yang padat?',
      guidance: 'Penggunaan gamifikasi aktiviti fizikal, integrasi aplikasi jejak langkah, rekreasi malam kreatif, atau modul kecergasan kendiri yang menjimatkan masa.'
    },
    {
      number: 10,
      id: 'crit_merancang',
      title: 'Merancang dan Menganjurkan',
      desc: 'Calon mampu merancang dan mengatur kerja-kerja untuk memaksimumkan penggunaan masa, mempunyai keupayaan untuk menjalankan pelbagai tugas dan menentukan kesesuaian untuk memenuhi keperluan kerja.',
      questionExample: 'Bagaimanakah anda mengimbangi pelbagai tanggungjawab serentak sebagai guru akademik, jurulatih sukan maktab, dan warden asrama?',
      guidance: 'Matriks keutamaan kerja (Eisenhower matrix), perancangan takwim tahunan teliti, delegasi tugasan, dan disiplin pengurusan masa yang tinggi.'
    }
  ];

  // ==========================================================================
  // BAHAGIAN 2: BANK 28 SOALAN TEMU DUGA SEBENAR & PANDUAN STAR
  // ==========================================================================
  const INTERVIEW_QUESTIONS = [
    // ------------------------------------------------------------------------
    // KATEGORI 1: FALSAFAH, AKTA & INSTITUSI MARA (SOALAN 1 – 7)
    // ------------------------------------------------------------------------
    {
      id: 1,
      category: 'mara',
      categoryLabel: 'Falsafah, Akta & Institusi MARA',
      question: 'Mengapakah MARA ditubuhkan dan apakah mandat utamanya di bawah Akta 249?',
      focusArea: 'Punca Kuasa, Sejarah Penubuhan & Mandat Akta 249',
      starAnswer: {
        situation: 'MARA ditubuhkan secara rasmi pada 1 Mac 1966 hasil resolusi Kongres Ekonomi Bumiputera Pertama (1965) bagi menggantikan RIDA (Lembaga Kemajuan Kampung dan Perusahaan) yang beroperasi sejak 1950.',
        task: 'Mandat berkanun MARA termaktub di bawah Seksyen 6(1) Akta Majlis Amanah Rakyat 1966 (Akta 249) iaitu memajukan, menggalakkan, memudahkan serta menjalankan pembangunan ekonomi dan sosial dalam Persekutuan, terutamanya di kawasan luar bandar.',
        action: 'Sebagai guru PJPK di MRSM, saya menterjemahkan mandat ini dengan membangunkan modal insan generasi muda Bumiputera yang sihat fizikal, tangkas intelek, berdaya tahan tinggi, dan mempunyai disiplin kepimpinan yang unggul bagi menerajui sosioekonomi negara.',
        result: 'Melahirkan barisan saintis, teknokrat, dan usahawan Bumiputera berstamina tinggi yang cergas jasmani dan teguh jati diri untuk memacu daya saing negara.'
      },
      keywords: [
        'Akta 249 (1966)',
        'Seksyen 6(1)',
        'Kongres Ekonomi Bumiputera 1965',
        'RIDA (1950)',
        'Mandat Sosioekonomi Luar Bandar',
        'Modal Insan Bumiputera',
        'Kecergasan Holistik'
      ],
      pitfalls: [
        'Tidak mengetahui tahun penubuhan rasmi MARA (1966) atau sejarah RIDA',
        'Menjawab secara umum tanpa mengaitkan peranan guru sukan dengan mandat Akta 249'
      ]
    },
    {
      id: 2,
      category: 'mara',
      categoryLabel: 'Falsafah, Akta & Institusi MARA',
      question: 'Apakah visi, misi dan moto MARA, dan bagaimana anda menterjemahkannya dalam pengajaran PJPK?',
      focusArea: 'Visi, Misi, Slogan & Aplikasi Pedagogi PJPK',
      starAnswer: {
        situation: 'MARA mempunyai hala tuju strategik yang jelas iaitu Visi menjadi organisasi amanah unggul dan diberkati untuk mengangkat martabat bangsa, dan Misi menerajui keusahawanan, pendidikan dan pelaburan untuk penguasaan ekuiti Bumiputera.',
        task: 'Tanggungjawab saya adalah memindahkan slogan "Keusahawanan dan Pendidikan Global" ke dalam praktis pengajaran Pendidikan Jasmani dan Kesihatan.',
        action: 'Pertama, mengendalikan Ujian SEGAK dengan integriti mutlak tanpa memalsukan rekod markah. Kedua, menerapkan pedagogi PAK-21, pembelajaran inkuiri dan sains sukan moden agar murid MRSM berdaya saing global. Ketiga, melatih murid mengurus karnival sukan maktab dari aspek belanjawan dan pemasaran keusahawanan.',
        result: 'Murid memiliki integriti sahsiah tinggi, celik keusahawanan sukan, dan bersedia bersaing di pentas pendidikan antarabangsa.'
      },
      keywords: [
        'Visi MARA (Organisasi Amanah Unggul)',
        'Misi MARA (Keusahawanan & Pendidikan)',
        'Keusahawanan dan Pendidikan Global',
        'Integriti SEGAK Mutlak',
        'PAK-21 & Sains Sukan Moden',
        'Pengurusan Acara Sukan'
      ],
      pitfalls: [
        'Tersilap moto MARA atau mencampuradukkan visi MARA dengan KPM',
        'Gagal menghubungkan peranan guru sukan dengan nilai keusahawanan dan integriti'
      ]
    },
    {
      id: 3,
      category: 'mara',
      categoryLabel: 'Falsafah, Akta & Institusi MARA',
      question: 'Apakah perbezaan ketara antara sekolah harian biasa Kementerian Pendidikan Malaysia (KPM) dengan Maktab Rendah Sains MARA (MRSM)?',
      focusArea: 'Ekosistem MRSM vs Sekolah Harian KPM',
      starAnswer: {
        situation: 'MRSM dan sekolah harian KPM sama-sama berteraskan Falsafah Pendidikan Kebangsaan, namun ekosistem pelaksanaan di MRSM mempunyai keunikan tersendiri.',
        task: 'Memahami perbezaan operasi institusi asrama penuh MARA berbanding sekolah harian biasa bagi menyesuaikan komitmen pendidik.',
        action: 'MRSM merupakan institusi berasrama penuh 100% yang menekankan pembudayaan STEM, keusahawanan, dan sahsiah 24 jam sehari. MRSM mempunyai Sistem Homeroom sebagai keluarga angkat kebajikan emosi murid, menawarkan 6 aliran program SPMRSM yang berdiferensiasi, dan menuntut guru memikul peranan menyeluruh (multi-role) sebagai pendidik, warden, penasihat homeroom, dan jurulatih kokurikulum.',
        result: 'Pembangunan holistik murid dapat dipantau sepanjang masa, menghasilkan modal insan yang bukan sahaja pintar akademik tetapi mantap sahsiah dan berdaya kepimpinan.'
      },
      keywords: [
        'Institusi Berasrama Penuh 100%',
        'Sistem Homeroom (Keluarga Angkat)',
        'Program SPMRSM Berdiferensiasi',
        'Peranan Menyeluruh (Multi-Role Pendidik)',
        'Pembudayaan STEM & Sahsiah 24 Jam',
        'Warden Pembimbing Asrama'
      ],
      pitfalls: [
        'Menganggap MRSM sama seperti sekolah berasrama biasa tanpa menyebut Sistem Homeroom',
        'Hanya fokus aspek silibus akademik tanpa menyentuh tanggungjawab 24 jam guru asrama'
      ]
    },
    {
      id: 4,
      category: 'mara',
      categoryLabel: 'Falsafah, Akta & Institusi MARA',
      question: 'Terangkan 5 aliran utama Sistem Pendidikan MRSM (SPMRSM) dan cabaran unik subjek PJPK dalam setiap aliran.',
      focusArea: '5 Aliran SPMRSM & Cabaran Diferensiasi PJPK',
      starAnswer: {
        situation: 'Sistem Pendidikan MRSM (SPMRSM) menawarkan 6 aliran terbeza mengikut kecenderungan dan potensi murid terpilih Bumiputera.',
        task: 'Menjelaskan 5 aliran utama dan merangka pendekatan PdPc PJPK yang bersesuaian dengan tuntutan kurikulum masing-masing.',
        action: '1. Premier: kurikulum KSSM diperkaya modul sahsiah MARA (cabaran: imbangi sukan prestasi tinggi dengan beban akademik); 2. Ulul Albab: integrasi tahfiz 30 juzuk (cabaran: jadual kecergasan bina stamina tanpa ganggu tasmik al-Quran); 3. IGCSE: dwi-pensijilan SPM & Cambridge (cabaran: tangani keletihan mental burnout melalui rekreasi aktif); 4. PKP Pintar Berbakat: murid Gifted & Talented (cabaran: sediakan sukan taktikal dan inkuiri kinestetik mencabar); 5. IB-MYP: berasaskan inkuiri antarabangsa (cabaran: laksana pentaksiran rubrik kriteria IBO A, B, C, D selaras DSKP).',
        result: 'Pengajaran PJPK dapat disesuaikan secara berkesan bagi memenuhi keperluan fizikal dan mental murid dalam setiap aliran SPMRSM.'
      },
      keywords: [
        'SPMRSM Premier',
        'SPMRSM Ulul Albab (Tahfiz 30 Juzuk)',
        'SPMRSM IGCSE (Cambridge)',
        'SPMRSM PKP (Pintar Berbakat / Gifted)',
        'SPMRSM IB-MYP (Inkuiri Antarabangsa)',
        'Diferensiasi PdPc PJPK',
        'Pelepasan Burnout Murid'
      ],
      pitfalls: [
        'Gagal menamakan sekurang-kurangnya 4 daripada aliran utama SPMRSM',
        'Tidak dapat menghubungkan cabaran fizikal murid aliran tahfiz Ulul Albab atau IGCSE dengan aktiviti sukan'
      ]
    },
    {
      id: 5,
      category: 'mara',
      categoryLabel: 'Falsafah, Akta & Institusi MARA',
      question: 'Siapakah pucuk pimpinan MARA dan bahagian manakah yang bertanggungjawab menguruskan MRSM?',
      focusArea: 'Hierarki Kepimpinan MARA & Bahagian Pendidikan Menengah',
      starAnswer: {
        situation: 'MARA merupakan agensi berkanun persekutuan yang mempunyai struktur tadbir urus dan kementerian pengawasan yang jelas.',
        task: 'Mengetahui hierarki kepimpinan organisasi serta bahagian yang mengawal selia sistem MRSM di seluruh negara.',
        action: 'MARA bernaung di bawah Kementerian Kemajuan Desa dan Wilayah (KKDW). Dasar organisasi ditetapkan oleh Majlis MARA yang dipengerusikan oleh Pengerusi MARA. Pentadbiran eksekutif diketuai oleh Ketua Pengarah MARA, dibantu tiga Timbalan Ketua Pengarah (Pendidikan, Keusahawanan, dan Khidmat Pengurusan). MRSM ditadbir secara langsung oleh Bahagian Pendidikan Menengah (BPM) di bawah sektor Sektor Pendidikan MARA.',
        result: 'Memastikan pemahaman tentang rantaian arahan dasar dan pekeliling perkhidmatan yang mengawal selia pengoperasian MRSM.'
      },
      keywords: [
        'KKDW (Kementerian Kemajuan Desa & Wilayah)',
        'Majlis MARA & Pengerusi MARA',
        'Ketua Pengarah MARA',
        'Timbalan Ketua Pengarah (Pendidikan)',
        'Bahagian Pendidikan Menengah (BPM)',
        'Pekeliling Perkhidmatan MARA'
      ],
      pitfalls: [
        'Menyatakan MRSM di bawah seliaan terus Kementerian Pendidikan Malaysia (KPM)',
        'Tidak mengetahui singkatan atau peranan Bahagian Pendidikan Menengah (BPM)'
      ]
    },
    {
      id: 6,
      category: 'mara',
      categoryLabel: 'Falsafah, Akta & Institusi MARA',
      question: 'Mengapa anda memilih untuk berkhidmat sebagai guru MARA berbanding menyertai KPM atau sektor swasta?',
      focusArea: 'Motivasi Berkhidmat, Roh Amanah & Jiwa Pendidik MARA',
      starAnswer: {
        situation: 'Peluang kerjaya perguruan terbuka di pelbagai sektor, namun institusi MARA mempunyai nilai perjuangan dan legasi yang istimewa.',
        task: 'Menyatakan iltizam peribadi dan falsafah profesional berkhidmat di institusi kebanggaan Bumiputera.',
        action: 'Saya memilih MARA kerana doktrin amanah pembinaan bangsa. Sebagai graduan Pendidikan Jasmani dan Kesihatan, MRSM menyediakan ekosistem terbaik untuk membina modal insan secara holistik 24 jam. Hubungan guru dan murid melangkaui bilik darjah melalui Sistem Homeroom dan warden asrama. Saya bukan sekadar mengajar kemahiran motor di padang, tetapi membentuk daya tahan mental (grit), disiplin kepimpinan, dan sahsiah bakal pemimpin negara.',
        result: 'Memberikan komitmen perkhidmatan jangka panjang yang ikhlas dan bertenaga tinggi untuk memartabatkan anak-anak bangsa di MRSM.'
      },
      keywords: [
        'Doktrin Amanah Pembinaan Bangsa',
        'Ekosistem Asrama Holistik 24 Jam',
        'Sistem Homeroom & Warden Pembimbing',
        'Daya Tahan Mental (Grit)',
        'Membentuk Pemimpin Masa Depan',
        'Komitmen Jangka Panjang'
      ],
      pitfalls: [
        'Memberi jawapan klise seperti "sebab mahu gaji tetap" atau "sukar dapat kerja lain"',
        'Tidak menunjukkan penghayatan terhadap budaya berasrama penuh dan amanah MARA'
      ]
    },
    {
      id: 7,
      category: 'mara',
      categoryLabel: 'Falsafah, Akta & Institusi MARA',
      question: 'Bagaimanakah peranan anda sebagai guru PJPK mampu menyumbang kepada lonjakan modal insan Bumiputera bernilai tinggi?',
      focusArea: 'PJPK Pemangkin Kecergasan Intelek & Ketahanan Minda',
      starAnswer: {
        situation: 'Pelajar MRSM disasarkan menjadi barisan hadapan profesional dan saintis negara, namun kecemerlangan intelek memerlukan tubuh badan yang cergas.',
        task: 'Membuktikan bahawa subjek PJPK adalah pemangkin kritikal kepada produktiviti dan ketahanan minda pelajar cemerlang.',
        action: 'Saya mempraktikkan falsafah "Mens sana in corpore sano" (otak yang cerdas dalam tubuh yang cergas). Di padang dan bilik darjah, saya membina kapasiti kardiorespiratori untuk ketahanan murid menghadapi jadual belajar padat, melatih kawalan emosi dan daya tahan bangkit semula (resilience) daripada kegagalan dalam pertandingan, serta memupuk disiplin taktikal berpasukan.',
        result: 'Melahirkan graduan MRSM yang teguh intelek, cergas fizikal, kental emosi dan tidak mudah putus asa apabila bersaing di peringkat global.'
      },
      keywords: [
        'Mens Sana In Corpore Sano',
        'Kapasiti Kardiorespiratori',
        'Daya Tahan Kegagalan (Resilience)',
        'Kawalan Emosi & Disiplin Taktikal',
        'Ketahanan Belajar (Stamina Akademik)',
        'Modal Insan Bernilai Tinggi'
      ],
      pitfalls: [
        'Menganggap PJPK sekadar subjek bermain bola di padang tanpa nilai intelek',
        'Gagal menghubungkan kecergasan kardiorespiratori dengan prestasi pembelajaran murid STEM'
      ]
    },

    // ------------------------------------------------------------------------
    // KATEGORI 2: SISTEM PENDIDIKAN MRSM & KEHIDUPAN ASRAMA (SOALAN 8 – 14)
    // ------------------------------------------------------------------------
    {
      id: 8,
      category: 'mrsm',
      categoryLabel: 'Sistem MRSM & Budaya Asrama',
      question: 'Sekiranya anda dilantik sebagai Warden Asrama di MRSM, bagaimanakah anda mengimbangi tanggungjawab akademik dan pengurusan asrama?',
      focusArea: 'Pengurusan Masa Sistematik & Kepimpinan Warden Asrama',
      starAnswer: {
        situation: 'Tugas warden asrama di MRSM melibatkan tanggungjawab kebajikan dan keselamatan pelajar 24 jam di samping tugas hakiki PdPc di bilik darjah.',
        task: 'Mengurus masa dan tenaga secara optimum agar kedua-dua amanah akademik dan pengurusan asrama diselesaikan dengan cemerlang.',
        action: 'Pertama, saya mengamalkan pengurusan masa berasaskan blok: waktu siang (8:00 pagi - 3:30 petang) difokuskan 100% kepada PdPc berkualiti, persediaan RPH dan kokurikulum; manakala waktu malam untuk rondaan asrama dan kebajikan murid. Kedua, memperkasakan Badan Wakil Pelajar (BWP) dan Ketua Bilik Asrama untuk mengurus disiplin kendiri asas. Ketiga, mengekalkan disiplin kecergasan kendiri agar stamina optimum untuk tugas malam tanpa lesu di kelas pagi.',
        result: 'Pengajaran di kelas kekal bertenaga dan berkualiti, kebajikan asrama terpelihara dengan baik, dan tiada isu kelesuan tugas (burnout).'
      },
      keywords: [
        'Pengurusan Masa Berasaskan Blok',
        'Badan Wakil Pelajar (BWP)',
        'Lembaga Disiplin Asrama & Ketua Bilik',
        'Disiplin Kecergasan & Stamina Guru',
        'Pencegahan Burnout',
        'Kebajikan Murid 24 Jam'
      ],
      pitfalls: [
        'Menyatakan rasa keberatan untuk memikul tanggungjawab warden asrama',
        'Tidak mempunyai pelan pengurusan masa yang jelas antara tugas siang dan malam'
      ]
    },
    {
      id: 9,
      category: 'mrsm',
      categoryLabel: 'Sistem MRSM & Budaya Asrama',
      question: 'MRSM terkenal dengan Sistem Homeroom. Apakah peranan Guru Homeroom dan bagaimana anda mengendalikan anak homeroom yang murung dan merosot akademiknya?',
      focusArea: 'Sistem Homeroom MRSM & Bimbingan Emosi Holistik',
      starAnswer: {
        situation: 'Sistem Homeroom merupakan teras sokongan emosi di MRSM di mana setiap guru menjadi ibu bapa angkat kepada kumpulan kecil 10 hingga 15 orang pelajar.',
        task: 'Mengenal pasti dan memulihkan anak homeroom yang mengalami kemurungan dan kejatuhan prestasi akademik.',
        action: 'Pertama, mengadakan sesi perbualan hati ke hati santai di luar kelas dalam suasana selamat tanpa menghakimi (non-judgmental). Kedua, menyiasat punca sebenar sama ada akibat masalah penyesuaian asrama (homesick), konflik rakan sebaya, atau beban akademik. Ketiga, bekerjasama dengan Unit Bimbingan & Kaunseling (UBK) dan berhubung secara berkala dengan ibu bapa kandung. Keempat, mewujudkan mentor-mentee dalam kalangan rakan homeroom yang cemerlang.',
        result: 'Murid berasa dihargai dan disokong, emosinya kembali stabil, dan prestasi akademiknya meningkat semula secara berperingkat.'
      },
      keywords: [
        'Ibu Bapa Angkat (Homeroom)',
        'Sesi Hati Ke Hati Tanpa Menghakimi',
        'Unit Bimbingan & Kaunseling (UBK)',
        'Komunikasi Berkala Ibu Bapa Kandung',
        'Sistem Sokongan Mentor-Mentee',
        'Kesejahteraan Emosi Pelajar'
      ],
      pitfalls: [
        'Menganggap peranan homeroom sekadar memeriksa rekod kedatangan atau menandatangani buku laporan',
        'Terus menghukum atau memarahi murid murung tanpa menyelidiki masalah asasnya'
      ]
    },
    {
      id: 10,
      category: 'mrsm',
      categoryLabel: 'Sistem MRSM & Budaya Asrama',
      question: 'Bagaimanakah anda menangani isu buli atau \'ragging\' di asrama MRSM melalui lensa pendidikan jasmani dan sukan?',
      focusArea: 'Polisi Sifar Buli & Penyaluran Tenaga Fizikal Remaja',
      starAnswer: {
        situation: 'Amalan buli atau kekerasan di asrama bercanggah sama sekali dengan falsafah kemanusiaan dan nilai mulia MARA.',
        task: 'Menegakkan Polisi Sifar Buli (Zero Tolerance Policy) dan memanfaatkan sukan sebagai medium pencegahan dan pembinaan sahsiah.',
        action: 'Pertama, menyalurkan hormon androgen dan tenaga fizikal remaja ke arah persaingan sihat melalui liga sukan asrama petang. Kedua, menerapkan prinsip kesukanan (sportsmanship) di padang PJ bahawa kekuatan fizikal adalah untuk melindungi pasukan dan bukannya menindas yang lemah. Ketiga, memupuk budaya "fair play" dan hormat-menghormati di gelanggang untuk diamalkan di bilik asrama. Keempat, kerap memantau kawasan titik buta (blind spots) seperti bilik basuh dan stor sukan sewaktu bertugas warden.',
        result: 'Membendung kejadian buli di asrama, mewujudkan suasana persaudaraan yang sihat, dan memastikan persekitaran maktab sentiasa selamat.'
      },
      keywords: [
        'Polisi Sifar Buli (Zero Tolerance)',
        'Penyaluran Hormon Androgen & Tenaga Remaja',
        'Semangat Kesukanan (Sportsmanship)',
        'Budaya Fair Play & Lindungi Rakan',
        'Pemantauan Titik Buta (Blind Spots)',
        'Liga Sukan Asrama Sihat'
      ],
      pitfalls: [
        'Menyokong budaya kekerasan kononnya untuk "mengajar junior berdisiplin"',
        'Gagal melihat kaitan antara aktiviti fizikal sukan dengan pelepasan tekanan emosi murid'
      ]
    },
    {
      id: 11,
      category: 'mrsm',
      categoryLabel: 'Sistem MRSM & Budaya Asrama',
      question: 'Pelajar MRSM berdepan jadual harian yang sangat padat dari jam 6:00 pagi hingga 11:00 malam. Bagaimana subjek PJPK membantu melepaskan tekanan (stress reliever) mereka?',
      focusArea: 'Fisiologi Senaman & Pelepasan Tekanan Mental Pelajar',
      starAnswer: {
        situation: 'Murid berasrama penuh di MRSM berdepan tuntutan akademik tinggi dari awal pagi hingga kelas persediaan malam (prep) yang berisiko menyebabkan keletihan mental.',
        task: 'Mereka bentuk sesi PdPc PJPK sebagai ruang rekreasi terapeutik yang membina tenaga minda tanpa menambah bebanan.',
        action: 'Dari sudut fisiologi, senaman berintensiti sederhana merangsang rembesan hormon endorfin dan dopamin yang meredakan hormon kortisol (hormon stres). Saya mengaplikasikan pedagogi "joyful learning" dan gamifikasi melalui permainan dinamik berpasukan yang penuh gelak tawa dan kerjasama, mengurangkan tekanan peperiksaan mekanikal, serta menerapkan teknik pernafasan dalam (diaphragmatic breathing) semasa penyejukan badan.',
        result: 'Murid dapat mengecas semula tenaga mental mereka, berasa segar dan ceria, serta lebih fokus untuk menelaah pelajaran pada waktu malam.'
      },
      keywords: [
        'Hormon Endorfin & Dopamin',
        'Meredakan Hormon Kortisol (Stres)',
        'Gamifikasi & Joyful Learning',
        'Rekreasi Terapeutik',
        'Pernafasan Diafragma (Cool Down)',
        'Penyegaran Semula Minda Belajar'
      ],
      pitfalls: [
        'Menjadikan kelas PJ terlalu kaku dan membebankan sehingga murid berasa lebih tertekan',
        'Gagal menerangkan mekanisme fisiologi bagaimana senaman membantu mengurangkan stres'
      ]
    },
    {
      id: 12,
      category: 'mrsm',
      categoryLabel: 'Sistem MRSM & Budaya Asrama',
      question: 'Apakah kesediaan anda sekiranya ditempatkan di MRSM luar bandar atau pedalaman seperti MRSM Semporna, MRSM Betong, atau MRSM Pengkalan Hulu?',
      focusArea: 'Mobiliti Geografi, Dedikasi Perkhidmatan & Jiwa Guru Pedalaman',
      starAnswer: {
        situation: 'MARA mempunyai 55 buah MRSM di seluruh negara termasuk di kawasan luar bandar dan pulau yang memerlukan pendidik berdedikasi tinggi.',
        task: 'Menyatakan kesediaan berkhidmat tanpa sebarang syarat demi menunaikan amanah mendidik anak bangsa.',
        action: 'Saya bersedia berkhidmat di mana-mana MRSM di seluruh pelosok tanah air dengan hati terbuka dan komitmen tidak berbelah bahagi. Bagi saya, penempatan luar bandar adalah peluang emas membuktikan kredibiliti. Anak-anak luar bandar mempunyai ketahanan fizikal dan bakat semula jadi yang sangat tinggi. Saya akan memanfaatkan sumber alam sekitar, menjalinkan hubungan erat dengan komuniti setempat, dan membina pasukan sukan berdaya saing antarabangsa.',
        result: 'Membuktikan bahawa lokasi pedalaman bukan halangan untuk melahirkan murid berprestasi tinggi dan berjiwa juara.'
      },
      keywords: [
        'Kesediaan Tanpa Syarat (Mobiliti Tinggi)',
        'Peluang Membuktikan Kredibiliti',
        'Bakat Semula Jadi & Fizikal Luar Bandar',
        'Pemanfaatan Kemudahan Alam Sekitar',
        'Hubungan Rapat Komuniti Tempatan',
        'Melahirkan Juara Dari Pedalaman'
      ],
      pitfalls: [
        'Memberi pelbagai alasan keluarga atau meminta penempatan bandar sahaja',
        'Memandang rendah keupayaan atau kemudahan MRSM di kawasan luar bandar'
      ]
    },
    {
      id: 13,
      category: 'mrsm',
      categoryLabel: 'Sistem MRSM & Budaya Asrama',
      question: 'Bagaimanakah anda merancang persediaan pasukan untuk Kejohanan Sukan MRSM Se-Malaysia (KSM)?',
      focusArea: 'Periodisasi Latihan, Sains Sukan & Pengurusan Pasukan KSM',
      starAnswer: {
        situation: 'Kejohanan Sukan MRSM (KSM) merupakan kemuncak pertandingan sukan tahunan berprestij antara maktab di seluruh Malaysia.',
        task: 'Merangka program latihan berfasa yang saintifik bagi memastikan atlet maktab mencapai kemuncak prestasi pada masa pertandingan.',
        action: 'Pertama, mengaplikasikan pelan periodisasi latihan 4 fasa: Persediaan Umum (kapasiti aerobik & kekuatan asas), Persediaan Khusus (kemahiran taktikal & posisi), Pra-Pertandingan (perlawanan persahabatan & simulasi tekanan), dan Pertandingan (kemuncak prestasi dan tapering). Kedua, bekerjasama dengan dewan selera untuk pemakanan tinggi karbohidrat kompleks dan protein. Ketiga, latihan visualisasi mental untuk kekal tenang dalam perlawanan sengit.',
        result: 'Pasukan maktab berada pada tahap kecergasan fizikal dan mental puncak, mengurangkan risiko kecederaan, dan mampu meraih kejuaraan KSM.'
      },
      keywords: [
        'Periodisasi Latihan Saintifik',
        'Fasa Persediaan Umum & Khusus',
        'Fasa Pra-Pertandingan & Tapering',
        'Sains Pemakanan & Hidrasi Dewan Selera',
        'Latihan Visualisasi & Ketahanan Mental',
        'Kejohanan Sukan MRSM (KSM)'
      ],
      pitfalls: [
        'Hanya mengadakan latihan bermain secara sambil lewa tanpa perancangan fasa periodisasi',
        'Mengabaikan aspek pemakanan asrama dan pemulihan (recovery) atlet'
      ]
    },
    {
      id: 14,
      category: 'mrsm',
      categoryLabel: 'Sistem MRSM & Budaya Asrama',
      question: 'Bagaimanakah etika berpakaian dan penampilan seorang guru PJPK di MRSM yang mencerminkan imej korporat MARA?',
      focusArea: 'Etika Pemakaian, Profesionalisme Guru & Imej Korporat MARA',
      starAnswer: {
        situation: 'Guru PJPK merupakan cerminan ketrampilan fizikal dan profesionalisme institusi di hadapan murid, ibu bapa, dan masyarakat.',
        task: 'Mematuhi Surat Pekeliling Perkhidmatan MARA mengenai etika pemakaian di padang dan dalam majlis rasmi maktab.',
        action: 'Semasa mengajar amali di padang: memakai baju-T sukan berkolar yang kemas dan dimasukkan ke dalam seluar (tuck-in), seluar trek sukan gelap sopan, kasut sukan bertali yang bersih, serta wisel bergantung rapi. Semasa mengajar teori bilik darjah atau urusan pentadbiran: memakai pakaian korporat MARA atau baju kemeja bertali leher lengkap / baju kurung formal yang melambangkan imej pendidik berwibawa.',
        result: 'Menzahirkan imej pendidik yang kemas, berwibawa, dihormati oleh pelajar, dan menjunjung maruah korporat MARA.'
      },
      keywords: [
        'Pekeliling Perkhidmatan MARA',
        'Kemeja-T Berkolar Sukan (Tuck-in)',
        'Seluar Trek Gelap & Kasut Sukan Bersih',
        'Pakaian Korporat MARA / Formal',
        'Ketrampilan Kemas & Berwibawa',
        'Teladan Ketertiban Kepada Murid'
      ],
      pitfalls: [
        'Menganggap guru sukan boleh memakai pakaian selekeh atau t-shirt bulat tanpa kolar di mana-mana sahaja',
        'Tidak mengetahui perbezaan etika pakaian waktu amali padang dan waktu rasmi bilik darjah'
      ]
    },

    // ------------------------------------------------------------------------
    // KATEGORI 3: PEDAGOGI PJPK, KESELAMATAN & KESIHATAN PELAJAR (SOALAN 15 – 21)
    // ------------------------------------------------------------------------
    {
      id: 15,
      category: 'pjpk',
      categoryLabel: 'Pedagogi PJPK & Keselamatan Murid',
      question: 'Bagaimanakah anda mengendalikan murid MRSM yang mengalami obesiti atau enggan menyertai aktiviti berpeluh di padang?',
      focusArea: 'Pedagogi Inklusif, Pembezaan PdPc & Elak Diskriminasi Obesiti',
      starAnswer: {
        situation: 'Segelintir murid asrama menghadapi masalah berat badan berlebihan dan berasa rendah diri atau malu untuk beraktiviti fizikal bersama rakan sekelas.',
        task: 'Membimbing murid obesiti secara berperingkat agar aktif bersukan tanpa mengalami trauma emosi atau kecederaan fizikal.',
        action: 'Pertama, mengelakkan sebarang celaan fizikal (no body shaming) dan memanggil murid secara peribadi untuk memahami cabaran dirinya. Kedua, melaksanakan arahan berbeza (differentiated instruction) dengan memodifikasi intensiti senaman (contoh: jalan pantas berbanding lari pecut). Ketiga, menetapkan sasaran pencapaian kecil (small wins) kendiri. Keempat, mewujudkan program bimbingan santai waktu petang bersama khidmat nasihat pemakanan dewan selera.',
        result: 'Keyakinan diri murid meningkat, timbul rasa seronok bersukan, dan berat badannya dapat dikawal secara konsisten dan sihat.'
      },
      keywords: [
        'Elak Stigma & Body Shaming',
        'Differentiated Instruction (Modifikasi Aktiviti)',
        'Pencapaian Kecil Kendiri (Small Wins)',
        'Program Fit-for-Life Santai',
        'Khidmat Nasihat Pemakanan Dewan Selera',
        'Peningkatan Keyakinan Diri'
      ],
      pitfalls: [
        'Memalukan atau mendenda murid obes di hadapan rakan sekelas kononnya untuk memotivasikannya',
        'Memaksa intensiti senaman melampau yang boleh membahayakan sistem kardiovaskular murid'
      ]
    },
    {
      id: 16,
      category: 'pjpk',
      categoryLabel: 'Pedagogi PJPK & Keselamatan Murid',
      question: 'Seorang pelajar rebah dan tidak sedarkan diri semasa anda mengendalikan Ujian Bleep Test di gelanggang. Apakah tindakan pantas kecemasan anda langkah demi langkah?',
      focusArea: 'SOP Kecemasan D.R.C.A.B, CPR, AED & Protokol Bantuan Pantas',
      starAnswer: {
        situation: 'Semasa ujian larian ulang-alik intensiti tinggi Bleep Test, seorang murid tiba-tiba rebah dan tidak memberi sebarang respons di atas gelanggang.',
        task: 'Melaksanakan protokol kecemasan menyelamatkan nyawa mengikut SOP perubatan D.R.C.A.B secara pantas, tenang, dan tepat.',
        action: '1. Tiup wisel serta-merta untuk hentikan ujian dan arahkan murid lain berundur bagi ruang pengudaraan. 2. D (Danger): Pastikan persekitaran selamat. 3. R (Response): Tepuk bahu dan panggil nama murid untuk sahkan tahap kesedaran. 4. Jerit minta bantuan guru lain menghubungi ambulans 999 dan Pusat Kesihatan Maktab serta bawa peranti AED. 5. C (Circulation): Periksa nadi karotid dan pernafasan < 10 saat. Jika tiada nadi dan nafas, mulakan CPR serta-merta (30 mampatan dada : 2 hembusan). Jika bernafas, baringkan dalam posisi pemulihan (recovery position), tinggikan kaki dan longgarkan pakaian. 6. Dokumentasikan insiden dan hubungi waris secara telus.',
        result: 'Tindakan resusitasi pantas menyelamatkan nyawa murid daripada hipoksia otak, bantuan perubatan tiba tepat pada masanya, dan laporan rasmi disediakan.'
      },
      keywords: [
        'Hentikan Ujian Serta-Merta',
        'Protokol DRCAB',
        'Panggil Bantuan Ambulans 999 & AED Maktab',
        'Resusitasi CPR (30 Mampatan : 2 Hembusan)',
        'Posisi Pemulihan (Recovery Position)',
        'Dokumentasi Bertulis & Komunikasi Waris'
      ],
      pitfalls: [
        'Panik atau meninggalkan mangsa sendirian untuk mencari pertolongan',
        'Tidak memeriksa nadi/pernafasan sebelum memulakan tindakan rawatan'
      ]
    },
    {
      id: 17,
      category: 'pjpk',
      categoryLabel: 'Pedagogi PJPK & Keselamatan Murid',
      question: 'Bagaimanakah anda memastikan liabiliti undang-undang (Duty of Care) sentiasa dipatuhi semasa kelas Pendidikan Jasmani di padang dan bilik gimnasium?',
      focusArea: 'Liabiliti Undang-Undang Guru, Doktrin In Loco Parentis & Audit Keselamatan',
      starAnswer: {
        situation: 'Guru memegang tanggungjawab undang-undang di bawah doktrin In Loco Parentis (menggantikan peranan ibu bapa) untuk melindungi murid daripada bahaya yang boleh dijangka (foreseeable harm).',
        task: 'Melaksanakan amalan keselamatan proaktif agar prinsip Duty of Care sentiasa dipenuhi 100% tanpa sebarang kecuaian.',
        action: 'Pertama, melakukan audit pra-kelas (pre-lesson audit) terhadap padang dan alatan sukan: memastikan tiang gol berpasak kukuh dan tiada objek tajam/lubang berbahaya. Kedua, menyemak status kesihatan murid melalui borang PAR-Q dan pengisytiharan kesihatan harian. Ketiga, memastikan pengawasan berterusan (constant supervision) tanpa sesekali meninggalkan murid sendirian di padang/gimnasium. Keempat, memastikan stor sukan sentiasa berkunci rapi.',
        result: 'Risiko kemalangan dapat diminimumkan ke tahap sifar, hak keselamatan murid terjamin, dan guru terlindung daripada liabiliti undang-undang tort kecuaian.'
      },
      keywords: [
        'Duty of Care (Tanggungjawab Mengambil Berat)',
        'In Loco Parentis (Pengganti Ibu Bapa)',
        'Foreseeable Harm (Bahaya Boleh Dijangka)',
        'Audit Pra-Kelas (Tiang Gol Berpasak Kukuh)',
        'Borang Kesihatan PAR-Q',
        'Pengawasan Berterusan (Constant Supervision)',
        'Stor Sukan Berkunci Rapi'
      ],
      pitfalls: [
        'Meninggalkan kelas padang tanpa pengawasan untuk urusan peribadi di bilik guru',
        'Mengabaikan pemeriksaan tiang gol atau alatan sukan yang berkarat/rosak'
      ]
    },
    {
      id: 18,
      category: 'pjpk',
      categoryLabel: 'Pedagogi PJPK & Keselamatan Murid',
      question: 'Jelaskan bagaimana anda melaksanakan Pentaksiran Bilik Darjah (PBD) bagi subjek PJPK tanpa mendiskriminasi murid yang kurang berkemahiran motor semulajadi?',
      focusArea: 'PBD Holistik 3 Domain (Psikomotor, Kognitif, Afektif) & Ansur Maju',
      starAnswer: {
        situation: 'Setiap murid mempunyai tahap koordinasi motor semulajadi yang berbeza, namun DSKP KSSM PJPK menuntut pentaksiran yang adil dan menyeluruh.',
        task: 'Menilai murid secara holistik merangkumi domain psikomotor, kognitif, dan afektif agar tiada murid tercicir semata-mata kerana kurang berbakat dalam sukan.',
        action: 'PBD tidak dinilai semata-mata berasaskan siapa paling mahir menjaringkan gol. Saya mentaksir berdasarkan: 1. Psikomotor: penguasaan teknik lakuan asas dan ansur maju peningkatan kendiri; 2. Kognitif: kefahaman taktikal dan konsep saintifik yang dijelaskan secara lisan atau lembaran kerja; 3. Afektif (Standard 5.0): komitmen, semangat kerjasama, daya kepimpinan, dan pematuhan etika keselamatan. Murid yang kurang mahir motor tetapi berdisiplin tinggi dan memahami konsep tetap berhak mendapat Tahap Penguasaan tinggi (TP4/TP5).',
        result: 'Murid kekal bermotivasi untuk belajar, pentaksiran menepati standard DSKP KPM, dan penilaian berlaku secara telus serta adil.'
      },
      keywords: [
        'Pentaksiran Holistik Formatif (PBD)',
        'Tiga Domain (Psikomotor, Kognitif, Afektif)',
        'Standard 5.0 Sahsiah & Keselamatan',
        'Ansur Maju Peningkatan Kendiri',
        'Tahap Penguasaan (TP1 hingga TP6)',
        'Tiada Diskriminasi Bakat Motor Semulajadi'
      ],
      pitfalls: [
        'Memberi markah rendah kepada murid semata-mata kerana tidak pandai bermain bola sepak',
        'Mengabaikan penilaian domain afektif dan kognitif dalam DSKP PJPK'
      ]
    },
    {
      id: 19,
      category: 'pjpk',
      categoryLabel: 'Pedagogi PJPK & Keselamatan Murid',
      question: 'Bagaimanakah data Ujian SEGAK dianalisis dan apakah pelan intervensi anda jika mendapati lebih 25% murid MRSM berlebihan berat badan (overweight)?',
      focusArea: 'Analisis Pangkalan Data SEGAK KPM & Pelan Intervensi 3 Penjuru',
      starAnswer: {
        situation: 'Dapatan Ujian SEGAK penggal pertama menunjukkan 25% murid maktab berada dalam kategori berat badan berlebihan dan berisiko obesiti.',
        task: 'Menganalisis data ujian secara terperinci dan merangka pelan intervensi bersepadu di peringkat maktab.',
        action: 'Pertama, menganalisis data SEGAK mengikut tingkatan dan jantina untuk mengenal pasti kumpulan sasaran kritikal. Kedua, melancarkan Pelan Intervensi 3 Penjuru: 1. Penjuru Pemakanan: bekerjasama dengan pengurusan dewan selera untuk menambah menu sayur, buah dan air kosong serta mengurangkan makanan berminyak; 2. Penjuru Fizikal: menubuhkan kelab riadah "Smart Fitness" petang dengan aktiviti kardio aerobik dan brisk walking santai; 3. Penjuru Pendidikan: mengadakan kempen literasi nutrisi dan kiraan kalori.',
        result: 'Peratusan murid berlebihan berat badan menurun kepada bawah 15% pada ujian SEGAK kedua, stamina murid meningkat, dan budaya sihat subur di maktab.'
      },
      keywords: [
        'Pangkalan Data SEGAK KPM',
        'Analisis Taburan Tingkatan & Jantina',
        'Pelan Intervensi 3 Penjuru',
        'Modifikasi Menu Dewan Selera',
        'Kelab Smart Fitness & Brisk Walking',
        'Literasi Nutrisi & Kiraan Kalori'
      ],
      pitfalls: [
        'Hanya merekod data SEGAK tanpa mengambil sebarang tindakan intervensi susulan',
        'Menyalahkan murid atau pengusaha dewan selera tanpa membina penyelesaian kolaboratif'
      ]
    },
    {
      id: 20,
      category: 'pjpk',
      categoryLabel: 'Pedagogi PJPK & Keselamatan Murid',
      question: 'Bagaimanakah anda menerapkan elemen KBAT (Kemahiran Berfikir Aras Tinggi) dalam mata pelajaran Pendidikan Jasmani yang lazimnya bersifat fizikal?',
      focusArea: 'KBAT Pedagogi, TGfU (Teaching Games for Understanding) & Analisis Taktikal',
      starAnswer: {
        situation: 'Pendidikan Jasmani sering dianggap sekadar aktiviti pergerakan otot fizikal tanpa melibatkan pemikiran kognitif mendalam.',
        task: 'Mengintegrasikan Kemahiran Berfikir Aras Tinggi (KBAT) ke dalam PdPc sukan berasaskan penyelesaian masalah kinestetik.',
        action: 'Saya mengaplikasikan Pendekatan Permainan Bersyarat (TGfU - Teaching Games for Understanding) berbanding latih tubi mekanikal semata-mata. Saya melontarkan soalan inkuiri berimpak tinggi seperti: "Mengapa hantaran leret lebih selamat berbanding hantaran lambung apabila ditekan pertahanan tinggi?" atau "Bagaimana mencipta ruang kosong apabila pihak lawan bertahan secara zon ketat?". Murid diminta berbincang merangka strategi formasi pasukan dan menganalisis rakaman video simulasi.',
        result: 'Murid berfikir secara saintifik dan taktikal di atas padang, meningkatkan keupayaan membuat keputusan pantas di bawah tekanan.'
      },
      keywords: [
        'TGfU (Teaching Games for Understanding)',
        'Soalan Inkuiri Aras Tinggi (KBAT)',
        'Penyelesaian Masalah Kinestetik',
        'Penciptaan Ruang & Analisis Taktikal',
        'Membuat Keputusan Pantas (Fast Decision Making)',
        'Analisis Video Perlawanan'
      ],
      pitfalls: [
        'Hanya menjalankan latih tubi ulangan tanpa memberi peluang murid berfikir atau membuat strategi',
        'Gagal memberi contoh soalan KBAT yang relevan dalam konteks situasi permainan sukan'
      ]
    },
    {
      id: 21,
      category: 'pjpk',
      categoryLabel: 'Pedagogi PJPK & Keselamatan Murid',
      question: 'Apakah strategi anda mengajar komponen Pendidikan Kesihatan Reproduktif dan Sosial (PEERS) bagi murid remaja MRSM agar tidak timbul rasa malu dan matlamat DSKP tercapai?',
      focusArea: 'Pedagogi PEERS, Pendidikan Seksualiti Saintifik & Batasan Pergaulan',
      starAnswer: {
        situation: 'Topik pendidikan reproduktif dan seksualiti sering dianggap sensitif dan tabu oleh remaja asrama sehingga mereka berasa segan untuk bertanya.',
        task: 'Menyampaikan modul PEERS secara ilmiah, beretika, selaras syariat Islam, dan mencapai standard pembelajaran DSKP tanpa kekok.',
        action: 'Pertama, menetapkan kerangka awal bahawa topik dipelajari secara profesional melalui kanta anatomi sains biologi, undang-undang perlindungan kanak-kanak, dan batas agama. Kedua, mengadakan pemisahan sesi mengikut jantina bagi topik sensitif tertentu. Ketiga, menyediakan Kotak Soalan Tanpa Nama (Anonymous Question Box) fizikal dan borang digital agar murid boleh bertanya kekeliruan mereka dengan yakin. Keempat, mengaitkan tingkah laku seksual berisiko dengan kesan ke atas masa depan dan maruah keluarga.',
        result: 'Murid memperoleh literasi kesihatan reproduktif yang sahih daripada guru bertauliah, membina benteng jati diri menolak gangguan seksual, dan bebas salah maklumat internet.'
      },
      keywords: [
        'Pendekatan Saintifik & Anatomi Biologi',
        'Pemisahan Sesi Mengikut Jantina',
        'Kotak Soalan Tanpa Nama (Anonymous Box)',
        'Kerangka Syariat & Nilai Akhlak Islam',
        'Literasi Kesihatan Reproduktif (PEERS)',
        'Pencegahan Salah Laku Seksual'
      ],
      pitfalls: [
        'Bercakap sambil bergelak ketawa secara lucah atau tidak profesional sehingga murid hilang rasa hormat',
        'Mengelak daripada mengajar topik reproduktif semata-mata kerana berasa malu atau kekok'
      ]
    },

    // ------------------------------------------------------------------------
    // KATEGORI 4: SOALAN SITUASI, KRISIS & INTEGRITI FORMAT S.T.A.R (SOALAN 22 – 28)
    // ------------------------------------------------------------------------
    {
      id: 22,
      category: 'star',
      categoryLabel: 'Situasi, Integriti & Krisis (STAR)',
      question: '(STAR) Anda diminta melatih pasukan bola sepak maktab untuk kejohanan KSM minggu depan, tetapi pada masa sama anda perlu menghantar laporan SEGAK ke BPM dan bertugas sebagai Warden Asrama. Bagaimanakah anda menguruskannya?',
      focusArea: 'Pengurusan Masa Pelbagai Tugas (Multitasking) & Keutamaan Kritikal',
      starAnswer: {
        situation: 'Saya menghadapi situasi pertembungan tiga komitmen besar serentak: Kejohanan Sukan MRSM (KSM) berbaki 7 hari, tarikh akhir penghantaran data SEGAK maktab ke Bahagian Pendidikan Menengah (BPM), dan giliran bertugas warden asrama.',
        task: 'Tanggungjawab saya adalah memastikan ketiga-tiga amanah diselesaikan dengan cemerlang tanpa menjejaskan kualiti mana-mana tugas atau mengabaikan kesihatan diri.',
        action: '1. Menggunakan Matriks Eisenhower menyusun keutamaan kecemasan dan kepentingan. 2. Mengehadkan latihan taktikal bola sepak kepada 90 minit intensif petang dan melantik kapten pasukan memimpin pemanasan badan serta penyejukan secara berdisiplin. 3. Memanfaatkan hamparan digital dan membahagikan tugas verifikasi skor SEGAK bersama guru panitia PJPK lain secara adil untuk diselesaikan waktu pagi. 4. Memanfaatkan waktu senyap asrama (selepas roll-call 11:00 malam) untuk menyemak draf akhir laporan SEGAK sebelum dihantar ke BPM.',
        result: 'Laporan SEGAK berjaya dihantar ke BPM 24 jam sebelum tarikh tutup, pasukan mara ke separuh akhir KSM, dan disiplin blok asrama kekal terkawal tanpa sebarang insiden.'
      },
      keywords: [
        'Matriks Eisenhower (Keutamaan Tugas)',
        'Delegasi Berintegriti & Kerjasama Panitia',
        'Latihan Berstruktur & Pengupayaan Kapten',
        'Automasi Hamparan Data SEGAK',
        'Disiplin Bertugas Warden Asrama',
        'Penyelesaian Sebelum Tarikh Tutup'
      ],
      pitfalls: [
        'Menyatakan mahu melepaskan salah satu tugas atau mengeluh tentang beban kerja banyak',
        'Tidak mempunyai strategi pembahagian masa yang konkrit dan realistik'
      ]
    },
    {
      id: 23,
      category: 'star',
      categoryLabel: 'Situasi, Integriti & Krisis (STAR)',
      question: '(STAR) Anda mendapati seorang guru senior meminjam alatan sukan maktab yang mahal untuk kegunaan kelab persendiriannya di luar tanpa rekod rasmi. Apakah tindakan anda?',
      focusArea: 'Integriti Aset Awam Kerajaan, Tatacara Stor & Komunikasi Profesional',
      starAnswer: {
        situation: 'Saya mendapati beberapa set raket dan jersi maktab berjenama tiada di stor sukan, dan mengetahui ia dibawa keluar oleh seorang rakan guru yang lebih senior untuk kegunaan kelab peribadinya di luar tanpa rekod buku log pinjaman rasmi.',
        task: 'Sebagai pegawai yang diamanahkan menjaga aset kerajaan di bawah Tatacara Pengurusan Stor MARA, saya wajib memelihara integriti harta awam tanpa mencetuskan konflik peribadi.',
        action: '1. Mendekati guru senior tersebut secara berhemah dalam sesi perbualan empat mata secara peribadi (private conversation). 2. Menyatakan secara sopan bahawa saya sedang mengemaskini audit stok inventori bulanan untuk dilaporkan kepada Penolong Kanan Kokurikulum dan meminta bantuannya melengkapkan borang permohonan pinjaman rasmi. 3. Menerangkan implikasi liabiliti dan peraturan pekeliling sekiranya berlaku kerosakan aset kerajaan. 4. Sekiranya beliau enggan bekerjasama, saya akan mencatat ketidaksesuaian stok dalam laporan audit dalaman dan merujuk secara rasmi kepada Pengetua mengikut saluran tatatertib.',
        result: 'Guru senior tersebut memahami tugas amanah saya, memulangkan alatan dalam keadaan baik, dan prosedur log pergerakan alatan stor sukan maktab berjaya diperketatkan secara telus.'
      },
      keywords: [
        'Tatacara Pengurusan Stor MARA',
        'Integriti Aset Awam Kerajaan',
        'Perbincangan Empat Mata (Berhemah & Profesional)',
        'Buku Log Pinjaman Rasmi',
        'Audit Inventori Berkala',
        'Saluran Tatatertib Berperingkat'
      ],
      pitfalls: [
        'Membiarkan perkara tersebut berlaku semata-mata kerana takut kepada guru senior',
        'Bertindak secara emosi dengan memviralkan atau menyerang guru senior secara terbuka di bilik guru'
      ]
    },
    {
      id: 24,
      category: 'star',
      categoryLabel: 'Situasi, Integriti & Krisis (STAR)',
      question: '(STAR) Ibu bapa pelajar mendatangi maktab dan memarahi anda kerana anaknya didenda berlari pusing padang semasa kelas PJ sehingga rebah kepenatan. Bagaimanakah anda menyelesaikan krisis ini?',
      focusArea: 'Pengurusan Krisis Ibu Bapa, Dokumentasi RPH & Komunikasi Empati',
      starAnswer: {
        situation: 'Sepasang ibu bapa hadir ke pejabat pentadbiran maktab dalam keadaan marah dan menuduh saya mendera fizikal anak mereka kerana menyuruhnya berlari di padang sehingga keletihan.',
        task: 'Meredakan ketegangan, menjelaskan fakta sebenar berdasarkan kurikulum, menjaga reputasi maktab, dan memastikan kebajikan murid terjamin.',
        action: '1. Menjemput ibu bapa ke bilik rundingan yang selesa, menawarkan minuman, dan mendengar luahan mereka dengan sabar serta empati tanpa mencelah (active listening). 2. Menunjukkan dokumen RPH rasmi yang disahkan pentadbir, menerangkan bahawa aktiviti larian tersebut bukan dendaan disiplin sebaliknya sebahagian daripada Ujian Standard SEGAK (ujian daya tahan kardiorespiratori) yang diwajibkan oleh KPM dan MARA. 3. Menerangkan bahawa anak mereka telah direhatkan di bawah khemah serta diberikan air glukosa mengikut SOP keselamatan sebaik sahaja menunjukkan tanda penat. 4. Menawarkan kerjasama dengan Pusat Kesihatan Maktab untuk pemeriksaan tahap kecergasan murid.',
        result: 'Kemarahan ibu bapa reda setelah memahami situasi sebenar. Mereka memohon maaf atas salah faham dan berterima kasih atas pemantauan rapi pihak maktab.'
      },
      keywords: [
        'Mendengar Aktif (Active Listening & Empathy)',
        'Dokumen RPH Rasmi & Standard SEGAK KPM',
        'Bukan Dendaan Disiplin (Penerangan Fakta)',
        'SOP Keselamatan & Rehat Hidrasi Air Glukosa',
        'Penyelesaian Menang-Menang (Win-Win)',
        'Mengekalkan Hubungan Baik Maktab-Ibu Bapa'
      ],
      pitfalls: [
        'Membalas kemarahan ibu bapa atau bertengkar di ruang lobi pejabat maktab',
        'Tiada bukti dokumentasi RPH untuk menyokong aktiviti yang telah dijalankan di padang'
      ]
    },
    {
      id: 25,
      category: 'star',
      categoryLabel: 'Situasi, Integriti & Krisis (STAR)',
      question: '(STAR) Dua orang pelajar asrama bertumbuk di padang semasa perlawanan futsal yang sengit kerana salah seorang melakukan terjahan keras (hard tackle). Apakah tindakan anda?',
      focusArea: 'Pengurusan Krisis Padang, De-Eskalasi Konflik, Pertolongan Cemas & Mediasi',
      starAnswer: {
        situation: 'Dalam satu perlawanan futsal antara dormitori asrama yang saya adili, satu terjahan keras telah mencetuskan pergaduhan fizikal antara dua orang murid di atas gelanggang.',
        task: 'Meleraikan pergaduhan serta-merta, mencegah kecederaan fizikal lanjutan, mengembalikan kawalan gelanggang, dan menyiasat salah laku secara adil.',
        action: '1. Meniup wisel isyarat panjang berulang kali dengan tegas, melangkah masuk ke tengah gelanggang, dan mengarahkan kedua-dua murid dipisahkan serta duduk di zon berasingan dengan jarak 15 meter. 2. Mengarahkan semua pemain lain berkumpul dan duduk dengan tenang tanpa membuat sebarang provokasi sorakan. 3. Memeriksa kecederaan kedua-dua murid serta memberi rawatan awal ais (P.R.I.C.E) pada bahagian lebam. 4. Selepas emosi reda, memanggil mereka ke bilik pengadil untuk membimbing kesedaran diri, meminta mereka bersalaman dan bermaafan. 5. Melaporkan insiden secara rasmi kepada Guru Disiplin dan Warden Asrama untuk rekod pembentukan sahsiah.',
        result: 'Perlawanan dapat diteruskan semula dalam suasana tenang dan berdisiplin tinggi. Kedua-dua murid insaf akan kesilapan mereka dan hubungan mereka kembali pulih tanpa dendam.'
      },
      keywords: [
        'Wisel Isyarat Panjang & Kawalan Gelanggang',
        'Pemisahan Fizikal Pantas (Jarak Zon 15 Meter)',
        'De-eskalasi Emosi (Menenangkan Suasana)',
        'Pemeriksaan Kecederaan Rawatan Ais (P.R.I.C.E)',
        'Sesi Mediasi & Salaman Bermaafan',
        'Laporan Disiplin & Sahsiah Warden'
      ],
      pitfalls: [
        'Hanya melihat dan membiarkan pergaduhan berlarutan sehingga berlaku kecederaan parah',
        'Menghukum secara berat sebelah di hadapan orang ramai tanpa mendengar penjelasan kedua-dua pihak'
      ]
    },
    {
      id: 26,
      category: 'star',
      categoryLabel: 'Situasi, Integriti & Krisis (STAR)',
      question: '(STAR) Anda dijadualkan mengajar kelas amali PJ di padang, tetapi tiba-tiba hujan ribut melanda dan dewan serbaguna sedang digunakan untuk majlis rasmi. Apakah pelan kontingensi anda?',
      focusArea: 'Pelan Kontingensi Cuaca (Rainy Day Lesson Plan) & Kreativiti Pedagogi',
      starAnswer: {
        situation: 'Cuaca hujan lebat dan petir ribut secara tiba-tiba menghalang kelas amali PJ di padang terbuka, manakala ruang dewan serbaguna maktab sedang digunakan sepenuhnya untuk raptai majlis rasmi.',
        task: 'Memastikan 40 orang murid tetap melalui waktu pembelajaran yang berfaedah, selamat daripada bahaya petir, dan tidak membuang masa di koridor secara pasif.',
        action: '1. Mengaktifkan Pelan Kontingensi Hujan (Rainy Day Lesson Plan) dengan membawa murid ke bilik seminar/makmal komputer maktab yang telah saya rancang sebagai sandaran. 2. Menukar fokus amali padang kepada teori Pendidikan Kesihatan (PEERS) atau analisis taktikal video perlawanan sukan menggunakan skrin interaktif. 3. Melaksanakan aktiviti kinestetik ruang terhad seperti senaman regangan mobiliti dan kalistenik ringan meja (desk-ercise) untuk memenuhi sebahagian objektif psikomotor ringan.',
        result: 'Masa pembelajaran murid dimanfaatkan 100%, keselamatan murid terjamin daripada ribut dan petir, serta silibus teori DSKP diselesaikan lebih awal daripada jadual.'
      },
      keywords: [
        'Pelan Kontingensi Hujan (Rainy Day Lesson Plan)',
        'Peralihan ke Bilik Seminar / Makmal Komputer',
        'Keselamatan Bahaya Petir & Ribut',
        'Teori PEERS & Analisis Video Taktikal',
        'Desk-ercise & Regangan Mobiliti Ruang Terhad',
        'Pengurusan Masa PdPc Optimum'
      ],
      pitfalls: [
        'Melepaskan murid balik ke asrama atau membiarkan mereka melepak di koridor tanpa aktiviti berfaedah',
        'Memaksa murid terus beraktiviti di padang dalam cuaca hujan berpetir yang mengancam nyawa'
      ]
    },
    {
      id: 27,
      category: 'star',
      categoryLabel: 'Situasi, Integriti & Krisis (STAR)',
      question: '(STAR) Anda mendapati seorang murid memalsukan tandatangan surat kebenaran sakit (Time-slip / MC) klinik semata-mata untuk mengelak daripada mengambil Ujian SEGAK. Bagaimanakah anda bertindak?',
      focusArea: 'Integriti Dokumen Rasmi, Siasatan Empati & Bimbingan Sahsiah Asrama',
      starAnswer: {
        situation: 'Seorang murid menyerahkan slip pengecualian aktiviti fizikal yang meragukan daripada klinik luar bagi mengelak daripada menduduki Ujian SEGAK.',
        task: 'Mengesahkan ketulenan dokumen, menegakkan integriti dan undang-undang perkhidmatan awam, serta membimbing sahsiah murid tanpa merosakkan masa depannya.',
        action: '1. Membuat verifikasi rahsia secara profesional dengan menghubungi pihak klinik dan mendapati tiada rekod rawatan pada tarikh berkenaan. 2. Memanggil murid tersebut secara berseorangan ke bilik bimbingan untuk sesi empat mata. Menunjukkan bukti yang ada secara tenang tanpa menuduh kasar, dan bertanya sebab sebenar perbuatannya. 3. Mengenal pasti punca ketakutan bahawa murid berasa rendah diri dan takut diejek rakan kerana tidak mampu melakukan tekan tubi. 4. Memberi amaran keras bertulis tentang kesalahan memalsukan dokumen, memaklumkan kepada Kaunselor dan ibu bapanya, tetapi memberi jaminan sokongan bahawa saya akan melatihnya secara peribadi sehingga yakin.',
        result: 'Murid insaf dan berjanji tidak mengulangi perbuatannya. Selepas 2 minggu bimbingan ansur maju secara tertutup, murid berjaya menduduki SEGAK dengan penuh keyakinan dan memperoleh markah yang membanggakan.'
      },
      keywords: [
        'Verifikasi Profesional Pihak Klinik',
        'Bimbingan Empati Empat Mata',
        'Mengenal Pasti Ketakutan Asas Rendah Diri',
        'Tegakkan Integriti Mutlak Dokumen Awam',
        'Latihan Ansur Maju Tertutup',
        'Kerjasama Guru Kaunseling & Ibu Bapa'
      ],
      pitfalls: [
        'Memalukan murid di hadapan perhimpunan maktab atas pemalsuan tersebut',
        'Mengabaikan pemalsuan tersebut kononnya tidak mahu menyusahkan diri menyiasat'
      ]
    },
    {
      id: 28,
      category: 'star',
      categoryLabel: 'Situasi, Integriti & Krisis (STAR)',
      question: '(STAR) Kongsikan kejayaan terbesar anda dalam menganjurkan program kecergasan atau sukan yang memberi impak mendalam kepada komuniti sekolah/institusi anda sebelum ini.',
      focusArea: 'Kepimpinan Acara Sukan Komuniti, Penglibatan Menyeluruh & Impak Terukur',
      starAnswer: {
        situation: 'Di institusi terdahulu, saya mendapati lebih 40% pelajar menghabiskan masa lapang hujung minggu dengan bermain peranti elektronik secara pasif (sedentary lifestyle), mengakibatkan tahap kecergasan kardiorespiratori keseluruhan merosot.',
        task: 'Sebagai ketua projek, saya bertanggungjawab merangka dan melaksanakan satu inisiatif kecergasan berimpak tinggi yang mampu menarik penyertaan sukarela seluruh warga institusi.',
        action: '1. Mengasaskan program "Cabaran 10,000 Langkah & Larian Halangan Komuniti" (Community Obstacle FitFest). 2. Mengintegrasikan elemen gamifikasi di mana setiap blok bilik bersaing mengumpul kilometer larian menggunakan jam pintar atau aplikasi kecergasan. 3. Mereka bentuk stesen cabaran fungsian yang menyeronokkan seperti merangkak di bawah jaring, tayar gergasi, dan lontaran bola berpasukan. 4. Menjemput penceramah nutrisi sukan dan menyediakan pingat serta sijil penghargaan kepada dormitori paling aktif.',
        result: 'Program mencatatkan 95% kadar penyertaan murid dan kakitangan, purata skor ujian daya tahan kardiorespiratori meningkat 18% dalam ujian pos, dan budaya berjoging petang menjadi amalan harian komuniti tersebut.'
      },
      keywords: [
        'Cabaran 10,000 Langkah & Larian Halangan (FitFest)',
        'Gamifikasi & Persaingan Sihat Antara Blok',
        'Peningkatan 18% Skor Kardiorespiratori Terukur',
        '95% Kadar Penyertaan Warga Institusi',
        'Mengubah Amalan Gaya Hidup Sedentari',
        'Kepimpinan Projek & Kerjasama Pasukan'
      ],
      pitfalls: [
        'Menceritakan program sukan tanpa menyatakan hasil atau impak yang boleh diukur (no measurable result)',
        'Hanya menekankan peranan diri sendiri tanpa mengiktiraf pembudayaan komuniti yang mampan'
      ]
    },
    // ------------------------------------------------------------------------
    // KATEGORI 5: SPOT EMAS PANEL, KEUSAHAWANAN & SOALAN BAHASA INGGERIS (SOALAN 29 – 35)
    // ------------------------------------------------------------------------
    {
      id: 29,
      category: 'spot',
      categoryLabel: 'Spot Emas & Bahasa Inggeris',
      question: '(Bahasa Inggeris) "Why should MARA hire you as a Physical Education teacher instead of other candidates, and how does Physical Education support students aiming for Ivy League and top global universities?"',
      focusArea: 'Bilingual Proficiency, Global Mindset & Holistic Student Excellence',
      starAnswer: {
        situation: 'Top MRSM students aspire to gain admission into Ivy League, Russell Group, and world-class universities where admission officers evaluate holistic character beyond straight A results.',
        task: 'To prove to the panel that as a PE educator, I possess the vision and bilingual capability to build students leadership, grit, and unique athletic portfolio for top-tier international scholarships.',
        action: '1. In English-medium environments (especially for MRSM IGCSE and IB-MYP programs), I cultivate mental resilience, tactical strategic thinking, and emotional regulation under pressure. 2. I guide students to document their sports leadership roles, sports science research projects, and community fitness initiatives for their personal statements and admission interviews. 3. I demonstrate that physical endurance directly boosts cognitive stamina during long study hours.',
        result: 'Producing charismatic MARA scholars who not only ace global examinations but also demonstrate robust health, executive leadership, and confidence on the international stage.'
      },
      keywords: [
        'Holistic Character Beyond Straight A\'s',
        'Ivy League & Top University Profile',
        'Cognitive Stamina & Brain Plasticity',
        'Sports Leadership Portfolio',
        'Bilingual Communication Proficiency',
        'Global Mindset & Mental Resilience'
      ],
      pitfalls: [
        'Gagap atau menolak menjawab dalam Bahasa Inggeris apabila disoal panel',
        'Menganggap subjek PJ sekadar berseronok di padang tanpa nilai tambah akademik global'
      ]
    },
    {
      id: 30,
      category: 'spot',
      categoryLabel: 'Spot Emas & Bahasa Inggeris',
      question: '(Bahasa Inggeris) "How do you cultivate sportsmanship and eradicate toxic seniority or bullying culture among boarding school students through sports?"',
      focusArea: 'Sports Ethics, Anti-Bullying Culture & Positive Seniority',
      starAnswer: {
        situation: 'In full boarding schools, intense hostel sports rivalries can sometimes breed toxic seniority, intimidation, or informal bullying if not vigilantly managed by sports teachers.',
        task: 'To strictly enforce MARA\'s zero-tolerance \'You Touch, You Go\' anti-bullying policy and turn the sports field into a safe sanctuary of mutual respect and camaraderie.',
        action: '1. I establish unequivocal field rules: on the pitch, seniority carries zero privileges; respect is earned purely through discipline and sportsmanship. 2. I implement a cross-batch buddy system where Form 4 and Form 5 seniors mentor Form 1 and Form 2 juniors in athletic skills rather than dominating them. 3. During post-match debriefings, I openly applaud fair play and immediately intervene at the slightest sign of unsporting taunts, ensuring that the locker room remains safe and respectful.',
        result: 'Cultivating a healthy maktab brotherhood and sisterhood anchored in shared athletic dedication, empathy, and absolute eradication of bullying behavior.'
      },
      keywords: [
        'Zero-Tolerance \'You Touch, You Go\'',
        'Fair Play & Mutual Respect',
        'Cross-Batch Mentorship (Senior-Junior Buddy)',
        'Eradicating Toxic Seniority & Initiation',
        'Safe Maktab & Locker Room Environment'
      ],
      pitfalls: [
        'Menyokong atau membiarkan budaya buli/ragging atas alasan "tradisi senioriti asrama"',
        'Gagal menekankan dasar rasmi MARA \'You Touch, You Go\''
      ]
    },
    {
      id: 31,
      category: 'spot',
      categoryLabel: 'Spot Emas & Bahasa Inggeris',
      question: '(Elevator Pitch 60 Saat) "Sila perkenalkan diri anda dalam masa 60 saat dan yakinkan panel mengapakah anda aset bernilai tinggi untuk dilantik sebagai Pegawai Perkhidmatan Pendidikan MARA DG9."',
      focusArea: 'Pengenalan Diri Berimpak Tinggi, USP Calon & Komitmen 24 Jam',
      starAnswer: {
        situation: 'Panel penilai mendengar puluhan calon setiap hari; pengenalan diri yang berjela-jela menceritakan latar belakang sekolah rendah akan membosankan panel.',
        task: 'Menyampaikan identiti profesional, kelayakan teras, kepakaran sukan spesifik, dan nilai tambah yang boleh disumbangkan kepada MRSM secara padat, yakin, dan bertenaga.',
        action: 'Assalamualaikum dan salam sejahtera Ahli Panel. Saya [Nama], graduan [Ijazah Sarjana Muda PJPK/Sains Sukan] dengan kepakaran kejurulatihan dalam sukan [Sukan Utama] serta pemegang pentauliahan Pertolongan Cemas CPR. Semasa latihan mengajar, saya berjaya melonjakkan kadar celik kecergasan murid sebanyak 22% dan membimbing pasukan sekolah ke peringkat suku akhir MSSD. Kekuatan terbesar saya adalah kesediaan 100% untuk ekosistem asrama penuh 24 jam: bersedia menggalas tugas hakiki di padang, penasihat Homeroom yang prihatin, dan Warden Asrama yang berintegriti tinggi. Saya komited ditempatkan di mana-mana 58 buah MRSM di seluruh Malaysia demi menjulang amanah Bumiputera.',
        result: 'Panel mendapat gambaran serta-merta bahawa calon mempunyai pakej lengkap: berkelayakan, berstamina tinggi, mempunyai jiwa pendidik asrama, dan fleksibel.'
      },
      keywords: [
        'Nama & Kelayakan Ijazah Khusus',
        'Lesen Kejurulatihan & CPR Certified',
        'Bukti Pencapaian Terukur (MSSD/SEGAK)',
        'Kesediaan Ekosistem 24 Jam Asrama/Warden',
        'Fleksibiliti Penempatan 58 Buah MRSM'
      ],
      pitfalls: [
        'Menceritakan sejarah hidup lampau yang tidak relevan dengan jawatan guru',
        'Bercakap melebihi 60 saat atau nada suara perlahan dan tidak bersemangat'
      ]
    },
    {
      id: 32,
      category: 'spot',
      categoryLabel: 'Spot Emas & Bahasa Inggeris',
      question: '(Keusahawanan MARA) Slogan MARA ialah \'Keusahawanan dan Pendidikan Global\'. Bagaimanakah anda sebagai guru PJPK membudayakan nilai keusahawanan dalam kalangan pelajar MRSM melalui sukan?',
      focusArea: 'Keusahawanan Sukan (Sports Entrepreneurship), Pengurusan Kewangan & Inovasi',
      starAnswer: {
        situation: 'Ramai beranggapan sukan hanya aktiviti fizikal, sedangkan industri sukan global adalah pemacu ekonomi bernilai berbilion ringgit yang selaras dengan mandat keusahawanan MARA.',
        task: 'Membuktikan bagaimana aktiviti PJPK dan kokurikulum sukan boleh dijadikan inkubator melatih minda keusahawanan murid maktab.',
        action: '1. Mengasaskan \'Karnival Sukan & Ekspo Keusahawanan Maktab\' di mana pelajar homeroom menguruskan penajaan (sponsorship), mereka bentuk dan menjual jersi rasmi rumah sukan, serta mengendalikan gerai nutrisi sukan sihat. 2. Mendidik murid tentang pengurusan belanjawan acara sukan, perakaunan kos peralatan, dan analisis pulangan pelaburan (ROI). 3. Menerapkan inovasi produk sukan (cth: mereka cipta bahan bantu sukan murah daripada bahan kitar semula untuk projek reka cipta keusahawanan).',
        result: 'Murid bukan sahaja cergas fizikal, malah celik literasi kewangan, memiliki kemahiran rundingan perniagaan, dan berfikiran keusahawanan sebelum melangkah ke universiti.'
      },
      keywords: [
        'Karnival Sukan & Ekspo Keusahawanan',
        'Penajaan Sukan (Sponsorship)',
        'Pengurusan Belanjawan Acara & ROI',
        'Literasi Kewangan & Rundingan Niaga',
        'Inovasi Produk & Peralatan Sukan'
      ],
      pitfalls: [
        'Menjawab bahawa guru PJPK tiada kaitan dengan mandat keusahawanan MARA',
        'Hanya mencadangkan jualan air mineral di tepi padang tanpa unsur pembelajaran pengurusan profesional'
      ]
    },
    {
      id: 33,
      category: 'spot',
      categoryLabel: 'Spot Emas & Bahasa Inggeris',
      question: '(Integriti Guru & SEGAK) Terdapat kebimbangan mengenai manipulasi data Ujian SEGAK demi mencantikkan gred maktab. Bagaimanakah anda menjamin ketelusan dan integriti mutlak dalam pelaksanaan Ujian SEGAK?',
      focusArea: 'Integriti Penjawat Awam, Audit Data Kecergasan & Ketelusan SEGAK',
      starAnswer: {
        situation: 'Tekanan untuk mencapai sasaran KPI maktab kadangkala membuka ruang kepada pemalsuan rekod ujian fizikal jika tiada pengawasan berintegriti.',
        task: 'Menegakkan doktrin amanah MARA dengan memastikan setiap data Ujian SEGAK murid direkod secara tepat, sahih, dan telus tanpa kompromi.',
        action: '1. Mengamalkan kaedah pentaksiran bertiga: murid pelaku, murid pencatat semakan silang (peer assessment), dan guru pengesah di setiap stesen ujian. 2. Menggunakan borang skor fizikal rasmi Lampiran E dengan tandatangan murid serta-merta selepas ujian selesai bagi mengelakkan manipulasi kemudian. 3. Melakukan audit rawak bersama Ketua Bidang atau PK Kokurikulum. 4. Menegaskan kepada murid bahawa kejujuran markah adalah asas sains sukan: data yang rendah memberi peluang untuk intervensi preskripsi senaman F.I.T.T yang tepat.',
        result: 'Data SEGAK maktab dijamin 100% sahih, murid membesar dengan integriti tinggi, dan murid yang kurang cergas mendapat bantuan intervensi fizikal yang sebenar.'
      },
      keywords: [
        'Pentaksiran Semakan Silang (Peer Assessment)',
        'Borang Tandatangan Serta-Merta Murid',
        'Audit Rawak Bersama Pentadbir',
        'Preskripsi Intervensi F.I.T.T Berasaskan Data Sebenar',
        'Integriti Mutlak Penjawat Awam'
      ],
      pitfalls: [
        'Mengabaikan integriti demi menjaga KPI maktab',
        'Tidak mempunyai mekanisme semakan silang di stesen ujian'
      ]
    },
    {
      id: 34,
      category: 'spot',
      categoryLabel: 'Spot Emas & Bahasa Inggeris',
      question: '(Dilema Warden Jam 2:30 Pagi) Sebagai Warden Asrama, anda perlu menghantar seorang murid yang mengalami sakit perut akut disyaki apendisitis ke hospital pada jam 2:30 pagi. Pada jam 7:30 pagi, anda mempunyai jadual mengajar amali PJ di padang. Apakah tindakan profesional anda?',
      focusArea: 'Protokol Kecemasan Asrama, Pelan Kontingensi PdPc & Ketahanan Warden',
      starAnswer: {
        situation: 'Tanggungjawab kebajikan murid waktu malam bertembung dengan kewajipan hakiki pengajaran di bilik darjah pada awal pagi berikutnya.',
        task: 'Menyelamatkan nyawa murid asrama mengikut SOP perubatan maktab di samping memastikan murid kelas amali pagi tidak terabai dan keselamatan padang terjamin.',
        action: '1. Jam 2:30 pagi: Bertindak pantas menghubungi Penyelia Asrama/Pemandu Maktab, membawa murid ke Jabatan Kecemasan Hospital, memaklumkan Pengetua/PK HEM, serta menghubungi ibu bapa murid dengan tenang. 2. Memastikan murid diserahkan kepada pegawai perubatan dan ditemani oleh staf bertugas giliran kedua/penyelia asrama di hospital. 3. Jam 6:00 pagi: Mengaktifkan Pelan Kontingensi PdPc dengan memaklumkan Ketua Panitia PJPK dan Guru Penolong Kanan 1. 4. Menukar jadual amali padang lasak kepada sesi teori Pendidikan Kesihatan (PEERS) di dewan berhawa dingin atau meminta bantuan relief rakan panitia, memastikan objektif PdPc murid tetap tercapai tanpa mengabaikan aspek keselamatan guru yang keletihan.',
        result: 'Nyawa murid asrama terselamat melalui rawatan segera, ibu bapa berasa tenang dengan ketelusan maktab, dan sesi PdPc pagi berjalan teratur tanpa kompromi keselamatan di padang.'
      },
      keywords: [
        'SOP Kecemasan Asrama & Hospital',
        'Komunikasi Pantas PK HEM & Ibu Bapa',
        'Pengaktifan Pelan Kontingensi PdPc',
        'Kerjasama Pasukan Panitia PJPK',
        'Mengelak Risiko Kemalangan Padang Akibat Kelesuan'
      ],
      pitfalls: [
        'Meninggalkan murid di hospital sendirian tanpa pengganti',
        'Memaksa diri mengajar aktiviti padang lasak dalam keadaan mengantuk/lesu yang mengundang bahaya murid'
      ]
    },
    {
      id: 35,
      category: 'spot',
      categoryLabel: 'Spot Emas & Bahasa Inggeris',
      question: '(Isu Obesiti & Gaya Hidup Sedentari Asrama) Pelajar asrama MRSM makan 5 kali sehari mengikut jadual dewan makan (sarapan, rehat, makan tengah hari, minum petang, makan malam/supper). Bagaimana anda merangka intervensi saintifik bagi menangani isu berat badan berlebihan dan gaya hidup sedentari di maktab?',
      focusArea: 'Preskripsi F.I.T.T Obesiti, Kerjasama Dewan Makan & Pembudayaan Kecergasan Maktab',
      starAnswer: {
        situation: 'Pengambilan kalori yang tinggi daripada jadual makan asrama 5 kali sehari tanpa imbangan perbelanjaan tenaga (energy expenditure) yang cukup menyebabkan peratusan murid berlebihan berat badan (BMI > 25) meningkat.',
        task: 'Merangka program intervensi kecergasan holistik berasaskan sains sukan yang berkesan, selamat, dan tidak memalukan murid (non-stigmatizing).',
        action: '1. Melancarkan Program \'MRSM Fit & Lean Challenge\' menggunakan pendekatan F.I.T.T (Kekerapan: 3-4 kali seminggu; Intensiti: 60-70% Denyutan Jantung Maksimum; Masa: 45 minit senaman aerobik & latihan litar; Jenis: Berenang, berjoging petang, kalistenik santai). 2. Bekerjasama dengan Jawatankuasa Makanan Maktab untuk menyemak menu dewan makan: memperbanyakkan sayur-sayuran dan ulam-ulaman, serta mengurangkan gula dalam minuman kordial. 3. Mengintegrasikan teknologi jejak langkah (pedometer/smartwatch) antara bilik asrama dengan sistem ganjaran merit homeroom. 4. Memberi pendidikan nutrisi melalui silibus Pendidikan Kesihatan tentang keseimbangan tenaga (calorie in vs calorie out).',
        result: 'Kadar murid obesiti maktab menurun secara berfasa dalam tempoh 6 bulan, skor kardiorespiratori SEGAK meningkat, dan murid asrama membudayakan gaya hidup aktif secara sukarela.'
      },
      keywords: [
        'Preskripsi F.I.T.T Berasaskan Sains Sukan',
        'Program Fit & Lean Tanpa Stigma',
        'Kerjasama Jawatankuasa Dewan Makan',
        'Keseimbangan Tenaga (Calorie In vs Out)',
        'Gamifikasi Jejak Langkah Asrama'
      ],
      pitfalls: [
        'Menghukum atau memalukan murid berlebihan berat badan di khalayak ramai',
        'Memberi jadual senaman melampau yang berisiko strok haba/kecederaan otot'
      ]
    }
  ];

  // ==========================================================================
  // BAHAGIAN 3: SISTEM AUDIO & PEMASA TEMU DUGA KUMPULAN (30 MINIT)
  // ==========================================================================
  let timerInterval = null;
  let remainingSec = INTERVIEW_DURATION_SEC;
  let isTimerRunning = false;
  let audioCtx = null;

  function getAudioContext() {
    if (typeof window === 'undefined') return null;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    if (!audioCtx) audioCtx = new AudioCtx();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }

  function playTone(freq = 880, dur = 0.2) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + dur);
    } catch (e) {}
  }

  function calculateScore(scoresMap = {}) {
    let totalScore = 0;
    INTERVIEW_CRITERIA_MARA.forEach(c => {
      const val = parseInt(scoresMap[c.id], 10) || 0;
      totalScore += val;
    });

    const isPass = totalScore >= 40;
    const decision = isPass ? 'Pilihan' : 'Gagal';
    const decisionFull = isPass ? 'Pilihan ( 40 – 50 )' : 'Gagal ( < 40 )';

    return {
      totalScore,
      maxScore: 50,
      isPass,
      decision,
      decisionFull
    };
  }

  function startTimer() {
    if (isTimerRunning) return;
    isTimerRunning = true;
    playTone(1000, 0.4);

    if (window.MACApp && typeof window.MACApp.showToast === 'function') {
      window.MACApp.showToast('Sesi Temu Duga Kumpulan 30 Minit Bermula!', 'info');
    }

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      remainingSec--;
      updateTimerUI();

      if (remainingSec === 300) {
        playTone(660, 0.4);
        if (window.MACApp && typeof window.MACApp.showToast === 'function') {
          window.MACApp.showToast('⚠️ Peringatan: 5 Minit Terakhir Temu Duga!', 'warning');
        }
      } else if (remainingSec <= 0) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        playTone(440, 1.0);
        if (window.MACApp && typeof window.MACApp.showToast === 'function') {
          window.MACApp.showToast('🛑 Masa Temu Duga 30 Minit Telah Tamat!', 'danger');
        }
        updateTimerUI();
      }
    }, 1000);

    updateTimerUI();
  }

  function pauseTimer() {
    if (!isTimerRunning) return;
    clearInterval(timerInterval);
    isTimerRunning = false;
    updateTimerUI();
  }

  function resetTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    remainingSec = INTERVIEW_DURATION_SEC;
    updateTimerUI();
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function updateTimerUI() {
    const displayEl = document.getElementById('interview-timer-display');
    const btnStart = document.getElementById('btn-int-start');
    const btnPause = document.getElementById('btn-int-pause');
    const btnReset = document.getElementById('btn-int-reset');

    if (displayEl) {
      displayEl.innerText = formatTime(remainingSec);
      if (remainingSec <= 300 && remainingSec > 0) {
        displayEl.style.color = '#F59E0B';
      } else if (remainingSec === 0) {
        displayEl.style.color = '#EF4444';
      } else {
        displayEl.style.color = '#10B981';
      }
    }

    if (btnStart) btnStart.disabled = isTimerRunning;
    if (btnPause) btnPause.disabled = !isTimerRunning;
    if (btnReset) btnReset.disabled = isTimerRunning && remainingSec === INTERVIEW_DURATION_SEC;
  }

  // ==========================================================================
  // BAHAGIAN 4: SKRIP JAWAPAN LISAN TERUS (UNTUK DIBACA SECARA TERUS)
  // ==========================================================================
  const DIRECT_SPOKEN_SCRIPTS = {
    1: 'Tuan/Puan Panel, MARA ditubuhkan pada 1 Mac 1966 di bawah Akta Parlimen 1965 (Akta Majlis Amanah Rakyat 1966 / Akta 249) sebagai badan berkanun hasil resolusi Kongres Ekonomi Bumiputera pertama bagi menggantikan RIDA. Mengikut Seksyen 6(1) Akta 249, kewajipan utama MARA adalah memajukan, menggalakkan, memudahkan serta menjalankan pembangunan ekonomi dan kemasyarakatan khususnya di kawasan luar bandar. Sebagai Guru PJPK di MRSM, saya menyokong mandat Seksyen 6(1)(d) dan (e) ini dengan membina modal insan Bumiputera yang bukan sahaja pintar STEM tetapi mempunyai kecergasan kardiorespiratori unggul, daya tahan mental (grit) yang kental, serta disiplin kepimpinan melalui sukan agar mereka mampu bersaing di peringkat global tanpa kelesuan fizikal.',
    2: 'Visi MARA ialah "Menjadi organisasi amanah yang unggul dan diberkati untuk mengangkat martabat bangsa", manakala Misi MARA ialah "Menerajui bidang keusahawanan, pendidikan dan pelaburan untuk penguasaan ekuiti Bumiputera". Slogan rasmi MARA pula ialah "Keusahawanan dan Pendidikan Global". Dalam pengajaran PJPK, saya menterjemahkan visi dan misi ini melalui tiga pendekatan: Pertama, melaksanakan Ujian SEGAK dengan integriti mutlak tanpa manipulasi data sebagai tanda menjunjung amanah bangsa. Kedua, menerapkan pedagogi PAK-21, sains sukan moden dan pendekatan TGfU agar selaras dengan pendidikan global. Ketiga, melatih murid mengurus Karnival Sukan Maktab termasuk belanjawan dan penajaan bagi memupuk minda keusahawanan sukan.',
    3: 'Terdapat empat perbezaan utama antara MRSM dan sekolah harian biasa KPM: Pertama, MRSM berada di bawah Bahagian Pendidikan Menengah (BPM) MARA dan Kementerian Kemajuan Desa dan Wilayah (KKDW), dengan ekosistem asrama penuh 100% yang mendidik murid selama 24 jam sehari. Kedua, MRSM mengamalkan Sistem Pendidikan MRSM (SPMRSM) yang menawarkan 6 aliran khas iaitu Premier, Ulul Albab, IGCSE, Bitara (PKP), IB-MYP, dan Teknikal, serta sijil graduasi sendiri berdasarkan TPNG. Ketiga, MRSM mempunyai Sistem Homeroom di mana setiap guru menjadi ibu bapa angkat kepada 10 hingga 15 orang pelajar. Keempat, guru PJPK di MRSM memikul peranan menyeluruh (multi-role) iaitu mengajar di padang waktu pagi, menjadi jurulatih sukan maktab waktu petang, serta berkhidmat sebagai penasihat Homeroom dan Warden Asrama pada waktu malam.',
    4: 'SPMRSM mempunyai aliran berbeza dan saya menyesuaikan pedagogi PJPK mengikut keperluan setiap aliran: (1) MRSM Premier: Mengimbangi sukan berprestasi tinggi dengan jadual akademik KSSM dan sahsiah MARA. (2) MRSM Ulul Albab (Tahfiz 30 Juzuk): Merangka senaman aerobik dan latihan pernafasan diafragma yang meningkatkan kapasiti paru-paru untuk kelancaran hafazan Al-Quran tanpa menyebabkan kelesuan melampau waktu malam. (3) MRSM IGCSE (Dwi-Sijil SPM & Cambridge): Menjadikan waktu PJ sebagai terapi pelepasan tekanan (stress reliever) bagi mengelakkan keletihan mental (burnout). (4) MRSM Bitara / PKP (Pintar Berbakat): Menyediakan aktiviti sukan berfokus strategi taktikal tinggi dan penyelesaian masalah kinestetik (KBAT). (5) MRSM IB-MYP & Teknikal: Mengintegrasikan sains pergerakan biomekanik serta pentaksiran berasaskan inkuiri global.',
    5: 'MARA ialah badan berkanun persekutuan di bawah seliaan Kementerian Kemajuan Desa dan Wilayah (KKDW) yang diterajui oleh Menteri KKDW, YAB Dato\' Seri Dr. Ahmad Zahid bin Hamidi. Dasar tertinggi MARA diputuskan oleh Majlis MARA yang dipengerusikan oleh Pengerusi MARA, YB Datuk Dr. Asyraf Wajdi bin Dato\' Dusuki. Pentadbiran eksekutif MARA pula diketuai oleh Ketua Pengarah MARA, YBhg. Dato\' Zulfikri bin Osman, dibantu oleh Timbalan Ketua Pengarah (Pendidikan), YBhg. Ir. Dr. Mahzan bin Teh. Kesemua 58 buah MRSM di seluruh Malaysia diuruskan secara langsung oleh Bahagian Pendidikan Menengah (BPM) MARA yang diketuai oleh Pengarah BPM, YBrs. Tuan Haji Shahrizal bin Mohd Saderi.',
    6: 'Saya memilih untuk berkhidmat bersama MARA kerana saya terpanggil dengan roh "Amanah Rakyat" dalam membangunkan anak bangsa Bumiputera luar bandar dan B40 (yang kini merangkumi kuota sekurang-kurangnya 60% pelajar MRSM termasuk tajaan BUDI MARA). Berbeza dengan sekolah biasa di mana hubungan guru-murid berakhir pada jam 2.00 petang, ekosistem asrama penuh MRSM memberi ruang kepada saya untuk mendidik secara holistik 24 jam sehari melalui padang sukan, Sistem Homeroom, dan tugas Warden Asrama. Saya mahu melahirkan pemimpin masa depan yang bukan sahaja mendapat deretan A, tetapi mempunyai tubuh yang sihat, disiplin masa yang tajam, dan akhlak yang terpuji.',
    7: 'Saya berpegang kepada prinsip "Mens sana in corpore sano" — akal yang cerdas terletak pada tubuh yang cergas. Kajian sains sukan membuktikan bahawa aktiviti fizikal aerobik meningkatkan aliran darah dan oksigen ke otak (neurogenesis) yang menguatkan daya ingatan murid STEM. Selain itu, di atas padang sukan, saya melatih murid mengawal emosi apabila tewas, bangkit semula daripada kegagalan (resilience), berkomunikasi dalam pasukan, dan mematuhi peraturan. Kemahiran insaniah inilah yang membezakan graduan MRSM apabila mereka melangkah ke universiti terkemuka dunia dan alam pekerjaan kelak.',
    8: 'Sebagai graduan PJPK yang terlatih dengan disiplin masa dan kecergasan fizikal, saya amat bersedia memikul amanah Warden Asrama. Strategi saya ialah: Pertama, mengamalkan Pengurusan Masa Berasaskan Blok (Time-Blocking) di mana waktu siang (7.30 pagi – 4.30 petang) difokuskan 100% kepada PdPc PJPK, penyediaan RPH, dan kejurulatihan sukan; manakala waktu malam diperuntukkan untuk rondaan blok asrama, semakan prep malam, dan kebajikan murid. Kedua, saya memperkasakan kepimpinan pelajar melalui Badan Wakil Pelajar (BWP) dan Ketua Bilik (Dorm Leader) untuk memantau disiplin asas. Ketiga, saya mengekalkan rutin kecergasan peribadi supaya sentiasa bertenaga dan tidak mengalami kelesuan (burnout).',
    9: 'Di MRSM, Guru Homeroom ialah ibu bapa angkat rasmi kepada kumpulan kecil 10 hingga 15 orang pelajar. Jika anak homeroom saya murung dan merosot akademiknya, langkah pertama saya ialah memanggilnya untuk sesi pertemuan empat mata secara santai tanpa menghakimi (non-judgmental active listening) bagi mengenal pasti punca sebenar—sama ada masalah rindu keluarga (homesick), tekanan rakan sebaya, atau kesukaran subjek. Kedua, saya mengajak murid tersebut berjoging atau beriadah petang bersama ahli homeroom kerana aktiviti fizikal merembeskan hormon endorfin yang memulihkan emosi. Ketiga, saya merujuk murid kepada Guru Kaunseling (UBK) untuk intervensi pakar, menghubungi ibu bapa kandungnya secara berkala, dan melantik rakan sebaya homeroom yang cemerlang sebagai buddy pembelajaran.',
    10: 'Saya menyokong penuh ketegasan Pengerusi MARA melalui prinsip sifar kompromi buli: "You Touch, You Go!". Melalui sukan dan PJPK, saya mencegah budaya buli dengan empat pendekatan: Pertama, menyalurkan lebihan tenaga fizikal dan hormon remaja ke arah persaingan yang sihat melalui Liga Sukan Antara Asrama/Homeroom pada waktu petang. Kedua, mendidik etika kesukanan (sportsmanship) bahawa kekuatan fizikal adalah untuk melindungi rakan sepasukan, bukan menindas golongan lemah. Ketiga, menghapuskan jurang senioriti toksik melalui program buddy sukan merentas tingkatan. Keempat, sebagai warden dan guru sukan, saya sentiasa memastikan stor sukan berkunci dan memantau kawasan titik buta (blind spots) di asrama pada waktu malam.',
    11: 'Jadual harian MRSM dari jam 5.30 pagi hingga 11.00 malam sememangnya mencabar mental pelajar. Dari sudut fisiologi senaman, aktiviti fizikal berintensiti sederhana di padang merangsang otak merembeskan hormon Endorfin, Dopamin, dan Serotonin sambil menurunkan paras hormon Kortisol (hormon stres). Oleh itu, saya menjadikan kelas PJPK sebagai waktu "Joyful Learning" yang menyeronokkan melalui permainan kecil berpasukan (TGfU) dan gamifikasi kecergasan, bukan latih tubi tentera yang menekan. Pada fasa penyejukan badan (cooling down), saya turut membimbing murid melakukan teknik pernafasan dalam (diaphragmatic breathing) supaya minda mereka kembali segar untuk sesi pembelajaran seterusnya.',
    12: 'Saya bersedia 100% tanpa sebarang syarat untuk ditempatkan di mana-mana sahaja daripada 58 buah MRSM di seluruh Malaysia, termasuk di Sabah, Sarawak, atau kawasan pedalaman. Bagi saya, berkhidmat di MRSM luar bandar adalah satu penghormatan kerana di situlah letaknya mandat asal MARA untuk membela pelajar Bumiputera luar bandar. Malah, pelajar di kawasan luar bandar terkenal dengan daya tahan fizikal dan bakat sukan semula jadi yang luar biasa. Saya akan memanfaatkan persekitaran alam semula jadi setempat untuk aktiviti rekreasi luar dan menggilap bakat mereka sehingga mampu mengharumkan nama maktab di peringkat kebangsaan.',
    13: 'Di MRSM, dua kejohanan sukan paling berprestij ialah KEJORA (Kejohanan Olahraga MRSM Se-Malaysia) dan SUPER (Sukan Perdana MRSM). Bagi memastikan kontinjen maktab mencapai prestasi puncak tanpa menjejaskan akademik, saya menggunakan kaedah Periodisasi Latihan Saintifik 4 Fasa: (1) Fasa Persediaan Umum untuk membina asas daya tahan kardiorespiratori dan kekuatan otot; (2) Fasa Persediaan Khusus yang memfokuskan teknik biomekanik dan taktikal permainan; (3) Fasa Pra-Pertandingan melalui perlawanan ujian dan simulasi tekanan; dan (4) Fasa Pertandingan & Tapering (mengurangkan beban latihan 5 hari sebelum kejohanan supaya otot pulih 100%). Saya juga bekerjasama dengan Penyelia Asrama/Dewan Selera untuk memastikan hidrasi dan nutrisi atlet mencukupi.',
    14: 'Seorang Guru PJPK di MRSM mesti menjadi suri teladan (role model) kecergasan dan kekemasan diri. Semasa sesi PdPc amali di padang atau gelanggang, saya memakai baju-T sukan berkolar yang dimasukkan ke dalam seluar (tuck-in) dengan kemas, seluar trek sukan gelap yang sopan (bukan seluar ketat atau jeans), stoking dan kasut sukan bertali penuh, serta wisel dan jam randik. Semasa mengajar teori Pendidikan Kesihatan di bilik darjah, menghadiri mesyuarat, atau majlis rasmi maktab pula, saya memakai pakaian formal penjawat awam (kemeja berlengan panjang bertali leher / pakaian korporat MARA / batik Malaysia pada hari Khamis) selaras dengan Pekeliling Perkhidmatan MARA.',
    15: 'Dalam mengendalikan murid obesiti atau pasif, prinsip utama saya ialah sifar penghinaan fizikal (Zero Body Shaming) dan pendekatan inklusif. Pertama, saya menggunakan Pedagogi Terbeza (Differentiated Instruction) mengikut prinsip F.I.T.T—contohnya, ketika murid lain melakukan larian pecut, murid obesiti diberi sasaran jalan pantas (brisk walking) mengikut kemampuan kadar nadi latihan mereka supaya tidak mencederakan sendi lutut. Kedua, saya melibatkan mereka secara aktif dalam peranan kepimpinan teknikal seperti penjaga masa, pencatat statistik, atau pengadil pembantu supaya mereka tidak berasa tersisih. Ketiga, saya memberikan pujian atas setiap peningkatan kecil (small wins) bagi membina semula keyakinan diri mereka.',
    16: 'Jika murid rebah tidak sedarkan diri semasa Bleep Test, saya mengaktifkan protokol kecemasan perubatan D.R.C.A.B dengan tenang dan pantas: (1) Tiup wisel panjang untuk hentikan larian semua murid serta-merta dan arahkan murid lain berundur supaya kawasan pengudaraan terbuka. (2) D - Danger: Pastikan kawasan sekitar selamat. (3) R - Response: Tepuk bahu murid dan panggil namanya dengan jelas. (4) Hantar 2 orang murid pantas untuk memaklumkan Guru Bertugas/Pusat Kesihatan Maktab, hubungi talian kecemasan 999, dan bawa peti First Aid serta peranti AED. (5) C/A/B - Circulation, Airway, Breathing: Periksa nadi karotid dan pernafasan dalam masa kurang 10 saat. Jika tiada nadi dan nafas, mulakan CPR (30 tekanan dada : 2 bantuan pernafasan) dan guna AED. Jika murid bernafas dan sekadar pitam kepanasan, baringkan dalam Posisi Pemulihan (Recovery Position), tinggikan sedikit kakinya, dan longgarkan pakaian ketat. Selepas murid diserahkan kepada paramedik, saya laporkan segera kepada Pengetua/PK HEM untuk menghubungi ibu bapa dan menulis laporan rasmi insiden.',
    17: 'Sebagai guru PJPK, saya tertakluk kepada doktrin undang-undang "In Loco Parentis" (bertindak menggantikan peranan ibu bapa yang berhati-hati) dan "Duty of Care" (kewajipan menjaga keselamatan murid daripada bahaya yang boleh dijangka / foreseeable harm). Untuk mematuhinya 100%: Pertama, saya melakukan Audit Keselamatan Padang & Alatan 10 minit sebelum kelas bermula—memastikan tiang gol futsal/bola baling berpasak kukuh dan tidak berkarat, permukaan gelanggang kering, serta tiada serpihan kaca. Kedua, membuat saringan kesihatan lisan (PAR-Q) pada awal kelas untuk mengesan murid yang demam, asma, atau cedera. Ketiga, mengamalkan Pengawasan Berterusan (Constant Supervision)—saya tidak akan sesekali meninggalkan murid bersendirian di padang atau bilik gimnasium tanpa pengawasan. Keempat, memastikan stor sukan sentiasa dikunci selepas alatan dikeluarkan.',
    18: 'Dalam DSKP KSSM PJPK, Pentaksiran Bilik Darjah (PBD) tidak hanya menilai siapa yang paling laju berlari atau paling banyak menjaringkan gol. Sebaliknya, saya menilai murid secara holistik merentasi 3 Domain Utama: (1) Domain Psikomotor: Menilai teknik lakuan asas dan peningkatan ansur maju kendiri murid berbanding tahap awalnya; (2) Domain Kognitif: Menilai kefahaman murid terhadap strategi permainan, peraturan, dan konsep sains sukan melalui soal jawab lisan atau senarai semak; (3) Domain Afektif (Standard Kandungan 5.0): Menilai disiplin, kerjasama berpasukan, semangat kesukanan, dan kepatuhan keselamatan. Oleh itu, murid yang kurang berbakat motor semula jadi tetapi berusaha gigih, memahami konsep taktikal, dan berdisiplin tinggi tetap berupaya mencapai Tahap Penguasaan cemerlang (TP5 atau TP6).',
    19: 'Ujian SEGAK dilaksanakan 2 kali setahun (Mac dan Ogos) dan datanya adalah penunjuk kesihatan kritikal maktab. Jika 25% murid didapati berlebihan berat badan (BMI > 25), saya tidak akan membiarkan data itu sekadar di atas kertas. Saya akan melaksanakan Pelan Intervensi 3 Penjuru: (1) Penjuru Senaman Terancang: Menubuhkan kelab kecergasan petang "MRSM Fit & Lean" menggunakan preskripsi F.I.T.T (3-4 kali seminggu, 45 minit senaman aerobik berimpak rendah seperti brisk walking, senamrobik, dan latihan litar). (2) Penjuru Pemakanan Dewan Selera: Bekerjasama dengan PK HEM dan Penyelia Asrama untuk menyemak menu makan 5 kali sehari di dewan selera agar mengurangkan makanan bergoreng/minuman manis dan menambah buah-buahan serta air kosong. (3) Penjuru Motivasi: Mengadakan pertandingan penurunan BMI sihat antara Homeroom dengan ganjaran merit maktab.',
    20: 'Ramai menyangka Pendidikan Jasmani hanya aktiviti otot, sedangkan sukan moden menuntut pemikiran taktikal yang pantas. Saya menerapkan KBAT dalam kelas PJ melalui pendekatan TGfU (Teaching Games for Understanding). Daripada hanya menyuruh murid membuat hantaran berulang secara mekanikal, saya meletakkan mereka dalam situasi permainan bersyarat (modified small-sided games) dan mengemukakan soalan inkuiri aras tinggi (Bloom Taxonomy: Analisis & Mencipta) seperti: "Mengapa hantaran leret lebih selamat berbanding hantaran lambung apabila pasukan lawan melakukan tekanan tinggi?" atau "Bagaimanakah pasukan kamu boleh membuka ruang kosong dalam situasi serangan 3 lawan 2?". Murid berbincang selama 1 minit untuk merangka strategi sendiri sebelum mengujinya semula di gelanggang.',
    21: 'Komponen PEERS (Pendidikan Kesihatan Reproduktif dan Sosial) merangkumi 75% daripada kurikulum Pendidikan Kesihatan KSSM dan amat penting bagi murid remaja di asrama penuh. Strategi saya ialah: Pertama, menetapkan peraturan kelas yang jelas bahawa topik ini dipelajari secara saintifik (anatomi biologi), perundangan (Akta Kesalahan Seksual Terhadap Kanak-Kanak), serta nilai akhlak dan batas agama—tiada ruang untuk jenaka lucah. Kedua, bagi topik yang sangat sensitif, saya melaksanakan pengajaran berasingan mengikut jantina supaya murid berasa selesa. Ketiga, saya menyediakan Kotak Soalan Tanpa Nama (Anonymous Question Box) agar murid boleh menulis kemusykilan kesihatan remaja tanpa rasa malu, lalu saya menjawabnya secara profesional dan berfakta di dalam kelas.',
    22: '(Situasi) Saya berdepan pertembungan tiga tugas penting serentak: melatih pasukan maktab untuk kejohanan minggu depan, menghantar data rasmi SEGAK ke BPM MARA, dan giliran bertugas sebagai Warden Asrama. (Tugas) Saya perlu memastikan ketiga-tiga amanah ini diselesaikan mengikut tarikh akhir tanpa mengabaikan keselamatan murid atau kualiti pengajaran. (Tindakan) Pertama, saya menyusun jadual menggunakan Matriks Keutamaan Eisenhower. Waktu pagi dan sela masa tidak mengajar digunakan bersama rakan panitia PJPK untuk menyemak dan memuat naik data SEGAK melalui hamparan digital bersepadu. Waktu petang (5.00 – 6.30 petang) difokuskan sepenuhnya kepada latihan taktikal berstruktur bola sepak dengan melantik kapten pasukan mengetuai sesi pemanasan badan. Waktu malam pula saya melaksanakan rondaan warden asrama, dan menggunakan waktu tenang selepas "lights-out" jam 11.00 malam di bilik gerakan warden untuk membuat semakan akhir laporan SEGAK. (Hasil) Laporan SEGAK berjaya dihantar ke BPM 24 jam lebih awal daripada tarikh tutup, pasukan bola sepak bersedia sepenuhnya untuk kejohanan, dan disiplin asrama kekal terkawal.',
    23: '(Situasi) Saya menyedari peralatan sukan berjenama milik maktab telah dibawa keluar oleh seorang guru senior untuk kegunaan kelab luar tanpa direkodkan dalam buku log stor sukan. (Tugas) Sebagai guru yang bertanggungjawab ke atas stor sukan, saya wajib memelihara integriti aset kerajaan di bawah Tatacara Pengurusan Stor MARA sambil menjaga keharmonian hubungan profesional sesama rakan sejawat. (Tindakan) Pertama, saya tidak akan menuduh atau memalukan beliau di khalayak ramai. Saya akan bertemu beliau secara peribadi empat mata dengan penuh hormat. Kedua, saya memaklumkan secara berhemah bahawa pihak panitia sedang menjalankan audit inventori berkala untuk disahkan oleh Penolong Kanan Kokurikulum, dan meminta kerjasama beliau memulangkan alatan tersebut serta mengisi Borang Pinjaman Aset Rasmi sekiranya mendapat kelulusan Pengetua. Ketiga, jika masih berulang selepas teguran berhemah, saya akan melaporkan secara rasmi kepada Ketua Panitia dan Pentadbir mengikut saluran tatatertib. (Hasil) Peralatan sukan maktab berjaya dipulangkan dengan selamat, sistem buku log keluar-masuk stor diperketatkan, dan hubungan kerja kekal profesional.',
    24: '(Situasi) Sepasang ibu bapa hadir ke maktab dalam keadaan marah kerana menyangka anak mereka didenda berlari sehingga rebah kepenatan semasa kelas PJ. (Tugas) Saya perlu meredakan kemarahan ibu bapa tersebut secara profesional, membentangkan fakta sebenar berasaskan rekod kurikulum, dan memelihara imej baik MRSM. (Tindakan) Pertama, saya menjemput ibu bapa tersebut ke bilik rundingan yang selesa bersama Penolong Kanan HEM, menghidangkan air, dan mengamalkan "Active Listening"—mendengar luahan mereka dengan tenang tanpa memotong percakapan. Kedua, setelah emosi mereka reda, saya memohon maaf atas kebimbangan yang timbul dan menunjukkan dokumen RPH rasmi serta rekod Ujian SEGAK/Bleep Test, sambil menjelaskan bahawa larian tersebut bukan dendaan tetapi pentaksiran kecergasan wajib kurikulum. Ketiga, saya menerangkan bahawa sebaik sahaja anak mereka kelihatan penat, saya telah mengarahkannya berehat di tempat teduh dan memberikan rawatan awal mengikut SOP. (Hasil) Ibu bapa memahami perkara sebenar, berpuas hati dengan ketelusan dokumentasi maktab, dan bersetuju bekerjasama memantau tahap kecergasan anak mereka.',
    25: '(Situasi) Dua orang pelajar asrama bertumbuk di tengah gelanggang futsal akibat provokasi terjahan keras semasa perlawanan antara dormitori. (Tugas) Saya perlu menghentikan pergaduhan serta-merta, mengelakkan kecederaan parah atau pergaduhan berkumpulan, dan menyelesaikan konflik tersebut secara mendidik. (Tindakan) Pertama, saya meniup wisel panjang dengan kuat dan tegas, menghentikan perlawanan serta-merta, dan memisahkan kedua-dua pelajar tersebut ke dua sudut gelanggang yang berjauhan (jarak sekurang-kurangnya 15 meter) sambil mengarahkan pemain lain duduk bertenang. Kedua, saya memeriksa sama ada terdapat kecederaan fizikal dan memberikan rawatan awal P.R.I.C.E jika ada lebam. Ketiga, selepas emosi kedua-duanya reda (cooling-off period), saya mengadakan sesi mediasi bersemuka untuk menyedarkan mereka bahawa semangat persaudaraan maktab jauh lebih penting daripada kemenangan futsal, meminta mereka bermaafan, serta melaporkan insiden kepada Ketua Warden dan Guru Disiplin mengikut SOP maktab. (Hasil) Pergaduhan berjaya dikawal sepenuhnya tanpa merebak ke asrama, kedua-dua pelajar kembali berdamai, dan perlawanan dapat diteruskan dengan semangat kesukanan tinggi.',
    26: '(Situasi) Hujan ribut beserta petir melanda secara tiba-tiba ketika saya dijadualkan mengajar kelas amali PJ di padang terbuka, manakala dewan serbaguna sedang digunakan untuk majlis rasmi maktab. (Tugas) Saya perlu memastikan keselamatan 30 orang murid daripada bahaya petir dan memastikan waktu PdPc tetap berjalan secara berkesan tanpa membiarkan murid melepak kosong. (Tindakan) Saya sentiasa menyediakan Pelan Kontingensi Cuaca Buruk (Rainy Day Lesson Plan). Pertama, saya memindahkan murid ke bilik darjah atau koridor berbumbung yang selamat dan lebar. Kedua, saya mengubah suai aktiviti kepada latihan kecergasan ruang terhad (seperti stesen senaman kalistenik berat badan, regangan mobiliti dinamik, atau ujian ketangkasan kuadrant) ATAU menggunakan papan putih di kelas untuk sesi analisis taktikal formasi permainan dan kuiz interaktif Pendidikan Kesihatan (PEERS). (Hasil) Keselamatan murid terjamin 100%, objektif pembelajaran DSKP tetap tercapai, dan murid kekal aktif sepanjang waktu PdPc.',
    27: '(Situasi) Seorang murid menyerahkan slip cuti sakit (MC) klinik yang kelihatan telah diubah suai tarikh dan tandatangannya semata-mata untuk mengelak daripada menduduki Ujian SEGAK. (Tugas) Saya perlu menegakkan integriti dokumen rasmi di samping menyiasat punca sebenar ketakutan murid tersebut secara berhemah. (Tindakan) Pertama, saya membuat semakan pengesahan secara sulit dengan pihak klinik atau Pusat Kesihatan Maktab untuk mengesahkan kesahihan slip tersebut. Kedua, saya memanggil murid itu secara empat mata (tanpa memalukannya di hadapan rakan sekelas) dan bertanya dengan penuh empati mengapa dia bertindak sedemikian. Apabila mendapati dia berasa malu kerana tidak mampu membuat tekan tubi, saya menerangkan kesalahan berat memalsukan dokumen rasmi, merujuknya kepada Guru Kaunseling dan disiplin untuk rekod bimbingan, namun pada masa yang sama saya melatihnya secara ansur maju pada waktu petang sehingga dia bersedia menjalani ujian ulangan SEGAK dengan jujur. (Hasil) Murid tersebut insaf, tidak lagi mengulangi perbuatan tidak jujur, dan berjaya menamatkan Ujian SEGAK dengan penuh keyakinan.',
    28: '(Situasi) Semasa menjalani latihan mengajar / bertugas di institusi terdahulu, saya mendapati ramai pelajar mengalami kelesuan dan kurang aktif bersukan pada waktu petang kerana lebih gemar terperap dengan peranti pintar. (Tugas) Saya ditugaskan merangka satu program kecergasan berimpak tinggi yang mampu menarik minat seluruh warga pelajar secara sukarela. (Tindakan) Saya telah mengetuai penganjuran program "FitFest & Cabaran 10,000 Langkah Antara Rumah Sukan" yang menggabungkan elemen gamifikasi, larian berhalangan (obstacle run), senamrobik perdana, dan gerai pemeriksaan BMI/Kadar Nadi kendalian kelab sukan pelajar. Setiap penyertaan pelajar menyumbang mata merit kepada rumah sukan masing-masing. (Hasil) Program tersebut berjaya menarik lebih 95% penyertaan aktif warga sekolah, meningkatkan purata skor kecergasan kardiorespiratori pelajar sebanyak 18% dalam ujian penggal kedua, dan menghidupkan kembali budaya riadah petang.',
    29: 'Thank you to the honorable panel. MARA should hire me because I bring a complete package of sports science expertise, high physical stamina, and 100% readiness for MRSM\'s 24-hour boarding ecosystem—not only as a Physical Education teacher on the field, but also as a dedicated Homeroom advisor and hostel warden. Regarding top global universities like the Ivy League and Russell Group, admission officers today do not just look for straight A\'s; they look for grit, leadership, teamwork, and emotional resilience under pressure. Through my P.E. lessons and sports coaching, I build students\' cardiovascular endurance—which scientifically boosts cognitive stamina for long study hours—while guiding them to develop a strong sports leadership portfolio that makes MRSM scholars stand out globally.',
    30: 'In a full boarding school environment like MRSM, sports is the most powerful tool to unite students across different forms, provided it is guided by strict ethics. First, I fully uphold MARA\'s zero-tolerance policy on bullying—"You Touch, You Go!" On my sports field and in the hostel, seniority carries zero privileges; respect is earned purely through discipline and fair play. Second, I implement a Cross-Batch Sports Buddy System, where Form 4 and Form 5 seniors are assigned to coach and encourage Form 1 juniors in basic sports skills, transforming potential rivalry into mentorship. Third, after every match, I conduct a mandatory 3-minute reflection and handshake session to reinforce humility in victory and grace in defeat.',
    31: 'Assalamualaikum dan salam sejahtera Tuan/Puan Panel. Nama saya [Nama Anda], graduan Ijazah Sarjana Muda Pendidikan Jasmani dan Pendidikan Kesihatan dari [Universiti Anda]. Kekuatan utama saya merangkumi tiga aspek: Pertama, penguasaan pedagogi DSKP PJPK dan sains sukan moden yang terbukti apabila saya berjaya meningkatkan peratusan lulus cemerlang ujian kecergasan murid sebanyak 22% semasa praktikum. Kedua, saya memiliki kemahiran kejurulatihan sukan serta pentauliahan Pertolongan Cemas/CPR yang menjamin keselamatan murid di padang. Ketiga, saya mempunyai stamina fizikal dan mental yang tinggi untuk berkhidmat dalam ekosistem asrama penuh 24 jam sebagai Guru PJPK, Penasihat Homeroom, dan Warden Asrama. Saya bersedia ditempatkan di mana-mana 58 buah MRSM seluruh Malaysia demi menjulang amanah pendidikan MARA.',
    32: 'Slogan "Keusahawanan dan Pendidikan Global" sangat dekat dengan dunia sukan kerana industri sukan adalah antara sektor ekonomi terbesar dunia. Di MRSM, saya membudayakan keusahawanan melalui tiga inisiatif: Pertama, menganjurkan Karnival Sukan & Keusahawanan Maktab (Sports Fiesta) di mana jawatankuasa pelajar menguruskan sendiri bajet kejohanan, mencari penajaan (sponsorship), mereka bentuk dan menjual jersi rumah sukan, serta membuka gerai minuman kesihatan. Kedua, melatih murid mengurus operasi kelab sukan secara profesional termasuk pengiraan kos alatan dan pulangan modal (ROI). Ketiga, menggalakkan inovasi murid menghasilkan alat bantu latihan sukan kos rendah daripada bahan kitar semula.',
    33: 'Bagi saya, integriti adalah nyawa seorang penjawat awam MARA. Memalsukan data Ujian SEGAK bukan sahaja melanggar etika profesionalisme, malah menganiaya murid kerana kita menyembunyikan risiko kesihatan sebenar mereka. Untuk menjamin ketelusan 100%: Pertama, saya melaksanakan sistem Semakan Silang Berpasangan (Peer & Teacher Verification) di setiap 4 stesen ujian SEGAK menggunakan rubrik rasmi KPM. Kedua, setiap skor dicatat terus ke dalam borang penilaian rasmi dan ditandatangani oleh murid serta guru pada hari ujian dijalankan. Ketiga, saya membentangkan data sebenar kepada pihak pentadbiran maktab disertai dengan Pelan Intervensi F.I.T.T yang konkrit, supaya pihak maktab menilai kejayaan guru bukan pada angka yang dipalsukan, tetapi pada peningkatan kecergasan murid hasil intervensi yang jujur.',
    34: 'Dalam situasi ini, nyawa dan keselamatan murid adalah keutamaan mutlak tanpa mengabaikan tanggungjawab PdPc pagi. Tindakan saya mengikut kronologi: Pertama, pada jam 2.30 pagi, saya mengikut SOP Kecemasan Asrama dengan memaklumkan Ketua Warden/PK HEM, menghubungi ibu bapa murid, dan membawa murid ke Jabatan Kecemasan Hospital menggunakan kenderaan maktab bersama Penyelia Asrama. Kedua, sekiranya murid perlu ditahan di wad dan urusan selesai lewat sekitar jam 5.30 pagi, saya akan mengatur giliran pemantauan bersama Warden Kedua/Penyelia Asrama. Ketiga, sebelum jam 7.00 pagi, saya memaklumkan Ketua Panitia PJPK dan PK Akademik: jika saya sempat kembali ke maktab, saya akan mengubah suai kelas jam 7.30 pagi kepada aktiviti berisiko rendah atau teori Pendidikan Kesihatan di dalam kelas agar tidak berlaku kecuaian keselamatan di padang akibat keletihan; manakala jika saya masih di hospital bersama murid, saya menyerahkan modul latihan/RPH yang telah sedia ada kepada guru ganti (relief).',
    35: 'Jadual makan 5 kali sehari di dewan selera MRSM memberikan tenaga untuk belajar, tetapi jika kalori masuk melebihi kalori keluar (surplus calories), murid akan mengalami obesiti dan cepat mengantuk semasa kelas malam (prep). Intervensi saintifik saya merangkumi tiga langkah: Pertama, memperkenalkan program "Active Dorm, Sharp Mind" pada waktu riadah petang (5.00 – 6.15 petang) di mana semua pelajar diwajibkan turun beriadah menggunakan preskripsi F.I.T.T (Kekerapan 4 kali seminggu, Intensiti 60-70% Kadar Nadi Maksimum, Masa 40 minit, Jenis aktiviti menyeronokkan seperti brisk walk, futsal, aerobik, dan frisbee). Kedua, bekerjasama dengan Jawatankuasa Dewan Selera Maktab untuk memaparkan info kalori makanan di dewan makan serta mengurangkan kandungan gula dalam minuman petang/malam. Ketiga, mendidik murid dalam kelas Pendidikan Kesihatan tentang konsep keseimbangan tenaga (Calorie In vs Calorie Out) supaya mereka mengamalkan gaya hidup sihat sepanjang hayat.'
  };

  // ==========================================================================
  // BAHAGIAN 5: PENGURUSAN STATUS & STATE BANK SOALAN (BUKA TERUS BY DEFAULT)
  // ==========================================================================
  let currentCategoryFilter = 'all';
  let currentSearchQuery = '';
  let currentSubView = 'notes'; // 'notes' (default: Nota 35 Soalan & Jawapan) | 'rubric' (Lampiran F1)

  // PENTING: Semua 35 soalan dibuka secara lalai (open by default) supaya sekali buka terus senang baca!
  const expandedQuestionIds = new Set(INTERVIEW_QUESTIONS.map(q => q.id));
  const oralTimers = {}; // Map of qId -> timer state

  function getPracticedIds() {
    try {
      const stored = localStorage.getItem('mac_interview_practiced_ids');
      if (stored) return new Set(JSON.parse(stored));
    } catch (e) {}
    return new Set();
  }

  function savePracticedIds(set) {
    try {
      localStorage.setItem('mac_interview_practiced_ids', JSON.stringify(Array.from(set)));
    } catch (e) {}
  }

  function togglePracticed(qId) {
    const set = getPracticedIds();
    if (set.has(qId)) {
      set.delete(qId);
    } else {
      set.add(qId);
    }
    savePracticedIds(set);
    updatePracticedProgress();
    
    // Kemaskini visual kad
    const cardEl = document.getElementById(`question-card-${qId}`);
    const btnEl = document.getElementById(`btn-practice-toggle-${qId}`);
    const badgeEl = document.getElementById(`practiced-badge-${qId}`);
    const isNowPracticed = set.has(qId);

    if (cardEl) {
      cardEl.classList.toggle('card-practiced', isNowPracticed);
    }
    if (badgeEl) {
      badgeEl.style.display = isNowPracticed ? 'inline-flex' : 'none';
    }
    if (btnEl) {
      btnEl.innerHTML = isNowPracticed
        ? '✓ Telah Dilatih (Klik Batal)'
        : '◻ Tandakan Selesai Baca / Latih';
      btnEl.className = isNowPracticed ? 'btn btn-sm btn-emerald' : 'btn btn-sm btn-secondary';
    }

    if (window.MACApp && typeof window.MACApp.showToast === 'function') {
      window.MACApp.showToast(
        isNowPracticed ? `Soalan #${qId} ditandakan selesai dibaca/dilatih! 🎯` : `Tanda latihan Soalan #${qId} dibatalkan.`,
        'info',
        2000
      );
    }
  }

  function updatePracticedProgress() {
    const set = getPracticedIds();
    const count = set.size;
    const total = INTERVIEW_QUESTIONS.length;
    const pct = Math.round((count / total) * 100);

    const txtEl = document.getElementById('qbank-progress-text');
    const barEl = document.getElementById('qbank-progress-fill');
    if (txtEl) txtEl.innerText = `${count} / ${total} Soalan Telah Dibaca / Dilatih (${pct}%)`;
    if (barEl && barEl.style) barEl.style.width = `${pct}%`;
  }

  function toggleQuestionAccordion(qId) {
    const contentEl = document.getElementById(`q-drawer-${qId}`);
    const btnEl = document.getElementById(`btn-toggle-q-${qId}`);
    if (!contentEl) return;

    const isExpanded = contentEl.style.display === 'block';
    if (isExpanded) {
      contentEl.style.display = 'none';
      expandedQuestionIds.delete(qId);
      if (btnEl) btnEl.innerHTML = '📖 Buka Jawapan Penuh &amp; S.T.A.R ▾';
    } else {
      contentEl.style.display = 'block';
      expandedQuestionIds.add(qId);
      if (btnEl) btnEl.innerHTML = '📕 Sembunyikan Jawapan ▴';
    }
  }

  function toggleAllQuestions(expand = true) {
    INTERVIEW_QUESTIONS.forEach(q => {
      if (expand) expandedQuestionIds.add(q.id);
      else expandedQuestionIds.delete(q.id);
      const contentEl = document.getElementById(`q-drawer-${q.id}`);
      const btnEl = document.getElementById(`btn-toggle-q-${q.id}`);
      if (contentEl) {
        contentEl.style.display = expand ? 'block' : 'none';
      }
      if (btnEl) {
        btnEl.innerHTML = expand
          ? '📕 Sembunyikan Jawapan ▴'
          : '📖 Buka Jawapan Penuh &amp; S.T.A.R ▾';
      }
    });
  }

  function switchSubView(mode = 'notes') {
    currentSubView = mode;
    const notesSection = document.getElementById('iv-view-notes');
    const rubricSection = document.getElementById('iv-view-rubric');
    const btnNotes = document.getElementById('btn-subview-notes');
    const btnRubric = document.getElementById('btn-subview-rubric');

    if (notesSection) notesSection.style.display = mode === 'notes' ? 'block' : 'none';
    if (rubricSection) rubricSection.style.display = mode === 'rubric' ? 'block' : 'none';

    if (btnNotes) {
      btnNotes.className = mode === 'notes' ? 'btn btn-primary' : 'btn btn-secondary';
    }
    if (btnRubric) {
      btnRubric.className = mode === 'rubric' ? 'btn btn-primary' : 'btn btn-secondary';
    }
  }

  function toggleQuickNotes() {
    switchSubView(currentSubView === 'notes' ? 'rubric' : 'notes');
  }

  function copyQuestionText(qId) {
    const q = INTERVIEW_QUESTIONS.find(item => item.id === qId);
    if (!q) return;

    const directScript = DIRECT_SPOKEN_SCRIPTS[q.id] || '';
    const copyText = `SOALAN TEMU DUGA MARA DG9/DG41 (PJPK) #${q.id} [${q.categoryLabel}]:
${q.question}

Fokus Utama: ${q.focusArea}

Skrip Jawapan Terus:
"${directScript}"

Panduan S.T.A.R:
- Situation: ${q.starAnswer.situation}
- Task: ${q.starAnswer.task}
- Action: ${q.starAnswer.action}
- Result: ${q.starAnswer.result}

Kata Kunci: ${q.keywords.join(', ')}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(copyText).then(() => {
        if (window.MACApp && typeof window.MACApp.showToast === 'function') {
          window.MACApp.showToast(`Soalan & Jawapan #${qId} berjaya disalin!`, 'success');
        }
      }).catch(() => {
        fallbackCopyText(copyText);
      });
    } else {
      fallbackCopyText(copyText);
    }
  }

  function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      if (window.MACApp && typeof window.MACApp.showToast === 'function') {
        window.MACApp.showToast('Soalan & Jawapan berjaya disalin!', 'success');
      }
    } catch (e) {}
    document.body.removeChild(textArea);
  }

  // ==========================================================================
  // BAHAGIAN 6: PEMASA LISAN KAD SOALAN (1 - 3 MINIT)
  // ==========================================================================
  function startOralTimer(qId, targetSeconds = 120) {
    stopOralTimer(qId);

    oralTimers[qId] = {
      remaining: targetSeconds,
      target: targetSeconds,
      intervalId: null
    };

    updateOralTimerDisplay(qId);
    playTone(880, 0.2);

    oralTimers[qId].intervalId = setInterval(() => {
      const state = oralTimers[qId];
      if (!state) return;
      state.remaining--;
      updateOralTimerDisplay(qId);

      if (state.remaining <= 10 && state.remaining > 0) {
        playTone(660, 0.1);
      } else if (state.remaining <= 0) {
        stopOralTimer(qId);
        playTone(440, 0.6);
        if (window.MACApp && typeof window.MACApp.showToast === 'function') {
          window.MACApp.showToast(`Masa menjawab Soalan #${qId} telah tamat!`, 'warning');
        }
      }
    }, 1000);
  }

  function stopOralTimer(qId) {
    if (oralTimers[qId] && oralTimers[qId].intervalId) {
      clearInterval(oralTimers[qId].intervalId);
      oralTimers[qId].intervalId = null;
    }
  }

  function resetOralTimer(qId, targetSeconds = 120) {
    stopOralTimer(qId);
    if (!oralTimers[qId]) {
      oralTimers[qId] = { remaining: targetSeconds, target: targetSeconds, intervalId: null };
    } else {
      oralTimers[qId].remaining = targetSeconds;
      oralTimers[qId].target = targetSeconds;
    }
    updateOralTimerDisplay(qId);
  }

  function updateOralTimerDisplay(qId) {
    const el = document.getElementById(`oral-timer-digits-${qId}`);
    if (!el) return;
    const rem = oralTimers[qId] ? oralTimers[qId].remaining : 120;
    el.innerText = formatTime(rem);
    if (rem <= 15) {
      el.style.color = '#EF4444';
    } else {
      el.style.color = '#10B981';
    }
  }

  // ==========================================================================
  // BAHAGIAN 7: TAPISAN & CARIAN NOTA SOALAN TEMU DUGA
  // ==========================================================================
  function setCategoryFilter(cat) {
    currentCategoryFilter = cat;
    const filterButtons = document.querySelectorAll('.q-filter-pill');
    filterButtons.forEach(btn => {
      const btnCat = btn.getAttribute('data-category');
      btn.classList.toggle('active', btnCat === cat);
    });
    renderQuestionCards();
  }

  function handleSearchInput(query) {
    currentSearchQuery = (query || '').trim().toLowerCase();
    renderQuestionCards();
  }

  function filterQuestionsList() {
    return INTERVIEW_QUESTIONS.filter(q => {
      // 1. Tapis kategori
      if (currentCategoryFilter !== 'all' && q.category !== currentCategoryFilter) {
        return false;
      }
      // 2. Carian teks
      if (currentSearchQuery) {
        const directScript = DIRECT_SPOKEN_SCRIPTS[q.id] || '';
        const textToSearch = [
          q.question,
          q.focusArea,
          q.categoryLabel,
          directScript,
          q.starAnswer.situation,
          q.starAnswer.task,
          q.starAnswer.action,
          q.starAnswer.result,
          (q.keywords || []).join(' '),
          (q.pitfalls || []).join(' ')
        ].join(' ').toLowerCase();

        return textToSearch.includes(currentSearchQuery);
      }
      return true;
    });
  }

  function renderQuestionCards() {
    const listContainer = document.getElementById('interview-questions-list');
    const countBadge = document.getElementById('qbank-count-badge');
    if (!listContainer) return;

    const filtered = filterQuestionsList();
    const practicedSet = getPracticedIds();

    if (countBadge) {
      countBadge.innerText = `Memaparkan ${filtered.length} daripada ${INTERVIEW_QUESTIONS.length} Soalan & Jawapan`;
    }

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state-box text-center p-4">
          <p class="text-lg font-bold text-muted">Tiada soalan ditemui untuk carian "${escapeHtml(currentSearchQuery)}"</p>
          <p class="text-sm text-secondary mt-1">Cuba cari kata kunci lain seperti "Akta 249", "bleep test", "warden", "buli", atau "homeroom".</p>
          <button type="button" class="btn btn-secondary mt-3" onclick="MACInterview.clearSearch()">
            🔄 Set Semula Carian
          </button>
        </div>
      `;
      return;
    }

    let cardsHtml = '';
    filtered.forEach(q => {
      const isPracticed = practicedSet.has(q.id);
      const isExpanded = expandedQuestionIds.has(q.id);
      const directScript = DIRECT_SPOKEN_SCRIPTS[q.id] || `${q.starAnswer.situation} ${q.starAnswer.task} ${q.starAnswer.action} ${q.starAnswer.result}`;

      // Warna badge mengikut kategori
      let badgeColorClass = 'badge-mara';
      if (q.category === 'mrsm') badgeColorClass = 'badge-navy';
      if (q.category === 'pjpk') badgeColorClass = 'badge-emerald';
      if (q.category === 'star') badgeColorClass = 'badge-purple';
      if (q.category === 'spot') badgeColorClass = 'badge-gold';

      // Kata kunci pills
      const keywordPills = (q.keywords || []).map(k => `<span class="keyword-pill">${escapeHtml(k)}</span>`).join('');

      // Perangkap amaran
      const pitfallItems = (q.pitfalls || []).map(p => `<li>${escapeHtml(p)}</li>`).join('');

      cardsHtml += `
        <div class="card question-card mb-4 ${isPracticed ? 'card-practiced' : ''}" id="question-card-${q.id}">
          <div class="question-card-header">
            <div class="q-header-meta">
              <span class="badge ${badgeColorClass}">SOALAN #${q.id} • ${q.categoryLabel}</span>
              <span class="q-focus-area">🎯 Fokus: ${escapeHtml(q.focusArea)}</span>
              <span class="badge badge-emerald-subtle" id="practiced-badge-${q.id}" style="display: ${isPracticed ? 'inline-flex' : 'none'};">
                ✓ Selesai Dibaca / Dilatih
              </span>
            </div>
            <div class="q-header-actions">
              <button type="button" class="btn btn-ghost btn-sm" onclick="MACInterview.copyQuestionText(${q.id})" title="Salin Soalan & Jawapan">
                📋 Salin Nota
              </button>
            </div>
          </div>

          <div class="question-card-body">
            <h4 class="question-text">
              <span class="q-num-lead">SOALAN ${q.id}:</span> "${escapeHtml(q.question)}"
            </h4>

            <!-- Drawer Nota Jawapan Penuh, S.T.A.R & Kata Kunci (Dibuka Terus / Expanded By Default) -->
            <div class="star-drawer mt-3" id="q-drawer-${q.id}" style="display: ${isExpanded ? 'block' : 'none'};">
              
              <!-- KOTAK UTAMA: SKRIP JAWAPAN LISAN TERUS (SENANG BACA) -->
              <div class="direct-answer-box mb-3">
                <div class="direct-answer-title">
                  <span>💬 JAWAPAN PADAT (BOLEH TERUS BACA / SEBUT DI HADAPAN PANEL):</span>
                </div>
                <p class="direct-answer-script">"${escapeHtml(directScript)}"</p>
              </div>

              <!-- PECAHAN POIN S.T.A.R (RINGKASAN STRUKTUR) -->
              <div class="star-section-label mb-1">
                <strong>📌 Pecahan Struktur Jawapan Mengikut Formula S.T.A.R:</strong>
              </div>
              <div class="star-grid">
                <!-- Situation -->
                <div class="star-col star-col-s">
                  <div class="star-header">
                    <span class="star-letter">S</span>
                    <strong>SITUATION (Latar Belakang)</strong>
                  </div>
                  <p class="star-text">${escapeHtml(q.starAnswer.situation)}</p>
                </div>

                <!-- Task -->
                <div class="star-col star-col-t">
                  <div class="star-header">
                    <span class="star-letter">T</span>
                    <strong>TASK (Tanggungjawab &amp; Cabaran)</strong>
                  </div>
                  <p class="star-text">${escapeHtml(q.starAnswer.task)}</p>
                </div>

                <!-- Action -->
                <div class="star-col star-col-a">
                  <div class="star-header">
                    <span class="star-letter">A</span>
                    <strong>ACTION (Tindakan Konkrit Calon)</strong>
                  </div>
                  <p class="star-text">${escapeHtml(q.starAnswer.action)}</p>
                </div>

                <!-- Result -->
                <div class="star-col star-col-r">
                  <div class="star-header">
                    <span class="star-letter">R</span>
                    <strong>RESULT (Hasil Terukur &amp; Impak)</strong>
                  </div>
                  <p class="star-text">${escapeHtml(q.starAnswer.result)}</p>
                </div>
              </div>

              <!-- Kata Kunci Wajib -->
              <div class="mt-3 keyword-panel">
                <span class="keyword-title">🔑 Kata Kunci Wajib Disebut (Markah Tinggi Panel):</span>
                <div class="keyword-pills-wrap mt-1">
                  ${keywordPills}
                </div>
              </div>

              <!-- Perangkap Calon -->
              <div class="mt-3 pitfall-panel">
                <span class="pitfall-title">⚠️ Perangkap &amp; Kesilapan Calon (Jangan Sebut!):</span>
                <ul class="pitfall-list mt-1">
                  ${pitfallItems}
                </ul>
              </div>

              <!-- Pemasa Lisan Latihan Temu Duga (1 - 3 Minit) -->
              <div class="mt-3 oral-timer-box">
                <div class="oral-timer-header">
                  <strong>🎙️ Pemasa Latihan Sebutan Lisan:</strong>
                  <span class="oral-digits font-mono" id="oral-timer-digits-${q.id}">02:00</span>
                </div>
                <div class="oral-timer-controls mt-2">
                  <button type="button" class="btn btn-sm btn-ghost" onclick="MACInterview.resetOralTimer(${q.id}, 60)">1 Minit</button>
                  <button type="button" class="btn btn-sm btn-ghost" onclick="MACInterview.resetOralTimer(${q.id}, 120)">2 Minit</button>
                  <button type="button" class="btn btn-sm btn-ghost" onclick="MACInterview.resetOralTimer(${q.id}, 180)">3 Minit</button>
                  <button type="button" class="btn btn-sm btn-primary" onclick="MACInterview.startOralTimer(${q.id}, oralTimers[${q.id}] ? oralTimers[${q.id}].remaining : 120)">▶ Mula</button>
                  <button type="button" class="btn btn-sm btn-secondary" onclick="MACInterview.stopOralTimer(${q.id})">⏸ Jeda</button>
                  <button type="button" class="btn btn-sm btn-ghost" onclick="MACInterview.resetOralTimer(${q.id}, 120)">🔄 Semula</button>
                </div>
              </div>

            </div>

            <div class="q-action-bar mt-3">
              <button type="button" class="btn btn-sm ${isPracticed ? 'btn-emerald' : 'btn-secondary'}" id="btn-practice-toggle-${q.id}" onclick="MACInterview.togglePracticed(${q.id})">
                ${isPracticed ? '✓ Telah Dilatih (Klik Batal)' : '◻ Tandakan Selesai Baca / Latih'}
              </button>

              <button type="button" class="btn btn-ghost btn-sm" id="btn-toggle-q-${q.id}" onclick="MACInterview.toggleQuestionAccordion(${q.id})">
                ${isExpanded ? '📕 Sembunyikan Jawapan ▴' : '📖 Buka Jawapan Penuh &amp; S.T.A.R ▾'}
              </button>
            </div>

          </div>
        </div>
      `;
    });

    listContainer.innerHTML = cardsHtml;
  }

  function clearSearch() {
    currentSearchQuery = '';
    const searchInput = document.getElementById('qbank-search-input');
    if (searchInput) searchInput.value = '';
    renderQuestionCards();
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ==========================================================================
  // BAHAGIAN 8: RENDER KESELURUHAN HAB TEMU DUGA (NOTA SOALAN DI ATAS SEKALI)
  // ==========================================================================
  function render(containerId = 'interview-app') {
    if (typeof document === 'undefined') return;
    const container = document.getElementById(containerId);
    if (!container) return;

    let savedScores = {};
    let savedNotes = { kekuatan: '', kelemahan: '', ulasan: '' };

    try {
      const stored = localStorage.getItem('mac_interview_scores');
      if (stored) savedScores = JSON.parse(stored);
      const storedNotes = localStorage.getItem('mac_interview_notes');
      if (storedNotes) savedNotes = JSON.parse(storedNotes);
    } catch (e) {}

    const currentResult = calculateScore(savedScores);

    // Bina baris jadual rubrik Lampiran F1
    let rubricRowsHtml = '';
    INTERVIEW_CRITERIA_MARA.forEach(item => {
      const curVal = savedScores[item.id] || 4; // Lalai 4
      let radiosHtml = '';
      for (let sc = 1; sc <= 5; sc++) {
        radiosHtml += `
          <label class="rubric-score-opt">
            <input type="radio" name="score_${item.id}" value="${sc}" ${curVal === sc ? 'checked' : ''} onchange="MACInterview.handleScoreChange('${item.id}', ${sc})">
            <span>${sc}</span>
          </label>
        `;
      }

      rubricRowsHtml += `
        <tr>
          <td class="font-bold text-center">${item.number}</td>
          <td>
            <div class="rubric-criterion-label"><strong>${item.title}</strong></div>
            <p class="text-sm text-secondary mt-1">${item.desc}</p>
            <div class="interview-guide-bubble mt-2">
              <span class="badge-subtle">Contoh Soalan:</span> <em>"${item.questionExample}"</em><br>
              <span class="badge-subtle mt-1">Tips Panel:</span> <small class="text-muted">${item.guidance}</small>
            </div>
          </td>
          <td class="text-center">
            <div class="rubric-score-group">
              ${radiosHtml}
            </div>
          </td>
        </tr>
      `;
    });

    container.innerHTML = `
      <div class="module-wrapper">
        <!-- Banner Tajuk Modul -->
        <div class="module-header-banner">
          <div class="module-header-text">
            <h2>NOTA KHAS 35 SOALAN &amp; JAWAPAN TEMU DUGA GURU PJPK MRSM</h2>
            <p>Sekali Buka Terus Baca: Skrip Jawapan Penuh + Pecahan S.T.A.R + Kata Kunci Panel MARA (Dilengkapi Borang Lampiran F1)</p>
          </div>
          <div class="header-action-group">
            <button type="button" class="btn btn-secondary" onclick="window.print()">
              🖨️ Cetak Nota / PDF (A4)
            </button>
          </div>
        </div>

        <!-- Bar Pilihan Paparan: Nota 35 Soalan & Jawapan (Utama/Default) vs Borang Rubrik Lampiran F1 -->
        <div class="iv-mode-switcher-bar mb-4">
          <button type="button" class="btn btn-primary" id="btn-subview-notes" onclick="MACInterview.switchSubView('notes')">
            📘 Nota Lengkap 35 Soalan &amp; Jawapan IV (Buka Terus)
          </button>
          <button type="button" class="btn btn-secondary" id="btn-subview-rubric" onclick="MACInterview.switchSubView('rubric')">
            📝 Borang Rubrik 10 Kriteria &amp; Pemasa 30 Minit (Lampiran F1)
          </button>
        </div>

        <!-- ===================================================================
             PAPARAN 1 (DEFAULT AKTIF): NOTA KHAS 35 SOALAN & JAWAPAN TEMU DUGA
             =================================================================== -->
        <div id="iv-view-notes" style="display: block;">
          <div class="card qbank-section-card" id="qbank-container">
            <div class="card-header border-mara d-flex justify-between items-center">
              <div>
                <h3 class="card-heading">📘 BUKU NOTA 35 SOALAN &amp; JAWAPAN TEMU DUGA (GURU PJPK DG9 / DG41)</h3>
                <p class="text-sm text-secondary mt-1">Semua jawapan dibuka terus supaya senang dibaca. Tapis mengikut 5 kategori atau cari kata kunci di bawah.</p>
              </div>
              <span class="badge badge-mara" id="qbank-count-badge">35 Soalan &amp; Jawapan</span>
            </div>

            <div class="card-body">
              <!-- Penjejak Kemajuan Bacaan / Latihan Calon -->
              <div class="qbank-progress-container mb-3">
                <div class="d-flex justify-between items-center mb-1">
                  <span class="text-sm font-bold text-navy">Kemajuan Bacaan &amp; Latih Tubi Nota Soalan IV:</span>
                  <span class="text-sm font-bold text-emerald" id="qbank-progress-text">0 / 35 Soalan Telah Dibaca / Dilatih (0%)</span>
                </div>
                <div class="progress-bar-track">
                  <div class="progress-bar-fill" id="qbank-progress-fill" style="width: 0%;"></div>
                </div>
              </div>

              <!-- Kawalan Carian & Penapis 5 Kategori -->
              <div class="qbank-controls-bar mb-4">
                <div class="q-search-box">
                  <span class="q-search-icon">🔍</span>
                  <input type="text" id="qbank-search-input" class="input-field" placeholder="Cari terus soalan atau jawapan (cth: Akta 249, buli, warden, homeroom, SEGAK, DRCAB, English)..." oninput="MACInterview.handleSearchInput(this.value)">
                </div>

                <div class="q-filter-chips mt-2">
                  <button type="button" class="q-filter-pill active" data-category="all" onclick="MACInterview.setCategoryFilter('all')">Semua Soalan (35)</button>
                  <button type="button" class="q-filter-pill" data-category="mara" onclick="MACInterview.setCategoryFilter('mara')">🏛️ 1. Akta &amp; MARA (S1–S7)</button>
                  <button type="button" class="q-filter-pill" data-category="mrsm" onclick="MACInterview.setCategoryFilter('mrsm')">🏫 2. Budaya MRSM (S8–S14)</button>
                  <button type="button" class="q-filter-pill" data-category="pjpk" onclick="MACInterview.setCategoryFilter('pjpk')">🏅 3. PJPK &amp; SOP Sukan (S15–S21)</button>
                  <button type="button" class="q-filter-pill" data-category="star" onclick="MACInterview.setCategoryFilter('star')">⭐ 4. Situasi STAR (S22–S28)</button>
                  <button type="button" class="q-filter-pill" data-category="spot" onclick="MACInterview.setCategoryFilter('spot')">🇬🇧 5. Spot Emas &amp; English (S29–S35)</button>
                </div>

                <div class="d-flex justify-between items-center mt-2">
                  <div class="btn-group-sm">
                    <button type="button" class="btn btn-secondary btn-sm" onclick="MACInterview.toggleAllQuestions(true)">📖 Buka Semua Jawapan (Senang Baca)</button>
                    <button type="button" class="btn btn-ghost btn-sm" onclick="MACInterview.toggleAllQuestions(false)">📁 Ringkaskan (Senarai Soalan Sahaja)</button>
                  </div>
                </div>
              </div>

              <!-- Kontena Senarai 35 Kad Soalan & Jawapan (Semua Dibuka Secara Lalai) -->
              <div id="interview-questions-list" class="question-cards-container">
                <!-- Dimuatkan secara dinamik oleh renderQuestionCards() -->
              </div>

            </div>
          </div>
        </div>

        <!-- ===================================================================
             PAPARAN 2: BORANG RUBRIK 10 KRITERIA & PEMASA 30 MINIT (LAMPIRAN F1)
             =================================================================== -->
        <div id="iv-view-rubric" style="display: none;">
          <!-- Kad Pemasa Temu Duga Kumpulan 30 Minit -->
          <div class="card mb-4">
            <div class="card-header border-navy">
              <h3 class="card-heading">PEMASA TEMU DUGA KUMPULAN (30 MINIT - KLAUSA 4.2)</h3>
              <span class="badge badge-info">30 Minit Kumpulan</span>
            </div>
            <div class="card-body text-center">
              <div class="teaching-timer-box">
                <div id="interview-timer-display" class="teaching-timer-digits">30:00</div>
                <p class="text-muted text-sm mt-2">Temu Duga dijalankan selama 30 minit secara berkumpulan di bilik yang sama mengikut Klausa 4.2 Lampiran A.</p>
              </div>

              <div class="btn-group-row mt-3">
                <button type="button" class="btn btn-primary btn-large" id="btn-int-start">
                  ▶️ Mula 30 Minit
                </button>
                <button type="button" class="btn btn-secondary btn-large" id="btn-int-pause" disabled>
                  ⏸️ Jeda
                </button>
                <button type="button" class="btn btn-ghost btn-large" id="btn-int-reset">
                  🔄 Semula
                </button>
              </div>
            </div>
          </div>

          <!-- Kad Skor & Rubrik Lampiran F1 (10 Kriteria) -->
          <div class="card mb-4">
            <div class="card-header border-red">
              <h3 class="card-heading">SEKSYEN 1 : PENILAIAN TEMU DUGA (10 KRITERIA RASMI MARA)</h3>
              <span class="badge badge-mara">Skala 1 - 5 (5 Tertinggi) • Markah Penuh: 50</span>
            </div>
            <div class="card-body">
              <!-- Kad Ringkasan Markah -->
              <div class="score-summary-bar mb-4">
                <div class="score-summary-item">
                  <span class="text-xs text-muted">Jumlah Markah Temu Duga:</span>
                  <strong id="display-interview-total" class="text-2xl">${currentResult.totalScore} / 50</strong>
                </div>
                <div class="score-summary-item">
                  <span class="text-xs text-muted">Status Cadangan Panel:</span>
                  <strong id="display-interview-decision" class="text-xl ${currentResult.isPass ? 'text-emerald' : 'text-danger'}">
                    ${currentResult.decisionFull}
                  </strong>
                </div>
              </div>

              <!-- Jadual 10 Kriteria Lampiran F1 -->
              <div class="table-responsive">
                <table class="table-custom rubric-table">
                  <thead>
                    <tr>
                      <th style="width: 5%;">Bil</th>
                      <th style="width: 65%;">10 Kriteria Penilaian Temu Duga Lampiran F1</th>
                      <th style="width: 30%;" class="text-center">Skor (1 - 5)</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${rubricRowsHtml}
                  </tbody>
                </table>
              </div>

              <!-- Seksyen 2: Kekuatan & Kelemahan -->
              <div class="mt-4 form-grid-2">
                <div class="form-group">
                  <label for="int-kekuatan"><strong>SEKSYEN 2 : KEKUATAN CALON:</strong></label>
                  <textarea id="int-kekuatan" class="input-field" rows="3" placeholder="Catatan kekuatan penguasaan subjek, kemahiran komunikasi, karisma pendidik...">${savedNotes.kekuatan}</textarea>
                </div>
                <div class="form-group">
                  <label for="int-kelemahan"><strong>KELEMAHAN CALON:</strong></label>
                  <textarea id="int-kelemahan" class="input-field" rows="3" placeholder="Catatan ruang penambahbaikan calon...">${savedNotes.kelemahan}</textarea>
                </div>
              </div>

              <!-- Seksyen 3: Ulasan Keseluruhan Panel -->
              <div class="form-group mt-3">
                <label for="int-ulasan"><strong>SEKSYEN 3 : ULASAN KESELURUHAN PANEL:</strong></label>
                <textarea id="int-ulasan" class="input-field" rows="3" placeholder="Ulasan keseluruhan potensi calon sebagai Pegawai Perkhidmatan Pendidikan DG9 MARA...">${savedNotes.ulasan}</textarea>
              </div>

              <!-- Seksyen 4: Cadangan Panel (Pilihan 40-50 vs Gagal <40) -->
              <div class="cadangan-panel-box mt-4">
                <h4 class="font-bold text-navy">SEKSYEN 4 : CADANGAN PANEL (LAMPIRAN F1)</h4>
                <div class="radio-group-row mt-2">
                  <div class="cadangan-pill ${currentResult.totalScore >= 40 ? 'pill-active-green' : ''}">
                    <span class="check-box-indicator">${currentResult.totalScore >= 40 ? '☑' : '☐'}</span>
                    <strong>Pilihan ( 40 – 50 )</strong>
                  </div>
                  <div class="cadangan-pill ${currentResult.totalScore < 40 ? 'pill-active-red' : ''}">
                    <span class="check-box-indicator">${currentResult.totalScore < 40 ? '☑' : '☐'}</span>
                    <strong>Gagal ( &lt; 40 )</strong>
                  </div>
                </div>
              </div>

              <div class="mt-4">
                <button type="button" class="btn btn-primary" id="btn-save-interview">💾 Simpan Skor &amp; Catatan Temu Duga</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    `;

    // Pasang Event Listeners & Inisialisasi Nota Soalan
    setupEventListeners();
    renderQuestionCards();
    updatePracticedProgress();
  }

  function handleScoreChange(criterionId, scoreVal) {
    let savedScores = {};
    try {
      const stored = localStorage.getItem('mac_interview_scores');
      if (stored) savedScores = JSON.parse(stored);
    } catch (e) {}

    savedScores[criterionId] = parseInt(scoreVal, 10);
    try {
      localStorage.setItem('mac_interview_scores', JSON.stringify(savedScores));
    } catch (e) {}

    const res = calculateScore(savedScores);
    const totEl = document.getElementById('display-interview-total');
    const decEl = document.getElementById('display-interview-decision');
    if (totEl) totEl.innerText = `${res.totalScore} / 50`;
    if (decEl) {
      decEl.innerText = res.decisionFull;
      decEl.className = `text-xl ${res.isPass ? 'text-emerald' : 'text-danger'}`;
    }
  }

  function setupEventListeners() {
    const btnStart = document.getElementById('btn-int-start');
    const btnPause = document.getElementById('btn-int-pause');
    const btnReset = document.getElementById('btn-int-reset');

    if (btnStart) btnStart.addEventListener('click', startTimer);
    if (btnPause) btnPause.addEventListener('click', pauseTimer);
    if (btnReset) btnReset.addEventListener('click', resetTimer);

    const btnSave = document.getElementById('btn-save-interview');
    if (btnSave) {
      btnSave.addEventListener('click', () => {
        const notes = {
          kekuatan: document.getElementById('int-kekuatan').value,
          kelemahan: document.getElementById('int-kelemahan').value,
          ulasan: document.getElementById('int-ulasan').value
        };

        try {
          localStorage.setItem('mac_interview_notes', JSON.stringify(notes));
        } catch (e) {}

        if (window.MACApp && typeof window.MACApp.showToast === 'function') {
          window.MACApp.showToast('Skor dan Catatan Temu Duga berjaya disimpan.', 'success');
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
    INTERVIEW_DURATION_SEC,
    INTERVIEW_CRITERIA_MARA,
    INTERVIEW_QUESTIONS,
    DIRECT_SPOKEN_SCRIPTS,
    calculateScore,
    handleScoreChange,
    startTimer,
    pauseTimer,
    resetTimer,
    setCategoryFilter,
    handleSearchInput,
    clearSearch,
    toggleQuestionAccordion,
    toggleAllQuestions,
    togglePracticed,
    copyQuestionText,
    startOralTimer,
    stopOralTimer,
    resetOralTimer,
    switchSubView,
    toggleQuickNotes,
    render
  };
})();

// Eksport untuk Node.js & Pelayar
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MACInterview;
}
if (typeof window !== 'undefined') {
  window.MACInterview = MACInterview;
}
