"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  Zap, 
  SlidersHorizontal, 
  ShieldCheck,
  Clock,
  Target,
  TrendingUp,
  MousePointerClick,
  Eye,
  Lock,
  Activity,
  CheckCircle2
} from "lucide-react";
import SectionBadge from "./SectionBadge";

const LinkedInAdsOptimization = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      id="linkedin-ads"
      className="w-full bg-white px-6 sm:px-12 md:px-[112px] py-24 lg:py-40 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 space-y-6">
          <div className={cn(
            "flex justify-center transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={Target} text="Campaign Intelligence" />
          </div>

          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            LinkedIn Ads <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Optimization</span>
          </h2>

          <p className={cn(
            "text-base text-gray-600 leading-relaxed transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Take control of your LinkedIn spend with advanced automation tools that the native Campaign Manager doesn't provide.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 auto-rows-[240px] lg:auto-rows-[300px]">
          
          {/* 1. Smart Scheduling (Large Card) */}
          <div className={cn(
            "md:col-span-8 md:row-span-2 bg-slate-50 rounded-[32px] p-8 lg:p-12 border border-gray-100 relative overflow-hidden group transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="max-w-md space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Smart Ad Scheduling</h3>
                <p className="text-gray-600">Run ads only when your audience is most active. Set precise working hours and timezones to eliminate 3 AM wasted spend.</p>
              </div>
              
              {/* Visual: Mini Calendar/Grid */}
              <div className="mt-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-sm self-end transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Hours</span>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-blue-400" />)}
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {[...Array(21)].map((_, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "h-3 rounded-sm transition-all duration-1000",
                        i > 7 && i < 18 ? "bg-blue-600" : "bg-gray-100"
                      )}
                      style={{ transitionDelay: `${i * 30}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>

          {/* 2. Frequency Cap (Tall Card) */}
          <div className={cn(
            "md:col-span-4 md:row-span-2 bg-[#0F2043] rounded-[32px] p-8 border border-gray-800 relative overflow-hidden group transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-900/20">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Frequency Cap</h3>
                <p className="text-blue-200/70">Prevent audience fatigue. Stop overpaying for repetitive views that yield negative returns.</p>
              </div>

              {/* Visual: Gauge/Meter */}
              <div className="relative flex items-center justify-center py-8">
                <div className="w-32 h-32 rounded-full border-4 border-white/10 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-t-4 border-orange-500 animate-[spin_3s_linear_infinite]" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">3.2x</div>
                    <div className="text-[10px] font-bold text-orange-400 uppercase">Optimal</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
          </div>

          {/* 3. Audience Tuning (Wide Card) */}
          <div className={cn(
            "md:col-span-6 md:row-span-1 bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <SlidersHorizontal className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">Audience Tuning</h3>
                <p className="text-sm text-gray-600">Refine targeting by excluding non-ICP companies and titles automatically.</p>
                <div className="flex gap-2 pt-2">
                  <span className="px-2 py-1 rounded-md bg-gray-100 text-[10px] font-bold text-gray-500 uppercase">Auto-Exclude</span>
                  <span className="px-2 py-1 rounded-md bg-emerald-100 text-[10px] font-bold text-emerald-700 uppercase">ICP Match</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Budget Guard (Wide Card) */}
          <div className={cn(
            "md:col-span-6 md:row-span-1 bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-700 delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">Budget Control</h3>
                <p className="text-sm text-gray-600">Automate spend velocity. Prevent overspending with account-level budget guards.</p>
                <div className="flex items-center gap-2 pt-2 text-blue-600">
                  <Activity className="h-4 w-4" />
                  <span className="text-xs font-bold">Guard Active: $4,200 saved</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LinkedInAdsOptimization;