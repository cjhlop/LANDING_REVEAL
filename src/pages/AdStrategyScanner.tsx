"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/Navbar";
import SectionBadge from "@/components/SectionBadge";
import { 
  Search, 
  Zap, 
  ArrowRight, 
  Globe,
  Building2,
  MousePointer2,
  BarChart3,
  CheckCircle2,
  Loader2,
  Linkedin,
  Sparkles,
  TrendingUp,
  ChevronLeft,
  Layers,
  Layout,
  FileText,
  Lightbulb,
  Lock,
  XCircle,
  Trophy
} from "lucide-react";
import { cn } from "@/lib/utils";
import { showError } from "@/utils/toast";

type ScannerState = "hero" | "loading_site" | "selection" | "loading_comp" | "comparison" | "gate" | "final";

const COMPETITORS = [
  { id: "hubspot", name: "HubSpot", ads: 142, category: "Marketing Automation", mostActive: true, since: "Mar 2023" },
  { id: "marketo", name: "Marketo", ads: 87, category: "Enterprise Automation", since: "Jan 2022" },
  { id: "activecampaign", name: "ActiveCampaign", ads: 34, category: "Email Marketing", since: "Jun 2023" },
  { id: "pardot", name: "Pardot", ads: 51, category: "B2B Automation", since: "Nov 2022" },
  { id: "mailchimp", name: "Mailchimp", ads: 63, category: "Marketing Platform", since: "Feb 2023" },
  { id: "klaviyo", name: "Klaviyo", ads: 29, category: "Ecommerce Marketing", since: "Aug 2023" },
  { id: "brevo", name: "Brevo", ads: 18, category: "CRM & Email", since: "May 2024" },
  { id: "intercom", name: "Intercom", ads: 45, category: "Customer Service", since: "Oct 2022" },
];

const AdStrategyScanner = () => {
  const [state, setState] = useState<ScannerState>("hero");
  const [url, setUrl] = useState("");
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
    setState("loading_site");
    startLoadingSequence();
  };

  const startLoadingSequence = () => {
    setCompletedSteps([]);
    setLoadingStep(0);
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
    setState("loading_comp");
    setCompletedSteps([]);
    setLoadingStep(0);

    setTimeout(() => {
      setCompletedSteps(prev => [...prev, 1]);
      setLoadingStep(1);
      setTimeout(() => {
        setCompletedSteps(prev => [...prev, 2]);
        setLoadingStep(2);
        setTimeout(() => {
          setState("comparison");
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1000);
      }, 1500);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <nav className="h-20 border-b border-gray-100 px-6 md:px-12 flex items-center justify-between max-w-[1216px] mx-auto w-full sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <Logo />
        <Link to="/#signin" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
          Sign in
        </Link>
      </nav>

      <main>
        {/* SCREEN 1: HERO */}
        {state === "hero" && (
          <section className="relative pt-20 pb-32 px-6 overflow-hidden">
            <div className="max-w-[1216px] mx-auto">
              <div className="max-w-[850px] mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex justify-center mb-6">
                  <SectionBadge icon={Zap} text="Free Tool" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
                  How Does Your LinkedIn Strategy <br />
                  <span className="text-blue-600">Stack Up Against Competitors?</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
                  Enter your website. We'll analyze your positioning, find your competitors on LinkedIn, and show you exactly how their ad strategy compares to yours.
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
            </div>
          </section>
        )}

        {/* SCREEN 2: LOADING STATE (SITE) */}
        {state === "loading_site" && (
          <section className="py-24 px-6">
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
                      {completedSteps.includes(1) ? <p className="text-sm text-emerald-600 font-medium mt-1 animate-in fade-in slide-in-from-left-2">Acme Corp — Marketing Automation — "Automate your pipeline for mid-market sales teams."</p> : <p className="text-sm text-slate-400 mt-1">Extracting messaging, value propositions, and target audience.</p>}
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
                      <h3 className="font-bold text-slate-900">Identifying your competitive landscape...</h3>
                      {completedSteps.includes(2) ? <p className="text-sm text-emerald-600 font-medium mt-1 animate-in fade-in slide-in-from-left-2">Found 7 competitors with active LinkedIn ads.</p> : <p className="text-sm text-slate-400 mt-1">Finding companies competing for the same LinkedIn audience.</p>}
                    </div>
                  </div>
                  <div className={cn("flex gap-4 transition-all duration-500", loadingStep < 2 ? "opacity-40" : "opacity-100")}>
                    <div className="flex flex-col items-center">
                      <div className={cn("w-8 h-8 rounded-full flex items-center justify-center transition-colors", completedSteps.includes(3) ? "bg-emerald-500 text-white" : loadingStep === 2 ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-400")}>
                        {completedSteps.includes(3) ? <CheckCircle2 className="w-5 h-5" /> : <Sparkles className="w-4 h-4" />}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Building competitor profiles...</h3>
                      {completedSteps.includes(3) ? <p className="text-sm text-emerald-600 font-medium mt-1 animate-in fade-in slide-in-from-left-2">Ready. Select a competitor to compare against.</p> : <p className="text-sm text-slate-400 mt-1">Preparing creative intelligence for each competitor.</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SCREEN 3: SELECTION */}
        {state === "selection" && (
          <section className="py-12 md:py-20 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="max-w-[1216px] mx-auto space-y-12">
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
                  <Building2 className="w-4 h-4" />
                  Your positioning: "Automate your pipeline for mid-market sales teams"
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Select a competitor to see how their <br />
                  <span className="text-blue-600">LinkedIn ad strategy compares to yours</span>
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
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-blue-600 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        Compare Strategy
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SCREEN 4: LOADING COMPETITOR */}
        {state === "loading_comp" && selectedCompetitor && (
          <section className="py-24 px-6">
            <div className="max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-500">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-2xl shadow-blue-500/5 text-left space-y-10">
                <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center -space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white border-2 border-white shadow-sm z-10">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white border-2 border-white shadow-sm">
                        <Building2 className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Comparing</p>
                      <p className="text-lg font-bold text-slate-900">Acme Corp vs. {selectedCompetitor.name}</p>
                    </div>
                  </div>
                  <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
                </div>
                <div className="space-y-8">
                  <div className={cn("flex gap-4 transition-all duration-500", loadingStep < 0 ? "opacity-40" : "opacity-100")}>
                    <div className="flex flex-col items-center">
                      <div className={cn("w-8 h-8 rounded-full flex items-center justify-center transition-colors", completedSteps.includes(1) ? "bg-emerald-500 text-white" : "bg-blue-100 text-blue-600")}>
                        {completedSteps.includes(1) ? <CheckCircle2 className="w-5 h-5" /> : <Linkedin className="w-4 h-4" />}
                      </div>
                      <div className="w-px h-full bg-slate-100 my-2" />
                    </div>
                    <div className="pb-4">
                      <h3 className="font-bold text-slate-900">Analyzing {selectedCompetitor.name}'s LinkedIn ads...</h3>
                      {completedSteps.includes(1) ? <p className="text-sm text-emerald-600 font-medium mt-1 animate-in fade-in slide-in-from-left-2">{selectedCompetitor.ads} active ads analyzed.</p> : <p className="text-sm text-slate-400 mt-1">Pulling creative data, formats, cadence, and landing pages.</p>}
                    </div>
                  </div>
                  <div className={cn("flex gap-4 transition-all duration-500", loadingStep < 1 ? "opacity-40" : "opacity-100")}>
                    <div className="flex flex-col items-center">
                      <div className={cn("w-8 h-8 rounded-full flex items-center justify-center transition-colors", completedSteps.includes(2) ? "bg-emerald-500 text-white" : loadingStep === 1 ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-400")}>
                        {completedSteps.includes(2) ? <CheckCircle2 className="w-5 h-5" /> : <BarChart3 className="w-4 h-4" />}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Building head-to-head comparison...</h3>
                      {completedSteps.includes(2) ? <p className="text-sm text-emerald-600 font-medium mt-1 animate-in fade-in slide-in-from-left-2">Your comparison is ready.</p> : <p className="text-sm text-slate-400 mt-1">Comparing their ad strategy against your positioning.</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SCREEN 5: COMPARISON REPORT */}
        {state === "comparison" && selectedCompetitor && (
          <section className="py-12 md:py-20 px-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="max-w-[1216px] mx-auto space-y-20">
              
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
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Acme Corp vs. {selectedCompetitor.name} <br />
                    <span className="text-blue-600">LinkedIn Ad Strategy Comparison</span>
                  </h1>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" className="border-slate-200">Download PDF</Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">Share Report</Button>
                </div>
              </div>

              {/* Section 1: Your Positioning Summary */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Globe className="w-5 h-5" /></div>
                  <h2 className="text-2xl font-bold text-gray-900">Your Positioning Summary</h2>
                </div>
                <div className="bg-slate-900 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-8 space-y-6">
                      <div className="space-y-2">
                        <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Company Name</p>
                        <p className="text-3xl font-bold">Acme Corp</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Value Proposition</p>
                        <p className="text-xl text-blue-100">"Automate your pipeline for mid-market sales teams."</p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {["Automation", "Time savings", "Mid-market focus", "Sales efficiency"].map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-blue-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-4 bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                      <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">Target Audience Detected</p>
                      <ul className="space-y-3">
                        {["Sales Operations", "VP of Sales", "RevOps Leaders", "Mid-market B2B"].map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-blue-100">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Their LinkedIn Ad Overview */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Linkedin className="w-5 h-5" /></div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedCompetitor.name}'s Ad Overview</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: "Active ads", value: selectedCompetitor.ads, icon: Linkedin, color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "Monthly cadence", value: "12 new ads", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
                    { label: "Running since", value: selectedCompetitor.since, icon: Calendar, color: "text-orange-600", bg: "bg-orange-50" },
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
              </div>

              {/* Section 3: Creative Themes — Side by Side */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Sparkles className="w-5 h-5" /></div>
                  <h2 className="text-2xl font-bold text-gray-900">Creative Themes — Side by Side</h2>
                </div>
                <div className="space-y-6">
                  {[
                    { 
                      theme: "Product demos", 
                      pct: "38%", 
                      desc: "Video walkthroughs showing specific features in action.",
                      note: "You mention automation heavily on your site. Their demo ads focus on the same angle — this is a directly contested space."
                    },
                    { 
                      theme: "Customer proof", 
                      pct: "27%", 
                      desc: "Case studies and testimonial-driven ads with specific metrics.",
                      note: "Your website doesn't feature case studies prominently. They're investing heavily here — potential gap for you."
                    },
                    { 
                      theme: "Thought leadership", 
                      pct: "22%", 
                      desc: "Educational content positioning the brand as industry expert.",
                      note: "Your blog has educational content but they're turning theirs into ads. You have the content, you're just not promoting it."
                    }
                  ].map((item, i) => (
                    <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl border border-slate-100 overflow-hidden shadow-sm group hover:border-blue-200 transition-all">
                      <div className="lg:col-span-5 p-8 bg-slate-50/50 border-r border-slate-100">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900">{item.theme}</h3>
                          <span className="text-lg font-black text-blue-600">{item.pct}</span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="lg:col-span-7 p-8 bg-white flex items-center">
                        <div className="flex gap-4 items-start">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                            <Search className="w-4 h-4" />
                          </div>
                          <p className="text-sm text-gray-700 font-medium leading-relaxed italic">
                            <span className="text-blue-600 font-bold uppercase text-[10px] block mb-1 tracking-widest">Comparison Note</span>
                            "{item.note}"
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Ad Format Breakdown */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Layers className="w-5 h-5" /></div>
                  <h2 className="text-2xl font-bold text-gray-900">Ad Format Breakdown</h2>
                </div>
                <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { label: "Single image", pct: 45, color: "bg-blue-600" },
                      { label: "Video", pct: 30, color: "bg-blue-400" },
                      { label: "Carousel", pct: 15, color: "bg-slate-400" },
                      { label: "Document/PDF", pct: 10, color: "bg-slate-200" },
                    ].map((format, i) => (
                      <div key={i} className="space-y-3">
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
                  <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <p className="text-sm text-blue-900 font-medium">
                      Based on your product type, video demos of automation workflows could be your strongest format — and it's exactly where {selectedCompetitor.name} gets 30% of their volume.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5: Top Hooks & CTAs */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><MousePointer2 className="w-5 h-5" /></div>
                  <h2 className="text-2xl font-bold text-gray-900">Top Hooks & CTAs</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { hook: "Most marketing teams waste 40% of their LinkedIn budget. Here's why.", cta: "Get the free audit" },
                    { hook: "We analyzed 10,000 B2B campaigns. The #1 factor isn't what you think.", cta: "Download the report" },
                    { hook: "Stop guessing which accounts are in-market. See them in real-time.", cta: "Start free trial" },
                    { hook: "How [Customer Name] scaled pipeline by 3x using our automation.", cta: "Read case study" },
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm flex items-start gap-4 group hover:border-blue-200 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <p className="text-base font-medium text-gray-900 leading-relaxed italic">"{item.hook}"</p>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">CTA:</span>
                          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{item.cta}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 6: Landing Page Analysis */}
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

              {/* Section 7: Head-to-Head Scorecard */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><BarChart3 className="w-5 h-5" /></div>
                  <h2 className="text-2xl font-bold text-gray-900">Head-to-Head Scorecard</h2>
                </div>
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                  <div className="grid grid-cols-12 bg-slate-900 text-white p-6 text-xs font-bold uppercase tracking-widest">
                    <div className="col-span-4">Dimension</div>
                    <div className="col-span-3">Them ({selectedCompetitor.name})</div>
                    <div className="col-span-3">You (Acme Corp)</div>
                    <div className="col-span-2 text-right">Status</div>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {[
                      { dim: "Video usage", them: "30% of ads", you: "No video detected", status: "Gap for you", type: "gap" },
                      { dim: "Social proof", them: "27% customer proof ads", you: "No case studies visible", status: "Gap for you", type: "gap" },
                      { dim: "Direct offer", them: "13% direct offer", you: "Free trial prominent", status: "You're ahead", type: "win" },
                      { dim: "Content volume", them: `${selectedCompetitor.ads} active ads`, you: "Unknown", status: "They outpace", type: "gap" },
                    ].map((row, i) => (
                      <div key={i} className="grid grid-cols-12 p-6 items-center hover:bg-slate-50 transition-colors">
                        <div className="col-span-4 font-bold text-gray-900">{row.dim}</div>
                        <div className="col-span-3 text-sm text-gray-600">{row.them}</div>
                        <div className="col-span-3 text-sm text-gray-600">{row.you}</div>
                        <div className="col-span-2 text-right">
                          <span className={cn(
                            "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider",
                            row.type === "win" ? "bg-emerald-100 text-emerald-700" : "bg-orange-100 text-orange-700"
                          )}>
                            {row.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 8: Ideas Worth Testing */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Lightbulb className="w-5 h-5" /></div>
                  <h2 className="text-2xl font-bold text-gray-900">Ideas Worth Testing for Acme Corp</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { 
                      title: "Close the video gap", 
                      body: `${selectedCompetitor.name} gets 30% of volume from video. Your product is visual (automation workflows). Record a 30-second screen demo and test it as a LinkedIn video ad.` 
                    },
                    { 
                      title: "Weaponize your free trial", 
                      body: `Your homepage already leads with free trial but ${selectedCompetitor.name} barely uses direct offers (13%). You have a stronger offer — make it your ad CTA.` 
                    },
                    { 
                      title: "Build social proof ads", 
                      body: `They spend 27% of their budget on customer proof. If you have even 2-3 customer results, test a metric-driven testimonial ad.` 
                    },
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

              {/* Locked Comparisons Banner */}
              <div className="mt-20 p-10 md:p-16 rounded-[40px] bg-slate-900 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="relative z-10 space-y-10">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Want to compare against more competitors?</h2>
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
                    Unlock 2 more comparisons — free
                  </Button>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* SCREEN 6: GATE (Placeholder) */}
        {state === "gate" && (
          <section className="py-40 px-6 text-center">
            <h2 className="text-3xl font-bold">Unlock More Comparisons</h2>
            <p className="text-gray-600 mt-4">Email capture will be implemented in the next step.</p>
          </section>
        )}

        {/* HOW IT WORKS (Hero only) */}
        {state === "hero" && (
          <section className="py-24 bg-gray-50 border-y border-gray-100 px-6">
            <div className="max-w-[1216px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">1. Enter your website</h3>
                  <p className="text-gray-600 leading-relaxed">We analyze your company, messaging, and positioning using our proprietary B2B graph.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <MousePointer2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">2. Pick a competitor</h3>
                  <p className="text-gray-600 leading-relaxed">We show who's advertising on LinkedIn in your space. Select one to see their full strategy.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">3. See how you compare</h3>
                  <p className="text-gray-600 leading-relaxed">Get a head-to-head breakdown of their strategy vs. your positioning, plus ideas worth testing.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SOCIAL PROOF (Hero only) */}
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
    </div>
  );
};

export default AdStrategyScanner;