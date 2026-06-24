"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Hexagon, Triangle, CircleDashed, Component } from "lucide-react";

export type LogoTickerProps = {
  className?: string;
  variant?: "light" | "dark";
};

const LogoTicker: React.FC<LogoTickerProps> = ({ className, variant = "dark" }) => {
  const isLight = variant === "light";

  return (
    <section 
      className={cn(
        "w-full py-12 overflow-hidden border-y transition-colors",
        isLight 
          ? "bg-gray-50 border-gray-200 text-gray-900" 
          : "bg-[#0F0F13] border-white/5 text-white",
        className
      )}
    >
      <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          
          {/* Left Side - Logos */}
          <div className={cn(
            "flex flex-wrap justify-center md:justify-start items-center gap-8 md:gap-12 transition-all duration-500 flex-1",
            isLight ? "opacity-60 grayscale hover:grayscale-0" : "opacity-50"
          )}>
            <div className="flex items-center gap-2.5 font-bold text-xl md:text-2xl tracking-tighter">
              <Hexagon className="w-6 h-6 md:w-7 md:h-7 fill-current opacity-80" /> Quantum
            </div>
            <div className="flex items-center gap-2.5 font-bold text-xl md:text-2xl tracking-tighter">
              <Triangle className="w-6 h-6 md:w-7 md:h-7 fill-current opacity-80" /> Acme
            </div>
            <div className="flex items-center gap-2.5 font-bold text-xl md:text-2xl tracking-tighter">
              <CircleDashed className="w-6 h-6 md:w-7 md:h-7 opacity-80" strokeWidth={2.5} /> Globex
            </div>
            <div className="flex items-center gap-2.5 font-bold text-xl md:text-2xl tracking-tighter hidden sm:flex">
              <Component className="w-6 h-6 md:w-7 md:h-7 opacity-80" strokeWidth={2.5} /> Initech
            </div>
          </div>

          {/* Text Side - Right */}
          <div className="text-center md:text-left max-w-md">
            <p className={cn(
              "text-sm md:text-[15px] font-semibold leading-snug tracking-tight",
              isLight ? "text-gray-600" : "text-white/90"
            )}>
              Trusted by 100+ B2B marketers to grow pipeline with LinkedIn Ads, while saving{" "}
              <span className="text-[#3875F6]">40% on spend</span>{" "}
              with smarter ad management.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default React.memo(LogoTicker);