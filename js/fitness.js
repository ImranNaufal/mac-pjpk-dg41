/**
 * ==========================================================================
 * MARA ASSESSMENT CENTRE (MAC) - PJPK DG41 PLATFORM
 * Hab Kecergasan Fizikal: Bleep Test (Web Audio API) & Kalkulator SEGAK KPM
 * Module: fitness.js
 * 100% Offline-Ready | Pure Vanilla JS (ES6+) & Node.js Compatible
 * ==========================================================================
 */

(function (global) {
  'use strict';

  // ==========================================================================
  // 1. DATA JADUAL KELAJUAN BLEEP TEST 20 METER (LUC LÉGER 1988)
  // ==========================================================================
  // Protokol Piawai: 20m Shuttle Run Test (Level 1 hingga 21)
  // Kelajuan mula 8.5 km/j, bertambah 0.5 km/j setiap tahap.
  // Formula sela masa ulang-alik: (20 meter / (kelajuan / 3.6)) * 1000 ms
  const BLEEP_LEVELS = [
    { level: 1,  speedKmH: 8.5,  shuttles: 7,  shuttleDurationMs: 8471, cumShuttles: 7,   cumDistance: 140,  cumTimeSec: 59 },
    { level: 2,  speedKmH: 9.0,  shuttles: 8,  shuttleDurationMs: 8000, cumShuttles: 15,  cumDistance: 300,  cumTimeSec: 123 },
    { level: 3,  speedKmH: 9.5,  shuttles: 8,  shuttleDurationMs: 7579, cumShuttles: 23,  cumDistance: 460,  cumTimeSec: 184 },
    { level: 4,  speedKmH: 10.0, shuttles: 8,  shuttleDurationMs: 7200, cumShuttles: 31,  cumDistance: 620,  cumTimeSec: 242 },
    { level: 5,  speedKmH: 10.5, shuttles: 9,  shuttleDurationMs: 6857, cumShuttles: 40,  cumDistance: 800,  cumTimeSec: 303 },
    { level: 6,  speedKmH: 11.0, shuttles: 9,  shuttleDurationMs: 6545, cumShuttles: 49,  cumDistance: 980,  cumTimeSec: 362 },
    { level: 7,  speedKmH: 11.5, shuttles: 10, shuttleDurationMs: 6261, cumShuttles: 59,  cumDistance: 1180, cumTimeSec: 425 },
    { level: 8,  speedKmH: 12.0, shuttles: 10, shuttleDurationMs: 6000, cumShuttles: 69,  cumDistance: 1380, cumTimeSec: 485 },
    { level: 9,  speedKmH: 12.5, shuttles: 11, shuttleDurationMs: 5760, cumShuttles: 80,  cumDistance: 1600, cumTimeSec: 548 },
    { level: 10, speedKmH: 13.0, shuttles: 11, shuttleDurationMs: 5538, cumShuttles: 91,  cumDistance: 1820, cumTimeSec: 609 },
    { level: 11, speedKmH: 13.5, shuttles: 11, shuttleDurationMs: 5333, cumShuttles: 102, cumDistance: 2040, cumTimeSec: 668 },
    { level: 12, speedKmH: 14.0, shuttles: 12, shuttleDurationMs: 5143, cumShuttles: 114, cumDistance: 2280, cumTimeSec: 729 },
    { level: 13, speedKmH: 14.5, shuttles: 12, shuttleDurationMs: 4966, cumShuttles: 126, cumDistance: 2520, cumTimeSec: 789 },
    { level: 14, speedKmH: 15.0, shuttles: 13, shuttleDurationMs: 4800, cumShuttles: 139, cumDistance: 2780, cumTimeSec: 851 },
    { level: 15, speedKmH: 15.5, shuttles: 13, shuttleDurationMs: 4645, cumShuttles: 152, cumDistance: 3040, cumTimeSec: 912 },
    { level: 16, speedKmH: 16.0, shuttles: 13, shuttleDurationMs: 4500, cumShuttles: 165, cumDistance: 3300, cumTimeSec: 970 },
    { level: 17, speedKmH: 16.5, shuttles: 14, shuttleDurationMs: 4364, cumShuttles: 179, cumDistance: 3580, cumTimeSec: 1031 },
    { level: 18, speedKmH: 17.0, shuttles: 14, shuttleDurationMs: 4235, cumShuttles: 193, cumDistance: 3860, cumTimeSec: 1091 },
    { level: 19, speedKmH: 17.5, shuttles: 15, shuttleDurationMs: 4114, cumShuttles: 208, cumDistance: 4160, cumTimeSec: 1152 },
    { level: 20, speedKmH: 18.0, shuttles: 15, shuttleDurationMs: 4000, cumShuttles: 223, cumDistance: 4460, cumTimeSec: 1212 },
    { level: 21, speedKmH: 18.5, shuttles: 16, shuttleDurationMs: 3892, cumShuttles: 239, cumDistance: 4780, cumTimeSec: 1275 }
  ];

  // ==========================================================================
  // 2. DATA NORMA PENSKORAN SEGAK KPM (SPI BIL. 4/2008)
  // ==========================================================================
  const SEGAK_NORMS = {
    stepTest: {
      lelaki: [
        { maxBpm: 83,  score: 5, label: 'Cemerlang' },
        { maxBpm: 101, score: 4, label: 'Baik' },
        { maxBpm: 120, score: 3, label: 'Sederhana' },
        { maxBpm: 139, score: 2, label: 'Lemah' },
        { maxBpm: Infinity, score: 1, label: 'Sangat Lemah' }
      ],
      perempuan: [
        { maxBpm: 90,  score: 5, label: 'Cemerlang' },
        { maxBpm: 110, score: 4, label: 'Baik' },
        { maxBpm: 129, score: 3, label: 'Sederhana' },
        { maxBpm: 149, score: 2, label: 'Lemah' },
        { maxBpm: Infinity, score: 1, label: 'Sangat Lemah' }
      ]
    },
    pushUps: {
      lelaki: [
        { minReps: 32, score: 5, label: 'Cemerlang' },
        { minReps: 25, score: 4, label: 'Baik' },
        { minReps: 17, score: 3, label: 'Sederhana' },
        { minReps: 9,  score: 2, label: 'Lemah' },
        { minReps: 0,  score: 1, label: 'Sangat Lemah' }
      ],
      perempuan: [
        { minReps: 26, score: 5, label: 'Cemerlang' },
        { minReps: 19, score: 4, label: 'Baik' },
        { minReps: 12, score: 3, label: 'Sederhana' },
        { minReps: 5,  score: 2, label: 'Lemah' },
        { minReps: 0,  score: 1, label: 'Sangat Lemah' }
      ]
    },
    curlUps: {
      lelaki: [
        { minReps: 24, score: 5, label: 'Cemerlang' },
        { minReps: 19, score: 4, label: 'Baik' },
        { minReps: 13, score: 3, label: 'Sederhana' },
        { minReps: 7,  score: 2, label: 'Lemah' },
        { minReps: 0,  score: 1, label: 'Sangat Lemah' }
      ],
      perempuan: [
        { minReps: 21, score: 5, label: 'Cemerlang' },
        { minReps: 16, score: 4, label: 'Baik' },
        { minReps: 10, score: 3, label: 'Sederhana' },
        { minReps: 5,  score: 2, label: 'Lemah' },
        { minReps: 0,  score: 1, label: 'Sangat Lemah' }
      ]
    },
    sitAndReach: {
      lelaki: [
        { minCm: 44.0, score: 5, label: 'Cemerlang' },
        { minCm: 38.0, score: 4, label: 'Baik' },
        { minCm: 31.0, score: 3, label: 'Sederhana' },
        { minCm: 23.0, score: 2, label: 'Lemah' },
        { minCm: 0,    score: 1, label: 'Sangat Lemah' }
      ],
      perempuan: [
        { minCm: 41.0, score: 5, label: 'Cemerlang' },
        { minCm: 35.0, score: 4, label: 'Baik' },
        { minCm: 28.0, score: 3, label: 'Sederhana' },
        { minCm: 20.0, score: 2, label: 'Lemah' },
        { minCm: 0,    score: 1, label: 'Sangat Lemah' }
      ]
    }
  };

  // ==========================================================================
  // 3. SINTESIS AUDIO WEB AUDIO API (OFFLINE SINE WAVE TONE)
  // ==========================================================================
  class WebAudioSynthesizer {
    constructor() {
      this.ctx = null;
    }

    init() {
      if (this.ctx) return;
      if (typeof window === 'undefined') return;
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      } catch (e) {
        console.warn('[WebAudioSynthesizer] Web Audio API tidak disokong:', e);
      }
    }

    playTone(frequency = 850, durationSec = 0.15) {
      if (typeof window === 'undefined') return;
      try {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(frequency, now);

        // Kawalan gain dengan amplifikasi dan pereputan licin (tiada klik)
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(0.28, now + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + durationSec + 0.02);
      } catch (err) {
        // Abaikan dalam persekitaran ujian
      }
    }

    playLevelChange(frequency = 1200, durationSec = 0.25) {
      this.playTone(frequency, durationSec);
      if (typeof window !== 'undefined') {
        setTimeout(() => {
          this.playTone(frequency, durationSec);
        }, 180);
      }
    }
  }

  // ==========================================================================
  // 4. ENJIN BLEEP TEST 20 METER (BleepTestEngine)
  // ==========================================================================
  class BleepTestEngine {
    constructor() {
      this.levels = BLEEP_LEVELS;
      this.synth = new WebAudioSynthesizer();
      this.timerId = null;

      // Status Larian
      this.isRunning = false;
      this.isPaused = false;
      this.currentLevel = 1;
      this.currentShuttle = 1;
      this.totalShuttles = 0;
      this.totalDistance = 0;
      this.elapsedMs = 0;
      this.shuttleStartTs = 0;
      this.remainingShuttleMs = 0;
      this.lastTickTs = 0;

      // Pendengar Acara (Callbacks)
      this.onTickCallback = null;
      this.onShuttleCallback = null;
      this.onLevelChangeCallback = null;
      this.onStopCallback = null;
    }

    getLevelInfo(level) {
      const idx = Math.max(1, Math.min(this.levels.length, Number(level) || 1)) - 1;
      return this.levels[idx] || this.levels[0];
    }

    calculateVO2Max(level, shuttle = 1, age = null) {
      const lvlInfo = this.getLevelInfo(level);
      const speed = lvlInfo.speedKmH;

      // Formula Ramsbottom et al. (1988): VO2 Max = -24.4 + (6.0 * Kelajuan Akhir)
      const ramsbottomVo2 = Number((-24.4 + (6.0 * speed)).toFixed(1));

      // Formula Léger et al. (1988) multivariat (jika umur dibekalkan)
      let legerMultivariate = null;
      if (age !== null && age !== undefined && Number(age) > 0) {
        const a = Number(age);
        const calc = 31.025 + (3.238 * speed) - (3.248 * a) + (0.1536 * speed * a);
        legerMultivariate = Number(calc.toFixed(1));
      }

      // Klasifikasi Kecergasan Kardiorespiratori
      let category = 'Lemah';
      if (ramsbottomVo2 >= 53.0) {
        category = 'Unggul';
      } else if (ramsbottomVo2 >= 48.0) {
        category = 'Cemerlang';
      } else if (ramsbottomVo2 >= 40.0) {
        category = 'Baik';
      } else if (ramsbottomVo2 >= 32.0) {
        category = 'Sederhana';
      } else {
        category = 'Lemah';
      }

      // Penanda Aras Sasaran Kelayakan MARA DG41 PJPK:
      // Lelaki: Minimum Level 8.1 (Kelajuan 12.0 km/j, VO2 >= 41.0), Cemerlang Level 10.5+ (VO2 >= 49.0)
      // Wanita: Minimum Level 6.1 (Kelajuan 11.0 km/j, VO2 >= 34.5), Cemerlang Level 8.2+ (VO2 >= 41.5)
      const numLevel = Number(level);
      const numShuttle = Number(shuttle);

      const qualifiesMale = numLevel > 8 || (numLevel === 8 && numShuttle >= 1);
      const isExcellentMale = numLevel > 10 || (numLevel === 10 && numShuttle >= 5);

      const qualifiesFemale = numLevel > 6 || (numLevel === 6 && numShuttle >= 1);
      const isExcellentFemale = numLevel > 8 || (numLevel === 8 && numShuttle >= 2);

      return {
        level: numLevel,
        shuttle: numShuttle,
        speedKmH: speed,
        vo2Max: ramsbottomVo2,
        category,
        qualifiesMale,
        isExcellentMale,
        qualifiesFemale,
        isExcellentFemale,
        legerMultivariate
      };
    }

    playBeep(frequency = 850, duration = 0.15) {
      this.synth.playTone(frequency, duration);
    }

    playLevelBeep(frequency = 1200, duration = 0.25) {
      this.synth.playLevelChange(frequency, duration);
    }

    start() {
      if (this.isRunning && !this.isPaused) return;

      if (this.isPaused) {
        this.resume();
        return;
      }

      this.reset();
      this.isRunning = true;
      this.isPaused = false;

      const lvlInfo = this.getLevelInfo(this.currentLevel);
      this.remainingShuttleMs = lvlInfo.shuttleDurationMs;
      this.shuttleStartTs = Date.now();
      this.lastTickTs = Date.now();

      // Bunyi permulaan
      this.playLevelBeep(1200, 0.2);

      this._startInterval();
    }

    pause() {
      if (!this.isRunning || this.isPaused) return;
      this.isPaused = true;
      if (this.timerId) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
    }

    resume() {
      if (!this.isRunning || !this.isPaused) return;
      this.isPaused = false;
      this.lastTickTs = Date.now();
      this._startInterval();
    }

    stop() {
      if (this.timerId) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
      this.isRunning = false;
      this.isPaused = false;

      const finalState = this.getState();
      if (typeof this.onStopCallback === 'function') {
        this.onStopCallback(finalState);
      }
      return finalState;
    }

    reset() {
      if (this.timerId) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
      this.isRunning = false;
      this.isPaused = false;
      this.currentLevel = 1;
      this.currentShuttle = 1;
      this.totalShuttles = 0;
      this.totalDistance = 0;
      this.elapsedMs = 0;
      this.remainingShuttleMs = this.getLevelInfo(1).shuttleDurationMs;
    }

    _startInterval() {
      if (this.timerId) clearInterval(this.timerId);

      this.timerId = setInterval(() => {
        if (!this.isRunning || this.isPaused) return;

        const now = Date.now();
        const delta = now - this.lastTickTs;
        this.lastTickTs = now;

        this.elapsedMs += delta;
        this.remainingShuttleMs -= delta;

        if (this.remainingShuttleMs <= 0) {
          this._handleShuttleComplete();
        }

        if (typeof this.onTickCallback === 'function') {
          this.onTickCallback(this.getState());
        }
      }, 50);
    }

    _handleShuttleComplete() {
      const currentLvlInfo = this.getLevelInfo(this.currentLevel);
      this.totalShuttles += 1;
      this.totalDistance += 20;

      // Semak sama ada perlu beralih ke tahap seterusnya
      if (this.currentShuttle >= currentLvlInfo.shuttles) {
        if (this.currentLevel >= 21) {
          // Tamat semua tahap
          this.stop();
          return;
        }

        this.currentLevel += 1;
        this.currentShuttle = 1;
        const newLvlInfo = this.getLevelInfo(this.currentLevel);
        this.remainingShuttleMs = newLvlInfo.shuttleDurationMs;

        // Bunyi pertukaran tahap (1200Hz nada ganda)
        this.playLevelBeep(1200, 0.25);

        if (typeof this.onLevelChangeCallback === 'function') {
          this.onLevelChangeCallback(this.getState());
        }
      } else {
        this.currentShuttle += 1;
        this.remainingShuttleMs = currentLvlInfo.shuttleDurationMs;

        // Bunyi ulang-alik pusingan (850Hz)
        this.playBeep(850, 0.15);

        if (typeof this.onShuttleCallback === 'function') {
          this.onShuttleCallback(this.getState());
        }
      }
    }

    getState() {
      const lvlInfo = this.getLevelInfo(this.currentLevel);
      const vo2Info = this.calculateVO2Max(this.currentLevel, this.currentShuttle);

      // Anggaran kalori (METs * 3.5 * berat(kg) / 200 * minit) ~ purata 10 kcal/min
      const elapsedMinutes = this.elapsedMs / 60000;
      const estimatedCalories = Math.round(elapsedMinutes * 11.5);

      const shuttleDurationMs = lvlInfo.shuttleDurationMs;
      const progressPercent = Math.max(0, Math.min(100, ((shuttleDurationMs - this.remainingShuttleMs) / shuttleDurationMs) * 100));

      return {
        isRunning: this.isRunning,
        isPaused: this.isPaused,
        currentLevel: this.currentLevel,
        currentShuttle: this.currentShuttle,
        maxShuttlesForLevel: lvlInfo.shuttles,
        currentSpeed: lvlInfo.speedKmH,
        shuttleDurationMs: lvlInfo.shuttleDurationMs,
        remainingShuttleMs: Math.max(0, this.remainingShuttleMs),
        progressPercent: Number(progressPercent.toFixed(1)),
        totalShuttles: this.totalShuttles,
        totalDistance: this.totalDistance,
        elapsedMs: this.elapsedMs,
        elapsedSec: Math.floor(this.elapsedMs / 1000),
        calories: estimatedCalories,
        vo2MaxInfo: vo2Info
      };
    }
  }

  // ==========================================================================
  // 5. KALKULATOR & PENGGREDAN SEGAK KPM (SEGAKCalculator)
  // ==========================================================================
  class SEGAKCalculator {
    constructor() {
      this.norms = SEGAK_NORMS;
    }

    calculateBMI(weightKg, heightCm) {
      const w = Number(weightKg) || 0;
      const hCm = Number(heightCm) || 0;
      if (w <= 0 || hCm <= 0) {
        return { value: 0, status: 'Tiada Data', weightKg: w, heightCm: hCm };
      }

      const hM = hCm / 100;
      const bmi = Number((w / (hM * hM)).toFixed(1));

      let status = 'Berat Badan Unggul';
      if (bmi < 18.5) {
        status = 'Kurang Berat Badan';
      } else if (bmi <= 24.9) {
        status = 'Berat Badan Unggul';
      } else if (bmi <= 29.9) {
        status = 'Berlebihan Berat Badan';
      } else {
        status = 'Obesiti';
      }

      return { value: bmi, status, weightKg: w, heightCm: hCm };
    }

    getStepTestScore(bpm, gender = 'lelaki') {
      const g = (gender || '').toLowerCase().trim();
      const isFemale = g.includes('perempuan') || g.includes('wanita') || g === 'f';
      const table = isFemale ? this.norms.stepTest.perempuan : this.norms.stepTest.lelaki;
      const rate = Number(bpm) || 0;

      for (const tier of table) {
        if (rate <= tier.maxBpm) {
          return tier.score;
        }
      }
      return 1;
    }

    getPushUpScore(reps, gender = 'lelaki') {
      const g = (gender || '').toLowerCase().trim();
      const isFemale = g.includes('perempuan') || g.includes('wanita') || g === 'f';
      const table = isFemale ? this.norms.pushUps.perempuan : this.norms.pushUps.lelaki;
      const count = Number(reps) || 0;

      for (const tier of table) {
        if (count >= tier.minReps) {
          return tier.score;
        }
      }
      return 1;
    }

    getCurlUpScore(reps, gender = 'lelaki') {
      const g = (gender || '').toLowerCase().trim();
      const isFemale = g.includes('perempuan') || g.includes('wanita') || g === 'f';
      const table = isFemale ? this.norms.curlUps.perempuan : this.norms.curlUps.lelaki;
      const count = Number(reps) || 0;

      for (const tier of table) {
        if (count >= tier.minReps) {
          return tier.score;
        }
      }
      return 1;
    }

    getSitAndReachScore(distanceCm, gender = 'lelaki') {
      const g = (gender || '').toLowerCase().trim();
      const isFemale = g.includes('perempuan') || g.includes('wanita') || g === 'f';
      const table = isFemale ? this.norms.sitAndReach.perempuan : this.norms.sitAndReach.lelaki;
      const dist = Number(distanceCm) || 0;

      for (const tier of table) {
        if (dist >= tier.minCm) {
          return tier.score;
        }
      }
      return 1;
    }

    evaluateSEGAK(data) {
      const gender = (data.gender || 'lelaki').toLowerCase().trim();
      const isFemale = gender.includes('perempuan') || gender.includes('wanita') || gender === 'f';
      const genderKey = isFemale ? 'perempuan' : 'lelaki';

      const age = Number(data.age) || 24;
      const weight = Number(data.weight) || 65;
      const height = Number(data.height) || 170;

      // 1. BMI
      const bmi = this.calculateBMI(weight, height);

      // 2. 4 Bateri Fizikal
      const stepScore = this.getStepTestScore(data.stepBpm, genderKey);
      const pushUpScore = this.getPushUpScore(data.pushUps, genderKey);
      const curlUpScore = this.getCurlUpScore(data.curlUps, genderKey);
      const sitAndReachScore = this.getSitAndReachScore(data.sitAndReach, genderKey);

      const totalScore = stepScore + pushUpScore + curlUpScore + sitAndReachScore;

      // 3. Penggredan Rasmi KPM (SPI Bil. 4/2008 & Task Brief)
      // 18-20: A (5 Bintang - Kecergasan Sangat Tinggi)
      // 15-17: B (4 Bintang - Kecergasan Tinggi)
      // 12-14: C (3 Bintang - Cergas)
      // 8-11:  D (2 Bintang - Kurang Cergas)
      // 4-7:   E (1 Bintang - Tidak Cergas)
      let grade = 'E';
      let stars = 1;
      let interpretation = 'Tidak Cergas';

      if (totalScore >= 18) {
        grade = 'A';
        stars = 5;
        interpretation = 'Kecergasan Sangat Tinggi';
      } else if (totalScore >= 15) {
        grade = 'B';
        stars = 4;
        interpretation = 'Kecergasan Tinggi';
      } else if (totalScore >= 12) {
        grade = 'C';
        stars = 3;
        interpretation = 'Cergas';
      } else if (totalScore >= 8) {
        grade = 'D';
        stars = 2;
        interpretation = 'Kurang Cergas';
      } else {
        grade = 'E';
        stars = 1;
        interpretation = 'Tidak Cergas';
      }

      // 4. Cadangan Intervensi Guru PJPK (Prinsip F.I.T.T.)
      const interventions = [];

      // Intervensi BMI
      if (bmi.status === 'Obesiti' || bmi.status === 'Berlebihan Berat Badan') {
        interventions.push(
          `Pengurusan Komposisi Badan: Indeks Jisim Badan ${bmi.value} (${bmi.status}). Amalkan pelan defisit kalori seimbang dan senaman kardiovaskular berimpak sederhana (jalan laju, renang, ergometer berbasikal) sekurang-kurangnya 150 minit seminggu.`
        );
      } else if (bmi.status === 'Kurang Berat Badan') {
        interventions.push(
          `Pengurusan Komposisi Badan: Indeks Jisim Badan ${bmi.value} (${bmi.status}). Tingkatkan pengambilan tenaga padat nutrien dan protein berkualiti berserta latihan rintangan hipertrofi bagi membina jisim otot tanpa lemak.`
        );
      }

      // Intervensi Naik Turun Bangku
      if (stepScore <= 2) {
        interventions.push(
          `Intervensi Kardiovaskular & Kapasiti Aerobik (F.I.T.T.): Denyutan nadi pemulihan ${data.stepBpm || 0} bpm (Skor ${stepScore}/5). Laksanakan larian Long Slow Distance (LSD) atau latihan jeda aerobik 3–4 kali seminggu selama 30–40 minit pada zon nadi 65%–75% Kadar Nadi Maksimum (KNM).`
        );
      } else if (stepScore === 3) {
        interventions.push(
          `Pengukuhan Kardiovaskular: Skor ${stepScore}/5 (Sederhana). Tingkatkan daya tahan kardiorespiratori melalui latihan 'tempo run' dan aktiviti litar berirama 3 kali seminggu.`
        );
      }

      // Intervensi Tekan Tubi
      if (pushUpScore <= 2) {
        interventions.push(
          `Intervensi Kekuatan Anggota Atas (Otot Pektoralis & Triseps): Catatan ${data.pushUps || 0} ulangan (Skor ${pushUpScore}/5). Jalankan latihan ansur maju tekan tubi (incline/lutut ke standard), dips, dan dumbbell press berjadual 3 sesi seminggu.`
        );
      }

      // Intervensi Ringkuk Tubi Separa
      if (curlUpScore <= 2) {
        interventions.push(
          `Intervensi Daya Tahan Teras (Abdomen & Core): Catatan ${data.curlUps || 0} ulangan (Skor ${curlUpScore}/5). Amalkan latihan isometrik teras (plank statik, dead-bug, bird-dog) serta ringkuk tubi berirama metronom 50 bpm bagi menstabilkan lumbar spine.`
        );
      }

      // Intervensi Jangkauan Melunjur
      if (sitAndReachScore <= 2) {
        interventions.push(
          `Intervensi Kelenturan Hamstring & Lumbar: Catatan jarak ${data.sitAndReach || 0} cm (Skor ${sitAndReachScore}/5). Lakukan regangan statik dan kaedah PNF (Proprioceptive Neuromuscular Facilitation) setiap hari selepas senaman, kekalkan regangan 20–30 saat tanpa menyentak (no bouncing).`
        );
      }

      // Ulasan Pedagogi Keseluruhan
      if (grade === 'A') {
        interventions.unshift(
          'Tahap Kecergasan Fizikal Sangat Tinggi (Gred A). Profil kecergasan calon memenuhi penanda aras tertinggi guru PJPK MRSM. Kekalkan prestasi melalui periodisasi latihan sukan spesifik.'
        );
      } else if (grade === 'B' || grade === 'C') {
        interventions.unshift(
          `Tahap Kecergasan Memuaskan (${interpretation}). Calon berpotensi tinggi untuk mencapai Gred A dengan mengoptimumkan latihan bateri ujian yang mencatat skor 3 ke bawah.`
        );
      } else {
        interventions.unshift(
          `Intervensi Rapi Diperlukan (${interpretation}). Calon disarankan mengikuti pelan intervensi pemulihan F.I.T.T. selama 6 hingga 8 minggu sebelum menjalani penilaian semula kecergasan.`
        );
      }

      return {
        gender: genderKey,
        age,
        weight,
        height,
        bmi,
        scores: {
          step: stepScore,
          pushUp: pushUpScore,
          curlUp: curlUpScore,
          sitAndReach: sitAndReachScore
        },
        totalScore,
        grade,
        stars,
        starText: '★'.repeat(stars) + '☆'.repeat(5 - stars),
        interpretation,
        interventions
      };
    }
  }

  // ==========================================================================
  // 6. PENGENDALI ANTARAMUKA PENGGUNA (FitnessUI)
  // ==========================================================================
  const FitnessUI = {
    container: null,
    activeSubTab: 'bleep', // 'bleep' | 'segak'
    bleepEngine: new BleepTestEngine(),
    segakCalc: new SEGAKCalculator(),
    lastBleepResult: null,
    lastSegakResult: null,

    init(containerEl) {
      if (!containerEl) return;
      this.container = containerEl;
      this._bindEngineEvents();
      this.render();
    },

    _bindEngineEvents() {
      this.bleepEngine.onTickCallback = (state) => {
        this._updateBleepTelemetry(state);
      };

      this.bleepEngine.onShuttleCallback = (state) => {
        this._updateBleepTelemetry(state);
        this._triggerShuttleAnimation(state);
      };

      this.bleepEngine.onLevelChangeCallback = (state) => {
        this._updateBleepTelemetry(state);
        this._showLevelNotification(state);
      };

      this.bleepEngine.onStopCallback = (state) => {
        this.lastBleepResult = state;
        this._renderBleepResultCard(state);
      };
    },

    render() {
      if (!this.container) return;

      this.container.innerHTML = `
        <div class="fitness-wrapper">
          <!-- Subtab Navigasi -->
          <div class="fitness-subnav-bar">
            <button type="button" class="btn ${this.activeSubTab === 'bleep' ? 'btn-primary' : 'btn-outline'} btn-sm" id="btn-subtab-bleep">
              <svg viewBox="0 0 20 20" fill="currentColor" class="icon-inline">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
              </svg>
              Simulasi Bleep Test 20m
            </button>
            <button type="button" class="btn ${this.activeSubTab === 'segak' ? 'btn-primary' : 'btn-outline'} btn-sm" id="btn-subtab-segak">
              <svg viewBox="0 0 20 20" fill="currentColor" class="icon-inline">
                <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2h6v2H7V4zm0 4h6v2H7V8zm0 4h6v2H7v-2z" clip-rule="evenodd"/>
              </svg>
              Kalkulator SEGAK KPM (SPI 4/2008)
            </button>
          </div>

          <!-- Kandungan Subtab -->
          <div id="fitness-subtab-content" class="mt-3">
            ${this.activeSubTab === 'bleep' ? this._templateBleep() : this._templateSEGAK()}
          </div>
        </div>
      `;

      this._attachEventListeners();
    },

    switchSubTab(tabName) {
      if (tabName !== 'bleep' && tabName !== 'segak') return;
      this.activeSubTab = tabName;
      this.render();
    },

    _templateBleep() {
      const state = this.bleepEngine.getState();
      return `
        <div class="card bleep-dashboard-card">
          <div class="card-header bg-navy text-white d-flex justify-between align-center flex-wrap gap-2">
            <div>
              <span class="badge badge-gold">Protokol Luc Léger 20m</span>
              <h3 class="card-heading text-white mt-1">Simulator Bleep Test 20 Meter</h3>
              <p class="text-sm opacity-90 mb-0">Web Audio Synthesizer Asli &bull; Tanpa Fail Luaran &bull; 850Hz & 1200Hz</p>
            </div>
            <div class="bleep-status-pill" id="bleep-status-badge">
              ${state.isRunning ? (state.isPaused ? 'DIJEDA' : 'SEDANG BERLARI') : 'SEDIA BERMULA'}
            </div>
          </div>

          <div class="card-body">
            <!-- Papan Pemuka Digital Utama -->
            <div class="bleep-telemetry-grid">
              <div class="telemetry-box box-level">
                <div class="telemetry-label">TAHAP (LEVEL)</div>
                <div class="telemetry-val text-red" id="tele-level">${state.currentLevel}</div>
                <div class="telemetry-sub" id="tele-speed">${state.currentSpeed.toFixed(1)} km/j</div>
              </div>

              <div class="telemetry-box box-shuttle">
                <div class="telemetry-label">ULANG-ALIK (SHUTTLE)</div>
                <div class="telemetry-val text-navy" id="tele-shuttle">${state.currentShuttle} <span class="tele-shuttle-max">/ ${state.maxShuttlesForLevel}</span></div>
                <div class="telemetry-sub" id="tele-shuttle-time">${(state.shuttleDurationMs / 1000).toFixed(2)} saat/pusingan</div>
              </div>

              <div class="telemetry-box box-distance">
                <div class="telemetry-label">JUMLAH JARAK</div>
                <div class="telemetry-val text-gold" id="tele-distance">${state.totalDistance} <span class="tele-unit">m</span></div>
                <div class="telemetry-sub" id="tele-total-shuttles">${state.totalShuttles} ulang-alik siap</div>
              </div>

              <div class="telemetry-box box-vo2">
                <div class="telemetry-label">ANGGARAN VO2 MAX</div>
                <div class="telemetry-val text-emerald" id="tele-vo2">${state.vo2MaxInfo.vo2Max}</div>
                <div class="telemetry-sub" id="tele-vo2-category">${state.vo2MaxInfo.category} (DG41)</div>
              </div>
            </div>

            <!-- Trek Larian Maya 20m & Animasi Pelari -->
            <div class="bleep-track-wrapper mt-3">
              <div class="track-header">
                <span>Garisan A (0m)</span>
                <span class="track-label-center">Laluan Ulang-Alik 20.00 Meter Piawai</span>
                <span>Garisan B (20m)</span>
              </div>
              <div class="bleep-track-lane" id="bleep-track-lane">
                <div class="track-cone cone-start">▲</div>
                <div class="track-runner-dot" id="bleep-runner-dot" style="left: ${state.progressPercent}%;">
                  <span class="runner-avatar">🏃</span>
                </div>
                <div class="track-cone cone-end">▲</div>
              </div>
              <div class="track-footer">
                <span id="tele-elapsed">Masa: ${this._formatMs(state.elapsedMs)}</span>
                <span id="tele-remaining-ms">Baki Ulang-Alik: ${(state.remainingShuttleMs / 1000).toFixed(1)}s</span>
              </div>
            </div>

            <!-- Butang Kawalan Larian -->
            <div class="bleep-controls-bar mt-3">
              <button type="button" class="btn btn-primary btn-lg" id="btn-bleep-start" ${state.isRunning && !state.isPaused ? 'disabled' : ''}>
                <svg viewBox="0 0 20 20" fill="currentColor" class="icon-inline">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
                </svg>
                ${state.isPaused ? 'Sambung Larian' : 'Mula Bleep Test'}
              </button>

              <button type="button" class="btn btn-outline" id="btn-bleep-pause" ${!state.isRunning ? 'disabled' : ''}>
                ${state.isPaused ? 'Sambung' : 'Jeda (Pause)'}
              </button>

              <button type="button" class="btn btn-danger" id="btn-bleep-stop" ${!state.isRunning ? 'disabled' : ''}>
                Tamat & Rekod Skor
              </button>

              <button type="button" class="btn btn-outline" id="btn-bleep-reset">
                Set Semula
              </button>

              <button type="button" class="btn btn-secondary" id="btn-bleep-test-audio" title="Uji Bunyi Audio Synthesizer">
                🔊 Uji Bunyi Beep (850Hz)
              </button>
            </div>

            <!-- Bekas Keputusan Larian (Dinamik) -->
            <div id="bleep-result-container" class="mt-3">
              ${this.lastBleepResult ? this._templateBleepResult(this.lastBleepResult) : ''}
            </div>

            <!-- Maklumat Rujukan Penanda Aras DG41 -->
            <div class="card mt-3 bg-subtle border-light p-3">
              <h4 class="card-heading-sm">Penanda Aras Kelulusan MAC DG41 PJPK (MARA):</h4>
              <div class="grid grid-2 mt-2">
                <div class="benchmark-pill">
                  <strong>Calon Lelaki:</strong> Minimum <strong>Level 8.1</strong> (Kelajuan 12.0 km/j, VO2 Max &ge; 41.0 ml/kg/min) &bull; Tahap Cemerlang: <strong>Level 10.5+</strong>
                </div>
                <div class="benchmark-pill">
                  <strong>Calon Wanita:</strong> Minimum <strong>Level 6.1</strong> (Kelajuan 11.0 km/j, VO2 Max &ge; 34.5 ml/kg/min) &bull; Tahap Cemerlang: <strong>Level 8.2+</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    },

    _templateBleepResult(resultState) {
      const vo2 = resultState.vo2MaxInfo;
      return `
        <div class="bleep-result-card card border-red p-3 bg-surface shadow-sm">
          <div class="d-flex justify-between align-center flex-wrap gap-2">
            <div>
              <span class="badge badge-primary">Keputusan Rasmi Bleep Test</span>
              <h3 class="card-heading mt-1">Tahap Dicapai: Level ${resultState.currentLevel} Shuttle ${resultState.currentShuttle}</h3>
              <p class="text-sm text-muted mb-0">Jumlah Jarak: ${resultState.totalDistance}m &bull; Masa: ${this._formatMs(resultState.elapsedMs)} &bull; ${resultState.totalShuttles} Pusingan</p>
            </div>
            <div class="text-right">
              <div class="text-xs text-muted">ANGGARAN VO2 MAX</div>
              <div class="text-xxl font-bold text-red">${vo2.vo2Max} <span class="text-sm font-normal">ml/kg/min</span></div>
              <span class="badge badge-outline">${vo2.category}</span>
            </div>
          </div>

          <div class="grid grid-2 mt-3 gap-2">
            <div class="status-qualify-box ${vo2.qualifiesMale ? 'qualify-pass' : 'qualify-fail'}">
              <div class="qualify-title">Kelayakan Calon Lelaki (Sasaran Min Level 8.1)</div>
              <div class="qualify-desc">
                ${vo2.qualifiesMale ? '✔ MELEPASI SASARAN MINIMUM MAC DG41' : '✘ BELUM MELEPASI SASARAN (Perlu Capai Level 8.1)'}
                ${vo2.isExcellentMale ? '<br><span class="badge badge-gold mt-1">★ Taraf Cemerlang (Markah Penuh Panel)</span>' : ''}
              </div>
            </div>

            <div class="status-qualify-box ${vo2.qualifiesFemale ? 'qualify-pass' : 'qualify-fail'}">
              <div class="qualify-title">Kelayakan Calon Wanita (Sasaran Min Level 6.1)</div>
              <div class="qualify-desc">
                ${vo2.qualifiesFemale ? '✔ MELEPASI SASARAN MINIMUM MAC DG41' : '✘ BELUM MELEPASI SASARAN (Perlu Capai Level 6.1)'}
                ${vo2.isExcellentFemale ? '<br><span class="badge badge-gold mt-1">★ Taraf Cemerlang (Markah Penuh Panel)</span>' : ''}
              </div>
            </div>
          </div>

          <div class="mt-3 d-flex gap-2 flex-wrap">
            <button type="button" class="btn btn-secondary btn-sm" id="btn-bleep-save-record">
              💾 Simpan Rekod Bleep Test ke Profil
            </button>
            <button type="button" class="btn btn-outline btn-sm" onclick="window.print()">
              🖨 Cetak Catatan Ini
            </button>
          </div>
        </div>
      `;
    },

    _templateSEGAK() {
      return `
        <div class="card segak-calculator-card">
          <div class="card-header bg-navy text-white d-flex justify-between align-center flex-wrap gap-2">
            <div>
              <span class="badge badge-gold">Buku Panduan KPM (SPI Bil. 4/2008)</span>
              <h3 class="card-heading text-white mt-1">Kalkulator & Penggredan Rasmi SEGAK KPM</h3>
              <p class="text-sm opacity-90 mb-0">5 Bateri Ujian Standard Murid Menengah & Dewasa (Lelaki / Perempuan)</p>
            </div>
            <div class="d-flex gap-2">
              <button type="button" class="btn btn-sm btn-outline-light" id="btn-segak-sample">
                Muat Data Contoh Calon
              </button>
              <button type="button" class="btn btn-sm btn-gold btn-print" onclick="window.print()">
                Cetak Slip SEGAK
              </button>
            </div>
          </div>

          <div class="card-body">
            <!-- Borang Input 5 Bateri Ujian -->
            <form id="form-segak" onsubmit="return false;">
              <div class="grid grid-3 gap-3">
                <!-- Jantina & Demografi -->
                <div class="form-group">
                  <label class="form-label" for="segak-gender"><strong>Jantina Calon:</strong></label>
                  <select id="segak-gender" class="form-control">
                    <option value="lelaki" selected>Lelaki (Standard Menengah / Dewasa)</option>
                    <option value="perempuan">Perempuan (Standard Ubah Suai / Dewasa)</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="segak-age"><strong>Umur (Tahun):</strong></label>
                  <input type="number" id="segak-age" class="form-control" value="24" min="16" max="60" required>
                </div>

                <div class="form-group">
                  <label class="form-label"><strong>Status Sasaran:</strong></label>
                  <div class="form-static-badge">Calon Guru PJPK Gred DG41</div>
                </div>
              </div>

              <!-- Bateri 1: Indeks Jisim Badan (BMI) -->
              <div class="battery-section mt-3">
                <h4 class="battery-title">Bateri 1: Komposisi Badan (Indeks Jisim Badan - BMI)</h4>
                <div class="grid grid-2 gap-3">
                  <div class="form-group">
                    <label class="form-label" for="segak-weight">Berat Badan (kg):</label>
                    <input type="number" step="0.1" id="segak-weight" class="form-control" value="65.0" placeholder="Contoh: 65.0" required>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="segak-height">Tinggi Badan (cm):</label>
                    <input type="number" step="0.5" id="segak-height" class="form-control" value="172.0" placeholder="Contoh: 172.0" required>
                  </div>
                </div>
              </div>

              <!-- Bateri 2 & 3: Kardiovaskular & Tekan Tubi -->
              <div class="battery-section mt-3">
                <h4 class="battery-title">Bateri 2 & 3: Kardiovaskular & Daya Tahan Anggota Atas</h4>
                <div class="grid grid-2 gap-3">
                  <div class="form-group">
                    <label class="form-label" for="segak-step">
                      <strong>Bateri 2: Naik Turun Bangku 3 Minit</strong>
                      <span class="text-xs text-muted d-block">Kadar nadi pemulihan (denyutan seminit / bpm)</span>
                    </label>
                    <input type="number" id="segak-step" class="form-control" value="82" placeholder="Contoh: 82" required>
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="segak-pushup">
                      <strong>Bateri 3: Tekan Tubi (1 Minit)</strong>
                      <span class="text-xs text-muted d-block">Lelaki: standard; Perempuan: lutut (bilangan ulangan)</span>
                    </label>
                    <input type="number" id="segak-pushup" class="form-control" value="34" placeholder="Contoh: 34" required>
                  </div>
                </div>
              </div>

              <!-- Bateri 4 & 5: Ringkuk Tubi & Jangkauan Melunjur -->
              <div class="battery-section mt-3">
                <h4 class="battery-title">Bateri 4 & 5: Kekuatan Teras (Abdomen) & Kelenturan</h4>
                <div class="grid grid-2 gap-3">
                  <div class="form-group">
                    <label class="form-label" for="segak-curlup">
                      <strong>Bateri 4: Ringkuk Tubi Separa (1 Minit)</strong>
                      <span class="text-xs text-muted d-block">Rentak metronom 50 bpm (bilangan ulangan)</span>
                    </label>
                    <input type="number" id="segak-curlup" class="form-control" value="25" placeholder="Contoh: 25" required>
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="segak-sitreach">
                      <strong>Bateri 5: Jangkauan Melunjur (Sit & Reach)</strong>
                      <span class="text-xs text-muted d-block">Kotak skala standard KPM (jarak terbaik dalam cm)</span>
                    </label>
                    <input type="number" step="0.5" id="segak-sitreach" class="form-control" value="44.5" placeholder="Contoh: 44.5" required>
                  </div>
                </div>
              </div>

              <!-- Butang Tindakan -->
              <div class="mt-4 d-flex gap-2 flex-wrap">
                <button type="button" class="btn btn-primary btn-lg" id="btn-segak-calculate">
                  Kira & Nilai Penggredan SEGAK
                </button>
                <button type="reset" class="btn btn-outline" id="btn-segak-reset">
                  Set Semula Borang
                </button>
              </div>
            </form>

            <!-- Bekas Keputusan SEGAK -->
            <div id="segak-result-container" class="mt-4">
              ${this.lastSegakResult ? this._templateSEGAKResult(this.lastSegakResult) : ''}
            </div>
          </div>
        </div>
      `;
    },

    _templateSEGAKResult(res) {
      return `
        <div class="segak-result-card card border-red p-4 bg-surface shadow-md">
          <div class="segak-result-header d-flex justify-between align-center flex-wrap gap-2 border-bottom pb-3">
            <div>
              <span class="badge badge-primary">Sijil Standard SEGAK KPM</span>
              <h3 class="card-heading mt-1">Keputusan Rasmi Penilaian Kecergasan Calon</h3>
              <p class="text-sm text-muted mb-0">Jantina: ${res.gender === 'perempuan' ? 'Perempuan' : 'Lelaki'} &bull; Umur: ${res.age} Tahun &bull; BMI: ${res.bmi.value} (${res.bmi.status})</p>
            </div>
            <div class="text-right">
              <div class="segak-grade-badge grade-${res.grade}">GRED ${res.grade}</div>
              <div class="segak-stars-row text-gold font-bold mt-1">${res.starText} (${res.stars} Bintang)</div>
              <div class="text-sm font-semibold mt-1">${res.interpretation}</div>
            </div>
          </div>

          <!-- Analisis Markah 4 Bateri Fizikal -->
          <div class="grid grid-4 mt-3 gap-2 segak-battery-grid">
            <div class="battery-score-card">
              <div class="battery-name">1. Naik Turun Bangku</div>
              <div class="battery-points">${res.scores.step} <span class="total-pt">/ 5</span></div>
              <div class="battery-sub">${'★'.repeat(res.scores.step)}</div>
            </div>

            <div class="battery-score-card">
              <div class="battery-name">2. Tekan Tubi</div>
              <div class="battery-points">${res.scores.pushUp} <span class="total-pt">/ 5</span></div>
              <div class="battery-sub">${'★'.repeat(res.scores.pushUp)}</div>
            </div>

            <div class="battery-score-card">
              <div class="battery-name">3. Ringkuk Tubi Separa</div>
              <div class="battery-points">${res.scores.curlUp} <span class="total-pt">/ 5</span></div>
              <div class="battery-sub">${'★'.repeat(res.scores.curlUp)}</div>
            </div>

            <div class="battery-score-card">
              <div class="battery-name">4. Jangkauan Melunjur</div>
              <div class="battery-points">${res.scores.sitAndReach} <span class="total-pt">/ 5</span></div>
              <div class="battery-sub">${'★'.repeat(res.scores.sitAndReach)}</div>
            </div>
          </div>

          <!-- Jumlah Markah Keseluruhan -->
          <div class="segak-summary-strip mt-3 p-3 bg-subtle rounded d-flex justify-between align-center flex-wrap gap-2">
            <div>
              <strong>Jumlah Markah Fizikal:</strong> <span class="text-lg text-red font-bold">${res.totalScore} / 20 Mata</span>
            </div>
            <div>
              <strong>Status BMI:</strong> <span class="badge ${res.bmi.status === 'Berat Badan Unggul' ? 'badge-success' : 'badge-warning'}">${res.bmi.value} (${res.bmi.status})</span>
            </div>
            <div>
              <strong>Penilaian MAC:</strong> <span class="badge ${res.grade === 'A' || res.grade === 'B' ? 'badge-primary' : 'badge-danger'}">${res.grade === 'A' || res.grade === 'B' ? 'Layak / Cemerlang' : 'Perlu Peningkatan'}</span>
            </div>
          </div>

          <!-- Cadangan Intervensi Guru PJPK (Prinsip F.I.T.T.) -->
          <div class="segak-interventions-box mt-3 p-3 border-light rounded">
            <h4 class="card-heading-sm text-navy">📋 Cadangan Pelan Intervensi Guru PJPK (F.I.T.T.):</h4>
            <ul class="intervention-list mt-2">
              ${res.interventions.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>

          <!-- Butang Simpan & Cetak -->
          <div class="mt-3 d-flex gap-2 flex-wrap">
            <button type="button" class="btn btn-primary btn-sm" id="btn-segak-save">
              💾 Simpan Rekod SEGAK ke LocalStorage
            </button>
            <button type="button" class="btn btn-gold btn-sm btn-print" onclick="window.print()">
              🖨 Cetak Slip Sijil SEGAK (A4)
            </button>
          </div>
        </div>
      `;
    },

    _attachEventListeners() {
      if (!this.container) return;

      // Subtab Switche
      const btnBleepTab = this.container.querySelector('#btn-subtab-bleep');
      const btnSegakTab = this.container.querySelector('#btn-subtab-segak');

      if (btnBleepTab) {
        btnBleepTab.addEventListener('click', () => this.switchSubTab('bleep'));
      }
      if (btnSegakTab) {
        btnSegakTab.addEventListener('click', () => this.switchSubTab('segak'));
      }

      if (this.activeSubTab === 'bleep') {
        this._attachBleepControls();
      } else {
        this._attachSEGAKControls();
      }
    },

    _attachBleepControls() {
      const btnStart = this.container.querySelector('#btn-bleep-start');
      const btnPause = this.container.querySelector('#btn-bleep-pause');
      const btnStop = this.container.querySelector('#btn-bleep-stop');
      const btnReset = this.container.querySelector('#btn-bleep-reset');
      const btnTestAudio = this.container.querySelector('#btn-bleep-test-audio');

      if (btnStart) {
        btnStart.addEventListener('click', () => {
          this.bleepEngine.start();
          this._updateControlButtons();
        });
      }

      if (btnPause) {
        btnPause.addEventListener('click', () => {
          if (this.bleepEngine.isPaused) {
            this.bleepEngine.resume();
          } else {
            this.bleepEngine.pause();
          }
          this._updateControlButtons();
        });
      }

      if (btnStop) {
        btnStop.addEventListener('click', () => {
          const res = this.bleepEngine.stop();
          this._updateControlButtons();
          this._renderBleepResultCard(res);
        });
      }

      if (btnReset) {
        btnReset.addEventListener('click', () => {
          this.bleepEngine.reset();
          this._updateControlButtons();
          this._updateBleepTelemetry(this.bleepEngine.getState());
        });
      }

      if (btnTestAudio) {
        btnTestAudio.addEventListener('click', () => {
          this.bleepEngine.playBeep(850, 0.2);
          if (typeof MACApp !== 'undefined' && typeof MACApp.showToast === 'function') {
            MACApp.showToast('Nada Beep (850Hz) berjaya diuji melalui Web Audio API.', 'info');
          }
        });
      }

      // Butang simpan rekod jika ada
      this._attachSaveBleepRecordButton();
    },

    _attachSaveBleepRecordButton() {
      const btnSave = this.container.querySelector('#btn-bleep-save-record');
      if (btnSave) {
        btnSave.addEventListener('click', () => {
          if (!this.lastBleepResult) return;
          try {
            const data = {
              level: this.lastBleepResult.currentLevel,
              shuttle: this.lastBleepResult.currentShuttle,
              distance: this.lastBleepResult.totalDistance,
              vo2Max: this.lastBleepResult.vo2MaxInfo.vo2Max,
              category: this.lastBleepResult.vo2MaxInfo.category,
              timestamp: new Date().toISOString()
            };
            localStorage.setItem('mac_bleep_last_level', `L${data.level}.${data.shuttle} (${data.vo2Max})`);
            localStorage.setItem('mac_bleep_full_record', JSON.stringify(data));

            // Kemas kini KPI Dashboard jika wujud
            const kpi = document.getElementById('kpi-fitness-status');
            if (kpi) {
              kpi.textContent = `L${data.level}.${data.shuttle} (${data.vo2Max})`;
            }

            if (typeof MACApp !== 'undefined' && typeof MACApp.showToast === 'function') {
              MACApp.showToast(`Rekod Bleep Test (L${data.level}.${data.shuttle} - ${data.vo2Max} ml/kg/min) disimpan!`, 'success');
            } else {
              alert('Rekod Bleep Test berjaya disimpan ke storan profil.');
            }
          } catch (e) {
            console.error(e);
          }
        });
      }
    },

    _attachSEGAKControls() {
      const btnCalc = this.container.querySelector('#btn-segak-calculate');
      const btnSample = this.container.querySelector('#btn-segak-sample');
      const btnReset = this.container.querySelector('#btn-segak-reset');

      if (btnCalc) {
        btnCalc.addEventListener('click', () => {
          this._handleSEGAKCalculation();
        });
      }

      if (btnSample) {
        btnSample.addEventListener('click', () => {
          this._populateSEGAKSampleData();
        });
      }

      if (btnReset) {
        btnReset.addEventListener('click', () => {
          const resContainer = this.container.querySelector('#segak-result-container');
          if (resContainer) resContainer.innerHTML = '';
          this.lastSegakResult = null;
        });
      }

      this._attachSaveSEGAKRecordButton();
    },

    _populateSEGAKSampleData() {
      const setVal = (id, val) => {
        const el = this.container.querySelector(`#${id}`);
        if (el) el.value = val;
      };

      setVal('segak-gender', 'lelaki');
      setVal('segak-age', '24');
      setVal('segak-weight', '67.0');
      setVal('segak-height', '174.0');
      setVal('segak-step', '79');       // 5 mata
      setVal('segak-pushup', '35');     // 5 mata
      setVal('segak-curlup', '25');     // 5 mata
      setVal('segak-sitreach', '45.0'); // 5 mata

      this._handleSEGAKCalculation();

      if (typeof MACApp !== 'undefined' && typeof MACApp.showToast === 'function') {
        MACApp.showToast('Data contoh calon cemerlang berjaya dimuatkan.', 'info');
      }
    },

    _handleSEGAKCalculation() {
      const getVal = (id, def = 0) => {
        const el = this.container.querySelector(`#${id}`);
        return el ? el.value : def;
      };

      const inputData = {
        gender: getVal('segak-gender', 'lelaki'),
        age: Number(getVal('segak-age', 24)),
        weight: Number(getVal('segak-weight', 65)),
        height: Number(getVal('segak-height', 170)),
        stepBpm: Number(getVal('segak-step', 85)),
        pushUps: Number(getVal('segak-pushup', 30)),
        curlUps: Number(getVal('segak-curlup', 22)),
        sitAndReach: Number(getVal('segak-sitreach', 40))
      };

      const result = this.segakCalc.evaluateSEGAK(inputData);
      this.lastSegakResult = result;

      const resContainer = this.container.querySelector('#segak-result-container');
      if (resContainer) {
        resContainer.innerHTML = this._templateSEGAKResult(result);
        this._attachSaveSEGAKRecordButton();
        resContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    },

    _attachSaveSEGAKRecordButton() {
      const btnSave = this.container.querySelector('#btn-segak-save');
      if (btnSave) {
        btnSave.addEventListener('click', () => {
          if (!this.lastSegakResult) return;
          try {
            const data = this.lastSegakResult;
            localStorage.setItem('mac_segak_last_grade', `Gred ${data.grade} (${data.totalScore}/20)`);
            localStorage.setItem('mac_segak_full_record', JSON.stringify(data));

            // Kemas kini KPI dashboard jika ada
            const kpi = document.getElementById('kpi-fitness-status');
            if (kpi) {
              kpi.textContent = `Gred ${data.grade} (${data.totalScore}/20)`;
            }

            if (typeof MACApp !== 'undefined' && typeof MACApp.showToast === 'function') {
              MACApp.showToast(`Rekod SEGAK (Gred ${data.grade} - ${data.totalScore} Markah) berjaya disimpan!`, 'success');
            } else {
              alert('Rekod SEGAK berjaya disimpan.');
            }
          } catch (e) {
            console.error(e);
          }
        });
      }
    },

    _updateBleepTelemetry(state) {
      if (!this.container || this.activeSubTab !== 'bleep') return;

      const setTxt = (id, txt) => {
        const el = this.container.querySelector(`#${id}`);
        if (el) el.textContent = txt;
      };

      setTxt('tele-level', state.currentLevel);
      setTxt('tele-speed', `${state.currentSpeed.toFixed(1)} km/j`);
      setTxt('tele-shuttle', `${state.currentShuttle}`);
      setTxt('tele-shuttle-time', `${(state.shuttleDurationMs / 1000).toFixed(2)} saat/pusingan`);
      setTxt('tele-distance', state.totalDistance);
      setTxt('tele-total-shuttles', `${state.totalShuttles} ulang-alik siap`);
      setTxt('tele-vo2', state.vo2MaxInfo.vo2Max);
      setTxt('tele-vo2-category', `${state.vo2MaxInfo.category} (DG41)`);
      setTxt('tele-elapsed', `Masa: ${this._formatMs(state.elapsedMs)}`);
      setTxt('tele-remaining-ms', `Baki Ulang-Alik: ${(state.remainingShuttleMs / 1000).toFixed(1)}s`);

      // Gerakkan pelari
      const runner = this.container.querySelector('#bleep-runner-dot');
      if (runner) {
        // Ganjil gerak kiri-ke-kanan, genap gerak kanan-ke-kiri
        const isOdd = state.currentShuttle % 2 === 1;
        const pct = isOdd ? state.progressPercent : (100 - state.progressPercent);
        runner.style.left = `${Math.max(0, Math.min(100, pct))}%`;
      }
    },

    _triggerShuttleAnimation(state) {
      const runner = this.container.querySelector('#bleep-runner-dot');
      if (runner) {
        runner.classList.add('shuttle-hit');
        setTimeout(() => runner.classList.remove('shuttle-hit'), 300);
      }
    },

    _showLevelNotification(state) {
      if (typeof MACApp !== 'undefined' && typeof MACApp.showToast === 'function') {
        MACApp.showToast(`Bleep Test: Naik ke Tahap ${state.currentLevel} (${state.currentSpeed} km/j)!`, 'warning');
      }
    },

    _updateControlButtons() {
      const state = this.bleepEngine.getState();
      const btnStart = this.container.querySelector('#btn-bleep-start');
      const btnPause = this.container.querySelector('#btn-bleep-pause');
      const btnStop = this.container.querySelector('#btn-bleep-stop');
      const badge = this.container.querySelector('#bleep-status-badge');

      if (btnStart) {
        btnStart.disabled = state.isRunning && !state.isPaused;
        btnStart.innerHTML = state.isPaused ? 'Sambung Larian' : 'Mula Bleep Test';
      }
      if (btnPause) {
        btnPause.disabled = !state.isRunning;
        btnPause.textContent = state.isPaused ? 'Sambung' : 'Jeda (Pause)';
      }
      if (btnStop) {
        btnStop.disabled = !state.isRunning;
      }
      if (badge) {
        badge.textContent = state.isRunning ? (state.isPaused ? 'DIJEDA' : 'SEDANG BERLARI') : 'SEDIA BERMULA';
        badge.className = `bleep-status-pill ${state.isRunning ? (state.isPaused ? 'status-paused' : 'status-running') : 'status-idle'}`;
      }
    },

    _renderBleepResultCard(res) {
      const container = this.container.querySelector('#bleep-result-container');
      if (container) {
        container.innerHTML = this._templateBleepResult(res);
        this._attachSaveBleepRecordButton();
        container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    },

    _formatMs(ms) {
      const totalSec = Math.floor(ms / 1000);
      const m = Math.floor(totalSec / 60);
      const s = totalSec % 60;
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
  };

  // ==========================================================================
  // 7. PENDEDAHAN MODUL / EXPORT
  // ==========================================================================
  const FitnessModule = {
    BleepTestEngine,
    SEGAKCalculator,
    FitnessUI,
    BLEEP_LEVELS,
    SEGAK_NORMS
  };

  // Bootstrapping pelayar
  if (typeof window !== 'undefined') {
    window.BleepTestEngine = BleepTestEngine;
    window.SEGAKCalculator = SEGAKCalculator;
    window.FitnessUI = FitnessUI;
    window.FitnessModule = FitnessModule;
    window.BLEEP_LEVELS = BLEEP_LEVELS;
    window.SEGAK_NORMS = SEGAK_NORMS;

    const autoMountFitness = () => {
      const container = document.getElementById('fitness-app');
      if (container) {
        FitnessUI.init(container);
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', autoMountFitness);
    } else {
      autoMountFitness();
    }

    if (typeof document !== 'undefined') {
      document.addEventListener('mac:tab-switched', (e) => {
        if (e.detail && e.detail.tabId === 'fitness') {
          const container = document.getElementById('fitness-app');
          if (container && !container.querySelector('.fitness-wrapper')) {
            FitnessUI.init(container);
          }
        }
      });
    }
  }

  // Ekspot untuk Node.js (Unit Testing)
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = FitnessModule;
  }

})(typeof window !== 'undefined' ? window : global);
