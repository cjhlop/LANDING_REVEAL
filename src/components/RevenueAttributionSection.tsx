"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { 
  BarChart3, 
  CheckCircle2,
  Zap,
  Target,
  Share2,
  Users,
  Eye,
  MousePointer2,
  Globe,
  FileText,
  Trophy,
  TrendingUp,
  DollarSign
} from "lucide-react";
import SectionBadge from "./SectionBadge";
import ButtonGroup from "./ButtonGroup";

const RevenueAttributionSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const [counts, setCounts] = React.useState([327, 298, 177, 172, 13, 12, 11]);
  const [revenue, setRevenue] = React.useState(1100000);

  React.useEffect(() => {
    if (!inView) return;

    const targets = [819, 747, 444, 430, 33, 31, 29];
    const revTarget = 1402645;
    const duration = 1800;
    const startTime = performance.now() + 400;

    let animationFrame: number;

    const update = (now: number) => {
      const elapsed = now - startTime;
      if (elapsed < 0) {
        animationFrame = requestAnimationFrame(update);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      const newCounts = targets.map((target) => {
        const start = Math.floor(target * 0.4);
        return Math.floor(start + (target - start) * ease);
      });
      setCounts(newCounts);

      const revStart = 1100000;
      setRevenue(Math.floor(revStart + (revTarget - revStart) * ease));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(update);
      } else {
        setCounts(targets);
        setRevenue(revTarget);
      }
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView]);

  return (
    <section 
      ref={ref}
      id="revenue-attribution"
      className="w-full bg-white px-6 sm:px-12 md:px-[112px] py-16 md:py-24 lg:py-32 overflow-hidden border-b border-gray-100"
    >
      <style>{`
        .rf-funnel {
          position: relative;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }

        .rf-funnel-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top,
            rgba(56,117,246,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .rf-funnel-cards {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
          width: 100%;
        }

        .rf-card {
          position: relative;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
          transition: width 0.8s cubic-bezier(0.25,0.46,0.45,0.94),
                      opacity 0.8s ease;
          overflow: hidden;
        }

        .rf-card-inner {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .rf-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .rf-icon svg { width: 18px; height: 18px; }

        .rf-icon-blue    { background: #eff6ff; color: #3875F6; }
        .rf-icon-cyan    { background: #ecfeff; color: #06b6d4; }
        .rf-icon-indigo  { background: #eef2ff; color: #6366f1; }
        .rf-icon-violet  { background: #f5f3ff; color: #7c3aed; }
        .rf-icon-emerald { background: #ecfdf5; color: #10b981; }
        .rf-icon-purple  { background: #faf5ff; color: #9333ea; }
        .rf-icon-orange  { background: #fff7ed; color: #FA8C16; }

        .rf-label {
          font-size: 10px;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .rf-num {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          font-variant-numeric: tabular-nums;
        }

        .rf-trend {
          flex-shrink: 0;
          opacity: 0.3;
        }
        .rf-trend-inner {
          color: #10b981;
        }
        .rf-trend-inner svg {
          width: 14px;
          height: 14px;
        }

        .rf-card::after {
          content: '';
          position: absolute;
          bottom: -7px;
          left: 22px;
          width: 1px;
          height: 7px;
          background: #e2e8f0;
        }
        .rf-card-last::after { display: none; }

        .rf-revenue {
          margin-top: 16px;
          align-self: flex-end;
          width: 60%;
          margin-left: auto;
        }

        .rf-magic-border {
          border-radius: 14px;
          padding: 1.5px;
          background: linear-gradient(135deg, #3875F6, #10b981);
        }

        .rf-revenue-inner {
          background: #0f172a;
          border-radius: 13px;
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .rf-revenue-header {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .rf-revenue-icon {
          width: 28px;
          height: 28px;
          border-radius: 7px;
          background: rgba(56,117,246,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3875F6;
        }
        .rf-revenue-icon svg { width: 14px; height: 14px; }

        .rf-revenue-title {
          font-size: 10px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .rf-revenue-num {
          font-size: 22px;
          font-weight: 700;
          color: white;
          font-variant-numeric: tabular-nums;
        }

        .rf-revenue-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(16,185,129,0.15);
          border-radius: 6px;
          padding: 3px 8px;
          width: fit-content;
          color: #34d399;
          font-size: 10px;
          font-weight: 700;
        }
        .rf-revenue-badge svg { width: 12px; height: 12px; }
      `}</style>

      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Funnel Visual */}
        <div className="lg:col-span-7 relative order-2 lg:order-1">
          <div className={cn(
            "relative w-full transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            <div className="rf-funnel">
              <div className="rf-funnel-bg"></div>
              <div className="rf-funnel-cards">

                <div className="rf-card" style={{ width: '100%', transitionDelay: '0ms' }}>
                  <div className="rf-card-inner">
                    <div className="rf-icon rf-icon-blue">
                      <Users className="size-6" />
                    </div>
                    <div>
                      <div className="rf-label">Exposed</div>
                      <div className="rf-value">
                        <span className="rf-num">{counts[0]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="rf-trend">
                    <div className="rf-trend-inner">
                      <TrendingUp className="size-3.5" />
                    </div>
                  </div>
                </div>

                <div className="rf-card" style={{ width: '92%', transitionDelay: '100ms' }}>
                  <div className="rf-card-inner">
                    <div className="rf-icon rf-icon-cyan">
                      <Eye className="size-6" />
                    </div>
                    <div>
                      <div className="rf-label">Impressed</div>
                      <div className="rf-value">
                        <span className="rf-num">{counts[1]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="rf-trend">
                    <div className="rf-trend-inner">
                      <TrendingUp className="size-3.5" />
                    </div>
                  </div>
                </div>

                <div className="rf-card" style={{ width: '84%', transitionDelay: '200ms' }}>
                  <div className="rf-card-inner">
                    <div className="rf-icon rf-icon-indigo">
                      <MousePointer2 className="size-6" />
                    </div>
                    <div>
                      <div className="rf-label">Engaged</div>
                      <div className="rf-value">
                        <span className="rf-num">{counts[2]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="rf-trend">
                    <div className="rf-trend-inner">
                      <TrendingUp className="size-3.5" />
                    </div>
                  </div>
                </div>

                <div className="rf-card" style={{ width: '76%', transitionDelay: '300ms' }}>
                  <div className="rf-card-inner">
                    <div className="rf-icon rf-icon-violet">
                      <Zap className="size-6" />
                    </div>
                    <div>
                      <div className="rf-label">Clicks</div>
                      <div className="rf-value">
                        <span className="rf-num">{counts[3]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="rf-trend">
                    <div className="rf-trend-inner">
                      <TrendingUp className="size-3.5" />
                    </div>
                  </div>
                </div>

                <div className="rf-card" style={{ width: '68%', transitionDelay: '400ms' }}>
                  <div className="rf-card-inner">
                    <div className="rf-icon rf-icon-emerald">
                      <Globe className="size-6" />
                    </div>
                    <div>
                      <div className="rf-label">Website Visits</div>
                      <div className="rf-value">
                        <span className="rf-num">{counts[4]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="rf-trend">
                    <div className="rf-trend-inner">
                      <TrendingUp className="size-3.5" />
                    </div>
                  </div>
                </div>

                <div className="rf-card" style={{ width: '60%', transitionDelay: '500ms' }}>
                  <div className="rf-card-inner">
                    <div className="rf-icon rf-icon-purple">
                      <FileText className="size-6" />
                    </div>
                    <div>
                      <div className="rf-label">Deal Created</div>
                      <div className="rf-value">
                        <span className="rf-num">{counts[5]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="rf-trend">
                    <div className="rf-trend-inner">
                      <TrendingUp className="size-3.5" />
                    </div>
                  </div>
                </div>

                <div className="rf-card rf-card-last" style={{ width: '52%', transitionDelay: '600ms' }}>
                  <div className="rf-card-inner">
                    <div className="rf-icon rf-icon-orange">
                      <Trophy className="size-6" />
                    </div>
                    <div>
                      <div className="rf-label">Closed Won</div>
                      <div className="rf-value">
                        <span className="rf-num">{counts[6]}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="rf-revenue">
                <div className="rf-magic-border">
                  <div className="rf-revenue-inner">
                    <div className="rf-revenue-header">
                      <div className="rf-revenue-icon">
                        <DollarSign className="size-3.5" />
                      </div>
                      <div className="rf-revenue-title">Influenced Revenue</div>
                    </div>
                    <div className="rf-revenue-value">
                      <span className="rf-revenue-num">${revenue.toLocaleString()}</span>
                    </div>
                    <div className="rf-revenue-badge">
                      <TrendingUp className="size-3" />
                      <span>+12.4% vs last month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="lg:col-span-5 space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left">
          <div className="space-y-4">
            <div className={cn(
              "flex justify-center lg:justify-start transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <SectionBadge icon={BarChart3} text="PROVE IMPACT" />
            </div>

            <h2 className={cn(
              "text-[40px] font-bold text-gray-900 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              See which LinkedIn ads <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">drive pipeline and revenue</span>
            </h2>

            <p className={cn(
              "text-base text-gray-600 leading-relaxed transition-all duration-700 delay-200 max-w-2xl mx-auto lg:mx-0",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              Open one view and see which campaigns influence accounts and how they turn into pipeline and revenue.
            </p>
          </div>

          {/* Intelligence Cards List */}
          <div className="space-y-3 max-w-xl mx-auto lg:mx-0">
            {[
              {
                title: "See which campaigns influence pipeline",
                desc: "Connect LinkedIn ad activity to your CRM and see which campaigns touch deals.",
                icon: Target,
                color: "blue"
              },
              {
                title: "See how much pipeline and revenue they drive",
                desc: "Understand how each campaign contributes to pipeline and revenue.",
                icon: Zap,
                color: "orange"
              },
              {
                title: "Share proof without building reports",
                desc: "Pull the numbers you need and show leadership what LinkedIn actually drove.",
                icon: Share2,
                color: "emerald"
              }
            ].map((item, i) => (
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

          <div className={cn(
            "pt-2 transition-all duration-700 delay-800 flex justify-center lg:justify-start",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <ButtonGroup 
              primaryLabel="Try It Now" 
              secondaryLabel="Read More"
              size="lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default RevenueAttributionSection;