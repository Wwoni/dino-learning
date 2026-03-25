"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface Props {
  guideText: string; // 따라쓸 글자
  onComplete: (result: string) => void;
  lang?: "ko" | "en";
}

export default function WritingCanvas({ guideText, onComplete, lang = "ko" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const strokeCount = useRef(0);
  const totalDistance = useRef(0);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  const getCtx = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    return canvas.getContext("2d");
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 고해상도 캔버스
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    drawGuide(ctx, rect.width, rect.height);
  }, [guideText, lang]);

  function drawGuide(ctx: CanvasRenderingContext2D, w: number, h: number) {
    ctx.clearRect(0, 0, w, h);

    // 배경 격자
    ctx.strokeStyle = "#e5e7eb";
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w / 2, h);
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // 가이드 글자 (연하게)
    ctx.fillStyle = "rgba(200, 200, 200, 0.5)";
    const fontSize = lang === "ko" ? Math.min(w / guideText.length, h * 0.7) : Math.min(w / guideText.length, h * 0.7);
    ctx.font = `bold ${fontSize}px ${lang === "ko" ? "'Noto Sans KR', sans-serif" : "'Arial', sans-serif"}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(guideText, w / 2, h / 2);
  }

  function getPos(e: React.TouchEvent | React.MouseEvent) {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    return {
      x: (e as React.MouseEvent).clientX - rect.left,
      y: (e as React.MouseEvent).clientY - rect.top,
    };
  }

  function startDraw(e: React.TouchEvent | React.MouseEvent) {
    e.preventDefault();
    const ctx = getCtx();
    if (!ctx) return;
    setIsDrawing(true);
    setHasDrawn(true);
    strokeCount.current += 1;
    const pos = getPos(e);
    lastPos.current = pos;
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    ctx.strokeStyle = "#1e40af";
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }

  function draw(e: React.TouchEvent | React.MouseEvent) {
    e.preventDefault();
    if (!isDrawing) return;
    const ctx = getCtx();
    if (!ctx) return;
    const pos = getPos(e);
    if (lastPos.current) {
      const dx = pos.x - lastPos.current.x;
      const dy = pos.y - lastPos.current.y;
      totalDistance.current += Math.sqrt(dx * dx + dy * dy);
    }
    lastPos.current = pos;
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }

  function endDraw() {
    setIsDrawing(false);
  }

  function clearCanvas() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    drawGuide(ctx, rect.width, rect.height);
    setHasDrawn(false);
    strokeCount.current = 0;
    totalDistance.current = 0;
    lastPos.current = null;
    setTooShort(false);
  }

  const [tooShort, setTooShort] = useState(false);

  function handleSubmit() {
    // 최소 검증: 획 1개 이상 + 총 이동거리 50px 이상
    if (strokeCount.current < 1 || totalDistance.current < 50) {
      setTooShort(true);
      setTimeout(() => setTooShort(false), 1500);
      return;
    }
    onComplete(guideText);
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <canvas
        ref={canvasRef}
        className="w-full h-48 border-2 border-dashed border-blue-300 rounded-2xl bg-white cursor-crosshair touch-none"
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={endDraw}
        onMouseLeave={endDraw}
        onTouchStart={startDraw}
        onTouchMove={draw}
        onTouchEnd={endDraw}
      />
      {tooShort && (
        <p className="text-orange-500 font-bold text-sm shake">조금 더 써보자! ✏️</p>
      )}
      <div className="flex gap-3">
        <button
          onClick={clearCanvas}
          className="px-5 py-2 bg-gray-200 rounded-xl text-gray-700 font-bold text-lg hover:bg-gray-300 transition"
        >
          다시 쓰기
        </button>
        {hasDrawn && (
          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-green-500 text-white rounded-xl font-bold text-lg hover:bg-green-600 transition animate-bounce"
          >
            완료!
          </button>
        )}
      </div>
    </div>
  );
}
