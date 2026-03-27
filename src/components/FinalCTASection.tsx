"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { CheckCircle2, ArrowRight, Zap, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/SectionBadge";

const FinalCTASection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });

  const benefits = [
    {
      label: "See real ICP engagement",
      body: "Know who's actually interacting with your ads and site.",
    },
    {
      label: "Improve campaigns with confidence",
      body: "Control delivery, targeting, frequency, and spend using real signals.",
    },
    {
      label: "Prove impact to pipeline",
      body: "Connect LinkedIn activity to pipeline and revenue, not just clicks.",
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
            "cta-card w-full rounded-[32px] px-8 md:px-16 py-20 md:py-24 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden border border-blue-100 shadow-xl",
            "transition-all duration-1000 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left: CTA Block */}
          <div className="flex-1 text-center lg:text-left relative z-10">
            <div className="flex justify-center lg:justify-start mb-8">
              <SectionBadge icon={Zap} text="GET A 30-DAY FREE TRIAL" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] mb-8 tracking-tight leading-[1.1]">
              Take control of whether your <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                LinkedIn ads are paying off
              </span>
            </h2>

            <div className="flex flex-col items-center lg:items-start gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button
                  variant="hero"
                  size="hero"
                  className="group shadow-xl shadow-blue-500/20 w-full sm:w-auto"
                  onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
                >
                  START FREE TRIAL
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="hero-outline"
                  size="hero"
                  className="w-full sm:w-auto"
                >
                  <Play className="mr-2 h-4 w-4 fill-current" />
                  Watch Demo
                </Button>
              </div>

              <p className="text-sm font-medium text-gray-500">
                30-day free trial.
              </p>
            </div>
          </div>

          {/* Right: Benefit List */}
          <div className="flex-1 w-full max-w-md relative z-10">
            <div className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-6 text-center lg:text-left">
              WHAT YOU'LL GET IN THE TRIAL:
            </div>
            
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className={cn(
                    "group relative flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:border-blue-200 hover:shadow-md",
                    inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  )}
                  style={{ transitionDelay: `${(i + 1) * 150 + 400}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                    <CheckCircle2 className="size-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-gray-900">{benefit.label}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{benefit.body}</p>
                  </div>
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