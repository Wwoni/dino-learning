import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "탐험대장 - 공룡과 함께 배우자!",
  description: "5~7세 어린이를 위한 한글·수학·영어 놀이학습",
};

const NAV_ITEMS = [
  { href: "/korean", label: "한글", emoji: "📝" },
  { href: "/math", label: "수학", emoji: "🔢" },
  { href: "/english", label: "영어", emoji: "🔤" },
  { href: "/encyclopedia", label: "도감", emoji: "📖" },
  { href: "/worksheet", label: "프린트", emoji: "🖨️" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-gradient-to-b from-sky-100 via-green-50 to-amber-50">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-sky-200 px-4 py-3">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="text-3xl">🦕</span>
              <span className="text-xl font-black text-sky-700">탐험대장</span>
            </a>
            <nav className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-2 py-1 text-xs font-bold text-gray-500 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                  title={item.label}
                >
                  <span className="sm:hidden text-lg">{item.emoji}</span>
                  <span className="hidden sm:inline">{item.emoji} {item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
