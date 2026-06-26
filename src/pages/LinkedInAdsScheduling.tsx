"use client";

import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import LogoTicker from "@/components/LogoTicker";
import SectionBadge from "@/components/SectionBadge";
import SchedulingAnalyticsSection from "@/components/linkedin-ads-scheduling/SchedulingAnalyticsSection";
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
  LayoutGrid,
  Settings2,
  Power,
  Layers,
  BarChart3,
  ArrowRight
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

const COMPARISON_ROWS = [
  {
    without: "Start and end dates only",
    with: "Schedule by the hour, day, and weekday"
  },
  {
    without: "Set up and update every campaign by hand",
    with: "Apply one schedule across many campaigns at once"
  },
  {
    without: "One schedule for every region",
    with: "Pick the timezone per campaign"
  },
  {
    without: "Ads keep running at full bid in off-hours",
    with: "Pause delivery in off-hours, or lower the bid on eligible campaigns"
  },
  {
    without: "No view of when your ads actually run",
    with: "See delivery and performance hour by hour"
  },
  {
    without: "No way to compare days",
    with: "Compare weekday and weekend delivery side by side"
  },
  {
    without: "Manage timing one campaign at a time",
    with: "Set scheduling rules once and reuse them"
  },
  {
    without: "Schedules sit static until you change them",
    with: "Adjust delivery as your performance data comes in"
  }
];

const HOW_IT_WORKS_STEPS = [
  {
    icon: Settings2,
    title: "Configure schedules",
    desc: "Set hours, days, and timezones per campaign, or apply one schedule to multiple campaigns at once with bulk scheduling."
  },
  {
    icon: Power,
    title: "Activate scheduling",
    desc: "Turn the rules on and delivery follows them automatically, with no manual pausing."
  },
  {
    icon: Pause,
    title: "Pause low-intent delivery",
    desc: "Ads stop during the windows you marked low-value and resume when your schedule says go."
  },
  {
    icon: Globe,
    title: "Optimize across time zones",
    desc: "Align delivery to where your audience actually is, so spend follows your buyers instead of the clock."
  },
  {
    icon: LayoutGrid,
    title: "Review delivery timelines",
    desc: "Check what ran when, see your estimated savings, and refine the schedule as you learn."
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
  const [ctaRef, ctaInView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });

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
        <section ref={fixRef as any}>
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

        {/* SECTION 4 — HOW IT WORKS (5-step setup) */}
        <section id="how-it-works" className="py-24 bg-white">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="flex justify-center mb-6">
                <SectionBadge icon={Layers} text="How It Works" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] mb-6 tracking-tight">
                Set your LinkedIn ads scheduling rules once. <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">DemandSense automates delivery timing.</span>
              </h2>
            </div>

            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {HOW_IT_WORKS_STEPS.map((step, i) => (
                  <div key={i} className="relative flex flex-col items-center text-center group">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300 z-10">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                          <step.icon className="h-6 w-6" />
                        </div>
                      </div>
                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0F2043] text-white text-xs font-bold flex items-center justify-center border-4 border-white shadow-sm">
                        {i + 1}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-[#0F2043] mb-3 uppercase tracking-tight">STEP {i + 1}</h3>
                    <h4 className="text-base font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center mt-16 text-gray-500 italic text-sm">
              Scheduling syncs within 24 hours of saving.
            </p>
          </div>
        </section>

        {/* SECTION 4.5 — SCHEDULING ANALYTICS */}
        <SchedulingAnalyticsSection />

        {/* SECTION 5 — CASE STUDIES */}
        <section className="py-24 px-6 md:px-[112px]">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex justify-center mb-6">
                <SectionBadge icon={BarChart3} text="Case Studies" />
              </div>
              <h2 className="text-4xl md:text-[45px] font-bold text-gray-900 mb-4 tracking-tight">
                How LinkedIn ad scheduling improves delivery efficiency
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Every test below ran the same way: turn on DemandSense ad scheduling, then measure delivery efficiency for two weeks. No targeting, creative, or budgets changes. Just running ads when the audience is active.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "SaaS Analytics company cuts CPC by 57% and Grows Impressions 44%",
                  metrics: ["CPC: -57.6%", "CPM: -45.5%", "Impressions: +44.2%"],
                  link: "/blog/linkedin-ad-scheduling-test-results"
                },
                {
                  title: "Mid-market financial services team drops CPC by 48% and lifts CTR by 8%",
                  metrics: ["CPC: -47.8%", "CPM: -43.3%", "Impressions: +54.9%", "CTR: +8.4%"],
                  link: "/blog/linkedin-ad-scheduling-test-results"
                },
                {
                  title: "Workplace management startup slashes CPM by 49% and reaches 44% more target accounts",
                  metrics: ["CPC: -27.1%", "CPM: -49.3%", "Impressions: +43.7%"],
                  link: "/blog/linkedin-ad-scheduling-test-results"
                },
                {
                  title: "B2B Marketing Agency cuts LinkedIn CPC by 56% and nearly doubles reach",
                  metrics: ["CPC: -56.1%", "CPM: -47.6%", "Impressions: +66.9%", "CTR: +19.8%"],
                  link: "/blog/linkedin-ad-scheduling-for-marketing-agency"
                }
              ].map((card, i) => (
                <Link key={i} to={card.link} className="block group">
                  <div className="bg-[#F5F9FF] p-8 rounded-2xl border border-blue-100 group-hover:border-blue-400 group-hover:bg-blue-50 transition-all h-full shadow-sm hover:shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">{card.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {card.metrics.map((metric, idx) => {
                        const colors = [
                          "bg-green-100 text-green-700 border-green-200",
                          "bg-blue-100 text-blue-700 border-blue-200",
                          "bg-indigo-100 text-indigo-700 border-blue-200",
                          "bg-violet-100 text-violet-700 border-violet-200"
                        ];
                        return (
                          <span 
                            key={idx} 
                            className={cn(
                              "px-3 py-1 rounded-full text-xs font-bold border",
                              colors[idx % colors.length]
                            )}
                          >
                            {metric}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <p className="text-center mt-12 text-gray-500 italic text-sm max-w-3xl mx-auto">
              When ads run only when your audience is active, costs drop and reach improves. Same budget, more of the right people, just better timing.
            </p>
          </div>
        </section>

        {/* SECTION 6 — NATIVE VS DEMANDSENSE COMPARISON */}
        <section className="py-24 px-6 md:px-[112px] bg-[#F5F9FF]">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="flex justify-center mb-6">
                <SectionBadge icon={Zap} text="NATIVE CONTROLS VS DEMANDSENSE" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                How DemandSense scheduling goes beyond native LinkedIn controls
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                LinkedIn offers basic scheduling capabilities, but modern B2B campaigns require more control over delivery timing, automation, and performance optimization.
              </p>
            </div>

            <div className="overflow-x-auto mb-12">
              <table className="w-full min-w-[600px] border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                <thead>
                  <tr className="bg-[#0F2043] text-white">
                    <th className="p-6 text-left font-semibold text-gray-300 w-1/2 border-r border-white/10">Without DemandSense</th>
                    <th className="p-6 text-left font-bold text-blue-400 w-1/2 text-lg">With DemandSense</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-6 text-gray-500 border-r border-gray-100">{row.without}</td>
                      <td className="p-6 text-gray-900 font-medium bg-blue-50/30">{row.with}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 max-w-4xl mx-auto text-center space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                DemandSense adds the delivery controls you can't set natively: hour-level scheduling, dayparting, per-campaign timezones, automatic pausing, and an hourly view of when your ads ran. You schedule once and delivery runs on your rules.
              </p>
              <div className="flex justify-center">
                <Button
                  variant="hero"
                  size="hero"
                  className="group"
                  onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
                >
                  Start Your 30-Day Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — FINAL CTA */}
        <section
          ref={ctaRef as any}
          className="w-full bg-white px-6 md:px-[112px] py-24 lg:py-32 overflow-hidden"
        >
          <div className="max-w-[1216px] mx-auto">
            <div
              className={cn(
                "cta-card w-full rounded-[32px] px-8 md:px-16 py-20 md:py-24 flex flex-col items-center text-center relative overflow-hidden border border-blue-100 shadow-xl",
                "transition-all duration-1000 ease-out",
                ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl mx-auto mb-16 relative z-10">
                <div className="flex justify-center mb-8">
                  <SectionBadge icon={Zap} text="GET A 30-DAY FREE TRIAL" />
                </div>

                <h2 className="text-4xl md:text-[45px] font-bold text-gray-900 mb-8 tracking-tight leading-[1.1]">
                  Put your LinkedIn ad budget on a schedule that matches{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    your buyers
                  </span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect your LinkedIn account, set your first schedule in minutes, and let DemandSense handle delivery timing from there. Most accounts see lower costs within the first two weeks.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <Button
                  variant="hero"
                  size="hero"
                  className="group shadow-xl shadow-blue-500/20"
                  onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
                >
                  Start Your 30-Day Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <a
                  href="https://www.demandsense.com/blog/linkedin-ad-scheduling-test-results"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-xl text-base font-semibold bg-white text-[#3875F6] border border-blue-200 hover:bg-blue-50 transition-colors"
                >
                  See Ad Scheduling Test Results
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default LinkedInAdsScheduling;