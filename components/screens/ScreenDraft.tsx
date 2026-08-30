"use client";

import { useRef, useState } from "react";
import { useIsoLayoutEffect } from "@/components/motion/useIsoLayoutEffect";
import type { Messages } from "@/messages";

/**
 * Screen D · answers land, then cite themselves · purpose: explanation.
 *
 * The citation fading in after the answer is the whole argument of the
 * section: the sentence is drafted, then it names where it came from.
 * The second card has no source and stays empty, on purpose.
 */
export function ScreenDraft({ t }: { t: Messages }) {
  const cards = [
    {
      q: t.q1,
      a: t.a1,
      cite: t.ci1,
      src: t.sr1,
      sourced: true,
    },
    {
      q: t.q3,
      a: t.a3,
      cite: t.ci3,
      src: null,
      sourced: false,
    },
  ];

  const [state, setState] = useState(cards.map(() => ({ in: true, sourced: true })));
  const ref = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    setState(cards.map(() => ({ in: false, sourced: false })));

    const timers: ReturnType<typeof setTimeout>[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.disconnect();

          cards.forEach((_, i) => {
            const base = 300 + i * 260;
            timers.push(
              setTimeout(
                () =>
                  setState((prev) => {
                    const next = [...prev];
                    next[i] = { ...next[i], in: true };
                    return next;
                  }),
                base,
              ),
            );
            timers.push(
              setTimeout(
                () =>
                  setState((prev) => {
                    const next = [...prev];
                    next[i] = { ...next[i], sourced: true };
                    return next;
                  }),
                base + 340,
              ),
            );
          });
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
    <div className="qa-list" ref={ref}>
      {cards.map((card, i) => (
        <div
          key={card.q}
          className={`qa${state[i].in ? " in" : ""}${state[i].sourced ? " sourced" : ""}`}
        >
          <div className="q">{card.q}</div>
          <div className={card.sourced ? "a" : "a nosrc"}>{card.a}</div>
          <div className="meta">
            <span className={card.sourced ? "cite" : "tag-plain"}>{card.cite}</span>
          </div>
          {card.src ? <div className="src">{card.src}</div> : null}
        </div>
      ))}
    </div>
  );
}
