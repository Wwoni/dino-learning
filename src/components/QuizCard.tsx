"use client";

import { useState, useEffect } from "react";

interface Props {
  question: string;
  image?: string;
  choices: string[];
  correctAnswer: string;
  onAnswer: (correct: boolean) => void;
}

export default function QuizCard({ question, image, choices, correctAnswer, onAnswer }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  // 문제가 바뀔 때 상태 초기화
  useEffect(() => {
    setSelected(null);
    setAnswered(false);
  }, [question, correctAnswer]);

  function handleSelect(choice: string) {
    if (answered) return;
    setSelected(choice);
    setAnswered(true);
    const correct = choice === String(correctAnswer);
    setTimeout(() => onAnswer(correct), 800);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {image && <div className="text-8xl mb-2 animate-bounce">{image}</div>}
      <p className="text-2xl font-bold text-gray-800 text-center whitespace-pre-line">{question}</p>
      <div className="grid grid-cols-2 gap-3 w-full max-w-md">
        {choices.map((choice) => {
          let bg = "bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50";
          if (answered && choice === String(correctAnswer)) {
            bg = "bg-green-400 border-2 border-green-500 text-white scale-105";
          } else if (answered && choice === selected && choice !== String(correctAnswer)) {
            bg = "bg-red-400 border-2 border-red-500 text-white shake";
          }
          return (
            <button
              key={String(choice)}
              onClick={() => handleSelect(String(choice))}
              className={`p-4 rounded-2xl font-bold text-xl transition-all duration-200 ${bg}`}
            >
              {String(choice)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
