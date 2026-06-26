"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Linkedin } from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const ConnectionIllustration = () => {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[320px] mx-auto">
      {/* Animated particle connector */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-24 pointer-events-none z-0">
        <svg
          viewBox="0 0 320 96"
          fill="none"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Blue arc */}
          <path
            id="sd-arc-blue"
            d="M 70 48 C 130 20, 190 20, 250 48"
            stroke="currentColor"
            className="text-blue-400/20"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Orange arc */}
          <path
            id="sd-arc-orange"
            d="M 70 48 C 130 76, 190 76, 250 48"
            stroke="currentColor"
            className="text-orange-400/20"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>

        {/* Blue particle traveling left → right */}
        <span
          className="absolute w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(56,117,246,0.6)]"
          style={{
            offsetPath: "path('M 70 48 C 130 20, 190 20, 250 48')",
            animation: "sdMoveParticle 3s linear infinite",
          }}
          aria-hidden="true"
        />
        {/* Orange particle traveling right → left */}
        <span
          className="absolute w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(250,140,22,0.6)]"
          style={{
            offsetPath: "path('M 250 48 C 190 76, 130 76, 70 48')",
            animation: "sdMoveParticle 3s linear infinite",
            animationDelay: "1.5s",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Left node: DemandSense */}
      <div className="group relative z-10 flex-shrink-0">
        <div className="bg-white rounded-2xl p-4 md:p-5 shadow-lg border border-gray-100 transition-all duration-300 group-hover:border-blue-200 group-hover:-translate-y-1">
          <img
            src="/logo.svg"
            alt="DemandSense"
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </div>
      </div>

      {/* Spacer to give the connector room */}
      <div className="flex-1 min-w-[80px]" />

      {/* Right node: LinkedIn */}
      <div className="group relative z-10 flex-shrink-0">
        <div className="bg-white rounded-2xl p-4 md:p-5 shadow-lg border border-gray-100 transition-all duration-300 group-hover:border-blue-200 group-hover:-translate-y-1">
          <Linkedin
            className="w-10 h-10 md:w-12 md:h-12 grayscale group-hover:grayscale-0 transition-all duration-300"
            style={{ color: "rgb(10, 102, 194)" }}
            fill="rgb(10, 102, 194)"
            stroke="rgb(10, 102, 194)"
          />
        </div>
      </div>

      <style>{`
        @keyframes sdMoveParticle {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
      `}</style>
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