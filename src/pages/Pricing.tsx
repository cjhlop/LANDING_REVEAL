import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import PricingSection from "@/components/pricing-main/PricingSection";
import { Footer } from "@/components/footer";
import { AudienceJourneySection } from "@/components/journey";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <main>
        <PricingSection />
        {/* Audience Journey Section moved here to provide context for pricing tiers */}
        <AudienceJourneySection />
      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Pricing;