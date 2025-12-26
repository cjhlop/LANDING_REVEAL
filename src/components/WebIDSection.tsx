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
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBadge from "./SectionBadge";

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
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const [rotation, setRotation] = React.useState(0);
  // Track the last time each target was "hit" by the radar sweep
  const [lastHitTimes, setLastHitTimes] = React.useState<Record<number, number>>({});

  React.useEffect(() => {
    if (!inView) return;
    let frame: number;
    const startTime = Date.now();
    
    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const newRotation = (elapsed / 8000 * 360) % 360; 
      setRotation(newRotation);

      // Check for hits and update timestamps
      TARGETS.forEach(target => {
        const dx = target.x - 50;
        const dy = target.y - 50;
        let targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        if (targetAngle < 0) targetAngle += 360;

        const diff = (newRotation - targetAngle + 360) % 360;
        if (diff < 10 && diff > 0) {
          setLastHitTimes(prev => ({ ...prev, [target.id]: now }));
        }
      });

      frame = requestAnimationFrame(animate);
    };
    
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
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

        {/* Right: Military Radar Visual */}
        <div className="lg:col-span-7 relative flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-[550px]">
            
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

            {/* Radar Targets */}
            {TARGETS.map((target) => {
              const lastHit = lastHitTimes[target.id] || 0;
              const now = Date.now();
              const timeSinceHit = now - lastHit;
              
              // Logic: 
              // 1. If hit within last 4 seconds, opacity is 100%
              // 2. After 4 seconds, fade out over the next 10 seconds
              let opacity = 0.05;
              if (timeSinceHit < 4000) {
                opacity = 1;
              } else if (timeSinceHit < 14000) {
                opacity = 1 - ((timeSinceHit - 4000) / 10000);
                opacity = Math.max(opacity, 0.05);
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
                    transition: timeSinceHit < 100 ? 'none' : 'opacity 1000ms linear'
                  }}
                >
                  <div className="relative group cursor-pointer">
                    {/* Pulsing Circle */}
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500",
                      target.color === 'blue' ? "bg-blue-50 border-blue-200 text-blue-600" :
                      target.color === 'orange' ? "bg-orange-50 border-orange-200 text-orange-600" :
                      "bg-emerald-50 border-emerald-200 text-emerald-600",
                      timeSinceHit < 500 && "scale-125 shadow-[0_0_25px_rgba(56,117,246,0.5)]",
                      "group-hover:opacity-100 group-hover:scale-110 group-hover:shadow-lg"
                    )}>
                      <target.icon className="h-5 w-5" />
                    </div>

                    {/* Intelligence Card on Hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-50">
                      <div className="w-64 bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 shadow-2xl">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center shadow-lg",
                            target.color === 'blue' ? "bg-blue-500/20 text-blue-400" :
                            target.color === 'orange' ? "bg-orange-500/20 text-orange-400" :
                            "bg-emerald-500/20 text-emerald-400"
                          )}>
                            <target.icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="font-bold text-white text-sm truncate">{target.details.title}</div>
                            <div className="text-[10px] text-slate-400 font-medium truncate">{target.details.subtitle}</div>
                          </div>
                        </div>
                        
                        <div className="space-y-2 pt-2 border-t border-slate-800">
                          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                            <span className="text-slate-500">Status</span>
                            <span className={cn(
                              target.color === 'blue' ? "text-blue-400" :
                              target.color === 'orange' ? "text-orange-400" :
                              "text-emerald-400"
                            )}>{target.details.meta}</span>
                          </div>
                          
                          {target.details.score && (
                            <div className="space-y-1.5">
                              <div className="flex justify-between text-[9px] font-bold text-slate-500 uppercase">
                                <span>Intent Score</span>
                                <span className="text-emerald-400">{target.details.score}/100</span>
                              </div>
                              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500" style={{ width: `${target.details.score}%` }} />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-3 h-3 bg-slate-900 border-r border-b border-slate-700 rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2" />
                    </div>

                    {/* Ping Animation on Hit */}
                    {timeSinceHit < 500 && (
                      <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping" />
                    )}
                  </div>
                </div>
              );
            })}

            {/* Center Hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(56,117,246,0.5)] z-20">
              <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-50" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WebIDSection;