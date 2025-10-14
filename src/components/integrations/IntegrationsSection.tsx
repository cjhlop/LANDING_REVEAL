"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Zap } from "lucide-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

export type IntegrationsSectionProps = {
  className?: string;
};

type Platform = {
  name: string;
  logo: string;
  color: string;
};

const PLATFORMS: Platform[] = [
  {
    name: "LinkedIn",
    logo: "https://cdn.simpleicons.org/linkedin/0A66C2",
    color: "#0A66C2",
  },
  {
    name: "Salesforce",
    logo: "https://cdn.simpleicons.org/salesforce/00A1E0",
    color: "#00A1E0",
  },
  {
    name: "HubSpot",
    logo: "https://cdn.simpleicons.org/hubspot/FF7A59",
    color: "#FF7A59",
  },
  {
    name: "Google Ads",
    logo: "https://cdn.simpleicons.org/googleads/4285F4",
    color: "#4285F4",
  },
  {
    name: "Meta",
    logo: "https://cdn.simpleicons.org/meta/0668E1",
    color: "#0668E1",
  },
  {
    name: "Marketo",
    logo: "https://cdn.simpleicons.org/adobeexperiencemanager/5C2D91",
    color: "#5C2D91",
  },
];

const IntegrationsSection: React.FC<IntegrationsSectionProps> = ({ className }) => {
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: "0px 0px -20% 0px",
  });

  const [diagramRef, diagramInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });

  const containerRef = React.useRef<HTMLDivElement>(null);
  const centerRef = React.useRef<HTMLDivElement>(null);
  const platformRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section
      className={cn("relative w-full bg-gradient-to-b from-white via-gray-50 to-white px-8 md:px-[112px] py-24 overflow-hidden", className)}
      role="region"
      aria-labelledby="integrations-heading"
    >
      {/* Subtle aurora background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1216px] mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm border border-blue-100">
            <Zap className="h-4 w-4" />
            Platform Integrations
          </div>

          {headerInView ? (
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight">
              One Platform.{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Infinite Possibilities
              </span>
            </h2>
          ) : (
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight opacity-0">
              One Platform. Infinite Possibilities
            </h2>
          )}

          <h2 id="integrations-heading" className="sr-only">
            Platform Integrations
          </h2>

          <p
            className={cn(
              "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-opacity duration-700",
              headerInView ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: headerInView ? "200ms" : "0ms" }}
          >
            Connect your entire marketing stack. DemandSense unifies data from LinkedIn, CRM, ad platforms, and more—giving you a complete view of your B2B pipeline.
          </p>
        </div>

        {/* Integration Diagram */}
        <div
          ref={diagramRef}
          className={cn(
            "relative transition-all duration-1000 ease-out",
            diagramInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <div
            ref={containerRef}
            className="relative w-full h-[600px] flex items-center justify-center"
          >
            {/* Center Hub - DemandSense */}
            <div
              ref={centerRef}
              className={cn(
                "absolute z-20 transition-all duration-700 ease-out",
                diagramInView ? "opacity-100 scale-100" : "opacity-0 scale-75"
              )}
              style={{ transitionDelay: diagramInView ? "400ms" : "0ms" }}
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                
                {/* Card */}
                <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-200/60 hover:shadow-blue-500/25 transition-all duration-300">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-lg">
                      <img src="/logo.svg" alt="DemandSense" className="w-10 h-10" />
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900">DemandSense</div>
                      <div className="text-sm text-gray-600">Central Hub</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Cards in Circle */}
            {PLATFORMS.map((platform, index) => {
              const angle = (index / PLATFORMS.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 250;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={platform.name}
                  ref={(el) => (platformRefs.current[index] = el)}
                  className={cn(
                    "absolute z-10 transition-all duration-700 ease-out",
                    diagramInView ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  )}
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    transitionDelay: diagramInView ? `${600 + index * 100}ms` : "0ms",
                  }}
                >
                  <div className="relative group">
                    {/* Glow effect */}
                    <div
                      className="absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                      style={{ backgroundColor: platform.color }}
                    />

                    {/* Card */}
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/60 hover:shadow-xl hover:border-gray-300 transition-all duration-300">
                      <div className="flex flex-col items-center gap-2">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center shadow-sm"
                          style={{ backgroundColor: `${platform.color}15` }}
                        >
                          <img
                            src={platform.logo}
                            alt={`${platform.name} logo`}
                            className="w-8 h-8"
                          />
                        </div>
                        <div className="text-sm font-medium text-gray-900 text-center">
                          {platform.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Animated Beams - SLOWER & SMOOTHER */}
            {diagramInView &&
              PLATFORMS.map((platform, index) => (
                <AnimatedBeam
                  key={`beam-${platform.name}`}
                  containerRef={containerRef}
                  fromRef={{ current: platformRefs.current[index] }}
                  toRef={centerRef}
                  curvature={0}
                  gradientStartColor={platform.color}
                  gradientStopColor="#3875F6"
                  duration={8}
                  delay={index * 0.8}
                  pathColor="rgba(156, 163, 175, 0.2)"
                  pathWidth={2}
                />
              ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className={cn(
            "mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ease-out",
            diagramInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: diagramInView ? "1200ms" : "0ms" }}
        >
          {[
            { value: "50+", label: "Native Integrations" },
            { value: "Real-time", label: "Data Synchronization" },
            { value: "5 min", label: "Average Setup Time" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(IntegrationsSection);