"use client";

import * as React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import ProblemSection from "@/components/ProblemSection";
import ControlSpendSection from "@/components/ControlSpendSection";
import WebIDSection from "@/components/WebIDSection";
import SolutionIntroSection from "@/components/SolutionIntroSection";
import AudienceExplorerSection from "@/components/AudienceExplorerSection";
import RevenueAttributionSection from "@/components/RevenueAttributionSection";
import MetricsBand from "@/components/metrics/MetricsBand";
import AICopilotSection from "@/components/AICopilotSection";
import IntegrationsSection from "@/components/integrations/IntegrationsSection";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import PricingSection from "@/components/pricing-main/PricingSection";
import FinalCTASection from "@/components/FinalCTASection";
import { Footer } from "@/components/footer";
import EventBanner from "@/components/EventBanner";

const HomeNew = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased group/body has-banner">
      <style>{`
        :root {
          --banner-height: 116px;
        }
        @media (min-width: 640px) {
          :root {
            --banner-height: 65px;
          }
        }
      `}</style>
      <EventBanner />
      <Navbar />
      <main>
        <Hero />
        <LogoTicker />
        <ProblemSection />
        <ControlSpendSection />
        <WebIDSection />
        <AudienceExplorerSection />
        <RevenueAttributionSection />
        <MetricsBand />
        <TestimonialSection />
        <SolutionIntroSection />
        <AICopilotSection />
        <IntegrationsSection />
        <PricingSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomeNew;