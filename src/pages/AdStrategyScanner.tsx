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
  TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";
import { showError } from "@/utils/toast";

type ScannerState = "hero" | "loading_site" | "selection" | "loading_comp" | "comparison" | "gate" | "final";

const COMPETITORS = [
  { id: "hubspot", name: "HubSpot", ads: 142, category: "Marketing Automation", mostActive: true },
  { id: "marketo", name: "Marketo", ads: 87, category: "Enterprise Automation" },
  { id: "activecampaign", name: "ActiveCampaign", ads: 34, category: "Email Marketing" },
  { id: "pardot", name: "Pardot", ads: 51, category: "B2B Automation" },
  { id: "mailchimp", name: "Mailchimp", ads: 63, category: "Marketing Platform" },
  { id: "klaviyo", name: "Klaviyo", ads: 29, category: "Ecommerce Marketing" },
  { id: "brevo", name: "Brevo", ads: 18, category: "CRM & Email" },
  { id: "intercom", name: "Intercom", ads: 45, category: "Customer Service" },
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
    // Transition to comparison after a brief delay
    setTimeout(() => {
      setState("comparison");
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

        {/* SCREEN 2: LOADING STATE */}
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
                          Acme Corp — Marketing Automation — "Automate your pipeline for mid-market sales teams."
                        </p>
                      ) : (
                        <p className="text-sm text-slate-400 mt-1">Extracting messaging, value propositions, and target audience.</p>
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
                      <h3 className="font-bold text-slate-900">Identifying your competitive landscape...</h3>
                      {completedSteps.includes(2) ? (
                        <p className="text-sm text-emerald-600 font-medium mt-1 animate-in fade-in slide-in-from-left-2">
                          Found 7 competitors with active LinkedIn ads.
                        </p>
                      ) : (
                        <p className="text-sm text-slate-400 mt-1">Finding companies competing for the same LinkedIn audience.</p>
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
                      <h3 className="font-bold text-slate-900">Building competitor profiles...</h3>
                      {completedSteps.includes(3) ? (
                        <p className="text-sm text-emerald-600 font-medium mt-1 animate-in fade-in slide-in-from-left-2">
                          Ready. Select a competitor to compare against.
                        </p>
                      ) : (
                        <p className="text-sm text-slate-400 mt-1">Preparing creative intelligence for each competitor.</p>
                      )}
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
                    {comp.mostActive && (
                      <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg">
                        Most Active
                      </div>
                    )}
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

        {/* SCREEN 4: LOADING COMPETITOR (Placeholder) */}
        {state === "loading_comp" && (
          <section className="py-40 px-6 text-center">
            <div className="max-w-md mx-auto space-y-6">
              <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto" />
              <h2 className="text-2xl font-bold text-gray-900">Analyzing {selectedCompetitor?.name}'s strategy...</h2>
              <p className="text-slate-500">Comparing creative themes and messaging hooks.</p>
            </div>
          </section>
        )}

        {/* SCREEN 5: COMPARISON (Placeholder) */}
        {state === "comparison" && (
          <section className="py-20 px-6 text-center">
            <h2 className="text-3xl font-bold">Head-to-Head Comparison</h2>
            <p className="text-gray-600 mt-4">Comparison breakdown will be implemented in the next step.</p>
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