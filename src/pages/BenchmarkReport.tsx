import React, { Suspense, useState } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import { BarChart3, TrendingUp, Download, CheckCircle2, ArrowRight, Circle, Target, Zap, DollarSign } from "lucide-react";
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
import DynamicShadow from "@/components/DynamicShadow";
import ButtonGroup from "@/components/ButtonGroup";

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

  const handleGetReport = () => {
    const formSection = document.getElementById('download-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleViewData = () => {
    const chartSection = document.getElementById('live-benchmarks');
    if (chartSection) {
      chartSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero Section - Aligned with Main Page */}
        <section className="relative w-full bg-white px-8 md:px-[112px] pt-32 pb-24 overflow-hidden">
          {/* Dynamic Shadow from Main Page */}
          <DynamicShadow variant="hero" />
          
          <div ref={heroRef} className="max-w-[1216px] mx-auto relative z-10">
            {/* Floating Stats Cards - 5 cards for 5 metrics */}
            
            {/* Card 1: Top Left - CPM Benchmark */}
            <div className="absolute top-4 left-0 hidden lg:block">
              <div
                className={cn(
                  "bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-blue-100 transition-all duration-1000",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                )}
                style={{ transitionDelay: "600ms" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">$42.50</div>
                    <div className="text-xs text-gray-600">Avg. CPM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Top Right - CPL Benchmark */}
            <div className="absolute top-4 right-0 hidden lg:block">
              <div
                className={cn(
                  "bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-orange-100 transition-all duration-1000",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                )}
                style={{ transitionDelay: "800ms" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">$45.20</div>
                    <div className="text-xs text-gray-600">Avg. CPL</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Middle Left - CPC Benchmark */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 hidden xl:block">
              <div
                className={cn(
                  "bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-green-100 transition-all duration-1000",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                )}
                style={{ transitionDelay: "1000ms" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">$7.80</div>
                    <div className="text-xs text-gray-600">Avg. CPC</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Middle Right - CTR Benchmark */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 hidden xl:block">
              <div
                className={cn(
                  "bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-purple-100 transition-all duration-1000",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                )}
                style={{ transitionDelay: "1200ms" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">0.52%</div>
                    <div className="text-xs text-gray-600">Avg. CTR</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Bottom Left - CVR Benchmark */}
            <div className="absolute bottom-4 left-16 hidden xl:block">
              <div
                className={cn(
                  "bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-blue-100 transition-all duration-1000",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: "1400ms" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">2.8%</div>
                    <div className="text-xs text-gray-600">Avg. CVR</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-12 pt-8">
              {/* Badge - Matching Main Page Style */}
              <div
                className={cn(
                  "inline-flex items-center bg-gray-50 rounded-full p-1 mb-12 shadow-md transition-all duration-700",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                role="group"
                aria-label="Update notification"
              >
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-sm">
                  <Circle className="h-3 w-3 text-green-500 fill-green-500 animate-pulse-soft" aria-hidden="true" />
                  <span className="text-sm font-normal text-gray-900 tracking-tight">New</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1">
                  <span className="text-sm font-normal text-gray-900 tracking-tight">Free Benchmark Report</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gray-600" aria-hidden="true" />
                </div>
              </div>

              {/* Main Headline - Two Lines */}
              <h1
                className={cn(
                  "text-5xl md:text-6xl font-semibold text-gray-900 mb-8 max-w-5xl mx-auto leading-tight tracking-tight transition-all duration-700",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
              >
                Discover Where Your
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">LinkedIn Ads Stand</span>
              </h1>

              {/* Descriptive Text */}
              <p
                className={cn(
                  "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 transition-all duration-700",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: heroInView ? "100ms" : "0ms" }}
              >
                Compare your LinkedIn advertising performance against industry benchmarks. Get instant insights into your CPC, CPL, CTR, CPM, and CVR metrics to identify opportunities for optimization and cost savings.
              </p>

              {/* Button Group - Centered */}
              <div
                className={cn(
                  "flex justify-center mb-6 transition-all duration-700",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: heroInView ? "200ms" : "0ms" }}
              >
                <ButtonGroup 
                  primaryLabel="Get Your Report" 
                  secondaryLabel="View Live Data"
                  onPrimaryClick={handleGetReport}
                  onSecondaryClick={handleViewData}
                />
              </div>

              {/* Trust Indicators - Green Checkmarks */}
              <div
                className={cn(
                  "flex items-center justify-center gap-6 text-sm text-gray-500 transition-all duration-700",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: heroInView ? "300ms" : "0ms" }}
              >
                <div className="flex items-center gap-2" role="listitem">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-500" aria-hidden="true" />
                  <span className="tracking-tight">Real campaign data</span>
                </div>
                <div className="flex items-center gap-2" role="listitem">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-500" aria-hidden="true" />
                  <span className="tracking-tight">Industry-specific</span>
                </div>
                <div className="flex items-center gap-2" role="listitem">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-500" aria-hidden="true" />
                  <span className="tracking-tight">Actionable insights</span>
                </div>
              </div>
            </div>
          </div>
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