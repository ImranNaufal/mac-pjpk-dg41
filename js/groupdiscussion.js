/**
 * ==========================================================================
 * MARA ASSESSMENT CENTRE (MAC) - PJPK DG41 PLATFORM
 * Hab Dinamika Kumpulan & Temu Duga Berkumpulan (LDK Simulator)
 * Module: groupdiscussion.js
 * 100% Offline-Ready | Pure Vanilla JS (ES6+) & Node.js Compatible
 * ==========================================================================
 */

(function (global) {
  'use strict';

  // ==========================================================================
  // 1. DATASET LIMA (5) KAJIAN KES AUTENTIK SITUASI MRSM
  // ==========================================================================
  const LDK_CASES = [
    {
      id: 1,
      title: 'Kajian Kes 1: Trend Murid Menolak Aktiviti Riadah & Masalah Peningkatan Obesiti Maktab',
      category: 'Kesihatan Murid & Budaya Riadah',
      scenario: 'Data Ujian SEGAK penggal pertama menunjukkan 28% murid Maktab Rendah Sains MARA berada dalam kategori Berat Badan Berlebihan (Overweight) dan Obes, manakala kadar murid tidak cergas mencatat peningkatan. Pada waktu riadah petang (5:00 - 6:30 petang), ramai murid didapati lebih gemar tidur di dormitori asrama atau bermain permainan video di bilik rekreasi berbanding turun ke padang.',
      task: 'Rangka satu kertas cadangan pelan intervensi bersepadu yang melibatkan kolaborasi guru PJPK, warden asrama, homeroom, dan dewan selera maktab untuk membudayakan semula amalan gaya hidup cergas tanpa membebankan emosi murid.',
      guidingQuestions: [
        'Apakah faktor psikologi dan persekitaran yang menyebabkan murid enggan turun ke padang?',
        'Bagaimanakah guru PJPK boleh menstrukturkan waktu riadah petang agar lebih inklusif untuk murid bukan atlet?',
        'Apakah peranan dewan selera dan homeroom dalam menyokong pelan intervensi berat badan?'
      ],
      recommendedSolutions: [
        'Memperkenalkan sukan kesenggangan alternatif (Frisbee, dodgeball, orienteering) di samping sukan teras.',
        'Mewujudkan sistem mata ganjaran keaktifan riadah antara homeroom (Fitness League).',
        'Penyesuaian menu dewan selera berasaskan formula Suku-Suku Separuh dan kawalan hidangan manis waktu malam (supper).',
        'Sesi senaman kardiovaskular berimpak sederhana F.I.T.T. berfasa secara berkumpulan tanpa unsur dendaan memalukan.'
      ]
    },
    {
      id: 2,
      title: 'Kajian Kes 2: Penganjuran Kejohanan Sukan Maktab Bawah Bajet Terhad & Cuaca Panas Ekstrem',
      category: 'Pengurusan Risiko, Cuaca & Kewangan Kokurikulum',
      scenario: 'Maktab anda diberi mandat menganjurkan Kejohanan Sukan Antara Rumah (KSM). Namun, peruntukan kewangan kokurikulum telah dipotong sebanyak 30%, dan Jabatan Meteorologi mengeluarkan amaran gelombang haba tahap berjaga-jaga (suhu melebihi 35°C) sepanjang minggu kejohanan.',
      task: 'Bincangkan pelan pengurusan risiko dan penyelarasan jadual pertandingan yang mematuhi Surat Pekeliling Ikhtisas Garis Panduan Cuaca Panas KPM/KKM, sambil memastikan semangat kesukanan dan keselamatan murid terjamin sepenuhnya.',
      guidingQuestions: [
        'Bagaimanakah jadual acara padang dan balapan perlu dianjakkan bagi mengelakkan waktu puncak panas (11:00 pagi - 3:30 petang)?',
        'Apakah langkah jimat kos yang boleh diambil tanpa mengorbankan keselamatan dan kualiti kejohanan?',
        'Bagaimanakah persediaan stesen hidrasi dan pasukan kecemasan pertolongan cemas (PBSM / St. John) diselaraskan?'
      ],
      recommendedSolutions: [
        'Pelaksanaan acara waktu awal pagi (7:30 - 10:00 pagi) dan sesi petang selepas 4:30 petang, serta memindahkan acara tertentu ke dewan tertutup.',
        'Stesen hidrasi air glukosa / span basah percuma di setiap zon balapan dengan kawalan warden.',
        'Penjimatan kos melalui tajaan mesra alumni (ANSARA) dan penghasilan bahan promosi digital tanpa cetakan banner mahal.',
        'SOP pembatalan segera sekiranya bacaan indeks haba melebihi tahap bahaya (37°C) mengikut pekeliling KKM.'
      ]
    },
    {
      id: 3,
      title: 'Kajian Kes 3: Ketegangan dan Insiden Pergaduhan Pasukan Semasa Liga Asrama',
      category: 'Disiplin Asrama, De-Eskalasi Krisis & Sukan Bersih',
      scenario: 'Semasa perlawanan akhir Futsal Antara Blok Asrama, berlaku insiden kekasaran yang mencetuskan pergaduhan fizikal antara murid Tingkatan 4 dan Tingkatan 5. Insiden tersebut mula tular dalam kumpulan WhatsApp ibu bapa dan mencetuskan ketegangan antara blok asrama.',
      task: 'Sebagai jawatankuasa guru PJPK dan warden asrama, cadangkan langkah-langkah de-eskalasi krisis, tindakan tatatertib pemulihan berasaskan kaunseling, dan strategi memulihkan semula keharmonian persaudaraan (ukhuwah) murid asrama.',
      guidingQuestions: [
        'Apakah tindakan serta-merta yang perlu diambil oleh guru di gelanggang bagi meredakan pergaduhan?',
        'Bagaimanakah pihak maktab harus menangani kebimbangan ibu bapa dan penyebaran video insiden?',
        'Apakah pendekatan disiplin pemulihan (restorative justice) yang sesuai berbanding hukuman gantung semata-mata?'
      ],
      recommendedSolutions: [
        'Menghentikan serta-merta perlawanan, mengasingkan kedua-dua blok ke ruang berasingan dan rawatan kecederaan di Pusat Kesihatan Maktab.',
        'Sesi rundingan empat mata bersama guru homeroom dan kaunselor maktab (mediasi bersemuka).',
        'Kenyataan rasmi pentadbiran maktab kepada ibu bapa menerusi saluran rasmi bagi meredakan spekulasi liar.',
        'Program khidmat komuniti asrama bersama antara kedua-dua pasukan untuk membina semula semangat persaudaraan.'
      ]
    },
    {
      id: 4,
      title: 'Kajian Kes 4: Mengimbangi Tekanan Akademik Peperiksaan & Keperluan Bersenam Murid Tingkatan 5',
      category: 'Keseimbangan Akademik-Kokurikulum & Kesihatan Mental',
      scenario: 'Sekumpulan ibu bapa murid Tingkatan 5 (calon SPM & IGCSE) menghantar surat bantahan kepada Pengetua, memohon agar anak-anak mereka dikecualikan daripada kelas amali Pendidikan Jasmani dan aktiviti kokurikulum agar dapat menumpukan 100% masa kepada kelas bimbingan akademik petang.',
      task: 'Sediakan hujah berasaskan sains sukan, fisiologi otak, dan dasar Falsafah Pendidikan Kebangsaan untuk meyakinkan pihak pentadbir dan ibu bapa bahawa kecergasan fizikal sebenarnya merangsang prestasi akademik, serta cadangkan jadual amali PJ yang mesra peperiksaan.',
      guidingQuestions: [
        'Apakah bukti saintifik yang menunjukkan hubungan positif antara senaman aerobik dengan daya ingatan dan fokus peperiksaan?',
        'Bagaimanakah pengubahsuaian aktiviti PJ tingkatan 5 boleh dilakukan (cth: regangan ergonomik, terapi stres)?',
        'Bagaimanakah sesi libat urus profesional dengan ibu bapa wajar dikendalikan oleh pihak maktab?'
      ],
      recommendedSolutions: [
        'Pembentangan fakta neurosains (pelepasan BDNF dan endorfin semasa senaman merangsang daya ingatan hippocampus otak).',
        'Penyelarasan modul amali PJPK Tingkatan 5: aktiviti berintensiti sederhana, senaman postur ergonomik elak sakit tengkuk/belakang, dan senaman pernafasan relaksasi.',
        'Sesi taklimat bersama PIBG / Muafakat MRSM bagi memperjelaskan Falsafah Pendidikan Kebangsaan (Keseimbangan JERI).',
        'Menjamin bahawa amali PJ tidak menyebabkan keletihan fizikal berlebihan yang menjejaskan kelas persediaan malam (prep).'
      ]
    },
    {
      id: 5,
      title: 'Kajian Kes 5: Isu Kehilangan Aset Stor Sukan & Tatacara Pengurusan Stor MARA',
      category: 'Integriti Pengurusan Stor, Aset Awam & Tatatertib',
      scenario: 'Audit mengejut mendapati lebih 40% alatan sukan maktab (raket badminton, bola, jam randik, jersi pasukan) hilang atau rosak teruk tanpa rekod dalam Buku Log Pinjaman Stor Sukan. Segelintir murid dan staf didapati membawa keluar alatan secara tidak rasmi.',
      task: 'Bincangkan pelan pemerkasaan Tatacara Pengurusan Stor Sukan Maktab yang telus, berasaskan pendigitalan log pergerakan aset dan pemupukan nilai integriti bersama dalam kalangan warga maktab.',
      guidingQuestions: [
        'Di manakah punca ketirisan prosedur stor sukan maktab berlaku?',
        'Bagaimanakah sistem perekodan digital ringkas boleh diaplikasikan bagi menggantikan buku log fizikal yang kerap diabaikan?',
        'Bagaimanakah nilai integriti dan tanggungjawab bersama terhadap aset kerajaan dapat dipupuk dalam kalangan murid dan staf?'
      ],
      recommendedSolutions: [
        'Pelaksanaan sistem Kod QR / Imbasan Digital untuk pinjaman dan pemulangan peralatan stor sukan.',
        'Penetapan jadual bertugas rasmi Pembantu Makmal Sukan / Pengawas Sukan Maktab sebagai penjaga pintu masuk stor.',
        'Pemeriksaan stok berkala (Stock Take) setiap hujung bulan berpandukan Tatacara Pengurusan Stor Kerajaan (TPS).',
        'Kempen kesedaran integriti "Aset Maktab Amanah Bersama" di perhimpunan mingguan maktab.'
      ]
    }
  ];

  // ==========================================================================
  // 2. LIMA (5) PERANAN STRATEGIK CALON DALAM KUMPULAN
  // ==========================================================================
  const CANDIDATE_ROLES = [
    {
      id: 'initiator',
      name: 'Pemula & Fasilitator Sesi (The Initiator)',
      badge: 'Kepimpinan & Inisiatif',
      description: 'Membuka perbincangan dengan sopan, menyapa panel penilai, membacakan secara ringkas teras masalah, dan mengajak kumpulan memulakan Fasa 1.',
      goldenLine: 'Assalamualaikum dan selamat pagi kepada barisan panel dan rakan-rakan guru. Izinkan saya membuka sesi kita dengan merumuskan isu utama kajian kes ini...'
    },
    {
      id: 'timekeeper',
      name: 'Pengurus Masa & Pencatat (The Timekeeper)',
      badge: 'Pengurusan Masa',
      description: 'Memantau jam undur 15 minit secara diplomatik, mencatat resolusi yang dipersetujui, dan memastikan perbincangan beralih fasa mengikut jadual.',
      goldenLine: 'Poin yang sangat bernas daripada Cikgu Aina. Memandangkan baki masa Fasa 2 tinggal 4 minit lagi, apa kata kita beralih ke strategi pelaksanaan konkrit...'
    },
    {
      id: 'builder',
      name: 'Pembina Idea (The Idea Builder)',
      badge: 'Kerjasama & EQ',
      description: 'Menyokong cadangan rakan sepasukan dan menambah nilai praktikal berteraskan DSKP PJPK atau sains sukan (teknik Build-Upon).',
      goldenLine: 'Menyokong cadangan Cikgu Hafiz tadi berkenaan nutrisi murid, saya ingin kembangkan sedikit dengan cadangan pemantauan SEGAK individu...'
    },
    {
      id: 'grounder',
      name: 'Penjaga Realisme & Kepatuhan SOP (The Practical Grounder)',
      badge: 'Pematuhan Pekeliling',
      description: 'Memastikan cadangan kumpulan mematuhi pekeliling kerajaan (SPI), kemampuan bajet maktab, serta aspek keselamatan murid (Duty of Care).',
      goldenLine: 'Idea tersebut sangat kreatif. Namun dari aspek Garis Panduan Cuaca Panas KPM/KKM, wajar kita pastikan larian berkenaan diadakan di bawah teduhan sebelum jam 10 pagi...'
    },
    {
      id: 'synthesizer',
      name: 'Perumus Konsensus (The Consensus Builder)',
      badge: 'Penyelesaian & Konsensus',
      description: 'Mengumpulkan 3 resolusi terbaik kumpulan pada 3 minit terakhir dan membentangkan kata sepakat secara teratur kepada panel.',
      goldenLine: 'Alhamdulillah, kita telah mencapai kata sepakat bagi 3 tindakan teras. Izinkan saya merumuskan resolusi akhir kumpulan kita untuk pertimbangan barisan panel...'
    }
  ];

  // ==========================================================================
  // 3. FRASA EMAS KOMUNIKASI (GOLDEN PHRASES)
  // ==========================================================================
  const GOLDEN_PHRASES = [
    {
      type: 'Mencelah Secara Sopan',
      phrase: 'Maafkan saya mencelah sebentar Cikgu [Nama], saya amat tertarik dengan pandangan anda berkenaan [Poin] tadi...'
    },
    {
      type: 'Membina di Atas Idea Rakan (Build-Upon)',
      phrase: 'Menyokong hujah yang dikemukakan oleh Cikgu [Nama], ingin saya kembangkan sedikit aspek pelaksanaannya di maktab...'
    },
    {
      type: 'Menolak Pandangan Secara Diplomatik',
      phrase: 'Pandangan Cikgu [Nama] mempunyai merit tersendiri, namun sekiranya kita mengambil kira kekangan bajet maktab, mungkin alternatif yang lebih realistik adalah...'
    },
    {
      type: 'Mengajak Calon Pasif Bersuara',
      phrase: 'Kita telah mendengar beberapa pandangan menarik. Mungkin kita boleh mendengar perspektif daripada Cikgu [Nama] dari sudut pengalaman beliau?'
    },
    {
      type: 'Mengharmonikan Perbincangan yang Buntu',
      phrase: 'Kedua-dua pandangan Cikgu A dan Cikgu B amat kritikal. Sebenarnya kita boleh menggabungkan kedua-duanya menjadi pelan dua fasa berperingkat...'
    }
  ];

  // ==========================================================================
  // 4. ENJIN LOGIK LDK (LDKEngine)
  // ==========================================================================
  class LDKEngine {
    constructor() {
      this.cases = LDK_CASES;
      this.roles = CANDIDATE_ROLES;
      this.phrases = GOLDEN_PHRASES;
    }

    getCases() {
      return this.cases;
    }

    getCaseById(id) {
      const num = parseInt(id, 10);
      return this.cases.find(c => c.id === num) || null;
    }

    getRoles() {
      return this.roles;
    }

    getPhrases() {
      return this.phrases;
    }

    /**
     * Mengira skor rubrik panel LDK 4 dimensi (100% skala)
     */
    evaluateRubric(scores) {
      const {
        leadership = 3,
        teamwork = 3,
        communication = 3,
        ideaQuality = 3
      } = scores || {};

      const maxScorePerDim = 5;
      const weightPerDim = 25; // 4 dimensi x 25% = 100%

      const leadershipScore = (leadership / maxScorePerDim) * weightPerDim;
      const teamworkScore = (teamwork / maxScorePerDim) * weightPerDim;
      const communicationScore = (communication / maxScorePerDim) * weightPerDim;
      const ideaScore = (ideaQuality / maxScorePerDim) * weightPerDim;

      const totalPercentage = Math.round(leadershipScore + teamworkScore + communicationScore + ideaScore);

      let verdict = 'PERLU LATIHAN LANJUT';
      let badgeClass = 'badge-danger';

      if (totalPercentage >= 85) {
        verdict = 'CEMERLANG (LAYAK DG41)';
        badgeClass = 'badge-green';
      } else if (totalPercentage >= 75) {
        verdict = 'KEPUASAN MEMUASKAN (LULUS)';
        badgeClass = 'badge-blue';
      } else if (totalPercentage >= 65) {
        verdict = 'SEDERHANA (BERISIKO)';
        badgeClass = 'badge-gold';
      }

      return {
        totalPercentage,
        verdict,
        badgeClass,
        details: {
          leadership: { raw: leadership, weighted: leadershipScore },
          teamwork: { raw: teamwork, weighted: teamworkScore },
          communication: { raw: communication, weighted: communicationScore },
          ideaQuality: { raw: ideaQuality, weighted: ideaScore }
        }
      };
    }
  }

  // ==========================================================================
  // 5. PEMASA BERFASA 15 MINIT LDK (LDKTimer)
  // ==========================================================================
  class LDKTimer {
    constructor() {
      this.interval = null;
      this.remainingSeconds = 900; // 15 minit
      this.totalSeconds = 900;
      this.running = false;
      this.paused = false;
    }

    start(onTick, onPhaseChange, onComplete) {
      this.reset();
      this.totalSeconds = 900;
      this.remainingSeconds = 900;
      this.running = true;
      this.paused = false;

      let currentPhaseNumber = this.getPhase(this.remainingSeconds).phaseNumber;

      this.interval = setInterval(() => {
        if (this.paused) return;
        this.remainingSeconds--;

        const phaseInfo = this.getPhase(this.remainingSeconds);
        if (phaseInfo.phaseNumber !== currentPhaseNumber) {
          currentPhaseNumber = phaseInfo.phaseNumber;
          this.playBeep(1200);
          if (typeof onPhaseChange === 'function') onPhaseChange(phaseInfo);
        }

        if (typeof onTick === 'function') {
          onTick(this.remainingSeconds, this.formatTime(this.remainingSeconds), phaseInfo);
        }

        if (this.remainingSeconds <= 0) {
          this.remainingSeconds = 0;
          this.stop();
          this.playBeep(800);
          if (typeof onComplete === 'function') onComplete();
        }
      }, 1000);

      if (this.interval && typeof this.interval.unref === 'function') {
        this.interval.unref();
      }
    }

    pause() {
      if (this.running && !this.paused) this.paused = true;
    }

    resume() {
      if (this.running && this.paused) this.paused = false;
    }

    stop() {
      this.running = false;
      this.paused = false;
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
    }

    reset() {
      this.stop();
      this.remainingSeconds = 900;
      this.totalSeconds = 900;
    }

    formatTime(seconds) {
      const s = Math.max(0, Math.floor(seconds));
      const mins = Math.floor(s / 60);
      const secs = s % 60;
      const mm = mins < 10 ? `0${mins}` : `${mins}`;
      const ss = secs < 10 ? `0${secs}` : `${secs}`;
      return `${mm}:${ss}`;
    }

    /**
     * Fasa Masa 15 Minit:
     * - Fasa 1 (900 - 780 saat = 2 min): Analisis Kes & Penetapan Matlamat
     * - Fasa 2 (780 - 240 saat = 9 min): Sumbang Saran & Pembinaan Pelan
     * - Fasa 3 (240 - 0 saat = 4 min): Rumusan Konsensus & Kata Sepakat
     */
    getPhase(remSeconds) {
      if (remSeconds > 780) {
        return {
          phaseNumber: 1,
          phaseName: 'FASA 1: Analisis Kes & Penetapan Matlamat',
          guidance: 'Baca senario bersama-sama, kenal pasti punca teras masalah, dan tetapkan hala tuju perbincangan.',
          color: '#2563EB'
        };
      } else if (remSeconds > 240) {
        return {
          phaseNumber: 2,
          phaseName: 'FASA 2: Sumbang Saran & Pelan Tindakan Bersepadu',
          guidance: 'Setiap calon bentangkan cadangan praktikal. Amalkan teknik membina idea rakan (Build-Upon) dan patuhi SOP.',
          color: '#D4AF37'
        };
      } else {
        return {
          phaseNumber: 3,
          phaseName: 'FASA 3: Sintesis & Rumusan Konsensus Kumpulan',
          guidance: 'Capai kata sepakat 3 resolusi utama, tetapkan peranan pelaksanaan, dan buat rumusan kemas untuk panel.',
          color: '#059669'
        };
      }
    }

    playBeep(freq = 800) {
      try {
        const AudioCtx = global.AudioContext || global.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
      } catch (e) {}
    }
  }

  // ==========================================================================
  // 6. PENGURUS ANTARA MUKA UI (LDKUI)
  // ==========================================================================
  const LDKUI = {
    engine: new LDKEngine(),
    timer: new LDKTimer(),
    currentCaseId: 1,
    container: null,

    init(containerSelector = '#groupdiscussion-app') {
      const el = typeof containerSelector === 'string'
        ? document.querySelector(containerSelector)
        : containerSelector;

      if (!el) return false;
      this.container = el;
      this.render();
      return true;
    },

    render() {
      if (!this.container) return;
      const cases = this.engine.getCases();
      const currentCase = this.engine.getCaseById(this.currentCaseId) || cases[0];
      const roles = this.engine.getRoles();
      const phrases = this.engine.getPhrases();

      this.container.innerHTML = `
        <div class="card p-6 mb-6">
          <div class="flex-between flex-wrap gap-4 border-b pb-4 mb-4">
            <div>
              <span class="badge badge-maroon mb-2">STESEN 5B PENILAIAN MAC</span>
              <h2 class="text-2xl font-bold text-navy">Simulator Dinamika Kumpulan (LDK / Group Interview)</h2>
              <p class="text-sm text-muted">Simulasi sesi perbincangan meja bulat 15 minit (5–6 calon) menyelesaikan kajian kes situasi sebenar maktab di hadapan barisan panel penilai MARA.</p>
            </div>
            <div class="flex gap-2">
              <button class="btn btn-secondary btn-sm" id="btn-print-ldk">&#128438; Cetak Panduan LDK</button>
            </div>
          </div>

          <!-- Pemilihan Kajian Kes -->
          <div class="mb-4">
            <label class="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Pilih Kajian Kes Situasi MRSM:</label>
            <div class="grid grid-cols-1 md:grid-cols-5 gap-2" id="ldk-case-tabs">
              ${cases.map(c => `
                <button type="button" class="btn text-left p-3 ${c.id === currentCase.id ? 'btn-primary' : 'btn-outline'}" data-case-id="${c.id}" style="font-size: 0.82rem; height: auto;">
                  <div class="font-bold mb-1">Kes #${c.id}</div>
                  <div class="text-xs truncate">${c.title.replace(/^Kajian Kes \d+: /, '')}</div>
                  <span class="badge badge-sm badge-blue mt-2">${c.category}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Kad Senario Kajian Kes Terpilih -->
          <div class="card p-5 bg-light border-maroon mb-6">
            <div class="flex-between flex-wrap gap-2 mb-2">
              <span class="badge badge-maroon font-bold text-sm">Kes #${currentCase.id}: ${currentCase.category}</span>
              <span class="text-xs text-muted">Format: <strong>15 Minit Meja Bulat (5–6 Calon)</strong></span>
            </div>
            <h3 class="text-lg font-bold text-navy mb-3">${currentCase.title}</h3>

            <div class="p-3 bg-white rounded border mb-3">
              <span class="text-xs font-bold text-muted uppercase block mb-1">&#128220; Huraian Senario Masalah:</span>
              <p class="text-sm leading-relaxed text-dark">${currentCase.scenario}</p>
            </div>

            <div class="p-3 bg-white rounded border border-maroon mb-3" style="border-left: 4px solid #8B0000;">
              <span class="text-xs font-bold text-maroon uppercase block mb-1">&#127919; Arahan Tugasan Kumpulan Calon:</span>
              <p class="text-sm font-bold text-navy leading-relaxed">${currentCase.task}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <!-- Soalan Panduan -->
              <div class="p-3 bg-white rounded border">
                <span class="text-xs font-bold text-navy uppercase block mb-2">&#10067; Soalan Panduan Perbincangan:</span>
                <ul class="list-disc pl-5 text-xs text-muted space-y-1">
                  ${currentCase.guidingQuestions.map(q => `<li>${q}</li>`).join('')}
                </ul>
              </div>

              <!-- Cadangan Penyelesaian -->
              <div class="p-3 bg-white rounded border">
                <span class="text-xs font-bold text-green uppercase block mb-2">&#10004; Cadangan Penyelesaian Berimpak Tinggi:</span>
                <ul class="list-disc pl-5 text-xs text-muted space-y-1">
                  ${currentCase.recommendedSolutions.map(s => `<li>${s}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>

          <!-- Pemasa Berfasa 15 Minit LDK -->
          <div class="card p-5 bg-white border mb-6">
            <div class="flex-between flex-wrap gap-4 items-center border-b pb-3 mb-3">
              <div>
                <span class="text-xs font-bold text-muted uppercase">Pemasa Sesi Perbincangan Meja Bulat (15 Minit):</span>
                <div class="text-3xl font-black text-navy" id="ldk-timer-digits">15:00</div>
              </div>
              <div class="text-center md:text-left flex-1 px-4">
                <span class="badge font-bold text-sm" id="ldk-phase-badge" style="background-color: #2563EB; color: #fff;">FASA 1: Analisis Kes &amp; Penetapan Matlamat</span>
                <p class="text-xs text-muted mt-1" id="ldk-phase-guidance">Baca senario bersama-sama, kenal pasti punca teras masalah, dan tetapkan hala tuju perbincangan.</p>
              </div>
              <div class="flex gap-2">
                <button type="button" class="btn btn-primary btn-sm" id="btn-timer-toggle-ldk">Mula Simulasi LDK</button>
                <button type="button" class="btn btn-outline btn-sm" id="btn-timer-reset-ldk">Reset</button>
              </div>
            </div>

            <!-- Petunjuk Garis Masa 3 Fasa -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-center text-xs">
              <div class="p-2 bg-light rounded border border-blue">
                <strong class="text-blue">Fasa 1 (0:00 - 2:00)</strong><br />
                Analisis &amp; Matlamat Masalah
              </div>
              <div class="p-2 bg-light rounded border border-gold">
                <strong class="text-gold">Fasa 2 (2:00 - 11:00)</strong><br />
                Sumbang Saran &amp; Pelan Tindakan
              </div>
              <div class="p-2 bg-light rounded border border-green">
                <strong class="text-green">Fasa 3 (11:00 - 15:00)</strong><br />
                Rumusan Konsensus Kumpulan
              </div>
            </div>
          </div>

          <!-- Strategi Peranan Watak Calon -->
          <div class="mb-6">
            <h3 class="text-lg font-bold text-navy mb-3">&#128101; 5 Peranan Strategik Calon Semasa Sesi Dinamika Kumpulan</h3>
            <p class="text-xs text-muted mb-3">Pilih dan kuasai peranan yang sesuai dengan kekuatan personaliti anda untuk memaksimumkan markah tanpa bersikap dominan:</p>
            <div class="grid grid-cols-1 md:grid-cols-5 gap-3">
              ${roles.map(r => `
                <div class="p-3 bg-light rounded border flex flex-col justify-between">
                  <div>
                    <span class="badge badge-sm badge-outline mb-2">${r.badge}</span>
                    <h4 class="font-bold text-navy text-xs mb-1">${r.name}</h4>
                    <p class="text-xs text-muted mb-2 leading-relaxed">${r.description}</p>
                  </div>
                  <div class="p-2 bg-white rounded border text-xs italic text-dark" style="border-left: 3px solid #8B0000;">
                    "${r.goldenLine}"
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Frasa Emas & Pantang Larang Komunikasi -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <!-- Frasa Emas -->
            <div class="card p-4 bg-light border">
              <h4 class="font-bold text-navy text-sm mb-3">&#10024; Frasa Emas Komunikasi Diplomatik (Golden Phrases)</h4>
              <div class="space-y-2 text-xs">
                ${phrases.map(p => `
                  <div class="p-2 bg-white rounded border">
                    <strong class="text-navy block mb-1">${p.type}:</strong>
                    <span class="text-dark italic">"${p.phrase}"</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Pantang Larang Panel Penilai -->
            <div class="card p-4 bg-light border border-danger">
              <h4 class="font-bold text-danger text-sm mb-3">&#9888; 5 Pantang Larang Besar Panel Penilai LDK (Red Flags)</h4>
              <ul class="space-y-2 text-xs text-dark">
                <li class="p-2 bg-white rounded border border-danger">
                  <strong class="text-danger">&#10008; 1. Mendominasi Sesi (Monopolising):</strong><br />
                  Bercakap lebih 60% masa atau memotong giliran orang lain secara berterusan.
                </li>
                <li class="p-2 bg-white rounded border border-danger">
                  <strong class="text-danger">&#10008; 2. Pasif Sepenuhnya (Silent Observer):</strong><br />
                  Hanya mengangguk tanpa mengemukakan sebarang cadangan konkrit baharu.
                </li>
                <li class="p-2 bg-white rounded border border-danger">
                  <strong class="text-danger">&#10008; 3. Menyerang Pandangan Rakan Kasar:</strong><br />
                  Menggunakan perkataan seperti "Idea tu salah sama sekali" atau nada menyindir.
                </li>
                <li class="p-2 bg-white rounded border border-danger">
                  <strong class="text-danger">&#10008; 4. Berpidato Terus ke Arah Panel:</strong><br />
                  Memandang mata panel bukannya berbincang dengan rakan-rakan di meja bulat.
                </li>
                <li class="p-2 bg-white rounded border border-danger">
                  <strong class="text-danger">&#10008; 5. Menyalahkan Pengurusan Maktab:</strong><br />
                  Hanya merungut tentang kekangan tanpa mencadangkan jalan penyelesaian positif.
                </li>
              </ul>
            </div>
          </div>

          <!-- Kalkulator Semakan Rubrik Penilaian Kendiri LDK -->
          <div class="card p-5 bg-white border">
            <h4 class="font-bold text-navy text-sm mb-2">&#128221; Kalkulator Penilaian Kendiri Sesi Dinamika Kumpulan (100% Wajaran)</h4>
            <p class="text-xs text-muted mb-4">Uji prestasi simulasi perbincangan kumpulan anda berpandukan 4 kriteria rasmi panel penilai MARA:</p>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label class="block text-xs font-bold text-dark mb-1">1. Kepimpinan &amp; Inisiatif (25%):</label>
                <select id="rubric-leadership" class="form-control text-xs">
                  <option value="5">5/5 - Memandu hala tuju, matang, hormat masa</option>
                  <option value="4" selected>4/5 - Proaktif mencadang idea &amp; fasilitasi</option>
                  <option value="3">3/5 - Sederhana, mengikut arus kumpulan</option>
                  <option value="2">2/5 - Kurang inisiatif, pasif</option>
                  <option value="1">1/5 - Terlalu agresif / mendominasi</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-dark mb-1">2. Semangat Berpasukan &amp; EQ (25%):</label>
                <select id="rubric-teamwork" class="form-control text-xs">
                  <option value="5">5/5 - Mendengar aktif, membina idea rakan</option>
                  <option value="4" selected>4/5 - Menyokong rakan dengan baik</option>
                  <option value="3">3/5 - Bekerjasama biasa</option>
                  <option value="2">2/5 - Mengabaikan pandangan rakan</option>
                  <option value="1">1/5 - Kerap memotong cakap / defensif</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-dark mb-1">3. Komunikasi &amp; Bahasa Badan (25%):</label>
                <select id="rubric-communication" class="form-control text-xs">
                  <option value="5">5/5 - Intonasi kemas, kontak mata meja bulat</option>
                  <option value="4" selected>4/5 - Komunikasi jelas dan santun</option>
                  <option value="3">3/5 - Sederhana, kadangkala gugup</option>
                  <option value="2">2/5 - Suara terlalu perlahan / tidak jelas</option>
                  <option value="1">1/5 - Bahasa tubuh kaku / pandang panel sahaja</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-dark mb-1">4. Kualiti Idea &amp; Penyelesaian (25%):</label>
                <select id="rubric-ideas" class="form-control text-xs">
                  <option value="5">5/5 - Praktikal, patuh SOP, DSKP PJPK &amp; kreatif</option>
                  <option value="4" selected>4/5 - Cadangan baik dan realistik</option>
                  <option value="3">3/5 - Idea umum, kurang mendalam</option>
                  <option value="2">2/5 - Idea tidak praktikal / luar konteks</option>
                  <option value="1">1/5 - Tiada sebarang cadangan penyelesaian</option>
                </select>
              </div>
            </div>

            <div class="flex-between items-center p-3 bg-light rounded border">
              <div>
                <span class="text-xs font-bold text-muted uppercase">Skor Prestasi Simulasi LDK:</span>
                <span class="text-xl font-black text-navy ml-2" id="ldk-rubric-percent">80%</span>
                <span class="badge badge-green ml-2" id="ldk-rubric-verdict">KEPUASAN MEMUASKAN (LULUS)</span>
              </div>
              <button type="button" class="btn btn-primary btn-sm" id="btn-calc-ldk-rubric">Kemas Kini Skor Penilaian</button>
            </div>
          </div>
        </div>
      `;

      this.bindEvents();
    },

    bindEvents() {
      if (!this.container) return;

      // 1. Tab Pemilihan Kajian Kes
      const caseBtns = this.container.querySelectorAll('[data-case-id]');
      caseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const cId = parseInt(btn.getAttribute('data-case-id'), 10);
          if (cId && cId !== this.currentCaseId) {
            this.currentCaseId = cId;
            this.timer.reset();
            this.render();
          }
        });
      });

      // 2. Kawalan Pemasa Berfasa LDK
      const timerDigits = this.container.querySelector('#ldk-timer-digits');
      const phaseBadge = this.container.querySelector('#ldk-phase-badge');
      const phaseGuidance = this.container.querySelector('#ldk-phase-guidance');
      const toggleBtn = this.container.querySelector('#btn-timer-toggle-ldk');
      const resetBtn = this.container.querySelector('#btn-timer-reset-ldk');

      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          if (this.timer.running && !this.timer.paused) {
            this.timer.pause();
            toggleBtn.textContent = 'Sambung Sesi LDK';
          } else if (this.timer.running && this.timer.paused) {
            this.timer.resume();
            toggleBtn.textContent = 'Jeda Sesi';
          } else {
            toggleBtn.textContent = 'Jeda Sesi';
            this.timer.start(
              (rem, formatted, phaseInfo) => {
                if (timerDigits) {
                  timerDigits.textContent = formatted;
                  if (rem <= 60) timerDigits.style.color = '#dc2626';
                  else timerDigits.style.color = '';
                }
                if (phaseBadge) {
                  phaseBadge.textContent = phaseInfo.phaseName;
                  phaseBadge.style.backgroundColor = phaseInfo.color;
                }
                if (phaseGuidance) {
                  phaseGuidance.textContent = phaseInfo.guidance;
                }
              },
              (newPhase) => {
                if (typeof global.MACApp !== 'undefined' && global.MACApp.showToast) {
                  global.MACApp.showToast(`Peralihan Masa: ${newPhase.phaseName}`, 'info', 3000);
                }
              },
              () => {
                if (timerDigits) timerDigits.textContent = '00:00';
                if (toggleBtn) toggleBtn.textContent = 'Masa Tamat!';
                if (typeof global.MACApp !== 'undefined' && global.MACApp.showToast) {
                  global.MACApp.showToast('Masa 15 minit perbincangan meja bulat telah tamat!', 'warning', 4000);
                }
              }
            );
          }
        });
      }

      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.timer.reset();
          if (timerDigits) {
            timerDigits.textContent = '15:00';
            timerDigits.style.color = '';
          }
          if (phaseBadge) {
            phaseBadge.textContent = 'FASA 1: Analisis Kes & Penetapan Matlamat';
            phaseBadge.style.backgroundColor = '#2563EB';
          }
          if (phaseGuidance) {
            phaseGuidance.textContent = 'Baca senario bersama-sama, kenal pasti punca teras masalah, dan tetapkan hala tuju perbincangan.';
          }
          if (toggleBtn) toggleBtn.textContent = 'Mula Simulasi LDK';
        });
      }

      // 3. Kalkulator Rubrik Penilaian Kendiri
      const calcBtn = this.container.querySelector('#btn-calc-ldk-rubric');
      if (calcBtn) {
        calcBtn.addEventListener('click', () => {
          const l = parseInt(this.container.querySelector('#rubric-leadership').value, 10);
          const t = parseInt(this.container.querySelector('#rubric-teamwork').value, 10);
          const c = parseInt(this.container.querySelector('#rubric-communication').value, 10);
          const i = parseInt(this.container.querySelector('#rubric-ideas').value, 10);

          const res = this.engine.evaluateRubric({ leadership: l, teamwork: t, communication: c, ideaQuality: i });

          const percentEl = this.container.querySelector('#ldk-rubric-percent');
          const verdictEl = this.container.querySelector('#ldk-rubric-verdict');

          if (percentEl) percentEl.textContent = `${res.totalPercentage}%`;
          if (verdictEl) {
            verdictEl.textContent = res.verdict;
            verdictEl.className = `badge ${res.badgeClass} ml-2`;
          }

          if (typeof global.MACApp !== 'undefined' && global.MACApp.showToast) {
            global.MACApp.showToast(`Skor LDK dinilai: ${res.totalPercentage}% (${res.verdict})`, 'success', 2500);
          }
        });
      }

      // 4. Cetak Panduan LDK
      const printBtn = this.container.querySelector('#btn-print-ldk');
      if (printBtn) {
        printBtn.addEventListener('click', () => {
          window.print();
        });
      }
    }
  };

  // ==========================================================================
  // 7. EKSPORT MODUL
  // ==========================================================================
  const MACGroupDiscussionModule = {
    LDK_CASES,
    CANDIDATE_ROLES,
    GOLDEN_PHRASES,
    LDKEngine,
    LDKTimer,
    LDKUI
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = MACGroupDiscussionModule;
  }

  global.MACGroupDiscussionModule = MACGroupDiscussionModule;
  global.MACGroupDiscussionUI = LDKUI;

})(typeof window !== 'undefined' ? window : global);
