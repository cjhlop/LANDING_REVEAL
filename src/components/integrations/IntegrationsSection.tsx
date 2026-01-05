import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Zap, Database, Share2, ShieldCheck, Webhook as WebhookIcon, Linkedin, Chrome, Facebook } from "lucide-react";
import SectionBadge from "../SectionBadge";

const PLATFORMS = [
  { name: "LinkedIn", icon: Linkedin, color: "#0A66C2" },
  { 
    name: "Salesforce", 
    logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg", 
    color: "#00A1E0" 
  },
  { 
    name: "HubSpot", 
    logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg", 
    color: "#FF7A59" 
  },
  { name: "Google", icon: Chrome, color: "#4285F4" },
  { name: "Meta", icon: Facebook, color: "#0668E1" },
  { name: "Webhook", icon: WebhookIcon, color: "#96C24E" },
];

const IntegrationsSection: React.FC<{ className?: string }> = ({ className }) => {
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.3 });
  const [diagramRef, diagramInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.15 });
  
  const [isPulsing, setIsPulsing] = React.useState(false);

  React.useEffect(() => {
    if (!diagramInView) return;
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, [diagramInView]);

  return (
    <section className={cn("relative w-full bg-white px-6 md:px-[112px] py-24 lg:py-32 overflow-hidden", className)}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1216px] mx-auto relative z-10">
        <div ref={headerRef} className="text-center mb-20">
          <div className={cn(
            "flex justify-center transition-all duration-700",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={Zap} text="Ecosystem" />
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
            Connect your entire marketing stack. DemandSense unifies data from LinkedIn, CRM, and ad platforms in a seamless bi-directional flow.
          </p>
        </div>

        <div 
          ref={diagramRef} 
          className={cn(
            "relative transition-all duration-1000 ease-out", 
            diagramInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <div className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center">
            
            {/* Central Hub */}
            <div className="relative z-30">
              <div className="magic-border p-1" style={{ "--magic-radius": "2rem" } as React.CSSProperties}>
                <div className="bg-white rounded-[inherit] p-6 md:p-10 shadow-2xl border border-blue-100 flex items-center justify-center relative">
                  <img src="/logo.svg" alt="DemandSense" className="w-12 h-12 md:w-16 md:h-16 relative z-10" />
                  <div className={cn(
                    "absolute inset-0 rounded-[inherit] bg-blue-400/20 blur-2xl transition-all duration-1000",
                    isPulsing ? "opacity-100 scale-150" : "opacity-0 scale-100"
                  )} />
                </div>
              </div>
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  Central Intelligence
                </span>
              </div>
            </div>

            {/* Platforms and CSS Paths */}
            {PLATFORMS.map((platform, index) => {
              const angle = (index / PLATFORMS.length) * 2 * Math.PI - Math.PI / 2;
              const radius = window.innerWidth < 768 ? 160 : 280;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              const rotationDeg = (angle * 180) / Math.PI;

              return (
                <React.Fragment key={platform.name}>
                  {/* Bi-directional CSS Paths */}
                  <div 
                    className="absolute top-1/2 left-1/2 w-[280px] h-[100px] pointer-events-none z-10 origin-left hidden md:block"
                    style={{ 
                      transform: `translateY(-50%) rotate(${rotationDeg}deg)`,
                      width: `${radius}px`
                    }}
                  >
                    {/* Outbound Path (Blue) */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div 
                        className="absolute top-[-50%] left-0 w-full h-[200%] border-[2px] border-blue-400/20 rounded-[50%] transition-opacity duration-1000"
                        style={{ 
                          clipPath: 'inset(50% 0 0 0)',
                          opacity: diagramInView ? 1 : 0
                        }}
                      />
                      {diagramInView && (
                        <div 
                          className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"
                          style={{
                            offsetPath: `path('M 0 50 Q ${radius/2} 100 ${radius} 50')`,
                            animation: `moveParticle 3s infinite linear`,
                            animationDelay: `${index * 0.5}s`
                          }}
                        />
                      )}
                    </div>

                    {/* Inbound Path (Orange) */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div 
                        className="absolute top-[-50%] left-0 w-full h-[200%] border-[2px] border-orange-400/20 rounded-[50%] transition-opacity duration-1000"
                        style={{ 
                          clipPath: 'inset(0 0 50% 0)',
                          opacity: diagramInView ? 1 : 0
                        }}
                      />
                      {diagramInView && (
                        <div 
                          className="absolute w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_#f97316]"
                          style={{
                            offsetPath: `path('M ${radius} 50 Q ${radius/2} 0 0 50')`,
                            animation: `moveParticle 3s infinite linear`,
                            animationDelay: `${index * 0.5 + 1.5}s`
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Platform Node */}
                  <div 
                    className="absolute z-20 group" 
                    style={{ 
                      left: "50%", 
                      top: "50%", 
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` 
                    }}
                  >
                    <div className="relative">
                      <div className={cn(
                        "bg-white rounded-2xl p-4 md:p-5 shadow-lg border border-gray-100 transition-all duration-500 group-hover:border-blue-200 group-hover:shadow-blue-500/10 group-hover:-translate-y-1 flex items-center justify-center",
                        isPulsing && "ring-4 ring-blue-500/5"
                      )}>
                        {platform.icon ? (
                          <platform.icon 
                            className="w-8 h-8 md:w-10 md:h-10 grayscale group-hover:grayscale-0 transition-all duration-500" 
                            style={{ color: platform.color }}
                          />
                        ) : (
                          <img 
                            src={platform.logo} 
                            alt={platform.name} 
                            className="w-8 h-8 md:w-10 md:h-10 grayscale group-hover:grayscale-0 transition-all duration-500" 
                          />
                        )}
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{platform.name}</span>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { icon: Database, title: "Real-time Sync", desc: "Data flows instantly between DemandSense and your CRM." },
            { icon: Share2, title: "Bi-directional", desc: "Push identified leads and pull campaign performance data." },
            { icon: ShieldCheck, title: "Secure & Compliant", desc: "Enterprise-grade encryption for all data transfers." }
          ].map((feature, i) => (
            <div 
              key={i} 
              className={cn(
                "flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50/50 border border-gray-100 transition-all duration-700",
                headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${600 + (i * 100)}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes moveParticle {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default React.memo(IntegrationsSection);