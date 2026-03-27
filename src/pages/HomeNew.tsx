"use client";

import * as React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionIntroSection from "@/components/SolutionIntroSection";
import AudienceExplorerSection from "@/components/AudienceExplorerSection";
import WebIDSection from "@/components/WebIDSection";
import LinkedInAdsOptimization from "@/components/LinkedInAdsOptimization";
import RevenueAttributionSection from "@/components/RevenueAttributionSection";
import { MetricsBand } from "@/components/metrics";
import AICopilotSection from "@/components/AICopilotSection";
import { IntegrationsSection } from "@/components/integrations";
import { TestimonialSection } from "@/components/testimonials";
import { PricingSection } from "@/components/pricing-main";
import { Footer } from "@/components/footer";
import FAQSection from "@/components/faq/FAQSection";
import SectionBadge from "@/components/SectionBadge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Users, 
  Target, 
  Zap, 
  ShieldCheck, 
  BarChart3,
  Search,
  Database,
  MessageSquare,
  Bot,
  RefreshCw,
  ArrowRightLeft,
  Check
} from "lucide-react";

const HomeNew = () => {
  const INTEGRATION_PLATFORMS = [
    { name: "LinkedIn", icon: null, logo: "/logos/linkedin-icon.svg", color: "#0A66C2" },
    { name: "Salesforce", icon: null, logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg", color: "#00A1E0" },
    { name: "HubSpot", icon: null, logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg", color: "#FF7A59" },
    { name: "Webhook", icon: null, logo: null, color: "#96C24E" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      
      <main>
        {/* 1. HERO (Set Context) */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
          <div className="max-w-[1216px] mx-auto px-6 text-center space-y-8">
            <div className="flex justify-center">
              <SectionBadge text="LINKEDIN ADS INTELLIGENCE PLATFORM" variant="outline" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Prove Exactly Which LinkedIn <br />
              Ads Actually Influence Pipeline
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              DemandSense reveals who’s engaging with your LinkedIn ads, helps you act on that insight inside your campaigns, and ties the results back to pipeline.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="hero" className="px-10">START FREE TRIAL</Button>
              <Button size="hero" variant="outline" className="px-10">
                <Play className="mr-2 h-4 w-4 fill-current" /> Watch Demo
              </Button>
            </div>
            <div className="pt-4 space-y-2">
              <p className="text-sm font-medium text-gray-400">30-day Free Access.</p>
              <p className="text-sm font-bold text-gray-900">
                Used daily by 500+ B2B teams to prove the real impact of LinkedIn Ads
              </p>
            </div>
          </div>
        </section>

        {/* 2. PROBLEM (Create Tension) */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1216px] mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <SectionBadge text="THE MISSING VISIBILITY LAYER" variant="default" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                It’s almost impossible to target ideal <br />
                customers without engagement signal
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                LinkedIn ads show delivery and engagement, while pipeline appears weeks later in your CRM with no visible connection between them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {[
                {
                  title: "No account-level signal",
                  desc: "You can’t tell whether the right buying teams are actually engaging.",
                  icon: Users
                },
                {
                  title: "Optimization lacks context",
                  desc: "Decisions rely on surface metrics, not real buyer response or intent.",
                  icon: Target
                },
                {
                  title: "Pipeline impact is unclear",
                  desc: "Deals show up weeks later, and tying them to LinkedIn ads is mostly guesswork.",
                  icon: BarChart3
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto text-center p-10 bg-white rounded-[32px] border border-blue-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5"><Zap className="w-24 h-24 text-blue-600" /></div>
              <p className="text-xl md:text-2xl font-medium text-gray-800 italic mb-6">
                “DemandSense cut our cost per lead by 60% immediately. It was the difference between a campaign working or burning budget.”
              </p>
              <p className="font-bold text-gray-900">— Jason Squires, Founder</p>
            </div>
          </div>
        </section>

        {/* 3. SOLUTION (Explain the Approach) */}
        <section className="py-24 bg-white">
          <div className="max-w-[1216px] mx-auto px-6">
            <div className="text-center mb-20 space-y-4">
              <SectionBadge text="THE MISSING DECISION LAYER" variant="default" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Turn fragmented LinkedIn ad activity <br />
                into clear decisions you can prove
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "SEE REAL ICP ENGAGEMENT",
                  desc: "Know who’s actually interacting with your LinkedIn ads in real time.",
                  icon: Search
                },
                {
                  title: "CONTROL CAMPAIGN EXECUTION",
                  desc: "Use real engagement to guide targeting, frequency, and delivery decisions.",
                  icon: Zap
                },
                {
                  title: "PROVE PIPELINE IMPACT",
                  desc: "Show how LinkedIn activity influences pipeline and revenue.",
                  icon: ShieldCheck
                }
              ].map((item, i) => (
                <div key={i} className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-blue-200">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. THE DECISION LOOP */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="max-w-[1216px] mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <SectionBadge text="THE DECISION LOOP" variant="dark" />
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                  No more starting from scratch <br />
                  for every LinkedIn campaign
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed">
                  DemandSense shows who engaged, what resonated with your ICP, and what influenced pipeline, so each LinkedIn campaign starts with context, not guesses.
                </p>
                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">REUSE WHAT WORKED LAST CAMPAIGN</h4>
                    <p className="text-slate-400">Each campaign builds on what you already learned about engagement, ICP fit, and pipeline impact.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-full border-2 border-blue-500/20 flex items-center justify-center animate-spin-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-xl shadow-blue-500/40">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shadow-xl shadow-emerald-500/40">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-black tracking-tighter">LOOP</div>
                    <div className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em]">Continuous</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. STEP 1: SEE (Gain Visibility) */}
        <section className="py-32 bg-white">
          <div className="max-w-[1216px] mx-auto px-6">
            <div className="text-center mb-20 space-y-4">
              <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">Here’s how DemandSense turns LinkedIn ad activity into decisions you can trust</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">STEP 1: SEE REAL ICP ENGAGEMENT</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900">See if best-fit customers are engaging with your LinkedIn ads</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  DemandSense reveals the real people and companies interacting with your ads and site, so you can tell whether your ICP is actually paying attention.
                </p>
                <div className="space-y-6 pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest">EXTEND THAT VISIBILITY BEYOND ADS</h4>
                  <p className="text-gray-600">See which visitors are researching you and which companies are engaging, and turn website traffic into activatable audiences.</p>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <div className="font-bold text-gray-900">Individual ID</div>
                      <p className="text-sm text-gray-500">Names, titles, and verified work emails of active visitors.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="font-bold text-gray-900">Company Intel</div>
                      <p className="text-sm text-gray-500">Firmographics, revenue ranges and account context.</p>
                    </div>
                  </div>
                </div>
              </div>
              <WebIDSection />
            </div>
          </div>
        </section>

        {/* 6. STEP 2: IMPROVE (Take Control) */}
        <section className="py-32 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1216px] mx-auto px-6">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">STEP 2: IMPROVE CAMPAIGN EXECUTION</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <LinkedInAdsOptimization />
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900">Get control over signals most LinkedIn advertisers don’t even see</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Guide delivery, pacing, and exposure so spend follows ideal customer activity, not random engagement.
                </p>
                <div className="space-y-4">
                  {[
                    "Smart Ad Scheduling",
                    "Account-Level Frequency Caps",
                    "Automated Audience Tuning",
                    "Budget Guardrails"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700 font-bold">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. STEP 3: PROVE (Verify Impact) */}
        <section className="py-32 bg-white">
          <div className="max-w-[1216px] mx-auto px-6">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">STEP 3: PROVE PIPELINE IMPACT</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900">Show exactly how LinkedIn influences pipeline and revenue</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Stop defending LinkedIn with clicks and impressions. DemandSense connects ad engagement directly to CRM outcomes, so you can prove what actually drives growth.
                </p>
                <div className="space-y-6 pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest">WHAT YOU CAN FINALLY PROVE:</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-blue-600" /></div>
                      <div>
                        <div className="font-bold text-gray-900">LinkedIn ROI (end-to-end)</div>
                        <p className="text-sm text-gray-500">See the full journey from first impression to revenue</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-blue-600" /></div>
                      <div>
                        <div className="font-bold text-gray-900">Multi-touch attribution for B2B</div>
                        <p className="text-sm text-gray-500">Track every meaningful touchpoint across long sales cycles</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-blue-600" /></div>
                      <div>
                        <div className="font-bold text-gray-900">Creative impact clarity</div>
                        <p className="text-sm text-gray-500">See which ads contribute to the pipeline.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <RevenueAttributionSection />
            </div>
          </div>
        </section>

        {/* 8. PROPRIETARY DATA (Build Trust) */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1216px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AudienceExplorerSection />
              <div className="space-y-8">
                <SectionBadge text="PROPRIETARY B2B DATABASE" variant="default" />
                <h2 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                  Finally, a reliable way to prove <br />
                  LinkedIn ads ROI for B2B companies
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { title: "4,000+ B2B TARGETING FILTERS", desc: "Go beyond LinkedIn’s limitations to reduce wasted ad spend." },
                    { title: "ELIMINATE 30-40% AD SPEND", desc: "Stop wasting budget on non-ICP broad matches." },
                    { title: "SYNC TO LINKEDIN CAMPAIGN MANAGER", desc: "Removes manual uploads and constant audience updates" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 uppercase tracking-wider text-sm">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. PRICING (Anchor Value) */}
        <section className="py-24 bg-white">
          <div className="max-w-[1216px] mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <SectionBadge text="PRICING" variant="default" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Guesswork wastes more ad spend <br />
                than DemandSense will ever cost you
              </h2>
              <p className="text-blue-600 font-bold uppercase tracking-widest text-sm pt-4">VIEW FEATURES INCLUDED ACROSS ALL PLANS:</p>
            </div>
            <PricingSection />
          </div>
        </section>

        {/* 10. TESTIMONIALS */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1216px] mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <SectionBadge text="TESTIMONIALS" variant="default" />
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                Here’s what teams experience once <br />
                they start using DemandSense
              </h2>
            </div>
            <TestimonialSection />
          </div>
        </section>

        {/* 11. INTEGRATIONS (Fit Stack) */}
        <section className="py-24 bg-white">
          <div className="max-w-[1216px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <SectionBadge text="INTEGRATIONS" variant="default" />
                <h2 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                  Runs on top of tools you <br />
                  use to build + run LinkedIn ads
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  DemandSense is the intelligence layer between your ad stack and CRM, connecting signals, decisions, and execution.
                </p>
                <div className="space-y-6">
                  {[
                    { title: "REAL-TIME SYNC", desc: "Engagement, pipeline, and campaign data stay continuously up to date.", icon: RefreshCw },
                    { title: "TWO-WAY DATA FLOW", desc: "Push identified leads into your CRM and pull pipeline outcomes back into DemandSense.", icon: ArrowRightLeft },
                    { title: "SECURE & COMPLIANT", desc: "Enterprise-grade encryption and controlled data access across systems.", icon: ShieldCheck }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 uppercase tracking-wider text-sm">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {INTEGRATION_PLATFORMS.map((p, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-4 hover:border-blue-400 transition-colors">
                      {p.logo ? <img src={p.logo} className="w-10 h-10" /> : <div className="w-10 h-10 bg-slate-100 rounded-lg" />}
                      <span className="font-bold text-gray-900">{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. AI COPILOT (Assist Decisions) */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="max-w-[1216px] mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <SectionBadge text="AI COPILOT" variant="dark" />
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                  Instead of searching through <br />
                  dashboards, just ask directly
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed">
                  Ask AI Co-Pilot anything about your LinkedIn ads or website visitors. It doesn’t just give answers, it turns them into charts, views, and proof you can share.
                </p>
                <div className="space-y-6">
                  {[
                    { title: "Ask in plain language", desc: "Get answers about spend, engagement, ICP fit, pipeline, or ROAS.", icon: MessageSquare },
                    { title: "Auto-generate visuals", desc: "Instantly create charts and dashboards from your question.", icon: BarChart3 },
                    { title: "Save what matters", desc: "Pin insights directly to your workspace to track over time.", icon: Zap }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0 text-blue-400 border border-blue-500/30">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm">{item.title}</h4>
                        <p className="text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="magic-border h-full w-full" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
                <div className="bg-slate-950 rounded-[inherit] p-8 border border-slate-800 shadow-2xl">
                  <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
                    <Bot className="w-6 h-6 text-blue-400" />
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">AI Co-Pilot</span>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-end">
                      <div className="bg-blue-600 text-white p-4 rounded-2xl rounded-tr-none max-w-[80%] text-sm font-medium">
                        How is my LinkedIn ROAS performing this month compared to industry benchmarks?
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-slate-800 text-slate-200 p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm leading-relaxed">
                        Analyzing campaign spend... Comparing to SaaS industry benchmarks... <br /><br />
                        Your LinkedIn ROAS is currently 4.2x, which is 24% higher than last month. You're significantly outperforming the SaaS industry average of 2.8x.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. FINAL CTA (Drive Signup) */}
        <section className="py-32 bg-white">
          <div className="max-w-[1216px] mx-auto px-6">
            <div className="bg-slate-50 rounded-[48px] p-12 md:p-24 border border-slate-200 shadow-2xl relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 p-12 opacity-5"><Zap className="w-64 h-64 text-blue-600" /></div>
              
              <div className="max-w-3xl mx-auto space-y-8 relative z-10">
                <SectionBadge text="GET A 30-DAY FREE TRIAL" variant="default" />
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
                  Take control of whether your <br />
                  LinkedIn ads are paying off
                </h2>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button size="hero" className="px-12" onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}>START FREE TRIAL</Button>
                  <Button size="hero" variant="outline" className="px-12">Watch Demo</Button>
                </div>
                
                <p className="text-sm font-bold text-gray-400">30-day free trial.</p>

                <div className="pt-12 border-t border-slate-200">
                  <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-8">WHAT YOU’LL GET IN THE TRIAL:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {[
                      { title: "See real ICP engagement", desc: "Know who’s actually interacting with your ads and site.", icon: Search },
                      { title: "Improve campaigns with confidence", desc: "Control delivery, targeting, frequency, and spend using real signals.", icon: Zap },
                      { title: "Prove impact to pipeline", desc: "Connect LinkedIn activity to pipeline and revenue, not just clicks.", icon: ShieldCheck }
                    ].map((item, i) => (
                      <div key={i} className="space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <h5 className="font-bold text-gray-900">{item.title}</h5>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 14. OBJECTIONS (FAQ) */}
        <FAQSection />
      </main>
      
      <Footer />

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HomeNew;