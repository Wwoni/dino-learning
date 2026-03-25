// 수학 레슨 — Lesson 1~20

export interface MathLesson {
  id: number;
  title: string;
  topic: string;
  dino?: string;
  story: string;
  questions: MathQ[];
}

export interface MathQ {
  id: string;
  type: "counting" | "addition" | "subtraction" | "compare" | "shape";
  prompt: string;
  visual: string;
  answer: number | string;
  choices: (number | string)[];
}

export const MATH_LESSONS: MathLesson[] = [
  // ========== 1~5: 수 세기 ==========
  {
    id: 1,
    title: "티라노의 알 세기",
    topic: "1~5 세기",
    dino: "trex",
    story: "티라노사우루스가 둥지에 알을 낳았어요!\n알이 몇 개인지 세어볼까요?",
    questions: [
      { id: "M1-1", type: "counting", prompt: "공룡알이 몇 개?", visual: "🥚🥚🥚", answer: 3, choices: [2, 3, 4, 5] },
      { id: "M1-2", type: "counting", prompt: "아기 공룡이 몇 마리?", visual: "🦖🦖", answer: 2, choices: [1, 2, 3, 4] },
      { id: "M1-3", type: "counting", prompt: "뼈가 몇 개?", visual: "🦴🦴🦴🦴🦴", answer: 5, choices: [3, 4, 5, 6] },
      { id: "M1-4", type: "counting", prompt: "나무가 몇 그루?", visual: "🌲🌲🌲🌲", answer: 4, choices: [3, 4, 5, 6] },
      { id: "M1-5", type: "counting", prompt: "발자국이 몇 개?", visual: "🐾", answer: 1, choices: [1, 2, 3, 4] },
    ],
  },
  {
    id: 2,
    title: "벨로시랩터 무리 세기",
    topic: "6~10 세기",
    dino: "velociraptor",
    story: "벨로시랩터는 무리 지어 다녀요!\n무리가 몇 마리인지 세어봐요.",
    questions: [
      { id: "M2-1", type: "counting", prompt: "랩터가 몇 마리?", visual: "🦖🦖🦖🦖🦖🦖", answer: 6, choices: [5, 6, 7, 8] },
      { id: "M2-2", type: "counting", prompt: "물고기가 몇 마리?", visual: "🐟🐟🐟🐟🐟🐟🐟🐟", answer: 8, choices: [6, 7, 8, 9] },
      { id: "M2-3", type: "counting", prompt: "별이 몇 개?", visual: "⭐⭐⭐⭐⭐⭐⭐", answer: 7, choices: [6, 7, 8, 9] },
      { id: "M2-4", type: "counting", prompt: "발톱이 몇 개?", visual: "🦖🦖🦖🦖🦖🦖🦖🦖🦖🦖", answer: 10, choices: [8, 9, 10, 11] },
      { id: "M2-5", type: "counting", prompt: "나뭇잎이 몇 개?", visual: "🍃🍃🍃🍃🍃🍃🍃🍃🍃", answer: 9, choices: [7, 8, 9, 10] },
    ],
  },
  {
    id: 3,
    title: "공룡 크기 비교",
    topic: "크기·수 비교",
    dino: "giganotosaurus",
    story: "기가노토사우루스는 13미터나 돼요!\n어떤 공룡이 더 클까요?",
    questions: [
      { id: "M3-1", type: "compare", prompt: "어떤 수가 더 클까?", visual: "🦖🦖🦖🦖🦖 vs 🦕🦕🦕", answer: 5, choices: [3, 5] },
      { id: "M3-2", type: "compare", prompt: "어떤 수가 더 클까?", visual: "🚗🚗🚗🚗🚗🚗🚗 vs 🚌🚌🚌🚌", answer: 7, choices: [4, 7] },
      { id: "M3-3", type: "compare", prompt: "8과 6 중 어떤 수가 더 클까요?", visual: "8 vs 6", answer: 8, choices: [6, 8] },
      { id: "M3-4", type: "compare", prompt: "3과 9 중 어떤 수가 더 클까요?", visual: "3 vs 9", answer: 9, choices: [3, 9] },
      { id: "M3-5", type: "compare", prompt: "어떤 공룡이 더 많을까?", visual: "🦖🦖🦖🦖 vs 🦕🦕🦕🦕🦕🦕", answer: 6, choices: [4, 6] },
    ],
  },
  {
    id: 4,
    title: "공룡알 덧셈 1",
    topic: "5 이내 덧셈",
    dino: "trex",
    story: "티라노 둥지에 알이 계속 늘어나요!\n더하기를 배워서 알이 모두 몇 개인지 알아봐요.",
    questions: [
      { id: "M4-1", type: "addition", prompt: "알 1개 + 2개 = ?", visual: "🥚 + 🥚🥚", answer: 3, choices: [2, 3, 4, 5] },
      { id: "M4-2", type: "addition", prompt: "공룡 2마리 + 2마리 = ?", visual: "🦖🦖 + 🦖🦖", answer: 4, choices: [3, 4, 5, 6] },
      { id: "M4-3", type: "addition", prompt: "뼈 3개 + 1개 = ?", visual: "🦴🦴🦴 + 🦴", answer: 4, choices: [3, 4, 5, 6] },
      { id: "M4-4", type: "addition", prompt: "나무 2그루 + 3그루 = ?", visual: "🌲🌲 + 🌲🌲🌲", answer: 5, choices: [4, 5, 6, 7] },
      { id: "M4-5", type: "addition", prompt: "별 1개 + 1개 = ?", visual: "⭐ + ⭐", answer: 2, choices: [1, 2, 3, 4] },
    ],
  },
  {
    id: 5,
    title: "동물원 덧셈",
    topic: "10 이내 덧셈",
    dino: "allosaurus",
    story: "알로사우루스가 동물원을 구경하러 왔어요!\n동물들을 더해봐요.",
    questions: [
      { id: "M5-1", type: "addition", prompt: "사자 4마리 + 3마리 = ?", visual: "🦁🦁🦁🦁 + 🦁🦁🦁", answer: 7, choices: [5, 6, 7, 8] },
      { id: "M5-2", type: "addition", prompt: "펭귄 5마리 + 4마리 = ?", visual: "🐧🐧🐧🐧🐧 + 🐧🐧🐧🐧", answer: 9, choices: [7, 8, 9, 10] },
      { id: "M5-3", type: "addition", prompt: "코끼리 3마리 + 5마리 = ?", visual: "🐘🐘🐘 + 🐘🐘🐘🐘🐘", answer: 8, choices: [6, 7, 8, 9] },
      { id: "M5-4", type: "addition", prompt: "자동차 6대 + 4대 = ?", visual: "🚗🚗🚗🚗🚗🚗 + 🚗🚗🚗🚗", answer: 10, choices: [8, 9, 10, 11] },
      { id: "M5-5", type: "addition", prompt: "공룡 4마리 + 4마리 = ?", visual: "🦖🦖🦖🦖 + 🦖🦖🦖🦖", answer: 8, choices: [6, 7, 8, 9] },
    ],
  },

  // ========== 6~10: 뺄셈 ==========
  {
    id: 6,
    title: "스피노의 물고기 뺄셈",
    topic: "5 이내 뺄셈",
    dino: "spinosaurus",
    story: "스피노사우루스가 물고기를 잡아먹어요!\n먹고 남은 물고기는 몇 마리일까요?",
    questions: [
      { id: "M6-1", type: "subtraction", prompt: "물고기 5마리 - 2마리 먹었어요", visual: "🐟🐟🐟🐟🐟 - 2", answer: 3, choices: [2, 3, 4, 5] },
      { id: "M6-2", type: "subtraction", prompt: "알 4개 - 1개 부화했어요", visual: "🥚🥚🥚🥚 - 1", answer: 3, choices: [2, 3, 4, 5] },
      { id: "M6-3", type: "subtraction", prompt: "나무 3그루 - 1그루 쓰러졌어요", visual: "🌲🌲🌲 - 1", answer: 2, choices: [1, 2, 3, 4] },
      { id: "M6-4", type: "subtraction", prompt: "뼈 5개 - 3개 가져갔어요", visual: "🦴🦴🦴🦴🦴 - 3", answer: 2, choices: [1, 2, 3, 4] },
      { id: "M6-5", type: "subtraction", prompt: "공룡 4마리 - 2마리 갔어요", visual: "🦖🦖🦖🦖 - 2", answer: 2, choices: [1, 2, 3, 4] },
    ],
  },
  {
    id: 7,
    title: "자동차 경주 뺄셈",
    topic: "10 이내 뺄셈",
    dino: "carnotaurus",
    story: "자동차 경주에서 차들이 하나씩 골인하고 있어요!\n남은 차는 몇 대일까요?",
    questions: [
      { id: "M7-1", type: "subtraction", prompt: "차 8대 - 3대 골인!", visual: "🚗🚗🚗🚗🚗🚗🚗🚗 - 3", answer: 5, choices: [4, 5, 6, 7] },
      { id: "M7-2", type: "subtraction", prompt: "버스 7대 - 4대 출발!", visual: "🚌🚌🚌🚌🚌🚌🚌 - 4", answer: 3, choices: [2, 3, 4, 5] },
      { id: "M7-3", type: "subtraction", prompt: "트럭 10대 - 6대 갔어요", visual: "🚛×10 - 6", answer: 4, choices: [3, 4, 5, 6] },
      { id: "M7-4", type: "subtraction", prompt: "공룡 9마리 - 5마리 숨었어요", visual: "🦖×9 - 5", answer: 4, choices: [3, 4, 5, 6] },
      { id: "M7-5", type: "subtraction", prompt: "펭귄 6마리 - 2마리 수영 갔어요", visual: "🐧🐧🐧🐧🐧🐧 - 2", answer: 4, choices: [3, 4, 5, 6] },
    ],
  },
  {
    id: 8,
    title: "섞어 풀기 1",
    topic: "덧셈·뺄셈 섞기",
    dino: "dilophosaurus",
    story: "딜로포사우루스가 문제를 냈어요!\n더하기와 빼기가 섞여 있으니 잘 봐야 해요.",
    questions: [
      { id: "M8-1", type: "addition", prompt: "3 + 4 = ?", visual: "🦖🦖🦖 + 🦖🦖🦖🦖", answer: 7, choices: [5, 6, 7, 8] },
      { id: "M8-2", type: "subtraction", prompt: "8 - 5 = ?", visual: "🚗🚗🚗🚗🚗🚗🚗🚗 - 5", answer: 3, choices: [2, 3, 4, 5] },
      { id: "M8-3", type: "addition", prompt: "5 + 5 = ?", visual: "🐧🐧🐧🐧🐧 + 🐧🐧🐧🐧🐧", answer: 10, choices: [8, 9, 10, 11] },
      { id: "M8-4", type: "subtraction", prompt: "9 - 3 = ?", visual: "🦁🦁🦁🦁🦁🦁🦁🦁🦁 - 3", answer: 6, choices: [5, 6, 7, 8] },
      { id: "M8-5", type: "addition", prompt: "7 + 2 = ?", visual: "🥚🥚🥚🥚🥚🥚🥚 + 🥚🥚", answer: 9, choices: [7, 8, 9, 10] },
    ],
  },

  // ========== 9~10: 도형 ==========
  {
    id: 9,
    title: "공룡 세계의 도형",
    topic: "동그라미·세모·네모 찾기",
    dino: "ankylosaurus",
    story: "안킬로사우루스 등에는 네모난 갑옷이 있어요!\n주변에서 도형을 찾아봐요.",
    questions: [
      { id: "M9-1", type: "shape", prompt: "자동차 바퀴는 어떤 모양?", visual: "🚗", answer: "동그라미", choices: ["동그라미", "세모", "네모", "별"] },
      { id: "M9-2", type: "shape", prompt: "공룡알은 어떤 모양?", visual: "🥚", answer: "동그라미", choices: ["동그라미", "세모", "네모", "별"] },
      { id: "M9-3", type: "shape", prompt: "창문은 어떤 모양?", visual: "🪟", answer: "네모", choices: ["동그라미", "세모", "네모", "별"] },
      { id: "M9-4", type: "shape", prompt: "지붕은 어떤 모양?", visual: "🏠", answer: "세모", choices: ["동그라미", "세모", "네모", "별"] },
      { id: "M9-5", type: "shape", prompt: "안킬로 갑옷은 어떤 모양?", visual: "🦕", answer: "네모", choices: ["동그라미", "세모", "네모", "별"] },
    ],
  },
  {
    id: 10,
    title: "도형 세기",
    topic: "도형 개수 세기",
    dino: "pachycephalosaurus",
    story: "파키케팔로사우루스 머리가 돌처럼 단단해요!\n공룡 그림에서 도형을 세어봐요.",
    questions: [
      { id: "M10-1", type: "counting", prompt: "동그라미가 몇 개?", visual: "⭕⭕⭕ △ ⬜⬜", answer: 3, choices: [2, 3, 4, 5] },
      { id: "M10-2", type: "counting", prompt: "네모가 몇 개?", visual: "⭕ ⬜⬜⬜⬜ △△", answer: 4, choices: [2, 3, 4, 5] },
      { id: "M10-3", type: "counting", prompt: "세모가 몇 개?", visual: "△△△△△ ⭕⭕ ⬜", answer: 5, choices: [3, 4, 5, 6] },
      { id: "M10-4", type: "addition", prompt: "동그라미 3개 + 네모 4개 = 모두 몇 개?", visual: "⭕⭕⭕ + ⬜⬜⬜⬜", answer: 7, choices: [5, 6, 7, 8] },
      { id: "M10-5", type: "subtraction", prompt: "도형 8개 중 세모 3개를 빼면?", visual: "8개 - △△△", answer: 5, choices: [4, 5, 6, 7] },
    ],
  },
];

export function getMathLesson(id: number): MathLesson | undefined {
  return MATH_LESSONS.find(l => l.id === id);
}
