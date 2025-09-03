import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import { HeroV2 } from "@/components/HeroV2";
import { fallbackCustomerLogos } from "@/data/customerLogos";
import Loader from "@/components/Loader";
import { TestimonialSection } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta";
import PricingSection from "@/components/pricing-main/PricingSection";

const MeetOurCustomers = React.lazy(
  () => import("@/components/customers/MeetOurCustomers"),
);
const FeaturesSection = React.lazy(
  () => import("@/components/features/FeaturesSection"),
);
const BentoGrid = React.lazy(() => import("@/components/bento/BentoGrid"));

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroV2 />
        <Suspense fallback={<Loader />}>
          <MeetOurCustomers logos={fallbackCustomerLogos} className="bg-gray-50" />
        </Suspense>
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