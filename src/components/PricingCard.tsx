import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { FeatureItem } from './FeatureItem';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  planName: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  isEnterprise?: boolean;
  isYearlyBilling: boolean;
  discount?: number;
  onGetStarted: (planName: string) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  planName,
  description,
  monthlyPrice,
  yearlyPrice,
  features,
  isEnterprise = false,
  isYearlyBilling,
  discount,
  onGetStarted,
}) => {
  const price = isYearlyBilling ? yearlyPrice : monthlyPrice;
  const priceSuffix = isEnterprise ? "team members" : (isYearlyBilling ? "/year" : "/month");

  return (
    <div
      className={cn(
        "flex flex-col rounded-xl p-9 shadow-lg transition-all duration-300",
        isEnterprise ? "bg-dyad-blue text-white" : "bg-white text-dyad-dark-text",
        isEnterprise ? "scale-105 z-10" : "" // Slightly elevate the enterprise card
      )}
      role="region"
      aria-label={`${planName} pricing plan`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className={cn("text-lg font-medium", isEnterprise ? "text-white" : "text-dyad-gray-text")}>
          {planName}
        </h3>
        {discount && (
          <span className={cn(
            "px-2 py-1 rounded-md text-xs font-medium",
            isEnterprise ? "bg-white/20 text-white" : "bg-dyad-blue/10 text-dyad-blue"
          )}>
            -{discount}%
          </span>
        )}
      </div>

      <div className="flex items-baseline gap-1 mb-6">
        <span className={cn("text-5xl font-semibold", isEnterprise ? "text-white" : "text-dyad-dark-text")}>
          {planName === "Starter" ? "$0" : `$${price}`}
        </span>
        <span className={cn("text-lg font-normal", isEnterprise ? "text-white/80" : "text-dyad-light-gray-text")}>
          {planName === "Starter" ? "/month" : priceSuffix}
        </span>
      </div>

      <p className={cn("text-sm mb-8 flex-grow", isEnterprise ? "text-dyad-enterprise-text" : "text-dyad-gray-text")}>
        {description}
      </p>

      <Button
        className={cn(
          "w-full py-6 text-base font-semibold rounded-lg transition-colors duration-300",
          isEnterprise
            ? "bg-white text-dyad-blue hover:bg-gray-100"
            : "bg-dyad-dark-text text-white hover:bg-dyad-dark-text/90",
          planName === "Starter" && "bg-gray-100 text-dyad-dark-text hover:bg-gray-200"
        )}
        onClick={() => onGetStarted(planName)}
        aria-label={`Get started with the ${planName} plan`}
      >
        Get started <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <div className="mt-8 space-y-4" role="list">
        {features.map((feature, index) => (
          <FeatureItem key={index} text={feature} />
        ))}
      </div>
    </div>
  );
};