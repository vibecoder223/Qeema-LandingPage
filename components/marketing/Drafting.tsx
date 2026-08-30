import { AppFrame } from "@/components/app-frame/AppFrame";
import { Reveal } from "@/components/motion/Reveal";
import { ScreenDraft } from "@/components/screens/ScreenDraft";
import { Rich } from "@/components/ui/Rich";
import type { Messages } from "@/messages";

/** 4 · drafts your answers, cited. PAS: solve. */
export function Drafting({ t }: { t: Messages }) {
  return (
    <section className="band">
      <div className="wrap">
        <div className="split flip">
          <Reveal className="split-txt">
            <span className="eyebrow">{t.s4eb}</span>
            <h2>{t.s4h}</h2>
            <p className="prose">{t.s4p}</p>
            <ul className="pts">
              <Rich as="li" html={t.s4l1Rich} />
              <Rich as="li" html={t.s4l2Rich} />
              <Rich as="li" html={t.s4l3Rich} />
            </ul>
          </Reveal>

          <Reveal className="split-shot">
            <AppFrame
              t={t}
              url="app.qeema.qa/tenders/0148/draft"
              crumb={t.c4}
              active={2}
              label={t.a11yDraft}
            >
              <ScreenDraft t={t} />
            </AppFrame>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
