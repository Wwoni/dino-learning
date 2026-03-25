"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getProgress, type Progress } from "@/lib/progress";

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

export default function Home() {
  const [progress, setProgress] = useState<Progress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {/* 인사 영역 */}
      <div className="text-center py-6">
        <h1 className="text-4xl font-black text-sky-800 mb-2">
          🦕 탐험대장에 온 걸 환영해!
        </h1>
        <p className="text-lg text-gray-600">공룡, 동물, 자동차와 함께 배워보자!</p>
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
          {/* 공룡 도감 */}
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
    </div>
  );
}
