"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { GitMerge } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import claudeLogo from "@/assets/mcp/claude-ai-icon.png";
import chatgptLogo from "@/assets/mcp/chatgpt-icon.png";

const SOURCES = [
  { title: "LinkedIn ad exposure", sub: "impression-level" },
  { title: "Identified website visitors", sub: "person + company" },
  { title: "CRM state", sub: "optional" },
];

const CLIENTS = [
  { name: "Claude", logo: claudeLogo },
  { name: "ChatGPT", logo: chatgptLogo },
];

const McpJoin = () => {
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.1 });
  const [diagramRef, diagramInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <section
      className="w-full bg-[#F5F9FF] py-16 md:py-24 lg:py-32 border-b border-gray-100"
      aria-labelledby="mcp-join-heading"
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
            <SectionBadge icon={GitMerge} text="The join" />
          </div>
          <h2
            id="mcp-join-heading"
            className="mt-6 text-[40px] font-bold text-gray-900 tracking-tight leading-[1.1]"
          >
            What DemandSense MCP does{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              differently
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed">
            You already pipe LinkedIn, your CRM, and a visitor-ID tool into
            Claude through separate connectors. The catch: your AI then has to
            join three raw feeds itself — reconciling what each one means,
            carrying data between calls, mis-copying on the way. DemandSense
            joins them into one buyer record before the model ever sees it.
          </p>
        </div>

        {/* Diagram */}
        <div
          ref={diagramRef}
          className={cn(
            "mt-14 md:mt-20 transition-all duration-700",
            diagramInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          aria-label="Diagram: three data streams — LinkedIn ad exposure, identified website visitors, and CRM state — are joined into one buyer record, which is queryable from Claude and ChatGPT."
        >
          {/* Desktop: horizontal, 3 columns with SVG connectors */}
          <div className="hidden md:grid grid-cols-[1fr_auto_1fr_auto_auto] items-center gap-x-16 lg:gap-x-24 relative">
            {/* SVG connectors overlay */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              {/* three curved lines converging into the join node.
                  x=0 = right edge of source column (approx), x=~46 = left edge of join node */}
              {/* top source -> node (S curve up-to-center) */}
              <path
                d="M 22 17 C 34 17, 34 50, 45 50"
                fill="none"
                stroke="#3875F6"
                strokeWidth="0.6"
                vectorEffect="non-scaling-stroke"
              />
              {/* middle source -> node (near straight) */}
              <path
                d="M 22 50 L 45 50"
                fill="none"
                stroke="#3875F6"
                strokeWidth="0.6"
                vectorEffect="non-scaling-stroke"
              />
              {/* bottom source -> node (S curve down-to-center) */}
              <path
                d="M 22 83 C 34 83, 34 50, 45 50"
                fill="none"
                stroke="#3875F6"
                strokeWidth="0.6"
                vectorEffect="non-scaling-stroke"
              />
              {/* node -> client (straight) */}
              <path
                d="M 60 50 L 80 50"
                fill="none"
                stroke="#3875F6"
                strokeWidth="0.6"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* arrowheads (kept as DOM so they stay crisp) */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div
                className="absolute w-0 h-0 border-y-[5px] border-y-transparent border-l-[7px] border-l-[#3875F6]"
                style={{ left: "45%", top: "50%", transform: "translate(-100%, -50%)" }}
              />
              <div
                className="absolute w-0 h-0 border-y-[5px] border-y-transparent border-l-[7px] border-l-[#3875F6]"
                style={{ left: "80%", top: "50%", transform: "translate(-100%, -50%)" }}
              />
            </div>

            {/* Col 1: Sources */}
            <div className="flex flex-col gap-6 relative z-10">
              {SOURCES.map((s) => (
                <div
                  key={s.title}
                  className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex items-center gap-3"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3875F6] flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[15px] font-semibold text-gray-900 leading-tight">
                      {s.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Col 2: spacer for first connector run */}
            <div aria-hidden="true" />

            {/* Col 3: Join node */}
            <div className="flex justify-center relative z-10">
              <div className="bg-[#122D4D] rounded-2xl px-10 py-10 text-center shadow-xl relative">
                <span className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FA8C16]" />
                <div className="text-white font-bold text-lg leading-tight mt-2">
                  One buyer
                  <br />
                  record
                </div>
              </div>
            </div>

            {/* Col 4: spacer for second connector run */}
            <div aria-hidden="true" />

            {/* Col 5: Clients */}
            <div className="relative z-10">
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-3">
                  Your AI client
                </div>
                <div className="flex flex-col gap-2">
                  {CLIENTS.map((c) => (
                    <span
                      key={c.name}
                      className="px-4 py-2 rounded-lg bg-blue-50 border border-blue-200 text-sm font-semibold text-[#122D4D] flex items-center justify-center gap-2"
                    >
                      <img
                        src={c.logo}
                        alt=""
                        className="w-5 h-5 object-contain flex-shrink-0"
                      />
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: vertical */}
          <div className="md:hidden flex flex-col items-center gap-4">
            <div className="flex flex-col gap-3 w-full">
              {SOURCES.map((s) => (
                <div
                  key={s.title}
                  className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex items-center gap-3"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3875F6] flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-gray-900 leading-tight">
                      {s.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-0 h-6 border-l-2 border-blue-200" aria-hidden="true" />

            <div className="bg-[#122D4D] rounded-2xl px-8 py-6 text-center shadow-xl relative w-40">
              <span className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FA8C16]" />
              <div className="text-white font-bold text-lg leading-tight mt-2">
                One buyer
                <br />
                record
              </div>
            </div>

            <div className="w-0 h-6 border-l-2 border-blue-200" aria-hidden="true" />

            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm w-full text-center">
              <div className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-3">
                Your AI client
              </div>
              <div className="flex gap-2 justify-center">
                {CLIENTS.map((c) => (
                  <span
                    key={c.name}
                    className="px-4 py-2 rounded-lg bg-blue-50 border border-blue-200 text-sm font-semibold text-[#122D4D] flex items-center gap-2"
                  >
                    <img
                      src={c.logo}
                      alt=""
                      className="w-5 h-5 object-contain flex-shrink-0"
                    />
                    {c.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500 leading-relaxed">
            Joined once, on our side — not three connectors your AI has to
            reconcile on every question.
          </p>
        </div>

        {/* Prose */}
        <div className="mt-12 max-w-2xl mx-auto space-y-4">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            Three streams become one record before your AI ever sees the data.
            That is the whole product: DemandSense resolves website visitors at
            the person and company level, not only by reverse-IP company lookup,
            and matches that identity to impression-level LinkedIn ad engagement
            and to your CRM.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            Because the join happens first, your AI burns fewer tokens and gets
            fewer answers wrong than it would stitching three connectors
            together on every question.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            The LinkedIn side runs on advanced Marketing Partner APIs most ads
            managers never touch — engagement you can't pull from Campaign
            Manager. Where LinkedIn's own company hub stops at 15,000 companies,
            DemandSense reads the whole file, even past 50,000.
          </p>
          <p className="text-lg font-semibold text-gray-900 leading-relaxed">
            DemandSense does the joining before your AI ever sees the data. One
            record in, one answer out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default McpJoin;