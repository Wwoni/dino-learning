"use client";

import { useState, useCallback } from "react";
import { MATH_LESSONS, type MathLesson } from "@/data/lessons/math";
import { addExp } from "@/lib/progress";
import { speakKorean } from "@/lib/tts";
import QuizCard from "@/components/QuizCard";
import StarBar from "@/components/StarBar";
import LessonSelector from "@/components/LessonSelector";
import StoryIntro from "@/components/StoryIntro";

export default function MathPage() {
  const [lessonId, setLessonId] = useState(1);
  const [phase, setPhase] = useState<"select" | "story" | "quiz" | "result">("select");
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  const lesson = MATH_LESSONS.find((l) => l.id === lessonId)!;
  const questions = lesson?.questions || [];
  const q = questions[current];

  function startLesson(id: number) {
    setLessonId(id);
    setPhase("story");
    setCurrent(0);
    setScore(0);
  }

  const handleAnswer = useCallback((correct: boolean) => {
    if (correct) {
      setScore((s) => s + 1);
      setFeedback("정답이야! 🎉");
    } else {
      setFeedback("다시 해보자! 💪");
    }
    if (q) addExp("math", q.id, correct);
    setTimeout(() => {
      setFeedback(null);
      if (current + 1 < questions.length) {
        setCurrent((c) => c + 1);
      } else {
        setPhase("result");
      }
    }, 1000);
  }, [current, questions.length, q]);

  if (phase === "select") {
    return (
      <div className="flex flex-col gap-5">
        <div className="text-center py-4">
          <h1 className="text-3xl font-black text-green-700">🔢 수학 학습</h1>
          <p className="text-gray-500 mt-1">레슨을 골라봐!</p>
        </div>
        <LessonSelector lessons={MATH_LESSONS} currentLesson={lessonId} onSelect={startLesson} color="green" />
        <div className="bg-white rounded-2xl p-4 shadow">
          <h3 className="font-bold text-gray-700">Lesson {lesson.id}: {lesson.title}</h3>
          <p className="text-sm text-gray-500">{lesson.topic}</p>
        </div>
      </div>
    );
  }

  if (phase === "story") {
    return (
      <div className="flex flex-col gap-4">
        <button onClick={() => setPhase("select")} className="self-start text-gray-400 hover:text-gray-600">← 레슨 목록</button>
        <StoryIntro
          title={`Lesson ${lesson.id}: ${lesson.title}`}
          topic={lesson.topic}
          story={lesson.story}
          dinoId={lesson.dino}
          onStart={() => setPhase("quiz")}
          color="green"
        />
      </div>
    );
  }

  if (phase === "result") {
    return (
      <div className="flex flex-col items-center gap-6 py-12">
        <div className="text-7xl pop">🏆</div>
        <h2 className="text-3xl font-black text-green-700">Lesson {lesson.id} 완료!</h2>
        <p className="text-xl text-gray-600">{questions.length}문제 중 <span className="text-green-600 font-bold">{score}개</span> 맞았어요!</p>
        <div className="flex gap-3">
          <button onClick={() => { setCurrent(0); setScore(0); setPhase("quiz"); }}
            className="px-6 py-3 bg-green-500 text-white rounded-2xl font-bold hover:bg-green-600">다시 풀기</button>
          {lessonId < MATH_LESSONS.length && (
            <button onClick={() => startLesson(lessonId + 1)}
              className="px-6 py-3 bg-blue-500 text-white rounded-2xl font-bold hover:bg-blue-600">다음 레슨 →</button>
          )}
          <button onClick={() => setPhase("select")}
            className="px-6 py-3 bg-gray-200 rounded-2xl font-bold hover:bg-gray-300">목록으로</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <button onClick={() => setPhase("select")} className="text-gray-400 hover:text-gray-600 text-sm">← 목록</button>
        <span className="text-sm font-bold text-green-600">Lesson {lesson.id}</span>
        <span className="text-sm text-gray-400">{current + 1} / {questions.length}</span>
      </div>

      <StarBar current={score} total={questions.length} label={lesson.title} />

      {feedback && (
        <div className={`text-center text-2xl font-black pop ${feedback.includes("정답") ? "text-green-500" : "text-orange-500"}`}>
          {feedback}
        </div>
      )}

      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <div className="flex justify-center mb-4">
          <button onClick={() => speakKorean(q.prompt)}
            className="flex items-center gap-2 px-5 py-3 bg-yellow-400 rounded-2xl font-bold text-lg hover:bg-yellow-500 transition">
            🔊 문제 듣기
          </button>
        </div>

        <div className="text-center text-4xl mb-4 leading-relaxed tracking-wider">{q.visual}</div>

        <QuizCard
          key={q.id}
          question={q.prompt}
          choices={q.choices.map(String)}
          correctAnswer={String(q.answer)}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
}
