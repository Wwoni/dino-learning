// 한글 레슨 — Lesson 1~30 (점진적 난이도)

export interface KoreanLesson {
  id: number;
  title: string;
  topic: string;       // 이번 레슨 주제
  dino?: string;       // 등장 공룡 id
  story: string;       // 레슨 도입 스토리
  questions: KoreanQ[];
}

export interface KoreanQ {
  id: string;
  type: "trace" | "dictation" | "quiz" | "read";
  prompt: string;
  answer: string;
  hint?: string;
  image?: string;
  choices?: string[];
}

export const KOREAN_LESSONS: KoreanLesson[] = [
  // ========== 1~5: 기본 자음·모음 + 쉬운 단어 따라쓰기 ==========
  {
    id: 1,
    title: "공룡의 ㄱ",
    topic: "자음 ㄱ, ㄴ 배우기",
    dino: "trex",
    story: "아기 티라노사우루스가 처음으로 글자를 배우러 왔어요.\n\"ㄱ은 내 이름 '공룡'의 첫 글자야!\" 하고 자랑했답니다.",
    questions: [
      { id: "L1-1", type: "trace", prompt: "공", answer: "공", image: "🦖" },
      { id: "L1-2", type: "trace", prompt: "룡", answer: "룡", image: "🦖" },
      { id: "L1-3", type: "trace", prompt: "공룡", answer: "공룡", image: "🦖" },
      { id: "L1-4", type: "trace", prompt: "나무", answer: "나무", image: "🌲" },
      { id: "L1-5", type: "quiz", prompt: "'공룡'의 첫 글자는?", answer: "ㄱ", choices: ["ㄱ", "ㄴ", "ㄷ", "ㄹ"], image: "🦖" },
    ],
  },
  {
    id: 2,
    title: "벨로시랩터의 ㄷ, ㄹ",
    topic: "자음 ㄷ, ㄹ 배우기",
    dino: "velociraptor",
    story: "빠른 벨로시랩터가 달려왔어요!\n\"나는 '달리기'를 좋아해! ㄷ으로 시작하지!\"",
    questions: [
      { id: "L2-1", type: "trace", prompt: "달리기", answer: "달리기", image: "🦖" },
      { id: "L2-2", type: "trace", prompt: "다리", answer: "다리", image: "🦵" },
      { id: "L2-3", type: "trace", prompt: "라면", answer: "라면", image: "🍜" },
      { id: "L2-4", type: "quiz", prompt: "'달리기'의 첫 글자는?", answer: "ㄷ", choices: ["ㄱ", "ㄴ", "ㄷ", "ㄹ"], image: "🦖" },
      { id: "L2-5", type: "trace", prompt: "공룡 다리", answer: "공룡 다리", image: "🦖" },
    ],
  },
  {
    id: 3,
    title: "스피노의 ㅅ, ㅇ",
    topic: "자음 ㅅ, ㅇ 배우기",
    dino: "spinosaurus",
    story: "스피노사우루스가 강에서 물고기를 잡고 있어요.\n\"ㅅ은 '수영'의 첫 글자! 나는 수영을 잘해!\"",
    questions: [
      { id: "L3-1", type: "trace", prompt: "수영", answer: "수영", image: "🏊" },
      { id: "L3-2", type: "trace", prompt: "사냥", answer: "사냥", image: "🦖" },
      { id: "L3-3", type: "trace", prompt: "아빠", answer: "아빠", image: "👨" },
      { id: "L3-4", type: "trace", prompt: "물고기", answer: "물고기", image: "🐟" },
      { id: "L3-5", type: "quiz", prompt: "'사냥'의 첫 소리는?", answer: "ㅅ", choices: ["ㅁ", "ㅅ", "ㅇ", "ㅈ"], image: "🦖" },
    ],
  },
  {
    id: 4,
    title: "카르노타우루스의 ㅋ, ㅌ",
    topic: "자음 ㅋ, ㅌ 배우기",
    dino: "carnotaurus",
    story: "카르노타우루스는 뿔이 있는 빠른 공룡이에요!\n\"ㅋ은 '큰'의 첫 글자! 내 뿔이 진짜 크지?\"",
    questions: [
      { id: "L4-1", type: "trace", prompt: "큰", answer: "큰", image: "🦖" },
      { id: "L4-2", type: "trace", prompt: "뿔", answer: "뿔", image: "🦖" },
      { id: "L4-3", type: "trace", prompt: "타조", answer: "타조", image: "🐦" },
      { id: "L4-4", type: "trace", prompt: "코끼리", answer: "코끼리", image: "🐘" },
      { id: "L4-5", type: "quiz", prompt: "'코끼리'의 첫 소리는?", answer: "ㅋ", choices: ["ㅋ", "ㅌ", "ㅍ", "ㅎ"], image: "🐘" },
    ],
  },
  {
    id: 5,
    title: "알로사우루스의 ㅁ, ㅂ",
    topic: "자음 ㅁ, ㅂ 배우기",
    dino: "allosaurus",
    story: "알로사우루스가 먹이를 찾고 있어요.\n\"ㅁ은 '먹이'의 첫 글자야! 배고파!\"",
    questions: [
      { id: "L5-1", type: "trace", prompt: "먹이", answer: "먹이", image: "🍖" },
      { id: "L5-2", type: "trace", prompt: "바위", answer: "바위", image: "🪨" },
      { id: "L5-3", type: "trace", prompt: "버스", answer: "버스", image: "🚌" },
      { id: "L5-4", type: "trace", prompt: "모래", answer: "모래", image: "🏖️" },
      { id: "L5-5", type: "quiz", prompt: "'버스'의 첫 소리는?", answer: "ㅂ", choices: ["ㅁ", "ㅂ", "ㅅ", "ㅈ"], image: "🚌" },
    ],
  },

  // ========== 6~10: 공룡 이름 따라쓰기 + 간단한 받아쓰기 ==========
  {
    id: 6,
    title: "육식 공룡 이름 쓰기 1",
    topic: "티라노, 벨로시랩터 이름 쓰기",
    dino: "trex",
    story: "오늘은 무시무시한 육식 공룡들의 이름을 배워볼 거예요!\n티라노사우루스는 공룡 세계의 왕이었답니다.",
    questions: [
      { id: "L6-1", type: "trace", prompt: "티라노", answer: "티라노", image: "🦖" },
      { id: "L6-2", type: "dictation", prompt: "티라노", answer: "티라노", hint: "ㅌ__ㄴ_", image: "🦖" },
      { id: "L6-3", type: "trace", prompt: "랩터", answer: "랩터", image: "🦖" },
      { id: "L6-4", type: "quiz", prompt: "가장 유명한 육식 공룡은?", answer: "티라노", choices: ["티라노", "랩터", "스테고", "브라키"], image: "🦖" },
      { id: "L6-5", type: "dictation", prompt: "랩터", answer: "랩터", hint: "ㄹ_ㅌ_", image: "🦖" },
    ],
  },
  {
    id: 7,
    title: "육식 공룡 이름 쓰기 2",
    topic: "스피노, 알로 이름 쓰기",
    dino: "spinosaurus",
    story: "스피노사우루스는 등에 커다란 돛이 있는 공룡이에요.\n물에서 사냥하는 특별한 공룡이랍니다!",
    questions: [
      { id: "L7-1", type: "trace", prompt: "스피노", answer: "스피노", image: "🦖" },
      { id: "L7-2", type: "trace", prompt: "알로", answer: "알로", image: "🦖" },
      { id: "L7-3", type: "dictation", prompt: "스피노", answer: "스피노", hint: "ㅅ__ㄴ_", image: "🦖" },
      { id: "L7-4", type: "quiz", prompt: "등에 돛이 있는 공룡은?", answer: "스피노", choices: ["스피노", "알로", "티라노", "랩터"], image: "🦖" },
      { id: "L7-5", type: "dictation", prompt: "물고기", answer: "물고기", hint: "ㅁ_ㄱ_ㄱ_", image: "🐟" },
    ],
  },
  {
    id: 8,
    title: "초식 공룡 이름 쓰기",
    topic: "트리케라톱스, 스테고 이름 쓰기",
    dino: "triceratops",
    story: "트리케라톱스는 뿔이 세 개인 공룡이에요.\n\"나는 뿔로 나쁜 공룡을 쫓아내!\" 하고 으르렁거렸어요.",
    questions: [
      { id: "L8-1", type: "trace", prompt: "트리케라톱스", answer: "트리케라톱스", image: "🦕" },
      { id: "L8-2", type: "trace", prompt: "스테고", answer: "스테고", image: "🦕" },
      { id: "L8-3", type: "dictation", prompt: "뿔", answer: "뿔", image: "🦕" },
      { id: "L8-4", type: "quiz", prompt: "뿔이 세 개인 공룡은?", answer: "트리케라톱스", choices: ["트리케라톱스", "스테고", "안킬로", "파라"], image: "🦕" },
      { id: "L8-5", type: "dictation", prompt: "세 개", answer: "세 개", image: "3️⃣" },
    ],
  },
  {
    id: 9,
    title: "자동차와 공룡 1",
    topic: "탈것 이름 따라쓰기",
    dino: "giganotosaurus",
    story: "기가노토사우루스만큼 큰 트럭이 달려왔어요!\n공룡 세계에 자동차가 있었다면 어떨까요?",
    questions: [
      { id: "L9-1", type: "trace", prompt: "소방차", answer: "소방차", image: "🚒" },
      { id: "L9-2", type: "trace", prompt: "경찰차", answer: "경찰차", image: "🚓" },
      { id: "L9-3", type: "dictation", prompt: "트럭", answer: "트럭", hint: "ㅌ_ㄹ_", image: "🚛" },
      { id: "L9-4", type: "quiz", prompt: "불을 끄러 가는 차는?", answer: "소방차", choices: ["소방차", "경찰차", "택시", "버스"], image: "🚒" },
      { id: "L9-5", type: "dictation", prompt: "자동차", answer: "자동차", hint: "ㅈ_ㄷ_ㅊ_", image: "🚗" },
    ],
  },
  {
    id: 10,
    title: "동물 친구들",
    topic: "동물 이름 따라쓰기",
    dino: "deinonychus",
    story: "데이노니쿠스는 무리 지어 다니는 영리한 공룡이에요.\n현대의 어떤 동물들이 무리 지어 다닐까요?",
    questions: [
      { id: "L10-1", type: "trace", prompt: "사자", answer: "사자", image: "🦁" },
      { id: "L10-2", type: "trace", prompt: "코끼리", answer: "코끼리", image: "🐘" },
      { id: "L10-3", type: "dictation", prompt: "펭귄", answer: "펭귄", hint: "ㅍ_ㄱ_", image: "🐧" },
      { id: "L10-4", type: "dictation", prompt: "기린", answer: "기린", hint: "ㄱ__", image: "🦒" },
      { id: "L10-5", type: "quiz", prompt: "무리 지어 사냥하는 공룡은?", answer: "데이노니쿠스", choices: ["데이노니쿠스", "티라노", "브라키", "스테고"], image: "🦖" },
    ],
  },

  // ========== 11~15: 받아쓰기 강화 + 짧은 문장 ==========
  {
    id: 11,
    title: "공룡이 달려요",
    topic: "짧은 문장 따라쓰기",
    dino: "carnotaurus",
    story: "카르노타우루스는 모든 공룡 중 가장 빨리 달렸대요!\n오늘은 공룡이 하는 행동을 문장으로 써볼 거예요.",
    questions: [
      { id: "L11-1", type: "trace", prompt: "공룡이 달려요", answer: "공룡이 달려요", image: "🦖" },
      { id: "L11-2", type: "trace", prompt: "사자가 으르렁", answer: "사자가 으르렁", image: "🦁" },
      { id: "L11-3", type: "dictation", prompt: "달려요", answer: "달려요", image: "🦖" },
      { id: "L11-4", type: "dictation", prompt: "먹어요", answer: "먹어요", image: "🍖" },
      { id: "L11-5", type: "quiz", prompt: "가장 빠른 육식 공룡은?", answer: "카르노타우루스", choices: ["카르노타우루스", "티라노", "스피노", "브라키"], image: "🦖" },
    ],
  },
  {
    id: 12,
    title: "공룡의 몸",
    topic: "신체 부위 단어 쓰기",
    dino: "utahraptor",
    story: "유타랩터의 발톱은 칼처럼 날카로웠어요!\n공룡의 몸에 대해 배워봐요.",
    questions: [
      { id: "L12-1", type: "trace", prompt: "발톱", answer: "발톱", image: "🦖" },
      { id: "L12-2", type: "trace", prompt: "꼬리", answer: "꼬리", image: "🦕" },
      { id: "L12-3", type: "dictation", prompt: "이빨", answer: "이빨", image: "🦷" },
      { id: "L12-4", type: "dictation", prompt: "날개", answer: "날개", image: "🦅" },
      { id: "L12-5", type: "quiz", prompt: "날카로운 발톱을 가진 공룡은?", answer: "유타랩터", choices: ["유타랩터", "브라키", "스테고", "안킬로"], image: "🦖" },
    ],
  },
  {
    id: 13,
    title: "큰 공룡이 왔어요",
    topic: "문장 받아쓰기",
    dino: "brachiosaurus",
    story: "브라키오사우루스가 숲에서 나왔어요!\n키가 건물 4층만큼이나 크대요. 문장으로 표현해 봐요.",
    questions: [
      { id: "L13-1", type: "dictation", prompt: "큰 공룡이 왔어요", answer: "큰 공룡이 왔어요", image: "🦕" },
      { id: "L13-2", type: "dictation", prompt: "나무를 먹어요", answer: "나무를 먹어요", image: "🌲" },
      { id: "L13-3", type: "trace", prompt: "키가 커요", answer: "키가 커요", image: "🦕" },
      { id: "L13-4", type: "quiz", prompt: "가장 키가 큰 공룡은?", answer: "브라키오사우루스", choices: ["브라키오사우루스", "티라노", "벨로시랩터", "안킬로"], image: "🦕" },
      { id: "L13-5", type: "dictation", prompt: "높이 올라가요", answer: "높이 올라가요", image: "🦕" },
    ],
  },
  {
    id: 14,
    title: "바다의 공룡",
    topic: "바다 관련 단어",
    dino: "mosasaurus",
    story: "모사사우루스는 바다에서 살았던 무시무시한 포식자예요!\n고래보다 더 무서웠대요.",
    questions: [
      { id: "L14-1", type: "trace", prompt: "바다", answer: "바다", image: "🌊" },
      { id: "L14-2", type: "trace", prompt: "모사사우루스", answer: "모사사우루스", image: "🐋" },
      { id: "L14-3", type: "dictation", prompt: "헤엄쳐요", answer: "헤엄쳐요", image: "🏊" },
      { id: "L14-4", type: "dictation", prompt: "물속", answer: "물속", image: "🌊" },
      { id: "L14-5", type: "quiz", prompt: "바다에 살았던 공룡은?", answer: "모사사우루스", choices: ["모사사우루스", "티라노", "프테라노돈", "벨로시랩터"], image: "🐋" },
    ],
  },
  {
    id: 15,
    title: "하늘의 공룡",
    topic: "하늘/날씨 관련 단어",
    dino: "pteranodon",
    story: "프테라노돈은 하늘을 나는 거대한 파충류예요!\n날개 길이가 7미터나 됐대요.",
    questions: [
      { id: "L15-1", type: "trace", prompt: "하늘", answer: "하늘", image: "☁️" },
      { id: "L15-2", type: "trace", prompt: "프테라노돈", answer: "프테라노돈", image: "🦅" },
      { id: "L15-3", type: "dictation", prompt: "날아요", answer: "날아요", image: "🦅" },
      { id: "L15-4", type: "dictation", prompt: "바람이 불어요", answer: "바람이 불어요", image: "💨" },
      { id: "L15-5", type: "quiz", prompt: "하늘을 날았던 파충류는?", answer: "프테라노돈", choices: ["프테라노돈", "모사사우루스", "스피노", "안킬로"], image: "🦅" },
    ],
  },

  // ========== 16~20: 긴 문장 + 읽기 ==========
  {
    id: 16,
    title: "공룡 탐험 일기 1",
    topic: "일기 형태 문장 쓰기",
    dino: "trex",
    story: "오늘은 공룡 탐험 일기를 써볼 거예요!\n탐험가가 되어 공룡을 만난 이야기를 적어요.",
    questions: [
      { id: "L16-1", type: "dictation", prompt: "오늘 공룡을 봤어요", answer: "오늘 공룡을 봤어요", image: "📓" },
      { id: "L16-2", type: "dictation", prompt: "티라노가 으르렁거려요", answer: "티라노가 으르렁거려요", image: "🦖" },
      { id: "L16-3", type: "trace", prompt: "정말 무서웠어요", answer: "정말 무서웠어요", image: "😱" },
      { id: "L16-4", type: "read", prompt: "티라노사우루스는 이빨이 바나나만큼 컸어요.\n그래서 모든 공룡이 무서워했답니다.", answer: "이빨", image: "🦖", choices: ["이빨", "꼬리", "발톱", "뿔"] },
      { id: "L16-5", type: "dictation", prompt: "다음에 또 올 거예요", answer: "다음에 또 올 거예요", image: "📓" },
    ],
  },
  {
    id: 17,
    title: "공룡 VS 공룡",
    topic: "비교 문장 쓰기 (크다/작다, 빠르다/느리다)",
    dino: "giganotosaurus",
    story: "기가노토사우루스는 티라노보다 더 컸대요!\n공룡들을 비교하는 문장을 써봐요.",
    questions: [
      { id: "L17-1", type: "dictation", prompt: "기가노토가 더 커요", answer: "기가노토가 더 커요", image: "🦖" },
      { id: "L17-2", type: "dictation", prompt: "랩터가 더 빨라요", answer: "랩터가 더 빨라요", image: "🦖" },
      { id: "L17-3", type: "trace", prompt: "브라키가 더 높아요", answer: "브라키가 더 높아요", image: "🦕" },
      { id: "L17-4", type: "quiz", prompt: "티라노보다 더 큰 공룡은?", answer: "기가노토사우루스", choices: ["기가노토사우루스", "벨로시랩터", "데이노니쿠스", "케라토"], image: "🦖" },
      { id: "L17-5", type: "dictation", prompt: "안킬로가 더 단단해요", answer: "안킬로가 더 단단해요", image: "🦕" },
    ],
  },
  {
    id: 18,
    title: "공룡 뉴스",
    topic: "설명 문장 읽고 쓰기",
    dino: "megalosaurus",
    story: "메갈로사우루스는 세계 최초로 발견된 공룡이에요!\n1824년에 이름이 붙여졌답니다.",
    questions: [
      { id: "L18-1", type: "read", prompt: "메갈로사우루스는 세계에서 가장 먼저 발견된 공룡이에요.\n1824년에 영국에서 발견되었어요.", answer: "영국", image: "🦖", choices: ["영국", "한국", "미국", "일본"] },
      { id: "L18-2", type: "dictation", prompt: "처음 발견된 공룡", answer: "처음 발견된 공룡", image: "🦖" },
      { id: "L18-3", type: "trace", prompt: "메갈로사우루스", answer: "메갈로사우루스", image: "🦖" },
      { id: "L18-4", type: "dictation", prompt: "화석을 발견했어요", answer: "화석을 발견했어요", image: "🦴" },
      { id: "L18-5", type: "quiz", prompt: "최초로 발견된 공룡은?", answer: "메갈로사우루스", choices: ["메갈로사우루스", "티라노", "브라키", "스테고"], image: "🦖" },
    ],
  },
  {
    id: 19,
    title: "공룡 요리사",
    topic: "음식 관련 단어 + 문장",
    dino: "baryonyx",
    story: "바리오닉스는 큰 발톱으로 물고기를 잡아먹었어요!\n만약 공룡이 요리를 한다면 뭘 만들까요?",
    questions: [
      { id: "L19-1", type: "trace", prompt: "물고기 구이", answer: "물고기 구이", image: "🐟" },
      { id: "L19-2", type: "dictation", prompt: "맛있는 고기", answer: "맛있는 고기", image: "🍖" },
      { id: "L19-3", type: "dictation", prompt: "바리오닉스가 잡았어요", answer: "바리오닉스가 잡았어요", image: "🦖" },
      { id: "L19-4", type: "trace", prompt: "배가 고파요", answer: "배가 고파요", image: "😋" },
      { id: "L19-5", type: "quiz", prompt: "물고기를 잡아먹는 공룡은?", answer: "바리오닉스", choices: ["바리오닉스", "브라키", "안킬로", "파라"], image: "🦖" },
    ],
  },
  {
    id: 20,
    title: "공룡 운동회",
    topic: "행동 동사 받아쓰기",
    dino: "deinonychus",
    story: "공룡들이 운동회를 열었어요!\n달리기, 수영, 날기... 누가 이길까요?",
    questions: [
      { id: "L20-1", type: "dictation", prompt: "달리기를 해요", answer: "달리기를 해요", image: "🏃" },
      { id: "L20-2", type: "dictation", prompt: "수영을 해요", answer: "수영을 해요", image: "🏊" },
      { id: "L20-3", type: "dictation", prompt: "점프를 해요", answer: "점프를 해요", image: "🦘" },
      { id: "L20-4", type: "dictation", prompt: "숨바꼭질을 해요", answer: "숨바꼭질을 해요", image: "🙈" },
      { id: "L20-5", type: "quiz", prompt: "무리 지어 사냥하는 공룡은?", answer: "데이노니쿠스", choices: ["데이노니쿠스", "브라키", "스테고", "안킬로"], image: "🦖" },
    ],
  },
];

export function getKoreanLesson(id: number): KoreanLesson | undefined {
  return KOREAN_LESSONS.find(l => l.id === id);
}
