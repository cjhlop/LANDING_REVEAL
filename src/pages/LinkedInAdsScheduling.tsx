"use client";

import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import LogoTicker from "@/components/LogoTicker";
import SectionBadge from "@/components/SectionBadge";
import { cn } from "@/lib/utils";
import { Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const LinkedInAdsScheduling = () => {
  const [heroRef, heroInView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });

  return (
    <>
      <Helmet>
        <title>LinkedIn Ads Scheduling & Dayparting Automation | DemandSense</title>
        <meta
          name="description"
          content="Automate LinkedIn ad scheduling and dayparting to reduce wasted spend, improve conversion efficiency, and optimize B2B campaign performance."
        />
      </Helmet>

      <Navbar />

      <main className="bg-white overflow-x-hidden">
        {/* SECTION 1 — HERO */}
        <section
          ref={heroRef}
          className="relative w-full min-h-[60vh] flex flex-col pt-32 pb-4 bg-white"
        >
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#3875F6]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left: Copy */}
            <div className="space-y-8">
              <div className={cn(
                "transition-all duration-700",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                <SectionBadge icon={Clock} text="LinkedIn Ad Scheduling" />
              </div>

              <h1 className={cn(
                "text-4xl md:text-[45px] font-bold text-gray-900 tracking-tight leading-[1.15] transition-all duration-700 delay-100",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                LinkedIn Ads Scheduling & Dayparting Optimization
              </h1>

              <p className={cn(
                "text-lg text-gray-600 leading-relaxed max-w-xl transition-all duration-700 delay-200",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                Schedule LinkedIn ads by hour, day, and timezone so budget only runs when your buyers are active. <span className="font-bold text-gray-900">Stop paying for impressions at 3am</span> and put that ad spend on the hours that convert.
              </p>

              <div className={cn(
                "flex flex-col sm:flex-row items-center gap-6 transition-all duration-700 delay-400",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <Button
                  variant="hero"
                  size="hero"
                  className="w-full sm:w-auto"
                  onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
                >
                  Start Your 30-Day Free Trial
                </Button>
                <a
                  href="#how-it-works"
                  className="text-sm font-bold text-[#3875F6] hover:text-blue-700 transition-colors"
                >
                  See How It Works
                </a>
              </div>

              <p className={cn(
                "text-sm text-gray-500 transition-all duration-700 delay-500",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                Connect LinkedIn in minutes. No credit card to start.
              </p>
            </div>

            {/* Right: Screenshot Placeholder + Caption */}
            <div className={cn(
              "relative flex flex-col gap-4 transition-all duration-1000 delay-300",
              heroInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="magic-border h-full w-full" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
                  <div className="rounded-[inherit] border border-gray-200/80 shadow-2xl overflow-hidden bg-slate-900 ring-1 ring-black/5">
                    <div
                      className="relative w-full aspect-[16/10] flex items-center justify-center"
                      role="img"
                      aria-label="The scheduling configuration view: the hour/day grid where a user sets start and end times per weekday, with the timezone selector visible."
                    >
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                      <div className="relative z-10 text-center space-y-4 p-8">
                        <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto border border-blue-500/30">
                          <Calendar className="w-8 h-8 text-blue-400" />
                        </div>
                        <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                          The scheduling configuration view: the hour/day grid where a user sets start and end times per weekday, with the timezone selector visible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 italic">
                Set your schedule in minutes.
              </p>
            </div>
          </div>
        </section>

        <LogoTicker variant="dark" />

        {/* Remaining sections will be added below as provided */}
        <div id="how-it-works" />
      </main>

      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default LinkedInAdsScheduling;