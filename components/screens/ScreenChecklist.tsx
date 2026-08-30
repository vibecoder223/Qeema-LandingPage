import type { Messages } from "@/messages";

/**
 * Screen B · checklist.
 *
 * Renders settled — every row checked, no stagger, no spinner. The
 * scroll-triggered entrance was removed on request.
 */
export function ScreenChecklist({ t }: { t: Messages }) {
  const rows = [
    { label: t.cl1, count: t.cl1v },
    { label: t.cl2, count: t.cl2v },
    { label: t.cl3, count: t.cl3v },
    { label: t.cl4, count: t.cl4v },
    { label: t.cl5, count: t.cl5v },
  ];

  return (
    <div className="checklist">
      {rows.map((row) => (
        <div key={row.label} className="cl-item in checked">
          <i className="cm">✓</i>
          <span className="txt">{row.label}</span>
          <span className="ct">{row.count}</span>
        </div>
      ))}
    </div>
  );
}
