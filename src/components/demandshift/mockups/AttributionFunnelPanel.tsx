import { ChevronRight } from "lucide-react";

/**
 * Decorative dark-navy attribution funnel mockup for the Revenue Attribution
 * use case. All numbers are placeholder visual filler, not real data.
 */

type Node = { label: string; value: string; width: number; color: string };

const NODES: Node[] = [
  { label: "Exposed", value: "825", width: 100, color: "#3875f6" },
  { label: "Impressed", value: "752", width: 88, color: "#3875f6" },
  { label: "Engaged", value: "318", width: 60, color: "#3875f6" },
  { label: "Clicks", value: "141", width: 42, color: "#3875f6" },
  { label: "Site Visits", value: "67", width: 28, color: "#f97316" },
  { label: "Closed Won", value: "9", width: 16, color: "#f97316" },
];

const KPIS = [
  { label: "Pipeline Influenced", value: "$412K" },
  { label: "Closed Won", value: "$86K" },
  { label: "Deals", value: "9" },
];

export default function AttributionFunnelPanel() {
  return (
    <div style={{ position: "relative" }}>
      {/* blue glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "auto 10% -30px 10%",
          height: 120,
          background: "#3875f6",
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

        {/* title */}
        <div className="flex items-center" style={{ gap: 8, padding: "16px 20px 4px" }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: "#3875f6", display: "inline-block" }} />
          <span style={{ color: "#ffffff", fontSize: 14, fontWeight: 700 }}>
            LinkedIn Attribution
          </span>
        </div>

        {/* stage flow */}
        <div
          className="flex items-stretch"
          style={{ gap: 4, padding: "16px 16px 20px", overflowX: "auto" }}
        >
          {NODES.map((n, i) => (
            <div key={n.label} className="flex items-center" style={{ gap: 4, flex: "1 1 0" }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 8,
                    padding: "10px 8px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ color: "#ffffff", fontSize: 16, fontWeight: 700, lineHeight: 1 }}>
                    {n.value}
                  </div>
                  <div
                    className="uppercase"
                    style={{
                      color: "#6b7280",
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.03em",
                      marginTop: 5,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {n.label}
                  </div>
                  <div
                    style={{
                      marginTop: 8,
                      height: 4,
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.06)",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${n.width}%`,
                        margin: "0 auto",
                        borderRadius: 999,
                        background: n.color,
                      }}
                    />
                  </div>
                </div>
              </div>
              {i < NODES.length - 1 && (
                <ChevronRight size={14} color="#4b5563" className="shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* KPI tiles */}
        <div
          className="grid grid-cols-3"
          style={{
            gap: 10,
            padding: "0 16px 20px",
          }}
        >
          {KPIS.map((k) => (
            <div
              key={k.label}
              style={{
                background: "rgba(56,117,246,0.08)",
                border: "1px solid rgba(56,117,246,0.18)",
                borderRadius: 10,
                padding: "12px 10px",
                textAlign: "center",
              }}
            >
              <div style={{ color: "#ffffff", fontSize: 18, fontWeight: 700, lineHeight: 1 }}>
                {k.value}
              </div>
              <div
                className="uppercase"
                style={{
                  color: "#6b7280",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  marginTop: 6,
                }}
              >
                {k.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
