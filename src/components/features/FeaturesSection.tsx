import * as React from "react";
import { cn } from "@/lib/utils";
import FeatureRow, { type FeatureRowProps } from "./FeatureRow";
import EmailCapture from "./EmailCapture";

export type FeaturesSectionProps = {
  id?: string;
  className?: string;
  heading?: string;
  subheading?: string;
  supportingText?: string;
  rows?: FeatureRowProps[];
  showEmailCapture?: boolean;
};

const defaultRows: FeatureRowProps[] = [
  {
    id: "share-inboxes",
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    bullets: [
      "Leverage automation to move fast",
      "Always give customers a human to chat to",
      "Automate customer support and close leads faster",
    ],
    mockup: { imageSrc: "/placeholder.svg", imageAlt: "Dashboard overview" },
  },
  {
    id: "instant-answers",
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    bullets: [
      "Keep your customers in the loop with live chat",
      "Embed help articles right on your website",
      "Customers never have to leave the page to find an answer",
    ],
    reverse: true,
    mockup: { imageSrc: "/placeholder.svg", imageAlt: "Analytics details" },
  },
  {
    id: "team-reports",
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    bullets: [
      "Filter, export, and drilldown on the data quickly",
      "Save, schedule, and automate reports to your inbox",
      "Connect the tools you already use with 100+ integrations",
    ],
    mockup: { imageSrc: "/placeholder.svg", imageAlt: "Reports screen" },
  },
];

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  id = "features",
  className,
  heading = "Analytics that feels like it’s from the future",
  subheading = "Features",
  supportingText = "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.",
  rows = defaultRows,
  showEmailCapture = false,
}) => {
  return (
    <section id={id} className={cn("features-section w-full", className)} role="region" aria-labelledby={`${id}-title`}>
      {/* Header */}
      <div className="features-container mx-auto max-w-[1280px] px-8 py-24">
        <div className="mx-auto max-w-[768px] text-center space-y-4">
          <p className="text-[16px] leading-6 font-semibold text-[#6941C6]">{subheading}</p>
          <h2 id={`${id}-title`} className="text-[36px] leading-[44px] tracking-[-0.02em] font-semibold text-[#181D27]">
            {heading}
          </h2>
          <p className="text-[20px] leading-[30px] text-[#535862]">
            {supportingText}
          </p>
          {showEmailCapture && (
            <div className="pt-4 flex justify-center">
              <EmailCapture />
            </div>
          )}
        </div>
      </div>

      {/* Rows */}
      <div className="mx-auto max-w-[1280px] px-8 space-y-24">
        {rows.map((row) => (
          <FeatureRow key={row.id ?? row.title} {...row} />
        ))}
      </div>
    </section>
  );
};

export default React.memo(FeaturesSection);