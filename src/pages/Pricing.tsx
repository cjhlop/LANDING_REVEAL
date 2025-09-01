import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { PricingComparisonTable } from "@/components/pricing";
import { Footer } from "@/components/footer";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <main>
        <PricingComparisonTable />
      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Pricing;