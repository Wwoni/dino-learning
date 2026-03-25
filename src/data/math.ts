// 수학 학습 데이터 — 공룡/동물/자동차 테마

export interface MathQuestion {
  id: string;
  level: number;
  type: "counting" | "addition" | "subtraction" | "compare" | "shape";
  theme: "dinosaur" | "animal" | "car";
  prompt: string;
  visual: string; // emoji 반복 표현
  answer: number | string;
  choices: (number | string)[];
  image?: string;
}

export const MATH_QUESTIONS: MathQuestion[] = [
  // --- Level 1: 수 세기 ---
  { id: "m1-1", level: 1, type: "counting", theme: "dinosaur", prompt: "공룡알이 몇 개일까요?", visual: "🥚🥚🥚", answer: 3, choices: [2, 3, 4, 5] },
  { id: "m1-2", level: 1, type: "counting", theme: "animal", prompt: "사자가 몇 마리일까요?", visual: "🦁🦁🦁🦁🦁", answer: 5, choices: [3, 4, 5, 6] },
  { id: "m1-3", level: 1, type: "counting", theme: "car", prompt: "자동차가 몇 대일까요?", visual: "🚗🚗🚗🚗", answer: 4, choices: [3, 4, 5, 6] },
  { id: "m1-4", level: 1, type: "counting", theme: "dinosaur", prompt: "공룡이 몇 마리일까요?", visual: "🦕🦕🦕🦕🦕🦕🦕", answer: 7, choices: [5, 6, 7, 8] },
  { id: "m1-5", level: 1, type: "counting", theme: "animal", prompt: "펭귄이 몇 마리일까요?", visual: "🐧🐧🐧🐧🐧🐧", answer: 6, choices: [4, 5, 6, 7] },
  { id: "m1-6", level: 1, type: "counting", theme: "car", prompt: "버스가 몇 대일까요?", visual: "🚌🚌🚌🚌🚌🚌🚌🚌", answer: 8, choices: [6, 7, 8, 9] },
  { id: "m1-7", level: 1, type: "counting", theme: "dinosaur", prompt: "뼈가 몇 개일까요?", visual: "🦴🦴🦴🦴🦴🦴🦴🦴🦴🦴", answer: 10, choices: [8, 9, 10, 11] },
  { id: "m1-8", level: 1, type: "counting", theme: "animal", prompt: "코끼리가 몇 마리일까요?", visual: "🐘🐘", answer: 2, choices: [1, 2, 3, 4] },

  // --- Level 1: 크기 비교 ---
  { id: "m1-c1", level: 1, type: "compare", theme: "dinosaur", prompt: "어떤 공룡이 더 클까요?", visual: "🦕 vs 🦖", answer: "🦖", choices: ["🦕", "🦖"], image: "🦖" },
  { id: "m1-c2", level: 1, type: "compare", theme: "car", prompt: "어떤 것이 더 빠를까요?", visual: "🚗 vs 🏎️", answer: "🏎️", choices: ["🚗", "🏎️"] },
  { id: "m1-c3", level: 1, type: "compare", theme: "animal", prompt: "5와 3 중 어떤 수가 더 클까요?", visual: "🦁🦁🦁🦁🦁 vs 🐯🐯🐯", answer: 5, choices: [3, 5] },

  // --- Level 2: 덧셈 (10 이내) ---
  { id: "m2-1", level: 2, type: "addition", theme: "dinosaur", prompt: "공룡 2마리와 3마리가 만났어요.\n모두 몇 마리일까요?", visual: "🦕🦕 + 🦕🦕🦕", answer: 5, choices: [4, 5, 6, 7] },
  { id: "m2-2", level: 2, type: "addition", theme: "animal", prompt: "사자 4마리에 사자 2마리가 더 왔어요.\n모두 몇 마리일까요?", visual: "🦁🦁🦁🦁 + 🦁🦁", answer: 6, choices: [5, 6, 7, 8] },
  { id: "m2-3", level: 2, type: "addition", theme: "car", prompt: "주차장에 차 3대가 있었는데\n5대가 더 왔어요. 모두 몇 대?", visual: "🚗🚗🚗 + 🚗🚗🚗🚗🚗", answer: 8, choices: [7, 8, 9, 10] },
  { id: "m2-4", level: 2, type: "addition", theme: "dinosaur", prompt: "둥지에 알 1개가 있었는데\n4개가 더 생겼어요. 모두 몇 개?", visual: "🥚 + 🥚🥚🥚🥚", answer: 5, choices: [4, 5, 6, 7] },
  { id: "m2-5", level: 2, type: "addition", theme: "animal", prompt: "펭귄 6마리와 3마리.\n모두 몇 마리?", visual: "🐧🐧🐧🐧🐧🐧 + 🐧🐧🐧", answer: 9, choices: [8, 9, 10, 11] },
  { id: "m2-6", level: 2, type: "addition", theme: "car", prompt: "트럭 4대와 버스 4대.\n모두 몇 대?", visual: "🚛🚛🚛🚛 + 🚌🚌🚌🚌", answer: 8, choices: [6, 7, 8, 9] },

  // --- Level 2: 뺄셈 (10 이내) ---
  { id: "m2-s1", level: 2, type: "subtraction", theme: "dinosaur", prompt: "공룡 5마리 중 2마리가 갔어요.\n몇 마리 남았을까요?", visual: "🦕🦕🦕🦕🦕 - 🦕🦕", answer: 3, choices: [2, 3, 4, 5] },
  { id: "m2-s2", level: 2, type: "subtraction", theme: "car", prompt: "자동차 8대 중 3대가 출발했어요.\n몇 대 남았을까요?", visual: "🚗🚗🚗🚗🚗🚗🚗🚗 - 🚗🚗🚗", answer: 5, choices: [4, 5, 6, 7] },
  { id: "m2-s3", level: 2, type: "subtraction", theme: "animal", prompt: "코끼리 7마리 중 4마리가 갔어요.\n몇 마리 남았을까요?", visual: "🐘🐘🐘🐘🐘🐘🐘 - 🐘🐘🐘🐘", answer: 3, choices: [2, 3, 4, 5] },
  { id: "m2-s4", level: 2, type: "subtraction", theme: "dinosaur", prompt: "공룡알 10개 중 6개가 부화했어요.\n남은 알은 몇 개?", visual: "🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚 - 6", answer: 4, choices: [3, 4, 5, 6] },

  // --- Level 3: 도형 ---
  { id: "m3-d1", level: 3, type: "shape", theme: "car", prompt: "자동차 바퀴는 어떤 모양일까요?", visual: "🚗", answer: "동그라미", choices: ["동그라미", "세모", "네모", "별"] },
  { id: "m3-d2", level: 3, type: "shape", theme: "car", prompt: "창문은 어떤 모양일까요?", visual: "🪟", answer: "네모", choices: ["동그라미", "세모", "네모", "별"] },
  { id: "m3-d3", level: 3, type: "shape", theme: "dinosaur", prompt: "공룡알은 어떤 모양과 비슷할까요?", visual: "🥚", answer: "동그라미", choices: ["동그라미", "세모", "네모", "별"] },
];
