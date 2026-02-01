"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type LogoTickerProps = {
  className?: string;
  variant?: "light" | "dark";
};

const LogoTicker: React.FC<LogoTickerProps> = ({ className, variant = "dark" }) => {
  const isDark = variant === "dark";

  const logos = [
    { src: "/logos/logo-m.png", alt: "Company M", className: "h-8 w-auto" },
    { src: "/logos/opteo.png", alt: "Opteo", className: "h-6 w-auto" },
    { src: "/logos/impactable.png", alt: "Impactable", className: "h-5 w-auto" },
    { src: "/logos/leadcycle.png", alt: "LeadCycle", className: "h-6 w-auto" },
  ];

  return (
    <section 
      className={cn(
        "w-full py-8 overflow-hidden",
        isDark ? "bg-[#0B0F19] text-white" : "bg-white text-gray-900 border-y border-gray-100",
        className
      )}
    >
      <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Logos Side */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo, index) => (
              <img 
                key={index}
                src={logo.src} 
                alt={logo.alt} 
                className={cn("object-contain brightness-0 invert", logo.className)} 
              />
            ))}
          </div>

          {/* Text Side */}
          <div className="text-center lg:text-right max-w-md">
            <p className="text-lg md:text-xl font-bold leading-tight tracking-tight">
              Used by 100+ B2B companies to turn traffic into real audiences and get up to{" "}
              <span className="text-[#3875F6]">4.5X higher return on ad spend</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default React.memo(LogoTicker);