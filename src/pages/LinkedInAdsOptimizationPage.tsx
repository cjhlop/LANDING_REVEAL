"use client";

import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import LogoTicker from "@/components/LogoTicker";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import LinkedInAdsHeroVisual from "@/components/LinkedInAdsHeroVisual";
import SectionBadge from "@/components/SectionBadge";
import { cn } from "@/lib/utils";
import { 
  Clock,
  Target,
  AlertCircle,
  ShieldCheck,
  Users,
  BarChart3,
  Zap,
  HelpCircle,
  CheckCircle2,
  UserX,
  ArrowRight,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const LinkedInAdsOptimizationPage = () => {
  const [heroRef, heroInView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I optimize LinkedIn Ads for better ROI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To optimize your LinkedIn ads, focus on three levers: scheduling, audience tuning, and frequency control. Use smart scheduling to run ads during high-engagement B2B hours, refine your targeting by excluding non-ICP companies, and set a frequency cap to prevent audience fatigue."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum audience size for LinkedIn Ads in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The technical minimum to launch a campaign is 300 members. For effective optimization, most practitioners recommend 50,000 to 100,000 to give the algorithm enough data to learn."
        }
      },
      {
        "@type": "Question",
        "name": "How can I set a LinkedIn ads frequency cap?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Since LinkedIn doesn't offer a native manual frequency cap for most campaign types, you can use third-party tools like DemandSense. This allows you to set impression limits at the company level to protect your brand and budget."
        }
      },
      {
        "@type": "Question",
        "name": "What is a reasonable LinkedIn ads budget for a B2B startup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The minimum daily budget is $10, but most B2B teams find $3,000 to $5,000 per month provides enough data to distinguish real results from vanity metrics."
        }
      },
      {
        "@type": "Question",
        "name": "How do I retarget specific audiences with LinkedIn ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use the LinkedIn Insight Tag and Matched Audiences for native retargeting. DemandSense adds a layer by identifying companies visiting your website and syncing high-intent accounts to your LinkedIn audiences automatically."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>LinkedIn Ads Optimization & Smart Scheduling Tool | DemandSense</title>
        <meta name="description" content="Take control of your LinkedIn ad spend. Smart scheduling, account-level frequency capping, budget guardrails, and audience tuning — so you know every dollar reaches the right accounts." />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <style>{`
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

          .trend-block:hover .trend-number {
            color: #eff6ff;
          }
        `}</style>
      </Helmet>

      <Navbar />

      <main className="bg-white overflow-x-hidden">
        {/* SECTION 1 — HERO (Aligned with Website Visitors) */}
        <section className="relative w-full min-h-[60vh] flex flex-col pt-32 pb-4 bg-white">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#3875F6]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
            <div ref={heroRef} className="space-y-8">
              <div className={cn(
                "transition-all duration-700",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                <SectionBadge icon={Target} text="LinkedIn Ads Optimization" />
              </div>

              <h1 className={cn(
                "text-4xl md:text-[45px] font-bold text-gray-900 tracking-tight leading-[1.15] transition-all duration-700 delay-100",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                Optimize LinkedIn Ads and <br />
                <span className="text-[#3875F6]">
                  Control Where Every Dollar Goes
                </span>
              </h1>

              <div className={cn(
                "space-y-6 transition-all duration-700 delay-200",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  DemandSense shows you which companies your LinkedIn ads actually reach — and lets you control when they run, how often the same accounts see them, and who stays in your audience.
                </p>
              </div>

              <div className={cn(
                "flex flex-col sm:flex-row items-center gap-6 transition-all duration-700 delay-400",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <Button variant="hero" size="hero" className="w-full sm:w-auto">
                  Start Your 30-Day Free Trial
                </Button>
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-gray-900">The easiest way to</p>
                  <p className="text-xs text-gray-500 text-center sm:text-left">save up to 40% of your ad spend.</p>
                </div>
              </div>
            </div>

            <div className={cn(
              "relative flex flex-col transition-all duration-1000 delay-300",
              heroInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}>
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#3875F6]/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                <LinkedInAdsHeroVisual />
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF TICKER */}
        <LogoTicker variant="dark" />

        {/* SECTION 2 — PROBLEM STATEMENT (Aligned with Website Visitors) */}
        <section 
          ref={ref as any}
          className={cn(
            "py-24 px-6 md:px-[112px] bg-white border-b border-gray-100",
            inView && "is-visible"
          )}
        >
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="problem-animate flex justify-center mb-6" style={{ animationDelay: '0ms' }}>
                <SectionBadge icon={AlertCircle} text="The Challenge" />
              </div>
              <h2 className="problem-animate text-3xl md:text-[45px] font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]" style={{ animationDelay: '100ms' }}>
                Your LinkedIn ad budget has <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">blind spots</span>
              </h2>
              <p className="problem-animate text-lg text-gray-600 leading-relaxed" style={{ animationDelay: '200ms' }}>
                Four things drain most LinkedIn ad budgets. None of them show up in your CTR.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Ads run when nobody's looking",
                  body: "There’s no native way to schedule ads by hour. Your campaigns serve impressions at 2am on a Saturday to the same people you want to reach at 9am on Tuesday.",
                  icon: <Clock className="w-6 h-6 text-blue-600" />,
                  color: "bg-blue-600"
                },
                {
                  title: "Same accounts keep seeing ads",
                  body: "Without account-level frequency controls, a small group of companies can consume the majority of your impressions. You pay for reach, but you’re just saturating the same people.",
                  icon: <Target className="text-orange-500 w-6 h-6" />,
                  color: "bg-orange-500"
                },
                {
                  title: "Your targeting still reaches the wrong companies",
                  body: "Even with tight targeting, about 30% of the companies seeing your ads fall outside your ICP. You built the audience right — but delivery doesn't always follow the rules.",
                  icon: <UserX className="w-6 h-6 text-red-500" />,
                  color: "bg-red-500"
                },
                {
                  title: "Budget has no monthly off switch",
                  body: "You can see which companies clicked, but that data sits in one place while targeting sits in another. By the time you act, you've already spent weeks on the wrong audiences.",
                  icon: <AlertCircle className="w-6 h-6 text-emerald-500" />,
                  color: "bg-emerald-500"
                }
              ].map((card, i) => (
                <div key={i} className="problem-animate trend-block p-6" style={{ animationDelay: `${300 + (i * 150)}ms` }}>
                  <div className="trend-number">0{i + 1}</div>
                  <div className="trend-icon-wrapper">
                    <div className={cn("trend-icon-bg", card.color)}></div>
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>

            <div className="problem-animate mt-16 p-10 rounded-[32px] bg-slate-900 text-center relative overflow-hidden" style={{ animationDelay: '800ms' }}>
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <p className="text-lg sm:text-xl text-blue-100 font-medium max-w-3xl mx-auto leading-relaxed relative z-10">
                These aren’t unusual scenarios. If you run LinkedIn ads for a B2B company, you’ve probably dealt with all four this quarter.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — FEATURE: SMART SCHEDULING */}
        <section className="py-24 px-6 md:px-[112px]">
          <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <SectionBadge icon={Clock} text="Smart Scheduling" />
                <h2 className="text-4xl md:text-[45px] font-bold text-[#0F2043] tracking-tight leading-tight">
                  LinkedIn ad scheduling that puts your budget where your audience is
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  DemandSense adds LinkedIn ad scheduling to your workflow, so you control exactly when your ads run, which hours get your budget, and when campaigns pause automatically.
                </p>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Set days, hours, and time zones to match your ICP's active windows",
                  "Automatically pause ads during low-intent periods",
                  "Shift budget to high-performance windows where your LinkedIn campaign optimization is most effective"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-6 bg-[#F5F9FF] border-l-4 border-blue-600 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  A B2B agency enabled scheduling and changed nothing else. CPC dropped 56% while impressions increased by 67%.
                </p>
              </div>
              <Button variant="hero" size="hero">
                Start Your 30-Day Free Trial
              </Button>
            </div>
            <div className="lg:col-span-5 w-full">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="magic-border h-full w-full scale-105 lg:scale-110 origin-center" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
                  <div className="rounded-[inherit] border border-gray-200/80 shadow-2xl overflow-hidden bg-white ring-1 ring-black/5">
                    <img 
                      src="/media/ads-scheduling.webp" 
                      alt="DemandSense LinkedIn Ad Scheduling Interface" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — FEATURE: BUDGET CONTROL */}
        <section className="py-24 px-6 md:px-[112px] bg-[#F5F9FF]">
          <div className="max-w-[1216px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="lg:col-span-5 w-full">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="magic-border h-full w-full scale-105 lg:scale-110 origin-center" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
                  <div className="rounded-[inherit] border border-gray-200/80 shadow-2xl overflow-hidden bg-white ring-1 ring-black/5">
                    <img 
                      src="dyad-media://media/LANDING_REVEAL/.dyad/media/465b04548e6ffd63318051e4ace6701b.png" 
                      alt="DemandSense LinkedIn Budget Control and Guardrails" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <SectionBadge icon={ShieldCheck} text="Frequency & Budget Control" />
                <h2 className="text-4xl md:text-[45px] font-bold text-[#0F2043] tracking-tight leading-tight">
                  Prevent monthly overspend with budget controls and frequency cap
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Daily budgets give you a rough throttle, but they don't prevent monthly overspend across multiple campaigns. DemandSense provides the hard stop you need to stay on budget.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Set monthly caps at account and campaign-group level",
                  "Automatic pausing when spend hits your defined threshold",
                  "Group campaigns by purpose, region, or initiative for granular control"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="font-bold text-gray-900">Most tools in this space alert you after the damage. DemandSense prevents it.</p>
              <Button variant="hero" size="hero">
                Start Your 30-Day Free Trial
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 5 — FEATURE: FREQUENCY CAPPING */}
        <section className="py-24 px-6 md:px-[112px]">
          <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <SectionBadge icon={Users} text="Frequency Capping" />
                <h2 className="text-4xl md:text-[45px] font-bold text-[#0F2043] tracking-tight leading-tight">
                  Set precise LinkedIn audience targeting to reach your actual ICP
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Don't let a handful of companies consume your entire budget. DemandSense ensures your message reaches your whole target list, not just the same few people repeatedly.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Set impression and click thresholds per company",
                  "Automatically shift budget to under-exposed accounts",
                  "Prevent over-saturation of high-intent companies",
                  "Exclude existing customers from seeing redundant ads"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="hero" size="hero">
                Start Your 30-Day Free Trial
              </Button>
            </div>
            <div className="lg:col-span-5 w-full">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="magic-border h-full w-full scale-105 lg:scale-110 origin-center" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
                  <div className="rounded-[inherit] border border-gray-200/80 shadow-2xl overflow-hidden bg-white ring-1 ring-black/5">
                    <img 
                      src="dyad-media://media/LANDING_REVEAL/.dyad/media/518d3c2dc382e17ce3a31cd67ffc9a12.png" 
                      alt="DemandSense LinkedIn Account-Level Frequency Capping" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — FEATURE: AUDIENCE TUNING */}
        <section className="py-24 px-6 md:px-[112px] bg-[#F5F9FF]">
          <div className="max-w-[1216px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="lg:col-span-5 w-full">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="magic-border h-full w-full scale-105 lg:scale-110 origin-center" style={{ "--magic-radius": "1.5rem" } as React.CSSProperties}>
                  <div className="rounded-[inherit] border border-gray-200/80 shadow-2xl overflow-hidden bg-white ring-1 ring-black/5">
                    <img 
                      src="/media/audience-tuning.webp" 
                      alt="DemandSense LinkedIn Audience Tuning and Exclusions" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <SectionBadge icon={Target} text="Audience Tuning" />
                <h2 className="text-4xl md:text-[45px] font-bold text-[#0F2043] tracking-tight leading-tight">
                  Tune linkedin ad targeting from a single screen
                </h2>
                <p className="text-xl font-bold text-gray-900 leading-tight">
                  See which companies engage and optimize in real-time
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Stop guessing who's clicking your ads. DemandSense gives you deep visibility into account engagement and the tools to act on it instantly.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Track 2,000+ companies interacting with your ads",
                  "Sort by impressions, clicks, or conversions to find fit",
                  "One-click exclusions for accounts that don't match your ICP",
                  "No CSV exports or manual list uploads required"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <Button variant="hero" size="hero">
                  Start Your 30-Day Free Trial
                </Button>
                <Link to="/audience-tuning" className="block text-blue-600 font-bold hover:underline">
                  Learn more about Audience Tuning →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — CASE STUDIES */}
        <section className="py-24 px-6 md:px-[112px]">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex justify-center mb-6">
                <SectionBadge icon={BarChart3} text="Case Studies" />
              </div>
              <h2 className="text-4xl md:text-[45px] font-bold text-[#0F2043] mb-4 tracking-tight">What happens when you turn on scheduling and change nothing else</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Every test below followed the same protocol: enable DemandSense scheduling, keep the same targeting, same creative, same budget. Measure for two weeks.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "SaaS Analytics company cuts CPC by 57% and Grows Impressions 44%",
                  metrics: ["CPC: -57.6%", "CPM: -45.5%", "Impressions: +44.2%"],
                  link: "/blog/linkedin-ad-scheduling-test-results"
                },
                {
                  title: "Mid-market financial services team drops CPC by 48% and lifts CTR by 8%",
                  metrics: ["CPC: -47.8%", "CPM: -43.3%", "Impressions: +54.9%", "CTR: +8.4%"],
                  link: "/blog/linkedin-ad-scheduling-test-results"
                },
                {
                  title: "Workplace management startup slashes CPM by 49% and reaches 44% more target accounts",
                  metrics: ["CPC: -27.1%", "CPM: -49.3%", "Impressions: +43.7%"],
                  link: "/blog/linkedin-ad-scheduling-test-results"
                },
                {
                  title: "B2B Marketing Agency cuts LinkedIn CPC by 56% and nearly doubles reach",
                  metrics: ["CPC: -56.1%", "CPM: -47.6%", "Impressions: +66.9%", "CTR: +19.8%"],
                  link: "/blog/linkedin-ad-scheduling-for-marketing-agency"
                }
              ].map((card, i) => (
                <Link key={i} to={card.link} className="block group">
                  <div className="bg-[#F5F9FF] p-8 rounded-2xl border border-blue-100 group-hover:border-blue-400 group-hover:bg-blue-50 transition-all h-full shadow-sm hover:shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">{card.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {card.metrics.map((metric, idx) => {
                        const colors = [
                          "bg-green-100 text-green-700 border-green-200",
                          "bg-blue-100 text-blue-700 border-blue-200",
                          "bg-indigo-100 text-indigo-700 border-blue-200",
                          "bg-violet-100 text-violet-700 border-violet-200"
                        ];
                        return (
                          <span 
                            key={idx} 
                            className={cn(
                              "px-3 py-1 rounded-full text-xs font-bold border",
                              colors[idx % colors.length]
                            )}
                          >
                            {metric}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <p className="text-center mt-12 text-gray-500 italic text-sm max-w-3xl mx-auto">
              When your ads only run during hours your audience is active, the algorithm rewards you with lower costs and better distribution. These numbers reflect that — and they come from scheduling alone, before adding frequency capping or audience tuning.
            </p>
          </div>
        </section>

        {/* SECTION 8 — TESTIMONIALS */}
        <TestimonialSection className="bg-[#F5F9FF] py-24" />

        {/* SECTION 9 — COMPETITOR COMPARISON */}
        <section className="py-24 px-6 md:px-[112px]">
          <div className="max-w-[1216px] mx-auto">
            <div className="flex justify-center mb-6">
              <SectionBadge icon={Zap} text="Comparison" />
            </div>
            <h2 className="text-4xl md:text-[45px] font-bold text-[#0F2043] mb-16 text-center tracking-tight">How DemandSense compares</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0F2043] text-white">
                    <th className="p-6 font-bold">Capability</th>
                    <th className="p-6 font-bold text-blue-400 border-r border-white/10">DemandSense</th>
                    <th className="p-6 font-bold text-gray-300 border-r border-white/10">Linklo</th>
                    <th className="p-6 font-bold text-gray-300">Campainless</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { cap: "Ad Scheduling / Dayparting", ds: "✓ Full", l: "✓ Full", c: "✓ Basic" },
                    { cap: "Monthly Budget Caps (enforced)", ds: "✓ Auto-pause", l: "◐ Alerts only", c: "◐ Tracking only" },
                    { cap: "Account-Level Frequency Cap", ds: "✓", l: "◐ Indirect", c: "—" },
                    { cap: "Company Engagement Visibility", ds: "✓ 2,000+ co’s", l: "—", c: "◐ Demo alerts" },
                    { cap: "Audience Tuning (exclude/expand)", ds: "✓ One-click", l: "◐ Rule-based", c: "—" },
                    { cap: "CRM Integration", ds: "✓ HubSpot + SF", l: "—", c: "—" },
                    { cap: "Self-Serve Trial", ds: "✓ Instant", l: "✓", c: "Waitlist" },
                    { cap: "Starting Price", ds: "$99/mo", l: "Not public", c: "$49/mo" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="p-6 text-sm font-medium text-gray-900">{row.cap}</td>
                      <td className="p-6 text-sm font-bold text-blue-700 bg-blue-50/30 border-r border-gray-100">{row.ds}</td>
                      <td className="p-6 text-sm text-gray-600 border-r border-gray-100">{row.l}</td>
                      <td className="p-6 text-sm text-gray-600">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-12 max-w-4xl mx-auto text-center space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                DemandSense is the only tool that covers all four delivery controls — scheduling, budget guardrails, frequency capping, and audience tuning — alongside company-level engagement visibility. Tools like Linklo and Campainless optimize delivery timing but don’t show you who your ads reached or give you the controls to act on it instantly.
              </p>
              <Link to="/pricing" className="inline-flex items-center text-blue-600 font-bold hover:underline text-lg">
                See pricing details →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 10 — FAQ (Styled like Website Visitors) */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <SectionBadge icon={HelpCircle} text="Common Questions" />
              </div>
              <h2 className="text-4xl md:text-[45px] font-bold text-[#0F2043] mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Frequently Asked</span> Questions
              </h2>
              <p className="text-gray-600">
                Everything you need to know about optimizing your LinkedIn ad spend.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left text-[#0F2043] font-semibold hover:text-blue-600 transition-colors">
                  How do I optimize LinkedIn Ads for better ROI?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  To optimize your LinkedIn ads, focus on three levers: scheduling, audience tuning, and frequency control. Use smart scheduling to run ads during high-engagement B2B hours, refine your targeting by excluding non-ICP companies, and set a frequency cap to prevent audience fatigue.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger className="text-left text-[#0F2043] font-semibold hover:text-blue-600 transition-colors">
                  What is the minimum audience size for LinkedIn Ads in 2026?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  The technical minimum to launch a campaign is 300 members. But the algorithm needs a larger pool to optimize effectively — most practitioners recommend 50,000 to 100,000. Smaller audiences can work if you’re running highly targeted ABM campaigns, but expect higher CPMs and slower learning.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger className="text-left text-[#0F2043] font-semibold hover:text-blue-600 transition-colors">
                  How can I set a frequency cap on LinkedIn?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Since LinkedIn doesn't offer a native manual frequency cap for most campaign types, you can use third-party tools like DemandSense. This allows you to set impression limits at the company level to protect your brand and budget.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger className="text-left text-[#0F2043] font-semibold hover:text-blue-600 transition-colors">
                  What’s a reasonable LinkedIn ads budget for a B2B startup?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  The minimum daily budget is $10, but most B2B teams find $3,000–5,000 per month gives enough data to see what’s actually driving results versus what’s generating vanity metrics. Below that, you’re making optimization decisions on too little data.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger className="text-left text-[#0F2043] font-semibold hover:text-blue-600 transition-colors">
                  How do I retarget specific audiences with LinkedIn ads?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Start with the LinkedIn Insight Tag and Matched Audiences for native retargeting. DemandSense adds another layer: it identifies companies visiting your website and can sync high-intent accounts to your LinkedIn audiences automatically — so your retargeting pool includes people who showed interest but never filled out a form.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* SECTION 11 — FINAL CTA (Styled like Website Visitors) */}
        <section
          ref={ctaRef as any}
          className="w-full bg-white px-6 md:px-[112px] py-24 lg:py-32 overflow-hidden"
        >
          <div className="max-w-[1216px] mx-auto">
            <div
              className={cn(
                "cta-card w-full rounded-[32px] px-8 md:px-16 py-20 md:py-24 flex flex-col items-center text-center relative overflow-hidden border border-blue-100 shadow-xl",
                "transition-all duration-1000 ease-out",
                ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
            >
              {/* Background Decorative Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="max-w-3xl mx-auto mb-16 relative z-10">
                <div className="flex justify-center mb-8">
                  <SectionBadge icon={Zap} text="GET A 30-DAY FREE TRIAL" />
                </div>

                <h2 className="text-4xl md:text-[45px] font-bold text-[#0F2043] mb-8 tracking-tight leading-[1.1]">
                  See what your LinkedIn ads are{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    actually doing
                  </span>{" "}
                  in real time
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect your account in under five minutes. DemandSense layers on top — scheduling, budget controls, frequency caps, and audience tuning start working immediately.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col items-center gap-6 relative z-10">
                <Button
                  variant="hero"
                  size="hero"
                  className="group shadow-xl shadow-blue-500/20"
                  asChild
                >
                  <Link to="/get-started">
                    Get A 30-Day Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <div className="flex flex-col items-center gap-1">
                  <p className="text-sm font-medium text-gray-900">
                    Set up in 5 minutes
                  </p>
                  <p className="text-xs text-gray-500">
                    to see your audiences and their buying intent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default LinkedInAdsOptimizationPage;