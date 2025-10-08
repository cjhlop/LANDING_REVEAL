import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta";
import { Clock, Calendar, Globe, Zap, CheckCircle2, AlertCircle, TrendingUp, Users, Target, ArrowRight, Play } from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const SmartScheduling = () => {
  const [heroRef, heroInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
  });

  const [statsRef, statsInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
  });

  const [problemRef, problemInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });

  const [solutionRef, solutionInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });

  const [howItWorksRef, howItWorksInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });

  const [featuresRef, featuresInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });

  const [proofRef, proofInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });

  const handleGetStarted = () => {
    document.dispatchEvent(new CustomEvent("open-get-access"));
  };

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero Section - More dramatic, conversion-focused */}
        <section className="relative w-full bg-white px-8 md:px-[112px] pt-32 pb-16 overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-white pointer-events-none" />
          
          <div ref={heroRef} className="max-w-[1216px] mx-auto relative z-10">
            {/* Compact badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-xs font-medium border border-blue-100">
                <Clock className="h-3.5 w-3.5" />
                SMART AD SCHEDULING
              </div>
            </div>

            {/* Powerful headline */}
            <div className="text-center mb-12 space-y-6">
              <h1
                className={cn(
                  "text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] transition-opacity duration-700 max-w-5xl mx-auto",
                  heroInView ? "opacity-100" : "opacity-0"
                )}
              >
                Stop Wasting{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  40% of Your
                </span>
                <br />
                LinkedIn Ad Budget
              </h1>

              <p
                className={cn(
                  "text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-opacity duration-700",
                  heroInView ? "opacity-100" : "opacity-0"
                )}
                style={{ transitionDelay: heroInView ? "200ms" : "0ms" }}
              >
                LinkedIn forces your ads to run 24/7. Your audience doesn't work 24/7.
                <br />
                <strong className="text-gray-900">We fix that.</strong>
              </p>

              {/* CTA buttons */}
              <div
                className={cn(
                  "flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 transition-opacity duration-700",
                  heroInView ? "opacity-100" : "opacity-0"
                )}
                style={{ transitionDelay: heroInView ? "400ms" : "0ms" }}
              >
                <Button
                  size="lg"
                  className="h-14 px-8 rounded-xl bg-[#3875F6] hover:bg-[#2c5cc5] text-white text-lg font-semibold tracking-tight transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02] group"
                  onClick={handleGetStarted}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 rounded-xl border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 text-lg font-semibold tracking-tight transition-all duration-200 group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch 2-Min Demo
                </Button>
              </div>

              {/* Trust indicators */}
              <div
                className={cn(
                  "flex items-center justify-center gap-6 text-sm text-gray-500 mt-8 transition-opacity duration-700",
                  heroInView ? "opacity-100" : "opacity-0"
                )}
                style={{ transitionDelay: heroInView ? "600ms" : "0ms" }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Setup in 5 minutes</span>
                </div>
              </div>
            </div>

            {/* Hero Image - Larger, more prominent */}
            <div
              className={cn(
                "relative mt-20 transition-all duration-1000 ease-out",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: heroInView ? "800ms" : "0ms" }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/60">
                {/* Subtle glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-orange-500/20 rounded-2xl blur-2xl opacity-30" />
                <div className="relative">
                  <img
                    src="/media/ads-scheduling-interface.png"
                    alt="Smart Scheduling Interface"
                    className="w-full h-auto"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar - Social proof */}
        <section ref={statsRef} className="w-full bg-gradient-to-b from-white to-gray-50 px-8 md:px-[112px] py-16 border-y border-gray-200">
          <div className="max-w-[1216px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "40%", label: "Average Budget Saved" },
                { value: "2.3x", label: "Better ROI" },
                { value: "1000+", label: "Active Users" },
                { value: "5 min", label: "Setup Time" }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    "text-center transition-all duration-700 ease-out",
                    statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: statsInView ? `${index * 100}ms` : "0ms" }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Problem - Pain points */}
        <section ref={problemRef} className="w-full bg-gray-50 px-8 md:px-[112px] py-24">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                LinkedIn's Scheduling Problem
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unlike Google Ads or Meta, LinkedIn doesn't let you control when your ads run.
                <br />This costs you thousands in wasted spend.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🌙",
                  title: "Ads Run While You Sleep",
                  description: "Your B2B audience is offline at 3 AM, but your ads keep burning budget showing to no one."
                },
                {
                  icon: "🌍",
                  title: "Wrong Timezone Targeting",
                  description: "Targeting Europe from the US? Your ads show at midnight when decision-makers are asleep."
                },
                {
                  icon: "💸",
                  title: "Weekend Budget Waste",
                  description: "B2B buyers don't browse LinkedIn on weekends, yet your campaigns keep spending."
                }
              ].map((problem, index) => (
                <div
                  key={problem.title}
                  className={cn(
                    "bg-white rounded-2xl p-8 border border-gray-200 shadow-sm transition-all duration-700 ease-out",
                    problemInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  )}
                  style={{ transitionDelay: problemInView ? `${index * 150}ms` : "0ms" }}
                >
                  <div className="text-5xl mb-4">{problem.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Solution - Value proposition */}
        <section ref={solutionRef} className="w-full bg-white px-8 md:px-[112px] py-24">
          <div className="max-w-[1216px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Image */}
              <div
                className={cn(
                  "relative transition-all duration-1000 ease-out order-2 lg:order-1",
                  solutionInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                )}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <img
                    src="/media/ads-scheduling-list.png"
                    alt="Campaign Management"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                  <div className="text-3xl font-bold text-blue-600">40%</div>
                  <div className="text-sm text-gray-600">Budget Saved</div>
                </div>
              </div>

              {/* Right: Content */}
              <div
                className={cn(
                  "transition-all duration-1000 ease-out order-1 lg:order-2",
                  solutionInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                )}
                style={{ transitionDelay: solutionInView ? "200ms" : "0ms" }}
              >
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border border-blue-100">
                  <Zap className="h-3.5 w-3.5" />
                  THE SOLUTION
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                  Run Ads Only When Your{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    Audience is Active
                  </span>
                </h2>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  DemandSense gives you the scheduling control LinkedIn should have built. Set precise days, times, and timezones for every campaign.
                </p>

                <div className="space-y-4">
                  {[
                    "Schedule by day of week and time of day",
                    "Support for all global timezones",
                    "Bulk schedule multiple campaigns at once",
                    "Automatic pause/resume based on your schedule"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Button
                    size="lg"
                    className="h-12 px-6 rounded-xl bg-[#3875F6] hover:bg-[#2c5cc5] text-white font-semibold tracking-tight transition-all duration-200 hover:shadow-lg group"
                    onClick={handleGetStarted}
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Simple 3-step */}
        <section ref={howItWorksRef} className="w-full bg-gradient-to-b from-gray-50 to-white px-8 md:px-[112px] py-24">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Setup in <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">3 Simple Steps</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                No technical knowledge required. Start optimizing in minutes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Connect LinkedIn",
                  description: "One-click integration with your LinkedIn Ads account. We sync all campaigns automatically.",
                  icon: Globe
                },
                {
                  step: "02",
                  title: "Set Your Schedule",
                  description: "Choose days, times, and timezone. Apply to one campaign or bulk schedule hundreds at once.",
                  icon: Calendar
                },
                {
                  step: "03",
                  title: "Save & Relax",
                  description: "We automatically pause and resume your campaigns. Monitor performance from your dashboard.",
                  icon: Zap
                }
              ].map((step, index) => (
                <div
                  key={step.step}
                  className={cn(
                    "relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm transition-all duration-700 ease-out hover:shadow-lg hover:border-gray-300",
                    howItWorksInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  )}
                  style={{ transitionDelay: howItWorksInView ? `${index * 150}ms` : "0ms" }}
                >
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  <div className="mt-6 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
                      <step.icon className="h-7 w-7 text-blue-600" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid - Detailed capabilities */}
        <section ref={featuresRef} className="w-full bg-white px-8 md:px-[112px] py-24">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Everything You Need for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Perfect Timing
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Calendar,
                  title: "Flexible Scheduling",
                  description: "Set different schedules for weekdays vs weekends. Target business hours for B2B or evenings for B2C.",
                  features: ["Multiple time slots per day", "Day-specific schedules", "Recurring patterns"]
                },
                {
                  icon: Globe,
                  title: "Global Timezone Support",
                  description: "Target audiences worldwide with timezone-specific scheduling. Automatic DST adjustments included.",
                  features: ["All global timezones", "DST-aware", "Multi-region campaigns"]
                },
                {
                  icon: Zap,
                  title: "Automatic Management",
                  description: "Set it and forget it. Our system handles all campaign status changes based on your schedule.",
                  features: ["Auto pause/resume", "Real-time sync", "LinkedIn status respect"]
                },
                {
                  icon: Users,
                  title: "Bulk Operations",
                  description: "Manage hundreds of campaigns simultaneously. Apply schedules across your entire portfolio in seconds.",
                  features: ["Multi-select campaigns", "Uniform scheduling", "Advanced filtering"]
                }
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className={cn(
                    "bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 transition-all duration-700 ease-out hover:shadow-lg hover:border-gray-300",
                    featuresInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  )}
                  style={{ transitionDelay: featuresInView ? `${index * 150}ms` : "0ms" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof / Results */}
        <section ref={proofRef} className="w-full bg-gradient-to-b from-blue-50 to-white px-8 md:px-[112px] py-24">
          <div className="max-w-[1216px] mx-auto">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-12 md:p-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Real Results from Real Customers
                </h2>
                <p className="text-lg text-gray-600">
                  Join hundreds of marketers who've transformed their LinkedIn ad performance
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    metric: "CPM down 30-40%",
                    quote: "Just wanted to say that I've been using DemandSense for almost a full week, and the early returns are pretty awesome.",
                    author: "James K.",
                    role: "Director of Marketing"
                  },
                  {
                    metric: "Saves $1000s/month",
                    quote: "LinkedIn Ad Scheduling is my favorite feature, and it saves me thousands of $$ every month. I've been using it for 2+ years!",
                    author: "Or L.",
                    role: "Growth Marketing Lead"
                  },
                  {
                    metric: "CPC down 50%",
                    quote: "Been using your ad scheduling tool since yesterday. CPC went 50% down.",
                    author: "Kristof B.",
                    role: "Ad Creative Expert"
                  }
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className={cn(
                      "bg-gray-50 rounded-2xl p-6 transition-all duration-700 ease-out",
                      proofInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    )}
                    style={{ transitionDelay: proofInView ? `${index * 150}ms` : "0ms" }}
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-4">
                      {testimonial.metric}
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="text-sm">
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes - Redesigned as FAQ style */}
        <section className="w-full bg-white px-8 md:px-[112px] py-24">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Important Things to Know
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  icon: Clock,
                  title: "24-Hour Sync Period",
                  description: "When you first set up a schedule, it may take up to 24 hours for the system to fully synchronize. This allows proper adjustment of campaign statuses."
                },
                {
                  icon: AlertCircle,
                  title: "LinkedIn Status Priority",
                  description: "LinkedIn has priority for campaign status. If you manually pause a campaign in LinkedIn, DemandSense respects that and won't override it."
                },
                {
                  icon: CheckCircle2,
                  title: "Keep Campaigns Active",
                  description: "For scheduling to work, campaigns must be set to 'Active' in LinkedIn. DemandSense then manages pausing and resuming based on your schedule."
                }
              ].map((note, index) => (
                <div
                  key={index}
                  className="bg-blue-50 rounded-2xl p-6 border border-blue-100 flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <note.icon className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{note.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{note.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection
          eyebrow="Ready to optimize?"
          title="Start Saving on LinkedIn Ads Today"
          subtitle="Join hundreds of marketers who've reduced wasted ad spend by up to 40% with Smart Scheduling."
          primaryLabel="Start Free Trial"
          secondaryLabel="Talk to Sales"
        />
      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default SmartScheduling;