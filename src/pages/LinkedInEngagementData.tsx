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
  Quote, 
  Check, 
  Database, 
  Linkedin, 
  Target, 
  MousePointer2, 
  BarChart3,
  Users,
  ShieldCheck,
  AlertCircle,
  Zap,
  Layers,
  HelpCircle
} from "lucide-react";

// Helper for Screenshot Placeholders themed like WebsiteVisitors
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
        {/* SECTION 1: HERO */}
        <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center pt-24 pb-20 bg-white">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#3875F6]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-[#FA8C16]/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
          
          <div className="max-w-[720px] mx-auto px-6 text-center space-y-8 relative z-10">
            <div className="flex justify-center">
              <SectionBadge icon={Database} text="LINKEDIN ADS DATA PLATFORM" />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-[#0F2043]">
              Your LinkedIn ads reach more companies than Campaign Manager shows. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3875F6] to-[#7486AA]">
                Now you can see them all.
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-[650px] mx-auto leading-relaxed">
              Company-level engagement data across paid and organic LinkedIn activity, connected to your CRM. The full picture, not the 20%.
            </p>

            <div className="flex flex-col items-center pt-2">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <Button variant="hero" size="hero" className="w-full sm:w-auto">
                  Start Free Trial
                </Button>
                <Button 
                  size="hero" 
                  variant="outline" 
                  className="w-full sm:w-auto text-gray-700 border-gray-300 hover:bg-gray-50"
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See How It Works
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500 mt-5 font-medium">
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> 100+ B2B advertisers benchmarked</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> 280M+ verified profiles</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Setup in 2 minutes</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Logo Marquee */}
        <LogoTicker />

        {/* SECTION 3: PROBLEM SECTION */}
        <section className="py-24 px-6 bg-gray-50 border-t border-gray-100 overflow-hidden">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <SectionBadge icon={AlertCircle} text="THE DATA GAP" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
                You're making LinkedIn decisions on 20% of the data. <br className="hidden md:block"/>
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">The other 80% exists. You just can't see it yet.</span>
              </h2>
            </div>

            {/* Comparison Table */}
            <div className="w-full bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-left text-sm md:text-base border-collapse">
                  <thead className="bg-[#0F2043] text-white">
                    <tr>
                      <th className="py-5 px-6 font-semibold w-1/3">What Campaign Manager Shows</th>
                      <th className="py-5 px-6 font-semibold w-1/3 border-l border-white/10">Reality</th>
                      <th className="py-5 px-6 font-semibold w-1/3 border-l border-white/10">Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-5 px-6 text-gray-900 font-medium">"812 companies reached"</td>
                      <td className="py-5 px-6 text-gray-600 border-l border-gray-100">3,200+ companies actually engaged</td>
                      <td className="py-5 px-6 text-gray-500 border-l border-gray-100">Targeting based on 25% of real data</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-5 px-6 text-gray-900 font-medium">"47 clicks, 0.87% CTR"</td>
                      <td className="py-5 px-6 text-gray-600 border-l border-gray-100">99% of engaged accounts never clicked</td>
                      <td className="py-5 px-6 text-gray-500 border-l border-gray-100">Best accounts invisible to click reporting</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-5 px-6 text-gray-900 font-medium">Campaign A "outperforming"</td>
                      <td className="py-5 px-6 text-gray-600 border-l border-gray-100">Campaign B reaches more ICP accounts</td>
                      <td className="py-5 px-6 text-gray-500 border-l border-gray-100">Budget flows to clicks, not target accounts</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-5 px-6 text-gray-900 font-medium">"New conversion from Company X"</td>
                      <td className="py-5 px-6 text-gray-600 border-l border-gray-100">Company X saw 4 campaigns over 6 weeks</td>
                      <td className="py-5 px-6 text-gray-500 border-l border-gray-100">Last-click gets credit, others get cut</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: HOW IT WORKS (SOLUTION INTRO) */}
        <section id="how-it-works" className="py-32 bg-white">
          <div className="max-w-[1216px] mx-auto px-6 space-y-8 text-center">
            <div className="flex justify-center mb-6">
              <SectionBadge icon={Layers} text="HOW IT WORKS" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-[#0F2043] tracking-tight leading-tight max-w-4xl mx-auto">
              See every company engaging with your LinkedIn ads. <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Connect it to your pipeline.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Full company-level engagement data, CRM attribution, and campaign controls. One platform. $99/month.
            </p>
            <div className="pt-6">
              <Button size="hero" className="px-10 shadow-xl shadow-blue-500/20">
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 7: DATA PROOF (BETA METRICS) */}
        <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white border-y border-gray-100">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <SectionBadge icon={BarChart3} text="RESULTS FROM DEMANDSENSE CLIENTS" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { num: "4x", label: "more companies reached" },
                { num: "14x", label: "more companies engaged" },
                { num: "80%", label: "more leads matched in CRM" },
                { num: "56%", label: "more pipeline deals influenced" },
                { num: "29%", label: "more total pipeline attributed" },
                { num: "15%", label: "more revenue attributed" }
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow group">
                  <div className="text-4xl md:text-5xl font-black text-[#0F2043] tracking-tighter mb-3 group-hover:text-blue-600 transition-colors">
                    {stat.num}
                  </div>
                  <div className="text-sm font-medium text-gray-600 leading-snug w-full mx-auto">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-12 max-w-2xl mx-auto">
              Data from 12 beta clients comparing Campaign Manager reporting to company-level engagement data.
            </p>
          </div>
        </section>

        {/* SECTION 8: VALUE PROP 1 (SEE) */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div className="text-[#3875F6] font-bold text-xs uppercase tracking-widest">
                STEP 1: SEE
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
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
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-base text-gray-800 font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-7">
              <ScreenshotPlaceholder label="Company engagement report: list of 20+ companies with columns for Name, Industry, Employees, Impressions, Clicks, Engagement Level. Filter bar at top." />
            </div>
          </div>
        </section>

        {/* SECTION 9: VALUE PROP 2 (CONNECT) */}
        <section className="py-32 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <ScreenshotPlaceholder label="Attribution view: CRM pipeline with Company, Deal Stage, Deal Value, LinkedIn Touchpoints, First/Last Touch Date." />
            </div>
            
            <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
              <div className="text-[#3875F6] font-bold text-xs uppercase tracking-widest">
                STEP 2: CONNECT
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
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
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-base text-gray-800 font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 10: VALUE PROP 3 (ACT) */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div className="text-[#3875F6] font-bold text-xs uppercase tracking-widest">
                STEP 3: ACT
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
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
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-base text-gray-800 font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <ScreenshotPlaceholder label="Scheduling interface: weekly grid with active hours (8am-6pm Mon-Fri). Frequency cap setting. Campaign list with toggles." />
            </div>
          </div>
        </section>

        {/* SECTION 13: FAQ */}
        <section className="py-24 px-6 bg-slate-50 border-y border-gray-200">
          <div className="max-w-[720px] mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F2043] tracking-tight">
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

        {/* SECTION 14: FINAL CTA */}
        <section className="py-24 md:py-32 px-6 bg-white overflow-hidden">
          <div className="max-w-[1216px] mx-auto">
            <div className="cta-card w-full rounded-[32px] px-8 md:px-16 py-20 md:py-24 flex flex-col items-center text-center relative overflow-hidden border border-blue-100 bg-[#F5F9FF] shadow-xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
                  See the 80% of LinkedIn engagement you've been missing.
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  Company-level engagement. CRM attribution. Campaign controls. $99/month.
                </p>
                <div className="pt-6 flex flex-col items-center gap-4">
                  <Button size="hero" className="shadow-xl shadow-blue-500/20 px-12 bg-blue-600 hover:bg-blue-700">
                    Start Free Trial
                  </Button>
                  <p className="text-sm font-medium text-gray-500">
                    30-day free access. No credit card required. Connect in 2 minutes.
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