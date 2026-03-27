"use client";

import * as React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionIntroSection from "@/components/SolutionIntroSection";
import AudienceExplorerSection from "@/components/AudienceExplorerSection";
import WebIDSection from "@/components/WebIDSection";
import RadarSection from "@/components/RadarSection";
import RevenueAttributionSection from "@/components/RevenueAttributionSection";
import MetricsBand from "@/components/metrics/MetricsBand";
import AICopilotSection from "@/components/AICopilotSection";
import IntegrationsSection from "@/components/integrations/IntegrationsSection";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import PricingSection from "@/components/pricing-main/PricingSection";
import { Footer } from "@/components/footer";

const HomeNew = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <WebIDSection />
        <RadarSection />
        <AudienceExplorerSection />
        <RevenueAttributionSection />
        <MetricsBand />
        <TestimonialSection />
        <SolutionIntroSection />
        <AICopilotSection />
        <IntegrationsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomeNew;