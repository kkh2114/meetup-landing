"use client";

import { useEffect, useState } from "react";

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

const ZERO: Remaining = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  done: false,
};

function diff(target: number): Remaining {
  const ms = target - Date.now();
  if (ms <= 0) return { ...ZERO, done: true };
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
    done: false,
  };
}

/** D-day countdown. Returns nulls until mounted to avoid hydration mismatch. */
export function useCountdown(targetISO: string) {
  const [r, setR] = useState<Remaining | null>(null);

  useEffect(() => {
    const target = new Date(targetISO).getTime();
    setR(diff(target));
    const id = setInterval(() => setR(diff(target)), 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  return r;
}
