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
          <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-[50%] space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
                Optimize Your LinkedIn Ads and Control Where Every Dollar Goes
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your campaigns spend budget around the clock. But you can’t control when ads run, how often the same accounts see them, or whether the companies engaging actually match your ICP.
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
                  <span className="font-bold text-xl">LeadCycle</span>
                  <span className="font-bold text-xl">Opteo</span>
                </div>
              </div>
            </div>
            <div className="lg:w-[50%] w-full">
              <div className="relative rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-white">
                <img 
                  src="/media/ads-scheduling-interface.png" 
                  alt="DemandSense LinkedIn Ads Optimization Dashboard" 
                  className="w-full h-auto object-cover"
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
                  body: "There’s no native way to schedule ads by hour. So your campaigns serve impressions at 2am on a Saturday to the same people you want to reach at 9am on Tuesday."
                },
                {
                  title: "The same accounts keep seeing your ads",
                  body: "Without account-level frequency controls, a small group of companies can consume the majority of your impressions. You pay for reach, but you’re really just saturating the same people."
                },
                {
                  title: "Engagement data exists, but acting on it takes too long",
                  body: "You can see which companies clicked. But that data sits in one place while your targeting controls sit in another. By the time you act, you've already overspent."
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
            <div className="lg:w-[45%] space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ad scheduling that stops you paying for 3am impressions</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Pick the windows when your ICP is active. Campaigns pause automatically outside those hours and reactivate on schedule. No manual toggling.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-100 p-2 rounded-lg h-fit"><Clock className="text-blue-600 w-5 h-5" /></div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Set days, hours, and time zones</h3>
                    <p className="text-gray-600">Target business hours across multiple regions effortlessly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-100 p-2 rounded-lg h-fit"><Zap className="text-blue-600 w-5 h-5" /></div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Apply schedules in bulk</h3>
                    <p className="text-gray-600">Set a schedule once and apply it across all your campaigns.</p>
                  </div>
                </div>
              </div>
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/get-started">Start Free Trial</Link>
              </Button>
            </div>
            <div className="lg:w-[55%] w-full">
              <div className="rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-white">
                <img 
                  src="/media/ads-scheduling.webp" 
                  alt="DemandSense LinkedIn Ad Scheduling Interface" 
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — FEATURE: BUDGET CONTROL */}
        <section className="py-24 px-6 md:px-[112px] bg-gray-50">
          <div className="max-w-[1216px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="lg:w-[55%] w-full">
              <div className="rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-white">
                <img 
                  src="/media/card3.png" 
                  alt="DemandSense LinkedIn Budget Control and Guardrails" 
                  className="w-full h-auto block"
                />
              </div>
            </div>
            <div className="lg:w-[45%] space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Monthly budget guardrails that actually hold</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Set a number. Set a variance threshold. When spend hits the cap, campaigns pause. Budget checks run every three hours to prevent overspend.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-100 p-2 rounded-lg h-fit"><ShieldCheck className="text-blue-600 w-5 h-5" /></div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Account-level monthly caps</h3>
                    <p className="text-gray-600">Never worry about end-of-month billing surprises again.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-100 p-2 rounded-lg h-fit"><BarChart3 className="text-blue-600 w-5 h-5" /></div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Group campaigns by purpose</h3>
                    <p className="text-gray-600">Track spend by stage, region, or initiative independently.</p>
                  </div>
                </div>
              </div>
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/get-started">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 5 — FEATURE: FREQUENCY CAPPING */}
        <section className="py-24 px-6 md:px-[112px]">
          <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-[45%] space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Account-level frequency caps to stop ad fatigue</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                DemandSense lets you set impression and click caps per company. When a company hits the threshold, ads stop being served to them, shifting budget to under-exposed accounts.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="text-emerald-500 w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Prevent saturating the same people until they stop noticing.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-emerald-500 w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Stop spending on companies that click without converting.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-emerald-500 w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Free up budget for net-new accounts in your target list.</p>
                </div>
              </div>
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/get-started">Start Free Trial</Link>
              </Button>
            </div>
            <div className="lg:w-[55%] w-full">
              <div className="rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-white">
                <img 
                  src="/media/frequency-cap.webp" 
                  alt="DemandSense LinkedIn Account-Level Frequency Capping" 
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — FEATURE: AUDIENCE TUNING */}
        <section className="py-24 px-6 md:px-[112px] bg-gray-50">
          <div className="max-w-[1216px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="lg:w-[55%] w-full">
              <div className="rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-white">
                <img 
                  src="/media/audience-tuning.webp" 
                  alt="DemandSense LinkedIn Audience Tuning and Exclusions" 
                  className="w-full h-auto block"
                />
              </div>
            </div>
            <div className="lg:w-[45%] space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tune targeting from the same screen</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                DemandSense tracks 2,000+ companies that interacted with your ads. Sort by impressions, clicks, or conversions. Filter by industry, headcount, or ICP match.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-100 p-2 rounded-lg h-fit"><Target className="text-blue-600 w-5 h-5" /></div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">One-click exclusions</h3>
                    <p className="text-gray-600">See a company that's not a fit? Thumbs down to exclude instantly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-100 p-2 rounded-lg h-fit"><Users className="text-blue-600 w-5 h-5" /></div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Identify high-intent accounts</h3>
                    <p className="text-gray-600">See which accounts you want more of and expand targeting.</p>
                  </div>
                </div>
              </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What happens when you turn on scheduling</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Every test below followed the same protocol: enable DemandSense scheduling, keep the same targeting, same creative, same budget.</p>
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
          </div>
        </section>

        {/* SECTION 10 — FAQ */}
        <section className="py-24 px-6 md:px-[112px] bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Common questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1" className="border-gray-200">
                <AccordionTrigger className="text-left font-bold text-gray-900 py-6">How do I optimize LinkedIn Ads for better ROI?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  Focus on three things: when your ads run, how often the same accounts see them, and whether the companies engaging actually match your ICP.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2" className="border-gray-200">
                <AccordionTrigger className="text-left font-bold text-gray-900 py-6">What is the minimum audience size for LinkedIn Ads in 2026?</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  The technical minimum to launch a campaign is 300 members. But the algorithm needs a larger pool to optimize effectively — most practitioners recommend 50,000 to 100,000.
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
              Connect your account in under five minutes. Keep your existing campaigns. DemandSense layers on top.
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