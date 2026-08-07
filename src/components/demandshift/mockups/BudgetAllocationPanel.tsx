/**
 * Decorative dark-navy budget allocation mockup for the Ad Optimization use
 * case. All numbers are placeholder visual filler, not real data.
 */

type DayBars = { day: string; blue: number; orange: number };

const DATA: DayBars[] = [
  { day: "Mon", blue: 70, orange: 45 },
  { day: "Tue", blue: 55, orange: 62 },
  { day: "Wed", blue: 88, orange: 40 },
  { day: "Thu", blue: 62, orange: 70 },
  { day: "Fri", blue: 95, orange: 52 },
  { day: "Sat", blue: 48, orange: 34 },
  { day: "Sun", blue: 74, orange: 58 },
];

const STATS = [
  { label: "Daily Limit", value: "$2,500" },
  { label: "Spent", value: "$1,842" },
  { label: "Remaining", value: "$658" },
];

function FloatTile({
  label,
  value,
  valueColor,
  style,
}: {
  label: string;
  value: string;
  valueColor: string;
  style: React.CSSProperties;
}) {
  return (
    <div
      style={{
        position: "absolute",
        background: "rgba(20,20,26,0.92)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 10,
        padding: "8px 12px",
        boxShadow: "0 8px 24px -8px rgba(0,0,0,0.6)",
        ...style,
      }}
    >
      <div
        className="uppercase"
        style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.05em", color: "#6b7280" }}
      >
        {label}
      </div>
      <div style={{ fontSize: 15, fontWeight: 700, color: valueColor, marginTop: 3, lineHeight: 1 }}>
        {value}
      </div>
    </div>
  );
}

export default function BudgetAllocationPanel() {
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
          style={{ gap: 7, padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span style={{ width: 11, height: 11, borderRadius: 999, background: "#ff5f57" }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: "#febc2e" }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: "#28c840" }} />
        </div>

        {/* title */}
        <div className="flex items-center" style={{ gap: 8, padding: "16px 20px 4px" }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: "#3875f6", display: "inline-block" }} />
          <span style={{ color: "#ffffff", fontSize: 14, fontWeight: 700 }}>
            Budget Allocation
          </span>
        </div>

        {/* chart + floating tiles */}
        <div style={{ position: "relative", padding: "20px 20px 8px" }}>
          <div
            className="flex items-end justify-between"
            style={{ height: 160, gap: 10 }}
          >
            {DATA.map((d) => (
              <div key={d.day} className="flex flex-col items-center" style={{ flex: 1, gap: 6 }}>
                <div className="flex items-end justify-center" style={{ gap: 4, height: 140, width: "100%" }}>
                  <span
                    style={{
                      width: "42%",
                      height: `${d.blue}%`,
                      background: "#3875f6",
                      borderRadius: "4px 4px 0 0",
                    }}
                  />
                  <span
                    style={{
                      width: "42%",
                      height: `${d.orange}%`,
                      background: "#f97316",
                      borderRadius: "4px 4px 0 0",
                    }}
                  />
                </div>
                <span
                  className="uppercase"
                  style={{ fontSize: 9, fontWeight: 600, color: "#6b7280", letterSpacing: "0.03em" }}
                >
                  {d.day}
                </span>
              </div>
            ))}
          </div>

          <FloatTile
            label="Avg. Savings"
            value="18% Monthly"
            valueColor="#ffffff"
            style={{ top: 16, left: 24 }}
          />
          <FloatTile
            label="Pacing Status"
            value="Optimal Velocity"
            valueColor="#16a34a"
            style={{ top: 16, right: 24 }}
          />
        </div>

        {/* stat readouts */}
        <div
          className="grid grid-cols-3"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            marginTop: 4,
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "16px 12px",
                textAlign: "center",
                borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="uppercase"
                style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.05em", color: "#6b7280" }}
              >
                {s.label}
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#ffffff", marginTop: 5, lineHeight: 1 }}>
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
