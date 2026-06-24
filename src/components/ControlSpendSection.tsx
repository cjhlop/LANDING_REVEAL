"use client";

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import { Clock, Lock, Target, CheckCircle2, Settings } from "lucide-react";

const ControlSpendSection = () => {
  const navigate = useNavigate();
  const [containerRef, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const totalCards = 4;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCards);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getCardPos = (index: number) => {
    return (index - currentIndex + totalCards) % totalCards;
  };

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
      icon: Lock,
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
      className="w-full bg-[#F5F9FF] px-6 md:px-[112px] py-16 md:py-32 overflow-hidden border-b border-gray-100"
    >
      <style>{`
        /* ── STACK LAYOUT ── */
        .bento-stack {
          position: relative;
          width: 100%;
          height: 420px;
          perspective: 1000px;
        }

        .bento-stack-inner {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .bento-stack-inner .bento-item {
          position: absolute;
          inset: 0;
          transition:
            transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            opacity 1s ease,
            z-index 0s;
          border-radius: 16px;
          cursor: pointer;
          width: 100%;
        }

        .bento-stack-inner .bento-item[data-pos="0"] {
          transform: translateY(0) scale(1);
          opacity: 1;
          z-index: 4;
        }

        .bento-stack-inner .bento-item[data-pos="1"] {
          transform: translateY(14px) scale(0.97);
          opacity: 0.75;
          z-index: 3;
        }

        .bento-stack-inner .bento-item[data-pos="2"] {
          transform: translateY(24px) scale(0.94);
          opacity: 0.45;
          z-index: 2;
        }

        .bento-stack-inner .bento-item[data-pos="3"] {
          transform: translateY(32px) scale(0.91);
          opacity: 0.2;
          z-index: 1;
        }

        .bento-dots {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-top: 2rem;
        }
        .bento-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #cbd5e1;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .bento-dot.active {
          background: #3875F6;
          transform: scale(1.3);
        }

        /* ── CARD BASE ── */
        .bento-item .magic-border {
          height: 100%;
          border-radius: 16px;
          padding: 1.5px;
          background: linear-gradient(135deg,
            rgba(56,117,246,0.6), rgba(250,140,22,0.4));
        }
        .card-inner {
          height: 100%;
          background: #0f172a;
          border-radius: 15px;
          padding: 1.25rem;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .card-dot {
          position: absolute;
          top: 1rem; right: 1rem;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #22d3ee;
          box-shadow: 0 0 6px #22d3ee;
        }
        .card-content {
          display: flex;
          gap: 1rem;
          height: 100%;
        }
        .card-left  { flex: 1; display: flex; flex-direction: column; gap: 0.75rem; }
        .card-right { flex: 1; }

        /* ── CARD HEADER ── */
        .card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .card-header h3 {
          color: #f1f5f9;
          font-size: 18px;
          font-weight: 700;
          margin: 0;
        }
        .card-header-small h3 { font-size: 15px; }

        .icon-box {
          width: 40px; height: 40px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .icon-box svg { width: 20px; height: 20px; }
        .icon-blue    { background: #1e40af; color: #93c5fd; }
        .icon-orange  { background: #92400e; color: #fb923c; }
        .icon-outline { background: #1e293b; color: #94a3b8; }
        .icon-emerald { background: #064e3b; color: #34d399; }

        /* ── CARD BODY ── */
        .card-desc       { color: #94a3b8; font-size: 13px; line-height: 1.6; margin: 0; }
        .card-desc-small { color: #94a3b8; font-size: 12px; line-height: 1.5; margin: 0; }
        .card-body-small { display: flex; flex-direction: column; gap: 0.5rem; }

        /* ── LEGEND ── */
        .legend { display: flex; flex-direction: column; gap: 0.4rem; margin-top: auto; }
        .legend-item {
          display: flex; align-items: center;
          gap: 0.5rem;
          font-size: 11px; font-weight: 500;
        }
        .legend-item.peak  { color: #93c5fd; }
        .legend-item.pause { color: #475569; }
        .dot {
          width: 8px; height: 8px;
          border-radius: 50%; flex-shrink: 0;
        }
        .dot.blue { background: #3875F6; }
        .dot.gray { background: #475569; }

        /* ── SCHEDULING VISUAL ── */
        .sched-wrap {
          background: #0a0f1e;
          border-radius: 10px;
          padding: 0.75rem;
          height: 100%;
          display: flex; flex-direction: column; gap: 0.5rem;
          font-size: 11px;
        }
        .sched-header {
          display: flex; justify-content: space-between; align-items: center;
        }
        .sched-left {
          display: flex; align-items: center; gap: 0.4rem;
          color: #64748b; font-weight: 700; text-transform: uppercase;
          font-size: 9px; letter-spacing: 0.05em;
        }
        .sched-status {
          display: flex; align-items: center; gap: 0.3rem;
          font-size: 9px; font-weight: 700;
          color: #64748b; text-transform: uppercase;
        }
        .sched-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #22d3ee;
          box-shadow: 0 0 4px #22d3ee;
          animation: bento-pulse 2s ease-in-out infinite;
        }
        @keyframes bento-pulse {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.4; }
        }
        .sched-grid { flex: 1; display: flex; flex-direction: column; gap: 0.25rem; }
        .sched-hours {
          display: flex; justify-content: space-between;
          color: #334155; font-size: 8px; padding: 0 0.25rem;
        }
        .sched-days {
          display: flex; gap: 3px; flex: 1; position: relative;
        }
        .sched-day-col { display: flex; flex-direction: column; gap: 2px; flex: 1; }
        .sched-day-label {
          text-align: center; font-size: 8px; font-weight: 700;
          color: #475569; text-transform: uppercase; margin-bottom: 2px;
        }
        .sched-cells { display: flex; flex-direction: column; gap: 2px; flex: 1; }
        .sched-cell {
          flex: 1; border-radius: 2px;
          transition: background 0.3s ease;
        }
        .sched-cell.off  { background: #1e293b; }
        .sched-cell.peak { background: #1d4ed8; }
        .sched-cell.peak.scan { background: #3875F6; }
        .sched-scan-line {
          position: absolute; left: 0; right: 0; height: 1px;
          background: rgba(56,117,246,0.6);
          box-shadow: 0 0 4px rgba(56,117,246,0.8);
          pointer-events: none;
          animation: sched-scan 3s linear infinite;
        }
        @keyframes sched-scan {
          0%   { top: 0%; opacity: 1; }
          100% { top: 100%; opacity: 0.3; }
        }
        .sched-footer {
          display: flex; justify-content: space-between; align-items: center;
        }
        .sched-stats { display: flex; gap: 1rem; }
        .stat-label { font-size: 8px; color: #475569; text-transform: uppercase;
                      font-weight: 700; margin-right: 0.3rem; }
        .stat-val { font-size: 10px; font-weight: 700; color: #94a3b8; }
        .stat-val.emerald { color: #34d399; }
        .sched-tz { font-size: 8px; color: #334155; font-weight: 600; }

        /* ── FREQUENCY CAP ── */
        .card-visual-abs {
          margin-top: auto;
          background: #0a0f1e;
          border-radius: 10px;
          padding: 0.75rem;
        }
        .freq-inner { display: flex; flex-direction: column; gap: 0.75rem; }
        .freq-camp  { display: flex; flex-direction: column; gap: 0.35rem; }
        .freq-row   { display: flex; justify-content: space-between; align-items: center; }
        .freq-label { display: flex; align-items: center; gap: 0.4rem; }
        .freq-dot   { width: 6px; height: 6px; border-radius: 50%; }
        .freq-dot.blue   { background: #3875F6; }
        .freq-dot.orange { background: #FA8C16; }
        .freq-name  { font-size: 10px; font-weight: 600; color: #94a3b8;
                      text-transform: uppercase; letter-spacing: 0.04em; }
        .freq-right { display: flex; align-items: center; gap: 0.5rem; }
        .freq-cap   { font-size: 9px; color: #475569; font-weight: 600; }
        .freq-capped {
          display: flex; align-items: center; gap: 3px;
          background: #1e293b; border-radius: 4px; padding: 2px 6px;
          font-size: 9px; font-weight: 700; color: #fb923c;
        }
        .freq-bar-wrap { position: relative; height: 6px; background: #1e293b; border-radius: 3px; }
        .freq-bar { height: 100%; border-radius: 3px; width: 0; transition: width 1.2s ease; }
        .freq-bar.blue   { background: #3875F6; }
        .freq-bar.orange { background: #FA8C16; }
        .freq-guard {
          position: absolute; right: 0; top: -2px; bottom: -2px;
          width: 2px; background: #ef4444; border-radius: 1px;
        }
        .freq-footer {
          display: flex; justify-content: space-between; align-items: center;
          background: #0f172a; border-radius: 8px; padding: 0.5rem 0.75rem;
          margin-top: 0.25rem;
        }
        .freq-footer-left { display: flex; align-items: center; gap: 0.5rem; }
        .freq-activity    { position: relative; display: flex; align-items: center;
                            justify-content: center; color: #3875F6; }
        .freq-ping {
          position: absolute; inset: -3px; border-radius: 50%;
          border: 1px solid #3875F6; opacity: 0;
          animation: rs-ping 2s ease-out infinite;
        }
        @keyframes rs-ping {
          0%   { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        .freq-footer-label { font-size: 8px; color: #475569; text-transform: uppercase;
                             font-weight: 700; }
        .freq-footer-val   { font-size: 11px; font-weight: 700; color: #94a3b8; }
        .freq-footer-val.emerald { color: #34d399; }

        /* ── AUDIENCE TUNING ── */
        .tuning-queue {
          flex: 1; display: flex; flex-direction: column;
          gap: 0.5rem; position: relative; overflow: hidden;
          margin-top: 0.5rem;
        }
        .tuning-item {
          display: flex; justify-content: space-between; align-items: center;
          background: #1e293b; border-radius: 8px; padding: 0.5rem 0.75rem;
          animation: tuning-scroll 8s linear infinite;
        }
        @keyframes tuning-scroll {
          0%   { transform: translateY(0); opacity: 1; }
          85%  { transform: translateY(0); opacity: 1; }
          95%  { transform: translateY(-8px); opacity: 0; }
          96%  { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .tuning-item:nth-child(1) { animation-delay: 0s; }
        .tuning-item:nth-child(2) { animation-delay: 0.4s; }
        .tuning-item:nth-child(3) { animation-delay: 0.8s; }
        .tuning-item:nth-child(4) { animation-delay: 1.2s; }
        .tuning-item:nth-child(5) { animation-delay: 1.6s; }
        .tuning-left { display: flex; align-items: center; gap: 0.5rem; }
        .tuning-icon {
          width: 24px; height: 24px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
        }
        .tuning-icon.amber  { background: #451a03; color: #fb923c; }
        .tuning-icon.red    { background: #450a0a; color: #f87171; }
        .tuning-icon.green  { background: #052e16; color: #34d399; }
        .tuning-icon.orange { background: #431407; color: #fb923c; }
        .tuning-icon.blue   { background: #172554; color: #93c5fd; }
        .tuning-name { font-size: 11px; font-weight: 600; color: #94a3b8; }
        .tuning-badge {
          font-size: 9px; font-weight: 700; color: #3875F6;
          background: #172554; border-radius: 4px;
          padding: 2px 6px; text-transform: uppercase; letter-spacing: 0.04em;
        }
        .tuning-gradient {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 60px;
          background: linear-gradient(to top, #0f172a, transparent);
          pointer-events: none;
        }

        /* ── BUDGET CONTROL ── */
        .stats-row { display: flex; flex-direction: column; gap: 0.5rem; margin-top: auto; }
        .stat-item { display: flex; align-items: center; gap: 0.5rem; }
        .stat-icon {
          width: 28px; height: 28px; border-radius: 7px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .stat-icon.emerald { background: #064e3b; color: #34d399; }
        .stat-icon.blue    { background: #172554; color: #93c5fd; }
        .stat-label  { font-size: 9px; color: #475569; text-transform: uppercase;
                       font-weight: 700; letter-spacing: 0.04em; }
        .stat-value  { font-size: 12px; font-weight: 700; color: #e2e8f0; }
        .stat-value.emerald { color: #34d399; }

        .budget-header {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 0.5rem;
        }
        .budget-pulse {
          display: inline-block; width: 6px; height: 6px;
          border-radius: 50%; background: #34d399;
          box-shadow: 0 0 6px #34d399;
          animation: bento-pulse 2s ease-in-out infinite;
        }
        .budget-chart {
          flex: 1; position: relative;
          display: flex; align-items: flex-end; gap: 3px;
          padding-bottom: 0.25rem;
        }
        .budget-footer {
          display: flex; justify-content: space-between;
          border-top: 1px solid #1e293b; padding-top: 0.4rem;
        }
        .budget-stat { flex: 1; text-align: center; }
        .budget-stat.border-x {
          border-left: 1px solid #1e293b;
          border-right: 1px solid #1e293b;
        }
        .budget-stat-label { font-size: 8px; color: #475569; text-transform: uppercase;
                             font-weight: 700; }
        .budget-stat-value { font-size: 11px; font-weight: 700; color: #e2e8f0; }
        .budget-stat-value.blue { color: #93c5fd; }

        /* ── SHARED UTILITY ── */
        .emerald { color: #34d399; }
      `}</style>

      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className={cn(
          "lg:col-span-5 space-y-8 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-widest">
            <Settings className="size-3" />
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
              className="h-11 px-8 bg-[#3875f6] text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-all"
            >
              Try It Now
            </button>
            <button 
              onClick={() => navigate("/linkedin-ads-optimization")}
              className="h-11 px-8 bg-white text-[#3875f6] border border-[#3875f6] rounded-md text-sm font-medium hover:bg-blue-50 transition-all"
            >
              Read More
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col items-center">
          <div className={cn(
            "relative w-full transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            <div className="bento-stack">
              <div className="bento-stack-inner" onClick={() => setCurrentIndex((prev) => (prev + 1) % totalCards)}>
                {/* 1. Ads Scheduling */}
                <div className="bento-item" data-pos={getCardPos(0)}>
                  <div className="magic-border">
                    <div className="card-inner">
                      <div className="card-dot"></div>
                      <div className="card-content">
                        <div className="card-left">
                          <div className="card-header">
                            <div className="icon-box icon-blue">
                              <Clock className="size-5" />
                            </div>
                            <h3>Ads Scheduling</h3>
                          </div>
                          <p className="card-desc">Set precise working hours for your campaigns. Our AI automatically pauses ads during low-intent periods to save up to 40% of your budget.</p>
                          <div className="legend">
                            <div className="legend-item peak">
                              <span className="dot blue"></span> Peak Performance Hours
                            </div>
                            <div className="legend-item pause">
                              <span className="dot gray"></span> Automated Pause State
                            </div>
                          </div>
                        </div>
                        <div className="card-right">
                          <div className="sched-wrap">
                            <div className="sched-header">
                              <div className="sched-left">
                                <Target className="size-3" />
                                <span className="sched-label">Weekly Schedule</span>
                              </div>
                              <div className="sched-status">
                                <div className="sched-dot"></div>
                                <span>Campaigns Active</span>
                              </div>
                            </div>
                            <div className="sched-grid">
                              <div className="sched-hours">
                                <span>00</span><span>06</span><span>12</span><span>18</span><span>23</span>
                              </div>
                              <div className="sched-days">
                                {[...Array(7)].map((_, i) => (
                                  <div key={i} className="sched-day-col">
                                    <div className="sched-day-label">{['M','T','W','T','F','S','S'][i]}</div>
                                    <div className="sched-cells">
                                      {[...Array(12)].map((_, j) => (
                                        <div key={j} className={cn("sched-cell", (j > 3 && j < 9 && i < 5) ? "peak" : "off")}></div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                                <div className="sched-scan-line"></div>
                              </div>
                            </div>
                            <div className="sched-footer">
                              <div className="sched-stats">
                                <div>
                                  <span className="stat-label">Efficiency</span>
                                  <span className="stat-val">+38%</span>
                                </div>
                                <div>
                                  <span className="stat-label">Waste Reduced</span>
                                  <span className="stat-val emerald">-$2.4k</span>
                                </div>
                              </div>
                              <span className="sched-tz">UTC-05:00 EST</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Frequency Cap */}
                <div className="bento-item" data-pos={getCardPos(1)}>
                  <div className="magic-border">
                    <div className="card-inner">
                      <div className="card-dot"></div>
                      <div className="card-body-small">
                        <div className="card-header card-header-small">
                          <div className="icon-box icon-orange">
                            <Lock className="size-5" />
                          </div>
                          <h3>Frequency Cap</h3>
                        </div>
                        <p className="card-desc-small freq-desc">Prevent audience fatigue by capping impressions per campaign. Ensure even delivery across your entire account.</p>
                      </div>
                      <div className="card-visual-abs">
                        <div className="freq-inner">
                          <div className="freq-camp">
                            <div className="freq-row">
                              <div className="freq-label">
                                <div className="freq-dot blue"></div>
                                <span className="freq-name">Brand Awareness</span>
                              </div>
                              <div className="freq-right">
                                <span className="freq-cap">CAP: 3/wk</span>
                                <div className="freq-capped">
                                  <Lock className="size-2" />
                                  <span>Capped</span>
                                </div>
                              </div>
                            </div>
                            <div className="freq-bar-wrap">
                              <div className="freq-bar blue" style={{ width: '80%' }}></div>
                              <div className="freq-guard"></div>
                            </div>
                          </div>
                          <div className="freq-camp">
                            <div className="freq-row">
                              <div className="freq-label">
                                <div className="freq-dot orange"></div>
                                <span className="freq-name">Lead Gen - SaaS</span>
                              </div>
                              <div className="freq-right">
                                <span className="freq-cap">CAP: 3/wk</span>
                                <div className="freq-capped">
                                  <Lock className="size-2" />
                                  <span>Capped</span>
                                </div>
                              </div>
                            </div>
                            <div className="freq-bar-wrap">
                              <div className="freq-bar orange" style={{ width: '45%' }}></div>
                              <div className="freq-guard"></div>
                            </div>
                          </div>
                          <div className="freq-footer">
                            <div className="freq-footer-left">
                              <div className="freq-activity">
                                <Settings className="size-3.5" />
                                <div className="freq-ping"></div>
                              </div>
                              <div>
                                <div className="freq-footer-label">Capping Engine</div>
                                <div className="freq-footer-val">Monitoring 12 Campaigns</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="freq-footer-label">Saved Impressions</div>
                              <div className="freq-footer-val emerald">14.2k</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Audience Tuning */}
                <div className="bento-item" data-pos={getCardPos(2)}>
                  <div className="magic-border">
                    <div className="card-inner">
                      <div className="card-dot"></div>
                      <div className="card-body-small tuning-header">
                        <div className="card-header card-header-small">
                          <div className="icon-box icon-outline">
                            <Settings className="size-5" />
                          </div>
                          <h3>Audience Tuning</h3>
                        </div>
                        <p className="card-desc-small">Our AI automatically refines your targeting by excluding non-ICP criteria in real-time.</p>
                      </div>
                      <div className="tuning-queue">
                        {[
                          { name: "Low-Fit Industries", color: "amber" },
                          { name: "Competitors", color: "red" },
                          { name: "Existing Customers", color: "green" },
                          { name: "Non-ICP Titles", color: "orange" },
                          { name: "Non-ICP Location", color: "blue" }
                        ].map((item, i) => (
                          <div key={i} className="tuning-item">
                            <div className="tuning-left">
                              <div className={cn("tuning-icon", item.color)}>
                                <Target className="size-3.5" />
                              </div>
                              <span className="tuning-name">{item.name}</span>
                            </div>
                            <div className="tuning-badge">Auto-Excluding</div>
                          </div>
                        ))}
                      </div>
                      <div className="tuning-gradient"></div>
                    </div>
                  </div>
                </div>

                {/* 4. Budget Control */}
                <div className="bento-item" data-pos={getCardPos(3)}>
                  <div className="magic-border">
                    <div className="card-inner">
                      <div className="card-dot"></div>
                      <div className="card-content">
                        <div className="card-left">
                          <div className="card-header">
                            <div className="icon-box icon-emerald">
                              <CheckCircle2 className="size-5" />
                            </div>
                            <h3>Budget Control</h3>
                          </div>
                          <p className="card-desc">Automate your spend velocity. Prevent overspending with intelligent account-level budget guards and real-time pacing.</p>
                          <div className="stats-row">
                            <div className="stat-item">
                              <div className="stat-icon emerald">
                                <Target className="size-4" />
                              </div>
                              <div>
                                <div className="stat-label">Avg. Savings</div>
                                <div className="stat-value">18% Monthly</div>
                              </div>
                            </div>
                            <div className="stat-item">
                              <div className="stat-icon blue">
                                <Settings className="size-4" />
                              </div>
                              <div>
                                <div className="stat-label">Pacing Status</div>
                                <div className="stat-value emerald">Optimal Velocity</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-right">
                          <div className="sched-wrap">
                            <div className="budget-header">
                              <div>
                                <div className="budget-pulse"></div>
                                <span style={{ fontSize: '8px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginLeft: '0.5rem' }}>
                                  Live Budget Pacing
                                </span>
                              </div>
                              <div className="text-right">
                                <div style={{ fontSize: '7px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Saved Today</div>
                                <div style={{ fontSize: '10px', fontWeight: 700, color: '#34d399', fontVariantNumeric: 'tabular-nums' }}>$1767</div>
                              </div>
                            </div>
                            <div className="budget-chart">
                              {[...Array(12)].map((_, i) => (
                                <div key={i} className="flex-1 flex items-end" style={{ height: '100%' }}>
                                  <div className={cn("w-full rounded-t-sm", i % 2 === 0 ? "bg-blue-500" : "bg-orange-500")} style={{ height: `${20 + Math.random() * 60}%` }}></div>
                                </div>
                              ))}
                            </div>
                            <div className="budget-footer">
                              <div className="budget-stat">
                                <div className="budget-stat-label">Daily Limit</div>
                                <div className="budget-stat-value">$2,500</div>
                              </div>
                              <div className="budget-stat border-x">
                                <div className="budget-stat-label">Spent</div>
                                <div className="budget-stat-value">$1,842</div>
                              </div>
                              <div className="budget-stat">
                                <div className="budget-stat-label">Remaining</div>
                                <div className="budget-stat-value blue">$658</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bento-dots">
              {[...Array(totalCards)].map((_, i) => (
                <div 
                  key={i} 
                  className={cn("bento-dot", i === currentIndex && "active")}
                  onClick={() => setCurrentIndex(i)}
                ></div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ControlSpendSection;