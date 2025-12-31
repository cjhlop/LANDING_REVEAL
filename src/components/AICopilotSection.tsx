"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  Sparkles, 
  MessageSquare, 
  ArrowRight, 
  Bot, 
  LineChart, 
  Zap, 
  Target,
  CheckCircle2,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBadge from "./SectionBadge";

const AI_MESSAGES = [
  { role: 'user', text: "How's my LinkedIn ROAS this month?" },
  { role: 'assistant', text: "Your ROAS is up 24% vs last month. I recommend increasing budget on the 'Enterprise' campaign." },
  { role: 'user', text: "Show me top visitors from SaaS companies." },
  { role: 'assistant', text: "Identified 12 new high-intent SaaS accounts today. Stripe and HubSpot are showing peak engagement." }
];

const AICopilotSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const [activeMsg, setActiveMsg] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActiveMsg((prev) => (prev + 1) % AI_MESSAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [inView]);

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
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Intelligence Agent</span>
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
              <CheckCircle2 className="size-5 text-indigo-600" />
              <span>Natural language data querying</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="size-5 text-indigo-600" />
              <span>Automated optimization suggestions</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="size-5 text-indigo-600" />
              <span>Instant ad-hoc report generation</span>
            </div>
          </div>

          <div className={cn(
            "pt-4 transition-all duration-700 delay-400",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Button size="hero" variant="hero" className="group bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/20">
              Chat with Co-Pilot
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right: Interactive Chat Visual */}
        <div className="lg:col-span-7 relative">
          <div className={cn(
            "relative w-full aspect-square max-w-[550px] mx-auto transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-white rounded-full blur-3xl opacity-60" />
            
            {/* Chat Interface Mockup */}
            <div className="absolute inset-0 flex flex-col p-6 md:p-10">
              <div className="flex-1 bg-white/80 backdrop-blur-md rounded-[32px] border border-indigo-100 shadow-2xl overflow-hidden flex flex-col">
                
                {/* Chat Header */}
                <div className="px-6 py-4 border-b border-indigo-50 flex items-center justify-between bg-indigo-50/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">AI Co-Pilot</div>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Online</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-200" />
                    <div className="w-2 h-2 rounded-full bg-gray-200" />
                  </div>
                </div>

                {/* Chat Messages Area */}
                <div className="flex-1 p-6 space-y-6 overflow-hidden">
                  {AI_MESSAGES.map((msg, i) => (
                    <div 
                      key={i}
                      className={cn(
                        "flex transition-all duration-500",
                        msg.role === 'user' ? "justify-end" : "justify-start",
                        activeMsg === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute pointer-events-none"
                      )}
                    >
                      <div className={cn(
                        "max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm",
                        msg.role === 'user' 
                          ? "bg-indigo-600 text-white rounded-tr-none" 
                          : "bg-gray-50 text-gray-700 border border-gray-100 rounded-tl-none"
                      )}>
                        {msg.text}
                      </div>
                    </div>
                  ))}

                  {/* Visual Insight Card (Appears with Assistant) */}
                  <div className={cn(
                    "mt-4 transition-all duration-1000 delay-500",
                    AI_MESSAGES[activeMsg].role === 'assistant' ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  )}>
                    <div className="bg-white rounded-2xl border border-indigo-100 p-4 shadow-lg flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                        <LineChart className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Insight Generated</div>
                        <div className="text-sm font-bold text-gray-900">ROAS Trend: +24.2%</div>
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                </div>

                {/* Chat Input Mock */}
                <div className="p-4 border-t border-indigo-50 bg-gray-50/50">
                  <div className="bg-white rounded-xl border border-indigo-100 p-3 flex items-center justify-between">
                    <span className="text-sm text-gray-400">Ask about your data...</span>
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                      <Send className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-xl border border-indigo-50 flex flex-col items-center justify-center animate-bounce duration-[4000ms]">
              <Zap className="w-8 h-8 text-orange-500 mb-1" />
              <span className="text-[10px] font-bold text-gray-400 uppercase">Optimize</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white rounded-2xl shadow-xl border border-indigo-50 flex flex-col items-center justify-center animate-bounce duration-[5000ms]">
              <Target className="w-8 h-8 text-blue-600 mb-1" />
              <span className="text-[10px] font-bold text-gray-400 uppercase">Target</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AICopilotSection;