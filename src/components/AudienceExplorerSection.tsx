"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  Search,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBadge from "./SectionBadge";

const AudienceExplorerSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const [activeRow, setActiveRow] = React.useState(0);

  // Simple, light animation: Cycle through "verifying" rows
  React.useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActiveRow((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section 
      ref={ref}
      className="w-full bg-white px-8 md:px-[112px] py-24 md:py-40 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left: Content */}
        <div className="lg:col-span-5 space-y-8">
          <div className={cn(
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={Database} text="Proprietary B2B Database" />
          </div>

          <h2 className={cn(
            "text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Precision Targeting with <span className="bg-gradient-to-r from-[#3875F6] to-[#60A5FA] bg-clip-text text-transparent">Verified Data</span>
          </h2>

          <p className={cn(
            "text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Don't rely on LinkedIn's broad matching. Audience Explorer gives you direct access to our database of 280M+ verified B2B profiles, ensuring 100% criteria accuracy.
          </p>

          <div className={cn(
            "space-y-4 transition-all duration-700 delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="h-5 w-5 text-[#f97316]" />
              <span>Access 280M+ verified B2B contacts</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="h-5 w-5 text-[#f97316]" />
              <span>Eliminate 30-40% irrelevant ad spend</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="h-5 w-5 text-[#f97316]" />
              <span>Sync directly to LinkedIn Campaign Manager</span>
            </div>
          </div>

          <div className={cn(
            "pt-4 transition-all duration-700 delay-400",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Button size="hero" variant="hero" className="group bg-[#3875F6] hover:bg-[#2c5cc5] shadow-blue-500/20">
              Explore the Database
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right: Reworked Light Visual */}
        <div className="lg:col-span-7 relative">
          <div className={cn(
            "relative w-full bg-slate-50 rounded-[32px] p-8 md:p-12 border border-slate-200 shadow-xl transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            {/* Header of the visual */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  <Search className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Live Enrichment</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">DemandSense Database v4.2</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                ACTIVE SYNC
              </div>
            </div>

            {/* Enrichment Rows */}
            <div className="space-y-4">
              {[
                { name: "VP Marketing", company: "TechFlow", status: "Verified" },
                { name: "CTO", company: "CloudScale", status: "Verified" },
                { name: "Head of Sales", company: "Nexus AI", status: "Verified" }
              ].map((row, i) => (
                <div 
                  key={i}
                  className={cn(
                    "relative p-5 rounded-2xl border transition-all duration-500 flex items-center justify-between",
                    activeRow === i 
                      ? "bg-white border-blue-200 shadow-md scale-[1.02] z-10" 
                      : "bg-white/50 border-slate-100 opacity-60 scale-100"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                      activeRow === i ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-400"
                    )}>
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{row.name}</div>
                      <div className="text-xs text-slate-500">{row.company}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    {/* The "Enrichment" visual */}
                    <div className="hidden md:flex items-center gap-2">
                      <div className="h-1 w-12 bg-slate-100 rounded-full overflow-hidden">
                        <div className={cn(
                          "h-full bg-blue-500 transition-all duration-[2000ms] ease-in-out",
                          activeRow === i ? "w-full" : "w-0"
                        )} />
                      </div>
                    </div>
                    
                    <div className={cn(
                      "flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-bold transition-all duration-500",
                      activeRow === i 
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-100" 
                        : "bg-slate-100 text-slate-400"
                    )}>
                      <ShieldCheck className="h-3 w-3" />
                      {activeRow === i ? "100% ACCURATE" : "VERIFYING"}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Stats */}
            <div className="mt-10 pt-8 border-t border-slate-200 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Database Size</span>
                <span className="text-xl font-bold text-slate-900">280M+ Profiles</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Avg. Match Rate</span>
                <span className="text-xl font-bold text-blue-600">94.2%</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AudienceExplorerSection;