import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import { 
  Users, Building2, Check, Lock, ScanFace, 
  Code2, Database, Network, ChevronRight, Webhook, Activity, Layers, CreditCard,
  Zap, Sliders, TrendingDown, Linkedin, Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/SectionBadge";
import {
  LiveIntentVisual,
  IndividualIdentityCard,
  IdentificationDemo,
  VisitorIntro,
  VisitorComparisonTable,
  VisitorSteps,
  VisitorFAQ,
  VisitorMetricsBand
} from "@/components/website-visitors";
import CaptureIntentCard from "@/components/website-visitors/CaptureIntentCard";

// Lazy load heavy sections below the fold
const UseCasesSection = React.lazy(() => import("@/components/website-visitors/UseCasesSection"));
const LeadScoringDemo = React.lazy(() => import("@/components/website-visitors/LeadScoringDemo"));
const IntegrationSection = React.lazy(() => import("@/components/website-visitors/IntegrationSection"));

const WebsiteVisitors = () => {
  const [heroRef, heroInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.1 });

  return (
    <>
      <Navbar />
      <main className="bg-white overflow-x-hidden">
        
        {/* --- HERO SECTION --- */}
        <section className="relative w-full min-h-[90vh] flex items-center pt-32 pb-20 bg-white">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#3875F6]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-[#FA8C16]/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Left: Copy */}
            <div ref={heroRef} className="space-y-8">
              <div className={cn(
                "transition-all duration-700",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                <SectionBadge icon={ScanFace} text="WebID™ Technology" />
              </div>

              <h1 className={cn(
                "text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tighter leading-[1.1] transition-all duration-700 delay-100",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3875F6] to-[#7486AA]">
                  Website Visitor Tracking
                </span> <br />
                That Goes Beyond Company Identification
              </h1>

              <p className={cn(
                "text-xl text-gray-600 max-w-xl leading-relaxed transition-all duration-700 delay-200",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                DemandSense reveals who visits your site, even when visitors are anonymous. Get accurate, real-time tracking and intent scoring to turn traffic into pipeline.
              </p>

              <div className={cn(
                "flex flex-wrap gap-4 transition-all duration-700 delay-300",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <Button variant="hero" size="hero">
                  Start Identifying Free
                </Button>
                <Button variant="hero-outline" size="hero">
                  View Live Demo
                </Button>
              </div>

              <div className={cn(
                "flex items-center gap-6 text-sm text-gray-500 pt-4 transition-all duration-700 delay-400",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> GDPR Compliant</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> 5-Min Setup</div>
              </div>
            </div>

            {/* Right: Visual Demo */}
            <div className={cn(
              "relative transition-all duration-1000 delay-300",
              heroInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}>
              {/* Decorative blobs behind the card */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FA8C16]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#3875F6]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
              
              <IdentificationDemo />
            </div>
          </div>
        </section>

        {/* --- PROBLEM / SOLUTION TICKER --- */}
        <section className="w-full bg-[#0F2043] text-white py-12 overflow-hidden">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-[#7486AA] font-mono text-sm uppercase tracking-widest">
              Trusted by growth teams at
            </div>
            <div className="flex items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholder logos for design fidelity */}
              <div className="text-xl font-bold">ACME Corp</div>
              <div className="text-xl font-bold">GlobalTech</div>
              <div className="text-xl font-bold">Nebula</div>
              <div className="text-xl font-bold">Vertex</div>
              <div className="text-xl font-bold hidden md:block">Horizon</div>
            </div>
          </div>
        </section>

        {/* --- INTRO SECTION (What Is...) --- */}
        <VisitorIntro />

        {/* --- METRICS BAND --- */}
        <VisitorMetricsBand />

        {/* --- HOW REVEAL INTENT TRACKS (Bento Grid Refactored) --- */}
        <section className="py-32 bg-[#F5F9FF]">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="flex justify-center mb-8">
                <SectionBadge icon={Layers} text="Core Technology" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] mb-6 tracking-tight">
                How Reveal Intent Tracks and <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Identifies Website Visitors</span>
              </h2>
              <p className="text-xl text-[#7486AA]">
                Our platform works in three core layers to give you complete visibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
              
              {/* Row 1: Real-Time Tracking (Large) + Identify Companies (Small) */}
              
              {/* Layer 1: Real-Time Tracking (Visual) */}
              <div className="md:col-span-2 bg-[#0F2043] rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                <div className="relative z-20">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-900/50">
                      <Activity className="h-7 w-7" />
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-medium animate-pulse">
                      <Zap className="h-3 w-3" />
                      Live Stream
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Real-Time Website Visitor Tracking</h3>
                  <p className="text-lg text-[#7486AA] max-w-md">
                    See an active user map and session stream as it happens. Track pages viewed and engagement levels instantly.
                  </p>
                </div>
                <LiveIntentVisual />
              </div>

              {/* Layer 2: Identify Companies */}
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#DEE8FC] shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-[#1A3F89] flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-200">
                  <Building2 className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F2043] mb-4">Identify Companies</h3>
                <p className="text-[#7486AA]">
                  Use IP signals and behavior to identify companies behind anonymous visitors. See industry, size, and tech stack.
                </p>
              </div>

              {/* Row 2: LinkedIn-Aware (Small) + Capture Intent (Large) */}

              {/* New Card 1: LinkedIn-Aware Identity Graph */}
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#DEE8FC] shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-[#0A66C2] flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-200">
                  <Linkedin className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F2043] mb-4">LinkedIn-Aware Identity Graph</h3>
                <p className="text-[#7486AA]">
                  Connects website visits with LinkedIn engagement patterns to reveal which accounts and people are warming up across touchpoints.
                </p>
              </div>

              {/* Layer 3: Capture Intent Signals (Large) */}
              <CaptureIntentCard />

              {/* Row 3: Individual Identity (Large) + Cross-Channel (Small) */}

              {/* Feature: Individual Identity (Large) */}
              <IndividualIdentityCard />

              {/* New Card 2: Cross-Channel Intent Signals */}
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#DEE8FC] shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-[#7C3AED] flex items-center justify-center text-white mb-8 shadow-lg shadow-purple-200">
                  <Share2 className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F2043] mb-4">Cross-Channel Intent Signals</h3>
                <p className="text-[#7486AA]">
                  Understand the 'why' behind every visit — page depth, return visit frequency, content interactions, and LinkedIn engagement.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* --- COMPARISON TABLE --- */}
        <VisitorComparisonTable />

        {/* --- USE CASES (Lazy Loaded) --- */}
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><Loader /></div>}>
          <UseCasesSection />
        </Suspense>

        {/* --- LEAD SCORING SECTION (Lazy Loaded Demo) --- */}
        <section className="py-32 bg-[#F5F9FF]">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex justify-center mb-8">
                <SectionBadge icon={Sliders} text="Intelligent Scoring" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] mb-6 tracking-tight">
                Separate the <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Browsers from the Buyers</span>
              </h2>
              <p className="text-xl text-gray-600">
                Not all traffic is equal. Our dual-scoring engine ranks every visitor based on <strong>Fit</strong> (who they are) and <strong>Engagement</strong> (what they do), so you can focus on the hottest leads.
              </p>
            </div>

            <Suspense fallback={<div className="h-96 bg-white rounded-3xl animate-pulse" />}>
              <LeadScoringDemo />
            </Suspense>
          </div>
        </section>

        {/* --- HOW IT WORKS STEPS --- */}
        <VisitorSteps />

        {/* --- DEVELOPER / INTEGRATION SECTION (Lazy Loaded) --- */}
        <Suspense fallback={<div className="h-96 bg-[#0B0F19]" />}>
          <IntegrationSection />
        </Suspense>

        {/* --- CREDIT SYSTEM FAQ --- */}
        <section className="py-24 bg-white">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-8">
                <SectionBadge icon={CreditCard} text="Transparent Credits" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] text-center mb-12 tracking-tight">
                Transparent <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Pricing Logic</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-8 rounded-2xl border border-[#DEE8FC] bg-[#F5F9FF] hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2043] mb-3">1 Credit = 1 Identification</h3>
                  <p className="text-[#7486AA] leading-relaxed">
                    You only use a credit when we successfully identify a person or a company. Anonymous traffic is free.
                  </p>
                </div>

                <div className="p-8 rounded-2xl border border-[#DEE8FC] bg-white hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF3FF] flex items-center justify-center text-[#3875F6] mb-6 group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2043] mb-3">Person + Company Match</h3>
                  <p className="text-[#7486AA] leading-relaxed">
                    If we find both the individual and their company, it still only costs <strong>1 credit</strong>.
                  </p>
                </div>

                <div className="p-8 rounded-2xl border border-[#DEE8FC] bg-white hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 mb-6 group-hover:scale-110 transition-transform">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2043] mb-3">Smart Suppression</h3>
                  <p className="text-[#7486AA] leading-relaxed">
                    We automatically filter out ISPs, universities, and bots so you don't pay for junk data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <VisitorFAQ />

        {/* --- FINAL CTA --- */}
        <CTASection 
          eyebrow="Ready to see who's watching?"
          title={
            <>
              Turn Your Website into a <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Lead Magnet</span>
            </>
          }
          subtitle="Join 1000+ B2B companies using WebID to uncover their hidden pipeline."
          primaryLabel="Start Free Trial"
          secondaryLabel="Book a Demo"
        />
      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default WebsiteVisitors;