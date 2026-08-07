import { Check } from "lucide-react";
import SplitBlock from "../SplitBlock";
import BudgetAllocationPanel from "../mockups/BudgetAllocationPanel";

const BULLETS = [
  "Put more budget behind accounts already showing interest",
  "Pull back on accounts that keep seeing ads and going nowhere",
  "Use the signals you already have to improve targeting",
  "Decisions even before enough conversions pile up",
];

export default function UseCaseAdOptimization() {
  return (
    <SplitBlock background="#ffffff" visual={<BudgetAllocationPanel />}>
      <div
        className="uppercase"
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.04em",
          color: "#3875f6",
          lineHeight: 1.3,
        }}
      >
        Ad optimization
      </div>

      <h3
        style={{
          marginTop: 14,
          fontSize: 32,
          lineHeight: 1.2,
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        <span style={{ color: "#122752" }}>
          Stop waiting for more conversions
        </span>{" "}
        <span style={{ color: "#3875f6" }}>
          before deciding where the budget goes
        </span>
      </h3>

      <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.6, color: "#4b5675" }}>
        Smaller B2B campaigns often don't generate enough conversions for
        LinkedIn to learn quickly. DemandSense adds earlier engagement and
        website activity, so you can see which accounts and audiences are
        responding much sooner.
      </p>

      <ul className="flex flex-col" style={{ marginTop: 20, gap: 12 }}>
        {BULLETS.map((b) => (
          <li key={b} className="flex items-start" style={{ gap: 10 }}>
            <Check
              size={16}
              strokeWidth={2.5}
              color="#3875f6"
              className="shrink-0"
              style={{ marginTop: 3 }}
            />
            <span style={{ fontSize: 15, lineHeight: 1.5, color: "#4b5675" }}>
              {b}
            </span>
          </li>
        ))}
      </ul>
    </SplitBlock>
  );
}
