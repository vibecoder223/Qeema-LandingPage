import type { ReactNode } from "react";
import type { Messages } from "@/messages";
import { StepRail } from "./StepRail";

/**
 * The browser chrome the product screens sit inside.
 *
 * These are real rendered UI, not screenshots — the spec is explicit that
 * this is the point. Each frame is announced as a single image to assistive
 * tech, because the internals are illustrative and reading them out is noise.
 */
export function AppFrame({
  t,
  url,
  crumb,
  active,
  label,
  children,
}: {
  t: Messages;
  url: string;
  crumb: string;
  /** Index of the current step. Everything before it renders done. */
  active: number;
  /** aria-label for the frame, or null when a sibling already describes it. */
  label?: string;
  children: ReactNode;
}) {
  const steps = [t.f1, t.f2, t.f3, t.f4];

  return (
    <div
      className="browser"
      {...(label ? { role: "img", "aria-label": label } : {})}
    >
      <div className="chrome">
        <i className="d" />
        <i className="d" />
        <i className="d" />
        <span className="u">{url}</span>
      </div>
      <div className="app">
        <aside className="side">
          <div className="org">
            <div className="m" aria-hidden="true">
              ق
            </div>
            <div className="nm">Al Rayyan Trading</div>
          </div>
          <StepRail steps={steps} active={active} />
        </aside>
        <div className="main">
          <div className="mtop">
            <span className="crumb">{crumb}</span>
          </div>
          <div className="mbody">{children}</div>
        </div>
      </div>
    </div>
  );
}
