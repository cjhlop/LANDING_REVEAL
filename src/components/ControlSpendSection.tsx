"use client";

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import { Clock, ShieldCheck, Target } from "lucide-react";

const ControlSpendSection = () => {
  const navigate = useNavigate();
  const [containerRef, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });

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

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
            Control how your LinkedIn <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">ad budget is actually spent</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Set the rules once and your campaigns follow them. Your budget runs when it matters and reaches the companies you want.
          </p>

          <div className="space-y-8 pt-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-blue-600">Schedule when your ads run</h4>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Choose days and hours so your budget is spent when your audience is active.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-orange-600">Set frequency and budget limits</h4>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Control how often the same companies see your ads and prevent budget concentration.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-emerald-600">Reach the best-fit companies</h4>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Exclude customers and irrelevant accounts so your budget goes to companies that can become pipeline.
              </p>
            </div>
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
            <div className="magic-border" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
              <div className="rounded-[inherit] border border-gray-200 bg-white shadow-2xl overflow-hidden">
                <img 
                  src="/media/ads-scheduling.webp" 
                  alt="LinkedIn Ad Scheduling Controls" 
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