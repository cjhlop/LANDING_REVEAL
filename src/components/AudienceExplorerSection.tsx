"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  Users, 
  Database, 
  RefreshCw, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionBadge from "./SectionBadge";

const AUDIENCES = [
  { name: "Enterprise SaaS VPs", match: 94, leads: "12.4k" },
  { name: "Fintech Decision Makers", match: 88, leads: "8.2k" },
  { name: "IT Services Directors", match: 91, leads: "15.1k" },
];

const AudienceExplorerSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const [stage, setStage] = React.useState<"sync" | "list" | "compare">("sync");

  // Sequence: Sync (2s) -> List (4s) -> Compare (loop)
  React.useEffect(() => {
    if (!inView) return;
    
    const timer1 = setTimeout(() => setStage("list"), 2500);
    const timer2 = setTimeout(() => setStage("compare"), 6500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [inView]);

  return (
    <section 
      ref={ref}
      className="w-full bg-slate-50 px-8 md:px-[112px] py-24 md:py-40 overflow-hidden border-b border-gray-100"
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
            Precision Targeting with <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Verified Data</span>
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
              <CheckCircle2 className="h-5 w-5 text-purple-600" />
              <span>Access 280M+ verified B2B contacts</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="h-5 w-5 text-purple-600" />
              <span>Eliminate 30-40% irrelevant ad spend</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="h-5 w-5 text-purple-600" />
              <span>Sync directly to LinkedIn Campaign Manager</span>
            </div>
          </div>

          <div className={cn(
            "pt-4 transition-all duration-700 delay-400",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Button size="hero" variant="hero" className="group bg-purple-600 hover:bg-purple-700 shadow-purple-500/20">
              Explore the Database
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right: The Multi-Stage Animation */}
        <div className="lg:col-span-7 relative">
          <div className={cn(
            "relative aspect-[4/3] w-full bg-white rounded-[40px] border border-gray-200 shadow-2xl overflow-hidden transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            
            {/* Stage 1: Synchronizing */}
            <div className={cn(
              "absolute inset-0 flex flex-col items-center justify-center bg-slate-950 transition-all duration-1000",
              stage === "sync" ? "opacity-100 z-30" : "opacity-0 pointer-events-none"
            )}>
              <div className="relative">
                <div className="w-24 h-24 rounded-3xl bg-purple-600/20 border border-purple-500/50 flex items-center justify-center animate-pulse">
                  <Database className="h-10 w-10 text-purple-400" />
                </div>
                <div className="absolute inset-0 rounded-3xl border-2 border-purple-500 animate-ping opacity-20" />
              </div>
              <div className="mt-8 flex flex-col items-center gap-2">
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-4 w-4 text-purple-400 animate-spin" />
                  <span className="text-sm font-mono text-purple-400 uppercase tracking-[0.3em]">Synchronizing...</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">CONNECTING_TO_PROPRIETARY_GRAPH_V4</span>
              </div>
            </div>

            {/* Stage 2: Audience List */}
            <div className={cn(
              "absolute inset-0 p-10 bg-white transition-all duration-1000",
              stage === "list" ? "opacity-100 z-20 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
            )}>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-slate-900">Verified Audiences</h3>
                <Badge className="bg-purple-50 text-purple-700 border-purple-100">3 Ready to Sync</Badge>
              </div>
              <div className="space-y-4">
                {AUDIENCES.map((aud, i) => (
                  <div 
                    key={aud.name} 
                    className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 flex items-center justify-between animate-in slide-in-from-right-4 duration-500"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-purple-600">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{aud.name}</div>
                        <div className="text-[10px] text-slate-500 uppercase font-bold">{aud.leads} Verified Leads</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-purple-600 font-bold text-lg">{aud.match}%</div>
                      <div className="text-[9px] text-slate-400 uppercase font-bold">Match Rate</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage 3: Efficiency Comparison */}
            <div className={cn(
              "absolute inset-0 p-10 bg-slate-950 transition-all duration-1000",
              stage === "compare" ? "opacity-100 z-40 scale-100" : "opacity-0 scale-110 pointer-events-none"
            )}>
              <div className="text-center mb-10">
                <Badge variant="outline" className="text-purple-400 border-purple-900 mb-4">Efficiency Comparison</Badge>
                <h3 className="text-2xl font-bold text-white">Standard vs. Explorer</h3>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {/* Standard LinkedIn */}
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Standard LinkedIn</div>
                    <div className="relative h-48 w-full bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-end">
                      <div className="h-[65%] w-full bg-blue-600/40 flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-200">65% Accurate</span>
                      </div>
                      <div className="h-[35%] w-full bg-red-500/20 flex flex-col items-center justify-center border-t border-red-500/30 animate-pulse">
                        <AlertTriangle className="h-4 w-4 text-red-400 mb-1" />
                        <span className="text-[9px] font-bold text-red-400">35% WASTE</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Audience Explorer */}
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-[10px] font-bold text-purple-400 uppercase mb-2">Audience Explorer</div>
                    <div className="relative h-48 w-full bg-slate-900 rounded-2xl border border-purple-500/30 overflow-hidden flex flex-col justify-end">
                      <div className="h-full w-full bg-gradient-to-t from-purple-600 to-purple-400 flex flex-col items-center justify-center shadow-[inset_0_0_40px_rgba(168,85,247,0.4)]">
                        <ShieldCheck className="h-8 w-8 text-white mb-2 animate-bounce" />
                        <span className="text-sm font-bold text-white">100% VERIFIED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Budget Saved Counter */}
              <div className="mt-10 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-bold text-emerald-400">Budget Saved This Month</span>
                </div>
                <div className="text-2xl font-bold text-emerald-400">$2,840.00</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AudienceExplorerSection;