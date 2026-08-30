"use client";

import { useRef, useState } from "react";
import { useIsoLayoutEffect } from "@/components/motion/useIsoLayoutEffect";
import type { Messages } from "@/messages";

/** Screen A · dropzone · purpose: explanation · plays once. */
export function ScreenDropzone({ t }: { t: Messages }) {
  const [hover, setHover] = useState(false);
  const [landed, setLanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      setHover(true);
      setLanded(true);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.disconnect();
          timers.push(setTimeout(() => setHover(true), 420));
          timers.push(setTimeout(() => setLanded(true), 760));
        }
      },
      { threshold: 0.35 },
    );

    io.observe(node);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div ref={ref} className={`dropzone${hover ? " hover" : ""}`}>
      <div className="dz-icon" aria-hidden="true">
        ↑
      </div>
      <h4>{t.dz1}</h4>
      <p>{t.dz2}</p>
      <div className={`dz-file${landed ? " in" : ""}`}>
        <div className="fi" aria-hidden="true">
          PDF
        </div>
        <div className="ft">
          <div className="fn">{t.dzFile}</div>
          <div className="fs">{t.dzMeta}</div>
        </div>
        <div className="dz-check" aria-hidden="true">
          ✓
        </div>
      </div>
    </div>
  );
}
