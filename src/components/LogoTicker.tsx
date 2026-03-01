"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type LogoTickerProps = {
  className?: string;
  variant?: "light" | "dark";
};

const LogoTicker: React.FC<LogoTickerProps> = ({ className, variant = "dark" }) => {
  const logos = [
    { src: "/logos/logo-m.png", alt: "Company M" },
    { src: "/logos/opteo.png", alt: "Opteo" },
    { src: "/logos/bluestar.webp", alt: "BlueStar" },
    { src: "/logos/leadcycle.png", alt: "LeadCycle" },
  ];

  return (
    <section 
      className={cn(
        "w-full py-10 overflow-hidden bg-[#14141B] text-white",
        className
      )}
    >
      <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
        <div className="flex flex-col items-center justify-center gap-8">
          
          {/* Text Side - Now on top and centered */}
          <div className="text-center max-w-2xl">
            <p className="text-sm md:text-base font-medium leading-tight tracking-wide text-[#3875F6]">
              Used by 100+ B2B teams save{" "}
              <span className="font-bold">30% ad budget</span> on average
            </p>
          </div>

          {/* Logos Side - Now below the text */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo, index) => (
              <img 
                key={index}
                src={logo.src} 
                alt={logo.alt} 
                className="h-6 md:h-7 w-auto object-contain brightness-0 invert" 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default React.memo(LogoTicker);