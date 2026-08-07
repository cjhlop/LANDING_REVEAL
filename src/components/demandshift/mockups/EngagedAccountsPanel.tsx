/**
 * Decorative dark-navy product mockup for Use Case 1.
 * Company names and metrics are placeholder/fake data used purely as visual
 * filler inside a screenshot-style panel, per explicit client instruction.
 */

type Row = {
  company: string;
  engagement: number; // 0-100 meter width
  visit: boolean;
  stage: string;
  stageColor: string;
  highlighted?: boolean;
};

const ROWS: Row[] = [
  { company: "Northwind Labs", engagement: 88, visit: true, stage: "Opportunity", stageColor: "#3875f6", highlighted: true },
  { company: "Vertex Systems", engagement: 72, visit: true, stage: "Engaged", stageColor: "#16a34a" },
  { company: "Meridian Cloud", engagement: 61, visit: false, stage: "Aware", stageColor: "#8b5cf6" },
  { company: "Cobalt Retail", engagement: 47, visit: true, stage: "Engaged", stageColor: "#16a34a" },
  { company: "Harbor Freight Co", engagement: 34, visit: false, stage: "Aware", stageColor: "#8b5cf6" },
];

function Dot({ color }: { color: string }) {
  return (
    <span
      style={{ width: 8, height: 8, borderRadius: 999, background: color, display: "inline-block" }}
    />
  );
}

export default function EngagedAccountsPanel() {
  return (
    <div style={{ position: "relative" }}>
      {/* orange glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "auto 10% -30px 10%",
          height: 120,
          background: "#f97316",
          filter: "blur(70px)",
          opacity: 0.22,
          borderRadius: 999,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "#0f0f13",
          borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.08)",
          overflow: "hidden",
          boxShadow: "0 20px 50px -20px rgba(18,39,82,0.5)",
        }}
      >
        {/* window chrome */}
        <div
          className="flex items-center"
          style={{
            gap: 7,
            padding: "12px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <span style={{ width: 11, height: 11, borderRadius: 999, background: "#ff5f57" }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: "#febc2e" }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: "#28c840" }} />
        </div>

        {/* panel title */}
        <div
          className="flex items-center"
          style={{ gap: 8, padding: "16px 20px 12px" }}
        >
          <span style={{ position: "relative", display: "inline-flex" }}>
            <Dot color="#3875f6" />
          </span>
          <span style={{ color: "#ffffff", fontSize: 14, fontWeight: 700 }}>
            Engaged Accounts
          </span>
          <span style={{ color: "#3875f6", fontSize: 11, fontWeight: 600, marginLeft: 2 }}>
            LIVE
          </span>
        </div>

        {/* table header */}
        <div
          className="grid items-center"
          style={{
            gridTemplateColumns: "1.4fr 1fr 0.7fr 0.9fr",
            gap: 8,
            padding: "8px 20px",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.06em",
            color: "#6b7280",
            textTransform: "uppercase",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <span>Company</span>
          <span>Engagement</span>
          <span>Site Visit</span>
          <span>Stage</span>
        </div>

        {/* rows */}
        {ROWS.map((r) => (
          <div
            key={r.company}
            className="grid items-center"
            style={{
              gridTemplateColumns: "1.4fr 1fr 0.7fr 0.9fr",
              gap: 8,
              padding: "12px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.04)",
              background: r.highlighted ? "rgba(56,117,246,0.12)" : "transparent",
            }}
          >
            <span style={{ color: "#e5e7eb", fontSize: 13, fontWeight: 500 }}>
              {r.company}
            </span>

            {/* engagement meter */}
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  height: 6,
                  width: 64,
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.08)",
                  overflow: "hidden",
                  display: "inline-block",
                }}
              >
                <span
                  style={{
                    display: "block",
                    height: "100%",
                    width: `${r.engagement}%`,
                    background: "#3875f6",
                    borderRadius: 999,
                  }}
                />
              </span>
            </span>

            {/* site visit */}
            <span>
              {r.visit ? (
                <span style={{ color: "#16a34a", fontSize: 14, fontWeight: 700 }}>✓</span>
              ) : (
                <span style={{ color: "#4b5563", fontSize: 14 }}>—</span>
              )}
            </span>

            {/* stage pill */}
            <span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "3px 10px",
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 600,
                  color: r.stageColor,
                  background: `${r.stageColor}22`,
                }}
              >
                {r.stage}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
