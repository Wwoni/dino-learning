// 공룡 데이터베이스 — 학습 전반에서 사용

export interface Dino {
  id: string;
  ko: string;         // 한국어 이름
  en: string;         // 영어 이름
  emoji: string;
  diet: "carnivore" | "herbivore" | "omnivore";
  size: string;       // 간단한 크기 설명
  fact: string;       // 재미있는 사실 (한국어)
  factEn: string;     // 재미있는 사실 (영어)
}

export const DINOS: Dino[] = [
  // --- 육식 공룡 (비중 높게) ---
  { id: "trex", ko: "티라노사우루스", en: "Tyrannosaurus", emoji: "🦖", diet: "carnivore", size: "12m", fact: "이빨이 바나나만큼 컸어요!", factEn: "Its teeth were as big as bananas!" },
  { id: "velociraptor", ko: "벨로시랩터", en: "Velociraptor", emoji: "🦖", diet: "carnivore", size: "2m", fact: "아주 빠르고 영리한 사냥꾼이었어요!", factEn: "It was a very fast and smart hunter!" },
  { id: "spinosaurus", ko: "스피노사우루스", en: "Spinosaurus", emoji: "🦖", diet: "carnivore", size: "15m", fact: "등에 큰 돛이 있고 물고기를 잡아먹었어요!", factEn: "It had a big sail on its back and ate fish!" },
  { id: "allosaurus", ko: "알로사우루스", en: "Allosaurus", emoji: "🦖", diet: "carnivore", size: "9m", fact: "쥐라기 시대 최강의 사냥꾼이었어요!", factEn: "It was the top hunter of the Jurassic!" },
  { id: "carnotaurus", ko: "카르노타우루스", en: "Carnotaurus", emoji: "🦖", diet: "carnivore", size: "8m", fact: "머리에 뿔이 있고 엄청 빨랐어요!", factEn: "It had horns and was super fast!" },
  { id: "dilophosaurus", ko: "딜로포사우루스", en: "Dilophosaurus", emoji: "🦖", diet: "carnivore", size: "6m", fact: "머리에 두 개의 볏이 있었어요!", factEn: "It had two crests on its head!" },
  { id: "giganotosaurus", ko: "기가노토사우루스", en: "Giganotosaurus", emoji: "🦖", diet: "carnivore", size: "13m", fact: "티라노보다 더 큰 사냥꾼이었어요!", factEn: "It was even bigger than T-Rex!" },
  { id: "utahraptor", ko: "유타랩터", en: "Utahraptor", emoji: "🦖", diet: "carnivore", size: "5m", fact: "발톱이 칼처럼 날카로웠어요!", factEn: "Its claws were sharp like swords!" },
  { id: "ceratosaurus", ko: "케라토사우루스", en: "Ceratosaurus", emoji: "🦖", diet: "carnivore", size: "6m", fact: "코에 뿔이 하나 있었어요!", factEn: "It had a horn on its nose!" },
  { id: "baryonyx", ko: "바리오닉스", en: "Baryonyx", emoji: "🦖", diet: "carnivore", size: "8m", fact: "큰 발톱으로 물고기를 잡았어요!", factEn: "It caught fish with its big claw!" },
  { id: "deinonychus", ko: "데이노니쿠스", en: "Deinonychus", emoji: "🦖", diet: "carnivore", size: "3m", fact: "무리 지어 사냥하는 똑똑한 공룡이었어요!", factEn: "It hunted in packs and was very clever!" },
  { id: "megalosaurus", ko: "메갈로사우루스", en: "Megalosaurus", emoji: "🦖", diet: "carnivore", size: "9m", fact: "세계 최초로 발견된 공룡이에요!", factEn: "It was the first dinosaur ever discovered!" },

  // --- 초식 공룡 ---
  { id: "triceratops", ko: "트리케라톱스", en: "Triceratops", emoji: "🦕", diet: "herbivore", size: "9m", fact: "뿔이 세 개나 있었어요!", factEn: "It had three horns!" },
  { id: "brachiosaurus", ko: "브라키오사우루스", en: "Brachiosaurus", emoji: "🦕", diet: "herbivore", size: "25m", fact: "키가 건물 4층만큼 높았어요!", factEn: "It was as tall as a 4-story building!" },
  { id: "stegosaurus", ko: "스테고사우루스", en: "Stegosaurus", emoji: "🦕", diet: "herbivore", size: "9m", fact: "등에 큰 판이 있고 꼬리에 가시가 있었어요!", factEn: "It had big plates on its back and spikes on its tail!" },
  { id: "ankylosaurus", ko: "안킬로사우루스", en: "Ankylosaurus", emoji: "🦕", diet: "herbivore", size: "7m", fact: "꼬리 끝에 큰 곤봉이 있었어요!", factEn: "It had a big club on its tail!" },
  { id: "parasaurolophus", ko: "파라사우롤로푸스", en: "Parasaurolophus", emoji: "🦕", diet: "herbivore", size: "10m", fact: "머리의 긴 관으로 소리를 냈어요!", factEn: "It made sounds with the long tube on its head!" },
  { id: "pachycephalosaurus", ko: "파키케팔로사우루스", en: "Pachycephalosaurus", emoji: "🦕", diet: "herbivore", size: "5m", fact: "머리가 돌처럼 단단했어요!", factEn: "Its head was as hard as a rock!" },

  // --- 익룡/해양 ---
  { id: "pteranodon", ko: "프테라노돈", en: "Pteranodon", emoji: "🦅", diet: "carnivore", size: "날개 7m", fact: "하늘을 나는 거대한 파충류였어요!", factEn: "It was a giant flying reptile!" },
  { id: "mosasaurus", ko: "모사사우루스", en: "Mosasaurus", emoji: "🐋", diet: "carnivore", size: "15m", fact: "바다의 최강 포식자였어요!", factEn: "It was the top predator of the sea!" },
];

export const CARNIVORES = DINOS.filter(d => d.diet === "carnivore");
export const HERBIVORES = DINOS.filter(d => d.diet === "herbivore");

export function getDino(id: string) {
  return DINOS.find(d => d.id === id);
}

export function getRandomDinos(count: number, diet?: "carnivore" | "herbivore"): Dino[] {
  const pool = diet ? DINOS.filter(d => d.diet === diet) : DINOS;
  return [...pool].sort(() => Math.random() - 0.5).slice(0, count);
}
