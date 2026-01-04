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
  AlertCircle
} from "lucide-react";
import SectionBadge from "./SectionBadge";
import ButtonGroup from "./ButtonGroup";

const TUNING_POOL = [
  { name: "Competitors", icon: Lock, color: "text-red-500", bg: "bg-red-500/10" },
  { name: "Existing Customers", icon: CheckCircle2, color: "text-green-500", bg: "bg-green-500/10" },
  { name: "Non-ICP Titles", icon: Activity, color: "text-orange-500", bg: "bg-orange-500/10" },
  { name: "Non-ICP Location", icon: MapPin, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "Non-ICP Headcount", icon: Users, color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "Personal Emails", icon: X, color: "text-slate-400", bg: "bg-slate-500/10" },
  { name: "Low-Fit Industries", icon: Building2, color: "text-amber-500", bg: "bg-amber-500/10" },
];

const LinkedInAdsOptimization = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      id="linkedin-ads"
      className="w-full bg-white px-5 sm:px-10 md:px-[112px] py-16 md:py-24 lg:py-32 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4 md:space-y-6">
          <div className={cn(
            "flex justify-center transition-all duration-700",
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
            "text-sm sm:text-base text-gray-600 leading-relaxed transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Take control of your LinkedIn spend with advanced automation tools that the native Campaign Manager doesn't provide.
          </p>
        </div>

        {/* Bento Grid - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[340px]">
          
          {/* 1. Ads Scheduling */}
          <div className={cn(
            "md:col-span-4 min-h-[400px] md:min-h-0 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="magic-border h-full w-full group" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
              <div className="h-full w-full bg-slate-900 rounded-[inherit] overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="flex-1 space-y-4 md:space-y-6 z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                        <Clock className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">Ads Scheduling</h3>
                    </div>
                    
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xs">
                      Set precise working hours for your campaigns. Our AI automatically pauses ads during low-intent periods to save up to 40% of your budget.
                    </p>
                    
                    <div className="flex flex-col gap-2 md:gap-3">
                      <div className="flex items-center gap-3 text-[10px] md:text-xs font-medium text-slate-300">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500" />
                        <span>Peak Performance Hours</span>
                      </div>
                      <div className="flex items-center gap-3 text-[10px] md:text-xs font-medium text-slate-500">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-700" />
                        <span>Automated Pause State</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-[1.5] relative min-h-[200px] md:min-h-0 bg-slate-950/50 rounded-xl md:rounded-2xl border border-slate-800 p-3 md:p-4 overflow-hidden">
                    <AdvancedSchedulingVisual active={inView} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Frequency Cap */}
          <div className={cn(
            "md:col-span-2 min-h-[300px] md:min-h-0 transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="magic-border h-full w-full group" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
              <div className="h-full w-full bg-slate-900 rounded-[inherit] overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                <div className="p-6 md:p-8 space-y-3 md:space-y-4 relative z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-900/20">
                      <Zap className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Frequency Cap</h3>
                  </div>
                  <p className="text-blue-200/70 text-[10px] md:text-xs leading-relaxed">
                    Prevent audience fatigue by capping impressions per campaign. Ensure even delivery across your entire account.
                  </p>
                </div>
                
                <div className="absolute inset-0 pt-36 md:pt-40 px-5 md:px-6 pb-5 md:pb-6">
                  <AdvancedFrequencyVisual active={inView} />
                </div>
              </div>
            </div>
          </div>

          {/* 3. Audience Tuning */}
          <div className={cn(
            "md:col-span-2 min-h-[300px] md:min-h-0 transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="magic-border h-full w-full group" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
              <div className="h-full w-full bg-slate-900 rounded-[inherit] overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                <div className="p-6 md:p-8 space-y-3 md:space-y-4 relative z-20 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                      <SlidersHorizontal className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Audience Tuning</h3>
                  </div>
                  <p className="text-slate-400 text-[10px] md:text-xs leading-relaxed">
                    Our AI automatically refines your targeting by excluding non-ICP criteria in real-time.
                  </p>
                </div>
                
                <div className="relative h-[180px] md:h-[200px] overflow-hidden px-5 md:px-6 pt-3 md:pt-4">
                  <AutomatedTuningQueue active={inView} />
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-900 to-transparent z-10 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* 4. Budget Control */}
          <div className={cn(
            "md:col-span-4 min-h-[400px] md:min-h-0 transition-all duration-700 delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="magic-border h-full w-full group" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
              <div className="h-full w-full bg-slate-900 rounded-[inherit] overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="flex-1 space-y-4 md:space-y-6 z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-900/20">
                        <ShieldCheck className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">Budget Control</h3>
                    </div>
                    
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xs">
                      Automate your spend velocity. Prevent overspending with intelligent account-level budget guards and real-time pacing.
                    </p>
                    
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                          <TrendingUp className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </div>
                        <div>
                          <div className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase">Avg. Savings</div>
                          <div className="text-xs md:text-sm font-bold text-white">18% Monthly</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                          <Activity className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </div>
                        <div>
                          <div className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase">Pacing Status</div>
                          <div className="text-xs md:text-sm font-bold text-emerald-400">Optimal Velocity</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-[1.5] relative bg-slate-950/50 rounded-xl md:rounded-2xl border border-slate-800 shadow-sm overflow-hidden flex flex-col min-h-[200px] md:min-h-0">
                    <AdvancedBudgetVisual active={inView} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA Buttons */}
        <div className={cn(
          "mt-12 md:mt-16 flex justify-center transition-all duration-700 delay-400",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <ButtonGroup 
            primaryLabel="Try It Now" 
            secondaryLabel="Read More"
            size="lg"
          />
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
      <div className="px-3 md:px-4 py-2 md:py-3 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider">Live Budget Pacing</span>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <div className="text-right">
            <div className="text-[7px] md:text-[8px] font-bold text-slate-500 uppercase">Saved Today</div>
            <div className="text-[10px] md:text-xs font-bold text-emerald-400 tabular-nums">${savings}</div>
          </div>
        </div>
      </div>
      <div className="flex-1 relative p-3 md:p-4 flex items-end gap-1">
        <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-full h-px bg-slate-800/50" />
          ))}
        </div>
        <div className="absolute left-0 right-0 top-[25%] h-px border-t border-dashed border-orange-400/30 z-10">
          <div className="absolute right-2 -top-2 px-1 md:px-1.5 py-0.5 bg-orange-500/10 rounded text-[7px] md:text-[8px] font-bold text-orange-400 uppercase">
            Guardrail
          </div>
        </div>
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
        <div className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-500 pointer-events-none",
          alert ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          <div className="bg-slate-900/90 backdrop-blur-sm border border-orange-500/30 rounded-lg md:rounded-xl p-2 md:p-3 shadow-xl flex items-center gap-2 md:gap-3">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
              <AlertCircle className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div>
              <div className="text-[8px] md:text-[10px] font-bold text-white">Velocity Alert</div>
              <div className="text-[7px] md:text-[9px] text-slate-400">Auto-throttling spend...</div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 md:px-4 py-2 md:py-3 border-t border-slate-800 grid grid-cols-3 gap-1 md:gap-2">
        <div className="text-center">
          <div className="text-[7px] md:text-[8px] font-bold text-slate-500 uppercase">Daily Limit</div>
          <div className="text-[9px] md:text-[10px] font-bold text-white">$2,500</div>
        </div>
        <div className="text-center border-x border-slate-800">
          <div className="text-[7px] md:text-[8px] font-bold text-slate-500 uppercase">Spent</div>
          <div className="text-[9px] md:text-[10px] font-bold text-white">$1,842</div>
        </div>
        <div className="text-center">
          <div className="text-[7px] md:text-[8px] font-bold text-slate-500 uppercase">Remaining</div>
          <div className="text-[9px] md:text-[10px] font-bold text-blue-400">$658</div>
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
            "flex items-center justify-between p-2.5 md:p-3 rounded-lg md:rounded-xl border border-slate-800 bg-slate-900/50 shadow-sm transition-all duration-700 ease-in-out",
            item.status === 'processing' ? "opacity-0 -translate-y-8 scale-90" : "opacity-100 translate-y-0 scale-100",
            !active && "opacity-0"
          )}
          style={{ 
            zIndex: 10 - i,
            transform: item.status === 'pending' ? `scale(${1 - (i * 0.015)})` : undefined,
            opacity: item.status === 'pending' ? 1 - (i * 0.12) : 0
          }}
        >
          <div className="flex items-center gap-2 md:gap-3">
            <div className={cn(
              "p-1.5 md:p-2 rounded-lg transition-all duration-500", 
              item.bg, 
              item.color,
              item.status === 'processing' && "animate-pulse"
            )}>
              <item.icon className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </div>
            <span className="text-[10px] md:text-xs font-bold text-slate-200">{item.name}</span>
          </div>
          <div className="flex items-center gap-2">
            {item.status === 'processing' ? (
              <div className="flex gap-0.5 md:gap-1">
                <span className="w-0.5 h-0.5 md:w-1 md:h-1 bg-blue-400 rounded-full animate-bounce" />
                <span className="w-0.5 h-0.5 md:w-1 md:h-1 bg-blue-400 rounded-full animate-bounce delay-100" />
                <span className="w-0.5 h-0.5 md:w-1 md:h-1 bg-blue-400 rounded-full animate-bounce delay-200" />
              </div>
            ) : (
              <div className="px-1.5 md:px-2 py-0.5 md:py-1 rounded-md bg-blue-500/10 text-blue-400 text-[8px] md:text-[10px] font-bold uppercase tracking-wider border border-blue-500/20">
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
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-400" />
          <span className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Weekly Schedule</span>
        </div>
        <div className={cn(
          "flex items-center gap-1.5 md:gap-2 px-1.5 md:px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 transition-all duration-500",
          active ? "opacity-100" : "opacity-0"
        )}>
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[7px] md:text-[9px] font-bold text-blue-400 uppercase">
            {scanPos >= 9 && scanPos <= 18 ? "Campaigns Active" : "Auto-Paused"}
          </span>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-[15px_1fr] md:grid-cols-[20px_1fr] gap-1.5 md:gap-2">
        <div className="flex flex-col justify-between text-[7px] md:text-[8px] font-bold text-slate-600 py-1">
          <span>00</span><span>06</span><span>12</span><span>18</span><span>23</span>
        </div>
        <div className="relative grid grid-cols-7 gap-0.5 md:gap-1 h-full">
          {days.map((day, dayIdx) => (
            <div key={dayIdx} className="flex flex-col gap-0.5 md:gap-1 h-full">
              <div className="text-[7px] md:text-[8px] font-bold text-slate-500 text-center mb-0.5 md:mb-1">{day}</div>
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
                      style={{ transitionDelay: active ? `${(dayIdx * 20) + (hourIdx * 5)}ms` : '0ms' }}
                    />
                  );
                })}
              </div>
            </div>
          ))}
          <div 
            className="absolute left-0 right-0 h-px bg-blue-400/50 shadow-[0_0_15px_rgba(56,117,246,0.8)] z-20 pointer-events-none transition-all duration-400 ease-linear"
            style={{ top: `${(scanPos / 24) * 100}%`, opacity: active ? 1 : 0 }}
          />
        </div>
      </div>
      <div className="mt-3 md:mt-4 pt-2 md:pt-3 border-t border-slate-800 flex justify-between items-center">
        <div className="flex gap-3 md:gap-4">
          <div className="flex flex-col">
            <span className="text-[7px] md:text-[8px] font-bold text-slate-500 uppercase">Efficiency</span>
            <span className="text-[10px] md:text-xs font-bold text-white">+38%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[7px] md:text-[8px] font-bold text-slate-500 uppercase">Waste Reduced</span>
            <span className="text-[10px] md:text-xs font-bold text-emerald-400">-$2.4k</span>
          </div>
        </div>
        <div className="text-[7px] md:text-[8px] font-mono text-slate-600">UTC-05:00 EST</div>
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
    <div className="w-full h-full flex flex-col gap-3 md:gap-4">
      <div className="space-y-3 md:space-y-4">
        {campaigns.map((camp, i) => (
          <div key={i} className="space-y-1 md:space-y-1.5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className={cn("w-1 h-1 md:w-1.5 md:h-1.5 rounded-full", camp.color)} />
                <span className="text-[8px] md:text-[10px] font-bold text-blue-100/80 uppercase tracking-tight">{camp.name}</span>
              </div>
              <div className="flex items-center gap-1 md:gap-1.5">
                <span className="text-[8px] md:text-[9px] font-mono text-blue-300/50">CAP: 3/wk</span>
                {active && (
                  <div className="flex items-center gap-1 px-1 md:px-1.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
                    <Lock className="w-1.5 h-1.5 md:w-2 md:h-2 text-orange-400" />
                    <span className="text-[7px] md:text-[8px] font-bold text-orange-400 uppercase">Capped</span>
                  </div>
                )}
              </div>
            </div>
            <div className="relative h-1.5 md:h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
              <div 
                className={cn("h-full transition-all duration-[2500ms] ease-out relative", camp.color)}
                style={{ width: active ? `${camp.limit}%` : '0%', transitionDelay: `${i * 300}ms` }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/20 animate-pulse" />
              </div>
              <div className="absolute left-[70%] top-0 bottom-0 w-px bg-orange-500/40 border-r border-orange-500/20 border-dashed" />
            </div>
          </div>
        ))}
      </div>
      <div className={cn(
        "mt-auto bg-white/5 rounded-lg md:rounded-xl p-2.5 md:p-3 border border-white/10 flex items-center justify-between transition-all duration-1000",
        active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}>
        <div className="flex items-center gap-2 md:gap-3">
          <div className="relative">
            <Activity className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-400" /><div className="absolute inset-0 bg-orange-400/20 rounded-full animate-ping" />
          </div>
          <div>
            <div className="text-[7px] md:text-[8px] font-bold text-blue-300/50 uppercase">Capping Engine</div>
            <div className="text-[9px] md:text-[10px] font-bold text-white">Monitoring 12 Campaigns</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[7px] md:text-[8px] font-bold text-blue-300/50 uppercase">Saved Impressions</div>
          <div className="text-[9px] md:text-[10px] font-bold text-emerald-400">14.2k</div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInAdsOptimization;