"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  Sparkles, 
  ArrowRight, 
  Bot, 
  LineChart, 
  Zap, 
  CheckCircle2,
  Send,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBadge from "./SectionBadge";

const AI_CONVERSATION = [
  { role: 'user', text: "How's my LinkedIn ROAS this month?" },
  { role: 'assistant', text: "Your ROAS is up 24% vs last month. I recommend increasing budget on the 'Enterprise' campaign.", hasInsight: true },
  { role: 'user', text: "Show me top visitors from SaaS companies." },
  { role: 'assistant', text: "Identified 12 new high-intent SaaS accounts today. Stripe and HubSpot are showing peak engagement.", hasInsight: false }
];

const TypewriterText = ({ text, onComplete }: { text: string; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = React.useState("");
  
  React.useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
};

const AICopilotSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const [visibleMessages, setVisibleMessages] = React.useState<number>(0);
  const [isTyping, setIsTyping] = React.useState(false);

  React.useEffect(() => {
    if (!inView) return;

    const sequence = async () => {
      // Reset
      setVisibleMessages(0);
      
      for (let i = 0; i < AI_CONVERSATION.length; i++) {
        if (AI_CONVERSATION[i].role === 'assistant') {
          setIsTyping(true);
          await new Promise(r => setTimeout(r, 1000)); // Thinking time
          setIsTyping(false);
        }
        setVisibleMessages(i + 1);
        await new Promise(r => setTimeout(r, 3000)); // Wait before next pair
      }
      
      // Loop after a delay
      await new Promise(r => setTimeout(r, 5000));
      sequence();
    };

    sequence();
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

        {/* Right: Interactive Chat Visual */}
        <div className="lg:col-span-7 relative">
          <div className={cn(
            "relative w-full aspect-square max-w-[550px] mx-auto transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-white rounded-full blur-3xl opacity-60" />
            
            {/* Chat Interface Mockup */}
            <div className="absolute inset-0 flex flex-col p-6 md:p-10">
              <div className="flex-1 bg-white/90 backdrop-blur-md rounded-[32px] border border-blue-100 shadow-2xl overflow-hidden flex flex-col">
                
                {/* Chat Header */}
                <div className="px-6 py-4 border-b border-blue-50 flex items-center justify-between bg-blue-50/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
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
                <div className="flex-1 p-6 space-y-6 overflow-y-auto scrollbar-hide">
                  {AI_CONVERSATION.map((msg, i) => (
                    <div 
                      key={i}
                      className={cn(
                        "flex flex-col transition-all duration-500",
                        msg.role === 'user' ? "items-end" : "items-start",
                        i < visibleMessages ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute pointer-events-none"
                      )}
                    >
                      <div className={cn(
                        "max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm",
                        msg.role === 'user' 
                          ? "bg-blue-600 text-white rounded-tr-none" 
                          : "bg-gray-50 text-gray-700 border border-gray-100 rounded-tl-none"
                      )}>
                        {i === visibleMessages - 1 ? (
                          <TypewriterText text={msg.text} />
                        ) : (
                          msg.text
                        )}
                      </div>

                      {/* Visual Insight Card */}
                      {msg.role === 'assistant' && msg.hasInsight && i < visibleMessages && (
                        <div className="mt-3 w-full max-w-[85%] animate-in fade-in slide-in-from-bottom-2 duration-700 delay-500">
                          <div className="bg-white rounded-2xl border border-blue-100 p-4 shadow-lg flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                              <LineChart className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Insight Generated</div>
                              <div className="text-sm font-bold text-gray-900">ROAS Trend: +24.2%</div>
                            </div>
                            <TrendingUp className="w-5 h-5 text-green-500" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start animate-in fade-in duration-300">
                      <div className="bg-gray-50 border border-gray-100 p-3 rounded-2xl rounded-tl-none flex gap-1">
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-100" />
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Input Mock */}
                <div className="p-4 border-t border-blue-50 bg-gray-50/50">
                  <div className="bg-white rounded-xl border border-blue-100 p-3 flex items-center justify-between">
                    <span className="text-sm text-gray-400">Ask about your data...</span>
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                      <Send className="w-4 h-4" />
                    </div>
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