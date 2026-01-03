import * as React from "react";
import FeatureItem from "./FeatureItem";
import FeatureImage from "./FeatureImage";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Zap } from "lucide-react";
import SectionBadge from "../SectionBadge";

export type FeaturesSectionProps = {
  className?: string;
};

const TITLE = "Meet The Ultimate LinkedIn Centric Business Growth Platform";

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ className }) => {
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: "0px 0px -20% 0px",
  });

  return (
    <section
      className={cn("features-section", className)}
      role="region"
      aria-labelledby="features-heading"
    >
      <div className="features-header" ref={headerRef}>
        <div className="text-center mb-16">
          <div className={cn(
            "flex justify-center transition-all duration-700",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={Zap} text="The DemandSense Advantage" />
          </div>
          
          {headerInView ? (
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-8 mb-6 tracking-tight leading-[1.1]">
              Meet The Ultimate <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">LinkedIn Centric</span> Business Growth Platform
            </h2>
          ) : (
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-8 mb-6 tracking-tight leading-[1.1] opacity-0">
              Meet The Ultimate LinkedIn Centric Business Growth Platform
            </h2>
          )}
          
          <h2 id="features-heading" className="sr-only">
            {TITLE}
          </h2>

          <p className={cn(
            "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-opacity duration-700 delay-200",
            headerInView ? "opacity-100" : "opacity-0"
          )}>
            Smart budget controls and optimal ad frequency powered by AI-driven insights for maximum LinkedIn performance.
          </p>
        </div>
      </div>

      <div className="features-rows">
        <FeatureItem
          label="demand"
          title="Sense Demand"
          description="Maintain a detailed and easily accessible record of all team interactions with our comprehensive conversation history."
          imageSlot={<FeatureImage src="/media/feature-share-smart.png" alt="DemandSense dashboard" position="left" />}
          imagePosition="left"
          showIcon={false}
        />
        <FeatureItem
          label="audiences"
          title="Segment"
          description="Build strategic audiences based on real engagement data and firmographic signals."
          imageSlot={<FeatureImage src="/media/feature-share-smart.png" alt="Streamlined workspace" position="right" />}
          imagePosition="right"
          showIcon={false}
        />
      </div>
    </section>
  );
};

export default React.memo(FeaturesSection);