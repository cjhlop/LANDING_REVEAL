"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  Clock, 
  Zap, 
  SlidersHorizontal, 
  ShieldCheck,
  Target,
  TrendingUp,
  MousePointerClick,
  Eye,
  CheckCircle2,
  Lock,
  Activity,
  Circle
} from "lucide-react";
import SectionBadge from "./SectionBadge";
import { Badge } from "@/components/ui/badge";

const LinkedInAdsOptimization = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      id="linkedin-ads"
      className="w-full bg-white px-6 sm:px-12 md:px-[112px] py-24 lg:py-32 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
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
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[300px] md:auto-rows-[340px]">
          
          {/* 1. Ads Scheduling - Large Card */}
          <div className={cn(
            "md:col-span-4 bg-slate-50 rounded-3xl border border-gray-200 overflow-hidden group relative transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="absolute inset-0 p-8 flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-4 z-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Ads Scheduling</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  Set precise working hours for your campaigns. Show ads only when your audience is most active to maximize impact and save budget.
                </p>
              </div>
              <div className="flex-1 relative min-h-[180px] md:min-h-0">
                <SchedulingAnimation active={inView} />
              </div>
            </div>
          </div>

          {/* 2. Frequency Cap - Small Card */}
          <div className={cn(
            "md:col-span-2 bg-[#0F2043] rounded-3xl border border-gray-800 overflow-hidden group relative transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="p-8 space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-900/20">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Frequency Cap</h3>
              <p className="text-blue-200/70 text-xs leading-relaxed">
                Prevent audience fatigue by distributing impressions evenly. Stop overpaying for repetitive views.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/2">
              <FrequencyAnimation active={inView} />
            </div>
          </div>

          {/* 3. Audience Tuning - Small Card */}
          <div className={cn(
            "md:col-span-2 bg-white rounded-3xl border border-gray-200 overflow-hidden group relative transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="p-8 space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                <SlidersHorizontal className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Audience Tuning</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Refine your targeting by excluding non-ICP companies and titles automatically.
              </p>
            </div>
            <div className="absolute bottom-4 right-4 left-4 h-32">
              <TuningAnimation active={inView} />
            </div>
          </div>

          {/* 4. Budget Control - Large Card */}
          <div className={cn(
            "md:col-span-4 bg-gradient-to-br from-emerald-50 to-white rounded-3xl border border-emerald-100 overflow-hidden group relative transition-all duration-700 delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="absolute inset-0 p-8 flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-4 z-10">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Budget Control</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  Automate your spend velocity. Prevent overspending with intelligent account-level budget guards and real-time pacing.
                </p>
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                  <TrendingUp className="h-4 w-4" />
                  <span>Avg. 18% budget saved</span>
                </div>
              </div>
              <div className="flex-1 relative flex items-center justify-center">
                <BudgetAnimation active={inView} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Sub-Animations ---

const SchedulingAnimation = ({ active }: { active: boolean }) => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-7 gap-2 w-full max-w-[280px]">
        {days.map((day, i) => (
          <div key={i} className="space-y-2">
            <div className="text-[10px] font-bold text-gray-400 text-center">{day}</div>
            <div className="space-y-1">
              {[...Array(6)].map((_, j) => {
                const isWeekend = i >= 5;
                const isWorkHour = j >= 1 && j <= 4;
                const isActive = !isWeekend && isWorkHour;
                return (
                  <div 
                    key={j}
                    className={cn(
                      "h-4 rounded-sm transition-all duration-500",
                      isActive ? "bg-blue-500 shadow-sm" : "bg-gray-200/50",
                      active && isActive ? "scale-100 opacity-100" : "scale-90 opacity-40"
                    )}
                    style={{ transitionDelay: `${(i * 50) + (j * 30)}ms` }}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {/* Floating "Live" Indicator */}
      <div className={cn(
        "absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md border border-gray-100 flex items-center gap-2 transition-all duration-1000",
        active ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      )}>
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] font-bold text-gray-900 uppercase">Active Schedule</span>
      </div>
    </div>
  );
};

const FrequencyAnimation = ({ active }: { active: boolean }) => {
  return (
    <div className="w-full h-full relative flex items-center justify-center px-8">
      <div className="w-full space-y-3">
        {[85, 40, 65].map((width, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between text-[9px] font-bold text-blue-300/50 uppercase">
              <span>User Group {i+1}</span>
              <span>{active ? 'Capped' : 'Uncapped'}</span>
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div 
                className={cn(
                  "h-full bg-orange-500 transition-all duration-[2000ms] ease-out",
                  active ? "w-full" : "w-0"
                )}
                style={{ 
                  width: active ? `${width}%` : '0%',
                  transitionDelay: `${i * 200}ms` 
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Eye icons floating */}
      <div className="absolute inset-0 pointer-events-none">
        <Eye className={cn("absolute top-4 left-1/4 h-4 w-4 text-orange-400/20 transition-all duration-1000", active ? "opacity-100 scale-100" : "opacity-0 scale-0")} />
        <Eye className={cn("absolute bottom-8 right-1/3 h-3 w-3 text-orange-400/40 transition-all duration-1000 delay-300", active ? "opacity-100 scale-100" : "opacity-0 scale-0")} />
      </div>
    </div>
  );
};

const TuningAnimation = ({ active }: { active: boolean }) => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      {[
        { name: "Competitors", icon: Lock, color: "text-red-500", bg: "bg-red-50" },
        { name: "Existing Customers", icon: CheckCircle2, color: "text-green-500", bg: "bg-green-50" },
        { name: "Non-ICP Titles", icon: Activity, color: "text-orange-500", bg: "bg-orange-50" }
      ].map((item, i) => (
        <div 
          key={i}
          className={cn(
            "flex items-center justify-between p-2 rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-500",
            active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          )}
          style={{ transitionDelay: `${i * 150}ms` }}
        >
          <div className="flex items-center gap-2">
            <div className={cn("p-1.5 rounded-lg", item.bg, item.color)}>
              <item.icon className="h-3 w-3" />
            </div>
            <span className="text-[10px] font-bold text-gray-700">{item.name}</span>
          </div>
          <Badge variant="outline" className="text-[8px] border-gray-200 text-gray-400">Excluded</Badge>
        </div>
      ))}
    </div>
  );
};

const BudgetAnimation = ({ active }: { active: boolean }) => {
  return (
    <div className="relative w-40 h-40 sm:w-48 sm:h-48">
      <svg className="w-full h-full transform -rotate-90">
        <circle cx="50%" cy="50%" r="45%" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-100" />
        <circle 
          cx="50%" cy="50%" r="45%" 
          stroke="currentColor" strokeWidth="8" 
          fill="transparent" 
          strokeDasharray="283%"
          strokeDashoffset={active ? "40%" : "100%"}
          className="text-emerald-500 transition-all duration-[2500ms] ease-out"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className={cn("transition-all duration-1000 delay-500", active ? "opacity-100 scale-100" : "opacity-0 scale-50")}>
          <div className="text-3xl font-black text-gray-900 tracking-tighter">92%</div>
          <div className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">Daily Pacing</div>
          <div className="mt-1 flex items-center gap-1 px-2 py-0.5 bg-emerald-100 rounded-full text-[8px] font-bold text-emerald-700">
            <ShieldCheck className="h-2 w-2" /> SAFE
          </div>
        </div>
      </div>
      {/* Floating particles */}
      <div className={cn("absolute -top-2 -right-2 bg-white p-2 rounded-lg shadow-lg border border-gray-100 transition-all duration-1000 delay-1000", active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
        <div className="text-[8px] font-bold text-gray-400 uppercase">Saved</div>
        <div className="text-xs font-bold text-emerald-600">+$1,240</div>
      </div>
    </div>
  );
};

export default LinkedInAdsOptimization;