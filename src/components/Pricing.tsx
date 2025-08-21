import React, { useState } from 'react';
import { PlanTypeToggle } from './PlanTypeToggle';
import { BillingToggle } from './BillingToggle';
import { PricingCard } from './PricingCard';

export const Pricing: React.FC = () => {
  const [isYearlyBilling, setIsYearlyBilling] = useState(true);
  const [planType, setPlanType] = useState<'teams' | 'individuals'>('teams'); // Default to 'teams'

  const handleGetStarted = (planName: string) => {
    console.log(`Get started with ${planName} plan`);
    // In a real app, this would navigate to a signup/checkout page
  };

  const pricingPlans = [
    {
      planName: "Starter",
      description: "Try the core features for free and see if it’s the right fit for you",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        "1 active project",
        "Up to 3 team members",
        "Access to basic templates",
        "Community support",
        "Cloud storage (500MB)",
      ],
      discount: undefined,
      isEnterprise: false,
    },
    {
      planName: "Starter plus",
      description: "Unlock collaboration features and manage more projects",
      monthlyPrice: 10,
      yearlyPrice: 8, // 20% discount
      features: [
        "Up to 5 active projects",
        "Unlimited team members",
        "Shared workspaces",
        "Role-based permissions",
        "Email support",
      ],
      discount: 20,
      isEnterprise: false,
    },
    {
      planName: "Business",
      description: "Advanced features for efficient scaling and team performance",
      monthlyPrice: 17,
      yearlyPrice: 12, // ~30% discount
      features: [
        "Unlimited projects",
        "Advanced analytics & reports",
        "Integration with 100+ tools",
        "Activity tracking",
        "Priority support",
      ],
      discount: 30,
      isEnterprise: false,
    },
    {
      planName: "Enterprise",
      description: "Tailored support, scalability, and compliance at high level.",
      monthlyPrice: 99, // Price doesn't change for enterprise, it's per team members
      yearlyPrice: 99,
      features: [
        "Everything in Business",
        "Dedicated success manager",
        "SSO & custom onboarding",
        "SLA-backed uptime guarantee",
        "Admin & audit tools",
      ],
      discount: undefined,
      isEnterprise: true,
    },
  ];

  // Generate grid squares for background
  const gridSquares = Array.from({ length: 7 * 13 }).map((_, i) => (
    <div
      key={i}
      className="w-[119.1px] h-[119.1px] border border-dyad-grid-border"
      style={{
        backgroundColor: (i % 2 === 0) ? 'rgba(255, 255, 255, 1)' : 'rgba(241, 240, 251, 0.33)',
      }}
    />
  ));

  return (
    <section className="relative w-full min-h-[833px] py-20 overflow-hidden flex items-center justify-center bg-white">
      {/* Background Grid */}
      <div className="absolute inset-0 w-full h-full grid grid-cols-auto-fill-119px auto-rows-auto-fill-119px opacity-70">
        {gridSquares}
      </div>

      {/* Background Blur and Color Shape */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Color Shape - simplified as a large blurred circle for visual effect */}
        <div className="absolute -top-80 -left-96 w-[1500px] h-[800px] bg-dyad-blue/10 rounded-full filter blur-3xl opacity-50" />
        <div className="absolute -bottom-60 -right-80 w-[1200px] h-[700px] bg-dyad-blue/5 rounded-full filter blur-3xl opacity-40" />
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-xl bg-white/50" />
      </div>

      <div className="relative z-10 container mx-auto px-8 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <PlanTypeToggle selectedType={planType} onToggle={setPlanType} />
          <BillingToggle isYearly={isYearlyBilling} onToggle={setIsYearlyBilling} discountPercentage={20} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.planName}
              planName={plan.planName}
              description={plan.description}
              monthlyPrice={plan.monthlyPrice}
              yearlyPrice={plan.yearlyPrice}
              features={plan.features}
              isEnterprise={plan.isEnterprise}
              isYearlyBilling={isYearlyBilling}
              discount={plan.discount}
              onGetStarted={handleGetStarted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};