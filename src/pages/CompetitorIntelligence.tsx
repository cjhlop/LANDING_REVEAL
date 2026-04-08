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
  BarChart3,
  Building2,
  MousePointer2,
  Layers,
  Loader2,
  CheckCircle2,
  Linkedin,
  Sparkles,
  TrendingUp,
  Calendar,
  FileText,
  Layout,
  Lightbulb,
  Lock,
  Eye,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { showError } from "@/utils/toast";

type AnalyzerState = "hero" | "loading" | "brief" | "gate" | "breakdown" | "final";

const COMPETITORS_LIST = [
  { name: "HubSpot", ads: 142 },
  { name: "ActiveCampaign", ads: 87 },
  { name: "Marketo", ads: 64 },
  { name: "Pardot", ads: 51 },
  { name: "Mailchimp", ads: 43 },
  { name: "Klaviyo", ads: 29 },
];

const CompetitorIntelligence = () => {
  const [state, setState] = useState<AnalyzerState>("hero");
  const [url, setUrl] = useState("");
  
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
            setState("brief");
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 1200);
        }, 1500);
      }, 1500);
    }, 1500);
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
        {/* SCREEN 1: HERO */}
        {state === "hero" && (
          <section className="relative pt-20 pb-32 px-6 overflow-hidden">
            <div className="max-w-[1216px] mx-auto">
              <div className="max-w-[850px] mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex justify-center mb-6">
                  <SectionBadge icon={Zap} text="Free Tool" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
                  What's Happening in Your Industry <br />
                  <span className="text-blue-600">on LinkedIn Right Now</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
                  Enter your website. We'll analyze your competitive landscape and show you the creative trends, top strategies, and ideas worth testing in your space.
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

        {/* SCREEN 2: LOADING */}
        {state === "loading" && (
          <section className="py-32 px-6">
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
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                        completedSteps.includes(1) ? "bg-emerald-500 text-white" : "bg-blue-100 text-blue-600"
                      )}>
                        {completedSteps.includes(1) ? <CheckCircle2 className="w-5 h-5" /> : <Building2 className="w-4 h-4" />}
                      </div>
                      <div className="w-px h-full bg-slate-100 my-2" />
                    </div>
                    <div className="pb-4">
                      <h3 className="font-bold text-slate-900">Analyzing your website...</h3>
                      {completedSteps.includes(1) ? (
                        <p className="text-sm text-emerald-600 font-medium mt-1 animate-in fade-in slide-in-from-left-2">
                          Acme Corp — Marketing Automation — B2B SaaS.
                        </p>
                      ) : (
                        <p className="text-sm text-slate-400 mt-1">Identifying company, industry, and positioning.</p>
                      )}
                    </div>
                  </div>

                  <div className={cn("flex gap-4 transition-all duration-500", loadingStep < 1 ? "opacity-40" : "opacity-100")}>
                    <div className="flex flex-col items-center">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                        completedSteps.includes(2) ? "bg-emerald-500 text-white" : loadingStep === 1 ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-400"
                      )}>
                        {completedSteps.includes(2) ? <CheckCircle2 className="w-5 h-5" /> : <Linkedin className="w-4 h-4" />}
                      </div>
                      <div className="w-px h-full bg-slate-100 my-2" />
                    </div>
                    <div className="pb-4">
                      <h3 className="font-bold text-slate-900">Scanning your industry on LinkedIn...</h3>
                      {completedSteps.includes(2) ? (
                        <p className="text-sm text-emerald-600 font-medium mt-1 animate-in fade-in slide-in-from-left-2">
                          Found 43 companies actively running LinkedIn ads in your space.
                        </p>
                      ) : (
                        <p className="text-sm text-slate-400 mt-1">Finding active advertisers and analyzing creative patterns.</p>
                      )}
                    </div>
                  </div>

                  <div className={cn("flex gap-4 transition-all duration-500", loadingStep < 2 ? "opacity-40" : "opacity-100")}>
                    <div className="flex flex-col items-center">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                        completedSteps.includes(3) ? "bg-emerald-500 text-white" : loadingStep === 2 ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-400"
                      )}>
                        {completedSteps.includes(3) ? <CheckCircle2 className="w-5 h-5" /> : <Sparkles className="w-4 h-4" />}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Building your industry intelligence brief...</h3>
                      {completedSteps.includes(3) ? (
                        <p className="text-sm text-emerald-600 font-medium mt-1 animate-in fade-in slide-in-from-left-2">
                          Your brief is ready.
                        </p>
                      ) : (
                        <p className="text-sm text-slate-400 mt-1">Aggregating trends, formats, and strategies.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SCREEN 3: INDUSTRY BRIEF */}
        {state === "brief" && (
          <section className="py-12 md:py-20 px-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="max-w-[1000px] mx-auto space-y-20">
              
              {/* Header */}
              <div className="text-center space-y-4">
                <SectionBadge icon={BarChart3} text="Industry Intelligence Brief" />
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
                  Marketing Automation on LinkedIn
                </h1>
                <p className="text-lg text-slate-500">
                  Based on 43 active advertisers in your space. Generated for <span className="font-bold text-slate-900">Acme Corp</span>.
                </p>
              </div>

              {/* Section 1: Industry Snapshot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Active advertisers", value: "43", icon: Building2, color: "text-blue-600", bg: "bg-blue-50" },
                  { label: "Avg. ads per company", value: "18", icon: Layers, color: "text-emerald-600", bg: "bg-emerald-50" },
                  { label: "Most common format", value: "Single image", icon: Layout, color: "text-orange-600", bg: "bg-orange-50" },
                  { label: "Avg. new ads / month", value: "8", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" },
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

              {/* Section 2: Creative Trends */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Sparkles className="w-5 h-5" /></div>
                  <h2 className="text-2xl font-bold text-gray-900">Creative Trends in Your Space</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Product demos", pct: "64%", desc: "Short video walkthroughs showing specific features are the dominant format in your space." },
                    { title: "Customer proof", pct: "51%", desc: "Case study and metric-driven ads. Companies leading with specific revenue or ROI numbers." },
                    { title: "Thought leadership", pct: "43%", desc: "Educational content and original research. Growing fast in the last 3 months." },
                    { title: "Direct offer", pct: "31%", desc: "Free trial, audit, and demo request ads. Declining as a share compared to 6 months ago." },
                  ].map((trend, i) => (
                    <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 space-y-4 group hover:bg-white hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-gray-900">{trend.title}</h3>
                        <span className="text-lg font-black text-blue-600">{trend.pct}</span>
                      </div>
                      <p className="text-slate-500 leading-relaxed">{trend.desc}</p>
                      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 transition-all duration-1000" style={{ width: trend.pct }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Format Distribution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Layers className="w-5 h-5" /></div>
                    <h2 className="text-2xl font-bold text-gray-900">Format Distribution</h2>
                  </div>
                  <div className="space-y-6 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    {[
                      { label: "Single image", pct: 41, color: "bg-blue-600" },
                      { label: "Video", pct: 28, color: "bg-blue-400" },
                      { label: "Carousel", pct: 18, color: "bg-slate-400" },
                      { label: "Document/PDF", pct: 8, color: "bg-slate-200" },
                      { label: "Text-only", pct: 5, color: "bg-slate-100" },
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

                {/* Section 4: What's Changing */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><TrendingUp className="w-5 h-5" /></div>
                    <h2 className="text-2xl font-bold text-gray-900">What's Changing</h2>
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: "Video is growing fast", body: "Up from 19% to 28% of all ads in the last 3 months. Companies like HubSpot and ActiveCampaign are leading this shift." },
                      { title: "Document ads are emerging", body: "Still small at 8%, but doubled since last quarter. Used mainly to deliver mini lead magnets directly in the feed." },
                      { title: "Direct offer ads are declining", body: "Down from 40% to 31%. The space is shifting toward education-first approaches." },
                    ].map((obs, i) => (
                      <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{obs.title}</h4>
                          <p className="text-sm text-slate-500 leading-relaxed mt-1">{obs.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 5: Ideas Worth Testing */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Lightbulb className="w-5 h-5" /></div>
                  <h2 className="text-2xl font-bold text-gray-900">Ideas Worth Testing for Acme Corp</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: "Try video-first creative", body: "28% of your space uses video but it's growing fast. Early movers in your segment still have a window to stand out." },
                    { title: "Lead with original data", body: "Based on your product, you likely have usage data that could fuel thought leadership ads. 43% of your competitors already do this." },
                    { title: "Test document ads as in-feed lead magnets", body: "Low competition, rising format. Turn a one-page checklist or benchmark into a native PDF ad." },
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

              {/* Section 6: Top Competitors (Locked) */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Building2 className="w-5 h-5" /></div>
                  <h2 className="text-2xl font-bold text-gray-900">Your Top Competitors</h2>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {COMPETITORS_LIST.map((comp, i) => (
                    <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm flex items-center justify-between group">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                          <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{comp.name}</h3>
                          <p className="text-sm text-slate-500">{comp.ads} active ads on LinkedIn</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="hidden md:flex items-center gap-4 opacity-20 blur-[2px] select-none">
                          <div className="h-2 w-24 bg-slate-200 rounded-full" />
                          <div className="h-2 w-16 bg-slate-200 rounded-full" />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300">
                          <Lock className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-8 flex justify-center">
                  <Button 
                    size="hero" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-12 shadow-2xl shadow-blue-500/20 group"
                    onClick={() => setState("gate")}
                  >
                    Unlock a full competitor deep-dive — free
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* SCREEN 4: GATE (Placeholder) */}
        {state === "gate" && (
          <section className="py-40 px-6 text-center">
            <h2 className="text-3xl font-bold">Unlock Competitor Deep-Dive</h2>
            <p className="text-gray-600 mt-4">Email capture will be implemented in the next step.</p>
          </section>
        )}

        {/* HOW IT WORKS (Hero only) */}
        {state === "hero" && (
          <section className="py-24 bg-gray-50 border-y border-gray-100 px-6">
            <div className="max-w-[1216px] mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900">How it works</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">1. Enter your website</h3>
                  <p className="text-gray-600 leading-relaxed">We identify your industry and scan who's advertising on LinkedIn in your space.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">2. Get your industry brief</h3>
                  <p className="text-gray-600 leading-relaxed">See creative trends, common formats, and what's working in your competitive landscape right now.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">3. Go deeper on any competitor</h3>
                  <p className="text-gray-600 leading-relaxed">Unlock detailed breakdowns of specific competitors' ad strategies.</p>
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

export default CompetitorIntelligence;