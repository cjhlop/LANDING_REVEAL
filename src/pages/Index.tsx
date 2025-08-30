import Navbar from "@/components/Navbar";
import { HeroV2 } from "@/components/HeroV2";
import { MeetOurCustomers } from "@/components/customers";
import { fallbackCustomerLogos } from "@/data/customerLogos";
import { FeaturesSection } from "@/components/features";
import BentoGrid from "@/components/bento/BentoGrid";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroV2 />
      <MeetOurCustomers 
        logos={fallbackCustomerLogos}
        className="bg-gray-50"
      />
      <FeaturesSection />
      <BentoGrid />
    </>
  );
};

export default Index;