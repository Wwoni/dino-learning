// TTS 유틸리티 — Web Speech API 래퍼

function findVoice(lang: string, preferred: string[]): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  // 선호 음성 이름 매칭 (부분 일치)
  for (const name of preferred) {
    const match = voices.find((v) => v.name.includes(name) && v.lang.startsWith(lang));
    if (match) return match;
  }
  // lang 매칭 폴백
  return voices.find((v) => v.lang.startsWith(lang)) || null;
}

export function speak(text: string, lang: "ko-KR" | "en-GB" = "ko-KR", rate = 0.7): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      reject(new Error("TTS not supported"));
      return;
    }
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang;
    utter.rate = rate;

    if (lang === "en-GB") {
      // 영국식 영어: 자연스럽고 깔끔한 목소리 우선
      const voice = findVoice("en-GB", [
        "Daniel",       // macOS/iOS 영국 남성 (자연스러운 톤)
        "Oliver",       // macOS 영국 남성
        "Google UK English Male",
        "Google UK English Female",
      ]);
      if (voice) utter.voice = voice;
      utter.pitch = 1.0;
    } else {
      utter.pitch = 1.0;
    }

    utter.onend = () => resolve();
    utter.onerror = (e) => reject(e);
    window.speechSynthesis.speak(utter);
  });
}

export function speakKorean(text: string, rate = 0.7) {
  return speak(text, "ko-KR", rate);
}

export function speakEnglish(text: string, rate = 0.7) {
  return speak(text, "en-GB", rate);
}
