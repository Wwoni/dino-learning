"use client";

interface Props {
  current: number;
  total: number;
  label?: string;
}

export default function StarBar({ current, total, label }: Props) {
  const pct = Math.min((current / total) * 100, 100);
  return (
    <div className="w-full">
      {label && <p className="text-sm text-gray-500 mb-1">{label}</p>}
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-right text-sm text-gray-500 mt-1">
        ⭐ {current} / {total}
      </p>
    </div>
  );
}
