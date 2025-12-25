"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  ScanFace, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  UserCheck, 
  Zap, 
  Fingerprint,
  Globe,
  ShieldCheck,
  Database
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionBadge from "./SectionBadge";

const WebIDSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const [activeStage, setActiveStage] = React.useState(0);

  // Cycle through the identification stages
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

        {/* Right: The "Neural Engine" Animation (7 columns) */}
        <div className="lg:col-span-7 relative">
          <div className={cn(
            "relative aspect-[4/3] w-full bg-slate-950 rounded-[40px] border border-slate-800 shadow-2xl overflow-hidden transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
            
            {/* Central Processing Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Pulsing Rings */}
              <div className="absolute w-64 h-64 rounded-full border border-blue-500/20 animate-ping" />
              <div className="absolute w-48 h-48 rounded-full border border-blue-400/30 animate-pulse" />
              
              {/* The Core */}
              <div className="relative z-20 w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-[0_0_50px_rgba(56,117,246,0.5)]">
                <Database className="h-12 w-12 text-white animate-bounce" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-slate-950 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
              </div>

              {/* Data Signal Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-0 animate-data-stream"
                    style={{ 
                      top: '50%', 
                      left: '50%',
                      animationDelay: `${i * 0.5}s`,
                      transform: `rotate(${i * 45}deg) translateX(150px)`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating Result Cards */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              {/* Top Left: Raw Signal */}
              <div className={cn(
                "w-48 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-2xl p-4 transition-all duration-700",
                activeStage >= 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              )}>
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="h-4 w-4 text-slate-400" />
                  <span className="text-[10px] font-mono text-slate-400">INCOMING_IP: 192.168.1.1</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 animate-[shimmer_2s_infinite]" style={{ width: '70%' }} />
                </div>
              </div>

              {/* Bottom Right: Identified Profile */}
              <div className={cn(
                "self-end w-64 bg-white rounded-2xl p-5 shadow-2xl transition-all duration-700 transform",
                activeStage === 2 ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              )}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    SJ
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Sarah Jenkins</div>
                    <div className="text-xs text-blue-600 font-medium">VP of Marketing @ Stripe</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase">
                    <span>Intent Score</span>
                    <span className="text-emerald-500">98/100</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500" style={{ width: '98%' }} />
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Badge className="bg-blue-50 text-blue-700 border-0 text-[9px]">Verified Email</Badge>
                  <Badge className="bg-emerald-50 text-emerald-700 border-0 text-[9px]">High Intent</Badge>
                </div>
              </div>

              {/* Center Left: Company Intel */}
              <div className={cn(
                "absolute left-8 top-1/2 -translate-y-1/2 w-56 bg-slate-900/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-4 transition-all duration-700",
                activeStage >= 1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              )}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-white text-sm">Stripe, Inc.</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-400">Revenue</span>
                    <span className="text-white">$10B+</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-400">Tech Stack</span>
                    <span className="text-white">AWS, React</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-slate-900/50 backdrop-blur-md border-t border-slate-800 px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Engine Status: Active</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3 text-blue-400" />
                  <span className="text-[9px] text-slate-500">GDPR Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes data-stream {
          0% { transform: rotate(var(--tw-rotate)) translateX(250px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: rotate(var(--tw-rotate)) translateX(0px); opacity: 0; }
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