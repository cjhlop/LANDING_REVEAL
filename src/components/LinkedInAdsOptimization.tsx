"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  Calendar, 
  Zap, 
  SlidersHorizontal, 
  ShieldCheck,
  ArrowRight,
  Clock,
  Users,
  TrendingUp,
  Target,
  Circle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionBadge from "./SectionBadge";

type Feature = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
};

const FEATURES: Feature[] = [
  {
    id: "scheduling",
    title: "Ads Scheduling",
    description: "Set precise working hours for your campaigns. Show ads only when your audience is most active to maximize impact and save budget.",
    icon: Clock,
    color: "blue"
  },
  {
    id: "frequency",
    title: "Frequency Cap",
    description: "Prevent audience fatigue by distributing impressions evenly. Stop overpaying for repetitive views that yield negative returns.",
    icon: Zap,
    color: "orange"
  },
  {
    id: "tuning",
    title: "Audience Tuning",
    description: "Refine your targeting by excluding non-ICP companies, industries, and titles. Ensure every dollar is spent on high-fit prospects.",
    icon: SlidersHorizontal,
    color: "purple"
  },
  {
    id: "budget",
    title: "Budget Control",
    description: "Automate your spend velocity. Prevent overspending or underspending with intelligent account-level budget guards.",
    icon: ShieldCheck,
    color: "emerald"
  }
];

const LinkedInAdsOptimization = () => {
  const [activeId, setActiveId] = React.useState("scheduling");
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });

  // Auto-cycle features
  React.useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActiveId((current) => {
        const index = FEATURES.findIndex(f => f.id === current);
        return FEATURES[(index + 1) % FEATURES.length].id;
      });
    }, 8000);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section 
      ref={ref}
      id="linkedin-ads"
      className="w-full bg-white px-8 md:px-[112px] py-24 md:py-40 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left: Content */}
        <div className="lg:col-span-5 space-y-8">
          <div className={cn(
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={Target} text="Campaign Intelligence" />
          </div>

          <h2 className={cn(
            "text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            LinkedIn Ads <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Optimization</span>
          </h2>

          <p className={cn(
            "text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Take control of your LinkedIn spend with advanced automation tools that the native Campaign Manager doesn't provide.
          </p>

          {/* Feature Selectors */}
          <div className="space-y-3 pt-4">
            {FEATURES.map((feature, i) => (
              <button
                key={feature.id}
                onClick={() => setActiveId(feature.id)}
                className={cn(
                  "w-full flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 text-left group",
                  activeId === feature.id 
                    ? "bg-blue-50/50 border-blue-100 shadow-sm" 
                    : "bg-transparent border-transparent hover:bg-gray-50"
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                  activeId === feature.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400 group-hover:text-gray-600"
                )}>
                  <feature.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className={cn(
                    "font-bold transition-colors",
                    activeId === feature.id ? "text-gray-900" : "text-gray-500"
                  )}>
                    {feature.title}
                  </h3>
                  {activeId === feature.id && (
                    <p className="text-sm text-gray-600 mt-1 animate-in fade-in slide-in-from-top-1 duration-500">
                      {feature.description}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className={cn(
            "pt-4 transition-all duration-700 delay-400",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Button size="hero" variant="hero" className="group">
              Optimize My Ads
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right: The Animation Stage */}
        <div className="lg:col-span-7 relative flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-[550px] bg-gray-50 rounded-[40px] border border-gray-100 overflow-hidden shadow-inner">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            {/* Content Switcher */}
            <div className="absolute inset-0 p-8 md:p-12 flex items-center justify-center">
              {activeId === "scheduling" && <SchedulingVisual />}
              {activeId === "frequency" && <FrequencyVisual />}
              {activeId === "tuning" && <TuningVisual />}
              {activeId === "budget" && <BudgetVisual />}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- Visual Components ---

const SchedulingVisual = () => {
  const hours = ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  
  return (
    <div className="w-full space-y-6 animate-in zoom-in-95 fade-in duration-700">
      <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-blue-50 rounded-lg">
              <Clock className="h-4 w-4 text-blue-600" />
            </div>
            <span className="font-bold text-gray-900">Ads Scheduling</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider">Live</span>
          </div>
        </div>

        {/* Hourly Grid */}
        <div className="space-y-4">
          <div className="grid grid-cols-6 gap-2">
            <div /> {/* Spacer for labels */}
            {days.map(day => (
              <div key={day} className="text-[10px] font-bold text-gray-400 text-center">{day}</div>
            ))}
          </div>
          
          {hours.map((hour, hIdx) => (
            <div key={hour} className="grid grid-cols-6 gap-2 items-center">
              <div className="text-[10px] font-medium text-gray-400 text-right pr-2">{hour}</div>
              {days.map((day, dIdx) => {
                // Logic to simulate "Working Hours" (9am to 6pm)
                const isActive = hIdx >= 1 && hIdx <= 5;
                return (
                  <div 
                    key={`${day}-${hour}`} 
                    className={cn(
                      "h-6 rounded-md transition-all duration-500",
                      isActive 
                        ? "bg-blue-600 shadow-[0_0_10px_rgba(56,117,246,0.2)] scale-100" 
                        : "bg-gray-100 scale-95 opacity-50"
                    )}
                    style={{ 
                      transitionDelay: `${(hIdx * 50) + (dIdx * 30)}ms`,
                      transform: isActive ? 'scale(1)' : 'scale(0.9)'
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Circle className="h-3 w-3 text-green-500 fill-green-500" />
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Current Status</div>
            <div className="text-sm font-bold text-gray-900">Campaigns Running (Peak Hours)</div>
          </div>
        </div>
        <div className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
          GMT -5:00
        </div>
      </div>
    </div>
  );
};

const FrequencyVisual = () => (
  <div className="w-full space-y-6 animate-in slide-in-from-right-8 fade-in duration-700">
    <div className="grid grid-cols-2 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <Users className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-orange-500 transition-all duration-[2000ms] ease-in-out" 
              style={{ width: `${25 * i}%` }} 
            />
          </div>
          <span className="text-[10px] font-bold text-gray-500 uppercase">Company {i}</span>
        </div>
      ))}
    </div>
    <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Zap className="h-5 w-5 text-orange-600" />
        <span className="text-sm font-bold text-orange-900">Frequency Cap: 3 per week</span>
      </div>
      <div className="h-2 w-2 rounded-full bg-orange-500 animate-ping" />
    </div>
  </div>
);

const TuningVisual = () => (
  <div className="w-full space-y-6 animate-in fade-in duration-700">
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
        <span className="text-xs font-bold text-gray-500 uppercase">Audience Refinement</span>
        <SlidersHorizontal className="h-4 w-4 text-gray-400" />
      </div>
      <div className="p-4 space-y-3">
        {[
          { label: "Competitors", status: "Excluded", color: "red" },
          { label: "Existing Customers", status: "Excluded", color: "red" },
          { label: "Non-ICP Industries", status: "Filtered", color: "orange" },
          { label: "Target Job Titles", status: "Verified", color: "green" }
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between p-2 rounded-lg border border-gray-50 hover:bg-gray-50 transition-colors">
            <span className="text-sm font-medium text-gray-700">{item.label}</span>
            <Badge className={cn(
              "text-[10px] border-0",
              item.color === 'red' ? "bg-red-100 text-red-700" : 
              item.color === 'orange' ? "bg-orange-100 text-orange-700" : 
              "bg-green-100 text-green-700"
            )}>
              {item.status}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const BudgetVisual = () => (
  <div className="w-full space-y-8 animate-in zoom-in-105 fade-in duration-700">
    <div className="relative h-48 flex items-end justify-center gap-4">
      {[40, 70, 55, 90, 65].map((h, i) => (
        <div key={i} className="relative w-12 group">
          <div 
            className="w-full bg-emerald-500/20 rounded-t-lg border-t-2 border-emerald-500 transition-all duration-1000"
            style={{ height: `${h}%` }}
          />
          {i === 3 && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <ShieldCheck className="h-5 w-5 text-emerald-600 animate-bounce" />
            </div>
          )}
        </div>
      ))}
      <div className="absolute top-1/4 left-0 w-full h-px border-t border-dashed border-red-400 opacity-50">
        <span className="absolute right-0 -top-5 text-[10px] font-bold text-red-500 uppercase">Budget Cap</span>
      </div>
    </div>
    <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <TrendingUp className="h-5 w-5 text-emerald-600" />
        <div>
          <div className="text-[10px] font-bold text-gray-400 uppercase">Spend Velocity</div>
          <div className="text-sm font-bold text-gray-900">Optimal (98% Efficiency)</div>
        </div>
      </div>
      <div className="text-emerald-600 font-bold">+$1,240 saved</div>
    </div>
  </div>
);

export default LinkedInAdsOptimization;