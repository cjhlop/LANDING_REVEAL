"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBadge from "../SectionBadge";

const FinalCTASection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });

  const benefits = [
    {
      title: "See real ICP engagement",
      desc: "Know who's actually interacting with your ads and site.",
    },
    {
      title: "Improve campaigns with confidence",
      desc: "Control delivery, targeting, frequency, and spend using real signals.",
    },
    {
      title: "Prove impact to pipeline",
      desc: "Connect LinkedIn activity to pipeline and revenue, not just clicks.",
    },
  ];

  return (
    <section
      ref={ref}
      className="w-full bg-white px-6 md:px-[112px] py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1216px] mx-auto">
        <div
          className={cn(
            "cta-card w-full rounded-[32px] px-8 md:px-16 py-20 md:py-24 flex flex-col items-center text-center relative overflow-hidden border border-blue-100 shadow-xl",
            "transition-all duration-1000 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="max-w-3xl mx-auto mb-16 relative z-10">
            <div className="flex justify-center mb-8">
              <SectionBadge icon={Zap} text="GET A 30-DAY FREE TRIAL" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F2043] mb-8 tracking-tight leading-[1.1]">
              Take control of whether your <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                LinkedIn ads are paying off
              </span>
            </h2>
          </div>

          {/* Actions */}
          <div className="flex flex-col items-center gap-6 mb-20 relative z-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="hero"
                size="hero"
                className="group shadow-xl shadow-blue-500/20"
                onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
              >
                START FREE TRIAL
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="hero-outline"
                size="hero"
              >
                Watch Demo
              </Button>
            </div>
            <p className="text-sm font-medium text-gray-500">
              30-day free trial.
            </p>
          </div>

          {/* Benefit List */}
          <div className="w-full max-w-5xl mx-auto pt-16 border-t border-blue-100/50 relative z-10">
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-10">
              WHAT YOU'LL GET IN THE TRIAL:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex flex-col items-center md:items-start text-center md:text-left group transition-all duration-500",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${(i + 1) * 150 + 500}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;