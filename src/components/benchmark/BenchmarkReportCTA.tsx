import * as React from "react";
import { cn } from "@/lib/utils";
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
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { BarChart3, CheckCircle2, Download } from "lucide-react";
import { showSuccess } from "@/utils/toast";

export type BenchmarkReportCTAProps = {
  className?: string;
};

const INDUSTRIES = [
  "All industries (AVG)",
  "SaaS",
  "Finance",
  "IT Services",
  "Professional Services",
  "B2B Brands",
];

const BenchmarkReportCTA: React.FC<BenchmarkReportCTAProps> = ({ className }) => {
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: "0px 0px -20% 0px",
  });

  const [formRef, formInView] = useInViewOnce<HTMLFormElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
  });

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    industry: "",
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.industry) {
      showSuccess("Please fill in all fields");
      return;
    }

    setIsSubmitted(true);
    showSuccess("Thank you! Your report is on the way.");

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", industry: "" });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      className={cn(
        "w-full bg-white px-8 md:px-[112px] py-16 md:py-24",
        className
      )}
      role="region"
      aria-labelledby="benchmark-report-heading"
    >
      <div className="max-w-[1216px] mx-auto">
        <div
          className="cta-card w-full rounded-2xl px-5 md:px-12 py-12 md:py-16 relative overflow-hidden"
          role="group"
          aria-label="Benchmark report download"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

          <div
            ref={headerRef}
            className="text-center mb-10 relative z-10"
          >
            <div
              className={cn(
                "inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm transition-all duration-700",
                headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <BarChart3 className="h-4 w-4" />
              Free Benchmark Report
            </div>

            <h2
              id="benchmark-report-heading"
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight transition-all duration-700",
                headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              Get Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                LinkedIn Ads Benchmark Report
              </span>
            </h2>

            <p
              className={cn(
                "text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-700",
                headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: headerInView ? "150ms" : "0ms" }}
            >
              See how your performance compares to your industry. Enter your details and get your free benchmark report instantly.
            </p>
          </div>

          {!isSubmitted ? (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={cn(
                "max-w-4xl mx-auto relative z-10 transition-all duration-700",
                formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: formInView ? "300ms" : "0ms" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="benchmark-name" className="text-sm font-medium text-gray-700">
                    Name
                  </Label>
                  <Input
                    id="benchmark-name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="h-12 rounded-lg border-gray-300 bg-white focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="benchmark-email" className="text-sm font-medium text-gray-700">
                    Work Email
                  </Label>
                  <Input
                    id="benchmark-email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-12 rounded-lg border-gray-300 bg-white focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="benchmark-industry" className="text-sm font-medium text-gray-700">
                    Niche / Industry
                  </Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) => handleInputChange("industry", value)}
                    required
                  >
                    <SelectTrigger
                      id="benchmark-industry"
                      className="h-12 rounded-lg border-gray-300 bg-white focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
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
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span>We'll send your personalized benchmark report straight to your inbox.</span>
                </p>

                <Button
                  type="submit"
                  size="lg"
                  className="h-12 px-8 rounded-lg bg-[#3875F6] hover:bg-[#2c5cc5] text-white font-medium tracking-tight transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 group w-full md:w-auto flex-shrink-0"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                  Get My Report
                </Button>
              </div>
            </form>
          ) : (
            <div
              className="max-w-2xl mx-auto text-center py-12 relative z-10"
              role="status"
              aria-live="polite"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Thank You!
              </h3>
              <p className="text-lg text-gray-600">
                Your personalized benchmark report is on the way to your inbox.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default React.memo(BenchmarkReportCTA);