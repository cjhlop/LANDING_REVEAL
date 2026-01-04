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
  CheckCircle2,
  Lock,
  Activity,
  Calendar,
  MapPin,
  Users,
  Building2,
  X,
  DollarSign,
  AlertCircle
} from "lucide-react";
import SectionBadge from "./SectionBadge";

const TUNING_POOL = [
  { name: "Competitors", icon: Lock, color: "text-red-500", bg: "bg-red-50" },
  { name: "Existing Customers", icon: CheckCircle2, color: "text-green-500", bg: "bg-green-50" },
  { name: "Non-ICP Titles", icon: Activity, color: "text-orange-500", bg: "bg-orange-50" },
  { name: "Non-ICP Location", icon: MapPin, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "Non-ICP Headcount", icon: Users, color: "text-purple-500", bg: "bg-purple-50" },
  { name: "Personal Emails", icon: X, color: "text-slate-500", bg: "bg-slate-50" },
  { name: "Low-Fit Industries", icon: Building2, color: "text-amber-500", bg: "bg-amber-50" },
];

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
          
          {/* 1. Ads Scheduling */}
          <div className={cn(
            "md:col-span-4 bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden group relative transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
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

          {/* 2. Frequency Cap */}
          <div className={cn(
            "md:col-span-2 bg-[#0F2043] rounded-3xl border border-gray-800 overflow-hidden group relative transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="p-8 space-y-4 relative z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-900/20">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Frequency Cap</h3>
              </div>
              <p className="text-blue-200/70 text-xs leading-relaxed">
                Prevent audience fatigue by capping impressions per campaign. Ensure even delivery across your entire account.
              </p>
            </div>
            
            <div className="absolute inset-0 pt-40 px-6 pb-6">
              <AdvancedFrequencyVisual active={inView} />
            </div>
          </div>

          {/* 3. Audience Tuning - Automated Infinite Queue */}
          <div className={cn(
            "md:col-span-2 bg-white rounded-3xl border border-gray-200 overflow-hidden group relative transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="p-8 space-y-4 relative z-20 bg-white/80 backdrop-blur-sm border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <SlidersHorizontal className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Audience Tuning</h3>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Our AI automatically refines your targeting by excluding non-ICP criteria in real-time.
              </p>
            </div>
            
            <div className="relative h-[200px] overflow-hidden px-6 pt-4">
              <AutomatedTuningQueue active={inView} />
              {/* Fade effect at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
            </div>
          </div>

          {/* 4. Budget Control - Advanced Dynamic Card */}
          <div className={cn(
            "md:col-span-4 bg-slate-50 rounded-3xl border border-gray-200 overflow-hidden group relative transition-all duration-700 delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="absolute inset-0 p-8 flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-6 z-10">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Budget Control</h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                    Automate your spend velocity. Prevent overspending with intelligent account-level budget guards and real-time pacing.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase">Avg. Savings</div>
                      <div className="text-sm font-bold text-gray-900">18% Monthly</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase">Pacing Status</div>
                      <div className="text-sm font-bold text-emerald-600">Optimal Velocity</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-[1.5] relative bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                <AdvancedBudgetVisual active={inView} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Sub-Animations ---

const AdvancedBudgetVisual = ({ active }: { active: boolean }) => {
  const [points, setPoints] = React.useState<number[]>([]);
  const [savings, setSavings] = React.useState(1240);
  const [alert, setAlert] = React.useState(false);

  React.useEffect(() => {
    if (!active) return;
    
    // Initial points
    setPoints([30, 45, 35, 60, 55, 70, 65, 85]);

    const interval = setInterval(() => {
      setPoints(prev => {
        const next = Math.max(20, Math.min(95, prev[prev.length - 1] + (Math.random() * 20 - 10)));
        if (next > 85) setAlert(true);
        else if (next < 75) setAlert(false);
        return [...prev.slice(1), next];
      });
      setSavings(s => s + Math.floor(Math.random() * 5));
    }, 2000);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Live Budget Pacing</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-[8px] font-bold text-gray-400 uppercase">Saved Today</div>
            <div className="text-xs font-bold text-emerald-600 tabular-nums">${savings}</div>
          </div>
        </div>
      </div>

      {/* Graph Area */}
      <div className="flex-1 relative p-4 flex items-end gap-1">
        {/* Grid Lines */}
        <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-full h-px bg-gray-100" />
          ))}
        </div>

        {/* Guardrail Line */}
        <div className="absolute left-0 right-0 top-[25%] h-px border-t border-dashed border-orange-400/50 z-10">
          <div className="absolute right-2 -top-2 px-1.5 py-0.5 bg-orange-50 rounded text-[8px] font-bold text-orange-500 uppercase">
            Guardrail
          </div>
        </div>

        {/* Bars */}
        {points.map((p, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end items-center gap-1 h-full relative z-10">
            <div 
              className={cn(
                "w-full rounded-t-sm transition-all duration-1000 ease-out",
                p > 75 ? "bg-orange-400" : "bg-blue-500"
              )}
              style={{ height: `${p}%` }}
            />
          </div>
        ))}

        {/* Alert Overlay */}
        <div className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-500 pointer-events-none",
          alert ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          <div className="bg-white/90 backdrop-blur-sm border border-orange-200 rounded-xl p-3 shadow-xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-gray-900">Velocity Alert</div>
              <div className="text-[9px] text-gray-500">Auto-throttling spend...</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-100 grid grid-cols-3 gap-2">
        <div className="text-center">
          <div className="text-[8px] font-bold text-gray-400 uppercase">Daily Limit</div>
          <div className="text-[10px] font-bold text-gray-900">$2,500</div>
        </div>
        <div className="text-center border-x border-gray-100">
          <div className="text-[8px] font-bold text-gray-400 uppercase">Spent</div>
          <div className="text-[10px] font-bold text-gray-900">$1,842</div>
        </div>
        <div className="text-center">
          <div className="text-[8px] font-bold text-gray-400 uppercase">Remaining</div>
          <div className="text-[10px] font-bold text-blue-600">$658</div>
        </div>
      </div>
    </div>
  );
};

const AutomatedTuningQueue = ({ active }: { active: boolean }) => {
  const [items, setItems] = React.useState(() => 
    TUNING_POOL.slice(0, 5).map((item, i) => ({ ...item, id: i, status: 'pending' as 'pending' | 'processing' }))
  );
  const [counter, setCounter] = React.useState(5);

  React.useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      setItems(prev => prev.map((item, i) => i === 0 ? { ...item, status: 'processing' } : item));

      setTimeout(() => {
        setItems(prev => {
          const remaining = prev.slice(1);
          const nextItem = TUNING_POOL[counter % TUNING_POOL.length];
          setCounter(c => c + 1);
          return [...remaining, { ...nextItem, id: counter, status: 'pending' }];
        });
      }, 600);

    }, 3500);

    return () => clearInterval(interval);
  }, [active, counter]);

  return (
    <div className="flex flex-col gap-2 relative">
      {items.map((item, i) => (
        <div 
          key={item.id}
          className={cn(
            "flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-700 ease-in-out",
            item.status === 'processing' ? "opacity-0 -translate-y-8 scale-90" : "opacity-100 translate-y-0 scale-100",
            !active && "opacity-0"
          )}
          style={{ 
            zIndex: 10 - i,
            transform: item.status === 'pending' ? `scale(${1 - (i * 0.015)})` : undefined,
            opacity: item.status === 'pending' ? 1 - (i * 0.12) : 0
          }}
        >
          <div className="flex items-center gap-3">
            <div className={cn(
              "p-2 rounded-lg transition-all duration-500", 
              item.bg, 
              item.color,
              item.status === 'processing' && "animate-pulse"
            )}>
              <item.icon className="h-4 w-4" />
            </div>
            <span className="text-xs font-bold text-gray-700">{item.name}</span>
          </div>
          
          <div className="flex items-center gap-2">
            {item.status === 'processing' ? (
              <div className="flex gap-1">
                <span className="w-1 h-1 bg-blue-600 rounded-full animate-bounce" />
                <span className="w-1 h-1 bg-blue-600 rounded-full animate-bounce delay-100" />
                <span className="w-1 h-1 bg-blue-600 rounded-full animate-bounce delay-200" />
              </div>
            ) : (
              <div className="px-2 py-1 rounded-md bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider">
                Auto-Excluding
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

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

      <div className="flex-1 grid grid-cols-[20px_1fr] gap-2">
        <div className="flex flex-col justify-between text-[8px] font-bold text-slate-600 py-1">
          <span>00</span>
          <span>06</span>
          <span>12</span>
          <span>18</span>
          <span>23</span>
        </div>

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

          <div 
            className="absolute left-0 right-0 h-px bg-blue-400/50 shadow-[0_0_15px_rgba(56,117,246,0.8)] z-20 pointer-events-none transition-all duration-400 ease-linear"
            style={{ 
              top: `${(scanPos / 24) * 100}%`,
              opacity: active ? 1 : 0
            }}
          />
        </div>
      </div>

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
  ];

  return (
    <div className="w-full h-full flex flex-col gap-4">
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
                <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/20 animate-pulse" />
              </div>
              
              <div className="absolute left-[70%] top-0 bottom-0 w-px bg-orange-500/40 border-r border-orange-500/20 border-dashed" />
            </div>
          </div>
        ))}
      </div>

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

export default LinkedInAdsOptimization;