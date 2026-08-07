import { TrendingUp, CheckCircle2, Circle } from "lucide-react";

const PANEL_STYLE: React.CSSProperties = {
  background: "#0f0f13",
  borderRadius: 12,
  color: "#ffffff",
  position: "relative",
};

/** Subtle orange glow that sits beneath a dark mockup. */
function GlowFrame({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: "relative" }}>
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "auto 8% -22px 8%",
          height: 60,
          borderRadius: 999,
          background:
            "radial-gradient(60% 100% at 50% 50%, rgba(249,115,22,0.35), rgba(249,115,22,0))",
          filter: "blur(24px)",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}

function WindowChrome() {
  return (
    <div
      className="flex items-center gap-2 px-4"
      style={{
        height: 40,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <span style={{ width: 10, height: 10, borderRadius: 999, background: "#ff5f57" }} />
      <span style={{ width: 10, height: 10, borderRadius: 999, background: "#febc2e" }} />
      <span style={{ width: 10, height: 10, borderRadius: 999, background: "#28c840" }} />
    </div>
  );
}

/* ============ Hero dashboard: revenue attribution ============ */
export function DashboardMockup() {
  const bars = [
    { h: 46, c: "#3875f6" },
    { h: 62, c: "#3875f6" },
    { h: 40, c: "#f97316" },
    { h: 78, c: "#3875f6" },
    { h: 58, c: "#f97316" },
    { h: 92, c: "#3875f6" },
    { h: 70, c: "#3875f6" },
    { h: 100, c: "#f97316" },
  ];
  return (
    <GlowFrame>
      <div style={PANEL_STYLE}>
        <WindowChrome />
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div style={{ fontSize: 12, color: "#94a3b8" }}>Pipeline influenced</div>
              <div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.1 }}>
                $4.82M
              </div>
            </div>
            <div
              className="inline-flex items-center gap-1"
              style={{ color: "#16a34a", fontSize: 13, fontWeight: 700 }}
            >
              <TrendingUp size={16} strokeWidth={2} />
              +38.6%
            </div>
          </div>

          <div
            className="flex items-end gap-2 sm:gap-3"
            style={{ height: 150 }}
          >
            {bars.map((b, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end">
                <div
                  style={{
                    height: `${b.h}%`,
                    background: b.c,
                    borderRadius: 4,
                  }}
                />
              </div>
            ))}
          </div>

          <div
            className="grid grid-cols-3 gap-3 mt-5 pt-5"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            {[
              { l: "LinkedIn Ads", v: "$2.1M", c: "#3875f6" },
              { l: "Paid Search", v: "$1.4M", c: "#f97316" },
              { l: "Organic", v: "$1.3M", c: "#94a3b8" },
            ].map((m) => (
              <div key={m.l}>
                <div className="flex items-center gap-2" style={{ fontSize: 11, color: "#94a3b8" }}>
                  <span style={{ width: 8, height: 8, borderRadius: 999, background: m.c }} />
                  {m.l}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, marginTop: 2 }}>{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlowFrame>
  );
}

/* ============ Feature mockup: identified visitors list ============ */
export function VisitorsMockup() {
  const rows = [
    { c: "Northwind Traders", s: "In-market", green: true },
    { c: "Contoso Cloud", s: "Researching", green: false },
    { c: "Fabrikam Inc", s: "In-market", green: true },
    { c: "Tailspin Toys", s: "Researching", green: false },
  ];
  return (
    <GlowFrame>
      <div style={PANEL_STYLE}>
        <WindowChrome />
        <div className="p-5 sm:p-6">
          <div style={{ fontSize: 13, color: "#94a3b8", marginBottom: 14 }}>
            Companies on your site right now
          </div>
          <div className="space-y-3">
            {rows.map((r) => (
              <div
                key={r.c}
                className="flex items-center justify-between px-4"
                style={{
                  height: 52,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 8,
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex items-center justify-center"
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      background: "rgba(56,117,246,0.18)",
                      color: "#3875f6",
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    {r.c.charAt(0)}
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{r.c}</span>
                </div>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: r.green ? "#16a34a" : "#f97316",
                  }}
                >
                  {r.s}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlowFrame>
  );
}

/* ============ Feature mockup: wasted-spend detector ============ */
export function WasteMockup() {
  const items = [
    { l: "Audience overlap", done: true },
    { l: "Zero-pipeline campaigns", done: true },
    { l: "Duplicate targeting", done: false },
  ];
  return (
    <GlowFrame>
      <div style={PANEL_STYLE}>
        <WindowChrome />
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div style={{ fontSize: 13, color: "#94a3b8" }}>Wasted spend detected</div>
            <div style={{ fontSize: 24, fontWeight: 700, color: "#f97316" }}>$61,400</div>
          </div>

          <div
            className="mb-5"
            style={{
              height: 10,
              borderRadius: 999,
              background: "rgba(255,255,255,0.08)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "64%",
                height: "100%",
                background: "linear-gradient(90deg,#f97316,#fb923c)",
              }}
            />
          </div>

          <div className="space-y-3">
            {items.map((it) => (
              <div key={it.l} className="flex items-center gap-3">
                {it.done ? (
                  <CheckCircle2 size={18} strokeWidth={2} color="#16a34a" />
                ) : (
                  <Circle size={18} strokeWidth={2} color="#94a3b8" />
                )}
                <span style={{ fontSize: 14, color: it.done ? "#ffffff" : "#94a3b8" }}>
                  {it.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlowFrame>
  );
}
