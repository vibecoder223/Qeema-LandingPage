"use client";

import { useId, useState } from "react";
import { Rich } from "@/components/ui/Rich";
import type { Messages } from "@/messages";

/**
 * 7 · FAQ · purpose: preventing a jarring change · one open at a time.
 *
 * Client, not <details>. A <details name> group would cost zero JS and give
 * the one-open-at-a-time behaviour natively, but there is no interoperable
 * way to transition it open yet — ::details-content is Chromium-only, and
 * this audience is heavily iOS Safari. The 0fr→1fr grid transition is kept
 * instead, which needs the open state in JS.
 */
export function Faq({ t }: { t: Messages }) {
  const [open, setOpen] = useState<number | null>(null);
  const base = useId();

  const items = [
    { q: t.fq1, a: t.fa1Rich },
    { q: t.fq2, a: t.fa2Rich },
    { q: t.fq3, a: t.fa3Rich },
    { q: t.fq4, a: t.fa4Rich },
    { q: t.fq5, a: t.fa5Rich },
  ];

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = open === i;
        const answerId = `${base}-a${i}`;
        return (
          <div className={`faq-item${isOpen ? " open" : ""}`} key={item.q}>
            <button
              className="faq-q"
              type="button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <i className="faq-ic" aria-hidden="true" />
            </button>
            {/* The answer stays in the DOM in both states; .faq-wrap clips
                it. aria-controls therefore points at the real paragraph. */}
            <div className="faq-wrap">
              <div>
                <Rich as="p" id={answerId} className="faq-a" html={item.a} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
