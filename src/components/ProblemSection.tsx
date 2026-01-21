"use client";

import * as React from "react";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";

const ProblemSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });

  const rawHTML = `
    <style>
      @keyframes reveal-text {
        from { clip-path: inset(0 0 100% 0); transform: translateY(20px); opacity: 0; }
        to { clip-path: inset(0 0 0 0); transform: translateY(0); opacity: 1; }
      }
      
      .trend-animate {
        opacity: 0;
      }
      
      .is-visible .trend-animate {
        animation: reveal-text 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      .problem-grid-item {
        position: relative;
        padding: 2.5rem;
        border-right: 1px solid #f1f5f9;
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .problem-grid-item:last-child {
        border-right: none;
      }

      .problem-grid-item::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(56, 117, 246, 0.03) 0%, transparent 100%);
        opacity: 0;
        transition: opacity 0.6s ease;
      }

      .problem-grid-item:hover::before {
        opacity: 1;
      }

      .problem-grid-item:hover {
        background: #fff;
      }

      .problem-number {
        font-family: 'DM Mono', monospace;
        font-size: 0.75rem;
        color: #94a3b8;
        margin-bottom: 2rem;
        display: block;
        letter-spacing: 0.1em;
      }

      @media (max-width: 768px) {
        .problem-grid-item {
          border-right: none;
          border-bottom: 1px solid #f1f5f9;
        }
      }
    </style>

    <div class="max-w-[1216px] mx-auto">
      <!-- Header -->
      <div class="mb-24">
        <div class="trend-animate inline-flex items-center gap-3 mb-8" style="animation-delay: 0ms;">
          <div class="w-2 h-2 rounded-full bg-blue-600"></div>
          <span class="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">The Market Reality</span>
        </div>

        <h2 class="trend-animate text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-10" style="animation-delay: 100ms;">
          Sound <span class="text-blue-600">familiar?</span>
        </h2>

        <p class="trend-animate text-2xl text-gray-500 max-w-2xl leading-relaxed" style="animation-delay: 200ms;">
          You're getting clicks and traffic. But without identity, you're just managing a black box of anonymous data.
        </p>
      </div>

      <!-- Minimalist Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 border-y border-slate-100">
        <!-- Column 1 -->
        <div class="trend-animate problem-grid-item group" style="animation-delay: 300ms;">
          <span class="problem-number">01 / NOISE</span>
          <h3 class="text-2xl font-bold text-gray-900 mb-6 tracking-tight">The 'Noise' Problem</h3>
          <p class="text-gray-500 leading-relaxed text-lg">
            Activity is high, but clarity is zero. You can't distinguish between a high-value buyer and a casual browser.
          </p>
        </div>

        <!-- Column 2 -->
        <div class="trend-animate problem-grid-item group" style="animation-delay: 450ms;">
          <span class="problem-number">02 / TRUST</span>
          <h3 class="text-2xl font-bold text-gray-900 mb-6 tracking-tight">The 'Confidence' Gap</h3>
          <p class="text-gray-500 leading-relaxed text-lg">
            Leadership demands proof of impact. You're left defending budgets with vanity metrics instead of revenue data.
          </p>
        </div>

        <!-- Column 3 -->
        <div class="trend-animate problem-grid-item group" style="animation-delay: 600ms;">
          <span class="problem-number">03 / LEAK</span>
          <h3 class="text-2xl font-bold text-gray-900 mb-6 tracking-tight">The 'Waste' Leak</h3>
          <p class="text-gray-500 leading-relaxed text-lg">
            Budget is bleeding into non-ICP audiences. You know you're wasting spend, but you can't see where the hole is.
          </p>
        </div>
      </div>

      <!-- Bottom Insight -->
      <div class="trend-animate mt-24 flex flex-col md:flex-row items-start md:items-center gap-12" style="animation-delay: 800ms;">
        <div class="flex-1">
          <p class="text-xl text-gray-900 font-medium leading-relaxed">
            Without knowing <span class="text-blue-600">WHO</span> is engaging, you're optimizing for clicks instead of customers. DemandSense bridges this gap by turning anonymous signals into verified pipeline.
          </p>
        </div>
        <div class="flex-shrink-0">
          <div class="w-24 h-px bg-slate-200 hidden md:block"></div>
        </div>
      </div>
    </div>
  `;

  return (
    <section 
      ref={ref}
      className={cn(
        "w-full bg-white px-6 md:px-[112px] py-24 lg:py-40 border-b border-gray-100",
        inView && "is-visible"
      )}
      dangerouslySetInnerHTML={{ __html: rawHTML }}
    />
  );
};

export default ProblemSection;