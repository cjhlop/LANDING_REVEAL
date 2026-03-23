"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/navbar/Logo";
import GetAccessDialog from "@/components/navbar/GetAccessDialog";
import AICopilotSection from "@/components/AICopilotSection";
import SectionBadge from "@/components/SectionBadge";
import { TestimonialSection } from "@/components/testimonials";
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
  Download,
  Database,
  Settings2,
  Linkedin
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
      label: "Revenue Influence - Let Deal Numbers Make Your Case",
      image: "/media/ds-revenue-attribution-hero.png",
      bullets: [
        "Influenced closed-won revenue and deal count. See what your LinkedIn Ads actually built.",
        "Influenced active pipeline. Know what's building for next quarter.",
        "Return on spend and monthly trend. Decide if the investment is worth continuing."
      ]
    },
    {
      id: 1,
      label: "Campaign Attribution - See Which Campaigns Influenced Deals",
      image: "/media/rev-campaign-view.png",
      bullets: [
        "See which campaigns influenced real deals and which ones just spent budget",
        "Format-level influence shows whether image, video, text, or spotlight ads appeared most in deal journeys",
        "Expand any campaign row to see the specific deals it touched, with deal name, stage, size, and close date"
      ]
    },
    {
      id: 2,
      label: "Buyer Journeys - Track Timeline From First Impression to Deal",
      image: "/media/rev-journey-expanded-view.png",
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

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Button size="hero" onClick={handleCTA} className="w-full sm:w-auto">
                  Try For Free
                </Button>
                <Button size="hero" variant="outline" onClick={handleCTA} className="w-full sm:w-auto">
                  Start With a Free Template
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

        {/* SECTION 2: TESTIMONIALS */}
        <TestimonialSection className="bg-gray-50 border-y border-gray-100" />

        {/* SECTION 8: HOW IT WORKS */}
        <section className="py-24 bg-white border-y border-gray-100">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="flex justify-center mb-6">
                <SectionBadge icon={Settings2} text="4-STEP SETUP" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[44px] font-bold text-[#0F2043] mb-6 tracking-tight leading-[1.1]">
                From "connected" to "report-ready" <br className="hidden md:block" />
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
                  
                  <div className="absolute top-12 right-[-50%] w-full h-0.5 bg-gray-100 hidden md:block -z-10" />
                  
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
                  
                  <div className="absolute top-12 right-[-50%] w-full h-0.5 bg-gray-100 hidden md:block -z-10" />
                  
                  <h3 className="text-lg font-bold text-[#0F2043] mb-3 uppercase tracking-tight">STEP 2</h3>
                  <h4 className="text-base font-bold text-gray-900 mb-2">Connect your CRM</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Link your HubSpot or Salesforce account in Settings. One authorization, takes about 2 minutes. DemandSense pulls 90 days of historical deal data automatically.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col items-center text-center group">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300 z-10">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Settings2 className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0F2043] text-white text-xs font-bold flex items-center justify-center border-4 border-white shadow-sm">
                      3
                    </div>
                  </div>
                  
                  <div className="absolute top-12 right-[-50%] w-full h-0.5 bg-gray-100 hidden md:block -z-10" />
                  
                  <h3 className="text-lg font-bold text-[#0F2043] mb-3 uppercase tracking-tight">STEP 3</h3>
                  <h4 className="text-base font-bold text-gray-900 mb-2">Pick your attribution rules</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Choose what counts as "influenced." Three presets (Awareness, Engagement, Intent) or set your own thresholds. You decide the rules. The tool applies them.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="relative flex flex-col items-center text-center group">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300 z-10">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <BarChart2 className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0F2043] text-white text-xs font-bold flex items-center justify-center border-4 border-white shadow-sm">
                      4
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#0F2043] mb-3 uppercase tracking-tight">STEP 4</h3>
                  <h4 className="text-base font-bold text-gray-900 mb-2">Pull your report</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Open the Overview tab. Influenced pipeline, closed revenue, and campaign-level performance are already built. Download charts, share with leadership, or export the data. Done.
                  </p>
                </div>
              </div>
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
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#0F2043]">
          {/* Background effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-blue-600/20 blur-[120px]" />
            <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-blue-400/10 blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
              Ready to prove your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                LinkedIn Ads impact?
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect your CRM. See which LinkedIn campaigns influenced real deals. Pull your first report in minutes.
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