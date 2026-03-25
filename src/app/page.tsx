"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getProgress, type Progress } from "@/lib/progress";
import { DINOS } from "@/data/dinosaurs";

const SUBJECTS = [
  {
    key: "korean",
    label: "한글",
    emoji: "📝",
    color: "from-blue-400 to-blue-600",
    href: "/korean",
    desc: "따라쓰기 · 받아쓰기 · 읽기",
  },
  {
    key: "math",
    label: "수학",
    emoji: "🔢",
    color: "from-green-400 to-green-600",
    href: "/math",
    desc: "세기 · 덧셈 · 뺄셈 · 도형",
  },
  {
    key: "english",
    label: "영어",
    emoji: "🔤",
    color: "from-purple-400 to-purple-600",
    href: "/english",
    desc: "알파벳 · 단어 · 따라쓰기 · 듣기",
  },
  {
    key: "worksheet",
    label: "워크시트",
    emoji: "🖨️",
    color: "from-orange-400 to-orange-600",
    href: "/worksheet",
    desc: "프린트 학습지 다운로드",
  },
];

// 배경 장식용 랜덤 공룡
const BG_DINOS = DINOS.filter((d) => d.image).slice(0, 8);

export default function Home() {
  const [progress, setProgress] = useState<Progress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  return (
    <div className="flex flex-col gap-6 relative">
      {/* 배경 공룡 장식 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {BG_DINOS.map((dino, i) => (
          <span
            key={dino.id}
            className="absolute text-6xl opacity-[0.06] select-none"
            style={{
              top: `${10 + (i * 120) % 600}px`,
              left: i % 2 === 0 ? "-10px" : "auto",
              right: i % 2 !== 0 ? "-10px" : "auto",
              transform: `rotate(${i % 2 === 0 ? -15 : 15}deg)`,
            }}
          >
            {dino.emoji}
          </span>
        ))}
      </div>

      {/* 히어로 영역 - 공룡 이미지 포함 */}
      <div className="text-center py-6 relative">
        <div className="flex justify-center items-center gap-3 mb-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://static.wikia.nocookie.net/jurassicpark/images/4/46/BrachiosaurusInfoGraphic.png"
            alt="Brachiosaurus"
            className="h-20 object-contain drop-shadow-lg hidden sm:block"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <div>
            <h1 className="text-4xl font-black text-sky-800 mb-2">
              🦕 탐험대장에 온 걸 환영해!
            </h1>
            <p className="text-lg text-gray-600">공룡, 동물, 자동차와 함께 배워보자!</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://static.wikia.nocookie.net/jurassicpark/images/e/e7/Jurassic_World_Rexy.png"
            alt="T-Rex"
            className="h-20 object-contain drop-shadow-lg hidden sm:block"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        </div>
      </div>

      {/* 진도 요약 */}
      {progress && (
        <div className="bg-white rounded-3xl p-5 shadow-lg border border-sky-100">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-gray-700">나의 탐험 기록</span>
            <span className="text-sm text-gray-500">연속 {progress.streak}일째!</span>
          </div>
          <div className="flex justify-around text-center">
            <div>
              <p className="text-3xl font-black text-sky-600">{progress.totalExp}</p>
              <p className="text-xs text-gray-500">경험치</p>
            </div>
            <div>
              <p className="text-3xl font-black text-yellow-500">
                {progress.korean.stars + progress.math.stars + progress.english.stars}
              </p>
              <p className="text-xs text-gray-500">별</p>
            </div>
            <div>
              <p className="text-3xl font-black text-green-600">{progress.dinosaurs.length}</p>
              <p className="text-xs text-gray-500">공룡 도감</p>
            </div>
          </div>
          {progress.dinosaurs.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-100 flex gap-2 justify-center">
              {progress.dinosaurs.map((d) => (
                <span key={d} className="text-3xl pop">{d}</span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 과목 카드 */}
      <div className="grid grid-cols-2 gap-4">
        {SUBJECTS.map((s) => (
          <Link key={s.key} href={s.href}>
            <div className={`bg-gradient-to-br ${s.color} rounded-3xl p-6 text-white shadow-lg
              hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-pointer h-full`}>
              <div className="text-5xl mb-3">{s.emoji}</div>
              <h2 className="text-2xl font-black mb-1">{s.label}</h2>
              <p className="text-sm opacity-90">{s.desc}</p>
              {progress && s.key !== "worksheet" && (
                <div className="mt-3 flex items-center gap-1">
                  <span className="text-sm">Lv.{progress[s.key as "korean" | "math" | "english"].level}</span>
                  <span className="text-sm opacity-75">
                    ⭐ {progress[s.key as "korean" | "math" | "english"].stars}
                  </span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* 공룡 대백과 배너 */}
      <Link href="/encyclopedia">
        <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-6 text-white shadow-lg
          hover:scale-[1.02] hover:shadow-xl transition-all duration-200 cursor-pointer overflow-hidden">
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1 opacity-30">
            <span className="text-7xl">🦖</span>
            <span className="text-7xl">🦕</span>
            <span className="text-5xl mt-4">🦅</span>
          </div>
          <div className="relative z-10">
            <div className="text-4xl mb-2">📖</div>
            <h2 className="text-2xl font-black mb-1">공룡 대백과</h2>
            <p className="text-sm opacity-90">육식·초식 공룡 {DINOS.length}종의 비밀을 알아보자!</p>
          </div>
        </div>
      </Link>

      {/* 하단 공룡 퍼레이드 */}
      <div className="flex justify-center gap-1 py-2 opacity-40 overflow-hidden">
        {DINOS.slice(0, 10).map((d) => (
          <span key={d.id} className="text-2xl">{d.emoji}</span>
        ))}
      </div>
    </div>
  );
}
