import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta";
import { Clock, Calendar, Globe, Zap, CheckCircle2, AlertCircle, TrendingUp, Users, Target, ArrowRight, Play, Sparkles, BarChart3 } from "lucide-react";
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
      <main className="bg-white">
        {/* Hero Section - Premium, sophisticated */}
        <section className="relative w-full bg-white px-8 md:px-[112px] pt-32 pb-24 overflow-hidden">
          <DynamicShadow variant="hero" />
          
          <div ref={heroRef} className="max-w-[1216px] mx-auto relative z-10">
            {/* Compact badge with animation */}
            <div className="flex justify-center mb-8">
              <div
                className={cn(
                  "inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium border border-blue-100 shadow-sm transition-all duration-700",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                <Sparkles className="h-4 w-4" />
                Smart Ad Scheduling
              </div>
            </div>

            {/* Powerful headline with gradient */}
            <div className="text-center mb-16 space-y-8">
              <h1
                className={cn(
                  "text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] transition-all duration-700 max-w-5xl mx-auto",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
              >
                Stop Wasting{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  40% of Your Budget
                </span>
                {" "}on LinkedIn Ads
              </h1>

              <p
                className={cn(
                  "text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: heroInView ? "150ms" : "0ms" }}
              >
                LinkedIn forces your ads to run 24/7. Your audience doesn't work 24/7.
                <br />
                <strong className="text-gray-900">We fix that with precision scheduling.</strong>
              </p>

              {/* CTA buttons - refined */}
              <div
                className={cn(
                  "flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 transition-all duration-700",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: heroInView ? "300ms" : "0ms" }}
              >
                <Button
                  size="lg"
                  className="h-12 px-8 rounded-lg bg-[#3875F6] hover:bg-[#2c5cc5] text-white font-medium tracking-tight transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 group"
                  onClick={handleGetStarted}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 rounded-lg border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium tracking-tight transition-all duration-200 group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>

              {/* Trust indicators - refined */}
              <div
                className={cn(
                  "flex items-center justify-center gap-6 text-sm text-gray-500 mt-8 transition-all duration-700",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: heroInView ? "450ms" : "0ms" }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>5-minute setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>1000+ active users</span>
                </div>
              </div>
            </div>

            {/* Hero Image - Premium presentation with magic border */}
            <div
              className={cn(
                "relative mt-20 transition-all duration-1000 ease-out",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: heroInView ? "600ms" : "0ms" }}
            >
              <div className="magic-border">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
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

        {/* Stats Bar - Elegant metrics */}
        <section ref={statsRef} className="w-full bg-white px-8 md:px-[112px] py-16 border-y border-gray-200">
          <div className="max-w-[1216px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "40%", label: "Average Budget Saved", icon: TrendingUp },
                { value: "2.3x", label: "Better ROI", icon: BarChart3 },
                { value: "1000+", label: "Active Users", icon: Users },
                { value: "5 min", label: "Setup Time", icon: Clock }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    "text-center transition-all duration-700 ease-out group",
                    statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: statsInView ? `${index * 100}ms` : "0ms" }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-4 group-hover:bg-blue-100 transition-colors duration-200">
                    <stat.icon className="h-6 w-6" />
                  </div>
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

        {/* The Problem - Sophisticated pain points */}
        <section ref={problemRef} className="w-full bg-gradient-to-b from-white to-gray-50 px-8 md:px-[112px] py-24">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-100">
                <AlertCircle className="h-4 w-4" />
                The Problem
              </div>
              
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
                LinkedIn's <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Scheduling Gap</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Unlike Google Ads or Meta, LinkedIn doesn't offer native scheduling controls.
                <br />This limitation costs B2B advertisers thousands in wasted spend every month.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Clock,
                  iconBg: "bg-orange-500",
                  title: "24/7 Budget Drain",
                  description: "Your B2B audience is offline at 3 AM, but your ads keep burning budget showing to empty feeds.",
                  impact: "~15% wasted"
                },
                {
                  icon: Globe,
                  iconBg: "bg-purple-500",
                  title: "Timezone Misalignment",
                  description: "Targeting Europe from the US? Your ads show at midnight when decision-makers are asleep.",
                  impact: "~20% wasted"
                },
                {
                  icon: Calendar,
                  iconBg: "bg-blue-600",
                  title: "Weekend Waste",
                  description: "B2B buyers don't browse LinkedIn on weekends, yet your campaigns keep spending.",
                  impact: "~10% wasted"
                }
              ].map((problem, index) => (
                <div
                  key={problem.title}
                  className={cn(
                    "relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm transition-all duration-700 ease-out hover:shadow-lg hover:border-gray-300 group",
                    problemInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  )}
                  style={{ transitionDelay: problemInView ? `${index * 150}ms` : "0ms" }}
                >
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200", problem.iconBg)}>
                    <problem.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {problem.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {problem.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {problem.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Solution - Premium value proposition */}
        <section ref={solutionRef} className="w-full bg-white px-8 md:px-[112px] py-24">
          <div className="max-w-[1216px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Image with floating elements */}
              <div
                className={cn(
                  "relative transition-all duration-1000 ease-out order-2 lg:order-1",
                  solutionInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                )}
              >
                <div className="relative">
                  {/* Main image with magic border */}
                  <div className="magic-border">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
                      <img
                        src="/media/ads-scheduling-list.png"
                        alt="Campaign Management Dashboard"
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  {/* Floating stat cards */}
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl border border-gray-200 p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">40%</div>
                        <div className="text-xs text-gray-600">Budget Saved</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl border border-gray-200 p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-medium text-gray-900">Live Scheduling</span>
                    </div>
                  </div>
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
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-sm font-medium mb-6 border border-blue-100">
                  <Zap className="h-4 w-4" />
                  The Solution
                </div>

                <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight">
                  Run Ads Only When Your{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    Audience is Active
                  </span>
                </h2>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  DemandSense gives you the scheduling control LinkedIn should have built. Set precise days, times, and timezones for every campaign—automatically.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    { text: "Schedule by day of week and time of day", icon: Calendar },
                    { text: "Support for all global timezones", icon: Globe },
                    { text: "Bulk schedule multiple campaigns at once", icon: Target },
                    { text: "Automatic pause/resume based on your schedule", icon: Zap }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 group-hover:bg-blue-600 transition-colors duration-200">
                        <feature.icon className="h-3.5 w-3.5 text-blue-600 group-hover:text-white transition-colors duration-200" />
                      </div>
                      <span className="text-gray-700 text-lg leading-relaxed">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    size="lg"
                    className="h-12 px-6 rounded-lg bg-[#3875F6] hover:bg-[#2c5cc5] text-white font-medium tracking-tight transition-all duration-200 hover:shadow-lg group"
                    onClick={handleGetStarted}
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <div className="text-sm text-gray-600">
                    <div className="font-medium text-gray-900">No credit card required</div>
                    <div>Setup in 5 minutes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Clean 3-step process */}
        <section ref={howItWorksRef} className="w-full bg-gradient-to-b from-gray-50 to-white px-8 md:px-[112px] py-24">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-100">
                <Sparkles className="h-4 w-4" />
                How It Works
              </div>
              
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
                Setup in <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">3 Simple Steps</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                No technical knowledge required. Start optimizing your ad spend in minutes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connection lines (desktop only) */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" style={{ width: 'calc(100% - 8rem)', left: '4rem' }} />
              
              {[
                {
                  step: "01",
                  title: "Connect LinkedIn",
                  description: "One-click integration with your LinkedIn Ads account. We sync all campaigns automatically—no manual setup required.",
                  icon: Globe,
                  color: "from-blue-600 to-blue-400"
                },
                {
                  step: "02",
                  title: "Set Your Schedule",
                  description: "Choose days, times, and timezone. Apply to one campaign or bulk schedule hundreds at once with our intuitive interface.",
                  icon: Calendar,
                  color: "from-purple-600 to-purple-400"
                },
                {
                  step: "03",
                  title: "Save & Monitor",
                  description: "We automatically pause and resume your campaigns. Monitor performance and savings from your real-time dashboard.",
                  icon: Zap,
                  color: "from-orange-600 to-orange-400"
                }
              ].map((step, index) => (
                <div
                  key={step.step}
                  className={cn(
                    "relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm transition-all duration-700 ease-out hover:shadow-xl hover:border-gray-300 group",
                    howItWorksInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  )}
                  style={{ transitionDelay: howItWorksInView ? `${index * 150}ms` : "0ms" }}
                >
                  {/* Step number badge with gradient */}
                  <div className={cn("absolute -top-6 left-8 w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-200", step.color)}>
                    {step.step}
                  </div>

                  <div className="mt-6 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-200">
                      <step.icon className="h-7 w-7 text-gray-700 group-hover:text-blue-600 transition-colors duration-200" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">
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

        {/* Features Grid - Premium capabilities */}
        <section ref={featuresRef} className="w-full bg-white px-8 md:px-[112px] py-24">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-100">
                <Target className="h-4 w-4" />
                Features
              </div>
              
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
                Everything You Need for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Perfect Timing
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Comprehensive scheduling tools designed for modern B2B marketers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Calendar,
                  iconBg: "bg-blue-600",
                  title: "Flexible Scheduling",
                  description: "Set different schedules for weekdays vs weekends. Target business hours for B2B or evenings for B2C audiences.",
                  features: ["Multiple time slots per day", "Day-specific schedules", "Recurring patterns"]
                },
                {
                  icon: Globe,
                  iconBg: "bg-purple-600",
                  title: "Global Timezone Support",
                  description: "Target audiences worldwide with timezone-specific scheduling. Automatic DST adjustments included for accuracy.",
                  features: ["All global timezones", "DST-aware scheduling", "Multi-region campaigns"]
                },
                {
                  icon: Zap,
                  iconBg: "bg-orange-500",
                  title: "Automatic Management",
                  description: "Set it and forget it. Our system handles all campaign status changes based on your schedule in real-time.",
                  features: ["Auto pause/resume", "Real-time sync", "LinkedIn status respect"]
                },
                {
                  icon: Users,
                  iconBg: "bg-green-600",
                  title: "Bulk Operations",
                  description: "Manage hundreds of campaigns simultaneously. Apply schedules across your entire portfolio in seconds.",
                  features: ["Multi-select campaigns", "Uniform scheduling", "Advanced filtering"]
                }
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className={cn(
                    "relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 transition-all duration-700 ease-out hover:shadow-xl hover:border-gray-300 group overflow-hidden",
                    featuresInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  )}
                  style={{ transitionDelay: featuresInView ? `${index * 150}ms` : "0ms" }}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
                  
                  <div className="relative">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200", feature.iconBg)}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof - Testimonials */}
        <section ref={proofRef} className="w-full bg-gradient-to-b from-gray-50 to-white px-8 md:px-[112px] py-24">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-100">
                <Users className="h-4 w-4" />
                Customer Success
              </div>
              
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
                Real Results from <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Real Customers</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of marketers who've transformed their LinkedIn ad performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  metric: "CPM down 30-40%",
                  quote: "Just wanted to say that I've been using DemandSense for almost a full week, and the early returns are pretty awesome. CPMs are down between 30-40%, impressions are up between 50-100+%.",
                  author: "James Korte",
                  role: "Director of Marketing at BlueStar US",
                  avatar: "/avatars/James Korte.png"
                },
                {
                  metric: "Saves $1000s/month",
                  quote: "LinkedIn Ad Scheduling of DemandSense is my favorite feature too, and it saves me thousands of $$ every month. I've been using it for 2+ years!",
                  author: "Or Livne",
                  role: "Growth Marketing Lead at Vim",
                  avatar: "/avatars/Or Livne.svg"
                },
                {
                  metric: "CPC down 50%",
                  quote: "Been using your ad scheduling tool since yesterday. CPC went 50% down.",
                  author: "Kristof Bardos",
                  role: "Ad Creative Expert at Marketixa",
                  avatar: "/avatars/Kristof Bardos.svg"
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className={cn(
                    "bg-white rounded-2xl p-8 border border-gray-200 shadow-sm transition-all duration-700 ease-out hover:shadow-lg hover:border-gray-300",
                    proofInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  )}
                  style={{ transitionDelay: proofInView ? `${index * 150}ms` : "0ms" }}
                >
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
                    <span className="text-sm font-semibold text-blue-600">{testimonial.metric}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full ring-2 ring-gray-100"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notes - FAQ style */}
        <section className="w-full bg-white px-8 md:px-[112px] py-24 border-t border-gray-200">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-100">
                <AlertCircle className="h-4 w-4" />
                Important Information
              </div>
              
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
                Things to Know
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Key details about how Smart Scheduling works with LinkedIn
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  icon: Clock,
                  iconBg: "bg-blue-100",
                  iconColor: "text-blue-600",
                  title: "24-Hour Sync Period",
                  description: "When you first set up a schedule, it may take up to 24 hours for the system to fully synchronize. This allows proper adjustment of campaign statuses and ensures smooth operation."
                },
                {
                  icon: AlertCircle,
                  iconBg: "bg-orange-100",
                  iconColor: "text-orange-600",
                  title: "LinkedIn Status Priority",
                  description: "LinkedIn has priority for campaign status. If you manually pause a campaign in LinkedIn, DemandSense respects that decision and won't override it. This ensures you always maintain control."
                },
                {
                  icon: CheckCircle2,
                  iconBg: "bg-green-100",
                  iconColor: "text-green-600",
                  title: "Keep Campaigns Active",
                  description: "For scheduling to work, campaigns must be set to 'Active' in LinkedIn. DemandSense then manages pausing and resuming based on your schedule. This is the recommended setup for optimal performance."
                }
              ].map((note, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 flex gap-4 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex-shrink-0">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", note.iconBg)}>
                      <note.icon className={cn("h-5 w-5", note.iconColor)} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">{note.title}</h3>
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