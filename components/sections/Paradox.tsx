"use client";

import { useRef } from "react";
import { useReveal } from "@/lib/useReveal";

export function Paradox() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section
      id="paradox"
      ref={root}
      className="relative mx-auto max-w-6xl px-6 py-16 md:py-20"
    >
      <p data-reveal className="reveal kicker mb-10 text-center">
        The Paradox
      </p>

      <h2
        data-reveal
        className="reveal mx-auto max-w-5xl text-center font-display !leading-[1.26] text-[clamp(2rem,6.5vw,4.6rem)]"
      >
        AI는 IT가 아니라,
        <br />
        <span className="text-gold-grad">HR입니다.</span>
      </h2>

      <p
        data-reveal
        className="reveal mx-auto mt-10 max-w-2xl text-center text-lg text-muted"
      >
        도구를 깔았다고 도입이 아닙니다.
        <br />
        누구에게 어떤 역할을 맡길지 설계되지 않은 AI는, 그저 비용일 뿐입니다.
      </p>

      {/* contrast */}
      <div className="mt-24 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
        <div
          data-reveal
          className="reveal bg-base p-10 md:p-14"
        >
          <span className="eng text-xs font-bold tracking-[0.3em] text-faint">
            실무자의 AI
          </span>
          <p className="mt-6 font-display text-3xl text-paper md:text-4xl">
            시간을 줄입니다
          </p>
          <p className="mt-5 leading-relaxed text-muted">
            자신의 실무 세계관 안에서 AI를 받아들입니다.
            <br />
            실수를 줄이고 시간을 아끼는
            <span className="text-paper"> 효율성</span>에 집중합니다.
          </p>
        </div>

        <div
          data-reveal
          className="reveal relative bg-surface-2 p-10 md:p-14"
        >
          <span className="eng text-xs font-bold tracking-[0.3em] text-gold">
            경영자의 AI
          </span>
          <p className="mt-6 font-display text-3xl text-gold-grad md:text-4xl">
            미래를 정의합니다
          </p>
          <p className="mt-5 leading-relaxed text-muted">
            매출인지, 이익인지, 철학의 완성인지 —{" "}
            <span className="text-paper">효과</span>의 의미를 규정합니다.
            <br />
            그것은 오직 경영자만이 하실 수 있습니다.
          </p>
        </div>
      </div>

      <p
        data-reveal
        className="reveal mx-auto mt-20 max-w-3xl text-center font-display text-[clamp(1.4rem,3.6vw,2.4rem)] leading-snug"
      >
        효율은 과정일 뿐, 효과는 따라오지 않습니다.
        <br />
        세상은 이것을{" "}
        <span className="text-gold-grad">“AI 생산성의 역설”</span>이라 부릅니다.
      </p>
    </section>
  );
}
