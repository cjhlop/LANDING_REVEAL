import { Check } from "lucide-react";
import SplitBlock from "../SplitBlock";
import AttributionFunnelPanel from "../mockups/AttributionFunnelPanel";

const BULLETS = [
  "Which opportunities were exposed to your LinkedIn Ads",
  "How much pipeline comes from engaged accounts",
  "Which engaged accounts became closed-won deals",
];

export default function UseCaseRevenueAttribution() {
  return (
    <SplitBlock reverse background="#f5f9ff" visual={<AttributionFunnelPanel />}>
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
        Revenue attribution
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
          Connect LinkedIn engagement to
        </span>{" "}
        <span style={{ color: "#3875f6" }}>
          pipeline and closed-won revenue
        </span>
      </h3>

      <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.6, color: "#4b5675" }}>
        See which engaged accounts became opportunities, how much pipeline sits
        behind them and which deals eventually closed.
      </p>

      <div
        className="uppercase"
        style={{
          marginTop: 24,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.04em",
          color: "#122752",
        }}
      >
        Show leadership exactly:
      </div>

      <ul className="flex flex-col" style={{ marginTop: 12, gap: 12 }}>
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
