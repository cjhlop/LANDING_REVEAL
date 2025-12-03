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
  Zap, Sliders, TrendingDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/SectionBadge";
import {
  LiveIntentVisual,
  IndividualIdentityCard,
  IdentificationDemo,
  LeadScoringDemo,
  UseCasesSection,
  VisitorAnalyticsSection,
  IntegrationSection
} from "@/components/website-visitors";

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
                "text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-[1.1] transition-all duration-700 delay-100",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                Unmask Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3875F6] to-[#7486AA]">
                  Hidden Pipeline
                </span>
              </h1>

              <p className={cn(
                "text-xl text-gray-600 max-w-xl leading-relaxed transition-all duration-700 delay-200",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                97% of your traffic is anonymous. We reveal the companies and decision-makers visiting your site, so you can sell to the people who are already buying.
              </p>

              <div className={cn(
                "flex flex-wrap gap-4 transition-all duration-700 delay-300",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <Button size="lg" className="h-14 px-8 rounded-full bg-[#3875F6] hover:bg-[#1A3F89] text-lg shadow-xl hover:shadow-blue-500/20 transition-all">
                  Start Identifying Free
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-gray-200 hover:bg-gray-50 text-lg">
                  View Live Demo
                </Button>
              </div>

              <div className={cn(
                "flex items-center gap-6 text-sm text-gray-500 pt-4 transition-all duration-700 delay-400",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> GDPR Compliant</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> No Credit Card</div>
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

        {/* --- DEEP DIVE FEATURES (Bento Grid) --- */}
        <section className="py-32 bg-[#F5F9FF]">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="flex justify-center mb-8">
                <SectionBadge icon={Layers} text="Deep Intelligence" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] mb-6 tracking-tight">
                More Than Just an IP Address
              </h2>
              <p className="text-xl text-[#7486AA]">
                We combine identity resolution, behavioral tracking, and machine learning to build a complete picture of your visitors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
              
              {/* Feature 1: The Person (Large) - REPLACED WITH INTERACTIVE COMPONENT */}
              <IndividualIdentityCard />

              {/* Feature 2: The Company */}
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#DEE8FC] shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-[#1A3F89] flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-200">
                  <Building2 className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F2043] mb-4">Firmographics</h3>
                <p className="text-[#7486AA]">
                  Filter traffic by revenue, industry, and tech stack to instantly spot your Ideal Customer Profile (ICP).
                </p>
              </div>

              {/* Feature 3: WFH Detection */}
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#DEE8FC] shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-[#FA8C16] flex items-center justify-center text-white mb-8 shadow-lg shadow-orange-200">
                  <Network className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F2043] mb-4">WFH Detection</h3>
                <p className="text-[#7486AA]">
                  Our proprietary graph identifies decision-makers even when they're browsing from home networks or coffee shops.
                </p>
              </div>

              {/* Feature 4: Intent (Large) - UPDATED WITH DYNAMIC VISUAL */}
              <div className="md:col-span-2 bg-[#0F2043] rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="relative z-20">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-900/50">
                      <Zap className="h-7 w-7" />
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-medium animate-pulse">
                      <Activity className="h-3 w-3" />
                      Live Signal
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Buying Intent Signals</h3>
                  <p className="text-lg text-[#7486AA] max-w-md">
                    Know who's ready to buy. We track page depth, time-on-site, and return visits to score every lead automatically.
                  </p>
                </div>
                
                {/* Dynamic Visualizer */}
                <LiveIntentVisual />
              </div>

            </div>
          </div>
        </section>

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
                Separate the Browsers from the Buyers
              </h2>
              <p className="text-xl text-[#7486AA]">
                Not all traffic is equal. Our dual-scoring engine ranks every visitor based on <strong>Fit</strong> (who they are) and <strong>Engagement</strong> (what they do), so you can focus on the hottest leads.
              </p>
            </div>

            <Suspense fallback={<div className="h-96 bg-white rounded-3xl animate-pulse" />}>
              <LeadScoringDemo />
            </Suspense>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#DEE8FC] flex items-center justify-center text-[#3875F6] mb-4">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F2043] mb-2">Firmographic Fit</h3>
                <p className="text-[#7486AA] text-sm">Score based on industry, revenue, employee count, and tech stack to match your ICP.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#DEE8FC] flex items-center justify-center text-[#FA8C16] mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F2043] mb-2">Behavioral Intent</h3>
                <p className="text-[#7486AA] text-sm">Track high-value actions like pricing page visits, content downloads, and return frequency.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#DEE8FC] flex items-center justify-center text-[#7486AA] mb-4">
                  <TrendingDown className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F2043] mb-2">Smart Decay</h3>
                <p className="text-[#7486AA] text-sm">Scores automatically decrease over time if a lead goes cold, keeping your pipeline fresh.</p>
              </div>
            </div>
          </div>
        </section>

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
              <h2 className="text-3xl font-bold text-center mb-12 text-[#0F2043]">Transparent Pricing Logic</h2>
              <div className="space-y-4">
                <div className="p-6 rounded-xl border border-[#DEE8FC] bg-[#F5F9FF]">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 rounded-full text-green-600 mt-1"><Check className="h-4 w-4" /></div>
                    <div>
                      <h3 className="font-bold text-[#0F2043]">1 Credit = 1 Identification</h3>
                      <p className="text-[#7486AA] mt-1">You only use a credit when we successfully identify a person or a company. Anonymous traffic is free.</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-xl border border-[#DEE8FC] bg-white">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#EBF3FF] rounded-full text-[#3875F6] mt-1"><Users className="h-4 w-4" /></div>
                    <div>
                      <h3 className="font-bold text-[#0F2043]">Person + Company Match</h3>
                      <p className="text-[#7486AA] mt-1">If we find both the individual and their company, it still only costs <strong>1 credit</strong>.</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-xl border border-[#DEE8FC] bg-white">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gray-100 rounded-full text-gray-600 mt-1"><Lock className="h-4 w-4" /></div>
                    <div>
                      <h3 className="font-bold text-[#0F2043]">Smart Suppression</h3>
                      <p className="text-[#7486AA] mt-1">We automatically filter out ISPs, universities, and bots so you don't pay for junk data.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <CTASection 
          eyebrow="Ready to see who's watching?"
          title="Turn Your Website into a Lead Magnet"
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