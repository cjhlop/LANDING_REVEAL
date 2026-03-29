"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { useNavigate } from "react-router-dom";
import { 
  CheckCircle2, 
  Zap,
  Eye,
  MousePointer2,
  Target
} from "lucide-react";
import SectionBadge from "./SectionBadge";
import ButtonGroup from "./ButtonGroup";

const AudienceExplorerSection = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });

  const features = [
    {
      title: "See which companies engage with your ads",
      desc: "Identify the companies interacting with your ads and which campaigns they respond to.",
      icon: MousePointer2,
      color: "blue"
    },
    {
      title: "See people and companies who visit your website",
      desc: "Connect ad engagement with website visits to understand interest.",
      icon: Eye,
      color: "orange"
    },
    {
      title: "Build audiences from real engagement",
      desc: "Turn engaged companies into audiences for your next campaigns.",
      icon: Target,
      color: "emerald"
    }
  ];

  return (
    <section 
      ref={ref}
      className="w-full bg-white px-6 sm:px-12 md:px-[112px] py-16 md:py-24 lg:py-40 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Content */}
        <div className="lg:col-span-5 space-y-6 md:space-y-8 order-1 text-center lg:text-left">
          <div className={cn(
            "flex justify-center lg:justify-start transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={Zap} text="EXPAND WHAT WORKS" />
          </div>

          <h2 className={cn(
            "text-[40px] font-bold text-gray-900 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Use engagement signals to reach companies showing intent
          </h2>

          <p className={cn(
            "text-base text-gray-600 leading-relaxed transition-all duration-700 delay-200 max-w-2xl mx-auto lg:mx-0",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            See which companies engage and use that to decide where to put more budget next. Connect ad activity with website visits and act on it.
          </p>

          <div className="space-y-3 max-w-xl mx-auto lg:mx-0">
            {features.map((item, i) => (
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
              onSecondaryClick={() => navigate("/website-visitors")}
              size="lg"
            />
          </div>
        </div>

        {/* Right: Image Visual */}
        <div className="lg:col-span-7 relative order-2">
          <div className={cn(
            "relative w-full transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            <div className="magic-border" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
              <div className="rounded-[inherit] border border-gray-200 bg-white shadow-2xl overflow-hidden">
                <img 
                  src="/src/assets/monitor-engagement.png" 
                  alt="Monitor Engagement Dashboard" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AudienceExplorerSection;