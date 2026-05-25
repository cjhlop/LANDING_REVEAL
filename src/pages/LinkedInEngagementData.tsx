"use client";

import React, { Suspense, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/footer";
import Loader from "@/components/Loader";
import LogoTicker from "@/components/LogoTicker";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionBadge from "@/components/SectionBadge";
import { cn } from "@/lib/utils";
import { 
  Database, 
  Target, 
  AlertCircle,
  Eye,
  Check,
  Zap,
  MousePointer2,
  Users,
  Settings2,
  Linkedin,
  ArrowRight,
  TrendingDown
} from "lucide-react";
import { TestimonialSection } from "@/components/testimonials";

const LinkedInEngagementData = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCTA = () => {
    document.dispatchEvent(new CustomEvent("open-get-access"));
  };

  const walkthroughTabs = [
    {
      id: 0,
      label: "See - Which companies respond",
      image: "/media/hover-sidebar.png",
      bullets: [
        "LinkedIn reporting shows you how many people engaged. DemandSense shows you which companies.",
        "Paid and organic activity together in a single view.",
        "Filter by engagement level, industry, company size, and campaign source."
      ]
    },
    {
      id: 1,
      label: "Act - Adjust targeting on data",
      image: "/media/precise-targeting-filters.png",
      bullets: [
        "Exclude companies that don't fit your buyer profile based on engagement data.",
        "Remove existing customers from prospecting campaigns.",
        "Shift budget toward campaigns reaching accounts that match your buyer profile."
      ]
    },
    {
      id: 2,
      label: "Connect - See pipeline impact",
      image: "/media/card3.png",
      bullets: [
        "Matches engaged companies to your CRM automatically (HubSpot and Salesforce).",
        "See which engaged companies are already in your pipeline.",
        "Find net-new accounts that are engaging but haven't entered your pipeline yet."
      ]
    },
    {
      id: 3,
      label: "Prove - Is LinkedIn working?",
      image: "/media/ds-revenue-attribution-hero.png",
      bullets: [
        "Connect ad engagement to CRM deal stages.",
        "See which campaigns influenced real opportunities and closed revenue.",
        "Map the path from first ad impression to website visit to CRM deal."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="pt-20 overflow-x-hidden">
        {/* SECTION 1: HERO */}
        <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1216px] mx-auto relative z-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#3875F6]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <SectionBadge icon={Target} text="LINKEDIN ENGAGEMENT VISIBILITY" />
              
              <h1 className="text-4xl md:text-5xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-[#0F2043]">
                Your LinkedIn ads reach 4x more companies than your reports show.
              </h1>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Standard reporting captures roughly 25% of the companies engaging with your campaigns. The other 75% interact through impressions, video views, and organic activity that standard reporting can't surface. Every targeting decision you make is missing the full picture.
              </p>

              {/* Bullets */}
              <ul className="space-y-3">
                {[
                  "Discover the 75% of engaged companies you can't see",
                  "Turn hidden ad engagement into targeted adjustment controls",
                  "Surface high-intent accounts your sales team misses"
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-700 leading-snug">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Button size="hero" onClick={handleCTA} className="w-full sm:w-auto shadow-xl shadow-blue-500/20">
                  Start Free Trial
                </Button>
                <div className="flex flex-col justify-center sm:ml-2">
                  <p className="text-sm font-bold text-gray-900">Free 30-day access.</p>
                  <p className="text-xs text-gray-500">No credit card required.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="magic-border h-full w-full" style={{ "--magic-radius": "1rem" } as React.CSSProperties}>
                  <div className="rounded-[inherit] border border-gray-200/80 shadow-2xl overflow-hidden bg-white ring-1 ring-black/5">
                    <img 
                      src="/media/audience-tuning.webp" 
                      alt="Audience Engagement View" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Snapshot Quote */}
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 shadow-sm">
                <p className="text-gray-800 italic mb-4 text-sm leading-relaxed">
                  "It finds 15 to 20% of that audience, and it serves them an ad 20 times. Standard reporting didn't show this. The full company-level view made the pattern visible for the first time."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm border border-blue-200">
                    CH
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Chase Hamilton</div>
                    <div className="text-xs text-gray-500">Marketing @ AssetWatch</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- HERO BOTTOM STAT GRID --- */}
          <div className="mt-16 w-full relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stat 1 */}
              <div className="bg-[#F8FAFF] rounded-xl p-8 text-center border border-blue-50/50 flex flex-col items-center justify-center min-h-[180px] shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                <div className="text-4xl font-black text-blue-600 mb-2 tracking-tighter">Under 1%</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-widest">Average CTR</h3>
                <p className="text-xs text-gray-600 leading-relaxed max-w-[240px]">
                  99% of your audience engages without clicking. Under click-based reporting, their company never shows up.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="bg-[#FFF8F5] rounded-xl p-8 text-center border border-orange-50/50 flex flex-col items-center justify-center min-h-[180px] shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                <div className="text-4xl font-black text-orange-500 mb-2 tracking-tighter">75%</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-widest">Overpay for Ads</h3>
                <p className="text-xs text-gray-600 leading-relaxed max-w-[240px]">
                  Your engagement reports list a fraction of the companies interacting with your campaigns.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="bg-[#F3FCF8] rounded-xl p-8 text-center border border-emerald-50/50 flex flex-col items-center justify-center min-h-[180px] shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                <div className="text-4xl font-black text-emerald-500 mb-2 tracking-tighter">1 in 145</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-widest">Click-to-lead</h3>
                <p className="text-xs text-gray-600 leading-relaxed max-w-[240px]">
                  1 in 145 clicks converts. 144 clicks come from companies you can't identify in standard reports.
                </p>
              </div>
            </div>
          </div>
        </section>

        <LogoTicker variant="light" className="bg-gray-50 border-y border-gray-100 text-gray-500 py-8" />

        {/* SECTION 2: THE BLIND SPOT TABLE */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <SectionBadge icon={AlertCircle} text="THE BLIND SPOT" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight mb-6">
                You can't optimize campaigns on engagement signals you can't see
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Standard reporting covers clicks, impressions, and conversions. They describe how your campaigns perform. But which audiences are behind those numbers requires a layer of data standard reporting doesn't surface.
              </p>
            </div>

            <div className="w-full bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] text-left border-collapse">
                  <thead className="bg-[#0F2043] text-white">
                    <tr>
                      <th className="py-6 px-8 font-semibold w-[25%] text-lg border-r border-[#1e345e]">Campaign Manager Data</th>
                      <th className="py-6 px-8 font-semibold w-[45%] border-r border-[#1e345e] text-lg">What's Actually Happening</th>
                      <th className="py-6 px-8 font-semibold w-[30%] text-lg text-orange-300">What It Costs You</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-6 px-8 text-gray-900 font-bold text-lg border-r border-gray-100 bg-gray-50/30">"259 companies engaged"</td>
                      <td className="py-6 px-8 text-gray-600 border-r border-gray-100 bg-white">2,216 companies engaged with your ads. Your reporting surfaced 259.</td>
                      <td className="py-6 px-8 text-orange-700 font-medium bg-orange-50/30">Your targeted decisions draw from 12% of the companies that actually responded.</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-6 px-8 text-gray-900 font-bold text-lg border-r border-gray-100 bg-gray-50/30">"142 clicks this month"</td>
                      <td className="py-6 px-8 text-gray-600 border-r border-gray-100 bg-white">Engagement includes video views, reactions, and content interactions — not just clicks. Click-based reporting misses the rest.</td>
                      <td className="py-6 px-8 text-orange-700 font-medium bg-orange-50/30">Companies that match your buyer profile but didn't click can't be identified, retargeted, or passed to sales.</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-6 px-8 text-gray-900 font-bold text-lg border-r border-gray-100 bg-gray-50/30">"Campaign A outperforming"</td>
                      <td className="py-6 px-8 text-gray-600 border-r border-gray-100 bg-white">Campaign B reached more companies matching your buyer profile with deeper engagement. Standard metrics can't show that because engagement data isn't matched to companies.</td>
                      <td className="py-6 px-8 text-orange-700 font-medium bg-orange-50/30">Budget moves toward the campaign with better click metrics. You scale down the one reaching the right accounts.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-[#0F2043] mb-4">
                The gap is in data access.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                LinkedIn captures company-level engagement data across paid and organic activity. That data is available through LinkedIn's certified partner program. DemandSense unlocks it for you.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: TABBED PRODUCT WALKTHROUGH */}
        <section className="relative py-20 md:py-24 bg-slate-50 border-t border-gray-100">
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-0"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
            {/* Header */}
            <div className="mb-10 text-center md:text-left">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
                Full engagement data. One connected view.
              </p>
              <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 leading-tight max-w-4xl">
                See every company that interacts with your brand, and act on it.
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap w-full gap-2 md:gap-4 mb-6">
              {walkthroughTabs.map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(i)}
                  className={cn(
                    "flex-1 min-w-[200px] flex items-center gap-3 p-2 text-left transition-all duration-200 rounded-lg",
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
                      "text-sm lg:text-base leading-snug",
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
                style={{ width: `${((activeTab + 1) / 4) * 100}%` }}
              ></div>
            </div>

            {/* Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12">
              
              {/* Left Column: Screenshot */}
              <div className="lg:col-span-7 relative h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
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
                      <span className="font-medium text-gray-800 text-[15px] leading-snug">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-200">
                  <p className="font-bold text-gray-900 text-lg mb-4 leading-snug">
                    Turn your hidden ad engagement into targeted adjustment controls. 
                  </p>
                  <Button 
                    onClick={handleCTA}
                    className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 h-11 w-full sm:w-auto"
                  >
                    Start Free Trial
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: HOW IT WORKS (4-STEP SETUP) */}
        <section className="py-24 bg-white border-y border-gray-100">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="flex justify-center mb-6">
                <SectionBadge icon={Settings2} text="4-STEP SETUP" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[44px] font-bold text-[#0F2043] mb-6 tracking-tight leading-[1.1]">
                From "connected" to "full visibility" <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">in four steps.</span>
              </h2>
            </div>

            <div className="relative mb-16">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Step 1 */}
                <div className="relative flex flex-col items-center text-center group">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300 z-10">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Linkedin className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0F2043] text-white text-xs font-bold flex items-center justify-center border-4 border-white shadow-sm">
                      1
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#0F2043] mb-3 uppercase tracking-tight">STEP 1</h3>
                  <h4 className="text-base font-bold text-gray-900 mb-2">Connect LinkedIn Ads</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Securely authenticate your LinkedIn Ads account. We pull in your campaign data, spend, and engagement metrics automatically.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col items-center text-center group">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300 z-10">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Database className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0F2043] text-white text-xs font-bold flex items-center justify-center border-4 border-white shadow-sm">
                      2
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#0F2043] mb-3 uppercase tracking-tight">STEP 2</h3>
                  <h4 className="text-base font-bold text-gray-900 mb-2">Connect your CRM</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Link your HubSpot or Salesforce account in Settings. One authorization, takes about 2 minutes. DemandSense pulls historical deal data automatically.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col items-center text-center group">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300 z-10">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Eye className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0F2043] text-white text-xs font-bold flex items-center justify-center border-4 border-white shadow-sm">
                      3
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#0F2043] mb-3 uppercase tracking-tight">STEP 3</h3>
                  <h4 className="text-base font-bold text-gray-900 mb-2">Reveal the unseen</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Instantly see all the companies that interacted with your campaigns but never clicked. Filter by intent and ICP match.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="relative flex flex-col items-center text-center group">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300 z-10">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Target className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0F2043] text-white text-xs font-bold flex items-center justify-center border-4 border-white shadow-sm">
                      4
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#0F2043] mb-3 uppercase tracking-tight">STEP 4</h3>
                  <h4 className="text-base font-bold text-gray-900 mb-2">Act and optimize</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Exclude dead accounts, pass hot intent signals to sales, and adjust your LinkedIn targeting directly from the insights.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button size="hero" onClick={handleCTA}>
                Get Started
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 5: TESTIMONIALS */}
        <TestimonialSection className="bg-gray-50 border-b border-gray-100" />

        {/* SECTION 6: FAQ */}
        <section className="py-24 px-6 bg-white border-b border-gray-100">
          <div className="max-w-[800px] mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2043] tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "What data does DemandSense show that standard reporting doesn't?", a: "Company-level engagement data across paid and organic LinkedIn activity. You see which specific companies engaged with your ads, how they engaged (impressions, clicks, video views, organic content interactions), and whether they're in your CRM. This includes companies that saw your ads without clicking, which is 99%+ of your audience on LinkedIn." },
                { q: "How does DemandSense get this data?", a: "DemandSense is a certified LinkedIn Marketing Partner for B2B Attribution and Analytics. That certification provides access to LinkedIn's Company Intelligence data tier: company-level paid impressions, organic engagement, engagement scoring, and longer lookback windows. It's a private API. Tools without this certification can't access it." },
                { q: "Can I act on the data, or is this a reporting tool?", a: "You can act on it. The engagement data and campaign controls are in the same platform. Exclude non-fit companies from campaigns, remove existing customers from prospecting audiences, adjust targeting based on engagement patterns, and shift budget to campaigns reaching the right accounts." },
                { q: "Which CRMs does DemandSense integrate with?", a: "HubSpot and Salesforce. Engaged companies are automatically matched to your CRM records. You see which engaged accounts are in pipeline, which are net new, and which have open deals." },
                { q: "How long does setup take?", a: "Connect your LinkedIn ad account and CRM. Most users see engagement data within 24 hours. No pixel installation required for LinkedIn engagement data." },
                { q: "How much does it cost?", a: "Plans start at $99/month. Full access to engagement data, CRM matching, campaign controls, and attribution. No per-seat pricing. Cancel anytime." },
                { q: "Does this replace my current ad management tools?", a: "DemandSense is a visibility and control layer. You still run campaigns where you run them now. DemandSense adds company-level engagement data, controls to act on it, and CRM-connected attribution." }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-gray-200 bg-white px-8 rounded-2xl shadow-sm mb-4 overflow-hidden">
                  <AccordionTrigger className="text-left font-bold text-gray-900 py-6 hover:text-blue-600 transition-colors text-lg">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-600 leading-relaxed pb-8">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* SECTION 7: FINAL CTA FULL WIDTH */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#0F2043]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-blue-600/20 blur-[120px]" />
            <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-blue-400/10 blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
              Ready to reveal the 75%<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                of your missing engagement?
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect your accounts. See which companies actually engage with your campaigns. Make your targeting decisions on the full dataset.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                size="hero" 
                onClick={handleCTA}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white border-0 shadow-[0_0_40px_8px_rgba(37,99,235,0.3)] transition-all duration-300 hover:shadow-[0_0_60px_12px_rgba(37,99,235,0.4)]"
              >
                Start Free Trial
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm font-medium text-blue-200/60">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-400" />
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default LinkedInEngagementData;