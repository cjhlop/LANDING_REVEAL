import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import { 
  Users, 
  Building2, 
  Search, 
  Target, 
  Zap, 
  Filter, 
  Download, 
  Webhook, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  Eye,
  UserCheck,
  Briefcase,
  Laptop,
  Layers,
  ListFilter,
  ShieldAlert
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DynamicShadow from "@/components/DynamicShadow";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// --- Components ---

const FeatureCard = ({ icon: Icon, title, description, className }: { icon: any, title: string, description: string, className?: string }) => (
  <div className={cn("p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300", className)}>
    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const ValuePropRow = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  reversed = false,
  features = [] 
}: { 
  title: string, 
  description: string, 
  imageSrc: string, 
  imageAlt: string, 
  reversed?: boolean,
  features?: string[]
}) => {
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div ref={ref} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1216px] mx-auto px-8">
        <div className={cn(
          "flex flex-col lg:flex-row items-center gap-12 lg:gap-20",
          reversed ? "lg:flex-row-reverse" : ""
        )}>
          {/* Content */}
          <div className={cn(
            "flex-1 space-y-6 transition-all duration-700",
            inView ? "opacity-100 translate-x-0" : reversed ? "opacity-0 translate-x-12" : "opacity-0 -translate-x-12"
          )}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
            
            {features.length > 0 && (
              <ul className="space-y-3 mt-6">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Image */}
          <div className={cn(
            "flex-1 w-full transition-all duration-1000 delay-200",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-50 aspect-[4/3] group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:opacity-0 transition-opacity duration-500" />
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WebsiteVisitors = () => {
  const [heroRef, heroInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.1 });

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative w-full bg-white px-8 md:px-[112px] pt-32 md:pt-48 pb-20 overflow-hidden">
          <DynamicShadow variant="hero" />
          
          <div ref={heroRef} className="max-w-[1216px] mx-auto relative z-10 text-center">
            <div className={cn(
              "inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-100 shadow-sm mb-8 transition-all duration-700",
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <Eye className="h-4 w-4" />
              WebID Technology
            </div>

            <h1 className={cn(
              "text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Turn Anonymous Traffic <br />
              into <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">High-Intent Pipeline</span>
            </h1>

            <p className={cn(
              "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-200",
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              Identify the 97% of visitors who don't convert. WebID reveals the companies and professionals visiting your site, giving you the power to engage before they even raise their hand.
            </p>

            <div className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300",
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <Button 
                size="lg" 
                className="h-12 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-base font-medium shadow-lg hover:shadow-blue-500/25 transition-all"
                onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
              >
                Start Identifying Visitors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-12 px-8 rounded-full border-gray-200 hover:border-gray-300 text-gray-700 text-base font-medium"
              >
                See How It Works
              </Button>
            </div>
          </div>
        </section>

        {/* What Can You See - Bento Grid */}
        <section className="py-20 bg-gray-50/50">
          <div className="max-w-[1216px] mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Go Beyond Basic Analytics
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                WebID combines identity resolution, behavioral tracking, and machine learning to uncover deep insights about your visitors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Professional Profiles */}
              <div className="md:col-span-2 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                    Individual Level
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Professional Profiles</h3>
                <p className="text-gray-600 mb-6">
                  Don't just see "someone from IBM." See exactly who. Get names, job titles, business emails, phone numbers, and LinkedIn profiles of the actual people visiting your site.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-green-500" /> Verified Emails
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-green-500" /> Job Titles
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-green-500" /> LinkedIn URLs
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-green-500" /> Phone Numbers
                  </div>
                </div>
              </div>

              {/* Card 2: Company Info */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Firmographic Data</h3>
                <p className="text-gray-600 mb-4">
                  Instantly qualify accounts based on industry, revenue, employee count, and tech stack.
                </p>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-3/4" />
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-400 w-1/2" />
                  </div>
                </div>
              </div>

              {/* Card 3: WFH Detection */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-6">
                  <Laptop className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">WFH Detection</h3>
                <p className="text-gray-600">
                  Our unique identity graph can recognize visitors even when they're working from home, without clear corporate IP addresses.
                </p>
              </div>

              {/* Card 4: Intent Signals */}
              <div className="md:col-span-2 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                    <Zap className="h-6 w-6" />
                  </div>
                  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                    Behavioral
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Intent & Engagement</h3>
                <p className="text-gray-600 mb-6">
                  Understand exactly what they're interested in. Track page visits, time on site, and return frequency to score leads based on real buying intent.
                </p>
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 text-sm font-medium text-gray-700">
                    Page Views
                  </div>
                  <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 text-sm font-medium text-gray-700">
                    Time on Site
                  </div>
                  <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 text-sm font-medium text-gray-700">
                    Visit Frequency
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Propositions - Alternating Rows */}
        <section className="bg-white">
          <ValuePropRow
            title="Identify & Prioritize Warm Leads"
            description="Stop cold calling. WebID helps sales teams identify prospects who are already researching your solution. Prioritize follow-ups based on engagement scores and reach out with context."
            imageSrc="/media/ads-scheduling-list.png"
            imageAlt="List of identified leads"
            features={[
              "See who is active right now",
              "Filter by decision-maker status",
              "Get direct contact info instantly"
            ]}
          />
          
          <ValuePropRow
            title="Diagnose Traffic Quality"
            description="Are your ads reaching the right people? Use firmographic data to verify if your marketing campaigns are attracting your Ideal Customer Profile (ICP)."
            imageSrc="/media/audience-tuning.webp"
            imageAlt="Traffic quality analysis"
            reversed={true}
            features={[
              "Verify job titles and industries",
              "Spot bot traffic or irrelevant clicks",
              "Optimize ad spend based on real visitor data"
            ]}
          />

          <ValuePropRow
            title="Nurture Middle-of-Funnel Prospects"
            description="Many visitors leave without converting. WebID gives you the tools to retarget them. Push identified prospects into nurturing sequences or custom audiences for retargeting."
            imageSrc="/media/feature-share-smart.png"
            imageAlt="Nurturing workflow"
            features={[
              "Sync with your CRM or Marketing Automation",
              "Create segments based on behavior",
              "Trigger workflows automatically"
            ]}
          />
        </section>

        {/* The Platform Interface - Tabs Section */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="max-w-[1216px] mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Complete Visibility into Your Traffic
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                WebID organizes your data into actionable views, giving you flexibility in how you analyze and act on visitor intelligence.
              </p>
            </div>

            <Tabs defaultValue="companies" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="bg-gray-800 p-1 rounded-full border border-gray-700">
                  <TabsTrigger value="companies" className="rounded-full px-6 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300">Companies</TabsTrigger>
                  <TabsTrigger value="profiles" className="rounded-full px-6 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300">Professional Profiles</TabsTrigger>
                  <TabsTrigger value="all" className="rounded-full px-6 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300">All Traffic</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="companies" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 text-blue-400 font-medium">
                      <Building2 className="h-5 w-5" />
                      Account-Based View
                    </div>
                    <h3 className="text-3xl font-bold">Identify High-Value Accounts</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      See a list of organizations visiting your site. Filter by industry, size, or revenue to find accounts that match your ICP.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 mt-0.5">1</div>
                        <div>
                          <strong className="block text-white">Company-Specific Filters</strong>
                          <span className="text-gray-400 text-sm">Sort by revenue, employee count, and location.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 mt-0.5">2</div>
                        <div>
                          <strong className="block text-white">Activity Insights</strong>
                          <span className="text-gray-400 text-sm">See which pages a company viewed and for how long.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 mt-0.5">3</div>
                        <div>
                          <strong className="block text-white">Buying Intent</strong>
                          <span className="text-gray-400 text-sm">"Show only accounts with confirmed visitors" to prioritize verified interest.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 rounded-xl border border-gray-700 p-2 shadow-2xl">
                    <img src="/media/card3.png" alt="Companies view interface" className="rounded-lg w-full" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="profiles" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 text-purple-400 font-medium">
                      <UserCheck className="h-5 w-5" />
                      Prospect View
                    </div>
                    <h3 className="text-3xl font-bold">Connect with Decision Makers</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      The main hub for managing identified individuals. See names, titles, and direct contact info for the people behind the visits.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 mt-0.5">1</div>
                        <div>
                          <strong className="block text-white">Direct Contact Access</strong>
                          <span className="text-gray-400 text-sm">Unlock emails and phone numbers with one click.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 mt-0.5">2</div>
                        <div>
                          <strong className="block text-white">Tagging & Organizing</strong>
                          <span className="text-gray-400 text-sm">Label prospects (e.g., "Hot Lead", "Competitor") for easy sorting.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 mt-0.5">3</div>
                        <div>
                          <strong className="block text-white">Detailed Journey</strong>
                          <span className="text-gray-400 text-sm">View every page visit in chronological order to understand their path.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 rounded-xl border border-gray-700 p-2 shadow-2xl">
                    <img src="/media/card4.png" alt="Profiles view interface" className="rounded-lg w-full" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 text-green-400 font-medium">
                      <ListFilter className="h-5 w-5" />
                      Traffic View
                    </div>
                    <h3 className="text-3xl font-bold">The Full Picture</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      View every single session on your site, identified or anonymous. Perfect for spotting trends and understanding total volume.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-900/50 flex items-center justify-center text-green-400 mt-0.5">1</div>
                        <div>
                          <strong className="block text-white">Retroactive Recognition</strong>
                          <span className="text-gray-400 text-sm">If an anonymous visitor identifies themselves later, we link their past history automatically.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-900/50 flex items-center justify-center text-green-400 mt-0.5">2</div>
                        <div>
                          <strong className="block text-white">Complete Session Logs</strong>
                          <span className="text-gray-400 text-sm">Track behavior patterns across your entire audience.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 rounded-xl border border-gray-700 p-2 shadow-2xl">
                    <img src="/media/hover-sidebar.png" alt="All traffic view interface" className="rounded-lg w-full" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Advanced Features Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-[1216px] mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Power Features for Power Users
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Take your visitor data further with automation, scoring, and integrations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lead Scoring</h3>
                <p className="text-gray-600 mb-4">
                  Automatically rank leads based on <strong>Fit</strong> (firmographics) and <strong>Engagement</strong> (behavior).
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500" /> Custom scoring rules</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500" /> Score decay for inactivity</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-500" /> Visual score indicators</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                  <Webhook className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Webhooks</h3>
                <p className="text-gray-600 mb-4">
                  Push visitor data to your CRM, Slack, or marketing tools in real-time using JSON payloads.
                </p>
                <div className="text-xs font-mono bg-gray-50 p-3 rounded border border-gray-100 text-gray-500">
                  {"{ \"event\": \"visitor_identified\", ... }"}
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Auto-Nurturing Lists</h3>
                <p className="text-gray-600 mb-4">
                  Set criteria once, and let the system automatically populate lists with new matching prospects.
                </p>
                <p className="text-sm text-gray-500">Perfect for "Set and Forget" workflows.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Detailed Reports</h3>
                <p className="text-gray-600 mb-4">
                  Visualize traffic quality with breakdowns by industry, seniority, and job function.
                </p>
              </div>

              <div className="col-span-1 md:col-span-2 bg-gray-50 p-8 rounded-2xl border border-gray-200 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                      <ShieldAlert className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Smart Suppression</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We automatically filter out low-value traffic like ISPs, universities, and airport Wi-Fi to keep your data clean. You can customize these rules to fit your specific needs.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Button variant="outline" className="bg-white">Configure Rules</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection 
          eyebrow="Start Identifying Today"
          title="Unlock Your Website's Hidden Potential"
          subtitle="Join thousands of B2B marketers who are turning anonymous traffic into revenue with WebID."
          primaryLabel="Get Started Free"
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