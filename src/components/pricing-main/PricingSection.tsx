"use client";

import { useState } from "react";
import PricingComparisonTable from "./PricingComparisonTable";
import ProWaitlistModal from "./ProWaitlistModal";

const PricingSection = () => {
  const [yearly, setYearly] = useState(false);
  const [isProModalOpen, setIsProModalOpen] = useState(false);

  const handleProClick = () => {
    setIsProModalOpen(true);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <PricingComparisonTable onProClick={handleProClick} />
      </div>

      <ProWaitlistModal 
        isOpen={isProModalOpen} 
        onClose={() => setIsProModalOpen(false)} 
      />
    </section>
  );
};

export default PricingSection;