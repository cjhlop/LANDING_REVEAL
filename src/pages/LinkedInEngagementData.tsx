"use client";

import React, { Suspense } from "react";
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
  BarChart3,
  AlertCircle,
  Eye,
  Check,
  Zap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";

// Helper for Screenshot Placeholders
const ScreenshotPlaceholder = ({ label }: { label: string }) => (
  <div className="magic-border h-full w-full group" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
    <div className="relative flex justify-center items-center bg-slate-900 rounded-[inherit] p-8 md:p-12 min-h-[400px] overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      <div className="relative z-10 w-full bg-slate-800/80 border border-slate-700/50 rounded-2xl flex items-center justify-center p-8 aspect-[4/3] shadow-inner backdrop-blur-sm">
        <p className="text-sm font-medium text-blue-400 text-center max-w-sm leading-relaxed tracking-wide">
          [PRODUCT UI: {label}]
        </p>
      </div>
    </div>
  </div>
);

const LinkedInEngagementData = () => {
  const [heroRef, heroInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.1 });
  const [vp1Ref, vp1InView] = useInViewOnce<HTMLDivElement>({ threshold: 0.5 });
  const [vp2Ref, vp2InView] = useInViewOnce<HTMLDivElement>({ threshold: 0.5 });
  const [vp3Ref, vp3InView] = useInViewOnce<HTMLDivElement>({ threshold: 0.5 });
  const [vp4Ref, vp4InView] = useInViewOnce<HTMLDivElement>({ threshold: 0.5 });

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900">
      <Navbar />

      <main className="overflow-x-hidden">
        
        {/* --- HERO SECTION --- */}
        <section className="relative w-full min-h-[90vh] flex flex-col pt-32 pb-20 bg-white">
          {/* Background Elements matching Website Visitors */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#3875F6]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-[#FA8C16]/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 mb-20">
            
            {/* Left: Copy */}
            <div ref={heroRef} className="space-y-8">
              <div className={cn(
                "transition-all duration-700",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                <SectionBadge icon={Target} text="LINKEDIN ENGAGEMENT VISIBILITY" />
              </div>

              <h1 className={cn(
                "text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tighter leading-[1.1] transition-all duration-700 delay-100",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                Your LinkedIn ads reach <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3875F6] to-[#7486AA]">
                  4x more companies
                </span><br />
                than your reports show
              </h1>

              <p className={cn(
                "text-xl text-gray-600 max-w-xl leading-relaxed transition-all duration-700 delay-200",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                Standard reporting captures roughly 25% of the companies engaging with your LinkedIn campaigns. DemandSense pulls the rest through certified data access.
              </p>

              {/* Feature List */}
              <div className={cn(
                "space-y-3 transition-all duration-700 delay-300",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                {[
                  "See every company engaging with your ads",
                  "Act on complete engagement data",
                  "Connect engagement to pipeline"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className={cn(
                "flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-700 delay-400",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <Button variant="hero" size="hero" onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}>
                  Start Free Trial
                </Button>
                <p className="text-gray-900 text-sm leading-tight max-w-[200px]">
                  <span className="font-bold">Free 30-day access.</span> No credit card required.
                </p>
              </div>

            </div>

            {/* Right: Visual Demo + Testimonial */}
            <div className={cn(
              "relative flex flex-col gap-12 transition-all duration-1000 delay-300",
              heroInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}>
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FA8C16]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#3875F6]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: "1s" }} />
                <ScreenshotPlaceholder label="Company Engagement View" />
              </div>

              {/* Client Feedback Card */}
              <div className="bg-[#F5F9FF] rounded-2xl p-6 border border-blue-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="flex gap-4 items-start relative z-10">
                  <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center border-2 border-white shadow-sm flex-shrink-0 text-blue-600 font-bold text-xl">
                    CH
                  </div>
                  <div className="space-y-3">
                    <p className="text-[15px] leading-relaxed text-gray-800 italic">
                      “<span className="font-bold">My ads were exhausting budget before 11 AM</span> and concentrating impressions on a fraction of my target list. Standard reporting didn't show this. The full company-level view made the pattern visible for the first time.”
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-sm font-bold text-gray-900">Chase Hamilton,</span>
                      <span className="text-sm text-gray-600">AssetWatch</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              </div>
            </div>
          </div>

          {/* --- HERO BOTTOM FEATURE GRID (Stat Cards) --- */}
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0 w-full relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="bg-[#F8FAFF] rounded-xl p-6 border border-blue-50/50 flex flex-col justify-between min-h-[180px] shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
                <div>
                  <div className="text-4xl font-black text-blue-600 mb-2 tracking-tighter">{"<"} 1%</div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Average CTR</h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    <span className="text-gray-900 font-bold">99% of your audience engages without clicking.</span> Under click-based reporting, their company never shows up in your data.
                  </p>
                </div>
              </div>

              <div className="bg-[#F8FAFF] rounded-xl p-6 border border-orange-50/50 flex flex-col justify-between min-h-[180px] shadow-sm hover:shadow-md hover:border-orange-100 transition-all">
                <div>
                  <div className="text-4xl font-black text-orange-500 mb-2 tracking-tighter">75%</div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Overpay for Ads</h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    <span className="text-gray-900 font-bold">75% of B2B advertisers overpay.</span> Engagement reports list a fraction of the companies that interacted. The rest require certified partner access.
                  </p>
                </div>
              </div>

              <div className="bg-[#F8FAFF] rounded-xl p-6 border border-emerald-50/50 flex flex-col justify-between min-h-[180px] shadow-sm hover:shadow-md hover:border-emerald-100 transition-all">
                <div>
                  <div className="text-4xl font-black text-emerald-500 mb-2 tracking-tighter">1 in 145</div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Click-To-Lead</h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    <span className="text-gray-900 font-bold">1 in 145 clicks converts to a lead.</span> The other 144 came from companies you can't identify in standard reports without account-level data.
                  </p>
                </div>
              </div>

            </div>
            <p className="text-left text-xs text-gray-400 mt-4 font-medium pl-2">
              Source: DemandSense LinkedIn B2B Benchmark Report. 100+ advertisers, $500K+ in tracked spend.
            </p>
          </div>
        </section>

        <LogoTicker />

        {/* --- PROBLEM TABLE --- */}
        <section className="py-24 px-6 bg-white overflow-hidden border-b border-gray-100">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <SectionBadge icon={AlertCircle} text="THE BLIND SPOT" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight mb-6 leading-tight">
                You can't optimize campaigns on engagement signals you can't see
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your reporting covers what it's designed to cover: Clicks, impressions, CTR, conversions. All useful for managing campaign performance. But which audiences are behind those numbers requires a layer of data standard reporting doesn't surface.
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
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-6 px-8 text-gray-900 font-bold text-lg border-r border-gray-100 bg-gray-50/30">"New conversion"</td>
                      <td className="py-6 px-8 text-gray-600 border-r border-gray-100 bg-white">An existing customer clicking a prospecting ad. Without account-level data, new and returning companies look identical.</td>
                      <td className="py-6 px-8 text-orange-700 font-medium bg-orange-50/30">You pay to "acquire" companies already in your CRM.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-16 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0F2043] mb-4">
                The gap is in data access.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                LinkedIn captures company-level engagement data across paid and organic activity. That data is available through LinkedIn's certified partner program. DemandSense unlocks it.
              </p>
            </div>
          </div>
        </section>

        {/* --- STATS BAND (Like Website Visitors) --- */}
        <section className="py-16 bg-[#F5F9FF] border-b border-gray-100">
          <div className="max-w-[1216px] mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <p className="text-2xl text-gray-900 font-medium">
                When integrating DemandSense and LinkedIn, we found:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { num: "4x", label: "more companies reached" },
                { num: "14x", label: "more companies engaged" },
                { num: "80%", label: "more attributed leads in CRM" },
                { num: "56%", label: "pipeline deals influenced" }
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl md:text-5xl font-black text-[#0F2043] tracking-tighter mb-2">
                    {stat.num}
                  </div>
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-center text-xs text-gray-400 mt-6 font-medium italic">
              Beta study across 50+ connected ad accounts compared to their standard reporting.
            </p>
          </div>
        </section>

        {/* --- ZIG-ZAG SECTIONS (Replacing dark Blueprint & old VP grids) --- */}
        
        {/* VP1 - SEE */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="text-[#3875F6] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  <Eye className="w-4 h-4" /> 1. SEE THE UNSEEN
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
                  See which companies respond to your ads
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  LinkedIn reporting shows you how many people engaged with a campaign. DemandSense shows you which companies.
                </p>
                <ul className="space-y-4">
                  {[
                    "View companies that saw your ads, watched videos, or interacted",
                    "Filter by engagement level, industry, company size, and campaign source",
                    "Access data that meets LinkedIn’s privacy floor but isn't in standard reports"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-800 font-medium">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div ref={vp1Ref} className="p-4">
                <div className={cn(
                  "transition-all duration-1000 ease-out",
                  vp1InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}>
                  <ScreenshotPlaceholder label="Company Engagement View: List of companies showing paid & organic activity, filters for Industry / Size / Campaign." />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VP2 - ACT */}
        <section className="py-24 bg-gray-50 border-b border-gray-100">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div ref={vp2Ref} className="p-4 lg:order-1 order-2">
                <div className={cn(
                  "transition-all duration-1000 ease-out",
                  vp2InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}>
                  <ScreenshotPlaceholder label="Campaign Controls: Audience exclusion toggles, existing customer suppression, and budget shifting rules." />
                </div>
              </div>
              <div className="space-y-6 lg:order-2 order-1">
                <div className="text-orange-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  <Zap className="w-4 h-4" /> 2. ACT ON DATA
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
                  Adjust targeting based on real engagement data
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Engagement data matters when you can change what happens next. DemandSense puts the engagement intelligence and the campaign controls in the same platform.
                </p>
                <ul className="space-y-4">
                  {[
                    "Exclude companies that don't fit your buyer profile based on engagement",
                    "Remove existing customers from prospecting campaigns automatically",
                    "Shift budget toward campaigns reaching your exact target accounts"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-800 font-medium">
                      <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-orange-600" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* VP3 - CONNECT */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="text-purple-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  <Database className="w-4 h-4" /> 3. CONNECT TO CRM
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
                  See which engaged companies are in pipeline vs. net new
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Engagement data becomes useful when it connects to what your sales team already knows. DemandSense matches engaged companies to your HubSpot or Salesforce automatically.
                </p>
                <ul className="space-y-4">
                  {[
                    "See which engaged companies are already in your active pipeline",
                    "Identify net-new accounts that sales hasn't talked to yet",
                    "Pass hot accounts to sales with full campaign context and activity history"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-800 font-medium">
                      <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-purple-600" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div ref={vp3Ref} className="p-4">
                <div className={cn(
                  "transition-all duration-1000 ease-out",
                  vp3InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}>
                  <ScreenshotPlaceholder label="CRM Connection View: Split list showing matched pipeline accounts vs. net new accounts derived from ad engagement." />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VP4 - PROVE */}
        <section className="py-24 bg-gray-50 border-b border-gray-100">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div ref={vp4Ref} className="p-4 lg:order-1 order-2">
                <div className={cn(
                  "transition-all duration-1000 ease-out",
                  vp4InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}>
                  <ScreenshotPlaceholder label="Attribution Dashboard: Pipeline generated, influenced revenue, and campaigns ranked by pipeline contribution." />
                </div>
              </div>
              <div className="space-y-6 lg:order-2 order-1">
                <div className="text-emerald-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" /> 4. PROVE ROI
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
                  Answer "is LinkedIn working?" with pipeline data
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  DemandSense connects ad engagement to CRM deal stages. You see which campaigns influenced real opportunities and closed revenue, ranked by pipeline contribution.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">
                  <div className="bg-white px-8 py-6 rounded-2xl border border-gray-200 shadow-sm w-full">
                    <div className="text-4xl font-black text-emerald-600 mb-2">56%</div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">More Pipeline Deals Influenced</div>
                  </div>
                  <div className="bg-white px-8 py-6 rounded-2xl border border-gray-200 shadow-sm w-full">
                    <div className="text-4xl font-black text-emerald-600 mb-2">48%</div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">More Closed-Won Influenced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
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
                <AccordionItem key={index} value={`faq-${index}`} className="border-gray-100">
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

        {/* --- CTA SECTION (Matching Website Visitors) --- */}
        <section className="py-24 md:py-32 px-6 bg-white overflow-hidden">
          <div className="max-w-[1216px] mx-auto">
            <div className="cta-card w-full rounded-[32px] px-8 md:px-16 py-20 md:py-24 flex flex-col items-center text-center relative overflow-hidden border border-blue-100 shadow-xl bg-[#F5F9FF]">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
                <div className="flex justify-center mb-4">
                   <SectionBadge icon={Zap} text="GET A 30-DAY FREE TRIAL" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
                  See which companies engage with your LinkedIn ads. <br className="hidden md:block"/>
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Act on it before your next cycle.</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Company-level engagement data from your LinkedIn ads, connected to your CRM, with controls to adjust targeting before the next campaign cycle.
                </p>
                <div className="pt-6 flex flex-col items-center gap-4">
                  <Button size="hero" className="shadow-xl shadow-blue-500/20 px-10" onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}>
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-sm font-bold text-gray-500 mt-2">
                    Set up in 5 minutes to see your audiences and their intent.
                  </p>
                </div>
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