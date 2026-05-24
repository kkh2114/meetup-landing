"use client";

import { useEffect, useState } from "react";
import { DdayChip } from "./Countdown";

const LINKS = [
  { href: "#curriculum", label: "강의 계획안" },
  { href: "#paradox", label: "역설" },
  { href: "#masters", label: "강사진" },
  { href: "#moment", label: "그날" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border px-5 py-3 transition-all duration-500 ${
          scrolled
            ? "border-line bg-ink/80 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_2px_rgba(212,175,55,0.6)]" />
          <span className="text-sm font-bold tracking-tight text-paper">
            경영자의 <span className="text-gold-grad">AI</span> 밋업
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[1.05rem] text-muted transition-colors hover:text-paper"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 rounded-full border border-line px-3 py-1.5">
          <span className="eng text-[0.95rem] tracking-[0.2em] text-muted">
            05.30
          </span>
          <span className="h-3 w-px bg-line" />
          <span className="text-sm font-bold">
            <DdayChip />
          </span>
        </div>
      </nav>
    </header>
  );
}
