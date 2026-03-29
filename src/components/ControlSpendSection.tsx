"use client";

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import { Clock, ShieldCheck, Target, CheckCircle2 } from "lucide-react";

const ControlSpendSection = () => {
  const navigate = useNavigate();
  const [containerRef, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });

  const features = [
    {
      title: "Schedule when your ads run",
      desc: "Choose days and hours so your budget is spent when your audience is active.",
      icon: Clock,
      color: "blue"
    },
    {
      title: "Set frequency and budget limits",
      desc: "Control how often the same companies see your ads and prevent budget concentration.",
      icon: ShieldCheck,
      color: "orange"
    },
    {
      title: "Reach the best-fit companies",
      desc: "Exclude customers and irrelevant accounts so your budget goes to companies that can become pipeline.",
      icon: Target,
      color: "emerald"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="w-full bg-white px-6 md:px-[112px] py-16 md:py-32 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className={cn(
          "lg:col-span-5 space-y-8 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest">
            CONTROL YOUR SPEND
          </div>

          <h2 className="text-[40px] font-bold text-gray-900 tracking-tight leading-[1.1]">
            Control how your LinkedIn <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">ad budget is actually spent</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Set the rules once and your campaigns follow them. Your budget runs when it matters and reaches the companies you want.
          </p>

          <div className="space-y-3 max-w-xl mx-auto lg:mx-0">
            {features.map((item, i) => (
              <div 
                key={i}
                className={cn(
                  "group relative flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-white transition-all duration-500 hover:border-blue-200 hover:shadow-sm",
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                )}
                style={{ transitionDelay: `${(i * 150) + 400}ms` }}
              >
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110",
                  item.color === 'blue' ? "bg-blue-50 text-blue-600" :
                  item.color === 'orange' ? "bg-orange-50 text-orange-600" :
                  "bg-emerald-50 text-emerald-600"
                )}>
                  <item.icon className="size-4" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900">{item.title}</h4>
                  <p className="text-[10px] sm:text-xs text-gray-500 leading-tight">{item.desc}</p>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="size-3.5 text-blue-600" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
              className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all"
            >
              Try It Now
            </button>
            <button 
              onClick={() => navigate("/linkedin-ads-optimization")}
              className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all"
            >
              Read More
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 flex justify-center">
          <div className={cn(
            "relative w-full transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            {/* Background Gradients */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/20 blur-[100px] rounded-full -z-10" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-200/20 blur-[100px] rounded-full -z-10" />
            
            <div className="magic-border" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
              <div className="rounded-[inherit] border border-gray-200 bg-white shadow-2xl overflow-hidden">
                <img 
                  src="/src/assets/ad-performance.png" 
                  alt="LinkedIn Ad Performance Dashboard" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ControlSpendSection;