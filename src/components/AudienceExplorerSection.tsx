"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  Filter,
  Zap,
  Sparkles,
  Target
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

        {/* Right: Abstract Discovery Visual */}
        <div className="lg:col-span-7 relative">
          <div className={cn(
            "relative w-full aspect-square max-w-[550px] mx-auto transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            
            {/* Background Glows */}
            <div className="absolute inset-0 bg-blue-50/30 rounded-full blur-3xl" />
            
            {/* The Matrix Grid - Representing the vast database */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-3 p-12 opacity-20">
              {[...Array(64)].map((_, i) => (
                <div 
                  key={i}
                  className="rounded-full bg-slate-300 size-1"
                />
              ))}
            </div>

            {/* Central Precision Filter (Abstract) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative size-72">
                {/* Rotating Rings - Representing the search/filter process */}
                <div className="absolute inset-0 border-2 border-dashed border-blue-200 rounded-full animate-[spin_25s_linear_infinite]" />
                <div className="absolute inset-6 border border-blue-100/50 rounded-full animate-[spin_18s_linear_infinite_reverse]" />
                
                {/* Core Filter Lens */}
                <div className="absolute inset-16 bg-gradient-to-br from-white/90 to-blue-50/80 backdrop-blur-md rounded-full border border-white shadow-2xl flex flex-col items-center justify-center overflow-hidden">
                  {/* Scanning Light Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent h-1/2 w-full animate-[scan_3s_ease-in-out_infinite]" />
                  
                  <div className="relative">
                    <Target className="size-12 text-blue-600 animate-pulse duration-[3000ms]" />
                    <Sparkles className="absolute -top-2 -right-2 size-5 text-orange-400 animate-bounce" />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em]">Precision Filter</div>
                    <div className="text-xl font-black text-slate-900">Audience Builder</div>
                  </div>
                </div>

                {/* Floating Data Particles - Flowing into the filter */}
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute size-1.5 bg-blue-400 rounded-full opacity-0 animate-data-discovery"
                    style={{
                      top: '50%',
                      left: '50%',
                      animationDelay: `${i * 0.5}s`,
                      transform: `rotate(${i * 30}deg) translateX(140px)`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating Benefit Labels */}
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md border border-emerald-100 rounded-2xl p-4 shadow-xl animate-float-slow">
              <div className="flex items-center gap-2">
                <div className="size-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-bold text-slate-900">-30% Irrelevant Spend</span>
              </div>
            </div>

            <div className="absolute bottom-12 left-4 bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl p-4 shadow-xl animate-float-medium">
              <div className="flex items-center gap-2">
                <Zap className="size-4 text-orange-500" />
                <span className="text-sm font-bold text-slate-900">Lower CPM & CPC</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @keyframes data-discovery {
          0% { transform: rotate(var(--rotation)) translateX(180px) scale(0.5); opacity: 0; }
          20% { opacity: 0.6; transform: rotate(var(--rotation)) translateX(150px) scale(1); }
          100% { transform: rotate(var(--rotation)) translateX(60px) scale(0); opacity: 0; }
        }
        .animate-data-discovery {
          --rotation: 0deg;
          animation: data-discovery 3s infinite ease-in;
        }
        @keyframes scan {
          0%, 100% { transform: translateY(-100%); }
          50% { transform: translateY(200%); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default AudienceExplorerSection;