"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  Database, 
  CheckCircle2, 
  Target,
  Users,
  Zap,
  ShieldCheck
} from "lucide-react";
import SectionBadge from "./SectionBadge";
import ButtonGroup from "./ButtonGroup";
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
    const availableIndices = Array.from({ length: 36 }, (_, i) => i).filter(
      (i) => !CENTER_INDICES.includes(i)
    );
    
    // Pick 8 random indices from available ones
    const shuffled = [...availableIndices].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 8);

    return selected.map((index, i) => ({
      id: i,
      index,
      data: AUDIENCE_DATA[i % AUDIENCE_DATA.length],
      duration: 2 + Math.random() * 2, // Randomize speed for organic feel
    }));
  }, []);

  return (
    <section 
      ref={ref}
      className="w-full bg-white px-6 sm:px-12 md:px-[112px] py-16 md:py-24 lg:py-40 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Abstract Matrix Visual (Swapped) */}
        <div className="lg:col-span-7 relative order-2 lg:order-1">
          <div className={cn(
            "relative w-full aspect-square max-w-[320px] sm:max-w-[450px] lg:max-w-[550px] mx-auto transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            
            {/* Background Glows */}
            <div className="absolute inset-0 bg-blue-50/30 rounded-full blur-3xl" />
            
            {/* The Matrix Grid */}
            <TooltipProvider>
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2 sm:gap-4 p-4 sm:p-8">
                {[...Array(36)].map((_, i) => {
                  const activeNode = pulsatingNodes.find(n => n.index === i);
                  const isCenter = CENTER_INDICES.includes(i);
                  
                  return (
                    <div 
                      key={i}
                      className={cn(
                        "relative rounded-md sm:rounded-lg border transition-all duration-1000 flex items-center justify-center",
                        "bg-white/40 backdrop-blur-sm",
                        inView ? "opacity-100" : "opacity-0",
                        isCenter && "opacity-0 pointer-events-none"
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
                              <div className="size-1.5 sm:size-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(56,117,246,0.8)] group-hover/node:scale-150 transition-transform" />
                              <div className="absolute inset-0 bg-blue-400/10 rounded-lg animate-ping duration-[3000ms]" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-slate-900 text-white border-slate-800 p-3 rounded-xl shadow-2xl z-50">
                            <div className="space-y-1.5">
                              <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Verified Audience</div>
                              <div className="font-bold text-xs sm:text-sm">{activeNode.data.name}</div>
                              <div className="flex items-center gap-3 pt-1 border-t border-slate-800">
                                <div>
                                  <div className="text-[8px] text-slate-500 uppercase font-bold">Size</div>
                                  <div className="text-[10px] sm:text-xs font-bold">{activeNode.data.size}</div>
                                </div>
                                <div>
                                  <div className="text-[8px] text-slate-500 uppercase font-bold">Match</div>
                                  <div className="text-[10px] sm:text-xs font-bold text-emerald-400">{activeNode.data.match}</div>
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
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 550 550" aria-hidden="true">
              {inView && pulsatingNodes.map((node) => {
                const row = Math.floor(node.index / 6);
                const col = node.index % 6;
                
                // Proportional calculations for SVG coordinates
                const cellSize = 67.66;
                const padding = 32;
                const gap = 16;
                
                const targetX = padding + (col * cellSize) + (col * gap) + (cellSize / 2);
                const targetY = padding + (row * cellSize) + (row * gap) + (cellSize / 2);

                return (
                  <g key={`beam-${node.id}`}>
                    <line 
                      x1="275" y1="275" 
                      x2={targetX} y2={targetY} 
                      stroke="rgba(56,117,246,0.15)" 
                      strokeWidth="1"
                    />
                    <circle r="2.5" fill="#3875F6" className="animate-beam-pulse">
                      <animateMotion 
                        dur={`${node.duration}s`} 
                        repeatCount="indefinite"
                        path={`M 275 275 L ${targetX} ${targetY}`}
                      />
                      <animate 
                        attributeName="opacity" 
                        values="0;1;0" 
                        dur={`${node.duration}s`} 
                        repeatCount="indefinite" 
                      />
                    </circle>
                  </g>
                );
              })}
            </svg>

            {/* Central Precision Lens - Minimized */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <div className="relative size-24 sm:size-32 lg:size-40 magic-border shadow-2xl" style={{ "--magic-radius": "9999px" } as React.CSSProperties}>
                <div className="absolute inset-2 sm:inset-4 lg:inset-6 bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-md rounded-full border border-white shadow-2xl flex flex-col items-center justify-center">
                  <div className="relative">
                    <img 
                      src="/logo.svg" 
                      alt="DemandSense Logo" 
                      className="size-8 sm:size-10 lg:size-12 animate-pulse duration-[2000ms]" 
                    />
                    <div className="absolute inset-0 border-2 border-blue-400 rounded-full animate-ping opacity-20" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right: Content (Swapped) */}
        <div className="lg:col-span-5 space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left">
          <div className={cn(
            "flex justify-center lg:justify-start transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={Database} text="Proprietary B2B Database" />
          </div>

          <h2 className={cn(
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Targeting with <span className="bg-gradient-to-r from-[#3875F6] to-[#60A5FA] bg-clip-text text-transparent">Verified Data</span>
          </h2>

          <p className={cn(
            "text-base text-gray-600 leading-relaxed transition-all duration-700 delay-200 max-w-2xl mx-auto lg:mx-0",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Don't rely on LinkedIn's broad matching. Audience Explorer gives you direct access to our database of 280M+ verified B2B profiles, ensuring 100% criteria accuracy.
          </p>

          {/* Intelligence Cards List - Matching Revenue Attribution Style */}
          <div className="space-y-3 max-w-xl mx-auto lg:mx-0">
            {[
              {
                title: "Access 280M+ verified B2B contacts",
                desc: "Direct access to high-fidelity professional profiles.",
                icon: Users,
                color: "blue"
              },
              {
                title: "Eliminate 30-40% irrelevant ad spend",
                desc: "Stop wasting budget on non-ICP broad matches.",
                icon: ShieldCheck,
                color: "emerald"
              },
              {
                title: "Sync directly to LinkedIn Campaign Manager",
                desc: "One-click audience activation and continuous sync.",
                icon: Zap,
                color: "orange"
              }
            ].map((item, i) => (
              <div 
                key={i}
                className={cn(
                  "group relative flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-white transition-all duration-500 hover:border-blue-200 hover:shadow-sm",
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                )}
                style={{ transitionDelay: `${(i * 150) + 400}ms` }}
              >
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110",
                  item.color === 'blue' ? "bg-blue-50 text-blue-600" :
                  item.color === 'orange' ? "bg-orange-50 text-orange-600" :
                  "bg-emerald-50 text-emerald-600"
                )}>
                  <item.icon className="size-4" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900">{item.title}</h4>
                  <p className="text-[10px] sm:text-xs text-gray-500 leading-tight">{item.desc}</p>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="size-3.5 text-blue-600" />
                </div>
              </div>
            ))}
          </div>

          <div className={cn(
            "pt-4 transition-all duration-700 delay-800 flex justify-center lg:justify-start",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <ButtonGroup 
              primaryLabel="Try It Now" 
              secondaryLabel="Read More"
              size="lg"
            />
          </div>
        </div>

      </div>

      <style>{`
        @keyframes beam-pulse {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        .animate-beam-pulse {
          animation: beam-pulse linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AudienceExplorerSection;