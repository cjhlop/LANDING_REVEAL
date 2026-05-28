"use client";

import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/footer";
import Loader from "@/components/Loader";
import LogoTicker from "@/components/LogoTicker";
import SectionBadge from "@/components/SectionBadge";
import RevenueSteps from "@/components/revenue-attribution/RevenueSteps";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  CheckCircle2, 
  EyeOff, 
  Unlink, 
  Search,
  BarChart3,
  Globe,
  Link as LinkIcon,
  Tag,
  Users,
  SlidersHorizontal,
  Send,
  ShieldAlert,
  Zap,
  Check,
  FileText,
  MessageSquare,
  Webhook as WebhookIcon,
  AlertTriangle,
  ArrowRight,
  Linkedin,
  Layers,
  TrendingUp,
  DollarSign,
  Clock
} from "lucide-react";

// Local Screenshot Placeholder (Styled like Website Visitors)
const ScreenshotPlaceholder = ({ label, description }: { label: string, description?: string }) => (
  <div className="magic-border h-full w-full group" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
    <div className="relative flex flex-col justify-center items-center bg-slate-900 rounded-[inherit] p-8 md:p-12 min-h-[400px] overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      <div className="relative z-10 w-full bg-slate-800/80 border border-slate-700/50 rounded-2xl flex flex-col items-center justify-center p-8 aspect-[4/3] shadow-inner backdrop-blur-sm text-center space-y-4">
        <p className="text-sm font-bold text-blue-400 uppercase tracking-widest">
          [Dashboard UI]
        </p>
        <p className="text-xl font-bold text-white leading-tight">
          {label}
        </p>
        {description && (
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            {description}
          </p>
        )}
      </div>
    </div>
  </div>
);

const INTEGRATION_PLATFORMS = [
  { name: "LinkedIn", icon: Linkedin, color: "#0A66C2" },
  { 
    name: "Salesforce", 
    logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg", 
  },
  { 
    name: "HubSpot", 
    logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg", 
  },
  {
    name: "Attio",
    logo: "/images/attio-logo-icon.png",
  },
  {
    name: "Zoho",
    logo: "/images/zoho-logo.png",
  },
  { name: "Webhook", icon: WebhookIcon, color: "#96C24E" },
];

const LinkedInAudienceEngagement = () => {
  const [heroRef, heroInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.1 });
  const [problemRef, problemInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.1 });
  const [solutionRef, solutionInView] = useInViewOnce<HTMLElement>({ 
    threshold: 0.2, 
    rootMargin: "0px 0px -10% 0px" 
  });
  const [vp1Ref, vp1InView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });
  const [vp2Ref, vp2InView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });
  const [vp3Ref, vp3InView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });
  const [vp5Ref, vp5InView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });
  const [vp6Ref, vp6InView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });
  const [vp4Ref, vp4InView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });
  const [statsRef, statsInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });
  const [caseStudyRef, caseStudyInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });
  
  const [diagramRef, diagramInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.15 });
  const [isPulsing, setIsPulsing] = React.useState(false);

  React.useEffect(() => {
    if (!diagramInView) return;
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, [diagramInView]);

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900">
      <Navbar />

      <main className="overflow-x-hidden">
        
        {/* --- HERO SECTION --- */}
        <section className="relative w-full min-h-[90vh] flex flex-col pt-32 pb-20 bg-white">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#3875F6]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-[#FA8C16]/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 mb-20">
            
            {/* Left: Copy */}
            <div ref={heroRef} className="space-y-8">
              <div className={cn(
                "transition-all duration-700",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                <SectionBadge icon={Zap} text="LinkedIn Ad Intelligence" />
              </div>

              <h1 className={cn(
                "text-5xl md:text-6xl lg:text-[68px] font-bold text-gray-900 tracking-tighter leading-[1.1] transition-all duration-700 delay-100",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                The richest source of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3875F6] to-[#7486AA]">audience engagement data</span> to power your LinkedIn strategy
              </h1>

              <p className={cn(
                "text-xl text-gray-600 max-w-xl leading-relaxed transition-all duration-700 delay-200",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                Campaign Manager surfaces roughly 20% of audience engagement. DemandSense reveals every LinkedIn engagement signal, connects it to CRM and turns it into actionable insights.
              </p>

              {/* Feature List */}
              <div className={cn(
                "space-y-3 transition-all duration-700 delay-300",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                {[
                  "See every company that engaged with your ads",
                  "Discover how many leads and deals LinkedIn actually drove",
                  "Optimize campaigns on the full audience picture"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className={cn(
                "flex flex-col gap-4 transition-all duration-700 delay-400 mt-2",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="hero" onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}>
                    Start Free Trial
                  </Button>
                  <Button 
                    variant="outline" 
                    size="hero"
                    className="border-gray-200 text-gray-700 hover:bg-gray-50 bg-white shadow-sm"
                    onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    See How It Works
                  </Button>
                </div>
                <p className="text-gray-600 text-sm pl-1">
                  <span className="font-bold text-gray-900">No credit card required.</span> Set up in 5 minutes to see who's engaging right now.
                </p>
              </div>
            </div>

            {/* Right: Screenshot + Testimonial */}
            <div className={cn(
              "relative flex flex-col gap-12 transition-all duration-1000 delay-300",
              heroInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}>
              <ScreenshotPlaceholder 
                label="Company-level Engagement List" 
                description="Shows engagement scores (LOW/MED/HIGH/VERY_HIGH), paid + organic columns, and CRM match indicators."
              />

              {/* Client Feedback Card */}
              <div className="bg-[#F5F9FF] rounded-2xl p-6 border border-blue-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="flex gap-4 items-start relative z-10">
                  <img 
                    src="/avatars/Jason Squires.jpg" 
                    alt="Jason Squires" 
                    className="w-16 h-16 rounded-lg object-cover border-2 border-white shadow-sm flex-shrink-0"
                  />
                  <div className="space-y-3">
                    <p className="text-[15px] leading-relaxed text-gray-800 italic">
                      “<span className="font-bold">It reduced my cost per lead by 60% the second I turned it on!</span> It’s literally been the difference between a campaign being incredibly successful, or burning a hole in my pocket.”
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-sm font-bold text-gray-900">Jason Squires,</span>
                      <span className="text-sm text-gray-600">Founder Of</span>
                      <div className="flex items-center font-bold text-gray-900 text-sm tracking-tight">
                        Project<span className="text-orange-500 relative">Scale<span className="absolute -top-1 -right-2 text-[10px] text-orange-400">↗</span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              </div>
            </div>
          </div>
        </section>

        {/* LOGO BAR */}
        <div className="border-t border-gray-100 pt-8 pb-4 bg-gray-50 flex flex-col items-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Trusted by B2B marketing teams running LinkedIn ads</p>
          <LogoTicker variant="light" className="py-2 border-y-0 bg-transparent" />
        </div>

        {/* --- PROBLEM SECTION (REDESIGNED TO MATCH VISITOR INTRO) --- */}
        <section className="py-24 bg-white border-b border-gray-100 border-t border-gray-100 mt-4">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div ref={problemRef} className={cn(
                "transition-all duration-700",
                problemInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <div className="mb-6">
                  <SectionBadge icon={EyeOff} text="THE DATA GAP" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] mb-6 tracking-tight leading-tight">
                  Native reporting doesn't show you the true picture of <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">what's working on LinkedIn</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Standard reporting covers clicks, impressions, and conversions. But discovering which companies are behind those numbers, if they match your targets, and how they engaged requires data standard reporting doesn't return.
                  </p>
                  
                  <div className="space-y-4 pt-4">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-6 w-6 text-orange-500 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900">You can't see which companies engaged</p>
                        <p className="text-base text-gray-600">Standard metrics won't show which specific companies matched your buyer profile.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <AlertTriangle className="h-6 w-6 text-orange-500 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900">Campaign and CRM data don't connect</p>
                        <p className="text-base text-gray-600">Engagement lives in LinkedIn, while pipeline lives in your CRM. They remain isolated.</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <AlertTriangle className="h-6 w-6 text-orange-500 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900">No path from signal to action</p>
                        <p className="text-base text-gray-600">Even when you spot a pattern, there's no direct route to adjust an audience or alert sales.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-full flex items-center">
                {/* Visual Representation of the "Gap" */}
                <div className="relative w-full bg-gray-50 rounded-3xl p-8 border border-gray-200 overflow-hidden min-h-[500px] flex flex-col justify-center gap-6">
                  
                  {/* Background Effects */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse duration-[4000ms]" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
                  
                  {/* Campaign Manager Side */}
                  <div className="relative z-10 w-full bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                        <BarChart3 className="h-4 w-4 text-blue-500" />
                        LinkedIn Ads Output
                      </div>
                      <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded font-bold tracking-wider uppercase">Aggregate</div>
                    </div>
                    <div className="flex gap-4 border-t border-gray-50 pt-4">
                       <div className="flex-1 space-y-1">
                         <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Impressions</div>
                         <div className="text-2xl font-black text-gray-900 tracking-tight">124,500</div>
                       </div>
                       <div className="flex-1 space-y-1">
                         <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Clicks</div>
                         <div className="text-2xl font-black text-gray-900 tracking-tight">842</div>
                       </div>
                    </div>
                  </div>

                  {/* The Disconnect Line */}
                  <div className="flex flex-col items-center justify-center my-1 relative z-10">
                     <div className="h-8 border-l-2 border-dashed border-gray-300" />
                     <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest flex gap-2 items-center shadow-sm relative z-20">
                       <Unlink className="w-3.5 h-3.5" />
                       Missing Connection
                     </div>
                     <div className="h-8 border-l-2 border-dashed border-gray-300" />
                     
                     {/* Red line accent crossing through */}
                     <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent -translate-y-1/2 w-full max-w-[200px] mx-auto opacity-50" />
                  </div>

                  {/* CRM Side */}
                  <div className="relative z-10 w-full bg-white rounded-xl border border-gray-200 p-5 shadow-sm opacity-60 mix-blend-luminosity">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                        <Users className="h-4 w-4 text-orange-500" />
                        Target Accounts & CRM
                      </div>
                      <div className="text-xs text-red-500 bg-red-50 px-2 py-1 rounded font-bold uppercase tracking-wider border border-red-100">Match Unknown</div>
                    </div>
                    <div className="space-y-4 border-t border-gray-50 pt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                          <Search className="w-5 h-5 text-gray-400" />
                        </div>
                        <div className="flex-1 space-y-2">
                           <div className="h-2.5 w-32 bg-gray-200 rounded animate-pulse" />
                           <div className="h-2 w-24 bg-gray-100 rounded" />
                        </div>
                      </div>
                      <div className="flex items-center gap-3 opacity-60">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                          <Search className="w-5 h-5 text-gray-400" />
                        </div>
                        <div className="flex-1 space-y-2">
                           <div className="h-2.5 w-28 bg-gray-200 rounded animate-pulse" />
                           <div className="h-2 w-16 bg-gray-100 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- STATS CALLOUT SECTION --- */}
        <section className="py-24 bg-slate-50 border-b border-gray-100">
          <div ref={statsRef} className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
            <div className={cn(
              "text-center max-w-4xl mx-auto mb-12 transition-all duration-700",
              statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <div className="flex justify-center mb-6">
                <SectionBadge icon={TrendingUp} text="THE IMPACT" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2043] tracking-tight leading-tight">
                When integrating DemandSense with LinkedIn, we found:
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-12">
              {[
                { value: "4x", label: "more companies reached" },
                { value: "14x", label: "more companies engaged" },
                { value: "80%", label: "more leads matched in CRM" },
                { value: "56%", label: "more pipeline deals influenced" },
                { value: "48%", label: "more closed/won deals influenced" }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-700 hover:shadow-md hover:border-blue-100",
                    statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-3 tracking-tighter">
                    {stat.value}
                  </span>
                  <span className="text-sm font-semibold text-gray-700 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className={cn(
              "text-center max-w-3xl mx-auto transition-all duration-700 delay-500",
              statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <p className="text-lg text-gray-600 leading-relaxed">
                Results from 13 beta customers. Same accounts. Same campaigns. Same business outcomes. What changed is <span className="font-semibold text-gray-900 border-b border-blue-200 pb-0.5">how much LinkedIn touches users could see.</span>
              </p>
            </div>
          </div>
        </section>

        {/* --- HOW IT WORKS SECTION --- */}
        <section id="how-it-works" className="py-32 bg-white">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0 space-y-32">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex justify-center mb-8">
                <SectionBadge icon={Layers} text="HOW IT WORKS" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] mb-6 tracking-tight">
                Here's exactly how anonymous engagement <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">turns into audience insights you can act on</span>
              </h2>
            </div>

            {/* --- VP1: REVEAL --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div ref={vp1Ref} className="space-y-8">
                <div>
                  <SectionBadge text="STEP 1: REVEAL" variant="blue" />
                </div>
                <h2 className="text-4xl md:text-[44px] font-bold text-[#0F2043] tracking-tight leading-tight">
                  Reveal every account reacting to your LinkedIn ads (even if they don't click)
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Standard reporting shows aggregate campaign metrics. DemandSense pulls company-level engagement data that standard tools don't return, paid and organic, scored from low to very high so you can tell a glance from a pattern.
                </p>
                
                <ul className="space-y-4 pt-2">
                  {[
                    { icon: Search, text: "Company-level engagement across all campaign types" },
                    { icon: BarChart3, text: "Engagement scoring: separate a glance from repeated interest" },
                    { icon: Globe, text: "Paid and organic interactions in one view" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-800 font-medium">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                        <item.icon className="w-5 h-5" />
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={cn(
                "transition-all duration-1000",
                vp1InView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}>
                <ScreenshotPlaceholder 
                  label="Company Engagement List" 
                  description="List showing company names, engagement levels, impression counts, and engagement type breakdown."
                />
              </div>
            </div>

            {/* --- VP2: CONNECT TO CRM --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-8">
              <div className={cn(
                "order-2 lg:order-1 transition-all duration-1000",
                vp2InView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}>
                <ScreenshotPlaceholder 
                  label="CRM Connection View" 
                  description="Engaged companies tagged 'In Pipeline', 'Net New', 'Existing Customer' with deal stage visible."
                />
              </div>

              <div ref={vp2Ref} className="space-y-8 order-1 lg:order-2">
                <div>
                  <SectionBadge text="STEP 2: CONNECT" variant="orange" />
                </div>
                <h2 className="text-4xl md:text-[44px] font-bold text-[#0F2043] tracking-tight leading-tight">
                  See the true LinkedIn impact on pipeline and revenue
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Connect full engagement data to your CRM. Leads and pipeline deals that were never attributed to LinkedIn now become visible. See the real impact you can prove.
                </p>
                
                <ul className="space-y-4 pt-2">
                  {[
                    { icon: LinkIcon, text: "Engagement data matched to CRM automatically" },
                    { icon: TrendingUp, text: "See every LinkedIn touch across the buyer journey" },
                    { icon: DollarSign, text: "Discover true ROI of your LinkedIn Ads" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-800 font-medium">
                      <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 text-orange-500">
                        <item.icon className="w-5 h-5" />
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* --- VP3: ACT --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-8">
              <div ref={vp3Ref} className="space-y-8">
                <div>
                  <SectionBadge text="STEP 3: ACT" variant="emerald" />
                </div>
                <h2 className="text-4xl md:text-[44px] font-bold text-[#0F2043] tracking-tight leading-tight">
                  Measure campaign performance by audience, not just clicks
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Break down every campaign by which companies engaged, how often, and how deep. Compare campaigns by audience engagement, not click volume. See which campaigns resonate with your ICP.
                </p>
                
                <ul className="space-y-4 pt-2">
                  {[
                    { icon: Users, text: "See which campaigns engage real buyers" },
                    { icon: DollarSign, text: "Evaluate campaigns by cost per engaged account, not just CPC" },
                    { icon: BarChart3, text: "Spot which campaigns keep resonating vs. one-time impressions" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-800 font-medium">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 text-emerald-600">
                        <item.icon className="w-5 h-5" />
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={cn(
                "transition-all duration-1000",
                vp3InView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}>
                <ScreenshotPlaceholder 
                  label="Actionable Insights View" 
                  description="Engagement view with ICP filter applied, 'Push to CRM' and 'Exclude' action buttons visible."
                />
              </div>
            </div>

            {/* --- VP5: JOURNEY TRACKING --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-8">
              <div className={cn(
                "order-2 lg:order-1 transition-all duration-1000",
                vp5InView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}>
                <ScreenshotPlaceholder 
                  label="Journey Timeline View" 
                  description="A chronological timeline connecting LinkedIn ad impressions, website visits, and CRM status updates."
                />
              </div>

              <div ref={vp5Ref} className="space-y-8 order-1 lg:order-2">
                <div>
                  <SectionBadge text="JOURNEY TRACKING" variant="cyan" />
                </div>
                <h2 className="text-4xl md:text-[44px] font-bold text-[#0F2043] tracking-tight leading-tight">
                  Track the path from first impression to closed deal, including every website visit in between
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Pick any company in your dashboard and read the full story. Every touchpoint - LinkedIn impressions, clicks, organic interactions, and website visits - stitched into one timeline, automatically.
                </p>
                
                <ul className="space-y-4 pt-2">
                  {[
                    { icon: TrendingUp, text: "Follow each company's journey across LinkedIn and your website" },
                    { icon: BarChart3, text: "See which campaigns started the conversation and which ones moved it forward" },
                    { icon: Globe, text: "Spot when an account goes from \"saw your ad\" to \"browsing your pricing page\"" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-800 font-medium">
                      <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center flex-shrink-0 text-cyan-600">
                        <item.icon className="w-5 h-5" />
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* --- VP6: DATA FOUNDATION --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-8">
              <div ref={vp6Ref} className="space-y-8">
                <div>
                  <SectionBadge text="DATA FOUNDATION" variant="rose" />
                </div>
                <h2 className="text-4xl md:text-[44px] font-bold text-[#0F2043] tracking-tight leading-tight">
                  Capture 14x more LinkedIn engagement data on auto-pilot, paid and organic
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  This isn't a reporting trick or a different attribution model. It's a different data source. Through certified access to LinkedIn's Company Intelligence API, your dashboard fills with engagement signals that Campaign Manager was never built to show.
                </p>
                
                <ul className="space-y-4 pt-2">
                  {[
                    { icon: Zap, text: "Complete LinkedIn engagement data from Company Intelligence API" },
                    { icon: Layers, text: "Paid and organic interactions combined into one view, no manual merging" },
                    { icon: LinkIcon, text: "Synced to your CRM automatically - every engagement checked against contacts and deals" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-800 font-medium">
                      <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center flex-shrink-0 text-rose-600">
                        <item.icon className="w-5 h-5" />
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={cn(
                "transition-all duration-1000",
                vp6InView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}>
                <ScreenshotPlaceholder 
                  label="Data Sources & API View" 
                  description="Dashboard showing connected APIs with incoming data event logs and payload indicators."
                />
              </div>
            </div>

            {/* --- VP4: IMPROVE --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-8">
              <div className={cn(
                "order-2 lg:order-1 transition-all duration-1000",
                vp4InView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}>
                <ScreenshotPlaceholder 
                  label="Optimization Controls View" 
                  description="Dashboard displaying audience tuning, frequency capping, and scheduling rules."
                />
              </div>

              <div ref={vp4Ref} className="space-y-8 order-1 lg:order-2">
                <div>
                  <SectionBadge text="STEP 4: IMPROVE" variant="purple" />
                </div>
                <h2 className="text-4xl md:text-[44px] font-bold text-[#0F2043] tracking-tight leading-tight">
                  Optimize campaigns on audiences that are paying attention
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Adjust targeting, set delivery rules, and reallocate budget based on complete engagement data. Tune who sees your ads using the 100%, not the 1% that clicked.
                </p>
                
                <ul className="space-y-4 pt-2">
                  {[
                    { icon: SlidersHorizontal, text: "Tune audiences based on which companies actually engaged" },
                    { icon: Clock, text: "Set scheduling and frequency rules to control ad delivery" },
                    { icon: DollarSign, text: "Shift budget toward campaigns reaching engaged, high-fit audiences" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-800 font-medium">
                      <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0 text-purple-600">
                        <item.icon className="w-5 h-5" />
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* --- CASE STUDY TEMPLATE (NEW) --- */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div ref={caseStudyRef} className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
            
            {/* Added Headline */}
            <div className={cn(
              "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
              caseStudyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2043] tracking-tight">
                Bold claims need receipts. Here are ours.
              </h2>
            </div>

            <div className={cn(
              "bg-slate-900 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] flex flex-col lg:flex-row transition-all duration-700 delay-100",
              caseStudyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              {/* Left Side: Content */}
              <div className="flex-1 p-10 md:p-14 lg:p-16 flex flex-col justify-center relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-8 w-8 bg-indigo-500/20 rounded flex items-center justify-center border border-indigo-500/30">
                       <FileText className="h-4 w-4 text-indigo-400" />
                    </div>
                    <span className="text-indigo-300 font-semibold tracking-widest text-xs uppercase">Customer Story</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-10 leading-snug">
                     "DemandSense completely flipped how we evaluate our LinkedIn spend. We can finally see the concrete accounts hidden behind impressions, proving the impact directly to leadership."
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 mt-auto pt-6 border-t border-slate-800">
                     <div className="h-14 w-14 rounded-full bg-slate-800 border-2 border-slate-700 overflow-hidden flex-shrink-0">
                       <div className="w-full h-full text-slate-500 flex items-center justify-center text-xs font-semibold bg-slate-800/50">
                         PHOTO
                       </div>
                     </div>
                     <div>
                       <div className="font-bold text-white text-lg">[Name Placeholder]</div>
                       <div className="text-slate-400 text-sm">[VP of Marketing / Title]</div>
                     </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side: Metrics & Detail */}
              <div className="bg-slate-800 lg:w-[420px] p-10 md:p-14 lg:p-16 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-700/50">
                <div className="mb-12 opacity-60">
                   {/* Placeholder for Logo */}
                   <div className="h-10 w-32 bg-slate-700 rounded flex items-center justify-center border border-slate-600">
                      <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest COMPANY LOGO">COMPANY LOGO</span>
                   </div>
                </div>
                
                <div className="space-y-10">
                   <div>
                     <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight">14x</div>
                     <div className="text-xs font-bold text-indigo-300 uppercase tracking-widest leading-relaxed">Audience Engagement Growth</div>
                   </div>
                   
                   <div className="w-12 h-px bg-slate-700" />
                   
                   <div>
                     <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight">56%</div>
                     <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest leading-relaxed">more LinkedIn pipeline attributed</div>
                   </div>
                   
                   <div className="w-12 h-px bg-slate-700" />
                   
                   <div>
                     <div className="text-xl lg:text-2xl font-bold text-white mb-2 tracking-tight">$929.7K Revenue Influenced</div>
                     <div className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Achieved in First Quarter</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- MID-PAGE CTA BREAK --- */}
        <section className="py-20 bg-[#0B0F19] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="max-w-[1216px] mx-auto px-6 text-center space-y-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                See this with your own campaigns.
              </span>
              <span className="block mt-2">
                Connect your CRM and get engagement data in minutes.
              </span>
            </h2>
            <div className="flex flex-col items-center gap-4">
              <Button 
                variant="secondary" 
                size="hero"
                className="bg-white text-blue-600 hover:bg-blue-50 border-none shadow-xl"
                onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
              >
                Start Your 30-Day Free Trial
              </Button>
            </div>
          </div>
        </section>

        {/* INTREGRATIONS SECTION REPLACED */}
        <section className="relative w-full bg-white px-6 md:px-[112px] py-24 lg:py-32 overflow-hidden border-b border-gray-100">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-[1216px] mx-auto relative z-10">
            <div className="text-center mb-20">
              <SectionBadge icon={Zap} text="Ecosystem" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-8 mb-6 tracking-tight leading-[1.1]">
                Built to work with <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">your revenue ecosystem</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Native integrations with HubSpot, Salesforce, Attio, and Zoho. Webhooks for everything else. Deal data syncs automatically - no CSV uploads, no manual mapping, no middleware.
              </p>
            </div>

            <div 
              ref={diagramRef} 
              className={cn(
                "relative transition-all duration-1000 ease-out", 
                diagramInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            >
              <div className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center">
                
                {/* Central Hub */}
                <div className="relative z-30">
                  <div className="magic-border p-1" style={{ "--magic-radius": "2rem" } as React.CSSProperties}>
                    <div className="bg-white rounded-[inherit] p-6 md:p-10 shadow-2xl border border-blue-100 flex items-center justify-center relative">
                      <img src="/logo.svg" alt="DemandSense" className="w-12 h-12 md:w-16 md:h-16 relative z-10" />
                      <div className={cn(
                        "absolute inset-0 rounded-[inherit] bg-blue-400/20 blur-2xl transition-all duration-1000",
                        isPulsing ? "opacity-100 scale-150" : "opacity-0 scale-100"
                      )} />
                    </div>
                  </div>
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      Central Intelligence
                    </span>
                  </div>
                </div>

                {/* Platforms and CSS Paths */}
                {INTEGRATION_PLATFORMS.map((platform, index) => {
                  const angle = (index / INTEGRATION_PLATFORMS.length) * 2 * Math.PI - Math.PI / 2;
                  const radius = window.innerWidth < 768 ? 160 : 280;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  const rotationDeg = (angle * 180) / Math.PI;

                  return (
                    <React.Fragment key={platform.name}>
                      {/* Bi-directional CSS Paths */}
                      <div 
                        className="absolute top-1/2 left-1/2 w-[280px] h-[100px] pointer-events-none z-10 origin-left hidden md:block"
                        style={{ 
                          transform: `translateY(-50%) rotate(${rotationDeg}deg)`,
                          width: `${radius}px`
                        }}
                      >
                        {/* Outbound Path (Blue) */}
                        <div className="absolute inset-0 overflow-hidden">
                          <div 
                            className="absolute top-[-50%] left-0 w-full h-[200%] border-[2px] border-blue-400/20 rounded-[50%] transition-opacity duration-1000"
                            style={{ 
                              clipPath: 'inset(50% 0 0 0)',
                              opacity: diagramInView ? 1 : 0
                            }}
                          />
                          {diagramInView && (
                            <div 
                              className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"
                              style={{
                                offsetPath: `path('M 0 50 Q ${radius/2} 100 ${radius} 50')`,
                                animation: `moveParticle 3s infinite linear`,
                                animationDelay: `${index * 0.5}s`
                              }}
                            />
                          )}
                        </div>

                        {/* Inbound Path (Orange) */}
                        <div className="absolute inset-0 overflow-hidden">
                          <div 
                            className="absolute top-[-50%] left-0 w-full h-[200%] border-[2px] border-orange-400/20 rounded-[50%] transition-opacity duration-1000"
                            style={{ 
                              clipPath: 'inset(0 0 50% 0)',
                              opacity: diagramInView ? 1 : 0
                            }}
                          />
                          {diagramInView && (
                            <div 
                              className="absolute w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_#f97316]"
                              style={{
                                offsetPath: `path('M ${radius} 50 Q ${radius/2} 0 0 50')`,
                                animation: `moveParticle 3s infinite linear`,
                                animationDelay: `${index * 0.5 + 1.5}s`
                              }}
                            />
                          )}
                        </div>
                      </div>

                      {/* Platform Node */}
                      <div 
                        className="absolute z-20 group" 
                        style={{ 
                          left: "50%", 
                          top: "50%", 
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` 
                        }}
                      >
                        <div className="relative">
                          <div className={cn(
                            "bg-white rounded-2xl p-4 md:p-5 shadow-lg border border-gray-100 transition-all duration-500 group-hover:border-blue-200 group-hover:shadow-blue-500/10 group-hover:-translate-y-1 flex items-center justify-center",
                            isPulsing && "ring-4 ring-blue-500/5"
                          )}>
                            {platform.icon ? (
                              <platform.icon 
                                className="w-8 h-8 md:w-10 md:h-10 grayscale group-hover:grayscale-0 transition-all duration-500" 
                                style={{ color: platform.color }}
                              />
                            ) : (
                              <img 
                                src={platform.logo} 
                                alt={platform.name} 
                                className="w-8 h-8 md:w-10 md:h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-500" 
                              />
                            )}
                          </div>
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{platform.name}</span>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* --- 5 STEP SETUP / REVENUE STEPS --- */}
        <RevenueSteps />

        {/* --- FINAL CTA --- */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
            <div className="relative rounded-[2.5rem] bg-[#0F2043] overflow-hidden shadow-2xl border border-gray-800">
              {/* Background glowing orbs */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
              
              <div className="relative z-10 px-6 py-20 md:py-24 text-center max-w-4xl mx-auto space-y-10">
                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.1]">
                  Your campaigns are already reaching the right people. 
                  <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                    Ready to see who they are?
                  </span>
                </h2>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-lg text-blue-100/90 font-medium">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex-shrink-0 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 text-blue-400">
                      <Check className="w-5 h-5" />
                    </div>
                    <span>See company-level engagement</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 flex-shrink-0 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 text-blue-400">
                      <Check className="w-5 h-5" />
                    </div>
                    <span>Connected to your CRM</span>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-5 pt-4">
                  <Button 
                    size="hero" 
                    className="bg-blue-600 hover:bg-blue-500 text-white border-0 shadow-[0_0_40px_rgba(37,99,235,0.4)] px-10 h-16 text-lg group"
                    onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
                    No credit card required. Connects in under 10 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#0F2043] uppercase tracking-wider mb-2">Frequently Asked Questions</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Where does the engagement data come from?",
                  a: "LinkedIn has a certified partner program that gives access to company-level engagement data not available in Campaign Manager. The data includes paid and organic impressions, engagement types, and engagement scores across your campaigns."
                },
                {
                  q: "Does this change how my LinkedIn campaigns run?",
                  a: "No. DemandSense reads data. It doesn't modify your campaigns, change your bidding, or alter delivery."
                },
                {
                  q: "How long does setup take?",
                  a: "Under 10 minutes. Connect your LinkedIn ad account and your CRM. That's it. No code, no tags, no pixel."
                },
                {
                  q: "What CRMs work with this?",
                  a: "HubSpot and Salesforce. Engagement data syncs automatically and matches against your existing pipeline and contacts."
                },
                {
                  q: "What happens after the free trial?",
                  a: "Plans start at $99/month. No credit card needed to start. You keep everything collected during the trial."
                },
                {
                  q: "How is this different from the demographics tab in Campaign Manager?",
                  a: "The demographics tab gives aggregate breakdowns by job title, industry, and company size at the campaign level. DemandSense shows which specific companies engaged, how deep that engagement was, whether they match your buyer profile, and whether they're in your CRM. Different data layer entirely."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-gray-200">
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

      </main>

      <style>{`
        @keyframes moveParticle {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
      `}</style>

      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default LinkedInAudienceEngagement;