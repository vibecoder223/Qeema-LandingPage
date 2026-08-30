import { Reveal } from "@/components/motion/Reveal";
import type { Messages } from "@/messages";
import { Faq } from "./Faq";

/**
 * 7 · FAQ band. The heading is server-rendered; only the accordion below
 * it is client, so the questions and answers are in the initial HTML and
 * indexable whether or not JS runs.
 */
export function FaqSection({ t }: { t: Messages }) {
  return (
    <section className="band band--ink" id="faq">
      <div className="wrap">
        <Reveal className="faq-head">
          <span className="eyebrow">{t.s7eb}</span>
          <h2>{t.s7h}</h2>
          <p>{t.s7p}</p>
        </Reveal>
        <Reveal>
          <Faq t={t} />
        </Reveal>
      </div>
    </section>
  );
}
