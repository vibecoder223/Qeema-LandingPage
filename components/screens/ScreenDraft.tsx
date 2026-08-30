import type { Messages } from "@/messages";

/**
 * Screen D · drafted answers.
 *
 * Renders settled — both cards shown with their citation in place. The
 * second card has no source and stays empty, on purpose. The
 * scroll-triggered stagger was removed on request.
 */
export function ScreenDraft({ t }: { t: Messages }) {
  const cards = [
    { q: t.q1, a: t.a1, cite: t.ci1, src: t.sr1, sourced: true },
    { q: t.q3, a: t.a3, cite: t.ci3, src: null, sourced: false },
  ];

  return (
    <div className="qa-list">
      {cards.map((card) => (
        <div key={card.q} className="qa in sourced">
          <div className="q">{card.q}</div>
          <div className={card.sourced ? "a" : "a nosrc"}>{card.a}</div>
          <div className="meta">
            <span className={card.sourced ? "cite" : "tag-plain"}>{card.cite}</span>
          </div>
          {card.src ? <div className="src">{card.src}</div> : null}
        </div>
      ))}
    </div>
  );
}
