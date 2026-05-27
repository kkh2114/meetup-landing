"use client";

import { useRef } from "react";
import { useReveal } from "@/lib/useReveal";
import { CountdownFull } from "@/components/Countdown";
import { EVENT } from "@/lib/curriculum";

const ICS = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "PRODID:-//meetup//AI//KO",
  "BEGIN:VEVENT",
  "UID:ceo-ai-meetup-20260530@meetup",
  "DTSTART:20260530T000000Z",
  "DTEND:20260530T090000Z",
  "SUMMARY:경영자의 AI 밋업",
  "LOCATION:주식회사 청밀 (서울시 송파구 양재대로 932 업무동 9층 16호)",
  "DESCRIPTION:백문이 불여 일견 — 경영자를 위한 비공개 AI 밋업",
  "END:VEVENT",
  "END:VCALENDAR",
].join("\r\n");

export function Moment() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  const addToCalendar = () => {
    const blob = new Blob([ICS], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ceo-ai-meetup.ics";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="moment"
      ref={root}
      className="gold-wash relative overflow-hidden px-6 py-16 text-center md:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12),transparent_65%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl">
        <p data-reveal className="reveal kicker mb-10">
          The Moment
        </p>

        <h2
          data-reveal
          className="reveal mx-auto max-w-3xl font-display !leading-[1.26] text-[clamp(2.2rem,7vw,5.2rem)]"
        >
          남들 3년치 AI 경험을,
          <br />
          <span className="text-gold-grad">단 하루에.</span>
        </h2>

        <div data-reveal className="reveal mt-16 flex justify-center">
          <CountdownFull />
        </div>

        <div
          data-reveal
          className="reveal mx-auto mt-16 flex max-w-2xl flex-col items-center gap-6 border-y border-line py-8"
        >
          <dl className="grid w-full grid-cols-1 gap-6 text-left sm:grid-cols-3">
            <div>
              <dt className="eng text-[0.98rem] tracking-[0.24em] text-faint">
                DATE
              </dt>
              <dd className="mt-2 font-semibold text-paper">
                {EVENT.dateLabel}
              </dd>
              <dd className="text-sm text-muted">{EVENT.timeLabel}</dd>
            </div>
            <div>
              <dt className="eng text-[0.98rem] tracking-[0.24em] text-faint">
                WHO
              </dt>
              <dd className="mt-2 font-semibold text-paper">
                {EVENT.audience}
              </dd>
              <dd className="text-sm text-muted">{EVENT.nature}</dd>
            </div>
            <div>
              <dt className="eng text-[0.98rem] tracking-[0.24em] text-faint">
                PLACE
              </dt>
              <dd className="mt-2">
                <a
                  href={EVENT.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 font-semibold text-paper transition-colors hover:text-gold"
                  aria-label={`${EVENT.venue} 네이버 지도에서 보기`}
                >
                  {EVENT.venue}
                  <span
                    aria-hidden
                    className="text-gold transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
              </dd>
              <dd className="text-sm text-muted">{EVENT.venueDesc}</dd>
              <dd>
                <a
                  href={EVENT.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-flex items-center gap-1 text-xs text-gold/80 transition-colors hover:text-gold"
                >
                  네이버 지도로 길찾기
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <p
          data-reveal
          className="reveal mx-auto mt-16 max-w-2xl font-display text-[clamp(1.4rem,4vw,2.6rem)] leading-snug"
        >
          준비되셨나요?
          <br />
          <span className="text-gold-grad">
            그날, 당신의 경영은 다시 시작됩니다.
          </span>
        </p>

        <div data-reveal className="reveal mt-12">
          <button
            onClick={addToCalendar}
            className="inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-bold text-black transition-transform duration-300 hover:scale-[1.03]"
          >
            <span aria-hidden>＋</span> 캘린더에 그날을 새겨두세요
          </button>
        </div>
      </div>

      <footer className="relative mx-auto mt-28 flex max-w-6xl flex-col items-center gap-4 border-t border-line pt-10 text-center">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="font-bold tracking-tight">
            경영자의 <span className="text-gold-grad">AI</span> 밋업
          </span>
        </div>
        <p className="text-sm text-faint">
          {EVENT.subtitle} {EVENT.subtitleHanja} · {EVENT.dateLabel}
        </p>
        <p className="eng text-[1rem] tracking-[0.18em] text-faint">
          총괄 퍼실리테이션 — 김길호
        </p>
      </footer>
    </section>
  );
}
