"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Hexagon, Triangle, CircleDashed, Component, Box } from "lucide-react";
import g2Logo from "@/assets/g2.png";

export type LogoTickerProps = {
  className?: string;
  variant?: "light" | "dark";
};

const LogoTicker: React.FC<LogoTickerProps> = ({ className, variant = "dark" }) => {
  const isLight = variant === "light";

  return (
    <section
      className={cn(
        "w-full overflow-hidden border-y transition-colors py-16 md:py-20 xl:py-[96px]",
        isLight
          ? "bg-gray-50 border-gray-200 text-gray-900"
          : "bg-[#0F0F13] border-white/5 text-white",
        className
      )}
    >
      <div className="mx-auto max-w-[1216px] px-[clamp(24px,5vw,112px)]">
        <div className="flex flex-col items-center gap-10">

          {/* TIER 1 — Proof badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center">
            {/* Badge A — G2 */}
            <div className="flex items-center gap-2.5">
              <img src={g2Logo} alt="G2" className="h-7 w-auto" />
              <span className="text-[14px] font-medium text-white">
                Rated 5.0/5 on G2
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-9 w-px bg-white/15 mx-6" aria-hidden="true" />
            <div className="block sm:hidden h-px w-24 bg-white/15 my-4" aria-hidden="true" />

            {/* Badge B — HubSpot */}
            <a
              href="https://ecosystem.hubspot.com/marketplace/listing/demandsense-marketing-analytics"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DemandSense on the HubSpot App Marketplace — opens in a new tab"
              className="flex items-center gap-2.5 text-white transition-colors duration-150 hover:text-white/70"
            >
              <Box className="h-6 w-6 text-[#FA8C16]" strokeWidth={2} />
              <span className="text-[14px] font-medium">
                HubSpot Marketplace App
              </span>
            </a>
          </div>

          {/* TIER 2 — Trust sentence */}
          <p className="text-center text-[18px] font-semibold text-white/90 max-w-2xl">
            Trusted by 100+ marketers to grow{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              LinkedIn ads pipeline
            </span>{" "}
            with DemandSense
          </p>

          {/* TIER 3 — Logo wall */}
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            <div className="flex items-center gap-2.5 font-bold text-xl md:text-2xl tracking-tighter">
              <Hexagon className="w-6 h-6 md:w-7 md:h-7 fill-current opacity-80" /> Quantum
            </div>
            <div className="flex items-center gap-2.5 font-bold text-xl md:text-2xl tracking-tighter">
              <Triangle className="w-6 h-6 md:w-7 md:h-7 fill-current opacity-80" /> Acme
            </div>
            <div className="flex items-center gap-2.5 font-bold text-xl md:text-2xl tracking-tighter">
              <CircleDashed className="w-6 h-6 md:w-7 md:h-7 opacity-80" strokeWidth={2.5} /> Globex
            </div>
            <div className="flex items-center gap-2.5 font-bold text-xl md:text-2xl tracking-tighter">
              <Component className="w-6 h-6 md:w-7 md:h-7 opacity-80" strokeWidth={2.5} /> Initech
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default React.memo(LogoTicker);