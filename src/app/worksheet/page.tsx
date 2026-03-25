"use client";

import { useState } from "react";

type WorksheetType = "korean-trace" | "korean-dictation" | "math-addition" | "math-subtraction" | "english-trace" | "english-words";

interface WorksheetOption {
  key: WorksheetType;
  label: string;
  emoji: string;
  color: string;
  desc: string;
}

const WORKSHEETS: WorksheetOption[] = [
  { key: "korean-trace", label: "한글 따라쓰기", emoji: "✏️", color: "bg-blue-100 border-blue-300", desc: "공룡·동물·자동차 단어 따라쓰기" },
  { key: "korean-dictation", label: "한글 받아쓰기", emoji: "📝", color: "bg-blue-100 border-blue-300", desc: "빈칸에 알맞은 글자 쓰기" },
  { key: "math-addition", label: "덧셈 연습", emoji: "➕", color: "bg-green-100 border-green-300", desc: "공룡알·동물 세기 덧셈" },
  { key: "math-subtraction", label: "뺄셈 연습", emoji: "➖", color: "bg-green-100 border-green-300", desc: "자동차·공룡 뺄셈 문제" },
  { key: "english-trace", label: "영어 따라쓰기", emoji: "🔤", color: "bg-purple-100 border-purple-300", desc: "알파벳·영단어 따라쓰기" },
  { key: "english-words", label: "영단어 퀴즈", emoji: "🖼️", color: "bg-purple-100 border-purple-300", desc: "그림 보고 영단어 쓰기" },
];

const KOREAN_TRACE_WORDS = [
  { word: "공룡", emoji: "🦕" }, { word: "사자", emoji: "🦁" }, { word: "자동차", emoji: "🚗" },
  { word: "코끼리", emoji: "🐘" }, { word: "버스", emoji: "🚌" }, { word: "펭귄", emoji: "🐧" },
  { word: "소방차", emoji: "🚒" }, { word: "트럭", emoji: "🚛" }, { word: "하마", emoji: "🦛" },
  { word: "기린", emoji: "🦒" },
];

const ENGLISH_TRACE_WORDS = [
  { word: "DINO", emoji: "🦕" }, { word: "LION", emoji: "🦁" }, { word: "CAR", emoji: "🚗" },
  { word: "BUS", emoji: "🚌" }, { word: "DOG", emoji: "🐶" }, { word: "CAT", emoji: "🐱" },
  { word: "EGG", emoji: "🥚" }, { word: "TAXI", emoji: "🚕" }, { word: "FISH", emoji: "🐟" },
  { word: "BIRD", emoji: "🐦" },
];

function buildWorksheetHTML(type: WorksheetType): string {
  const style = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: 'Noto Sans KR', sans-serif; padding: 20mm; color: #333; }
      h1 { font-size: 22px; text-align: center; margin-bottom: 8px; }
      .info { font-size: 11px; text-align: center; margin-bottom: 16px; color: #888; }
      hr { border: none; border-top: 1px solid #ddd; margin: 12px 0; }
      .row { display: flex; align-items: center; gap: 12px; margin: 10px 0; padding: 8px 0; }
      .num { font-size: 14px; font-weight: bold; width: 24px; text-align: right; }
      .emoji { font-size: 24px; }
      .guide { font-size: 22px; color: #ccc; font-weight: bold; width: 120px; text-align: center; }
      .blank { border-bottom: 2px dashed #aaa; width: 120px; height: 30px; }
      .problem { font-size: 20px; font-weight: bold; }
      .hint { font-size: 8px; color: #ddd; margin-left: 8px; }
      .section-title { font-size: 15px; font-weight: bold; margin-bottom: 12px; color: #555; }
    </style>
  `;

  let body = "";

  if (type === "korean-trace") {
    body = `<h1>🦕 탐험대장 워크시트</h1>
      <div class="info">이름: ________________&nbsp;&nbsp;&nbsp;&nbsp;날짜: ____년 ____월 ____일</div><hr>
      <div class="section-title">한글 따라쓰기 - 단어를 보고 따라 써보세요!</div>`;
    KOREAN_TRACE_WORDS.forEach((item, i) => {
      body += `<div class="row">
        <span class="num">${i + 1}.</span>
        <span class="emoji">${item.emoji}</span>
        <span class="guide">${item.word}</span>
        <span class="blank"></span>
      </div>`;
    });
  }

  if (type === "korean-dictation") {
    const words = ["티라노", "기린", "소방차", "악어", "경찰차", "원숭이", "공룡알", "화석", "코끼리", "트럭"];
    body = `<h1>🦕 탐험대장 워크시트</h1>
      <div class="info">이름: ________________&nbsp;&nbsp;&nbsp;&nbsp;날짜: ____년 ____월 ____일</div><hr>
      <div class="section-title">한글 받아쓰기 - 소리를 듣고 써보세요!</div>`;
    words.forEach((word, i) => {
      body += `<div class="row">
        <span class="num">${i + 1}.</span>
        <span class="blank" style="width:180px;"></span>
        <span class="hint">${word}</span>
      </div>`;
    });
  }

  if (type === "math-addition") {
    const problems = [
      { a: 2, b: 3 }, { a: 4, b: 2 }, { a: 1, b: 5 }, { a: 3, b: 4 }, { a: 5, b: 3 },
      { a: 6, b: 2 }, { a: 4, b: 4 }, { a: 7, b: 2 }, { a: 3, b: 6 }, { a: 5, b: 5 },
    ];
    body = `<h1>🦕 탐험대장 워크시트</h1>
      <div class="info">이름: ________________&nbsp;&nbsp;&nbsp;&nbsp;날짜: ____년 ____월 ____일</div><hr>
      <div class="section-title">덧셈 연습 - 더하기를 풀어보세요!</div>`;
    problems.forEach((p, i) => {
      body += `<div class="row">
        <span class="num">${i + 1}.</span>
        <span class="problem">${p.a} + ${p.b} = ______</span>
      </div>`;
    });
  }

  if (type === "math-subtraction") {
    const problems = [
      { a: 5, b: 2 }, { a: 7, b: 3 }, { a: 8, b: 4 }, { a: 6, b: 1 }, { a: 9, b: 5 },
      { a: 10, b: 3 }, { a: 7, b: 4 }, { a: 8, b: 6 }, { a: 9, b: 2 }, { a: 10, b: 7 },
    ];
    body = `<h1>🦕 탐험대장 워크시트</h1>
      <div class="info">이름: ________________&nbsp;&nbsp;&nbsp;&nbsp;날짜: ____년 ____월 ____일</div><hr>
      <div class="section-title">뺄셈 연습 - 빼기를 풀어보세요!</div>`;
    problems.forEach((p, i) => {
      body += `<div class="row">
        <span class="num">${i + 1}.</span>
        <span class="problem">${p.a} − ${p.b} = ______</span>
      </div>`;
    });
  }

  if (type === "english-trace") {
    body = `<h1>🦕 Explorer Worksheet</h1>
      <div class="info">Name: ________________&nbsp;&nbsp;&nbsp;&nbsp;Date: ____/____/____</div><hr>
      <div class="section-title">English Tracing - Write the words!</div>`;
    ENGLISH_TRACE_WORDS.forEach((item, i) => {
      body += `<div class="row">
        <span class="num">${i + 1}.</span>
        <span class="emoji">${item.emoji}</span>
        <span class="guide" style="font-family:Arial,sans-serif;">${item.word}</span>
        <span class="blank"></span>
      </div>`;
    });
  }

  if (type === "english-words") {
    const items = [
      { emoji: "🦕", answer: "Dinosaur" }, { emoji: "🦁", answer: "Lion" },
      { emoji: "🚗", answer: "Car" }, { emoji: "🐘", answer: "Elephant" },
      { emoji: "🚌", answer: "Bus" }, { emoji: "🦖", answer: "T-Rex" },
      { emoji: "🐧", answer: "Penguin" }, { emoji: "🚒", answer: "Fire truck" },
      { emoji: "🦒", answer: "Giraffe" }, { emoji: "🐊", answer: "Alligator" },
    ];
    body = `<h1>🦕 Explorer Worksheet</h1>
      <div class="info">Name: ________________&nbsp;&nbsp;&nbsp;&nbsp;Date: ____/____/____</div><hr>
      <div class="section-title">English Quiz - Write the word for each picture!</div>`;
    items.forEach((item, i) => {
      body += `<div class="row">
        <span class="num">${i + 1}.</span>
        <span class="emoji">${item.emoji}</span>
        <span class="blank" style="width:160px;"></span>
        <span class="hint">${item.answer}</span>
      </div>`;
    });
  }

  return `<!DOCTYPE html><html><head><meta charset="utf-8">${style}</head><body>${body}</body></html>`;
}

export default function WorksheetPage() {
  const [generating, setGenerating] = useState<string | null>(null);

  async function generatePDF(type: WorksheetType) {
    setGenerating(type);
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const html = buildWorksheetHTML(type);

      // 임시 컨테이너 생성
      const container = document.createElement("div");
      container.innerHTML = html;
      container.style.position = "absolute";
      container.style.left = "-9999px";
      container.style.width = "210mm";
      document.body.appendChild(container);

      // 폰트 로딩 대기
      await document.fonts.ready;

      await html2pdf()
        .set({
          margin: 0,
          filename: `탐험대장_${type}.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        })
        .from(container)
        .save();

      document.body.removeChild(container);
    } catch (err) {
      console.error("PDF generation failed:", err);
    }
    setGenerating(null);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="text-center py-4">
        <h1 className="text-3xl font-black text-orange-700">🖨️ 워크시트</h1>
        <p className="text-gray-500 mt-1">프린트해서 직접 써보자!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {WORKSHEETS.map((ws) => (
          <button
            key={ws.key}
            onClick={() => generatePDF(ws.key)}
            disabled={generating === ws.key}
            className={`${ws.color} border-2 rounded-2xl p-5 text-left hover:shadow-lg transition-all
              ${generating === ws.key ? "opacity-50" : "hover:scale-105"}`}
          >
            <div className="text-3xl mb-2">{ws.emoji}</div>
            <h3 className="font-bold text-lg">{ws.label}</h3>
            <p className="text-sm text-gray-600">{ws.desc}</p>
            {generating === ws.key && (
              <p className="text-sm text-orange-500 mt-2 animate-pulse">생성 중...</p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
