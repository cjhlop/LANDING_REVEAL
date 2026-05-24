"use client";

import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/footer";
import Loader from "@/components/Loader";
import LogoTicker from "@/components/LogoTicker";
import SectionBadge from "@/components/SectionBadge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  Target, 
  Link as LinkIcon, 
  Search, 
  ArrowRight,
  Check,
  Linkedin,
  Database,
  CloudCog,
  CheckCircle2,
  Quote
} from "lucide-react";

const ScreenshotPlaceholder = ({ label }: { label: string }) => (
  <div className="w-full bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center p-8 aspect-[16/10] shadow-sm text-center">
    <p className="text-sm font-medium text-slate-500 max-w-sm">
      [PLACEHOLDER: {label}]
    </p>
  </div>
);

const handleTrialAction = () => {
  document.dispatchEvent(new CustomEvent("open-get-access"));
};

const scrollToHowItWorks = () => {
  document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
};

const LinkedInEngagementData = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
      <Navbar />

      <main className="pt-20">
        
        {/* SECTION 1: HERO */}
        <section className="relative w-full pt-20 pb-24 md:pt-32 md:pb-32 px-6 bg-[#0F2043] overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Copy Column */}
            <div className="space-y-8">
              <div className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">
                LINKEDIN ADS DATA PLATFORM
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Your LinkedIn ads reach more companies than Campaign Manager shows. <br />
                <span className="text-[#3875F6]">Now you can see them all.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
                Company-level engagement data across paid and organic LinkedIn activity, connected to your CRM. The full picture, not the 20%.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Button size="hero" onClick={handleTrialAction} className="w-full sm:w-auto">
                  Start Free Trial
                </Button>
                <Button size="hero" variant="outline" onClick={scrollToHowItWorks} className="w-full sm:w-auto text-white border-slate-600 hover:bg-slate-800 hover:text-white">
                  See How It Works
                </Button>
              </div>

              <div className="text-[13px] text-slate-400 font-medium">
                100+ B2B advertisers benchmarked · 280M+ verified profiles · Setup in 2 minutes
              </div>
            </div>

            {/* Visual Column */}
            <div className="w-full lg:max-w-lg mx-auto">
              <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden text-left ring-1 ring-white/10">
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-slate-800 bg-slate-900/50">
                  <span className="text-[11px] font-bold text-slate-300 tracking-wider">ENGAGEMENT REPORT</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-widest">Live</span>
                  </div>
                </div>

                {/* Steps */}
                <div className="p-6 border-b border-slate-800 bg-slate-800/20">
                  <div className="grid grid-cols-4 gap-2">
                    <div className="flex flex-col items-center text-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><Target className="w-4 h-4" /></div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-200">Capture</div>
                        <div className="text-[9px] text-slate-500">Ad engagement</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><Search className="w-4 h-4" /></div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-200">Match</div>
                        <div className="text-[9px] text-slate-500">Company identity</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><LinkIcon className="w-4 h-4" /></div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-200">Connect</div>
                        <div className="text-[9px] text-slate-500">CRM pipeline</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400"><BarChart3 className="w-4 h-4" /></div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-200">Report</div>
                        <div className="text-[9px] text-slate-500">Revenue proof</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Integrations */}
                <div className="px-6 py-4 border-b border-slate-800 flex justify-center gap-6 text-[10px] font-medium text-slate-400 uppercase tracking-widest">
                  <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#0A66C2]" /> LinkedIn Ads</div>
                  <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#FF7A59]" /> HubSpot</div>
                  <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#00A1E0]" /> Salesforce</div>
                </div>

                {/* Stats */}
                <div className="p-6 grid grid-cols-3 gap-4">
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                    <div className="text-2xl font-bold text-white tracking-tight mb-1">14x</div>
                    <div className="text-[10px] text-slate-400 uppercase leading-snug">Companies<br/>engaged</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                    <div className="text-2xl font-bold text-white tracking-tight mb-1">4x</div>
                    <div className="text-[10px] text-slate-400 uppercase leading-snug">Companies<br/>reached</div>
                  </div>
                  <div className="bg-emerald-500/10 rounded-xl p-4 text-center border border-emerald-500/20">
                    <div className="text-2xl font-bold text-emerald-400 tracking-tight mb-1">56%</div>
                    <div className="text-[10px] text-emerald-500/70 uppercase leading-snug">Pipeline deals<br/>influenced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: LOGO MARQUEE */}
        <LogoTicker variant="light" className="bg-gray-50 border-gray-100 text-gray-500" />

        {/* SECTION 3: PROBLEM SECTION */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-16 space-y-6">
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                THE DATA GAP
              </div>
              <h2 className="text-3xl md:text-[42px] font-bold text-gray-900 tracking-tight leading-tight">
                You're making LinkedIn decisions on 20% of the data. <br />
                <span className="text-[#3875F6]">The other 80% exists. You just can't see it yet.</span>
              </h2>
            </div>

            <div className="w-full overflow-x-auto rounded-xl border border-slate-800 bg-[#0F172A] shadow-2xl">
              <table className="w-full text-left min-w-[700px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="py-4 px-6 text-sm font-semibold text-white/60">What Campaign Manager Shows</th>
                    <th className="py-4 px-6 text-sm font-semibold text-white/60">Reality</th>
                    <th className="py-4 px-6 text-sm font-semibold text-white/60">Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 text-[15px] text-white/80">"812 companies reached"</td>
                    <td className="py-4 px-6 text-[15px] text-white/80">3,200+ companies actually engaged</td>
                    <td className="py-4 px-6 text-[15px] text-white/80">Targeting based on 25% of real data</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 text-[15px] text-white/80">"47 clicks, 0.87% CTR"</td>
                    <td className="py-4 px-6 text-[15px] text-white/80">99% of engaged accounts never clicked</td>
                    <td className="py-4 px-6 text-[15px] text-white/80">Best accounts invisible to click reporting</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 text-[15px] text-white/80">Campaign A "outperforming"</td>
                    <td className="py-4 px-6 text-[15px] text-white/80">Campaign B reaches more ICP accounts</td>
                    <td className="py-4 px-6 text-[15px] text-white/80">Budget flows to clicks, not target accounts</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 text-[15px] text-white/80">"New conversion from Company X"</td>
                    <td className="py-4 px-6 text-[15px] text-white/80">Company X saw 4 campaigns over 6 weeks</td>
                    <td className="py-4 px-6 text-[15px] text-white/80">Last-click gets credit, others get cut</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 4: FOMO CALLOUT */}
        <section className="py-16 px-6">
          <div className="max-w-[1000px] mx-auto bg-blue-50 border border-blue-200 rounded-3xl p-10 md:p-16 text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              75% of B2B advertisers pay over $6 per click on LinkedIn.
            </h3>
            <p className="text-lg text-gray-600">
              How many of those clicks come from companies that could actually buy from you?
            </p>
          </div>
        </section>

        {/* SECTION 5: TESTIMONIAL 1 */}
        <section className="py-16 px-6">
          <div className="max-w-[800px] mx-auto bg-gray-50 border-l-4 border-[#3875F6] rounded-r-2xl p-8 md:p-12">
            <Quote className="w-8 h-8 text-[#3875F6] mb-6" />
            <blockquote className="text-xl text-gray-800 leading-relaxed italic mb-8">
              "We discovered our daily budget was getting exhausted before 11 a.m. Eastern. LinkedIn's algorithm found 15 to 20% of our target audience and served them an ad 20 times, while the rest of the list never saw it."
            </blockquote>
            <div className="font-bold text-gray-900">
              Chase Hamilton, Digital Marketing Manager, AssetWatch
            </div>
          </div>
        </section>

        {/* SECTION 6: HOW IT WORKS INTRO */}
        <section id="how-it-works" className="py-24 px-6 bg-[#0F2043] text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-[11px] font-bold text-[#3875F6] uppercase tracking-widest">
              HOW IT WORKS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              See every company engaging with your LinkedIn ads. Connect it to your pipeline.
            </h2>
            <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
              Full company-level engagement data, CRM attribution, and campaign controls. One platform. $99/month.
            </p>
            <div className="pt-4">
              <Button size="hero" onClick={handleTrialAction}>
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 7: DATA PROOF (BETA METRICS) */}
        <section className="py-24 px-6 bg-white border-b border-gray-100">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                RESULTS FROM DEMANDSENSE CLIENTS
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
              {[
                { num: "4x", label: "more companies reached" },
                { num: "14x", label: "more companies engaged" },
                { num: "80%", label: "more leads matched in CRM" },
                { num: "56%", label: "more pipeline deals influenced" },
                { num: "29%", label: "more total pipeline attributed" },
                { num: "15%", label: "more revenue attributed" }
              ].map((stat, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center hover:border-blue-200 transition-colors">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">{stat.num}</div>
                  <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="text-center text-sm text-gray-400">
              Data from 12 beta clients comparing Campaign Manager reporting to company-level engagement data.
            </div>
          </div>
        </section>

        {/* SECTION 8: VALUE PROP 1 (SEE) */}
        <section className="py-24 px-6">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                STEP 1: SEE
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                See every company engaging with your LinkedIn ads
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
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
                    <ArrowRight className="h-5 w-5 text-[#3875F6] flex-shrink-0 mt-0.5" />
                    <span className="text-base text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <ScreenshotPlaceholder label="Company engagement report: list of 20+ companies with columns for Name, Industry, Employees, Impressions, Clicks, Engagement Level. Filter bar at top." />
            </div>
          </div>
        </section>

        {/* SECTION 9: VALUE PROP 2 (CONNECT) */}
        <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScreenshotPlaceholder label="Attribution view: CRM pipeline with Company, Deal Stage, Deal Value, LinkedIn Touchpoints, First/Last Touch Date." />
            </div>
            <div className="space-y-8">
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                STEP 2: CONNECT
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                Connect engagement to your CRM pipeline
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
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
                    <ArrowRight className="h-5 w-5 text-[#3875F6] flex-shrink-0 mt-0.5" />
                    <span className="text-base text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 10: VALUE PROP 3 (ACT) */}
        <section className="py-24 px-6">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                STEP 3: ACT
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                Act on what you see. Control how your ads deliver.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
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
                    <ArrowRight className="h-5 w-5 text-[#3875F6] flex-shrink-0 mt-0.5" />
                    <span className="text-base text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <ScreenshotPlaceholder label="Scheduling interface: weekly grid with active hours (8am-6pm Mon-Fri). Frequency cap setting. Campaign list with toggles." />
            </div>
          </div>
        </section>

        {/* SECTION 11: TESTIMONIAL 2 */}
        <section className="py-16 px-6">
          <div className="max-w-[800px] mx-auto bg-gray-50 border-l-4 border-[#3875F6] rounded-r-2xl p-8 md:p-12">
            <Quote className="w-8 h-8 text-[#3875F6] mb-6" />
            <blockquote className="text-xl text-gray-800 leading-relaxed italic mb-8">
              "The question I kept asking was: what percentage of the companies engaging with my ads are actually part of my ICP? I couldn't answer that before."
            </blockquote>
            <div className="font-bold text-gray-900">
              Sean Christy, CEO, MagellanData
            </div>
          </div>
        </section>

        {/* SECTION 12: FOMO CALLOUT #2 */}
        <section className="py-16 px-6">
          <div className="max-w-[1000px] mx-auto bg-blue-50 border border-blue-200 rounded-3xl p-10 md:p-16 text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              The average B2B campaign converts 1 in 145 clicks to a lead.
            </h3>
            <p className="text-lg text-gray-600">
              Do you know which of the other 144 were from accounts worth retargeting?
            </p>
          </div>
        </section>

        {/* SECTION 13: FAQ */}
        <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-[720px] mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight text-center">
              Common questions
            </h2>
            <Accordion type="single" collapsible className="w-full bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
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
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-gray-100 px-6">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 py-5 hover:text-blue-600 transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* SECTION 14: FINAL CTA */}
        <section className="py-24 md:py-32 px-6 bg-[#0F2043] text-center">
          <div className="max-w-[800px] mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
              See the 80% of LinkedIn engagement you've been missing.
            </h2>
            <p className="text-xl text-blue-200/80">
              Company-level engagement. CRM attribution. Campaign controls. $99/month.
            </p>
            <div className="pt-4 flex flex-col items-center gap-4">
              <Button size="hero" onClick={handleTrialAction}>
                Start Free Trial
              </Button>
              <div className="text-sm text-slate-400">
                30-day free access. No credit card required. Connect in 2 minutes.
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