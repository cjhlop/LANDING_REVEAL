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
  Waypoints,
  Signal,
  Plug
} from "lucide-react";

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

// Internal icon for the quote component
const QuoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    {...props}
  >
    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
  </svg>
);

const LinkedInEngagementData = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900">
      <Navbar />

      <main className="pt-20 overflow-x-hidden">
        {/* BLOCK 1: Hero hook */}
        <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center pt-24 pb-20 bg-white">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#3875F6]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-[#FA8C16]/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
          
          <div className="max-w-[850px] mx-auto px-6 text-center space-y-8 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-center">
              <SectionBadge icon={Target} text="LINKEDIN ENGAGEMENT VISIBILITY" />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.1] text-[#0F2043]">
              Your LinkedIn ads reach 4x more companies than your reports show.
            </h1>
            
            <p className="text-xl text-gray-600 max-w-[700px] mx-auto leading-relaxed">
              Standard reporting captures roughly 25% of the companies engaging with your LinkedIn campaigns. The other 75% interact through impressions, video views, and organic activity that standard reporting can't surface. Every targeting decision and pipeline report you build draws from that 25%.
            </p>

            <div className="flex flex-col items-center pt-4">
              <Button size="hero" className="w-full sm:w-auto shadow-xl shadow-blue-500/20" onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}>
                Start Free Trial
              </Button>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-4">
                Free 30-day access. No credit card required.
              </p>
            </div>
          </div>
        </section>

        {/* BLOCK 2: Stat cards */}
        <section className="py-12 bg-white relative z-20 -mt-16">
          <div className="max-w-[1216px] mx-auto px-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all flex flex-col">
                <div className="text-4xl font-black text-blue-600 mb-4 tracking-tighter">Under 1%</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Average CTR</div>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  <span className="text-gray-900 font-bold">99% of your audience engages without clicking.</span> Some of them enter a buying conversation weeks later. Under click-based reporting, their company never shows up in your data.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-lg hover:border-orange-100 transition-all flex flex-col">
                <div className="text-4xl font-black text-orange-500 mb-4 tracking-tighter">75%</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Overpay for Ads</div>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  <span className="text-gray-900 font-bold">75% of B2B advertisers overpay for LinkedIn ads.</span> Your engagement reports list a fraction of the companies that interacted with your campaigns. The rest are captured by LinkedIn but only available through certified partner data access.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-lg hover:border-emerald-100 transition-all flex flex-col">
                <div className="text-4xl font-black text-emerald-500 mb-4 tracking-tighter">1 in 145</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Click-to-lead</div>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  <span className="text-gray-900 font-bold">1 in 145 clicks converts to a lead.</span> The other 144 clicks came from companies you can't identify in standard reports. You can't tell which ones match your buyer profile without account-level data.
                </p>
              </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-6 font-medium">
              Source: DemandSense 2025 LinkedIn B2B Benchmark Report. 100+ advertisers, $500K+ in tracked spend.
            </p>
          </div>
        </section>

        <LogoTicker variant="light" className="bg-gray-50 border-y border-gray-100 text-gray-400 py-8" />

        {/* BLOCK 3: Problem table */}
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
                Your reporting covers what it's designed to cover. Clicks, impressions, CTR, conversions. All useful for managing campaign performance. They describe how your campaigns perform. But which audiences are behind those numbers - and whether they match your target accounts - requires a layer of data standard reporting doesn't surface.
              </p>
            </div>

            <div className="w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] text-left border-collapse">
                  <thead className="bg-[#0F2043] text-white">
                    <tr>
                      <th className="py-6 px-8 font-semibold w-[25%] text-lg border-r border-[#1e345e]">What Standard Reporting Shows</th>
                      <th className="py-6 px-8 font-semibold w-[45%] border-r border-[#1e345e] text-lg">What's Actually Happening</th>
                      <th className="py-6 px-8 font-semibold w-[30%] text-lg text-orange-300">What It Costs You</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-6 px-8 text-gray-900 font-bold text-lg border-r border-gray-100 bg-gray-50/30">"259 companies engaged"</td>
                      <td className="py-6 px-8 text-gray-600 border-r border-gray-100 bg-white">2,216 companies engaged with your ads. Your reporting surfaced 259.</td>
                      <td className="py-6 px-8 text-orange-700 font-medium bg-orange-50/30">Your targeting decisions draw from 12% of the companies that actually responded.</td>
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

            {/* Small Bridge Block */}
            <div className="mt-16 md:mt-24 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0F2043] mb-4">
                The gap is in data access.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                LinkedIn captures company-level engagement data across paid and organic activity. That data is available through LinkedIn's certified partner program.
              </p>
            </div>

          </div>
        </section>

        {/* BLOCK 5.5: How It Works (Blueprint Section) */}
        <section className="py-24 md:py-32 bg-[#0A162E] relative border-t border-white/5">
          <div className="max-w-[1200px] mx-auto px-6">
            
            {/* LAYER 1: HEADLINE BLOCK */}
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-[44px] font-bold text-white mb-4 tracking-tight leading-tight">
                Full engagement data. 4x more companies. One connected view.
              </h2>
              <p className="text-base md:text-lg text-blue-200/60 max-w-3xl mx-auto leading-relaxed">
                Campaign Manager shows you 20% of audience engagement. DemandSense connects to LinkedIn's Company Intelligence API and your CRM, so you see every company that interacted with your brand, not just the ones LinkedIn decided to surface.
              </p>
            </div>

            {/* LAYER 2: THREE STEP CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
              
              {/* Card 1 */}
              <div className="bg-[#121E38] border border-white/10 rounded-[16px] p-6 md:p-8 flex flex-col shadow-none">
                <div className="flex items-center gap-3 mb-4">
                  <Plug className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                  <span className="text-xs uppercase tracking-[0.15em] text-blue-200/50 font-medium">STEP 1</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Connect</h3>
                <p className="text-[15px] text-blue-100/70 leading-relaxed font-normal">
                  Link your LinkedIn ad account and CRM in under 10 minutes. DemandSense pulls data through the Company Intelligence API, the same certified partner access used by fewer than 5 platforms worldwide. No tags. No code. No pixel.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#121E38] border border-white/10 rounded-[16px] p-6 md:p-8 flex flex-col shadow-none">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                  <span className="text-xs uppercase tracking-[0.15em] text-blue-200/50 font-medium">STEP 2</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Reveal</h3>
                <p className="text-[15px] text-blue-100/70 leading-relaxed font-normal">
                  See every company engaging with your LinkedIn ads and organic content in one place. "50 companies in Campaign Manager" becomes "200+ companies across paid and organic." Engagement signals that were split across tabs and reports are now in a single view.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#121E38] border border-white/10 rounded-[16px] p-6 md:p-8 flex flex-col shadow-none">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                  <span className="text-xs uppercase tracking-[0.15em] text-blue-200/50 font-medium">STEP 3</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Attribute</h3>
                <p className="text-[15px] text-blue-100/70 leading-relaxed font-normal">
                  Match engaged companies to CRM deals automatically. See which campaigns influenced pipeline and closed revenue. Your next leadership meeting has real numbers, not click reports.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* BLOCK 6: What DemandSense gives you + proof bar */}
        <section className="pt-24 pb-12 bg-gray-50 border-b border-gray-100">
          <div className="max-w-[1216px] mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <p className="text-2xl md:text-3xl text-gray-900 leading-relaxed font-medium">
                DemandSense shows you which companies responded to your LinkedIn campaigns, paid and organic, at the account level. Connected to your CRM. You see who's engaging, adjust targeting based on that data before your next campaign cycle, and show leadership which campaigns influenced pipeline.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { num: "4x", label: "more companies reached" },
                { num: "14x", label: "more companies engaged" },
                { num: "80%", label: "more leads in CRM" },
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
              Same accounts, same campaigns, same CRM. Compared to standard reporting. From a beta study across DemandSense customers.
            </p>
          </div>
        </section>

        {/* BLOCK 7: VP1 - See */}
        <section className="py-24 px-6 bg-white border-b border-gray-100">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div className="text-blue-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Eye className="w-4 h-4" /> VP 1: See
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                See which companies respond to your ads
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                LinkedIn reporting shows you how many people engaged with a campaign. DemandSense shows you which companies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Companies that saw your ads, watched your video, or interacted with your organic content appear in a single view with engagement level, industry, company size, and campaign source. Paid and organic activity together. You filter by what matters to you and apply your own criteria. DemandSense provides the company-level data. You decide which accounts are worth pursuing.
              </p>
              <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
                <p className="text-sm text-gray-600 text-center italic">
                  One nuance: LinkedIn applies a minimum privacy threshold to engagement data. Companies below that threshold won't surface. So this is companies where enough cumulative engagement across their employees meets LinkedIn's privacy floor. That's still a layer of visibility that wasn't available before this data tier existed.
                </p>
              </div>

              <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 flex gap-5 mt-8 shadow-sm">
                <QuoteIcon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 font-medium italic mb-4 leading-relaxed">
                    "It finds 15 to 20% of that audience, and it serves them an ad 20 times. My ads were exhausting budget before 11 AM and concentrating impressions on a fraction of my target list. Standard reporting didn't show this. The full company-level view made the pattern visible for the first time."
                  </p>
                  <p className="text-sm font-bold text-gray-900">— Chase Hamilton, AssetWatch</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <ScreenshotPlaceholder label="Company Engagement View: List of companies showing paid & organic activity, filters for Industry / Size / Campaign." />
            </div>
          </div>
        </section>

        {/* BLOCK 8: VP2 - Act */}
        <section className="py-24 px-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <ScreenshotPlaceholder label="Campaign Controls: Audience exclusion toggles, existing customer suppression, and budget shifting rules." />
            </div>
            
            <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
              <div className="text-orange-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Zap className="w-4 h-4" /> VP 2: Act
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                Adjust targeting based on real engagement data
              </h3>
              <p className="text-lg text-gray-900 font-medium leading-relaxed">
                Engagement data matters when you can change what happens next. DemandSense puts the engagement data and the campaign controls in the same platform.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Here's what that looks like in practice: Your campaign reaches 400 companies. You open the engagement view and see the full list: company names, engagement levels, industry, size. 120 of those companies don't match your buyer profile. 35 are existing customers seeing a prospecting ad. You can check this because CRM data is already connected.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                You exclude both groups. Next cycle, the same budget runs to a tighter audience. The spend concentrates on accounts that could actually become pipeline.
              </p>

              <div className="space-y-4 pt-2">
                <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest">The broader controls:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-orange-200 bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-orange-600" />
                    </div>
                    <span className="text-gray-700 leading-relaxed text-sm"><strong className="text-gray-900">Exclude companies that don't fit</strong> your buyer profile, based on what the engagement data shows.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-orange-200 bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-orange-600" />
                    </div>
                    <span className="text-gray-700 leading-relaxed text-sm"><strong className="text-gray-900">Remove existing customers</strong> from prospecting campaigns, because CRM data connects to ad targeting.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-orange-200 bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-orange-600" />
                    </div>
                    <span className="text-gray-700 leading-relaxed text-sm"><strong className="text-gray-900">Shift budget toward campaigns</strong> that reach accounts matching your buyer profile, ranked by company-level engagement.</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm text-center">
                <p className="text-sm text-gray-500 font-medium">
                  This won't guarantee every remaining company is a perfect fit. Targeting still depends on the audience parameters you set. But the optimization shifts from "which ad got more clicks" to "which campaign reached more companies that look like our buyers."
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex gap-5 mt-8">
                <QuoteIcon className="w-8 h-8 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 font-medium italic mb-4 leading-relaxed">
                    "If you are using the directly LinkedIn Ads audience for building your list, probably 30% of those targeting will be irrelevant." Daniel went in-house and needed a way to validate his own targeting. DemandSense showed him which accounts were engaging and which didn't match his buyer profile. He adjusted targeting based on what he found.
                  </p>
                  <p className="text-sm font-bold text-gray-900">— Daniel Ashman, Atio</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCK 9: VP3 - Connect */}
        <section className="py-24 px-6 bg-white border-b border-gray-100">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div className="text-purple-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Database className="w-4 h-4" /> VP 3: Connect
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                See which engaged companies are in your pipeline and which are new
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Engagement data becomes useful when it connects to what your sales team already knows. DemandSense matches engaged companies to your CRM automatically. HubSpot and Salesforce.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                You see three things: which engaged companies are already in your pipeline, which have open deals, and which are net new. That third group is often the most valuable. When most of the companies engaging with your ads aren't in your CRM, that's a list of accounts your sales team hasn't talked to. You can pass it to them with context: which campaigns those companies responded to, engagement frequency, and last activity date.
              </p>

              <div className="p-6 bg-purple-50/50 rounded-2xl border border-purple-100 flex gap-5 mt-8 shadow-sm">
                <QuoteIcon className="w-8 h-8 text-purple-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 font-medium italic mb-4 leading-relaxed">
                    Sean came for scheduling, but stayed because he could finally see which accounts matched his target profile. "What percentage of things are falling inside of that, part of the ICP?"
                  </p>
                  <p className="text-sm font-bold text-gray-900">— Sean Christy, MagellanData</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <ScreenshotPlaceholder label="CRM Connection View: Split list showing matched pipeline accounts vs. net new accounts derived from ad engagement." />
            </div>
          </div>
        </section>

        {/* BLOCK 10: VP4 - Prove */}
        <section className="py-24 px-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <ScreenshotPlaceholder label="Attribution Dashboard: Pipeline generated, influenced revenue, and campaigns ranked by pipeline contribution." />
            </div>
            
            <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
              <div className="text-emerald-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <BarChart3 className="w-4 h-4" /> VP 4: Prove
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                Answer "is LinkedIn working?" with pipeline data
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Leadership asks this question. Under standard reporting, you answer with click-through rates and cost per lead. Those metrics describe campaign efficiency. Pipeline influence requires a different dataset.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                DemandSense connects ad engagement to CRM deal stages. You see which campaigns influenced real opportunities and closed revenue, ranked by pipeline contribution. The path from first ad impression to website visit to CRM deal is mapped, including touchpoints from companies that engaged without clicking.
              </p>
              
              <div className="flex items-center gap-6 mt-4">
                <div className="bg-white px-8 py-6 rounded-2xl border border-gray-200 shadow-sm flex-1">
                  <div className="text-4xl font-black text-emerald-600 mb-2">56%</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">More Pipeline Deals Influenced</div>
                </div>
                <div className="bg-white px-8 py-6 rounded-2xl border border-gray-200 shadow-sm flex-1">
                  <div className="text-4xl font-black text-emerald-600 mb-2">48%</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">More Closed-Won Influenced</div>
                </div>
              </div>

              <div className="p-4 bg-gray-100 rounded-xl border border-gray-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Attribution corrects in both directions.</strong> One beta customer's attributed revenue went down from $2.34M to $1.76M because standard methods had been overcrediting LinkedIn for certain outcomes. The company-level data corrected it. If attribution numbers only ever go up, that's flattery, not measurement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCK 11: Before/after table */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0F2043] tracking-tight">
                Managing LinkedIn Ads: Without vs. With
              </h2>
            </div>

            <div className="w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[1000px] text-left border-collapse">
                  <thead className="bg-[#0F2043] text-white">
                    <tr>
                      <th className="py-6 px-8 font-semibold w-[25%] text-lg border-r border-[#1e345e]">Capability</th>
                      <th className="py-6 px-8 font-semibold w-[37.5%] border-r border-[#1e345e] text-lg">Without DemandSense</th>
                      <th className="py-6 px-8 font-extrabold w-[37.5%] bg-blue-900/30 text-blue-300 text-lg">With DemandSense</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { cap: "Engaged accounts identified", without: "Click counts and aggregate metrics. Company names aren't included.", with: "Companies identified by name. Paid and organic engagement matched to accounts." },
                      { cap: "Engagement coverage", without: "Limited to accounts that clicked, plus a fraction of company-level engagement available through standard reporting.", with: "Company-level engagement data across your audience, paid and organic, through certified partner data access." },
                      { cap: "Acting on engagement data", without: "Targeting adjustments based on CTR, CPC, and audience demographics. Adjustments based on which ads get clicks.", with: "Exclude non-fit companies, remove existing customers from prospecting, shift budget to campaigns reaching accounts that match your buyer profile.", highlight: true },
                      { cap: "Attribution scope", without: "Click-based conversions and direct form fills within standard attribution windows.", with: "Full journey: ad engagement (including impressions) → website visit → CRM deal stage. Up to 180-day lookback." },
                      { cap: "Campaign ranking method", without: "Cost per lead. Click-through rate.", with: "Pipeline contribution. Influenced revenue." },
                      { cap: "Time to a leadership-ready report", without: "Export data. Cross-reference in a spreadsheet. Assemble manually.", with: "Filter by date range, campaign, or deal stage in the dashboard." }
                    ].map((row, i) => (
                      <tr key={i} className={cn("transition-colors", row.highlight ? "bg-blue-50/50" : "hover:bg-gray-50/50")}>
                        <td className="py-6 px-8 text-gray-900 font-bold border-r border-gray-100">{row.cap}</td>
                        <td className="py-6 px-8 text-gray-600 border-r border-gray-100">{row.without}</td>
                        <td className="py-6 px-8 text-gray-900 font-medium bg-blue-50/20">{row.with}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCK 12: FAQ */}
        <section className="py-24 px-6 bg-gray-50 border-t border-gray-200">
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

        {/* BLOCK 13: Final CTA */}
        <section className="py-24 md:py-32 px-6 bg-white overflow-hidden">
          <div className="max-w-[1216px] mx-auto">
            <div className="cta-card w-full rounded-[40px] px-8 md:px-16 py-20 md:py-24 flex flex-col items-center text-center relative overflow-hidden border border-blue-100 bg-[#F5F9FF] shadow-2xl">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
                  See which companies engage with your LinkedIn ads. <br className="hidden md:block"/>
                  <span className="text-blue-600">Act on the data before your next campaign cycle. Prove what influenced pipeline.</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  Company-level engagement data from your LinkedIn ads, connected to your CRM, with controls to adjust targeting before the next campaign cycle.
                </p>
                <div className="pt-6 flex flex-col items-center gap-4">
                  <Button size="hero" className="shadow-xl shadow-blue-500/20 px-14 py-8 text-lg bg-blue-600 hover:bg-blue-700" onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}>
                    Start Free Trial
                  </Button>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-2">
                    Free 30-day access. No credit card required.
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