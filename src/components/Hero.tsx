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
  Sparkles
} from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const VERBS = ["find", "reach", "optimize", "convert", "prove"];

const Hero = () => {
  const [verbIndex, setVerbIndex] = React.useState(0);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.1 });

  // Handle mouse movement for parallax
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 30; 
      const y = (clientY / innerHeight - 0.5) * 30;
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

  return (
    <section 
      ref={ref}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white"
    >
      {/* 2026 Animated Brand Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-[120px] animate-aurora-1"
          style={{ 
            background: 'radial-gradient(circle, #3875F6 0%, transparent 70%)',
            top: '-10%',
            left: '5%'
          }}
        />
        <div 
          className="absolute w-[700px] h-[700px] rounded-full opacity-15 blur-[100px] animate-aurora-2"
          style={{ 
            background: 'radial-gradient(circle, #FA8C16 0%, transparent 70%)',
            bottom: '-5%',
            right: '0%'
          }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container relative z-10 max-w-[1400px] mx-auto px-6">
        
        {/* Floating Metric Pillars - Repositioned to avoid text overlap */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          
          {/* 1. WebID Pillar: Top Left - Pushed further left and up */}
          <div className={cn(
            "absolute top-[12%] left-[2%] transition-all duration-1000 ease-out animate-float-slow",
            inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
          )} style={{ 
            transitionDelay: '400ms',
            transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)` 
          }}>
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-4 shadow-[0_8px_32px_rgba(56,117,246,0.1)] border border-white/60 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 shadow-lg shadow-blue-500/20 flex items-center justify-center">
                <ScanFace className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">12,450</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Visitors Identified</div>
              </div>
            </div>
          </div>

          {/* 2. Audience Explorer Pillar: Top Right - Pushed further right and up */}
          <div className={cn(
            "absolute top-[18%] right-[2%] transition-all duration-1000 ease-out animate-float-medium",
            inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
          )} style={{ 
            transitionDelay: '600ms',
            transform: `translate(${mousePos.x * -1.2}px, ${mousePos.y * -1.2}px)` 
          }}>
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-4 shadow-[0_8px_32px_rgba(168,85,247,0.1)] border border-white/60 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600 shadow-lg shadow-purple-500/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">94%</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Match Rate</div>
              </div>
            </div>
          </div>

          {/* 3. Ads Optimization Pillar: Middle Left - Pushed further left */}
          <div className={cn(
            "absolute top-[55%] left-[-4%] transition-all duration-1000 ease-out animate-float-fast",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )} style={{ 
            transitionDelay: '800ms',
            transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)` 
          }}>
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-4 shadow-[0_8px_32px_rgba(250,140,22,0.1)] border border-white/60 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500 shadow-lg shadow-orange-500/20 flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">$4,200</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Monthly Saved</div>
              </div>
            </div>
          </div>

          {/* 4. Revenue Attribution Pillar: Middle Right - Pushed further right */}
          <div className={cn(
            "absolute top-[62%] right-[-4%] transition-all duration-1000 ease-out animate-float-slow",
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )} style={{ 
            transitionDelay: '1000ms',
            transform: `translate(${mousePos.x * -1.8}px, ${mousePos.y * -1.8}px)` 
          }}>
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-4 shadow-[0_8px_32px_rgba(16,185,129,0.1)] border border-white/60 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/20 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">5.8x</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">ROAS Proven</div>
              </div>
            </div>
          </div>

          {/* 5. AI Co-Pilot Pillar: Bottom Left - Pushed down and left */}
          <div className={cn(
            "absolute bottom-[8%] left-[5%] transition-all duration-1000 ease-out animate-float-medium",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )} style={{ 
            transitionDelay: '1200ms',
            transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` 
          }}>
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-4 shadow-[0_8px_32px_rgba(79,70,229,0.1)] border border-white/60 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 shadow-lg shadow-indigo-500/20 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">Auto-Report</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">AI Insights</div>
              </div>
            </div>
          </div>
        </div>

        {/* Headline Area */}
        <div className="flex flex-col items-center text-center relative z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50/50 backdrop-blur-sm border border-gray-100 shadow-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
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
      </div>

      <style>{`
        @keyframes aurora-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(5%, 5%) scale(1.05); }
          66% { transform: translate(-2%, 3%) scale(0.95); }
        }
        @keyframes aurora-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-5%, -5%) scale(1.1); }
          66% { transform: translate(2%, -3%) scale(0.9); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;