"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import LogoTicker from "@/components/LogoTicker";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import { cn } from "@/lib/utils";
import { 
  Calendar,
  Clock,
  Target,
  AlertCircle,
  ShieldCheck,
  Users,
  BarChart3,
  Zap,
  HelpCircle,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { useInViewOnce } from "@/hooks/use-in-view-once";

// Re-using the animation component from the home page
const AdvancedSchedulingVisual = ({ active }: { active: boolean }) => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const [scanPos, setScanPos] = useState(0);
  
  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setScanPos(prev => (prev + 1) % 24);
    }, 400);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="w-full h-full flex flex-col bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
            <Clock className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Weekly Schedule</span>
            <span className="text-xs font-bold text-white">Peak Intent Targeting</span>
          </div>
        </div>
        <div className={cn(
          "flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 transition-all duration-500",
          active ? "opacity-100" : "opacity-0"
        )}>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] font-bold text-blue-400 uppercase">
            {scanPos >= 9 && scanPos <= 18 ? "Campaigns Active" : "Auto-Paused"}
          </span>
        </div>
      </div>
      
      <div className="flex-1 grid grid-cols-[25px_1fr] gap-4">
        <div className="flex flex-col justify-between text-[9px] font-bold text-slate-600 py-2">
          <span>00</span><span>06</span><span>12</span><span>18</span><span>23</span>
        </div>
        <div className="relative grid grid-cols-7 gap-1.5 h-full">
          {days.map((day, dayIdx) => (
            <div key={dayIdx} className="flex flex-col gap-1 h-full">
              <div className="text-[10px] font-bold text-slate-500 text-center mb-2">{day}</div>
              <div className="flex-1 flex flex-col gap-1">
                {[...Array(24)].map((_, hourIdx) => {
                  const isWeekend = dayIdx >= 5;
                  const isWorkHour = hourIdx >= 9 && hourIdx <= 18;
                  const isPeak = !isWeekend && isWorkHour;
                  const isScanning = hourIdx === scanPos;
                  return (
                    <div 
                      key={hourIdx}
                      className={cn(
                        "flex-1 rounded-sm transition-all duration-300",
                        isPeak ? "bg-blue-500/40" : "bg-slate-800/30",
                        isScanning && isPeak && "bg-blue-400 scale-x-110 shadow-[0_0_15px_rgba(56,117,246,0.5)]",
                        isScanning && !isPeak && "bg-slate-600",
                        !active && "opacity-0"
                      )}
                      style={{ transitionDelay: active ? `${(dayIdx * 20) + (hourIdx * 5)}ms` : '0ms' }}
                    />
                  );
                })}
              </div>
            </div>
          ))}
          <div 
            className="absolute left-0 right-0 h-px bg-blue-400/50 shadow-[0_0_20px_rgba(56,117,246,0.8)] z-20 pointer-events-none transition-all duration-400 ease-linear"
            style={{ top: `${(scanPos / 24) * 100 + 8}%`, opacity: active ? 1 : 0 }}
          />
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
        <div className="flex gap-6">
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-slate-500 uppercase">Efficiency</span>
            <span className="text-sm font-bold text-white">+38%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-slate-500 uppercase">Waste Reduced</span>
            <span className="text-sm font-bold text-emerald-400">-$2,400</span>
          </div>
        </div>
        <div className="text-[10px] font-mono text-slate-600">UTC-05:00 EST</div>
      </div>
    </div>
  );
};

const LinkedInAdsOptimizationPage = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I optimize LinkedIn Ads for better ROI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To optimize your LinkedIn ads, focus on three levers: scheduling, audience tuning, and frequency control. Use smart scheduling to run ads during high-engagement B2B hours, refine your targeting by excluding non-ICP companies, and set a frequency cap to prevent audience fatigue."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum audience size for LinkedIn Ads in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The technical minimum is 300 members. For effective optimization, most practitioners recommend 50,000 to 100,000 to give the algorithm enough data to learn."
        }
      },
      {
        "@type": "Question",
        "name": "How can I set a LinkedIn ads frequency cap?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Since LinkedIn doesn't offer a native manual frequency cap for most campaign types, you can use third-party tools like DemandSense. This allows you to set impression limits at the company level to protect your brand and budget."
        }
      },
      {
        "@type": "Question",
        "name": "What is a reasonable LinkedIn ads budget for a B2B startup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The minimum daily budget is $10, but most B2B teams find $3,000 to $5,000 per month provides enough data to distinguish real results from vanity metrics."
        }
      },
      {
        "@type": "Question",
        "name": "How do I retarget specific audiences with LinkedIn ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use the LinkedIn Insight Tag and Matched Audiences for native retargeting. DemandSense adds a layer by identifying companies visiting your website and syncing high-intent accounts to your LinkedIn audiences automatically."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>LinkedIn Ads Optimization & Smart Scheduling Tool | DemandSense</title>
        <meta name="description" content="Take control of your LinkedIn ad spend. Smart scheduling, account-level frequency capping, budget guardrails, and audience tuning — so you know every dollar reaches the right accounts." />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
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

      <main className="bg-white">
        {/* SECTION 1 — HERO */}
        <section className="pt-32 pb-20 px-6 md:px-[112px] w-full">
          <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-[55%] space-y-8">
              <div>
                <h1 className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest">
                  <Target className="w-3.5 h-3.5" />
                  LinkedIn Ads Optimization
                </h1>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
                Optimize LinkedIn Ads and Control Where Every Dollar Goes
              </h2>
              <div className="space-y-4">
                <p className="text-xl text-gray-600 leading-relaxed">
                  DemandSense shows you which companies your LinkedIn ads actually reach — and lets you control when they run, how often the same accounts see them, and who stays in your audience.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  LinkedIn ad optimization that goes beyond clicks to the companies behind them. The clearest answer to how to optimize LinkedIn ads around accounts you'd actually want to close.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/get-started">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/demo">Watch Demo</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-[45%] w-full flex flex-col gap-12">
              <div className="relative h-[450px] w-full">
                <AdvancedSchedulingVisual active={true} />
              </div>

              {/* Client Feedback Card */}
              <div className="bg-[#F5F9FF] rounded-2xl p-6 border border-blue-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="flex gap-4 items-start relative z-10">
                  <img 
                    src="/avatars/Jason Squires.jpg" 
                    alt="Jason Squires" 
                    className="w-16 h-16 rounded-lg object-cover border-2 border-white shadow-sm flex-shrink-0"
                  />
                  <div className="space-y-3">
                    <p className="text-[15px] leading-relaxed text-gray-800 italic">
                      “<span className="font-bold">It reduced my cost per lead by 60% the second I turned it on!</span> It’s literally been the difference between a campaign being incredibly successful, or burning a hole in my pocket.”
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-sm font-bold text-gray-900">Jason Squires,</span>
                      <span className="text-sm text-gray-600">Founder Of</span>
                      <div className="flex items-center font-bold text-gray-900 text-sm tracking-tight">
                        Project<span className="text-orange-500 relative">Scale<span className="absolute -top-1 -right-2 text-[10px] text-orange-400">↗</span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF TICKER */}
        <LogoTicker variant="dark" />

        {/* SECTION 2 — PROBLEM STATEMENT */}
        <section 
          ref={ref as any}
          className={cn(
            "py-24 px-6 md:px-[112px] bg-white border-b border-gray-100",
            inView && "is-visible"
          )}
        >
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="problem-animate flex justify-center mb-6" style={{ animationDelay: '0ms' }}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest shadow-sm">
                  <AlertCircle className="w-3.5 h-3.5" />
                  The Challenge
                </div>
              </div>
              <h2 className="problem-animate text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]" style={{ animationDelay: '100ms' }}>
                Your LinkedIn ad budget has <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">blind spots</span>
              </h2>
              <p className="problem-animate text-lg text-gray-600 leading-relaxed" style={{ animationDelay: '200ms' }}>
                Three things drain most LinkedIn ad budgets. None of them show up in your CTR.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Ads run when nobody's looking",
                  body: "There’s no native way to schedule ads by hour. So your campaigns serve impressions at 2am on a Saturday to the same people you want to reach at 9am on Tuesday.",
                  icon: <Clock className="w-6 h-6 text-blue-600" />,
                  color: "bg-blue-600"
                },
                {
                  title: "Same accounts keep seeing ads",
                  body: "Without account-level frequency controls, a small group of companies can consume the majority of your impressions. You pay for reach, but you’re really just saturating the same people.",
                  icon: <Target className="text-orange-500 w-6 h-6" />,
                  color: "bg-orange-500"
                },
                {
                  title: "Budget has no monthly off switch",
                  body: "You can see which companies clicked. But that data sits in one place while your targeting controls sit in another. By the time you act, you've already spent weeks on the wrong audiences.",
                  icon: <AlertCircle className="w-6 h-6 text-emerald-500" />,
                  color: "bg-emerald-500"
                }
              ].map((card, i) => (
                <div key={i} className="problem-animate trend-block p-8" style={{ animationDelay: `${300 + (i * 150)}ms` }}>
                  <div className="trend-number">0{i + 1}</div>
                  <div className="trend-icon-wrapper">
                    <div className={cn("trend-icon-bg", card.color)}></div>
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 whitespace-nowrap overflow-hidden text-ellipsis">{card.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>

            <div className="problem-animate mt-16 p-10 rounded-[32px] bg-slate-900 text-center relative overflow-hidden" style={{ animationDelay: '800ms' }}>
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <p className="text-lg sm:text-xl text-blue-100 font-medium max-w-3xl mx-auto leading-relaxed relative z-10">
                These aren’t unusual scenarios. If you run LinkedIn ads for a B2B company, you’ve probably dealt with all three this quarter.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — FEATURE: SMART SCHEDULING */}
        <section className="py-24 px-6 md:px-[112px]">
          <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest shadow-sm">
                  <Clock className="w-3.5 h-3.5" />
                  Smart Scheduling
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                  Budget optimization and frequency cap controls that stop ad waste automatically
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  DemandSense adds LinkedIn ad scheduling to your workflow, so you control exactly when your ads run, which hours get your budget, and when campaigns pause automatically.
                </p>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Set days, hours, and time zones to match your ICP's active windows",
                  "Automatically pause ads during low-intent periods",
                  "Shift budget to high-performance windows where your LinkedIn campaign optimization is most effective"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  A B2B marketing agency tested this by turning on scheduling and changing nothing else — same targeting, same creative, same budget. CPC dropped 56%. Impressions went up 67%.
                </p>
              </div>
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/get-started">Start Free Trial</Link>
              </Button>
            </div>
            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl border border-gray-200 shadow-xl overflow-hidden bg-white">
                <img 
                  src="/media/ads-scheduling.webp" 
                  alt="DemandSense LinkedIn Ad Scheduling Interface" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — FEATURE: BUDGET CONTROL */}
        <section className="py-24 px-6 md:px-[112px] bg-gray-50">
          <div className="max-w-[1216px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl border border-gray-200 shadow-xl overflow-hidden bg-white">
                <img 
                  src="/media/card3.png" 
                  alt="DemandSense LinkedIn Budget Control and Guardrails" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Frequency & Budget Control
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                  Budget Optimization and Frequency Cap Controls That Stop Waste Automatically
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Daily budgets give you a rough throttle, but they don't prevent monthly overspend across multiple campaigns. DemandSense provides the hard stop you need to stay on budget.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Set monthly caps at account and campaign-group level",
                  "Automatic pausing when spend hits your defined threshold",
                  "Group campaigns by purpose, region, or initiative for granular control",
                  "Auto-resume campaigns instantly when you increase a cap"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="font-bold text-gray-900">Most tools in this space alert you after the damage. DemandSense prevents it.</p>
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/get-started">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 5 — FEATURE: FREQUENCY CAPPING */}
        <section className="py-24 px-6 md:px-[112px]">
          <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest shadow-sm">
                  <Users className="w-3.5 h-3.5" />
                  Frequency Capping
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tight">
                  STOP AD FATIGUE BEFORE IT STARTS
                </h2>
                <p className="text-xl font-bold text-gray-900 leading-tight">
                  Account-level frequency caps to ensure broad reach
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Don't let a handful of companies consume your entire budget. DemandSense ensures your message reaches your whole target list, not just the same few people repeatedly.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Set impression and click thresholds per company",
                  "Automatically shift budget to under-exposed accounts",
                  "Prevent over-saturation of high-intent companies",
                  "Exclude existing customers from seeing redundant ads"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/get-started">Start Free Trial</Link>
              </Button>
            </div>
            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl border border-gray-200 shadow-xl overflow-hidden bg-white">
                <img 
                  src="/media/frequency-cap.webp" 
                  alt="DemandSense LinkedIn Account-Level Frequency Capping" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — FEATURE: AUDIENCE TUNING */}
        <section className="py-24 px-6 md:px-[112px] bg-gray-50">
          <div className="max-w-[1216px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl border border-gray-200 shadow-xl overflow-hidden bg-white">
                <img 
                  src="/media/audience-tuning.webp" 
                  alt="DemandSense LinkedIn Audience Tuning and Exclusions" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest shadow-sm">
                  <Target className="w-3.5 h-3.5" />
                  Audience Tuning
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tight">
                  TUNE TARGETING FROM A SINGLE SCREEN
                </h2>
                <p className="text-xl font-bold text-gray-900 leading-tight">
                  See which companies engage and optimize in real-time
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Stop guessing who's clicking your ads. DemandSense gives you deep visibility into account engagement and the tools to act on it instantly.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Track 2,000+ companies interacting with your ads",
                  "Sort by impressions, clicks, or conversions to find fit",
                  "One-click exclusions for accounts that don't match your ICP",
                  "No CSV exports or manual list uploads required"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/get-started">Start Free Trial</Link>
                </Button>
                <Link to="/audience-tuning" className="block text-blue-600 font-medium hover:underline">
                  Learn more about Audience Tuning →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — CASE STUDIES */}
        <section className="py-24 px-6 md:px-[112px]">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest shadow-sm">
                  <BarChart3 className="w-3.5 h-3.5" />
                  Case Studies
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What happens when you turn on scheduling and change nothing else</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Every test below followed the same protocol: enable DemandSense scheduling, keep the same targeting, same creative, same budget. Measure for two weeks.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Software Company",
                  meta: "501–1,000 employees · 2-week test",
                  metrics: "CPC: -57.6% · CPM: -45.5% · Impressions: +44.2%",
                  link: "/blog/linkedin-ad-scheduling-test-results"
                },
                {
                  title: "Private Lending / Financial Services",
                  meta: "51–200 employees · 2-week test",
                  metrics: "CPC: -47.8% · CPM: -43.3% · Impressions: +54.9% · CTR: +8.4%",
                  link: "/blog/linkedin-ad-scheduling-test-results"
                },
                {
                  title: "Workplace Management Platform",
                  meta: "51–200 employees · 2-week test",
                  metrics: "CPC: -27.1% · CPM: -49.3% · Impressions: +43.7%",
                  link: "/blog/linkedin-ad-scheduling-test-results"
                },
                {
                  title: "B2B Marketing Agency",
                  meta: "51–200 employees · 2-week test",
                  metrics: "CPC: -56.1% · CPM: -47.6% · Impressions: +66.9% · CTR: +19.8%",
                  link: "/blog/linkedin-ad-scheduling-for-marketing-agency"
                }
              ].map((card, i) => (
                <Link key={i} to={card.link} className="block group">
                  <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 group-hover:border-blue-200 transition-all">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-500 mb-6">{card.meta}</p>
                    <p className="text-lg font-bold text-emerald-600 tracking-tight">
                      {card.metrics}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <p className="text-center mt-12 text-gray-500 italic text-sm max-w-3xl mx-auto">
              When your ads only run during hours your audience is active, the algorithm rewards you with lower costs and better distribution. These numbers reflect that — and they come from scheduling alone, before adding frequency capping or audience tuning.
            </p>
          </div>
        </section>

        {/* SECTION 8 — TESTIMONIALS */}
        <TestimonialSection className="bg-gray-50 py-24" />

        {/* SECTION 9 — COMPETITOR COMPARISON */}
        <section className="py-24 px-6 md:px-[112px]">
          <div className="max-w-[1216px] mx-auto">
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest shadow-sm">
                <Zap className="w-3.5 h-3.5" />
                Comparison
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">How DemandSense compares</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-6 font-bold text-gray-900">Capability</th>
                    <th className="p-6 font-bold text-blue-600 bg-blue-50/50">DemandSense</th>
                    <th className="p-6 font-bold text-gray-600">Linklo</th>
                    <th className="p-6 font-bold text-gray-600">Campainless</th>
                    <th className="p-6 font-bold text-gray-600">Fibbler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { cap: "Ad Scheduling / Dayparting", ds: "✓ Full", l: "✓ Full", c: "✓ Basic", f: "—" },
                    { cap: "Monthly Budget Caps (enforced)", ds: "✓ Auto-pause", l: "◐ Alerts only", c: "◐ Tracking only", f: "—" },
                    { cap: "Account-Level Frequency Cap", ds: "✓", l: "◐ Indirect", c: "—", f: "—" },
                    { cap: "Company Engagement Visibility", ds: "✓ 2,000+ co’s", l: "—", c: "◐ Demo alerts", f: "✓" },
                    { cap: "Audience Tuning (exclude/expand)", ds: "✓ One-click", l: "◐ Rule-based", c: "—", f: "—" },
                    { cap: "CRM Integration", ds: "✓ HubSpot + SF", l: "—", c: "—", f: "✓" },
                    { cap: "Self-Serve Trial", ds: "✓ Instant", l: "✓", c: "Waitlist", f: "✓" },
                    { cap: "Starting Price", ds: "$99/mo", l: "Not public", c: "$49/mo", f: "Not public" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="p-6 text-sm font-medium text-gray-900">{row.cap}</td>
                      <td className="p-6 text-sm font-bold text-blue-700 bg-blue-50/30">{row.ds}</td>
                      <td className="p-6 text-sm text-gray-600">{row.l}</td>
                      <td className="p-6 text-sm text-gray-600">{row.c}</td>
                      <td className="p-6 text-sm text-gray-600">{row.f}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-12 max-w-4xl mx-auto text-center space-y-6">
              <p className="text-gray-600 leading-relaxed">
                DemandSense is the only tool that covers all four delivery controls — scheduling, budget guardrails, frequency capping, and audience tuning — alongside company-level engagement visibility. Tools like Linklo and Campainless optimize delivery timing but don’t show you who your ads reached. Attribution tools like Fibbler show engagement but don’t give you the controls to act on it.
              </p>
              <Link to="/pricing" className="inline-flex items-center text-blue-600 font-bold hover:underline">
                See pricing details →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 10 — FAQ */}
        <section className="py-24 px-6 md:px-[112px] bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest shadow-sm">
                <HelpCircle className="w-3.5 h-3.5" />
                FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Common questions about LinkedIn ads optimization</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1" className="border-gray-200">
                <AccordionTrigger className="text-left font-bold text-gray-900 py-6">How do I optimize LinkedIn Ads for better ROI?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  To optimize your LinkedIn ads, focus on three levers: scheduling, audience tuning, and frequency control. Use smart scheduling to run ads during high-engagement B2B hours, refine your targeting by excluding non-ICP companies, and set a frequency cap to prevent audience fatigue.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2" className="border-gray-200">
                <AccordionTrigger className="text-left font-bold text-gray-900 py-6">What is the minimum audience size for LinkedIn Ads in 2026?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  The technical minimum to launch a campaign is 300 members. But the algorithm needs a larger pool to optimize effectively — most practitioners recommend 50,000 to 100,000. Smaller audiences can work if you’re running highly targeted ABM campaigns, but expect higher CPMs and slower learning.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3" className="border-gray-200">
                <AccordionTrigger className="text-left font-bold text-gray-900 py-6">How can I set a frequency cap on LinkedIn?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  Since LinkedIn doesn't offer a native manual frequency cap for most campaign types, you can use third-party tools like DemandSense. This allows you to set impression limits at the company level to protect your brand and budget.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4" className="border-gray-200">
                <AccordionTrigger className="text-left font-bold text-gray-900 py-6">What’s a reasonable LinkedIn ads budget for a B2B startup?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  The minimum daily budget is $10, but most B2B teams find $3,000–5,000 per month gives enough data to see what’s actually driving results versus what’s generating vanity metrics. Below that, you’re making optimization decisions on too little data.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5" className="border-gray-200">
                <AccordionTrigger className="text-left font-bold text-gray-900 py-6">How do I retarget specific audiences with LinkedIn ads?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  Start with the LinkedIn Insight Tag and Matched Audiences for native retargeting. DemandSense adds another layer: it identifies companies visiting your website and can sync high-intent accounts to your LinkedIn audiences automatically — so your retargeting pool includes people who showed interest but never filled out a form.
                  <div className="mt-4">
                    <Link to="/reveal-intent" className="text-blue-600 font-bold hover:underline">Learn more about visitor identification →</Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* SECTION 11 — FINAL CTA */}
        <section className="py-24 px-6 md:px-[112px] bg-slate-900 text-white text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">See what your LinkedIn ads are actually doing</h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Connect your account in under five minutes. Keep your existing campaigns. DemandSense layers on top — scheduling, budget controls, frequency caps, and audience tuning start working immediately. You get a 30-day free trial with 100 credits included.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white border-none px-10">
                <Link to="/get-started">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-slate-900 px-10">
                <Link to="/demo">Watch 2-Min Demo</Link>
              </Button>
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

export default LinkedInAdsOptimizationPage;