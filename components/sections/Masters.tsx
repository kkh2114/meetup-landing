"use client";

import { useRef } from "react";
import Image from "next/image";
import { useReveal } from "@/lib/useReveal";
import { INSTRUCTORS } from "@/lib/curriculum";

export function Masters() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section
      id="masters"
      ref={root}
      className="relative mx-auto max-w-6xl px-6 py-16 md:py-20"
    >
      <p data-reveal className="reveal kicker mb-8">
        The Masters
      </p>
      <h2
        data-reveal
        className="reveal max-w-4xl font-display !leading-[1.26] text-[clamp(1.9rem,5.5vw,4rem)]"
      >
        묻고, 답하고, <span className="text-gold-grad">즉석에서 해결해주는</span>
        <br />
        진짜 전문가를 모셨습니다.
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {INSTRUCTORS.map((ins) => (
          <article
            key={ins.id}
            data-reveal
            className="reveal group flex flex-col overflow-hidden rounded-2xl border border-line bg-base transition-colors duration-500 hover:border-gold-dim"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={ins.photo}
                alt={ins.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={`transition-transform duration-700 ease-out group-hover:scale-105 ${
                  ins.illustration
                    ? "bg-white object-contain p-6"
                    : "object-cover object-top grayscale-[0.15] contrast-110"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base via-base/20 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-line bg-ink/70 px-3 py-1 text-xs text-gold backdrop-blur-md">
                {ins.cell.split("—")[0].trim()}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-7">
              <h3 className="font-display text-2xl text-paper">{ins.name}</h3>
              <p className="mt-1 text-sm text-gold">{ins.cellTag}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {ins.oneLiner}
              </p>

              {ins.quote && (
                <p className="mt-5 border-l-2 border-gold-dim pl-4 text-sm italic leading-relaxed text-paper/80">
                  “{ins.quote}”
                </p>
              )}

              <p className="mt-5 text-[1.02rem] leading-relaxed text-muted">
                {ins.bio}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {ins.keywords.map((k) => (
                  <span
                    key={k}
                    className="rounded-full border border-line px-3 py-1.5 text-[0.95rem] text-muted"
                  >
                    {k}
                  </span>
                ))}
              </div>

              {ins.link && (
                <a
                  href={ins.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eng mt-6 inline-flex items-center gap-2 self-start text-sm text-gold transition-colors hover:text-amber"
                >
                  {ins.link.label}
                  <span aria-hidden>↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
