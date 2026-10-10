/**
 * ==========================================================================
 * MARA ASSESSMENT CENTRE (MAC) - PJPK DG41 PLATFORM
 * Simulator Ujian Psikometrik (MyPersonaliti & Integriti MARA)
 * Module: psychometric.js
 * 100% Offline-Ready | Pure Vanilla JS (ES6+) & Node.js Compatible
 * ==========================================================================
 */

(function (global) {
  'use strict';

  // 1. Bank Soalan Piawai MyPersonaliti & Integriti (30 Situasi PJPK MRSM)
  const QUESTIONS = [
    // --- DOMAIN 1: INTEGRITI & AMANAH (integrity) ---
    {
      id: 1,
      domain: 'integrity',
      categoryLabel: 'Integriti & Amanah',
      context: 'Ketelusan Audit SEGAK & Rekod Murid',
      text: 'Saya tidak akan sesekali meminda atau menaikkan markah ujian SEGAK murid walaupun diminta atau dipujuk oleh pihak pentadbir maktab demi mencapai sasaran KPI kecergasan tahunan.',
      reverse: false,
      explanation: 'Ketepatan rekod SEGAK adalah amanah profesional. Memalsukan rekod kesihatan boleh membahayakan murid dan melanggar integriti perkhidmatan awam.'
    },
    {
      id: 6,
      domain: 'integrity',
      categoryLabel: 'Integriti & Amanah',
      context: 'Pengurusan Stor Sukan & Aset Maktab',
      text: 'Saya tidak akan sesekali menggunakan alatan sukan maktab atau fasiliti gimnasium untuk kegunaan kelab luar peribadi tanpa kebenaran rasmi pengetua.',
      reverse: false,
      explanation: 'Aset kerajaan di bawah Akta MARA 1966 hanya dikhususkan untuk faedah murid dan pembangunan maktab.'
    },
    {
      id: 11,
      domain: 'integrity',
      categoryLabel: 'Integriti & Amanah',
      context: 'Keadilan Pemilihan Atlet Maktab',
      text: 'Dalam sesi pemilihan atlet mewakili kontinjen MRSM, saya menilai kebolehan murid secara telus dan objektif tanpa dipengaruhi oleh status atau kedudukan ibu bapa mereka.',
      reverse: false,
      explanation: 'Keadilan memilih bakat memastikan murid yang benar-benar layak diberi peluang tanpa unsur nepotisme.'
    },
    {
      id: 16,
      domain: 'integrity',
      categoryLabel: 'Integriti & Amanah',
      context: 'Pelarasan Rekod Kecergasan (Soalan Perangkap)',
      text: 'Dalam situasi tertentu, wajar bagi seorang guru sukan melonggarkan sedikit piawaian catatan rekod ujian kecergasan murid agar maktab tidak dipandang rendah dalam audit kualiti.',
      reverse: true,
      explanation: 'Sebarang kelonggaran atau pengubahsuaian rekod rasmi merupakan salah laku tatatertib di bawah Peraturan-Peraturan Pegawai Awam.'
    },
    {
      id: 21,
      domain: 'integrity',
      categoryLabel: 'Integriti & Amanah',
      context: 'Penerimaan Hadiah Daripada Pembekal Alatan',
      text: 'Saya berpandangan tidak salah menerima cenderahati peribadi bernilai tinggi daripada syarikat pembekal alatan sukan yang sedang menyertai sebut harga maktab.',
      reverse: true,
      explanation: 'Menerima hadiah daripada pihak berkepentingan merupakan perbuatan berunsur rasuah dan konflik kepentingan.'
    },
    {
      id: 30,
      domain: 'integrity',
      categoryLabel: 'Integriti & Amanah',
      context: 'Disiplin Atlet Harapan Maktab (Soalan Perangkap)',
      text: 'Demi memastikan kontinjen sukan maktab memenangi pingat emas dalam kejohanan, adalah wajar untuk menutup mata terhadap salah laku disiplin serius atlet utama.',
      reverse: true,
      explanation: 'Disiplin dan akhlak mendahului pencapaian sukan. Kompromi terhadap salah laku atlet merosakkan budaya asrama MRSM.'
    },

    // --- DOMAIN 2: KESTABILAN EMOSI & KAWALAN STRES (emotional) ---
    {
      id: 2,
      domain: 'emotional',
      categoryLabel: 'Kestabilan Emosi & Kawalan Stres',
      context: 'Pengendalian Latihan di Bawah Terik Panas',
      text: 'Saya mampu mengendalikan sesi amali sukan di bawah cuaca panas dengan sabar, tenang, dan sentiasa mengutamakan hidrasi serta kebajikan murid.',
      reverse: false,
      explanation: 'Guru sukan perlu menunjukkan daya kawalan emosi yang tinggi semasa menguruskan persekitaran fizikal mencabar.'
    },
    {
      id: 3,
      domain: 'emotional',
      categoryLabel: 'Kestabilan Emosi & Kawalan Stres',
      context: 'Disiplin Keselamatan di Padang (Cross-Check)',
      text: 'Apabila murid berulang kali mengingkari langkah keselamatan semasa aktiviti gimnastik atau lombol, saya tetap menegur secara tegas dan terkawal tanpa menggunakan kata-kata herdikan melampau.',
      reverse: false,
      explanation: 'Teguran berhemah dan tegas mengawal keselamatan tanpa mencemarkan maruah dan emosi murid.'
    },
    {
      id: 13,
      domain: 'emotional',
      categoryLabel: 'Kestabilan Emosi & Kawalan Stres',
      context: 'Pencerapan Pengajaran & Kritikan Membina',
      text: 'Saya menganggap teguran dan kritikan membina daripada pengetua atau rakan penilai semasa sesi pencerapan pengajaran sebagai ruang untuk memantapkan pedagogi saya.',
      reverse: false,
      explanation: 'Kematangan menerima maklum balas adalah kunci kecemerlangan profesional pendidik.'
    },
    {
      id: 18,
      domain: 'emotional',
      categoryLabel: 'Kestabilan Emosi & Kawalan Stres',
      context: 'Kemarahan & Nada Suara (Soalan Perangkap)',
      text: 'Adalah perkara biasa dan wajar bagi guru sukan melampiaskan kemarahan serta menengking murid dengan kasar sekiranya mereka melakukan kesilapan teknik di hadapan khalayak.',
      reverse: true,
      explanation: 'Menengking secara kasar di hadapan khalayak meruntuhkan keyakinan murid dan mencerminkan kegagalan kawalan emosi guru.'
    },
    {
      id: 23,
      domain: 'emotional',
      categoryLabel: 'Kestabilan Emosi & Kawalan Stres',
      context: 'Daya Ketahanan Terhadap Kekalahan Pasukan',
      text: 'Saya mudah berasa putus asa dan hilang semangat mengajar sekiranya pasukan sukan yang saya latih mengalami kekalahan berturut-turut dalam kejohanan daerah.',
      reverse: true,
      explanation: 'Kekalahan adalah proses pembelajaran. Guru perlu menunjukkan ketabahan emosi sebagai suri teladan atlet muda.'
    },
    {
      id: 28,
      domain: 'emotional',
      categoryLabel: 'Kestabilan Emosi & Kawalan Stres',
      context: 'Pemisahan Masalah Peribadi Semasa Mengajar',
      text: 'Apabila saya menghadapi tekanan masalah peribadi, sukar bagi saya menyembunyikan rasa jengkel dan marah semasa mengendalikan murid di padang sukan.',
      reverse: true,
      explanation: 'Pendidik profesional mengasingkan isu peribadi daripada tugas bilik darjah dan gelanggang.'
    },

    // --- DOMAIN 3: KEPIMPINAN & INISIATIF PJPK (leadership) ---
    {
      id: 4,
      domain: 'leadership',
      categoryLabel: 'Kepimpinan & Inisiatif PJPK',
      context: 'Pelan Kontigensi Cuaca Hujan',
      text: 'Apabila cuaca hujan lebat melanda secara tiba-tiba, saya pantas bertindak melaksanakan modul teori sukan alternatif atau kecergasan indoor yang bermakna tanpa membiarkan kelas kosong.',
      reverse: false,
      explanation: 'Inisiatif pantas memastikan masa instruksional murid sentiasa dimanfaatkan sepenuhnya.'
    },
    {
      id: 12,
      domain: 'leadership',
      categoryLabel: 'Kepimpinan & Inisiatif PJPK',
      context: 'Program Intervensi Obesiti Murid (Cross-Check)',
      text: 'Saya bersedia mengambil inisiatif merangka klinik kecergasan khas bagi murid yang mengalami masalah berat badan berlebihan tanpa perlu menunggu arahan bertulis pentadbir.',
      reverse: false,
      explanation: 'Kepimpinan proaktif guru PJPK memacu gaya hidup sihat dan kesejahteraan jangka panjang pelajar maktab.'
    },
    {
      id: 17,
      domain: 'leadership',
      categoryLabel: 'Kepimpinan & Inisiatif PJPK',
      context: 'Pementoran Rakan Sejawat & Kepakaran Sukan',
      text: 'Saya bersedia berkongsi kepakaran dan membimbing rakan guru baharu berkaitan teknik pengadilan serta pengurusan keselamatan alatan sukan.',
      reverse: false,
      explanation: 'Budaya bimbingan memperkukuh keupayaan panitia PJPK dan standard keselamatan maktab.'
    },
    {
      id: 25,
      domain: 'leadership',
      categoryLabel: 'Kepimpinan & Inisiatif PJPK',
      context: 'Akauntabiliti Kegagalan Acara Sukan',
      text: 'Sekiranya timbul kesilapan teknikal dalam penganjuran sukan maktab yang saya pimpin, saya bersedia memikul tanggungjawab sepenuhnya tanpa menuding jari kepada pembantu.',
      reverse: false,
      explanation: 'Akauntabiliti adalah ciri utama pemimpin yang berwibawa dan dihormati.'
    },
    {
      id: 27,
      domain: 'leadership',
      categoryLabel: 'Kepimpinan & Inisiatif PJPK',
      context: 'Skop Tugas Minimum (Soalan Perangkap)',
      text: 'Guru sukan hanya perlu mengajar apa yang tercatat dalam jadual rasmi dan tidak perlu mereka-reka program intervensi kecergasan tambahan di luar waktu bertugas.',
      reverse: true,
      explanation: 'Sikap pasif dan jumud mengehadkan impak pendidikan holistik yang diasaskan oleh falsafah MRSM.'
    },
    {
      id: 29,
      domain: 'leadership',
      categoryLabel: 'Kepimpinan & Inisiatif PJPK',
      context: 'Pengelakan Tanggungjawab Kepimpinan',
      text: 'Saya lebih selesa menjadi pengikut pasif dan sedaya upaya mengelak daripada dilantik mempengerusikan jawatankuasa sukan maktab kerana bimbang risiko kegagalan.',
      reverse: true,
      explanation: 'Calon DG41 dijangka memimpin inisiatif sukan maktab dengan yakin dan berdaya saing.'
    },

    // --- DOMAIN 4: HUBUNGAN INTERPERSONAL & KERJA BERPASUKAN (interpersonal) ---
    {
      id: 5,
      domain: 'interpersonal',
      categoryLabel: 'Hubungan Interpersonal & Kerja Berpasukan',
      context: 'Perkongsian Fasiliti Sukan Bersama Panitia Lain',
      text: 'Saya sentiasa bersikap terbuka berkongsi alatan padang dan fasiliti sukan dengan guru persatuan kokurikulum lain demi keharmonian warga maktab.',
      reverse: false,
      explanation: 'Fasiliti maktab adalah milik bersama warga pendidik untuk kegunaan menyeluruh murid.'
    },
    {
      id: 9,
      domain: 'interpersonal',
      categoryLabel: 'Hubungan Interpersonal & Kerja Berpasukan',
      context: 'Keputusan Jawatankuasa Sukan (Cross-Check)',
      text: 'Walaupun cadangan saya berkenaan modul kejohanan sukan maktab tidak dipersetujui oleh jawatankuasa kerja, saya tetap komited menyokong penuh keputusan majoriti.',
      reverse: false,
      explanation: 'Semangat musyawarah dan sokongan terhadap keputusan konsensus mencerminkan kematangan berorganisasi.'
    },
    {
      id: 14,
      domain: 'interpersonal',
      categoryLabel: 'Hubungan Interpersonal & Kerja Berpasukan',
      context: 'Empati & Kesihatan Murid',
      text: 'Saya sentiasa meluangkan masa mendengar luahan kesihatan atau keresahan murid dengan penuh empati sebelum mengarahkan mereka menyertai aktiviti berintensiti tinggi.',
      reverse: false,
      explanation: 'Empati guru sukan mengelakkan kemalangan serius seperti strok haba atau komplikasi asma.'
    },
    {
      id: 20,
      domain: 'interpersonal',
      categoryLabel: 'Hubungan Interpersonal & Kerja Berpasukan',
      context: 'Hubungan Profesional Dengan Staf Sokongan',
      text: 'Saya sentiasa menjalin hubungan komunikasi yang mesra dan menghormati staf sokongan seperti pekerja pembersihan padang dan pengawal keselamatan maktab.',
      reverse: false,
      explanation: 'Penghormatan terhadap setiap lapisan staf membina persekitaran kerja MRSM yang sejahtera.'
    },
    {
      id: 24,
      domain: 'interpersonal',
      categoryLabel: 'Hubungan Interpersonal & Kerja Berpasukan',
      context: 'Sikap Boikot Pasukan (Soalan Perangkap)',
      text: 'Sekiranya jawatankuasa sukan menolak idea saya, saya lebih gemar bersikap pasif dan membiarkan mereka menyelesaikan penganjuran acara tersebut sendiri.',
      reverse: true,
      explanation: 'Sikap merajuk atau memboikot keputusan pasukan merosakkan perpaduan organisasi dan melanggar etika penjawat awam.'
    },
    {
      id: 26,
      domain: 'interpersonal',
      categoryLabel: 'Hubungan Interpersonal & Kerja Berpasukan',
      context: 'Kritikan Terhadap Rakan Sejawat',
      text: 'Saya tidak kisah menegur dan mempersoalkan kelemahan teknik kejurulatihan rakan guru sukan lain secara terbuka di hadapan murid-murid maktab.',
      reverse: true,
      explanation: 'Menegur rakan sejawat di hadapan murid mencemarkan wibawa keguruan. Perbincangan perlu dilakukan secara tertutup dan profesional.'
    },

    // --- DOMAIN 5: KEBOLEHSUAIAN & KETAHANAN MENTAL (resilience) ---
    {
      id: 7,
      domain: 'resilience',
      categoryLabel: 'Kebolehsuaian & Ketahanan Mental',
      context: 'Tugas Warden Asrama Hujung Minggu (Cross-Check)',
      text: 'Saya bersedia dan berlapang dada menerima giliran bertugas sebagai warden asrama atau guru homeroom pada hujung minggu sekiranya diarahkan demi kebajikan murid.',
      reverse: false,
      explanation: 'Sistem MRSM merupakan sistem persekolahan berasrama penuh yang memerlukan komitmen 24/7 guru pembimbing.'
    },
    {
      id: 8,
      domain: 'resilience',
      categoryLabel: 'Kebolehsuaian & Ketahanan Mental',
      context: 'Penyesuaian Jadual Saat Akhir',
      text: 'Saya sentiasa bersedia menerima perubahan jadual pengajaran saat akhir dengan tenang apabila maktab menganjurkan acara kecemasan atau majlis rasmi.',
      reverse: false,
      explanation: 'Fleksibiliti dan kebolehsuaian mental penting dalam persekitaran maktab yang dinamik.'
    },
    {
      id: 10,
      domain: 'resilience',
      categoryLabel: 'Kebolehsuaian & Ketahanan Mental',
      context: 'Kekurangan Kemudahan Padang',
      text: 'Walaupun sesebuah MRSM mempunyai kemudahan sukan yang serba terhad, saya tetap bersemangat dan berusaha mempelbagaikan kaedah latihan fizikal kreatif.',
      reverse: false,
      explanation: 'Daya juang pendidik mengatasi batasan infrastruktur melalui kreativiti pedagogi.'
    },
    {
      id: 15,
      domain: 'resilience',
      categoryLabel: 'Kebolehsuaian & Ketahanan Mental',
      context: 'Melaporkan Salah Laku Atlet (Cross-Check Lie Scale)',
      text: 'Saya berpegang teguh pada prinsip melaporkan sebarang insiden buli atau salah laku disiplin di maktab walaupun pesalah merupakan atlet utama harapan maktab.',
      reverse: false,
      explanation: 'Keberanian menegakkan kebenaran tanpa gentar tekanan sekeliling adalah mercu tanda ketahanan mental berintegriti.'
    },
    {
      id: 19,
      domain: 'resilience',
      categoryLabel: 'Kebolehsuaian & Ketahanan Mental',
      context: 'Beban Tugas Kokurikulum Petang',
      text: 'Saya merasakan jadual latihan sukan petang dan aktiviti asrama maktab sangat membebankan serta merampas hak masa peribadi saya.',
      reverse: true,
      explanation: 'Aktiviti petang dan asrama adalah komponen teras pembentukan sahsiah pelajar MRSM.'
    },
    {
      id: 22,
      domain: 'resilience',
      categoryLabel: 'Kebolehsuaian & Ketahanan Mental',
      context: 'Penolakan Tugas Warden (Soalan Perangkap)',
      text: 'Tugas warden asrama dan rondaan malam adalah bebanan luar bidang yang tidak sepatutnya dipikul oleh guru mata pelajaran praktikal seperti PJPK.',
      reverse: true,
      explanation: 'Peranan guru MRSM merangkumi pendidik, pembimbing homeroom, dan penjaga kebajikan asrama.'
    }
  ];

  // 2. Pasangan Soalan Perangkap / Cross-Check Trap Scale (6 Pasang)
  const TRAP_PAIRS = [
    {
      q1: 1,
      q2: 16,
      domain: 'integrity',
      description: 'Ketelusan Rekod SEGAK & Kejujuran Audit Kecergasan',
      mismatchWarning: 'Percanggahan integriti dikesan: Anda mendakwa tidak akan meminda rekod SEGAK (Q1), namun bersetuju melonggarkan catatan demi audit (Q16).'
    },
    {
      q1: 3,
      q2: 18,
      domain: 'emotional',
      description: 'Kawalan Emosi & Disiplin Berhemah di Padang',
      mismatchWarning: 'Percanggahan kawalan emosi: Anda menyatakan menolak herdikan melampau (Q3), namun menganggap menengking murid kasar adalah wajar (Q18).'
    },
    {
      q1: 7,
      q2: 22,
      domain: 'resilience',
      description: 'Komitmen Tugas Asrama MRSM & Ketahanan Mental',
      mismatchWarning: 'Percanggahan komitmen asrama: Anda menyatakan bersedia bertugas warden (Q7), namun menganggap tugas warden bebanan luar bidang (Q22).'
    },
    {
      q1: 9,
      q2: 24,
      domain: 'interpersonal',
      description: 'Semangat Kerja Berpasukan & Menghormati Keputusan Jawatankuasa',
      mismatchWarning: 'Percanggahan kerja berpasukan: Anda menyatakan menyokong keputusan majoriti (Q9), namun memilih bersikap pasif jika cadangan ditolak (Q24).'
    },
    {
      q1: 12,
      q2: 27,
      domain: 'leadership',
      description: 'Inisiatif Proaktif & Kepimpinan Pembangunan Pelajar',
      mismatchWarning: 'Percanggahan inisiatif guru: Anda menyatakan bersedia memulakan intervensi sukan proaktif (Q12), namun berpendapat hanya perlu mengajar waktu jadual sahaja (Q27).'
    },
    {
      q1: 15,
      q2: 30,
      domain: 'integrity',
      description: 'Keadilan Moral & Integriti Tanpa Kompromi',
      mismatchWarning: 'Percanggahan prinsip keadilan: Anda mendakwa sedia melaporkan salah laku atlet (Q15), namun bersetuju menutup mata demi pingat sukan (Q30).'
    }
  ];

  const DOMAIN_METADATA = {
    integrity: { label: 'Integriti & Amanah', color: '#8B0000', icon: 'shield' },
    emotional: { label: 'Kestabilan Emosi & Kawalan Stres', color: '#0A2540', icon: 'heart' },
    leadership: { label: 'Kepimpinan & Inisiatif PJPK', color: '#D4AF37', icon: 'flag' },
    interpersonal: { label: 'Hubungan Interpersonal & Pasukan', color: '#059669', icon: 'users' },
    resilience: { label: 'Kebolehsuaian & Ketahanan Mental', color: '#2563EB', icon: 'zap' }
  };

  /**
   * Enjin Teras Psikometrik (PsychometricEngine)
   */
  class PsychometricEngine {
    constructor() {
      this.questions = QUESTIONS;
      this.trapPairs = TRAP_PAIRS;
      this.answers = {};
      this.active = false;
      this.durationMinutes = 30;
      this.remainingSeconds = 30 * 60;
      this.timerInterval = null;
      this.onTickCallbacks = [];
      this.onCompleteCallbacks = [];
    }

    getQuestions() {
      return this.questions;
    }

    getTrapPairs() {
      return this.trapPairs;
    }

    isExamActive() {
      return this.active;
    }

    getRemainingSeconds() {
      return this.remainingSeconds;
    }

    startExam(durationMinutes = 30) {
      this.durationMinutes = durationMinutes;
      this.remainingSeconds = durationMinutes * 60;
      this.active = true;

      if (this.timerInterval) {
        clearInterval(this.timerInterval);
      }

      // Mulakan pemasa
      this.timerInterval = setInterval(() => {
        if (!this.active) return;
        this.remainingSeconds--;

        this.onTickCallbacks.forEach(cb => {
          try { cb(this.remainingSeconds, this.formatTime(this.remainingSeconds)); } catch (e) {}
        });

        if (this.remainingSeconds <= 0) {
          this.remainingSeconds = 0;
          this.active = false;
          clearInterval(this.timerInterval);
          this.onCompleteCallbacks.forEach(cb => {
            try { cb(this.calculateScore()); } catch (e) {}
          });
        }
      }, 1000);

      if (this.timerInterval && typeof this.timerInterval.unref === 'function') {
        this.timerInterval.unref();
      }

      return {
        active: this.active,
        durationMinutes: this.durationMinutes,
        remainingSeconds: this.remainingSeconds
      };
    }

    onTick(callback) {
      if (typeof callback === 'function') {
        this.onTickCallbacks.push(callback);
      }
    }

    onComplete(callback) {
      if (typeof callback === 'function') {
        this.onCompleteCallbacks.push(callback);
      }
    }

    formatTime(seconds) {
      const s = Math.max(0, Math.floor(seconds));
      const mins = Math.floor(s / 60);
      const secs = s % 60;
      const mm = mins < 10 ? `0${mins}` : `${mins}`;
      const ss = secs < 10 ? `0${secs}` : `${secs}`;
      return `${mm}:${ss}`;
    }

    submitAnswer(questionId, value) {
      const qNum = parseInt(questionId, 10);
      const val = parseInt(value, 10);
      if (isNaN(qNum) || isNaN(val) || val < 1 || val > 4) {
        return false;
      }
      this.answers[qNum] = val;
      return true;
    }

    getAnswer(questionId) {
      return this.answers[parseInt(questionId, 10)] || null;
    }

    getAnswers() {
      return { ...this.answers };
    }

    resetExam() {
      this.active = false;
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
      this.answers = {};
      this.remainingSeconds = this.durationMinutes * 60;
    }

    /**
     * Mengira skor domain, konsistensi perangkap (Lie Scale), dan status kelulusan
     */
    calculateScore() {
      const domainTotals = {
        integrity: { sum: 0, count: 0 },
        emotional: { sum: 0, count: 0 },
        leadership: { sum: 0, count: 0 },
        interpersonal: { sum: 0, count: 0 },
        resilience: { sum: 0, count: 0 }
      };

      // 1. Skor Setiap Domain
      this.questions.forEach(q => {
        const rawAns = this.answers[q.id] || 1; // Lalai jika tidak dijawab
        // Skala 1 - 4
        // Jika reverse == false: 1->0%, 2->33.3%, 3->66.7%, 4->100%
        // Jika reverse == true:  1->100%, 2->66.7%, 3->33.3%, 4->0%
        let pts = 0;
        if (!q.reverse) {
          pts = ((rawAns - 1) / 3) * 100;
        } else {
          pts = ((4 - rawAns) / 3) * 100;
        }

        if (domainTotals[q.domain]) {
          domainTotals[q.domain].sum += pts;
          domainTotals[q.domain].count += 1;
        }
      });

      const domainScores = {};
      let totalDomainScoreSum = 0;
      const domainKeys = Object.keys(domainTotals);

      domainKeys.forEach(dom => {
        const item = domainTotals[dom];
        const avg = item.count > 0 ? item.sum / item.count : 0;
        domainScores[dom] = Math.round(avg * 10) / 10;
        totalDomainScoreSum += domainScores[dom];
      });

      const overallScore = Math.round((totalDomainScoreSum / domainKeys.length) * 10) / 10;

      // 2. Sistem Pengesanan Ketekalan Jawapan (Trap / Lie Scale Consistency)
      let totalPairConsistency = 0;
      let severeContradictions = 0;
      const detailedFeedback = [];

      this.trapPairs.forEach(pair => {
        const qA = this.questions.find(q => q.id === pair.q1);
        const qB = this.questions.find(q => q.id === pair.q2);

        const rawA = this.answers[pair.q1] || 1;
        const rawB = this.answers[pair.q2] || 1;

        // Normalisasi stance positif 1..4 (di mana 4 adalah pendirian beretika tertinggi)
        const normA = qA.reverse ? (5 - rawA) : rawA;
        const normB = qB.reverse ? (5 - rawB) : rawB;

        const diff = Math.abs(normA - normB);
        let pairConsistency = 100;

        if (diff === 0) {
          pairConsistency = 100;
        } else if (diff === 1) {
          pairConsistency = 75;
        } else if (diff === 2) {
          pairConsistency = 35;
          severeContradictions++;
        } else {
          // diff === 3 (Percanggahan Ekstrem)
          pairConsistency = 0;
          severeContradictions++;
        }

        totalPairConsistency += pairConsistency;

        if (diff >= 2) {
          detailedFeedback.push({
            pairId: `${pair.q1}-${pair.q2}`,
            q1: pair.q1,
            q2: pair.q2,
            topic: pair.description,
            warning: pair.mismatchWarning,
            q1Text: qA.text,
            q1Ans: rawA,
            q2Text: qB.text,
            q2Ans: rawB,
            severity: diff === 3 ? 'BAHAYA TINGGI' : 'SEDERHANA'
          });
        }
      });

      const consistencyIndex = Math.round((totalPairConsistency / this.trapPairs.length) * 10) / 10;
      const lieScore = severeContradictions;

      // 3. Penentuan Status Kelulusan MARA / MyPersonaliti
      let status = 'PERLU PERBAIKAN';

      if (consistencyIndex < 60 || lieScore >= 2) {
        // Percanggahan ketara menolak calon serta-merta tanpa mengira skor mentah
        status = 'DIRAGUI (TIDAK KONSISTEN)';
      } else if (overallScore >= 80 && Object.values(domainScores).every(s => s >= 65)) {
        status = 'LULUS CEMERLANG';
      } else if (overallScore >= 65) {
        status = 'LULUS';
      } else {
        status = 'PERLU PERBAIKAN';
      }

      return {
        domainScores,
        overallScore,
        consistencyIndex,
        lieScore,
        status,
        detailedFeedback,
        totalQuestions: this.questions.length,
        answeredCount: Object.keys(this.answers).length
      };
    }
  }

  /**
   * Pengurus Antara Muka Interaktif (PsychometricUI)
   */
  const PsychometricUI = {
    engine: new PsychometricEngine(),
    container: null,
    currentQuestionIndex: 0,
    selectedDuration: 30,

    init(containerSelector = '#psychometric-app') {
      const el = typeof containerSelector === 'string'
        ? document.querySelector(containerSelector)
        : containerSelector;

      if (!el) {
        console.warn(`Kontena ${containerSelector} tidak dijumpai.`);
        return false;
      }

      this.container = el;
      this.renderIntro();

      // Sambungkan ticker pemasa ke UI
      this.engine.onTick((remaining, formatted) => {
        this.updateTimerDisplay(remaining, formatted);
      });

      this.engine.onComplete(() => {
        this.renderResults();
      });

      return true;
    },

    /**
     * Paparan 1: Panduan & Tetapan Mula Ujian
     */
    renderIntro() {
      if (!this.container) return;

      this.container.innerHTML = `
        <div class="card psycho-intro-card">
          <div class="card-header bg-subtle">
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span class="badge badge-primary">Standard SPP &amp; MARA 2026</span>
              <span class="badge badge-outline">30 Soalan Situasi</span>
            </div>
            <span class="badge badge-gold">Format MyPersonaliti MRSM</span>
          </div>
          <div class="card-body">
            <div class="psycho-intro-hero">
              <div class="psycho-intro-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#8B0000" stroke-width="2" class="icon-xl">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div class="psycho-intro-desc">
                <h3>Simulasi Ujian Psikometrik &amp; Integriti Perkhidmatan Awam</h3>
                <p class="text-muted">
                  Ujian ini menilai profil sahsiah, ketahanan emosi guru sukan, komitmen asrama MRSM, serta ketekalan jawapan melalui sistem pengesanan pembohongan (<em>Lie Scale / Trap Cross-Check</em>).
                </p>
              </div>
            </div>

            <!-- 5 Domain Info Grid -->
            <div class="grid grid-3 my-3">
              <div class="psycho-domain-pill-card">
                <div class="pill-dot dot-red"></div>
                <div>
                  <strong>1. Integriti &amp; Amanah</strong>
                  <div class="text-xs text-muted">Audit SEGAK, aset maktab &amp; keadilan pemilihan.</div>
                </div>
              </div>
              <div class="psycho-domain-pill-card">
                <div class="pill-dot dot-navy"></div>
                <div>
                  <strong>2. Kestabilan Emosi</strong>
                  <div class="text-xs text-muted">Kawalan marah di padang &amp; ketenangan kritikan.</div>
                </div>
              </div>
              <div class="psycho-domain-pill-card">
                <div class="pill-dot dot-gold"></div>
                <div>
                  <strong>3. Kepimpinan PJPK</strong>
                  <div class="text-xs text-muted">Inisiatif intervensi obesiti &amp; pementoran guru.</div>
                </div>
              </div>
              <div class="psycho-domain-pill-card">
                <div class="pill-dot dot-emerald"></div>
                <div>
                  <strong>4. Hubungan Interpersonal</strong>
                  <div class="text-xs text-muted">Kerja berpasukan &amp; empati kesihatan murid.</div>
                </div>
              </div>
              <div class="psycho-domain-pill-card">
                <div class="pill-dot dot-blue"></div>
                <div>
                  <strong>5. Ketahanan Mental</strong>
                  <div class="text-xs text-muted">Tugas warden asrama &amp; fleksibiliti jadual.</div>
                </div>
              </div>
              <div class="psycho-domain-pill-card" style="background:#FFF1F2; border-color:#FECDD3;">
                <div class="pill-dot dot-red"></div>
                <div>
                  <strong>Perangkap Lie Scale</strong>
                  <div class="text-xs" style="color:#991B1B;">6 soalan cross-check mengesan jawapan hipokrit.</div>
                </div>
              </div>
            </div>

            <!-- Arahan Penting -->
            <div class="card-alert-box mb-3">
              <div class="alert-icon">!</div>
              <div class="alert-text">
                <strong>Peraturan Penting Ujian:</strong> 
                Jawab secara jujur mengikut prinsip sebenar anda. Sistem ini mempunyai <strong>6 pasang soalan perangkap bercanggah</strong>. Jika anda menjawab tidak konsisten (contoh: berpura-pura baik pada soalan umum tetapi melonggarkan etika pada soalan situasi), sistem akan melaporkan status <strong>'DIRAGUI (TIDAK KONSISTEN)'</strong> secara automatik.
              </div>
            </div>

            <!-- Pilihan Pemasa -->
            <div class="time-selection-wrap mb-3">
              <label class="time-selection-label"><strong>Pilih Had Masa Ujian:</strong></label>
              <div class="time-options">
                <button type="button" class="btn btn-outline btn-time-opt" data-mins="15">
                  15 Minit (Latihan Pantas)
                </button>
                <button type="button" class="btn btn-primary btn-time-opt active" data-mins="30">
                  30 Minit (Standard Piawai)
                </button>
                <button type="button" class="btn btn-outline btn-time-opt" data-mins="45">
                  45 Minit (Mod Teliti)
                </button>
              </div>
            </div>
          </div>

          <div class="card-footer" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
            <div class="text-muted text-sm">
              Skala Jawapan: <strong>1: Sangat Tidak Setuju</strong> hingga <strong>4: Sangat Setuju</strong>
            </div>
            <button type="button" class="btn btn-primary btn-lg" id="btn-psycho-start">
              Mulakan Ujian Psikometrik Sekarang &rarr;
            </button>
          </div>
        </div>
      `;

      this.bindIntroEvents();
    },

    bindIntroEvents() {
      const timeBtns = this.container.querySelectorAll('.btn-time-opt');
      timeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          timeBtns.forEach(b => {
            b.classList.remove('btn-primary', 'active');
            b.classList.add('btn-outline');
          });
          btn.classList.remove('btn-outline');
          btn.classList.add('btn-primary', 'active');
          this.selectedDuration = parseInt(btn.getAttribute('data-mins'), 10) || 30;
        });
      });

      const startBtn = this.container.querySelector('#btn-psycho-start');
      if (startBtn) {
        startBtn.addEventListener('click', () => {
          this.engine.resetExam();
          this.engine.startExam(this.selectedDuration);
          this.currentQuestionIndex = 0;
          this.renderQuestion(0);
        });
      }
    },

    /**
     * Paparan 2: Paparan Soalan & Navigasi
     */
    renderQuestion(index) {
      if (!this.container) return;

      const questions = this.engine.getQuestions();
      if (index < 0 || index >= questions.length) {
        index = 0;
      }
      this.currentQuestionIndex = index;

      const q = questions[index];
      const currentAns = this.engine.getAnswer(q.id);
      const totalQ = questions.length;
      const progressPercent = Math.round(((index + 1) / totalQ) * 100);
      const formattedTime = this.engine.formatTime(this.engine.getRemainingSeconds());
      const answeredCount = Object.keys(this.engine.getAnswers()).length;

      const domainInfo = DOMAIN_METADATA[q.domain] || { label: q.categoryLabel, color: '#8B0000' };

      this.container.innerHTML = `
        <div class="card psycho-question-card">
          <!-- Header Bar: Soalan, Domain & Pemasa -->
          <div class="card-header psycho-q-header">
            <div class="psycho-q-meta">
              <span class="badge badge-primary">Soalan ${q.id} / ${totalQ}</span>
              <span class="badge badge-secondary" style="background-color: ${domainInfo.color};">${domainInfo.label}</span>
              <span class="badge badge-outline">${q.context}</span>
            </div>
            <div class="psycho-timer-box" id="psycho-timer-pill">
              <svg class="icon-inline" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
              </svg>
              <span id="psycho-timer-text">${formattedTime}</span>
            </div>
          </div>

          <!-- Bar Kemajuan Keseluruhan -->
          <div class="psycho-progress-track">
            <div class="psycho-progress-fill" style="width: ${progressPercent}%;"></div>
          </div>

          <div class="card-body psycho-q-body">
            <!-- Senario Situasi Soalan -->
            <div class="psycho-question-prompt">
              <div class="psycho-scenario-tag">Situasi Guru DG41 PJPK MRSM:</div>
              <h3 class="psycho-question-text">"${q.text}"</h3>
            </div>

            <!-- Pilihan Jawapan Skala Likert 4 -->
            <div class="psycho-options-grid">
              ${[
                { val: 1, label: 'Sangat Tidak Setuju (STS)', desc: 'Menolak sepenuhnya kenyataan atau tindakan ini' },
                { val: 2, label: 'Tidak Setuju (TS)', desc: 'Kurang bersetuju dengan kenyataan situasi ini' },
                { val: 3, label: 'Setuju (S)', desc: 'Cenderung bersetuju dengan kenyataan situasi ini' },
                { val: 4, label: 'Sangat Setuju (SS)', desc: 'Menyokong dan mendokong penuh pendirian ini' }
              ].map(opt => `
                <button type="button" class="psycho-opt-card ${currentAns === opt.val ? 'selected' : ''}" data-val="${opt.val}">
                  <div class="opt-indicator">${opt.val}</div>
                  <div class="opt-content">
                    <div class="opt-label">${opt.label}</div>
                    <div class="opt-desc">${opt.desc}</div>
                  </div>
                </button>
              `).join('')}
            </div>

            <!-- Laci Nombor Soalan Pantas (Quick Jump Drawer) -->
            <div class="psycho-jump-bar mt-3">
              <div class="text-xs text-muted mb-1" style="display:flex; justify-content:space-between;">
                <span>Kemajuan Menjawab: <strong>${answeredCount}/${totalQ}</strong> Dijawab</span>
                <button type="button" class="btn btn-outline btn-sm" id="btn-toggle-grid" style="padding:0.15rem 0.5rem; font-size:0.75rem;">
                  Peta Soalan (1-30)
                </button>
              </div>
              <div class="psycho-numbers-grid" id="psycho-numbers-drawer">
                ${questions.map((item, idx) => {
                  const isAns = this.engine.getAnswer(item.id) !== null;
                  const isCur = idx === index;
                  let cls = 'num-btn';
                  if (isCur) cls += ' current';
                  if (isAns) cls += ' answered';
                  return `<button type="button" class="${cls}" data-idx="${idx}" title="Soalan ${item.id}">${item.id}</button>`;
                }).join('')}
              </div>
            </div>
          </div>

          <!-- Footer Navigasi -->
          <div class="card-footer psycho-q-footer">
            <button type="button" class="btn btn-outline" id="btn-q-prev" ${index === 0 ? 'disabled' : ''}>
              &larr; Soalan Terdahulu
            </button>
            <div class="psycho-q-counter text-muted text-sm">
              Soalan <strong>${index + 1}</strong> daripada <strong>${totalQ}</strong>
            </div>
            ${index === totalQ - 1 ? `
              <button type="button" class="btn btn-primary" id="btn-q-submit">
                Hantar &amp; Tamat Ujian &check;
              </button>
            ` : `
              <button type="button" class="btn btn-primary" id="btn-q-next">
                Soalan Seterusnya &rarr;
              </button>
            `}
          </div>
        </div>
      `;

      this.bindQuestionEvents(index);
    },

    bindQuestionEvents(currentIndex) {
      const questions = this.engine.getQuestions();
      const currentQ = questions[currentIndex];

      // Pilihan Jawapan
      const optBtns = this.container.querySelectorAll('.psycho-opt-card');
      optBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const val = parseInt(btn.getAttribute('data-val'), 10);
          this.engine.submitAnswer(currentQ.id, val);

          optBtns.forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');

          // Kemaskini butang laci nombor
          const numBtn = this.container.querySelector(`.num-btn[data-idx="${currentIndex}"]`);
          if (numBtn) numBtn.classList.add('answered');

          // Kemas kini counter answered
          const answeredCount = Object.keys(this.engine.getAnswers()).length;
          const countEl = this.container.querySelector('.psycho-jump-bar strong');
          if (countEl) countEl.textContent = `${answeredCount}/${questions.length}`;

          // Auto-gerak ke soalan seterusnya selepas klik (pilihan mesra pengguna)
          setTimeout(() => {
            if (currentIndex < questions.length - 1) {
              this.renderQuestion(currentIndex + 1);
            }
          }, 350);
        });
      });

      // Butang Terdahulu
      const prevBtn = this.container.querySelector('#btn-q-prev');
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          if (currentIndex > 0) {
            this.renderQuestion(currentIndex - 1);
          }
        });
      }

      // Butang Seterusnya
      const nextBtn = this.container.querySelector('#btn-q-next');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          if (currentIndex < questions.length - 1) {
            this.renderQuestion(currentIndex + 1);
          }
        });
      }

      // Butang Hantar Ujian
      const submitBtn = this.container.querySelector('#btn-q-submit');
      if (submitBtn) {
        submitBtn.addEventListener('click', () => {
          const answeredCount = Object.keys(this.engine.getAnswers()).length;
          if (answeredCount < questions.length) {
            const confirmed = window.confirm(
              `Anda hanya menjawab ${answeredCount} daripada ${questions.length} soalan. Adakah anda pasti mahu menamatkan ujian sekarang?`
            );
            if (!confirmed) return;
          }
          this.engine.active = false;
          this.renderResults();
        });
      }

      // Lompat Soalan Dari Grid
      const numBtns = this.container.querySelectorAll('.num-btn');
      numBtns.forEach(nb => {
        nb.addEventListener('click', () => {
          const targetIdx = parseInt(nb.getAttribute('data-idx'), 10);
          if (!isNaN(targetIdx)) {
            this.renderQuestion(targetIdx);
          }
        });
      });
    },

    updateTimerDisplay(remainingSeconds, formatted) {
      const textEl = document.getElementById('psycho-timer-text');
      const pillEl = document.getElementById('psycho-timer-pill');
      if (!textEl || !pillEl) return;

      textEl.textContent = formatted;

      if (remainingSeconds <= 60) {
        pillEl.className = 'psycho-timer-box timer-danger';
      } else if (remainingSeconds <= 300) {
        pillEl.className = 'psycho-timer-box timer-warning';
      } else {
        pillEl.className = 'psycho-timer-box';
      }
    },

    /**
     * Paparan 3: Paparan Keputusan, Analisis Domain & Pengesanan Konsistensi
     */
    renderResults() {
      if (!this.container) return;

      const result = this.engine.calculateScore();
      const candidateName = (typeof localStorage !== 'undefined' && localStorage.getItem('mac_candidate_name'))
        ? localStorage.getItem('mac_candidate_name')
        : 'Calon DG41 PJPK';

      // Simpan skor ke LocalStorage untuk Dashboard KPI
      try {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('mac_psychometric_last_score', `${result.overallScore}% (${result.status})`);
        }
        if (typeof window !== 'undefined' && window.MACApp && typeof window.MACApp.updateDashboardStats === 'function') {
          window.MACApp.updateDashboardStats();
          window.MACApp.showToast(`Ujian Selesai! Skor anda: ${result.overallScore}% (${result.status})`, 'success');
        }
      } catch (e) {
        console.warn('Gagal mengemas kini KPI Dashboard:', e);
      }

      // Status Pill Styling
      let statusBadgeClass = 'badge-primary';
      let statusColor = '#8B0000';
      if (result.status === 'LULUS CEMERLANG') {
        statusBadgeClass = 'badge-success';
        statusColor = '#059669';
      } else if (result.status === 'LULUS') {
        statusBadgeClass = 'badge-info';
        statusColor = '#0284C7';
      } else if (result.status === 'PERLU PERBAIKAN') {
        statusBadgeClass = 'badge-warning';
        statusColor = '#D97706';
      } else {
        statusBadgeClass = 'badge-danger';
        statusColor = '#DC2626';
      }

      // Consistency Badge
      let consistencyBadgeText = 'Konsisten & Jujur';
      let consistencyBadgeClass = 'badge-success';
      if (result.consistencyIndex < 60 || result.lieScore >= 2) {
        consistencyBadgeText = 'DIRAGUI: Jawapan Bercanggah / Hipokrit';
        consistencyBadgeClass = 'badge-danger';
      } else if (result.consistencyIndex < 80) {
        consistencyBadgeText = 'Waspada: Variasi Pendirian Sederhana';
        consistencyBadgeClass = 'badge-warning';
      }

      this.container.innerHTML = `
        <div class="card psycho-result-card">
          <!-- Header Slip Rasmi -->
          <div class="card-header bg-subtle" style="display:flex; justify-content:space-between; align-items:center;">
            <div>
              <span class="badge badge-primary">Slip Keputusan Rasmi</span>
              <span class="text-sm text-muted ml-2">Instrumen MyPersonaliti MARA &bull; Modul PJPK</span>
            </div>
            <div class="actions">
              <button type="button" class="btn btn-gold btn-sm btn-print" id="btn-print-slip">
                <svg class="icon-inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clip-rule="evenodd"/>
                </svg>
                Cetak Slip Analisis
              </button>
            </div>
          </div>

          <div class="card-body">
            <!-- Kad Hero Skor Calon -->
            <div class="psycho-result-hero">
              <div class="result-candidate-info">
                <span class="badge badge-gold">Calon Penilaian DG41 PJPK</span>
                <h2 style="margin:0.25rem 0; color:var(--mara-navy);">${candidateName}</h2>
                <div class="text-muted text-sm">
                  Tarikh Ujian: ${new Date().toLocaleDateString('ms-MY', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
              </div>

              <div class="result-score-block">
                <div class="result-score-val" style="color: ${statusColor};">
                  ${result.overallScore}%
                </div>
                <div class="result-score-label">Skor Keseluruhan</div>
                <div class="result-status-pill mt-1">
                  <span class="badge ${statusBadgeClass}" style="font-size:0.85rem; padding:0.35rem 0.8rem;">
                    ${result.status}
                  </span>
                </div>
              </div>
            </div>

            <!-- Kad Pengesanan Konsistensi / Lie Scale (Krusial MARA) -->
            <div class="psycho-consistency-box my-3 ${result.consistencyIndex < 60 ? 'box-danger' : 'box-success'}">
              <div class="box-icon">
                ${result.consistencyIndex >= 60 ? `
                  <svg viewBox="0 0 20 20" fill="#059669" class="icon-xl">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                ` : `
                  <svg viewBox="0 0 20 20" fill="#DC2626" class="icon-xl">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                `}
              </div>
              <div class="box-content">
                <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
                  <strong>Indeks Ketekalan Jawapan (Consistency Index): ${result.consistencyIndex}%</strong>
                  <span class="badge ${consistencyBadgeClass}">${consistencyBadgeText}</span>
                </div>
                <p class="text-sm mt-1 mb-0" style="color:var(--text-secondary);">
                  ${result.consistencyIndex >= 80 ? `
                    Tahniah! Jawapan anda menunjukkan ketekalan dan kejujuran yang sangat tinggi merentasi soalan situasi positif dan soalan perangkap songsang. Anda tidak menunjukkan sebarang percanggahan integriti.
                  ` : result.consistencyIndex >= 60 ? `
                    Tahap ketekalan anda memuaskan namun terdapat sedikit perbezaan pendirian antara soalan situasi terbuka dan tertutup. Pastikan anda mengekalkan prinsip yang tidak berbelah bahagi.
                  ` : `
                    <strong>AMARAN INTEGRITI:</strong> Sistem mengesan percanggahan serius antara pengakuan umum anda dan soalan situasi khusus (dikesan ${result.lieScore} percanggahan berat). Panel penilai MARA menolak calon yang memberikan jawapan berpura-pura (<em>faking good</em>).
                  `}
                </p>
              </div>
            </div>

            <!-- Analisis Terperinci 5 Domain Utama -->
            <div class="section-title-wrap mb-2">
              <h4 class="section-title" style="font-size:1.1rem;">Analisis Prestasi Mengikut 5 Domain Sahsiah Guru PJPK</h4>
              <p class="text-xs text-muted">Penanda Aras Minimum DG41 MARA: 65% bagi setiap domain.</p>
            </div>

            <div class="psycho-domains-list">
              ${Object.keys(DOMAIN_METADATA).map(domKey => {
                const meta = DOMAIN_METADATA[domKey];
                const score = result.domainScores[domKey] || 0;
                let gradeText = 'CEMERLANG';
                let barColor = '#059669';
                if (score < 50) {
                  gradeText = 'LEMAH';
                  barColor = '#DC2626';
                } else if (score < 65) {
                  gradeText = 'SEDERHANA';
                  barColor = '#D97706';
                } else if (score < 80) {
                  gradeText = 'KEPUASAN';
                  barColor = '#0284C7';
                }

                return `
                  <div class="psycho-domain-row">
                    <div class="domain-info-col">
                      <div class="domain-name"><strong>${meta.label}</strong></div>
                      <div class="text-xs text-muted">${this.getDomainDesc(domKey)}</div>
                    </div>
                    <div class="domain-bar-col">
                      <div class="psycho-bar-track">
                        <div class="psycho-bar-fill" style="width:${score}%; background-color:${barColor};"></div>
                      </div>
                    </div>
                    <div class="domain-score-col">
                      <span class="domain-score-number" style="color:${barColor}; font-weight:700;">${score}%</span>
                      <span class="badge badge-outline" style="font-size:0.7rem; margin-left:0.4rem;">${gradeText}</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Huraian Soalan Perangkap Jika Dikesan Percanggahan -->
            ${result.detailedFeedback.length > 0 ? `
              <div class="psycho-feedback-section mt-4">
                <div class="feedback-header">
                  <h4 style="color:#DC2626; font-size:1rem; margin-bottom:0.25rem;">
                    Sorotan Percanggahan Jawapan Dikesan (Audit Lie Scale)
                  </h4>
                  <p class="text-xs text-muted">Berikut adalah perincian soalan perangkap di mana anda memberikan pendirian bertentangan:</p>
                </div>
                <div class="feedback-cards-list mt-2">
                  ${result.detailedFeedback.map(fb => `
                    <div class="card feedback-card mb-2" style="border-left:4px solid #DC2626; padding:0.75rem 1rem;">
                      <div style="display:flex; justify-content:space-between; align-items:center;">
                        <strong>${fb.topic}</strong>
                        <span class="badge badge-danger">${fb.severity}</span>
                      </div>
                      <div class="text-xs text-danger mt-1"><strong>Dapatan Audit:</strong> ${fb.warning}</div>
                      <div class="feedback-q-comparison mt-2 text-xs">
                        <div class="comp-box p-1 bg-subtle mb-1">
                          <strong>Soalan #${fb.q1}:</strong> "${fb.q1Text}" &rarr; <em>Pilihan anda: ${this.getAnsText(fb.q1Ans)}</em>
                        </div>
                        <div class="comp-box p-1 bg-subtle">
                          <strong>Soalan #${fb.q2} (Perangkap):</strong> "${fb.q2Text}" &rarr; <em>Pilihan anda: ${this.getAnsText(fb.q2Ans)}</em>
                        </div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : `
              <div class="card p-3 mt-3 bg-subtle text-sm" style="border-left:4px solid #059669;">
                <strong style="color:#059669;">✔ Ketekalan Integriti Teladan:</strong> Tiada sebarang percanggahan dikesan antara soalan situasi dan soalan perangkap. Profil sahsiah anda stabil dan menepati piawaian calon guru berintegriti tinggi MRSM.
              </div>
            `}

            <!-- Tips Panel Temu Duga MARA -->
            <div class="card p-3 mt-3" style="border:1px solid #E2E8F0; background:#F8FAFC;">
              <h5 style="color:var(--mara-navy); margin-bottom:0.25rem;">Nasihat Pakar Bagi Fasa Seterusnya (Temu Duga &amp; Micro-Teaching):</h5>
              <ul class="text-xs text-muted mb-0" style="padding-left:1.2rem;">
                <li>Kekalkan ketenangan vokal dan jawapan berasaskan nilai <em>Amanah Rakyat</em> semasa berhadapan soalan situasi provokasi di meja temu duga.</li>
                <li>Gunakan pengalaman dan data ujian kecergasan ini semasa membentangkan RPH Pendidikan Kesihatan &amp; SEGAK kepada panel penilai.</li>
              </ul>
            </div>
          </div>

          <!-- Footer Butang Tindakan -->
          <div class="card-footer" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
            <button type="button" class="btn btn-outline" id="btn-retake-exam">
              &#8635; Ambil Semula Ujian
            </button>
            <div class="btn-group" style="display:flex; gap:0.5rem;">
              <button type="button" class="btn btn-secondary" onclick="if(window.MACApp) MACApp.switchTab('dashboard');">
                Ke Papan Pemuka &rarr;
              </button>
              <button type="button" class="btn btn-gold btn-print" id="btn-print-slip-footer">
                Cetak Slip Keputusan
              </button>
            </div>
          </div>
        </div>
      `;

      this.bindResultsEvents();
    },

    bindResultsEvents() {
      const retakeBtn = this.container.querySelector('#btn-retake-exam');
      if (retakeBtn) {
        retakeBtn.addEventListener('click', () => {
          this.engine.resetExam();
          this.renderIntro();
        });
      }

      const printTop = this.container.querySelector('#btn-print-slip');
      const printBottom = this.container.querySelector('#btn-print-slip-footer');
      const handlePrint = () => {
        window.print();
      };
      if (printTop) printTop.addEventListener('click', handlePrint);
      if (printBottom) printBottom.addEventListener('click', handlePrint);
    },

    getDomainDesc(domainKey) {
      const descMap = {
        integrity: 'Ketelusan data SEGAK, amanah aset sukan & keadilan pemilihan atlet maktab.',
        emotional: 'Kawalan emosi berhadapan murid ingkar & ketenangan menerima kritikan nazir.',
        leadership: 'Inisiatif menganjurkan program sukan proaktif tanpa menunggu arahan.',
        interpersonal: 'Semangat kerja berpasukan panitia & empati terhadap kebajikan murid.',
        resilience: 'Ketahanan fizikal-mental dan kesediaan memikul tugas warden asrama MRSM.'
      };
      return descMap[domainKey] || '';
    },

    getAnsText(val) {
      const map = {
        1: '1 - Sangat Tidak Setuju',
        2: '2 - Tidak Setuju',
        3: '3 - Setuju',
        4: '4 - Sangat Setuju'
      };
      return map[val] || `${val}`;
    }
  };

  // 3. Pendedahan Modul / Ekspot Bersih
  const PsychometricModule = {
    PsychometricEngine,
    PsychometricUI,
    QUESTIONS,
    TRAP_PAIRS,
    DOMAIN_METADATA
  };

  // Bootstrapping automatik dalam pelayar
  if (typeof window !== 'undefined') {
    window.PsychometricEngine = PsychometricEngine;
    window.PsychometricUI = PsychometricUI;
    window.PsychometricModule = PsychometricModule;

    // Pasang UI apabila DOM sedia
    const autoMount = () => {
      const container = document.getElementById('psychometric-app');
      if (container) {
        PsychometricUI.init(container);
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', autoMount);
    } else {
      autoMount();
    }

    if (typeof document !== 'undefined') {
      document.addEventListener('mac:tab-switched', (e) => {
        if (e.detail && e.detail.tabId === 'psychometric') {
          const container = document.getElementById('psychometric-app');
          if (container && (!PsychometricUI.container || !container.querySelector('.psycho-intro-card, .psycho-question-card, .psycho-result-card'))) {
            PsychometricUI.init(container);
          }
        }
      });
    }
  }

  // Ekspot untuk persekitaran Node.js (Unit Testing)
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = PsychometricModule;
  }

})(typeof window !== 'undefined' ? window : global);
