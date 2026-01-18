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
      
      // Get current rotation from computed style
      const style = window.getComputedStyle(sweep);
      const matrix = new DOMMatrix(style.transform);
      const angle = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);
      const normalizedAngle = (angle < 0 ? angle + 360 : angle);

      targets.forEach((target) => {
        const targetAngle = parseFloat(target.getAttribute('data-angle') || '0');
        const diff = (normalizedAngle - targetAngle + 360) % 360;

        // If the sweep is passing over the target (within 15 degrees)
        if (diff < 15) {
          target.classList.add('is-active');
        } else {
          target.classList.remove('is-active');
        }
      });
    };

    const interval = setInterval(updateRadar, 50);
    return () => clearInterval(interval);
  }, [inView]);

  // Pure HTML/CSS structure
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
      .radar-container {
        position: relative;
        width: 100%;
        aspect-ratio: 1/1;
        background: white;
        border-radius: 50%;
        border: 4px solid transparent;
        background-image: linear-gradient(white, white), conic-gradient(from var(--rotate, 0deg), #3875F6, #A3C7FF, #FA8C16, #A3C7FF, #3875F6);
        background-origin: border-box;
        background-clip: content-box, border-box;
        animation: spin 5s linear infinite;
      }
      .radar-inner {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: white;
        overflow: hidden;
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
      .radar-sweep {
        position: absolute;
        inset: 0;
        background: conic-gradient(from 0deg, transparent 90%, rgba(56, 117, 246, 0.2) 100%);
        animation: radar-rotate 8s linear infinite;
        z-index: 10;
      }
      .radar-target {
        position: absolute;
        width: 40px;
        height: 40px;
        transform: translate(-50%, -50%);
        z-index: 20;
        opacity: 0.2;
        transition: opacity 0.5s ease;
      }
      .radar-target.is-active {
        opacity: 1;
      }
      .radar-target.is-active .ping {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        border: 2px solid currentColor;
        animation: target-ping 1.5s ease-out infinite;
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
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }
    </style>

    <div class="radar-container">
      <div class="radar-inner">
        <div class="radar-grid"></div>
        <div class="radar-sweep"></div>
        
        <!-- Target 1: Anonymous -->
        <div class="radar-target text-blue-500" style="left: 25%; top: 30%;" data-angle="310">
          <div class="ping"></div>
          <div class="target-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
        </div>

        <!-- Target 2: Company -->
        <div class="radar-target text-orange-500" style="left: 70%; top: 20%;" data-angle="55">
          <div class="ping"></div>
          <div class="target-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="22"/><line x1="15" y1="22" x2="15" y2="22"/><line x1="12" y1="18" x2="12" y2="18"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="12" y1="6" x2="12" y2="6"/><line x1="8" y1="18" x2="8" y2="18"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="8" y1="10" x2="8" y2="10"/><line x1="8" y1="6" x2="8" y2="6"/><line x1="16" y1="18" x2="16" y2="18"/><line x1="16" y1="14" x2="16" y2="14"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="16" y1="6" x2="16" y2="6"/></svg>
          </div>
        </div>

        <!-- Target 3: Person -->
        <div class="radar-target text-emerald-500" style="left: 80%; top: 65%;" data-angle="110">
          <div class="ping"></div>
          <div class="target-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
          </div>
        </div>
      </div>
    </div>
  `;

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
            WebID™ Technology
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
            Unmask the <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Invisible Pipeline</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            98% of your website visitors leave without filling out a form. WebID™ uses our proprietary identity graph to reveal the exact people and companies researching you in real-time.
          </p>

          <div className="flex flex-wrap gap-4">
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
            className="w-full max-w-[500px]"
            dangerouslySetInnerHTML={{ __html: rawHTML }}
          />
        </div>

      </div>
    </section>
  );
};

export default WebIDSection;