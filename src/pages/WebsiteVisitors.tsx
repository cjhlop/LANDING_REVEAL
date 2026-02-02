import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import LogoTicker from "@/components/LogoTicker";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import { 
  Check, ScanFace, Zap, Building2, Share2, Activity, Layers, CreditCard, Users, Lock, CheckCircle2, ShieldCheck, Search, Target, ArrowRight, Image as ImageIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/SectionBadge";
import {
  IdentificationDemo,
  VisitorIntro,
  VisitorComparisonTable,
  VisitorSteps,
  VisitorFAQ,
  VisitorMetricsBand,
  VisitorCTASection,
  IdentityRevealCard
} from "@/components/website-visitors";
import AudienceReportPreview from "@/components/website-visitors/AudienceReportPreview";

// Lazy load heavy sections below the fold
const UseCasesSection = React.lazy(() => import("@/components/website-visitors/UseCasesSection"));
const LeadScoringDemo = React.lazy(() => import("@/components/website-visitors/LeadScoringDemo"));
const IntegrationSection = React.lazy(() => import("@/components/website-visitors/IntegrationSection"));

const WebsiteVisitors = () => {
  const [heroRef, heroInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.1 });
  const [revealRef, revealInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.5 });

  return (
    <>
      <Navbar />
      <main className="bg-white overflow-x-hidden">
        
        {/* --- HERO SECTION --- */}
        <section className="relative w-full min-h-[90vh] flex flex-col pt-32 pb-20 bg-white">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#3875F6]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-[#FA8C16]/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 mb-20">
            
            {/* Left: Copy */}
            <div ref={heroRef} className="space-y-8">
              <div className={cn(
                "transition-all duration-700",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                <SectionBadge icon={ScanFace} text="WEBSITE VISITOR IDENTIFICATION" />
              </div>

              <h1 className={cn(
                "text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tighter leading-[1.1] transition-all duration-700 delay-100",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                Turn Your Website Traffic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3875F6] to-[#7486AA]">
                  Into Campaign-Ready Audiences
                </span>
              </h1>

              <p className={cn(
                "text-xl text-gray-600 max-w-xl leading-relaxed transition-all duration-700 delay-200",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                DemandSense identifies who is visiting your site by company and name, scores their fit and engagement, and turns that into segmented, ready-to-use audiences for your campaigns.
              </p>

              {/* Feature List */}
              <div className={cn(
                "space-y-3 transition-all duration-700 delay-300",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                {[
                  "Segment traffic by buying intent level",
                  "Build campaign audiences from ICP-fit accounts",
                  "Use high-intent for sales, others for nurture"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className={cn(
                "flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-700 delay-400",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <Button variant="hero" size="hero">
                  Get A 30-Day Free Trial
                </Button>
                <p className="text-gray-900 text-sm leading-tight max-w-[200px]">
                  <span className="font-bold">Set up in 5 minutes</span> to see your audiences and their buying intent.
                </p>
              </div>

              <div className={cn(
                "flex items-center gap-6 text-sm text-gray-500 pt-4 transition-all duration-700 delay-500",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> GDPR Compliant</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> 5-Min Setup</div>
              </div>
            </div>

            {/* Right: Visual Demo + Testimonial */}
            <div className={cn(
              "relative flex flex-col gap-12 transition-all duration-1000 delay-300",
              heroInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}>
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FA8C16]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#3875F6]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
                <IdentificationDemo />
              </div>

              {/* Client Feedback Card */}
              <div className="bg-[#F5F9FF] rounded-2xl p-6 border border-blue-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="flex gap-4 items-start relative z-10">
                  <img 
                    src="/avatars/Jason Squires.jpg" 
                    alt="Jason Squires" 
                    className="w-16 h-16 rounded-lg object-cover border-2 border-white shadow-sm flex-shrink-0"
                  />
                  <div className="space-y-3">
                    <p className="text-[15px] leading-relaxed text-gray-800 italic">
                      “<span className="font-bold">It reduced my cost per lead by 60% the second I turned it on!</span> It’s literally been the difference between a campaign being incredibly successful, or burning a hole in my pocket.”
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-sm font-bold text-gray-900">Jason Squires,</span>
                      <span className="text-sm text-gray-600">Founder Of</span>
                      <div className="flex items-center font-bold text-gray-900 text-sm tracking-tight">
                        Project<span className="text-orange-500 relative">Scale<span className="absolute -top-1 -right-2 text-[10px] text-orange-400">↗</span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              </div>
            </div>
          </div>

          {/* --- HERO BOTTOM FEATURE GRID --- */}
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0 w-full relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* GDPR Card */}
              <div className="bg-[#F8FAFF] rounded-xl p-6 text-center border border-blue-50/50 flex flex-col items-center justify-center min-h-[180px]">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#1A3F89] flex items-center justify-center text-white shadow-md">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#2D4A77] flex items-center justify-center text-white shadow-md">
                    <Lock className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">GDPR & CCPA Compliant</h3>
                <p className="text-xs text-gray-600 leading-relaxed max-w-[220px]">
                  Designed to identify visitors without breaking privacy rules.
                </p>
              </div>

              {/* Identification Card */}
              <div className="bg-[#F8FAFF] rounded-xl p-6 text-center border border-blue-50/50 flex flex-col items-center justify-center min-h-[180px]">
                <div className="relative mb-4">
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-1 -mt-1.5">
                    <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center text-blue-600 shadow-sm">
                      <Search className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Instantly Identifies Visitors</h3>
                <p className="text-xs text-gray-600 leading-relaxed max-w-[220px]">
                  Start seeing visitors and building intent-based audiences the same day.
                </p>
              </div>

              {/* Audiences Card */}
              <div className="bg-[#F8FAFF] rounded-xl p-6 text-center border border-blue-50/50 flex flex-col items-center justify-center min-h-[180px]">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5">
                    <img src="/logos/linkedin-icon.svg" alt="LinkedIn" className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <img src="/logos/google-ads.png" alt="Google Ads" className="w-5 h-5 object-contain" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ready-to-Run Audiences</h3>
                <p className="text-xs text-gray-600 leading-relaxed max-w-[220px]">
                  Download audience lists and upload them to your ad platforms or CRM.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SHARED LOGO TICKER --- */}
        <LogoTicker />

        {/* --- INTRO SECTION --- */}
        <VisitorIntro />

        {/* --- METRICS BAND --- */}
        <VisitorMetricsBand />

        {/* --- REWORKED HOW IT WORKS SECTION --- */}
        <section className="py-32 bg-white">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0 space-y-32">
            
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex justify-center mb-8">
                <SectionBadge icon={Layers} text="HOW IT WORKS" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] mb-6 tracking-tight">
                Here’s exactly how anonymous website traffic <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">turns into campaign-ready audiences</span>
              </h2>
            </div>

            {/* Feature 1: Identification */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="text-[#3875F6] font-bold text-xs uppercase tracking-widest">IDENTIFY WHO'S ON YOUR WEBSITE</div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
                  See which companies and people are visiting in real time
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  DemandSense turns anonymous visits into known accounts and people, so you can see who's on your site, what they're looking at, and how active they are.
                </p>
                <ul className="space-y-4">
                  {[
                    "Identify visitors by company and person, not just sessions",
                    "See which pages they view and how engaged they are",
                    "Spot real accounts before they ever convert"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div ref={revealRef} className="relative flex justify-center items-center bg-[#0F2043] rounded-3xl p-12 min-h-[450px] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
                <IdentityRevealCard active={revealInView} />
              </div>
            </div>

            {/* Feature 2: Audience Splitting */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2 space-y-6">
                <div className="text-[#3875F6] font-bold text-xs uppercase tracking-widest">GET INTENT-BASED AUDIENCES</div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
                  Split traffic into audiences you can instantly use in campaigns
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Score accounts by intent signals and ICP fit, so you can separate serious buyers from casual traffic and <span className="font-bold text-gray-900">build audiences based on intent priority.</span>
                </p>
                <ul className="space-y-4">
                  {[
                    { label: "HIGH INTENT", desc: "Sales-ready outreach list" },
                    { label: "MEDIUM INTENT", desc: "Nurture campaign audience" },
                    { label: "LOW INTENT", desc: "Awareness campaign audience" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span><span className="font-bold">{item.label}</span> → {item.desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <div className="bg-[#3875F6] text-white p-6 rounded-xl shadow-lg shadow-blue-200 flex items-center justify-between group cursor-pointer hover:bg-blue-700 transition-colors">
                    <div>
                      <div className="flex items-center gap-2 font-bold text-sm mb-1">
                        <Zap className="w-4 h-4 fill-white" />
                        GET CAMPAIGN-READY AUDIENCES
                      </div>
                      <p className="text-blue-100 text-sm">Instantly get 3 intent-based audiences you can use across sales and marketing</p>
                    </div>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
              <div className="lg:order-1 relative aspect-[4/3] bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-gray-400 gap-4">
                <ImageIcon className="w-12 h-12 opacity-20" />
                <p className="text-sm font-medium uppercase tracking-widest opacity-40">Audience Splitting Screenshot Placeholder</p>
              </div>
            </div>

            {/* Feature 3: Impact Measurement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="text-[#3875F6] font-bold text-xs uppercase tracking-widest">PROVE CAMPAIGNS IMPACT</div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] tracking-tight leading-tight">
                  See exactly what works once campaigns are up and running
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Once campaigns are live, you see what works, what doesn't, and keep <span className="font-bold text-gray-900">improving targeting, messaging, and ad spend.</span>
                </p>
                <div className="space-y-3">
                  {[
                    "Spot which accounts engage and move forward",
                    "Compare which audiences perform and which don't",
                    "Prove which campaigns actually influence buying decisions"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 text-gray-800 font-medium">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-[4/3] bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-gray-400 gap-4">
                <ImageIcon className="w-12 h-12 opacity-20" />
                <p className="text-sm font-medium uppercase tracking-widest opacity-40">Impact Measurement Screenshot Placeholder</p>
              </div>
            </div>

          </div>
        </section>

        <AudienceReportPreview />

        <VisitorComparisonTable />

        <Suspense fallback={<div className="h-96 flex items-center justify-center"><Loader /></div>}>
          <UseCasesSection />
        </Suspense>

        <section className="py-32 bg-[#F5F9FF]">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex justify-center mb-8">
                <SectionBadge icon={Target} text="INTENT-BASED BUYER SCORING" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] mb-6 tracking-tight">
                Filter the intent level and build the <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">audience you want to run campaigns on</span>
              </h2>
              <p className="text-xl text-gray-600">
                DemandSense scores every visitor by fit (who they are) and intent (what they do), so you can choose exactly which level of intent to build audiences from and run the right campaign for each group.
              </p>
            </div>

            <Suspense fallback={<div className="h-96 bg-white rounded-3xl animate-pulse" />}>
              <LeadScoringDemo />
            </Suspense>
          </div>
        </section>

        <VisitorSteps />

        <Suspense fallback={<div className="h-96 bg-[#0B0F19]" />}>
          <IntegrationSection />
        </Suspense>

        <section className="py-24 bg-white">
          <div className="max-w-[1216px] mx-auto px-6 md:px-12 xl:px-0">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-8">
                <SectionBadge icon={CreditCard} text="Transparent Credits" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] text-center mb-12 tracking-tight">
                You’re only charged when <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">we identify someone</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-8 rounded-2xl border border-[#DEE8FC] bg-[#F5F9FF] hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2043] mb-3 uppercase tracking-tight">1 CREDIT = 1 IDENTIFIED VISITOR</h3>
                  <p className="text-[#7486AA] leading-relaxed">
                    A credit is only used when we successfully identify a real person or a real company. If the visit stays anonymous, it costs nothing.
                  </p>
                </div>

                <div className="p-8 rounded-2xl border border-[#DEE8FC] bg-white hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF3FF] flex items-center justify-center text-[#3875F6] mb-6 group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2043] mb-3 uppercase tracking-tight">PERSON + COMPANY COUNTS AS 1 CREDIT</h3>
                  <p className="text-[#7486AA] leading-relaxed">
                    If we identify both the individual and the company they work for, it still counts as a single identification.
                  </p>
                </div>

                <div className="p-8 rounded-2xl border border-[#DEE8FC] bg-white hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 mb-6 group-hover:scale-110 transition-transform">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2043] mb-3 uppercase tracking-tight">WE DON’T CHARGE FOR JUNK TRAFFIC</h3>
                  <p className="text-[#7486AA] leading-relaxed">
                    Traffic from ISPs, universities, and bots is automatically filtered out and never consumes credits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Branded CTA Section */}
        <VisitorCTASection />

        <VisitorFAQ />

      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default WebsiteVisitors;