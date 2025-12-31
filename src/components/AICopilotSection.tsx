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
  Maximize2,
  MoreHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBadge from "./SectionBadge";

const AI_CONVERSATION = [
  { role: 'user', text: "How's my LinkedIn ROAS this month?" },
  { 
    role: 'assistant', 
    text: "Your ROAS is up 24% vs last month. I've generated a performance breakdown for your 'Enterprise' campaign below.", 
    hasChart: true 
  },
  { role: 'user', text: "Show me top visitors from SaaS companies." },
  { 
    role: 'assistant', 
    text: "Identified 12 new high-intent SaaS accounts today. Stripe and HubSpot are showing peak engagement patterns.", 
    hasChart: false 
  }
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
    }, 25);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
};

const GeneratedChart = () => {
  const [showBars, setShowBars] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowBars(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const barHeights = [40, 65, 45, 90, 55, 80, 95];

  return (
    <div className="mt-4 w-full bg-white rounded-2xl border border-blue-100 p-5 shadow-xl animate-in zoom-in-95 fade-in duration-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-50 rounded-lg">
            <BarChart3 className="h-4 w-4 text-blue-600" />
          </div>
          <span className="text-sm font-bold text-gray-900">ROAS Performance</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
          <TrendingUp className="h-3 w-3" />
          +24.2%
        </div>
      </div>
      
      <div className="flex items-end gap-2 h-32 mb-4 px-2">
        {barHeights.map((h, i) => (
          <div key={i} className="flex-1 bg-gray-50 rounded-t-md relative overflow-hidden h-full">
            <div 
              className="absolute bottom-0 left-0 w-full bg-blue-600 rounded-t-md transition-all duration-1000 ease-out" 
              style={{ 
                height: showBars ? `${h}%` : '0%', 
                opacity: 0.4 + (i * 0.1),
                transitionDelay: `${i * 100}ms`
              }} 
            />
          </div>
        ))}
      </div>
      
      <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Enterprise Campaign</div>
        <button className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
          View Full Report <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};

const AICopilotSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const [visibleMessages, setVisibleMessages] = React.useState<number>(0);
  const [isTyping, setIsTyping] = React.useState(false);

  React.useEffect(() => {
    if (!inView) return;

    const sequence = async () => {
      setVisibleMessages(0);
      for (let i = 0; i < AI_CONVERSATION.length; i++) {
        if (AI_CONVERSATION[i].role === 'assistant') {
          setIsTyping(true);
          await new Promise(r => setTimeout(r, 1200));
          setIsTyping(false);
        }
        setVisibleMessages(i + 1);
        await new Promise(r => setTimeout(r, 4500));
      }
      await new Promise(r => setTimeout(r, 6000));
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

        {/* Right: Full-Scale Agent Interface */}
        <div className="lg:col-span-7 relative">
          <div className={cn(
            "relative w-full aspect-square max-w-[600px] mx-auto transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-white rounded-full blur-3xl opacity-60" />
            
            {/* Agent Interface Mockup */}
            <div className="absolute inset-0 flex flex-col p-4 md:p-6">
              <div className="flex-1 bg-white/90 backdrop-blur-md rounded-[40px] border border-blue-100 shadow-2xl overflow-hidden flex flex-col">
                
                {/* Agent Header */}
                <div className="px-8 py-5 border-b border-blue-50 flex items-center justify-between bg-blue-50/30">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-gray-900">DemandSense Co-Pilot</div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Intelligence</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors"><Maximize2 className="h-4 w-4" /></button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors"><MoreHorizontal className="h-4 w-4" /></button>
                  </div>
                </div>

                {/* Chat Messages Area */}
                <div className="flex-1 p-8 space-y-8 overflow-y-auto scrollbar-hide">
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
                        "max-w-[85%] p-5 rounded-3xl text-[10px] leading-relaxed shadow-sm",
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

                      {/* Dynamic Chart Generation */}
                      {msg.role === 'assistant' && msg.hasChart && i < visibleMessages && (
                        <div className="w-full max-w-[90%]">
                          <GeneratedChart />
                        </div>
                      )}
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start animate-in fade-in duration-300">
                      <div className="bg-gray-50 border border-gray-100 p-4 rounded-3xl rounded-tl-none flex gap-1.5">
                        <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150" />
                        <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-300" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Input Mock */}
                <div className="p-6 border-t border-blue-50 bg-gray-50/50">
                  <div className="bg-white rounded-2xl border border-blue-100 p-4 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3 flex-1">
                      <Zap className="h-5 w-5 text-blue-400" />
                      <span className="text-sm md:text-base text-gray-400">Ask Co-Pilot to analyze your campaigns...</span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                      <Send className="w-5 h-5" />
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