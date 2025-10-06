import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta";
import { Clock, Calendar, Globe, Zap, CheckCircle2, AlertCircle, TrendingUp, Users, Target } from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import ButtonGroup from "@/components/ButtonGroup";

const SmartScheduling = () => {
  const [heroRef, heroInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
  });

  const [benefitsRef, benefitsInView] = useInViewOnce<HTMLDivElement>({
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

  const handleGetStarted = () => {
    document.dispatchEvent(new CustomEvent("open-get-access"));
  };

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-b from-blue-50 to-white px-8 md:px-[112px] pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-orange-100/20 pointer-events-none" />
          
          <div ref={heroRef} className="max-w-[1216px] mx-auto relative z-10">
            <div className="text-center mb-16 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-blue-100">
                <Clock className="h-4 w-4" />
                SMART AD SCHEDULING
              </div>

              <h1
                className={cn(
                  "text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight transition-opacity duration-700",
                  heroInView ? "opacity-100" : "opacity-0"
                )}
              >
                Run LinkedIn Ads Only When{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Your Audience is Active
                </span>
              </h1>

              <p
                className={cn(
                  "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-opacity duration-700",
                  heroInView ? "opacity-100" : "opacity-0"
                )}
                style={{ transitionDelay: heroInView ? "200ms" : "0ms" }}
              >
                Stop wasting budget on ads that run 24/7. DemandSense's Smart Scheduling gives you precise control over when your LinkedIn campaigns run—something LinkedIn doesn't offer natively.
              </p>

              <div
                className={cn(
                  "flex items-center justify-center gap-4 mt-8 transition-opacity duration-700",
                  heroInView ? "opacity-100" : "opacity-0"
                )}
                style={{ transitionDelay: heroInView ? "400ms" : "0ms" }}
              >
                <ButtonGroup
                  primaryLabel="Start Free Trial"
                  secondaryLabel="Watch Demo"
                  onPrimaryClick={handleGetStarted}
                />
              </div>
            </div>

            {/* Hero Image */}
            <div
              className={cn(
                "relative mt-16 transition-all duration-1000 ease-out",
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: heroInView ? "600ms" : "0ms" }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src="/media/ads-scheduling-interface.png"
                  alt="Smart Scheduling Interface"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section ref={benefitsRef} className="w-full bg-white px-8 md:px-[112px] py-24">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-100">
                <Zap className="h-4 w-4" />
                KEY BENEFITS
              </div>
              
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
                Why <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Smart Scheduling</span> Matters
              </h2>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                LinkedIn doesn't let you schedule ads by day or time. We fix that.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  iconBg: "bg-blue-600",
                  title: "Reduce Wasted Spend",
                  description: "Stop paying for impressions during off-hours when your audience isn't active. Run ads only during peak engagement times.",
                  delay: "0ms"
                },
                {
                  icon: Globe,
                  iconBg: "bg-orange-500",
                  title: "Multi-Timezone Support",
                  description: "Target multiple regions with precision. Set different schedules for different timezones to reach global audiences effectively.",
                  delay: "150ms"
                },
                {
                  icon: Users,
                  iconBg: "bg-blue-600",
                  title: "Bulk Campaign Management",
                  description: "Schedule multiple campaigns at once. Apply the same optimal schedule across your entire campaign portfolio in seconds.",
                  delay: "300ms"
                }
              ].map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={cn(
                    "relative bg-white rounded-xl border border-gray-200 shadow-sm p-8 flex flex-col transition-all duration-700 ease-out hover:shadow-lg hover:border-gray-300 hover:-translate-y-1",
                    benefitsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  )}
                  style={{ transitionDelay: benefitsInView ? benefit.delay : "0ms" }}
                >
                  <div className="mb-6">
                    <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center shadow-sm", benefit.iconBg)}>
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 leading-tight tracking-tight">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section ref={howItWorksRef} className="w-full bg-gradient-to-b from-gray-50 to-white px-8 md:px-[112px] py-24">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-100">
                <Target className="h-4 w-4" />
                HOW IT WORKS
              </div>
              
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
                Set Up in <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Minutes</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Our intuitive interface makes campaign scheduling effortless
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Steps */}
              <div className="space-y-8">
                {[
                  {
                    number: "01",
                    title: "Connect Your LinkedIn Account",
                    description: "Link your LinkedIn Ads account to DemandSense in just a few clicks. We'll sync all your campaigns automatically."
                  },
                  {
                    number: "02",
                    title: "Select Campaigns to Schedule",
                    description: "Choose individual campaigns or select multiple campaigns for bulk scheduling. Filter by status, format, or ad type."
                  },
                  {
                    number: "03",
                    title: "Set Your Schedule",
                    description: "Pick your timezone, select days of the week, and define time ranges. Add multiple time slots for different days if needed."
                  },
                  {
                    number: "04",
                    title: "Activate & Monitor",
                    description: "Save your schedule and we'll automatically pause/resume your campaigns. Monitor performance in real-time from your dashboard."
                  }
                ].map((step, index) => (
                  <div
                    key={step.number}
                    className={cn(
                      "flex gap-6 transition-all duration-700 ease-out",
                      howItWorksInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    )}
                    style={{ transitionDelay: howItWorksInView ? `${index * 150}ms` : "0ms" }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Image */}
              <div
                className={cn(
                  "relative transition-all duration-1000 ease-out",
                  howItWorksInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                )}
                style={{ transitionDelay: howItWorksInView ? "400ms" : "0ms" }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <img
                    src="/media/ads-scheduling-list.png"
                    alt="Campaign List View"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Deep Dive */}
        <section ref={featuresRef} className="w-full bg-white px-8 md:px-[112px] py-24">
          <div className="max-w-[1216px] mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-100">
                <CheckCircle2 className="h-4 w-4" />
                POWERFUL FEATURES
              </div>
              
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
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
                  title: "Flexible Day & Time Selection",
                  description: "Choose specific days of the week and multiple time ranges. Perfect for B2B campaigns targeting business hours or B2C campaigns optimized for evenings and weekends.",
                  features: [
                    "Select individual days or day ranges",
                    "Set multiple time slots per day",
                    "Different schedules for different days"
                  ]
                },
                {
                  icon: Globe,
                  title: "Timezone Intelligence",
                  description: "Target audiences across different regions with timezone-specific scheduling. Automatically adjusts for daylight saving time changes.",
                  features: [
                    "Support for all global timezones",
                    "Auto-detect user timezone",
                    "DST-aware scheduling"
                  ]
                },
                {
                  icon: Zap,
                  title: "Automatic Campaign Management",
                  description: "Our system automatically pauses and resumes your campaigns based on your schedule. No manual intervention required.",
                  features: [
                    "Real-time status updates",
                    "Respects LinkedIn campaign status",
                    "24-hour sync period for new schedules"
                  ]
                },
                {
                  icon: Users,
                  title: "Bulk Scheduling",
                  description: "Apply the same schedule to multiple campaigns simultaneously. Save hours of manual work when managing large campaign portfolios.",
                  features: [
                    "Select multiple campaigns at once",
                    "Apply uniform schedules",
                    "Filter and search capabilities"
                  ]
                }
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className={cn(
                    "relative bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 shadow-sm p-8 flex flex-col transition-all duration-700 ease-out hover:shadow-lg hover:border-gray-300",
                    featuresInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  )}
                  style={{ transitionDelay: featuresInView ? `${index * 150}ms` : "0ms" }}
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 leading-tight tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <ul className="space-y-3 mt-auto">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notes Section */}
        <section className="w-full bg-gradient-to-b from-blue-50 to-white px-8 md:px-[112px] py-24">
          <div className="max-w-[1216px] mx-auto">
            <div className="bg-white rounded-2xl border border-blue-200 shadow-lg p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <AlertCircle className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Important Things to Know
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong className="text-gray-900">24-Hour Sync Period:</strong> When you first set up a schedule, it may take up to 24 hours for the system to fully synchronize and start performing as expected. This allows our system to properly adjust campaign statuses.
                    </p>
                    <p>
                      <strong className="text-gray-900">LinkedIn Status Priority:</strong> LinkedIn has priority when it comes to campaign status. If you manually pause a campaign in LinkedIn, DemandSense will respect that and won't override it. The schedule will resume once the campaign is active again on LinkedIn.
                    </p>
                    <p>
                      <strong className="text-gray-900">Keep Campaigns Active:</strong> For scheduling to work properly, campaigns must be set to "Active" status in LinkedIn. DemandSense will then manage the pausing and resuming based on your schedule.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Optimize Your Ad Schedule?"
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