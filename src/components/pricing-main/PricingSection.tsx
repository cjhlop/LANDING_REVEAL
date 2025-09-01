import * as React from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import RandomIcon from "@/components/navbar/RandomIcon";

type BillingCycle = "monthly" | "yearly";

type Plan = {
  id: "basic" | "plus" | "pro";
  priceMonthly: number;
  title: string;
  subtitle: string;
  benefits: string[];
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "basic",
    priceMonthly: 99,
    title: "$99",
    subtitle: "/user per month",
    benefits: [
      "Unlimited projects and storage",
      "Advanced collaboration tools",
      "Custom branding and white-label options",
      "Priority customer support",
      "Enterprise-grade security",
    ],
  },
  {
    id: "plus",
    priceMonthly: 199,
    title: "$199",
    subtitle: "/user per month",
    benefits: [
      "Unlimited projects and storage",
      "Advanced collaboration tools",
      "Custom branding and white-label options",
      "Priority customer support",
      "Enterprise-grade security",
    ],
    featured: true,
  },
  {
    id: "pro",
    priceMonthly: 99,
    title: "$99",
    subtitle: "/user per month",
    benefits: [
      "Unlimited projects and storage",
      "Advanced collaboration tools",
      "Custom branding and white-label options",
      "Priority customer support",
      "Enterprise-grade security",
    ],
  },
];

function formatPrice(price: number) {
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
        <p className="pricing3-eyebrow" aria-label="Pricing">PRICING</p>
        <h2 id="pricing3-title" className="pricing3-title">Plans and Pricing</h2>
        <p className="pricing3-subtitle">Flexible plans and solutions for business of all sizes</p>

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
  const isYearly = billing === "yearly";
  const computedPrice = React.useMemo(() => {
    const monthly = plan.priceMonthly;
    return isYearly ? Math.round(monthly * 0.8) : monthly;
  }, [plan.priceMonthly, isYearly]);

  const handleClick = () => {
    document.dispatchEvent(new CustomEvent("open-get-access"));
  };

  return (
    <article
      className={cn("pricing3-card", plan.featured && "pricing3-card--featured")}
      role="article"
      aria-labelledby={`plan-${plan.id}-price`}
    >
      <div className="pricing3-card-icon" aria-hidden="true">
        <RandomIcon className="size-5 text-gray-700" title="Plan icon" />
      </div>

      <div className="pricing3-card-price">
        <h3 id={`plan-${plan.id}-price`} className="pricing3-price-amount">
          {formatPrice(computedPrice)}
        </h3>
        <p className="pricing3-price-note">{plan.subtitle}</p>
      </div>

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

      <div className="pricing3-card-footer">
        <Button
          className="pricing3-cta"
          size="lg"
          onClick={handleClick}
          aria-label={`Get started with ${plan.id} plan`}
        >
          Get started
        </Button>
      </div>
    </article>
  );
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