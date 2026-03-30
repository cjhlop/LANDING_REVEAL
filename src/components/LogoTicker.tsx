"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type LogoTickerProps = {
  className?: string;
  variant?: "light" | "dark";
};

const LogoTicker: React.FC<LogoTickerProps> = ({ className, variant = "dark" }) => {
  const logos = [
    { src: "/logos/impactable.png", alt: "Impactable" },
    { src: "/logos/leadcycle.png", alt: "LeadCycle" },
    { src: "/logos/opteo.png", alt: "Opteo" },
    { src: "/logos/logo-m.png", alt: "Company M" },
    { src: "/logos/bluestar.webp", alt: "BlueStar" },
  ];

  return (
    <section 
      className={cn(
        "w-full py-12 overflow-hidden bg-[#0F0F13] text-white border-y border-white/5",
        className
      )}
    >
      <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          
          {/* Logos Side - Left */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 flex-1">
            {logos.map((logo, index) => (
              <img 
                key={index}
                src={logo.src} 
                alt={logo.alt} 
                className="h-6 md:h-7 w-auto object-contain brightness-0 invert" 
              />
            ))}
          </div>

          {/* Text Side - Right */}
          <div className="text-center md:text-left max-w-md">
            <p className="text-sm md:text-[15px] font-semibold leading-snug tracking-tight text-white/90">
              Used by 100+ B2B companies to save{" "}
              <span className="text-[#3875F6]">30–40% of wasted LinkedIn ad spend</span>{" "}
              with smarter scheduling and targeting controls.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default React.memo(LogoTicker);