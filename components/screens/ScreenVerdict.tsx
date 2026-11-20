"use client";

import { useState } from "react";
import type { Messages } from "@/messages";

/**
 * Screen C · "Can you bid on this tender?" — a static copy of the app's
 * VerdictTab.vue: verdict card, evidence rows, then the go / no-go line.
 *
 * The toggle shows the same QatarEnergy LNG tender (energy sector, so the
 * ICV gate applies) for a company without and with a certificate. Wording
 * is the app's own (lib/labels.ts verdictHeadline / verdictReason).
 */
export function ScreenVerdict({ t }: { t: Messages }) {
  const [panel, setPanel] = useState<0 | 1>(0);
  const certified = panel === 1;

  return (
    <div>
      <div className={`vt-toggle${certified ? " b" : ""}`} role="tablist">
        <i className="pill" aria-hidden="true" />
        <button type="button" role="tab" aria-selected={!certified} className={!certified ? "on" : undefined} onClick={() => setPanel(0)}>
          {t.vt1}
        </button>
        <button type="button" role="tab" aria-selected={certified} className={certified ? "on" : undefined} onClick={() => setPanel(1)}>
          {t.vt2}
        </button>
      </div>

      <div role="tabpanel">
        <div className="vq">{t.vq}</div>

        <div className={certified ? "verdict ok" : "verdict"}>
          <i className="ic" aria-hidden="true">
            {certified ? "✓" : "!"}
          </i>
          <div>
            <h4>{certified ? t.v3h : t.v1h}</h4>
            <p>{certified ? t.v3p : t.v1p}</p>
            {!certified ? <p className="vfine">{t.v1f}</p> : null}
          </div>
        </div>

        <div className="ev">
          <div className="ev-h">{t.ev}</div>
          <div className="ev-r">
            <span>{t.evE}</span>
            <b>{t.evEv}</b>
          </div>
          <div className="ev-r">
            <span>{t.evC}</span>
            <b>{certified ? t.evC1 : t.evC0}</b>
          </div>
        </div>

        <div className="decl">
          <b>{certified ? t.dq1 : t.dq0}</b>
          {certified ? (
            <span className="decb">
              <span className="mbtn p">{t.dStart}</span>
            </span>
          ) : (
            <span className="decb">
              <span className="mbtn">{t.dNo}</span>
              <span className="mbtn p">{t.dYes}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
