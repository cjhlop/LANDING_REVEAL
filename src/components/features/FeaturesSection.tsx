import * as React from "react";
import FeatureItem from "./FeatureItem";
import FeatureImage from "./FeatureImage";
import { cn } from "@/lib/utils";

export type FeaturesSectionProps = {
  className?: string;
};

const TITLE = "Meet The Ultimate LinkedIn Centric Business Growth Platform";

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ className }) => {
  return (
    <section
      className={cn("features-section", className)}
      role="region"
      aria-labelledby="features-heading"
    >
      <div className="features-header">
        <div className="space-y-4">
          <p className="features-eyebrow">The DemandSense Advantage</p>
          <h2 id="features-heading" className="features-heading">
            {TITLE}
          </h2>
          <p className="features-subtitle">
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
        />
        <FeatureItem
          label="audiences"
          title="Segment"
          description="Build strategic audiences based on real engagement data and firmographic signals."
          imageSlot={<FeatureImage src="/media/feature-share-smart.png" alt="Streamlined workspace" position="right" />}
          imagePosition="right"
        />
        <FeatureItem
          label="optimization"
          title="Optimize"
          description="Automate your LinkedIn spend with advanced scheduling and frequency controls that save you thousands."
          imageSlot={<FeatureImage src="/media/feature-share-smart.png" alt="Optimization tools" position="left" />}
          imagePosition="left"
        />
      </div>
    </section>
  );
};

export default React.memo(FeaturesSection);