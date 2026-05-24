"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const SENTENCES = [
  "생성형 AI는 답이 정의된 알고리즘이 아닙니다.",
  "답을 향해 가는 여정일 뿐입니다.",
  "경영자가 그 속성을 알지 못하면, 조직은 위험에 빠집니다.",
];

export function Reframe() {
  const root = useRef<HTMLElement>(null);
  const pinned = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const words = gsap.utils.toArray<HTMLElement>(".rf-word");

      if (reduce) {
        gsap.set(words, { opacity: 1 });
        return;
      }

      gsap.set(words, { opacity: 0.14 });
      gsap.to(words, {
        opacity: 1,
        ease: "none",
        stagger: 1,
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=130%",
          scrub: true,
          pin: pinned.current,
        },
      });

      // closing metaphor fades up near the end of the pin
      gsap.from(".rf-metaphor", {
        opacity: 0,
        y: 30,
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=130%",
          scrub: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section id="reframe" ref={root} className="relative">
      <div
        ref={pinned}
        className="flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6"
      >
        <div className="mx-auto w-full max-w-5xl text-center">
          <p className="kicker mb-12">The Reframe</p>

          <p className="font-display text-[clamp(1.8rem,5vw,3.6rem)] leading-[1.18]">
            {SENTENCES.map((s, si) => (
              <span key={si} className="block">
                {s.split(" ").map((w, i) => (
                  <span
                    key={i}
                    className="rf-word mr-[0.28em] inline-block"
                  >
                    {w}
                  </span>
                ))}
              </span>
            ))}
          </p>

          <div className="rf-metaphor mt-16 border-t border-line pt-12">
            <p className="mx-auto max-w-4xl text-[clamp(1.1rem,2.6vw,1.7rem)] leading-relaxed text-muted">
              설계되지 않은 AX는, 도면 없이 지어지는 건물과 같습니다.
              <br />
              <span className="text-gold-grad">
                좋은 건물이 되길 바라는 건, 복권 당첨 같은 희망일 뿐입니다.
              </span>
            </p>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted">
              이 밋업의 목적 — AI 생태계 전체를 보고, 조직 재설계와 올바른 AX를
              설계하는 경영자의 눈을 갖는 것입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
