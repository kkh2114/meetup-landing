"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useReveal } from "@/lib/useReveal";
import { COMMON, INSTRUCTORS, EVENT } from "@/lib/curriculum";
import { ScheduleTable, ScheduleMobile } from "@/components/ScheduleTable";

export function Curriculum() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [view, setView] = useState<"cells" | "all">("cells");
  useReveal(root);

  const cell = INSTRUCTORS[active];

  return (
    <section
      id="curriculum"
      ref={root}
      className="relative mx-auto max-w-6xl px-6 py-16 md:py-20"
    >
      <p data-reveal className="reveal kicker mb-8">
        The Curriculum
      </p>
      <h2
        data-reveal
        className="reveal max-w-4xl font-display !leading-[1.26] text-[clamp(1.9rem,5.5vw,4rem)]"
      >
        한 자리에 머물지 마세요.
        <br />
        <span className="text-gold-grad">셀을 넘나들며</span> 전부 흡수하세요.
      </h2>
      <p data-reveal className="reveal mt-6 max-w-2xl text-muted">
        세 개의 셀, 자유로운 이동.
        <br />
        하루 8~10시간의 집중 몰입.
        <br />
        각 셀마다 묻고, 답하고, 바로 써먹는 진짜 전문가가 기다리고 있습니다.
      </p>

      {/* 보기 전환 토글 */}
      <div
        data-reveal
        className="reveal mt-12 inline-flex rounded-full border border-line bg-base p-1"
      >
        {(
          [
            ["cells", "셀별 보기"],
            ["all", "강의안 통합보기"],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setView(key)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              view === key
                ? "bg-gold text-black"
                : "text-muted hover:text-paper"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── 셀별 보기 ── */}
      {view === "cells" && (
        <>
          <div className="mt-10 rounded-2xl border border-line bg-surface/50 p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="eng text-xs tracking-[0.3em] text-gold">
                ALL — 전체 공통
              </span>
            </div>
            <div className="grid gap-px overflow-hidden rounded-xl bg-line md:grid-cols-2">
              {COMMON.map((m) => (
                <div key={m.title} className="bg-base p-6">
                  <span className="eng text-xs text-faint">{m.time}</span>
                  <p className="mt-2 font-semibold text-paper">{m.title}</p>
                  {m.detail && (
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {m.detail}
                    </p>
                  )}
                  {m.gain && <p className="mt-3 text-sm text-gold">→ {m.gain}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {INSTRUCTORS.map((ins, i) => {
              const on = i === active;
              return (
                <button
                  key={ins.id}
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300 ${
                    on
                      ? "border-gold bg-surface-2"
                      : "border-line bg-base hover:border-gold-dim"
                  }`}
                >
                  <span
                    className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-full border ${
                      on ? "border-gold" : "border-line"
                    }`}
                  >
                    <Image
                      src={ins.photo}
                      alt={ins.name}
                      fill
                      sizes="48px"
                      className={`object-cover ${
                        ins.illustration ? "bg-white object-contain p-0.5" : ""
                      }`}
                    />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`eng block text-[0.95rem] tracking-[0.18em] ${
                        on ? "text-gold" : "text-faint"
                      }`}
                    >
                      {ins.cell.split("—")[0].trim().toUpperCase()}
                    </span>
                    <span className="block truncate font-bold text-paper">
                      {ins.cell.split("—")[1].trim()}
                    </span>
                    <span className="block truncate text-xs text-muted">
                      {ins.name} · {ins.cellTag}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div key={active} className="panel-in mt-10">
            <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-6">
              <div>
                <h3 className="font-display text-2xl text-paper md:text-3xl">
                  {cell.cell}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {cell.name} — {cell.oneLiner}
                </p>
              </div>
              <span className="eng text-xs tracking-[0.25em] text-gold">
                {cell.cellTag}
              </span>
            </div>

            <ol className="relative space-y-px overflow-hidden rounded-2xl border border-line bg-line">
              {cell.modules.map((m, i) => (
                <li
                  key={i}
                  className={`flex flex-col gap-4 p-6 md:flex-row md:gap-8 md:p-8 ${
                    m.pending ? "bg-surface/40" : "bg-base"
                  }`}
                >
                  <div className="flex shrink-0 items-baseline gap-4 md:w-52 md:flex-col md:items-start md:gap-2">
                    <span className="font-display text-3xl text-gold-dim">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {m.time && (
                      <span className="eng inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-3 py-1 text-sm text-gold">
                        {m.time}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`font-display text-xl md:text-2xl ${
                        m.pending ? "text-faint" : "text-paper"
                      }`}
                    >
                      {m.title}
                    </p>
                    {m.detail && (
                      <p className="mt-3 leading-relaxed text-muted">
                        {m.detail}
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {m.gain && (
                        <span className="rounded-full bg-surface-2 px-3 py-1.5 text-sm text-gold">
                          얻는 것 · {m.gain}
                        </span>
                      )}
                      {m.prep && (
                        <span className="rounded-full border border-line px-3 py-1.5 text-xs text-muted">
                          준비 · {m.prep}
                        </span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </>
      )}

      {/* ── 강의안 통합보기 ── */}
      {view === "all" && (
        <div className="mt-10">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted">
              시간 × 강사 전체 강의안. 참가자는 셀 간 자유롭게 이동할 수 있습니다.
            </p>
            <button
              onClick={() => window.print()}
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-black transition-transform duration-300 hover:scale-[1.03]"
            >
              <span aria-hidden>↓</span> 강의안 PDF 다운로드
            </button>
          </div>
          {/* 데스크탑: 표 / 모바일: 스택 카드 */}
          <div className="hidden overflow-x-auto rounded-2xl border border-line md:block">
            <div className="min-w-[860px]">
              <ScheduleTable variant="screen" />
            </div>
          </div>
          <div className="md:hidden">
            <ScheduleMobile />
          </div>
          <p className="mt-4 text-xs text-faint">
            ※ PDF는 가로(A4) 양식으로 저장됩니다. 다운로드 창에서 “PDF로 저장”을
            선택하세요.
          </p>
        </div>
      )}

      {/* ── 수강신청 ── */}
      <div className="mt-14 overflow-hidden rounded-2xl border border-gold/40 bg-surface-2">
        <div className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <span className="kicker">수강신청</span>
            <div className="mt-5 space-y-2">
              <p className="flex items-start gap-3 text-lg text-paper md:text-xl">
                <span aria-hidden className="mt-1 text-gold">
                  ●
                </span>
                수강신청은 <span className="text-gold-grad">강의 10분 전</span>에
                열립니다.
              </p>
              <p className="flex items-start gap-3 text-lg text-paper md:text-xl">
                <span aria-hidden className="mt-1 text-gold">
                  ●
                </span>
                <span>
                  <span className="text-gold-grad">1순위 · 2순위 · 3순위</span>까지
                  모두 <span className="underline decoration-gold/60">반드시</span>{" "}
                  신청해야 합니다.
                </span>
              </p>
            </div>
          </div>
          <a
            href={EVENT.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-bold text-black transition-transform duration-300 hover:scale-[1.03]"
          >
            수강신청 바로가기
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              ↗
            </span>
          </a>
        </div>
      </div>

      {/* ── 인쇄/PDF 전용 (화면에서는 숨김) ── */}
      <div id="print-schedule" className="hidden">
        <div className="mb-4 flex items-end justify-between border-b-2 border-[#1f3a5f] pb-3">
          <div>
            <h1 className="text-[20px] font-bold text-[#1f3a5f]">
              경영자의 AI 밋업 — 강의 계획안
            </h1>
            <p className="mt-1 text-[11px] text-[#475569]">
              백문이 불여 일견 (百聞不如一見)
            </p>
          </div>
          <div className="text-right text-[11px] text-[#334155]">
            <p className="font-semibold">
              {EVENT.dateLabel} · {EVENT.timeLabel}
            </p>
            <p>
              {EVENT.venue} · {EVENT.address}
            </p>
          </div>
        </div>
        <ScheduleTable variant="print" />
        <p className="mt-3 text-[9px] text-[#94a3b8]">
          ※ 참가자는 셀 간 자유롭게 이동하며 수강할 수 있습니다. · 12:00–13:00 점심
        </p>
      </div>
    </section>
  );
}
