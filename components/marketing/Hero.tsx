import { AppFrame } from "@/components/app-frame/AppFrame";
import { Reveal } from "@/components/motion/Reveal";
import { ScreenDropzone } from "@/components/screens/ScreenDropzone";
import { Rich } from "@/components/ui/Rich";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/messages";
import { Nav } from "./Nav";

/** 1 · hero — the only ink band above the fold. PAS: problem. */
export function Hero({ t, locale }: { t: Messages; locale: Locale }) {
  return (
    <header className="hero">
      <div className="wrap">
        <Nav t={t} locale={locale} />

        <div className="hero-inner">
          <Rich as="h1" html={t.h1Rich} />
          <p className="lead">{t.hsub}</p>
          <div className="cta-row">
            <a className="btn btn-light" href="#start">
              {t.cta}
            </a>
            <a className="btn btn-onink" href="#reads">
              {t.cta2}
            </a>
          </div>
          <p className="reversal">{t.rev}</p>
        </div>

        <Reveal className="hero-shot">
          <AppFrame
            t={t}
            url="app.qeema.qa/tenders/new"
            crumb={t.c1}
            active={0}
            label={t.a11yHeroShot}
          >
            <ScreenDropzone t={t} />
          </AppFrame>
        </Reveal>
      </div>
    </header>
  );
}
