"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import SectionBadge from "../SectionBadge";
import { Layers, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Icons ---
const Icons = {
  linkedin: () => <img src="https://cdn.simpleicons.org/linkedin/0A66C2" alt="LinkedIn" className="h-full w-full object-contain p-0.5" />,
  google: () => <img src="https://cdn.simpleicons.org/googleads/4285F4" alt="Google Ads" className="h-full w-full object-contain p-0.5" />,
  meta: () => <img src="https://cdn.simpleicons.org/meta/0668E1" alt="Meta" className="h-full w-full object-contain p-0.5" />,
  tiktok: () => <img src="https://cdn.simpleicons.org/tiktok/000000" alt="TikTok" className="h-full w-full object-contain p-0.5" />,
  
  salesforce: () => <img src="https://cdn.simpleicons.org/salesforce/00A1E0" alt="Salesforce" className="h-full w-full object-contain p-0.5" />,
  hubspot: () => <img src="https://cdn.simpleicons.org/hubspot/FF7A59" alt="HubSpot" className="h-full w-full object-contain p-0.5" />,
  slack: () => <img src="https://cdn.simpleicons.org/slack/4A154B" alt="Slack" className="h-full w-full object-contain p-0.5" />,
  marketo: () => <img src="https://cdn.simpleicons.org/adobeexperiencemanager/5C2D91" alt="Marketo" className="h-full w-full object-contain p-0.5" />,
  
  demandsense: () => <img src="/logo.svg" alt="DemandSense" className="h-full w-full object-contain p-1" />,
};

// --- Components ---

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode; label?: string }>(
  ({ className, children, label }, ref) => {
    return (
      <div className="flex flex-col items-center gap-2 relative group">
        <div
          ref={ref}
          className={cn(
            "z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:border-blue-200",
            className,
          )}
        >
          {children}
        </div>
        {label && (
          <span className="absolute top-full mt-2 text-[10px] font-semibold text-gray-400 uppercase tracking-wider opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap">
            {label}
          </span>
        )}
      </div>
    );
  },
);

Circle.displayName = "Circle";

const IntegrationsSection = ({ className }: { className?: string }) => {
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.3 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Refs for nodes
  const centerRef = useRef<HTMLDivElement>(null);
  
  // Inputs (Left)
  const linkedInRef = useRef<HTMLDivElement>(null);
  const googleRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const tiktokRef = useRef<HTMLDivElement>(null);
  
  // Outputs (Right)
  const salesforceRef = useRef<HTMLDivElement>(null);
  const hubspotRef = useRef<HTMLDivElement>(null);
  const slackRef = useRef<HTMLDivElement>(null);
  const marketoRef = useRef<HTMLDivElement>(null);

  return (
    <section className={cn("relative w-full bg-white py-24 lg:py-32 overflow-hidden", className)}>
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Radial Fade for Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_80%)] pointer-events-none" />

      <div className="max-w-[1216px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20 max-w-3xl mx-auto">
          <div className={cn(
            "flex justify-center transition-all duration-700",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={Layers} text="Unified Ecosystem" />
          </div>

          <h2 className={cn(
            "text-4xl md:text-5xl font-bold text-[#0F2043] mt-6 mb-6 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Connect Your <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Entire Stack</span>
          </h2>

          <p className={cn(
            "text-xl text-gray-600 leading-relaxed transition-opacity duration-700 delay-200",
            headerInView ? "opacity-100" : "opacity-0"
          )}>
            DemandSense acts as the intelligence layer between your ad platforms and your CRM. Sync audiences, enrich leads, and attribute revenue automatically.
          </p>
        </div>

        {/* Diagram Container */}
        <div 
          className="relative flex w-full max-w-[1000px] mx-auto items-center justify-center rounded-[32px] border border-gray-200 bg-gray-50/50 p-10 md:p-20 shadow-sm"
          ref={containerRef}
        >
          <div className="flex h-full w-full flex-col items-stretch justify-between gap-10 md:flex-row">
            
            {/* Left Column: Sources */}
            <div className="flex flex-col justify-center gap-8">
              <div className="text-center md:text-right mb-2 md:mb-0 md:absolute md:-top-8 md:left-10">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Ad Platforms</span>
              </div>
              <Circle ref={linkedInRef} label="LinkedIn">
                <Icons.linkedin />
              </Circle>
              <Circle ref={googleRef} label="Google Ads">
                <Icons.google />
              </Circle>
              <Circle ref={metaRef} label="Meta">
                <Icons.meta />
              </Circle>
              <Circle ref={tiktokRef} label="TikTok">
                <Icons.tiktok />
              </Circle>
            </div>

            {/* Center: Hub */}
            <div className="flex flex-col justify-center items-center relative">
              <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
              <div className="relative z-10 h-24 w-24 rounded-3xl border-2 border-blue-100 bg-white p-4 shadow-xl flex items-center justify-center">
                <Icons.demandsense />
                {/* Pulsing Ring */}
                <div className="absolute -inset-1 rounded-[26px] border border-blue-200 animate-ping opacity-20" />
              </div>
              <div className="mt-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-blue-500/30">
                <Zap className="w-3 h-3 fill-current" />
                Intelligence Core
              </div>
            </div>

            {/* Right Column: Destinations */}
            <div className="flex flex-col justify-center gap-8">
              <div className="text-center md:text-left mb-2 md:mb-0 md:absolute md:-top-8 md:right-10">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">CRM & Tools</span>
              </div>
              <Circle ref={salesforceRef} label="Salesforce">
                <Icons.salesforce />
              </Circle>
              <Circle ref={hubspotRef} label="HubSpot">
                <Icons.hubspot />
              </Circle>
              <Circle ref={slackRef} label="Slack">
                <Icons.slack />
              </Circle>
              <Circle ref={marketoRef} label="Marketo">
                <Icons.marketo />
              </Circle>
            </div>
          </div>

          {/* Beams: Left -> Center */}
          <AnimatedBeam containerRef={containerRef} fromRef={linkedInRef} toRef={centerRef} duration={3} />
          <AnimatedBeam containerRef={containerRef} fromRef={googleRef} toRef={centerRef} duration={3} delay={0.5} />
          <AnimatedBeam containerRef={containerRef} fromRef={metaRef} toRef={centerRef} duration={3} delay={1} />
          <AnimatedBeam containerRef={containerRef} fromRef={tiktokRef} toRef={centerRef} duration={3} delay={1.5} />

          {/* Beams: Center -> Right */}
          <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={salesforceRef} duration={3} />
          <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={hubspotRef} duration={3} delay={0.5} />
          <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={slackRef} duration={3} delay={1} />
          <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={marketoRef} duration={3} delay={1.5} />
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="group border-gray-200 hover:bg-gray-50 hover:text-blue-600">
            View All 50+ Integrations
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

      </div>
    </section>
  );
};<think>[REDACTED]</think>

export default React.memo(IntegrationsSection);