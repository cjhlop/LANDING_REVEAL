"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Link2 } from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const ConnectionIllustration = () => {
  return (
    <div className="flex items-center justify-center gap-3 md:gap-5 w-full max-w-[340px] mx-auto">
      {/* Left tile: DemandSense */}
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-line bg-surface shadow-sm flex items-center justify-center flex-shrink-0">
        <img src="/logo.svg" alt="DemandSense" className="w-8 h-8 md:w-10 md:h-10" />
      </div>

      {/* Connector left */}
      <div className="flex-1 h-px bg-line-strong min-w-[16px]" />

      {/* Central link node */}
      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 rounded-full bg-brand/25 blur-xl scale-150" />
        <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand flex items-center justify-center shadow-md">
          <Link2 className="w-6 h-6 md:w-7 md:h-7 text-white" />
        </div>
      </div>

      {/* Connector right */}
      <div className="flex-1 h-px bg-line-strong min-w-[16px]" />

      {/* Right tile: LinkedIn */}
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-line bg-surface shadow-sm flex items-center justify-center flex-shrink-0">
        <svg viewBox="0 0 32 32" className="w-8 h-8 md:w-10 md:h-10" aria-hidden="true">
          <rect width="32" height="32" rx="6" fill="#0A66C2" />
          <g transform="translate(7, 7)" fill="#FFFFFF">
            <rect x="0" y="6" width="3.5" height="12" />
            <circle cx="1.75" cy="1.75" r="1.9" />
            <path d="M6.5 6 h3.3 v1.6 c0.5 -0.9 1.7 -1.9 3.5 -1.9 c3.7 0 4.4 2.4 4.4 5.6 V18 h-3.5 v-5.3 c0 -1.3 0 -2.9 -1.8 -2.9 c-1.8 0 -2.1 1.4 -2.1 2.8 V18 H6.5 z" />
          </g>
        </svg>
      </div>
    </div>
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