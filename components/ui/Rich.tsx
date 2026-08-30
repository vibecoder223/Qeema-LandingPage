import type { ElementType } from "react";

/**
 * Renders a copy-deck string that carries inline <b>/<em>.
 *
 * The decks are static module imports authored in this repo. Nothing user
 * supplied reaches this component, which is the only reason setting
 * innerHTML here is acceptable. If a string ever comes from a form, an
 * API or a CMS, it must not be rendered through this.
 */
export function Rich({
  as: Tag = "span",
  html,
  className,
  id,
}: {
  as?: ElementType;
  html: string;
  className?: string;
  id?: string;
}) {
  return (
    <Tag id={id} className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
