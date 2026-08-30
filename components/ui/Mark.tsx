/** The wordmark glyph. Arabic qāf, set in Rubik via .mk. */
export function Mark({ className = "mk" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      ق
    </div>
  );
}
