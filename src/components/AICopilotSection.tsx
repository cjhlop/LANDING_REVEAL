"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  Sparkles, 
  Bot, 
  CheckCircle2,
  Search,
  Database,
  Activity,
  ShieldCheck,
  MessageSquare,
  BarChart3,
  Pin
} from "lucide-react";
import SectionBadge from "./SectionBadge";
import ButtonGroup from "./ButtonGroup";

const AI_STEPS = [
  { 
    query: "How is my LinkedIn ROAS performing this month?",
    thoughts: ["Analyzing campaign spend...", "Comparing to SaaS industry benchmarks...", "Generating performance chart..."],
    result: [
      "Your LinkedIn ROAS is currently 4.2x, which is 24% higher than last month.",
      "You're significantly outperforming the SaaS industry average of 2.8x.",
    ],
    chartData: [45, 52, 38, 65, 48, 72],
    chartLabel: "ROAS Trend (Last 6 Months)"
  },
  { 
    query: "Show me website visitor intent by industry.",
    thoughts: ["Scanning WebID session logs...", "Aggregating firmographic data...", "Building industry breakdown..."],
    result: [
      "I identified a 40% surge in high-intent traffic from the Fintech sector.",
      "SaaS and IT Services remain your most consistent high-fit audiences.",
    ],
    chartData: [65, 42, 30, 25, 15, 10],
    chartLabel: "Intent Score by Industry"
  }
];

const AICopilotSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const [stepIndex, setStepIndex] = React.useState(0);
  const [animState, setAnimState] = React.useState<'idle' | 'query' | 'thinking' | 'result'>('idle');
  const [thoughtIndex, setThoughtIndex] = React.useState(-1);

  React.useEffect(() => {
    if (!inView) return;

    let isMounted = true;

    const runSequence = async () => {
      if (!isMounted) return;

      setAnimState('query');
      setThoughtIndex(-1);
      await new Promise(r => setTimeout(r, 2000));
      if (!isMounted) return;

      setAnimState('thinking');
      for (let i = 0; i < 3; i++) {
        setThoughtIndex(i);
        await new Promise(r => setTimeout(r, 1000));
        if (!isMounted) return;
      }

      setAnimState('result');
      await new Promise(r => setTimeout(r, 8000));
      if (!isMounted) return;

      setAnimState('idle');
      await new Promise(r => setTimeout(r, 1000));
      if (!isMounted) return;
      
      setStepIndex((prev) => (prev + 1) % AI_STEPS.length);
      runSequence();
    };

    runSequence();
    return () => { isMounted = false; };
  }, [inView]);

  const current = AI_STEPS[stepIndex];

  return (
    <section 
      ref={ref}
      id="ai-copilot"
      className="w-full bg-white px-6 sm:px-12 md:px-[112px] py-16 md:py-24 lg:py-40 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <div className="lg:col-span-5 space-y-6 md:space-y-8 text-center lg:text-left">
          <div className={cn(
            "flex justify-center lg:justify-start transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={Sparkles} text="AI Co-Pilot" />
          </div>

          <h2 className={cn(
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Your Marketing <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Intelligence Agent</span>
          </h2>

          <p className={cn(
            "text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-200 max-w-2xl mx-auto lg:mx-0",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Ask AI Co-Pilot anything about your LinkedIn ads or website visitors. It doesn't just answer—it builds the visualizations you need to prove impact.
          </p>

          <div className={cn(
            "space-y-3 sm:space-y-4 transition-all duration-700 delay-300 text-left max-w-xl mx-auto lg:mx-0",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="size-4 sm:size-5 text-blue-600 flex-shrink-0" />
              <span className="text-sm sm:text-base">Conversational data exploration</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="size-4 sm:size-5 text-blue-600 flex-shrink-0" />
              <span className="text-sm sm:text-base">Instant chart & dashboard generation</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="size-4 sm:size-5 text-blue-600 flex-shrink-0" />
              <span className="text-sm sm:text-base">Pin insights directly to your workspace</span>
            </div>
          </div>

          <div className={cn(
            "pt-4 transition-all duration-700 delay-400 flex justify-center lg:justify-start",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <ButtonGroup 
              primaryLabel="Try It Now" 
              secondaryLabel="Read More"
              size="lg"
            />
          </div>
        </div>

        <div className="lg:col-span-7 relative flex items-center justify-center mt-8 lg:mt-0">
          <div className={cn(
            "relative w-full aspect-[4/3] max-w-[320px] sm:max-w-[450px] lg:max-w-[650px] mx-auto transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            {/* Magic Border Wrapper */}
            <div className="magic-border h-full w-full">
              <div className="h-full w-full bg-slate-900 rounded-xl sm:rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
                
                <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/50 backdrop-blur-md">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex gap-1 sm:gap-1.5">
                      <div className="size-2 sm:size-2.5 rounded-full bg-blue-500/40" />
                      <div className="size-2 sm:size-2.5 rounded-full bg-blue-500/20" />
                      <div className="size-2 sm:size-2.5 rounded-full bg-blue-500/10" />
                    </div>
                    <div className="h-3 sm:h-4 w-px bg-slate-800 mx-1 sm:mx-2" />
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <Bot className="size-2.5 sm:size-3" />
                      <span>AI Co-Pilot</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="size-1 sm:size-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-[8px] sm:text-[10px] font-bold text-blue-400 uppercase tracking-wider">Live Analysis</span>
                  </div>
                </div>

                <div className="flex-1 p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 font-sans overflow-y-auto custom-scrollbar">
                  
                  <div className={cn(
                    "flex items-start gap-3 sm:gap-4 transition-all duration-500",
                    animState !== 'idle' ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    <div className="size-6 sm:size-8 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <Search className="size-3 sm:size-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[8px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5 sm:mb-1">User Query</div>
                      <div className="text-sm sm:text-lg text-white font-medium leading-tight">
                        {current.query}
                      </div>
                    </div>
                  </div>

                  <div className={cn(
                    "flex flex-col gap-2 sm:gap-3 transition-all duration-500",
                    (animState === 'thinking' || animState === 'result') ? "opacity-100" : "opacity-0"
                  )}>
                    <div className="space-y-1.5 sm:space-y-2 pl-9 sm:pl-12">
                      {current.thoughts.map((thought, i) => (
                        <div 
                          key={i}
                          className={cn(
                            "flex items-center gap-2 sm:gap-3 text-xs sm:text-sm transition-all duration-500",
                            i <= thoughtIndex ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                          )}
                        >
                          <div className={cn(
                            "size-1 sm:size-1.5 rounded-full transition-colors duration-500",
                            i === thoughtIndex && animState === 'thinking' ? "bg-blue-500 animate-pulse" : "bg-slate-700"
                          )} />
                          <span className={i === thoughtIndex && animState === 'thinking' ? "text-blue-400 font-medium" : "text-slate-500"}>
                            {thought}
                          </span>
                          {(i < thoughtIndex || animState === 'result') && <CheckCircle2 className="size-3 sm:size-3.5 text-emerald-500" />}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={cn(
                    "mt-1 sm:mt-2 space-y-4 transition-all duration-700",
                    animState === 'result' ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                  )}>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-blue-400 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest">
                      <MessageSquare className="size-2.5 sm:size-3" />
                      <span>Co-Pilot Response</span>
                    </div>
                    
                    <div className="space-y-2 pl-1">
                      {current.result.map((line, i) => (
                        <div 
                          key={i} 
                          className="text-xs sm:text-sm text-emerald-400 leading-relaxed transition-all duration-500 font-medium"
                          style={{ transitionDelay: `${i * 150}ms` }}
                        >
                          {line}
                        </div>
                      ))}
                    </div>

                    <div className={cn(
                      "bg-slate-800/50 rounded-xl p-4 border border-slate-700 transition-all duration-1000 delay-500",
                      animState === 'result' ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    )}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="size-3.5 text-blue-400" />
                          <span className="text-[10px] font-bold text-white uppercase tracking-wider">{current.chartLabel}</span>
                        </div>
                        <button className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-600 hover:bg-blue-500 text-[9px] font-bold text-white transition-colors">
                          <Pin className="size-2.5" />
                          PIN TO DASHBOARD
                        </button>
                      </div>
                      
                      <div className="flex items-end justify-between gap-1.5 h-24 px-2">
                        {current.chartData.map((val, i) => (
                          <div 
                            key={i}
                            className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm transition-all duration-1000 ease-out"
                            style={{ 
                              height: animState === 'result' ? `${val}%` : '0%',
                              transitionDelay: `${800 + (i * 100)}ms`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <ShieldCheck className="size-3 sm:size-3.5 text-emerald-500" />
                      <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">Verified Data</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2">
                      <Database className="size-3.5 text-slate-500" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">280M+ Profiles</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[8px] sm:text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                    <Activity className="size-2.5 sm:size-3" />
                    <span>Processing: 1.2s</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(71, 85, 105, 0.8);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 116, 139, 1);
        }
      `}</style>
    </section>
  );
};

export default AICopilotSection;