import { notFound } from "next/navigation";
import { Confidentiality } from "@/components/marketing/Confidentiality";
import { Coverage } from "@/components/marketing/Coverage";
import { Drafting } from "@/components/marketing/Drafting";
import { FaqJsonLd } from "@/components/marketing/FaqJsonLd";
import { FaqSection } from "@/components/marketing/FaqSection";
import { FinalCta } from "@/components/marketing/FinalCta";
import { Footer } from "@/components/marketing/Footer";
import { Hero } from "@/components/marketing/Hero";
import { Position } from "@/components/marketing/Position";
import { Reads } from "@/components/marketing/Reads";
import { isLocale } from "@/lib/i18n";
import { getMessages } from "@/messages";

/**
 * The landing page. Eight sections: the canonical ten minus testimonials
 * and pricing, both omitted deliberately — see qeema-landing-spec.md §6.
 *
 * Everything here is a server component. The only client code on the page
 * is Reveal, the four screens, and the FAQ accordion.
 */
export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getMessages(locale);

  return (
    <>
      <Hero t={t} locale={locale} />
      <Coverage t={t} />
      <Reads t={t} />
      <Drafting t={t} />
      <Position t={t} />
      <Confidentiality t={t} />
      <FaqSection t={t} />
      <FinalCta t={t} />
      <Footer t={t} locale={locale} />
      <FaqJsonLd t={t} />
    </>
  );
}
