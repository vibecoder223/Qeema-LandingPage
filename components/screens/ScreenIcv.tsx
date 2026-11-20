import type { Messages } from "@/messages";

/**
 * Screen E · ICV estimate. A static copy of the app's IcvSimulator.vue
 * (estimate card, split bar A–D + outside, industry marker, ranked advice),
 * same tokens and shapes, so the landing page shows the real product.
 *
 * Example numbers, consistent with Tawteen's formula: total QAR 2M,
 * QAR 628K spent in Qatar → 31%. Moves of QAR 100K (5% of the total, the app's default).
 * Imports: 100K × 38% ÷ 2M = +1.9. Training: 728K ÷ 2.1M − 31.4% = +3.3.
 * No-extra-spend first, as in the app.
 */
export function ScreenIcv({ t }: { t: Messages }) {
  /* One bar for everything spent in Qatar, then grey for outside (user, 2026-11-20: no part letters, no extra bars). */
  const segs = [{ k: "a", w: 31.4, label: "31%" }];
  const advice = [
    { gain: "+1.9", tag: t.ad1t, isNew: false, b: t.ad1, s: t.ad1s },
    { gain: "+3.3", tag: t.ad2t, isNew: true, b: t.ad2, s: t.ad2s },
  ];

  return (
    <div className="vs">
      <div className="vs-est">
        <div className="vs-top">
          <div>
            <span className="vs-lb">{t.ie1}</span>
            <span className="vs-pct">
              31<small>%</small>
            </span>
          </div>
          <p className="vs-say">{t.ie2}</p>
        </div>

        <div className="vs-track" aria-hidden="true">
          {segs.map((s) => (
            <span key={s.k} className={`vs-seg k-${s.k}`} style={{ flexBasis: `${s.w}%` }}>
              {s.label}
            </span>
          ))}
          <span className="vs-out" style={{ flexBasis: "68.6%" }}>
            {t.ieOut} 69%
          </span>
          <span className="vs-avg" style={{ insetInlineStart: "38%" }}>
            <i>{t.ieAvg}</i>
          </span>
        </div>

        <div className="vs-legend">
          <span>
            <i className="vs-sw in" />
            {t.ieIn} <b>628K</b>
          </span>
          <span>
            <i className="vs-sw out" />
            {t.ieOutQ} <b>1.37M</b>
          </span>
        </div>
      </div>

      <div className="vs-adv">
        <h4>
          <span className="vs-n">3</span>
          {t.ia}
        </h4>
        <ol>
          {advice.map((x) => (
            <li key={x.b}>
              <span className="vs-gain">{x.gain}</span>
              <div>
                <span className={x.isNew ? "vs-tag new" : "vs-tag"}>{x.tag}</span>
                <b>{x.b}</b>
                <span className="s">{x.s}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <p className="vs-note">{t.ie3}</p>
    </div>
  );
}
