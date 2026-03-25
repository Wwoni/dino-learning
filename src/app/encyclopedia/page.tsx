"use client";

import { useState } from "react";
import { DINOS, type Dino } from "@/data/dinosaurs";
import Link from "next/link";

type DietFilter = "all" | "carnivore" | "herbivore";

const DIET_LABELS: Record<string, { label: string; emoji: string; color: string }> = {
  all: { label: "전체", emoji: "🌍", color: "bg-gray-100 text-gray-700 border-gray-300" },
  carnivore: { label: "육식", emoji: "🥩", color: "bg-red-100 text-red-700 border-red-300" },
  herbivore: { label: "초식", emoji: "🌿", color: "bg-green-100 text-green-700 border-green-300" },
};

const DIET_BADGE: Record<string, { label: string; bg: string }> = {
  carnivore: { label: "육식", bg: "bg-red-500" },
  herbivore: { label: "초식", bg: "bg-green-500" },
  omnivore: { label: "잡식", bg: "bg-yellow-500" },
};

export default function EncyclopediaPage() {
  const [filter, setFilter] = useState<DietFilter>("all");
  const [selected, setSelected] = useState<Dino | null>(null);

  const filtered = filter === "all" ? DINOS : DINOS.filter((d) => d.diet === filter);

  // 상세 보기
  if (selected) {
    const badge = DIET_BADGE[selected.diet];
    return (
      <div className="flex flex-col gap-5">
        <button
          onClick={() => setSelected(null)}
          className="self-start text-gray-400 hover:text-gray-600 font-bold"
        >
          ← 도감 목록
        </button>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* 이미지 영역 */}
          <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 h-56 flex items-center justify-center">
            {selected.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={selected.image}
                alt={selected.en}
                className="h-48 object-contain drop-shadow-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                }}
              />
            ) : null}
            <span className={`text-9xl ${selected.image ? "hidden" : ""}`}>{selected.emoji}</span>
            <span className={`absolute top-3 right-3 px-3 py-1 ${badge.bg} text-white text-xs font-bold rounded-full`}>
              {badge.label}
            </span>
          </div>

          {/* 정보 */}
          <div className="p-6 flex flex-col gap-4">
            <div>
              <h2 className="text-3xl font-black text-gray-800">{selected.ko}</h2>
              <p className="text-lg text-gray-500 italic">{selected.en}</p>
            </div>

            <div className="flex gap-3 flex-wrap">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                📏 {selected.size}
              </span>
              {selected.period && (
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold">
                  🕐 {selected.period}
                </span>
              )}
              <span className={`px-3 py-1 ${badge.bg} text-white rounded-full text-sm font-bold`}>
                {selected.diet === "carnivore" ? "🥩" : "🌿"} {badge.label}
              </span>
            </div>

            {/* 재미있는 사실 */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
              <p className="text-sm font-bold text-yellow-700 mb-1">💡 알고 있었나요?</p>
              <p className="text-base text-gray-700">{selected.fact}</p>
              <p className="text-sm text-gray-500 mt-1 italic">{selected.factEn}</p>
            </div>

            {/* 상세 설명 */}
            {selected.description && (
              <div className="bg-gray-50 rounded-2xl p-4">
                <p className="text-sm font-bold text-gray-600 mb-2">📖 상세 정보</p>
                <p className="text-base text-gray-700 leading-relaxed">{selected.description}</p>
                {selected.descriptionEn && (
                  <p className="text-sm text-gray-500 mt-3 italic leading-relaxed">{selected.descriptionEn}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 목록 보기
  return (
    <div className="flex flex-col gap-5">
      <div className="text-center py-4">
        <h1 className="text-3xl font-black text-amber-700">📖 공룡 대백과</h1>
        <p className="text-gray-500 mt-1">공룡을 눌러서 자세히 알아보자!</p>
      </div>

      {/* 필터 */}
      <div className="flex justify-center gap-2">
        {(Object.keys(DIET_LABELS) as DietFilter[]).map((key) => {
          const d = DIET_LABELS[key];
          const isActive = filter === key;
          return (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-2 rounded-xl font-bold text-sm border-2 transition-all
                ${isActive ? `${d.color} ring-2 ring-offset-1 scale-105 shadow` : "bg-white text-gray-400 border-gray-200"}`}
            >
              {d.emoji} {d.label} ({key === "all" ? DINOS.length : DINOS.filter((dd) => dd.diet === key).length})
            </button>
          );
        })}
      </div>

      {/* 공룡 카드 그리드 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {filtered.map((dino) => {
          const badge = DIET_BADGE[dino.diet];
          return (
            <button
              key={dino.id}
              onClick={() => setSelected(dino)}
              className="bg-white rounded-2xl p-4 shadow hover:shadow-lg hover:scale-105 transition-all text-left relative overflow-hidden group"
            >
              {/* 배경 장식 */}
              <div className="absolute -right-4 -bottom-4 text-7xl opacity-10 group-hover:opacity-20 transition-opacity">
                {dino.emoji}
              </div>

              <div className="relative z-10">
                {dino.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={dino.image}
                    alt={dino.en}
                    className="h-20 object-contain mx-auto mb-2 drop-shadow"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        const fallback = document.createElement("span");
                        fallback.className = "text-5xl block text-center mb-2";
                        fallback.textContent = dino.emoji;
                        parent.prepend(fallback);
                      }
                    }}
                  />
                ) : (
                  <span className="text-5xl block text-center mb-2">{dino.emoji}</span>
                )}
                <h3 className="font-black text-gray-800 text-sm">{dino.ko}</h3>
                <p className="text-xs text-gray-400 italic">{dino.en}</p>
                <div className="mt-2 flex gap-1">
                  <span className={`text-[10px] px-2 py-0.5 ${badge.bg} text-white rounded-full font-bold`}>
                    {badge.label}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">
                    {dino.size}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <Link href="/" className="text-center text-gray-400 hover:text-gray-600 text-sm py-2">
        ← 홈으로 돌아가기
      </Link>
    </div>
  );
}
