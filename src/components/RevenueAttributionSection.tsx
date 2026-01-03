"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  BarChart3, 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  CheckCircle2,
  FileText,
  Users,
  MousePointer2,
  Eye,
  Layers,
  Zap,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBadge from "./SectionBadge";

const STAGES_CONFIG = [
  { name: "Exposed", base: 1250, icon: Users, color: "bg-blue-100 text-blue-600", borderColor: "border-blue-200" },
  { name: "Impressed", base: 840, icon: Eye, color: "bg-cyan-100 text-cyan-600", borderColor: "border-cyan-200" },
  { name: "Engaged", base: 456, icon: MousePointer2, color: "bg-indigo-100 text-indigo-600", borderColor: "border-indigo-200" },
  { name: "Deal Created", base: 89, icon: FileText, color: "bg-purple-100 text-purple-600", borderColor: "border-purple-200" },
  { name: "Closed Won", base: 34, icon: CheckCircle2, color: "bg-orange-100 text-orange-600", borderColor: "border-orange-200" },
];

const useAnimatedNumber = (targetValue: number, duration: number = 1000) => {
  const [displayValue, setDisplayValue] = React.useState(targetValue);
  const startTimeRef = React.useRef<number | null>(null);
  const startValueRef = React.useRef(targetValue);

  React.useEffect(() => {
    startValueRef.current = displayValue;
    startTimeRef.current = null;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValueRef.current + (targetValue - startValueRef.current) * easeProgress);
      setDisplayValue(current);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [targetValue, duration]);

  return displayValue;
};

const AnimatedCounter = ({ value, prefix = "" }: { value: number; prefix?: string }) => {
  const animatedValue = useAnimatedNumber(value, 1500);
  return <span className="tabular-nums">{prefix}{animatedValue.toLocaleString()}</span>;
};

const RevenueAttributionSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const [targetCounts, setTargetCounts] = React.useState(STAGES_CONFIG.map(s => s.base));
  const [targetRevenue, setTargetRevenue] = React.useState(1245000);

  React.useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setTargetCounts(prev => prev.map((count, i) => {
        const variance = Math.floor(count * 0.03);
        const change = Math.floor(Math.random() * (variance * 2 + 1)) - variance;
        const newVal = count + change;
        if (i > 0 && newVal >= prev[i-1]) return prev[i-1] - 2;
        return Math.max(newVal, 1);
      }));
      setTargetRevenue(prev => prev + (Math.floor(Math.random() * 16000) - 8000));
    }, 4000);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section 
      ref={ref}
      id="revenue-attribution"
      className="w-full bg-white px-6 sm:px-12 md:px-[112px] py-16 md:py-24 lg:py-40 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Abstract Funnel Visual */}
        <div className="lg:col-span-7 relative order-2 lg:order-1">
          <div className={cn(
            "relative w-full aspect-square max-w-[320px] sm:max-w-[450px] lg:max-w-[550px] mx-auto transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 rounded-full blur-3xl opacity-60" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 sm:p-8">
              {STAGES_CONFIG.map((stage, i) => (
                <div 
                  key={stage.name}
                  className={cn(
                    "relative flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl border bg-white/90 backdrop-blur-sm transition-all duration-700 shadow-sm group hover:shadow-md",
                    stage.borderColor,
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ 
                    width: `${100 - (i * 10)}%`,
                    transitionDelay: `${i * 120}ms`
                  }}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={cn("p-2 sm:p-2.5 rounded-lg sm:rounded-xl shadow-sm transition-transform group-hover:scale-110", stage.color)}>
                      <stage.icon className="size-4 sm:size-5" />
                    </div>
                    <div>
                      <div className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">{stage.name}</div>
                      <div className="text-base sm:text-xl font-bold text-gray-900">
                        <AnimatedCounter value={targetCounts[i]} />
                      </div>
                    </div>
                  </div>
                  
                  {i < STAGES_CONFIG.length - 1 && (
                    <div className="absolute -bottom-3 sm:-bottom-3.5 left-1/2 -translate-x-1/2 z-10">
                      <div className="bg-white border border-gray-100 rounded-full p-0.5 sm:p-1 shadow-sm">
                        <TrendingUp className="size-2.5 sm:size-3 text-gray-300" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className={cn(
              "absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-slate-900 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl border border-slate-800 transition-all duration-1000 delay-1000",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}>
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="p-1.5 sm:p-2 bg-blue-500/20 rounded-lg text-blue-400">
                  <DollarSign className="size-4 sm:size-5" />
                </div>
                <div className="text-[8px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Influenced Revenue</div>
              </div>
              <div className="text-xl sm:text-3xl font-bold tracking-tight">
                <AnimatedCounter value={targetRevenue} prefix="$" />
              </div>
              <div className="mt-2 sm:mt-3 flex items-center gap-1 sm:gap-1.5 text-[8px] sm:text-xs text-emerald-400 font-semibold bg-emerald-400/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full w-fit">
                <TrendingUp className="size-2.5 sm:size-3" />
                <span>+12.4% vs last month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-5 space-y-8 md:space-y-10 order-1 lg:order-2 text-center lg:text-left">
          <div className="space-y-6">
            <div className={cn(
              "flex justify-center lg:justify-start transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <SectionBadge icon={BarChart3} text="Revenue Intelligence" />
            </div>

            <h2 className={cn(
              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              Finally Prove <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">LinkedIn ROI</span>
            </h2>

            <p className={cn(
              "text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-200 max-w-2xl mx-auto lg:mx-0",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              Stop guessing which campaigns drive growth. Connect your LinkedIn activity directly to CRM deals to see the full journey from first impression to closed-won revenue.
            </p>
          </div>

          {/* Intelligence Cards List */}
          <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
            {[
              {
                title: "Multi-touch attribution for B2B cycles",
                desc: "Track every touchpoint across long sales cycles.",
                icon: Layers,
                color: "blue"
              },
              {
                title: "Track influenced pipeline in real-time",
                desc: "See how LinkedIn warms up your target accounts.",
                icon: Zap,
                color: "orange"
              },
              {
                title: "Identify top-performing ad creatives",
                desc: "Double down on the ads that actually drive revenue.",
                icon: Target,
                color: "emerald"
              }
            ].map((item, i) => (
              <div 
                key={i}
                className={cn(
                  "group relative flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-white transition-all duration-500 hover:border-blue-200 hover:shadow-md",
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                )}
                style={{ transitionDelay: `${(i * 150) + 400}ms` }}
              >
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110",
                  item.color === 'blue' ? "bg-blue-50 text-blue-600" :
                  item.color === 'orange' ? "bg-orange-50 text-orange-600" :
                  "bg-emerald-50 text-emerald-600"
                )}>
                  <item.icon className="size-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-0.5">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="size-4 text-blue-600" />
                </div>
              </div>
            ))}
          </div>

          <div className={cn(
            "pt-2 transition-all duration-700 delay-800",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Button size="lg" variant="hero" className="group w-full sm:w-auto bg-blue-600 hover:bg-blue-700 shadow-blue-500/20">
              View Revenue Report
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RevenueAttributionSection;