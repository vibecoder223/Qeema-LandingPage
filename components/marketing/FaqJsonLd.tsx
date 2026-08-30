import type { Messages } from "@/messages";

/** Strips the inline <b> the copy deck carries, for the JSON-LD plain text. */
function plain(html: string): string {
  return html.replace(/<[^>]+>/g, "");
}

/**
 * FAQPage structured data, generated from the same deck the section renders.
 *
 * The source file kept a hand-written English copy of these answers that
 * could drift from the visible ones. Deriving them removes that failure.
 */
export function FaqJsonLd({ t }: { t: Messages }) {
  const pairs: [string, string][] = [
    [t.fq1, t.fa1Rich],
    [t.fq2, t.fa2Rich],
    [t.fq3, t.fa3Rich],
    [t.fq4, t.fa4Rich],
    [t.fq5, t.fa5Rich],
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pairs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: plain(a) },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
