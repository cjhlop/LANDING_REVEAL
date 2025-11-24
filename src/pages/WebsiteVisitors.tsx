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
import {
  SectionBadge,
  LiveIntentVisual,
  IndividualIdentityCard,
  IdentificationDemo,
  LeadScoringDemo,
  UseCasesSection
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
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-purple-50/50 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="max-w-[1216px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
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
                <Button size="lg" className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-lg shadow-xl hover:shadow-blue-500/20 transition-all">
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
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
              
              <IdentificationDemo />
            </div>
          </div>
        </section>

        {/* --- PROBLEM / SOLUTION TICKER --- */}
        <section className="w-full bg-gray-900 text-white py-12 overflow-hidden">
          <div className="max-w-[1216px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-gray-400 font-mono text-sm uppercase tracking-widest">
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
        <section className="py-32 bg-gray-50">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="flex justify-center mb-8">
                <SectionBadge icon={Layers} text="Deep Intelligence" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                More Than Just an IP Address
              </h2>
              <p className="text-xl text-gray-600">
                We combine identity resolution, behavioral tracking, and machine learning to build a complete picture of your visitors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
              
              {/* Feature 1: The Person (Large) - REPLACED WITH INTERACTIVE COMPONENT */}
              <IndividualIdentityCard />

              {/* Feature 2: The Company */}
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center text-white mb-8 shadow-lg shadow-purple-200">
                  <Building2 className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Firmographics</h3>
                <p className="text-gray-600">
                  Filter traffic by revenue, industry, and tech stack to instantly spot your Ideal Customer Profile (ICP).
                </p>
              </div>

              {/* Feature 3: WFH Detection */}
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white mb-8 shadow-lg shadow-orange-200">
                  <Network className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">WFH Detection</h3>
                <p className="text-gray-600">
                  Our proprietary graph identifies decision-makers even when they're browsing from home networks or coffee shops.
                </p>
              </div>

              {/* Feature 4: Intent (Large) - UPDATED WITH DYNAMIC VISUAL */}
              <div className="md:col-span-2 bg-gray-900 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
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
                  <p className="text-lg text-gray-300 max-w-md">
                    Know who's ready to buy. We track page depth, time-on-site, and return visits to score every lead automatically.
                  </p>
                </div>
                
                {/* Dynamic Visualizer */}
                <LiveIntentVisual />
              </div>

            </div>
          </div>
        </section>

        {/* --- USE CASES (New Interactive Section) --- */}
        <UseCasesSection />

        {/* --- LEAD SCORING SECTION (NEW) --- */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex justify-center mb-8">
                <SectionBadge icon={Sliders} text="Intelligent Scoring" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Separate the Browsers from the Buyers
              </h2>
              <p className="text-xl text-gray-600">
                Not all traffic is equal. Our dual-scoring engine ranks every visitor based on <strong>Fit</strong> (who they are) and <strong>Engagement</strong> (what they do), so you can focus on the hottest leads.
              </p>
            </div>

            <LeadScoringDemo />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center text-blue-600 mb-4">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Firmographic Fit</h3>
                <p className="text-gray-600 text-sm">Score based on industry, revenue, employee count, and tech stack to match your ICP.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center text-orange-600 mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Behavioral Intent</h3>
                <p className="text-gray-600 text-sm">Track high-value actions like pricing page visits, content downloads, and return frequency.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center text-gray-600 mb-4">
                  <TrendingDown className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Decay</h3>
                <p className="text-gray-600 text-sm">Scores automatically decrease over time if a lead goes cold, keeping your pipeline fresh.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- DEVELOPER / INTEGRATION SECTION --- */}
        <section className="py-32 bg-gray-950 text-white relative overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
          
          <div className="max-w-[1216px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              
              <div>
                <div className="mb-8">
                  <SectionBadge icon={Code2} text="Developer Friendly" variant="dark" />
                </div>
                <h2 className="text-4xl font-bold mb-6">
                  Your Data, <br />
                  <span className="text-blue-400">Where You Need It.</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  WebID isn't a silo. Use our real-time Webhooks to pipe visitor data instantly into your CRM, Slack, or custom data warehouse.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <Database className="h-6 w-6 text-blue-400" />
                    <div>
                      <div className="font-bold">CRM Sync</div>
                      <div className="text-sm text-gray-400">Salesforce, HubSpot, Pipedrive</div>
                    </div>
                    <ChevronRight className="ml-auto h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <Webhook className="h-6 w-6 text-purple-400" />
                    <div>
                      <div className="font-bold">Real-time Webhooks</div>
                      <div className="text-sm text-gray-400">JSON payloads for custom workflows</div>
                    </div>
                    <ChevronRight className="ml-auto h-5 w-5 text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Code Block Visual */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30" />
                <div className="relative bg-gray-900 rounded-xl border border-gray-800 p-6 font-mono text-sm shadow-2xl">
                  <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="ml-auto text-xs text-gray-500">POST /webhook/visitor</div>
                  </div>
                  <div className="space-y-1 text-gray-300">
                    <div><span className="text-purple-400">const</span> <span className="text-blue-400">visitor</span> = {"{"}</div>
                    <div className="pl-4"><span className="text-blue-300">"ip"</span>: <span className="text-green-400">"66.249.70.12"</span>,</div>
                    <div className="pl-4"><span className="text-blue-300">"company"</span>: {"{"}</div>
                    <div className="pl-8"><span className="text-blue-300">"name"</span>: <span className="text-green-400">"Stripe"</span>,</div>
                    <div className="pl-8"><span className="text-blue-300">"domain"</span>: <span className="text-green-400">"stripe.com"</span></div>
                    <div className="pl-4">{"},"}</div>
                    <div className="pl-4"><span className="text-blue-300">"person"</span>: {"{"}</div>
                    <div className="pl-8"><span className="text-blue-300">"name"</span>: <span className="text-green-400">"John Doe"</span>,</div>
                    <div className="pl-8"><span className="text-blue-300">"email"</span>: <span className="text-green-400">"john@stripe.com"</span></div>
                    <div className="pl-4">{"}"}</div>
                    <div>{"}"}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- CREDIT SYSTEM FAQ --- */}
        <section className="py-24 bg-white">
          <div className="max-w-[1216px] mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-8">
                <SectionBadge icon={CreditCard} text="Transparent Credits" />
              </div>
              <h2 className="text-3xl font-bold text-center mb-12">Transparent Pricing Logic</h2>
              <div className="space-y-4">
                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 rounded-full text-green-600 mt-1"><Check className="h-4 w-4" /></div>
                    <div>
                      <h3 className="font-bold text-gray-900">1 Credit = 1 Identification</h3>
                      <p className="text-gray-600 mt-1">You only use a credit when we successfully identify a person or a company. Anonymous traffic is free.</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-xl border border-gray-200 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 rounded-full text-blue-600 mt-1"><Users className="h-4 w-4" /></div>
                    <div>
                      <h3 className="font-bold text-gray-900">Person + Company Match</h3>
                      <p className="text-gray-600 mt-1">If we find both the individual and their company, it still only costs <strong>1 credit</strong>.</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-xl border border-gray-200 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gray-100 rounded-full text-gray-600 mt-1"><Lock className="h-4 w-4" /></div>
                    <div>
                      <h3 className="font-bold text-gray-900">Smart Suppression</h3>
                      <p className="text-gray-600 mt-1">We automatically filter out ISPs, universities, and bots so you don't pay for junk data.</p>
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