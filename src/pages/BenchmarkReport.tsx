import React, { Suspense, useState } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import { BarChart3, TrendingUp, Download, CheckCircle2, ArrowRight } from "lucide-react";
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

const METRICS = [
  { id: "cpc", label: "CPC (Cost Per Click)", unit: "$" },
  { id: "cpl", label: "CPL (Cost Per Lead)", unit: "$" },
  { id: "ctr", label: "CTR (Click-Through Rate)", unit: "%" },
  { id: "cpm", label: "CPM (Cost Per Mille)", unit: "$" },
  { id: "cvr", label: "CVR (Conversion Rate)", unit: "%" },
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

  const [selectedMetric, setSelectedMetric] = useState("cpc");
  const [selectedIndustry, setSelectedIndustry] = useState("SaaS");

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
        {/* Hero Section */}
        <section className="relative w-full bg-white px-8 md:px-[112px] pt-32 pb-16 overflow-hidden">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white pointer-events-none" />
          
          <div ref={heroRef} className="max-w-[1216px] mx-auto relative z-10">
            <div className="text-center mb-12">
              <div
                className={cn(
                  "inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm border border-blue-100 transition-all duration-700",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                <BarChart3 className="h-4 w-4" />
                Free LinkedIn Ads Benchmark Report
              </div>

              <h1
                className={cn(
                  "text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6 transition-all duration-700",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
              >
                How Do Your LinkedIn Ads{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Stack Up?
                </span>
              </h1>

              <p
                className={cn(
                  "text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 transition-all duration-700",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: heroInView ? "150ms" : "0ms" }}
              >
                Get instant access to industry-specific benchmarks for CPC, CPL, CTR, CPM, and CVR.
                <br />
                <strong className="text-gray-900">Compare your performance and discover optimization opportunities.</strong>
              </p>

              {/* Trust indicators */}
              <div
                className={cn(
                  "flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 transition-all duration-700",
                  heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: heroInView ? "300ms" : "0ms" }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Based on real campaign data</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Industry-specific insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Actionable recommendations</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Chart Section */}
        <section
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
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
                Explore <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Live Benchmarks</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select your industry and metric to see how your campaigns compare to industry standards.
              </p>
            </div>

            {/* Chart Controls */}
            <div
              className={cn(
                "flex flex-col md:flex-row items-center justify-center gap-4 mb-8 transition-all duration-700",
                chartInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: chartInView ? "150ms" : "0ms" }}
            >
              <div className="w-full md:w-64">
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Select Metric
                </Label>
                <Select value={selectedMetric} onValueChange={setSelectedMetric}>
                  <SelectTrigger className="h-11 rounded-lg border-gray-200 bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {METRICS.map((metric) => (
                      <SelectItem key={metric.id} value={metric.id}>
                        {metric.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="w-full md:w-64">
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Select Industry
                </Label>
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger className="h-11 rounded-lg border-gray-200 bg-white">
                    <SelectValue />
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
            </div>

            {/* Chart Component */}
            <div
              className={cn(
                "transition-all duration-700",
                chartInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: chartInView ? "300ms" : "0ms" }}
            >
              <BenchmarkChart
                metric={selectedMetric}
                industry={selectedIndustry}
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
                },
                {
                  icon: TrendingUp,
                  title: "Actionable Insights",
                  description: "Get specific recommendations on how to improve your campaign performance.",
                },
                {
                  icon: Download,
                  title: "Personalized Report",
                  description: "Receive a custom PDF with benchmarks tailored to your specific industry.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                    <item.icon className="h-6 w-6 text-blue-600" />
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
                <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
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
                        className="w-full h-12 rounded-lg bg-[#3875F6] hover:bg-[#2c5cc5] text-white font-medium tracking-tight transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 group"
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
                <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-6">
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
                    className="h-12 px-8 rounded-lg bg-[#3875F6] hover:bg-[#2c5cc5] text-white font-medium tracking-tight group"
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