"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Linkedin, Link2 } from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const ConnectionIllustration = () => {
  return (
    <div className="flex items-center justify-center w-full max-w-[320px] mx-auto">
      {/* Left node: DemandSense */}
      <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-white border border-line shadow-sm flex items-center justify-center">
        <img src="/logo.svg" alt="DemandSense" className="w-8 h-8" />
      </div>

      {/* Connector line */}
      <div className="flex-1 h-px bg-line min-w-[16px]" />

      {/* Center node: glowing link */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        {/* Soft glow halo */}
        <span className="absolute inset-0 -m-3 rounded-full bg-brand/25 blur-xl" aria-hidden="true" />
        <span className="absolute inset-0 -m-1 rounded-full bg-brand/15 blur-md" aria-hidden="true" />
        {/* Node */}
        <div className="relative w-14 h-14 rounded-full bg-brand flex items-center justify-center shadow-md">
          <Link2 className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
      </div>

      {/* Connector line */}
      <div className="flex-1 h-px bg-line min-w-[16px]" />

      {/* Right node: LinkedIn */}
      <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-white border border-line shadow-sm flex items-center justify-center">
        <Linkedin className="w-8 h-8" fill="#0A66C2" stroke="#0A66C2" />
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