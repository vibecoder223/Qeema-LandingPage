import { Mark } from "@/components/ui/Mark";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/messages";

export function Footer({ t, locale }: { t: Messages; locale: Locale }) {
  return (
    <footer>
      <div className="wrap in">
        <div className="lock2">
          <Mark />
          <span className="wm2">Qeema</span>
        </div>
        <div className="fmeta">
          <a href="#coverage">{t.fn1}</a>
          <a href="#confidentiality">{t.fn5}</a>
          <a href="#start">{t.fn2}</a>
          <a href={`/${locale}/privacy`}>{t.fn4}</a>
          <span>{t.city}</span>
        </div>
      </div>
    </footer>
  );
}
