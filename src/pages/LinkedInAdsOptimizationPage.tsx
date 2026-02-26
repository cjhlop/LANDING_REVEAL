"use client";

import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { 
  Check, 
  ArrowRight, 
  Play, 
  Clock, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  AlertCircle,
  ChevronRight,
  CheckCircle2,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import SectionBadge from "@/components/SectionBadge";

const LinkedInAdsOptimizationPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I optimize LinkedIn Ads for better ROI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Focus on three levers: scheduling ads during business hours, capping frequency at the account level, and reviewing which companies consume your impressions. DemandSense provides scheduling, frequency capping, and audience tuning controls in one place."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum audience size for LinkedIn Ads in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The technical minimum is 300 members. For effective optimization, most practitioners recommend 50,000 to 100,000 to give the algorithm enough data to work with."
        }
      },
      {
        "@type": "Question",
        "name": "How can I set a LinkedIn ads frequency cap?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Native frequency controls exist for some campaign types but not at the account or company level. DemandSense lets you set impression and click thresholds per company. When the cap is reached, ads stop serving to that company and budget shifts to under-exposed accounts."
        }
      },
      {
        "@type": "Question",
        "name": "What is a reasonable LinkedIn ads budget for a B2B startup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The minimum daily budget is $10, but most B2B teams find $3,000 to $5,000 per month provides enough data to distinguish real results from vanity metrics. DemandSense budget guardrails enforce monthly caps at the account and campaign-group level."
        }
      },
      {
        "@type": "Question",
        "name": "How do I retarget specific audiences with LinkedIn ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use the LinkedIn Insight Tag and Matched Audiences for native retargeting. DemandSense adds a layer by identifying companies visiting your website and syncing high-intent accounts to LinkedIn targeting."
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
      </Helmet>

      <Navbar />

      <main className="bg-white">
        {/* SECTION 1 — HERO */}
        <section className="pt-32 pb-20 px-6 md:px-[112px] w-full">
          <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-[55%] space-y-8">
              <SectionBadge text="LINKEDIN ADS OPTIMIZATION" />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
                Optimize Your LinkedIn Ads and Control Where Every Dollar Goes
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                You’re spending $3K–30K a month on LinkedIn. You can’t schedule when ads run, cap how often the same company sees them, or tell whether your clicks came from ICP accounts. DemandSense gives you those controls.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>Schedule ads by hour, day, and time zone</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>Cap frequency and budget at the account level</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>See which companies engage — and tune targeting in one click</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/get-started">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/demo">Watch Demo</Link>
                </Button>
              </div>
              <div className="pt-4">
                <p className="text-sm text-gray-500 mb-6">Used by 100+ B2B companies · Average 40% reduction in wasted spend</p>
                <div className="flex flex-wrap items-center gap-8 opacity-50 grayscale">
                  <span className="font-bold text-xl">BlueStar</span>
                  <span className="font-bold text-xl">Vim</span>
                  <span className="font-bold text-xl">Project Scale</span>
                  <span className="font-bold text-xl">LeadCycle</span>
                  <span className="font-bold text-xl">Opteo</span>
                </div>
              </div>
            </div>
            <div className="lg:w-[45%] w-full">
              <div className="relative rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-white">
                <img 
                  src="/media/ads-scheduling-interface.png" 
                  alt="DemandSense LinkedIn Ads Optimization Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — THE PROBLEM */}
        <section className="py-24 px-6 md:px-[112px] bg-gray-50">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <SectionBadge text="THE PROBLEM" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">Where LinkedIn ad budgets go wrong</h2>
              <p className="text-lg text-gray-600">If you’re running LinkedIn campaigns for a B2B team, you’ve probably hit all three of these this quarter.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Your ads run when nobody’s looking",
                  body: "LinkedIn doesn’t offer hour-of-day scheduling. Your budget spends at 2am the same as 9am — and you can’t change that natively."
                },
                {
                  title: "The same accounts keep seeing your ads",
                  body: "No account-level frequency controls means a small group of companies eats most of your impressions while the rest of your list never sees you."
                },
                {
                  title: "You can see who clicked, but you can’t act on it fast enough",
                  body: "Company-level engagement data sits in one tab. LinkedIn campaign optimization controls sit in another. By the time you cross-reference, you’ve already spent the budget."
                }
              ].map((card, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — FEATURE: SMART SCHEDULING */}
        <section className="py-24 px-6 md:px-[112px]">
          <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-[55%] space-y-8">
              <SectionBadge text="LINKEDIN AD SCHEDULING" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ad scheduling that stops you paying for 3am impressions</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                There’s no native way to run LinkedIn ads scheduling by hour. So your campaigns serve impressions around the clock — including weekends and overnight — when your buyers aren’t at their desks. DemandSense adds the controls LinkedIn left out.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Set days, hours, and time zones</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> Choose the exact windows when your ICP is active — by day, hour, and time zone</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> Campaigns pause outside those hours and reactivate on schedule</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> No manual toggling, no forgetting to turn things back on Monday morning</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Apply schedules in bulk</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> Set a schedule once and apply it across 10+ campaigns</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> Need to shift timing? Change it in one place</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Your judgment stays in charge</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> Manually pause a campaign in Campaign Manager — DemandSense respects it</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> The schedule never overrides your decisions. You stay in control.</li>
                  </ul>
                </div>
              </div>
              <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  📊 Proof: A B2B agency turned on scheduling and changed nothing else — same targeting, same creative, same budget. CPC dropped 56%. Impressions went up 67%.
                </p>
              </div>
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/get-started">Start Free Trial</Link>
              </Button>
            </div>
            <div className="lg:w-[45%] w-full">
              <div className="rounded-2xl border border-gray-200 shadow-xl overflow-hidden bg-white">
                <img 
                  src="/media/ads-scheduling.webp" 
                  alt="DemandSense LinkedIn Ad Scheduling Interface" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — FEATURE: BUDGET CONTROL */}
        <section className="py-24 px-6 md:px-[112px] bg-gray-50">
          <div className="max-w-[1216px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="lg:w-[45%] w-full">
              <div className="rounded-2xl border border-gray-200 shadow-xl overflow-hidden bg-white">
                <img 
                  src="/media/card3.png" 
                  alt="DemandSense LinkedIn Budget Control and Guardrails" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="lg:w-[55%] space-y-8">
              <SectionBadge text="LINKEDIN BUDGET OPTIMIZATION" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Monthly budget guardrails that actually hold</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                You set daily budgets. LinkedIn spends them. But if you’re running campaigns across cold, retargeting, and conversion stages, there’s no native way to cap what the whole account spends in a month. You find out you overspent when finance flags it — not before. DemandSense enforces hard monthly limits.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Monthly caps at account and campaign-group level</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> Set a cap and a variance threshold (down to 0% if you want it tight)</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> Campaigns pause when spend hits the limit — not after</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> Budget checks run every three hours</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Group campaigns by purpose</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> Create budget groups for funnel stages, regions, or initiatives</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> Track each group independently so you know where every dollar goes before it’s gone</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Auto-resume when you increase a cap</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> Raise a limit mid-month and campaigns restart automatically</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> Get alerts when forecasts show you’re trending toward overspend — before you hit the wall</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-900 font-medium">
                The LinkedIn ads minimum daily budget is $10, but most B2B teams spend $3,000–5,000/month to get meaningful data. DemandSense makes sure you never blow past what you budgeted — whether you’re running one campaign or twenty.
              </p>
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/get-started">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 5 — FEATURE: FREQUENCY CAPPING */}
        <section className="py-24 px-6 md:px-[112px]">
          <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-[55%] space-y-8">
              <SectionBadge text="LINKEDIN ADS FREQUENCY CAP" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Account-level frequency caps to stop ad fatigue before it starts</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                You open Campaign Manager and your top campaign has a great CTR. But look closer: five companies account for half the impressions. They’ve each seen your ad 15+ times. Meanwhile, most of your target list barely saw it once. LinkedIn ads frequency controls exist for some campaign types, but company-level caps aren’t available across the board. DemandSense fills that gap.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Set impression and click caps per company</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> When a company hits the threshold you set, ads stop being served to them</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> Budget automatically shifts to under-exposed accounts that haven’t seen your message yet</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Two places this matters most</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> Companies that keep clicking but never convert — stop spending on them and redirect that budget</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> Existing customers who don’t need the same ad exposure — free that spend for net-new accounts you actually want to reach</li>
                  </ul>
                </div>
              </div>
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/get-started">Start Free Trial</Link>
              </Button>
            </div>
            <div className="lg:w-[45%] w-full">
              <div className="rounded-2xl border border-gray-200 shadow-xl overflow-hidden bg-white">
                <img 
                  src="/media/frequency-cap.webp" 
                  alt="DemandSense LinkedIn Account-Level Frequency Capping" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — FEATURE: AUDIENCE TUNING */}
        <section className="py-24 px-6 md:px-[112px] bg-gray-50">
          <div className="max-w-[1216px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="lg:w-[45%] w-full">
              <div className="rounded-2xl border border-gray-200 shadow-xl overflow-hidden bg-white">
                <img 
                  src="/media/audience-tuning.webp" 
                  alt="DemandSense LinkedIn Audience Tuning and Exclusions" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="lg:w-[55%] space-y-8">
              <SectionBadge text="LINKEDIN AD AUDIENCES" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">See which companies engage — then tune targeting from the same screen</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your campaign got 200 clicks last week. Your boss asks: “Were those from companies we’d actually sell to?” You don’t have a fast answer. LinkedIn’s demographics tab shows ~20 companies. Exporting, cross-referencing, and updating exclusion lists takes hours. DemandSense goes beyond basic LinkedIn advertising targeting options — it shows you every company that engaged and lets you act on it without leaving the screen.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">2,000+ companies tracked per account</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> See every company that interacted with your ads — not the ~20 in a demographics view</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> Sort by impressions, clicks, or conversions</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> Filter by industry, headcount, or revenue to spot ICP fit instantly</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Act on it in one click</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><ThumbsDown className="h-4 w-4 text-red-500 mt-1" /> Thumbs down a company → it goes to your exclusion list and pushes to campaigns</li>
                    <li className="flex items-start gap-2"><ThumbsUp className="h-4 w-4 text-emerald-500 mt-1" /> Thumbs up an account you want more of → instant positive signal, no exports</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 text-blue-600 mt-1" /> Targeted VPs but getting Marketing Managers? You’ll see that pattern here — and fix it from the same screen</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-900 font-medium">
                This extends standard LinkedIn targeting capabilities into something you can actually use mid-campaign. Scheduling and budget controls improve delivery efficiency. Audience tuning improves delivery quality — so you’re not just spending smarter, you’re spending on the right companies.
              </p>
              <div className="flex flex-col gap-4">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 w-fit">
                  <Link to="/get-started">Start Free Trial</Link>
                </Button>
                <Link to="/audience-tuning" className="text-blue-600 font-bold hover:underline">
                  Learn more about Audience Tuning →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — CASE STUDIES */}
        <section className="py-24 px-6 md:px-[112px]">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <SectionBadge text="PROOF" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">What happens when you turn on scheduling and change nothing else</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">No creative changes. No targeting changes. No budget changes. Just scheduling. Two weeks of data. Here’s what four different teams saw.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "SOFTWARE · 501–1,000 EMPLOYEES",
                  metrics: "−57.6% ↓ CPC  |  −45.5% ↓ CPM  |  +44.2% ↑ impressions"
                },
                {
                  title: "FINANCIAL SERVICES · 51–200 EMPLOYEES",
                  metrics: "−47.8% ↓ CPC  |  −43.3% ↓ CPM  |  +54.9% ↑ impressions  |  +8.4% ↑ CTR"
                },
                {
                  title: "WORKPLACE MANAGEMENT · 51–200 EMPLOYEES",
                  metrics: "−27.1% ↓ CPC  |  −49.3% ↓ CPM  |  +43.7% ↑ impressions"
                },
                {
                  title: "B2B MARKETING AGENCY · 51–200 EMPLOYEES",
                  metrics: "−56.1% ↓ CPC  |  −47.6% ↓ CPM  |  +66.9% ↑ impressions  |  +19.8% ↑ CTR"
                }
              ].map((card, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider">{card.title}</h3>
                  <p className="text-2xl font-bold text-emerald-600 tracking-tight">
                    {card.metrics}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 max-w-4xl mx-auto text-center space-y-6">
              <p className="text-gray-600 leading-relaxed">
                When your ads only run during hours your audience is online, LinkedIn’s algorithm concentrates delivery into a smaller window with higher engagement rates. It rewards that concentration with lower auction costs and wider distribution. These numbers come from scheduling alone — before budget controls, frequency capping, or audience tuning.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/blog/linkedin-ad-scheduling-test-results" className="text-blue-600 font-bold hover:underline">
                  Read the full test methodology →
                </Link>
                <Link to="/blog/linkedin-ad-scheduling-for-marketing-agency" className="text-blue-600 font-bold hover:underline">
                  Agency case study →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 — TESTIMONIALS */}
        <section className="py-24 px-6 md:px-[112px] bg-gray-50">
          <div className="max-w-[1216px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "I’ve been using DemandSense for almost a full week, and the early returns are pretty awesome. CPMs are down between 30-40%, impressions are up between 50-100+%, and clicks are up between 30-60%.",
                  author: "James Korte",
                  role: "Director of Marketing, BlueStar US"
                },
                {
                  quote: "LinkedIn Ad Scheduling of DemandSense is my favorite feature too, and it saves me thousands of $$ every month. I’ve been using it for 2+ years!",
                  author: "Or Livne",
                  role: "Growth Marketing Lead, Vim"
                },
                {
                  quote: "I’m a HUGE fan of DemandSense… probably reduced my cost per lead by 60% the second I turned it on. It’s literally been the difference between a campaign being incredibly successful, or burning a hole in my pocket.",
                  author: "Jason Squires",
                  role: "Founder, Project Scale"
                }
              ].map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                  <span className="absolute top-4 left-4 text-6xl text-blue-100 font-serif leading-none">“</span>
                  <p className="text-gray-700 leading-relaxed mb-8 relative z-10">{t.quote}</p>
                  <div>
                    <p className="font-bold text-gray-900">{t.author}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9 — COMPETITOR COMPARISON */}
        <section className="py-24 px-6 md:px-[112px]">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <SectionBadge text="COMPARE" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">How DemandSense compares</h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-6 font-bold text-gray-900">Feature</th>
                    <th className="p-6 font-bold text-blue-600 bg-blue-50/50">DemandSense</th>
                    <th className="p-6 font-bold text-gray-600">Linklo</th>
                    <th className="p-6 font-bold text-gray-600">Campainless</th>
                    <th className="p-6 font-bold text-gray-600">Fibbler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { feat: "Ad scheduling", ds: "✓", l: "✓", c: "✓", f: "—" },
                    { feat: "Budget guardrails", ds: "✓", l: "—", c: "—", f: "—" },
                    { feat: "Account-level frequency cap", ds: "✓", l: "◐", c: "—", f: "—" },
                    { feat: "Audience tuning", ds: "✓", l: "—", c: "—", f: "—" },
                    { feat: "Company engagement visibility", ds: "✓", l: "—", c: "—", f: "◐" },
                    { feat: "CRM integration", ds: "✓", l: "—", c: "—", f: "—" },
                    { feat: "PLG free trial", ds: "✓", l: "—", c: "✓", f: "✓" },
                    { feat: "Case studies with methodology", ds: "4", l: "1", c: "0", f: "0" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="p-6 text-sm font-medium text-gray-900">{row.feat}</td>
                      <td className="p-6 text-sm font-bold text-blue-700 bg-blue-50/30">{row.ds}</td>
                      <td className="p-6 text-sm text-gray-600">{row.l}</td>
                      <td className="p-6 text-sm text-gray-600">{row.c}</td>
                      <td className="p-6 text-sm text-gray-600">{row.f}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-12 text-center space-y-6">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/get-started">Start Free Trial</Link>
              </Button>
              <div className="block">
                <Link to="/pricing" className="text-blue-600 font-bold hover:underline">
                  See pricing details →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10 — FAQ */}
        <section className="py-24 px-6 md:px-[112px] bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <SectionBadge text="FAQ" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">Common questions about LinkedIn ads optimization</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1" className="border-gray-200">
                <AccordionTrigger className="text-left font-bold text-gray-900 py-6">How do I optimize LinkedIn Ads for better ROI?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  Focus on three things: when your ads run, how often the same accounts see them, and whether the companies engaging actually match your ICP. Schedule ads during business hours, cap frequency at the account level, and review which companies consume your impressions. Most wasted spend comes from ads running at off-peak hours and over-serving the same small group of accounts. DemandSense gives you controls for all three — scheduling, frequency capping, and audience tuning — in one place.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2" className="border-gray-200">
                <AccordionTrigger className="text-left font-bold text-gray-900 py-6">What is the minimum audience size for LinkedIn Ads in 2026?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  The technical minimum to launch a campaign is 300 members. But the algorithm needs a larger pool to optimize effectively — most practitioners recommend 50,000 to 100,000. Smaller audiences can work if you pair tight targeting with smart scheduling so you’re not exhausting the same people at off-peak hours. DemandSense’s frequency caps help prevent that saturation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3" className="border-gray-200">
                <AccordionTrigger className="text-left font-bold text-gray-900 py-6">How can I set a frequency cap on LinkedIn?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  Native frequency controls exist for some campaign types, but account-level or company-level caps aren’t widely available. DemandSense lets you set impression and click thresholds per company. When a company hits the cap, ads stop being served to them — and budget shifts to accounts that haven’t seen your message yet.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4" className="border-gray-200">
                <AccordionTrigger className="text-left font-bold text-gray-900 py-6">What’s a reasonable LinkedIn ads budget for a B2B startup?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  The minimum daily budget is $10, but most B2B teams find $3,000–5,000 per month gives enough data to see what’s actually driving results versus what’s generating vanity metrics. Below that, you’re making decisions on too little data. DemandSense’s budget guardrails help you enforce monthly caps so you never overshoot — whether you’re running one campaign or twenty.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5" className="border-gray-200">
                <AccordionTrigger className="text-left font-bold text-gray-900 py-6">How do I retarget specific audiences with LinkedIn ads?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  Start with the LinkedIn Insight Tag and Matched Audiences for native retargeting. DemandSense adds another layer: it identifies companies visiting your website and can sync high-intent accounts to your LinkedIn targeting — so your retargeting reaches the companies already showing buying signals, not just anyone who bounced off your homepage.
                  <div className="mt-4">
                    <Link to="/reveal-intent" className="text-blue-600 font-bold hover:underline">Learn more about visitor identification →</Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* SECTION 11 — FINAL CTA */}
        <section className="py-24 px-6 md:px-[112px] bg-slate-900 text-white text-center">
          <div className="max-w-[1216px] mx-auto space-y-8">
            <SectionBadge text="GET STARTED" variant="dark" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">See what your LinkedIn ads are actually doing</h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Connect your LinkedIn account in under five minutes. Keep your existing campaigns, targeting, and creative. DemandSense layers on top — and the next time your CEO asks where the budget went, you’ll have an answer.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white border-none px-10">
                <Link to="/get-started">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-slate-900 px-10">
                <Link to="/demo">Watch 2-Min Demo</Link>
              </Button>
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