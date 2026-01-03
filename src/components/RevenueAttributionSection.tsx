"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  CheckCircle2,
  FileText,
  Users,
  MousePointer2,
  Eye,
  Layers,
  Zap,
  Target,
  MousePointerClick,
  Globe,
  ArrowRight
} from "lucide-react";
import SectionBadge from "./SectionBadge";
import ButtonGroup from "./ButtonGroup";

const STAGES_CONFIG = [
  { 
    name: "Exposed", 
    base: 12500, 
    icon: Users, 
    gradient: "from-blue-500 to-blue-600", 
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100"
  },
  { 
    name: "Impressed", 
    base: 8400, 
    icon: Eye, 
    gradient: "from-cyan-500 to-cyan-600", 
    bg: "bg-cyan-50",
    text: "text-cyan-600",
    border: "border-cyan-100"
  },
  { 
    name: "Engaged", 
    base: 4560, 
    icon: MousePointer2, 
    gradient: "from-indigo-500 to-indigo-600", 
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-100"
  },
  { 
    name: "Clicks", 
    base: 2120, 
    icon: MousePointerClick, 
    gradient: "from-violet-500 to-violet-600", 
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-100"
  },
  { 
    name: "Visits", 
    base: 1450, 
    icon: Globe, 
    gradient: "from-emerald-500 to-emerald-600", 
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100"
  },
  { 
    name: "Deals", 
    base: 890, 
    icon: FileText, 
    gradient: "from-purple-500 to-purple-600", 
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "border-purple-100"
  },
  { 
    name: "Won", 
    base: 340, 
    icon: CheckCircle2, 
    gradient: "from-orange-500 to-orange-600", 
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-100"
  },
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
  return <span className="tabular-nums tracking-tight">{prefix}{animatedValue.toLocaleString()}</span>;
};

const RevenueAttributionSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const [targetCounts, setTargetCounts] = React.useState(() => STAGES_CONFIG.map(s => s.base));
  const [targetRevenue, setTargetRevenue] = React.useState(1245000);
  const [hoveredStage, setHoveredStage] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setTargetCounts(prev => prev.map((count, i) => {
        const variance = Math.floor(count * 0.02);
        const change = Math.floor(Math.random() * (variance * 2 + 1)) - variance;
        const newVal = count + change;
        if (i > 0 && newVal >= prev[i-1]) return prev[i-1] - 10;
        return Math.max(newVal, 1);
      }));
      setTargetRevenue(prev => prev + (Math.floor(Math.random() * 5000) - 2000));
    }, 3000);
    return () => clearInterval(interval);
  }, [inView]);

  const maxValue = Math.max(...targetCounts);

  return (
    <section 
      ref={ref}
      id="revenue-attribution"
      className="w-full bg-white px-6 sm:px-12 md:px-[112px] py-16 md:py-24 lg:py-32 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto">
        
        {/* Header - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className={cn(
            "flex justify-center transition-all duration-700",
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
            "text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Stop guessing which campaigns drive growth. Connect your LinkedIn activity directly to CRM deals to see the full journey from first impression to closed-won revenue.
          </p>
        </div>

        {/* Horizontal Funnel Visualization */}
        <div className={cn(
          "relative w-full bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden mb-16 transition-all duration-1000 delay-300",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-end justify-between gap-4 h-[400px] lg:h-[320px]">
              
              {STAGES_CONFIG.map((stage, i) => {
                const heightPercent = (targetCounts[i] / maxValue) * 100;
                const prevHeightPercent = i > 0 ? (targetCounts[i-1] / maxValue) * 100 : 0;
                const isHovered = hoveredStage === i;
                
                return (
                  <div 
                    key={stage.name} 
                    className="flex-1 flex flex-col items-center justify-end h-full relative group"
                    onMouseEnter={() => setHoveredStage(i)}
                    onMouseLeave={() => setHoveredStage(null)}
                  >
                    {/* Connector Shape (SVG) */}
                    {i > 0 && (
                      <div className="absolute right-[50%] top-0 bottom-0 w-full pointer-events-none hidden lg:block" style={{ left: '-50%' }}>
                        <svg className="w-full h-full" preserveAspectRatio="none">
                          <path 
                            d={`M 0 ${100 - prevHeightPercent}% L 100 ${100 - heightPercent}% L 100 100 L 0 100 Z`} 
                            fill="currentColor" 
                            className={cn(
                              "text-gray-50/80 transition-colors duration-300",
                              (hoveredStage === i || hoveredStage === i - 1) ? "text-gray-100" : ""
                            )}
                          />
                        </svg>
                      </div>
                    )}

                    {/* The Bar */}
                    <div 
                      className={cn(
                        "w-full max-w-[80px] rounded-t-lg transition-all duration-700 ease-out relative z-10",
                        "bg-gradient-to-b shadow-lg",
                        stage.gradient,
                        isHovered ? "shadow-xl scale-[1.02]" : "opacity-90"
                      )}
                      style={{ 
                        height: `${Math.max(heightPercent, 2)}%`,
                        minHeight: '8px'
                      }}
                    >
                      {/* Value Label (Top) */}
                      <div className={cn(
                        "absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-lg shadow-md border border-gray-100 text-sm font-bold text-gray-900 whitespace-nowrap transition-all duration-300 z-20",
                        isHovered ? "opacity-100 -translate-y-1" : "opacity-0 translate-y-2 lg:opacity-100 lg:translate-y-0"
                      )}>
                        <AnimatedCounter value={targetCounts[i]} />
                      </div>
                    </div>

                    {/* Stage Label (Bottom) */}
                    <div className="mt-4 flex flex-col items-center gap-2 z-10">
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300",
                        stage.bg,
                        stage.text
                      )}>
                        <stage.icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stage.name}</span>
                    </div>
                  </div>
                );
              })}

              {/* Summary Card (Right Side) */}
              <div className="hidden lg:flex flex-col justify-center h-full pl-8 border-l border-gray-100 ml-4">
                <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl border border-slate-800 w-64 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/30 transition-colors" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2 text-slate-400">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Influenced Revenue</span>
                    </div>
                    <div className="text-3xl font-bold tracking-tight mb-4">
                      <AnimatedCounter value={targetRevenue} prefix="$" />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Conversion</span>
                        <span className="text-emerald-400 font-bold">2.7%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[75%]" />
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full w-fit">
                        <TrendingUp className="w-3 h-3" />
                        <span>+12.4% vs last month</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Multi-touch Attribution",
              desc: "Track every touchpoint across long B2B sales cycles.",
              icon: Layers,
              color: "blue"
            },
            {
              title: "Pipeline Velocity",
              desc: "See how LinkedIn warms up your target accounts.",
              icon: Zap,
              color: "orange"
            },
            {
              title: "Creative Performance",
              desc: "Double down on the ads that actually drive revenue.",
              icon: Target,
              color: "emerald"
            }
          ].map((item, i) => (
            <div 
              key={i}
              className={cn(
                "group p-6 rounded-2xl border border-gray-100 bg-white hover:border-blue-100 hover:shadow-lg transition-all duration-300",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${(i * 100) + 500}ms` }}
            >
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
                item.color === 'blue' ? "bg-blue-50 text-blue-600" :
                item.color === 'orange' ? "bg-orange-50 text-orange-600" :
                "bg-emerald-50 text-emerald-600"
              )}>
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className={cn(
          "flex justify-center transition-all duration-700 delay-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <ButtonGroup 
            primaryLabel="Start Measuring ROI" 
            secondaryLabel="View Attribution Demo"
            size="lg"
          />
        </div>

      </div>
    </section>
  );
};

export default RevenueAttributionSection;