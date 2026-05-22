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
import { Check, Linkedin, BarChart3, Database, Quote, Eye, SlidersHorizontal, TrendingUp } from "lucide-react";

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

const Sparkline = ({ points, polyPoints, stepDelay }: { points: string, polyPoints: string, stepDelay: number }) => (
  <svg viewBox="0 0 64 20" className="w-full h-[20px] overflow-visible mt-2">
    <defs>
      <linearGradient id="primary-gradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="1" />
      </linearGradient>
    </defs>
    <polygon
      points={polyPoints}
      fill="url(#primary-gradient)"
      className="opacity-0"
      style={{ animation: `area-fade-in 0.8s ease-out ${stepDelay + 200}ms forwards` }}
    />
    <polyline
      points={points}
      fill="none"
      stroke="hsl(var(--primary))"
      strokeWidth="1.5"
      strokeDasharray="200"
      strokeDashoffset="200"
      style={{ animation: `draw-line 1.2s ease-out ${stepDelay}ms forwards` }}
    />
    <circle
      cx={points.split(' ').pop()?.split(',')[0]}
      cy={points.split(' ').pop()?.split(',')[1]}
      r="0"
      fill="hsl(var(--primary))"
      style={{
        animation: `dot-appear 0.4s ease-out ${stepDelay + 1000}ms forwards, dot-glow 2s infinite ${stepDelay + 1400}ms`
      }}
    />
  </svg>
);

const AnimatedHeroVisual = () => {
  const beforeData = [
    { label: 'Companies reached', value: 47 },
    { label: 'Companies engaged', value: 3 },
    { label: 'Clicks', value: 12 },
    { label: 'CRM leads', value: 0 },
  ];

  const afterData = [
    { label: 'Companies reached', value: 47, highlight: false },
    { label: 'Companies engaged', value: 42, highlight: true },
    { label: 'Clicks', value: 12, highlight: false },
    { label: 'Website visits', value: 7, highlight: true, isNew: true },
    { label: 'CRM leads', value: 4, highlight: false },
  ];

  const metricCards = [
    { num: '14x', badge: '', label: 'More engaged companies', points: '0,20 20,18 40,15 64,5', polyPoints: '0,20 20,18 40,15 64,5 64,20 0,20', delay: 1200 },
    { num: '38%', badge: '↑', label: 'More impressions (scheduled)', points: '0,20 20,19 40,10 64,0', polyPoints: '0,20 20,19 40,10 64,0 64,20 0,20', delay: 1400 },
    { num: '$127K', badge: 'attributed', label: 'Influenced pipeline', points: '0,20 15,20 20,12 35,12 40,4 64,4', polyPoints: '0,20 15,20 20,12 35,12 40,4 64,4 64,20 0,20', delay: 1600 },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-[12px] border border-border/80 bg-background shadow-[0_8px_30px_hsl(var(--primary)/0.08)] ring-1 ring-primary/5 overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(12px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes connector-dot { 0% { transform: translateY(0); } 100% { transform: translateY(24px); } }
        @keyframes draw-line { 0% { stroke-dashoffset: 200; } 100% { stroke-dashoffset: 0; } }
        @keyframes area-fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes dot-appear { 0% { r: 0; } 100% { r: 2.5; } }
        @keyframes dot-glow { 0%, 100% { fill-opacity: 1; filter: drop-shadow(0 0 2px hsl(var(--primary))); } 50% { fill-opacity: 0.5; filter: drop-shadow(0 0 4px hsl(var(--primary))); } }
      `}} />
      
      {/* Header Bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-muted/20">
        <span className="text-[11px] font-semibold tracking-wide uppercase text-muted-foreground leading-none">Engagement Intelligence</span>
        <span className="px-2.5 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary font-semibold text-[10px] leading-none">CI API</span>
      </div>
      
      <div className="p-5 bg-muted/20">
        {/* Layer 1: BEFORE/AFTER */}
        <div className="flex flex-col opacity-0" style={{ animation: 'fade-in-up 0.5s ease-out 0ms forwards' }}>
          <div className="text-[10px] uppercase text-muted-foreground mb-1.5 font-medium">Campaign Manager</div>
          <div className="rounded-lg border border-border bg-card shadow-[0_2px_8px_rgb(0,0,0,0.04)] overflow-hidden">
            <div className="divide-y divide-border/40">
              {beforeData.map((row, idx) => (
                <div key={idx} className="flex justify-between items-center py-1.5 px-3">
                  <span className="text-muted-foreground text-xs">{row.label}</span>
                  <span className="text-foreground text-xs font-medium">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="bg-muted px-3 py-1.5 text-[10px] text-muted-foreground/80 text-center border-t border-border/40 font-medium">
              3 engaged · 0 CRM leads · $0 pipeline
            </div>
          </div>
        </div>
        
        {/* Connector */}
        <div className="flex flex-col items-center justify-center -my-2 relative z-10 opacity-0" style={{ animation: 'fade-in-up 0.5s ease-out 400ms forwards' }}>
          <div className="text-[10px] text-primary font-semibold bg-muted px-2.5 py-0.5 rounded-full absolute -top-[14px] leading-none border border-primary/10 tracking-tight">
            DemandSense resolves ↓
          </div>
          <div className="relative h-[24px] w-px border-l-2 border-dashed border-muted-foreground/30 mt-3 md:mt-2">
            <div 
              className="absolute top-0 -left-[2.5px] w-[6px] h-[6px] rounded-full bg-primary shadow-[0_0_4px_hsl(var(--primary))]" 
              style={{ animation: 'connector-dot 0.6s ease-out 500ms forwards' }} 
            />
          </div>
        </div>
        
        {/* After Card */}
        <div className="flex flex-col opacity-0" style={{ animation: 'fade-in-up 0.5s ease-out 700ms forwards' }}>
          <div className="text-[10px] uppercase text-primary font-semibold mb-1.5">DemandSense</div>
          <div className="rounded-lg border border-border/70 bg-card shadow-[0_4px_16px_hsl(var(--primary)/0.06)] overflow-hidden">
            <div className="divide-y divide-border/40">
              {afterData.map((row, idx) => (
                <div key={idx} className={cn("flex justify-between items-center py-1.5 px-3", row.highlight ? "bg-primary/5" : "")}>
                  <span className={cn("text-xs", row.highlight ? "text-primary/90 font-medium" : "text-muted-foreground")}>{row.label}</span>
                  <div className="flex items-center gap-2">
                    <span className={cn("text-xs", row.label === 'Companies engaged' || row.isNew ? "text-primary font-bold" : "text-foreground font-medium")}>{row.value}</span>
                    {row.isNew && (
                      <span className="bg-primary text-primary-foreground text-[8.5px] font-bold px-1.5 py-0.5 rounded-[4px] leading-none tracking-wide">NEW</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-primary/10 px-3 py-1.5 text-[10px] text-primary/90 text-center border-t border-primary/10 font-medium">
              42 engaged · 7 on your site · <span className="font-semibold text-primary">$127K pipeline</span>
            </div>
          </div>
        </div>
        
        {/* Layer 2: CONNECTION STRIP */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-0 opacity-0" style={{ animation: 'fade-in-up 0.5s ease-out 1000ms forwards' }}>
          
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card shadow-sm hover:scale-105 transition-transform duration-300 z-10">
            <Linkedin className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs font-medium text-foreground tracking-tight">LinkedIn CI API</span>
          </div>

          <div className="h-4 w-px md:h-px md:w-5 border-l md:border-t md:border-l-0 border-border relative">
            <div className="absolute -bottom-1 left-1/2 -translate-x-[2px] md:-right-1 md:-translate-y-1/2 md:bottom-auto md:left-auto md:translate-x-0 w-0 h-0 border-x-[3px] border-x-transparent border-t-[4px] md:border-y-[3px] md:border-y-transparent md:border-l-[4px] border-t-muted-foreground/60 md:border-l-muted-foreground/60" />
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-primary/40 bg-card shadow-[0_2px_8px_hsl(var(--primary)/0.1)] ring-1 ring-primary/5 hover:scale-105 transition-transform duration-300 z-10">
            <BarChart3 className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary tracking-tight">DemandSense</span>
          </div>

          <div className="h-4 w-px md:h-px md:w-5 border-l md:border-t md:border-l-0 border-border relative">
            <div className="absolute -bottom-1 left-1/2 -translate-x-[2px] md:-right-1 md:-translate-y-1/2 md:bottom-auto md:left-auto md:translate-x-0 w-0 h-0 border-x-[3px] border-x-transparent border-t-[4px] md:border-y-[3px] md:border-y-transparent md:border-l-[4px] border-t-muted-foreground/60 md:border-l-muted-foreground/60" />
          </div>

          <div className="flex flex-col items-center relative z-10">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card shadow-sm hover:scale-105 transition-transform duration-300">
              <Database className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground tracking-tight">Your CRM</span>
            </div>
            <span className="absolute -bottom-[16px] text-[9.5px] text-muted-foreground whitespace-nowrap hidden md:block">HubSpot · Salesforce</span>
          </div>
          <span className="mt-1 text-[9.5px] text-muted-foreground whitespace-nowrap block md:hidden">HubSpot · Salesforce</span>

        </div>
        
        {/* Layer 3: METRICS */}
        <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {metricCards.map((item, idx) => (
            <div key={idx} className="bg-card rounded-xl border border-border shadow-sm p-3 transition-shadow duration-300 hover:shadow-md opacity-0" style={{ animation: `fade-in-up 0.5s ease-out ${item.delay}ms forwards` }}>
              <div className="flex justify-between items-start">
                <div className="text-lg font-bold text-foreground leading-none">{item.num}</div>
                {item.badge && <div className="text-[10px] font-semibold text-emerald-500 tracking-tight leading-none mt-1">{item.badge}</div>}
              </div>
              <div className="text-[10px] text-muted-foreground mt-1.5 leading-snug">{item.label}</div>
              <Sparkline points={item.points} polyPoints={item.polyPoints} stepDelay={item.delay} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

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
              <AnimatedHeroVisual />
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
        <section className="w-full bg-slate-900 py-20 md:py-24 px-6 md:px-12">
          <div className="max-w-[900px] mx-auto flex flex-col items-start text-left">
            {/* Block 1 */}
            <h2 className="text-[36px] md:text-[42px] font-extrabold text-white leading-tight mb-6">
              You can't engage customers you can't see.
            </h2>
            
            {/* Block 2 */}
            <p className="text-[16px] text-slate-300 max-w-[720px] mb-5 leading-relaxed">
              Three people at Acme Corp see your LinkedIn ad this week. One watches the video to 100%. Another clicks through to your website from an organic post. A third sees the ad twice in their feed but never clicks. None of them fill out a form.
            </p>
            <p className="text-[16px] text-slate-300 max-w-[720px] mb-6 leading-relaxed">
              Your dashboard shows one impression and zero engagement from that account. You see low CTR on the campaign and shift budget to a different audience. Sales never learns Acme Corp is warming. HubSpot has no record of the activity.
            </p>
            <p className="text-[18px] font-semibold text-white mb-12">
              Three weeks later, Acme signs with a competitor whose SDR reached out at the right moment.
            </p>

            {/* Block 3 */}
            <div className="w-full">
              <h3 className="text-[20px] font-semibold text-white mb-5">What's happening</h3>
              <div className="w-full overflow-x-auto pb-4">
                <div className="min-w-[700px] border border-white/10 rounded-lg overflow-hidden">
                  <table className="w-full text-left bg-white/[0.02]">
                    <thead className="bg-white/[0.06]">
                      <tr>
                        <th className="py-3 px-4 text-left text-[13px] font-semibold text-white/60 w-[30%]">Campaign Manager Shows</th>
                        <th className="py-3 px-4 text-left text-[13px] font-semibold text-white/60 w-[35%]">What's Actually Happening</th>
                        <th className="py-3 px-4 text-left text-[13px] font-semibold text-white/60 w-[35%]">What It Costs You</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr className="bg-white/[0.02]">
                        <td className="py-[14px] px-4 text-[14px] md:text-[15px] text-white/80">3 companies engaged</td>
                        <td className="py-[14px] px-4 text-[14px] md:text-[15px] text-white/80">42 companies engaged</td>
                        <td className="py-[14px] px-4 text-[14px] md:text-[15px] text-white/80">Decisions based on 7% of the picture</td>
                      </tr>
                      <tr className="bg-white/[0.02]">
                        <td className="py-[14px] px-4 text-[14px] md:text-[15px] text-white/80">No organic engagement data</td>
                        <td className="py-[14px] px-4 text-[14px] md:text-[15px] text-white/80">23 companies engaged organically</td>
                        <td className="py-[14px] px-4 text-[14px] md:text-[15px] text-white/80">Ignoring accounts already warming</td>
                      </tr>
                      <tr className="bg-white/[0.02]">
                        <td className="py-[14px] px-4 text-[14px] md:text-[15px] text-white/80">Campaign CTR: 0.4%</td>
                        <td className="py-[14px] px-4 text-[14px] md:text-[15px] text-white/80">6 people at one account clicked</td>
                        <td className="py-[14px] px-4 text-[14px] md:text-[15px] text-white/80">Best accounts hidden in averages</td>
                      </tr>
                      <tr className="bg-white/[0.02]">
                        <td className="py-[14px] px-4 text-[14px] md:text-[15px] text-white/80">Pipeline influenced: $0</td>
                        <td className="py-[14px] px-4 text-[14px] md:text-[15px] text-white/80">$127K in influenced pipeline</td>
                        <td className="py-[14px] px-4 text-[14px] md:text-[15px] text-white/80">LinkedIn budget on the chopping block</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Block 4 */}
            <div className="w-full mt-12 p-6 md:p-8 rounded-xl border border-white/10 bg-white/5">
              <Quote className="w-6 h-6 text-[#3875F6] mb-4" />
              <p className="text-[16px] italic text-white/80 mb-4 leading-relaxed">
                "DemandSense showed us accounts engaging with our LinkedIn ads that we had no idea existed. We were about to cut the campaign."
              </p>
              <p className="text-[14px] text-white/50">
                — [Customer Name], [Title], [Company]
              </p>
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

        {/* 5. SOLUTION INTRO (New Light Section) */}
        <section className="py-24 md:py-32 bg-white border-y border-gray-100">
          <div className="max-w-[1216px] mx-auto px-6">
            
            <div className="flex flex-col items-center">
              <h2 className="text-3xl md:text-[42px] font-semibold text-gray-900 text-center leading-tight">
                Full company-level engagement. <span className="text-[#3875F6]">14x more visibility.</span> <span className="text-[#3875F6]">Controls to act on it.</span>
              </h2>
              <p className="mt-3 text-[16px] text-gray-500 text-center max-w-[680px] leading-relaxed">
                Most LinkedIn analytics tools show you a dashboard. DemandSense connects to LinkedIn's Company Intelligence API to surface every engaged company, match them to your ICP, and give you campaign controls to act on the data.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Card 1 */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:-translate-y-1 hover:border-[#3875F6]/20 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#3875F6]/10 flex items-center justify-center shrink-0">
                    <Eye className="w-5 h-5 text-[#3875F6]" strokeWidth={2} />
                  </div>
                  <span className="text-[12px] font-semibold uppercase tracking-wide text-gray-500">
                    Step 1
                  </span>
                </div>
                <h3 className="mt-2 text-[20px] font-semibold text-gray-900">See</h3>
                <p className="mt-4 text-[16px] text-gray-700/80 leading-relaxed">
                  DemandSense surfaces every company that engaged with your paid campaigns or organic content on LinkedIn. Not just clicks. Video views, post likes, page engagement, and impressions at the account level. Campaign Manager shows roughly 20% of this.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:-translate-y-1 hover:border-[#3875F6]/20 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#3875F6]/10 flex items-center justify-center shrink-0">
                    <SlidersHorizontal className="w-5 h-5 text-[#3875F6]" strokeWidth={2} />
                  </div>
                  <span className="text-[12px] font-semibold uppercase tracking-wide text-gray-500">
                    Step 2
                  </span>
                </div>
                <h3 className="mt-2 text-[20px] font-semibold text-gray-900">Act</h3>
                <p className="mt-4 text-[16px] text-gray-700/80 leading-relaxed">
                  Non-ICP companies eating your budget? Exclude them. High-engagement accounts? Increase their exposure. Ads serving at 3 AM? Set scheduling rules. DemandSense gives you campaign controls that other LinkedIn data tools don't.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:-translate-y-1 hover:border-[#3875F6]/20 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#3875F6]/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#3875F6]" strokeWidth={2} />
                  </div>
                  <span className="text-[12px] font-semibold uppercase tracking-wide text-gray-500">
                    Step 3
                  </span>
                </div>
                <h3 className="mt-2 text-[20px] font-semibold text-gray-900">Prove</h3>
                <p className="mt-4 text-[16px] text-gray-700/80 leading-relaxed">
                  Engagement data maps directly to your CRM pipeline. See which campaigns influenced accounts that became opportunities or closed as revenue. When leadership asks if LinkedIn is working, open one screen.
                </p>
              </div>
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