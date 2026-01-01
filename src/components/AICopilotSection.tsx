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
  TrendingUp,
  Terminal,
  Cpu,
  Search,
  Database,
  Activity,
  ShieldAlert,
  Globe,
  Layers
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
      setSubStep(0);
      await new Promise(r => setTimeout(r, 2500));

      setSubStep(1);
      for (let i = 0; i < 3; i++) {
        setThoughtIndex(i);
        await new Promise(r => setTimeout(r, 1000));
      }

      setSubStep(2);
      await new Promise(r => setTimeout(r, 5000));

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
      className="w-full bg-[#05070A] px-8 md:px-[112px] py-24 md:py-40 overflow-hidden relative"
    >
      {/* Extravagant Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left: Content */}
        <div className="lg:col-span-5 space-y-8">
          <div className={cn(
            "transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={Sparkles} text="Neural Intelligence" variant="dark" className="bg-blue-500/10 text-blue-400 border-blue-500/20" />
          </div>

          <h2 className={cn(
            "text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            The Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient-x">
              Autonomous Growth
            </span>
          </h2>

          <p className={cn(
            "text-xl text-slate-400 leading-relaxed transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            DemandSense AI doesn't just report data—it understands it. Our Neural Co-Pilot autonomously identifies opportunities, predicts outcomes, and executes optimizations across your entire LinkedIn stack.
          </p>

          <div className={cn(
            "grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            {[
              { icon: Activity, text: "Real-time Reasoning" },
              { icon: ShieldAlert, text: "Predictive Guardrails" },
              { icon: Globe, text: "Cross-Network Intel" },
              { icon: Layers, text: "Deep Funnel Analysis" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-300 group cursor-default">
                <div className="size-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                  <item.icon className="size-4 text-blue-400" />
                </div>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <div className={cn(
            "pt-4 transition-all duration-700 delay-400",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Button size="hero" variant="hero" className="group bg-blue-600 hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.3)] border-0">
              Initialize Co-Pilot
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right: Extravagant Visual Stage */}
        <div className="lg:col-span-7 relative">
          <div className={cn(
            "relative w-full aspect-[4/3] max-w-[650px] mx-auto transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            
            {/* Holographic Frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 rounded-[20px] blur-xl opacity-50" />
            
            <div className="absolute inset-0 bg-[#0A0F1A]/80 backdrop-blur-2xl rounded-[10px] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
              
              {/* Header: System Status */}
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="size-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                    <div className="size-2 rounded-full bg-blue-500/30" />
                    <div className="size-2 rounded-full bg-blue-500/30" />
                  </div>
                  <div className="h-4 w-px bg-white/10 mx-2" />
                  <div className="flex items-center gap-2 text-[10px] font-mono text-blue-400 uppercase tracking-[0.2em]">
                    <Terminal className="size-3" />
                    <span>Neural_Core_Active</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-[9px] font-mono text-slate-500">CPU: 12%</div>
                  <div className="text-[9px] font-mono text-slate-500">MEM: 1.4GB</div>
                </div>
              </div>

              {/* Main Interface Area */}
              <div className="flex-1 p-8 flex flex-col gap-8 relative">
                
                {/* Particle Field Overlay (CSS only) */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                  <div className="absolute top-10 left-10 size-1 bg-blue-400 rounded-full animate-ping" />
                  <div className="absolute bottom-20 right-40 size-1 bg-purple-400 rounded-full animate-ping delay-700" />
                  <div className="absolute top-1/2 left-1/2 size-1 bg-indigo-400 rounded-full animate-ping delay-1000" />
                </div>

                {/* 1. The Input Query */}
                <div className={cn(
                  "flex items-start gap-5 transition-all duration-700",
                  subStep >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                  <div className="size-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                    <Search className="size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[9px] font-mono text-blue-500/60 uppercase tracking-widest mb-1.5">Incoming Request</div>
                    <div className="text-xl font-semibold text-white tracking-tight">
                      {current.query}
                    </div>
                  </div>
                </div>

                {/* 2. The Thought Engine */}
                <div className={cn(
                  "flex-1 flex flex-col gap-6 transition-all duration-700",
                  subStep >= 1 ? "opacity-100" : "opacity-0"
                )}>
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                    <div className="flex items-center gap-2 text-[10px] font-mono text-blue-400 uppercase tracking-[0.3em]">
                      <Cpu className="size-3 animate-spin-slow" />
                      <span>Processing</span>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                  </div>
                  
                  <div className="space-y-4 px-4">
                    {current.thoughts.map((thought, i) => (
                      <div 
                        key={i}
                        className={cn(
                          "flex items-center gap-4 text-sm font-mono transition-all duration-500",
                          i <= thoughtIndex ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        )}
                      >
                        <div className={cn(
                          "size-1 rounded-full shadow-[0_0_8px_currentColor]",
                          i < thoughtIndex ? "text-emerald-500 bg-emerald-500" : i === thoughtIndex ? "text-blue-400 bg-blue-400 animate-pulse" : "text-slate-800 bg-slate-800"
                        )} />
                        <span className={cn(
                          "transition-colors duration-300",
                          i === thoughtIndex ? "text-blue-100" : i < thoughtIndex ? "text-slate-500" : "text-slate-800"
                        )}>
                          {thought}
                        </span>
                        {i < thoughtIndex && <CheckCircle2 className="size-3 text-emerald-500/50" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. The Result Card: Extravagant Glassmorphism */}
                <div className={cn(
                  "absolute inset-x-8 bottom-8 transition-all duration-1000 transform",
                  subStep === 2 ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95 pointer-events-none"
                )}>
                  <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-xl rounded-[10px] border border-white/10 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group">
                    {/* Animated background glow */}
                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[2000ms]" />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-2">{current.result.label}</div>
                        <div className="text-5xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                          {current.result.value}
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                          <TrendingUp className="size-3" />
                          {current.result.trend}
                        </div>
                        <div className="text-[11px] text-blue-200/60 font-medium uppercase tracking-wider">{current.result.detail}</div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                          <Database className="size-4 text-blue-400" />
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono leading-tight">
                          SOURCE: DEMANDSENSE_GRAPH<br />
                          CONFIDENCE: 99.8%
                        </div>
                      </div>
                      <button className="px-4 py-2 rounded-lg bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-blue-400 hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        Execute Optimization
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Status Bar */}
              <div className="px-6 py-3 border-t border-white/5 bg-black/40 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981]" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">System: Nominal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-blue-500" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Sync: 0.4ms</span>
                  </div>
                </div>
                <div className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">
                  DemandSense Neural v4.0
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default AICopilotSection;