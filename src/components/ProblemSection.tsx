"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { AlertCircle, BarChart3, ShieldAlert, HelpCircle } from "lucide-react";
import SectionBadge from "./SectionBadge";

const PROBLEMS = [
  {
    icon: HelpCircle,
    title: "The 'Noise' Problem",
    description: "You're seeing activity — clicks, impressions, website visits — but you can't tell if it's your ICP reacting or just noise.",
    color: "blue"
  },
  {
    icon: ShieldAlert,
    title: "The 'Confidence' Gap",
    description: "Leadership asks 'Is LinkedIn working?' and you can't give a confident answer backed by real data.",
    color: "orange"
  },
  {
    icon: BarChart3,
    title: "The 'Waste' Leak",
    description: "You know you're wasting budget somewhere, but you can't pinpoint exactly where or on whom.",
    color: "emerald"
  }
];

const ProblemSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="w-full bg-white px-6 md:px-[112px] py-24 lg:py-32 border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className={cn(
            "flex justify-center transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={AlertCircle} text="The Challenge" />
          </div>

          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-8 mb-6 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Sound <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">familiar?</span>
          </h2>

          <p className={cn(
            "text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-200",
            inView ? "opacity-100" : "opacity-0"
          )}>
            You're getting clicks, impressions, and website traffic. But are your ICP actually reacting — or is it just noise?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {PROBLEMS.map((problem, i) => (
            <div 
              key={i}
              className={cn(
                "group relative p-8 rounded-3xl border border-gray-100 bg-gray-50/50 transition-all duration-700 hover:bg-white hover:shadow-xl hover:border-blue-100",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${(i * 150) + 300}ms` }}
            >
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                problem.color === 'blue' ? "bg-blue-100 text-blue-600" :
                problem.color === 'orange' ? "bg-orange-100 text-orange-600" :
                "bg-emerald-100 text-emerald-600"
              )}>
                <problem.icon className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className={cn(
          "mt-20 p-8 rounded-3xl bg-blue-50/50 border border-blue-100 text-center transition-all duration-1000 delay-700",
          inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          <p className="text-lg text-blue-900 font-medium max-w-3xl mx-auto leading-relaxed">
            Without knowing <strong>WHO</strong> is engaging, you can't tell if campaigns resonate with the right people or just burn budget on the wrong ones. And you can't prove ROI if the activity isn't coming from accounts that could actually buy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;