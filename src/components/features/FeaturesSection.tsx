import * as React from "react";
import FeatureItem from "./FeatureItem";
import FeatureImagePlaceholder from "./FeatureImagePlaceholder";
import FeatureImage from "./FeatureImage";
import { cn } from "@/lib/utils";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Mail, Zap, BarChart3, CheckCircle2 } from "lucide-react";

const TITLE = "Analytics that feels like it's from the future";
const SUBTITLE =
  "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.";

const FeatureChecklistItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2 className="size-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
    <span className="text-base text-muted-foreground">{children}</span>
  </li>
);

const FeaturesSection: React.FC = () => {
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: "0px 0px -20% 0px",
  });

  return (
    <section
      className="features-section"
      role="region"
      aria-labelledby="features-heading"
    >
      {/* Header */}
      <div className="features-header" ref={headerRef}>
        <p
          id="features-eyebrow"
          className={cn(
            "features-eyebrow reveal reveal-fade-up",
            headerInView ? "is-inview" : "",
          )}
        >
          Features
        </p>

        {headerInView ? (
          <AnimatedTitle text={TITLE} className="features-animated-title" />
        ) : (
          <h2 className="features-heading opacity-0">{TITLE}</h2>
        )}
        <h2 id="features-heading" className="sr-only">{TITLE}</h2>

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
          icon={<Mail className="size-5 text-primary" />}
          title="Share team inboxes"
          description={
            <>
              <p>
                Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
              </p>
              <ul className="mt-4 space-y-2">
                <FeatureChecklistItem>Leverage automation to move fast</FeatureChecklistItem>
                <FeatureChecklistItem>Always give customers a human to chat to</FeatureChecklistItem>
                <FeatureChecklistItem>Automate customer support and close leads faster</FeatureChecklistItem>
              </ul>
            </>
          }
          imageSlot={<FeatureImage src="/media/feature-share-smart.png" alt="Analytics dashboard preview" position="right" />}
          imagePosition="right"
        />

        <FeatureItem
          icon={<Zap className="size-5 text-primary" />}
          title="Deliver instant answers"
          description={
            <>
              <p>
                An all-in-one customer service platform that helps you balance everything your customers need to be happy.
              </p>
              <ul className="mt-4 space-y-2">
                <FeatureChecklistItem>Keep your customers in the loop with live chat</FeatureChecklistItem>
                <FeatureChecklistItem>Embed help articles right on your website</FeatureChecklistItem>
                <FeatureChecklistItem>Customers never have to leave the page to find an answer</FeatureChecklistItem>
              </ul>
            </>
          }
          imageSlot={<FeatureImagePlaceholder />}
          imagePosition="left"
        />

        <FeatureItem
          icon={<BarChart3 className="size-5 text-primary" />}
          title="Manage your team with reports"
          description={
            <>
              <p>
                Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
              </p>
              <ul className="mt-4 space-y-2">
                <FeatureChecklistItem>Filter, export, and drilldown on the data quickly</FeatureChecklistItem>
                <FeatureChecklistItem>Save, schedule, and automate reports to your inbox</FeatureChecklistItem>
                <FeatureChecklistItem>Connect the tools you already use with 100+ integrations</FeatureChecklistItem>
              </ul>
            </>
          }
          imageSlot={<FeatureImagePlaceholder />}
          imagePosition="right"
        />
      </div>
    </section>
  );
};

export default React.memo(FeaturesSection);