"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Linkedin } from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const ConnectionIllustration = () => {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      className="w-full max-w-[280px] mx-auto text-ink"
      aria-hidden="true"
    >
      {/* ---------- Energy burst (center) ---------- */}
      <g className="text-brand">
        {/* spark ring */}
        <circle cx="160" cy="100" r="26" stroke="currentColor" strokeWidth="2" strokeDasharray="3 6" opacity="0.7" />
        {/* jagged starburst rays */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const inner = 30;
          const outer = i % 2 === 0 ? 48 : 40;
          const x1 = 160 + Math.cos(angle) * inner;
          const y1 = 100 + Math.sin(angle) * inner;
          const x2 = 160 + Math.cos(angle) * outer;
          const y2 = 100 + Math.sin(angle) * outer;
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
            />
          );
        })}
        {/* bright core */}
        <circle cx="160" cy="100" r="8" stroke="currentColor" strokeWidth="2.5" />
      </g>

      {/* ---------- Left object: DemandSense plug ---------- */}
      <g stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
        {/* cable */}
        <path d="M14 100 C 36 100, 44 100, 56 100" />
        {/* plug body */}
        <rect x="56" y="74" width="56" height="52" rx="10" fill="hsl(var(--surface))" />
        {/* prong nose toward center */}
        <path d="M112 88 H 130" />
        <path d="M112 112 H 130" />
      </g>
      {/* DemandSense logo on left body */}
      <image
        href="/logo.svg"
        x="68"
        y="86"
        width="32"
        height="32"
      />

      {/* ---------- Right object: LinkedIn socket ---------- */}
      <g stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
        {/* cable */}
        <path d="M306 100 C 284 100, 276 100, 264 100" />
        {/* socket body */}
        <rect x="208" y="74" width="56" height="52" rx="10" fill="hsl(var(--surface))" />
        {/* socket slots toward center */}
        <path d="M190 88 H 208" />
        <path d="M190 112 H 208" />
      </g>
      {/* LinkedIn logo on right body */}
      <g transform="translate(220, 86)">
        <rect width="32" height="32" rx="6" fill="#0A66C2" />
        <g transform="translate(7, 7)" fill="#FFFFFF">
          <rect x="0" y="6" width="3.5" height="12" />
          <circle cx="1.75" cy="1.75" r="1.9" />
          <path d="M6.5 6 h3.3 v1.6 c0.5 -0.9 1.7 -1.9 3.5 -1.9 c3.7 0 4.4 2.4 4.4 5.6 V18 h-3.5 v-5.3 c0 -1.3 0 -2.9 -1.8 -2.9 c-1.8 0 -2.1 1.4 -2.1 2.8 V18 H6.5 z" />
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