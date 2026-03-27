"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Target } from "lucide-react";
import SectionBadge from "./SectionBadge";

const RadarSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="w-full bg-slate-50 px-6 py-24 lg:py-40 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto text-center space-y-8">
        <div className={cn(
          "flex justify-center transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <SectionBadge icon={Target} text="Intent Radar" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Real-time <span className="text-blue-600">Intent Detection</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Our radar technology scans millions of signals to identify high-intent accounts before they even reach out.
        </p>
        <div className="relative h-[400px] w-full max-w-3xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-inner flex items-center justify-center">
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           <div className="size-64 rounded-full border-2 border-blue-100 animate-ping opacity-20" />
           <Target className="size-12 text-blue-600 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default RadarSection;