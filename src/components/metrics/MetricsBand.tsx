"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Database, CheckCircle2, Target, Zap, RefreshCw } from "lucide-react";
import SectionBadge from "../SectionBadge";

const DEFAULT_ITEMS = [
  { 
    value: "280M+", 
    caption: "Verified B2B profiles powering our proprietary identity graph." 
  },
  { 
    value: "40%", 
    caption: "Average reduction in wasted LinkedIn ad spend via smart scheduling." 
  },
  { 
    value: "60B", 
    caption: "Behavioral intent signals scanned every week for real-time targeting." 
  },
  { 
    value: "5.8x", 
    caption: "Average ROAS improvement proven through multi-touch attribution." 
  },
];

const FEATURES = [
  {
    title: "4,000+ B2B TARGETING FILTERS",
    desc: "Go beyond LinkedIn's limitations to reduce wasted ad spend.",
    icon: Target,
    color: "blue"
  },
  {
    title: "ELIMINATE 30-40% AD SPEND",
    desc: "Stop wasting budget on non-ICP broad matches.",
    icon: Zap,
    color: "orange"
  },
  {
    title: "SYNC TO LINKEDIN CAMPAIGN MANAGER",
    desc: "Removes manual uploads and constant audience updates.",
    icon: RefreshCw,
    color: "emerald"
  }
];

const MetricsBand: React.FC<{ id?: string; className?: string }> = ({ id = "audience-graph", className }) => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });

  return (
    <section id={id} ref={ref} className={cn("relative w-full bg-gradient-to-b from-gray-50 to-white border-t border-b border-gray-200", className)}>
      <div className="max-w-[1216px] mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <div className={cn(
            "flex justify-center transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={Database} text="PROPRIETARY B2B DATABASE" />
          </div>

          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-8 mb-12 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Finally, a reliable way to prove <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">LinkedIn ads ROI for B2B companies</span>
          </h2>

          {/* New Feature List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-20">
            {FEATURES.map((item, i) => (
              <div 
                key={i}
                className={cn(
                  "group relative flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm transition-all duration-500 hover:border-blue-200 hover:shadow-sm",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${(i * 150) + 300}ms` }}
              >
                <div className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110",
                  item.color === 'blue' ? "bg-blue-50 text-blue-600" :
                  item.color === 'orange' ? "bg-orange-50 text-orange-600" :
                  "bg-emerald-50 text-emerald-600"
                )}>
                  <item.icon className="size-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-tight mt-0.5">{item.desc}</p>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="size-4 text-blue-600" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Existing Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0" role="list">
          {DEFAULT_ITEMS.map((item, index) => (
            <div key={index} className={cn(
              "relative flex flex-col items-center text-center px-6 py-4 transition-all duration-500",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              "lg:border-r lg:border-gray-200 lg:last:border-r-0"
            )} style={{ transitionDelay: inView ? `${index * 100 + 800}ms` : "0ms" }}>
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 tracking-tight">{item.value}</div>
              <p className="text-sm md:text-base leading-relaxed text-gray-600 max-w-[280px]">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(MetricsBand);