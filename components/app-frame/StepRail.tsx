"use client";

import { useRef, useState } from "react";
import { useIsoLayoutEffect } from "@/components/motion/useIsoLayoutEffect";

type Status = "done" | "active" | "";

/**
 * Step rail · purpose: explanation · plays once per screen.
 *
 * The markup carries the finished state, so no-JS and reduced motion are
 * already correct. We strip it before paint, then tick it back on as the
 * screen enters view.
 */
export function StepRail({ steps, active }: { steps: string[]; active: number }) {
  const settled: Status[] = steps.map((_, i) =>
    i < active ? "done" : i === active ? "active" : "",
  );

  const [state, setState] = useState<Status[]>(settled);
  const ref = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useIsoLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    setState(steps.map(() => ""));

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.disconnect();
          settled.forEach((cls, i) => {
            if (!cls) return;
            timers.current.push(
              setTimeout(() => {
                setState((prev) => {
                  const next = [...prev];
                  next[i] = cls;
                  return next;
                });
              }, 300 + i * 240),
            );
          });
        }
      },
      { threshold: 0.4 },
    );

    io.observe(node);
    const pending = timers.current;
    return () => {
      io.disconnect();
      pending.forEach(clearTimeout);
    };
    // Bound once. Re-arming on prop change would replay the sequence.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="side-flow" ref={ref}>
      {steps.map((label, i) => (
        <div key={label} className={`flow-item ${state[i]}`.trimEnd()}>
          <i className="dot">{state[i] === "done" ? "✓" : ""}</i>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
