"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionBadge from "./SectionBadge";

const FinalCTASection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });

  const benefits = [
    {
      label: "See real ICP engagement",
      body: "Know who's actually interacting with your ads and site."
    },
    {
      label: "Improve campaigns with confidence",
      body: "Control delivery, targeting, frequency, and spend using real signals."
    },
    {
      label: "Prove impact to pipeline",
      body: "Connect LinkedIn activity to pipeline and revenue, not just clicks."
    }
  ];

  return (
    <section
      ref={ref}
      className="w-full bg-white px-6 md:px-[112px] py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1216px] mx-auto">
        <div
          className={cn(
            "cta-card w-full rounded-[32px] px-8 md:px-16 py-20 md:py-24 flex flex-col lg:flex-row items-center lg:items-start gap-16 relative overflow-hidden border border-blue-100 shadow-xl bg-white",
            "transition-all duration-1000 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left relative z-10">
            <div className="flex justify-center lg:justify-start mb-8">
              <SectionBadge icon={Zap} text="GET A 30-DAY FREE TRIAL" />
            </div>

            <h2 className="text-4xl md:text-[45px] font-bold text-gray-900 mb-8 tracking-tight leading-[1.1]">
              Take control of whether your <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                LinkedIn ads are paying off
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-4">
              <Button
                variant="hero"
                size="hero"
                className="group shadow-xl shadow-blue-500/20 w-full sm:w-auto"
                asChild
              >
                <Link to="/get-started">
                  START FREE TRIAL
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="hero"
                className="w-full sm:w-auto border-gray-200 text-gray-900 hover:bg-gray-50"
                asChild
              >
                <Link to="/demo">Watch Demo</Link>
              </Button>
            </div>
            <p className="text-sm text-gray-500 font-medium">30-day free trial.</p>
          </div>

          {/* Right Content - Benefits */}
          <div className="flex-1 w-full max-w-md relative z-10">
            <div className="mb-6">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                WHAT YOU'LL GET IN THE TRIAL:
              </span>
            </div>
            <div className="space-y-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 p-1.5 bg-blue-50 rounded-lg text-blue-600 flex-shrink-0">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">{benefit.label}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.body}</p>
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