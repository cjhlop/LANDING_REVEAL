"use client";

import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/footer";
import Loader from "@/components/Loader";
import LogoTicker from "@/components/LogoTicker";
import SectionBadge from "@/components/SectionBadge";
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
  Linkedin
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
    color: "#00A1E0" 
  },
  { 
    name: "HubSpot", 
    logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg", 
    color: "#FF7A59" 
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
                <SectionBadge icon={Zap} text="LINKEDIN AUDIENCE ENGAGEMENT" />
              </div>

              <h1 className={cn(
                "text-5xl md:text-6xl lg:text-[68px] font-bold text-gray-900 tracking-tighter leading-[1.1] transition-all duration-700 delay-100",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                Stop optimizing LinkedIn campaigns on a fraction of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3875F6] to-[#7486AA]">engagement data.</span>
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
                "flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-700 delay-400",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <Button variant="hero" size="hero" onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}>
                  Start Free Trial
                </Button>
                <p className="text-gray-900 text-sm leading-tight max-w-[200px]">
                  <span className="font-bold">No credit card.</span> Live in 5 minutes.
                </p>
              </div>
            </div>

            {/* Right: Screenshot */}
            <div className={cn(
              "relative flex flex-col transition-all duration-1000 delay-300",
              heroInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}>
              <ScreenshotPlaceholder 
                label="Company-level Engagement List" 
                description="Shows engagement scores (LOW/MED/HIGH/VERY_HIGH), paid + organic columns, and CRM match indicators."
              />
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
                  Your campaign decisions draw from a fraction of <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">what actually happened</span>
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
                
                <div className="mt-10">
                  <Button size="lg" className="group" onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}>
                    See Company-Level Data
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
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

        {/* --- SOLUTION INTRO (METRICS BAND STYLE) --- */}
        <section
          ref={solutionRef}
          className="relative w-full bg-gradient-to-b from-gray-50 to-white border-b border-gray-200"
        >
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 py-16 md:py-24">
            {/* Header with chip */}
            <div className="text-center mb-16 space-y-6 max-w-[1000px] mx-auto">
              <div className="flex justify-center">
                <SectionBadge icon={Zap} text="HOW DEMANDSENSE WORKS" />
              </div>

              <h2
                className={cn(
                  "text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight transition-all duration-700 text-balance",
                  solutionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                Get engagement signals LinkedIn already captured{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  to know which audiences are paying attention
                </span>
              </h2>

              <p className={cn(
                "text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-200 max-w-3xl mx-auto",
                solutionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                DemandSense is the missing layer between campaign metrics and audience-level engagement data. Now you can see which audiences engage with your ads, whether they match your buyer profile, and where they sit in your pipeline. Connected to your CRM, ready to act on before your next campaign cycle.
              </p>
            </div>

            {/* Metrics Grid (Stats Cards Style) */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mt-12"
              role="list"
            >
              {[
                { 
                  num: "4x", 
                  desc: "more audiences reached" 
                },
                { 
                  num: "14x", 
                  desc: "more audiences engaged" 
                },
                { 
                  num: "80%", 
                  desc: "more leads matched in CRM" 
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative flex flex-col items-center text-center px-6 py-6 transition-opacity duration-500",
                    solutionInView ? "opacity-100" : "opacity-0",
                    // Vertical dividers on desktop (not on last item)
                    "lg:border-r lg:border-gray-200 lg:last:border-r-0",
                    // Horizontal dividers on mobile/tablet (not on last item)
                    "border-b border-gray-200 last:border-b-0 md:border-b-0"
                  )}
                  style={{
                    transitionDelay: solutionInView ? `${index * 150}ms` : "0ms",
                  }}
                  role="listitem"
                >
                  <div
                    className={cn(
                      "text-5xl md:text-6xl font-black text-[#0F2043] mb-4 tracking-tighter"
                    )}
                  >
                    {item.num}
                  </div>

                  <p className="text-sm md:text-base font-bold text-blue-600 uppercase tracking-widest leading-relaxed max-w-[200px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- VP1: REVEAL --- */}
        <section className="py-24 px-6 md:px-[112px] bg-white">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div ref={vp1Ref} className="space-y-8">
              <div className="text-[#3875F6] font-bold text-xs uppercase tracking-widest">STEP 1: REVEAL</div>
              <h2 className="text-4xl md:text-[44px] font-bold text-[#0F2043] tracking-tight leading-tight">
                See which audiences are engaging with you on LinkedIn
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
        </section>

        {/* --- VP2: CONNECT TO CRM --- */}
        <section className="py-24 px-6 md:px-[112px] bg-white border-t border-gray-100">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              <div className="text-orange-500 font-bold text-xs uppercase tracking-widest">STEP 2: CONNECT</div>
              <h2 className="text-4xl md:text-[44px] font-bold text-[#0F2043] tracking-tight leading-tight">
                Know which engaged companies are in your pipeline and which are new
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Reaching 4x more companies is a data point. Knowing which are in your pipeline, which are net-new, and which are existing customers is the difference between a report and a decision. DemandSense matches engagement to HubSpot or Salesforce automatically.
              </p>
              
              <ul className="space-y-4 pt-2">
                {[
                  { icon: LinkIcon, text: "Automatic CRM match (HubSpot, Salesforce)" },
                  { icon: Tag, text: "Net-new vs. existing customer flagging" },
                  { icon: Users, text: "Pipeline stage and deal owner per account" }
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
        </section>

        {/* --- LEAD MAGNET --- */}
        <section className="py-20 bg-[#F5F9FF] border-y border-blue-100">
          <div className="max-w-[900px] mx-auto px-6">
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl border border-blue-100 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Free LinkedIn Engagement Report Template</h3>
                <p className="text-gray-600 mb-6">Download the exact framework top B2B teams use to report on company-level engagement and pipeline influence.</p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <Input type="email" placeholder="Your work email" className="h-12 bg-gray-50" required />
                  <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700">Get the Template</Button>
                </form>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img src="/images/visitor-report-preview.png" alt="Report Preview" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* --- VP3: ACT --- */}
        <section className="py-24 px-6 md:px-[112px] bg-white">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div ref={vp3Ref} className="space-y-8">
              <div className="text-emerald-500 font-bold text-xs uppercase tracking-widest">STEP 3: ACT</div>
              <h2 className="text-4xl md:text-[44px] font-bold text-[#0F2043] tracking-tight leading-tight">
                Adjust campaigns based on who actually responded
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Monday morning. Last week's engagement data is matched to your CRM. You filter by target criteria: 12 net-new companies match your buyer profile. 3 existing customers are eating acquisition budget (you exclude them). 8 are in pipeline with open deals (you flag them for sales). Three audience adjustments before you open Campaign Manager.
              </p>
              
              <ul className="space-y-4 pt-2">
                {[
                  { icon: SlidersHorizontal, text: "Filter by ICP criteria and engagement level" },
                  { icon: Send, text: "Route engaged accounts to sales with context" },
                  { icon: ShieldAlert, text: "Exclude existing customers from acquisition spend" }
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
        </section>

        {/* INTREGRATIONS SECTION REPLACED */}
        <section className="relative w-full bg-white px-6 md:px-[112px] py-24 lg:py-32 overflow-hidden border-b border-gray-100">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-[1216px] mx-auto relative z-10">
            <div className="text-center mb-20">
              <SectionBadge icon={Zap} text="Ecosystem" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-8 mb-6 tracking-tight leading-[1.1]">
                Connected to the tools <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">you already use</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Native integrations with HubSpot and Salesforce. Webhooks for everything else. Deal data syncs automatically - no CSV uploads, no manual mapping, no middleware.
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
                                className="w-8 h-8 md:w-10 md:h-10 grayscale group-hover:grayscale-0 transition-all duration-500" 
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

        {/* --- HOW IT WORKS --- */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-[1216px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-[#0F2043] tracking-tight mb-4">
                GETTING STARTED
              </h2>
              <p className="text-xl text-gray-600">
                Connect, see, act. Under 10 minutes to start.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Connect (10 minutes)",
                  desc: "Link your LinkedIn ad account and CRM. No tags, no code, no pixel.",
                  icon: <LinkIcon className="w-6 h-6 text-blue-600" />
                },
                {
                  step: "02",
                  title: "See (first sync)",
                  desc: "Company-level engagement loads automatically. Paid and organic. Every campaign. Matched to your CRM.",
                  icon: <Globe className="w-6 h-6 text-blue-600" />
                },
                {
                  step: "03",
                  title: "Act (next campaign cycle)",
                  desc: "Filter by target criteria. Adjust audiences. Route Accounts to sales. Defend budget with account-level evidence.",
                  icon: <Zap className="w-6 h-6 text-blue-600" />
                }
              ].map((item, i) => (
                <div key={i} className="relative p-8 bg-white rounded-3xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
                  <div className="absolute -top-6 bg-blue-50 border border-white text-blue-600 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-sm">
                    Step {item.step}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 mt-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <section className="py-32 bg-[#0F2043] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Your LinkedIn campaigns reached thousands of companies last month. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Can you name which ones from your target list actually engaged?</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-200 font-medium">
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-blue-400" />
                <span>See company-level engagement across paid and organic</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-blue-400" />
                <span>Connected to your CRM automatically</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 pt-4">
              <Button size="hero" className="bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_40px_rgba(37,99,235,0.4)] px-12" onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}>
                Start Free Trial
              </Button>
              <p className="text-sm font-bold text-blue-300 uppercase tracking-widest">
                No credit card required. Set up in under 10 minutes.
              </p>
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