"use client";

import { useEffect } from "react";

const DURATION_MS = 650;

/** Close numeric match to --ease-out, cubic-bezier(0.23, 1, 0.32, 1). */
function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Native `scroll-behavior: smooth` picks its own duration per browser,
 * which reads as an abrupt snap over the distances this page covers.
 * This intercepts in-page anchor clicks and drives the scroll itself, on
 * the same ease-out curve as everything else on the page.
 *
 * Every scrollTo call below passes `behavior: "instant"` explicitly.
 * `"auto"` does not bypass CSS scroll-behavior — per the CSSOM View spec
 * it means "defer to the computed scroll-behavior," which on this page
 * is `smooth`. With "auto", each rAF step would start its own
 * smooth-scroll that the next step interrupts 16ms later, so the page
 * barely creeps until the loop ends and the final call is finally left
 * alone to finish — collapsing the whole animation to near-instant.
 * "instant" is the value that actually forces immediate positioning
 * regardless of the CSS property, which a manual rAF loop needs.
 *
 * Mounted once per locale layout — delegated on document, so it covers
 * nav, CTAs, and the footer without wiring each link individually.
 */
export function SmoothAnchor() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // A second click before the first scroll finishes must win outright,
    // not fight the first loop for control of window.scrollTo. Each click
    // stamps its own generation; a step() call checks it is still current
    // before scrolling, so a superseded loop goes quiet on its next frame.
    let generation = 0;

    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement)?.closest<HTMLAnchorElement>("a[href^='#']");
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const dest = document.getElementById(hash.slice(1));
      if (!dest) return;

      e.preventDefault();

      const myGeneration = ++generation;
      const startY = window.scrollY;
      const endY = startY + dest.getBoundingClientRect().top;

      if (reduced) {
        window.scrollTo({ top: endY, behavior: "instant" });
        history.pushState(null, "", hash);
        return;
      }

      const startTime = performance.now();
      function step(now: number) {
        if (myGeneration !== generation) return;
        const t = Math.min((now - startTime) / DURATION_MS, 1);
        window.scrollTo({ top: startY + (endY - startY) * easeOut(t), behavior: "instant" });
        if (t < 1) requestAnimationFrame(step);
        else history.pushState(null, "", hash);
      }
      requestAnimationFrame(step);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
