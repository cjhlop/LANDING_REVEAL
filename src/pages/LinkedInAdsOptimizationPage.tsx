"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import LogoTicker from "@/components/LogoTicker";
import { cn } from "@/lib/utils";
import { 
  Clock,
  Target,
  AlertCircle,
  ShieldCheck,
  Users,
  Zap,
  HelpCircle,
  Check,
  ArrowRight,
  CheckCircle2,
  TrendingDown,
  SlidersHorizontal
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
import SectionBadge from "@/components/SectionBadge";

// Re-using the high-fidelity visual components from the home page/visitors page
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
    <div className="w-full h-full flex flex-col bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
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
      
      <div className="flex-1 grid grid-cols-[25px_1fr] gap-4 relative z-10">
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
      
      <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center relative z-10">
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
  const [heroRef, heroInView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });
  const [problemRef, problemInView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });

  return (
    <>
      <Helmet>
        <title>LinkedIn Ads Optimization & Smart Scheduling Tool | DemandSense</title>
        <meta name="description" content="Take control of your LinkedIn ad spend. Smart scheduling, account-level frequency capping, budget guardrails, and audience tuning — so you know every dollar reaches the right accounts." />
      </Helmet>

      <Navbar />

      <main className="bg-white overflow-x-hidden">
        {/* --- HERO SECTION --- */}
        <section className="relative w-full min-h-[80vh] flex flex-col pt-32 pb-20 bg-white">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#3875F6]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-[#FA8C16]/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div ref={heroRef} className="space-y-8">
              <div className={cn(
                "transition-all duration-700",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                <SectionBadge icon={Target} text="CAMPAIGN INTELLIGENCE" />
              </div>

              <h1 className={cn(
                "text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tighter leading-[1.1] transition-all duration-700 delay-100",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                Optimize Your LinkedIn Ads <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3875F6] to-[#7486AA]">
                  With Advanced Automation
                </span>
              </h1>

              <p className={cn(
                "text-xl text-gray-600 max-w-xl leading-relaxed transition-all duration-700 delay-200",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                Take control of your LinkedIn spend with advanced automation tools that the native Campaign Manager doesn't provide. Scheduling, frequency capping, and real-time tuning.
              </p>

              <div className={cn(
                "flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-700 delay-400",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <Button variant="hero" size="hero">
                  Start Free Trial
                </Button>
                <p className="text-gray-900 text-sm leading-tight max-w-[200px]">
                  <span className="font-bold">Save up to 40%</span> of your budget by eliminating low-intent impressions.
                </p>
              </div>

              <div className={cn(
                "flex items-center gap-6 text-sm text-gray-500 pt-4 transition-all duration-700 delay-500",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> API-Native</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> 5-Min Setup</div>
              </div>
            </div>

            <div className={cn(
              "relative transition-all duration-1000 delay-300",
              heroInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}>
              <AdvancedSchedulingVisual active={heroInView} />
            </div>
          </div>
        </section>

        <LogoTicker variant="dark" />

        {/* --- PROBLEM SECTION --- */}
        <section 
          ref={problemRef}
          className={cn(
            "py-24 px-6 md:px-[112px] bg-white border-b border-gray-100",
            problemInView && "is-visible"
          )}
        >
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="problem-animate flex justify-center mb-6">
                <SectionBadge icon={AlertCircle} text="THE CHALLENGE" />
              </div>
              <h2 className="problem-animate text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
                Your LinkedIn ad budget has <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">blind spots</span>
              </h2>
              <p className="problem-animate text-lg text-gray-600 leading-relaxed">
                Three things drain most LinkedIn ad budgets. None of them show up in your native CTR reports.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Ads run when nobody's looking",
                  body: "There’s no native way to schedule ads by hour. Your campaigns serve impressions at 2am on a Saturday to the same people you want to reach at 9am on Tuesday.",
                  icon: <Clock className="w-6 h-6 text-blue-600" />,
                  color: "bg-blue-600"
                },
                {
                  title: "Same accounts keep seeing ads",
                  body: "Without account-level frequency controls, a small group of companies can consume the majority of your impressions. You pay for reach, but you’re really just saturating the same people.",
                  icon: <Users className="w-6 h-6 text-orange-500" />,
                  color: "bg-orange-500"
                },
                {
                  title: "Budget has no monthly off switch",
                  body: "You can see which companies clicked. But that data sits in one place while your targeting controls sit in another. By the time you act, you've already spent weeks on the wrong audiences.",
                  icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
                  color: "bg-emerald-500"
                }
              ].map((card, i) => (
                <div key={i} className="problem-animate trend-block p-8 rounded-3xl border border-gray-100 bg-white hover:border-blue-200 transition-all duration-500 shadow-sm hover:shadow-xl" style={{ animationDelay: `${300 + (i * 150)}ms` }}>
                  <div className="trend-number">0{i + 1}</div>
                  <div className="trend-icon-wrapper mb-6">
                    <div className={cn("trend-icon-bg opacity-10 rounded-xl w-12 h-12 flex items-center justify-center", card.color)}>
                      {card.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{card.body}</p>
                </div>
              ))}
            </div>

            <div className="problem-animate mt-16 p-10 rounded-[32px] bg-slate-900 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <p className="text-lg sm:text-xl text-blue-100 font-medium max-w-3xl mx-auto leading-relaxed relative z-10">
                Without knowing <strong>WHO</strong> is engaging and <strong>WHEN</strong>, you can't tell if campaigns resonate with the right people or just burn budget on the wrong ones.
              </p>
            </div>
          </div>
        </section>

        {/* --- FEATURE 1: SCHEDULING --- */}
        <section className="py-32 bg-white">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="text-[#3875F6] font-bold text-xs uppercase tracking-widest">SMART SCHEDULING</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
                Ad scheduling that stops you paying for 3am impressions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                There's no native way to do LinkedIn ad scheduling by hour. DemandSense fills that gap with scheduling and budget optimization in one place.
              </p>
              <ul className="space-y-4">
                {[
                  "Set days, hours, and time zones for every campaign",
                  "Apply schedules in bulk across hundreds of campaigns",
                  "Auto-pause ads during low-intent periods (weekends/nights)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
              </div>
            </div>
            <div className="p-4">
              <div className="magic-border h-full w-full" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
                <div className="bg-slate-900 rounded-[inherit] p-2">
                  <AdvancedSchedulingVisual active={true} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FEATURE 2: FREQUENCY --- */}
        <section className="py-32 bg-[#F5F9FF]">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 space-y-6">
              <div className="text-[#FA8C16] font-bold text-xs uppercase tracking-widest">FREQUENCY CAPPING</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
                Account-level frequency caps to stop ad fatigue
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Prevent a handful of companies from consuming your entire budget. DemandSense lets you set impression and click thresholds per company.
              </p>
              <div className="space-y-3">
                {[
                  "Set impression caps per company across all campaigns",
                  "Automatically shift budget to under-exposed accounts",
                  "Stop wasting money on accounts that click but don't convert"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-blue-100 text-gray-800 font-medium shadow-sm">
                    <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-orange-600" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:order-1 p-4">
              <div className="rounded-3xl border border-gray-200 shadow-2xl overflow-hidden bg-white">
                <img 
                  src="/media/frequency-cap.webp" 
                  alt="Frequency Capping Interface" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- FEATURE 3: AUDIENCE TUNING --- */}
        <section className="py-32 bg-white">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="text-[#10b981] font-bold text-xs uppercase tracking-widest">AUDIENCE TUNING</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
                Tune your targeting based on real engagement
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                See exactly which companies are clicking your ads. If they aren't a fit, exclude them with one click. If they are, double down.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <SlidersHorizontal className="w-6 h-6 text-emerald-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-1">One-Click Exclusions</h4>
                  <p className="text-xs text-gray-500">Instantly remove non-ICP accounts from your audiences.</p>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <Zap className="w-6 h-6 text-emerald-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-1">Real-Time Sync</h4>
                  <p className="text-xs text-gray-500">Changes push directly to LinkedIn Campaign Manager.</p>
                </div>
              </div>
              <div className="pt-4">
                <Button size="lg" variant="outline" className="group">
                  Learn More About Tuning
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            <div className="p-4">
              <div className="rounded-3xl border border-gray-200 shadow-2xl overflow-hidden bg-white">
                <img 
                  src="/media/audience-tuning.webp" 
                  alt="Audience Tuning Interface" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- COMPARISON TABLE --- */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="flex justify-center mb-6">
                <SectionBadge icon={Zap} text="DEMAND SENSE VS NATIVE TOOLS" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] mb-6 tracking-tight">
                How DemandSense <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">compares</span>
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0F2043] text-white">
                    <th className="p-6 font-bold">Capability</th>
                    <th className="p-6 font-bold text-blue-400 border-r border-white/10">DemandSense</th>
                    <th className="p-6 font-bold text-gray-300 border-r border-white/10">Linklo</th>
                    <th className="p-6 font-bold text-gray-300">Campainless</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { cap: "Ad Scheduling / Dayparting", ds: "✓ Full", l: "✓ Full", c: "✓ Basic" },
                    { cap: "Monthly Budget Caps (enforced)", ds: "✓ Auto-pause", l: "◐ Alerts only", c: "◐ Tracking only" },
                    { cap: "Account-Level Frequency Cap", ds: "✓", l: "◐ Indirect", c: "—" },
                    { cap: "Company Engagement Visibility", ds: "✓ 2,000+ co’s", l: "—", c: "◐ Demo alerts" },
                    { cap: "Audience Tuning (exclude/expand)", ds: "✓ One-click", l: "◐ Rule-based", c: "—" },
                    { cap: "CRM Integration", ds: "✓ HubSpot + SF", l: "—", c: "—" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="p-6 text-sm font-medium text-gray-900">{row.cap}</td>
                      <td className="p-6 text-sm font-bold text-blue-700 bg-blue-50/30 border-r border-gray-100">{row.ds}</td>
                      <td className="p-6 text-sm text-gray-600 border-r border-gray-100">{row.l}</td>
                      <td className="p-6 text-sm text-gray-600">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <SectionBadge icon={HelpCircle} text="FAQ" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] mb-4 tracking-tight">
                Common <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Questions</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1" className="border-gray-200">
                <AccordionTrigger className="text-left font-bold text-gray-900 py-6">How do I optimize LinkedIn Ads for better ROI?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  Focus on three things: when your ads run, how often the same accounts see them, and whether the companies engaging actually match your ICP. Schedule ads during business hours, cap frequency at the account level, and regularly review which companies are consuming your impressions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2" className="border-gray-200">
                <AccordionTrigger className="text-left font-bold text-gray-900 py-6">How can I set a frequency cap on LinkedIn?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  Native frequency controls exist for some campaign types, but account-level or company-level caps aren’t widely available. DemandSense lets you set impression and click thresholds per company. When a company hits the limit, they stop seeing your ads and budget shifts to under-exposed accounts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3" className="border-gray-200">
                <AccordionTrigger className="text-left font-bold text-gray-900 py-6">What’s a reasonable LinkedIn ads budget for a B2B startup?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  The minimum daily budget is $10, but most B2B teams find $3,000–5,000 per month gives enough data to see what’s actually driving results versus what’s generating vanity metrics.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="py-24 px-6 md:px-[112px] bg-white">
          <div className="max-w-[1216px] mx-auto">
            <div className="bg-slate-900 rounded-[32px] p-12 md:p-20 text-center text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">See what your LinkedIn ads are actually doing</h2>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Connect your account in under five minutes. Keep your existing campaigns. DemandSense layers on top — scheduling, budget controls, frequency caps, and audience tuning start working immediately.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button variant="hero" size="hero" className="bg-blue-600 hover:bg-blue-700 border-none px-10">
                    Start Free Trial
                  </Button>
                  <Button variant="hero-outline" size="hero" className="border-slate-700 text-slate-300 hover:bg-slate-800 px-10">
                    Watch 2-Min Demo
                  </Button>
                </div>
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

export default LinkedInAdsOptimizationPage;