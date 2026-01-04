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
  Eye,
  CheckCircle2,
  Lock,
  Activity,
  Calendar,
  BarChart3,
  Layers
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
          
          {/* 1. Ads Scheduling - Advanced Dynamic Card */}
          <div className={cn(
            "md:col-span-4 bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden group relative transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-6 z-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Smart Scheduling</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                    Set precise working hours for your campaigns. Our AI automatically pauses ads during low-intent periods to save up to 40% of your budget.
                  </p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-300">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Peak Performance Hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                    <div className="w-2 h-2 rounded-full bg-slate-700" />
                    <span>Automated Pause State</span>
                  </div>
                </div>
              </div>

              <div className="flex-[1.5] relative min-h-[200px] md:min-h-0 bg-slate-950/50 rounded-2xl border border-slate-800 p-4 overflow-hidden">
                <AdvancedSchedulingVisual active={inView} />
              </div>
            </div>
          </div>

          {/* 2. Frequency Cap - Advanced Dynamic Card */}
          <div className={cn(
            "md:col-span-2 bg-[#0F2043] rounded-3xl border border-gray-800 overflow-hidden group relative transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="p-8 space-y-4 relative z-20">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-900/20">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Frequency Cap</h3>
              <p className="text-blue-200/70 text-xs leading-relaxed">
                Prevent audience fatigue by capping impressions per campaign. Ensure even delivery across your entire account.
              </p>
            </div>
            
            <div className="absolute inset-0 pt-40 px-6 pb-6">
              <AdvancedFrequencyVisual active={inView} />
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

const AdvancedSchedulingVisual = ({ active }: { active: boolean }) => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const [scanPos, setScanPos] = React.useState(0);

  React.useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setScanPos(prev => (prev + 1) % 24);
    }, 400);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header Status */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-3 h-3 text-blue-400" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Weekly Schedule</span>
        </div>
        <div className={cn(
          "flex items-center gap-2 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 transition-all duration-500",
          active ? "opacity-100" : "opacity-0"
        )}>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[9px] font-bold text-blue-400 uppercase">
            {scanPos >= 9 && scanPos <= 18 ? "Campaigns Active" : "Auto-Paused"}
          </span>
        </div>
      </div>

      {/* The Grid */}
      <div className="flex-1 grid grid-cols-[20px_1fr] gap-2">
        {/* Time Labels */}
        <div className="flex flex-col justify-between text-[8px] font-bold text-slate-600 py-1">
          <span>00</span>
          <span>06</span>
          <span>12</span>
          <span>18</span>
          <span>23</span>
        </div>

        {/* Grid Cells */}
        <div className="relative grid grid-cols-7 gap-1 h-full">
          {days.map((day, dayIdx) => (
            <div key={dayIdx} className="flex flex-col gap-1 h-full">
              <div className="text-[8px] font-bold text-slate-500 text-center mb-1">{day}</div>
              <div className="flex-1 flex flex-col gap-0.5">
                {[...Array(24)].map((_, hourIdx) => {
                  const isWeekend = dayIdx >= 5;
                  const isWorkHour = hourIdx >= 9 && hourIdx <= 18;
                  const isPeak = !isWeekend && isWorkHour;
                  const isScanning = hourIdx === scanPos;
                  
                  return (
                    <div 
                      key={hourIdx}
                      className={cn(
                        "flex-1 rounded-[1px] transition-all duration-300",
                        isPeak ? "bg-blue-500/40" : "bg-slate-800/30",
                        isScanning && isPeak && "bg-blue-400 scale-x-110 shadow-[0_0_10px_rgba(56,117,246,0.5)]",
                        isScanning && !isPeak && "bg-slate-600",
                        !active && "opacity-0"
                      )}
                      style={{ 
                        transitionDelay: active ? `${(dayIdx * 20) + (hourIdx * 5)}ms` : '0ms'
                      }}
                    />
                  );
                })}
              </div>
            </div>
          ))}

          {/* Scanning Line */}
          <div 
            className="absolute left-0 right-0 h-px bg-blue-400/50 shadow-[0_0_15px_rgba(56,117,246,0.8)] z-20 pointer-events-none transition-all duration-400 ease-linear"
            style={{ 
              top: `${(scanPos / 24) * 100}%`,
              opacity: active ? 1 : 0
            }}
          />
        </div>
      </div>

      {/* Footer Stats */}
      <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <span className="text-[8px] font-bold text-slate-500 uppercase">Efficiency</span>
            <span className="text-xs font-bold text-white">+38%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] font-bold text-slate-500 uppercase">Waste Reduced</span>
            <span className="text-xs font-bold text-emerald-400">-$2.4k</span>
          </div>
        </div>
        <div className="text-[8px] font-mono text-slate-600">UTC-05:00 EST</div>
      </div>
    </div>
  );
};

const AdvancedFrequencyVisual = ({ active }: { active: boolean }) => {
  const campaigns = [
    { name: "Brand Awareness", color: "bg-blue-500", limit: 80 },
    { name: "Lead Gen - SaaS", color: "bg-orange-500", limit: 45 },
    { name: "Retargeting - Enterprise", color: "bg-emerald-500", limit: 65 },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-4">
      {/* Campaign List */}
      <div className="space-y-4">
        {campaigns.map((camp, i) => (
          <div key={i} className="space-y-1.5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className={cn("w-1.5 h-1.5 rounded-full", camp.color)} />
                <span className="text-[10px] font-bold text-blue-100/80 uppercase tracking-tight">{camp.name}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-mono text-blue-300/50">CAP: 3/wk</span>
                {active && (
                  <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
                    <Lock className="w-2 h-2 text-orange-400" />
                    <span className="text-[8px] font-bold text-orange-400 uppercase">Capped</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
              {/* Progress Bar */}
              <div 
                className={cn(
                  "h-full transition-all duration-[2500ms] ease-out relative",
                  camp.color
                )}
                style={{ 
                  width: active ? `${camp.limit}%` : '0%',
                  transitionDelay: `${i * 300}ms` 
                }}
              >
                {/* Animated Pulse at the end of the bar */}
                <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/20 animate-pulse" />
              </div>
              
              {/* Capping Threshold Line */}
              <div className="absolute left-[70%] top-0 bottom-0 w-px bg-orange-500/40 border-r border-orange-500/20 border-dashed" />
            </div>
          </div>
        ))}
      </div>

      {/* Live Engine Status */}
      <div className={cn(
        "mt-auto bg-white/5 rounded-xl p-3 border border-white/10 flex items-center justify-between transition-all duration-1000",
        active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Activity className="w-4 h-4 text-orange-400" />
            <div className="absolute inset-0 bg-orange-400/20 rounded-full animate-ping" />
          </div>
          <div>
            <div className="text-[8px] font-bold text-blue-300/50 uppercase">Capping Engine</div>
            <div className="text-[10px] font-bold text-white">Monitoring 12 Campaigns</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[8px] font-bold text-blue-300/50 uppercase">Saved Impressions</div>
          <div className="text-[10px] font-bold text-emerald-400">14.2k</div>
        </div>
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