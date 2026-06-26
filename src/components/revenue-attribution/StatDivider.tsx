"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const ConnectionIllustration = () => {
  return (
    <svg
      viewBox="0 0 340 180"
      fill="none"
      className="w-full max-w-[300px] mx-auto text-ink"
      aria-hidden="true"
    >
      {/* ---------- Energy burst (center) ---------- */}
      <g className="text-brand">
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const inner = 34;
          const outer = i % 2 === 0 ? 50 : 42;
          const x1 = 170 + Math.cos(angle) * inner;
          const y1 = 90 + Math.sin(angle) * inner;
          const x2 = 170 + Math.cos(angle) * outer;
          const y2 = 90 + Math.sin(angle) * outer;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.85"
            />
          );
        })}
      </g>

      {/* ---------- Connecting line ---------- */}
      <line x1="78" y1="90" x2="262" y2="90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.25" />

      {/* ---------- Interlocking chain links (center) ---------- */}
      <g stroke="hsl(var(--brand))" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        {/* left link */}
        <rect x="146" y="80" width="32" height="20" rx="10" fill="hsl(var(--surface))" transform="rotate(-30 162 90)" />
        {/* right link */}
        <rect x="162" y="80" width="32" height="20" rx="10" fill="hsl(var(--surface))" transform="rotate(-30 178 90)" />
      </g>

      {/* ---------- Left badge: DemandSense ---------- */}
      <g>
        <rect x="20" y="58" width="64" height="64" rx="16" fill="hsl(var(--surface))" stroke="currentColor" strokeWidth="2.5" />
        <image href="/logo.svg" x="34" y="72" width="36" height="36" />
      </g>

      {/* ---------- Right badge: LinkedIn ---------- */}
      <g>
        <rect x="256" y="58" width="64" height="64" rx="16" fill="hsl(var(--surface))" stroke="currentColor" strokeWidth="2.5" />
        <g transform="translate(270, 72)">
          <rect width="36" height="36" rx="8" fill="#0A66C2" />
          <g transform="translate(8, 8)" fill="#FFFFFF">
            <rect x="0" y="7" width="4" height="13" />
            <circle cx="2" cy="2" r="2.1" />
            <path d="M7.2 7 h3.7 v1.8 c0.6 -1 1.9 -2.1 3.9 -2.1 c4.1 0 4.9 2.7 4.9 6.2 V20 h-3.9 v-5.9 c0 -1.4 0 -3.2 -2 -3.2 c-2 0 -2.3 1.5 -2.3 3.1 V20 H7.2 z" />
          </g>
        </g>
      </g>
    </svg>
  );
};

const StatDivider = () => {
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="py-16 px-6 md:px-[112px] bg-white">
      <div className="max-w-[1216px] mx-auto">
        <div
          ref={ref}
          className={cn(
            "rounded-lg border border-line bg-canvas px-8 py-16 md:py-20 transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          )}
        >
          <h2 className="text-center text-2xl md:text-3xl font-semibold text-ink tracking-tight text-balance mb-12 md:mb-16">
            When integrating DemandSense and LinkedIn, we found:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center">
            {/* Left stat */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-ink tracking-tight">10x</div>
              <p className="mt-3 text-base text-ink-500">
                more companies
                <br />
                reached
              </p>
            </div>

            {/* Center visual */}
            <div className="flex items-center justify-center">
              <ConnectionIllustration />
            </div>

            {/* Right stat */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-ink tracking-tight">4x</div>
              <p className="mt-3 text-base text-ink-500">
                more companies
                <br />
                engaged
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatDivider;