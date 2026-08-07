import { Check, AlertTriangle, CheckCircle2 } from "lucide-react";
import SplitBlock from "../SplitBlock";
import EngagedAccountsPanel from "../mockups/EngagedAccountsPanel";

const BULLETS = [
  "Find engaged companies beyond your standard reports",
  "See paid + organic activity around the same account",
  "Know which engaged accounts later visit your website",
];

export default function UseCaseEngagedAccounts() {
  return (
    <SplitBlock visual={<EngagedAccountsPanel />}>
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
        Engaged account visibility
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
          See the companies already engaging
        </span>{" "}
        <span style={{ color: "#3875f6" }}>
          with your ads before they even convert
        </span>
      </h3>

      <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.6, color: "#4b5675" }}>
        DemandSense pulls deeper company-level activity across paid + organic
        LinkedIn and connects it with website visits
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

      {/* Comparison strip */}
      <div className="flex flex-col" style={{ marginTop: 24, gap: 12 }}>
        <div
          className="flex items-start"
          style={{
            gap: 12,
            background: "#fff7ed",
            borderLeft: "3px solid #f97316",
            borderRadius: 12,
            padding: 16,
          }}
        >
          <AlertTriangle size={18} strokeWidth={2} color="#f97316" className="shrink-0" style={{ marginTop: 1 }} />
          <span style={{ fontSize: 15, lineHeight: 1.5, color: "#7c2d12" }}>
            Campaign Manager surfaces only part of that company-level engagement.
          </span>
        </div>
        <div
          className="flex items-start"
          style={{
            gap: 12,
            background: "#f0fdf4",
            borderLeft: "3px solid #16a34a",
            borderRadius: 12,
            padding: 16,
          }}
        >
          <CheckCircle2 size={18} strokeWidth={2} color="#16a34a" className="shrink-0" style={{ marginTop: 1 }} />
          <span style={{ fontSize: 15, lineHeight: 1.5, color: "#14532d" }}>
            DemandSense pulls deeper LinkedIn API data that never appears there.
          </span>
        </div>
      </div>
    </SplitBlock>
  );
}
