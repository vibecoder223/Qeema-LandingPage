/**
 * Step rail. Renders settled — steps before `active` show done, the
 * current step shows active, the rest are idle. The scroll-triggered
 * delayed lighting was removed on request.
 */
export function StepRail({ steps, active }: { steps: string[]; active: number }) {
  return (
    <div className="side-flow">
      {steps.map((label, i) => {
        const status = i < active ? "done" : i === active ? "active" : "";
        return (
          <div key={label} className={`flow-item ${status}`.trimEnd()}>
            <i className="dot">{status === "done" ? "✓" : ""}</i>
            <span>{label}</span>
          </div>
        );
      })}
    </div>
  );
}
