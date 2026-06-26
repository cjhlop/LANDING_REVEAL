"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const ConnectionVisual = ({ pulsing }: { pulsing: boolean }) => {
  return (
    <div className="relative flex items-center justify-center gap-0 w-full max-w-[300px] mx-auto">
      {/* DemandSense node */}
      <div className="relative z-20 bg-surface rounded-card p-4 shadow-sm border border-line flex items-center justify-center shrink-0">
        <img src="/logo.svg" alt="DemandSense" className="w-9 h-9 md:w-10 md:h-10" />
      </div>

      {/* Connector line */}
      <div className="relative flex-1 h-px bg-line mx-1">
        <div
          className={cn(
            "absolute top-1/2 left-0 h-px bg-brand transition-all duration-1000 ease-out",
            pulsing ? "w-full opacity-100" : "w-0 opacity-60"
          )}
        />
      </div>

      {/* Central hub */}
      <div className="relative z-30 shrink-0">
        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand flex items-center justify-center shadow-md">
          <span className="text-white text-lg md:text-xl font-bold">+</span>
          <div
            className={cn(
              "absolute inset-0 rounded-full bg-brand/30 blur-xl transition-all duration-1000",
              pulsing ? "opacity-100 scale-150" : "opacity-0 scale-100"
            )}
          />
        </div>
      </div>

      {/* Connector line */}
      <div className="relative flex-1 h-px bg-line mx-1">
        <div
          className={cn(
            "absolute top-1/2 right-0 h-px bg-brand transition-all duration-1000 ease-out",
            pulsing ? "w-full opacity-100" : "w-0 opacity-60"
          )}
        />
      </div>

      {/* LinkedIn node */}
      <div className="relative z-20 bg-surface rounded-card p-2 shadow-sm border border-line flex items-center justify-center shrink-0">
        <svg viewBox="0 0 32 32" className="w-9 h-9 md:w-10 md:h-10" aria-hidden="true">
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
  const [pulsing, setPulsing] = React.useState(false);

  React.useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setPulsing(true);
      setTimeout(() => setPulsing(false), 1200);
    }, 3000);
    return () => clearInterval(interval);
  }, [inView]);

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
              <ConnectionVisual pulsing={pulsing} />
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