"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Scroll reveal · purpose: preventing a jarring change.
 *
 * Ports the .rv observer from the source file. Unobserves on first
 * intersection — the reveal plays once per visit, never on scroll-back.
 *
 * The element ships with .rv (opacity 0) so there is no flash of the
 * settled state before hydration. Browsers without IntersectionObserver
 * get .in immediately.
 */
export function Reveal({
  as: Tag = "div",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      node.classList.add("in");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className ? `rv ${className}` : "rv"}>
      {children}
    </Tag>
  );
}
