"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ScanFace, 
  Users, 
  Zap, 
  TrendingUp, 
  Bot, 
  Linkedin,
  MousePointer2,
  ShieldCheck,
  BarChart3,
  DollarSign,
  Target,
  FileText,
  Sparkles
} from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const VERBS = ["find", "reach", "optimize", "convert", "prove"];

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

const Hero = () => {
  const [verbIndex, setVerbIndex] = React.useState(0);
  const [featureIndex, setFeatureIndex] = React.useState(0);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.1 });

  // Handle mouse movement for parallax
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20; // Max 20px movement
      const y = (clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Cycle Headline Verbs
  React.useEffect(() => {
    const interval = setInterval(() => {
      setVerbIndex((prev) => (prev + 1) % VERBS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Cycle Features
  React.useEffect(() => {
    const interval = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % FEATURES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen w-full flex flex-col items-center justify-start pt-32 pb-20 overflow-hidden bg-white"
    >
      {/* 2026 Animated Brand Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] animate-aurora-1"
          style={{ 
            background: 'radial-gradient(circle, #3875F6 0%, transparent 70%)',
            top: '-10%',
            left: '10%'
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[100px] animate-aurora-2"
          style={{ 
            background: 'radial-gradient(circle, #FA8C16 0%, transparent 70%)',
            bottom: '10%',
            right: '5%'
          }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="container relative z-10 max-w-[1216px] mx-auto px-6">
        
        {/* Floating Metric Pillars - Product Specific & Interactive */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          
          {/* WebID Pillar: Top Left */}
          <div className={cn(
            "absolute top-10 left-0 transition-all duration-1000 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          )} style={{ 
            transitionDelay: '600ms',
            transform: `translate(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px)` 
          }}>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-blue-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <ScanFace className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">12,450</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Visitors Identified</div>
              </div>
            </div>
          </div>

          {/* Audience Explorer Pillar: Top Right */}
          <div className={cn(
            "absolute top-20 right-0 transition-all duration-1000 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          )} style={{ 
            transitionDelay: '800ms',
            transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px)` 
          }}>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-purple-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">94%</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Audience Match Rate</div>
              </div>
            </div>
          </div>

          {/* Ads Optimization Pillar: Middle Left */}
          <div className={cn(
            "absolute top-1/2 -translate-y-1/2 left-[-40px] transition-all duration-1000 ease-out",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )} style={{ 
            transitionDelay: '1000ms',
            transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)` 
          }}>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-orange-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">$4,200</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Monthly Cost Saved</div>
              </div>
            </div>
          </div>

          {/* Revenue Attribution Pillar: Middle Right */}
          <div className={cn(
            "absolute top-1/2 -translate-y-1/2 right-[-40px] transition-all duration-1000 ease-out",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )} style={{ 
            transitionDelay: '1200ms',
            transform: `translate(${mousePos.x * -2.5}px, ${mousePos.y * -2.5}px)` 
          }}>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-emerald-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">5.8x</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">ROAS Generated</div>
              </div>
            </div>
          </div>

          {/* AI Co-Pilot Pillar: Bottom Center-ish */}
          <div className={cn(
            "absolute bottom-10 left-1/4 transition-all duration-1000 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )} style={{ 
            transitionDelay: '1400ms',
            transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)` 
          }}>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-indigo-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">Auto-Report</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">AI Insights Generated</div>
              </div>
            </div>
          </div>
        </div>

        {/* Headline Area */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100 shadow-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">The Future of B2B Growth</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-8">
            LinkedIn Ads that <br className="hidden md:block" />
            <span className="inline-flex flex-col h-[1.1em] overflow-hidden align-bottom">
              <span 
                className="flex flex-col transition-transform duration-700 ease-in-out"
                style={{ transform: `translateY(-${verbIndex * 20}%)` }}
              >
                {VERBS.map((verb) => (
                  <span
                    key={verb}
                    className="h-[1.1em] bg-gradient-to-r from-[#3875F6] to-[#60A5FA] bg-clip-text text-transparent"
                  >
                    {verb}
                  </span>
                ))}
              </span>
            </span>
            {" "}— DemandSense
          </h1>

          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            The ultimate LinkedIn-centric business growth platform. Identify, target, and optimize your way to predictable revenue.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Button variant="hero" size="hero" className="group shadow-xl shadow-blue-500/20">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="hero">
              Book a Demo
            </Button>
          </div>
        </div>

        {/* Feature Stage */}
        <div className="relative w-full max-w-5xl mx-auto mt-12">
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
      </div>

      <style>{`
        @keyframes aurora-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(10%, 10%) scale(1.1); }
          66% { transform: translate(-5%, 5%) scale(0.9); }
        }
        @keyframes aurora-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-10%, -10%) scale(1.2); }
          66% { transform: translate(5%, -5%) scale(0.8); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;