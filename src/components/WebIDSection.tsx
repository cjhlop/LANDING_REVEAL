"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { useNavigate } from "react-router-dom";
import { 
  ScanFace, 
  Building2, 
  UserCheck, 
  Fingerprint, 
  Globe, 
  Activity 
} from "lucide-react";
import SectionBadge from "./SectionBadge";
import ButtonGroup from "./ButtonGroup";

type RadarTarget = {
  id: number;
  x: number; 
  y: number; 
  type: 'session' | 'company' | 'person';
  label: string;
  icon: React.ElementType;
  color: 'blue' | 'orange' | 'emerald';
  details: {
    title: string;
    subtitle: string;
    meta?: string;
    score?: number;
  };
};

const TARGETS: RadarTarget[] = [
  { 
    id: 1, x: 25, y: 30, type: 'session', label: 'Anonymous Session', icon: Globe, color: 'blue',
    details: { title: 'Anonymous Visitor', subtitle: 'IP: 104.21.78.212', meta: 'San Francisco, CA' }
  },
  { 
    id: 2, x: 70, y: 20, type: 'company', label: 'Stripe, Inc.', icon: Building2, color: 'orange',
    details: { title: 'Stripe, Inc.', subtitle: 'Fintech • $10B+ Revenue', meta: 'High Intent Signal' }
  },
  { 
    id: 3, x: 80, y: 65, type: 'person', label: 'Sarah Jenkins (VP)', icon: UserCheck, color: 'emerald',
    details: { title: 'Sarah Jenkins', subtitle: 'VP of Marketing', meta: 'Verified Work Email', score: 98 }
  },
  { 
    id: 4, x: 30, y: 75, type: 'company', label: 'Microsoft', icon: Building2, color: 'orange',
    details: { title: 'Microsoft', subtitle: 'Enterprise Tech', meta: 'Pricing Page View' }
  },
  { 
    id: 5, x: 55, y: 45, type: 'session', label: 'New Visit', icon: Activity, color: 'blue',
    details: { title: 'New Session', subtitle: 'Direct Traffic', meta: 'London, UK' }
  },
];

const WebIDSection = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const [rotation, setRotation] = React.useState(0);
  const [hoveredId, setHoveredId] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!inView) return;
    let frame: number;
    const startTime = Date.now();
    
    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const newRotation = (elapsed / 8000 * 360) % 360; 
      setRotation(newRotation);
      frame = requestAnimationFrame(animate);
    };
    
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView]);

  return (
    <section 
      ref={ref}
      className="w-full bg-white px-6 sm:px-12 md:px-[112px] py-16 md:py-24 lg:py-40 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Content */}
        <div className="lg:col-span-5 space-y-6 md:space-y-8 text-center lg:text-left">
          <div className={cn(
            "flex justify-center lg:justify-start transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={ScanFace} text="WebID™ Technology" />
          </div>

          <h2 className={cn(
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Unmask the <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Invisible Pipeline</span>
          </h2>

          <p className={cn(
            "text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-200 max-w-2xl mx-auto lg:mx-0",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            98% of your website visitors leave without filling out a form. WebID™ uses our proprietary identity graph to reveal the exact people and companies researching you in real-time.
          </p>

          <div className={cn(
            "grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 delay-300 text-left",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <div className="space-y-2 p-4 rounded-2xl bg-gray-50/50 lg:bg-transparent">
              <div className="flex items-center gap-2 text-blue-600 font-bold">
                <Fingerprint className="h-5 w-5" />
                <span className="text-sm md:text-base">Individual ID</span>
              </div>
              <p className="text-xs md:text-sm text-gray-500">Names, titles, and verified work emails of your visitors.</p>
            </div>
            <div className="space-y-2 p-4 rounded-2xl bg-gray-50/50 lg:bg-transparent">
              <div className="flex items-center gap-2 text-orange-500 font-bold">
                <Building2 className="h-5 w-5" />
                <span className="text-sm md:text-base">Company Intel</span>
              </div>
              <p className="text-xs md:text-sm text-gray-500">Firmographic data, tech stacks, and revenue ranges.</p>
            </div>
          </div>

          <div className={cn(
            "pt-4 transition-all duration-700 delay-400 flex justify-center lg:justify-start",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <ButtonGroup 
              primaryLabel="Try It Now" 
              secondaryLabel="Read More"
              onSecondaryClick={() => navigate("/website-visitors")}
              size="lg"
            />
          </div>
        </div>

        {/* Right: Military Radar Visual with Magic Border */}
        <div className="lg:col-span-7 relative flex items-center justify-center mt-8 lg:mt-0">
          <div className={cn(
            "relative w-full aspect-square max-w-[320px] sm:max-w-[450px] lg:max-w-[550px] transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            {/* Layer 1: Background & Sweep (Clipped) */}
            <div className="magic-border h-full w-full" style={{ "--magic-radius": "9999px" } as React.CSSProperties}>
              <div className="h-full w-full bg-white rounded-[inherit] relative overflow-hidden">
                
                {/* Radar Background Rings */}
                <div className="absolute inset-0 rounded-full border border-blue-100" />
                <div className="absolute inset-[15%] rounded-full border border-blue-50/50" />
                <div className="absolute inset-[30%] rounded-full border border-blue-50/30" />
                <div className="absolute inset-[45%] rounded-full border border-blue-50/20" />
                
                {/* Crosshairs */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-blue-50" />
                <div className="absolute left-1/2 top-0 w-px h-full bg-blue-50" />

                {/* The Radar Sweep */}
                <div 
                  className="absolute inset-0 rounded-full z-10 pointer-events-none"
                  style={{ 
                    transform: `rotate(${rotation}deg)`,
                    background: 'conic-gradient(from 0deg, transparent 0%, rgba(56,117,246,0.03) 95%, rgba(56,117,246,0.25) 100%)'
                  }}
                >
                  <div className="absolute top-0 left-1/2 w-1 h-1/2 bg-gradient-to-b from-blue-500/40 to-transparent origin-bottom" />
                </div>
              </div>
            </div>

            {/* Layer 2: Targets & Tooltips (Unclipped) */}
            <div className="absolute inset-[3px] z-20 rounded-full">
              {TARGETS.map((target) => {
                const dx = target.x - 50;
                const dy = target.y - 50;
                let targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
                if (targetAngle < 0) targetAngle += 360;

                const diff = (rotation - targetAngle + 360) % 360;
                
                let opacity = 0;
                if (hoveredId === target.id) {
                  opacity = 1;
                } else if (diff < 180) {
                  opacity = 1 - (diff / 180);
                }

                return (
                  <div 
                    key={target.id}
                    className="absolute z-20"
                    style={{ 
                      left: `${target.x}%`, 
                      top: `${target.y}%`,
                      transform: 'translate(-50%, -50%)',
                      opacity: opacity,
                      transition: (diff < 5 || hoveredId === target.id) ? 'none' : 'opacity 150ms linear'
                    }}
                  >
                    <div 
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setHoveredId(target.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      {/* Pulsing Circle */}
                      <div className={cn(
                        "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500",
                        target.color === 'blue' ? "bg-blue-50 border-blue-200 text-blue-600" :
                        target.color === 'orange' ? "bg-orange-50 border-orange-200 text-orange-600" :
                        "bg-emerald-50 border-emerald-200 text-emerald-600",
                        (diff < 10 || hoveredId === target.id) && "scale-125 shadow-[0_0_25px_rgba(56,117,246,0.5)]",
                        "group-hover:scale-110 group-hover:shadow-lg"
                      )}>
                        <target.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>

                      {/* Intelligence Card on Hover/Hit */}
                      <div className={cn(
                        "absolute bottom-full left-1/2 -translate-x-1/2 mb-4 transition-all duration-300 pointer-events-none z-50",
                        hoveredId === target.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      )}>
                        <div className="w-48 sm:w-64 bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl">
                          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <div className={cn(
                              "w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg",
                              target.color === 'blue' ? "bg-blue-500/20 text-blue-400" :
                              target.color === 'orange' ? "bg-orange-500/20 text-orange-400" :
                              "bg-emerald-500/20 text-emerald-400"
                            )}>
                              <target.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                            </div>
                            <div className="min-w-0">
                              <div className="font-bold text-white text-xs sm:text-sm truncate">{target.details.title}</div>
                              <div className="text-[8px] sm:text-[10px] text-slate-400 font-medium truncate">{target.details.subtitle}</div>
                            </div>
                          </div>
                          
                          <div className="space-y-1.5 sm:space-y-2 pt-1.5 sm:pt-2 border-t border-slate-800">
                            <div className="flex items-center justify-between text-[8px] sm:text-[10px] font-bold uppercase tracking-wider">
                              <span className="text-slate-500">Status</span>
                              <span className={cn(
                                target.color === 'blue' ? "text-blue-400" :
                                target.color === 'orange' ? "text-orange-400" :
                                "text-emerald-400"
                              )}>{target.details.meta}</span>
                            </div>
                            
                            {target.details.score && (
                              <div className="space-y-1 sm:space-y-1.5">
                                <div className="flex justify-between text-[7px] sm:text-[9px] font-bold text-slate-500 uppercase">
                                  <span>Intent Score</span>
                                  <span className="text-emerald-400">{target.details.score}/100</span>
                                </div>
                                <div className="h-0.5 sm:h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                  <div className="h-full bg-emerald-500" style={{ width: `${target.details.score}%` }} />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="w-2 h-2 sm:w-3 h-3 bg-slate-900 border-r border-b border-slate-700 rotate-45 absolute -bottom-1 sm:-bottom-1.5 left-1/2 -translate-x-1/2" />
                      </div>

                      {/* Ping Animation on Hit */}
                      {diff < 10 && (
                        <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping" />
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Center Hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(56,117,246,0.5)] z-20">
                <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-50" />
              </div>
            </div>

          </div>
        </div>

      <think>[REDACTED]</think></div>
    </section>
  );
};

export default WebIDSection;