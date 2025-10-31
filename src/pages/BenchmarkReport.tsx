import React, { Suspense, useState } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import { BarChart3, TrendingUp, Download, CheckCircle2, ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { showSuccess } from "@/utils/toast";
import BenchmarkChart from "@/components/benchmark/BenchmarkChart";

const INDUSTRIES = [
  "Business Services/Consulting",
  "Financial Services",
  "IT Services",
  "Marketing Services",
  "SaaS",
  "Other",
];

const BenchmarkReport = () => {
  const [heroRef, heroInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
  });

  const [chartRef, chartInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });

  const [formRef, formInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.industry) {
      showSuccess("Please fill in all fields");
      return;
    }

    setIsSubmitted(true);
    showSuccess(`Thank you, ${formData.name}! Your personalized benchmark report is on the way.`);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", industry: "" });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero Section - Redesigned */}
        <section className="relative w-full bg-gradient-to-br from-blue-50 via-white to-orange-50 px-8 md:px-[112px] pt-32 pb-24 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large Growth Curve */}
            <svg
              className="absolute bottom-0 left-0 w-full h-full opacity-[0.15]"
              viewBox="0 0 1200 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="curveGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3875F6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#FA8C16" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M 0 800 Q 300 700, 600 400 T 1200 100 L 1200 800 Z"
                fill="url(#curveGradient)"
                className="animate-pulse-soft"
              />
              <path
                d="M 0 800 Q 300 700, 600 400 T 1200 100"
                stroke="url(#curveGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* Floating Orbs */}
            <div
              className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
              style={{
                top: "10%",
                right: "10%",
                background: "radial-gradient(circle, #3875F6 0%, transparent 70%)",
                animation: "float 20s ease-in-out infinite",
              }}
            />
            <div
              className="absolute w-80 h-80 rounded-full blur-3xl opacity-15"
              style={{
                bottom: "20%",
                left: "5%",
                background: "radial-gradient(circle, #FA8C16 0%, transparent 70%)",
                animation: "float 25s ease-in-out infinite reverse",
              }}
            />

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #3875F6 1px, transparent 1px),
                    linear-gradient(to bottom, #3875F6 1px, transparent 1px)
                  `,
                  backgroundSize: "60px 60px",
                }}
              />
            </div>

            {/* Sparkle Elements */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-40"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
          
          <div ref={heroRef} className="max-w-[1216px] mx-auto relative z-10">
            {/* Floating Stats Cards */}
            <div className="absolute top-0 left-0 hidden lg:block">
              <div
                className={cn(
                  "bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-blue-100 transition-all duration-1000",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                )}
                style={{ transitionDelay: "600ms" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">40%</div>
                    <div className="text-xs text-gray-600">Avg. Savings</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-20 right-0 hidden lg:block">
              <div
                className={cn(
                  "bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-orange-100 transition-all duration-1000",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                )}
                style={{ transitionDelay: "800ms" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">1000+</div>
                    <div className="text-xs text-gray-600">Companies</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-12 pt-8">
              {/* Premium Badge */}
              <div
                className={cn(
                  "inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-blue-500/25 transition-all duration-700 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                <Sparkles className="h-4 w-4" />
                Free LinkedIn Ads Benchmark Report
                <Sparkles className="h-4 w-4" />
              </div>

              {/* Main Headline with Gradient */}
              <h1
                className={cn(
                  "text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 transition-all duration-700",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
              >
                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                  Discover Where Your
                </span>
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent">
                    LinkedIn Ads Stand
                  </span>
                  {/* Underline decoration */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="12"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10C50 5, 100 2, 150 5C200 8, 250 4, 298 7"
                      stroke="url(#underlineGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3875F6" />
                        <stop offset="50%" stopColor="#60A5FA" />
                        <stop offset="100%" stopColor="#FA8C16" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              {/* Subheadline */}
              <p
                className={cn(
                  "text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10 transition-all duration-700",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: heroInView ? "150ms" : "0ms" }}
              >
                Get instant access to{" "}
                <strong className="text-gray-900 font-semibold">industry-specific benchmarks</strong> for CPC, CPL, CTR, CPM, and CVR.
                <br />
                Compare your performance and{" "}
                <strong className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent font-semibold">
                  discover hidden opportunities
                </strong>
                .
              </p>

              {/* CTA Buttons */}
              <div
                className={cn(
                  "flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: heroInView ? "300ms" : "0ms" }}
              >
                <Button
                  size="lg"
                  className="h-14 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold tracking-tight transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 group"
                  onClick={() => {
                    const formSection = document.getElementById('download-form');
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Get Your Free Report
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 rounded-xl border-2 border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:border-gray-400 font-semibold tracking-tight transition-all duration-200 hover:shadow-lg group"
                  onClick={() => {
                    const chartSection = document.getElementById('live-benchmarks');
                    if (chartSection) {
                      chartSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  <Zap className="mr-2 h-5 w-5 text-orange-500 group-hover:text-orange-600" />
                  View Live Data
                </Button>
              </div>

              {/* Trust Indicators - Enhanced */}
              <div
                className={cn(
                  "flex flex-wrap items-center justify-center gap-8 text-sm transition-all duration-700",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: heroInView ? "450ms" : "0ms" }}
              >
                {[
                  { icon: BarChart3, text: "Real campaign data", color: "text-blue-600" },
                  { icon: Target, text: "Industry-specific", color: "text-orange-600" },
                  { icon: Sparkles, text: "Actionable insights", color: "text-blue-600" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
                  >
                    <item.icon className={cn("h-4 w-4", item.color)} />
                    <span className="font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CSS for animations */}
          <style>{`
            @keyframes float {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(30px, -30px) scale(1.1); }
              66% { transform: translate(-20px, 20px) scale(0.9); }
            }
            
            @keyframes twinkle {
              0%, 100% { opacity: 0.2; transform: scale(1); }
              50% { opacity: 0.8; transform: scale(1.5); }
            }
          `}</style>
        </section>

        {/* Interactive Chart Section */}
        <section
          id="live-benchmarks"
          ref={chartRef}
          className="w-full bg-gradient-to-b from-white to-gray-50 px-8 md:px-[112px] py-16"
        >
          <div className="max-w-[1216px] mx-auto">
            <div
              className={cn(
                "text-center mb-12 transition-all duration-700",
                chartInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                <BarChart3 className="h-4 w-4" />
                Live Benchmarks
              </div>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
                Explore <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Real-Time Data</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Watch as the chart automatically cycles through different metrics and industries to show you comprehensive benchmark data.
              </p>
            </div>

            {/* Chart Component - Auto-cycling */}
            <div
              className={cn(
                "transition-all duration-700",
                chartInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: chartInView ? "300ms" : "0ms" }}
            >
              <BenchmarkChart
                metric="cpc"
                industry="SaaS"
              />
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="w-full bg-white px-8 md:px-[112px] py-16">
          <div className="max-w-[1216px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: BarChart3,
                  title: "Real Data",
                  description: "Benchmarks based on millions of dollars in LinkedIn ad spend across industries.",
                  gradient: "from-blue-500 to-blue-600"
                },
                {
                  icon: TrendingUp,
                  title: "Actionable Insights",
                  description: "Get specific recommendations on how to improve your campaign performance.",
                  gradient: "from-orange-500 to-orange-600"
                },
                {
                  icon: Download,
                  title: "Personalized Report",
                  description: "Receive a custom PDF with benchmarks tailored to your specific industry.",
                  gradient: "from-blue-500 to-blue-600"
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={cn("w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300", item.gradient)}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section
          id="download-form"
          ref={formRef}
          className="w-full bg-gradient-to-b from-gray-50 to-white px-8 md:px-[112px] py-24"
        >
          <div className="max-w-[1216px] mx-auto">
            <div className="max-w-3xl mx-auto">
              <div
                className={cn(
                  "text-center mb-12 transition-all duration-700",
                  formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                  <Download className="h-4 w-4" />
                  Get Your Free Report
                </div>

                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
                  Download Your{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    Personalized Benchmark Report
                  </span>
                </h2>

                <p className="text-lg text-gray-600">
                  Enter your details below and we'll send you a comprehensive PDF report with industry-specific benchmarks, expert analysis, and optimization tips.
                </p>
              </div>

              {!isSubmitted ? (
                <div
                  className={cn(
                    "bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg transition-all duration-700",
                    formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: formInView ? "200ms" : "0ms" }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Work Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry" className="text-sm font-medium text-gray-700">
                        Your Industry *
                      </Label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) => handleInputChange("industry", value)}
                        required
                      >
                        <SelectTrigger
                          id="industry"
                          className="h-12 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        >
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {INDUSTRIES.map((industry) => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full h-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium tracking-tight transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 group"
                      >
                        <Download className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                        Download Free Report
                      </Button>
                    </div>

                    <p className="text-sm text-gray-500 text-center">
                      By downloading, you agree to receive marketing communications from DemandSense.
                      <br />
                      You can unsubscribe at any time.
                    </p>
                  </form>
                </div>
              ) : (
                <div
                  className="bg-white rounded-2xl p-12 border border-gray-200 shadow-lg text-center"
                  role="status"
                  aria-live="polite"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Thank You!
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Your personalized benchmark report is on the way to your inbox.
                  </p>
                  <p className="text-sm text-gray-500">
                    Check your email in the next few minutes.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Platform CTA Section */}
        <section className="w-full bg-white px-8 md:px-[112px] py-16 border-t border-gray-200">
          <div className="max-w-[1216px] mx-auto">
            <div className="cta-card rounded-2xl p-8 md:p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-6 shadow-lg">
                  <TrendingUp className="h-4 w-4" />
                  Take It Further
                </div>

                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
                  Compare Your Campaigns{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    in Real-Time
                  </span>
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                  Don't just read about benchmarks—see how your actual campaigns stack up.
                  <br />
                  DemandSense gives you live performance comparisons and AI-powered optimization recommendations.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className="h-12 px-8 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium tracking-tight group"
                    onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 rounded-lg border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    View Platform Demo
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mt-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>30-day free trial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default BenchmarkReport;