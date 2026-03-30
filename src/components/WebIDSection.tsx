"use client";

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import { ShieldCheck, Fingerprint } from "lucide-react";

const WebIDSection = () => {
  const navigate = useNavigate();
  const [containerRef, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section 
      ref={containerRef}
      className="w-full bg-white px-6 md:px-[112px] py-16 md:py-32 overflow-hidden border-b border-gray-100"
    >
      <style>{`
        .rs-wrap {
          position: relative;
          width: 420px;
          height: 420px;
          flex-shrink: 0;
        }

        .rs-glow {
          position: absolute;
          inset: -40px;
          border-radius: 50%;
          background: radial-gradient(circle,
            rgba(56,117,246,0.12) 0%,
            rgba(250,140,22,0.06) 50%,
            transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .rs-border {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          padding: 2px;
          background: linear-gradient(135deg,
            #3875F6 0%, #c0c8e0 50%, #FA8C16 100%);
          z-index: 1;
        }

        .rs-circle {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #f8faff;
          overflow: visible;
        }

        .rs-inner {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          overflow: hidden;
        }

        .rs-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(56,117,246,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,117,246,0.08) 1px, transparent 1px);
          background-size: 42px 42px;
        }

        .rs-rings {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background:
            radial-gradient(circle at center,
              transparent 19%, rgba(56,117,246,0.12) 19.5%, transparent 20%),
            radial-gradient(circle at center,
              transparent 37%, rgba(56,117,246,0.10) 37.5%, transparent 38%),
            radial-gradient(circle at center,
              transparent 56%, rgba(56,117,246,0.08) 56.5%, transparent 57%),
            radial-gradient(circle at center,
              transparent 75%, rgba(56,117,246,0.06) 75.5%, transparent 76%);
        }

        .rs-sweep {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(56,117,246,0.18) 40deg,
            transparent 70deg
          );
          animation: rs-rotate 3s linear infinite;
          transform-origin: center;
        }

        @keyframes rs-rotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .rs-target {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 10;
          cursor: pointer;
        }

        .rs-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          border: 2px solid var(--c);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: transform 0.2s ease;
        }

        .rs-target:hover .rs-icon {
          transform: scale(1.15);
        }

        .rs-ping {
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 2px solid var(--c);
          opacity: 0;
          animation: rs-ping 2.5s ease-out infinite;
        }

        .rs-target:nth-child(2) .rs-ping { animation-delay: 0s; }
        .rs-target:nth-child(3) .rs-ping { animation-delay: 0.9s; }
        .rs-target:nth-child(4) .rs-ping { animation-delay: 1.8s; }

        @keyframes rs-ping {
          0%   { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(2.8); opacity: 0; }
        }

        .rs-tip {
          position: absolute;
          bottom: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border-radius: 10px;
          padding: 10px 12px;
          min-width: 190px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
          z-index: 20;
          white-space: nowrap;
        }

        .rs-target:hover .rs-tip,
        .rs-target.is-active .rs-tip {
          opacity: 1;
        }

        .rs-tip-head {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .rs-tip-icon {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: rgba(0,0,0,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .rs-tip-title {
          font-size: 12px;
          font-weight: 600;
          color: #111827;
          margin: 0;
          line-height: 1.3;
        }

        .rs-tip-sub {
          font-size: 11px;
          color: #6b7280;
          margin: 0;
          line-height: 1.3;
        }

        .rs-tip-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #f0f0f0;
          padding-top: 6px;
          margin-top: 2px;
        }

        .rs-status-label {
          font-size: 10px;
          font-weight: 500;
          color: #9ca3af;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .rs-status-val {
          font-size: 10px;
          font-weight: 700;
          color: #111827;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
      `}</style>

      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-7 flex justify-center lg:order-1">
          <div className="w-full flex justify-center relative">
            <div className="rs-wrap">
              <div className="rs-glow"></div>
              <div className="rs-border">
                <div className="rs-circle">

                  <div className="rs-inner">
                    <div className="rs-grid"></div>
                    <div className="rs-rings"></div>
                    <div className="rs-sweep"></div>
                  </div>

                  <div className="rs-target" style={{ left: "30%", top: "25%", "--c": "#3875F6" } as React.CSSProperties}>
                    <div className="rs-ping"></div>
                    <div className="rs-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                           stroke="var(--c)" strokeWidth="2"
                           strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10
                                 15.3 15.3 0 0 1-4 10
                                 15.3 15.3 0 0 1-4-10
                                 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                    </div>
                    <div className="rs-tip">
                      <div className="rs-tip-head">
                        <div className="rs-tip-icon" style={{ color: "#3875F6" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                               stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="2" y1="12" x2="22" y2="12"/>
                          </svg>
                        </div>
                        <div>
                          <p className="rs-tip-title">Anonymous Visitor</p>
                          <p className="rs-tip-sub">San Francisco, CA</p>
                        </div>
                      </div>
                      <div className="rs-tip-foot">
                        <span className="rs-status-label">STATUS</span>
                        <span className="rs-status-val">RESEARCHING</span>
                      </div>
                    </div>
                  </div>

                  <div className="rs-target is-active" style={{ left: "65%", top: "75%", "--c": "#FA8C16" } as React.CSSProperties}>
                    <div className="rs-ping"></div>
                    <div className="rs-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                           stroke="var(--c)" strokeWidth="2"
                           strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
                        <line x1="12" y1="6" x2="12" y2="6"/>
                        <line x1="12" y1="10" x2="12" y2="10"/>
                        <line x1="12" y1="14" x2="12" y2="14"/>
                      </svg>
                    </div>
                    <div className="rs-tip">
                      <div className="rs-tip-head">
                        <div className="rs-tip-icon" style={{ color: "#FA8C16" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                               stroke="currentColor" strokeWidth="2">
                            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
                          </svg>
                        </div>
                        <div>
                          <p className="rs-tip-title">Microsoft</p>
                          <p className="rs-tip-sub">Enterprise Tech</p>
                        </div>
                      </div>
                      <div className="rs-tip-foot">
                        <span className="rs-status-label">STATUS</span>
                        <span className="rs-status-val">PRICING PAGE VIEW</span>
                      </div>
                    </div>
                  </div>

                  <div className="rs-target" style={{ left: "80%", top: "40%", "--c": "#10b981" } as React.CSSProperties}>
                    <div className="rs-ping"></div>
                    <div className="rs-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                           stroke="var(--c)" strokeWidth="2"
                           strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <polyline points="16 11 18 13 22 9"/>
                      </svg>
                    </div>
                    <div className="rs-tip">
                      <div className="rs-tip-head">
                        <div className="rs-tip-icon" style={{ color: "#10b981" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                               stroke="currentColor" strokeWidth="2">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                          </svg>
                        </div>
                        <div>
                          <p className="rs-tip-title">Sarah Jenkins</p>
                          <p className="rs-tip-sub">VP of Marketing @ Stripe</p>
                        </div>
                      </div>
                      <div className="rs-tip-foot">
                        <span className="rs-status-label">STATUS</span>
                        <span className="rs-status-val">HIGH INTENT</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={cn(
          "lg:col-span-5 space-y-8 transition-all duration-700 lg:order-2",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest">
            <Fingerprint className="size-3" />
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
                  <ShieldCheck size={20} />
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
              className="h-11 px-8 bg-[#3875f6] text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-all"
            >
              Try It Now
            </button>
            <button 
              onClick={() => navigate("/website-visitors")}
              className="h-11 px-8 bg-white text-[#3875f6] border border-[#3875f6] rounded-md text-sm font-medium hover:bg-blue-50 transition-all"
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