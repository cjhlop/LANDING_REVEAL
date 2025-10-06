import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { TestimonialSection } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta";
import { DifferenceSection } from "@/components/difference";
import { AudienceJourneySection } from "@/components/journey";
import { MetricsBand } from "@/components/metrics";
import PricingSection from "@/components/pricing-main/PricingSection";
import Hero from "@/components/Hero";
import { Features } from "@/components/ui/features-7";

const FeaturesSection = React.lazy(
  () => import("@/components/features/FeaturesSection"),
);
const FeaturesSection2 = React.lazy(
  () => import("@/components/features/FeaturesSection2"),
);
const BentoGrid = React.lazy(() => import("@/components/bento/BentoGrid"));

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Suspense fallback={<Loader />}>
          <FeaturesSection />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <FeaturesSection2 />
        </Suspense>
        <TestimonialSection />
        <Suspense fallback={<Loader />}>
          <BentoGrid />
        </Suspense>

        {/* Audience Journey Section */}
        <AudienceJourneySection />

        {/* Metrics Band - Credibility Section */}
        <MetricsBand />

        {/* Homepage pricing section */}
        <PricingSection />

        {/* DemandSense Difference section */}
        <DifferenceSection />

        <CTASection />
      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Index;