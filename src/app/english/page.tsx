"use client";

import { useState, useCallback } from "react";
import { ENGLISH_LESSONS, type EnglishLesson } from "@/data/lessons/english";
import { addExp } from "@/lib/progress";
import { speakEnglish } from "@/lib/tts";
import WritingCanvas from "@/components/WritingCanvas";
import QuizCard from "@/components/QuizCard";
import StarBar from "@/components/StarBar";
import LessonSelector from "@/components/LessonSelector";
import StoryIntro from "@/components/StoryIntro";

export default function EnglishPage() {
  const [lessonId, setLessonId] = useState(1);
  const [phase, setPhase] = useState<"select" | "story" | "quiz" | "result">("select");
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  const lesson = ENGLISH_LESSONS.find((l) => l.id === lessonId)!;
  const questions = lesson?.questions || [];
  const q = questions[current];

  function startLesson(id: number) {
    setLessonId(id);
    setPhase("story");
    setCurrent(0);
    setScore(0);
  }

  function beginQuiz() {
    setPhase("quiz");
  }

  const handleAnswer = useCallback((correct: boolean) => {
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
        setPhase("result");
      }
    }, 1000);
  }, [current, questions.length, q]);

  function handleSpeak() {
    if (q?.audio) speakEnglish(q.audio);
    else if (q) speakEnglish(q.prompt);
  }

  // === 레슨 선택 화면 ===
  if (phase === "select") {
    return (
      <div className="flex flex-col gap-5">
        <div className="text-center py-4">
          <h1 className="text-3xl font-black text-purple-700">🔤 영어 학습</h1>
          <p className="text-gray-500 mt-1">레슨을 골라봐!</p>
        </div>
        <LessonSelector
          lessons={ENGLISH_LESSONS}
          currentLesson={lessonId}
          onSelect={startLesson}
          color="purple"
        />
        <div className="bg-white rounded-2xl p-4 shadow">
          <h3 className="font-bold text-gray-700">Lesson {lesson.id}: {lesson.title}</h3>
          <p className="text-sm text-gray-500">{lesson.topic}</p>
        </div>
      </div>
    );
  }

  // === 스토리 도입 ===
  if (phase === "story") {
    return (
      <div className="flex flex-col gap-4">
        <button onClick={() => setPhase("select")} className="self-start text-gray-400 hover:text-gray-600">
          ← 레슨 목록
        </button>
        <StoryIntro
          title={`Lesson ${lesson.id}: ${lesson.title}`}
          topic={lesson.topic}
          story={lesson.story}
          dinoId={lesson.dino}
          onStart={beginQuiz}
          color="purple"
        />
        {lesson.storyEn && (
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 text-center">
            <p className="text-base text-purple-800 italic">{lesson.storyEn}</p>
            <button
              onClick={() => speakEnglish(lesson.storyEn)}
              className="mt-2 px-4 py-2 bg-purple-400 text-white rounded-xl font-bold text-sm hover:bg-purple-500 transition"
            >
              🔊 Listen
            </button>
          </div>
        )}
      </div>
    );
  }

  // === 결과 화면 ===
  if (phase === "result") {
    return (
      <div className="flex flex-col items-center gap-6 py-12">
        <div className="text-7xl pop">🏆</div>
        <h2 className="text-3xl font-black text-purple-700">Lesson {lesson.id} Complete!</h2>
        <p className="text-xl text-gray-600">
          {questions.length}문제 중 <span className="text-purple-600 font-bold">{score}개</span> 맞았어요!
        </p>
        <div className="flex gap-3">
          <button onClick={() => { setCurrent(0); setScore(0); setPhase("quiz"); }}
            className="px-6 py-3 bg-purple-500 text-white rounded-2xl font-bold hover:bg-purple-600">
            다시 풀기
          </button>
          {lessonId < ENGLISH_LESSONS.length && (
            <button onClick={() => startLesson(lessonId + 1)}
              className="px-6 py-3 bg-green-500 text-white rounded-2xl font-bold hover:bg-green-600">
              다음 레슨 →
            </button>
          )}
          <button onClick={() => setPhase("select")}
            className="px-6 py-3 bg-gray-200 rounded-2xl font-bold hover:bg-gray-300">
            목록으로
          </button>
        </div>
      </div>
    );
  }

  // === 퀴즈 화면 ===
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <button onClick={() => setPhase("select")} className="text-gray-400 hover:text-gray-600 text-sm">
          ← 목록
        </button>
        <span className="text-sm font-bold text-purple-600">Lesson {lesson.id}</span>
        <span className="text-sm text-gray-400">{current + 1} / {questions.length}</span>
      </div>

      <StarBar current={score} total={questions.length} label={lesson.title} />

      {feedback && (
        <div className={`text-center text-2xl font-black pop ${feedback.includes("Great") ? "text-green-500" : "text-orange-500"}`}>
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
            {q.image && <div className="text-7xl mb-2">{q.image}</div>}
            <p className="text-lg text-gray-500">{q.korean}</p>
            <QuizCard
              key={q.id}
              question="듣고 맞는 단어를 골라봐!"
              choices={q.choices}
              correctAnswer={q.answer}
              onAnswer={handleAnswer}
            />
          </div>
        )}

        {q.type === "alphabet" && q.choices && (
          <div className="flex flex-col items-center gap-4">
            {q.image && <div className="text-7xl mb-2">{q.image}</div>}
            <p className="text-lg text-gray-500">{q.korean}</p>
            <QuizCard
              key={q.id}
              question={q.prompt}
              choices={q.choices}
              correctAnswer={q.answer}
              onAnswer={handleAnswer}
            />
          </div>
        )}

        {q.type === "trace" && (
          <div className="flex flex-col items-center gap-4">
            {q.image && <div className="text-6xl mb-2">{q.image}</div>}
            <p className="text-2xl font-bold text-gray-700">
              &ldquo;{q.prompt}&rdquo; 따라 써보자!
            </p>
            {q.korean && <p className="text-lg text-gray-400">{q.korean}</p>}
            <WritingCanvas key={q.id} guideText={q.answer} onComplete={() => handleAnswer(true)} lang="en" />
          </div>
        )}

        {q.type === "word" && q.choices && (
          <QuizCard
            key={q.id}
            question={q.prompt}
            image={q.image}
            choices={q.choices}
            correctAnswer={q.answer}
            onAnswer={handleAnswer}
          />
        )}

        {q.type === "sentence" && (
          <div className="flex flex-col items-center gap-4">
            {q.image && <div className="text-6xl mb-2">{q.image}</div>}
            <p className="text-2xl font-bold text-center text-gray-800">{q.prompt}</p>
            <p className="text-lg text-gray-400">{q.korean}</p>
            <p className="text-sm text-gray-400 mt-2">소리를 듣고 따라 써보세요!</p>
            <WritingCanvas key={q.id} guideText={q.answer} onComplete={() => handleAnswer(true)} lang="en" />
          </div>
        )}
      </div>
    </div>
  );
}
