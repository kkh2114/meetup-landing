"use client";

import { useCountdown } from "@/lib/useCountdown";
import { EVENT } from "@/lib/curriculum";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function DdayChip() {
  const r = useCountdown(EVENT.dateISO);
  return (
    <span className="eng tabular-nums text-gold">
      {r ? (r.done ? "D-DAY" : `D-${r.days}`) : "D- "}
    </span>
  );
}

export function CountdownFull() {
  const r = useCountdown(EVENT.dateISO);
  const units: [string, number | null][] = [
    ["DAYS", r?.days ?? null],
    ["HRS", r?.hours ?? null],
    ["MIN", r?.minutes ?? null],
    ["SEC", r?.seconds ?? null],
  ];

  return (
    <div className="flex items-stretch gap-2 sm:gap-4">
      {units.map(([label, val], i) => (
        <div key={label} className="flex items-stretch gap-2 sm:gap-4">
          <div className="flex flex-col items-center">
            <span className="eng tabular-nums font-display text-[clamp(2.2rem,7vw,4.2rem)] !leading-none text-gold-grad">
              {val === null ? "--" : pad(val)}
            </span>
            <span className="eng mt-2 text-[0.95rem] tracking-[0.25em] text-muted">
              {label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="font-display text-[clamp(2.2rem,7vw,4.2rem)] !leading-none text-gold-dim/60 select-none">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
