import type { Messages } from "@/messages";

/**
 * 2 · how it works. Four short steps under the hero.
 *
 * Replaced the regulation list ("Reads against"), which read as legal and
 * intimidating. Kept to four steps and one line each so it scans in seconds.
 */
export function Coverage({ t }: { t: Messages }) {
  const steps = [
    { h: t.p1h, p: t.p1p },
    { h: t.p2h, p: t.p2p },
    { h: t.p3h, p: t.p3p },
    { h: t.p4h, p: t.p4p },
  ];

  return (
    <section className="band band--tight steps" id="how">
      <div className="wrap">
        <div className="lb">{t.s2lb}</div>
        <ol className="steps-row">
          {steps.map((s, i) => (
            <li key={s.h}>
              <span className="n" aria-hidden="true">
                {i + 1}
              </span>
              <b>{s.h}</b>
              <span className="d">{s.p}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
