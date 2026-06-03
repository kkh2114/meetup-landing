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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 메뉴 열렸을 때 배경 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-[max(1rem,env(safe-area-inset-top))]">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between gap-4 rounded-3xl border px-4 py-2.5 transition-all duration-500 sm:rounded-full sm:px-5 sm:py-3 ${
          solid
            ? "border-line bg-ink/80 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-gold shadow-[0_0_12px_2px_rgba(212,175,55,0.6)]" />
          <span className="whitespace-nowrap text-sm font-bold tracking-tight text-paper">
            경영자의 <span className="text-gold-grad">AI</span> 밋업
          </span>
        </a>

        {/* 데스크탑 링크 */}
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

        <div className="flex shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-line px-3 py-1.5">
            <span className="eng text-[0.95rem] tracking-[0.2em] text-muted">
              05.30
            </span>
            <span className="h-3 w-px bg-line" />
            <span className="text-sm font-bold">
              <DdayChip />
            </span>
          </div>

          {/* 모바일 햄버거 */}
          <button
            type="button"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-paper md:hidden"
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 block h-0.5 w-4 bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-4 bg-current transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-4 bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* 모바일 드롭다운 메뉴 */}
      <div
        className={`fixed inset-x-4 top-[calc(env(safe-area-inset-top)+4.5rem)] z-40 origin-top rounded-3xl border border-line bg-ink/95 p-3 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <ul className="flex flex-col">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base text-paper transition-colors hover:bg-surface-2"
              >
                {l.label}
                <span aria-hidden className="text-gold">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
