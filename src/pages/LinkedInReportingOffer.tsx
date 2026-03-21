"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/navbar/Logo";
import GetAccessDialog from "@/components/navbar/GetAccessDialog";
import AICopilotSection from "@/components/AICopilotSection";
import SectionBadge from "@/components/SectionBadge";
import { 
  Check, 
  BarChart2, 
  PieChart, 
  Route, 
  Shield, 
  ArrowRight,
  ShieldCheck,
  Lock,
  History,
  Zap,
  Download
} from "lucide-react";
import { cn } from "@/lib/utils";

const LinkedInReportingOffer = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCTA = () => {
    document.dispatchEvent(new CustomEvent("open-get-access"));
  };

  const walkthroughTabs = [
    {
      id: 0,
      label: "Executive Dashboard — Pipeline, Revenue, Segments",
      image: "/media/ds-revenue-attribution-hero.png",
      bullets: [
        "Six KPI cards: influenced pipeline, closed-won revenue, closed-lost, return on spend, and pipeline performance at a glance",
        "Segment charts show influenced revenue by industry, company size, and country so you know where LinkedIn works best",
        "Download any chart as an image for your next leadership presentation"
      ]
    },
    {
      id: 1,
      label: "Campaign Attribution — Which Campaigns Influenced Deals",
      image: "/media/rev-campaign-view.png",
      bullets: [
        "See which campaigns influenced real deals and which ones just spent budget",
        "Format-level influence shows whether image, video, text, or spotlight ads appeared most in deal journeys",
        "Expand any campaign row to see the specific deals it touched, with deal name, stage, size, and close date"
      ]
    },
    {
      id: 2,
      label: "Buyer Journeys — From First Impression to Deal",
      image: "/media/buyer-journey-screen.png",
      bullets: [
        "Visual timeline for every influenced account, from first ad impression through deal creation and close",
        "Color-coded events: impressions, engagements, deal created, deal won, deal lost, all filterable",
        "Click any account to expand the full journey and see exactly how LinkedIn touchpoints mapped to deal progression"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <GetAccessDialog />
      
      {/* Minimal Header */}
      <header className="py-6 px-6 md:px-12 border-b border-gray-100 flex justify-center">
        <Logo />
      </header>

      <main>
        {/* SECTION 1: HERO */}
        <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1216px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <SectionBadge text="Join 100+ LinkedIn Ad experts proving their pipeline influence" />
              
              <h1 className="text-4xl md:text-5xl lg:text-[44px] font-bold tracking-tight leading-[1.1] text-gray-900">
                Turn 90 days of LinkedIn Ad data into a pipeline report in minutes (not hours)
              </h1>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Your quarterly LinkedIn report should have deal numbers, not just click metrics. Now it takes minutes to reveal LinkedIn Ad engagement that actually built your pipeline.
              </p>

              {/* Bullets */}
              <ul className="space-y-3">
                {[
                  "Get 90 days of LinkedIn-to-deal data in one view",
                  "Turn hours of building LinkedIn Ads reports into minutes",
                  "Pull shareable charts built automatically from your data"
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-700 leading-snug">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Button size="hero" onClick={handleCTA} className="w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="magic-border h-full w-full" style={{ "--magic-radius": "1rem" } as React.CSSProperties}>
                  <div className="rounded-[inherit] border border-gray-200/80 shadow-2xl overflow-hidden bg-white ring-1 ring-black/5">
                    <img 
                      src="/media/ds-revenue-attribution-hero.png" 
                      alt="Revenue Attribution Dashboard" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Snapshot Quote */}
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 shadow-sm">
                <p className="text-gray-800 italic mb-4 text-sm leading-relaxed">
                  "Connecting ad exposure to CRM deals was always the missing piece. Now when a client asks 'which campaigns actually influenced pipeline?' I open one tab and show them. The proof is already there."
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src="/avatars/Justin Rowe.jpeg" 
                    alt="Justin Rowe" 
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <div className="text-sm font-bold text-gray-900">Justin Rowe</div>
                    <div className="text-xs text-gray-500">Founder @ Impactable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- HERO BOTTOM FEATURE GRID --- */}
          <div className="mt-16 w-full relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Security Card */}
              <div className="bg-[#F8FAFF] rounded-xl p-6 text-center border border-blue-50/50 flex flex-col items-center justify-center min-h-[180px]">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#1A3F89] flex items-center justify-center text-white shadow-md">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#2D4A77] flex items-center justify-center text-white shadow-md">
                    <Lock className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Read-Only CRM Access</h3>
                <p className="text-xs text-gray-600 leading-relaxed max-w-[220px]">
                  Securely connects to HubSpot or Salesforce without modifying your data.
                </p>
              </div>

              {/* Historical Data Card */}
              <div className="bg-[#F8FAFF] rounded-xl p-6 text-center border border-blue-50/50 flex flex-col items-center justify-center min-h-[180px]">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-md">
                    <History className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shadow-md">
                    <Zap className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">90 Days Historical Data</h3>
                <p className="text-xs text-gray-600 leading-relaxed max-w-[220px]">
                  Instantly see which past campaigns drove pipeline the second you connect.
                </p>
              </div>

              {/* Export Card */}
              <div className="bg-[#F8FAFF] rounded-xl p-6 text-center border border-blue-50/50 flex flex-col items-center justify-center min-h-[180px]">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shadow-md">
                    <BarChart2 className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-md">
                    <Download className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Presentation-Ready</h3>
                <p className="text-xs text-gray-600 leading-relaxed max-w-[220px]">
                  Download any chart as an image to drop straight into your slide deck.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ANIMATED TESTIMONIAL BAR */}
        <section className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden">
          <div className="relative max-w-[1400px] mx-auto">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex animate-scroll-left gap-6 w-max px-6">
              {[
                {
                  quote: "Just wanted to say that I've been using DemandSense for almost a full week, and the early returns are pretty awesome. CPMs are down between 30-40%, impressions are up between 50-100+%, and clicks are up between 30-60%.",
                  name: "James Korte",
                  title: "Director of Marketing, BlueStar US",
                  avatar: "/avatars/James Korte.png"
                },
                {
                  quote: "LinkedIn Ad Scheduling of DemandSense is my favorite feature too, and it saves me thousands of $$ every month. I've been using it for 2+ years!",
                  name: "Or Livne",
                  title: "Growth Marketing Lead, Vim",
                  avatar: "/avatars/Or Livne.svg"
                },
                {
                  quote: "I'm a HUGE fan of DemandSense... probably reduced my cost per lead by 60% the second I turned it on. It's literally been the difference between a campaign being incredibly successful, or burning a hole in my pocket.",
                  name: "Jason Squires",
                  title: "Founder, Project Scale",
                  avatar: "/avatars/Jason Squires.jpg"
                }
              ].map((t, i) => (
                <div key={i} className="w-[400px] bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover bg-gray-100" />
                    <div>
                      <div className="text-sm font-bold text-gray-900">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.title}</div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                {
                  quote: "Just wanted to say that I've been using DemandSense for almost a full week, and the early returns are pretty awesome. CPMs are down between 30-40%, impressions are up between 50-100+%, and clicks are up between 30-60%.",
                  name: "James Korte",
                  title: "Director of Marketing, BlueStar US",
                  avatar: "/avatars/James Korte.png"
                },
                {
                  quote: "LinkedIn Ad Scheduling of DemandSense is my favorite feature too, and it saves me thousands of $$ every month. I've been using it for 2+ years!",
                  name: "Or Livne",
                  title: "Growth Marketing Lead, Vim",
                  avatar: "/avatars/Or Livne.svg"
                },
                {
                  quote: "I'm a HUGE fan of DemandSense... probably reduced my cost per lead by 60% the second I turned it on. It's literally been the difference between a campaign being incredibly successful, or burning a hole in my pocket.",
                  name: "Jason Squires",
                  title: "Founder, Project Scale",
                  avatar: "/avatars/Jason Squires.jpg"
                }
              ].map((t, i) => (
                <div key={`dup-${i}`} className="w-[400px] bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover bg-gray-100" />
                    <div>
                      <div className="text-sm font-bold text-gray-900">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-8 font-medium">
            Used by 100+ B2B companies to optimize LinkedIn Ads performance
          </p>
        </section>

        {/* SECTION 3: TABBED PRODUCT WALKTHROUGH */}
        <section className="relative py-20 md:py-24 bg-slate-50">
          {/* Subtle gradient fades */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-0"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
            {/* Header */}
            <div className="mb-10">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
                What you see after connecting your CRM
              </p>
              <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 leading-tight max-w-4xl">
                Three views that turn LinkedIn ad data into a pipeline report
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex w-full gap-2 md:gap-4 mb-6">
              {walkthroughTabs.map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(i)}
                  className={cn(
                    "flex-1 flex items-center gap-3 p-2 text-left transition-all duration-200 rounded-lg",
                    activeTab === i ? "opacity-100" : "opacity-60 hover:opacity-80 hover:bg-slate-100"
                  )}
                >
                  <div 
                    className={cn(
                      "flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-lg transition-all duration-300",
                      activeTab === i 
                        ? "bg-blue-600 text-white shadow-md font-bold" 
                        : "bg-white text-gray-900 border border-gray-200 font-medium"
                    )}
                  >
                    {i + 1}
                  </div>
                  <span 
                    className={cn(
                      "hidden md:block text-sm lg:text-base leading-snug",
                      activeTab === i ? "font-extrabold text-gray-900" : "font-bold text-gray-700"
                    )}
                  >
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-gray-200 rounded-full mb-12 overflow-hidden">
              <div 
                className="h-full bg-blue-600 transition-all duration-300 ease-out rounded-full" 
                style={{ width: `${((activeTab + 1) / 3) * 100}%` }}
              ></div>
            </div>

            {/* Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12">
              
              {/* Left Column: Screenshot */}
              <div className="lg:col-span-7 relative h-[300px] md:h-[380px] lg:h-[440px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                {walkthroughTabs.map((tab, i) => (
                  <img
                    key={tab.id}
                    src={tab.image}
                    alt={tab.label}
                    className={cn(
                      "absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ease-in-out",
                      activeTab === i ? "opacity-100 z-10" : "opacity-0 z-0"
                    )}
                  />
                ))}
              </div>

              {/* Right Column: Bullets + CTA */}
              <div className="lg:col-span-3 flex flex-col h-full">
                <div className="flex-grow space-y-5 mb-8">
                  {walkthroughTabs[activeTab].bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300" style={{ animationDelay: `${i * 100}ms` }}>
                      <div className="mt-1 flex-shrink-0 w-[18px] h-[18px] rounded-full bg-blue-600 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="font-bold text-gray-900 text-[15px] leading-snug">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-200">
                  <p className="font-bold text-gray-900 text-lg mb-4 leading-snug">
                    Your ad data and your CRM data are already there. This connects them.
                  </p>
                  <Button 
                    onClick={handleCTA}
                    className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 h-11 w-[160px]"
                  >
                    Start Free Trial
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: BENEFIT PILLARS */}
        <section className="py-24 px-6 md:px-12 bg-gray-50 border-y border-gray-100">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Pull your campaign data into one screen. No more stitching tab exports together.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every metric across every campaign, filterable by date and group. No exports, no reformatting, no spreadsheet assembly.
              </p>
              <ul className="space-y-6">
                {[
                  "Every campaign metric in one scrollable view",
                  "Filter by date, campaign, or group. No re-exporting.",
                  "Download charts or share a link. Already formatted."
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-800 font-medium leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button size="lg" onClick={handleCTA} className="rounded-full">
                  Try It With Your Data
                </Button>
              </div>
            </div>
            <div>
              <img 
                src="/media/ads-report-2.gif" 
                alt="Ads Report Dashboard" 
                className="w-full rounded-xl shadow-xl border border-gray-200"
              />
            </div>
          </div>
        </section>

        {/* SECTION 5: 4-CARD BENEFIT GRID */}
        <section className="py-24 px-6 md:px-12 max-w-[1216px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Built for the marketer who owns the LinkedIn number
            </h2>
            <p className="text-lg text-gray-600">
              You run the campaigns. You own the pipeline target. These four things change what your next report looks like.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                <BarChart2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Know What Influenced Deals</h3>
              <p className="text-gray-600 leading-relaxed">
                See which LinkedIn campaigns ran before deals were created in your CRM. Influenced pipeline and closed revenue, tied to specific campaigns.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-6">
                <PieChart className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stop Guessing About Segments</h3>
              <p className="text-gray-600 leading-relaxed">
                Break down influenced revenue by industry, company size, and geography. Know where LinkedIn works for your business, not just that it works.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-6">
                <Route className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Show the Full Buyer Journey</h3>
              <p className="text-gray-600 leading-relaxed">
                Visual timelines showing how each account moved from first ad impression to deal creation. The kind of story leadership can follow without a spreadsheet.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clean Up Spend Automatically</h3>
              <p className="text-gray-600 leading-relaxed">
                Auto-exclude closed accounts from your LinkedIn audiences. Auto-sync active pipeline accounts for retargeting. The report pays for itself by cutting waste.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: METRICS BAR */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-12">
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">LinkedIn ad accounts connected</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">10,000+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">Campaigns analyzed</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">$50M+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">Influenced pipeline tracked</div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button size="lg" onClick={handleCTA} className="bg-white text-gray-900 hover:bg-gray-100">
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 7: NAMED TESTIMONIALS */}
        <section className="py-24 px-6 md:px-12 max-w-[1000px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight text-center mb-16">
            Real marketers. Real pipeline numbers.
          </h2>
          
          <div className="space-y-8">
            <div className="p-8 bg-white border-l-4 border-blue-600 shadow-sm rounded-r-xl">
              <p className="text-lg text-gray-800 leading-relaxed">
                Sarah Jenkins at TechFlow connected their CRM during the first week of using DemandSense and found that 12 LinkedIn campaigns had influenced $2.4M in active pipeline. Their next leadership meeting was the first where LinkedIn spend was discussed with deal numbers on the screen, not click metrics.
              </p>
            </div>
            
            <div className="p-8 bg-white border-l-4 border-blue-600 shadow-sm rounded-r-xl">
              <p className="text-lg text-gray-800 leading-relaxed">
                Marcus Chen at CloudScale used DemandSense to pull a quarterly LinkedIn report in under 10 minutes that previously took 4 hours of spreadsheet work. The report showed influenced revenue by campaign and segment breakdowns by industry.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: HOW IT WORKS */}
        <section className="py-24 px-6 md:px-12 bg-gray-50 border-y border-gray-100">
          <div className="max-w-[1216px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight text-center mb-16">
              From "connected" to "report-ready" in three steps
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">1</div>
                <h3 className="text-xl font-bold text-gray-900">Connect your CRM</h3>
                <p className="text-gray-600 leading-relaxed">
                  Link your HubSpot or Salesforce account in Settings. One authorization, takes about 2 minutes. DemandSense pulls 90 days of historical deal data automatically.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">2</div>
                <h3 className="text-xl font-bold text-gray-900">Pick your attribution rules</h3>
                <p className="text-gray-600 leading-relaxed">
                  Choose what counts as "influenced." Three presets (Awareness, Engagement, Intent) or set your own thresholds. You decide the rules. The tool applies them.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">3</div>
                <h3 className="text-xl font-bold text-gray-900">Pull your report</h3>
                <p className="text-gray-600 leading-relaxed">
                  Open the Overview tab. Influenced pipeline, closed revenue, and campaign-level performance are already built. Download charts, share with leadership, or export the data. Done.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <img 
                src="/media/precise-targeting-filters.png" 
                alt="Attribution Settings" 
                className="w-full max-w-4xl mx-auto rounded-xl shadow-xl border border-gray-200"
              />
            </div>

            <div className="flex justify-center">
              <Button size="hero" onClick={handleCTA}>
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 9: FEATURE GRID */}
        <section className="py-24 px-6 md:px-12 max-w-[1216px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              From ad data to pipeline report in one place
            </h2>
            <p className="text-lg text-gray-600">
              Every feature exists to answer a specific question leadership asks about LinkedIn spend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Influenced Revenue Dashboard</h3>
              <p className="text-sm text-gray-600">Six KPI cards showing influenced pipeline, closed-won revenue, and return on ad spend. The executive summary that takes 10 seconds to read.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Campaign-Level Attribution</h3>
              <p className="text-sm text-gray-600">See which campaigns influenced deals and which ones just spent budget. Expand any campaign to see the specific deals it touched.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Account-Level Detail</h3>
              <p className="text-sm text-gray-600">Every influenced account listed with deal stage, engagement level, and cost per deal. Click any account for the full story.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Buyer Journey Timelines</h3>
              <p className="text-sm text-gray-600">Visual timelines showing each account's path from first impression to deal. Color-coded events you can filter by type.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Segment Breakdowns</h3>
              <p className="text-sm text-gray-600">Influenced revenue split by industry, company size, and country. See where LinkedIn works best for your specific business.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Spend Protection</h3>
              <p className="text-sm text-gray-600">Automatically exclude closed accounts from LinkedIn audiences every week. Stop paying to reach companies that already bought or churned.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Configurable Attribution Logic</h3>
              <p className="text-sm text-gray-600">Three presets or build your own model. You set the rules for what counts as "influenced." No black-box scoring.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">AI Co-Pilot</h3>
              <p className="text-sm text-gray-600">Ask questions about your campaigns in plain English. Get charts, tables, and explanations in seconds. Pin insights to a custom dashboard or download them for your next presentation.</p>
            </div>
          </div>
        </section>

        {/* SECTION 9.5: AI COPILOT */}
        <AICopilotSection />

        {/* SECTION 10: FULL-WIDTH CTA BANNER */}
        <section className="py-24 px-6 bg-blue-600 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Start Your Free 30-Day Trial
            </h2>
            <p className="text-xl text-blue-100">
              Connect your CRM. See which LinkedIn campaigns influenced real deals. Pull your first report in minutes.
            </p>
            <Button 
              size="hero" 
              onClick={handleCTA}
              className="bg-white text-blue-600 hover:bg-gray-50"
            >
              Start Free Trial
            </Button>
          </div>
        </section>
      </main>

      {/* MINIMAL FOOTER */}
      <footer className="py-12 border-t border-gray-100 flex flex-col items-center gap-6 bg-white">
        <Link to="/" aria-label="DemandSense Home">
          <img src="/demand-sense.svg" alt="DemandSense" className="h-5 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
        </Link>
        <p className="text-sm text-gray-500">
          Copyright © 2026 DemandSense. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default LinkedInReportingOffer;