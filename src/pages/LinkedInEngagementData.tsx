"use client";

import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/footer";
import Loader from "@/components/Loader";
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
  Quote, 
  Check, 
  Database, 
  Linkedin, 
  Target, 
  MousePointer2, 
  BarChart3,
  Users,
  ShieldCheck
} from "lucide-react";

// Helper for Screenshot Placeholders
const ScreenshotPlaceholder = ({ label }: { label: string }) => (
  <div className="w-full bg-slate-100 border border-slate-200 rounded-2xl flex items-center justify-center p-8 aspect-[4/3] shadow-inner">
    <p className="text-sm font-medium text-slate-500 text-center max-w-sm leading-relaxed">
      [PLACEHOLDER: {label}]
    </p>
  </div>
);

const LinkedInEngagementData = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900">
      <Navbar />

      <main className="pt-20">
        {/* SECTION 1: HERO */}
        <section className="relative w-full bg-[#0F172A] pt-24 pb-32 px-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            {/* Left Column (Copy) */}
            <div className="lg:col-span-6 space-y-8">
              <div className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">
                LINKEDIN ADS DATA PLATFORM
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] text-white">
                Your LinkedIn ads reach more companies than Campaign Manager shows. <br />
                <span className="text-blue-400">Now you can see them all.</span>
              </h1>
              
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                Company-level engagement data across paid and organic LinkedIn activity, connected to your CRM. The full picture, not the 20%.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Button size="hero" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg shadow-blue-500/20">
                  Start Free Trial
                </Button>
                <Button 
                  size="hero" 
                  variant="outline" 
                  className="w-full sm:w-auto border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See How It Works
                </Button>
              </div>

              <div className="text-xs font-medium text-slate-500 flex flex-wrap items-center gap-x-3 gap-y-2 mt-6">
                <span>100+ B2B advertisers benchmarked</span>
                <span className="hidden sm:inline">·</span>
                <span>280M+ verified profiles</span>
                <span className="hidden sm:inline">·</span>
                <span>Setup in 2 minutes</span>
              </div>
            </div>

            {/* Right Column (Product Visual Widget) */}
            <div className="lg:col-span-6">
              <div className="w-full bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col gap-8">
                {/* Header */}
                <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                  <span className="text-sm font-bold text-slate-300 tracking-wider">ENGAGEMENT REPORT</span>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </div>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { icon: MousePointer2, label: "Capture", desc: "Ad engagement" },
                    { icon: Target, label: "Match", desc: "Company identity" },
                    { icon: Database, label: "Connect", desc: "CRM pipeline" },
                    { icon: BarChart3, label: "Report", desc: "Revenue proof" }
                  ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center text-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400">
                        <step.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-200">{step.label}</div>
                        <div className="text-[10px] text-slate-500">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Integrations */}
                <div className="flex flex-wrap items-center justify-center gap-4 py-4 border-y border-slate-800 my-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-[#0A66C2]" /> LinkedIn Ads
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-[#FF7A59]" /> HubSpot
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-[#00A1E0]" /> Salesforce
                  </div>
                </div>

                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                    <div className="text-2xl font-bold text-white">14x</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1">Companies engaged</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                    <div className="text-2xl font-bold text-white">4x</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1">Companies reached</div>
                  </div>
                  <div className="bg-emerald-500/10 rounded-xl p-4 text-center border border-emerald-500/20">
                    <div className="text-2xl font-bold text-emerald-400">56%</div>
                    <div className="text-[10px] text-emerald-500/70 uppercase tracking-wider mt-1">Pipeline deals influenced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Logo Marquee (Skipped per instructions as no authentic logos exist) */}

        {/* SECTION 3: PROBLEM SECTION */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-12">
              <div className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-4">
                THE DATA GAP
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                You're making LinkedIn decisions on 20% of the data. <br className="hidden md:block"/>
                <span className="text-blue-600">The other 80% exists. You just can't see it yet.</span>
              </h2>
            </div>

            {/* Comparison Table */}
            <div className="w-full bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-800">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-left text-sm md:text-base">
                  <thead className="bg-white/5 border-b border-white/10">
                    <tr>
                      <th className="py-5 px-6 font-semibold text-slate-300 w-1/3">What Campaign Manager Shows</th>
                      <th className="py-5 px-6 font-semibold text-slate-300 w-1/3">Reality</th>
                      <th className="py-5 px-6 font-semibold text-slate-300 w-1/3">Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-5 px-6 text-white font-medium">"812 companies reached"</td>
                      <td className="py-5 px-6 text-slate-300">3,200+ companies actually engaged</td>
                      <td className="py-5 px-6 text-slate-400">Targeting based on 25% of real data</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-5 px-6 text-white font-medium">"47 clicks, 0.87% CTR"</td>
                      <td className="py-5 px-6 text-slate-300">99% of engaged accounts never clicked</td>
                      <td className="py-5 px-6 text-slate-400">Best accounts invisible to click reporting</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-5 px-6 text-white font-medium">Campaign A "outperforming"</td>
                      <td className="py-5 px-6 text-slate-300">Campaign B reaches more ICP accounts</td>
                      <td className="py-5 px-6 text-slate-400">Budget flows to clicks, not target accounts</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-5 px-6 text-white font-medium">"New conversion from Company X"</td>
                      <td className="py-5 px-6 text-slate-300">Company X saw 4 campaigns over 6 weeks</td>
                      <td className="py-5 px-6 text-slate-400">Last-click gets credit, others get cut</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: FOMO CALLOUT 1 */}
        <section className="py-12 bg-white">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-2xl p-8 md:p-12 text-center shadow-sm">
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                75% of B2B advertisers pay over $6 per click on LinkedIn.
              </p>
              <p className="text-lg text-gray-600">
                How many of those clicks come from companies that could actually buy from you?
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: TESTIMONIAL 1 */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="border-l-4 border-blue-600 pl-6 md:pl-10 py-2">
              <Quote className="w-10 h-10 text-blue-600 mb-6 opacity-40 fill-current" />
              <p className="text-xl md:text-2xl font-medium text-gray-900 italic mb-6 leading-relaxed">
                "We discovered our daily budget was getting exhausted before 11 a.m. Eastern. LinkedIn's algorithm found 15 to 20% of our target audience and served them an ad 20 times, while the rest of the list never saw it."
              </p>
              <p className="font-bold text-gray-900 text-lg">
                Chase Hamilton, Digital Marketing Manager, AssetWatch
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: HOW IT WORKS (SOLUTION INTRO) */}
        <section id="how-it-works" className="py-24 bg-[#0F172A] text-center px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">
              HOW IT WORKS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              See every company engaging with your LinkedIn ads. Connect it to your pipeline.
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Full company-level engagement data, CRM attribution, and campaign controls. One platform. $99/month.
            </p>
            <div className="pt-4">
              <Button size="hero" className="bg-blue-600 hover:bg-blue-500 text-white border-none px-10">
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 7: DATA PROOF (BETA METRICS) */}
        <section className="py-24 px-6 bg-slate-50 border-b border-gray-100">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-12">
              <div className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">
                RESULTS FROM DEMANDSENSE CLIENTS
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
              {[
                { num: "4x", label: "more companies reached" },
                { num: "14x", label: "more companies engaged" },
                { num: "80%", label: "more leads matched in CRM" },
                { num: "56%", label: "more pipeline deals influenced" },
                { num: "29%", label: "more total pipeline attributed" },
                { num: "15%", label: "more revenue attributed" }
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl md:text-5xl font-black text-blue-600 tracking-tighter mb-3">
                    {stat.num}
                  </div>
                  <div className="text-sm font-medium text-gray-600 leading-snug max-w-[160px] mx-auto">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-center text-xs text-gray-500 mt-10">
              Data from 12 beta clients comparing Campaign Manager reporting to company-level engagement data.
            </p>
          </div>
        </section>

        {/* SECTION 8: VALUE PROP 1 (SEE) */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6 lg:order-1 order-2">
              <div className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">
                STEP 1: SEE
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                See every company engaging with your LinkedIn ads
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Campaign Manager shows aggregate clicks. DemandSense shows the companies behind them. Every account that engaged with your ads, paid and organic, in one report.
              </p>
              <ul className="space-y-4">
                {[
                  "Company name, industry, and employee count for every engaged account",
                  "Impressions, video views, clicks, and organic interactions",
                  "Up to 100K companies per report (standard tools cap at 15K)",
                  "Filter by campaign, date range, or engagement type"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-base text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 lg:order-2 order-1">
              <ScreenshotPlaceholder label="Company engagement report: list of 20+ companies with columns for Name, Industry, Employees, Impressions, Clicks, Engagement Level. Filter bar at top." />
            </div>
          </div>
        </section>

        {/* SECTION 9: VALUE PROP 2 (CONNECT) */}
        <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <ScreenshotPlaceholder label="Attribution view: CRM pipeline with Company, Deal Stage, Deal Value, LinkedIn Touchpoints, First/Last Touch Date." />
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">
                STEP 2: CONNECT
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                Connect engagement to your CRM pipeline
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                DemandSense maps company-level engagement to CRM deals automatically. When leadership asks "is LinkedIn working?" show them the companies in pipeline that LinkedIn touched.
              </p>
              <ul className="space-y-4">
                {[
                  "Automatic CRM sync (HubSpot and Salesforce)",
                  "See which engaged companies are already in pipeline",
                  "Attribution window up to 6 months",
                  "Influenced pipeline and revenue by campaign"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-base text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 10: VALUE PROP 3 (ACT) */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6 lg:order-1 order-2">
              <div className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">
                STEP 3: ACT
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                Act on what you see. Control how your ads deliver.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                DemandSense gives you the controls Campaign Manager doesn't. Schedule ads by time zone. Cap frequency on every ad type. Tune audiences based on engagement data.
              </p>
              <ul className="space-y-4">
                {[
                  "Ad scheduling by day, time, and time zone",
                  "Frequency capping on all ad types (including lead gen)",
                  "Audience tuning based on which companies actually engaged",
                  "Budget controls to prevent off-hours overspend"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-base text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 lg:order-2 order-1">
              <ScreenshotPlaceholder label="Scheduling interface: weekly grid with active hours (8am-6pm Mon-Fri). Frequency cap setting. Campaign list with toggles." />
            </div>
          </div>
        </section>

        {/* SECTION 11: TESTIMONIAL 2 */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="border-l-4 border-blue-600 pl-6 md:pl-10 py-2">
              <Quote className="w-10 h-10 text-blue-600 mb-6 opacity-40 fill-current" />
              <p className="text-xl md:text-2xl font-medium text-gray-900 italic mb-6 leading-relaxed">
                "The question I kept asking was: what percentage of the companies engaging with my ads are actually part of my ICP? I couldn't answer that before."
              </p>
              <p className="font-bold text-gray-900 text-lg">
                Sean Christy, CEO, MagellanData
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 12: FOMO CALLOUT 2 */}
        <section className="py-12 bg-white">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-2xl p-8 md:p-12 text-center shadow-sm">
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                The average B2B campaign converts 1 in 145 clicks to a lead.
              </p>
              <p className="text-lg text-gray-600">
                Do you know which of the other 144 were from accounts worth retargeting?
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 13: FAQ */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[720px] mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 tracking-tight">
              Common questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How is this different from LinkedIn Campaign Manager?",
                  a: "Campaign Manager shows aggregate clicks, impressions, and cost per result. It doesn't show which companies engaged. DemandSense gives you company-level engagement data across paid and organic activity, with up to 100K companies per report."
                },
                {
                  q: "Do I need to change my LinkedIn setup?",
                  a: "No. Connect your LinkedIn ad account to DemandSense in about 2 minutes. Engagement data starts flowing automatically. CRM integration is optional but recommended."
                },
                {
                  q: "How much does it cost?",
                  a: "$99/month. No annual commitment. 30-day free trial with full access. No credit card needed."
                },
                {
                  q: "Does this replace Campaign Manager?",
                  a: "No. You keep using Campaign Manager to run ads. DemandSense is the visibility and control layer above it: company-level engagement, organic activity, CRM connections, scheduling, and frequency caps."
                },
                {
                  q: "What CRMs are supported?",
                  a: "HubSpot and Salesforce are fully integrated. Airtable and Zoho are in development. All engagement data and campaign controls work without a CRM connection."
                },
                {
                  q: "How quickly will I see data?",
                  a: "Company-level engagement data populates within 24-48 hours of connecting your account."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-gray-200">
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

        {/* SECTION 14: FINAL CTA */}
        <section className="py-24 md:py-32 px-6 bg-[#0F172A] text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              See the 80% of LinkedIn engagement you've been missing.
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Company-level engagement. CRM attribution. Campaign controls. $99/month.
            </p>
            <div className="pt-4 flex flex-col items-center gap-4">
              <Button size="hero" className="bg-blue-600 hover:bg-blue-700 text-white border-none px-12">
                Start Free Trial
              </Button>
              <p className="text-sm font-medium text-slate-500">
                30-day free access. No credit card required. Connect in 2 minutes.
              </p>
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