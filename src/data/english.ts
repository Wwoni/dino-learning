// 영어 학습 데이터 — 공룡/동물/자동차 테마

export interface EnglishQuestion {
  id: string;
  level: number;
  type: "alphabet" | "word" | "trace" | "listen" | "sentence";
  theme: "dinosaur" | "animal" | "car";
  prompt: string; // 보여줄 텍스트
  answer: string;
  korean?: string; // 한국어 뜻
  image?: string;
  choices?: string[];
  audio?: string; // TTS 텍스트
}

// 알파벳 - 공룡/동물/자동차 매핑
export const ALPHABET_MAP: Record<string, { word: string; korean: string; emoji: string; theme: string }> = {
  A: { word: "Alligator", korean: "악어", emoji: "🐊", theme: "animal" },
  B: { word: "Bus", korean: "버스", emoji: "🚌", theme: "car" },
  C: { word: "Car", korean: "자동차", emoji: "🚗", theme: "car" },
  D: { word: "Dinosaur", korean: "공룡", emoji: "🦕", theme: "dinosaur" },
  E: { word: "Elephant", korean: "코끼리", emoji: "🐘", theme: "animal" },
  F: { word: "Fire truck", korean: "소방차", emoji: "🚒", theme: "car" },
  G: { word: "Giraffe", korean: "기린", emoji: "🦒", theme: "animal" },
  H: { word: "Hippo", korean: "하마", emoji: "🦛", theme: "animal" },
  I: { word: "Iguana", korean: "이구아나", emoji: "🦎", theme: "animal" },
  J: { word: "Jeep", korean: "지프", emoji: "🚙", theme: "car" },
  K: { word: "Kangaroo", korean: "캥거루", emoji: "🦘", theme: "animal" },
  L: { word: "Lion", korean: "사자", emoji: "🦁", theme: "animal" },
  M: { word: "Mammoth", korean: "매머드", emoji: "🦣", theme: "dinosaur" },
  N: { word: "Newt", korean: "도롱뇽", emoji: "🦎", theme: "animal" },
  O: { word: "Octopus", korean: "문어", emoji: "🐙", theme: "animal" },
  P: { word: "Penguin", korean: "펭귄", emoji: "🐧", theme: "animal" },
  Q: { word: "Quail", korean: "메추라기", emoji: "🐦", theme: "animal" },
  R: { word: "Race car", korean: "경주차", emoji: "🏎️", theme: "car" },
  S: { word: "Snake", korean: "뱀", emoji: "🐍", theme: "animal" },
  T: { word: "T-Rex", korean: "티렉스", emoji: "🦖", theme: "dinosaur" },
  U: { word: "Unicorn", korean: "유니콘", emoji: "🦄", theme: "animal" },
  V: { word: "Van", korean: "밴", emoji: "🚐", theme: "car" },
  W: { word: "Whale", korean: "고래", emoji: "🐋", theme: "animal" },
  X: { word: "X-ray fish", korean: "엑스레이 물고기", emoji: "🐟", theme: "animal" },
  Y: { word: "Yak", korean: "야크", emoji: "🐂", theme: "animal" },
  Z: { word: "Zebra", korean: "얼룩말", emoji: "🦓", theme: "animal" },
};

export const ENGLISH_QUESTIONS: EnglishQuestion[] = [
  // --- Level 1: 단어 듣고 고르기 ---
  { id: "e1-1", level: 1, type: "listen", theme: "dinosaur", prompt: "Dinosaur", answer: "Dinosaur", korean: "공룡", image: "🦕", audio: "Dinosaur", choices: ["Dinosaur", "Dog", "Duck", "Dolphin"] },
  { id: "e1-2", level: 1, type: "listen", theme: "animal", prompt: "Lion", answer: "Lion", korean: "사자", image: "🦁", audio: "Lion", choices: ["Lion", "Lamp", "Leaf", "Lemon"] },
  { id: "e1-3", level: 1, type: "listen", theme: "car", prompt: "Car", answer: "Car", korean: "자동차", image: "🚗", audio: "Car", choices: ["Car", "Cat", "Cup", "Cake"] },
  { id: "e1-4", level: 1, type: "listen", theme: "animal", prompt: "Elephant", answer: "Elephant", korean: "코끼리", image: "🐘", audio: "Elephant", choices: ["Elephant", "Eagle", "Egg", "Earth"] },
  { id: "e1-5", level: 1, type: "listen", theme: "car", prompt: "Bus", answer: "Bus", korean: "버스", image: "🚌", audio: "Bus", choices: ["Bus", "Bear", "Ball", "Bird"] },
  { id: "e1-6", level: 1, type: "listen", theme: "dinosaur", prompt: "T-Rex", answer: "T-Rex", korean: "티렉스", image: "🦖", audio: "T-Rex", choices: ["T-Rex", "Tiger", "Turtle", "Train"] },

  // --- Level 2: 단어 따라쓰기 ---
  { id: "e2-1", level: 2, type: "trace", theme: "dinosaur", prompt: "DINO", answer: "DINO", korean: "공룡", image: "🦕" },
  { id: "e2-2", level: 2, type: "trace", theme: "animal", prompt: "LION", answer: "LION", korean: "사자", image: "🦁" },
  { id: "e2-3", level: 2, type: "trace", theme: "car", prompt: "CAR", answer: "CAR", korean: "자동차", image: "🚗" },
  { id: "e2-4", level: 2, type: "trace", theme: "animal", prompt: "CAT", answer: "CAT", korean: "고양이", image: "🐱" },
  { id: "e2-5", level: 2, type: "trace", theme: "car", prompt: "BUS", answer: "BUS", korean: "버스", image: "🚌" },
  { id: "e2-6", level: 2, type: "trace", theme: "dinosaur", prompt: "EGG", answer: "EGG", korean: "알", image: "🥚" },
  { id: "e2-7", level: 2, type: "trace", theme: "animal", prompt: "DOG", answer: "DOG", korean: "개", image: "🐶" },
  { id: "e2-8", level: 2, type: "trace", theme: "car", prompt: "TAXI", answer: "TAXI", korean: "택시", image: "🚕" },

  // --- Level 2: 단어 퀴즈 (그림 보고 영어 고르기) ---
  { id: "e2-q1", level: 2, type: "word", theme: "dinosaur", prompt: "🦕 이것의 영어 이름은?", answer: "Dinosaur", image: "🦕", choices: ["Dinosaur", "Dragon", "Deer", "Duck"] },
  { id: "e2-q2", level: 2, type: "word", theme: "animal", prompt: "🐘 이것의 영어 이름은?", answer: "Elephant", image: "🐘", choices: ["Elephant", "Eagle", "Emu", "Elk"] },
  { id: "e2-q3", level: 2, type: "word", theme: "car", prompt: "🚒 이것의 영어 이름은?", answer: "Fire truck", image: "🚒", choices: ["Fire truck", "Ferry", "Fork", "Fan"] },
  { id: "e2-q4", level: 2, type: "word", theme: "animal", prompt: "🐧 이것의 영어 이름은?", answer: "Penguin", image: "🐧", choices: ["Penguin", "Parrot", "Pig", "Panda"] },

  // --- Level 3: 문장 듣고 읽기 ---
  { id: "e3-1", level: 3, type: "sentence", theme: "dinosaur", prompt: "The dinosaur is big.", answer: "The dinosaur is big.", korean: "공룡은 커요.", image: "🦕", audio: "The dinosaur is big." },
  { id: "e3-2", level: 3, type: "sentence", theme: "animal", prompt: "The lion is strong.", answer: "The lion is strong.", korean: "사자는 강해요.", image: "🦁", audio: "The lion is strong." },
  { id: "e3-3", level: 3, type: "sentence", theme: "car", prompt: "The car is fast.", answer: "The car is fast.", korean: "자동차는 빨라요.", image: "🚗", audio: "The car is fast." },
  { id: "e3-4", level: 3, type: "sentence", theme: "dinosaur", prompt: "I like dinosaurs.", answer: "I like dinosaurs.", korean: "나는 공룡을 좋아해요.", image: "🦕", audio: "I like dinosaurs." },
  { id: "e3-5", level: 3, type: "sentence", theme: "animal", prompt: "The penguin can swim.", answer: "The penguin can swim.", korean: "펭귄은 수영할 수 있어요.", image: "🐧", audio: "The penguin can swim." },
  { id: "e3-6", level: 3, type: "sentence", theme: "car", prompt: "The bus is yellow.", answer: "The bus is yellow.", korean: "버스는 노란색이에요.", image: "🚌", audio: "The bus is yellow." },
];
