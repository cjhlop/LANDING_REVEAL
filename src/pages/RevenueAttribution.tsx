"use client";

import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Check, 
  ArrowRight, 
  BarChart3, 
  Database, 
  Zap, 
  Users, 
  Target, 
  ShieldCheck,
  ChevronDown,
  MessageSquare,
  LayoutDashboard,
  TrendingUp,
  DollarSign,
  Layers,
  Search,
  MousePointer2,
  UserCheck,
  RefreshCw,
  Eye,
  AlertCircle,
  ArrowRightLeft,
  FileText,
  CheckCircle2,
  HelpCircle,
  PieChart,
  Activity,
  Linkedin,
  Webhook as WebhookIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import { Logo } from "@/components/Navbar";
import SectionBadge from "@/components/SectionBadge";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import DynamicShadow from "@/components/DynamicShadow";
import LogoTicker from "@/components/LogoTicker";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import RevenueSteps from "@/components/revenue-attribution/RevenueSteps";
import HeroImageV2 from "@/assets/hero-screen-v2.png";

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

const LinkedInRevenueAttribution = () => {
  const [heroRef, heroInView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });
  const [problemRef, problemInView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
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
    <>
      <Navbar />
      <main className="bg-white overflow-x-hidden">
        
        {/* Section 2 - Hero */}
        <section ref={heroRef} className="relative w-full pt-32 pb-24 px-6 overflow-hidden">
          <DynamicShadow variant="hero" />
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className={cn(
              "space-y-8 transition-all duration-700",
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <SectionBadge icon={BarChart3} text="LinkedIn Revenue Attribution" />
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1]">
                Trace which LinkedIn campaigns <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">built your pipeline</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                The fastest way to connect LinkedIn ad activity to real CRM deals. Get insights into ad influence on pipeline, revenue - broken down by campaign, audience, account, and segment.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Button 
                  variant="hero" 
                  size="hero"
                  onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
                >
                  Start Your 30-Day Free Trial
                </Button>
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-gray-900">See your deal influence</p>
                  <p className="text-xs text-gray-500">in minutes.</p>
                </div>
              </div>
            </div>

            <div className={cn(
              "relative transition-all duration-1000 delay-300",
              heroInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}>
              {/* Floating Metric Cards */}
              <div className="absolute -top-6 -left-6 z-20 animate-float-slow hidden sm:block">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-blue-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">$1.24M</div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Influenced Revenue</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 z-20 animate-float-medium hidden sm:block">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-emerald-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">5.8x</div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Won ROAS</div>
                  </div>
                </div>
              </div>

              <div className="magic-border h-full w-full p-1 bg-gradient-to-b from-blue-500/20 to-transparent rounded-[2rem]" style={{ "--magic-radius": "2rem" } as React.CSSProperties}>
                <div className="relative aspect-[16/10] bg-slate-50 rounded-[1.8rem] border border-gray-200 shadow-2xl overflow-hidden group">
                  <img 
                    src={HeroImageV2} 
                    alt="DemandSense Revenue Attribution Dashboard" 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[1.8rem]" />
                  
                  {/* Overlay Gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Social Proof Bar */}
        <LogoTicker variant="dark" />

        {/* Section 4 - Problem Section */}
        <section ref={problemRef} className="py-24 px-6 bg-white border-b border-gray-100">
          <div className="max-w-[1216px] mx-auto">
            <div className={cn(
              "text-center max-w-3xl mx-auto mb-20 transition-all duration-700",
              problemInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <SectionBadge icon={AlertCircle} text="THE PROBLEM" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-6 tracking-tight">
                LinkedIn shows you clicks. Your CRM shows you deals. <span className="text-blue-600">Nothing connects them.</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                You know LinkedIn drives results. When leadership asks for proof, the data to back it up doesn't exist in a single place you can point to.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Your ad data and your deal data never meet",
                  body: "You check campaigns in one tab, pipeline in another. The two don't talk. When leadership asks: \"Did LinkedIn bring any deals?\" you're eyeballing timelines and hoping the dates line up.",
                  icon: <ArrowRightLeft className="w-6 h-6 text-blue-600" />,
                  color: "bg-blue-600"
                },
                {
                  title: "Everything rolls up into one number",
                  body: "You ran three audiences last month. All you get back is a total click count and an average CPL. No way to see which accounts engaged, how deep it went, or whether any of it turned into pipeline.",
                  icon: <Layers className="w-6 h-6 text-orange-500" />,
                  color: "bg-orange-500"
                },
                {
                  title: "You can't tell what's already working",
                  body: "Some audiences drive pipeline. Some just drive clicks. You don't have a way to separate the two. Same campaigns, same split, same budget - because no signal tells you where to double down.",
                  icon: <Zap className="w-6 h-6 text-emerald-500" />,
                  color: "bg-emerald-500"
                }
              ].map((card, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500",
                    problemInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 - Solution Intro */}
        <section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="max-w-[1216px] mx-auto px-6 text-center relative z-10">
            <SectionBadge icon={Zap} text="THE FIX" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto leading-tight mt-8 text-gray-900">
              Connect LinkedIn ads to pipeline and revenue - and feed what it finds <span className="text-blue-600">back into your targeting.</span>
            </h2>
          </div>
        </section>

        {/* Value Prop 1 - Pipeline Proof */}
        <section id="results" className="py-24 px-6 md:px-[112px] bg-white border-b border-gray-100">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-8">
              <SectionBadge icon={Target} text="LINKEDIN ADS ATTRIBUTION" />
              <h3 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight">See which campaigns are <span className="text-blue-600">building your pipeline</span></h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Get an instant snapshot of all pipeline, revenue and ROAS your LinkedIn ads are adding. Know exactly which campaigns to fund next month and which to cut.
              </p>
              <ul className="space-y-4">
                {[
                  "Influenced pipeline, closed-won, and closed-lost in one view",
                  "Measure campaign influence score - scale or cut at a glance",
                  "Three attribution presets or fully custom thresholds"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <div className="magic-border h-full w-full" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
                <div className="aspect-[4/3] bg-slate-900 rounded-[inherit] border border-slate-800 shadow-2xl flex items-center justify-center p-8 text-center relative overflow-hidden">
                  <div className="space-y-4 relative z-10">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto text-white">
                      <BarChart3 className="w-8 h-8" />
                    </div>
                    <p className="text-xs text-slate-400 max-w-xs mx-auto">Overview tab - Primary KPI tiles (Influenced Closed-Won Revenue, Active Pipeline, Won ROAS, Pipeline Performance) with monthly trend chart below</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Prop 2 - Optimization Depth */}
        <section className="py-24 px-6 md:px-[112px] bg-blue-50/50 border-b border-gray-100">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 lg:order-1 order-2">
              <div className="magic-border h-full w-full" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
                <div className="aspect-[4/3] bg-slate-900 rounded-[inherit] border border-slate-800 shadow-2xl flex items-center justify-center p-8 text-center relative overflow-hidden">
                  <div className="space-y-4 relative z-10">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto text-white">
                      <Users className="w-8 h-8" />
                    </div>
                    <p className="text-xs text-slate-400 max-w-xs mx-auto">Accounts tab - per-account engagement depth, deal status column, spend per account, ROI. One account row expanded to show journey timeline.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-8 lg:order-2 order-1">
              <SectionBadge icon={Layers} text="Ad Campaign Performance" />
              <h3 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight">Find accounts and segments that <span className="text-blue-600">actually convert</span></h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                See which audiences produce pipeline, which accounts became deals, and which segments convert best. So next quarter's targeting comes from your data, not gut feeling.
              </p>
              <ul className="space-y-4">
                {[
                  "Spot which audiences drive pipeline and which just drive clicks",
                  "Break down performance by industry, headcount, and geography",
                  "Know exactly where to scale spend and where to pull back"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Value Prop 3 - Pipeline Discovery */}
        <section className="py-24 px-6 md:px-[112px] bg-white border-b border-gray-100">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-8">
              <SectionBadge icon={Search} text="Audience Intent Signals" />
              <h3 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight">Spot high-intent accounts that <span className="text-blue-600">haven't entered your pipeline (yet)</span></h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Some companies hit high impressions and clicks but have no deal in your CRM. That's pipeline hiding in your ad data. Surface these accounts automatically and prioritize for activation.
              </p>
              <ul className="space-y-4">
                {[
                  "Find accounts with high ad engagement and no CRM deal",
                  "Uses the same attribution logic you already configured",
                  "Export or activate - hand to sales, nurture, or outbound"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6">
              <div className="magic-border h-full w-full" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
                <div className="aspect-[4/3] bg-slate-900 rounded-[inherit] border border-slate-800 shadow-2xl flex items-center justify-center p-8 text-center relative overflow-hidden">
                  <div className="space-y-4 relative z-10">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto text-white">
                      <Target className="w-8 h-8" />
                    </div>
                    <p className="text-xs text-slate-400 max-w-xs mx-auto">Accounts tab filtered to show high-engagement accounts with no CRM deal - engagement depth column, last activity date, export button visible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Prop 4 - Replace the Spreadsheet */}
        <section className="py-24 px-6 md:px-[112px] bg-blue-50/50 border-b border-gray-100">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 lg:order-1 order-2">
              <div className="magic-border h-full w-full" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
                <div className="aspect-[4/3] bg-slate-900 rounded-[inherit] border border-slate-800 shadow-2xl flex items-center justify-center p-8 text-center relative overflow-hidden">
                  <div className="space-y-4 relative z-10">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto text-white">
                      <FileText className="w-8 h-8" />
                    </div>
                    <p className="text-xs text-slate-400 max-w-xs mx-auto">Overview dashboard - full KPI view with influenced pipeline, closed-won, monthly trend, pipeline by stage. Single-tab view replacing multi-source reports.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-8 lg:order-2 order-1">
              <SectionBadge icon={Database} text="SINGLE SOURCE OF TRUTH" />
              <h3 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight">Stop assembling attribution <span className="text-blue-600">reports by hand</span></h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Connect all ad activity signals into a single view once and for all. No more exporting CSVs, cross-referencing tabs, or building slides from stale data before every leadership meeting.
              </p>
              <ul className="space-y-4">
                {[
                  "Campaign, account, and audience attribution in one place",
                  "Always up-to-date - no manual exports or refresh cycles",
                  "Walk into any meeting with numbers you didn't have to assemble"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
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

        {/* Mid-Page CTA Break */}
        <section className="py-20 bg-[#0B0F19] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="max-w-[1216px] mx-auto px-6 text-center space-y-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                See this in your own pipeline.
              </span>
              <span className="block mt-2">
                Connect your CRM and get attribution data in minutes.
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

        {/* Section 6 - How It Works (Replaced with RevenueSteps) */}
        <RevenueSteps />

        {/* Testimonial Section 2 */}
        <TestimonialSection className="py-24 bg-gray-50 border-b border-gray-100" />

        {/* Section 10 - Bottom CTA */}
        <section
          ref={ctaRef as any}
          className="w-full bg-white px-6 md:px-[112px] py-24 lg:py-32 overflow-hidden"
        >
          <div className="max-w-[1216px] mx-auto">
            <div
              className={cn(
                "cta-card w-full rounded-[32px] px-8 md:px-16 py-20 md:py-24 flex flex-col items-center text-center relative overflow-hidden border border-blue-100 shadow-xl",
                "transition-all duration-1000 ease-out",
                ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl mx-auto mb-16 relative z-10">
                <div className="flex justify-center mb-8">
                  <SectionBadge icon={Zap} text="GET A 30-DAY FREE TRIAL" />
                </div>

                <h2 className="text-4xl md:text-[45px] font-bold text-gray-900 mb-8 tracking-tight leading-[1.1]">
                  Finally know whether your LinkedIn ads are <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">building pipeline</span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Start a free trial - connect your LinkedIn ad account and CRM, set your attribution logic, and see your first influenced pipeline data in under 5 minutes.
                </p>
              </div>

              <div className="flex flex-col items-center gap-6 relative z-10">
                <Button
                  variant="hero"
                  size="hero"
                  className="group shadow-xl shadow-blue-500/20"
                  onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
                >
                  Start Your 30-Day Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9 - FAQ */}
        <section id="faqs" className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <SectionBadge icon={HelpCircle} text="FAQ" />
              <h2 className="text-4xl font-bold text-gray-900 mt-6 mb-4">Frequently asked questions</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
              {[
                {
                  q: "What does Revenue Attribution actually measure?",
                  a: "Influenced revenue - the deals in your CRM where the account had meaningful LinkedIn ad activity before the deal was created. You choose what counts as \"influenced\": impressions, clicks, engagements, or website visits. DemandSense checks whether that activity happened within a lookback window you configure (e.g., 6 months before deal creation). If the account qualifies, its deal revenue counts as LinkedIn-influenced."
                },
                {
                  q: "How is this different from what I can see in the native ad platform?",
                  a: "The native tools show campaign-level metrics - impressions, CTR, conversions. DemandSense connects those interactions to specific CRM deals at the account level. You see which campaigns influenced real pipeline - not just which campaigns got clicks. You can also break attribution down by audience, account, industry, headcount, and geography - none of which exist in native reporting."
                },
                {
                  q: "Which CRMs does it integrate with?",
                  a: "HubSpot and Salesforce. Both fully live. You authorize the connection inside DemandSense - no developer setup, no middleware. Deal data syncs automatically."
                },
                {
                  q: "How does the attribution logic work? Can I customize it?",
                  a: "Three presets cover common models: Awareness (impressions-based), Engagement (interactions-based), and Intent (click-based). Each preset sets minimum thresholds for what counts as influence. You can also build fully custom criteria - set your own minimums for impressions, clicks, engagements, and website visits, plus adjust the lookback window to match your actual sales cycle. Switch between models anytime."
                },
                {
                  q: "Will this break my running campaigns?",
                  a: "No. DemandSense reads your LinkedIn and CRM data. It does not modify campaigns unless you explicitly enable automation features - Spend Protection and Pipeline Sync. Both are off by default. When enabled, they manage audience lists (excluding closed accounts, syncing pipeline accounts). They don't pause, edit, or delete campaigns."
                },
                {
                  q: "What about the automated audience features - how do they work?",
                  a: "Spend Protection auto-excludes accounts from LinkedIn audiences when their deals close (won or lost) - so you stop spending on accounts that already converted or churned. Pipeline Sync pushes accounts with active deals into a retargeting audience - keeping your ads in front of accounts your sales team is working. Both run on a schedule you set (hourly, daily, or weekly) with manual triggers and a full audit log."
                },
                {
                  q: "What happens after the free trial?",
                  a: "Revenue Attribution is part of the Plus plan. After your trial, you choose whether to continue. No auto-charge, no surprise invoices. If the numbers make the case, you upgrade. If they don't, you've lost nothing."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-gray-100">
                  <AccordionTrigger className="text-left font-bold text-gray-900 py-6 hover:text-blue-600 transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-8 text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Section 11 - Footer */}
        <footer className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-[1216px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
              <div className="space-y-6 max-w-xs">
                <Logo />
                <p className="text-sm text-gray-500 leading-relaxed">
                  LinkedIn ads optimization + revenue attribution for B2B teams.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-x-12 gap-y-6">
                <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">Home</Link>
                <Link to="/pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900">Pricing</Link>
                <Link to="/blog" className="text-sm font-medium text-gray-600 hover:text-gray-900">Blog</Link>
                <Link to="/website-visitors" className="text-sm font-medium text-gray-600 hover:text-gray-900">Website Visitors</Link>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6 text-xs text-gray-400">
                <Link to="#" className="hover:text-gray-900">Privacy</Link>
                <Link to="#" className="hover:text-gray-900">Terms</Link>
                <Link to="#" className="hover:text-gray-900">Cookies</Link>
              </div>
              <p className="text-xs text-gray-400">
                © DemandSense 2026
              </p>
            </div>
          </div>
        </footer>

      </main>
      
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes moveParticle {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
      `}</style>
    </>
  );
};

export default LinkedInRevenueAttribution;
