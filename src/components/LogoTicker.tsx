"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type LogoTickerProps = {
  className?: string;
  variant?: "light" | "dark";
};

const LogoTicker: React.FC<LogoTickerProps> = ({ className, variant = "dark" }) => {
  const isDark = variant === "dark";

  return (
    <section 
      className={cn(
        "w-full py-12 overflow-hidden",
        isDark ? "bg-[#0F2043] text-white" : "bg-white text-gray-900 border-y border-gray-100",
        className
      )}
    >
      <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className={cn(
          "font-mono text-sm uppercase tracking-widest",
          isDark ? "text-[#7486AA]" : "text-gray-400"
        )}>
          Trusted by growth teams at
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder logos for design fidelity */}
          <div className="text-xl font-bold">ACME Corp</div>
          <div className="text-xl font-bold">GlobalTech</div>
          <div className="text-xl font-bold">Nebula</div>
          <div className="text-xl font-bold">Vertex</div>
          <div className="text-xl font-bold hidden md:block">Horizon</div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(LogoTicker);