"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  ScanFace, 
  ArrowRight, 
  Building2, 
  UserCheck, 
  Fingerprint,
  Globe,
  ShieldCheck,
  Zap,
  Activity,
  Lock,
  Unlock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionBadge from "./SectionBadge";

const WebIDSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const [activeStage, setActiveStage] = React.useState(0);

  // Cycle through identification stages: 0 (Signal), 1 (Company), 2 (Individual)
  React.useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 3);
    }, 4000);
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
            <SectionBadge icon={ScanFace} text="WebID™ Technology" />
          </div>

          <h2 className={cn(
            "text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Unmask the <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Invisible Pipeline</span>
          </h2>

          <p className={cn(
            "text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            98% of your website visitors leave without filling out a form. WebID™ uses our proprietary identity graph to reveal the exact people and companies researching you in real-time.
          </p>

          <div className={cn(
            "grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-600 font-bold">
                <Fingerprint className="h-5 w-5" />
                <span>Individual ID</span>
              </div>
              <p className="text-sm text-gray-500">Names, titles, and verified work emails of your visitors.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-orange-500 font-bold">
                <Building2 className="h-5 w-5" />
                <span>Company Intel</span>
              </div>
              <p className="text-sm text-gray-500">Firmographic data, tech stacks, and revenue ranges.</p>
            </div>
          </div>

          <div className={cn(
            "pt-4 transition-all duration-700 delay-400",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Button size="hero" variant="hero" className="group">
              Start Identifying Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right: The "Live Identification Stream" */}
        <div className="lg:col-span-7 relative">
          <div className={cn(
            "relative aspect-[4/3] w-full bg-[#020617] rounded-[48px] border border-slate-800 shadow-2xl overflow-hidden transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            {/* Background Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] animate-pulse" />
            
            {/* Central Neural Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Pulsing Rings */}
                <div className="absolute inset-0 -m-8 rounded-full border border-blue-500/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <div className="absolute inset-0 -m-16 rounded-full border border-blue-500/10 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
                
                {/* Core Hexagon */}
                <div className="relative z-20 w-32 h-32 bg-slate-900 border border-blue-500/40 rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(56,117,246,0.2)] rotate-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl" />
                  <div className="-rotate-12 flex flex-col items-center gap-2">
                    {activeStage === 0 ? (
                      <Activity className="h-10 w-10 text-blue-400 animate-pulse" />
                    ) : activeStage === 1 ? (
                      <Building2 className="h-10 w-10 text-orange-400 animate-in zoom-in duration-300" />
                    ) : (
                      <UserCheck className="h-10 w-10 text-emerald-400 animate-in zoom-in duration-300" />
                    )}
                    <span className="text-[10px] font-mono text-blue-400/60 uppercase tracking-widest">WebID™</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Data Nodes */}
            <div className="absolute inset-0 pointer-events-none">
              
              {/* Node 1: Signal (Top Left) */}
              <div className={cn(
                "absolute top-12 left-12 w-64 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 transition-all duration-700",
                activeStage >= 0 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              )}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Globe className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Incoming Signal</div>
                    <div className="text-xs font-mono text-slate-200">104.21.78.212</div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-blue-400 animate-bounce" />
                    <div className="w-1 h-1 rounded-full bg-blue-400 animate-bounce [animation-delay:0.2s]" />
                  </div>
                </div>
              </div>

              {/* Node 2: Company (Top Right) */}
              <div className={cn(
                "absolute top-24 right-12 w-64 bg-slate-900/60 backdrop-blur-md border border-orange-500/20 rounded-2xl p-4 transition-all duration-700",
                activeStage >= 1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              )}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <Building2 className="h-4 w-4 text-orange-400" />
                  </div>
                  <div className="font-bold text-white text-sm">Stripe, Inc.</div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/5 pt-2">
                  <span>Fintech</span>
                  <span className="text-orange-400 font-bold">MATCH FOUND</span>
                </div>
              </div>

              {/* Node 3: The "Unmasked" Individual (Bottom Center) */}
              <div className={cn(
                "absolute bottom-12 left-1/2 -translate-x-1/2 w-[340px] bg-gradient-to-b from-slate-800/80 to-slate-900/95 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-6 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)] transition-all duration-1000 transform",
                activeStage === 2 ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              )}>
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-3">
                      SJ
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                      <ShieldCheck className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg tracking-tight">Sarah Jenkins</div>
                    <div className="text-sm text-blue-400 font-medium">VP of Marketing @ Stripe</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="text-[9px] text-slate-500 font-bold uppercase mb-1">Intent Score</div>
                    <div className="text-emerald-400 font-bold">98/100</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="text-[9px] text-slate-500 font-bold uppercase mb-1">Buying Stage</div>
                    <div className="text-blue-400 font-bold">Decision</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-[9px] font-bold">VERIFIED</Badge>
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[9px] font-bold">HIGH INTENT</Badge>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono">
                    <Zap className="h-3 w-3 text-orange-400" />
                    SYNCED
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Status Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-slate-950/80 backdrop-blur-md border-t border-white/5 px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <div className={cn("w-1.5 h-1.5 rounded-full transition-colors duration-300", activeStage >= 0 ? "bg-blue-500 shadow-[0_0_8px_#3b82f6]" : "bg-slate-800")} />
                  <div className={cn("w-1.5 h-1.5 rounded-full transition-colors duration-300", activeStage >= 1 ? "bg-orange-500 shadow-[0_0_8px_#f97316]" : "bg-slate-800")} />
                  <div className={cn("w-1.5 h-1.5 rounded-full transition-colors duration-300", activeStage >= 2 ? "bg-emerald-500 shadow-[0_0_8px_#10b981]" : "bg-slate-800")} />
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">
                  {activeStage === 0 ? "Detecting Traffic..." : activeStage === 1 ? "Resolving Firmographics..." : "Identity Unmasked"}
                </span>
              </div>
              <div className="text-[10px] font-mono text-slate-600">
                EST. LATENCY: 142MS
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WebIDSection;