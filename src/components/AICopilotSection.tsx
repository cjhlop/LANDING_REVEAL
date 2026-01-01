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
  Search,
  Database,
  MessageSquare,
  BarChart3,
  UserCheck,
  MousePointer2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBadge from "./SectionBadge";

const AI_SCENARIOS = [
  { 
    query: "How is my LinkedIn ROAS this month?",
    response: "Your ROAS is up 24% vs last month. I've identified that your 'Enterprise' campaign is driving the highest quality leads.",
    insight: { label: "ROAS", value: "4.2x", trend: "+24%", icon: BarChart3, color: "blue" }
  },
  { 
    query: "Who are my top visitors today?",
    response: "I've identified 12 high-intent accounts. Stripe and HubSpot are showing peak engagement on your pricing page.",
    insight: { label: "Hot Leads", value: "12", trend: "+15%", icon: UserCheck, color: "orange" }
  }
];

const AICopilotSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const [stepIndex, setStepIndex] = React.useState(0);
  const [subStep, setSubStep] = React.useState(0); // 0: Query, 1: Response, 2: Insight

  React.useEffect(() => {
    if (!inView) return;

    const sequence = async () => {
      setSubStep(0);
      await new Promise(r => setTimeout(r, 3000));

      setSubStep(1);
      await new Promise(r => setTimeout(r, 2500));

      setSubStep(2);
      await new Promise(r => setTimeout(r, 5000));

      setStepIndex((prev) => (prev + 1) % AI_SCENARIOS.length);
      sequence();
    };

    sequence();
  }, [inView]);

  const current = AI_SCENARIOS[stepIndex];

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
            <SectionBadge icon={Sparkles} text="Neural Intelligence" />
          </div>

          <h2 className={cn(
            "text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            The Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3875F6] to-[#FA8C16]">
              Autonomous Growth
            </span>
          </h2>

          <p className={cn(
            "text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Stop digging through complex data. Ask Co-Pilot anything about your marketing in plain English and get instant, visual answers that help you grow faster.
          </p>

          <div className={cn(
            "space-y-4 transition-all duration-700 delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="size-5 text-blue-600" />
              <span>Ask questions in plain English</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="size-5 text-blue-600" />
              <span>Instant visual reports & charts</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="size-5 text-blue-600" />
              <span>Proactive optimization alerts</span>
            </div>
          </div>

          <div className={cn(
            "pt-4 transition-all duration-700 delay-400",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Button size="hero" variant="hero" className="group bg-blue-600 hover:bg-blue-700 shadow-blue-500/20">
              Try Co-Pilot Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right: Human-Friendly Visual Stage */}
        <div className="lg:col-span-7 relative">
          <div className={cn(
            "relative w-full aspect-[4/3] max-w-[600px] mx-auto transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-orange-50 to-white rounded-full blur-3xl opacity-60" />
            
            {/* Chat Interface Mockup */}
            <div className="absolute inset-0 bg-white rounded-[10px] border border-gray-200 shadow-2xl overflow-hidden flex flex-col">
              
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <Bot className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">DemandSense Co-Pilot</div>
                    <div className="flex items-center gap-1.5">
                      <div className="size-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Online</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
                
                {/* 1. User Query */}
                <div className={cn(
                  "flex justify-end transition-all duration-500",
                  subStep >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                  <div className="bg-blue-600 text-white px-4 py-3 rounded-[10px] rounded-tr-none max-w-[80%] shadow-md text-sm font-medium">
                    {current.query}
                  </div>
                </div>

                {/* 2. AI Response */}
                <div className={cn(
                  "flex items-start gap-3 transition-all duration-500",
                  subStep >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                  <div className="size-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Bot className="size-4 text-blue-600" />
                  </div>
                  <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-[10px] rounded-tl-none max-w-[85%] text-sm leading-relaxed">
                    {current.response}
                  </div>
                </div>

                {/* 3. Visual Insight Card */}
                <div className={cn(
                  "pl-11 transition-all duration-700 transform",
                  subStep === 2 ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95 pointer-events-none"
                )}>
                  <div className="bg-white rounded-[10px] border border-gray-200 p-6 shadow-xl relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "size-10 rounded-xl flex items-center justify-center shadow-sm",
                          current.insight.color === 'blue' ? "bg-blue-50 text-blue-600" : "bg-orange-50 text-orange-600"
                        )}>
                          <current.insight.icon className="size-5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{current.insight.label}</div>
                          <div className="text-2xl font-bold text-gray-900">{current.insight.value}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold">
                          <TrendingUp className="size-3" />
                          {current.insight.trend}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 font-medium border-t border-gray-50 pt-3">
                      {current.insight.detail}
                    </div>
                  </div>
                </div>

              </div>

              {/* Input Bar Mockup */}
              <div className="p-4 border-t border-gray-100 bg-gray-50/30">
                <div className="bg-white border border-gray-200 rounded-[10px] px-4 py-3 flex items-center justify-between">
                  <span className="text-sm text-gray-400">Ask me anything about your data...</span>
                  <div className="size-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                    <MousePointer2 className="size-4" />
                  </div>
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