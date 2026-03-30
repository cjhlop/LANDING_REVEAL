"use client";

import React from 'react';
import HeroSection from '../components/HeroSection';
import LogoTicker from '../components/LogoTicker';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import WebIDSection from '../components/WebIDSection';
import ControlSpendSection from '../components/ControlSpendSection';
import AICopilotSection from '../components/AICopilotSection';
import TestimonialSection from '../components/TestimonialSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const HomeNew = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white font-sans selection:bg-[#3875F6]/30">
      <HeroSection />
      <LogoTicker />
      <ProblemSection />
      <SolutionSection />
      <WebIDSection />
      <ControlSpendSection />
      <AICopilotSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomeNew;