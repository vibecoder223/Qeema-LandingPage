import type { Messages } from "@/messages";

/**
 * 2 · coverage strip.
 *
 * Stands in for testimonials. The spec omits those because there are zero
 * customers, and inventing quotes is fabrication — real instrument coverage
 * carries the credibility instead.
 */
export function Coverage({ t }: { t: Messages }) {
  const instruments = [
    { name: t.s2a, who: t.s2ai },
    { name: t.s2b, who: t.s2bi },
    { name: t.s2c, who: t.s2ci },
    { name: t.s2d, who: t.s2di },
  ];

  return (
    <section className="band band--tight strip" id="coverage">
      <div className="wrap">
        <div className="lb">{t.s2lb}</div>
        <div className="strip-row">
          {instruments.map((it) => (
            <span key={it.name}>
              {it.name}
              <i>{it.who}</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
