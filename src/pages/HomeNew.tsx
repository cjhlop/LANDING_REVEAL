"use client";

import React from 'react';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import SolutionIntroSection from '../components/SolutionIntroSection';
import AICopilotSection from '../components/AICopilotSection';
import RevenueAttributionSection from '../components/RevenueAttributionSection';
import AudienceExplorerSection from '../components/AudienceExplorerSection';
import WebIDSection from '../components/WebIDSection';
import ControlSpendSection from '../components/ControlSpendSection';
import MetricsBand from '../components/metrics/MetricsBand';
import TestimonialSection from '../components/testimonials/TestimonialSection';
import IntegrationsSection from '../components/integrations/IntegrationsSection';
import PricingSection from '../components/pricing-main/PricingSection';
import FinalCTASection from '../components/FinalCTASection';
import { Footer } from '../components/footer';

const HomeNew = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemSection />
      <SolutionIntroSection />
      <AICopilotSection />
      <RevenueAttributionSection />
      <AudienceExplorerSection />
      <WebIDSection />
      <ControlSpendSection />
      <MetricsBand />
      <TestimonialSection />
      <IntegrationsSection />
      <PricingSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default HomeNew;