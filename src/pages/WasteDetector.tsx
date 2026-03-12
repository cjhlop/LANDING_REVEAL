"use client";

import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import DynamicShadow from "@/components/DynamicShadow";
import SectionBadge from "@/components/SectionBadge";
import DiagnosticTool from "@/components/waste-detector/DiagnosticTool";
import { 
  Zap, 
  BarChart3, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2,
  ArrowRight,
  Search,
  Target,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const WasteDetector = () => {
  const [heroRef, heroInView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });

  return (
    <>
      <Navbar />
      <main className="bg-white overflow-x-hidden">
        
        {/* HERO SECTION */}
        <section ref={heroRef} className="relative w-full pt-32 pb-24 px-6 overflow-hidden">
          <DynamicShadow variant="hero" />
          
          <div className="max-w-[1216px] mx-auto relative z-10">
            <div className="text-center mb-16 space-y-6">
              <div className={cn(
                "transition-all duration-700",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                <SectionBadge icon={Zap} text="Interactive Diagnostic" />
              </div>

              <h1 className={cn(
                "text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                Find how much LinkedIn Ads <br />
                <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                  budget you are wasting
                </span>
              </h1>

              <p className={cn(
                "text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                30-second diagnostic based on real LinkedIn performance benchmarks. Discover inefficiencies in your targeting, scheduling, and frequency.
              </p>
            </div>

            {/* THE TOOL */}
            <div className={cn(
              "transition-all duration-1000 delay-300",
              heroInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}>
              <DiagnosticTool />
            </div>

            <div className="mt-12 flex justify-center gap-8 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                No ad account access required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Instant results
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="max-w-[1216px] mx-auto px-6">
            <div className="text-center mb-16">
              <SectionBadge icon={Layers} text="The Methodology" />
              <h2 className="text-3xl font-bold text-gray-900 mt-6">How the analysis works</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "Enter campaign signals",
                  desc: "Provide basic metrics like budget, CPL, and industry. No sensitive data needed.",
                  icon: <Target className="h-6 w-6 text-blue-600" />
                },
                {
                  step: "02",
                  title: "Benchmark comparison",
                  desc: "Our engine compares your data against 10,000+ active B2B LinkedIn campaigns.",
                  icon: <Search className="h-6 w-6 text-blue-600" />
                },
                {
                  step: "03",
                  title: "Receive optimization insights",
                  desc: "Get a detailed report on where you're overspending and how to fix it.",
                  icon: <TrendingUp className="h-6 w-6 text-blue-600" />
                }
              ].map((item, i) => (
                <div key={i} className="relative space-y-4">
                  <div className="text-5xl font-black text-slate-100 absolute -top-4 -left-2 select-none">{item.step}</div>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center relative z-10">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 relative z-10">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REPORT PREVIEW */}
        <section className="py-24 px-6">
          <div className="max-w-[1216px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                  Get the full picture of your <br />
                  <span className="text-blue-600">LinkedIn Ads performance</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The full report includes deep-dives into metrics that LinkedIn doesn't show you in their native dashboard.
                </p>
                <div className="space-y-4">
                  {[
                    "Creative fatigue detection by audience segment",
                    "Budget allocation analysis across campaign groups",
                    "Competitor benchmark comparison by industry",
                    "Automated audience targeting opportunities"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-blue-600" />
                      </div>
                      {text}
                    </div>
                  ))}
                </div>
                <Button size="lg" className="group" onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}>
                  See Example Report
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-500/5 rounded-[2rem] blur-3xl" />
                <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-800 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-blue-400" />
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Report Preview</span>
                    </div>
                    <div className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400">
                      PRO FEATURE
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="h-32 bg-slate-800/50 rounded-xl border border-slate-700 animate-pulse" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-slate-800/50 rounded-xl border border-slate-700 animate-pulse" />
                      <div className="h-20 bg-slate-800/50 rounded-xl border border-slate-700 animate-pulse" />
                    </div>
                    <div className="h-24 bg-slate-800/50 rounded-xl border border-slate-700 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST LAYER */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-[1216px] mx-auto px-6 text-center space-y-8">
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">Trusted by high-growth B2B teams</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
              <img src="/logos/logo-m.png" alt="Logo" className="h-6 invert brightness-0" />
              <img src="/logos/opteo.png" alt="Logo" className="h-6 invert brightness-0" />
              <img src="/logos/bluestar.webp" alt="Logo" className="h-6 invert brightness-0" />
              <img src="/logos/leadcycle.png" alt="Logo" className="h-6 invert brightness-0" />
            </div>
            <p className="text-slate-500 text-sm">Used by LinkedIn advertisers managing millions in monthly ad spend.</p>
          </div>
        </section>

      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default WasteDetector;