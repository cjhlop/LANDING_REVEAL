"use client";

import * as React from "react";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";

const ProblemSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });

  const rawHTML = `
    <style>
      @keyframes problem-fade-up {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .problem-animate {
        opacity: 0;
      }
      
      .is-visible .problem-animate {
        animation: problem-fade-up 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
      }

      .problem-card {
        transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
      }
      
      .problem-card:hover {
        transform: translateY(-8px);
        background: white;
        box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.08);
        border-color: rgba(56, 117, 246, 0.2);
      }
    </style>

    <div class="max-w-[1216px] mx-auto">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <div class="problem-animate flex justify-center mb-6" style="animation-delay: 0ms;">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest shadow-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            The Challenge
          </div>
        </div>

        <h2 class="problem-animate text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-8 mb-6 tracking-tight leading-[1.1]" style="animation-delay: 100ms;">
          Sound <span class="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">familiar?</span>
        </h2>

        <p class="problem-animate text-xl text-gray-600 leading-relaxed" style="animation-delay: 200ms;">
          You're getting clicks, impressions, and website traffic. But are your ICP actually reacting — or is it just noise?
        </p>
      </div>

      <!-- Three Columns -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <!-- Column 1 -->
        <div class="problem-animate problem-card group relative p-8 rounded-3xl border border-gray-100 bg-gray-50/50" style="animation-delay: 300ms;">
          <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-blue-100 text-blue-600 transition-transform group-hover:scale-110">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">The 'Noise' Problem</h3>
          <p class="text-gray-600 leading-relaxed">
            You're seeing activity — clicks, impressions, website visits — but you can't tell if it's your ICP reacting or just noise.
          </p>
        </div>

        <!-- Column 2 -->
        <div class="problem-animate problem-card group relative p-8 rounded-3xl border border-gray-100 bg-gray-50/50" style="animation-delay: 450ms;">
          <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-orange-100 text-orange-600 transition-transform group-hover:scale-110">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m12 8 4 4"/><path d="m16 8-4 4"/></svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">The 'Confidence' Gap</h3>
          <p class="text-gray-600 leading-relaxed">
            Leadership asks "Is LinkedIn working?" and you can't give a confident answer backed by real data.
          </p>
        </div>

        <!-- Column 3 -->
        <div class="problem-animate problem-card group relative p-8 rounded-3xl border border-gray-100 bg-gray-50/50" style="animation-delay: 600ms;">
          <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-emerald-100 text-emerald-600 transition-transform group-hover:scale-110">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">The 'Waste' Leak</h3>
          <p class="text-gray-600 leading-relaxed">
            You know you're wasting budget somewhere, but you can't pinpoint exactly where or on whom.
          </p>
        </div>
      </div>

      <!-- Bottom Summary -->
      <div class="problem-animate mt-20 p-8 rounded-3xl bg-blue-50/50 border border-blue-100 text-center" style="animation-delay: 800ms;">
        <p class="text-lg text-blue-900 font-medium max-w-3xl mx-auto leading-relaxed">
          Without knowing <strong>WHO</strong> is engaging, you can't tell if campaigns resonate with the right people or just burn budget on the wrong ones. And you can't prove ROI if the activity isn't coming from accounts that could actually buy.
        </p>
      </div>
    </div>
  `;

  return (
    <section 
      ref={ref}
      className={cn(
        "w-full bg-white px-6 md:px-[112px] py-24 lg:py-32 border-b border-gray-100",
        inView && "is-visible"
      )}
      dangerouslySetInnerHTML={{ __html: rawHTML }}
    />
  );
};

export default ProblemSection;