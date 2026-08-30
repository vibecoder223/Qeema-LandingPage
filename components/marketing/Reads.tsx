import { AppFrame } from "@/components/app-frame/AppFrame";
import { Reveal } from "@/components/motion/Reveal";
import { ScreenChecklist } from "@/components/screens/ScreenChecklist";
import { Rich } from "@/components/ui/Rich";
import type { Messages } from "@/messages";

/** 3 · what it pulls out. PAS: agitate. */
export function Reads({ t }: { t: Messages }) {
  return (
    <section className="band" id="reads">
      <div className="wrap">
        <div className="split">
          <Reveal className="split-txt">
            <span className="eyebrow">{t.s3eb}</span>
            <h2>{t.s3h}</h2>
            <p className="prose">{t.s3p}</p>
            <ul className="pts">
              <Rich as="li" html={t.s3l1Rich} />
              <Rich as="li" html={t.s3l2Rich} />
              <Rich as="li" html={t.s3l3Rich} />
            </ul>
          </Reveal>

          <Reveal className="split-shot">
            <AppFrame
              t={t}
              url="app.qeema.qa/tenders/0148/extract"
              crumb={t.c3}
              active={1}
              label={t.a11yExtract}
            >
              <ScreenChecklist t={t} />
            </AppFrame>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
