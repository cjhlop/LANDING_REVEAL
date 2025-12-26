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
  Search,
  Target,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBadge from "./SectionBadge";

type RadarTarget = {
  id: number;
  x: number; // percentage
  y: number; // percentage
  type: 'session' | 'company' | 'person';
  label: string;
  icon: React.ElementType;
  color: string;
};

const TARGETS: RadarTarget[] = [
  { id: 1, x: 25, y: 30, type: 'session', label: 'Anonymous Session', icon: Globe, color: 'blue' },
  { id: 2, x: 70, y: 20, type: 'company', label: 'Stripe, Inc.', icon: Building2, color: 'orange' },
  { id: 3, x: 80, y: 65, type: 'person', label: 'Sarah Jenkins (VP)', icon: UserCheck, color: 'emerald' },
  { id: 4, x: 30, y: 75, type: 'company', label: 'Microsoft', icon: Building2, color: 'orange' },
  { id: 5, x: 55, y: 45, type: 'session', label: 'New Visit', icon: Activity, color: 'blue' },
];

const WebIDSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const [rotation, setRotation] = React.useState(0);

  // Sync rotation for detection logic
  React.useEffect(() => {
    if (!inView) return;
    let frame: number;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newRotation = (elapsed / 4000 * 360) % 360; // 4s per rotation
      setRotation(newRotation);
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
          <div className="relative w-full aspect-square max-w-[500px]">
            
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
                background: 'conic-gradient(from 0deg, transparent 0%, rgba(56,117,246,0.1) 95%, rgba(56,117,246,0.4) 100%)'
              }}
            >
              {/* Leading Edge Glow */}
              <div className="absolute top-0 left-1/2 w-1 h-1/2 bg-gradient-to-b from-blue-500 to-transparent origin-bottom" />
            </div>

            {/* Radar Targets */}
            {TARGETS.map((target) => {
              // Calculate angle of target relative to center
              const dx = target.x - 50;
              const dy = target.y - 50;
              let targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
              if (targetAngle < 0) targetAngle += 360;

              // Determine if sweep is passing over target
              // We use a small buffer to trigger the "hit"
              const diff = (rotation - targetAngle + 360) % 360;
              const isHit = diff < 15 && diff > 0;

              return (
                <div 
                  key={target.id}
                  className="absolute transition-opacity duration-[3000ms] ease-out"
                  style={{ 
                    left: `${target.x}%`, 
                    top: `${target.y}%`,
                    opacity: isHit ? 1 : 0.05, // Fade out after sweep passes
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="relative group cursor-default">
                    {/* Pulsing Circle */}
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                      target.color === 'blue' ? "bg-blue-50 border-blue-200 text-blue-600" :
                      target.color === 'orange' ? "bg-orange-50 border-orange-200 text-orange-600" :
                      "bg-emerald-50 border-emerald-200 text-emerald-600",
                      isHit && "scale-125 shadow-[0_0_20px_rgba(56,117,246,0.5)]"
                    )}>
                      <target.icon className="h-5 w-5" />
                    </div>

                    {/* Label - Only visible when hit or hovered */}
                    <div className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap transition-all duration-500",
                      isHit ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    )}>
                      <div className="bg-white/90 backdrop-blur-sm border border-gray-100 px-3 py-1 rounded-full shadow-sm">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-900">
                          {target.label}
                        </span>
                      </div>
                    </div>

                    {/* Ping Animation on Hit */}
                    {isHit && (
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