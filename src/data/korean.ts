// 한글 학습 데이터 — 공룡/동물/자동차 테마

export interface KoreanQuestion {
  id: string;
  level: number;
  type: "trace" | "dictation" | "quiz" | "read";
  theme: "dinosaur" | "animal" | "car";
  prompt: string; // TTS로 읽어줄 텍스트
  answer: string;
  hint?: string;
  image?: string; // emoji for MVP
  choices?: string[]; // 객관식
}

// 자음 + 테마 매핑
export const CONSONANT_MAP: Record<string, { word: string; emoji: string; theme: string }> = {
  ㄱ: { word: "공룡", emoji: "🦕", theme: "dinosaur" },
  ㄴ: { word: "나무늘보", emoji: "🦥", theme: "animal" },
  ㄷ: { word: "독수리", emoji: "🦅", theme: "animal" },
  ㄹ: { word: "레이싱카", emoji: "🏎️", theme: "car" },
  ㅁ: { word: "매머드", emoji: "🦣", theme: "dinosaur" },
  ㅂ: { word: "버스", emoji: "🚌", theme: "car" },
  ㅅ: { word: "사자", emoji: "🦁", theme: "animal" },
  ㅇ: { word: "앰뷸런스", emoji: "🚑", theme: "car" },
  ㅈ: { word: "자동차", emoji: "🚗", theme: "car" },
  ㅊ: { word: "치타", emoji: "🐆", theme: "animal" },
  ㅋ: { word: "코끼리", emoji: "🐘", theme: "animal" },
  ㅌ: { word: "트럭", emoji: "🚛", theme: "car" },
  ㅍ: { word: "펭귄", emoji: "🐧", theme: "animal" },
  ㅎ: { word: "하마", emoji: "🦛", theme: "animal" },
};

// 레벨별 받아쓰기 문제
export const KOREAN_QUESTIONS: KoreanQuestion[] = [
  // --- Level 1: 단어 따라쓰기 ---
  { id: "k1-1", level: 1, type: "trace", theme: "dinosaur", prompt: "공룡", answer: "공룡", image: "🦕" },
  { id: "k1-2", level: 1, type: "trace", theme: "animal", prompt: "사자", answer: "사자", image: "🦁" },
  { id: "k1-3", level: 1, type: "trace", theme: "car", prompt: "자동차", answer: "자동차", image: "🚗" },
  { id: "k1-4", level: 1, type: "trace", theme: "dinosaur", prompt: "공룡알", answer: "공룡알", image: "🥚" },
  { id: "k1-5", level: 1, type: "trace", theme: "animal", prompt: "코끼리", answer: "코끼리", image: "🐘" },
  { id: "k1-6", level: 1, type: "trace", theme: "car", prompt: "버스", answer: "버스", image: "🚌" },
  { id: "k1-7", level: 1, type: "trace", theme: "animal", prompt: "펭귄", answer: "펭귄", image: "🐧" },
  { id: "k1-8", level: 1, type: "trace", theme: "dinosaur", prompt: "화석", answer: "화석", image: "🦴" },
  { id: "k1-9", level: 1, type: "trace", theme: "car", prompt: "트럭", answer: "트럭", image: "🚛" },
  { id: "k1-10", level: 1, type: "trace", theme: "animal", prompt: "하마", answer: "하마", image: "🦛" },

  // --- Level 2: 받아쓰기 (단어) ---
  { id: "k2-1", level: 2, type: "dictation", theme: "dinosaur", prompt: "티라노", answer: "티라노", hint: "ㅌ__ㄴ_", image: "🦖" },
  { id: "k2-2", level: 2, type: "dictation", theme: "animal", prompt: "기린", answer: "기린", hint: "ㄱ__", image: "🦒" },
  { id: "k2-3", level: 2, type: "dictation", theme: "car", prompt: "소방차", answer: "소방차", hint: "ㅅ_ㅂ_ㅊ_", image: "🚒" },
  { id: "k2-4", level: 2, type: "dictation", theme: "dinosaur", prompt: "익룡", answer: "익룡", hint: "ㅇ_ㄹ_", image: "🦅" },
  { id: "k2-5", level: 2, type: "dictation", theme: "animal", prompt: "악어", answer: "악어", hint: "ㅇ_ㅇ_", image: "🐊" },
  { id: "k2-6", level: 2, type: "dictation", theme: "car", prompt: "경찰차", answer: "경찰차", hint: "ㄱ_ㅊ_ㅊ_", image: "🚓" },
  { id: "k2-7", level: 2, type: "dictation", theme: "animal", prompt: "원숭이", answer: "원숭이", hint: "ㅇ_ㅅ_ㅇ_", image: "🐒" },
  { id: "k2-8", level: 2, type: "dictation", theme: "dinosaur", prompt: "뼈", answer: "뼈", image: "🦴" },

  // --- Level 3: 받아쓰기 (문장) ---
  { id: "k3-1", level: 3, type: "dictation", theme: "dinosaur", prompt: "공룡이 달려요", answer: "공룡이 달려요", image: "🦕" },
  { id: "k3-2", level: 3, type: "dictation", theme: "animal", prompt: "사자가 으르렁", answer: "사자가 으르렁", image: "🦁" },
  { id: "k3-3", level: 3, type: "dictation", theme: "car", prompt: "자동차가 빨라요", answer: "자동차가 빨라요", image: "🚗" },
  { id: "k3-4", level: 3, type: "dictation", theme: "dinosaur", prompt: "큰 공룡이 왔어요", answer: "큰 공룡이 왔어요", image: "🦖" },
  { id: "k3-5", level: 3, type: "dictation", theme: "animal", prompt: "코끼리는 코가 길어요", answer: "코끼리는 코가 길어요", image: "🐘" },
  { id: "k3-6", level: 3, type: "dictation", theme: "car", prompt: "소방차가 출동해요", answer: "소방차가 출동해요", image: "🚒" },

  // --- Level 2: 퀴즈 ---
  { id: "k2-q1", level: 2, type: "quiz", theme: "dinosaur", prompt: "이 동물의 이름은?", answer: "공룡", image: "🦕", choices: ["공룡", "강아지", "고양이", "코끼리"] },
  { id: "k2-q2", level: 2, type: "quiz", theme: "car", prompt: "불을 끄러 가는 차는?", answer: "소방차", image: "🚒", choices: ["소방차", "경찰차", "택시", "버스"] },
  { id: "k2-q3", level: 2, type: "quiz", theme: "animal", prompt: "목이 긴 동물은?", answer: "기린", image: "🦒", choices: ["기린", "사자", "코끼리", "하마"] },
];

// 읽기 스토리
export const KOREAN_STORIES = [
  {
    id: "story-1",
    level: 3,
    theme: "dinosaur" as const,
    title: "공룡 친구",
    paragraphs: [
      "옛날 옛날에 작은 공룡이 살았어요.",
      "이름은 '또리'예요.",
      "또리는 풀을 먹는 착한 공룡이에요.",
      "어느 날 또리는 큰 알을 발견했어요.",
      "알에서 아기 공룡이 나왔어요!",
      "또리는 새 친구가 생겨서 기뻤어요.",
    ],
    questions: [
      { q: "공룡의 이름은?", a: "또리", choices: ["또리", "도리", "보리", "소리"] },
      { q: "또리는 무엇을 먹나요?", a: "풀", choices: ["풀", "고기", "과일", "생선"] },
      { q: "알에서 무엇이 나왔나요?", a: "아기 공룡", choices: ["아기 공룡", "새", "거북이", "토끼"] },
    ],
  },
];
