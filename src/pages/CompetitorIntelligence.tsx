"use client";

import React, { useState } from "react";
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
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";
import { showError } from "@/utils/toast";

type AnalyzerState = "hero" | "loading" | "brief" | "gate" | "breakdown" | "final";

const CompetitorIntelligence = () => {
  const [state, setState] = useState<AnalyzerState>("hero");
  const [url, setUrl] = useState("");

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      showError("Please enter a website URL to begin.");
      return;
    }
    // Transition to loading state (to be implemented in next step)
    setState("loading");
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

        {/* Placeholder for other states */}
        {state === "loading" && (
          <div className="py-40 flex flex-col items-center justify-center">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
            <p className="text-lg font-medium text-gray-600">Analyzing {url}...</p>
          </div>
        )}

        {/* HOW IT WORKS */}
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

        {/* SOCIAL PROOF */}
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

import { Loader2 } from "lucide-react";

export default CompetitorIntelligence;