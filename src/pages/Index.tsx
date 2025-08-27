import Navbar from "@/components/Navbar";
import { HeroV2 } from "@/components/HeroV2";
import { MeetOurCustomers } from "@/components/customers";
import { fallbackCustomerLogos } from "@/data/customerLogos";
import Showcase from "@/components/Showcase";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroV2 />
      <Showcase />
      <MeetOurCustomers 
        logos={fallbackCustomerLogos}
        className="bg-gray-50"
      />
    </>
  );
};

export default Index;