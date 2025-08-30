import * as React from "react";
import FeatureItem from "./FeatureItem";
import FeatureImagePlaceholder from "./FeatureImagePlaceholder";
import { cn } from "@/lib/utils";

export type FeaturesSectionProps = {
  className?: string;
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ className }) => {
  return (
    <section
      className={cn("features-section", className)}
      role="region"
      aria-labelledby="features-heading"
    >
      {/* Header */}
      <div className="features-header">
        <p className="features-eyebrow" id="features-eyebrow">
          Features
        </p>
        <h2 id="features-heading" className="features-heading">
          A Paradigm Shift in Productivity Tools
        </h2>
        <p className="features-subtitle" aria-describedby="features-eyebrow">
          Maintain a detailed and easily accessible record of all team interactions with our comprehensive
          conversation history.
        </p>
      </div>

      {/* Content */}
      <div className="features-rows">
        <FeatureItem
          label="share"
          title="Share Smart, Stay Secure"
          description="Instantly share important documents with complete peace of mind. Our smart share feature ensures your files are always secure and only seen by intended eyes."
          imageSlot={<FeatureImagePlaceholder />}
          imagePosition="left"
          className="mt-6"
        />

        <FeatureItem
          label="workspace"
          title="Your Workspace, Streamlined"
          description="Easily organize, manage, and secure all your documents effortlessly. Synth’s intelligent document management system adapts seamlessly to your workflow and needs."
          imageSlot={<FeatureImagePlaceholder />}
          imagePosition="right"
          className="mt-28"
        />

        <FeatureItem
          label="privacy"
          title="Privacy, Our Priority"
          description="Your ideas are your own—always protected. Synth safeguards your private discussions with advanced, industry-leading security protocols and end-to-end encryption."
          imageSlot={<FeatureImagePlaceholder />}
          imagePosition="left"
          className="mt-28"
        />
      </div>
    </section>
  );
};

export default React.memo(FeaturesSection);