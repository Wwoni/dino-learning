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

  // ========== 11~15: 형용사·전치사·복수 ==========
  {
    id: 11,
    title: "Big and Small",
    topic: "반대말 형용사",
    dino: "giganotosaurus",
    story: "기가노토사우루스는 크고, 벨로시랩터는 작아요!\n반대말을 영어로 배워봐요.",
    storyEn: "Giganotosaurus is big and Velociraptor is small! Let's learn opposites.",
    questions: [
      { id: "E11-1", type: "listen", prompt: "Big", answer: "Big", korean: "큰", image: "🦖", audio: "Big", choices: ["Big", "Bad", "Bit", "Bag"] },
      { id: "E11-2", type: "listen", prompt: "Small", answer: "Small", korean: "작은", image: "🐜", audio: "Small", choices: ["Small", "Smell", "Smile", "Smart"] },
      { id: "E11-3", type: "word", prompt: "🦖 'Big'의 반대말은?", answer: "Small", image: "🐜", choices: ["Small", "Tall", "Short", "Long"] },
      { id: "E11-4", type: "trace", prompt: "BIG", answer: "BIG", korean: "큰", image: "🦖" },
      { id: "E11-5", type: "trace", prompt: "SMALL", answer: "SMALL", korean: "작은", image: "🐜" },
    ],
  },
  {
    id: 12,
    title: "Fast and Slow",
    topic: "반대말 형용사 2",
    dino: "carnotaurus",
    story: "카르노타우루스는 빠르고 안킬로사우루스는 느려요!\n더 많은 반대말을 배워봐요.",
    storyEn: "Carnotaurus is fast and Ankylosaurus is slow! More opposites!",
    questions: [
      { id: "E12-1", type: "listen", prompt: "Fast", answer: "Fast", korean: "빠른", image: "🏎️", audio: "Fast", choices: ["Fast", "First", "Fact", "Flat"] },
      { id: "E12-2", type: "listen", prompt: "Slow", answer: "Slow", korean: "느린", image: "🐢", audio: "Slow", choices: ["Slow", "Show", "Snow", "Slow"] },
      { id: "E12-3", type: "word", prompt: "'Fast'의 반대말은?", answer: "Slow", image: "🐢", choices: ["Slow", "Low", "Flow", "Glow"] },
      { id: "E12-4", type: "sentence", prompt: "The car is fast.", answer: "The car is fast.", korean: "자동차는 빨라요.", image: "🏎️", audio: "The car is fast." },
      { id: "E12-5", type: "sentence", prompt: "The turtle is slow.", answer: "The turtle is slow.", korean: "거북이는 느려요.", image: "🐢", audio: "The turtle is slow." },
    ],
  },
  {
    id: 13,
    title: "Where is the dinosaur?",
    topic: "위치 전치사 (in, on, under)",
    dino: "velociraptor",
    story: "벨로시랩터가 숨바꼭질을 해요!\n어디에 있는지 영어로 말해봐요.",
    storyEn: "Velociraptor is playing hide and seek! Where is it?",
    questions: [
      { id: "E13-1", type: "listen", prompt: "In the box", answer: "In", korean: "안에", image: "📦", audio: "In the box", choices: ["In", "On", "Under", "Next"] },
      { id: "E13-2", type: "listen", prompt: "On the table", answer: "On", korean: "위에", image: "🪑", audio: "On the table", choices: ["On", "In", "Under", "Behind"] },
      { id: "E13-3", type: "listen", prompt: "Under the tree", answer: "Under", korean: "아래에", image: "🌳", audio: "Under the tree", choices: ["Under", "Over", "In", "On"] },
      { id: "E13-4", type: "trace", prompt: "IN", answer: "IN", korean: "안에", image: "📦" },
      { id: "E13-5", type: "sentence", prompt: "The dino is under the tree.", answer: "The dino is under the tree.", korean: "공룡이 나무 아래에 있어요.", image: "🌳", audio: "The dino is under the tree." },
    ],
  },
  {
    id: 14,
    title: "One cat, two cats!",
    topic: "복수형 (-s)",
    dino: "triceratops",
    story: "트리케라톱스 한 마리... 두 마리... 세 마리!\n영어에서 여러 개는 뒤에 s를 붙여요.",
    storyEn: "One Triceratops, two Triceratops! In English, we add 's' for more than one.",
    questions: [
      { id: "E14-1", type: "word", prompt: "Cat 한 마리는 cat, 두 마리는?", answer: "Cats", image: "🐱🐱", choices: ["Cats", "Cates", "Catos", "Catss"] },
      { id: "E14-2", type: "word", prompt: "Dog 한 마리는 dog, 세 마리는?", answer: "Dogs", image: "🐶🐶🐶", choices: ["Dogs", "Doges", "Dogss", "Dags"] },
      { id: "E14-3", type: "listen", prompt: "Stars", answer: "Stars", korean: "별들", image: "⭐⭐⭐", audio: "Stars", choices: ["Stars", "Star", "Stares", "Start"] },
      { id: "E14-4", type: "trace", prompt: "CATS", answer: "CATS", korean: "고양이들", image: "🐱🐱" },
      { id: "E14-5", type: "sentence", prompt: "I see three dinosaurs.", answer: "I see three dinosaurs.", korean: "공룡 세 마리가 보여요.", image: "🦖🦖🦖", audio: "I see three dinosaurs." },
    ],
  },
  {
    id: 15,
    title: "My body!",
    topic: "신체 부위 영어",
    dino: "pachycephalosaurus",
    story: "파키케팔로사우루스는 머리가 아주 단단해요!\n우리 몸의 영어 이름을 배워봐요.",
    storyEn: "Pachycephalosaurus has a very hard head! Let's learn body parts.",
    questions: [
      { id: "E15-1", type: "listen", prompt: "Head", answer: "Head", korean: "머리", image: "🧠", audio: "Head", choices: ["Head", "Hand", "Hat", "Heart"] },
      { id: "E15-2", type: "listen", prompt: "Hand", answer: "Hand", korean: "손", image: "✋", audio: "Hand", choices: ["Hand", "Head", "Hard", "Hat"] },
      { id: "E15-3", type: "word", prompt: "👀 이것의 영어 이름은?", answer: "Eye", image: "👀", choices: ["Eye", "Ear", "Egg", "Eat"] },
      { id: "E15-4", type: "trace", prompt: "HEAD", answer: "HEAD", korean: "머리", image: "🧠" },
      { id: "E15-5", type: "sentence", prompt: "I have two hands.", answer: "I have two hands.", korean: "나는 손이 두 개 있어요.", image: "✋✋", audio: "I have two hands." },
    ],
  },

  // ========== 16~18: 일상 표현 ==========
  {
    id: 16,
    title: "What do you see?",
    topic: "I see ~ 문장",
    dino: "pteranodon",
    story: "프테라노돈이 하늘에서 아래를 봐요!\n'I see ~' 로 보이는 것을 말해봐요.",
    storyEn: "Pteranodon looks down from the sky! Let's say what we see.",
    questions: [
      { id: "E16-1", type: "sentence", prompt: "I see a tree.", answer: "I see a tree.", korean: "나무가 보여요.", image: "🌳", audio: "I see a tree." },
      { id: "E16-2", type: "sentence", prompt: "I see a river.", answer: "I see a river.", korean: "강이 보여요.", image: "🏞️", audio: "I see a river." },
      { id: "E16-3", type: "listen", prompt: "Mountain", answer: "Mountain", korean: "산", image: "⛰️", audio: "Mountain", choices: ["Mountain", "Mouth", "Mouse", "Moon"] },
      { id: "E16-4", type: "trace", prompt: "I SEE", answer: "I SEE", korean: "나는 봐요", image: "👀" },
      { id: "E16-5", type: "word", prompt: "⛰️ 이것의 영어 이름은?", answer: "Mountain", image: "⛰️", choices: ["Mountain", "Morning", "Monday", "Monkey"] },
    ],
  },
  {
    id: 17,
    title: "I want food!",
    topic: "I want ~ / I eat ~",
    dino: "trex",
    story: "티라노사우루스 배가 고파요!\n'I want ~', 'I eat ~' 를 배워봐요.",
    storyEn: "T-Rex is hungry! Let's learn 'I want' and 'I eat'.",
    questions: [
      { id: "E17-1", type: "listen", prompt: "Apple", answer: "Apple", korean: "사과", image: "🍎", audio: "Apple", choices: ["Apple", "Ant", "Ape", "Art"] },
      { id: "E17-2", type: "listen", prompt: "Water", answer: "Water", korean: "물", image: "💧", audio: "Water", choices: ["Water", "Winter", "Warm", "Watch"] },
      { id: "E17-3", type: "sentence", prompt: "I want an apple.", answer: "I want an apple.", korean: "사과를 원해요.", image: "🍎", audio: "I want an apple." },
      { id: "E17-4", type: "sentence", prompt: "I eat rice.", answer: "I eat rice.", korean: "밥을 먹어요.", image: "🍚", audio: "I eat rice." },
      { id: "E17-5", type: "trace", prompt: "APPLE", answer: "APPLE", korean: "사과", image: "🍎" },
    ],
  },
  {
    id: 18,
    title: "How's the weather?",
    topic: "날씨 표현",
    dino: "stegosaurus",
    story: "스테고사우루스가 밖을 나가려고 해요!\n오늘 날씨가 어떤지 영어로 말해봐요.",
    storyEn: "Stegosaurus wants to go outside! How's the weather today?",
    questions: [
      { id: "E18-1", type: "listen", prompt: "Sunny", answer: "Sunny", korean: "맑은", image: "☀️", audio: "Sunny", choices: ["Sunny", "Sunday", "Sand", "Song"] },
      { id: "E18-2", type: "listen", prompt: "Rainy", answer: "Rainy", korean: "비 오는", image: "🌧️", audio: "Rainy", choices: ["Rainy", "Rainbow", "Rain", "Ready"] },
      { id: "E18-3", type: "word", prompt: "❄️ 이 날씨의 영어는?", answer: "Snowy", image: "❄️", choices: ["Snowy", "Sunny", "Sandy", "Slowly"] },
      { id: "E18-4", type: "sentence", prompt: "It is sunny today.", answer: "It is sunny today.", korean: "오늘은 맑아요.", image: "☀️", audio: "It is sunny today." },
      { id: "E18-5", type: "trace", prompt: "SUNNY", answer: "SUNNY", korean: "맑은", image: "☀️" },
    ],
  },

  // ========== 19~20: 종합 ==========
  {
    id: 19,
    title: "Let's go to the zoo!",
    topic: "동물원 종합 회화",
    dino: "brachiosaurus",
    story: "브라키오사우루스와 동물원에 갔어요!\n영어로 동물들에 대해 이야기해봐요.",
    storyEn: "We went to the zoo with Brachiosaurus! Let's talk about the animals.",
    questions: [
      { id: "E19-1", type: "sentence", prompt: "The giraffe is tall.", answer: "The giraffe is tall.", korean: "기린은 키가 커요.", image: "🦒", audio: "The giraffe is tall." },
      { id: "E19-2", type: "word", prompt: "🦛 이것의 영어 이름은?", answer: "Hippo", image: "🦛", choices: ["Hippo", "Horse", "Hawk", "Hare"] },
      { id: "E19-3", type: "sentence", prompt: "I like the penguin.", answer: "I like the penguin.", korean: "나는 펭귄이 좋아요.", image: "🐧", audio: "I like the penguin." },
      { id: "E19-4", type: "listen", prompt: "Monkey", answer: "Monkey", korean: "원숭이", image: "🐒", audio: "Monkey", choices: ["Monkey", "Money", "Monday", "Moon"] },
      { id: "E19-5", type: "trace", prompt: "ZOO", answer: "ZOO", korean: "동물원", image: "🦁" },
    ],
  },
  {
    id: 20,
    title: "English Master!",
    topic: "영어 종합 복습",
    dino: "spinosaurus",
    story: "스피노사우루스 박사가 마지막 시험을 내요!\n지금까지 배운 영어를 모두 써봐요!",
    storyEn: "Professor Spinosaurus gives the final test! Use all the English you learned!",
    questions: [
      { id: "E20-1", type: "word", prompt: "'Big'의 반대말은?", answer: "Small", image: "🐜", choices: ["Small", "Short", "Slow", "Sad"] },
      { id: "E20-2", type: "sentence", prompt: "The dinosaur can run.", answer: "The dinosaur can run.", korean: "공룡은 달릴 수 있어요.", image: "🦖", audio: "The dinosaur can run." },
      { id: "E20-3", type: "listen", prompt: "Dinosaur", answer: "Dinosaur", korean: "공룡", image: "🦕", audio: "Dinosaur", choices: ["Dinosaur", "Dragon", "Doctor", "Driver"] },
      { id: "E20-4", type: "word", prompt: "Cat 여러 마리는?", answer: "Cats", image: "🐱🐱🐱", choices: ["Cats", "Cates", "Catss", "Cat"] },
      { id: "E20-5", type: "trace", prompt: "I LIKE DINO", answer: "I LIKE DINO", korean: "나는 공룡을 좋아해", image: "🦖" },
    ],
  },
];

export function getEnglishLesson(id: number): EnglishLesson | undefined {
  return ENGLISH_LESSONS.find(l => l.id === id);
}
