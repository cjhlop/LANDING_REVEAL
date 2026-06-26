"use client";

import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import LogoTicker from "@/components/LogoTicker";
import SectionBadge from "@/components/SectionBadge";
import { cn } from "@/lib/utils";
import { 
  Clock, 
  Calendar, 
  AlertCircle, 
  TrendingDown, 
  Globe, 
  PieChart, 
  Moon,
  Zap,
  Pause,
  TrendingUp,
  CheckCircle2,
  LayoutGrid
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const FIX_ROWS = [
  {
    badge: { icon: Calendar, text: "Custom Scheduling", variant: "blue" as const },
    title: "Schedule campaigns by hour, day, and timezone",
    body: "Custom ad scheduling down to the hour. Set start and end times per weekday and pick the timezone that matches your audience, so ads run at the specific times your buyers are active.",
    alt: "Scheduling configuration view showing the weekday hour grid with start and end times per day and the timezone selector.",
    icon: Calendar
  },
  {
    badge: { icon: Pause, text: "Auto-Pause", variant: "orange" as const },
    title: "Automatically pause campaigns during low-intent periods",
    body: "Ads stop when your audience isn't active and resume on schedule. No logging into Campaign Manager every hour to flip campaigns on and off by hand.",
    alt: "Automated pause interface showing campaigns toggling on and off based on the configured schedule.",
    icon: Pause
  },
  {
    badge: { icon: TrendingDown, text: "Bid Reduction", variant: "emerald" as const },
    title: "Reduce bids during low-conversion windows",
    body: "For eligible manual-bid campaigns, lower the bid in soft windows instead of pausing, so you stay present without overpaying. (Advanced option; see the FAQ for details.)",
    alt: "Bid reduction control showing the scheduling-method selector set to Bid Reduce with adjusted bid values per window.",
    icon: TrendingDown
  },
  {
    badge: { icon: TrendingUp, text: "Smart Pacing", variant: "purple" as const },
    title: "Prioritize high-performing delivery windows",
    body: "Concentrate budget on the days and times that actually drive pipeline. The same spend works harder when it lands in the windows that convert.",
    alt: "Delivery window prioritization view highlighting peak-performance hours with concentrated budget allocation.",
    icon: TrendingUp
  }
];

const FeatureScreenshot = ({ alt, icon: Icon }: { alt: string; icon: React.ElementType }) => (
  <div className="relative group">
    <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="magic-border h-full w-full" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
      <div className="rounded-[inherit] border border-gray-200/80 shadow-2xl overflow-hidden bg-slate-900 ring-1 ring-black/5">
        <div
          className="relative w-full aspect-[16/10] flex items-center justify-center"
          role="img"
          aria-label={alt}
        >
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <div className="relative z-10 text-center space-y-4 p-8">
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto border border-blue-500/30">
              <Icon className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
              {alt}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const LinkedInAdsScheduling = () => {
  const [heroRef, heroInView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });
  const [problemRef, problemInView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });
  const [fixRef, fixInView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });

  return (
    <>
      <Helmet>
        <title>LinkedIn Ads Scheduling & Dayparting Automation | DemandSense</title>
        <meta
          name="description"
          content="Automate LinkedIn ad scheduling and dayparting to reduce wasted spend, improve conversion efficiency, and optimize B2B campaign performance."
        />
        <style>{`
          @keyframes problem-fade-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .problem-animate {
            opacity: 0;
          }
          
          .is-visible .problem-animate {
            animation: problem-fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .trend-block {
            position: relative;
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            border-radius: 24px;
            background: #ffffff;
            border: 1px solid #f1f5f9;
          }
          
          @media (min-width: 1024px) {
            .trend-block:hover {
              transform: translateY(-12px);
              border-color: #3875F6;
              box-shadow: 0 40px 80px -20px rgba(56, 117, 246, 0.12);
            }
          }

          .trend-icon-wrapper {
            position: relative;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 14px;
            margin-bottom: 24px;
            overflow: hidden;
          }

          .trend-icon-bg {
            position: absolute;
            inset: 0;
            opacity: 0.1;
            transition: opacity 0.3s ease;
          }

          .trend-block:hover .trend-icon-bg {
            opacity: 0.2;
          }

          .trend-number {
            position: absolute;
            top: 24px;
            right: 24px;
            font-family: 'Inter', sans-serif;
            font-weight: 800;
            font-size: 32px;
            line-height: 1;
            color: #f1f5f9;
            transition: color 0.3s ease;
            pointer-events: none;
          }

          .trend-block:hover .trend-number {
            color: #eff6ff;
          }
        `}</style>
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

        {/* SECTION 2 — PROBLEM */}
        <section
          ref={problemRef as any}
          className={cn(
            "py-24 px-6 md:px-[112px] bg-white border-b border-gray-100",
            problemInView && "is-visible"
          )}
        >
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="problem-animate flex justify-center mb-6" style={{ animationDelay: '0ms' }}>
                <SectionBadge icon={AlertCircle} text="The Problem" />
              </div>
              <h2 className="problem-animate text-3xl md:text-[45px] font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]" style={{ animationDelay: '100ms' }}>
                Your LinkedIn campaigns waste budget in ways you can't see
              </h2>
              <p className="problem-animate text-lg text-gray-600 leading-relaxed" style={{ animationDelay: '200ms' }}>
                Campaigns run continuously by default. Without a way to schedule ads around when your audience is most likely to engage, your budget spreads evenly across every hour, including the ones that never produce a single conversion.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  title: "High-performing hours don't get prioritized",
                  body: "Your best windows get the same budget as your dead ones. The hours your target audience actually clicks compete for the same ad spend as 3am.",
                  icon: <TrendingDown className="w-6 h-6 text-blue-600" />,
                  color: "bg-blue-600"
                },
                {
                  title: "Global campaigns waste spend across time zones",
                  body: "One schedule runs all day everywhere. You pay to reach people while they sleep in time zones you don't even sell into.",
                  icon: <Globe className="w-6 h-6 text-orange-500" />,
                  color: "bg-orange-500"
                },
                {
                  title: "Budget gets distributed evenly instead of strategically",
                  body: "Even pacing spreads spend thin. Your daily budget can exhaust on low-intent windows before the high-intent days and times arrive.",
                  icon: <PieChart className="w-6 h-6 text-emerald-500" />,
                  color: "bg-emerald-500"
                },
                {
                  title: "Ads run during low-intent hours",
                  body: "Your campaign serves around the clock by default. So budget goes to 2am Saturday impressions when the buyers you want are only online 9am Tuesday.",
                  icon: <Moon className="w-6 h-6 text-purple-600" />,
                  color: "bg-purple-600"
                }
              ].map((card, i) => (
                <div key={i} className="problem-animate trend-block p-6 sm:p-8 lg:p-10" style={{ animationDelay: `${300 + (i * 150)}ms` }}>
                  <div className="trend-number">0{i + 1}</div>
                  <div className="trend-icon-wrapper">
                    <div className={cn("trend-icon-bg", card.color)}></div>
                    {card.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight">{card.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-base sm:text-lg">{card.body}</p>
                </div>
              ))}
            </div>

            <p className="problem-animate text-center text-lg text-gray-600 leading-relaxed mt-16 max-w-3xl mx-auto" style={{ animationDelay: '900ms' }}>
              You find out after the spend is gone, when you export the report.
            </p>
          </div>
        </section>

        {/* SECTION 3 — THE FIX (Zigzag feature rows) */}
        <section ref={fixRef as any} id="how-it-works">
          {/* Header block */}
          <div className="pt-24 pb-12 bg-white">
            <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
              <div className="text-center max-w-3xl mx-auto">
                <div className={cn(
                  "flex justify-center mb-8 transition-all duration-700",
                  fixInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                  <SectionBadge icon={Zap} text="The Fix" />
                </div>
                <h2 className={cn(
                  "text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight transition-all duration-700 delay-100",
                  fixInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                  Run LinkedIn ads only during <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">peak hours</span>
                </h2>
                <p className={cn(
                  "text-lg text-gray-600 leading-relaxed transition-all duration-700 delay-200",
                  fixInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                  Custom ad scheduling puts you in control of delivery timing. Set the rules once and your campaigns run on your schedule, not around the clock.
                </p>
              </div>
            </div>
          </div>

          {/* Zigzag rows */}
          {FIX_ROWS.map((row, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className={cn(
                  "py-24 px-6 md:px-[112px] border-b border-gray-100",
                  isEven ? "bg-white" : "bg-[#F5F9FF]"
                )}
              >
                <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                  {/* Copy: order-1 on mobile (above image), positioned per zigzag on desktop */}
                  <div className={cn(
                    "lg:col-span-6 space-y-8 order-1",
                    isEven ? "lg:order-1" : "lg:order-2"
                  )}>
                    <SectionBadge icon={row.badge.icon} text={row.badge.text} variant={row.badge.variant} />
                    <h3 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                      {row.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                      {row.body}
                    </p>
                  </div>

                  {/* Visual */}
                  <div className={cn(
                    "lg:col-span-6 order-2",
                    isEven ? "lg:order-2" : "lg:order-1"
                  )}>
                    <FeatureScreenshot alt={row.alt} icon={row.icon} />
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default LinkedInAdsScheduling;