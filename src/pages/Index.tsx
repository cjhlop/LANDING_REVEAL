import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import WebIDSection from "@/components/WebIDSection";
import AudienceExplorerSection from "@/components/AudienceExplorerSection";
import LinkedInAdsOptimization from "@/components/LinkedInAdsOptimization";
import RevenueAttributionSection from "@/components/RevenueAttributionSection";
import AICopilotSection from "@/components/AICopilotSection";
import { TestimonialSection } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta";
import { DifferenceSection } from "@/components/difference";
import { AudienceJourneySection } from "@/components/journey";
import { MetricsBand } from "@/components/metrics";
import BenchmarkReportCTA from "@/components/benchmark/BenchmarkReportCTA";
import { PricingSection } from "@/components/pricing-main";
import IntegrationsSection from "@/components/integrations/IntegrationsSection";
import Casestudies from "@/components/ui/case-studies";

const FeaturesSection = React.lazy(
  () => import("@/components/features/FeaturesSection"),
);
const BentoGrid = React.lazy(() => import("@/components/bento/BentoGrid"));

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoTicker />
        <WebIDSection />
        <AudienceExplorerSection />
        <LinkedInAdsOptimization />
        <RevenueAttributionSection />
        <AICopilotSection />
        <Suspense fallback={<Loader />}>
          <FeaturesSection />
        </Suspense>
        
        {/* Benchmark Report CTA - strategically placed mid-page */}
        <BenchmarkReportCTA />
        
        <TestimonialSection />
        <Suspense fallback={<Loader />}>
          <BentoGrid />
        </Suspense>

        {/* Audience Journey Section */}
        <AudienceJourneySection />

        {/* Metrics Band - Credibility Section */}
        <MetricsBand />

        {/* Platform Integrations Section */}
        <IntegrationsSection />

        {/* Case Studies Section */}
        <Casestudies />

        {/* DemandSense Difference section */}
        <DifferenceSection />

        {/* Pricing Section */}
        <PricingSection />

        <CTASection />
      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Index;