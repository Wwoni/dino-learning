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
  period?: string;    // 시대
  description?: string; // 상세 설명 (한국어)
  descriptionEn?: string; // 상세 설명 (영어)
  image?: string;     // 실제 이미지 URL
}

export const DINOS: Dino[] = [
  // --- 육식 공룡 ---
  {
    id: "trex", ko: "티라노사우루스", en: "Tyrannosaurus Rex", emoji: "🦖",
    diet: "carnivore", size: "12m", period: "백악기 후기",
    fact: "이빨이 바나나만큼 컸어요!", factEn: "Its teeth were as big as bananas!",
    description: "백악기 후기(약 6,800만~6,600만 년 전)에 살았던 최대 육식 공룡 중 하나입니다. 길이 약 12m, 무게 약 9톤에 달했으며, 15cm가 넘는 거대한 이빨로 뼈까지 부숴 먹을 수 있었습니다. 앞다리가 매우 짧았지만, 턱의 힘은 동물 역사상 가장 강력했습니다.",
    descriptionEn: "One of the largest carnivorous dinosaurs that lived during the Late Cretaceous period. It was about 12m long, weighed up to 9 tons, and had enormous teeth over 15cm long that could crush bone.",
    image: "https://static.wikia.nocookie.net/jurassicpark/images/e/e7/Jurassic_World_Rexy.png",
  },
  {
    id: "velociraptor", ko: "벨로시랩터", en: "Velociraptor", emoji: "🦖",
    diet: "carnivore", size: "2m", period: "백악기 후기",
    fact: "아주 빠르고 영리한 사냥꾼이었어요!", factEn: "It was a very fast and smart hunter!",
    description: "실제로는 칠면조 크기(약 2m)의 작은 공룡이었지만, 매우 영리하고 빠른 사냥꾼이었습니다. 뒷발에 큰 낫 모양의 발톱이 있었고, 깃털이 있었을 것으로 추정됩니다. 무리를 지어 사냥했을 가능성이 높습니다.",
    descriptionEn: "Actually a turkey-sized (about 2m) dinosaur that was very intelligent and fast. It had a large sickle-shaped claw on each foot and likely had feathers.",
    image: "https://static.wikia.nocookie.net/jurassicpark/images/a/ac/VelociraptorInfoGraphic.png",
  },
  {
    id: "spinosaurus", ko: "스피노사우루스", en: "Spinosaurus", emoji: "🦖",
    diet: "carnivore", size: "15m", period: "백악기 중기",
    fact: "등에 큰 돛이 있고 물고기를 잡아먹었어요!", factEn: "It had a big sail on its back and ate fish!",
    description: "역사상 가장 큰 육식 공룡으로, 길이 약 15m에 달했습니다. 등에 있는 거대한 돛은 높이가 2m까지 자랐습니다. 주로 물속에서 생활하며 물고기를 사냥했던 반수생 공룡입니다. 악어와 비슷한 주둥이를 가졌습니다.",
    descriptionEn: "The largest known carnivorous dinosaur at about 15m long. Its iconic sail could grow up to 2m high. It was a semi-aquatic dinosaur that mainly hunted fish.",
    image: "https://static.wikia.nocookie.net/jurassicpark/images/3/30/Jurassic_World_Spinosaurus.png",
  },
  {
    id: "allosaurus", ko: "알로사우루스", en: "Allosaurus", emoji: "🦖",
    diet: "carnivore", size: "9m", period: "쥐라기 후기",
    fact: "쥐라기 시대 최강의 사냥꾼이었어요!", factEn: "It was the top hunter of the Jurassic!",
    description: "쥐라기 후기(약 1억 5,500만 년 전)의 최상위 포식자였습니다. 길이 약 9m에 날카로운 톱니 모양 이빨을 가졌으며, 큰 초식 공룡도 사냥했습니다.",
    descriptionEn: "The top predator of the Late Jurassic period. About 9m long with serrated teeth, it hunted even large herbivorous dinosaurs.",
    image: "https://static.wikia.nocookie.net/jurassicpark/images/1/16/AllosaurusPic.png",
  },
  {
    id: "carnotaurus", ko: "카르노타우루스", en: "Carnotaurus", emoji: "🦖",
    diet: "carnivore", size: "8m", period: "백악기 후기",
    fact: "머리에 뿔이 있고 엄청 빨랐어요!", factEn: "It had horns and was super fast!",
    description: "이름은 '고기를 먹는 황소'라는 뜻으로, 눈 위에 두 개의 뿔이 있었습니다. 길이 약 8m로 매우 빠르게 달릴 수 있었고, 앞다리가 티라노보다도 더 작았습니다.",
    descriptionEn: "Its name means 'meat-eating bull' due to the two horns above its eyes. About 8m long, it could run very fast.",
    image: "https://static.wikia.nocookie.net/jurassicpark/images/d/d3/Carnotaurus_JWD.png",
  },
  {
    id: "dilophosaurus", ko: "딜로포사우루스", en: "Dilophosaurus", emoji: "🦖",
    diet: "carnivore", size: "6m", period: "쥐라기 초기",
    fact: "머리에 두 개의 볏이 있었어요!", factEn: "It had two crests on its head!",
    description: "쥐라기 초기(약 1억 9,300만 년 전)에 살았으며, 머리에 두 개의 반달 모양 볏이 특징입니다. 길이 약 6m로 초기 대형 육식 공룡 중 하나였습니다.",
    descriptionEn: "Lived in the Early Jurassic with two distinctive half-moon shaped crests on its head. About 6m long.",
    image: "https://static.wikia.nocookie.net/jurassicpark/images/1/15/DilophosaurusInfoGraphic.png",
  },
  {
    id: "giganotosaurus", ko: "기가노토사우루스", en: "Giganotosaurus", emoji: "🦖",
    diet: "carnivore", size: "13m", period: "백악기 후기",
    fact: "티라노보다 더 큰 사냥꾼이었어요!", factEn: "It was even bigger than T-Rex!",
    description: "남아메리카에서 발견된 거대한 육식 공룡으로, 길이 약 13m로 티라노사우루스보다 더 길었습니다. 하지만 뇌는 바나나 크기밖에 안 됐어요!",
    descriptionEn: "A giant carnivore from South America, about 13m long — even longer than T-Rex. But its brain was only the size of a banana!",
    image: "https://static.wikia.nocookie.net/jurassicpark/images/1/1a/GiganotosaurusInfoGraphic.png",
  },
  {
    id: "utahraptor", ko: "유타랩터", en: "Utahraptor", emoji: "🦖",
    diet: "carnivore", size: "5m", period: "백악기 초기",
    fact: "발톱이 칼처럼 날카로웠어요!", factEn: "Its claws were sharp like swords!",
    description: "드로마에오사우루스과 중 가장 큰 종으로, 길이 약 5m에 뒷발 발톱이 22cm나 됐습니다. 이 발톱으로 먹잇감을 베어 사냥했습니다.",
    descriptionEn: "The largest of the dromaeosaurs at about 5m long with 22cm sickle claws on its hind feet.",
    image: "https://static.wikia.nocookie.net/jurassicpark/images/7/7d/Utahraptor-detail-header.png",
  },
  {
    id: "ceratosaurus", ko: "케라토사우루스", en: "Ceratosaurus", emoji: "🦖",
    diet: "carnivore", size: "6m", period: "쥐라기 후기",
    fact: "코에 뿔이 하나 있었어요!", factEn: "It had a horn on its nose!",
    description: "코 위에 큰 뿔이 있는 독특한 육식 공룡입니다. 길이 약 6m로 알로사우루스와 같은 시대에 살았지만 더 작았습니다.",
    descriptionEn: "A distinctive carnivore with a large horn on its nose. About 6m long, it lived alongside Allosaurus.",
  },
  {
    id: "baryonyx", ko: "바리오닉스", en: "Baryonyx", emoji: "🦖",
    diet: "carnivore", size: "8m", period: "백악기 초기",
    fact: "큰 발톱으로 물고기를 잡았어요!", factEn: "It caught fish with its big claw!",
    description: "스피노사우루스의 사촌으로, 긴 주둥이와 큰 발톱으로 물고기를 잡아먹었습니다. 위장에서 물고기 비늘 화석이 발견되었습니다.",
    descriptionEn: "A relative of Spinosaurus that caught fish with its long snout and large claw. Fish scale fossils were found in its stomach.",
    image: "https://static.wikia.nocookie.net/jurassicpark/images/8/8a/BaryonyxInfoGraphic.png",
  },
  {
    id: "deinonychus", ko: "데이노니쿠스", en: "Deinonychus", emoji: "🦖",
    diet: "carnivore", size: "3m", period: "백악기 초기",
    fact: "무리 지어 사냥하는 똑똑한 공룡이었어요!", factEn: "It hunted in packs and was very clever!",
    description: "이름은 '무서운 발톱'이라는 뜻입니다. 길이 약 3m로 무리를 지어 자기보다 훨씬 큰 공룡도 사냥했습니다. 영화 쥐라기 공원의 '랩터'는 사실 이 공룡을 모델로 했습니다.",
    descriptionEn: "Its name means 'terrible claw'. About 3m long, it hunted in packs and could take down much larger dinosaurs. The 'raptors' in Jurassic Park were actually based on this dinosaur.",
  },
  {
    id: "megalosaurus", ko: "메갈로사우루스", en: "Megalosaurus", emoji: "🦖",
    diet: "carnivore", size: "9m", period: "쥐라기 중기",
    fact: "세계 최초로 발견된 공룡이에요!", factEn: "It was the first dinosaur ever discovered!",
    description: "1824년에 최초로 학명이 붙여진 공룡입니다. 영국에서 발견되었으며, 길이 약 9m의 대형 육식 공룡이었습니다.",
    descriptionEn: "The first dinosaur to be scientifically named in 1824. Discovered in England, it was about 9m long.",
  },

  // --- 초식 공룡 ---
  {
    id: "triceratops", ko: "트리케라톱스", en: "Triceratops", emoji: "🦕",
    diet: "herbivore", size: "9m", period: "백악기 후기",
    fact: "뿔이 세 개나 있었어요!", factEn: "It had three horns!",
    description: "이름은 '세 개의 뿔 얼굴'이라는 뜻입니다. 두 개의 긴 뿔과 코 위의 짧은 뿔, 그리고 큰 프릴(목 방패)이 특징입니다. 티라노사우루스와 같은 시대에 살았으며 가장 인기 있는 초식 공룡입니다.",
    descriptionEn: "Its name means 'three-horned face'. It had two long brow horns, a shorter nose horn, and a large frill. It lived alongside T-Rex.",
    image: "https://static.wikia.nocookie.net/jurassicpark/images/c/c2/TriceratopsInfoGraphic.png",
  },
  {
    id: "brachiosaurus", ko: "브라키오사우루스", en: "Brachiosaurus", emoji: "🦕",
    diet: "herbivore", size: "25m", period: "쥐라기 후기",
    fact: "키가 건물 4층만큼 높았어요!", factEn: "It was as tall as a 4-story building!",
    description: "길이 25m, 높이 13m에 달하는 거대한 초식 공룡입니다. 앞다리가 뒷다리보다 길어서 '팔 도마뱀'이라는 이름이 붙었습니다. 하루에 200kg 이상의 식물을 먹었을 것으로 추정됩니다.",
    descriptionEn: "A massive herbivore at 25m long and 13m tall. Its front legs were longer than its back legs, giving it its name meaning 'arm lizard'. It ate over 200kg of plants daily.",
    image: "https://static.wikia.nocookie.net/jurassicpark/images/4/46/BrachiosaurusInfoGraphic.png",
  },
  {
    id: "stegosaurus", ko: "스테고사우루스", en: "Stegosaurus", emoji: "🦕",
    diet: "herbivore", size: "9m", period: "쥐라기 후기",
    fact: "등에 큰 판이 있고 꼬리에 가시가 있었어요!", factEn: "It had big plates on its back and spikes on its tail!",
    description: "등에 두 줄의 큰 골판이 있고, 꼬리 끝에 4개의 날카로운 가시(태고사우루스)가 있었습니다. 몸은 9m로 컸지만 뇌는 호두만 했습니다.",
    descriptionEn: "Had two rows of large bony plates on its back and four sharp spikes on its tail. Despite being 9m long, its brain was only walnut-sized.",
    image: "https://static.wikia.nocookie.net/jurassicpark/images/a/af/StegosaurusInfoGraphic.png",
  },
  {
    id: "ankylosaurus", ko: "안킬로사우루스", en: "Ankylosaurus", emoji: "🦕",
    diet: "herbivore", size: "7m", period: "백악기 후기",
    fact: "꼬리 끝에 큰 곤봉이 있었어요!", factEn: "It had a big club on its tail!",
    description: "온몸이 갑옷처럼 단단한 골판으로 덮여 있었고, 꼬리 끝에 거대한 곤봉이 있었습니다. 이 곤봉으로 티라노사우루스의 다리도 부러뜨릴 수 있었습니다.",
    descriptionEn: "Its entire body was covered in armor-like bony plates, with a massive club on its tail that could break even a T-Rex's legs.",
    image: "https://static.wikia.nocookie.net/jurassicpark/images/f/fb/AnkylosaurusInfoGraphic.png",
  },
  {
    id: "parasaurolophus", ko: "파라사우롤로푸스", en: "Parasaurolophus", emoji: "🦕",
    diet: "herbivore", size: "10m", period: "백악기 후기",
    fact: "머리의 긴 관으로 소리를 냈어요!", factEn: "It made sounds with the long tube on its head!",
    description: "머리 뒤로 길게 뻗은 관 모양의 볏이 특징입니다. 이 볏은 속이 비어 있어 트럼펫처럼 소리를 낼 수 있었고, 무리와 소통하는 데 사용했습니다.",
    descriptionEn: "Known for its long tube-like crest extending from its head. The hollow crest could produce trumpet-like sounds to communicate with its herd.",
    image: "https://static.wikia.nocookie.net/jurassicpark/images/b/b2/ParasaurolophusInfoGraphic.png",
  },
  {
    id: "pachycephalosaurus", ko: "파키케팔로사우루스", en: "Pachycephalosaurus", emoji: "🦕",
    diet: "herbivore", size: "5m", period: "백악기 후기",
    fact: "머리가 돌처럼 단단했어요!", factEn: "Its head was as hard as a rock!",
    description: "이름은 '두꺼운 머리 도마뱀'이라는 뜻입니다. 두개골 뼈가 25cm나 되어 머리로 박치기를 했을 것으로 추정됩니다. 길이 약 5m의 두 발로 걷는 초식 공룡입니다.",
    descriptionEn: "Its name means 'thick-headed lizard'. Its skull bone was 25cm thick, likely used for head-butting. A 5m long bipedal herbivore.",
  },

  // --- 익룡/해양 ---
  {
    id: "pteranodon", ko: "프테라노돈", en: "Pteranodon", emoji: "🦅",
    diet: "carnivore", size: "날개 7m", period: "백악기 후기",
    fact: "하늘을 나는 거대한 파충류였어요!", factEn: "It was a giant flying reptile!",
    description: "공룡이 아닌 익룡(날아다니는 파충류)입니다. 날개 폭이 7m에 달했고, 이빨이 없는 부리로 물고기를 잡아먹었습니다. 머리 뒤로 긴 볏이 있었습니다.",
    descriptionEn: "Not a dinosaur but a pterosaur (flying reptile). Its wingspan reached 7m and it caught fish with its toothless beak.",
    image: "https://static.wikia.nocookie.net/jurassicpark/images/5/5d/PteranodonInfoGraphic.png",
  },
  {
    id: "mosasaurus", ko: "모사사우루스", en: "Mosasaurus", emoji: "🐋",
    diet: "carnivore", size: "15m", period: "백악기 후기",
    fact: "바다의 최강 포식자였어요!", factEn: "It was the top predator of the sea!",
    description: "공룡이 아닌 해양 파충류입니다. 길이 15m에 달하는 바다의 최강 포식자로, 상어, 물고기, 다른 해양 파충류까지 잡아먹었습니다. 현재의 왕도마뱀과 친척입니다.",
    descriptionEn: "A marine reptile, not a dinosaur. At 15m long, it was the top ocean predator that ate sharks, fish, and other marine reptiles.",
    image: "https://static.wikia.nocookie.net/jurassicpark/images/d/d2/MosasaurusInfoGraphic.png",
  },
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
