import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { TrendingDown, Zap, MousePointerClick, Clock, FileText, Activity } from "lucide-react";

const CaptureIntentCard = () => {
  const [signals, setSignals] = useState<number[]>([]);
  const [score, setScore] = useState(35);

  // Simulate incoming signals
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      setSignals(prev => [...prev.slice(-4), id]); // Keep last 5 signals
      
      // Pulse score
      setScore(prev => {
        const next = prev + Math.floor(Math.random() * 15);
        return next > 95 ? 40 : next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:col-span-2 bg-[#0F2043] rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden min-h-[320px] flex flex-col justify-between">
      
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 h-full">
        
        {/* Text Content */}
        <div className="max-w-md">
          <div className="w-14 h-14 rounded-2xl bg-[#FA8C16] flex items-center justify-center text-white mb-6 shadow-lg shadow-orange-900/20">
            <TrendingDown className="h-7 w-7" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Capture Intent Signals</h3>
          <p className="text-lg text-blue-200 leading-relaxed">
            Measure buying readiness through page depth, return visits, and critical page views. We score every interaction to surface high-intent prospects.
          </p>
        </div>

        {/* Animation Container */}
        <div className="flex-1 w-full md:w-auto flex items-center justify-center relative min-h-[200px]">
          
          {/* Central Score Node */}
          <div className="relative z-20">
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-2 border-orange-500/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
              <span className="text-3xl font-bold text-white">{score}</span>
              <span className="text-[10px] text-orange-400 font-medium uppercase tracking-wider">Intent</span>
            </div>
          </div>

          {/* Orbiting Signals */}
          <div className="absolute inset-0">
            {signals.map((id, i) => {
              const icons = [MousePointerClick, Clock, FileText, Activity, Zap];
              const Icon = icons[i % icons.length];
              const angle = (i * 72) * (Math.PI / 180); // Distribute around circle
              const delay = i * 0.5;
              
              return (
                <div
                  key={id}
                  className="absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5 rounded-full bg-[#1A3F89] border border-blue-400/30 flex items-center justify-center text-blue-200 shadow-lg animate-orbit-in opacity-0"
                  style={{
                    animationDelay: `${delay}s`,
                    animationDuration: '4s',
                    animationFillMode: 'forwards'
                  }}
                >
                  <Icon className="h-5 w-5" />
                </div>
              );
            })}
          </div>

          {/* Connecting Lines (Static Visual) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <circle cx="50%" cy="50%" r="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-blue-400 animate-[spin_10s_linear_infinite]" />
            <circle cx="50%" cy="50%" r="120" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-blue-400 animate-[spin_15s_linear_infinite_reverse]" />
          </svg>

        </div>
      </div>

      <style>{`
        @keyframes orbit-in {
          0% { transform: rotate(0deg) translateX(140px) rotate(0deg) scale(0); opacity: 0; }
          20% { opacity: 1; transform: rotate(45deg) translateX(100px) rotate(-45deg) scale(1); }
          80% { opacity: 1; transform: rotate(180deg) translateX(60px) rotate(-180deg) scale(0.8); }
          100% { transform: rotate(360deg) translateX(0px) rotate(-360deg) scale(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default CaptureIntentCard;