import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta";
import { Clock, Calendar, Globe, Zap, CheckCircle2, AlertCircle, TrendingUp, Users, Target, ArrowRight, Play, Star, Award, Shield } from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import DynamicShadow from "@/components/DynamicShadow";

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
      <main className="bg-white relative overflow-hidden">
        {/* Premium background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        </div>

        {/* Hero Section - Enhanced with premium styling */}
        <section className="relative w-full bg-gradient-to-b from-white via-blue-50/20 to-white px-8 md:px-[112px] pt-32 pb-20 overflow-hidden">
          {/* Dynamic shadow for depth */}
          <div className="absolute inset-0">
            <DynamicShadow variant="hero" />
          </div>

          <div ref={heroRef} className="max-w-[1216px] mx-auto relative z-10">
            {/* Premium badge */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100/50 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold border border-blue-200/50 shadow-lg backdrop-blur-sm">
                <Award className="h-5 w-5" />
                SMART AD SCHEDULING
                <Star className="h-4 w-4 text-yellow-500" />
              </div>
            </div>

            {/* Enhanced headline with better typography */}
            <div className="text-center mb-16 space-y-8">
              <h1
                className={cn(
                  "text-6xl md:text-8xl font-bold text-gray-900 tracking-tight leading-[0.9] transition-all duration-1000 ease-out max-w-6xl mx-auto",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
              >
                Stop Wasting{" "}
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                  40% of Your
                </span>
                {" "}Budget
              </h1>

              <p
                className={cn(
                  "text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light transition-all duration-1000 ease-out",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: heroInView ? "200ms" : "0ms" }}
              >
                LinkedIn forces your ads to run 24/7. Your audience doesn't work 24/7.
                <br />
                <strong className="text-gray-900 font-semibold">We fix that.</strong>
              </p>

              {/* Premium CTA buttons */}
              <div
                className={cn(
                  "flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 transition-all duration-1000 ease-out",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: heroInView ? "400ms" : "0ms" }}
              >
                <Button
                  size="lg"
                  className="h-16 px-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white text-xl font-semibold tracking-tight transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-[1.02] group border-0"
                  onClick={handleGetStarted}
                >
                  Start Free Trial
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 px-10 rounded-2xl border-2 border-gray-300 bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-gray-50 hover:border-gray-400 text-xl font-semibold tracking-tight transition-all duration-300 hover:shadow-xl group"
                >
                  <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  Watch 2-Min Demo
                </Button>
              </div>

              {/* Enhanced trust indicators */}
              <div
                className={cn(
                  "flex items-center justify-center gap-8 text-base text-gray-600 mt-12 transition-all duration-1000 ease-out",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: heroInView ? "600ms" : "0ms" }}
              >
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">No credit card required</span>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Setup in 5 minutes</span>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Enterprise-grade security</span>
                </div>
              </div>
            </div>

            {/* Premium hero image with enhanced styling */}
            <div
              className={cn(
                "relative mt-24 transition-all duration-1500 ease-out",
                heroInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              )}
              style={{ transitionDelay: heroInView ? "800ms" : "0ms" }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/60 backdrop-blur-sm">
                {/* Subtle glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-transparent to-orange-500/20 rounded-3xl blur-2xl opacity-50" />
                <div className="relative bg-white/95 backdrop-blur-sm p-2 rounded-3xl">
                  <img
                    src="/media/ads-scheduling-interface.png"
                    alt="Smart Scheduling Interface"
                    className="w-full h-auto rounded-2xl"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating premium badges */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl border border-gray-200 p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold text-blue-600 mb-1">40%</div>
                <div className="text-sm text-gray-600 font-medium">Budget Saved</div>
                <div className="text-xs text-gray-500 mt-1">Average improvement</div>
              </div>
              <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl border border-gray-200 p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold text-green-600 mb-1">2.3x</div>
                <div className="text-sm text-gray-600 font-medium">Better ROI</div>
                <div className="text-xs text-gray-500 mt-1">Industry benchmark</div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Bar */}
        <section ref={statsRef} className="w-full bg-gradient-to-r from-gray-50 via-white to-gray-50 px-8 md:px-[112px] py-20 border-y border-gray-200/50">
          <div className="max-w-[1216px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "40%", label: "Average Budget Saved", icon: TrendingUp },
                { value: "2.3x", label: "Better ROI", icon: Target },
                { value: "1000+", label: "Active Users", icon: Users },
                { value: "5 min", label: "Setup Time", icon: Clock }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    "text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm transition-all duration-700 ease-out hover:shadow-lg hover:bg-white/80",
                    statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: statsInView ? `${index * 100}ms` : "0ms" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Problem Section */}
        <section ref={problemRef} className="w-full bg-gradient-to-b from-white to-gray-50 px-8 md:px-[112px] py-32">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
                LinkedIn's Scheduling Problem
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                Unlike Google Ads or Meta, LinkedIn doesn't let you control when your ads run.
                <br />This costs you thousands in wasted spend.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🌙",
                  title: "Ads Run While You Sleep",
                  description: "Your B2B audience is offline at 3 AM, but your ads keep burning budget showing to no one.",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  icon: "🌍",
                  title: "Wrong Timezone Targeting",
                  description: "Targeting Europe from the US? Your ads show at midnight when decision-makers are asleep.",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: "💸",
                  title: "Weekend Budget Waste",
                  description: "B2B buyers don't browse LinkedIn on weekends, yet your campaigns keep spending.",
                  color: "from-orange-500 to-orange-600"
                }
              ].map((problem, index) => (
                <div
                  key={problem.title}
                  className={cn(
                    "bg-white rounded-3xl p-10 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-700 ease-out hover:-translate-y-2",
                    problemInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  )}
                  style={{ transitionDelay: problemInView ? `${index * 150}ms` : "0ms" }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-6 text-3xl">
                    {problem.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 leading-tight">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Solution Section */}
        <section ref={solutionRef} className="w-full bg-gradient-to-b from-gray-50 to-white px-8 md:px-[112px] py-32">
          <div className="max-w-[1216px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Left: Enhanced Image */}
              <div
                className={cn(
                  "relative transition-all duration-1000 ease-out order-2 lg:order-1",
                  solutionInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                )}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/60 backdrop-blur-sm">
                  <img
                    src="/media/ads-scheduling-list.png"
                    alt="Campaign Management"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                {/* Enhanced floating badge */}
                <div className="absolute -bottom-10 -right-10 bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 backdrop-blur-sm">
                  <div className="text-5xl font-bold text-blue-600 mb-2">40%</div>
                  <div className="text-lg text-gray-600 font-medium">Budget Saved</div>
                  <div className="text-sm text-gray-500 mt-1">Typical results</div>
                </div>
              </div>

              {/* Right: Enhanced Content */}
              <div
                className={cn(
                  "transition-all duration-1000 ease-out order-1 lg:order-2",
                  solutionInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                )}
                style={{ transitionDelay: solutionInView ? "200ms" : "0ms" }}
              >
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100/50 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-blue-200/50 shadow-lg">
                  <Zap className="h-5 w-5" />
                  THE SOLUTION
                </div>

                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
                  Run Ads Only When Your{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    Audience is Active
                  </span>
                </h2>

                <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                  DemandSense gives you the scheduling control LinkedIn should have built. Set precise days, times, and timezones for every campaign.
                </p>

                <div className="space-y-6 mb-10">
                  {[
                    "Schedule by day of week and time of day",
                    "Support for all global timezones",
                    "Bulk schedule multiple campaigns at once",
                    "Automatic pause/resume based on your schedule"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="text-gray-700 text-lg leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="h-14 px-8 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold tracking-tight transition-all duration-300 hover:shadow-xl group"
                    onClick={handleGetStarted}
                  >
                    Get Started Free
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 rounded-2xl border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-semibold tracking-tight transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced How It Works */}
        <section ref={howItWorksRef} className="w-full bg-gradient-to-b from-white via-blue-50/20 to-white px-8 md:px-[112px] py-32">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
                Setup in <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">3 Simple Steps</span>
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                No technical knowledge required. Start optimizing in minutes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "Connect LinkedIn",
                  description: "One-click integration with your LinkedIn Ads account. We sync all campaigns automatically.",
                  icon: Globe,
                  color: "from-blue-500 to-blue-600"
                },
                {
                  step: "02",
                  title: "Set Your Schedule",
                  description: "Choose days, times, and timezone. Apply to one campaign or bulk schedule hundreds at once.",
                  icon: Calendar,
                  color: "from-green-500 to-green-600"
                },
                {
                  step: "03",
                  title: "Save & Relax",
                  description: "We automatically pause and resume your campaigns. Monitor performance from your dashboard.",
                  icon: Zap,
                  color: "from-orange-500 to-orange-600"
                }
              ].map((step, index) => (
                <div
                  key={step.step}
                  className={cn(
                    "relative bg-white rounded-3xl p-10 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-700 ease-out hover:-translate-y-2",
                    howItWorksInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  )}
                  style={{ transitionDelay: howItWorksInView ? `${index * 150}ms` : "0ms" }}
                >
                  {/* Step number badge */}
                  <div className="absolute -top-6 left-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-xl">
                    {step.step}
                  </div>

                  <div className="mt-8 mb-8">
                    <div className={cn("w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg", step.color)}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-semibold text-gray-900 mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Features Grid */}
        <section ref={featuresRef} className="w-full bg-gradient-to-b from-white to-gray-50 px-8 md:px-[112px] py-32">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
                Everything You Need for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Perfect Timing
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  icon: Calendar,
                  title: "Flexible Scheduling",
                  description: "Set different schedules for weekdays vs weekends. Target business hours for B2B or evenings for B2C.",
                  features: ["Multiple time slots per day", "Day-specific schedules", "Recurring patterns"],
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: Globe,
                  title: "Global Timezone Support",
                  description: "Target audiences worldwide with timezone-specific scheduling. Automatic DST adjustments included.",
                  features: ["All global timezones", "DST-aware", "Multi-region campaigns"],
                  color: "from-green-500 to-green-600"
                },
                {
                  icon: Zap,
                  title: "Automatic Management",
                  description: "Set it and forget it. Our system handles all campaign status changes based on your schedule.",
                  features: ["Auto pause/resume", "Real-time sync", "LinkedIn status respect"],
                  color: "from-purple-500 to-purple-600"
                },
                {
                  icon: Users,
                  title: "Bulk Operations",
                  description: "Manage hundreds of campaigns simultaneously. Apply schedules across your entire portfolio in seconds.",
                  features: ["Multi-select campaigns", "Uniform scheduling", "Advanced filtering"],
                  color: "from-orange-500 to-orange-600"
                }
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className={cn(
                    "bg-white rounded-3xl border border-gray-200/50 p-10 shadow-lg hover:shadow-xl transition-all duration-700 ease-out hover:-translate-y-2",
                    featuresInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  )}
                  style={{ transitionDelay: featuresInView ? `${index * 150}ms` : "0ms" }}
                >
                  <div className={cn("w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-8 shadow-lg", feature.color)}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-3xl font-semibold text-gray-900 mb-4 leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-base text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Social Proof */}
        <section ref={proofRef} className="w-full bg-gradient-to-b from-blue-50/20 to-white px-8 md:px-[112px] py-32">
          <div className="max-w-[1216px] mx-auto">
            <div className="bg-white rounded-3xl border border-gray-200/50 shadow-2xl p-16 md:p-20 backdrop-blur-sm">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Real Results from Real Customers
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Join hundreds of marketers who've reduced wasted ad spend by up to 40% with Smart Scheduling.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                {[
                  {
                    metric: "CPM down 30-40%",
                    quote: "Just wanted to say that I've been using DemandSense for almost a full week, and the early returns are pretty awesome.",
                    author: "James K.",
                    role: "Director of Marketing",
                    avatar: "/avatars/James Korte.png"
                  },
                  {
                    metric: "Saves $1000s/month",
                    quote: "LinkedIn Ad Scheduling of DemandSense is my favorite feature, and it saves me thousands of $$ every month. I've been using it for 2+ years!",
                    author: "Or L.",
                    role: "Growth Marketing Lead",
                    avatar: "/avatars/Or Livne.svg"
                  },
                  {
                    metric: "CPC down 50%",
                    quote: "Been using your ad scheduling tool since yesterday. CPC went 50% down.",
                    author: "Kristof B.",
                    role: "Ad Creative Expert",
                    avatar: "/avatars/Kristof Bardos.svg"
                  }
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className={cn(
                      "bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-700 ease-out",
                      proofInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    )}
                    style={{ transitionDelay: proofInView ? `${index * 150}ms` : "0ms" }}
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-6">
                      {testimonial.metric}
                    </div>
                    <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full ring-2 ring-blue-100"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-8 pt-8 border-t border-gray-200/50">
                <div className="flex items-center gap-3 text-gray-600">
                  <Award className="h-6 w-6 text-blue-600" />
                  <span className="font-medium">Award-winning platform</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Shield className="h-6 w-6 text-green-600" />
                  <span className="font-medium">Enterprise security</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Users className="h-6 w-6 text-purple-600" />
                  <span className="font-medium">1000+ happy customers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Important Notes */}
        <section className="w-full bg-white px-8 md:px-[112px] py-32">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Important Things to Know
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  icon: Clock,
                  title: "24-Hour Sync Period",
                  description: "When you first set up a schedule, it may take up to 24 hours for the system to fully synchronize. This allows proper adjustment of campaign statuses.",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: AlertCircle,
                  title: "LinkedIn Status Priority",
                  description: "LinkedIn has priority for campaign status. If you manually pause a campaign in LinkedIn, DemandSense respects that and won't override it.",
                  color: "from-orange-500 to-orange-600"
                },
                {
                  icon: CheckCircle2,
                  title: "Keep Campaigns Active",
                  description: "For scheduling to work, campaigns must be set to 'Active' in LinkedIn. DemandSense then manages pausing and resuming based on your schedule.",
                  color: "from-green-500 to-green-600"
                }
              ].map((note, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-10 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className={cn("flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg", note.color)}>
                      <note.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{note.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{note.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Final CTA */}
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