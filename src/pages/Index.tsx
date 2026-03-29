"use client";

import React from 'react';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import WebIdTechnology from '../components/WebIdTechnology';
import MetricsBand from '../components/metrics/MetricsBand';
import AudienceExplorerSection from '../components/AudienceExplorerSection';
import RevenueAttributionSection from '../components/RevenueAttributionSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <WebIdTechnology />
        <MetricsBand />
        <AudienceExplorerSection />
        <RevenueAttributionSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;