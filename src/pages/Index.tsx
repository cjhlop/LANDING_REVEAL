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
import { MetricsBand } from "@/components/metrics";
import { PricingSection } from "@/components/pricing-main";
import IntegrationsSection from "@/components/integrations/IntegrationsSection";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoTicker />
        
        <WebIDSection />
        
        {/* Metrics Band - Credibility Section moved between WebID and Audience Explorer */}
        <MetricsBand />
        
        <AudienceExplorerSection />
        <LinkedInAdsOptimization />
        <RevenueAttributionSection />
        <AICopilotSection />
        
        <TestimonialSection />

        {/* Platform Integrations Section */}
        <IntegrationsSection />

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