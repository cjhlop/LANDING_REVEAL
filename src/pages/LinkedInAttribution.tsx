"use client";

import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import { 
  CheckCircle2, 
  XCircle,
  ArrowRight, 
  Zap, 
  Target, 
  BarChart3, 
  ShieldCheck, 
  Search, 
  Users, 
  AlertCircle,
  TrendingUp,
  DollarSign,
  Layers,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionBadge from "@/components/SectionBadge";
import DynamicShadow from "@/components/DynamicShadow";

const TOOLS_DATA = [
  { 
    name: "DemandSense", 
    optimization: "Advanced", 
    crm: "Multi-touch + influenced revenue", 
    identity: "Company + Person-level", 
    benchmark: true, 
    loop: true,
    orientation: "LinkedIn-first Performance OS",
    price: "$99/mo" 
  },
  { 
    name: "Dreamdata", 
    optimization: false, 
    crm: "Multi-touch revenue attribution", 
    identity: "Company-level", 
    benchmark: false, 
    loop: false,
    orientation: "Multi-channel B2B attribution",
    price: "~$999/mo" 
  },
  { 
    name: "HockeyStack", 
    optimization: false, 
    crm: "Multi-touch + custom modeling", 
    identity: "Company-level", 
    benchmark: false, 
    loop: false,
    orientation: "Multi-channel revenue analytics",
    price: "Custom" 
  },
  { 
    name: "Factors.ai", 
    optimization: false, 
    crm: "Multi-touch attribution", 
    identity: "Company-level", 
    benchmark: false, 
    loop: false,
    orientation: "B2B marketing analytics",
    price: "~$399/mo" 
  },
  { 
    name: "Cometly", 
    optimization: false, 
    crm: "Multi-touch attribution", 
    identity: "Limited", 
    benchmark: false, 
    loop: false,
    orientation: "Ad attribution platform",
    price: "~$197/mo" 
  },
  { 
    name: "Fibbler", 
    optimization: "Limited", 
    crm: "Limited LinkedIn attribution", 
    identity: "Company-level", 
    benchmark: false, 
    loop: false,
    orientation: "LinkedIn analytics add-on",
    price: "~$299/mo" 
  },
  { 
    name: "ZenABM", 
    optimization: false, 
    crm: "Account-based reporting", 
    identity: "Account-level", 
    benchmark: false, 
    loop: false,
    orientation: "ABM execution platform",
    price: "Custom" 
  },
  { 
    name: "6sense", 
    optimization: "No direct optimization", 
    crm: "Enterprise revenue attribution", 
    identity: "Account-level intent", 
    benchmark: false, 
    loop: "Limited",
    orientation: "Enterprise ABM platform",
    price: "Enterprise" 
  },
];

const StatusIcon = ({ value }: { value: boolean | string }) => {
  if (value === true) return <CheckCircle2 className="text-emerald-500 h-5 w-5 mx-auto" />;
  if (value === false) return <XCircle className="text-red-400 h-5 w-5 mx-auto opacity-60" />;
  return <span className="text-sm text-gray-600">{value}</span>;
};

const LinkedInAttribution = () => {
  const [heroRef, heroInView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });
  const [tableRef, tableInView] = useInViewOnce<HTMLElement>({ threshold: 0.1 });

  return (
    <>
      <Navbar />
      <main className="bg-white">
        
        {/* 1. Hero Section */}
        <section ref={heroRef} className="relative w-full pt-32 pb-24 px-6 overflow-hidden">
          <DynamicShadow variant="hero" />
          <div className="max-w-[1216px] mx-auto text-center relative z-10">
            <div className={cn(
              "transition-all duration-700",
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <SectionBadge icon={Target} text="2026 Comparison Guide" />
            </div>

            <h1 className={cn(
              "text-5xl md:text-7xl font-bold text-gray-900 mt-8 mb-6 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Best LinkedIn Ads <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Attribution Tools (2026)</span>
            </h1>

            <p className={cn(
              "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-200",
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Compare the top LinkedIn ads attribution tools for B2B teams. See pricing, CRM integrations, identity resolution, and LinkedIn-specific capabilities reviewed by experts.
            </p>

            <div className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300",
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <Button variant="hero" size="hero" onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}>
                Start Free Trial
              </Button>
              <Button variant="hero-outline" size="hero" onClick={() => document.getElementById('comparison-table')?.scrollIntoView({ behavior: 'smooth' })}>
                View Comparison Table
              </Button>
            </div>

            <div className={cn(
              "mt-12 flex items-center justify-center gap-6 text-sm text-gray-500 transition-all duration-700 delay-400",
              heroInView ? "opacity-100" : "opacity-0"
            )}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Updated: 2026
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-blue-500" />
                Reviewed by certified LinkedIn ad specialists
              </div>
            </div>
          </div>
        </section>

        {/* 2. TL;DR Section */}
        <section className="py-16 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-[1216px] mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Zap className="text-orange-500 fill-orange-500" />
                TL;DR — Best LinkedIn Attribution Tools at a Glance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { 
                    label: "Best All-in-One LinkedIn Platform", 
                    tool: "DemandSense", 
                    desc: "Unified LinkedIn Performance OS combining optimization, identity visibility, benchmarking, and CRM revenue attribution." 
                  },
                  { 
                    label: "Best Enterprise ABM Suite", 
                    tool: "6sense", 
                    desc: "Full-scale ABM + predictive revenue modeling for large organizations." 
                  },
                  { 
                    label: "Best Advanced Attribution Tool", 
                    tool: "Dreamdata", 
                    desc: "Advanced B2B journey mapping across multiple channels." 
                  },
                  { 
                    label: "Best BI-Style Attribution", 
                    tool: "HockeyStack", 
                    desc: "Flexible BI-style attribution for marketing and RevOps teams." 
                  },
                  { 
                    label: "Best Lightweight Attribution", 
                    tool: "Cometly", 
                    desc: "Simplified paid-ad revenue tracking without optimization depth." 
                  },
                  { 
                    label: "Best LinkedIn Analytics Alternative", 
                    tool: "Fibbler", 
                    desc: "Campaign-level performance insights without deep revenue visibility." 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-all">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{item.label}</span>
                    <span className="text-xl font-bold text-gray-900 mb-2">{item.tool}</span>
                    <span className="text-sm text-gray-600 leading-relaxed">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Comparison Table */}
        <section id="comparison-table" ref={tableRef} className="py-24 px-6 bg-white">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <SectionBadge icon={Layers} text="Feature Matrix" />
              <h2 className="text-4xl font-bold text-gray-900 mt-6">Detailed Comparison</h2>
            </div>
            
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-xl">
              <Table className="min-w-[1100px]">
                <TableHeader className="bg-slate-900">
                  <TableRow className="hover:bg-slate-900 border-slate-800">
                    <TableHead className="text-white font-bold py-6 w-[160px]">Tool</TableHead>
                    <TableHead className="text-white font-bold w-[140px]">LinkedIn Optimization</TableHead>
                    <TableHead className="text-white font-bold w-[200px]">CRM Attribution</TableHead>
                    <TableHead className="text-white font-bold w-[160px]">Identity Resolution</TableHead>
                    <TableHead className="text-white font-bold text-center w-[110px]">Benchmarking</TableHead>
                    <TableHead className="text-white font-bold text-center w-[110px]">Optimization Loop</TableHead>
                    <TableHead className="text-white font-bold w-[200px]">Primary Orientation</TableHead>
                    <TableHead className="text-white font-bold w-[110px]">Starting Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {TOOLS_DATA.map((tool, i) => (
                    <TableRow key={i} className={cn(
                      "hover:bg-blue-50/50 transition-colors",
                      tool.name === "DemandSense" && "bg-blue-50/30"
                    )}>
                      <TableCell className="font-bold text-gray-900 py-6">
                        {tool.name}
                        {tool.name === "DemandSense" && <Badge className="ml-2 bg-blue-600">Top Pick</Badge>}
                      </TableCell>
                      <TableCell>
                        <StatusIcon value={tool.optimization} />
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {tool.crm}
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {tool.identity}
                      </TableCell>
                      <TableCell className="text-center">
                        <StatusIcon value={tool.benchmark} />
                      </TableCell>
                      <TableCell className="text-center">
                        <StatusIcon value={tool.loop} />
                      </TableCell>
                      <TableCell className="text-sm font-medium text-blue-600">
                        {tool.orientation}
                      </TableCell>
                      <TableCell className="text-sm font-medium text-gray-900">
                        {tool.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* 4. How We Evaluated */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionBadge icon={Search} text="Methodology" />
              <h2 className="text-4xl font-bold text-gray-900 mt-6 mb-8">How We Evaluated These Tools</h2>
              <p className="text-lg text-gray-600 mb-8">
                Attribution is easy to claim but hard to execute. We weighted our reviews based on the specific needs of high-spend LinkedIn advertisers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "LinkedIn Specialization", desc: "Does it handle LinkedIn's unique API and tracking nuances?" },
                  { title: "CRM Depth", desc: "Bi-directional sync with Salesforce, HubSpot, and Marketo." },
                  { title: "Identity Resolution", desc: "Ability to match anonymous clicks to real people and companies." },
                  { title: "Optimization Loop", desc: "Does it feed data back to LinkedIn to improve targeting?" }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-blue-900">Optimization Feedback</div>
                    <div className="text-xs text-blue-700">Feeding CRM data back to LinkedIn Ads</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center text-white">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-orange-900">Identity Resolution</div>
                    <div className="text-xs text-orange-700">Matching 280M+ professional profiles</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <div className="w-12 h-12 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-emerald-900">Revenue Attribution</div>
                    <div className="text-xs text-emerald-700">Proving exact ROI from closed-won deals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Why LinkedIn Attribution is Different */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1216px] mx-auto text-center mb-16">
            <SectionBadge icon={AlertCircle} text="The Challenge" />
            <h2 className="text-4xl font-bold text-gray-900 mt-6 mb-6">Why LinkedIn Ads Attribution Is Different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              LinkedIn isn't Google. The high CPCs and long B2B sales cycles require a different approach to measurement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1216px] mx-auto">
            {[
              { title: "High CPC Stakes", desc: "With clicks costing $10-$20+, you can't afford to wait 90 days for a conversion to see if an ad is working." },
              { title: "Multi-Touch Journeys", desc: "B2B buyers touch 10+ ads before converting. Standard 'last-click' models fail to show LinkedIn's true value." },
              { title: "The CRM Gap", desc: "LinkedIn's native reporting stops at the lead form. You need to see which ads actually turn into revenue." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. In-Depth Tool Reviews (DemandSense Highlight) */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-[1216px] mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">In-Depth Tool Reviews</h2>
            
            <div className="space-y-24">
              {/* DemandSense Review */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5">
                  <Badge className="bg-blue-600 mb-4">#1 Top Pick for 2026</Badge>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">DemandSense</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    DemandSense is the only platform built specifically to solve the "LinkedIn Waste" problem. While other tools focus on reporting, DemandSense focuses on the **optimization loop**—using attribution data to automatically improve your campaigns.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      Native LinkedIn API optimization
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      Person-level identity resolution (WebID™)
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      Industry-wide performance benchmarking
                    </div>
                  </div>
                  <Button className="w-full sm:w-auto" size="lg">
                    Try DemandSense Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-4">Strengths</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex gap-2"><div className="w-1 h-1 rounded-full bg-blue-600 mt-2" /> Real-time intent scoring</li>
                      <li className="flex gap-2"><div className="w-1 h-1 rounded-full bg-blue-600 mt-2" /> Automated ad scheduling</li>
                      <li className="flex gap-2"><div className="w-1 h-1 rounded-full bg-blue-600 mt-2" /> Bi-directional CRM sync</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-4">Verdict</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The best choice for B2B teams where LinkedIn is a primary growth channel. It pays for itself by reducing wasted spend by 30-40% almost instantly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Other tools summary */}
              <div className="pt-16 border-t border-gray-200">
                <h4 className="text-2xl font-bold text-gray-900 mb-8">Other Notable Platforms</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { name: "Dreamdata", bestFor: "Enterprise Multi-channel", desc: "Excellent for mapping complex, multi-year B2B journeys across every touchpoint." },
                    { name: "HockeyStack", bestFor: "SaaS Revenue Teams", desc: "Unified analytics for product, marketing, and sales data in one dashboard." },
                    { name: "Factors.ai", bestFor: "Mid-market Teams", desc: "Great balance of account identification and multi-touch attribution modeling." }
                  ].map((tool, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                      <h5 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h5>
                      <Badge variant="outline" className="mb-4">{tool.bestFor}</Badge>
                      <p className="text-sm text-gray-600 leading-relaxed">{tool.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Which Tool Should You Choose? */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1216px] mx-auto">
            <div className="bg-slate-900 rounded-[32px] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3875F6 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative z-10">Which Tool Should You Choose?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {[
                  { if: "LinkedIn is your primary channel", then: "DemandSense" },
                  { if: "You need multi-channel mapping", then: "Dreamdata" },
                  { if: "You're focused on ABM intent", then: "6sense" },
                  { if: "You need simple revenue tracking", then: "Fibbler" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                    <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">IF...</div>
                    <div className="text-sm text-white/80 mb-4">{item.if}</div>
                    <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">CHOOSE...</div>
                    <div className="text-xl font-bold text-white">{item.then}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 10. FAQ Section */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <SectionBadge icon={HelpCircle} text="FAQ" />
              <h2 className="text-4xl font-bold text-gray-900 mt-6">Frequently Asked Questions</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Why is LinkedIn attribution harder than Google Ads?", a: "LinkedIn often involves longer sales cycles and multiple stakeholders within a single company. Standard tracking pixels often lose the thread between an initial ad click and a CRM deal closed 6 months later." },
                { q: "Do these tools require a tracking script?", a: "Yes, most require a lightweight JavaScript snippet to identify visitors and track behavioral intent signals on your website." },
                { q: "Can I see which specific person clicked my ad?", a: "Only DemandSense offers person-level identity resolution (WebID™) that matches anonymous traffic to our proprietary database of 280M+ professional profiles." },
                { q: "How do these tools integrate with Salesforce/HubSpot?", a: "They typically use OAuth to connect to your CRM, pulling deal data and pushing attribution events or identified leads directly into your contact/account records." },
                { q: "What is multi-touch attribution?", a: "It's a modeling technique that gives credit to every touchpoint in a customer journey (e.g., 30% to the first ad, 20% to a webinar, 50% to the final demo request)." },
                { q: "Is DemandSense GDPR compliant?", a: "Yes, DemandSense is designed for B2B identification and complies with global privacy regulations by focusing on professional personas and business entities." },
                { q: "How much budget do I need to justify an attribution tool?", a: "Generally, if you are spending more than $5,000/month on LinkedIn Ads, the 30-40% waste reduction from a tool like DemandSense will more than pay for the subscription." },
                { q: "Can I track view-through conversions?", a: "Yes, advanced tools like DemandSense and Dreamdata can track when someone sees an ad but doesn't click, then later visits your site directly." },
                { q: "Do these tools help with ad scheduling?", a: "DemandSense is unique in offering automated ad scheduling that pauses campaigns during low-intent periods based on your attribution data." },
                { q: "How long does setup take?", a: "Most tools can be connected in under 15 minutes, though full data historical sync and CRM mapping may take 24-48 hours to populate." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-bold text-gray-900">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 11. Final CTA */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1216px] mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-[32px] p-12 md:p-20 text-center text-white shadow-2xl shadow-blue-500/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Stop Guessing Your LinkedIn ROI</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Join 100+ B2B companies using DemandSense to unmask their traffic and prove exact revenue impact.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="secondary" size="hero" className="bg-white text-blue-600 hover:bg-blue-50" onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}>
                  Start Your 30-Day Free Trial
                </Button>
                <Button variant="outline" size="hero" className="border-white text-white hover:bg-white/10">
                  Book a Demo
                </Button>
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

export default LinkedInAttribution;