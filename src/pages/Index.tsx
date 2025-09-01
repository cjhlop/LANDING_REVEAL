import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import { HeroV2 } from "@/components/HeroV2";
import { fallbackCustomerLogos } from "@/data/customerLogos";
import Loader from "@/components/Loader";

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
      <HeroV2 />
      <Suspense fallback={<Loader />}>
        <MeetOurCustomers logos={fallbackCustomerLogos} className="bg-gray-50" />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <FeaturesSection />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <BentoGrid />
      </Suspense>
    </>
  );
};

export default Index;