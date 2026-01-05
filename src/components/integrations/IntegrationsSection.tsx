import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Zap } from "lucide-react";
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
    <section className={cn("relative w-full bg-gradient-to-b from-white via-gray-50 to-white px-8 md:px-[112px] py-24 overflow-hidden", className)}>
      <div className="max-w-[1216px] mx-auto relative z-10">
        <div ref={headerRef} className="text-center mb-20">
          <div className={cn(
            "flex justify-center transition-all duration-700",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={Zap} text="Platform Integrations" />
          </div>

          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-8 mb-6 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            One Platform. <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Infinite Possibilities</span>
          </h2>

          <p className={cn(
            "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-opacity duration-700 delay-200",
            headerInView ? "opacity-100" : "opacity-0"
          )}>
            Connect your entire marketing stack. DemandSense unifies data from LinkedIn, CRM, ad platforms, and more.
          </p>
        </div>

        <div ref={diagramRef} className={cn("relative transition-all duration-1000 ease-out", diagramInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12")}>
          <div ref={containerRef} className="relative w-full h-[600px] flex items-center justify-center">
            <div ref={centerRef} className="relative z-20 bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
              <img src="/logo.svg" alt="DemandSense" className="w-12 h-12" />
            </div>
            {PLATFORMS.map((platform, index) => {
              const angle = (index / PLATFORMS.length) * 2 * Math.PI - Math.PI / 2;
              const x = Math.cos(angle) * 250;
              const y = Math.sin(angle) * 250;
              return (
                <div key={platform.name} ref={(el) => (platformRefs.current[index] = el)} className="absolute z-10" style={{ left: "50%", top: "50%", transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}>
                  <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                    <img src={platform.logo} alt={platform.name} className="w-8 h-8" />
                  </div>
                </div>
              );
            })}
            {diagramInView && PLATFORMS.map((platform, index) => (
              <AnimatedBeam key={index} containerRef={containerRef} fromRef={{ current: platformRefs.current[index] }} toRef={centerRef} duration={8} delay={index * 0.8} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(IntegrationsSection);