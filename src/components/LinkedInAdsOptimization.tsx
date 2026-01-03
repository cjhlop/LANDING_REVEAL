"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  Zap, 
  SlidersHorizontal, 
  ShieldCheck,
  ArrowRight,
  Clock,
  Target,
  Circle,
  MousePointerClick,
  Eye,
  UserCheck,
  Settings2,
  CheckCircle2,
  AlertCircle,
  Activity,
  TrendingUp,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionBadge from "./SectionBadge";
import ButtonGroup from "./ButtonGroup";

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
    color: "blue"
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

  const activeFeature = FEATURES.find(f => f.id === activeId)!;

  return (
    <section 
      ref={ref}
      id="linkedin-ads"
      className="w-full bg-white px-6 sm:px-12 md:px-[112px] py-16 md:py-24 lg:py-40 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left: Header & 2x2 Grid */}
        <div className="lg:col-span-5 space-y-8 md:space-y-10 text-center lg:text-left">
          <div className="space-y-6">
            <div className={cn(
              "flex justify-center lg:justify-start transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <SectionBadge icon={Target} text="Campaign Intelligence" />
            </div>

            <h2 className={cn(
              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              LinkedIn Ads <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Optimization</span>
            </h2>

            <p className={cn(
              "text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-200 max-w-2xl mx-auto lg:mx-0",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              Take control of your LinkedIn spend with advanced automation tools that the native Campaign Manager doesn't provide.
            </p>
          </div>

          {/* 2x2 Grid of Selectors */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
            {FEATURES.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveId(feature.id)}
                className={cn(
                  "flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-2xl border transition-all duration-300 text-center group",
                  activeId === feature.id 
                    ? "bg-blue-50/50 border-blue-100 shadow-sm" 
                    : "bg-transparent border-transparent hover:bg-gray-50"
                )}
              >
                <div className={cn(
                  "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                  activeId === feature.id 
                    ? "bg-blue-600 text-white scale-110 shadow-lg shadow-blue-200" 
                    : "bg-gray-100 text-gray-400 group-hover:text-gray-600"
                )}>
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <span className={cn(
                  "text-xs sm:text-sm font-bold transition-colors",
                  activeId === feature.id ? "text-gray-900" : "text-gray-500"
                )}>
                  {feature.title}
                </span>
              </button>
            ))}
          </div>

          <div className={cn(
            "pt-4 transition-all duration-700 delay-400 flex justify-center lg:justify-start",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <ButtonGroup 
              primaryLabel="Try It Now" 
              secondaryLabel="Read More"
              size="lg"
            />
          </div>
        </div>

        {/* Right: Visualization & Description */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 w-full">
          {/* Visualization Stage */}
          <div className="relative w-full aspect-square max-w-[320px] sm:max-w-[450px] lg:max-w-[550px] mx-auto bg-gray-50 rounded-[32px] sm:rounded-[40px] border border-gray-100 overflow-hidden shadow-inner">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            <div className="absolute inset-0 p-4 sm:p-8 md:p-12 flex items-center justify-center">
              {activeId === "scheduling" && <SchedulingVisual />}
              {activeId === "frequency" && <FrequencyVisual />}
              {activeId === "tuning" && <TuningVisual />}
              {activeId === "budget" && <BudgetVisual />}
            </div>
          </div>

          {/* Description Block (Under Visualization) */}
          <div 
            key={activeId}
            className="max-w-[320px] sm:max-w-[450px] lg:max-w-[550px] mx-auto bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500"
          >
            <div className="flex items-center gap-3 mb-2 sm:mb-3">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <activeFeature.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">{activeFeature.title}</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {activeFeature.description}
            </p>
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
    <div className="w-full space-y-4 sm:space-y-6 animate-in zoom-in-95 fade-in duration-700">
      <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100">
        <div className="flex items-center justify-between mb-4 sm:mb-8">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-blue-50 rounded-lg">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-gray-900">Ads Scheduling</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1 bg-green-50 rounded-full">
            <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[8px] sm:text-[10px] font-bold text-green-700 uppercase tracking-wider">Live</span>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-4">
          <div className="grid grid-cols-6 gap-1 sm:gap-2">
            <div />
            {days.map(day => (
              <div key={day} className="text-[8px] sm:text-[10px] font-bold text-gray-400 text-center">{day}</div>
            ))}
          </div>
          
          {hours.map((hour, hIdx) => (
            <div key={hour} className="grid grid-cols-6 gap-1 sm:gap-2 items-center">
              <div className="text-[8px] sm:text-[10px] font-medium text-gray-400 text-right pr-1 sm:pr-2">{hour}</div>
              {days.map((day, dIdx) => {
                const isActive = hIdx >= 1 && hIdx <= 5;
                return (
                  <div 
                    key={`${day}-${hour}`} 
                    className={cn(
                      "h-4 sm:h-6 rounded-sm sm:rounded-md transition-all duration-500",
                      isActive 
                        ? "bg-blue-600 shadow-[0_0_10px_rgba(56,117,246,0.2)] scale-100" 
                        : "bg-gray-100 scale-95 opacity-50"
                    )}
                    style={{ 
                      transitionDelay: `${(hIdx * 50) + (dIdx * 30)}ms`,
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <Circle className="h-2 w-2 sm:h-3 sm:w-3 text-green-500 fill-green-500" />
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40" />
          </div>
          <div>
            <div className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-400">Current Status</div>
            <div className="text-xs sm:text-sm font-bold text-gray-900">Campaigns Running</div>
          </div>
        </div>
        <div className="text-[10px] sm:text-xs font-medium text-blue-600 bg-blue-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
          GMT -5:00
        </div>
      </div>
    </div>
  );
};

const FrequencyVisual = () => {
  const campaigns = [
    { name: "Enterprise ABM", imp: "3/mo", click: "1/mo", pen: 85 },
    { name: "SaaS Retargeting", imp: "5/mo", click: "2/mo", pen: 92 },
    { name: "Brand Awareness", imp: "2/mo", click: "1/mo", pen: 64 }
  ];

  return (
    <div className="w-full space-y-4 sm:space-y-6 animate-in slide-in-from-right-8 fade-in duration-700">
      <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100">
        <div className="flex items-center justify-between mb-4 sm:mb-8">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-orange-50 rounded-lg">
              <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-orange-600" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-gray-900">Frequency Management</span>
          </div>
          <div className="text-[8px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Caps</div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {campaigns.map((camp, i) => (
            <div 
              key={camp.name} 
              className="p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-50 bg-gray-50/30 space-y-2 sm:space-y-3 transition-all duration-500"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-bold text-gray-900">{camp.name}</span>
                <div className="flex gap-1 sm:gap-2">
                  <div className="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 bg-white rounded border border-gray-100 text-[8px] sm:text-[9px] font-bold text-gray-500">
                    <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> {camp.imp}
                  </div>
                  <div className="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 bg-white rounded border border-gray-100 text-[8px] sm:text-[9px] font-bold text-gray-500">
                    <MousePointerClick className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> {camp.click}
                  </div>
                </div>
              </div>
              
              <div className="space-y-1 sm:space-y-1.5">
                <div className="flex justify-between text-[8px] sm:text-[10px] font-bold text-gray-400 uppercase">
                  <span>Audience Penetration</span>
                  <span className="text-orange-600">{camp.pen}%</span>
                </div>
                <div className="h-1 sm:h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-[1500ms] ease-out" 
                    style={{ width: `${camp.pen}%`, transitionDelay: `${(i * 150) + 300}ms` }} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <Circle className="h-2 w-2 sm:h-3 sm:w-3 text-orange-500 fill-orange-500" />
            <div className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-40" />
          </div>
          <div>
            <div className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-400">Frequency Guard</div>
            <div className="text-xs sm:text-sm font-bold text-gray-900">Optimal Distribution</div>
          </div>
        </div>
        <div className="text-[10px] sm:text-xs font-bold text-orange-600 bg-orange-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
          3 per week
        </div>
      </div>
    </div>
  );
};

const TuningVisual = () => {
  const icpCards = [
    { name: "Tier 1 Enterprise", campaigns: 12, exclusions: 450, mode: "Auto" },
    { name: "Mid-Market SaaS", campaigns: 8, exclusions: 120, mode: "Review" },
    { name: "Fintech Founders", campaigns: 5, exclusions: 85, mode: "Auto" },
    { name: "Marketing Ops", campaigns: 14, exclusions: 310, mode: "Review" }
  ];

  return (
    <div className="w-full space-y-4 sm:space-y-6 animate-in zoom-in-95 fade-in duration-700">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {icpCards.map((card, i) => (
          <div 
            key={card.name} 
            className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group transition-all duration-500 hover:border-blue-200"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <div className="p-1 sm:p-1.5 bg-blue-50 rounded-lg">
                  <UserCheck className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                </div>
                <Badge className={cn(
                  "text-[7px] sm:text-[9px] font-bold uppercase tracking-wider border-0 px-1.5 py-0",
                  card.mode === "Auto" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                )}>
                  {card.mode}
                </Badge>
              </div>
              
              <h4 className="text-[10px] sm:text-sm font-bold text-gray-900 mb-0.5 sm:mb-1 truncate">{card.name}</h4>
              <div className="flex items-center gap-1 sm:gap-2 text-[8px] sm:text-[10px] text-gray-500 font-medium">
                <span className="flex items-center gap-1"><Target className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> {card.campaigns}</span>
              </div>

              <div className="mt-2 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-50 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[7px] sm:text-[9px] font-bold text-gray-400 uppercase">Exclusions</span>
                  <span className="text-[10px] sm:text-sm font-bold text-blue-600">-{card.exclusions}</span>
                </div>
                {card.mode === "Review" ? (
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-50 flex items-center justify-center animate-pulse">
                    <AlertCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-600" />
                  </div>
                ) : (
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-600" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <Circle className="h-2 w-2 sm:h-3 sm:w-3 text-blue-500 fill-blue-500" />
            <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-40" />
          </div>
          <div>
            <div className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-400">Audience Tuning</div>
            <div className="text-xs sm:text-sm font-bold text-gray-900">965 Total Exclusions</div>
          </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <Settings2 className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
          <span className="text-[10px] sm:text-xs font-bold text-blue-600 bg-blue-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
            Smart Filter
          </span>
        </div>
      </div>
    </div>
  );
};

const BudgetVisual = () => {
  return (
    <div className="w-full space-y-4 sm:space-y-6 animate-in zoom-in-95 fade-in duration-700">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-emerald-500/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative w-32 h-32 sm:w-48 sm:h-48 flex items-center justify-center mb-4 sm:mb-8">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="50%" cy="50%" r="45%" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-gray-100" />
              <circle 
                cx="50%" cy="50%" r="45%" 
                stroke="currentColor" strokeWidth="10" 
                fill="transparent" 
                strokeDasharray="283%"
                strokeDashoffset="22%"
                className="text-emerald-500 transition-all duration-[2000ms] ease-out"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="flex items-center gap-1 text-emerald-600">
                <ShieldCheck className="w-3 h-3 sm:w-5 sm:h-5" />
                <span className="text-[8px] sm:text-xs font-bold uppercase tracking-widest">Protected</span>
              </div>
              <div className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tighter">92%</div>
              <div className="text-[7px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider">Daily Cap</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-100">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                <Activity className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600" />
                <span className="text-[8px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-wider">Velocity</span>
              </div>
              <div className="text-sm sm:text-lg font-bold text-gray-900">Optimal</div>
              <div className="text-[8px] sm:text-[10px] text-green-600 font-medium flex items-center gap-1">
                <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> +4%
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-100">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-500" />
                <span className="text-[8px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-wider">Guard</span>
              </div>
              <div className="text-sm sm:text-lg font-bold text-gray-900">Active</div>
              <div className="text-[8px] sm:text-[10px] text-gray-400 font-medium">No Overspend</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <Circle className="h-2 w-2 sm:h-3 sm:w-3 text-emerald-500 fill-emerald-500" />
            <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-40" />
          </div>
          <div>
            <div className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-400">Budget Control</div>
            <div className="text-xs sm:text-sm font-bold text-gray-900">Guard Active</div>
          </div>
        </div>
        <div className="text-[10px] sm:text-xs font-bold text-emerald-600 bg-emerald-50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-emerald-100">
          +$1,240 saved
        </div>
      </div>
    </div>
  );
};

export default LinkedInAdsOptimization;