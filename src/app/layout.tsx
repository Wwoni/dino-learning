import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "탐험대장 - 공룡과 함께 배우자!",
  description: "5~7세 어린이를 위한 한글·수학·영어 놀이학습",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-gradient-to-b from-sky-100 via-green-50 to-amber-50">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-sky-200 px-4 py-3">
          <a href="/" className="flex items-center gap-2">
            <span className="text-3xl">🦕</span>
            <span className="text-xl font-black text-sky-700">탐험대장</span>
          </a>
        </header>
        <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
