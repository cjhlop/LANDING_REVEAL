"use client";

import * as React from "react";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";

const ProblemSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });

  const rawHTML = `
    <style>
      @keyframes problem-fade-up {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .problem-animate {
        opacity: 0;
      }
      
      .is-visible .problem-animate {
        animation: problem-fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      .trend-block {
        position: relative;
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        border-radius: 24px;
        background: #ffffff;
        border: 1px solid #f1f5f9;
      }
      
      @media (min-width: 1024px) {
        .trend-block:hover {
          transform: translateY(-12px);
          border-color: #3875F6;
          box-shadow: 0 40px 80px -20px rgba(56, 117, 246, 0.12);
        }
      }

      .trend-icon-wrapper {
        position: relative;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 14px;
        margin-bottom: 24px;
        overflow: hidden;
      }

      @media (min-width: 768px) {
        .trend-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          margin-bottom: 32px;
        }
      }

      .trend-icon-bg {
        position: absolute;
        inset: 0;
        opacity: 0.1;
        transition: opacity 0.3s ease;
      }

      .trend-block:hover .trend-icon-bg {
        opacity: 0.2;
      }

      .trend-number {
        position: absolute;
        top: 24px;
        right: 24px;
        font-family: 'Inter', sans-serif;
        font-weight: 800;
        font-size: 32px;
        line-height: 1;
        color: #f1f5f9;
        transition: color 0.3s ease;
        pointer-events: none;
      }

      @media (min-width: 768px) {
        .trend-number {
          top: 32px;
          right: 32px;
          font-size: 48px;
        }
      }

      .trend-block:hover .trend-number {
        color: #eff6ff;
      }
    </style>

    <div class="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 md:mb-20">
        <div class="problem-animate flex justify-center mb-6" style="animation-delay: 0ms;">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest shadow-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            The Challenge
          </div>
        </div>

        <h2 class="problem-animate text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6 tracking-tight leading-[1.1]" style="animation-delay: 100ms;">
          Sound <span class="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">familiar?</span>
        </h2>

        <p class="problem-animate text-lg sm:text-xl text-gray-600 leading-relaxed" style="animation-delay: 200ms;">
          You're getting clicks, impressions, and website traffic. But are your ICP actually reacting — or is it just noise?
        </p>
      </div>

      <!-- Three Columns -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <!-- Column 1 -->
        <div class="problem-animate trend-block p-6 sm:p-8 lg:p-10" style="animation-delay: 300ms;">
          <div class="trend-number">01</div>
          <div class="trend-icon-wrapper">
            <div class="trend-icon-bg bg-blue-600"></div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3875F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 10v3a1 1 0 0 0 1 1h1.5a.5.5 0 0 1 .5.5v1.5a1 1 0 0 0 1 1h3"/><path d="M17 7h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1.5a.5.5 0 0 0-.5.5v1.5a1 1 0 0 1-1 1h-3"/><path d="M14 17h-4"/><path d="M14 7h-4"/><path d="M10 10h4v4h-4z"/></svg>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight">The 'Noise' Problem</h3>
          <p class="text-gray-500 leading-relaxed text-base sm:text-lg">
            Activity is high, but clarity is low. You're seeing clicks and visits without knowing if they're high-value prospects or just digital static.
          </p>
        </div>

        <!-- Column 2 -->
        <div class="problem-animate trend-block p-6 sm:p-8 lg:p-10" style="animation-delay: 450ms;">
          <div class="trend-number">02</div>
          <div class="trend-icon-wrapper">
            <div class="trend-icon-bg bg-orange-500"></div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight">The 'Confidence' Gap</h3>
          <p class="text-gray-500 leading-relaxed text-base sm:text-lg">
            When leadership asks for proof of impact, "gut feeling" isn't enough. You need hard data to bridge the gap between spend and revenue.
          </p>
        </div>

        <!-- Column 3 -->
        <div class="problem-animate trend-block p-6 sm:p-8 lg:p-10" style="animation-delay: 600ms;">
          <div class="trend-number">03</div>
          <div class="trend-icon-wrapper">
            <div class="trend-icon-bg bg-emerald-500"></div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight">The 'Waste' Leak</h3>
          <p class="text-gray-500 leading-relaxed text-base sm:text-lg">
            Budget is leaking into non-ICP audiences. Without precise identification, you're paying for impressions that will never convert.
          </p>
        </div>
      </div>

      <!-- Bottom Summary -->
      <div class="problem-animate mt-12 md:mt-20 p-6 sm:p-10 rounded-[24px] sm:rounded-[32px] bg-slate-900 text-center relative overflow-hidden" style="animation-delay: 800ms;">
        <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(#3875F6 1px, transparent 1px); background-size: 24px 24px;"></div>
        <p class="text-lg sm:text-xl text-blue-100 font-medium max-w-3xl mx-auto leading-relaxed relative z-10">
          Without knowing <strong>WHO</strong> is engaging, you can't tell if campaigns resonate with the right people or just burn budget on the wrong ones.
        </p>
      </div>
    </div>
  `;

  return (
    <section 
      ref={containerRef => {
        if (containerRef) {
          // @ts-ignore
          ref.current = containerRef;
        }
      }}
      className={cn(
        "w-full bg-white py-16 md:py-24 lg:py-32 border-b border-gray-100",
        inView && "is-visible"
      )}
      dangerouslySetInnerHTML={{ __html: rawHTML }}
    />
  );
};

export default ProblemSection;