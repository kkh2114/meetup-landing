"use client";

import { useRef } from "react";
import { useReveal } from "@/lib/useReveal";

const PREP_URL = "https://ai-workshop-setup-guide.vercel.app/#part-examples";

export function Challenge() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section
      ref={root}
      className="relative overflow-hidden border-y border-line bg-surface/40 py-16 text-center md:py-20"
    >
      <div className="gold-wash pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6">
        <p data-reveal className="reveal kicker mb-8">
          The Challenge
        </p>
        <h2
          data-reveal
          className="reveal font-display !leading-[1.26] text-[clamp(2rem,6vw,4.4rem)]"
        >
          구경하러 오시겠습니까,
          <br />
          <span className="text-gold-grad">바꾸러 오시겠습니까?</span>
        </h2>

        <p
          data-reveal
          className="reveal mt-10 max-w-xl leading-relaxed text-muted"
        >
          이 자리는 강의가 아닙니다.
          <br />
          당신의 비즈니스를 직접 던지는 자리입니다.
          <br />
          맨손으로 오지 마세요 —{" "}
          <span className="text-paper">그날을 위한 준비가 필요합니다.</span>
        </p>

        <a
          data-reveal
          href={PREP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal group mt-12 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-bold text-black transition-transform duration-300 hover:scale-[1.03]"
        >
          사전 준비물 확인하기
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            ↗
          </span>
        </a>
        <p data-reveal className="reveal mt-5 text-sm text-faint">
          노트북 · 계정 · 설치까지 — 그날 바로 시작할 수 있도록 미리 준비하세요.
        </p>
      </div>
    </section>
  );
}
