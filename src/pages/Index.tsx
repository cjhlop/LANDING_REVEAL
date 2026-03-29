"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import ControlSpendSection from '../components/ControlSpendSection';
import WebIDSection from '../components/WebIDSection';
import AudienceExplorerSection from '../components/AudienceExplorerSection';
import RevenueAttributionSection from '../components/RevenueAttributionSection';
import MetricsBand from '../components/metrics/MetricsBand';
import TestimonialSection from '../components/testimonials/TestimonialSection';
import FAQSection from '../components/faq/FAQSection';
import { Footer } from '../components/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemSection />
      <ControlSpendSection />
      <WebIDSection />
      <AudienceExplorerSection />
      <RevenueAttributionSection />
      <MetricsBand />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;