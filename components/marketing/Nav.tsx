import Link from "next/link";
import { Mark } from "@/components/ui/Mark";
import { other, type Locale } from "@/lib/i18n";
import type { Messages } from "@/messages";

/**
 * The language control is a <Link> to the other locale, not a button.
 *
 * That is the whole reason for the locale routing: /ar is a real URL with
 * its own title, description and hreflang, so it can be found in search.
 * The old in-page toggle rewrote innerHTML and left one indexable page.
 */
export function Nav({ t, locale }: { t: Messages; locale: Locale }) {
  const alt = other[locale];

  return (
    <nav className="nav">
      <div className="nav-l">
        <Mark />
        <span className="wm">Qeema</span>
      </div>
      <div className="nav-links">
        <a href="#reads">{t.n1}</a>
        <a href="#coverage">{t.n2}</a>
        <a href="#faq">{t.n4}</a>
        <a href="#start">{t.n3}</a>
      </div>
      <div className="nav-r">
        <Link className="lang" href={`/${alt.locale}`} hrefLang={alt.locale} aria-label={t.a11yLang}>
          {alt.label}
        </Link>
        <a className="btn btn-light btn-sm" href="#start">
          {t.cta}
        </a>
      </div>
    </nav>
  );
}
