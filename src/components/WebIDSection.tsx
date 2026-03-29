"use client";

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";

const WebIDSection = () => {
  const navigate = useNavigate();
  const [containerRef, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section 
      ref={containerRef}
      className="w-full bg-[#F5F9FF] px-6 md:px-[112px] py-16 md:py-32 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-7 flex justify-center lg:order-1">
          <div className="w-full flex justify-center relative">
            <div className="absolute inset-0 bg-blue-400/10 blur-[100px] rounded-full -z-10" />
            
            <div className="magic-border" style={{ "--magic-radius": "1rem" } as React.CSSProperties}>
              <div className="rounded-[inherit] border border-gray-200 bg-[#F5F9FF] shadow-2xl overflow-hidden">
                <img 
                  src="/src/assets/reveal-2.png" 
                  alt="Reveal Intent Dashboard" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={cn(
          "lg:col-span-5 space-y-8 transition-all duration-700 lg:order-2",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest">
            WebID™ Technology
          </div>

          <h2 className="text-[40px] font-bold text-gray-900 tracking-tight leading-[1.1]">
            Put a name behind every <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">click and visit</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Your ads and website get engagement every day. Most of it stays anonymous. DemandSense reveals the audience behind that activity, giving you a real audience to optimize against.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
                </div>
                <h4 className="font-bold text-blue-600">Individual ID</h4>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Names, titles, and verified work emails of your visitors.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="22"/><line x1="15" y1="22" x2="15" y2="22"/></svg>
                </div>
                <h4 className="font-bold text-orange-600">Company Intel</h4>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Firmographic data, tech stacks, and revenue ranges.
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
              onClick={() => navigate("/website-visitors")}
              className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all"
            >
              Read More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WebIDSection;