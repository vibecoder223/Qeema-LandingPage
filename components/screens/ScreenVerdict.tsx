"use client";

import { useState } from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import type { Messages } from "@/messages";

/**
 * Screen C · verdict toggle · purpose: state indication.
 *
 * Panel 0 says "not eligible" out loud. That is the honesty the spec
 * removed the prose limits section in favour of demonstrating.
 *
 * Entrance stagger was removed on request — both panels render settled.
 * The toggle itself stays interactive; that is not an animation, it is
 * the state the screen exists to show.
 */
export function ScreenVerdict({ t }: { t: Messages }) {
  const [panel, setPanel] = useState<0 | 1>(0);

  const rows = [
    { title: t.tr1, when: t.tr1d, tag: t.tg1 },
    { title: t.tr2, when: t.tr2d, tag: t.tg2 },
  ];

  return (
    <div>
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
              <ArrowIcon />
            </i>
            <div>
              <h4>{t.v2h}</h4>
              {rows.map((row) => (
                <div key={row.title} className="tender-row in">
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
