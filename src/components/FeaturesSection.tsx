"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  Zap, 
  Target, 
  BarChart3, 
  Users, 
  ShieldCheck, 
  Clock 
} from "lucide-react";
import SectionBadge from "./SectionBadge";

const FEATURES = [
  {
    title: "Smart Ad Scheduling",
    desc: "Run ads only when your audience is most active to reduce wasted spend.",
    icon: Clock,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Identity Resolution",
    desc: "Identify anonymous website visitors and their buying intent signals.",
    icon: Users,
    color: "text-orange-600",
    bg: "bg-orange-50"
  },
  {
    title: "Revenue Attribution",
    desc: "Track the full customer journey and measure true marketing ROI.",
    icon: BarChart3,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "Audience Intelligence",
    desc: "Build strategic audiences based on real engagement and firmographic data.",
    icon: Target,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    title: "Budget Guardrails",
    desc: "Prevent overspending with intelligent account-level budget limits.",
    icon: ShieldCheck,
    color: "text-red-600",
    bg: "bg-red-50"
  },
  {
    title: "AI Optimization",
    desc: "Automated campaign improvements powered by real-time intent data.",
    icon: Zap,
    color: "text-blue-600",
    bg: "bg-blue-50"
  }
];

const FeaturesSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      id="features"
      className="w-full bg-white px-6 md:px-[112px] py-24 lg:py-32 border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className={cn(
            "flex justify-center transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={Zap} text="Core Capabilities" />
          </div>

          <h2 className={cn(
            "text-4xl md:text-5xl font-bold text-gray-900 mt-8 mb-6 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Everything you need to <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">scale LinkedIn Ads</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <div 
              key={i}
              className={cn(
                "p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 group",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                feature.bg,
                feature.color
              )}>
                <feature.icon className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;