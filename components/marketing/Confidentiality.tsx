import { Reveal } from "@/components/motion/Reveal";
import { Rich } from "@/components/ui/Rich";
import type { Messages } from "@/messages";

/**
 * 6b · confidentiality.
 *
 * These five lines are commitments, not copy. Anything built behind this
 * page — storage, auth, support tooling, backups — has to satisfy them.
 */
export function Confidentiality({ t }: { t: Messages }) {
  const guards = [
    { title: t.g1t, body: t.g1dRich },
    { title: t.g2t, body: t.g2dRich },
    { title: t.g3t, body: t.g3dRich },
    { title: t.g4t, body: t.g4dRich },
    { title: t.g5t, body: t.g5dRich },
  ];

  return (
    <section className="band band--panel" id="confidentiality">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">{t.cfeb}</span>
          <h2 className="h2 narrow">{t.cfh}</h2>
          <p className="lead">{t.cfp}</p>
        </Reveal>

        <Reveal className="guards">
          {guards.map((g) => (
            <div className="guard" key={g.title}>
              <span className="t">{g.title}</span>
              <Rich className="d" html={g.body} />
            </div>
          ))}
        </Reveal>

        <p className="guard-note">{t.cfn}</p>
      </div>
    </section>
  );
}
