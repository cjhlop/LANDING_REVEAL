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
  Search,
  Target,
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionBadge from "./SectionBadge";

const WebIDSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const [activeStage, setActiveStage] = React.useState(0);

  // Cycle through the identification stages: 0 (Scanning), 1 (Company Found), 2 (Person Unmasked)
  React.useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section 
      ref={ref}
      className="w-full bg-white px-8 md:px-[112px] py-24 md:py-40 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left: Content (5 columns) */}
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

        {/* Right: The "Identification Radar" Animation (7 columns) */}
        <div className="lg:col-span-7 relative">
          <div className={cn(
            "relative aspect-[4/3] w-full bg-slate-950 rounded-[40px] border border-slate-800 shadow-2xl overflow-hidden transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
            
            {/* Radar Scanner Visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Rotating Radar Sweep */}
              <div className="absolute w-[500px] h-[500px] rounded-full bg-[conic-gradient(from_0deg,transparent_0%,rgba(56,117,246,0.15)_100%)] animate-[radar-spin_4s_linear_infinite]" />
              
              {/* Concentric Radar Rings */}
              <div className="absolute w-96 h-96 rounded-full border border-blue-500/10" />
              <div className="absolute w-64 h-64 rounded-full border border-blue-500/20" />
              <div className="absolute w-32 h-32 rounded-full border border-blue-500/30" />
              
              {/* The Active Scanner Core */}
              <div className="relative z-20 w-24 h-24 rounded-full bg-slate-900 border border-blue-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(56,117,246,0.3)]">
                <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-pulse" />
                {activeStage === 0 ? (
                  <Search className="h-8 w-8 text-blue-400 animate-pulse" />
                ) : activeStage === 1 ? (
                  <Target className="h-8 w-8 text-orange-400 animate-bounce" />
                ) : (
                  <UserCheck className="h-8 w-8 text-emerald-400 animate-in zoom-in duration-300" />
                )}
              </div>
            </div>

            {/* Progressive Reveal UI - Unified Dark Theme */}
            <div className="absolute inset-0 p-10 flex flex-col justify-between pointer-events-none">
              
              {/* Stage 1: IP Detection (Top Left) */}
              <div className={cn(
                "w-56 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-2xl p-4 transition-all duration-700",
                activeStage >= 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              )}>
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="h-4 w-4 text-blue-400" />
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Signal Detected</span>
                </div>
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono text-slate-300">IP: 104.21.78.212</div>
                  <div className="text-[11px] font-mono text-slate-500">LOC: San Francisco, CA</div>
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mt-2">
                    <div className="h-full bg-blue-500 animate-[shimmer_2s_infinite]" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>

              {/* Stage 2: Company Match (Center Right) */}
              <div className={cn(
                "absolute right-10 top-1/3 w-64 bg-slate-900/95 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-5 transition-all duration-700 shadow-2xl",
                activeStage >= 1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              )}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Stripe, Inc.</div>
                    <div className="text-[10px] text-orange-400 font-bold uppercase">Company Match</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 border-t border-slate-800 pt-3">
                  <div>
                    <div className="text-[9px] text-slate-500 uppercase font-bold">Industry</div>
                    <div className="text-[11px] text-slate-200">Fintech</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 uppercase font-bold">Revenue</div>
                    <div className="text-[11px] text-slate-200">$10B+</div>
                  </div>
                </div>
              </div>

              {/* Stage 3: Individual Unmasked (Bottom Left) - Now Dark Theme */}
              <div className={cn(
                "w-72 bg-slate-900/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 transform",
                activeStage === 2 ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              )}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      SJ
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-4 border-slate-950 flex items-center justify-center">
                      <ShieldCheck className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-white text-base">Sarah Jenkins</div>
                    <div className="text-xs text-blue-400 font-semibold">VP of Marketing</div>
                  </div>
                </div>
                <div className="space-y-3 bg-slate-800/50 rounded-xl p-3 border border-slate-700/50">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Intent Score</span>
                    <span className="text-emerald-400 font-bold text-xs">98/100</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500" style={{ width: '98%' }} />
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-[9px] font-bold">VERIFIED EMAIL</Badge>
                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[9px] font-bold">HIGH INTENT</Badge>
                </div>
              </div>
            </div>

            {/* Live Feed Status Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md border-t border-slate-800 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">
                  {activeStage === 0 ? "Scanning Network Traffic..." : activeStage === 1 ? "Resolving Company Identity..." : "Identity Verified: Sarah Jenkins"}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Cpu className="h-3 w-3 text-slate-500" />
                  <span className="text-[9px] text-slate-500 font-mono">LATENCY: 142ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes radar-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default WebIDSection;