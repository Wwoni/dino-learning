"use client";

import { useState, useEffect, useCallback } from "react";
import { ENGLISH_QUESTIONS, type EnglishQuestion } from "@/data/english";
import { getProgress, addExp } from "@/lib/progress";
import { speakEnglish } from "@/lib/tts";
import WritingCanvas from "@/components/WritingCanvas";
import QuizCard from "@/components/QuizCard";
import StarBar from "@/components/StarBar";

export default function EnglishPage() {
  const [level, setLevel] = useState(1);
  const [questions, setQuestions] = useState<EnglishQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    const p = getProgress();
    setLevel(p.english.level);
  }, []);

  useEffect(() => {
    const filtered = ENGLISH_QUESTIONS.filter((q) => q.level === level);
    const shuffled = [...filtered].sort(() => Math.random() - 0.5).slice(0, 10);
    setQuestions(shuffled);
    setCurrent(0);
    setScore(0);
    setTotal(0);
    setShowResult(false);
  }, [level]);

  const q = questions[current];

  const handleAnswer = useCallback((correct: boolean) => {
    setTotal((t) => t + 1);
    if (correct) {
      setScore((s) => s + 1);
      setFeedback("Great job! 🎉");
    } else {
      setFeedback("Try again! 💪");
    }
    if (q) addExp("english", q.id, correct);

    setTimeout(() => {
      setFeedback(null);
      if (current + 1 < questions.length) {
        setCurrent((c) => c + 1);
      } else {
        setShowResult(true);
      }
    }, 1200);
  }, [current, questions.length, q]);

  function handleSpeak() {
    if (q?.audio) speakEnglish(q.audio);
    else if (q) speakEnglish(q.prompt);
  }

  if (!q && !showResult) {
    return <div className="text-center py-12"><p className="text-xl text-gray-500">Loading questions...</p></div>;
  }

  if (showResult) {
    return (
      <div className="flex flex-col items-center gap-6 py-12">
        <div className="text-7xl pop">🏆</div>
        <h2 className="text-3xl font-black text-purple-700">English Complete!</h2>
        <p className="text-xl text-gray-600">
          {total}문제 중 <span className="text-purple-600 font-bold">{score}개</span> 맞았어요!
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => { setCurrent(0); setScore(0); setTotal(0); setShowResult(false); }}
            className="px-6 py-3 bg-purple-500 text-white rounded-2xl font-bold text-lg hover:bg-purple-600"
          >
            다시 풀기
          </button>
          <a href="/" className="px-6 py-3 bg-gray-200 rounded-2xl font-bold text-lg hover:bg-gray-300">
            홈으로
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {[1, 2, 3].map((l) => (
            <button
              key={l}
              onClick={() => setLevel(l)}
              className={`px-4 py-2 rounded-xl font-bold text-sm transition ${
                level === l ? "bg-purple-500 text-white" : "bg-white text-gray-500 border"
              }`}
            >
              Lv.{l}
            </button>
          ))}
        </div>
        <span className="text-sm text-gray-400">{current + 1} / {questions.length}</span>
      </div>

      <StarBar current={score} total={questions.length} label="영어 학습" />

      {feedback && (
        <div className={`text-center text-2xl font-black pop ${
          feedback.includes("Great") ? "text-green-500" : "text-orange-500"
        }`}>
          {feedback}
        </div>
      )}

      <div className="bg-white rounded-3xl p-6 shadow-lg">
        {/* 듣기 버튼 */}
        <div className="flex justify-center mb-4">
          <button
            onClick={handleSpeak}
            className="flex items-center gap-2 px-5 py-3 bg-yellow-400 rounded-2xl font-bold text-lg hover:bg-yellow-500 transition"
          >
            🔊 Listen
          </button>
        </div>

        {q.type === "listen" && q.choices && (
          <div className="flex flex-col items-center gap-4">
            <div className="text-7xl mb-2">{q.image}</div>
            <p className="text-lg text-gray-500">{q.korean}</p>
            <QuizCard
              question="듣고 맞는 단어를 골라봐!"
              choices={q.choices}
              correctAnswer={q.answer}
              onAnswer={handleAnswer}
            />
          </div>
        )}

        {q.type === "trace" && (
          <div className="flex flex-col items-center gap-4">
            <div className="text-6xl mb-2">{q.image}</div>
            <p className="text-2xl font-bold text-gray-700">
              &ldquo;{q.prompt}&rdquo; 따라 써보자!
            </p>
            {q.korean && <p className="text-lg text-gray-400">{q.korean}</p>}
            <WritingCanvas guideText={q.answer} onComplete={() => handleAnswer(true)} lang="en" />
          </div>
        )}

        {q.type === "word" && q.choices && (
          <QuizCard
            question={q.prompt}
            image={q.image}
            choices={q.choices}
            correctAnswer={q.answer}
            onAnswer={handleAnswer}
          />
        )}

        {q.type === "sentence" && (
          <div className="flex flex-col items-center gap-4">
            <div className="text-6xl mb-2">{q.image}</div>
            <p className="text-2xl font-bold text-center text-gray-800">{q.prompt}</p>
            <p className="text-lg text-gray-400">{q.korean}</p>
            <p className="text-sm text-gray-400 mt-2">소리를 듣고 따라 써보세요!</p>
            <WritingCanvas guideText={q.answer} onComplete={() => handleAnswer(true)} lang="en" />
          </div>
        )}
      </div>
    </div>
  );
}
