import React, { Suspense, useState } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import { BarChart3, TrendingUp, Download, CheckCircle2, ArrowRight, Circle, Target, Zap, DollarSign, AlertCircle } from "lucide-react";
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
  "All industries (AVG)",
  "SaaS",
  "Finance",
  "IT Services",
  "Professional Services",
  "B2B Brands",
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
    showSuccess("Thank you! Your report is on the way.");
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
        {/* Hero Section */}
        <section className="relative w-full bg-white px-8 md:px-[112px] pt-32 pb-24 overflow-hidden">
          <DynamicShadow variant="hero" />
          
          <div ref={heroRef} className="max-w-[1216px] mx-auto relative z-10">
            {/* Floating Stats Cards */}
            <div className="absolute top-4 left-0 hidden lg:block">
              <div className={cn("bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-blue-100 transition-all duration-1000", heroInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8")} style={{ transitionDelay: "600ms" }}>
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

            <div className="absolute top-4 right-0 hidden lg:block">
              <div className={cn("bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-orange-100 transition-all duration-1000", heroInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8")} style={{ transitionDelay: "800ms" }}>
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

            <div className="text-center mb-12 pt-8">
              <div className={cn("inline-flex items-center bg-gray-50 rounded-full p-1 mb-12 shadow-md transition-all duration-700", heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} role="group">
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-sm">
                  <Circle className="h-3 w-3 text-green-500 fill-green-500 animate-pulse-soft" aria-hidden="true" />
                  <span className="text-sm font-normal text-gray-900 tracking-tight">New</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1">
                  <span className="text-sm font-normal text-gray-900 tracking-tight">Free Benchmark Report</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gray-600" aria-hidden="true" />
                </div>
              </div>

              <h1 className={cn("text-5xl md:text-6xl font-semibold text-gray-900 mb-8 max-w-5xl mx-auto leading-tight tracking-tight transition-all duration-700", heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
                Discover Where Your
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">LinkedIn Ads Stand</span>
              </h1>

              <p className={cn("text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 transition-all duration-700", heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")} style={{ transitionDelay: heroInView ? "100ms" : "0ms" }}>
                Compare your LinkedIn advertising performance against industry benchmarks. Get instant insights into your CPC, CPL, CTR, CPM, and CVR metrics to identify opportunities for optimization.
              </p>

              <div className={cn("flex justify-center mb-6 transition-all duration-700", heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")} style={{ transitionDelay: heroInView ? "200ms" : "0ms" }}>
                <ButtonGroup 
                  primaryLabel="Get Your Report" 
                  secondaryLabel="View Live Data"
                  onPrimaryClick={handleGetReport}
                  onSecondaryClick={handleViewData}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Chart Section */}
        <section id="live-benchmarks" ref={chartRef} className="w-full bg-gradient-to-b from-white to-gray-50 px-8 md:px-[112px] py-16">
          <div className="max-w-[1216px] mx-auto">
            <div className={cn("text-center mb-12 transition-all duration-700", chartInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                <BarChart3 className="h-4 w-4" />
                Live Benchmarks
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
                Explore <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Real-Time Data</span>
              </h2>
            </div>
            <div className={cn("transition-all duration-700", chartInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")} style={{ transitionDelay: chartInView ? "300ms" : "0ms" }}>
              <BenchmarkChart metric="cpc" industry="SaaS" />
            </div>
          </div>
        </section>

        {/* Educational Micro-Section */}
        <section className="w-full bg-white px-8 md:px-[112px] py-24 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                  Why LinkedIn Ads Benchmarks Are Misleading
                </h2>
              </div>
              
              <ul className="space-y-6 mb-8">
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Most benchmark reports mix data from very different industries, giving you an inaccurate baseline.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                  <p className="text-lg text-gray-700 leading-relaxed">
                    CPC alone says nothing about pipeline quality. A low cost-per-click is useless if it doesn't lead to a qualified deal.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Without attribution, you cannot know which campaigns actually influence revenue and which are just generating noise.
                  </p>
                </li>
              </ul>

              <div className="pt-6 border-t border-slate-200">
                <p className="text-xl font-bold text-gray-900">
                  That’s why DemandSense focuses on revenue attribution — not vanity metrics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="download-form" ref={formRef} className="w-full bg-white px-8 md:px-[112px] pb-24">
          <div className="max-w-[1216px] mx-auto">
            <div className="cta-card w-full rounded-2xl px-5 md:px-12 py-12 md:py-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className={cn("text-center mb-10 relative z-10 transition-all duration-700", formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
                <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm">
                  <BarChart3 className="h-4 w-4" />
                  Free Benchmark Report
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
                  Get Your{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    LinkedIn Ads Benchmark Report
                  </span>
                </h2>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className={cn("max-w-4xl mx-auto relative z-10 transition-all duration-700", formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")} style={{ transitionDelay: formInView ? "300ms" : "0ms" }}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="benchmark-name" className="text-sm font-medium text-gray-700">Name</Label>
                      <Input id="benchmark-name" type="text" placeholder="John Doe" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} className="h-12 rounded-lg border-gray-300 bg-white" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="benchmark-email" className="text-sm font-medium text-gray-700">Work Email</Label>
                      <Input id="benchmark-email" type="email" placeholder="you@company.com" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} className="h-12 rounded-lg border-gray-300 bg-white" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="benchmark-industry" className="text-sm font-medium text-gray-700">Niche / Industry</Label>
                      <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)} required>
                        <SelectTrigger id="benchmark-industry" className="h-12 rounded-lg border-gray-300 bg-white">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {INDUSTRIES.map((industry) => (
                            <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>We'll send your personalized report straight to your inbox.</span>
                    </p>
                    <Button type="submit" size="lg" className="h-12 px-8 rounded-lg bg-[#3875F6] hover:bg-[#2c5cc5] text-white font-medium group w-full md:w-auto">
                      <Download className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                      Get My Report
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="max-w-2xl mx-auto text-center py-12 relative z-10" role="status">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Thank You!</h3>
                  <p className="text-lg text-gray-600">Your personalized benchmark report is on the way to your inbox.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Platform CTA Section - Redesigned for Attribution Focus */}
        <section className="w-full bg-slate-50 px-8 md:px-[112px] py-24 border-t border-gray-200">
          <div className="max-w-[1216px] mx-auto">
            <div className="bg-white rounded-[32px] p-8 md:p-16 text-center shadow-xl border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="max-w-3xl mx-auto relative z-10">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-8 border border-blue-100">
                  <Zap className="h-4 w-4" />
                  Next Step
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                  Benchmarking shows you where you stand. <br />
                  <span className="text-blue-600">Attribution shows you what actually works.</span>
                </h2>

                <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                  Stop guessing which campaigns drive growth. Connect your LinkedIn activity directly to CRM deals to see the full journey from first impression to closed-won revenue.
                </p>

                <div className="flex flex-col items-center gap-10">
                  {/* Primary Action */}
                  <div className="flex flex-col items-center gap-4 w-full max-w-md">
                    <Button
                      size="hero"
                      className="w-full h-16 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/25 group"
                      onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
                    >
                      See Your LinkedIn Revenue Attribution
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Connect your LinkedIn Ads data and discover which campaigns actually influence revenue — not just clicks or leads.
                    </p>
                  </div>

                  {/* Secondary Action */}
                  <div className="flex flex-col items-center gap-3 w-full max-w-md">
                    <Button
                      variant="ghost"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-bold text-base"
                    >
                      Explore a Real Attribution Example
                    </Button>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                      See how LinkedIn campaigns influenced pipeline in a real B2B account.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-8 text-sm text-gray-400 mt-16 pt-8 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
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