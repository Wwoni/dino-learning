// 학습 진도 관리 — localStorage 기반

export interface Progress {
  korean: { level: number; solved: string[]; stars: number };
  math: { level: number; solved: string[]; stars: number };
  english: { level: number; solved: string[]; stars: number };
  totalExp: number;
  dinosaurs: string[]; // 부화된 공룡 도감
  streak: number; // 연속 출석일
  lastDate: string;
}

const STORAGE_KEY = "dino-learning-progress";

const DEFAULT_PROGRESS: Progress = {
  korean: { level: 1, solved: [], stars: 0 },
  math: { level: 1, solved: [], stars: 0 },
  english: { level: 1, solved: [], stars: 0 },
  totalExp: 0,
  dinosaurs: [],
  streak: 0,
  lastDate: "",
};

export function getProgress(): Progress {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return DEFAULT_PROGRESS;
  try {
    return { ...DEFAULT_PROGRESS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function saveProgress(p: Progress) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

export function addExp(subject: "korean" | "math" | "english", questionId: string, correct: boolean): Progress {
  const p = getProgress();
  const sub = p[subject];
  if (!sub.solved.includes(questionId)) {
    sub.solved.push(questionId);
  }
  if (correct) {
    sub.stars += 1;
    p.totalExp += 10;
  }
  // 레벨업 체크: 별 10개마다
  if (sub.stars >= sub.level * 10) {
    sub.level = Math.min(sub.level + 1, 4);
  }
  // 출석 체크
  const today = new Date().toISOString().slice(0, 10);
  if (p.lastDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    p.streak = p.lastDate === yesterday ? p.streak + 1 : 1;
    p.lastDate = today;
  }
  // 공룡 부화: 50 EXP마다
  const dinoList = ["🦕", "🦖", "🦣", "🐊", "🦎", "🐢", "🦅", "🐉"];
  const dinoIndex = Math.floor(p.totalExp / 50);
  if (dinoIndex > 0 && dinoIndex <= dinoList.length && !p.dinosaurs.includes(dinoList[dinoIndex - 1])) {
    p.dinosaurs.push(dinoList[dinoIndex - 1]);
  }
  saveProgress(p);
  return p;
}

export function resetProgress() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
