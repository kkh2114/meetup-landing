"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { EVENT } from "@/lib/curriculum";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-kicker", { opacity: 0, y: 16, duration: 0.7 })
        .from(
          ".hero-word",
          { opacity: 0, yPercent: 120, duration: 0.9, stagger: 0.08 },
          "-=0.2",
        )
        .from(
          ".hero-sub > *",
          { opacity: 0, y: 18, duration: 0.7, stagger: 0.12 },
          "-=0.4",
        )
        .from(".hero-cue", { opacity: 0, duration: 0.8 }, "-=0.2");

      gsap.to(".hero-glow", {
        opacity: 0.55,
        scale: 1.08,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: root },
  );

  const line1 = ["당신이", "아는", "AI는,"];
  const line2 = ["경영자의", "AI가", "아닙니다."];

  return (
    <section
      id="top"
      ref={root}
      className="gold-wash relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-28 text-center sm:py-20"
    >
      {/* ambient */}
      <div className="hero-glow pointer-events-none absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.16),transparent_60%)] opacity-30 blur-3xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-12%] select-none text-center font-display text-[34vw] leading-none text-white/[0.015]"
      >
        MEETUP
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <p className="hero-kicker kicker mb-8">
          경영자만을 위한 {EVENT.nature}
        </p>

        <h1 className="font-display !leading-[1.26] text-[clamp(2.6rem,8.5vw,6.2rem)]">
          <span className="block overflow-hidden pb-[0.12em]">
            {line1.map((w) => (
              <span key={w} className="hero-word mr-[0.22em] inline-block">
                {w}
              </span>
            ))}
          </span>
          <span className="block overflow-hidden pb-[0.12em]">
            {line2.map((w, i) => (
              <span
                key={w}
                className={`hero-word mr-[0.22em] inline-block ${
                  i < 2 ? "text-gold-grad" : ""
                }`}
              >
                {w}
              </span>
            ))}
          </span>
        </h1>

        <div className="hero-sub mt-10 flex flex-col items-center gap-4">
          <p className="max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            실무자의 AI와 경영자의 AI는 다릅니다.
            <br /> 백문이 불여 일견 —{" "}
            <span className="text-paper">하루 만에 직접 보세요.</span>
          </p>
          <div className="mt-2 flex flex-col items-center gap-1.5 text-sm text-paper sm:flex-row sm:gap-4">
            <span className="eng tracking-widest text-gold">
              {EVENT.dateLabel}
            </span>
            <span className="hidden h-3 w-px bg-line sm:block" />
            <span className="text-muted">{EVENT.timeLabel}</span>
          </div>
        </div>
      </div>

      <a
        href="#curriculum"
        className="hero-cue absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-faint transition-colors hover:text-gold"
      >
        <span className="eng text-[0.95rem] tracking-[0.3em]">SCROLL</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
      </a>
    </section>
  );
}
