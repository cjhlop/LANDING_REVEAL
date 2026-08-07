import { Database, Layers, Brain } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";
import McpChatPanel from "./mockups/McpChatPanel";

function Card({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: string;
}) {
  return (
    <div
      data-reveal
      className="flex flex-col text-left"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: 32,
      }}
    >
      <span
        className="inline-flex items-center justify-center shrink-0"
        style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(56,117,246,0.15)" }}
      >
        <Icon size={22} strokeWidth={2} color="#7ba7ff" />
      </span>
      <p style={{ marginTop: 18, fontSize: 15, lineHeight: 1.6, color: "#94a3b8" }}>
        {children}
      </p>
    </div>
  );
}

export default function McpEarlyAccess() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="mcp" style={{ background: "#0f0f13", paddingTop: 128, paddingBottom: 128 }}>
      <div
        ref={revealRef}
        className="mx-auto flex flex-col items-center"
        style={{ maxWidth: 1280, paddingLeft: 24, paddingRight: 24 }}
      >
        {/* Eyebrow (inverted) */}
        <div data-reveal>
          <span
            className="inline-flex items-center rounded-full uppercase"
            style={{
              background: "rgba(56,117,246,0.15)",
              color: "#7ba7ff",
              border: "1px solid rgba(56,117,246,0.3)",
              padding: "8px 14px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.04em",
              lineHeight: 1,
            }}
          >
            Early access MCP
          </span>
        </div>

        {/* Heading */}
        <h2
          data-reveal
          className="ds-h2 text-center"
          style={{ marginTop: 20, maxWidth: 900 }}
        >
          <span style={{ color: "#ffffff" }}>
            Ask Claude or ChatGPT what's happening
          </span>{" "}
          <span style={{ color: "#7ba7ff" }}>
            across your LinkedIn Ads campaigns
          </span>
        </h2>

        <p
          data-reveal
          className="text-center"
          style={{ marginTop: 20, maxWidth: 800, fontSize: 18, lineHeight: 1.6, color: "#94a3b8" }}
        >
          DemandSense already connects your LinkedIn engagement, website visitors
          and CRM data. MCP lets you ask Claude or ChatGPT questions across all
          of it and get answers based on your own data.
        </p>

        {/* Cards */}
        <div
          className="grid w-full grid-cols-1 md:grid-cols-3"
          style={{ marginTop: 48, gap: 24, maxWidth: 1120 }}
        >
          <Card icon={Database}>
            Query LinkedIn + Website Visits + CRM together instead of pulling
            reports from each one separately.
          </Card>
          <Card icon={Layers}>
            Get answers with the full account context behind the engagement,
            visits and CRM outcome.
          </Card>
          <Card icon={Brain}>
            Get answers based on your own data instead of generic AI answers
            built on limited inputs.
          </Card>
        </div>

        {/* Chat mockup */}
        <div data-reveal className="w-full" style={{ marginTop: 48, maxWidth: 720 }}>
          <McpChatPanel />
        </div>
      </div>
    </section>
  );
}
