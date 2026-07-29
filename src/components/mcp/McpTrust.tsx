"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ShieldCheck } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const TRUST_CARDS = [
  {
    label: "Never invents data.",
    body: 'If nothing matches, it says "no results" plainly instead of fabricating rows or accounts.',
  },
  {
    label: "Analysis only, not actions.",
    body: "Asked to launch, pause, or change a campaign, it declines and explains it's a read-and-analyze tool.",
  },
  {
    label: "No competitor or cross-client leakage.",
    body: "It won't surface another client's data or a named competitor's private numbers.",
  },
  {
    label: "Protects sensitive personal data.",
    body: "It won't compile personal details like home addresses or private phone numbers.",
  },
  {
    label: "Honest about gaps.",
    body: "When a source isn't connected, it names the gap and offers the nearest supported answer rather than guessing.",
  },
];

const LIMITS = [
  {
    label: "DemandSense MCP is read-only today.",
    body: "It answers questions; it does not edit campaigns or move budget.",
  },
  {
    label: "Visitor identification is probabilistic.",
    body: "Match rates vary with site traffic and audience; not every visitor resolves to a person.",
  },
  {
    label: "This is early access.",
    body: "Onboarding runs in small batches, and the team is in the loop with every account.",
  },
];

const McpTrust = ({
  onOpenLightbox,
}: {
  onOpenLightbox: (alt: string) => void;
}) => {
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.1 });
  const refusalAlt =
    "DemandSense declining to answer: asked about a company that isn't in the data, it names the absence and asks the user to double-check the spelling, rather than fabricating a brief.";

  return (
    <section
      className="w-full bg-white py-16 md:py-24 lg:py-32 border-b border-gray-100"
      aria-labelledby="mcp-trust-heading"
    >
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={cn(
            "max-w-3xl mx-auto text-center transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <div className="flex justify-center">
            <SectionBadge icon={ShieldCheck} text="Trust before impressive" />
          </div>
          <h2
            id="mcp-trust-heading"
            className="mt-6 text-[40px] font-bold text-gray-900 tracking-tight leading-[1.1]"
          >
            Built to answer{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              straight
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed">
            An AI with access to your business data has to be trustworthy before
            it's impressive. Every behavior below is part of the QA battery we
            run against a live account, including adversarial cases designed to
            make it fail:
          </p>
        </div>

        {/* Trust cards */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {TRUST_CARDS.map((card, i) => (
            <div
              key={i}
              className={cn(
                "bg-white border border-gray-100 rounded-2xl p-5 md:p-6 shadow-sm text-[15px] leading-relaxed text-gray-600",
                i === TRUST_CARDS.length - 1 && "md:col-span-2"
              )}
            >
              <b className="font-semibold text-gray-900">{card.label}</b>{" "}
              {card.body}
            </div>
          ))}
        </div>

        {/* Refusal screenshot (raw — hairline only) */}
        <figure className="mt-12 md:mt-16 max-w-3xl mx-auto">
          <button
            type="button"
            onClick={() => onOpenLightbox(refusalAlt)}
            className="block w-full rounded-xl border border-gray-200 overflow-hidden cursor-zoom-in bg-slate-950"
            aria-label="Open full refusal screenshot"
          >
            <div
              className="w-full aspect-[15/7] flex items-center justify-center"
              role="img"
              aria-label={refusalAlt}
            >
              <span className="text-[11px] font-medium uppercase tracking-widest text-slate-600">
                Screenshot
              </span>
            </div>
          </button>
          <figcaption className="mt-3 text-sm text-gray-500 leading-relaxed">
            Straight from the QA battery: asked about a company that isn't in the
            data, it names the absence and asks to double-check the spelling. No
            fabricated brief.
          </figcaption>
        </figure>

        {/* Limits */}
        <div className="mt-12 max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl px-6 shadow-sm">
          <ul>
            {LIMITS.map((limit, i) => (
              <li
                key={i}
                className={cn(
                  "py-4 text-[15px] leading-relaxed text-gray-600",
                  i !== 0 && "border-t border-gray-100"
                )}
              >
                <b className="font-semibold text-gray-900">{limit.label}</b>{" "}
                {limit.body}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default McpTrust;