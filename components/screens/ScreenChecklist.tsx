"use client";

import { useRef, useState } from "react";
import { useIsoLayoutEffect } from "@/components/motion/useIsoLayoutEffect";
import type { Messages } from "@/messages";

type Row = { label: string; count: string; spins?: boolean };

/**
 * Screen B · checklist · purpose: explanation · plays once.
 *
 * The last row spins before it settles. That row is the local-content
 * weighting, and the pause is the argument: it is the one the reader is
 * not expecting to be there.
 */
export function ScreenChecklist({ t }: { t: Messages }) {
  const rows: Row[] = [
    { label: t.cl1, count: t.cl1v },
    { label: t.cl2, count: t.cl2v },
    { label: t.cl3, count: t.cl3v },
    { label: t.cl4, count: t.cl4v },
    { label: t.cl5, count: t.cl5v, spins: true },
  ];

  const [state, setState] = useState<("" | "in" | "spin" | "checked")[]>(
    rows.map(() => "checked"),
  );
  const ref = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    setState(rows.map(() => ""));

    const timers: ReturnType<typeof setTimeout>[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.disconnect();

          rows.forEach((row, i) => {
            timers.push(
              setTimeout(
                () =>
                  setState((prev) => {
                    const next = [...prev];
                    next[i] = row.spins ? "spin" : "checked";
                    return next;
                  }),
                240 + i * 150,
              ),
            );
          });

          const last = rows.findIndex((r) => r.spins);
          if (last !== -1) {
            timers.push(
              setTimeout(
                () =>
                  setState((prev) => {
                    const next = [...prev];
                    next[last] = "checked";
                    return next;
                  }),
                240 + rows.length * 150 + 900,
              ),
            );
          }
        }
      },
      { threshold: 0.35 },
    );

    io.observe(node);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="checklist" ref={ref}>
      {rows.map((row, i) => {
        const s = state[i];
        const cls = ["cl-item", s === "" ? "" : "in", s === "spin" ? "spin" : "", s === "checked" ? "checked" : ""]
          .filter(Boolean)
          .join(" ");
        return (
          <div key={row.label} className={cls}>
            <i className="cm">✓</i>
            <span className="txt">{row.label}</span>
            <span className="ct">{row.count}</span>
          </div>
        );
      })}
    </div>
  );
}
