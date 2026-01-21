"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Eye, Zap, BarChart3, ArrowRight } from "lucide-react";
import SectionBadge from "./SectionBadge";

const SolutionIntroSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      id="solution-intro"
      className="w-full bg-[#F5F9FF] px-6 sm:px-12 md:px-[112px] py-24 lg:py-40 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div className={cn(
              "flex justify-center lg:justify-start transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <SectionBadge icon={Zap} text="The Framework" />
            </div>

            <h2 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              See clearly. <br />
              Improve confidently. <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Prove impact.</span>
            </h2>

            <div className={cn(
              "space-y-6 transition-all duration-700 delay-200",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <p className="text-xl text-gray-600 leading-relaxed">
                DemandSense gives you one decision system to see who's actually engaging, improve what resonates with ICP, and prove impact when it matters.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                It's not another dashboard or analytics tool. It's the decision layer that turns fragmented activity into clear, defensible choices.
              </p>
            </div>
          </div>

          {/* Right: Stunning Loop Visual */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <div className={cn(
              "relative w-full max-w-[500px] aspect-square transition-all duration-1000 delay-300",
              inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}>
              
              {/* Background Glows */}
              <div className="absolute inset-0 bg-blue-400/5 rounded-full blur-3xl animate-pulse" />
              
              {/* The Loop SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connecting Circle Path */}
                <circle cx="200" cy="200" r="140" stroke="url(#loop-gradient)" strokeWidth="2" strokeDasharray="8 8" className="opacity-20" />
                
                {/* Animated Particles on Path */}
                <circle r="3" fill="#3875F6" className="animate-loop-particle-1">
                  <animateMotion dur="6s" repeatCount="indefinite" path="M 200,60 A 140,140 0 1,1 199.9,60" />
                </circle>
                <circle r="3" fill="#FA8C16" className="animate-loop-particle-2">
                  <animateMotion dur="6s" repeatCount="indefinite" path="M 200,60 A 140,140 0 1,1 199.9,60" begin="2s" />
                </circle>
                <circle r="3" fill="#10b981" className="animate-loop-particle-3">
                  <animateMotion dur="6s" repeatCount="indefinite" path="M 200,60 A 140,140 0 1,1 199.9,60" begin="4s" />
                </circle>

                <defs>
                  <linearGradient id="loop-gradient" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3875F6" />
                    <stop offset="0.5" stopColor="#FA8C16" />
                    <stop offset="1" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Stage 1: SEE */}
              <div className={cn(
                "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 delay-500",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-3xl bg-white shadow-xl border border-blue-100 flex items-center justify-center group hover:border-blue-400 transition-colors">
                    <Eye className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">Stage 01</div>
                    <div className="text-xl font-bold text-gray-900">SEE</div>
                  </div>
                </div>
              </div>

              {/* Stage 2: IMPROVE */}
              <div className={cn(
                "absolute bottom-[15%] right-0 translate-x-1/4 transition-all duration-700 delay-700",
                inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              )}>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-3xl bg-white shadow-xl border border-orange-100 flex items-center justify-center group hover:border-orange-400 transition-colors">
                    <Zap className="w-10 h-10 text-orange-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold text-orange-500 uppercase tracking-widest">Stage 02</div>
                    <div className="text-xl font-bold text-gray-900">IMPROVE</div>
                  </div>
                </div>
              </div>

              {/* Stage 3: PROVE */}
              <div className={cn(
                "absolute bottom-[15%] left-0 -translate-x-1/4 transition-all duration-700 delay-900",
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              )}>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-3xl bg-white shadow-xl border border-emerald-100 flex items-center justify-center group hover:border-emerald-400 transition-colors">
                    <BarChart3 className="w-10 h-10 text-emerald-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Stage 03</div>
                    <div className="text-xl font-bold text-gray-900">PROVE</div>
                  </div>
                </div>
              </div>

              {/* Central Decision Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="magic-border p-1" style={{ "--magic-radius": "2rem" } as React.CSSProperties}>
                  <div className="bg-white rounded-[inherit] p-8 shadow-2xl border border-blue-50 flex flex-col items-center justify-center text-center">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">The Decision</div>
                    <div className="text-2xl font-black text-gray-900 leading-none">LOOP</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionIntroSection;