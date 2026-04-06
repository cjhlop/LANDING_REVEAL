"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type LogoTickerProps = {
  className?: string;
  variant?: "light" | "dark";
};

const LogoTicker: React.FC<LogoTickerProps> = ({ className, variant = "dark" }) => {
  return (
    <section 
      className={cn(
        "w-full py-12 overflow-hidden bg-[#0F0F13] text-white border-y border-white/5",
        className
      )}
    >
      <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          
          {/* Left Side - Empty or for future use */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 md:gap-12 opacity-50 transition-all duration-500 flex-1">
            {/* Images removed */}
          </div>

          {/* Text Side - Right */}
          <div className="text-center md:text-left max-w-md">
            <p className="text-sm md:text-[15px] font-semibold leading-snug tracking-tight text-white/90">
              Trusted by 100+ B2B marketers to grow pipeline with LinkedIn Ads, while saving 30% spend with smarter ad management
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default React.memo(LogoTicker);