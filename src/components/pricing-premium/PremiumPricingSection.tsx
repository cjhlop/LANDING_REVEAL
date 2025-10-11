"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Check, Sparkles, Zap, Crown, Rocket } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShineBorder } from "@/components/ui/shine-border";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { NumberTicker } from "@/components/ui/number-ticker";

type BillingCycle = "monthly" | "yearly";

type PlanId = "starter" | "professional" | "enterprise";

type Plan = {
  id: PlanId;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  buttonText: string;
};

const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    priceMonthly: 29,
    priceYearly: 290,
    description: "Perfect for individuals and small teams getting started",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "Mobile app access",
      "API access",
    ],
    icon: Rocket,
    gradient: "from-blue-500 to-cyan-500",
    buttonText: "Get Started",
  },
  {
    id: "professional",
    name: "Professional",
    priceMonthly: 99,
    priceYearly: 990,
    description: "Advanced features for growing businesses",
    features: [
      "Unlimited team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support 24/7",
      "Custom integrations",
      "Advanced API access",
      "White-label options",
      "Dedicated account manager",
    ],
    highlighted: true,
    icon: Zap,
    gradient: "from-purple-500 to-pink-500",
    buttonText: "Start Free Trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceMonthly: 299,
    priceYearly: 2990,
    description: "Custom solutions for large organizations",
    features: [
      "Unlimited everything",
      "Unlimited storage",
      "Custom analytics",
      "24/7 phone & email support",
      "Custom integrations",
      "Enterprise API access",
      "Full white-label",
      "Dedicated success team",
      "SLA guarantee",
      "Custom contracts",
    ],
    icon: Crown,
    gradient: "from-orange-500 to-red-500",
    buttonText: "Contact Sales",
  },
];

const PremiumPricingSection = () => {
  const [billing, setBilling] = React.useState<BillingCycle>("yearly");
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: "0px 0px -20% 0px",
  });

  const [cardsRef, cardsInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px",
  });

  const handleGetStarted = () => {
    document.dispatchEvent(new CustomEvent("open-get-access"));
  };

  const getPrice = (plan: Plan) => {
    return billing === "yearly" ? plan.priceYearly : plan.priceMonthly;
  };

  const getSavings = (plan: Plan) => {
    const monthlyCost = plan.priceMonthly * 12;
    const yearlyCost = plan.priceYearly;
    const savings = monthlyCost - yearlyCost;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return { amount: savings, percentage };
  };

  return (
    <section
      className="relative w-full bg-gradient-to-b from-white via-gray-50 to-white px-4 sm:px-6 md:px-8 lg:px-[112px] py-16 md:py-24 overflow-hidden"
      role="region"
      aria-labelledby="premium-pricing-heading"
    >
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-soft" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-soft" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6 md:mb-8 shadow-sm border border-blue-100/50 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            PREMIUM PRICING
          </div>

          <h2 id="premium-pricing-heading" className="sr-only">
            Premium Pricing Plans
          </h2>

          {headerInView ? (
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight leading-tight px-4">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Perfect Plan
              </span>
            </h2>
          ) : (
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight leading-tight opacity-0 px-4">
              Choose Your Perfect Plan
            </h2>
          )}

          <p
            className={cn(
              "text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-opacity duration-700 px-4",
              headerInView ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: headerInView ? "200ms" : "0ms" }}
          >
            Flexible pricing that scales with your business. Save up to 20% with annual billing.
          </p>

          {/* Billing Toggle */}
          <div
            className={cn(
              "flex items-center justify-center gap-4 mt-8 md:mt-10 transition-opacity duration-700",
              headerInView ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: headerInView ? "400ms" : "0ms" }}
          >
            <span
              className={cn(
                "text-sm md:text-base font-medium transition-colors duration-200",
                billing === "monthly" ? "text-gray-900" : "text-gray-500"
              )}
            >
              Monthly
            </span>
            <Switch
              checked={billing === "yearly"}
              onCheckedChange={(checked) => setBilling(checked ? "yearly" : "monthly")}
              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-600 data-[state=checked]:to-purple-600"
            />
            <span
              className={cn(
                "text-sm md:text-base font-medium transition-colors duration-200",
                billing === "yearly" ? "text-gray-900" : "text-gray-500"
              )}
            >
              Yearly
            </span>
            {billing === "yearly" && (
              <span className="inline-flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow-lg shadow-green-500/30 animate-bounce-subtle">
                <Sparkles className="h-3 w-3" />
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto"
        >
          {PLANS.map((plan, index) => {
            const price = getPrice(plan);
            const savings = getSavings(plan);
            const Icon = plan.icon;

            return (
              <div
                key={plan.id}
                className={cn(
                  "relative transition-all duration-700 ease-out",
                  cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                  plan.highlighted && "md:scale-105 lg:scale-110"
                )}
                style={{ transitionDelay: cardsInView ? `${index * 150}ms` : "0ms" }}
              >
                {/* Popular Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs md:text-sm font-bold px-4 py-1.5 rounded-full shadow-lg shadow-purple-500/50 flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div
                  className={cn(
                    "relative h-full bg-white rounded-3xl p-6 md:p-8 border-2 transition-all duration-300 hover:shadow-2xl group overflow-hidden",
                    plan.highlighted
                      ? "border-purple-200 shadow-xl shadow-purple-500/20"
                      : "border-gray-200 hover:border-gray-300"
                  )}
                >
                  {/* Animated Border Beam for highlighted plan */}
                  {plan.highlighted && (
                    <>
                      <BorderBeam
                        size={200}
                        duration={8}
                        delay={0}
                        colorFrom="#9333ea"
                        colorTo="#ec4899"
                      />
                      <ShineBorder
                        borderWidth={2}
                        duration={10}
                        shineColor={["#9333ea", "#ec4899", "#9333ea"]}
                      />
                    </>
                  )}

                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={cn(
                        "inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:scale-110",
                        plan.gradient
                      )}
                    >
                      <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                    </div>
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 mb-6 min-h-[3rem]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                        $
                        {cardsInView ? (
                          <NumberTicker
                            value={price}
                            delay={0.3 + index * 0.1}
                            decimalPlaces={0}
                          />
                        ) : (
                          "0"
                        )}
                      </span>
                      <span className="text-base md:text-lg text-gray-600">
                        /{billing === "yearly" ? "year" : "month"}
                      </span>
                    </div>
                    {billing === "yearly" && (
                      <p className="text-xs md:text-sm text-green-600 font-medium mt-2">
                        Save ${savings.amount} ({savings.percentage}% off)
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="mb-8">
                    {plan.highlighted ? (
                      <ShimmerButton
                        className="w-full h-12 md:h-14 text-base md:text-lg font-semibold"
                        shimmerColor="#ffffff"
                        shimmerSize="0.1em"
                        borderRadius="12px"
                        background="linear-gradient(135deg, #9333ea 0%, #ec4899 100%)"
                        onClick={handleGetStarted}
                      >
                        {plan.buttonText}
                      </ShimmerButton>
                    ) : (
                      <Button
                        className={cn(
                          "w-full h-12 md:h-14 text-base md:text-lg font-semibold rounded-xl transition-all duration-300",
                          "bg-gradient-to-r hover:shadow-xl",
                          plan.gradient,
                          "text-white hover:scale-105"
                        )}
                        onClick={handleGetStarted}
                      >
                        {plan.buttonText}
                      </Button>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 md:space-y-4">
                    <p className="text-xs md:text-sm font-semibold text-gray-900 uppercase tracking-wide">
                      What's included:
                    </p>
                    <ul className="space-y-2.5 md:space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div
                            className={cn(
                              "flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br flex items-center justify-center mt-0.5",
                              plan.gradient
                            )}
                          >
                            <Check className="h-3 w-3 md:h-4 md:w-4 text-white" />
                          </div>
                          <span className="text-sm md:text-base text-gray-700 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Decorative gradient overlay */}
                  <div
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      plan.gradient
                    )}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={cn(
            "text-center mt-12 md:mt-16 transition-all duration-700 ease-out px-4",
            cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: cardsInView ? "800ms" : "0ms" }}
        >
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Need a custom plan? We've got you covered.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
            onClick={handleGetStarted}
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(PremiumPricingSection);