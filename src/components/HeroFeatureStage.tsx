"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { 
  ScanFace, 
  Users, 
  Zap, 
  TrendingUp, 
  Bot, 
  Linkedin,
  MousePointer2,
  ShieldCheck,
  BarChart3
} from "lucide-react";

type Feature = {
  id: number;
  title: string;
  tagline: string;
  icon: React.ElementType;
  color: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    id: 0,
    title: "WebID™",
    tagline: "See who's on your site, then convert them on LinkedIn.",
    icon: ScanFace,
    color: "blue",
    description: "Identify anonymous visitors and sync them directly to LinkedIn Campaign Manager."
  },
  {
    id: 1,
    title: "Audience Explorer",
    tagline: "Build audiences that actually convert on LinkedIn.",
    icon: Users,
    color: "purple",
    description: "Access our 280M+ B2B database to build laser-targeted ICP lists."
  },
  {
    id: 2,
    title: "Ads Optimization",
    tagline: "Stop wasting LinkedIn budget.",
    icon: Zap,
    color: "orange",
    description: "Smart scheduling, frequency caps, and automated budget monitoring."
  },
  {
    id: 3,
    title: "Revenue Attribution",
    tagline: "Finally prove LinkedIn ROI.",
    icon: TrendingUp,
    color: "emerald",
    description: "Connect LinkedIn spend to closed-won revenue and true ROAS."
  },
  {
    id: 4,
    title: "AI Co-Pilot",
    tagline: "AI-powered LinkedIn insights.",
    icon: Bot,
    color: "indigo",
    description: "Chat with your data to generate dashboards and optimization strategies."
  }
];

const HeroFeatureStage = () => {
  const [featureIndex, setFeatureIndex] = React.useState(0);

  // Cycle Features
  React.useEffect(() => {
    const interval = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % FEATURES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white pb-24">
      <div className="relative w-full max-w-5xl mx-auto px-6">
        {/* Feature Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {FEATURES.map((f, i) => (
            <button
              key={f.title}
              onClick={() => setFeatureIndex(i)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                featureIndex === i 
                  ? "bg-white border-gray-200 shadow-md text-gray-900 scale-105" 
                  : "bg-transparent border-transparent text-gray-400 hover:text-gray-600"
              )}
            >
              <f.icon className={cn("h-4 w-4", featureIndex === i ? "text-blue-600" : "text-gray-400")} />
              {f.title}
            </button>
          ))}
        </div>

        {/* The Stage */}
        <div className="relative aspect-[16/9] w-full bg-white rounded-[32px] border border-gray-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50" />
          
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
            {/* Left: Feature Copy */}
            <div className="flex-1 space-y-6 z-20">
              <div className="space-y-2">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                  {FEATURES[featureIndex].tagline}
                </h3>
                <p className="text-lg text-gray-500 leading-relaxed">
                  {FEATURES[featureIndex].description}
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-400">Trusted by 1,000+ teams</span>
              </div>
            </div>

            {/* Right: The Animation Stage */}
            <div className="flex-1 w-full h-full relative min-h-[300px] flex items-center justify-center z-10">
              {featureIndex === 0 && (
                <div className="relative w-full h-full flex items-center justify-center animate-in zoom-in-95 duration-700">
                  <div className="relative w-64 h-64 bg-blue-50 rounded-3xl border border-blue-100 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/50 to-transparent" />
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-blue-600 animate-bounce">
                        <MousePointer2 className="h-8 w-8" />
                      </div>
                      <div className="h-2 w-32 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 animate-[shimmer_2s_infinite]" style={{ width: '60%' }} />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center text-white shadow-lg animate-pulse">
                      <Linkedin className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              )}

              {featureIndex === 1 && (
                <div className="relative w-full h-full flex items-center justify-center animate-in slide-in-from-right-8 duration-700">
                  <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                    {[...Array(9)].map((_, i) => (
                      <div 
                        key={i} 
                        className="aspect-square bg-white rounded-xl border border-gray-100 shadow-sm flex items-center justify-center transition-all duration-500"
                        style={{ transitionDelay: `${i * 50}ms`, opacity: i % 2 === 0 ? 1 : 0.4 }}
                      >
                        <div className={cn("w-6 h-6 rounded-full", i === 4 ? "bg-purple-500" : "bg-gray-100")} />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-48 h-48 border-2 border-purple-500/20 rounded-full animate-ping" />
                  </div>
                </div>
              )}

              {featureIndex === 2 && (
                <div className="relative w-full h-full flex items-center justify-center animate-in fade-in duration-700">
                  <div className="w-full max-w-xs space-y-4">
                    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-lg flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center"><Zap className="h-4 w-4" /></div>
                        <span className="text-sm font-bold">Frequency Cap</span>
                      </div>
                      <div className="h-4 w-12 bg-green-100 text-green-700 text-[10px] font-bold rounded flex items-center justify-center">ACTIVE</div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-lg flex items-center justify-between translate-x-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center"><BarChart3 className="h-4 w-4" /></div>
                        <span className="text-sm font-bold">Budget Guard</span>
                      </div>
                      <ShieldCheck className="h-5 w-5 text-blue-500" />
                    </div>
                  </div>
                </div>
              )}

              {featureIndex === 3 && (
                <div className="relative w-full h-full flex items-center justify-center animate-in zoom-in-110 duration-700">
                  <div className="relative">
                    <div className="text-6xl font-black text-gray-900 tracking-tighter">4.2x</div>
                    <div className="text-sm font-bold text-emerald-600 uppercase tracking-widest text-center">ROAS Proven</div>
                    <div className="absolute -top-8 -right-8 w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 animate-bounce">
                      <TrendingUp className="h-8 w-8" />
                    </div>
                  </div>
                </div>
              )}

              {featureIndex === 4 && (
                <div className="relative w-full h-full flex items-center justify-center animate-in slide-in-from-bottom-8 duration-700">
                  <div className="w-full max-w-sm bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
                    <div className="p-3 border-b border-gray-800 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="flex justify-end">
                        <div className="bg-blue-600 text-white text-xs p-2 rounded-lg rounded-tr-none max-w-[80%]">
                          How is my LinkedIn ROAS this month?
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gray-800 text-gray-300 text-xs p-2 rounded-lg rounded-tl-none max-w-[80%] flex items-start gap-2">
                          <Bot className="h-3 w-3 mt-0.5 text-blue-400" />
                          <span>Your ROAS is up 24% vs last month. I recommend increasing budget on the "Enterprise" campaign.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 h-1 bg-gray-100 w-full">
            <div 
              key={featureIndex}
              className="h-full bg-blue-600 transition-all duration-[8000ms] ease-linear"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFeatureStage;