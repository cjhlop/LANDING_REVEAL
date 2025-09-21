import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import PricingSection from "@/components/pricing-main/PricingSection";
import { Footer } from "@/components/footer";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <main>
        <PricingSection />
      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Pricing;