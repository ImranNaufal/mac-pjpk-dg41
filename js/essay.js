/**
 * ==========================================================================
 * MARA ASSESSMENT CENTRE (MAC) - PJPK DG41 PLATFORM
 * Hab Penulisan Esei (Essay Writing Hub) - Bahasa Inggeris & Bahasa Melayu
 * Module: essay.js
 * 100% Offline-Ready | Pure Vanilla JS (ES6+) & Node.js Compatible
 * ==========================================================================
 */

(function (global) {
  'use strict';

  // ==========================================================================
  // 1. DATASET 5 TAJUK ESEI AUTENTIK MAC MARA
  // ==========================================================================
  const ESSAY_TOPICS = [
    {
      id: 1,
      language: 'English',
      languageBadge: 'Bahasa Inggeris',
      title: 'What Contribution Will You Give to MARA as an Educator in MRSM?',
      theme: 'Amanah, Visi MARA & Sumbangan Profesional Pendidik',
      targetWords: '350 - 500 patah perkataan',
      suggestedDuration: 45,
      guide: {
        intro: 'Acknowledge MARA Act 249 of 1966, the noble mandate of empowering Bumiputera through education, and state your primary pledge as a PJPK DG41 officer.',
        points: [
          'Pedagogical Innovation: Elevate Physical & Health Education from mere recreational drills into scientifically-grounded kinesiology, heart-rate training (Karvonen method), and TGFU strategic game sense.',
          'Wellness Ecosystem: Champion data-driven intervention based on the National Physical Fitness Standard (SEGAK), reducing sedentary habits and preparing students physically for rigorous academic workloads.',
          'Pastoral Leadership: Embody the doctrine of in loco parentis as a proactive Homeroom advisor and hostel warden, safeguarding student emotional wellbeing and instilling brotherhood.'
        ],
        conclusion: 'Reiterate that your physical education expertise, combined with institutional integrity, will help groom visionary Bumiputera scholars who lead locally and globally.'
      },
      keywords: [
        'Act 249 of 1966',
        'Socioeconomic empowerment',
        'Holistic excellence (JERI)',
        'Doctrine of in loco parentis',
        'Physical literacy',
        'Teaching Games for Understanding (TGfU)',
        'Lifelong wellness',
        'Amanah & professional integrity'
      ],
      pitfalls: [
        'Writing generic essay without mentioning MARA or MRSM residential school realities',
        'Complaining about warden duties or extra-curricular working hours',
        'Exceeding 600 words resulting in grammatical errors and poor time management'
      ],
      modelEssay: `Established under Act 249 of 1966, Majlis Amanah Rakyat (MARA) has long stood as the vanguard of Bumiputera socioeconomic empowerment through transformative education. As an aspiring Education Service Officer (Grade DG41) in Physical and Health Education (PJPK), joining MARA is not merely a career progression; it is a sacred trust (amanah) to cultivate resilient, world-class Bumiputera scholars. If given the privilege to serve in Maktab Rendah Sains MARA (MRSM), my contributions will focus on three strategic pillars: curricular transformation, student wellness analytics, and dedicated residential pastoral care.

First and foremost, I will revolutionize the delivery of Physical and Health Education by infusing sports science principles into daily lessons. Rather than treating physical education as mere recreational playtime, I will integrate biomechanical awareness, heart-rate training zones, and cognitive frameworks such as Teaching Games for Understanding (TGfU). By equipping students with evidence-based understanding of nutrition and exercise physiology, I ensure our scholars build physical literacy that directly supports their intense academic pursuits across the Premier, Ulul Albab, or IGCSE systems.

Secondly, I will pioneer an institutional wellness monitoring system driven by the National Physical Fitness Standard (SEGAK). Through regular physical assessments and targeted F.I.T.T. conditioning modules, I will design personalized intervention regimens for students struggling with cardiovascular endurance or muscular stamina. Recognising that mental clarity correlates directly with physiological vitality, this wellness ecosystem ensures students maintain high stamina during examination cycles and daily maktab routines.

Finally, my dedication extends beyond sports fields into the residential fabric as an active Homeroom mentor and hostel warden. The residential school environment demands 24/7 empathetic mentorship. By upholding the legal and moral doctrine of in loco parentis, I will foster an inclusive environment centered on integrity, sportsmanship, and mutual respect, thereby eliminating negative behaviors such as bullying while fostering strong brotherly bonds.

In conclusion, my contribution to MARA is anchored upon marrying sports science excellence with unwavering integrity and dedication. I am wholeheartedly prepared to nurture well-rounded MRSM scholars who excel academically, thrive physically, and lead our nation with noble character.`
    },
    {
      id: 2,
      language: 'English',
      languageBadge: 'Bahasa Inggeris',
      title: 'The Role of Physical Education and Sports in Developing Resilient, High-Performing Leaders in MRSM Boarding Schools',
      theme: 'Ketahanan Minda, Pembinaan Karakter & Sains Sukan',
      targetWords: '350 - 500 patah perkataan',
      suggestedDuration: 45,
      guide: {
        intro: 'Highlight that high-performing leaders require mental grit, emotional intelligence, and physical stamina, which are fostered authentically on sports grounds.',
        points: [
          'Stress Management & Neuroplasticity: Physical exertion releases endorphins and BDNF, combating academic anxiety and enhancing cognitive retention.',
          'Affective Domain & Character Building: Sports teach graceful defeat, adherence to fair play, accountability, and teamwork that textbooks cannot convey.',
          'Safety, Emergency & Leadership: Equipping students with sports injury management (P.R.I.C.E) and CPR empowers them as capable, confident first-responders.'
        ],
        conclusion: 'Summarise that Physical Education is not supplementary, but foundational to nurturing future Bumiputera leaders of sterling intellect and unyielding grit.'
      },
      keywords: [
        'Affective domain development',
        'Grit & mental toughness',
        'Stress resilience',
        'Cognitive stamina',
        'Fair play & sportsmanship',
        'In loco parentis',
        'Bumiputera leadership'
      ],
      pitfalls: [
        'Focusing solely on winning medals rather than student character building',
        'Ignoring the psychological and academic benefits of physical exertion'
      ],
      modelEssay: `In Maktab Rendah Sains MARA (MRSM), where intellectual rigor is standard, producing top academic achievers alone is insufficient. Today’s globalized landscape demands leaders equipped with resilience, mental grit, and unshakeable character. In this regard, Physical and Health Education (PJPK) serves as an indispensable crucible for leadership development within the residential school ecosystem.

To begin with, structured physical education directly fortifies mental endurance and emotional regulation. Boarding school scholars frequently navigate strenuous academic expectations. Moderate-to-vigorous physical activity stimulates brain-derived neurotrophic factor (BDNF) and neurogenesis while alleviating cortisol spikes. Through rigorous cardiovascular workouts like interval shuttle runs, students discover their physical limits and learn perseverance, directly translating into heightened academic concentration and emotional equilibrium.

Moreover, the playing field acts as a living laboratory for cultivating interpersonal competence. Leadership cannot be internalized merely through lectures; it is forged under competitive pressure. During dynamic team sports such as futsal or basketball, students experience communication under fatigue, swift strategic decision-making, and the humility of accepting defeat with honor. These affective experiences instill core MARA values: discipline, accountability, and collaborative synergy.

Furthermore, integrating sports health literacy empowers students to become dependable guardians of their peers. Through compulsory first-aid training such as the P.R.I.C.E protocol and cardio-pulmonary resuscitation (CPR), students cultivate proactive empathy and safety leadership, knowing how to protect and assist their fellow hallmates during emergencies.

In essence, Physical Education is foundational to the SPMRSM philosophy. As a dedicated educator, I am committed to leveraging physical culture to sculpt MRSM students into visionary leaders who possess both intellectual brilliance and the physical resilience to steer our nation forward.`
    },
    {
      id: 3,
      language: 'Bahasa Melayu',
      languageBadge: 'Bahasa Melayu',
      title: 'Peranan Pendidik MARA Dalam Mendukung Aspirasi Akta 1966 dan Memacu Kecemerlangan Modal Insan Bumiputera Abad Ke-21',
      theme: 'Punca Kuasa Akta 249, Falsafah SPMRSM & Amanah Bangsa',
      targetWords: '350 - 500 patah perkataan',
      suggestedDuration: 45,
      guide: {
        intro: 'Mengimbau penubuhan MARA di bawah Akta Majlis Amanah Rakyat 1966 (Akta 249) dan menegaskan peranan pendidik sebagai benteng pembinaan modal insan bangsa.',
        points: [
          'Memperkasa Kecemerlangan Holistik (JERI): Mengimbangi kecerdasan intelek murid MRSM dengan ketahanan fizikal dan kesihatan mental yang optimum.',
          'Integriti & Tatatertib Perkhidmatan Awam: Menjadi teladan (role model) dalam pengurusan masa, akauntabiliti aset kerajaan, dan pematuhan SOP.',
          'Pendidikan Inklusif & Pembimbing Asrama: Mendekati murid daripada pelbagai latar belakang sosioekonomi (B40, luar bandar) menerusi sistem Homeroom.'
        ],
        conclusion: 'Mengikat komitmen diri untuk berkhidmat tanpa kompromi demi menjulang martabat bangsa melalui acuan pendidikan MARA yang unggul.'
      },
      keywords: [
        'Akta 249 Seksyen 6(1)',
        'Mengangkat martabat bangsa',
        'Pembangunan modal insan holistik',
        'Integriti & amanah',
        'Sistem Pendidikan MRSM (SPMRSM)',
        'Sistem Homeroom',
        'Pembelajaran Abad Ke-21 (PAK-21)'
      ],
      pitfalls: [
        'Tidak menyatakan punca kuasa Akta MARA 1966',
        'Menumpukan hujah kepada rungutan isu semasa tanpa mencadangkan jalan penyelesaian'
      ],
      modelEssay: `Akta Majlis Amanah Rakyat 1966 [Akta 249] memperuntukkan mandat jelas di bawah Seksyen 6(1) kepada MARA untuk memajukan, menggalakkan, dan memudahkan pembangunan ekonomi serta kemasyarakatan, khususnya bagi masyarakat Bumiputera. Di bawah naungan Bahagian Pendidikan Menengah (BPM), Maktab Rendah Sains MARA (MRSM) diwujudkan sebagai kawah peleburan pemimpin masa hadapan. Sebagai pendidik DG41, peranan saya bukan sekadar pengajar di bilik darjah, sebaliknya merupakan benteng utama yang menggalas amanah menterjemahkan aspirasi undang-undang ini kepada pembentukan modal insan unggul.

Pertamanya, pendidik berperanan memastikan pembangunan pelajar berlaku secara seimbang merangkumi domain jasmani, emosi, rohani, dan intelek (JERI). Murid MRSM dipilih dalam kalangan anak-anak bangsa yang berpotensi tinggi. Namun, kecemerlangan kognitif akan terbantut sekiranya murid tidak memiliki ketahanan fizikal dan kestabilan emosi. Selaku guru Pendidikan Jasmani dan Kesihatan, saya komited membina kecergasan kardiovaskular murid berteraskan standard SEGAK agar mereka mempunyai stamina untuk mengharungi pembelajaran bertaraf dunia seperti IGCSE dan Ulul Albab.

Keduanya, pendidik MARA wajib mencerminkan piawaian integriti tertinggi sebagai teladan kepada anak didik. Nilai kebertanggungjawaban, ketepatan masa, dan kepatuhan kepada tatacara pengurusan aset awam mestilah dipamerkan secara konsisten. Apabila seorang guru mempamerkan integriti dalam mengendalikan kelas, audit peralatan stor sukan, dan penilaian markah murid, nilai luhur tersebut akan terpatri dalam sanubari murid untuk diamalkan sepanjang hayat.

Ketiganya, pendidik MARA bertindak sebagai pembimbing rohani dan emosi menerusi Sistem Homeroom dan pengurusan asrama. Ramai murid datang dari pedalaman dan keluarga berpendapatan rendah. Menjadi tanggungjawab pendidik untuk memberikan sokongan moral, membendung isu salah laku seperti buli, serta menyemai keyakinan diri bahawa mereka berhak berdiri sama tinggi di persada antarabangsa.

Kesimpulannya, mendukung aspirasi Akta MARA 1966 menuntut keikhlasan, ketahanan jiwa, dan profesionalisme yang tidak berbelah bahagi. Saya beriltizam mendedikasikan seluruh kepakaran pedagogi dan jati diri saya untuk melahirkan generasi Bumiputera yang berilmu tinggi, sihat jasmani, dan teguh peribadi demi kemakmuran Malaysia.`
    },
    {
      id: 4,
      language: 'Bahasa Melayu',
      languageBadge: 'Bahasa Melayu',
      title: 'Strategi Menangani Gaya Hidup Sedentari dan Meningkatkan Standard Kecergasan Fizikal (SEGAK) Murid Maktab Rendah Sains MARA',
      theme: 'Pekeliling SEGAK SPI 4/2008, Nutrisi & Intervensi F.I.T.T.',
      targetWords: '350 - 500 patah perkataan',
      suggestedDuration: 45,
      guide: {
        intro: 'Menggariskan cabaran gaya hidup pasif di asrama (gajet, fokus belajar berlebihan) dan merujuk pekeliling rasmi SEGAK KPM.',
        points: [
          'Audit Data & Preskripsi Latihan F.I.T.T.: Mengkategorikan murid mengikut skor norma dan merangka program latihan berperingkat bagi murid tidak cergas.',
          'Pendigitalan Rekod & Ganjaran Rumah Sukan: Memperkenalkan sistem mata kecergasan maktab untuk memupuk persaingan sihat.',
          'Kolaborasi Dewan Selera & Homeroom: Mengawal selia nutrisi makanan asrama berpandukan prinsip Pinggan Sihat Malaysia (Suku-Suku Separuh).'
        ],
        conclusion: 'Menegaskan bahawa kecergasan fizikal merupakan asas ketajaman minda dan kejayaan akademik murid MRSM.'
      },
      keywords: [
        'SPI Bil. 4/2008 (SEGAK)',
        'Gaya hidup sedentari',
        'Prinsip F.I.T.T. (Frekuensi, Intensiti, Masa, Jenis)',
        'Kapasiti aerobik & VO2 Max',
        'Pinggan Sihat Malaysia (Suku-Suku Separuh)',
        'Sistem Pendidikan MRSM'
      ],
      pitfalls: [
        'Memberi cadangan denda fizikal yang bercanggah dengan etika pendidikan',
        'Tidak mengaitkan peranan dewan selera atau pemakanan murid asrama'
      ],
      modelEssay: `Kehidupan di sekolah berasrama penuh seperti Maktab Rendah Sains MARA (MRSM) sarat dengan jadual akademik yang padat. Namun, tumpuan berlebihan kepada pembelajaran pasif di meja belajar dan masa skrin gajet yang panjang telah menyumbang kepada peningkatan trend gaya hidup sedentari. Dapatan Ujian Standard Kecergasan Fizikal Kebangsaan (SEGAK) yang mencatat penurunan tahap kecergasan murid menuntut strategi intervensi yang saintifik, inklusif, dan berterusan daripada seorang guru Pendidikan Jasmani dan Kesihatan (PJPK).

Strategi pertama yang perlu digerakkan adalah analisis data SEGAK yang teliti berpandukan Surat Pekeliling Ikhtisas KPM Bil. 4/2008. Setiap murid yang mencatatkan gred D atau E dalam ujian naik turun bangku atau tekan tubi tidak wajar dipinggirkan. Sebaliknya, saya akan merangka preskripsi latihan berasaskan prinsip F.I.T.T. (Frekuensi, Intensiti, Masa, dan Jenis Senaman). Sesi latihan kardiorespiratori berimpak sederhana selama 30 minit sebanyak tiga kali seminggu akan dijalankan secara menyeronokkan, seperti larian fartlek berkumpulan atau senamrobik tabata.

Strategi kedua adalah merombak waktu riadah petang maktab agar lebih berdaya saing dan inklusif. Waktu riadah jam 5:00 hingga 6:30 petang wajar distrukturkan dengan liga sukan antara homeroom dan rumah sukan yang tidak hanya mengiktiraf atlet elit, tetapi turut memberi mata kemenangan kepada penyertaan murid biasa. Aktiviti kesenggangan moden seperti sukan frisbee, orienteering pandu arah, dan dodgeball wajar diperkenalkan bagi menarik minat murid yang kurang meminati bola sepak atau badminton tradisional.

Strategi ketiga ialah mewujudkan sinergi erat bersama pihak pengurusan Dewan Selera dan Warden Asrama. Kecergasan jasmani mustahil dicapai tanpa pemakanan seimbang. Melalui pendidikan pemakanan berasaskan garis panduan Pinggan Sihat Malaysia (#SukuSukuSeparuh), murid dibimbing memilih porsi karbohidrat, protein, dan serat yang betul serta mengehadkan pengambilan minuman bergula tinggi semasa waktu minum malam (supper).

Konklusinya, menangani amalan hidup sedentari di maktab memerlukan komitmen menyeluruh warga pendidik. Melalui gabungan data sains sukan, suasana riadah yang menyeronokkan, dan sokongan pemakanan berkhasiat, murid MRSM akan dapat dibentuk menjadi modal insan yang bukan sahaja pintar menjana idea, malah memiliki stamina luar biasa untuk memacu negara.`
    },
    {
      id: 5,
      language: 'English',
      languageBadge: 'Bahasa Inggeris',
      title: 'Balancing Academic Excellence and Holistic Wellbeing: Challenges and Solutions for a Boarding School Educator',
      theme: 'Keseimbangan Akademik-Kokurikulum, Kesihatan Mental & Asrama',
      targetWords: '350 - 500 patah perkataan',
      suggestedDuration: 45,
      guide: {
        intro: 'Discuss the high academic expectations in MRSM and how excessive pressure without physical release can lead to burnout.',
        points: [
          'Combating Burnout Through Structured Play: Providing active outlets for stress alleviation and social bonding after rigorous classroom hours.',
          'Collaborative Time Management: Coordinating between academic subject teachers and sports coaches to avoid overloading students during exam weeks.',
          'Nurturing Growth Mindset: Teaching students that emotional balance and proper sleep hygiene are vital multipliers of academic retention.'
        ],
        conclusion: 'Affirm that true excellence is holistic—a sharp mind sustained by an energized, healthy body.'
      },
      keywords: [
        'Academic burnout & mental wellness',
        'Holistic equilibrium',
        'Growth mindset',
        'Boarding school culture',
        'SPMRSM curriculum',
        'Active recovery',
        'Empathetic mentorship'
      ],
      pitfalls: [
        'Suggesting cutting sports to focus on academics or vice-versa',
        'Overlooking the teacher’s role as an empathetic mentor'
      ],
      modelEssay: `In Maktab Rendah Sains MARA (MRSM), the pursuit of academic distinction is a cornerstone of institutional culture. However, relentless academic concentration without adequate physical and emotional decompression risks precipitating chronic stress, anxiety, and intellectual fatigue among adolescent boarders. As a dedicated educator, bridging the gap between rigorous scholarship and holistic wellbeing is both a professional duty and an ethical necessity.

The primary hurdle lies in the misconception that time dedicated to sports detracts from academic revision. Neurobiological research demonstrates the exact opposite: physical exertion oxygenates the brain, triggers neurogenesis, and elevates cognitive processing. To demonstrate this synergy, I will establish active recovery sessions during physical education classes, featuring dynamic mobility workouts, diaphragmatic breathing, and mindfulness techniques. This provides scholars with healthy neurochemical release, clearing mental fog and restoring intellectual enthusiasm.

Furthermore, fostering sustainable equilibrium necessitates proactive institutional collaboration. As a PJPK officer, Homeroom teacher, and hostel warden, I will collaborate closely with academic department heads to synchronize sports periodization with the examination calendar. During peak revision cycles, physical education will transition towards stress-alleviating recreation and ergonomic stretches, ensuring students remain physically energized without succumbing to exhaustion before major examinations.

Lastly, empowering students with holistic life skills is paramount. Through health education modules, I will guide students in constructing personal time-management matrixes, balancing study blocks, sports participation, and critical sleep hygiene. Boarding school life should cultivate autonomous, self-regulated young adults who understand that physical wellness is not a distraction from success, but its very bedrock.

To conclude, true educational excellence is never one-dimensional. By championing both rigorous intellectual endeavor and vibrant physical health, an educator empowers MRSM students to achieve sustainable greatness—cultivating scholars whose formidable intellect is matched by enduring stamina and emotional maturity.`
    }
  ];

  // ==========================================================================
  // 2. ENJIN PENGIRAAN & PENGURUSAN ESEI (EssayEngine)
  // ==========================================================================
  class EssayEngine {
    constructor() {
      this.topics = ESSAY_TOPICS;
    }

    getTopics() {
      return this.topics;
    }

    getTopicById(id) {
      const num = parseInt(id, 10);
      return this.topics.find(t => t.id === num) || null;
    }

    /**
     * Mengira jumlah perkataan sebenar dengan tepat
     */
    countWords(text) {
      if (!text || typeof text !== 'string') return 0;
      const trimmed = text.trim();
      if (!trimmed) return 0;
      // Memisahkan perkataan mengikut ruang putih (whitespace)
      const words = trimmed.split(/\s+/).filter(w => w.length > 0);
      return words.length;
    }

    /**
     * Menyimpan draf ke LocalStorage
     */
    saveDraft(topicId, content) {
      if (typeof global.localStorage === 'undefined') return false;
      try {
        const key = `mac_essay_draft_${topicId}`;
        global.localStorage.setItem(key, content || '');
        global.localStorage.setItem(`mac_essay_draft_time_${topicId}`, new Date().toISOString());
        return true;
      } catch (e) {
        return false;
      }
    }

    /**
     * Memuatkan draf dari LocalStorage
     */
    loadDraft(topicId) {
      if (typeof global.localStorage === 'undefined') return '';
      try {
        const key = `mac_essay_draft_${topicId}`;
        return global.localStorage.getItem(key) || '';
      } catch (e) {
        return '';
      }
    }

    /**
     * Menjana format dokumen HTML cetakan A4
     */
    exportEssayHtml(topicId, candidateName, content) {
      const topic = this.getTopicById(topicId);
      if (!topic) return '';

      const esc = (str) => {
        if (!str) return '';
        return String(str)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
      };

      const wordCount = this.countWords(content);
      const paragraphs = (content || '').trim().split(/\n\s*\n/).map(p => `<p class="essay-p">${esc(p.trim())}</p>`).join('');

      return `
        <div class="essay-print-document">
          <div class="essay-doc-header">
            <div class="essay-badge">MARA ASSESSMENT CENTRE (MAC) - LEMBARAN JAWAPAN ESEI</div>
            <h2 class="essay-doc-title">${esc(topic.title)}</h2>
            <div class="essay-doc-meta">
              <span><strong>Calon:</strong> ${esc(candidateName || 'Calon DG41 PJPK')}</span> &bull; 
              <span><strong>Bahasa:</strong> ${esc(topic.language)}</span> &bull; 
              <span><strong>Jumlah Perkataan:</strong> ${wordCount} patah perkataan</span> &bull; 
              <span><strong>Tarikh:</strong> ${new Date().toLocaleDateString('ms-MY')}</span>
            </div>
          </div>
          <hr class="essay-divider" />
          <div class="essay-content-body">
            ${paragraphs || '<p class="text-muted"><em>(Tiada kandungan teks karangan)</em></p>'}
          </div>
          <div class="essay-doc-footer">
            <div class="essay-sign-box">
              <div class="sign-line">Tandatangan Calon Guru</div>
              <div class="sign-meta">${esc(candidateName || 'Calon DG41 PJPK')}</div>
            </div>
            <div class="essay-sign-box text-right">
              <div class="sign-line">Pengesahan Pemeriksa Panel MAC</div>
              <div class="sign-meta">Bahagian Pendidikan Menengah MARA</div>
            </div>
          </div>
        </div>
      `;
    }
  }

  // ==========================================================================
  // 3. PEMASA MENULIS ESEI (EssayTimer)
  // ==========================================================================
  class EssayTimer {
    constructor() {
      this.interval = null;
      this.remainingSeconds = 0;
      this.totalSeconds = 0;
      this.running = false;
      this.paused = false;
    }

    start(minutes, onTick, onComplete) {
      this.reset();
      this.totalSeconds = Math.max(1, minutes * 60);
      this.remainingSeconds = this.totalSeconds;
      this.running = true;
      this.paused = false;

      this.interval = setInterval(() => {
        if (this.paused) return;
        this.remainingSeconds--;

        if (typeof onTick === 'function') {
          onTick(this.remainingSeconds, this.formatTime(this.remainingSeconds));
        }

        if (this.remainingSeconds <= 0) {
          this.remainingSeconds = 0;
          this.stop();
          this.playBeep();
          if (typeof onComplete === 'function') onComplete();
        }
      }, 1000);

      if (this.interval && typeof this.interval.unref === 'function') {
        this.interval.unref();
      }
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
      this.running = false;
      this.paused = false;
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
    }

    reset() {
      this.stop();
      this.remainingSeconds = 0;
      this.totalSeconds = 0;
    }

    formatTime(seconds) {
      const s = Math.max(0, Math.floor(seconds));
      const mins = Math.floor(s / 60);
      const secs = s % 60;
      const mm = mins < 10 ? `0${mins}` : `${mins}`;
      const ss = secs < 10 ? `0${secs}` : `${secs}`;
      return `${mm}:${ss}`;
    }

    playBeep() {
      try {
        const AudioCtx = global.AudioContext || global.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.6);
      } catch (e) {}
    }
  }

  // ==========================================================================
  // 4. PENGURUS ANTARA MUKA UI (EssayUI)
  // ==========================================================================
  const EssayUI = {
    engine: new EssayEngine(),
    timer: new EssayTimer(),
    currentTopicId: 1,
    container: null,

    init(containerSelector = '#essay-app') {
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
      const topics = this.engine.getTopics();
      const currentTopic = this.engine.getTopicById(this.currentTopicId) || topics[0];
      const savedDraft = this.engine.loadDraft(currentTopic.id);
      const initialWordCount = this.engine.countWords(savedDraft);

      this.container.innerHTML = `
        <div class="card p-6 mb-6">
          <div class="flex-between flex-wrap gap-4 border-b pb-4 mb-4">
            <div>
              <span class="badge badge-maroon mb-2">STESEN 3 PENILAIAN MAC</span>
              <h2 class="text-2xl font-bold text-navy">Hab Penulisan Esei (Essay Writing Hub)</h2>
              <p class="text-sm text-muted">Ujian penulisan esei bertulis (Bahasa Inggeris &amp; Bahasa Melayu) selama 45–60 minit berteraskan isu organisasi MARA, sahsiah guru, dan kecergasan murid MRSM.</p>
            </div>
            <div class="flex gap-2">
              <button class="btn btn-secondary btn-sm" id="btn-print-essay">&#128438; Cetak Karangan A4</button>
              <button class="btn btn-primary btn-sm" id="btn-copy-essay">&#128203; Salin Karangan</button>
            </div>
          </div>

          <!-- Pemilihan Tajuk Esei -->
          <div class="essay-topic-selector-wrap mb-4">
            <label class="block text-xs font-bold text-muted uppercase tracking-wider mb-2">Pilih Tajuk Esei Autentik MAC MARA:</label>
            <div class="grid grid-cols-1 md:grid-cols-5 gap-2" id="essay-topic-tabs">
              ${topics.map(t => `
                <button type="button" class="btn text-left p-3 ${t.id === currentTopic.id ? 'btn-primary' : 'btn-outline'}" data-topic-id="${t.id}" style="font-size: 0.85rem; height: auto;">
                  <div class="font-bold mb-1">Tajuk #${t.id}</div>
                  <div class="text-xs truncate">${t.title}</div>
                  <span class="badge badge-sm ${t.language === 'English' ? 'badge-blue' : 'badge-gold'} mt-2">${t.languageBadge}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Kad Butiran Tajuk Terpilih -->
          <div class="card p-4 bg-light mb-6 border-maroon">
            <div class="flex-between flex-wrap gap-2 mb-2">
              <span class="badge badge-maroon font-bold text-sm">Tajuk #${currentTopic.id} &bull; ${currentTopic.languageBadge}</span>
              <span class="text-xs text-muted">Sasaran: <strong>${currentTopic.targetWords}</strong> &bull; Tempoh: <strong>${currentTopic.suggestedDuration} Minit</strong></span>
            </div>
            <h3 class="text-lg font-bold text-navy mb-2">${currentTopic.title}</h3>
            <p class="text-xs text-muted mb-3"><strong>Fokus Tema:</strong> ${currentTopic.theme}</p>

            <div class="flex flex-wrap gap-2">
              <button type="button" class="btn btn-sm btn-outline" id="btn-toggle-guide">&#128218; Lihat Rangka Karangan &amp; Kata Kunci</button>
              <button type="button" class="btn btn-sm btn-outline" id="btn-toggle-model">&#10024; Rujuk Contoh Esei Cemerlang (Band A)</button>
            </div>

            <!-- Panel Rangka Karangan (Boleh Tutup/Buka) -->
            <div class="mt-4 p-4 bg-white border rounded" id="panel-essay-guide" style="display: none;">
              <h4 class="font-bold text-navy text-sm mb-2 border-b pb-1">&#128203; Panduan Rangka Karangan (Essay Outline)</h4>
              <p class="text-xs mb-2"><strong>Pengenalan:</strong> ${currentTopic.guide.intro}</p>
              <div class="text-xs mb-2">
                <strong>Isi-Isi Utama (Kaedah P.E.E.L):</strong>
                <ul class="list-disc pl-5 mt-1 space-y-1">
                  ${currentTopic.guide.points.map(p => `<li>${p}</li>`).join('')}
                </ul>
              </div>
              <p class="text-xs mb-3"><strong>Penutup:</strong> ${currentTopic.guide.conclusion}</p>

              <div class="border-t pt-2 mt-2">
                <span class="text-xs font-bold text-muted uppercase">Kata Kunci Markah Tinggi (Scoring Keywords):</span>
                <div class="flex flex-wrap gap-1 mt-1">
                  ${currentTopic.keywords.map(k => `<span class="badge badge-sm badge-blue">${k}</span>`).join('')}
                </div>
              </div>

              <div class="border-t pt-2 mt-2">
                <span class="text-xs font-bold text-danger uppercase">&#9888; Pantang Larang Lazim (Pitfalls):</span>
                <ul class="list-disc pl-5 mt-1 text-xs text-danger space-y-1">
                  ${currentTopic.pitfalls.map(pf => `<li>${pf}</li>`).join('')}
                </ul>
              </div>
            </div>

            <!-- Panel Model Essay (Boleh Tutup/Buka) -->
            <div class="mt-4 p-4 bg-white border rounded" id="panel-model-essay" style="display: none; border-left: 4px solid #D4AF37;">
              <div class="flex-between mb-2">
                <h4 class="font-bold text-gold text-sm">&#10024; Contoh Model Esei Skor Tinggi (Band A)</h4>
                <span class="badge badge-sm badge-gold">Rujukan Rasmi</span>
              </div>
              <div class="text-xs leading-relaxed space-y-2 text-dark" style="max-height: 280px; overflow-y: auto;">
                ${currentTopic.modelEssay.split('\n\n').map(p => `<p>${p}</p>`).join('')}
              </div>
            </div>
          </div>

          <!-- Bar Pemasa & Pengira Perkataan Langsung -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <!-- Kotak Pemasa Menulis -->
            <div class="p-3 bg-light rounded border flex-between items-center">
              <div>
                <span class="text-xs font-bold text-muted uppercase">Pemasa Latihan Menulis:</span>
                <div class="text-2xl font-black text-navy" id="essay-timer-digits">45:00</div>
              </div>
              <div class="flex gap-2">
                <button type="button" class="btn btn-sm btn-primary" id="btn-timer-toggle-essay">Mula Pemasa</button>
                <button type="button" class="btn btn-sm btn-outline" id="btn-timer-reset-essay">Reset</button>
              </div>
            </div>

            <!-- Meter Jumlah Patah Perkataan -->
            <div class="p-3 bg-light rounded border flex-between items-center">
              <div>
                <span class="text-xs font-bold text-muted uppercase">Jumlah Patah Perkataan:</span>
                <div class="text-2xl font-black text-maroon" id="essay-word-count-digits">${initialWordCount} / 400</div>
              </div>
              <div class="text-right">
                <span class="badge badge-sm" id="essay-word-status-badge">Belum Mencukupi</span>
                <div class="text-xs text-muted mt-1" id="essay-save-indicator">Draf disimpan setempat</div>
              </div>
            </div>
          </div>

          <!-- Editor Penulisan Esei (Textarea) -->
          <div class="mb-4">
            <label class="block text-xs font-bold text-muted uppercase mb-1">Ruang Latihan Menulis Karangan Calon:</label>
            <textarea id="essay-editor-textarea" class="form-control text-sm font-sans" rows="15" placeholder="Mulakan penulisan esei anda di sini mengikut rangka P.E.E.L..." style="line-height: 1.6; resize: vertical;">${savedDraft}</textarea>
          </div>

          <!-- Butang Tindakan Bawah -->
          <div class="flex-between flex-wrap gap-2">
            <button type="button" class="btn btn-outline btn-sm" id="btn-clear-essay-draft">&#128465; Padam Draf Semasa</button>
            <div class="flex gap-2">
              <button type="button" class="btn btn-secondary btn-sm" id="btn-save-essay-manual">&#128190; Simpan Draf Sekarang</button>
              <button type="button" class="btn btn-primary btn-sm" id="btn-finish-and-print">&#128438; Selesai &amp; Cetak Slip Esei</button>
            </div>
          </div>
        </div>
      `;

      this.bindEvents();
      this.updateWordCount(initialWordCount);
    },

    bindEvents() {
      if (!this.container) return;

      // 1. Tab Pemilihan Tajuk
      const topicBtns = this.container.querySelectorAll('[data-topic-id]');
      topicBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const tId = parseInt(btn.getAttribute('data-topic-id'), 10);
          if (tId && tId !== this.currentTopicId) {
            this.currentTopicId = tId;
            this.timer.reset();
            this.render();
          }
        });
      });

      // 2. Togol Rangka Karangan
      const toggleGuideBtn = this.container.querySelector('#btn-toggle-guide');
      const guidePanel = this.container.querySelector('#panel-essay-guide');
      if (toggleGuideBtn && guidePanel) {
        toggleGuideBtn.addEventListener('click', () => {
          const isHidden = guidePanel.style.display === 'none';
          guidePanel.style.display = isHidden ? 'block' : 'none';
          toggleGuideBtn.classList.toggle('btn-primary', isHidden);
        });
      }

      // 3. Togol Model Esei
      const toggleModelBtn = this.container.querySelector('#btn-toggle-model');
      const modelPanel = this.container.querySelector('#panel-model-essay');
      if (toggleModelBtn && modelPanel) {
        toggleModelBtn.addEventListener('click', () => {
          const isHidden = modelPanel.style.display === 'none';
          modelPanel.style.display = isHidden ? 'block' : 'none';
          toggleModelBtn.classList.toggle('btn-primary', isHidden);
        });
      }

      // 4. Editor Textarea & Pengira Perkataan
      const textarea = this.container.querySelector('#essay-editor-textarea');
      let autoSaveTimeout = null;

      if (textarea) {
        textarea.addEventListener('input', () => {
          const text = textarea.value;
          const count = this.engine.countWords(text);
          this.updateWordCount(count);

          // Auto-save draf selepas 1 saat berhenti menaip
          clearTimeout(autoSaveTimeout);
          autoSaveTimeout = setTimeout(() => {
            this.engine.saveDraft(this.currentTopicId, text);
            const ind = this.container.querySelector('#essay-save-indicator');
            if (ind) ind.textContent = 'Draf disimpan secara automatik (' + new Date().toLocaleTimeString('ms-MY', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ')';
          }, 1000);
        });
      }

      // 5. Pemasa Latihan
      const timerDigits = this.container.querySelector('#essay-timer-digits');
      const timerToggleBtn = this.container.querySelector('#btn-timer-toggle-essay');
      const timerResetBtn = this.container.querySelector('#btn-timer-reset-essay');

      if (timerToggleBtn) {
        timerToggleBtn.addEventListener('click', () => {
          if (this.timer.running && !this.timer.paused) {
            this.timer.pause();
            timerToggleBtn.textContent = 'Sambung Menulis';
          } else if (this.timer.running && this.timer.paused) {
            this.timer.resume();
            timerToggleBtn.textContent = 'Jeda Pemasa';
          } else {
            timerToggleBtn.textContent = 'Jeda Pemasa';
            const topic = this.engine.getTopicById(this.currentTopicId);
            const duration = topic ? topic.suggestedDuration : 45;
            this.timer.start(
              duration,
              (rem, formatted) => {
                if (timerDigits) {
                  timerDigits.textContent = formatted;
                  if (rem <= 180) timerDigits.style.color = '#dc2626';
                  else if (rem <= 600) timerDigits.style.color = '#d97706';
                  else timerDigits.style.color = '';
                }
              },
              () => {
                if (timerDigits) timerDigits.textContent = '00:00';
                if (timerToggleBtn) timerToggleBtn.textContent = 'Masa Tamat!';
                if (typeof global.MACApp !== 'undefined' && global.MACApp.showToast) {
                  global.MACApp.showToast('Masa latihan menulis esei telah tamat!', 'warning', 4000);
                }
              }
            );
          }
        });
      }

      if (timerResetBtn) {
        timerResetBtn.addEventListener('click', () => {
          this.timer.reset();
          const topic = this.engine.getTopicById(this.currentTopicId);
          const duration = topic ? topic.suggestedDuration : 45;
          if (timerDigits) {
            timerDigits.textContent = `${duration}:00`;
            timerDigits.style.color = '';
          }
          if (timerToggleBtn) timerToggleBtn.textContent = 'Mula Pemasa';
        });
      }

      // 6. Simpan Manual
      const saveBtn = this.container.querySelector('#btn-save-essay-manual');
      if (saveBtn && textarea) {
        saveBtn.addEventListener('click', () => {
          this.engine.saveDraft(this.currentTopicId, textarea.value);
          if (typeof global.MACApp !== 'undefined' && global.MACApp.showToast) {
            global.MACApp.showToast('Draf karangan berjaya disimpan!', 'success', 2000);
          }
        });
      }

      // 7. Padam Draf
      const clearBtn = this.container.querySelector('#btn-clear-essay-draft');
      if (clearBtn && textarea) {
        clearBtn.addEventListener('click', () => {
          if (confirm('Adakah anda pasti mahu memadam draf bagi tajuk ini?')) {
            textarea.value = '';
            this.engine.saveDraft(this.currentTopicId, '');
            this.updateWordCount(0);
          }
        });
      }

      // 8. Salin ke Papan Keratan
      const copyBtn = this.container.querySelector('#btn-copy-essay');
      if (copyBtn && textarea) {
        copyBtn.addEventListener('click', () => {
          if (!textarea.value.trim()) {
            alert('Sila tulis karangan terlebih dahulu sebelum menyalin.');
            return;
          }
          if (typeof navigator !== 'undefined' && navigator.clipboard) {
            navigator.clipboard.writeText(textarea.value).then(() => {
              if (typeof global.MACApp !== 'undefined' && global.MACApp.showToast) {
                global.MACApp.showToast('Karangan disalin ke papan keratan.', 'info', 2000);
              }
            });
          }
        });
      }

      // 9. Cetak Karangan
      const printBtns = this.container.querySelectorAll('#btn-print-essay, #btn-finish-and-print');
      printBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const content = textarea ? textarea.value : '';
          const candidateName = (typeof global.MACApp !== 'undefined' && global.MACApp.getCandidateName)
            ? global.MACApp.getCandidateName()
            : 'Calon DG41 PJPK';
          const html = this.engine.exportEssayHtml(this.currentTopicId, candidateName, content);

          // Buka tingkap cetak khusus
          const printWindow = window.open('', '_blank');
          if (printWindow) {
            printWindow.document.write(`
              <!DOCTYPE html>
              <html>
              <head>
                <title>Lembaran Jawapan Esei - MARA Assessment Centre (MAC)</title>
                <style>
                  body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 40px; color: #1e293b; line-height: 1.6; }
                  .essay-badge { font-size: 11px; font-weight: bold; color: #8B0000; letter-spacing: 1px; }
                  .essay-doc-title { margin-top: 8px; margin-bottom: 8px; color: #0A2540; font-size: 20px; }
                  .essay-doc-meta { font-size: 12px; color: #64748b; margin-bottom: 16px; }
                  .essay-divider { border: 0; border-top: 2px solid #8B0000; margin-bottom: 24px; }
                  .essay-content-body { font-size: 14px; min-height: 400px; }
                  .essay-p { margin-bottom: 16px; text-align: justify; text-indent: 30px; }
                  .essay-doc-footer { display: flex; justify-content: space-between; margin-top: 60px; font-size: 12px; }
                  .essay-sign-box { width: 45%; }
                  .sign-line { border-bottom: 1px solid #94a3b8; height: 60px; margin-bottom: 6px; font-weight: bold; }
                  .text-right { text-align: right; }
                  @media print { body { margin: 20mm; } }
                </style>
              </head>
              <body>
                ${html}
                <script>window.onload = function() { window.print(); };<\/script>
              </body>
              </html>
            `);
            printWindow.document.close();
          }
        });
      });
    },

    updateWordCount(count) {
      if (!this.container) return;
      const digits = this.container.querySelector('#essay-word-count-digits');
      const badge = this.container.querySelector('#essay-word-status-badge');

      if (digits) digits.textContent = `${count} / 400`;
      if (badge) {
        if (count < 250) {
          badge.className = 'badge badge-sm badge-outline text-muted';
          badge.textContent = 'Belum Mencukupi (<250)';
        } else if (count >= 250 && count <= 550) {
          badge.className = 'badge badge-sm badge-green';
          badge.textContent = 'Ideal (350–500 Patah)';
        } else {
          badge.className = 'badge badge-sm badge-gold';
          badge.textContent = 'Meleret (>550 Patah)';
        }
      }
    }
  };

  // ==========================================================================
  // 5. EKSPORT MODUL
  // ==========================================================================
  const MACEssayModule = {
    ESSAY_TOPICS,
    EssayEngine,
    EssayTimer,
    EssayUI
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = MACEssayModule;
  }

  global.MACEssayModule = MACEssayModule;
  global.MACEssayUI = EssayUI;

})(typeof window !== 'undefined' ? window : global);
