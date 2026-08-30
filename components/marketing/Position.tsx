import { AppFrame } from "@/components/app-frame/AppFrame";
import { Reveal } from "@/components/motion/Reveal";
import { ScreenVerdict } from "@/components/screens/ScreenVerdict";
import type { Messages } from "@/messages";

/**
 * 5 · verdict. PAS: solve. Second of three CTA placements.
 *
 * The frame carries no aria-label: it is interactive, so it is not an
 * image, and the toggle inside it is reachable and announced on its own.
 */
export function Position({ t }: { t: Messages }) {
  return (
    <section className="band">
      <div className="wrap">
        <div className="split">
          <Reveal className="split-txt">
            <span className="eyebrow">{t.s5eb}</span>
            <h2>{t.s5h}</h2>
            <p className="prose">{t.s5p}</p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#start">
                {t.cta}
              </a>
            </div>
            <p className="reversal">{t.rev}</p>
          </Reveal>

          <Reveal className="split-shot">
            <AppFrame
              t={t}
              url="app.qeema.qa/tenders/0148/position"
              crumb={t.c5}
              active={3}
            >
              <ScreenVerdict t={t} />
            </AppFrame>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
