import { AppFrame } from "@/components/app-frame/AppFrame";
import { Reveal } from "@/components/motion/Reveal";
import { ScreenIcv } from "@/components/screens/ScreenIcv";
import { Rich } from "@/components/ui/Rich";
import type { Messages } from "@/messages";

/** 5b · ICV advisor: likely score from the company's own spend, and what would raise it. */
export function IcvAdvisor({ t }: { t: Messages }) {
  return (
    <section className="band" id="icv">
      <div className="wrap">
        <div className="split flip">
          <Reveal className="split-txt">
            <span className="eyebrow">{t.s6eb}</span>
            <h2>{t.s6h}</h2>
            <div className="icv-call">
              <Rich as="p" html={t.s6cRich} />
              <span className="src">{t.s6cSrc}</span>
            </div>
            <p className="prose">{t.s6p}</p>
            <ul className="pts">
              <Rich as="li" html={t.s6l1Rich} />
              <Rich as="li" html={t.s6l2Rich} />
              <Rich as="li" html={t.s6l3Rich} />
            </ul>
          </Reveal>

          <Reveal className="split-shot">
            <AppFrame t={t} url="app.qeema.qa/icv" crumb={t.c6} active={3} label={t.ie1}>
              <ScreenIcv t={t} />
            </AppFrame>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
