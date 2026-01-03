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

  // Generate stable random values for the data bursts so they don't reset on re-renders
  const bursts = React.useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      top: 10 + (i * 12),
      delay: i * 0.8,
      duration: 4 + Math.random() * 3
    }));
  }, []);

  // Handle mouse movement for parallax
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 40; 
      const y = (clientY / innerHeight - 0.5) * 40;
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
      {/* High-Energy Digital Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base Grid - Increased visibility (opacity 0.2) */}
        <div 
          className="absolute inset-0 opacity-[0.2]"
          style={{ 
            backgroundImage: `linear-gradient(#3875F6 1.5px, transparent 1.5px), linear-gradient(90deg, #3875F6 1.5px, transparent 1.5px)`,
            backgroundSize: '80px 80px',
            transform: `perspective(1000px) rotateX(60deg) translateZ(0)`,
            transformOrigin: 'center top'
          }}
        />
        
        {/* Radial Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_90%)]" />

        {/* Animated Data Bursts - Stabilized */}
        <div className="absolute inset-0 overflow-hidden">
          {bursts.map((burst) => (
            <div 
              key={burst.id}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60 animate-data-burst"
              style={{
                width: '400px',
                top: `${burst.top}%`,
                left: '-400px',
                animationDelay: `${burst.delay}s`,
                animationDuration: `${burst.duration}s`,
                willChange: 'transform'
              }}
            />
          ))}
        </div>

        {/* Brand Glows - Smooth Parallax */}
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-[120px] transition-transform duration-1000 ease-out"
          style={{ 
            background: 'radial-gradient(circle, #3875F6 0%, transparent 70%)',
            top: '0%',
            left: '0%',
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`
          }}
        />
        <div 
          className="absolute w-[700px] h-[700px] rounded-full opacity-15 blur-[100px] transition-transform duration-1000 ease-out"
          style={{ 
            background: 'radial-gradient(circle, #FA8C16 0%, transparent 70%)',
            bottom: '0%',
            right: '0%',
            transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`
          }}
        />
      </div>

      <div className="container relative z-10 max-w-[1216px] mx-auto px-6">
        
        {/* Floating Metric Pillars */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          
          {/* WebID Pillar */}
          <div className={cn(
            "absolute top-[12%] left-[2%] transition-all duration-1000 ease-out animate-float-slow",
            inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
          )} style={{ 
            transitionDelay: '400ms',
            transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)` 
          }}>
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/80 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 shadow-lg shadow-blue-500/20 flex items-center justify-center">
                <ScanFace className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">12,450</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Visitors Identified</div>
              </div>
            </div>
          </div>

          {/* Audience Explorer Pillar */}
          <div className={cn(
            "absolute top-[18%] right-[5%] transition-all duration-1000 ease-out animate-float-medium",
            inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
          )} style={{ 
            transitionDelay: '600ms',
            transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px)` 
          }}>
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/80 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600 shadow-lg shadow-purple-500/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">94%</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Match Rate</div>
              </div>
            </div>
          </div>

          {/* Ads Optimization Pillar */}
          <div className={cn(
            "absolute top-[65%] left-[-5%] transition-all duration-1000 ease-out animate-float-fast",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )} style={{ 
            transitionDelay: '800ms',
            transform: `translate(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px)` 
          }}>
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/80 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500 shadow-lg shadow-orange-500/20 flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">$4,200</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Monthly Saved</div>
              </div>
            </div>
          </div>

          {/* Revenue Attribution Pillar */}
          <div className={cn(
            "absolute top-[70%] right-[-5%] transition-all duration-1000 ease-out animate-float-slow",
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )} style={{ 
            transitionDelay: '1000ms',
            transform: `translate(${mousePos.x * -1.4}px, ${mousePos.y * -1.4}px)` 
          }}>
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/80 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/20 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">5.8x</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">ROAS Proven</div>
              </div>
            </div>
          </div>
        </div>

        {/* Headline Area */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 shadow-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Sparkles className="h-3 w-3 text-blue-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">The Future of B2B Growth</span>
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
        @keyframes data-burst {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateX(calc(100vw + 400px)); opacity: 0; }
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
        .animate-data-burst { animation: data-burst linear infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease<think>[REDACTED]</think>-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;