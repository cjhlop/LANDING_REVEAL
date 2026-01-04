import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Puzzle } from "lucide-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import SectionBadge from "../SectionBadge";

const PLATFORMS = [
  { name: "LinkedIn", logo: "https://cdn.simpleicons.org/linkedin/0A66C2", color: "#0A66C2" },
  { name: "Salesforce", logo: "https://cdn.simpleicons.org/salesforce/00A1E0", color: "#00A1E0" },
  { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot/FF7A59", color: "#FF7A59" },
  { name: "Google Ads", logo: "https://cdn.simpleicons.org/googleads/4285F4", color: "#4285F4" },
  { name: "Meta", logo: "https://cdn.simpleicons.org/meta/0668E1", color: "#0668E1" },
  { name: "Marketo", logo: "https://cdn.simpleicons.org/adobeexperiencemanager/5C2D91", color: "#5C2D91" },
];

const IntegrationsSection: React.FC<{ className?: string }> = ({ className }) => {
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.3 });
  const [diagramRef, diagramInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.15 });
  const containerRef = React.useRef<HTMLDivElement>(null);
  const centerRef = React.useRef<HTMLDivElement>(null);
  const platformRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className={cn("relative w-full bg-white px-8 md:px-[112px] py-32 overflow-hidden", className)}>
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1216px] mx-auto relative z-10">
        <div ref={headerRef} className="text-center mb-24">
          <div className={cn(
            "flex justify-center transition-all duration-700",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={Puzzle} text="Seamless Integrations" />
          </div>

          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-8 mb-6 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Connected to Your <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Entire Stack</span>
          </h2>

          <p className={cn(
            "text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed transition-opacity duration-700 delay-200",
            headerInView ? "opacity-100" : "opacity-0"
          )}>
            DemandSense acts as the central nervous system for your B2B data, syncing bi-directionally with the tools you already use.
          </p>
        </div>

        <div ref={diagramRef} className={cn("relative transition-all duration-1000 ease-out", diagramInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12")}>
          <div ref={containerRef} className="relative w-full h-[600px] flex items-center justify-center">
            
            {/* Central Hub */}
            <div ref={centerRef} className="relative z-20 flex h-28 w-28 items-center justify-center rounded-[2rem] bg-white shadow-2xl border border-gray-100 ring-4 ring-gray-50/50">
               {/* Inner Glow */}
               <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-50/50 to-transparent opacity-50" />
               <img src="/logo.svg" alt="DemandSense" className="w-14 h-14 relative z-10" />
               
               {/* Pulsing Rings */}
               <div className="absolute inset-0 -z-10 animate-ping rounded-[2rem] bg-blue-100/30 duration-[3000ms]" />
            </div>

            {/* Orbiting Platforms */}
            {PLATFORMS.map((platform, index) => {
              const angle = (index / PLATFORMS.length) * 2 * Math.PI - Math.PI / 2;
              // Increase radius slightly for more breathing room
              const radius = 280; 
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div 
                  key={platform.name} 
                  ref={(el) => (platformRefs.current[index] = el)} 
                  className="absolute z-10" 
                  style={{ 
                    left: "50%", 
                    top: "50%", 
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` 
                  }}
                >
                  <div className="group flex flex-col items-center gap-3">
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:border-blue-100">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <img src={platform.logo} alt={platform.name} className="w-10 h-10 relative z-10" />
                    </div>
                    <span className="absolute top-full mt-2 text-sm font-medium text-gray-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 pointer-events-none whitespace-nowrap bg-white px-2 py-1 rounded-md shadow-sm border border-gray-100">
                      {platform.name}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Beams */}
            {diagramInView && PLATFORMS.map((platform, index) => (
              <AnimatedBeam 
                key={index} 
                containerRef={containerRef} 
                fromRef={{ current: platformRefs.current[index] }} 
                toRef={centerRef} 
                duration={6} 
                delay={index * 0.4}
                pathColor="rgba(200, 200, 200, 0.3)"
                gradientStartColor={platform.color}
                gradientStopColor="#3875F6"
                strokeWidth={2}
              />
            ))}
          </div>
        </div>
      </div>
    <think>[REDACTED]</think></section>
  );
};

export default React.memo(IntegrationsSection);