import * as React from "react";
import { Mail, Zap, BarChart2 } from "lucide-react";
import FeatureItem from "./FeatureItem";
import FeatureImage from "./FeatureImage";
import { cn } from "@/lib/utils";
import { AnimatedTitle } from "@/components/AnimatedTitle";

export type FeaturesSectionProps = {
  className?: string;
};

const TITLE = "Analytics that feels like it's from the future";
const SUBTITLE =
  "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.";

const features = [
  {
    icon: <Mail className="size-6 text-violet-600" />,
    title: "Share team inboxes",
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    checklist: [
      "Leverage automation to move fast",
      "Always give customers a human to chat to",
      "Automate customer support and close leads faster",
    ],
    imageSlot: <FeatureImage src="/media/feature-share-smart.png" alt="Shared team inboxes dashboard" />,
    imagePosition: "right",
  },
  {
    icon: <Zap className="size-6 text-violet-600" />,
    title: "Deliver instant answers",
    description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    checklist: [
      "Keep your customers in the loop with live chat",
      "Embed help articles right on your website",
      "Customers never have to leave the page to find an answer",
    ],
    imageSlot: <FeatureImage src="/media/feature-share-smart.png" alt="Instant answers dashboard" />,
    imagePosition: "left",
  },
  {
    icon: <BarChart2 className="size-6 text-violet-600" />,
    title: "Manage your team with reports",
    description: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    checklist: [
      "Filter, export, and drilldown on the data quickly",
      "Save, schedule, and automate reports to your inbox",
      "Connect the tools you already use with 100+ integrations",
    ],
    imageSlot: <FeatureImage src="/media/feature-share-smart.png" alt="Team reports dashboard" />,
    imagePosition: "right",
  },
];

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ className }) => {
  return (
    <section
      className={cn("features-section", className)}
      role="region"
      aria-labelledby="features-heading"
    >
      {/* Header */}
      <div className="features-header">
        <p id="features-eyebrow" className="features-eyebrow">
          Features
        </p>
        <AnimatedTitle text={TITLE} className="features-animated-title" />
        <h2 id="features-heading" className="sr-only">
          {TITLE}
        </h2>
        <p className="features-subtitle">{SUBTITLE}</p>
      </div>

      {/* Content */}
      <div className="features-rows">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            checklist={feature.checklist}
            imageSlot={feature.imageSlot}
            imagePosition={feature.imagePosition as "left" | "right"}
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(FeaturesSection);