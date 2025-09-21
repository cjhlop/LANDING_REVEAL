import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { TestimonialSection } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta";
import PricingSection from "@/components/pricing-main/PricingSection";
import Hero from "@/components/Hero";
import { Features } from "@/components/ui/features-7";

const FeaturesSection = React.lazy(
  () => import("@/components/features/FeaturesSection"),
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
        <TestimonialSection />
        <Suspense fallback={<Loader />}>
          <BentoGrid />
        </Suspense>

        {/* New homepage pricing section */}
        <PricingSection />

        <CTASection />
      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Index;