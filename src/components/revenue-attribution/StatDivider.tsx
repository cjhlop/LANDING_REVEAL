"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Linkedin, Link } from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const ConnectionIllustration = () => {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-5 w-full max-w-[320px] mx-auto">
      {/* Left tile: DemandSense */}
      <div className="flex-shrink-0 bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
        <img
          src="/logo.svg"
          alt="DemandSense"
          className="w-10 h-10 md:w-12 md:h-12"
        />
      </div>

      {/* Center: static link icon */}
      <Link className="flex-shrink-0 w-8 h-8 text-blue-600" />

      {/* Right tile: LinkedIn */}
      <div className="flex-shrink-0 bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
        <Linkedin
          className="w-10 h-10 md:w-12 md:h-12"
          style={{ color: "rgb(10, 102, 194)" }}
          fill="rgb(10, 102, 194)"
          stroke="rgb(10, 102, 194)"
        />
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
            "relative overflow-hidden rounded-[32px] border border-blue-100 bg-white shadow-xl px-8 py-16 md:py-20 transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          )}
        >
          {/* Soft glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-ink tracking-tight md:whitespace-nowrap mb-12 md:mb-16">
              When connecting DemandSense to LinkedIn Ads, marketer's see:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center">
              {/* Left stat */}
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-ink tracking-tight">4.4x</div>
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
      </div>
    </section>
  );
};

export default StatDivider;