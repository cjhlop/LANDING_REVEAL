import { Database, Layers, Brain } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";
import McpChatPanel from "./mockups/McpChatPanel";

function FeatureRow({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: string;
}) {
  return (
    <div
      data-reveal
      className="group flex items-start gap-3 p-3 rounded-xl border border-line bg-white transition-all duration-500 hover:border-line-strong hover:shadow-sm"
    >
      <span
        className="inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-lg bg-brand-tint text-brand transition-transform group-hover:scale-110"
      >
        <Icon size={16} strokeWidth={2} />
      </span>
      <p className="text-left text-sm leading-relaxed text-ink-500">
        {children}
      </p>
    </div>
  );
}

export default function McpEarlyAccess() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="mcp"
      className="w-full bg-white px-6 sm:px-12 md:px-[112px] py-16 md:py-24 lg:py-40 overflow-hidden border-b border-line"
    >
      <div
        ref={revealRef}
        className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
      >
        {/* Chat mockup column */}
        <div className="lg:col-span-7 relative flex items-center justify-center lg:order-1">
          <div data-reveal className="w-full max-w-[650px] mx-auto">
            <McpChatPanel />
          </div>
        </div>

        {/* Text column */}
        <div className="lg:col-span-5 space-y-6 md:space-y-8 text-center lg:text-left lg:order-2">
          {/* Eyebrow */}
          <div data-reveal className="flex justify-center lg:justify-start">
            <span
              className="inline-flex items-center rounded-full uppercase bg-brand-tint text-brand border border-line-strong"
              style={{
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
            className="text-[40px] font-bold tracking-tight leading-[1.1]"
          >
            <span className="text-ink">
              Ask Claude or ChatGPT what's happening
            </span>{" "}
            <span className="text-brand">
              across your LinkedIn Ads campaigns
            </span>
          </h2>

          <p
            data-reveal
            className="text-base text-ink-500 leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            DemandSense already connects your LinkedIn engagement, website visitors
            and CRM data. MCP lets you ask Claude or ChatGPT questions across all
            of it and get answers based on your own data.
          </p>

          {/* Feature rows */}
          <div className="space-y-3 max-w-xl mx-auto lg:mx-0">
            <FeatureRow icon={Database}>
              Query LinkedIn + Website Visits + CRM together instead of pulling
              reports from each one separately.
            </FeatureRow>
            <FeatureRow icon={Layers}>
              Get answers with the full account context behind the engagement,
              visits and CRM outcome.
            </FeatureRow>
            <FeatureRow icon={Brain}>
              Get answers based on your own data instead of generic AI answers
              built on limited inputs.
            </FeatureRow>
          </div>
        </div>
      </div>
    </section>
  );
}