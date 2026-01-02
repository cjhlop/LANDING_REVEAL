"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  Sparkles, 
  ArrowRight, 
  Bot, 
  Zap, 
  CheckCircle2,
  Terminal,
  Cpu,
  Search,
  Database,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBadge from "./SectionBadge";

const AI_STEPS = [
  { 
    query: "Analyze LinkedIn ROAS vs Industry Benchmarks",
    thoughts: ["Accessing Campaign Manager API...", "Fetching benchmark data for SaaS...", "Calculating multi-touch attribution..."],
    result: [
      "> ANALYSIS COMPLETE",
      "> CURRENT ROAS: 4.2x (+24% MoM)",
      "> BENCHMARK: 2.8x (SaaS Avg)",
      "> STATUS: OUTPERFORMING (Top 5%)",
      "> RECOMMENDATION: Increase 'Enterprise' budget by 15%"
    ]
  },
  { 
    query: "Identify high-intent accounts from yesterday",
    thoughts: ["Scanning WebID session logs...", "Matching IP addresses to ICP...", "Scoring engagement depth..."],
    result: [
      "> SCAN COMPLETE: 12 HOT LEADS FOUND",
      "> 1. Stripe (VP Eng) - 3 visits, Pricing Page",
      "> 2. HubSpot (Director Mktg) - 2 visits, Case Study",
      "> 3. Adobe (Growth Lead) - 5 visits, Demo Video",
      "> ACTION: Syncing to Salesforce 'Hot Leads' queue..."
    ]
  }
];

const AICopilotSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const [stepIndex, setStepIndex] = React.useState(0);
  const [subStep, setSubStep] = React.useState(0); // 0: Query, 1: Thinking, 2: Result
  const [thoughtIndex, setThoughtIndex] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;

    const sequence = async () => {
      // 1. Show Query
      setSubStep(0);
      await new Promise(r => setTimeout(r, 2000));

      // 2. Start Thinking
      setSubStep(1);
      for (let i = 0; i < 3; i++) {
        setThoughtIndex(i);
        await new Promise(r => setTimeout(r, 1000));
      }

      // 3. Show Result
      setSubStep(2);
      await new Promise(r => setTimeout(r, 5000));

      // 4. Next Step
      setStepIndex((prev) => (prev + 1) % AI_STEPS.length);
      sequence();
    };

    sequence();
  }, [inView]);

  const current = AI_STEPS[stepIndex];

  return (
    <section 
      ref={ref}
      id="ai-copilot"
      className="w-full bg-white px-8 md:px-[112px] py-24 md:py-40 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left: Content */}
        <div className="lg:col-span-5 space-y-8">
          <div className={cn(
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={Sparkles} text="AI Co-Pilot" />
          </div>

          <h2 className={cn(
            "text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Your Marketing <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Intelligence Agent</span>
          </h2>

          <p className={cn(
            "text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Stop digging through dashboards. Ask AI Co-Pilot anything about your LinkedIn ads, website visitors, or revenue trends and get instant, actionable insights.
          </p>

          <div className={cn(
            "space-y-4 transition-all duration-700 delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="size-5 text-blue-600" />
              <span>Natural language data querying</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="size-5 text-blue-600" />
              <span>Automated optimization suggestions</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="size-5 text-blue-600" />
              <span>Instant ad-hoc report generation</span>
            </div>
          </div>

          <div className={cn(
            "pt-4 transition-all duration-700 delay-400",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Button size="hero" variant="hero" className="group bg-blue-600 hover:bg-blue-700 shadow-blue-500/20">
              Chat with Co-Pilot
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right: Terminal Visual Stage */}
        <div className="lg:col-span-7 relative">
          <div className={cn(
            "relative w-full aspect-[4/3] max-w-[650px] mx-auto transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white rounded-full blur-3xl opacity-60" />
            
            {/* Command Center Interface */}
            <div className="absolute inset-0 bg-slate-900 rounded-[10px] border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
              
              {/* Terminal Header */}
              <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/50 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="size-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="size-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="size-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                  </div>
                  <div className="h-4 w-px bg-slate-800 mx-2" />
                  <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    <Terminal className="size-3" />
                    <span>copilot_engine_v2.0</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-blue-400 uppercase">Active</span>
                </div>
              </div>

              {/* Main Stage Area */}
              <div className="flex-1 p-8 flex flex-col gap-6 font-mono">
                
                {/* 1. The Input Query */}
                <div className={cn(
                  "flex items-start gap-4 transition-all duration-500",
                  subStep >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                  <div className="text-blue-500 font-bold">$</div>
                  <div className="flex-1">
                    <div className="text-sm text-white leading-relaxed">
                      {current.query}
                    </div>
                  </div>
                </div>

                {/* 2. The Thought Engine */}
                <div className={cn(
                  "flex flex-col gap-3 transition-all duration-500",
                  subStep >= 1 ? "opacity-100" : "opacity-0"
                )}>
                  <div className="space-y-2">
                    {current.thoughts.map((thought, i) => (
                      <div 
                        key={i}
                        className={cn(
                          "flex items-center gap-3 text-xs transition-all duration-500",
                          i <= thoughtIndex ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                        )}
                      >
                        <span className="text-slate-600">[{i + 1}]</span>
                        <span className={i === thoughtIndex ? "text-blue-400" : "text-slate-500"}>
                          {thought}
                        </span>
                        {i < thoughtIndex && <CheckCircle2 className="size-3 text-emerald-500" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. The Plain Text Result */}
                <div className={cn(
                  "mt-4 space-y-2 transition-all duration-700",
                  subStep === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                )}>
                  {current.result.map((line, i) => (
                    <div 
                      key={i} 
                      className="text-sm text-emerald-400 leading-relaxed transition-all duration-500"
                      style={{ transitionDelay: `${i * 150}ms` }}
                    >
                      {line}
                    </div>
                  ))}
                  
                  {/* Blinking Cursor */}
                  <div className="inline-block w-2 h-4 bg-emerald-500 animate-pulse ml-1 align-middle" />
                </div>

              </div>

              {/* Bottom Status Bar */}
              <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-emerald-500" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase">System: Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="size-3 text-slate-500" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase">DB: Connected</span>
                  </div>
                </div>
                <div className="text-[9px] font-mono text-slate-600">
                  LATENCY: 14ms
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AICopilotSection;