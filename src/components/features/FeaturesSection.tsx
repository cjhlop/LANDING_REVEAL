import * as React from "react";
import FeatureItem from "./FeatureItem";
import FeatureImagePlaceholder from "./FeatureImagePlaceholder";
import { cn } from "@/lib/utils";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import FeatureImage from "./FeatureImage";

export type FeaturesSectionProps = {
  className?: string;
};

const TITLE = "A Paradigm Shift in Productivity Tools";
const SUBTITLE =
  "Maintain a detailed and easily accessible record of all team interactions with our comprehensive conversation history.";

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
      {/* Header */}
      <div className="features-header" ref={headerRef}>
        {/* Eyebrow */}
        <p
          id="features-eyebrow"
          className={cn(
            "features-eyebrow reveal reveal-fade-up",
            headerInView ? "is-inview" : "",
          )}
        >
          FEATURES
        </p>

        {/* Visible animated title */}
        {headerInView ? (
          <AnimatedTitle text={TITLE} className="features-animated-title" />
        ) : (
          <h2 className="features-heading opacity-0">{TITLE}</h2>
        )}
        {/* Hidden heading for aria-labelledby association */}
        <h2 id="features-heading" className="sr-only">
          {TITLE}
        </h2>

        <p
          className={cn(
            "features-subtitle transition-opacity duration-700",
            headerInView ? "opacity-100" : "opacity-0",
          )}
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
          imageSlot={
            <FeatureImage
              src="/screenshot-1.png"
              alt="Share Smart, Stay Secure preview"
              bleed
              bleedSide="left"
            />
          }
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