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

export default function WorksheetPage() {
  const [generating, setGenerating] = useState<string | null>(null);

  async function generatePDF(type: WorksheetType) {
    setGenerating(type);
    // 동적 import (클라이언트 사이드에서만)
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const w = doc.internal.pageSize.getWidth();

    // 헤더
    doc.setFontSize(20);
    doc.text("🦕 탐험대장 워크시트", w / 2, 15, { align: "center" });
    doc.setFontSize(10);
    doc.text(`이름: ________________    날짜: ____년 ____월 ____일`, w / 2, 25, { align: "center" });
    doc.setDrawColor(200);
    doc.line(10, 30, w - 10, 30);

    let y = 40;

    if (type === "korean-trace") {
      doc.setFontSize(14);
      doc.text("한글 따라쓰기 - 단어를 보고 따라 써보세요!", 15, y);
      y += 12;
      KOREAN_TRACE_WORDS.forEach((item, i) => {
        if (y > 270) { doc.addPage(); y = 20; }
        doc.setFontSize(16);
        doc.text(`${i + 1}. ${item.emoji}`, 15, y);
        // 가이드 글자 (연하게)
        doc.setTextColor(200);
        doc.setFontSize(20);
        doc.text(item.word, 40, y);
        doc.setTextColor(0);
        // 쓰기 칸
        doc.setDrawColor(180);
        doc.setLineDashPattern([2, 2], 0);
        doc.rect(38, y - 7, 60, 12);
        // 빈 칸
        doc.rect(105, y - 7, 60, 12);
        doc.setLineDashPattern([], 0);
        y += 22;
      });
    }

    if (type === "korean-dictation") {
      doc.setFontSize(14);
      doc.text("한글 받아쓰기 - 소리를 듣고 써보세요!", 15, y);
      y += 12;
      const words = ["티라노", "기린", "소방차", "악어", "경찰차", "원숭이", "공룡알", "화석", "코끼리", "트럭"];
      words.forEach((word, i) => {
        if (y > 270) { doc.addPage(); y = 20; }
        doc.setFontSize(14);
        doc.text(`${i + 1}.`, 15, y);
        doc.setDrawColor(180);
        doc.setLineDashPattern([2, 2], 0);
        doc.rect(25, y - 7, 80, 12);
        doc.setLineDashPattern([], 0);
        // 정답 (맨 아래 작게)
        doc.setFontSize(6);
        doc.setTextColor(220);
        doc.text(word, 110, y);
        doc.setTextColor(0);
        y += 22;
      });
    }

    if (type === "math-addition") {
      doc.setFontSize(14);
      doc.text("덧셈 연습 - 더하기를 풀어보세요!", 15, y);
      y += 12;
      const problems = [
        { a: 2, b: 3, emoji: "🦕" }, { a: 4, b: 2, emoji: "🦁" }, { a: 1, b: 5, emoji: "🚗" },
        { a: 3, b: 4, emoji: "🥚" }, { a: 5, b: 3, emoji: "🐧" }, { a: 6, b: 2, emoji: "🚌" },
        { a: 4, b: 4, emoji: "🦖" }, { a: 7, b: 2, emoji: "🐘" }, { a: 3, b: 6, emoji: "🚒" },
        { a: 5, b: 5, emoji: "🦒" },
      ];
      problems.forEach((p, i) => {
        if (y > 270) { doc.addPage(); y = 20; }
        doc.setFontSize(18);
        doc.text(`${i + 1}.  ${p.a}  +  ${p.b}  =  ____`, 20, y);
        y += 18;
      });
    }

    if (type === "math-subtraction") {
      doc.setFontSize(14);
      doc.text("뺄셈 연습 - 빼기를 풀어보세요!", 15, y);
      y += 12;
      const problems = [
        { a: 5, b: 2 }, { a: 7, b: 3 }, { a: 8, b: 4 }, { a: 6, b: 1 }, { a: 9, b: 5 },
        { a: 10, b: 3 }, { a: 7, b: 4 }, { a: 8, b: 6 }, { a: 9, b: 2 }, { a: 10, b: 7 },
      ];
      problems.forEach((p, i) => {
        if (y > 270) { doc.addPage(); y = 20; }
        doc.setFontSize(18);
        doc.text(`${i + 1}.  ${p.a}  -  ${p.b}  =  ____`, 20, y);
        y += 18;
      });
    }

    if (type === "english-trace") {
      doc.setFontSize(14);
      doc.text("English Tracing - Write the words!", 15, y);
      y += 12;
      ENGLISH_TRACE_WORDS.forEach((item, i) => {
        if (y > 270) { doc.addPage(); y = 20; }
        doc.setFontSize(16);
        doc.text(`${i + 1}. ${item.emoji}`, 15, y);
        doc.setTextColor(200);
        doc.setFontSize(20);
        doc.text(item.word, 40, y);
        doc.setTextColor(0);
        doc.setDrawColor(180);
        doc.setLineDashPattern([2, 2], 0);
        doc.rect(38, y - 7, 60, 12);
        doc.rect(105, y - 7, 60, 12);
        doc.setLineDashPattern([], 0);
        y += 22;
      });
    }

    if (type === "english-words") {
      doc.setFontSize(14);
      doc.text("English Quiz - Write the word for each picture!", 15, y);
      y += 12;
      const items = [
        { emoji: "🦕", answer: "Dinosaur" }, { emoji: "🦁", answer: "Lion" },
        { emoji: "🚗", answer: "Car" }, { emoji: "🐘", answer: "Elephant" },
        { emoji: "🚌", answer: "Bus" }, { emoji: "🦖", answer: "T-Rex" },
        { emoji: "🐧", answer: "Penguin" }, { emoji: "🚒", answer: "Fire truck" },
        { emoji: "🦒", answer: "Giraffe" }, { emoji: "🐊", answer: "Alligator" },
      ];
      items.forEach((item, i) => {
        if (y > 270) { doc.addPage(); y = 20; }
        doc.setFontSize(16);
        doc.text(`${i + 1}. ${item.emoji}  ________________`, 20, y);
        doc.setFontSize(6);
        doc.setTextColor(220);
        doc.text(item.answer, 120, y);
        doc.setTextColor(0);
        y += 18;
      });
    }

    doc.save(`탐험대장_${type}.pdf`);
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
