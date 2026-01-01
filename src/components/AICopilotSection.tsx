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
  Send,
  TrendingUp,
  BarChart3,
  Terminal,
  Cpu,
  Search,
  Database,
  LineChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBadge from "./SectionBadge";

const AI_STEPS = [
  { 
    query: "Analyze LinkedIn ROAS vs Industry Benchmarks",
    thoughts: ["Accessing Campaign Manager API...", "Fetching benchmark data for SaaS...", "Calculating multi-touch attribution..."],
    result: { label: "ROAS", value: "4.2x", trend: "+24%", detail: "Top 5% of Industry" }
  },
  { 
    query: "Identify high-intent accounts from yesterday",
    thoughts: ["Scanning WebID session logs...", "Matching IP addresses to ICP...", "Scoring engagement depth..."],
    result: { label: "Hot Leads", value: "12", trend: "+15%", detail: "Stripe, HubSpot, Adobe" }
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
        await new Promise(r => setTimeout(r, 1200));
      }

      // 3. Show Result
      setSubStep(2);
      await new Promise(r => setTimeout(r, 4000));

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

        {/* Right: Reworked Visual Stage */}
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
                  <span className="text-[10px] font-mono text-blue-400 uppercase">Processing</span>
                </div>
              </div>

              {/* Main Stage Area */}
              <div className="flex-1 p-8 flex flex-col gap-8">
                
                {/* 1. The Input Query */}
                <div className={cn(
                  "flex items-start gap-4 transition-all duration-500",
                  subStep >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                  <div className="size-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400">
                    <Search className="size-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-mono text-slate-500 uppercase mb-1">User Query</div>
                    <div className="text-lg font-medium text-white tracking-tight">
                      {current.query}
                    </div>
                  </div>
                </div>

                {/* 2. The Thought Engine */}
                <div className={cn(
                  "flex-1 flex flex-col gap-4 transition-all duration-500",
                  subStep >= 1 ? "opacity-100" : "opacity-0"
                )}>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-blue-400 uppercase tracking-widest">
                    <Cpu className="size-3" />
                    <span>Thought Process</span>
                  </div>
                  
                  <div className="space-y-3">
                    {current.thoughts.map((thought, i) => (
                      <div 
                        key={i}
                        className={cn(
                          "flex items-center gap-3 text-sm font-mono transition-all duration-500",
                          i <= thoughtIndex ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                        )}
                      >
                        <div className={cn(
                          "size-1.5 rounded-full",
                          i < thoughtIndex ? "bg-blue-500" : i === thoughtIndex ? "bg-blue-400 animate-pulse" : "bg-slate-800"
                        )} />
                        <span className={i === thoughtIndex ? "text-blue-100" : "text-slate-500"}>
                          {thought}
                        </span>
                        {i < thoughtIndex && <CheckCircle2 className="size-3 text-emerald-500" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. The Result Card */}
                <div className={cn(
                  "transition-all duration-700 transform",
                  subStep === 2 ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95 pointer-events-none"
                )}>
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[10px] p-6 shadow-2xl relative overflow-hidden">
                    {/* Decorative background icon */}
                    <Bot className="absolute -right-4 -bottom-4 size-32 text-white/5 rotate-12" />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-bold text-blue-100 uppercase tracking-widest mb-1">{current.result.label}</div>
                        <div className="text-4xl font-black text-white tracking-tighter">{current.result.value}</div>
                      </div>
                      <div className="text-right">
                        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/10 text-white text-xs font-bold mb-2">
                          <TrendingUp className="size-3" />
                          {current.result.trend}
                        </div>
                        <div className="text-[10px] text-blue-100 font-medium">{current.result.detail}</div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full bg-white/10 flex items-center justify-center">
                          <Database className="size-3 text-white" />
                        </div>
                        <span className="text-[10px] text-white/60 font-mono">Verified Data Source</span>
                      </div>
                      <button className="text-[10px] font-bold text-white uppercase tracking-widest hover:underline">
                        Apply Optimization
                      </button>
                    </div>
                  </div>
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
                    <div className="size-2 rounded-full bg-blue-500" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase">Latency: 14ms</span>
                  </div>
                </div>
                <div className="text-[9px] font-mono text-slate-600">
                  © 2025 DemandSense AI
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