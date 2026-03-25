// TTS 유틸리티 — Web Speech API 래퍼

export function speak(text: string, lang: "ko-KR" | "en-US" = "ko-KR", rate = 0.7): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      reject(new Error("TTS not supported"));
      return;
    }
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang;
    utter.rate = rate;
    // 영어: 낮은 톤 (0.8), 한국어: 자연스러운 톤 (1.0)
    utter.pitch = lang === "ko-KR" ? 1.0 : 0.8;
    utter.onend = () => resolve();
    utter.onerror = (e) => reject(e);
    window.speechSynthesis.speak(utter);
  });
}

export function speakKorean(text: string, rate = 0.7) {
  return speak(text, "ko-KR", rate);
}

export function speakEnglish(text: string, rate = 0.65) {
  return speak(text, "en-US", rate);
}
