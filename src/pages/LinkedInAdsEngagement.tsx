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
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

// Reusable Screenshot Placeholder Component
const ScreenshotPlaceholder = ({ label, className }: { label: string; className?: string }) => (
  <div 
    className={cn(
      "w-full bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center p-8 aspect-[16/10] shadow-sm",
      className
    )}
  >
    <p className="text-sm font-medium text-slate-500 text-center max-w-sm">
      [PLACEHOLDER: {label}]
    </p>
  </div>
);

const LinkedInAdsEngagement = () => {
  const handleCTA = () => {
    document.dispatchEvent(new CustomEvent("open-get-access"));
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
      <Navbar />

      <main className="pt-20">
        {/* 1. HERO */}
        <section className="py-20 md:py-32 px-6">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Copy Side - 45% */}
            <div className="lg:col-span-5 space-y-8">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                LINKEDIN AUDIENCE INTELLIGENCE
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-gray-900">
                Your LinkedIn ads reach more companies than Campaign Manager shows you.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Campaign Manager surfaces about 20% of company-level engagement signals. The other 80%, including organic interactions, stays invisible. DemandSense gives you the full picture and the tools to act on it.
              </p>
              <div className="space-y-3">
                <Button size="hero" className="w-full sm:w-auto" onClick={handleCTA}>
                  See your full LinkedIn data
                </Button>
                <p className="text-sm text-gray-500 font-medium">
                  30-day free access. No credit card required.
                </p>
              </div>
            </div>

            {/* Screenshot Side - 55% */}
            <div className="lg:col-span-7">
              <ScreenshotPlaceholder label="Engagement dashboard — company list with engagement types, ICP match indicators, CRM status column. Many rows visible to show data breadth." />
            </div>
          </div>
        </section>

        {/* 2. TRUST BAR */}
        <section className="py-12 border-y border-gray-100 bg-gray-50/50">
          <div className="max-w-[1216px] mx-auto px-6 text-center space-y-8">
            <p className="text-sm font-semibold text-gray-600">
              Used by B2B marketing teams running $3K–$30K/month on LinkedIn.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="px-6 py-3 rounded-lg border border-gray-200 bg-white text-sm font-bold text-gray-400">
                  Logo {i}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. PROBLEM SECTION */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual Left - 55% */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="w-full max-w-lg space-y-6">
                
                {/* Card 1 */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  <div className="bg-gray-50 py-3 px-6 border-b border-gray-200">
                    <h3 className="text-sm font-bold text-gray-900">Campaign Manager</h3>
                  </div>
                  <div className="p-0">
                    <table className="w-full text-sm">
                      <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-6 text-gray-600 font-medium">Companies reached</td>
                          <td className="py-3 px-6 text-right font-bold text-gray-900">47</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-6 text-gray-600 font-medium">Companies engaged</td>
                          <td className="py-3 px-6 text-right font-bold text-gray-900">3</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-6 text-gray-600 font-medium">Clicks</td>
                          <td className="py-3 px-6 text-right font-bold text-gray-900">12</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-6 text-gray-600 font-medium">CRM leads</td>
                          <td className="py-3 px-6 text-right font-bold text-gray-900">0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-gray-50 py-3 px-6 border-t border-gray-200 text-xs text-gray-500 text-center font-medium">
                    Campaign Manager sees 3 engaged companies · CRM leads: 0 · Influenced pipeline: $0
                  </div>
                </div>

                {/* Connector */}
                <div className="text-center text-sm font-bold text-blue-600 py-2">
                  DemandSense resolves engagement ↓
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl shadow-xl border border-blue-200 overflow-hidden ring-1 ring-blue-500/10">
                  <div className="bg-blue-50 py-3 px-6 border-b border-blue-100">
                    <h3 className="text-sm font-bold text-blue-900">DemandSense</h3>
                  </div>
                  <div className="p-0">
                    <table className="w-full text-sm">
                      <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-6 text-gray-600 font-medium">Companies reached</td>
                          <td className="py-3 px-6 text-right font-bold text-gray-900">47</td>
                        </tr>
                        <tr className="bg-blue-50/50">
                          <td className="py-3 px-6 text-blue-800 font-bold">Companies engaged</td>
                          <td className="py-3 px-6 text-right font-black text-blue-600 text-base">42</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-6 text-gray-600 font-medium">Clicks</td>
                          <td className="py-3 px-6 text-right font-bold text-gray-900">12</td>
                        </tr>
                        <tr className="bg-blue-50/50 border-t border-gray-100">
                          <td className="py-3 px-6 text-blue-800 font-bold">Website visits</td>
                          <td className="py-3 px-6 text-right font-black text-blue-600 text-base">7</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors border-t border-gray-100">
                          <td className="py-3 px-6 text-gray-600 font-medium">CRM leads</td>
                          <td className="py-3 px-6 text-right font-bold text-gray-900">4</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-blue-600 py-3 px-6 text-xs text-white text-center font-bold">
                    DemandSense sees 42 engaged companies · 7 visiting your site · Influenced pipeline: $127K
                  </div>
                </div>

              </div>
            </div>

            {/* Copy Right - 45% */}
            <div className="lg:col-span-5 space-y-8">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                THE BLIND SPOT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                You can only optimize for what you can see.
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
                <p>
                  Three people at Acme Corp see your LinkedIn ad this week. One watches the video to 100%. Another clicks through to your website from an organic post. A third sees the ad twice in their feed but never clicks. None of them fill out a form.
                </p>
                <p>
                  Your dashboard shows one impression and zero engagement from that account. You see low CTR on the campaign and shift budget to a different audience. Sales never learns Acme Corp is warming. HubSpot has no record of the activity. Three weeks later, Acme signs with a competitor whose SDR reached out at the right moment.
                </p>
                <p>
                  DemandSense surfaces every company engaging with your LinkedIn ads and organic content, so you stop cutting campaigns that are actually working.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 4. PROOF INTERRUPT */}
        <section className="py-24 bg-slate-900 text-white border-y border-slate-800">
          <div className="max-w-[1216px] mx-auto px-6 text-center space-y-12">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              When integrating DemandSense and LinkedIn, we found:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 max-w-4xl mx-auto divide-y md:divide-y-0 md:divide-x divide-slate-800">
              <div className="flex flex-col items-center justify-center p-6 space-y-4">
                <div className="text-7xl md:text-8xl font-black tracking-tighter text-blue-400">
                  13x
                </div>
                <div className="text-xl font-medium text-slate-300">
                  more companies reached
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-6 space-y-4">
                <div className="text-7xl md:text-8xl font-black tracking-tighter text-blue-400">
                  4x
                </div>
                <div className="text-xl font-medium text-slate-300">
                  more companies engaged
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SOLUTION INTRO */}
        <section className="py-24 md:py-32 bg-slate-900 text-white">
          <div className="max-w-[1216px] mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                HOW DEMANDSENSE CLOSES THE GAP
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Full company-level engagement data from LinkedIn, connected to your CRM, with controls to act on it.
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
                DemandSense connects to LinkedIn's Company Intelligence API to surface every company engaging with your brand, paid and organic. See who they are, whether they match your ICP, where they sit in your pipeline. Then do something the data-only tools can't: tune your audiences, adjust your spend, and optimize delivery based on what the data tells you.
              </p>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 mb-16">
              <div className="bg-slate-800 px-6 py-3 rounded-full border border-slate-700 text-sm font-medium text-slate-200">
                <strong className="text-white">See:</strong> every company engaging with your LinkedIn ads and organic content
              </div>
              <div className="bg-slate-800 px-6 py-3 rounded-full border border-slate-700 text-sm font-medium text-slate-200">
                <strong className="text-white">Act:</strong> on engagement data through scheduling, frequency caps, and audience tuning
              </div>
              <div className="bg-slate-800 px-6 py-3 rounded-full border border-slate-700 text-sm font-medium text-slate-200">
                <strong className="text-white">Prove:</strong> which campaigns influenced real pipeline deals in your CRM
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <ScreenshotPlaceholder 
                label="Full DemandSense dashboard — engagement module overview" 
                className="bg-slate-800 border-slate-700 text-slate-400 shadow-2xl" 
              />
            </div>
          </div>
        </section>

        {/* 6. VALUE PROP 1: SEE */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Copy Left - 45% */}
            <div className="lg:col-span-5 space-y-8">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                FULL VISIBILITY
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                See which companies engage with your LinkedIn ads. All of them.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                DemandSense surfaces every company that interacted with your paid campaigns or organic content on LinkedIn. Not just the ones that clicked. Companies that saw your ads, watched your videos, liked your posts, or engaged with your company page all appear in one view, with engagement type, frequency, industry, and employee count.
              </p>
              <ul className="space-y-4">
                {[
                  "Paid and organic engagement — organic is completely invisible in Campaign Manager",
                  "Engagement level scoring — low to very high, for outreach prioritization",
                  "ICP match filtering — see which engaged companies fit your target profile",
                  "CRM status column — see if an engaged company is already in pipeline or net-new"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-base text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Screenshot Right - 55% */}
            <div className="lg:col-span-7">
              <ScreenshotPlaceholder label="Engagement report table — company names, engagement types, ICP match indicators, CRM status" />
            </div>
          </div>
        </section>

        {/* 7. VALUE PROP 2: ACT */}
        <section className="py-24 md:py-32 px-6 bg-slate-50 border-y border-gray-100">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Screenshot Left - 55% */}
            <div className="lg:col-span-7 lg:order-1 order-2">
              <ScreenshotPlaceholder label="Audience tuning interface or scheduling dashboard — time-based delivery controls" />
            </div>

            {/* Copy Right - 45% */}
            <div className="lg:col-span-5 space-y-8 lg:order-2 order-1">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                AUDIENCE CONTROLS
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                Don't just see the data. Use it to fix your campaigns.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every other LinkedIn data tool stops at the dashboard. DemandSense gives you controls to act on what the engagement data reveals. Non-ICP companies eating your budget? Exclude them. High-engagement ICP accounts? Increase their exposure. Ads serving at 3 AM? Set scheduling rules.
              </p>
              <ul className="space-y-4">
                {[
                  "Audience tuning — adjust targeting based on engagement data, not guesswork",
                  "Scheduling and dayparting — serve ads when your ICP is active (LinkedIn has no native scheduling)",
                  "Frequency capping — prevent ad fatigue on engaged accounts, broaden reach to new ones",
                  "Budget controls — stop overspending on underperforming segments"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-base text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <p className="text-sm font-semibold text-blue-900 leading-relaxed">
                  DemandSense scheduling tests: impressions up 38%, CPC down 5%, engagement up 70% vs. unscheduled delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. VALUE PROP 3: PROVE */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Copy Left - 45% */}
            <div className="lg:col-span-5 space-y-8">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                CRM ATTRIBUTION
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                Connect LinkedIn engagement to real pipeline. Show the proof.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                DemandSense maps company-level engagement data directly to your CRM pipeline. See which campaigns influenced accounts that became opportunities, entered pipeline, or closed as revenue. When leadership asks whether LinkedIn is working, open one screen.
              </p>
              <ul className="space-y-4">
                {[
                  "CRM-connected attribution — HubSpot live, Salesforce in progress. Engagement data flows into pipeline stages.",
                  "Influenced pipeline dashboard — total pipeline value and revenue connected to LinkedIn campaigns",
                  "Account-level deal attribution — trace a closed deal back through every LinkedIn touchpoint",
                  "Monthly reporting view — \"what did LinkedIn produce?\" answered in one screen"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-base text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Screenshot Right - 55% */}
            <div className="lg:col-span-7">
              <ScreenshotPlaceholder label="Attribution dashboard — influenced pipeline, revenue won, deal count by campaign" />
            </div>
          </div>
        </section>

        {/* 9. DATA AND TRUST */}
        <section className="py-24 bg-gray-50 border-y border-gray-100 px-6">
          <div className="max-w-[1216px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-4">
                <h4 className="text-xl font-bold text-gray-900 leading-tight">
                  Company Intelligence API access
                </h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  DemandSense connects to LinkedIn's Company Intelligence API, the data layer available only to certified partners. Company-level engagement data, including organic interactions, up to 100,000 companies. The standard Campaign Manager interface caps at roughly 20% of this.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-4">
                <h4 className="text-xl font-bold text-gray-900 leading-tight">
                  CRM integration
                </h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  Engagement data connects directly to HubSpot (live) and Salesforce (in progress). See which engaged companies are already in pipeline, which are net-new, and which deals LinkedIn influenced. No CSV exports. No spreadsheet matching.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-4">
                <h4 className="text-xl font-bold text-gray-900 leading-tight">
                  Identity resolution
                </h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  Company-level and person-level identification matching LinkedIn engagement to website visitors and CRM records.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
        <section className="py-24 px-6 md:px-[112px]">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {[
                {
                  q: "What data does DemandSense show that Campaign Manager doesn't?",
                  a: "Company-level engagement across paid AND organic channels, including impressions, video views, likes, and comments at the account level. Campaign Manager shows aggregate campaign metrics. DemandSense shows which specific companies engaged, how deeply, and whether they match your target profile."
                },
                {
                  q: "How is this different from Fibbler, Dreamdata, or other LinkedIn tools?",
                  a: "Most LinkedIn analytics tools show you the data. DemandSense also gives you campaign controls (scheduling, frequency caps, audience tuning, budget rules) to act on what the data reveals. You see the engagement, adjust your campaigns, and trace the results to CRM pipeline in one system."
                },
                {
                  q: "Do I need to be a LinkedIn Marketing Partner to use this?",
                  a: "No. DemandSense handles the LinkedIn integration. You connect your LinkedIn ad account and CRM, and the data flows into your dashboard. Setup takes under 10 minutes."
                },
                {
                  q: "Which CRMs are supported?",
                  a: "HubSpot is live. Salesforce connector is in progress."
                },
                {
                  q: "What does DemandSense cost?",
                  a: "Plans start at $99/month for the LinkedIn control toolset. Full engagement intelligence and attribution starts at $149/month. 30-day free trial, no credit card required."
                },
                {
                  q: "Can I see organic LinkedIn engagement, not just paid?",
                  a: "Yes. Through the Company Intelligence API, DemandSense surfaces companies that engaged with your organic LinkedIn content (company page posts, employee shares, comments) in addition to paid campaign interactions. This data is completely invisible in Campaign Manager."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                  <AccordionTrigger className="text-left text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors py-6">
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

        {/* 11. FINAL CTA */}
        <section className="py-24 md:py-32 px-6 bg-[#0F2043] text-center border-t border-slate-800">
          <div className="max-w-[800px] mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
              Stop making LinkedIn decisions on 20% of the data.
            </h2>
            <p className="text-xl text-blue-200 leading-relaxed">
              See every company engaging with your ads. Act on it. Prove the pipeline impact.
            </p>
            <div className="pt-4 flex flex-col items-center gap-6">
              <Button size="hero" className="w-full sm:w-auto" onClick={handleCTA}>
                Start your free trial
              </Button>
              <button 
                onClick={handleCTA}
                className="text-blue-300 hover:text-white font-medium transition-colors"
              >
                See a product walkthrough
              </button>
              <div className="text-sm font-medium text-slate-400 mt-2">
                30-day free access. No credit card required. See results in your first week.
              </div>
              <div className="flex flex-col gap-3 mt-4 text-sm text-slate-300">
                <div className="flex items-center justify-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  Full company-level LinkedIn engagement data from day one
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  Connects to your HubSpot CRM in minutes
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  Campaign controls (scheduling, frequency caps) included
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

export default LinkedInAdsEngagement;