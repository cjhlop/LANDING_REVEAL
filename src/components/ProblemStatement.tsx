"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { DollarSign, Target, BarChart3, AlertCircle } from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const PAIN_POINTS = [
  {
    icon: DollarSign,
    text: "$11 average CPC with no idea what's working",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Target,
    text: "Building the right audience takes 4 different tools",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: BarChart3,
    text: "Your CFO asks for ROI proof. You have... impressions.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
];

const ProblemStatement = () => {
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="w-full bg-white px-8 md:px-[112px] py-24 md:py-32 border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto">
        <div className="text-center mb-16">
          <div className={cn(
            "inline-flex items-center gap-2 bg-gray-50 text-gray-500 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-gray-100 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <AlertCircle className="h-4 w-4" />
            The Reality of B2B Marketing
          </div>
          
          <h2 className={cn(
            "text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            LinkedIn Ads are expensive. <br className="hidden md:block" />
            <span className="text-gray-400">Proving ROI is harder.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PAIN_POINTS.map((point, i) => (
            <div 
              key={i}
              className={cn(
                "p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-500",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-6",
                point.bg,
                point.color
              )}>
                <point.icon className="h-6 w-6" />
              </div>
              <p className="text-lg font-medium text-gray-900 leading-relaxed">
                "{point.text}"
              </p>
            </div>
          ))}
        </div>

        <div className={cn(
          "text-center transition-all duration-700 delay-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <p className="text-xl text-gray-600 font-medium">
            You need <span className="text-blue-600">Metadata-level results</span> without the Metadata budget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;