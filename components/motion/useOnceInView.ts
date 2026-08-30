"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Fires once, the first time the node is meaningfully in view.
 *
 * `skip` is true when the sequence must not play — reduced motion, or no
 * IntersectionObserver. Callers settle straight to the final frame in that
 * case, because the end state is the informative one.
 *
 * Ports `once()` from the source file.
 */
export function useOnceInView<T extends HTMLElement>(
  run: (skip: boolean) => void,
  threshold = 0.35,
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const fired = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || fired.current) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      fired.current = true;
      run(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.disconnect();
          fired.current = true;
          run(false);
        }
      },
      { threshold },
    );

    io.observe(node);
    return () => io.disconnect();
    // run is a stable closure over render-time props; the sequence is
    // deliberately bound once and never re-armed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
