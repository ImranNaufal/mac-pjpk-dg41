/**
 * ============================================================================
 * MARA ASSESSMENT CENTRE (MAC) - SKIM DG41 PJPK
 * Modul 6: Simulator Temu Duga Panel MARA (Teknik S.T.A.R)
 * Module: js/interview.js
 * 100% Offline-Ready | Pure Vanilla JS (ES6+)
 * Berpandukan Akta 249, SPMRSM, Isu Keselamatan PJPK & Format S.T.A.R
 * ============================================================================
 */

(function (global) {
  'use strict';

  // ==========================================================================
  // 1. DATASET 28 SOALAN SAHIH TEMU DUGA MAC MARA DG41
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
    }
  ];

  // ==========================================================================
  // 2. KELAS PEMASA LISAN TEMU DUGA (INTERVIEW TIMER)
  // ==========================================================================
  class InterviewTimer {
    constructor() {
      this.totalSeconds = 120;
      this.remainingSeconds = 120;
      this.running = false;
      this.paused = false;
      this.intervalId = null;
      this.onTickCallback = null;
      this.onCompleteCallback = null;
      this.audioContext = null;
    }

    start(seconds = 120, onTick = null, onComplete = null) {
      this.stop();
      this.totalSeconds = seconds;
      this.remainingSeconds = seconds;
      this.running = true;
      this.paused = false;
      this.onTickCallback = onTick;
      this.onCompleteCallback = onComplete;

      if (this.onTickCallback) {
        this.onTickCallback(this.remainingSeconds, this.formatTime(this.remainingSeconds));
      }

      this.intervalId = setInterval(() => {
        if (!this.paused && this.running) {
          this.remainingSeconds--;

          if (this.onTickCallback) {
            this.onTickCallback(this.remainingSeconds, this.formatTime(this.remainingSeconds));
          }

          if (this.remainingSeconds <= 0) {
            this.stop();
            this.playBeep();
            if (this.onCompleteCallback) {
              this.onCompleteCallback();
            }
          }
        }
      }, 1000);
    }

    pause() {
      if (this.running && !this.paused) {
        this.paused = true;
      }
    }

    resume() {
      if (this.running && this.paused) {
        this.paused = false;
      }
    }

    stop() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      this.running = false;
      this.paused = false;
    }

    reset(seconds = this.totalSeconds) {
      this.stop();
      this.totalSeconds = seconds;
      this.remainingSeconds = seconds;
      if (this.onTickCallback) {
        this.onTickCallback(this.remainingSeconds, this.formatTime(this.remainingSeconds));
      }
    }

    isRunning() {
      return this.running && !this.paused;
    }

    isPaused() {
      return this.running && this.paused;
    }

    getRemainingSeconds() {
      return this.remainingSeconds;
    }

    formatTime(sec) {
      const s = Math.max(0, Math.floor(sec || 0));
      const mins = Math.floor(s / 60);
      const remSecs = s % 60;
      const mm = String(mins).padStart(2, '0');
      const ss = String(remSecs).padStart(2, '0');
      return `${mm}:${ss}`;
    }

    playBeep() {
      try {
        const AudioCtx = typeof window !== 'undefined'
          ? (window.AudioContext || window.webkitAudioContext)
          : null;

        if (!AudioCtx) return;

        if (!this.audioContext || this.audioContext.state === 'closed') {
          this.audioContext = new AudioCtx();
        }

        const ctx = this.audioContext;
        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        // Nada bunyi tamat masa yang lembut dan profesional (2 bip berturutan)
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now); // A5
        osc.frequency.setValueAtTime(1046.5, now + 0.15); // C6

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.45);
      } catch (e) {
        // Abaikan dalam persekitaran yang tiada audio sokongan
      }
    }
  }

  // ==========================================================================
  // 3. ENJIN SIMULATOR TEMU DUGA (INTERVIEW SIMULATOR)
  // ==========================================================================
  class InterviewSimulator {
    constructor() {
      this.questions = INTERVIEW_QUESTIONS;
      this.timer = new InterviewTimer();
      this.STORAGE_KEY_RATINGS = 'mac_interview_ratings';
      this.STORAGE_KEY_KPI = 'mac_interview_practiced_count';
    }

    getAllQuestions() {
      return this.questions;
    }

    getQuestionById(id) {
      const numericId = parseInt(id, 10);
      return this.questions.find(q => q.id === numericId) || null;
    }

    filterByCategory(categoryKey) {
      if (!categoryKey || categoryKey === 'all' || categoryKey === 'semua') {
        return this.questions;
      }
      const cat = String(categoryKey).toLowerCase().trim();
      return this.questions.filter(q => q.category.toLowerCase() === cat);
    }

    searchQuestions(query) {
      if (!query || typeof query !== 'string' || !query.trim()) {
        return this.questions;
      }

      const qClean = query.toLowerCase().trim();

      return this.questions.filter(item => {
        const inQuestion = item.question && item.question.toLowerCase().includes(qClean);
        const inFocus = item.focusArea && item.focusArea.toLowerCase().includes(qClean);
        const inCategory = item.categoryLabel && item.categoryLabel.toLowerCase().includes(qClean);
        const inKeywords = Array.isArray(item.keywords) && item.keywords.some(k => k.toLowerCase().includes(qClean));

        const inStar = item.starAnswer && (
          (item.starAnswer.situation && item.starAnswer.situation.toLowerCase().includes(qClean)) ||
          (item.starAnswer.task && item.starAnswer.task.toLowerCase().includes(qClean)) ||
          (item.starAnswer.action && item.starAnswer.action.toLowerCase().includes(qClean)) ||
          (item.starAnswer.result && item.starAnswer.result.toLowerCase().includes(qClean))
        );

        return inQuestion || inFocus || inCategory || inKeywords || inStar;
      });
    }

    /**
     * Menjana sesi simulasi temu duga seimbang (Mock Interview Session).
     * Standard MAC: 1 MARA + 1 MRSM + 1 PJPK + 2 STAR = 5 Soalan Seimbang.
     */
    generateMockSession(count = 5) {
      const maraPool = this.filterByCategory('mara');
      const mrsmPool = this.filterByCategory('mrsm');
      const pjpkPool = this.filterByCategory('pjpk');
      const starPool = this.filterByCategory('star');

      const shuffle = (arr) => {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
      };

      const selected = [];
      const selectedIds = new Set();

      const addUnique = (pool) => {
        const shuffled = shuffle(pool);
        for (const item of shuffled) {
          if (!selectedIds.has(item.id)) {
            selectedIds.add(item.id);
            selected.push(item);
            return item;
          }
        }
        return null;
      };

      // 1 Soalan MARA
      addUnique(maraPool);
      // 1 Soalan MRSM
      addUnique(mrsmPool);
      // 1 Soalan PJPK
      addUnique(pjpkPool);
      // 2 Soalan STAR
      addUnique(starPool);
      addUnique(starPool);

      // Sekiranya count diminta lebih dari 5, isi baki secara rawak tanpa duplikasi
      while (selected.length < count && selected.length < this.questions.length) {
        const remainingPool = this.questions.filter(q => !selectedIds.has(q.id));
        if (remainingPool.length === 0) break;
        addUnique(remainingPool);
      }

      return selected;
    }

    getTimer() {
      return this.timer;
    }

    toggleTimer(seconds = 120, onTick = null, onComplete = null) {
      if (this.timer.isRunning()) {
        this.timer.pause();
      } else if (this.timer.isPaused()) {
        this.timer.resume();
      } else {
        this.timer.start(seconds, onTick, onComplete);
      }
      return this.timer;
    }

    getStorage() {
      try {
        if (typeof window !== 'undefined' && window.localStorage && typeof window.localStorage.getItem === 'function') {
          return window.localStorage;
        }
        if (typeof localStorage !== 'undefined' && typeof localStorage.getItem === 'function') {
          return localStorage;
        }
        if (typeof global !== 'undefined' && global.localStorage && typeof global.localStorage.getItem === 'function') {
          return global.localStorage;
        }
      } catch (e) {}
      return null;
    }

    // --- PENGURUSAN REKOD LATIHAN KENDIRI & LOCALSTORAGE ---

    getAllRatings() {
      try {
        const storage = this.getStorage();
        if (!storage) return {};
        const data = storage.getItem(this.STORAGE_KEY_RATINGS);
        return data ? JSON.parse(data) : {};
      } catch (e) {
        console.warn('Gagal membaca ratings dari localStorage:', e);
        return {};
      }
    }

    getSelfRating(questionId) {
      const qId = parseInt(questionId, 10);
      const ratings = this.getAllRatings();
      return ratings[qId] || null;
    }

    recordSelfRating(questionId, rating, notes = '') {
      const qId = parseInt(questionId, 10);
      const rate = parseInt(rating, 10);

      if (isNaN(rate) || rate < 1 || rate > 5) {
        throw new Error(`Rating tidak sah (mesti antara 1 hingga 5): ${rating}`);
      }

      const q = this.getQuestionById(qId);
      if (!q) {
        throw new Error(`Soalan #${questionId} tidak ditemui.`);
      }

      const record = {
        questionId: qId,
        rating: rate,
        notes: typeof notes === 'string' ? notes.trim() : '',
        timestamp: new Date().toISOString()
      };

      try {
        const storage = this.getStorage();
        if (storage) {
          const ratings = this.getAllRatings();
          ratings[qId] = record;
          storage.setItem(this.STORAGE_KEY_RATINGS, JSON.stringify(ratings));

          // Kemaskini jumlah soalan unik yang telah dilatih
          const practicedCount = Object.keys(ratings).length;
          storage.setItem(this.STORAGE_KEY_KPI, String(practicedCount));

          // Kemaskini dashboard MACApp jika ada
          if (typeof global.MACApp !== 'undefined' && typeof global.MACApp.updateDashboardStats === 'function') {
            global.MACApp.updateDashboardStats();
          }
        }
      } catch (e) {
        console.warn('Gagal menyimpan rating ke localStorage:', e);
      }

      return record;
    }

    getPracticedCount() {
      const ratings = this.getAllRatings();
      return Object.keys(ratings).length;
    }

    resetRatings() {
      try {
        const storage = this.getStorage();
        if (storage) {
          storage.removeItem(this.STORAGE_KEY_RATINGS);
          storage.setItem(this.STORAGE_KEY_KPI, '0');
        }
      } catch (e) {
        console.warn('Gagal memadam ratings:', e);
      }
    }
  }

  // ==========================================================================
  // 4. PENGAWAL ANTARAMUKA PENGGUNA (INTERVIEW UI CONTROLLER)
  // ==========================================================================
  const InterviewUI = {
    simulator: null,
    currentMode: 'all', // 'all' | 'mock'
    currentCategory: 'all',
    currentSearchQuery: '',
    mockSessionQuestions: [],
    activeMockIndex: 0,
    activeQuestionId: 1,

    init(containerEl) {
      if (!containerEl) return;
      this.simulator = new InterviewSimulator();
      this.renderApp(containerEl);
    },

    renderApp(container) {
      container.innerHTML = `
        <div class="interview-wrapper">
          <!-- Papan Pemuka Kemajuan Latihan Temu Duga -->
          <div class="card p-3 mb-4 interview-dashboard-bar">
            <div class="dashboard-bar-content">
              <div class="bar-info">
                <span class="badge badge-gold">Status Persediaan Calon DG41</span>
                <h3 class="bar-title">Kemajuan Latihan Temu Duga Panel MARA</h3>
                <p class="bar-desc text-muted mb-0">
                  <span id="interview-practiced-counter">0</span> daripada 28 soalan telah dilatih. Kuasai Falsafah MARA, SPMRSM, dan format S.T.A.R.
                </p>
              </div>
              <div class="bar-progress-box">
                <div class="progress-label">
                  <span>Peratusan Selesai</span>
                  <strong id="interview-progress-percent">0%</strong>
                </div>
                <div class="progress-track">
                  <div id="interview-progress-fill" class="progress-fill" style="width: 0%;"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bar Kawalan: Mod, Penapis & Carian -->
          <div class="card p-3 mb-4 interview-controls-card">
            <div class="interview-controls-row">
              <!-- Pilihan Mod -->
              <div class="control-group mode-toggle-group">
                <label class="control-label">Mod Temu Duga:</label>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-sm btn-primary active" id="btn-mode-all">
                    Semua Soalan (28)
                  </button>
                  <button type="button" class="btn btn-sm btn-outline" id="btn-mode-mock">
                    Simulasi Mock (5 Soalan)
                  </button>
                </div>
              </div>

              <!-- Penapis Kategori (Mod Semua) -->
              <div class="control-group category-filter-group" id="group-category-filter">
                <label class="control-label">Kategori Soalan:</label>
                <div class="filter-pills" id="filter-pills-container">
                  <button type="button" class="pill-btn active" data-category="all">Semua (28)</button>
                  <button type="button" class="pill-btn" data-category="mara">Akta & MARA (7)</button>
                  <button type="button" class="pill-btn" data-category="mrsm">Sistem MRSM (7)</button>
                  <button type="button" class="pill-btn" data-category="pjpk">Pedagogi PJPK (7)</button>
                  <button type="button" class="pill-btn" data-category="star">Situasi STAR (7)</button>
                </div>
              </div>

              <!-- Kotak Carian Teks -->
              <div class="control-group search-group" id="group-search-filter">
                <label class="control-label" for="interview-search-input">Carian Kata Kunci / Soalan:</label>
                <div class="search-input-wrapper">
                  <input type="text" id="interview-search-input" class="form-input" placeholder="Cth: Akta 249, Homeroom, Bleep Test, CPR...">
                  <button type="button" class="btn-clear-search" id="btn-clear-search" title="Kosongkan carian">&times;</button>
                </div>
              </div>
            </div>

            <!-- Makluman Mod Mock -->
            <div id="mock-status-banner" class="mock-status-banner mt-3" style="display: none;">
              <div class="mock-banner-info">
                <strong>Mod Simulasi Temu Duga Seimbang:</strong>
                <span>1 Soalan MARA + 1 Soalan MRSM + 1 Soalan PJPK + 2 Soalan Situasi STAR.</span>
              </div>
              <div class="mock-banner-actions">
                <button type="button" class="btn btn-sm btn-outline-light" id="btn-refresh-mock">Jana Simulasi Baharu</button>
              </div>
            </div>
          </div>

          <!-- Bekas Utama Paparan Soalan -->
          <div id="interview-display-container">
            <!-- Disuntik secara dinamik -->
          </div>
        </div>
      `;

      this.bindControls(container);
      this.updateProgressIndicator(container);
      this.renderQuestionsView(container);
    },

    bindControls(container) {
      const btnModeAll = container.querySelector('#btn-mode-all');
      const btnModeMock = container.querySelector('#btn-mode-mock');
      const categoryGroup = container.querySelector('#group-category-filter');
      const searchGroup = container.querySelector('#group-search-filter');
      const mockBanner = container.querySelector('#mock-status-banner');
      const searchInput = container.querySelector('#interview-search-input');
      const clearSearchBtn = container.querySelector('#btn-clear-search');
      const refreshMockBtn = container.querySelector('#btn-refresh-mock');

      // Tukar Mod Semua Soalan
      btnModeAll.addEventListener('click', () => {
        if (this.currentMode === 'all') return;
        this.currentMode = 'all';
        btnModeAll.classList.add('active', 'btn-primary');
        btnModeAll.classList.remove('btn-outline');
        btnModeMock.classList.remove('active', 'btn-primary');
        btnModeMock.classList.add('btn-outline');

        categoryGroup.style.display = 'block';
        searchGroup.style.display = 'block';
        mockBanner.style.display = 'none';

        this.renderQuestionsView(container);
      });

      // Tukar Mod Simulasi Mock
      btnModeMock.addEventListener('click', () => {
        if (this.currentMode === 'mock') return;
        this.currentMode = 'mock';
        btnModeMock.classList.add('active', 'btn-primary');
        btnModeMock.classList.remove('btn-outline');
        btnModeAll.classList.remove('active', 'btn-primary');
        btnModeAll.classList.add('btn-outline');

        categoryGroup.style.display = 'none';
        searchGroup.style.display = 'none';
        mockBanner.style.display = 'flex';

        this.mockSessionQuestions = this.simulator.generateMockSession(5);
        this.activeMockIndex = 0;
        this.renderQuestionsView(container);
      });

      // Jana Semula Sesi Mock
      refreshMockBtn.addEventListener('click', () => {
        this.mockSessionQuestions = this.simulator.generateMockSession(5);
        this.activeMockIndex = 0;
        this.renderQuestionsView(container);
        if (typeof global.MACApp !== 'undefined' && global.MACApp.showToast) {
          global.MACApp.showToast('Sesi simulasi baharu berjaya dijana.', 'success', 2000);
        }
      });

      // Penapis Kategori
      const pillButtons = container.querySelectorAll('.pill-btn');
      pillButtons.forEach(pill => {
        pill.addEventListener('click', () => {
          pillButtons.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          this.currentCategory = pill.getAttribute('data-category') || 'all';
          this.renderQuestionsView(container);
        });
      });

      // Kotak Carian Teks
      searchInput.addEventListener('input', (e) => {
        this.currentSearchQuery = e.target.value.trim();
        this.renderQuestionsView(container);
      });

      clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        this.currentSearchQuery = '';
        this.renderQuestionsView(container);
      });
    },

    updateProgressIndicator(container) {
      const count = this.simulator.getPracticedCount();
      const total = 28;
      const percent = Math.round((count / total) * 100);

      const counterEl = container.querySelector('#interview-practiced-counter');
      const percentEl = container.querySelector('#interview-progress-percent');
      const fillEl = container.querySelector('#interview-progress-fill');

      if (counterEl) counterEl.textContent = count;
      if (percentEl) percentEl.textContent = `${percent}%`;
      if (fillEl) fillEl.style.width = `${percent}%`;
    },

    renderQuestionsView(container) {
      const displayContainer = container.querySelector('#interview-display-container');
      if (!displayContainer) return;

      if (this.currentMode === 'mock') {
        this.renderMockView(displayContainer, container);
      } else {
        this.renderAllQuestionsView(displayContainer, container);
      }
    },

    /**
     * Paparan Mod Semua Soalan (Grid Senarai & Kad Interaktif)
     */
    renderAllQuestionsView(displayContainer, mainContainer) {
      let filtered = this.simulator.filterByCategory(this.currentCategory);
      if (this.currentSearchQuery) {
        filtered = this.simulator.searchQuestions(this.currentSearchQuery);
        if (this.currentCategory !== 'all') {
          filtered = filtered.filter(q => q.category === this.currentCategory);
        }
      }

      if (filtered.length === 0) {
        displayContainer.innerHTML = `
          <div class="card p-5 text-center text-muted">
            <h4>Tiada soalan ditemui untuk carian "${this.escapeHtml(this.currentSearchQuery)}"</h4>
            <p>Cuba gunakan kata kunci lain atau pilih kategori "Semua".</p>
          </div>
        `;
        return;
      }

      displayContainer.innerHTML = `
        <div class="questions-list-wrapper">
          <div class="list-meta-bar mb-3">
            <span class="text-muted">Menunjukkan <strong>${filtered.length}</strong> soalan</span>
          </div>
          <div class="questions-grid">
            ${filtered.map(q => this.buildQuestionCardHtml(q, false)).join('')}
          </div>
        </div>
      `;

      this.bindCardInteractions(displayContainer, mainContainer);
    },

    /**
     * Paparan Mod Simulasi Temu Duga (Mock Interview 5 Soalan Berperingkat)
     */
    renderMockView(displayContainer, mainContainer) {
      const questions = this.mockSessionQuestions;
      const currentIndex = this.activeMockIndex;
      const currentQuestion = questions[currentIndex];

      if (!currentQuestion) {
        displayContainer.innerHTML = `<div class="card p-4 text-center">Ralat memuatkan soalan simulasi.</div>`;
        return;
      }

      displayContainer.innerHTML = `
        <div class="mock-session-wrapper">
          <!-- Bar Navigasi Sesi Mock -->
          <div class="mock-nav-bar card p-3 mb-3">
            <div class="mock-nav-info">
              <span class="badge badge-primary">Sesi Temu Duga Panel</span>
              <h4 class="mb-0">Soalan ${currentIndex + 1} daripada ${questions.length}</h4>
            </div>
            <div class="mock-stepper-dots">
              ${questions.map((q, idx) => `
                <button type="button" class="mock-step-dot ${idx === currentIndex ? 'active' : ''} ${this.simulator.getSelfRating(q.id) ? 'completed' : ''}" data-index="${idx}" title="Soalan ${idx + 1} (${q.category.toUpperCase()})">
                  ${idx + 1}
                </button>
              `).join('')}
            </div>
            <div class="mock-nav-actions">
              <button type="button" class="btn btn-sm btn-outline" id="btn-mock-prev" ${currentIndex === 0 ? 'disabled' : ''}>&larr; Sebelum</button>
              <button type="button" class="btn btn-sm btn-primary" id="btn-mock-next">
                ${currentIndex === questions.length - 1 ? 'Selesai Sesi' : 'Seterusnya &rarr;'}
              </button>
            </div>
          </div>

          <!-- Kad Soalan Aktif -->
          <div class="mock-active-card-wrap">
            ${this.buildQuestionCardHtml(currentQuestion, true)}
          </div>
        </div>
      `;

      // Butang Navigasi Mock
      const prevBtn = displayContainer.querySelector('#btn-mock-prev');
      const nextBtn = displayContainer.querySelector('#btn-mock-next');
      const dots = displayContainer.querySelectorAll('.mock-step-dot');

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          if (this.activeMockIndex > 0) {
            this.activeMockIndex--;
            this.renderMockView(displayContainer, mainContainer);
          }
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          if (this.activeMockIndex < questions.length - 1) {
            this.activeMockIndex++;
            this.renderMockView(displayContainer, mainContainer);
          } else {
            if (typeof global.MACApp !== 'undefined' && global.MACApp.showToast) {
              global.MACApp.showToast('Tahniah! Anda telah melengkapkan 5 soalan simulasi temu duga seimbang.', 'success', 3500);
            }
          }
        });
      }

      dots.forEach(dot => {
        dot.addEventListener('click', () => {
          const idx = parseInt(dot.getAttribute('data-index'), 10);
          if (!isNaN(idx)) {
            this.activeMockIndex = idx;
            this.renderMockView(displayContainer, mainContainer);
          }
        });
      });

      this.bindCardInteractions(displayContainer, mainContainer);
    },

    /**
     * Menjana HTML bagi satu kad soalan interaktif
     */
    buildQuestionCardHtml(question, isSingleMock = false) {
      const ratingData = this.simulator.getSelfRating(question.id);
      const isPracticed = !!ratingData;
      const currentRating = ratingData ? ratingData.rating : 0;
      const currentNotes = ratingData ? ratingData.notes : '';

      const categoryBadgeClass = {
        mara: 'badge-crimson',
        mrsm: 'badge-navy',
        pjpk: 'badge-success',
        star: 'badge-gold'
      }[question.category] || 'badge-primary';

      return `
        <article class="card question-card ${isPracticed ? 'practiced' : ''}" data-question-id="${question.id}">
          <div class="card-header question-card-header">
            <div class="header-left">
              <span class="badge ${categoryBadgeClass}">${question.categoryLabel}</span>
              <span class="question-number-pill">Soalan #${question.id}</span>
              ${isPracticed ? '<span class="practiced-badge" title="Telah dilatih">&#10003; Telah Dilatih</span>' : ''}
            </div>
            <div class="header-right">
              <button type="button" class="btn-copy-question btn btn-sm btn-outline-light" data-qid="${question.id}" title="Salin soalan">
                Salin Soalan
              </button>
            </div>
          </div>

          <div class="card-body question-card-body">
            <!-- Teks Soalan & Fokus -->
            <h3 class="question-title">${this.escapeHtml(question.question)}</h3>
            <div class="focus-area-tag">
              <span class="focus-icon">&#127919;</span>
              <strong>Fokus Penilaian:</strong> ${this.escapeHtml(question.focusArea)}
            </div>

            <!-- Bahagian Pemasa Lisan 2/3 Minit -->
            <div class="oral-timer-box mt-3" data-qid="${question.id}">
              <div class="timer-display-wrap">
                <span class="timer-label">&#9201; Pemasa Menjawab Lisan:</span>
                <span class="timer-digits" id="timer-digits-${question.id}">02:00</span>
              </div>
              <div class="timer-actions">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline btn-timer-preset" data-seconds="120" data-qid="${question.id}">2 Minit</button>
                  <button type="button" class="btn btn-sm btn-outline btn-timer-preset" data-seconds="180" data-qid="${question.id}">3 Minit</button>
                </div>
                <button type="button" class="btn btn-sm btn-primary btn-timer-toggle" data-qid="${question.id}">
                  Mula Berfikir &amp; Jawab
                </button>
                <button type="button" class="btn btn-sm btn-outline btn-timer-reset" data-qid="${question.id}">
                  Reset
                </button>
              </div>
            </div>

            <!-- Butang Buka/Tutup Jawapan STAR & Kata Kunci -->
            <div class="star-toggle-bar mt-3">
              <button type="button" class="btn btn-outline btn-block btn-toggle-star" data-qid="${question.id}" aria-expanded="false">
                <span class="toggle-text">&#9660; Buka Rangka Jawapan S.T.A.R &amp; Kata Kunci Markah Tinggi</span>
              </button>
            </div>

            <!-- Kandungan Terperinci S.T.A.R (Boleh Ditogol) -->
            <div class="star-details-pane mt-3" id="star-pane-${question.id}" style="display: none;">
              <!-- Panel Formula S.T.A.R -->
              <div class="star-breakdown-grid">
                <div class="star-step-card step-s">
                  <div class="step-badge">S - Situation (Latar Belakang 15%)</div>
                  <p class="step-text">${this.escapeHtml(question.starAnswer.situation)}</p>
                </div>
                <div class="star-step-card step-t">
                  <div class="step-badge">T - Task (Tanggungjawab / Cabaran 15%)</div>
                  <p class="step-text">${this.escapeHtml(question.starAnswer.task)}</p>
                </div>
                <div class="star-step-card step-a">
                  <div class="step-badge">A - Action (Tindakan Proaktif 50%)</div>
                  <p class="step-text">${this.escapeHtml(question.starAnswer.action)}</p>
                </div>
                <div class="star-step-card step-r">
                  <div class="step-badge">R - Result (Hasil Terukur &amp; Refleksi 20%)</div>
                  <p class="step-text">${this.escapeHtml(question.starAnswer.result)}</p>
                </div>
              </div>

              <!-- Kata Kunci Markah Tinggi -->
              <div class="keywords-box mt-3">
                <div class="keywords-title">
                  <strong>&#128205; Kata Kunci Markah Tinggi Panel MARA:</strong>
                </div>
                <div class="keywords-pills mt-2">
                  ${question.keywords.map(kw => `<span class="keyword-pill">${this.escapeHtml(kw)}</span>`).join('')}
                </div>
              </div>

              <!-- Kesilapan Lazim / Pantang Larang -->
              <div class="pitfalls-box mt-3">
                <div class="pitfalls-title">
                  <strong>&#9888; Kesilapan Lazim Yang Memotong Markah:</strong>
                </div>
                <ul class="pitfalls-list mt-1">
                  ${Array.isArray(question.pitfalls)
                    ? question.pitfalls.map(pf => `<li>${this.escapeHtml(pf)}</li>`).join('')
                    : `<li>${this.escapeHtml(question.pitfalls)}</li>`}
                </ul>
              </div>
            </div>

            <!-- Borang Catatan Latihan Calon & Penilaian Keyakinan Kendiri -->
            <div class="candidate-practice-box mt-4">
              <div class="practice-box-header">
                <strong>&#9997; Catatan Latihan Kendiri &amp; Penilaian Keyakinan:</strong>
              </div>

              <div class="star-rating-row mt-2">
                <span class="rating-label">Tahap Keyakinan Menjawab:</span>
                <div class="star-rating-selector" data-qid="${question.id}">
                  ${[1, 2, 3, 4, 5].map(star => `
                    <button type="button" class="btn-star-rate ${star <= currentRating ? 'active' : ''}" data-star="${star}" data-qid="${question.id}" title="${star} Bintang">
                      &#9733;
                    </button>
                  `).join('')}
                  <span class="rating-text-feedback" id="rating-feedback-${question.id}">
                    ${currentRating > 0 ? `${currentRating}/5 Bintang` : 'Belum dinilai'}
                  </span>
                </div>
              </div>

              <div class="practice-notes-row mt-2">
                <textarea class="form-textarea practice-notes-input" id="notes-input-${question.id}" placeholder="Tulis huraian atau isi penting jawapan anda semasa latihan lisan..." rows="2">${this.escapeHtml(currentNotes)}</textarea>
              </div>

              <div class="practice-save-row mt-2">
                <button type="button" class="btn btn-sm btn-primary btn-save-practice" data-qid="${question.id}">
                  Simpan Penilaian Kendiri
                </button>
                <span class="save-status-msg text-success" id="save-status-${question.id}" style="display: none;">
                  &#10003; Rekod disimpan!
                </span>
              </div>
            </div>
          </div>
        </article>
      `;
    },

    bindCardInteractions(scopeContainer, mainContainer) {
      // 1. Togol Rangka Jawapan STAR
      const toggleButtons = scopeContainer.querySelectorAll('.btn-toggle-star');
      toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const qId = btn.getAttribute('data-qid');
          const pane = scopeContainer.querySelector(`#star-pane-${qId}`);
          if (!pane) return;

          const isHidden = pane.style.display === 'none';
          pane.style.display = isHidden ? 'block' : 'none';
          btn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');

          const toggleText = btn.querySelector('.toggle-text');
          if (toggleText) {
            toggleText.innerHTML = isHidden
              ? '&#9650; Tutup Rangka Jawapan S.T.A.R &amp; Kata Kunci'
              : '&#9660; Buka Rangka Jawapan S.T.A.R &amp; Kata Kunci Markah Tinggi';
          }
        });
      });

      // 2. Pemasa Lisan Interaktif bagi Setiap Kad
      const timerBoxes = scopeContainer.querySelectorAll('.oral-timer-box');
      timerBoxes.forEach(box => {
        const qId = box.getAttribute('data-qid');
        const digits = box.querySelector(`#timer-digits-${qId}`);
        const toggleBtn = box.querySelector('.btn-timer-toggle');
        const resetBtn = box.querySelector('.btn-timer-reset');
        const presetBtns = box.querySelectorAll('.btn-timer-preset');

        let targetDuration = 120;
        let cardTimerInstance = new InterviewTimer();

        presetBtns.forEach(pBtn => {
          pBtn.addEventListener('click', () => {
            const secs = parseInt(pBtn.getAttribute('data-seconds'), 10) || 120;
            targetDuration = secs;
            presetBtns.forEach(b => b.classList.remove('btn-primary', 'active'));
            pBtn.classList.add('btn-primary', 'active');
            cardTimerInstance.reset(secs);
            if (digits) digits.textContent = cardTimerInstance.formatTime(secs);
            if (toggleBtn) toggleBtn.textContent = 'Mula Berfikir & Jawab';
          });
        });

        if (toggleBtn) {
          toggleBtn.addEventListener('click', () => {
            if (cardTimerInstance.isRunning()) {
              cardTimerInstance.pause();
              toggleBtn.textContent = 'Sambung Menjawab';
            } else if (cardTimerInstance.isPaused()) {
              cardTimerInstance.resume();
              toggleBtn.textContent = 'Jeda Pemasa';
            } else {
              toggleBtn.textContent = 'Jeda Pemasa';
              cardTimerInstance.start(
                targetDuration,
                (rem, formatted) => {
                  if (digits) digits.textContent = formatted;
                  if (rem <= 15) {
                    digits.style.color = '#dc2626';
                  } else {
                    digits.style.color = '';
                  }
                },
                () => {
                  if (digits) digits.textContent = '00:00';
                  if (toggleBtn) toggleBtn.textContent = 'Masa Tamat!';
                  if (typeof global.MACApp !== 'undefined' && global.MACApp.showToast) {
                    global.MACApp.showToast(`Masa menjawab soalan #${qId} telah tamat!`, 'info', 3000);
                  }
                }
              );
            }
          });
        }

        if (resetBtn) {
          resetBtn.addEventListener('click', () => {
            cardTimerInstance.reset(targetDuration);
            if (digits) {
              digits.textContent = cardTimerInstance.formatTime(targetDuration);
              digits.style.color = '';
            }
            if (toggleBtn) toggleBtn.textContent = 'Mula Berfikir & Jawab';
          });
        }
      });

      // 3. Pemilihan Bintang (Star Rating Selector)
      const ratingContainers = scopeContainer.querySelectorAll('.star-rating-selector');
      ratingContainers.forEach(rBox => {
        const qId = rBox.getAttribute('data-qid');
        const stars = rBox.querySelectorAll('.btn-star-rate');
        const feedback = rBox.querySelector(`#rating-feedback-${qId}`);

        stars.forEach(sBtn => {
          sBtn.addEventListener('click', () => {
            const selectedStar = parseInt(sBtn.getAttribute('data-star'), 10);
            stars.forEach(s => {
              const val = parseInt(s.getAttribute('data-star'), 10);
              s.classList.toggle('active', val <= selectedStar);
            });
            rBox.setAttribute('data-selected-star', String(selectedStar));
            if (feedback) {
              const labels = ['', '1/5 Bintang (Perlu Latihan)', '2/5 Bintang (Sederhana)', '3/5 Bintang (Baik)', '4/5 Bintang (Sangat Baik)', '5/5 Bintang (Cemerlang)'];
              feedback.textContent = labels[selectedStar] || `${selectedStar}/5 Bintang`;
            }
          });
        });
      });

      // 4. Simpan Penilaian Kendiri & Catatan
      const saveButtons = scopeContainer.querySelectorAll('.btn-save-practice');
      saveButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const qId = parseInt(btn.getAttribute('data-qid'), 10);
          const rBox = scopeContainer.querySelector(`.star-rating-selector[data-qid="${qId}"]`);
          const notesInput = scopeContainer.querySelector(`#notes-input-${qId}`);
          const statusMsg = scopeContainer.querySelector(`#save-status-${qId}`);

          let chosenStar = rBox ? parseInt(rBox.getAttribute('data-selected-star'), 10) : 0;
          if (isNaN(chosenStar) || chosenStar < 1) {
            // Semak jika ada bintang sedia ada
            const existing = this.simulator.getSelfRating(qId);
            chosenStar = existing ? existing.rating : 3; // Nilai lalai jika tidak ditanda
          }

          const notes = notesInput ? notesInput.value.trim() : '';

          try {
            this.simulator.recordSelfRating(qId, chosenStar, notes);

            // Beri maklum balas visual
            if (statusMsg) {
              statusMsg.style.display = 'inline-block';
              setTimeout(() => {
                statusMsg.style.display = 'none';
              }, 2500);
            }

            // Kemaskini kad header badge
            const cardEl = scopeContainer.querySelector(`.question-card[data-question-id="${qId}"]`);
            if (cardEl) {
              cardEl.classList.add('practiced');
              const headerLeft = cardEl.querySelector('.header-left');
              if (headerLeft && !headerLeft.querySelector('.practiced-badge')) {
                const pBadge = document.createElement('span');
                pBadge.className = 'practiced-badge';
                pBadge.title = 'Telah dilatih';
                pBadge.innerHTML = '&#10003; Telah Dilatih';
                headerLeft.appendChild(pBadge);
              }
            }

            // Kemaskini bar kemajuan atas
            this.updateProgressIndicator(mainContainer);

            if (typeof global.MACApp !== 'undefined' && global.MACApp.showToast) {
              global.MACApp.showToast(`Rekod latihan Soalan #${qId} berjaya disimpan!`, 'success', 2000);
            }
          } catch (e) {
            alert(e.message);
          }
        });
      });

      // 5. Salin Soalan ke Clipboard
      const copyButtons = scopeContainer.querySelectorAll('.btn-copy-question');
      copyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const qId = parseInt(btn.getAttribute('data-qid'), 10);
          const q = this.simulator.getQuestionById(qId);
          if (q && typeof navigator !== 'undefined' && navigator.clipboard) {
            const textToCopy = `Soalan Temu Duga MARA DG41 (PJPK) #${q.id}:\n${q.question}\n\nFokus: ${q.focusArea}`;
            navigator.clipboard.writeText(textToCopy).then(() => {
              if (typeof global.MACApp !== 'undefined' && global.MACApp.showToast) {
                global.MACApp.showToast(`Soalan #${qId} disalin ke papan keratan.`, 'info', 1500);
              }
            }).catch(() => {});
          }
        });
      });
    },

    escapeHtml(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }
  };

  // ==========================================================================
  // 5. PENGEKSPORTAN MODUL & AUTO-MOUNTING PERSEKITARAN BROWSER
  // ==========================================================================
  const InterviewModule = {
    INTERVIEW_QUESTIONS,
    InterviewSimulator,
    InterviewTimer,
    InterviewUI
  };

  if (typeof window !== 'undefined') {
    window.INTERVIEW_QUESTIONS = INTERVIEW_QUESTIONS;
    window.InterviewSimulator = InterviewSimulator;
    window.InterviewTimer = InterviewTimer;
    window.InterviewUI = InterviewUI;
    window.InterviewModule = InterviewModule;

    const autoMountInterview = () => {
      const container = document.getElementById('interview-app');
      if (container) {
        InterviewUI.init(container);
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', autoMountInterview);
    } else {
      autoMountInterview();
    }

    if (typeof document !== 'undefined') {
      document.addEventListener('mac:tab-switched', (e) => {
        if (e.detail && e.detail.tabId === 'interview') {
          const container = document.getElementById('interview-app');
          if (container && !container.querySelector('.interview-wrapper')) {
            InterviewUI.init(container);
          }
        }
      });
    }
  }

  // Pengeksportan untuk Node.js (Unit Testing)
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = InterviewModule;
  }

})(typeof window !== 'undefined' ? window : global);
