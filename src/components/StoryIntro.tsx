"use client";

import { getDino } from "@/data/dinosaurs";

interface Props {
  title: string;
  topic: string;
  story: string;
  dinoId?: string;
  onStart: () => void;
  color?: string;
}

export default function StoryIntro({ title, topic, story, dinoId, onStart, color = "blue" }: Props) {
  const dino = dinoId ? getDino(dinoId) : null;

  const btnColor: Record<string, string> = {
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
    purple: "bg-purple-500 hover:bg-purple-600",
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center gap-4 text-center">
      {dino && (
        <div className="flex flex-col items-center gap-1">
          <span className="text-7xl">{dino.emoji}</span>
          <span className="text-sm font-bold text-gray-500">{dino.ko} ({dino.en})</span>
          <span className="text-xs text-orange-500">{dino.fact}</span>
        </div>
      )}

      <h2 className="text-2xl font-black text-gray-800">{title}</h2>
      <p className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">{topic}</p>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 w-full">
        <p className="text-base text-gray-700 whitespace-pre-line leading-relaxed">{story}</p>
      </div>

      <button
        onClick={onStart}
        className={`px-8 py-4 ${btnColor[color] || btnColor.blue} text-white rounded-2xl font-black text-xl
          hover:scale-105 transition-all shadow-lg`}
      >
        학습 시작!
      </button>
    </div>
  );
}
