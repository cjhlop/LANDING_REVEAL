"use client";

import React, { useState } from "react";
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
  Layers,
  Radar
} from "lucide-react";
import { cn } from "@/lib/utils";
import { showError } from "@/utils/toast";

type AnalyzerState = "hero" | "loading" | "industry-brief" | "gate" | "competitor-breakdown" | "final-cta";

const CompetitorAnalyzer = () => {
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
    // Step 1: Identify Industry
    setTimeout(() => {
      setCompletedSteps(prev => [...prev, 1]);
      setLoadingStep(1);
      // Step 2: Scan Landscape
      setTimeout(() => {
        setCompletedSteps(prev => [...prev, 2]);
        setLoadingStep(2);
        // Step 3: Build Brief
        setTimeout(() => {
          setCompletedSteps(prev => [...prev, 3]);
          setLoadingStep(3);
          setTimeout(() => {
            // This will transition to the Industry Brief in the next task
            console.log("Transitioning to Industry Brief...");
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
        {/* Main Tool Container */}
        <section className="relative pt-12 pb-32 px-6 overflow-hidden">
          <div className="max-w-[1216px] mx-auto">
            
            {/* SCREEN 1: HERO */}
            {state === "hero" && (
              <div className="max-w-[850px] mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex justify-center mb-6">
                  <SectionBadge icon={Zap} text="Free Tool" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
                  What's Happening in Your <br />
                  <span className="text-blue-600">Industry on LinkedIn Right Now</span>
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
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Analyzing Industry</p>
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
                        <h3 className="font-bold text-slate-900">Identifying your industry...</h3>
                        {completedSteps.includes(1) ? <p className="text-sm text-emerald-600 font-medium mt-1 animate-in fade-in slide-in-from-left-2">B2B SaaS — Marketing Automation detected.</p> : <p className="text-sm text-slate-400 mt-1">Extracting company info and market category.</p>}
                      </div>
                    </div>
                    <div className={cn("flex gap-4 transition-all duration-500", loadingStep < 1 ? "opacity-40" : "opacity-100")}>
                      <div className="flex flex-col items-center">
                        <div className={cn("w-8 h-8 rounded-full flex items-center justify-center transition-colors", completedSteps.includes(2) ? "bg-emerald-500 text-white" : loadingStep === 1 ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-400")}>
                          {completedSteps.includes(2) ? <CheckCircle2 className="w-5 h-5" /> : <Radar className="w-4 h-4" />}
                        </div>
                        <div className="w-px h-full bg-slate-100 my-2" />
                      </div>
                      <div className="pb-4">
                        <h3 className="font-bold text-slate-900">Scanning competitive landscape...</h3>
                        {completedSteps.includes(2) ? <p className="text-sm text-emerald-600 font-medium mt-1 animate-in fade-in slide-in-from-left-2">Found 12 active competitors in your space.</p> : <p className="text-sm text-slate-400 mt-1">Finding who's advertising on LinkedIn in your space.</p>}
                      </div>
                    </div>
                    <div className={cn("flex gap-4 transition-all duration-500", loadingStep < 2 ? "opacity-40" : "opacity-100")}>
                      <div className="flex flex-col items-center">
                        <div className={cn("w-8 h-8 rounded-full flex items-center justify-center transition-colors", completedSteps.includes(3) ? "bg-emerald-500 text-white" : loadingStep === 2 ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-400")}>
                          {completedSteps.includes(3) ? <CheckCircle2 className="w-5 h-5" /> : <Sparkles className="w-4 h-4" />}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">Building industry intelligence brief...</h3>
                        {completedSteps.includes(3) ? <p className="text-sm text-emerald-600 font-medium mt-1 animate-in fade-in slide-in-from-left-2">Brief ready. Generating creative trend report.</p> : <p className="text-sm text-slate-400 mt-1">Aggregating creative trends and format benchmarks.</p>}
                      </div>
                    </div>
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
                  <p className="text-gray-600 leading-relaxed">We identify your industry and scan who's advertising on LinkedIn in your space using our proprietary B2B graph.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">2. Get your industry brief</h3>
                  <p className="text-gray-600 leading-relaxed">See creative trends, common formats, and what's working in your competitive landscape right now.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">3. Go deeper on any competitor</h3>
                  <p className="text-gray-600 leading-relaxed">Unlock detailed breakdowns of specific competitors' ad strategies, cadence, and top-performing hooks.</p>
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
    </div>
  );
};

export default CompetitorAnalyzer;