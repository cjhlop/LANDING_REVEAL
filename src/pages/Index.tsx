"use client";

import React from 'react';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import WebIDSection from '@/components/WebIDSection';
import MetricsBand from '@/components/metrics/MetricsBand';
import AudienceExplorerSection from '@/components/AudienceExplorerSection';
import RevenueAttributionSection from '@/components/RevenueAttributionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemSection />
      <WebIDSection />
      <MetricsBand />
      <AudienceExplorerSection />
      <RevenueAttributionSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;