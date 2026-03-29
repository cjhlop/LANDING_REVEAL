"use client";

import React from 'react';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import WebIDSection from '../components/WebIDSection';
import MetricsBand from '../components/metrics/MetricsBand';
import AudienceExplorerSection from '../components/AudienceExplorerSection';
import RevenueAttributionSection from '../components/RevenueAttributionSection';
import TestimonialSection from '../components/testimonials/TestimonialSection';
import FAQSection from '../components/faq/FAQSection';
import CTASection from '../components/cta/CTASection';
import { Footer } from '../components/footer';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <WebIDSection />
        <MetricsBand />
        <AudienceExplorerSection />
        <RevenueAttributionSection />
        <TestimonialSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;