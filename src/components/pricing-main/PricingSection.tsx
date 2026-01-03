import * as React from "react";
import { cn } from "@/lib/utils";
import { DollarSign } from "lucide-react";
import PricingComparisonTable from "./PricingComparisonTable";
import CustomPlanCard from "./CustomPlanCard";
import ProPlanModal from "./ProPlanModal";
import SectionBadge from "../SectionBadge";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const customPlan = {
  planName: "Agencies & Custom",
  subtitle: "For agencies and users with advanced needs.",
  features: [
    "Manage multiple LinkedIn accounts",
    "Flexible visitor ID & Explorer credit packs",
    "Dedicated onboarding & success support",
    "White-label client reporting (coming soon)",
  ],
  ctaText: "Contact Sales",
};

const PricingSection: React.FC = () => {
  const [isProModalOpen, setIsProModalOpen] = React.useState(false);
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="pricing3-section" role="region" aria-labelledby="pricing3-title">
      <div className="pricing3-container">
        <header ref={headerRef} className="text-center mb-20">
          <div className={cn(
            "flex justify-center transition-all duration-700",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={DollarSign} text="Pricing" />
          </div>
          
          <h2 id="pricing3-title" className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-8 mb-6 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Plans and <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Pricing</span>
          </h2>
          
          <p className={cn(
            "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-opacity duration-700 delay-200",
            headerInView ? "opacity-100" : "opacity-0"
          )}>
            Flexible plans and solutions for business of all sizes.
          </p>
        </header>
        
        <PricingComparisonTable onPlusClick={() => setIsProModalOpen(true)} />
        
        <div className="mt-16">
          <CustomPlanCard {...customPlan} />
        </div>
      </div>
      
      <ProPlanModal isOpen={isProModalOpen} onOpenChange={setIsProModalOpen} />
    </section>
  );
};

export default React.memo(PricingSection);