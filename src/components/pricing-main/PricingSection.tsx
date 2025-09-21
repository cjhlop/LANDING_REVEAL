import * as React from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import RandomIcon from "@/components/navbar/RandomIcon";
import { DollarSign } from "lucide-react";

type BillingCycle = "monthly" | "yearly";

type PlanId = "basic" | "plus" | "pro" | "custom";

type Plan = {
  id: PlanId;
  priceMonthly?: number;
  priceLabel?: string;
  subtitle?: string;
  benefits: string[];
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "basic",
    priceMonthly: 99,
    subtitle: "/user per month",
    benefits: [
      "1 ad account seat",
      "LinkedIn Ads Optimization",
      "AI Co-pilot: 100 credits",
      "Ad-hoc reports: 5",
      "Website Visitor: 250 companies • 150 contacts",
      "Reports: LinkedIn Ads, Visitors, Multichannel",
      "Prospector: 0 credits",
      "Data sync: every 24 h • Support: 24 h SLA",
    ],
  },
  {
    id: "plus",
    priceMonthly: 119,
    subtitle: "/user per month",
    benefits: [
      "3 ad account seats",
      "LinkedIn Ads Optimization",
      "AI Co-pilot: 250 credits",
      "Ad-hoc reports: 10",
      "Website Visitor: 500 companies • 250 contacts",
      "Reports: LinkedIn Ads, Visitors, Multichannel",
      "Prospector: 1000 credits",
      "Data sync: every 24 h • Support: 24 h SLA",
    ],
    featured: true,
  },
  {
    id: "pro",
    priceMonthly: 249,
    subtitle: "/user per month",
    benefits: [
      "5 ad account seats",
      "LinkedIn Ads Optimization",
      "AI Co-pilot: 500 credits",
      "Ad-hoc reports: 15",
      "Website Visitor: 1000 companies • 500 contacts",
      "Reports: LinkedIn Ads, Visitors, Multichannel",
      "Prospector: 2500 credits",
      "Data sync: every 24 h • Support: 12 h SLA",
    ],
  },
  {
    id: "custom",
    priceLabel: "Custom",
    subtitle: "Contact sales",
    benefits: [
      "Custom seats and usage",
      "LinkedIn Ads Optimization",
      "AI Co-pilot: Custom",
      "Ad-hoc reports: Custom",
      "Website Visitor: Custom",
      "Reports: Full suite",
      "Prospector: Custom",
      "Data sync: Configurable • Support: Dedicated TAM",
    ],
  },
];

function formatPriceLabel(plan: Plan, billing: BillingCycle): string {
  if (typeof plan.priceMonthly !== "number") {
    return plan.priceLabel ?? "Custom";
  }
  const base = plan.priceMonthly;
  const price = billing === "yearly" ? Math.round(base * 0.8) : base; // Save 20% yearly
  return `$${price}`;
}

type HeaderProps = {
  billing: BillingCycle;
  onToggle: (value: BillingCycle) => void;
};

const PricingHeader: React.FC<HeaderProps> = React.memo(({ billing, onToggle }) => {
  const yearly = billing === "yearly";

  return (
    <header className="pricing3-header" role="group" aria-labelledby="pricing3-title">
      <div className="pricing3-header-inner">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-100">
          <DollarSign className="h-4 w-4" />
          PRICING
        </div>
        
        <h2 id="pricing3-title" className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
          Plans and <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Pricing</span>
        </h2>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
          Flexible plans and solutions for business of all sizes
        </p>

        <div className="pricing3-toggle" role="radiogroup" aria-label="Billing period">
          <span
            role="radio"
            aria-checked={!yearly}
            tabIndex={0}
            className={cn("pricing3-toggle-label", !yearly ? "active" : "")}
            onClick={() => onToggle("monthly")}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onToggle("monthly")}
          >
            Monthly
          </span>

          <Switch
            checked={yearly}
            onCheckedChange={(v) => onToggle(v ? "yearly" : "monthly")}
            aria-label="Toggle yearly billing"
          />

          <span
            role="radio"
            aria-checked={yearly}
            tabIndex={0}
            className={cn("pricing3-toggle-label", yearly ? "active" : "")}
            onClick={() => onToggle("yearly")}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onToggle("yearly")}
          >
            Yearly
          </span>

          <span className="pricing3-badge" aria-label="Save twenty percent">Save 20%</span>
        </div>
      </div>
    </header>
  );
});
PricingHeader.displayName = "PricingHeader";

type CardProps = {
  plan: Plan;
  billing: BillingCycle;
};

const PriceCard: React.FC<CardProps> = React.memo(({ plan, billing }) => {
  const priceLabel = React.useMemo(() => formatPriceLabel(plan, billing), [plan, billing]);

  const handleClick = () => {
    document.dispatchEvent(new CustomEvent("open-get-access"));
  };

  const cardBody = (
    <article
      className={cn("pricing3-card", plan.featured && "pricing3-card--featured")}
      role="article"
      aria-labelledby={`plan-${plan.id}-price`}
    >
      {/* Icon row with inline Most Popular badge for featured plan */}
      <div className="flex items-center gap-2">
        <div className="pricing3-card-icon" aria-hidden="true">
          <RandomIcon className="size-5 text-gray-700" title="Plan icon" />
        </div>
        {plan.featured ? (
          <span className="pricing3-popular-badge-inline" aria-label="Most Popular">
            Most Popular
          </span>
        ) : null}
      </div>

      {/* Price */}
      <div className="pricing3-card-price">
        <h3 id={`plan-${plan.id}-price`} className="pricing3-price-amount">
          {priceLabel}
        </h3>
        {plan.subtitle ? <p className="pricing3-price-note">{plan.subtitle}</p> : null}
      </div>

      {/* Benefits */}
      <div className="pricing3-card-body">
        <p className="pricing3-benefits-heading">All core benefits in one unified platform</p>
        <ul className="pricing3-benefits" role="list">
          {plan.benefits.map((b, i) => (
            <li key={`${plan.id}-benefit-${i}`} role="listitem" className="pricing3-benefit-row">
              <span className="pricing3-benefit-text">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="pricing3-card-footer">
        <Button
          className="h-11 w-full rounded-lg bg-[#3875F6] hover:bg-[#2c5cc5] text-white font-medium tracking-tight"
          size="lg"
          onClick={handleClick}
          aria-label={plan.id === "custom" ? "Contact Sales" : `Get started with ${plan.id} plan`}
        >
          {plan.id === "custom" ? "Contact Sales" : "Get started"}
        </Button>
      </div>
    </article>
  );

  // Add magic border and a stronger shadow for the featured ($119) card
  if (plan.featured) {
    return <div className="w-full magic-border shadow-2xl shadow-black/20">{cardBody}</div>;
  }

  return cardBody;
});
PriceCard.displayName = "PriceCard";

export type PricingSectionProps = {
  className?: string;
  defaultBilling?: BillingCycle;
  plans?: Plan[];
};

const PricingSection: React.FC<PricingSectionProps> = ({
  className,
  defaultBilling = "yearly",
  plans = PLANS,
}) => {
  const [billing, setBilling] = React.useState<BillingCycle>(defaultBilling);

  return (
    <section
      className={cn("pricing3-section", className)}
      role="region"
      aria-labelledby="pricing3-title"
    >
      <div className="pricing3-container">
        <PricingHeader billing={billing} onToggle={setBilling} />
        <div className="pricing3-grid" role="list">
          {plans.map((plan) => (
            <div key={plan.id} role="listitem" className="pricing3-grid-item">
              <PriceCard plan={plan} billing={billing} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(PricingSection);