import * as React from "react";
import FeatureItem from "./FeatureItem";
import FeatureImage from "./FeatureImage";
import { cn } from "@/lib/utils";
import { AnimatedTitle } from "@/components/AnimatedTitle";

export type FeaturesSectionProps = {
  className?: string;
};

const TITLE = "A Paradigm Shift in Productivity Tools";
const SUBTITLE =
  "Maintain a detailed and easily accessible record of all team interactions with our comprehensive conversation history.";

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ className }) => {
  return (
    <section
      className={cn("features-section", className)}
      role="region"
      aria-labelledby="features-heading"
    >
      {/* Header */}
      <div className="features-header">
        {/* Eyebrow */}
        <p id="features-eyebrow" className="features-eyebrow">
          FEATURES
        </p>

        {/* Visible animated title */}
        <AnimatedTitle text={TITLE} className="features-animated-title" />
        {/* Hidden heading for aria-labelledby association */}
        <h2 id="features-heading" className="sr-only">
          {TITLE}
        </h2>

        <p
          className="features-subtitle"
          aria-describedby="features-eyebrow"
        >
          {SUBTITLE}
        </p>
      </div>

      {/* Content */}
      <div className="features-rows">
        <FeatureItem
          label="share"
          title="Share Smart, Stay Secure"
          description="Instantly share important documents with complete peace of mind. Our smart share feature ensures your files are always secure and only seen by intended eyes."
          imageSlot={<FeatureImage src="/media/feature-share-smart.png" alt="DemandSense dashboard showing campaign scheduling" position="left" />}
          imagePosition="left"
        />

        <FeatureItem
          label="workspace"
          title="Your Workspace, Streamlined"
          description="Easily organize, manage, and secure all your documents effortlessly. Synth’s intelligent document management system adapts seamlessly to your workflow and needs."
          imageSlot={<FeatureImage src="/media/feature-share-smart.png" alt="Streamlined workspace illustration" position="right" />}
          imagePosition="right"
        />

        <FeatureItem
          label="privacy"
          title="Privacy, Our Priority"
          description="Your ideas are your own—always protected. Synth safeguards your private discussions with advanced, industry-leading security protocols and end-to-end encryption."
          imageSlot={<FeatureImage src="/media/feature-share-smart.png" alt="Illustration for data privacy and security" position="left" />}
          imagePosition="left"
        />
      </div>
    </section>
  );
};

export default React.memo(FeaturesSection);