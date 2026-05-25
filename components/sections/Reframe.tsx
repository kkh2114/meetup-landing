"use client";

import { useRef } from "react";
import { useReveal } from "@/lib/useReveal";

export function Reframe() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section
      id="reframe"
      ref={root}
      className="relative mx-auto max-w-5xl px-6 py-16 text-center md:py-20"
    >
      <p data-reveal className="reveal kicker mb-10">
        The Reframe
      </p>

      {/* A. 알고리즘 — 가장 작게 (도입) */}
      <p
        data-reveal
        className="reveal mx-auto max-w-3xl font-display !leading-[1.45] text-[clamp(1.1rem,2.8vw,1.55rem)] text-muted"
      >
        생성형 AI는 답이 정의된 알고리즘이 아닙니다.
        <br />
        답을 향해 가는 여정일 뿐입니다.
        <br />
        경영자가 그 속성을 알지 못하면, 조직은 위험에 빠집니다.
      </p>

      {/* B. 건물 비유 — 중간 */}
      <div
        data-reveal
        className="reveal mx-auto mt-14 max-w-4xl border-t border-line pt-14"
      >
        <p className="mx-auto font-display !leading-[1.4] text-[clamp(1.4rem,3.8vw,2.3rem)] text-paper">
          설계되지 않은 AX는, 도면 없이 지어지는 건물과 같습니다.
          <br />
          좋은 건물이 되길 바라는 건, 복권 당첨 같은 희망일 뿐입니다.
        </p>
      </div>

      {/* C. 밋업에서 얻는 것 — 가장 크게 (클라이맥스) */}
      <div data-reveal className="reveal mt-16">
        <p className="kicker mb-6">이 밋업에서 얻는 것</p>
        <p className="mx-auto max-w-4xl font-display !leading-[1.32] text-[clamp(2rem,6vw,3.8rem)] text-gold-grad">
          AI 생태계 전체를 보고, 조직 재설계와 올바른 AX를 설계하는 경영자의 눈.
        </p>
      </div>
    </section>
  );
}
