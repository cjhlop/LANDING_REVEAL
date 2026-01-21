"use client";

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";

const WebIDSection = () => {
  const navigate = useNavigate();
  const [containerRef, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });
  const htmlRef = React.useRef<HTMLDivElement>(null);

  // Vanilla JS logic for radar target detection
  React.useEffect(() => {
    if (!inView || !htmlRef.current) return;

    const sweep = htmlRef.current.querySelector('.radar-sweep') as HTMLElement;
    const targets = htmlRef.current.querySelectorAll('.radar-target');
    
    const updateRadar = () => {
      if (!sweep) return;
      
      const style = window.getComputedStyle(sweep);
      const matrix = new DOMMatrix(style.transform);
      const angle = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);
      const normalizedAngle = (angle < 0 ? angle + 360 : angle);

      targets.forEach((target) => {
        const targetAngle = parseFloat(target.getAttribute('data-angle') || '0');
        const diff = (normalizedAngle - targetAngle + 360) % 360;

        if (diff < 20) {
          target.classList.add('is-active');
        } else {
          target.classList.remove('is-active');
        }
      });
    };

    const interval = setInterval(updateRadar, 50);
    return () => clearInterval(interval);
  }, [inView]);

  const rawHTML = `
    <style>
      @keyframes radar-rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes target-ping {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(2.5); opacity: 0; }
      }
      @keyframes spin-slow {
        from { --rotate: 0deg; }
        to { --rotate: 360deg; }
      }
      
      .radar-wrapper {
        position: relative;
        width: 100%;
        max-width: 500px;
        aspect-ratio: 1/1;
        overflow: visible; 
      }

      .radar-glow {
        position: absolute;
        inset: -20px;
        border-radius: 50%;
        background: conic-gradient(from var(--rotate, 0deg), #3875F6, #A3C7FF, #FA8C16, #A3C7FF, #3875F6);
        filter: blur(40px);
        opacity: 0.4;
        animation: spin 8s linear infinite;
        z-index: 0;
      }

      .radar-magic-border {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        padding: 3px;
        background: conic-gradient(from var(--rotate, 0deg), #3875F6, #A3C7FF, #FA8C16, #A3C7FF, #3875F6);
        animation: spin 5s linear infinite;
        z-index: 1;
      }

      .radar-container {
        position: relative;
        width: 100%;
        height: 100%;
        background: white;
        border-radius: 50%;
        z-index: 2;
        overflow: visible; 
      }

      .radar-inner-clip {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        overflow: hidden;
        background: white;
        z-index: 1;
      }

      .radar-grid {
        position: absolute;
        inset: 0;
        background-image: 
          radial-gradient(circle, #e2e8f0 1px, transparent 1px),
          linear-gradient(to right, #f1f5f9 1px, transparent 1px),
          linear-gradient(to bottom, #f1f5f9 1px, transparent 1px);
        background-size: 15% 15%, 20% 20%, 20% 20%;
      }

      .radar-circles {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        border: 1px solid #f1f5f9;
        pointer-events: none;
      }
      .radar-circles::before {
        content: '';
        position: absolute;
        inset: 20%;
        border-radius: 50%;
        border: 1px solid #f1f5f9;
      }
      .radar-circles::after {
        content: '';
        position: absolute;
        inset: 40%;
        border-radius: 50%;
        border: 1px solid #f1f5f9;
      }

      .radar-sweep {
        position: absolute;
        inset: 0;
        background: conic-gradient(from 0deg, transparent 90%, rgba(56, 117, 246, 0.15) 100%);
        animation: radar-rotate 6s linear infinite;
        z-index: 10;
      }

      .radar-target {
        position: absolute;
        width: 44px;
        height: 44px;
        transform: translate(-50%, -50%);
        z-index: 20;
        opacity: 0.3;
        transition: opacity 0.4s ease, transform 0.3s ease;
        cursor: pointer;
      }

      .radar-target.is-active {
        opacity: 1;
      }

      .radar-target:hover {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.1);
        z-index: 100;
      }

      .radar-target .ping {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        border: 2px solid currentColor;
        opacity: 0;
      }

      .radar-target.is-active .ping {
        animation: target-ping 2s ease-out infinite;
      }

      .target-icon {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        border: 2px solid currentColor;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        position: relative;
        z-index: 2;
      }

      .radar-tooltip {
        position: absolute;
        bottom: 125%;
        left: 50%;
        transform: translateX(-50%) translateY(10px);
        width: 240px;
        background: #1a1f2e;
        border-radius: 12px;
        padding: 16px;
        color: white;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        pointer-events: none;
      }

      .radar-target:hover .radar-tooltip {
        opacity: 1;
        visibility: visible;
        transform: translateX(-50%) translateY(0);
      }

      .radar-tooltip::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border: 8px solid transparent;
        border-top-color: #1a1f2e;
      }

      .tooltip-header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 12px;
        text-align: left;
      }

      .tooltip-icon {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: rgba(255,255,255,0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .tooltip-title {
        font-weight: 700;
        font-size: 14px;
        margin: 0;
        line-height: 1.2;
      }

      .tooltip-sub {
        font-size: 11px;
        color: #94a3b8;
        margin: 2px 0 0 0;
      }

      .tooltip-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 12px;
        border-top: 1px solid rgba(255,255,255,0.1);
        font-size: 10px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .status-label { color: #64748b; }
      .status-value { color: #fb923c; }
    </style>

    <div class="radar-wrapper">
      <div class="radar-glow"></div>
      <div class="radar-magic-border">
        <div class="radar-container">
          <div class="radar-inner-clip">
            <div class="radar-grid"></div>
            <div class="radar-circles"></div>
            <div class="radar-sweep"></div>
          </div>
          
          <div class="radar-target" style="left: 30%; top: 25%; color: #3875F6;" data-angle="310">
            <div class="ping"></div>
            <div class="target-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div class="radar-tooltip">
              <div class="tooltip-header">
                <div class="tooltip-icon" style="color: #3875F6;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div>
                  <p class="tooltip-title">Anonymous Visitor</p>
                  <p class="tooltip-sub">San Francisco, CA</p>
                </div>
              </div>
              <div class="tooltip-footer">
                <span class="status-label">STATUS</span>
                <span class="status-value">RESEARCHING</span>
              </div>
            </div>
          </div>

          <div class="radar-target" style="left: 65%; top: 75%; color: #FA8C16;" data-angle="120">
            <div class="ping"></div>
            <div class="target-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="22"/><line x1="15" y1="22" x2="15" y2="22"/><line x1="12" y1="18" x2="12" y2="18"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="12" y1="6" x2="12" y2="6"/></svg>
            </div>
            <div class="radar-tooltip">
              <div class="tooltip-header">
                <div class="tooltip-icon" style="color: #FA8C16;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="22"/><line x1="15" y1="22" x2="15" y2="22"/></svg>
                </div>
                <div>
                  <p class="tooltip-title">Microsoft</p>
                  <p class="tooltip-sub">Enterprise Tech</p>
                </div>
              </div>
              <div class="tooltip-footer">
                <span class="status-label">STATUS</span>
                <span class="status-value">PRICING PAGE VIEW</span>
              </div>
            </div>
          </div>

          <div class="radar-target" style="left: 80%; top: 40%; color: #10b981;" data-angle="45">
            <div class="ping"></div>
            <div class="target-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
            </div>
            <div class="radar-tooltip">
              <div class="tooltip-header">
                <div class="tooltip-icon" style="color: #10b981;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                </div>
                <div>
                  <p class="tooltip-title">Sarah Jenkins</p>
                  <p class="tooltip-sub">VP of Marketing @ Stripe</p>
                </div>
              </div>
              <div class="tooltip-footer">
                <span class="status-label">STATUS</span>
                <span class="status-value">HIGH INTENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return (
    <section 
      ref={containerRef}
      className="w-full bg-[#F5F9FF] px-6 md:px-[112px] py-16 md:py-32 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className={cn(
          "lg:col-span-5 space-y-8 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest">
            WebID™ Technology
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
            Unmask the <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Invisible Pipeline</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            98% of your website visitors leave without filling out a form. WebID™ uses our proprietary identity graph to reveal the exact people and companies researching you in real-time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
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
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="22"/><line x1="15" y1="22" x2="15" y2="22"/></svg>
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

        <div className="lg:col-span-7 flex justify-center">
          <div 
            ref={htmlRef}
            className="w-full flex justify-center"
            dangerouslySetInnerHTML={{ __html: rawHTML }}
          />
        </div>

      </div>
    </section>
  );
};

export default WebIDSection;