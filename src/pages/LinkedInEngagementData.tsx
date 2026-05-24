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
  ArrowRight, 
  Database, 
  Linkedin, 
  Target, 
  MousePointer2, 
  BarChart3,
  Users,
  AlertCircle,
  Zap,
  Layers,
  HelpCircle,
  Activity,
  FileText,
  Eye,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Search
} from "lucide-react";

// Helper for Screenshot Placeholders
const ScreenshotPlaceholder = ({ label }: { label: string }) => (
  <div className="magic-border h-full w-full group" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
    <div className="relative flex justify-center items-center bg-slate-900 rounded-[inherit] p-8 md:p-12 min-h-[400px] overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      <div className="relative z-10 w-full bg-slate-800/80 border border-slate-700/50 rounded-2xl flex items-center justify-center p-8 aspect-[4/3] shadow-inner backdrop-blur-sm">
        <p className="text-sm font-medium text-blue-400 text-center max-w-sm leading-relaxed tracking-wide">
          [PLACEHOLDER: {label}]
        </p>
      </div>
    </div>
  </div>
);

const LinkedInEngagementData = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900">
      <Navbar />

      <main className="pt-20 overflow-x-hidden">
        {/* BLOCK 1: HERO HOOK */}
        <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center pt-24 pb-20 bg-white">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#3875F6]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-[#FA8C16]/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
          
          <div className="max-w-[800px] mx-auto px-6 text-center space-y-8 relative z-10">
            <div className="flex justify-center">
              <SectionBadge icon={Target} text="LINKEDIN ENGAGEMENT VISIBILITY" />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.1] text-[#0F2043]">
              Your LinkedIn ads engage way more companies than reports show. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3875F6] to-[#7486AA]">
                You're optimizing on the fraction that's visible.
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-[700px] mx-auto leading-relaxed">
              Standard reporting covers clicks and impressions. That's under 1% of the audience that saw your ad. The companies actually responding to your campaigns outnumber what your reports surface by 4 to 1.
            </p>

            <div className="flex flex-col items-center pt-2">
              <Button size="hero" className="w-full sm:w-auto shadow-xl shadow-blue-500/20" onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}>
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>

        {/* BLOCK 2: STAT CARDS */}
        <section className="py-12 bg-white relative z-20 -mt-16">
          <div className="max-w-[1216px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-transform hover:-translate-y-1">
                <div className="text-4xl font-black text-blue-600 mb-4 tracking-tighter">< 1% avg CTR</div>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  <span className="text-gray-900 font-bold">99% of your audience engages without clicking.</span> They see the ad, remember the brand, and come back later through a path your reports can't track.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-transform hover:-translate-y-1">
                <div className="text-4xl font-black text-orange-500 mb-4 tracking-tighter">75% overpay</div>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  <span className="text-gray-900 font-bold">75% of B2B advertisers overpay for LinkedIn ads.</span> Without account-level data, there's no way to tell which clicks came from companies on your target list.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-transform hover:-translate-y-1">
                <div className="text-4xl font-black text-emerald-500 mb-4 tracking-tighter">1 in 145</div>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  <span className="text-gray-900 font-bold">1 in 145 clicks converts to a lead.</span> The other 144 clicks came from someone. You just don't know which companies they represent.
                </p>
              </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-6 font-medium">
              Source: DemandSense 2025 LinkedIn B2B Benchmark Report. 100+ advertisers, $500K+ in tracked spend.
            </p>
          </div>
        </section>

        <LogoTicker variant="light" className="bg-gray-50 border-y border-gray-100 text-gray-400 py-8" />

        {/* BLOCK 3: PROBLEM TABLE */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <SectionBadge icon={AlertCircle} text="THE BLIND SPOT" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight">
                What's happening in your account <span className="text-blue-600">right now</span>
              </h2>
            </div>

            <div className="w-full bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] text-left border-collapse">
                  <thead className="bg-[#0F2043] text-white">
                    <tr>
                      <th className="py-6 px-8 font-semibold w-1/3 text-lg">What Standard Reporting Shows</th>
                      <th className="py-6 px-8 font-semibold w-1/3 border-l border-white/10 text-lg">What's Actually Happening</th>
                      <th className="py-6 px-8 font-semibold w-1/3 border-l border-white/10 text-lg">What It Costs You</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50/50 transition-colors group">
                      <td className="py-6 px-8 text-gray-900 font-bold text-lg">"320 companies engaged"</td>
                      <td className="py-6 px-8 text-gray-600 border-l border-gray-100">1,280 companies engaged with your ads. Standard reporting surfaces roughly a quarter of them.</td>
                      <td className="py-6 px-8 text-orange-600 font-medium border-l border-gray-100 bg-orange-50/30">You're making targeting decisions on a fraction of your real audience.</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors group">
                      <td className="py-6 px-8 text-gray-900 font-bold text-lg">"142 clicks this month"</td>
                      <td className="py-6 px-8 text-gray-600 border-l border-gray-100">99% of your audience engaged without clicking. Those companies don't appear anywhere in your reports.</td>
                      <td className="py-6 px-8 text-orange-600 font-medium border-l border-gray-100 bg-orange-50/30">You can't see which non-clicking companies are worth retargeting or handing to sales.</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors group">
                      <td className="py-6 px-8 text-gray-900 font-bold text-lg">"Campaign A outperforming"</td>
                      <td className="py-6 px-8 text-gray-600 border-l border-gray-100">Campaign B influenced more pipeline. Standard metrics can't show you that. Engagement data isn't matched to companies.</td>
                      <td className="py-6 px-8 text-orange-600 font-medium border-l border-gray-100 bg-orange-50/30">You scale the campaign that clicks well. The one reaching the right accounts gets cut.</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors group">
                      <td className="py-6 px-8 text-gray-900 font-bold text-lg">"New conversion"</td>
                      <td className="py-6 px-8 text-gray-600 border-l border-gray-100">An existing customer clicking a prospecting ad. You can't tell without account-level data.</td>
                      <td className="py-6 px-8 text-orange-600 font-medium border-l border-gray-100 bg-orange-50/30">You pay to "acquire" companies already in your CRM.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCK 4 & 5: THE REFRAME / BENCHMARK CALLOUT */}
        <section className="py-24 bg-[#0F2043] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-[800px] mx-auto px-6 text-center space-y-10 relative z-10">
            <h2 className="text-3xl md:text-4xl font-normal text-blue-100 leading-relaxed">
              The engagement data exists at the company level. It's available through LinkedIn's certified partners. <span className="font-bold text-white">DemandSense is one of them.</span>
            </h2>

            <div className="w-full h-px bg-blue-900/50 my-12" />

            <div className="space-y-6">
              <div className="inline-flex text-orange-400 font-bold tracking-widest uppercase text-sm border-b-2 border-orange-400 pb-1 mb-2">
                The Unanswerable Question
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                75% of B2B advertisers overpay for LinkedIn ads.
              </h3>
              <p className="text-2xl text-blue-200">
                Do you know which companies from your target list actually engaged last month?
              </p>
            </div>
          </div>
        </section>

        {/* BLOCK 6: WHAT DS GIVES YOU + PROOF BAR */}
        <section className="py-24 bg-gray-50 border-b border-gray-100">
          <div className="max-w-[1216px] mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <p className="text-2xl md:text-3xl text-gray-900 leading-relaxed font-medium">
                DemandSense shows you every company engaging with your LinkedIn ads, paid and organic, at the account level. Connected to your CRM. You see who's engaging, act on it before the next campaign cycle, and prove what influenced pipeline when leadership asks.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { num: "4x", label: "more companies reached" },
                { num: "14x", label: "more companies engaged" },
                { num: "80%", label: "more leads in CRM" },
                { num: "56%", label: "more pipeline deals influenced" }
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
                  <div className="text-4xl md:text-5xl font-black text-[#0F2043] tracking-tighter mb-2">
                    {stat.num}
                  </div>
                  <div className="text-sm font-bold text-blue-600 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOCK 7: VP1 - SEE */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div className="text-[#3875F6] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Eye className="w-4 h-4" /> VP 1: See
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
                See which companies engage
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every company that interacted with your ads appears in a single view. Paid and organic activity together. Filter by engagement level, industry, company size, campaign.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                You see the full audience and apply your own criteria. DemandSense gives you the dataset. You decide which accounts matter.
              </p>

              {/* Seamless Quote */}
              <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 flex gap-4">
                <Quote className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 font-medium italic mb-3">
                    "It finds 15 to 20% of that audience, and it serves them an ad 20 times. My ads were exhausting budget before 11 AM and concentrating impressions on a fraction of my target list. Standard reporting showed none of this."
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

        {/* BLOCK 8: VP2 - ACT */}
        <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <ScreenshotPlaceholder label="Campaign Controls: Audience exclusion toggles, existing customer suppression, and budget shifting rules within the platform." />
            </div>
            
            <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
              <div className="text-orange-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Activity className="w-4 h-4" /> VP 2: Act (The Differentiator)
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
                Act on what you see
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Engagement data is only useful when you can change what happens next.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-orange-600" />
                  </div>
                  <span className="text-gray-700 leading-snug"><strong className="text-gray-900">Exclude non-fit companies</strong> from future campaigns based on engagement patterns.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-orange-600" />
                  </div>
                  <span className="text-gray-700 leading-snug"><strong className="text-gray-900">Remove existing customers</strong> from prospecting audiences by connecting CRM data to ad targeting.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-orange-600" />
                  </div>
                  <span className="text-gray-700 leading-snug"><strong className="text-gray-900">Shift budget to what works</strong> based on campaigns reaching accounts that match your buyer profile.</span>
                </li>
              </ul>

              <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex gap-4">
                <Quote className="w-8 h-8 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 font-medium italic mb-3">
                    "If you are using the direct LinkedIn Ads audience for building your list, probably 30% of those targeted will be irrelevant. DemandSense showed me which accounts were engaging and which didn't match my buyer profile."
                  </p>
                  <p className="text-sm font-bold text-gray-900">— Daniel Ashman, Atio</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCK 9: VP3 - CONNECT */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div className="text-purple-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Database className="w-4 h-4" /> VP 3: Connect
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
                Connect engagement to your CRM
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Engaged companies are matched to your CRM automatically. HubSpot and Salesforce. See which engaged companies are already in pipeline, which are net new, and which have open deals.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When most of the companies engaging with your ads aren't in your CRM yet, that's a prospecting list your sales team has never seen. Hand it to them with context.
              </p>

              <div className="p-6 bg-purple-50/50 rounded-2xl border border-purple-100 flex gap-4">
                <Quote className="w-8 h-8 text-purple-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 font-medium italic mb-3">
                    "I came for the scheduling, but stayed because I could finally see which accounts matched my target profile. What percentage of things are falling inside of that, part of the ICP?"
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

        {/* BLOCK 10: VP4 - PROVE */}
        <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <ScreenshotPlaceholder label="Attribution Dashboard: Pipeline generated, influenced revenue, and campaigns ranked by pipeline contribution." />
            </div>
            
            <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
              <div className="text-emerald-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <BarChart3 className="w-4 h-4" /> VP 4: Prove
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
                Prove which campaigns influence real deals
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your CEO asks "is LinkedIn working?" and you need to answer with pipeline data. DemandSense connects ad engagement to CRM deal stages.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                You see which campaigns influenced real opportunities and closed revenue, ranked by pipeline contribution instead of just clicks or leads.
              </p>
              
              <div className="flex items-center gap-6 mt-6">
                <div className="bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm flex-1">
                  <div className="text-3xl font-black text-emerald-600 mb-1">56%</div>
                  <div className="text-xs font-bold text-gray-600 uppercase tracking-widest">More Pipeline Influenced</div>
                </div>
                <div className="bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm flex-1">
                  <div className="text-3xl font-black text-emerald-600 mb-1">48%</div>
                  <div className="text-xs font-bold text-gray-600 uppercase tracking-widest">More Closed-Won Influenced</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCK 11: BEFORE/AFTER TABLE */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0F2043] tracking-tight">
                Managing LinkedIn Ads: Without vs. With DemandSense
              </h2>
            </div>

            <div className="w-full bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[1000px] text-left border-collapse">
                  <thead className="bg-[#0F2043] text-white">
                    <tr>
                      <th className="py-6 px-8 font-semibold w-1/4 text-lg">Capability</th>
                      <th className="py-6 px-8 font-semibold w-1/3 border-l border-white/10 text-lg">Without DemandSense</th>
                      <th className="py-6 px-8 font-extrabold w-1/3 border-l text-blue-400 bg-blue-900/30 text-lg">With DemandSense</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { cap: "Engaged accounts identified", without: "Click counts and aggregate metrics. Company names aren't included.", with: "Every company identified. Paid and organic engagement matched to accounts." },
                      { cap: "Engagement coverage", without: "Limited to accounts that clicked or a fraction of total engagement.", with: "Full engagement data across your entire audience, paid and organic." },
                      { cap: "Acting on engagement data", without: "Targeting adjustments based on click metrics and assumptions.", with: "Exclude non-fit companies, remove existing customers from prospecting, shift budget.", highlight: true },
                      { cap: "Attribution scope", without: "Click-based conversions and direct form fills.", with: "Full journey: ad engagement → website visit → CRM deal stage." },
                      { cap: "Campaign ranking method", without: "Cost per lead. Click-through rate.", with: "Pipeline contribution. Influenced revenue." },
                      { cap: "Time to leadership report", without: "Export data. Cross-reference in a spreadsheet. Assemble manually.", with: "Filter by date range, campaign, or deal stage in the dashboard." }
                    ].map((row, i) => (
                      <tr key={i} className={cn("transition-colors", row.highlight ? "bg-blue-50/50" : "hover:bg-gray-50/50")}>
                        <td className="py-6 px-8 text-gray-900 font-bold">{row.cap}</td>
                        <td className="py-6 px-8 text-gray-600 border-l border-gray-100">{row.without}</td>
                        <td className="py-6 px-8 text-gray-900 font-medium border-l border-gray-100 bg-blue-50/20">{row.with}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-center mt-6 text-sm text-gray-500 font-medium">
              The <span className="font-bold text-gray-900 bg-gray-100 px-2 py-0.5 rounded">Acting on engagement data</span> row is what separates DemandSense from reporting-only tools.
            </p>
          </div>
        </section>

        {/* BLOCK 12: FAQ */}
        <section className="py-24 px-6 bg-gray-50 border-t border-gray-200">
          <div className="max-w-[720px] mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F2043] tracking-tight">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "What data does DemandSense show that standard reporting doesn't?", a: "Company-level engagement data across paid and organic LinkedIn activity. You see which specific companies engaged, how they engaged, and whether they're already in your CRM. This includes the 99%+ of your audience that engaged without clicking." },
                { q: "How does DemandSense get this data?", a: "DemandSense is a LinkedIn certified partner with access to company-level engagement data. This includes organic interactions alongside paid ad activity, with coverage across your full audience." },
                { q: "Can I act on the data, or is this just a report?", a: "You can act on it. Exclude non-fit companies from campaigns, remove existing customers from prospecting audiences, adjust targeting based on engagement patterns, and shift budget to campaigns reaching the right accounts. The engagement data and campaign controls live in the same platform." },
                { q: "Which CRMs does DemandSense integrate with?", a: "HubSpot and Salesforce. Engaged companies are automatically matched to your CRM records. You see which engaged accounts are in pipeline, which are net new, and which have open deals." },
                { q: "How long does setup take?", a: "Connect your LinkedIn ad account and CRM. Most users see engagement data within 24 hours. No pixel installation required for LinkedIn engagement data." },
                { q: "How much does it cost?", a: "Plans start at $99/month. Full access to engagement data, CRM matching, campaign controls, and attribution. No per-seat pricing. Cancel anytime." },
                { q: "Does this replace my current ad management tools?", a: "DemandSense is a visibility and control layer. You still run campaigns where you run them. DemandSense gives you company-level engagement data across paid and organic activity, controls to act on it, and CRM-connected attribution." }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-gray-200 bg-white px-6 rounded-xl shadow-sm mb-4">
                  <AccordionTrigger className="text-left font-bold text-gray-900 py-6 hover:text-blue-600 transition-colors text-lg">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-600 leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* BLOCK 13: FINAL CTA */}
        <section className="py-24 md:py-32 px-6 bg-white overflow-hidden">
          <div className="max-w-[1216px] mx-auto">
            <div className="cta-card w-full rounded-[32px] px-8 md:px-16 py-20 md:py-24 flex flex-col items-center text-center relative overflow-hidden border border-blue-100 bg-[#F5F9FF] shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
                  See which companies engage. <br className="hidden md:block"/>
                  <span className="text-blue-600">Act on it. Prove what works.</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  Company-level engagement data from your LinkedIn ads, connected to your CRM, with controls to adjust targeting before the next campaign cycle.
                </p>
                <div className="pt-6 flex flex-col items-center gap-4">
                  <Button size="hero" className="shadow-xl shadow-blue-500/20 px-12 bg-blue-600 hover:bg-blue-700" onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}>
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

// Quote Icon Helper
const Quote = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

export default LinkedInEngagementData;