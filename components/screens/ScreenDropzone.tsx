import type { Messages } from "@/messages";

/**
 * Screen A · dropzone.
 *
 * Renders settled — hover state and the landed file are always present.
 * The scroll-triggered entrance was removed on request; no client code
 * is needed to show a fixed state.
 */
export function ScreenDropzone({ t }: { t: Messages }) {
  return (
    <div className="dropzone hover">
      <div className="dz-icon" aria-hidden="true">
        ↑
      </div>
      <h4>{t.dz1}</h4>
      <p>{t.dz2}</p>
      <div className="dz-file in">
        <div className="fi" aria-hidden="true">
          PDF
        </div>
        <div className="ft">
          <div className="fn">{t.dzFile}</div>
          <div className="fs">{t.dzMeta}</div>
        </div>
        <div className="dz-check" aria-hidden="true">
          ✓
        </div>
      </div>
    </div>
  );
}
