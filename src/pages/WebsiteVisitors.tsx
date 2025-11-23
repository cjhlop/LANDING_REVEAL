import React, { useState, useEffect, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import { 
  Users, Building2, Zap, BarChart3, ArrowRight, 
  Check, Lock, Globe, Fingerprint, ScanFace, 
  Code2, Database, Network, ChevronRight, Target, Webhook
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// --- Micro-Components ---

const PulseDot = () => (
  <span className="relative flex h-2.5 w-2.5 mr-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
  </span>
);

const DataPoint = ({ label, value, delay }: { label: string, value: string, delay: number }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={cn(
      "flex items-center justify-between py-2 border-b border-gray-100 last:border-0 transition-all duration-500",
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
    )}>
      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{label}</span>
      <span className="text-sm font-semibold text-gray-900">{value}</span>
    </div>
  );
};

const IdentificationDemo = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[4/5] md:aspect-square bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="text-xs font-mono text-gray-400">visitor_session_id: 8x92...</div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Stage 1: The Visit */}
        <div className={cn("transition-opacity duration-500", step >= 0 ? "opacity-100" : "opacity-30")}>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Globe className="h-5 w-5" /></div>
            <div>
              <div className="text-sm font-bold text-gray-900">New Visit Detected</div>
              <div className="text-xs text-gray-500">IP: 66.249.70.12 • San Francisco, CA</div>
            </div>
          </div>
        </div>

        {/* Stage 2: The Company */}
        <div className={cn("transition-all duration-500 delay-100", step >= 1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4")}>
          <div className="relative pl-4 border-l-2 border-blue-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-50 rounded-lg text-purple-600"><Building2 className="h-5 w-5" /></div>
              <div>
                <div className="text-sm font-bold text-gray-900">Company Matched</div>
                <div className="text-xs text-gray-500">Stripe, Inc. • SaaS • 5000+ Employees</div>
              </div>
            </div>
            {step >= 1 && (
              <div className="mt-3 bg-gray-50 rounded-lg p-3 space-y-2">
                <DataPoint label="Revenue" value="$10B+" delay={100} />
                <DataPoint label="Tech Stack" value="AWS, React, Salesforce" delay={300} />
              </div>
            )}
          </div>
        </div>

        {/* Stage 3: The Person */}
        <div className={cn("transition-all duration-500 delay-200", step >= 2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4")}>
          <div className="relative pl-4 border-l-2 border-purple-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-50 rounded-lg text-green-600"><ScanFace className="h-5 w-5" /></div>
              <div>
                <div className="text-sm font-bold text-gray-900">Profile Identified</div>
                <div className="text-xs text-gray-500">High Intent Signal • 3rd Visit</div>
              </div>
            </div>
            {step >= 2 && (
              <div className="mt-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4 text-white shadow-lg transform transition-all hover:scale-105 cursor-default">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-lg font-bold">
                      JD
                    </div>
                    <div>
                      <div className="font-bold">John Doe</div>
                      <div className="text-xs text-blue-100">VP of Engineering</div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-400/20 text-green-100 hover:bg-green-400/30 border-0">
                    Decision Maker
                  </Badge>
                </div>
                <div className="space-y-2 text-sm text-blue-50">
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-400" /> john.doe@stripe.com</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-400" /> +1 (555) 012-3456</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-400" /> linkedin.com/in/johndoe</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-blue-600 transition-all duration-300 ease-linear" style={{ width: `${((step + 1) / 3) * 100}%` }} />
    </div>
  );
};

const WebsiteVisitors = () => {
  const [heroRef, heroInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.1 });

  return (
    <>
      <Navbar />
      <main className="bg-white overflow-x-hidden">
        
        {/* --- HERO SECTION --- */}
        <section className="relative w-full min-h-[90vh] flex items-center pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-white">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-purple-50/50 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Left: Copy */}
            <div ref={heroRef} className="space-y-8">
              <div className={cn(
                "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-medium tracking-wide transition-all duration-700",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                <PulseDot />
                WebID™ Technology
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
          <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
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
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                More Than Just an IP Address
              </h2>
              <p className="text-xl text-gray-600">
                We combine identity resolution, behavioral tracking, and machine learning to build a complete picture of your visitors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
              
              {/* Feature 1: The Person (Large) */}
              <div className="md:col-span-2 bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-200">
                    <Fingerprint className="h-7 w-7" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Individual Identity</h3>
                  <p className="text-lg text-gray-600 max-w-md">
                    Stop guessing. See the exact names, job titles, and verified contact details of the people browsing your site right now.
                  </p>
                </div>
                {/* Visual decoration */}
                <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute right-8 bottom-8 md:right-12 md:bottom-12 bg-white rounded-xl shadow-lg border border-gray-100 p-4 w-64 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                    <div>
                      <div className="h-2 w-24 bg-gray-200 rounded mb-1" />
                      <div className="h-2 w-16 bg-gray-100 rounded" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-gray-50 rounded" />
                    <div className="h-2 w-full bg-gray-50 rounded" />
                  </div>
                </div>
              </div>

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

              {/* Feature 4: Intent (Large) */}
              <div className="md:col-span-2 bg-gray-900 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center text-white mb-8 shadow-lg shadow-green-900/50">
                    <Zap className="h-7 w-7" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Buying Intent Signals</h3>
                  <p className="text-lg text-gray-300 max-w-md">
                    Know who's ready to buy. We track page depth, time-on-site, and return visits to score every lead automatically.
                  </p>
                </div>
                {/* Abstract chart visual */}
                <div className="absolute right-0 bottom-0 w-2/3 h-2/3 opacity-20">
                  <svg viewBox="0 0 200 100" className="w-full h-full text-green-500 fill-current">
                    <path d="M0 100 L20 80 L40 90 L60 50 L80 60 L100 20 L120 40 L140 10 L160 30 L180 5 L200 0 V100 Z" />
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- USE CASES (Sticky Scroll Concept) --- */}
        <section className="py-32 bg-white border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              
              {/* Left: Sticky Content */}
              <div className="lg:sticky lg:top-32 lg:h-fit space-y-8">
                <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                  One Platform, <br />
                  <span className="text-blue-600">Endless Applications</span>
                </h2>
                <p className="text-xl text-gray-600">
                  WebID isn't just a tool; it's the engine that powers your entire go-to-market strategy.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="p-6 rounded-xl bg-blue-50 border border-blue-100">
                    <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                      <Users className="h-5 w-5" /> For Sales
                    </h3>
                    <p className="text-blue-700">Stop cold calling. Reach out to prospects who just visited your pricing page with perfect timing.</p>
                  </div>
                  <div className="p-6 rounded-xl bg-purple-50 border border-purple-100">
                    <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                      <Target className="h-5 w-5" /> For Marketing
                    </h3>
                    <p className="text-purple-700">Retarget high-intent visitors on LinkedIn and verify if your campaigns are reaching the right ICP.</p>
                  </div>
                  <div className="p-6 rounded-xl bg-orange-50 border border-orange-100">
                    <h3 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" /> For RevOps
                    </h3>
                    <p className="text-orange-700">Enrich your CRM automatically. Push clean, verified data directly into Salesforce or HubSpot.</p>
                  </div>
                </div>
              </div>

              {/* Right: Visuals */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                  <div className="absolute top-0 left-0 w-full h-12 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="p-8 pt-20 pb-12 bg-gray-50/50">
                    <img 
                      src="/media/ads-scheduling-list.png" 
                      alt="Dashboard Interface" 
                      className="w-full rounded-lg shadow-lg border border-gray-200"
                    />
                  </div>
                </div>
                
                {/* Floating Element */}
                <div className="absolute -bottom-12 -left-12 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block animate-bounce-slow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">New Hot Lead</div>
                      <div className="text-xs text-gray-500">Just visited /pricing</div>
                    </div>
                  </div>
                  <Button size="sm" className="w-full bg-gray-900 text-white">View Profile</Button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- DEVELOPER / INTEGRATION SECTION --- */}
        <section className="py-32 bg-gray-950 text-white relative overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
          
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 border border-blue-800 text-xs font-medium mb-6">
                  <Code2 className="h-4 w-4" />
                  Developer Friendly
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
          <div className="max-w-3xl mx-auto px-6">
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