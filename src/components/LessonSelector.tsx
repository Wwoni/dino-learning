"use client";

interface Lesson {
  id: number;
  title: string;
  topic: string;
}

interface Props {
  lessons: Lesson[];
  currentLesson: number;
  onSelect: (id: number) => void;
  color: string; // e.g. "blue", "green", "purple"
}

export default function LessonSelector({ lessons, currentLesson, onSelect, color }: Props) {
  const colorMap: Record<string, { active: string; ring: string }> = {
    blue: { active: "bg-blue-500 text-white ring-blue-300", ring: "ring-blue-200" },
    green: { active: "bg-green-500 text-white ring-green-300", ring: "ring-green-200" },
    purple: { active: "bg-purple-500 text-white ring-purple-300", ring: "ring-purple-200" },
  };
  const c = colorMap[color] || colorMap.blue;

  return (
    <div className="grid grid-cols-5 gap-2">
      {lessons.map((l) => {
        const isActive = l.id === currentLesson;
        return (
          <button
            key={l.id}
            onClick={() => onSelect(l.id)}
            title={`${l.title}\n${l.topic}`}
            className={`relative p-2 rounded-xl font-bold text-sm transition-all
              ${isActive ? `${c.active} ring-2 ${c.ring} scale-110 shadow-lg` : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400 hover:shadow"}`}
          >
            {l.id}
          </button>
        );
      })}
    </div>
  );
}
