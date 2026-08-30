"use client";

import { useRef, useState } from "react";
import { useIsoLayoutEffect } from "@/components/motion/useIsoLayoutEffect";
import type { Messages } from "@/messages";

/**
 * Screen C · verdict toggle · purpose: state indication.
 *
 * Panel 0 says "not eligible" out loud. That is the honesty the spec
 * removed the prose limits section in favour of demonstrating.
 *
 * The redirect rows stagger in on first view. A hidden panel never
 * intersects, so switching to it settles its rows immediately.
 */
export function ScreenVerdict({ t }: { t: Messages }) {
  const [panel, setPanel] = useState<0 | 1>(0);
  const [rowsIn, setRowsIn] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    setRowsIn(false);

    const timers: ReturnType<typeof setTimeout>[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.disconnect();
          timers.push(setTimeout(() => setRowsIn(true), 420));
        }
      },
      { threshold: 0.3 },
    );

    io.observe(node);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  const rows = [
    { title: t.tr1, when: t.tr1d, tag: t.tg1 },
    { title: t.tr2, when: t.tr2d, tag: t.tg2 },
  ];

  return (
    <div ref={ref}>
      <div className={`vt-toggle${panel === 1 ? " b" : ""}`} role="tablist">
        <i className="pill" aria-hidden="true" />
        <button
          type="button"
          role="tab"
          aria-selected={panel === 0}
          className={panel === 0 ? "on" : undefined}
          onClick={() => setPanel(0)}
        >
          {t.vt1}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={panel === 1}
          className={panel === 1 ? "on" : undefined}
          onClick={() => setPanel(1)}
        >
          {t.vt2}
        </button>
      </div>

      <div className="vt-panels">
        <div
          role="tabpanel"
          className={`vt-panel${panel === 0 ? " show in" : ""}`}
        >
          <div className="verdict">
            <i className="ic" aria-hidden="true">
              !
            </i>
            <div>
              <h4>{t.v1h}</h4>
              <p>{t.v1p}</p>
            </div>
          </div>
          <div className="verdict ok" style={{ marginTop: 12 }}>
            <i className="ic dir" aria-hidden="true">
              →
            </i>
            <div>
              <h4>{t.v2h}</h4>
              {rows.map((row, i) => (
                <div
                  key={row.title}
                  className={`tender-row${rowsIn || panel === 1 ? " in" : ""}`}
                  style={
                    rowsIn ? { transitionDelay: `${i * 180}ms` } : undefined
                  }
                >
                  <span className="ti">
                    <b>{row.title}</b>
                    {row.when}
                  </span>
                  <span className="tag-plain">{row.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          role="tabpanel"
          className={`vt-panel${panel === 1 ? " show in" : ""}`}
        >
          <div className="verdict ok">
            <i className="ic" aria-hidden="true">
              ✓
            </i>
            <div>
              <h4>{t.v3h}</h4>
              <p>{t.v3p}</p>
            </div>
          </div>
          <div className="gcard">
            <div className="hd">
              <span className="tt">{t.g1}</span>
              <span className="am">QR 340,000</span>
            </div>
            <ul>
              <li>{t.g2}</li>
              <li>{t.g3}</li>
              <li>{t.g4}</li>
            </ul>
            <p className="fine">{t.g5}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
