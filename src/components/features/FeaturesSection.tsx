import * as React from "react";
import FeatureItem from "./FeatureItem";
import FeatureImagePlaceholder from "./FeatureImagePlaceholder";
import FeatureImage from "./FeatureImage";
import { cn } from "@/lib/utils";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { CheckCircle2 } from "lucide-react";
import FeatureWorkflow from "./FeatureWorkflow";

export type FeaturesSectionProps = {
  className?: string;
};

const TITLE = "Meet The Ultimate LinkedIn Centric Business Growth Platform";
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
          The DemandSense Advantage
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
          label="demand"
          title="Sense Demand"
          description={
            <div className="space-y-3">
              <p>Uncover who&apos;s engaging with your brand:</p>
              <ul className="space-y-2" role="list">
                <li className="flex items-start gap-2" role="listitem">
                  <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
                  <span>Unmask anonymous website visitors showing intent</span>
                </li>
                <li className="flex items-start gap-2" role="listitem">
                  <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
                  <span>Reveal companies demonstrating buying signals</span>
                </li>
                <li className="flex items-start gap-2" role="listitem">
                  <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
                  <span>Access decision-makers from companies showing intent</span>
                </li>
                <li className="flex items-start gap-2" role="listitem">
                  <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
                  <span>Track engagement across LinkedIn and your website</span>
                </li>
              </ul>
            </div>
          }
          imageSlot={<FeatureImage src="/media/feature-share-smart.png" alt="DemandSense dashboard showing campaign scheduling" position="left" />}
          imagePosition="left"
        />

        <FeatureItem
          label="audiences"
          title="Segment"
          description={
            <div className="space-y-3">
              <p>Build strategic audiences based on real data:</p>
              <ul className="space-y-2" role="list">
                <li className="flex items-start gap-2" role="listitem">
                  <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
                  <span>Identify highest potential prospects using firmographic, demographic, and behavioral filters</span>
                </li>
                <li className="flex items-start gap-2" role="listitem">
                  <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
                  <span>Group accounts by intent and engagement level</span>
                </li>
                <li className="flex items-start gap-2" role="listitem">
                  <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
                  <span>Build custom audiences for different campaign types</span>
                </li>
                <li className="flex items-start gap-2" role="listitem">
                  <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
                  <span>Create premium LinkedIn audience segments using more granular NAICS targeting</span>
                </li>
                <li className="flex items-start gap-2" role="listitem">
                  <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
                  <span>Automate segmentation with custom rules for newly identified accounts</span>
                </li>
              </ul>
            </div>
          }
          imageSlot={<FeatureImage src="/media/feature-share-smart.png" alt="Streamlined workspace illustration" position="right" />}
          imagePosition="right"
        />

        <FeatureItem
          label="engage"
          title="Activate"
          description={
            <div className="space-y-3">
              <p>Engage prospects across multiple channels:</p>
              <ul className="space-y-2" role="list">
                <li className="flex items-start gap-2" role="listitem">
                  <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
                  <span>Enable sales team outreach with complete contact data</span>
                </li>
                <li className="flex items-start gap-2" role="listitem">
                  <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
                  <span>Upload leads showing signals to LinkedIn for precise retargeting campaigns</span>
                </li>
                <li className="flex items-start gap-2" role="listitem">
                  <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
                  <span>Extend reach to Facebook and Programmatic</span>
                </li>
                <li className="flex items-start gap-2" role="listitem">
                  <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
                  <span>Launch targeted Account Based Marketing (ABM) campaigns</span>
                </li>
              </ul>
            </div>
          }
          imageSlot={<FeatureImage src="/media/feature-share-smart.png" alt="Illustration for data privacy and security" position="left" />}
          imagePosition="left"
        />

        {/* 4th block: Workflow example */}
        <FeatureWorkflow />
      </div>
    </section>
  );
};

export default React.memo(FeaturesSection);