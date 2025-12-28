"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBadge from "./SectionBadge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AUDIENCE_DATA = [
  { name: "SaaS Decision Makers", size: "124k", match: "98%" },
  { name: "Fortune 500 VPs", size: "42k", match: "96%" },
  { name: "IT Directors (US)", size: "89k", match: "99%" },
  { name: "Fintech Founders", size: "15k", match: "94%" },
  { name: "Marketing Ops", size: "67k", match: "97%" },
];

// Indices of the 4 central squares in a 6x6 grid (0-indexed)
const CENTER_INDICES = [14, 15, 20, 21];

const AudienceExplorerSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });

  // Generate random positions for pulsating nodes once, excluding the center
  const pulsatingNodes = React.useMemo(() => {
    const nodes = [];
    const availableIndices = Array.from({ length: 36 }, (_, i) => i).filter(
      (i) => !CENTER_INDICES.includes(i)
    );
    
    // Pick 8 random indices from available ones
    const shuffled = [...availableIndices].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 8);

    return selected.map((index, i) => ({
      id: i,
      index,
      data: AUDIENCE_DATA[i % AUDIENCE_DATA.length]
    }));
  }, []);

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
            <TooltipProvider>
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4 p-8">
                {[...Array(36)].map((_, i) => {
                  const activeNode = pulsatingNodes.find(n => n.index === i);
                  const isCenter = CENTER_INDICES.includes(i);
                  
                  return (
                    <div 
                      key={i}
                      className={cn(
                        "relative rounded-lg border transition-all duration-1000 flex items-center justify-center",
                        "bg-white/40 backdrop-blur-sm",
                        inView ? "opacity-100" : "opacity-0",
                        isCenter && "opacity-0 pointer-events-none" // Hide center squares
                      )}
                      style={{ 
                        transitionDelay: `${i * 15}ms`,
                        borderColor: activeNode ? 'rgba(56,117,246,0.4)' : 'rgba(226,232,240,0.5)'
                      }}
                    >
                      {activeNode && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="absolute inset-0 flex items-center justify-center cursor-pointer group/node">
                              <div className="size-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(56,117,246,0.8)] group-hover/node:scale-150 transition-transform" />
                              <div className="absolute inset-0 bg-blue-400/10 rounded-lg animate-ping duration-[3000ms]" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-slate-900 text-white border-slate-800 p-3 rounded-xl shadow-2xl">
                            <div className="space-y-1.5">
                              <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">Verified Audience</div>
                              <div className="font-bold text-sm">{activeNode.data.name}</div>
                              <div className="flex items-center gap-3 pt-1 border-t border-slate-800">
                                <div>
                                  <div className="text-[9px] text-slate-500 uppercase font-bold">Size</div>
                                  <div className="text-xs font-bold">{activeNode.data.size}</div>
                                </div>
                                <div>
                                  <div className="text-[9px] text-slate-500 uppercase font-bold">Match</div>
                                  <div className="text-xs font-bold text-emerald-400">{activeNode.data.match}</div>
                                </div>
                              </div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  );
                })}
              </div>
            </TooltipProvider>

            {/* Data Replenishment Beams (SVG Layer) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" aria-hidden="true">
              <defs>
                <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(56,117,246,0)" />
                  <stop offset="50%" stopColor="rgba(56,117,246,0.4)" />
                  <stop offset="100%" stopColor="rgba(56,117,246,0)" />
                </linearGradient>
              </defs>
              {inView && pulsatingNodes.map((node) => {
                // Calculate coordinates for the line
                // Grid is 6x6, p-8 padding. 
                const row = Math.floor(node.index / 6);
                const col = node.index % 6;
                
                // Center of the grid is 50%, 50%
                // Each cell is roughly 16.66% wide/high
                const targetX = 8 + (col * 16.66) + 8.33; // padding + (col * cellWidth) + halfCell
                const targetY = 8 + (row * 16.66) + 8.33; // padding + (row * cellHeight) + halfCell

                return (
                  <g key={`beam-${node.id}`}>
                    {/* Static connecting line */}
                    <line 
                      x1="50%" y1="50%" 
                      x2={`${targetX}%`} y2={`${targetY}%`} 
                      stroke="rgba(56,117,246,0.1)" 
                      strokeWidth="1"
                    />
                    {/* Animated pulse traveling along the line */}
                    <circle r="2" fill="#3875F6" className="animate-beam-pulse">
                      <animateMotion 
                        dur={`${2 + Math.random() * 2}s`} 
                        repeatCount="indefinite"
                        path={`M 275 275 L ${targetX * 5.5} ${targetY * 5.5}`} // 550px / 100 = 5.5
                      />
                      <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </g>
                );
              })}
            </svg>

            {/* Central Precision Lens */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <div className="relative size-64">
                {/* Core Lens */}
                <div className="absolute inset-12 bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-md rounded-full border border-white shadow-2xl flex flex-col items-center justify-center">
                  <div className="relative">
                    <Target className="size-14 text-blue-600 animate-pulse duration-[2000ms]" />
                    <div className="absolute inset-0 border-2 border-blue-400 rounded-full animate-ping opacity-20" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @keyframes beam-pulse {
          0% { offset-distance: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .animate-beam-pulse {
          animation: beam-pulse 3s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default AudienceExplorerSection;