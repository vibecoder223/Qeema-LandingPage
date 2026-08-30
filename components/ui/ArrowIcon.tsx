/**
 * Drawn, not typed — same reasoning as .faq-ic. A "→" glyph renders
 * inconsistently across system fonts (weight, baseline, sometimes missing)
 * and mirrors badly in RTL. An SVG chevron is pixel-identical everywhere
 * and inherits colour from .ic via currentColor, so no new token is spent.
 */
export function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M3.5 2L7.5 6L3.5 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
