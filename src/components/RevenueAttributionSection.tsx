"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  BarChart3, 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  PieChart,
  CheckCircle2,
  FileText,
  Users,
  MousePointer2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBadge from "./SectionBadge";

const STAGES = [
  { name: "Exposed", count: "1,250", icon: Users, color: "bg-blue-100 text-blue-600" },
  { name: "Engaged", count: "456", icon: MousePointer2, color: "bg-purple-100 text-purple-600" },
  { name: "Deal Created", count: "89", icon: FileText, color: "bg-orange-100 text-orange-600" },
  { name: "Closed Won", count: "34", icon: CheckCircle2, color: "bg-emerald-100 text-emerald-600" },
];

const RevenueAttributionSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      id="revenue-attribution"
      className="w-full bg-white px-8 md:px-[112px] py-24 md:py-40 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left: Abstract Funnel Visual */}
        <div className="lg:col-span-7 relative">
          <div className={cn(
            "relative w-full aspect-square max-w-[550px] mx-auto transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            {/* Background Glow */}
            <div className="absolute inset-0 bg-emerald-50/30 rounded-full blur-3xl" />
            
            {/* Funnel Layers */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
              {STAGES.map((stage, i) => (
                <div 
                  key={stage.name}
                  className={cn(
                    "relative flex items-center justify-between px-6 py-4 rounded-2xl border bg-white/80 backdrop-blur-sm transition-all duration-700 shadow-sm group hover:shadow-md",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ 
                    width: `${100 - (i * 12)}%`,
                    transitionDelay: `${i * 150}ms`
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn("p-2 rounded-lg", stage.color)}>
                      <stage.icon className="size-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{stage.name}</div>
                      <div className="text-xl font-bold text-gray-900">{stage.count}</div>
                    </div>
                  </div>
                  
                  {i < STAGES.length - 1 && (
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10">
                      <div className="bg-white border rounded-full p-1 shadow-sm">
                        <TrendingUp className="size-3 text-gray-400" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Floating Revenue Card */}
            <div className={cn(
              "absolute bottom-4 right-4 bg-slate-900 text-white p-5 rounded-2xl shadow-2xl border border-slate-800 transition-all duration-1000 delay-1000",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                  <DollarSign className="size-5" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Influenced Revenue</div>
              </div>
              <div className="text-3xl font-bold">$1.2M</div>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <TrendingUp className="size-3" />
                <span>+12% vs last month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-5 space-y-8">
          <div className={cn(
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={BarChart3} text="Revenue Intelligence" />
          </div>

          <h2 className={cn(
            "text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Finally Prove <br />
            <span className="bg-gradient-to-r from-emerald-600 to-blue-500 bg-clip-text text-transparent">LinkedIn ROI</span>
          </h2>

          <p className={cn(
            "text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Stop guessing which campaigns drive growth. Connect your LinkedIn activity directly to CRM deals to see the full journey from first impression to closed-won revenue.
          </p>

          <div className={cn(
            "space-y-4 transition-all duration-700 delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="size-5 text-emerald-500" />
              <span>Multi-touch attribution for B2B cycles</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="size-5 text-emerald-500" />
              <span>Track influenced pipeline in real-time</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="size-5 text-emerald-500" />
              <span>Identify top-performing ad creatives</span>
            </div>
          </div>

          <div className={cn(
            "pt-4 transition-all duration-700 delay-400",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Button size="hero" variant="hero" className="group bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20">
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