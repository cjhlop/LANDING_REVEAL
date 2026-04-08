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
  Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { showError } from "@/utils/toast";

type AnalyzerState = "hero" | "loading" | "selection" | "breakdown" | "gate" | "final";

const CompetitorAnalyzer = () => {
  const [state, setState] = useState<AnalyzerState>("hero");
  const [url, setUrl] = useState("");

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      showError("Please enter a website URL to begin.");
      return;
    }
    setState("loading");
    // Transition to next state will be handled in the next step
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Minimal Nav */}
      <nav className="h-20 border-b border-gray-100 px-6 md:px-12 flex items-center justify-between max-w-[1216px] mx-auto w-full">
        <Logo />
        <Link to="/#signin" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
          Sign in
        </Link>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-6 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl aspect-square bg-blue-50/50 rounded-full blur-3xl -z-10" />
          
          <div className="max-w-[800px] mx-auto text-center space-y-8">
            {state === "hero" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
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
                  <p className="text-sm text-gray-400 font-medium">
                    Free. No signup required.
                  </p>
                </form>
              </div>
            )}

            {state === "loading" && (
              <div className="py-20 flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in-95 duration-500">
                <div className="relative">
                  <div className="absolute -inset-8 bg-blue-500/10 rounded-full blur-2xl animate-pulse" />
                  <Loader2 className="h-16 w-16 text-blue-600 animate-spin stroke-[1.5px]" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-gray-900">Analyzing {url}...</h2>
                  <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">Identifying competitors & ad signals</p>
                </div>
                <div className="w-full max-w-xs h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 animate-[loading-bar_3s_ease-in-out_forwards]" />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* How it works */}
        {state === "hero" && (
          <section className="py-24 bg-gray-50 border-y border-gray-100 px-6">
            <div className="max-w-[1216px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">1. Enter your website</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We identify your company and find who you compete with on LinkedIn using our proprietary B2B graph.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <MousePointer2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">2. Pick a competitor</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Select one from the list to get a full breakdown of their active campaigns and creative strategy.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">3. Get actionable insights</h3>
                  <p className="text-gray-600 leading-relaxed">
                    See their creative themes, ad formats, cadence, and what's worth testing for your own campaigns.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Social Proof */}
        {state === "hero" && (
          <section className="py-16 bg-white px-6">
            <div className="max-w-[1216px] mx-auto text-center space-y-8">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Powered by DemandSense — trusted by LinkedIn advertisers worldwide
              </p>
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
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} DemandSense. All rights reserved.
          </p>
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
      `}</style>
    </div>
  );
};

export default CompetitorAnalyzer;