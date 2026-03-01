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
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

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
          "text": "Focus on three levers: scheduling ads during business hours, capping frequency at the account level, and reviewing which companies consume your impressions. Tools like DemandSense let you manage all three from one screen."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum audience size for LinkedIn Ads in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The technical minimum is 300 members. For effective optimization, most practitioners recommend 50,000 to 100,000 to give the algorithm enough data to learn."
        }
      },
      {
        "@type": "Question",
        "name": "How can I set a LinkedIn ads frequency cap?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Native frequency controls exist for some campaign types but not at the account or company level. DemandSense lets you set impression and click thresholds per company to prevent ad fatigue and redirect budget."
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
      </Helmet>

      <Navbar />

      <main className="bg-white">
        {/* SECTION 1 — HERO */}
        <section className="pt-32 pb-20 px-6 md:px-[112px] w-full">
          <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-[55%] space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
                Optimize Your LinkedIn Ads and Control Where Every Dollar Goes
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your campaigns spend budget around the clock. But you can’t control when ads run, how often the same accounts see them, or whether the companies engaging actually match your ICP. The data exists — acting on it just takes too long.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                DemandSense fixes that. Scheduling, budget guardrails, frequency capping, and audience tuning — one place to optimize LinkedIn ads and know where the money went.
              </p>
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
                  <span className="font-bold text-xl">Impactable</span>
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

        {/* SECTION 2 — PROBLEM STATEMENT */}
        <section className="py-24 px-6 md:px-[112px] bg-gray-50">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Where LinkedIn ad budgets go wrong</h2>
              <p className="text-lg text-gray-600">Three things drain most LinkedIn ad budgets. None of them show up in your CTR.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Your ads run when nobody’s looking",
                  body: "There’s no native way to schedule ads by hour. So your campaigns serve impressions at 2am on a Saturday to the same people you want to reach at 9am on Tuesday. You set a daily budget, and it gets spent — just not when it matters."
                },
                {
                  title: "The same accounts keep seeing your ads",
                  body: "Without account-level frequency controls, a small group of companies can consume the majority of your impressions. You pay for reach, but you’re really just saturating the same people until they stop noticing."
                },
                {
                  title: "Engagement data exists, but acting on it takes too long",
                  body: "You can see which companies clicked. But that data sits in one place while your targeting controls sit in another. By the time you export, cross-reference, and update exclusion lists, you’ve already spent weeks on audiences that don’t fit."
                }
              ].map((card, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-12 text-gray-500 italic">These aren’t unusual scenarios. If you run LinkedIn ads for a B2B company, you’ve probably dealt with all three this quarter.</p>
          </div>
        </section>

        {/* SECTION 3 — FEATURE: SMART SCHEDULING */}
        <section className="py-24 px-6 md:px-[112px]">
          <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-[55%] space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ad scheduling that stops you paying for 3am impressions</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                There’s no native way to schedule LinkedIn ads by hour. So your budget gets distributed across all 24 hours, seven days a week, regardless of when your buyers are actually at their desks. DemandSense fills that gap.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Set days, hours, and time zones.</h3>
                  <p className="text-gray-600">Pick the windows when your ICP is active. Campaigns pause automatically outside those hours and reactivate on schedule. No manual toggling.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Apply schedules in bulk.</h3>
                  <p className="text-gray-600">Managing 10+ campaigns? Set a schedule once and apply it across all of them. When you need to adjust, change it in one place.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Your judgment stays in charge.</h3>
                  <p className="text-gray-600">If you manually pause a campaign in Campaign Manager, DemandSense respects that. The schedule never overrides your decisions.</p>
                </div>
              </div>
              <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
                <p className="text-gray-800 font-medium">
                  A B2B marketing agency tested this by turning on scheduling and changing nothing else — same targeting, same creative, same budget. CPC dropped 56%. Impressions went up 67%.
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Monthly budget guardrails that actually hold</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Daily budgets give you a rough throttle. But if you’re running campaigns across different funnel stages — cold, retargeting, conversion — there’s no easy way to cap total monthly spend across the account. You find out you overspent at the end of the month, not before.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Monthly caps at account and campaign-group level.</h3>
                  <p className="text-gray-600">Set a number. Set a variance threshold (down to 0% if you want it tight). When spend hits the cap, campaigns pause. Budget checks run every three hours.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Group campaigns by purpose.</h3>
                  <p className="text-gray-600">Create budget groups for stages, regions, or initiatives. Track each one independently. Know where every dollar goes before it’s gone.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Auto-resume when you increase a cap.</h3>
                  <p className="text-gray-600">If priorities change mid-month and you raise a limit, campaigns restart without you touching them. You also get alerts when forecasts show you’re trending toward overspend — before you hit the wall.</p>
                </div>
              </div>
              <p className="font-bold text-gray-900">Most tools in this space alert you after the damage. DemandSense prevents it.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Account-level frequency caps to stop ad fatigue before it starts</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Here’s what ad fatigue looks like in practice: a handful of companies see your ads 15+ times while most of your target list barely sees them once. CTR drops. CPC creeps up. Your budget is technically “working” — it’s just working on the wrong accounts.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Native frequency controls are rolling out for some campaign types, but they’re not available at the account or company level across the board. For B2B teams running account-based campaigns, that gap matters.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                DemandSense lets you set impression and click caps per company.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When a company hits the threshold, ads stop being served to them. Budget shifts to under-exposed accounts that haven’t seen your message yet.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Two places this matters most: companies that keep clicking without converting (stop spending on them), and existing customers who don’t need the same ad exposure anymore (free that budget for net-new accounts).
              </p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">See which companies engage with your ads — then tune targeting from the same screen</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                You ran a campaign. It got 200 clicks. Were they from companies you’d actually want as customers?
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The engagement data is out there. But moving from “I see Company X clicked” to “I’ve excluded Company X and shifted budget to better-fit accounts” usually involves several tabs, a CSV export, and a list upload. It’s nobody’s favorite Tuesday morning.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                DemandSense tracks 2,000+ companies that interacted with your ads — not the ~20 records you’d see in a typical demographics view. Sort by impressions, clicks, or conversions. Filter by industry, headcount, or ICP match.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Then act on it. See a company that’s clearly not a fit? Thumbs down. It goes to your exclusion list and pushes to your campaigns. See an account you want more of? Thumbs up. One click. No exports.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed italic">
                This is the part of LinkedIn ads optimization that most tools skip. Scheduling and budget controls improve delivery efficiency. Audience tuning improves delivery quality.
              </p>
              <div className="space-y-4">
                <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/get-started">Start Free Trial</Link>
                </Button>
                <Link to="/audience-tuning" className="block text-blue-600 font-medium hover:underline">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What happens when you turn on scheduling and change nothing else</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Every test below followed the same protocol: enable DemandSense scheduling, keep the same targeting, same creative, same budget. Measure for two weeks.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Software Company",
                  meta: "501–1,000 employees · 2-week test",
                  metrics: "CPC: -57.6% · CPM: -45.5% · Impressions: +44.2%",
                  link: "/blog/linkedin-ad-scheduling-test-results"
                },
                {
                  title: "Private Lending / Financial Services",
                  meta: "51–200 employees · 2-week test",
                  metrics: "CPC: -47.8% · CPM: -43.3% · Impressions: +54.9% · CTR: +8.4%",
                  link: "/blog/linkedin-ad-scheduling-test-results"
                },
                {
                  title: "Workplace Management Platform",
                  meta: "51–200 employees · 2-week test",
                  metrics: "CPC: -27.1% · CPM: -49.3% · Impressions: +43.7%",
                  link: "/blog/linkedin-ad-scheduling-test-results"
                },
                {
                  title: "B2B Marketing Agency",
                  meta: "51–200 employees · 2-week test",
                  metrics: "CPC: -56.1% · CPM: -47.6% · Impressions: +66.9% · CTR: +19.8%",
                  link: "/blog/linkedin-ad-scheduling-for-marketing-agency"
                }
              ].map((card, i) => (
                <Link key={i} to={card.link} className="block group">
                  <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 group-hover:border-blue-200 transition-all">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-500 mb-6">{card.meta}</p>
                    <p className="text-lg font-bold text-emerald-600 tracking-tight">
                      {card.metrics}
                    </p>
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
        <section className="py-24 px-6 md:px-[112px] bg-gray-50">
          <div className="max-w-[1216px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">What teams are saying</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">How DemandSense compares</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-6 font-bold text-gray-900">Capability</th>
                    <th className="p-6 font-bold text-blue-600 bg-blue-50/50">DemandSense</th>
                    <th className="p-6 font-bold text-gray-600">Linklo</th>
                    <th className="p-6 font-bold text-gray-600">Campainless</th>
                    <th className="p-6 font-bold text-gray-600">Fibbler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { cap: "Ad Scheduling / Dayparting", ds: "✓ Full", l: "✓ Full", c: "✓ Basic", f: "—" },
                    { cap: "Monthly Budget Caps (enforced)", ds: "✓ Auto-pause", l: "◐ Alerts only", c: "◐ Tracking only", f: "—" },
                    { cap: "Account-Level Frequency Cap", ds: "✓", l: "◐ Indirect", c: "—", f: "—" },
                    { cap: "Company Engagement Visibility", ds: "✓ 2,000+ co’s", l: "—", c: "◐ Demo alerts", f: "✓" },
                    { cap: "Audience Tuning (exclude/expand)", ds: "✓ One-click", l: "◐ Rule-based", c: "—", f: "—" },
                    { cap: "CRM Integration", ds: "✓ HubSpot + SF", l: "—", c: "—", f: "✓" },
                    { cap: "Self-Serve Trial", ds: "✓ Instant", l: "✓", c: "Waitlist", f: "✓" },
                    { cap: "Starting Price", ds: "$99/mo", l: "Not public", c: "$49/mo", f: "Not public" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="p-6 text-sm font-medium text-gray-900">{row.cap}</td>
                      <td className="p-6 text-sm font-bold text-blue-700 bg-blue-50/30">{row.ds}</td>
                      <td className="p-6 text-sm text-gray-600">{row.l}</td>
                      <td className="p-6 text-sm text-gray-600">{row.c}</td>
                      <td className="p-6 text-sm text-gray-600">{row.f}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-12 max-w-4xl mx-auto text-center space-y-6">
              <p className="text-gray-600 leading-relaxed">
                DemandSense is the only tool that covers all four delivery controls — scheduling, budget guardrails, frequency capping, and audience tuning — alongside company-level engagement visibility. Tools like Linklo and Campainless optimize delivery timing but don’t show you who your ads reached. Attribution tools like Fibbler show engagement but don’t give you the controls to act on it.
              </p>
              <Link to="/pricing" className="inline-flex items-center text-blue-600 font-bold hover:underline">
                See pricing details →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 10 — FAQ */}
        <section className="py-24 px-6 md:px-[112px] bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Common questions about LinkedIn ads optimization</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1" className="border-gray-200">
                <AccordionTrigger className="text-left font-bold text-gray-900 py-6">How do I optimize LinkedIn Ads for better ROI?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  Focus on three things: when your ads run, how often the same accounts see them, and whether the companies engaging actually match your ICP. Schedule ads during business hours, cap frequency at the account level, and regularly review which companies are consuming your impressions. Tools like DemandSense let you do all three from one screen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2" className="border-gray-200">
                <AccordionTrigger className="text-left font-bold text-gray-900 py-6">What is the minimum audience size for LinkedIn Ads in 2026?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  The technical minimum to launch a campaign is 300 members. But the algorithm needs a larger pool to optimize effectively — most practitioners recommend 50,000 to 100,000. Smaller audiences can work if you’re running highly targeted ABM campaigns, but expect higher CPMs and slower learning.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3" className="border-gray-200">
                <AccordionTrigger className="text-left font-bold text-gray-900 py-6">How can I set a frequency cap on LinkedIn?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  Native frequency controls exist for some campaign types, but account-level or company-level caps aren’t widely available. DemandSense lets you set impression and click thresholds per company. When a company hits the limit, they stop seeing your ads and budget shifts to under-exposed accounts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4" className="border-gray-200">
                <AccordionTrigger className="text-left font-bold text-gray-900 py-6">What’s a reasonable LinkedIn ads budget for a B2B startup?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  The minimum daily budget is $10, but most B2B teams find $3,000–5,000 per month gives enough data to see what’s actually driving results versus what’s generating vanity metrics. Below that, you’re making optimization decisions on too little data.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5" className="border-gray-200">
                <AccordionTrigger className="text-left font-bold text-gray-900 py-6">How do I retarget specific audiences with LinkedIn ads?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  Start with the LinkedIn Insight Tag and Matched Audiences for native retargeting. DemandSense adds another layer: it identifies companies visiting your website and can sync high-intent accounts to your LinkedIn audiences automatically — so your retargeting pool includes people who showed interest but never filled out a form.
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
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">See what your LinkedIn ads are actually doing</h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Connect your account in under five minutes. Keep your existing campaigns. DemandSense layers on top — scheduling, budget controls, frequency caps, and audience tuning start working immediately. You get a 30-day free trial with 100 credits included.
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