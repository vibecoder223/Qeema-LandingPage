import type { Messages } from "@/messages";

/** 8 · final CTA. PAS: action. Third and last CTA placement. */
export function FinalCta({ t }: { t: Messages }) {
  return (
    <section className="band" id="start-band">
      <div className="wrap">
        <div className="final" id="start">
          <h2>{t.fh}</h2>
          <p className="lead">{t.fp}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#start">
              {t.cta}
            </a>
            <a className="btn btn-outline" href="#start">
              {t.fcta2}
            </a>
          </div>
          <p className="reversal">{t.rev}</p>
        </div>
      </div>
    </section>
  );
}
