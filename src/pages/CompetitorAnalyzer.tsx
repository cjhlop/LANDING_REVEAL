"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/Navbar";
import SectionBadge from "@/components/SectionBadge";
import { 
  Search, 
  MousePointer2, 
  Zap, 
  ArrowRight, 
  Globe,
  ShieldCheck,
  BarChart3,
  Loader2,
  CheckCircle2,
  Building2,
  Linkedin,
  Sparkles,
  TrendingUp,
  Calendar,
  ChevronLeft,
  PlayCircle,
  Users,
  FileText,
  Layout,
  Lightbulb,
  Lock,
  Eye,
  Layers,
  Mail
} from "lucide-react";
import { cn } from "@/lib/utils";
import { showError, showSuccess } from "@/utils/toast";

type AnalyzerState = "hero" | "loading" | "selection" | "breakdown" | "gate" | "final";

const COMPETITORS = [
  { id: "hubspot", name: "HubSpot", ads: 142, since: "Jan 2022", category: "Marketing Automation", mostActive: true },
  { id: "marketo", name: "Marketo", ads: 87, since: "Mar 2023", category: "Enterprise Automation" },
  { id: "activecampaign", name: "ActiveCampaign", ads: 34, since: "Jun 2023", category: "Email Marketing" },
  { id: "pardot", name: "Pardot", ads: 51, since: "Jan 2024", category: "B2B Automation" },
  { id: "mailchimp", name: "Mailchimp", ads: 63, since: "Nov 2022", category: "Marketing Platform" },
  { id: "klaviyo", name: "Klaviyo", ads: 29, since: "Feb 2024", category: "Ecommerce Marketing" },
  { id: "brevo", name: "Brevo", ads: 18, since: "May 2023", category: "CRM & Email" },
  { id: "intercom", name: "Intercom", ads: 45, since: "Aug 2023", category: "Customer Service" },
];

const CompetitorAnalyzer = () => {
  const [state, setState] = useState<AnalyzerState>("hero");
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [selectedCompetitor, setSelectedCompetitor] = useState<typeof COMPETITORS[0] | null>(null);
  
  // Loading sequence states
  const [loadingStep, setLoadingStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      showError("Please enter a website URL to begin.");
      return;
    }
    setState("loading");
    startLoadingSequence();
  };

  const startLoadingSequence = () => {
    setTimeout(() => {
      setCompletedSteps(prev => [...prev, 1]);
      setLoadingStep(1);
      setTimeout(() => {
        setCompletedSteps(prev => [...prev, 2]);
        setLoadingStep(2);
        setTimeout(() => {
          setCompletedSteps(prev => [...prev, 3]);
          setLoadingStep(3);
          setTimeout(() => {
            setState("selection");
          }, 1200);
        }, 1500);
      }, 1500);
    }, 1500);
  };

  const handleSelectCompetitor = (comp: typeof COMPETITORS[0]) => {
    setSelectedCompetitor(comp);
    setState("breakdown");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@") || email.length < 5) {
      showError("Please enter a valid work email.");
      return;
    }
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setState("final");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Minimal Nav */}
      <nav className="h-20 border-b border-gray-100 px-6 md:px-12 flex items-center justify-between max-w-[1216px] mx-auto w-full sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <Logo />
        <Link to="/#signin" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
          Sign in
        </Link>
      </nav>

      <main>
        {/* Main Tool Container */}
        <section className="relative pt-12 pb-32 px-6 overflow-hidden">
          <div className="max-w-[1216px] mx-auto">
            
            {/* SCREEN 1: HERO */}
            {state === "hero" && (
              <div className="max-w-[800px] mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex justify-center mb-6">
                  <SectionBadge icon={Zap} text="Free Tool" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
                  See What Your Competitors Are <br />
                  <span className="text-blue-600">Really Doing on LinkedIn</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
                  Enter your website. We'll find your competitors, analyze their LinkedIn ad strategy, and show you what's worth testing.
                </p>
                <form onSubmit={handleAnalyze} className="max-w-xl mx-auto space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-2xl border border-gray-200 shadow-xl shadow-blue-500/5 focus-within:border-blue-400 transition-all">
                    <div className="flex-1 relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input 
                        type="text"
                        placeholder="Enter your website URL (e.g. acme.com)"
                        className="h-12 pl-12 border-none shadow-none focus-visible:ring-0 text-lg"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                      />
                    </div>
                    <Button size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl group">
                      Analyze
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-400 font-medium">Free. No signup required.</p>
                </form>
              </div>
            )}

            {/* SCREEN 2: LOADING */}
            {state === "loading" && (
              <div className="max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-500">
                <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-2xl shadow-blue-500/5 text-left space-y-10">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Analyzing Website</p>
                        <p className="text-lg font-bold text-slate-900">{url}</p>
                      </div>
                    </div>
                    <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
                  </div>
                  <div className="space-y-8">
                    <div className={cn("flex gap-4 transition-all duration-500", loadingStep < 0 ? "opacity-40" : "opacity-100")}>
                      <div className="flex flex-col items-center">
                        <div className={cn("w-8 h-8 rounded-full flex items-center justify-center transition-colors", completedSteps.includes(1) ? "bg-emerald-500 text-white" : "bg-blue-100 text-blue-600")}>
                          {completedSteps.includes(1) ? <CheckCircle2 className="w-5 h-5" /> : <Building2 className="w-4 h-4" />}
                        </div>
                        <div className="w-px h-full bg-slate-100 my-2" />
                      </div>
                      <div className="pb-4">
                        <h3 className="font-bold text-slate-900">Analyzing your website...</h3>
                        {completedSteps.includes(1) ? <p className="text-sm text-emerald-600 font-medium mt-1 animate-in fade-in slide-in-from-left-2">Acme Corp — B2B SaaS — Marketing automation platform for mid-market teams.</p> : <p className="text-sm text-slate-400 mt-1">Extracting company info, industry, and positioning.</p>}
                      </div>
                    </div>
                    <div className={cn("flex gap-4 transition-all duration-500", loadingStep < 1 ? "opacity-40" : "opacity-100")}>
                      <div className="flex flex-col items-center">
                        <div className={cn("w-8 h-8 rounded-full flex items-center justify-center transition-colors", completedSteps.includes(2) ? "bg-emerald-500 text-white" : loadingStep === 1 ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-400")}>
                          {completedSteps.includes(2) ? <CheckCircle2 className="w-5 h-5" /> : <Linkedin className="w-4 h-4" />}
                        </div>
                        <div className="w-px h-full bg-slate-100 my-2" />
                      </div>
                      <div className="pb-4">
                        <h3 className="font-bold text-slate-900">Scanning LinkedIn ad landscape...</h3>
                        {completedSteps.includes(2) ? <p className="text-sm text-emerald-600 font-medium mt-1 animate-in fade-in slide-in-from-left-2">Found 7 competitors with active LinkedIn ads.</p> : <p className="text-sm text-slate-400 mt-1">Finding competitors in your space with active ads.</p>}
                      </div>
                    </div>
                    <div className={cn("flex gap-4 transition-all duration-500", loadingStep < 2 ? "opacity-40" : "opacity-100")}>
                      <div className="flex flex-col items-center">
                        <div className={cn("w-8 h-8 rounded-full flex items-center justify-center transition-colors", completedSteps.includes(3) ? "bg-emerald-500 text-white" : loadingStep === 2 ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-400")}>
                          {completedSteps.includes(3) ? <CheckCircle2 className="w-5 h-5" /> : <Sparkles className="w-4 h-4" />}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">Preparing competitor profiles...</h3>
                        {completedSteps.includes(3) ? <p className="text-sm text-emerald-600 font-medium mt-1 animate-in fade-in slide-in-from-left-2">Ready. Select a competitor to see their full breakdown.</p> : <p className="text-sm text-slate-400 mt-1">Building creative intelligence for each competitor.</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 3: SELECTION */}
            {state === "selection" && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="space-y-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
                    <Building2 className="w-4 h-4" />
                    Competitors found for Acme Corp in Marketing Automation
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Select a competitor to see their full <br />
                    <span className="text-blue-600">LinkedIn ad strategy breakdown</span>
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {COMPETITORS.map((comp) => (
                    <button
                      key={comp.id}
                      onClick={() => handleSelectCompetitor(comp)}
                      className={cn(
                        "group relative p-6 rounded-2xl border text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
                        comp.mostActive ? "bg-blue-50/30 border-blue-200 ring-1 ring-blue-100" : "bg-white border-slate-100 hover:border-blue-200"
                      )}
                    >
                      {comp.mostActive && <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg">Most Active</div>}
                      <div className="flex flex-col h-full">
                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <Building2 className="w-6 h-6 text-slate-400" />
                        </div>
                        <div className="space-y-1 mb-6">
                          <h3 className="text-xl font-bold text-gray-900">{comp.name}</h3>
                          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{comp.category}</p>
                        </div>
                        <div className="mt-auto space-y-3">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <TrendingUp className="w-4 h-4 text-blue-500" />
                            <span className="font-bold text-gray-900">{comp.ads}</span> active ads
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Calendar className="w-4 h-4 text-slate-300" />
                            Running since {comp.since}
                          </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-blue-600 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                          View Breakdown
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SCREEN 4: BREAKDOWN */}
            {state === "breakdown" && selectedCompetitor && (
              <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-10">
                  <div className="space-y-4">
                    <button 
                      onClick={() => setState("selection")}
                      className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back to competitor list
                    </button>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-xl">
                        <Building2 className="w-8 h-8" />
                      </div>
                      <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{selectedCompetitor.name}</h1>
                        <p className="text-lg text-slate-500">LinkedIn Ad Strategy Breakdown</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" className="border-slate-200">Download PDF</Button>
                    <Button className="bg-blue-600 hover:bg-blue-700">Share Report</Button>
                  </div>
                </div>

                {/* Section 1: Overview Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: "Active ads", value: selectedCompetitor.ads, icon: Linkedin, color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "Est. monthly cadence", value: "12 new ads", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
                    { label: "Running ads since", value: selectedCompetitor.since, icon: Calendar, color: "text-orange-600", bg: "bg-orange-50" },
                    { label: "Formats used", value: "4 types", icon: Layers, color: "text-purple-600", bg: "bg-purple-50" },
                  ].map((stat, i) => (
                    <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm">
                      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-4", stat.bg, stat.color)}>
                        <stat.icon className="w-5 h-5" />
                      </div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Section 2: Creative Themes */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Sparkles className="w-5 h-5" /></div>
                    <h2 className="text-2xl font-bold text-gray-900">Creative Themes</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { title: "Product demos", pct: "38%", desc: "Video walkthroughs showing specific features in action." },
                      { title: "Customer proof", pct: "27%", desc: "Case studies and testimonial-driven ads with specific metrics." },
                      { title: "Thought leadership", pct: "22%", desc: "Educational content positioning the brand as industry expert." },
                      { title: "Direct offer", pct: "13%", desc: "Free trial, demo request, and discount-driven ads." },
                    ].map((theme, i) => (
                      <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-gray-900">{theme.title}</h3>
                          <span className="text-sm font-black text-blue-600">{theme.pct}</span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">{theme.desc}</p>
                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600" style={{ width: theme.pct }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 3: Ad Format Breakdown */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Layers className="w-5 h-5" /></div>
                      <h2 className="text-2xl font-bold text-gray-900">Ad Format Breakdown</h2>
                    </div>
                    <div className="space-y-6 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                      {[
                        { label: "Single image", pct: 45, color: "bg-blue-600" },
                        { label: "Video", pct: 30, color: "bg-blue-400" },
                        { label: "Carousel", pct: 15, color: "bg-slate-400" },
                        { label: "Document/PDF", pct: 10, color: "bg-slate-200" },
                      ].map((format, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between text-sm font-bold">
                            <span className="text-gray-700">{format.label}</span>
                            <span className="text-gray-900">{format.pct}%</span>
                          </div>
                          <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className={cn("h-full transition-all duration-1000", format.color)} style={{ width: `${format.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 4: Top Hooks & CTAs */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><MousePointer2 className="w-5 h-5" /></div>
                      <h2 className="text-2xl font-bold text-gray-900">Top Hooks & CTAs</h2>
                    </div>
                    <div className="space-y-4">
                      {[
                        { hook: "Most marketing teams waste 40% of their LinkedIn budget. Here's why.", cta: "Get the free audit" },
                        { hook: "We analyzed 10,000 B2B campaigns. The #1 factor isn't what you think.", cta: "Download the report" },
                        { hook: "Stop guessing which accounts are in-market. See them in real-time.", cta: "Start free trial" },
                        { hook: "How [Customer Name] scaled pipeline by 3x using our automation.", cta: "Read case study" },
                      ].map((item, i) => (
                        <div key={i} className="p-5 rounded-xl border border-slate-100 bg-white shadow-sm flex items-start gap-4 group hover:border-blue-200 transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div className="flex-1 space-y-2">
                            <p className="text-sm font-medium text-gray-900 leading-relaxed italic">"{item.hook}"</p>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">CTA:</span>
                              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{item.cta}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 5: Landing Page Analysis */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Layout className="w-5 h-5" /></div>
                    <h2 className="text-2xl font-bold text-gray-900">Landing Page Analysis</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { type: "Primary LP: Free trial", note: "14-day trial with no credit card, used on 60% of ads.", icon: Zap },
                      { type: "Secondary LP: Gated report", note: "Industry benchmark reports in exchange for email.", icon: FileText },
                    ].map((lp, i) => (
                      <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
                          <lp.icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{lp.type}</h3>
                          <p className="text-sm text-slate-500 mt-1">{lp.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 6: Ideas Worth Testing */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Lightbulb className="w-5 h-5" /></div>
                    <h2 className="text-2xl font-bold text-gray-900">Ideas Worth Testing</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { title: "Test video-first creative", body: "HubSpot gets 30% of their volume from video but your industry average is only 12%. Video is underused in your space and they seem to be doubling down." },
                      { title: "Try customer proof angles", body: "27% of their ads lead with specific customer results. If you have case studies, this format is working for your top competitor." },
                      { title: "Experiment with document ads", body: "They're running PDF/carousel ads that act as mini lead magnets inside the LinkedIn feed. Low effort to test, uncommon format." },
                    ].map((idea, i) => (
                      <div key={i} className="p-8 rounded-3xl border-2 border-blue-100 bg-blue-50/30 space-y-4 relative overflow-hidden group hover:border-blue-400 transition-all">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                          <Lightbulb className="w-16 h-16 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 relative z-10">{idea.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed relative z-10">{idea.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upsell Banner */}
                <div className="mt-20 p-10 md:p-16 rounded-[40px] bg-slate-900 text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                  <div className="relative z-10 space-y-10">
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-4xl font-bold text-white">Want to see breakdowns for more competitors?</h2>
                      <p className="text-blue-200/70 text-lg max-w-2xl mx-auto">We've prepared full strategy reports for 2 more of your top competitors. Unlock them for free.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                      {COMPETITORS.slice(1, 3).map((comp) => (
                        <div key={comp.id} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-between group">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/40">
                              <Building2 className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                              <p className="text-white font-bold">{comp.name}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="h-2 w-16 bg-white/10 rounded-full overflow-hidden">
                                  <div className="h-full bg-blue-500/50 w-2/3 blur-[2px]" />
                                </div>
                                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Locked</span>
                              </div>
                            </div>
                          </div>
                          <Lock className="w-4 h-4 text-white/20" />
                        </div>
                      ))}
                    </div>

                    <Button 
                      size="hero" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-12 shadow-2xl shadow-blue-500/20"
                      onClick={() => setState("gate")}
                    >
                      Unlock 2 more competitors — free
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 5: EMAIL CAPTURE */}
            {state === "gate" && (
              <div className="max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-500">
                <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-2xl shadow-blue-500/5 text-center space-y-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative z-10 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mx-auto">
                      <Mail className="w-8 h-8" />
                    </div>
                    <div className="space-y-3">
                      <h2 className="text-3xl font-bold text-gray-900">Unlock 2 More Competitor Breakdowns</h2>
                      <p className="text-lg text-slate-500 leading-relaxed">
                        Enter your work email. We'll send you the full analysis for two more competitors of your choice — same level of detail, completely free.
                      </p>
                    </div>

                    <form onSubmit={handleEmailSubmit} className="space-y-4 max-w-md mx-auto">
                      <div className="space-y-2 text-left">
                        <Input 
                          type="email"
                          placeholder="Your work email"
                          className="h-14 bg-slate-50 border-slate-200 text-lg focus:ring-blue-500"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <Button 
                        type="submit"
                        size="hero" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-xl shadow-blue-500/20"
                        disabled={isSending}
                      >
                        {isSending ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send my reports"
                        )}
                      </Button>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        No spam. We'll send your reports and occasional product updates. Unsubscribe anytime.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* How it works (Hero only) */}
        {state === "hero" && (
          <section className="py-24 bg-gray-50 border-y border-gray-100 px-6">
            <div className="max-w-[1216px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">1. Enter your website</h3>
                  <p className="text-gray-600 leading-relaxed">We identify your company and find who you compete with on LinkedIn using our proprietary B2B graph.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <MousePointer2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">2. Pick a competitor</h3>
                  <p className="text-gray-600 leading-relaxed">Select one from the list to get a full breakdown of their active campaigns and creative strategy.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">3. Get actionable insights</h3>
                  <p className="text-gray-600 leading-relaxed">See their creative themes, ad formats, cadence, and what's worth testing for your own campaigns.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Social Proof (Hero only) */}
        {state === "hero" && (
          <section className="py-16 bg-white px-6">
            <div className="max-w-[1216px] mx-auto text-center space-y-8">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Powered by DemandSense — trusted by LinkedIn advertisers worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
                <img src="/logos/logo-m.png" alt="Logo" className="h-6" />
                <img src="/logos/opteo.png" alt="Logo" className="h-6" />
                <img src="/logos/bluestar.webp" alt="Logo" className="h-6" />
                <img src="/logos/leadcycle.png" alt="Logo" className="h-6" />
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Minimal Footer */}
      <footer className="py-12 border-t border-gray-100 px-6">
        <div className="max-w-[1216px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} DemandSense. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="#" className="text-sm text-gray-400 hover:text-gray-600">Privacy Policy</Link>
            <Link to="#" className="text-sm text-gray-400 hover:text-gray-600">Terms of Service</Link>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CompetitorAnalyzer;