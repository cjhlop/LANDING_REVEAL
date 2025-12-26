"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  Users, 
  Target, 
  Filter, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  TrendingUp,
  ShieldCheck,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionBadge from "./SectionBadge";

const AudienceExplorerSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const [isSyncing, setIsSyncing] = React.useState(false);
  const [matchRate, setMatchRate] = React.useState(0);

  // Animate the match rate when in view
  React.useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setMatchRate(94);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 3000);
  };

  return (
    <section 
      ref={ref}
      className="w-full bg-slate-50 px-8 md:px-[112px] py-24 md:py-40 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left: Content (5 columns) */}
        <div className="lg:col-span-5 space-y-8">
          <div className={cn(
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={Users} text="Audience Explorer" />
          </div>

          <h2 className={cn(
            "text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Stop Paying for <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Irrelevant Clicks</span>
          </h2>

          <p className={cn(
            "text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Standard LinkedIn targeting includes 30-40% irrelevant profiles. Audience Explorer filters out the noise, delivering 100% accurate B2B audiences based on our 280M+ verified profile database.
          </p>

          <div className={cn(
            "space-y-6 transition-all duration-700 delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
                <AlertCircle className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold text-gray-900">The LinkedIn Problem</div>
                <p className="text-sm text-gray-500">Broad matching often wastes 35% of your budget on non-ICP leads.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-blue-100 shadow-md ring-4 ring-blue-500/5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold text-gray-900">The DemandSense Solution</div>
                <p className="text-sm text-gray-500">Verified B2B data ensures every dollar hits a decision-maker.</p>
              </div>
            </div>
          </div>

          <div className={cn(
            "pt-4 transition-all duration-700 delay-400",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Button size="hero" variant="hero" className="group">
              Build Your Audience
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right: The "Precision Funnel" Animation (7 columns) */}
        <div className="lg:col-span-7 relative">
          <div className={cn(
            "relative aspect-[4/3] w-full bg-white rounded-[40px] border border-gray-200 shadow-2xl overflow-hidden transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            {/* Top Section: Raw Data Input */}
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-slate-50 border-b border-gray-100 p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Raw LinkedIn Data</span>
                <Badge variant="outline" className="text-orange-500 border-orange-200 bg-orange-50">35% Waste Detected</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-1000",
                      i % 3 === 0 ? "bg-orange-100 text-orange-400 animate-pulse" : "bg-slate-200 text-slate-400"
                    )}
                  >
                    <Users className="h-4 w-4" />
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Section: The Filter Engine */}
            <div className="absolute top-1/3 left-0 right-0 h-12 flex items-center justify-center z-20">
              <div className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-xl flex items-center gap-3 animate-bounce">
                <Filter className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-tighter">Precision Filter Active</span>
              </div>
            </div>

            {/* Bottom Section: Verified Output */}
            <div className="absolute bottom-0 left-0 right-0 h-[60%] p-8 flex flex-col justify-center items-center">
              <div className="w-full max-w-md bg-slate-950 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent animate-pulse" />
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                        <Target className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">Enterprise SaaS Decision Makers</div>
                        <div className="text-slate-500 text-[10px]">Synced to LinkedIn Campaign Manager</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-blue-400 font-bold text-xl transition-all duration-1000">{matchRate}%</div>
                      <div className="text-[9px] text-slate-500 uppercase font-bold">Match Rate</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                      <span>Audience Quality</span>
                      <span className="text-emerald-400">Verified</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 transition-all duration-[2000ms] ease-out" 
                        style={{ width: `${matchRate}%` }} 
                      />
                    </div>
                  </div>

                  {/* ROI Indicator */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-3">
                      <div className="text-[9px] text-slate-500 uppercase font-bold mb-1">Budget Saved</div>
                      <div className="text-emerald-400 font-bold text-lg">$1,420.00</div>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-3">
                      <div className="text-[9px] text-slate-500 uppercase font-bold mb-1">Sync Status</div>
                      <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                        <RefreshCw className={cn("h-3 w-3", isSyncing && "animate-spin")} />
                        {isSyncing ? "Syncing..." : "Live"}
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={handleSync}
                    disabled={isSyncing}
                    className="w-full bg-white text-slate-950 hover:bg-slate-100 font-bold text-xs h-10"
                  >
                    {isSyncing ? "Updating LinkedIn Audience..." : "Sync Audience Now"}
                  </Button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 flex gap-6">
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">No Waste</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">100% ICP Match</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AudienceExplorerSection;