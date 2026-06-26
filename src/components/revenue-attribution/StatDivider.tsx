"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Linkedin } from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";

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
              <div className="relative">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-lg bg-brand flex items-center justify-center shadow-md">
                  <Linkedin className="w-12 h-12 md:w-14 md:h-14 text-white" />
                </div>
                <div className="absolute inset-0 rounded-lg bg-brand/10 blur-2xl -z-10" />
              </div>
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