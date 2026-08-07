/**
 * Decorative terminal-style chat mockup for the MCP early access section.
 * Company names and counts are placeholder visual filler, not real data.
 */

const RESULTS = [
  { company: "Northwind Labs", count: 14 },
  { company: "Vertex Systems", count: 9 },
  { company: "Cobalt Retail", count: 6 },
];

export default function McpChatPanel() {
  return (
    <div
      style={{
        background: "#08080b",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 24px 60px -24px rgba(0,0,0,0.7)",
      }}
    >
      {/* window chrome */}
      <div
        className="flex items-center"
        style={{ gap: 7, padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span style={{ width: 11, height: 11, borderRadius: 999, background: "#ff5f57" }} />
        <span style={{ width: 11, height: 11, borderRadius: 999, background: "#febc2e" }} />
        <span style={{ width: 11, height: 11, borderRadius: 999, background: "#28c840" }} />
      </div>

      <div style={{ padding: "20px 20px 24px" }}>
        {/* user prompt */}
        <div className="flex items-start" style={{ gap: 10 }}>
          <span
            style={{
              color: "#3875f6",
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: 15,
              fontWeight: 700,
              lineHeight: 1.5,
            }}
          >
            &gt;
          </span>
          <p style={{ color: "#e5e7eb", fontSize: 15, lineHeight: 1.5 }}>
            Which accounts engaged our ads last month and later visited pricing?
          </p>
        </div>

        {/* response */}
        <div
          style={{
            marginTop: 18,
            paddingTop: 18,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: 13,
            lineHeight: 1.7,
            color: "#94a3b8",
          }}
        >
          <div style={{ color: "#6b7280" }}>
            3 accounts matched — engaged + visited /pricing
          </div>
          <div style={{ marginTop: 10 }}>
            {RESULTS.map((r) => (
              <div key={r.company} className="flex items-center justify-between" style={{ maxWidth: 360 }}>
                <span style={{ color: "#cbd5e1" }}>{r.company}</span>
                <span style={{ color: "#7ba7ff" }}>{r.count} engagements</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 12, color: "#3875f6" }}>
            ▍
          </div>
        </div>
      </div>
    </div>
  );
}
