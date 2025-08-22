import { Hero } from "@/components/Hero";
import { Logos } from "@/components/Logos";
import { Features } from "@/components/Features"; // Import the new Features component
import { Pricing } from "@/components/Pricing";

const Index = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Features /> {/* Add the Features component here */}
      <Pricing />
    </>
  );
};

export default Index;