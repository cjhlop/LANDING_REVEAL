import React from 'react';
import { cn } from '@/lib/utils';

interface BillingToggleProps {
  isYearly: boolean;
  onToggle: (isYearly: boolean) => void;
  discountPercentage: number;
}

export const BillingToggle: React.FC<BillingToggleProps> = ({ isYearly, onToggle, discountPercentage }) => {
  return (
    <div className="flex items-center gap-4" role="switch" aria-checked={isYearly} onClick={() => onToggle(!isYearly)}>
      <div
        className={cn(
          "relative w-16 h-8 rounded-full flex items-center cursor-pointer transition-colors duration-300",
          isYearly ? "bg-dyad-blue" : "bg-gray-300"
        )}
      >
        <div
          className={cn(
            "absolute w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300",
            isYearly ? "translate-x-8" : "translate-x-1"
          )}
        />
      </div>
      <span className="text-base font-medium text-dyad-dark-text">Billed yearly</span>
      <span className="px-2 py-1 bg-dyad-blue/10 text-dyad-blue text-sm font-medium rounded-md">
        Save {discountPercentage}%
      </span>
    </div>
  );
};