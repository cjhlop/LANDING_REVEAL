"use client";

import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import FeaturesSection from "@/components/FeaturesSection";
import WebIDSection from "@/components/WebIDSection";
import LinkedInAdsSection from "@/components/LinkedInAdsSection";
import AICopilotSection from "@/components/AICopilotSection";
import RevenueAttributionSection from "@/components/RevenueAttributionSection";
import IntegrationsSection from "@/components/integrations/IntegrationsSection";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import PricingSection from "@/components/PricingSection";
import FinalCTASection from "@/components/FinalCTASection";
import { Footer } from "@/components/footer";
import Loader from "@/components/Loader";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DemandSense | The Intelligence Layer for B2B LinkedIn Ads</title>
        <meta name="description" content="Identify anonymous website visitors, optimize LinkedIn ad spend, and prove revenue impact with DemandSense." />
      </Helmet>

      <Navbar />

      <main className="bg-white">
        <Hero />
        <LogoTicker variant="dark" />
        <FeaturesSection />
        <WebIDSection />
        <LinkedInAdsSection />
        <AICopilotSection />
        <RevenueAttributionSection />
        <IntegrationsSection />
        <TestimonialSection className="bg-[#F5F9FF] py-24" />
        <PricingSection />
        <FinalCTASection />
      </main>

      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Index;