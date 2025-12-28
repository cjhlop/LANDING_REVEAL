"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  Zap,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBadge from "./SectionBadge";

const AudienceExplorerSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });

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
              <CheckCircle2 className="size-5 text-[#f97316]" />
              <span>Access 280M+ verified B2B contacts</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="size-5 text-[#f97316]" />
              <span>Eliminate 30-40% irrelevant ad spend</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="size-5 text-[#f97316]" />
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

        {/* Right: Abstract Matrix Visual */}
        <div className="lg:col-span-7 relative">
          <div className={cn(
            "relative w-full aspect-square max-w-[550px] mx-auto transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            
            {/* Background Glows */}
            <div className="absolute inset-0 bg-blue-50/30 rounded-full blur-3xl" />
            
            {/* The Matrix Grid */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4 p-8">
              {[...Array(36)].map((_, i) => (
                <div 
                  key={i}
                  className={cn(
                    "relative rounded-lg border transition-all duration-1000 flex items-center justify-center",
                    "bg-white/40 backdrop-blur-sm",
                    inView ? "opacity-100" : "opacity-0"
                  )}
                  style={{ 
                    transitionDelay: `${i * 20}ms`,
                    borderColor: i % 7 === 0 ? 'rgba(56,117,246,0.3)' : 'rgba(226,232,240,0.5)'
                  }}
                >
                  {/* Randomly active "Verified" nodes */}
                  {i % 7 === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="size-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(56,117,246,0.8)]" />
                      <div className="absolute inset-0 bg-blue-400/10 rounded-lg animate-ping duration-[3000ms]" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Central Verification Lens (Abstract) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative size-64">
                {/* Rotating Rings */}
                <div className="absolute inset-0 border-2 border-dashed border-blue-200 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-4 border border-blue-100 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                
                {/* Core Lens */}
                <div className="absolute inset-12 bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-md rounded-full border border-white shadow-2xl flex flex-col items-center justify-center">
                  <div className="relative">
                    <ShieldCheck className="size-12 text-blue-600 animate-bounce duration-[2000ms]" />
                    <Sparkles className="absolute -top-2 -right-2 size-5 text-orange-400 animate-pulse" />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em]">Verification Engine</div>
                    <div className="text-xl font-black text-slate-900">100% Accurate</div>
                  </div>
                </div>

                {/* Floating Data Particles */}
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute size-2 bg-blue-400 rounded-full opacity-0 animate-data-flow"
                    style={{
                      top: '50%',
                      left: '50%',
                      animationDelay: `${i * 0.8}s`,
                      transform: `rotate(${i * 45}deg) translateX(120px)`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating Stats Labels */}
            <div className="absolute top-0 right-0 bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl p-4 shadow-xl animate-float-slow">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Verified Profiles</div>
              <div className="text-2xl font-bold text-slate-900">280M+</div>
            </div>

            <div className="absolute bottom-10 left-0 bg-white/80 backdrop-blur-md border border-orange-100 rounded-2xl p-4 shadow-xl animate-float-medium">
              <div className="flex items-center gap-2">
                <Zap className="size-4 text-orange-500" />
                <span className="text-sm font-bold text-slate-900">Real-time Sync</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @keyframes data-flow {
          0% { transform: rotate(var(--rotation)) translateX(160px) scale(0); opacity: 0; }
          20% { opacity: 1; transform: rotate(var(--rotation)) translateX(140px) scale(1); }
          80% { opacity: 1; transform: rotate(var(--rotation)) translateX(40px) scale(1); }
          100% { transform: rotate(var(--rotation)) translateX(0px) scale(0); opacity: 0; }
        }
        .animate-data-flow {
          --rotation: 0deg;
          animation: data-flow 4s infinite ease-in;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default AudienceExplorerSection;