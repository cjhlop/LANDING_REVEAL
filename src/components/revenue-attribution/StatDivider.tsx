"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Link2 } from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const ConnectionIllustration = () => {
  return (
    <div className="flex items-center justify-center gap-3 md:gap-4 w-full">
      {/* Left card: DemandSense */}
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-line bg-white shadow-sm flex items-center justify-center shrink-0">
        <img src="/logo.svg" alt="DemandSense" className="w-8 h-8 md:w-10 md:h-10" />
      </div>

      {/* Connector + link icon */}
      <div className="flex items-center flex-1 min-w-0">
        <div className="h-px flex-1 bg-line-strong" />
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand flex items-center justify-center shadow-md shrink-0 mx-1">
          <Link2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
        <div className="h-px flex-1 bg-line-strong" />
      </div>

      {/* Right card: LinkedIn */}
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-line bg-white shadow-sm flex items-center justify-center shrink-0">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-md bg-[#0A66C2] flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="#FFFFFF" className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
          </svg>
        </div>
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