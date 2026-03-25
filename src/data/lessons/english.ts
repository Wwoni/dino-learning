// 영어 레슨 — Lesson 1~20

export interface EnglishLesson {
  id: number;
  title: string;
  topic: string;
  dino?: string;
  story: string;       // 도입 스토리 (한국어)
  storyEn: string;     // 영어 버전 (듣고 읽기용)
  questions: EnglishQ[];
}

export interface EnglishQ {
  id: string;
  type: "alphabet" | "listen" | "trace" | "word" | "sentence";
  prompt: string;
  answer: string;
  korean?: string;
  image?: string;
  choices?: string[];
  audio?: string;
}

export const ENGLISH_LESSONS: EnglishLesson[] = [
  // ========== 1~5: 알파벳 + 기초 단어 ==========
  {
    id: 1,
    title: "D is for Dinosaur",
    topic: "알파벳 A~D + 공룡 단어",
    dino: "trex",
    story: "티라노사우루스가 영어를 배우고 싶대요!\nA, B, C, D부터 시작해봐요.",
    storyEn: "T-Rex wants to learn English! Let's start with A, B, C, D.",
    questions: [
      { id: "E1-1", type: "listen", prompt: "Dinosaur", answer: "Dinosaur", korean: "공룡", image: "🦖", audio: "Dinosaur", choices: ["Dinosaur", "Dog", "Duck", "Dolphin"] },
      { id: "E1-2", type: "trace", prompt: "DINO", answer: "DINO", korean: "공룡", image: "🦖" },
      { id: "E1-3", type: "listen", prompt: "Big", answer: "Big", korean: "큰", image: "🦖", audio: "Big", choices: ["Big", "Bug", "Bag", "Bat"] },
      { id: "E1-4", type: "trace", prompt: "BIG", answer: "BIG", korean: "큰", image: "🦖" },
      { id: "E1-5", type: "word", prompt: "🦖 이것의 영어 이름은?", answer: "Dinosaur", image: "🦖", choices: ["Dinosaur", "Dragon", "Deer", "Donkey"] },
    ],
  },
  {
    id: 2,
    title: "T-Rex is Strong!",
    topic: "알파벳 E~H + 형용사",
    dino: "trex",
    story: "티라노는 정말 세요!\nstrong, huge, fast 같은 영어 단어를 배워봐요.",
    storyEn: "T-Rex is so strong! Let's learn words like strong, huge, and fast.",
    questions: [
      { id: "E2-1", type: "listen", prompt: "Egg", answer: "Egg", korean: "알", image: "🥚", audio: "Egg", choices: ["Egg", "Eye", "Ear", "Eat"] },
      { id: "E2-2", type: "trace", prompt: "EGG", answer: "EGG", korean: "알", image: "🥚" },
      { id: "E2-3", type: "listen", prompt: "Fast", answer: "Fast", korean: "빠른", image: "🏎️", audio: "Fast", choices: ["Fast", "Fish", "Frog", "Fun"] },
      { id: "E2-4", type: "trace", prompt: "FAST", answer: "FAST", korean: "빠른", image: "🏎️" },
      { id: "E2-5", type: "listen", prompt: "Huge", answer: "Huge", korean: "거대한", image: "🦖", audio: "Huge", choices: ["Huge", "Hug", "Hot", "Hat"] },
    ],
  },
  {
    id: 3,
    title: "Velociraptor is Quick!",
    topic: "동물 단어 (동사 포함)",
    dino: "velociraptor",
    story: "벨로시랩터는 아주 빠르고 영리해요!\nrun, jump, hunt 같은 동작 단어를 배워봐요.",
    storyEn: "Velociraptor is very quick and clever! Let's learn action words.",
    questions: [
      { id: "E3-1", type: "listen", prompt: "Run", answer: "Run", korean: "달리다", image: "🏃", audio: "Run", choices: ["Run", "Red", "Rain", "Rock"] },
      { id: "E3-2", type: "trace", prompt: "RUN", answer: "RUN", korean: "달리다", image: "🏃" },
      { id: "E3-3", type: "listen", prompt: "Jump", answer: "Jump", korean: "점프하다", image: "🦘", audio: "Jump", choices: ["Jump", "Jam", "Jog", "Jet"] },
      { id: "E3-4", type: "trace", prompt: "JUMP", answer: "JUMP", korean: "점프하다", image: "🦘" },
      { id: "E3-5", type: "word", prompt: "벨로시랩터가 달린다! 영어로?", answer: "Run", image: "🦖", choices: ["Run", "Sit", "Sleep", "Eat"] },
    ],
  },
  {
    id: 4,
    title: "Lion and Tiger",
    topic: "동물 이름 영어",
    dino: "deinonychus",
    story: "데이노니쿠스와 현대 동물을 비교해봐요!\nLion, Tiger, Bear... 영어로 어떻게 말할까?",
    storyEn: "Let's compare Deinonychus with modern animals! Lion, Tiger, Bear...",
    questions: [
      { id: "E4-1", type: "listen", prompt: "Lion", answer: "Lion", korean: "사자", image: "🦁", audio: "Lion", choices: ["Lion", "Lamp", "Leaf", "Lime"] },
      { id: "E4-2", type: "trace", prompt: "LION", answer: "LION", korean: "사자", image: "🦁" },
      { id: "E4-3", type: "listen", prompt: "Tiger", answer: "Tiger", korean: "호랑이", image: "🐯", audio: "Tiger", choices: ["Tiger", "Tree", "Train", "Tape"] },
      { id: "E4-4", type: "trace", prompt: "TIGER", answer: "TIGER", korean: "호랑이", image: "🐯" },
      { id: "E4-5", type: "word", prompt: "🐘 이것의 영어 이름은?", answer: "Elephant", image: "🐘", choices: ["Elephant", "Eagle", "Emu", "Eel"] },
    ],
  },
  {
    id: 5,
    title: "Cars and Trucks",
    topic: "탈것 영어 단어",
    dino: "carnotaurus",
    story: "카르노타우루스만큼 빠른 자동차!\nCar, Bus, Truck... 탈것 영어를 배워요.",
    storyEn: "Cars as fast as Carnotaurus! Let's learn vehicle words.",
    questions: [
      { id: "E5-1", type: "listen", prompt: "Car", answer: "Car", korean: "자동차", image: "🚗", audio: "Car", choices: ["Car", "Cat", "Cup", "Can"] },
      { id: "E5-2", type: "trace", prompt: "CAR", answer: "CAR", korean: "자동차", image: "🚗" },
      { id: "E5-3", type: "listen", prompt: "Bus", answer: "Bus", korean: "버스", image: "🚌", audio: "Bus", choices: ["Bus", "Bat", "Bed", "Box"] },
      { id: "E5-4", type: "trace", prompt: "BUS", answer: "BUS", korean: "버스", image: "🚌" },
      { id: "E5-5", type: "word", prompt: "🚒 이것의 영어 이름은?", answer: "Fire truck", image: "🚒", choices: ["Fire truck", "Ferry", "Fan", "Fork"] },
    ],
  },

  // ========== 6~10: 짧은 문장 ==========
  {
    id: 6,
    title: "The dinosaur is big!",
    topic: "is/are 문장",
    dino: "brachiosaurus",
    story: "브라키오사우루스는 정말 커요!\n'~는 ~해요' 문장을 영어로 배워봐요.",
    storyEn: "Brachiosaurus is really big! Let's learn 'is' sentences.",
    questions: [
      { id: "E6-1", type: "sentence", prompt: "The dinosaur is big.", answer: "The dinosaur is big.", korean: "공룡은 커요.", image: "🦕", audio: "The dinosaur is big." },
      { id: "E6-2", type: "trace", prompt: "BIG", answer: "BIG", korean: "큰", image: "🦕" },
      { id: "E6-3", type: "sentence", prompt: "The lion is strong.", answer: "The lion is strong.", korean: "사자는 강해요.", image: "🦁", audio: "The lion is strong." },
      { id: "E6-4", type: "trace", prompt: "STRONG", answer: "STRONG", korean: "강한", image: "🦁" },
      { id: "E6-5", type: "listen", prompt: "Big", answer: "Big", korean: "큰", image: "🦕", audio: "Big", choices: ["Big", "Bad", "Bed", "Bit"] },
    ],
  },
  {
    id: 7,
    title: "I like dinosaurs!",
    topic: "I like ~ 문장",
    dino: "allosaurus",
    story: "알로사우루스를 좋아해요?\n'I like ~' 문장으로 좋아하는 것을 말해봐요!",
    storyEn: "Do you like Allosaurus? Let's say what we like with 'I like'!",
    questions: [
      { id: "E7-1", type: "sentence", prompt: "I like dinosaurs.", answer: "I like dinosaurs.", korean: "나는 공룡을 좋아해요.", image: "🦖", audio: "I like dinosaurs." },
      { id: "E7-2", type: "trace", prompt: "LIKE", answer: "LIKE", korean: "좋아하다", image: "❤️" },
      { id: "E7-3", type: "sentence", prompt: "I like cars.", answer: "I like cars.", korean: "나는 자동차를 좋아해요.", image: "🚗", audio: "I like cars." },
      { id: "E7-4", type: "sentence", prompt: "I like lions.", answer: "I like lions.", korean: "나는 사자를 좋아해요.", image: "🦁", audio: "I like lions." },
      { id: "E7-5", type: "trace", prompt: "I LIKE DINO", answer: "I LIKE DINO", korean: "나는 공룡을 좋아해", image: "🦖" },
    ],
  },
  {
    id: 8,
    title: "Spinosaurus can swim!",
    topic: "can 문장",
    dino: "spinosaurus",
    story: "스피노사우루스는 수영할 수 있어요!\n'can' 을 써서 할 수 있는 것을 말해봐요.",
    storyEn: "Spinosaurus can swim! Let's use 'can' to say what we can do.",
    questions: [
      { id: "E8-1", type: "sentence", prompt: "It can swim.", answer: "It can swim.", korean: "수영할 수 있어요.", image: "🏊", audio: "It can swim." },
      { id: "E8-2", type: "trace", prompt: "SWIM", answer: "SWIM", korean: "수영하다", image: "🏊" },
      { id: "E8-3", type: "sentence", prompt: "It can fly.", answer: "It can fly.", korean: "날 수 있어요.", image: "🦅", audio: "It can fly." },
      { id: "E8-4", type: "trace", prompt: "FLY", answer: "FLY", korean: "날다", image: "🦅" },
      { id: "E8-5", type: "word", prompt: "수영하다를 영어로?", answer: "Swim", image: "🏊", choices: ["Swim", "Sing", "Sit", "Sleep"] },
    ],
  },
  {
    id: 9,
    title: "Colors of dinosaurs",
    topic: "색깔 영어 단어",
    dino: "dilophosaurus",
    story: "딜로포사우루스는 알록달록했을까요?\n색깔 영어 단어를 배워봐요!",
    storyEn: "Was Dilophosaurus colorful? Let's learn color words!",
    questions: [
      { id: "E9-1", type: "listen", prompt: "Red", answer: "Red", korean: "빨간색", image: "🔴", audio: "Red", choices: ["Red", "Run", "Rat", "Rain"] },
      { id: "E9-2", type: "trace", prompt: "RED", answer: "RED", korean: "빨간색", image: "🔴" },
      { id: "E9-3", type: "listen", prompt: "Blue", answer: "Blue", korean: "파란색", image: "🔵", audio: "Blue", choices: ["Blue", "Ball", "Bat", "Bed"] },
      { id: "E9-4", type: "trace", prompt: "BLUE", answer: "BLUE", korean: "파란색", image: "🔵" },
      { id: "E9-5", type: "listen", prompt: "Green", answer: "Green", korean: "초록색", image: "🟢", audio: "Green", choices: ["Green", "Gray", "Gold", "Grape"] },
    ],
  },
  {
    id: 10,
    title: "How many dinosaurs?",
    topic: "숫자 영어 (1~10)",
    dino: "utahraptor",
    story: "유타랩터가 무리를 세고 있어요!\n영어로 숫자를 세어봐요.",
    storyEn: "Utahraptor is counting its pack! Let's count in English.",
    questions: [
      { id: "E10-1", type: "listen", prompt: "Three", answer: "Three", korean: "3, 셋", image: "3️⃣", audio: "Three", choices: ["Three", "Tree", "True", "Try"] },
      { id: "E10-2", type: "trace", prompt: "THREE", answer: "THREE", korean: "3, 셋", image: "3️⃣" },
      { id: "E10-3", type: "listen", prompt: "Five", answer: "Five", korean: "5, 다섯", image: "5️⃣", audio: "Five", choices: ["Five", "Fire", "Fine", "Fish"] },
      { id: "E10-4", type: "trace", prompt: "FIVE", answer: "FIVE", korean: "5, 다섯", image: "5️⃣" },
      { id: "E10-5", type: "sentence", prompt: "I see five dinosaurs.", answer: "I see five dinosaurs.", korean: "공룡 다섯 마리가 보여요.", image: "🦖", audio: "I see five dinosaurs." },
    ],
  },
];

export function getEnglishLesson(id: number): EnglishLesson | undefined {
  return ENGLISH_LESSONS.find(l => l.id === id);
}
