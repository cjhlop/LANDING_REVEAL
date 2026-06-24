"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Hexagon, Triangle, CircleDashed, Component, GraduationCap, ArrowRight } from "lucide-react";
import g2Logo from "@/assets/g2.png";
import fiveStars from "@/assets/five-stars.png";

export type LogoTickerProps = {
  className?: string;
  variant?: "light" | "dark";
};

const LogoTicker: React.FC<LogoTickerProps> = ({ className, variant = "dark" }) => {
  const isLight = variant === "light";

  // Light variant keeps the original compact two-column layout
  if (isLight) {
    return (
      <section
        className={cn(
          "w-full py-12 overflow-hidden border-y bg-gray-50 border-gray-200 text-gray-900 transition-colors",
          className
        )}
      >
        <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 flex-1">
              <div className="flex items-center gap-2.5 font-bold text-xl md:text-2xl tracking-tighter">
                <Hexagon className="w-6 h-6 md:w-7 md:h-7 fill-current opacity-80" /> Quantum
              </div>
              <div className="flex items-center gap-2.5 font-bold text-xl md:text-2xl tracking-tighter">
                <Triangle className="w-6 h-6 md:w-7 md:h-7 fill-current opacity-80" /> Acme
              </div>
              <div className="flex items-center gap-2.5 font-bold text-xl md:text-2xl tracking-tighter">
                <CircleDashed className="w-6 h-6 md:w-7 md:h-7 opacity-80" strokeWidth={2.5} /> Globex
              </div>
              <div className="hidden sm:flex items-center gap-2.5 font-bold text-xl md:text-2xl tracking-tighter">
                <Component className="w-6 h-6 md:w-7 md:h-7 opacity-80" strokeWidth={2.5} /> Initech
              </div>
            </div>
            <div className="text-center md:text-left max-w-md">
              <p className="text-sm md:text-[15px] font-semibold leading-snug tracking-tight text-gray-600">
                Trusted by 100+ B2B marketers to grow pipeline with LinkedIn Ads, while saving{" "}
                <span className="text-[#3875F6]">40% on spend</span>{" "}
                with smarter ad management.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Dark variant: three centered, stacked tiers
  return (
    <section
      className={cn(
        "w-full bg-[#0F0F13] border-y border-white/5 text-white overflow-hidden py-12 md:py-14 lg:py-16",
        className
      )}
    >
      <div
        className="mx-auto max-w-[1216px] flex flex-col items-center gap-8"
        style={{ paddingInline: "clamp(24px, 5vw, 112px)" }}
      >
        {/* TIER 1 — Headline */}
        <p className="text-center text-[18px] md:text-[20px] font-semibold text-white/90 leading-snug max-w-2xl">
          100+ B2B marketers use DemandSense to grow{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            LinkedIn ads pipeline
          </span>
        </p>

        {/* TIER 2 — Proof badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          {/* Badge A — G2 */}
          <div className="flex items-center gap-2.5">
            <span className="inline-flex w-[30px] h-[30px] overflow-hidden rounded-full">
              <img
                src={g2Logo}
                alt="G2"
                className="w-full h-full object-contain scale-110"
              />
            </span>
            <span className="text-white text-[14px] font-medium">4.7</span>
            <img
              src={fiveStars}
              alt="4.7 out of 5 stars"
              className="h-6 w-auto object-contain"
            />
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-white/15" />

          {/* Badge B — HubSpot */}
          <a
            href="https://ecosystem.hubspot.com/marketplace/listing/demandsense-marketing-analytics"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DemandSense on the HubSpot App Marketplace — opens in a new tab"
            className="flex items-center gap-2.5 text-white hover:text-white/70 transition-colors duration-150"
          >
            <img
              src="https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg"
              alt="HubSpot"
              className="w-[30px] h-[30px] object-contain"
            />
            <span className="text-[14px] font-medium">60+ installs in HubSpot</span>
          </a>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-white/15" />

          {/* Badge C — Case studies */}
          <a
            href="/case-studies"
            aria-label="See case studies"
            className="group flex items-center gap-2.5 text-white hover:text-white/70 transition-colors duration-150"
          >
            <GraduationCap className="w-[26px] h-[26px] text-white/80" strokeWidth={1.75} />
            <span className="text-[14px] font-medium flex items-center gap-1.5">
              See case studies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </a>
        </div>

        {/* TIER 3 — Logo wall */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 w-full opacity-80 pt-2">
          <div className="flex items-center gap-2.5 font-bold text-xl md:text-2xl tracking-tighter max-h-8">
            <Hexagon className="w-6 h-6 md:w-7 md:h-7 fill-current" /> Impactable
          </div>
          <div className="flex items-center gap-2.5 font-bold text-xl md:text-2xl tracking-tighter max-h-8">
            <Triangle className="w-6 h-6 md:w-7 md:h-7 fill-current" /> LeadCycle
          </div>
          <div className="flex items-center gap-2.5 font-bold text-xl md:text-2xl tracking-tighter max-h-8">
            <CircleDashed className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} /> Opteo
          </div>
          <div className="flex items-center gap-2.5 font-bold text-xl md:text-2xl tracking-tighter max-h-8">
            <Component className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} /> Marketixa
          </div>
          <div className="flex items-center gap-2.5 font-bold text-xl md:text-2xl tracking-tighter max-h-8">
            <Hexagon className="w-6 h-6 md:w-7 md:h-7 fill-current" /> BlueStar
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(LogoTicker);