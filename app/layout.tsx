import type { ReactNode } from "react";

/**
 * Pass-through root. <html> and <body> live in app/[locale]/layout.tsx,
 * because lang and dir are locale-dependent and cannot be decided here.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
