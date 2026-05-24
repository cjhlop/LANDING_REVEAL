"use client";

import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/footer";
import Loader from "@/components/Loader";
import SectionBadge from "@/components/SectionBadge";
import LogoTicker from "@/components/LogoTicker";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Quote, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

// Helper for UI Screenshots
const ScreenshotPlaceholder = ({ label, className }: { label: string; className?: string }) => (
  <div 
    className={cn(
      "w-full bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center p-8 aspect-[16/10] shadow-sm",
      className
    )}
  >
    <p className="text-sm font-medium text-slate-500 text-center max-w-sm px-4">
      [PLACEHOLDER: {label}]
    </p>
  </div>
);

const AudienceEngagement = () => {
  const handleCTA = () => {
    document.dispatchEvent(new CustomEvent("open-get-access"));
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="pt-20">
        
        {/* SECTION 1: HERO */}
        <section className="py-20 md:py-32 px-6">
          <div className="max-w-[720px] mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-center mb-6">
              <SectionBadge text="LINKEDIN ADS DATA PLATFORM" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-gray-900 leading-[1.1]">
              Your LinkedIn ads reach more companies than Campaign Manager shows. <br />
              <span className="text-blue-600">Now you can see them all.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
              DemandSense reveals every company engaging with your LinkedIn ads and connects it to your CRM. Paid and organic. The full picture, not the 20%.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="hero" onClick={handleCTA} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                Start Free Trial
              </Button>
              <Button size="hero" variant="outline" asChild className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-50">
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 font-medium">
              30-day free access. No credit card required.
            </p>
          </div>
        </section>

        {/* SECTION 2: TRUST BAR */}
        <section className="py-12 bg-slate-50 border-y border-transparent">
          <div className="max-w-[1216px] mx-auto px-6">
            <div className="text-sm md:text-base font-medium text-gray-600 text-center flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-300">
              <span className="px-4 py-2 md:py-0">Powered by 280M+ verified B2B profiles</span>
              <span className="px-4 py-2 md:py-0">Paid and organic LinkedIn engagement</span>
              <span className="px-4 py-2 md:py-0">100+ B2B advertisers benchmarked</span>
            </div>
          </div>
        </section>
        {/* Scrolling Logo Carousel */}
        <LogoTicker variant="light" />

        {/* SECTION 3: PROBLEM SECTION */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1000px] mx-auto space-y-12">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <SectionBadge text="THE DATA GAP" />
              </div>
              <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 tracking-tight leading-tight">
                You're making LinkedIn decisions on 20% of the data. <br />
                <span className="text-blue-600">The other 80% exists. You just can't see it yet.</span>
              </h2>
            </div>

            <div className="w-full overflow-x-auto pb-4 pt-4">
              <div className="min-w-[800px] bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
                <table className="w-full text-left">
                  <thead className="bg-slate-800/50 border-b border-slate-700/50">
                    <tr>
                      <th className="py-4 px-6 text-sm font-semibold text-white/90 w-[30%]">What Campaign Manager Shows</th>
                      <th className="py-4 px-6 text-sm font-semibold text-white/90 w-[35%]">Reality</th>
                      <th className="py-4 px-6 text-sm font-semibold text-white/90 w-[35%]">Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-4 px-6 text-sm text-slate-300">"812 companies reached"</td>
                      <td className="py-4 px-6 text-sm text-white font-medium">3,200+ companies actually engaged</td>
                      <td className="py-4 px-6 text-sm text-slate-400">Targeting based on 25% of real data</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-4 px-6 text-sm text-slate-300">"47 clicks, 0.87% CTR"</td>
                      <td className="py-4 px-6 text-sm text-white font-medium">99% of engaged accounts never clicked</td>
                      <td className="py-4 px-6 text-sm text-slate-400">Best accounts invisible to click reporting</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-4 px-6 text-sm text-slate-300">Campaign A "outperforming"</td>
                      <td className="py-4 px-6 text-sm text-white font-medium">Campaign B reaches more ICP accounts</td>
                      <td className="py-4 px-6 text-sm text-slate-400">Budget flows to clicks, not target accounts</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-4 px-6 text-sm text-slate-300">"New conversion from Company X"</td>
                      <td className="py-4 px-6 text-sm text-white font-medium">Company X saw 4 campaigns over 6 weeks</td>
                      <td className="py-4 px-6 text-sm text-slate-400">Last-click gets credit, others get cut</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: FOMO CALLOUT */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto rounded-3xl bg-blue-50/50 border border-blue-100 p-10 md:p-14 text-center shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              75% of B2B advertisers pay over $6 per click on LinkedIn.
            </h3>
            <p className="text-lg text-gray-600 font-medium">
              How many of those clicks come from companies that could actually buy from you?
            </p>
          </div>
        </section>

        {/* SECTION 5: TESTIMONIAL 1 */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto bg-slate-50 border-l-4 border-blue-600 rounded-r-2xl p-8 md:p-12 shadow-sm">
            <Quote className="w-8 h-8 text-blue-600 mb-6 opacity-80" />
            <blockquote className="text-xl md:text-2xl text-gray-800 italic leading-relaxed mb-6 font-medium">
              "We discovered our daily budget was getting exhausted before 11 a.m. Eastern. LinkedIn's algorithm found 15 to 20% of our target audience and served them an ad 20 times, while the rest of the list never saw it."
            </blockquote>
            <p className="text-base text-gray-900 font-bold">
              Chase Hamilton, Digital Marketing Manager, AssetWatch
            </p>
          </div>
        </section>

        {/* SECTION 6: HOW IT WORKS (SOLUTION INTRO) */}
        <section id="how-it-works" className="py-24 px-6 bg-slate-900 text-center text-white scroll-mt-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex justify-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-widest">
                HOW IT WORKS
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              See every company engaging with your LinkedIn ads. Connect it to your pipeline.
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed">
              Full company-level engagement data, CRM attribution, and campaign controls. One platform. $99/month.
            </p>
            
            <div className="pt-4">
              <Button size="hero" className="bg-blue-600 hover:bg-blue-500 text-white border-0 shadow-lg shadow-blue-900/20" onClick={handleCTA}>
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 7: DATA PROOF (BETA METRICS) */}
        <section className="py-24 px-6 bg-white border-b border-gray-100">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <SectionBadge text="RESULTS FROM DEMANDSENSE CLIENTS" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
              {[
                { num: "4x", label: "more companies reached" },
                { num: "14x", label: "more companies engaged" },
                { num: "80%", label: "more leads matched in CRM" },
                { num: "56%", label: "more pipeline deals influenced" },
                { num: "29%", label: "more total pipeline attributed" },
                { num: "15%", label: "more revenue attributed" },
              ].map((stat, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center flex flex-col items-center justify-center space-y-2 hover:border-blue-200 transition-colors">
                  <div className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">{stat.num}</div>
                  <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <p className="text-center text-sm text-gray-400 font-medium max-w-2xl mx-auto">
              Data from 12 beta clients comparing Campaign Manager reporting to company-level engagement data.
            </p>
          </div>
        </section>

        {/* SECTION 8: VALUE PROP 1 (SEE) */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 uppercase tracking-widest">
                STEP 1: SEE
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                See every company engaging with your LinkedIn ads
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-normal">
                Campaign Manager shows aggregate clicks. DemandSense shows the companies behind them. Every account that engaged with your ads, paid and organic, in one report.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Company name, industry, and employee count for every engaged account",
                  "Impressions, video views, clicks, and organic interactions",
                  "Up to 100K companies per report (standard tools cap at 15K)",
                  "Filter by campaign, date range, or engagement type"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-800">
                    <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-base">{item}</span>
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
        <section className="py-24 px-6 md:px-12 bg-gray-50 border-y border-gray-100">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1">
              <ScreenshotPlaceholder label="Attribution view: CRM pipeline with Company, Deal Stage, Deal Value, LinkedIn Touchpoints, First/Last Touch Date." />
            </div>
            <div className="space-y-8 order-2 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 uppercase tracking-widest">
                STEP 2: CONNECT
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Connect engagement to your CRM pipeline
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-normal">
                DemandSense maps company-level engagement to CRM deals automatically. When leadership asks "is LinkedIn working?" show them the companies in pipeline that LinkedIn touched.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Automatic CRM sync (HubSpot and Salesforce)",
                  "See which engaged companies are already in pipeline",
                  "Attribution window up to 6 months",
                  "Influenced pipeline and revenue by campaign"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-800">
                    <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 10: VALUE PROP 3 (ACT) */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 uppercase tracking-widest">
                STEP 3: ACT
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Act on what you see. Control how your ads deliver.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-normal">
                DemandSense gives you the controls Campaign Manager doesn't. Schedule ads by time zone. Cap frequency on every ad type. Tune audiences based on engagement data.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Ad scheduling by day, time, and time zone",
                  "Frequency capping on all ad types (including lead gen)",
                  "Audience tuning based on which companies actually engaged",
                  "Budget controls to prevent off-hours overspend"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-800">
                    <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-base">{item}</span>
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
        <section className="py-16 px-6 bg-slate-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto bg-white border-l-4 border-blue-600 rounded-r-2xl p-8 md:p-12 shadow-sm">
            <Quote className="w-8 h-8 text-blue-600 mb-6 opacity-80" />
            <blockquote className="text-xl md:text-2xl text-gray-800 italic leading-relaxed mb-6 font-medium">
              "The question I kept asking was: what percentage of the companies engaging with my ads are actually part of my ICP? I couldn't answer that before."
            </blockquote>
            <p className="text-base text-gray-900 font-bold">
              Sean Christy, CEO, MagellanData
            </p>
          </div>
        </section>

        {/* SECTION 12: FOMO CALLOUT 2 */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto rounded-3xl bg-blue-50/50 border border-blue-100 p-10 md:p-14 text-center shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              The average B2B campaign converts 1 in 145 clicks to a lead.
            </h3>
            <p className="text-lg text-gray-600 font-medium">
              Do you know which of the other 144 were from accounts worth retargeting?
            </p>
          </div>
        </section>

        {/* SECTION 13: FAQ */}
        <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-12 text-center">
              Common questions
            </h2>
            
            <Accordion type="single" collapsible className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden" defaultValue="item-0">
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
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-100 last:border-0 px-6">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* SECTION 14: FINAL CTA */}
        <section className="py-24 md:py-32 px-6 bg-slate-900 text-center text-white">
          <div className="max-w-[720px] mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
              See the 80% of LinkedIn engagement you've been missing.
            </h2>
            
            <p className="text-xl text-slate-400 font-normal leading-relaxed">
              Company-level engagement. CRM attribution. Campaign controls. $99/month.
            </p>
            
            <div className="pt-6 flex flex-col items-center gap-4">
              <Button size="hero" className="bg-blue-600 hover:bg-blue-500 text-white border-0 shadow-lg shadow-blue-900/20 w-full sm:w-auto px-12" onClick={handleCTA}>
                Start Free Trial
              </Button>
              <p className="text-sm text-slate-500 font-medium">
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

export default AudienceEngagement;