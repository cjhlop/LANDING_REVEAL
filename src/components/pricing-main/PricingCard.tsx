import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star, Building2 } from "lucide-react";

type PricingCardProps = {
  planName: string;
  price?: string;
  subtitle: string;
  ctaText: string;
  isFeatured?: boolean;
  pricePrefix?: string;
  monthlyCredits?: string;
  onCtaClick?: () => void;
};

const PlanIcon = ({
  isFeatured,
  hasPrice,
}: {
  isFeatured?: boolean;
  hasPrice: boolean;
}) => {
  if (!hasPrice) {
    return (
      <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
        <Building2 className="text-white" />
      </div>
    );
  }
  if (isFeatured) {
    return (
      <div className="w-12 h-12 rounded-full grid grid-cols-2 grid-rows-2 overflow-hidden flex-shrink-0">
        <div className="bg-orange-400"></div>
        <div className="bg-blue-600"></div>
        <div className="bg-blue-600"></div>
        <div className="bg-orange-400"></div>
      </div>
    );
  }
  return (
    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
      <Star className="text-white" fill="white" />
    </div>
  );
};

const PricingCard = ({
  planName,
  price,
  subtitle,
  ctaText,
  isFeatured,
  pricePrefix,
  monthlyCredits,
  onCtaClick,
}: PricingCardProps) => {
  // For featured cards, wrap in magic-border with prominent shadow that intensifies on hover
  if (isFeatured) {
    return (
      <div className="magic-border group">
        <div className="rounded-2xl p-6 w-full flex flex-col bg-slate-50 shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition-shadow duration-300 group-hover:shadow-[0_24px_48px_rgba(0,0,0,0.25)]">
          <div className="flex items-center gap-x-4">
            <PlanIcon isFeatured={isFeatured} hasPrice={!!price} />
            <h3 className="text-slate-900 font-semibold tracking-wide uppercase text-sm leading-5">
              {planName}
            </h3>
          </div>

          {price && (
            <div className="mt-4 flex items-baseline gap-x-1">
              {pricePrefix && (
                <span className="text-base font-medium text-slate-500">
                  {pricePrefix}
                </span>
              )}
              <span className="text-4xl font-bold tracking-tight text-blue-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                ${price}
              </span>
              <span className="text-lg font-semibold text-slate-500">/mo</span>
            </div>
          )}

          {monthlyCredits && (
            <div className="mt-2">
              <span className="text-sm font-bold text-slate-600 tracking-[-0.2px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                {monthlyCredits}
              </span>
            </div>
          )}

          <p className="mt-4 text-sm text-slate-600 leading-[150%] tracking-[-0.2px]" style={{ fontFamily: 'Inter, sans-serif' }}>
            {subtitle}
          </p>

          <Button
            variant="default"
            className="mt-6 w-full h-10 text-sm font-semibold tracking-tight bg-blue-600 hover:bg-blue-700"
            onClick={onCtaClick}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {ctaText}
          </Button>
        </div>
      </div>
    );
  }

  // Regular cards without magic border
  return (
    <div
      className={cn(
        "rounded-2xl p-6 w-full flex flex-col border border-gray-200 bg-white"
      )}
    >
      <div className="flex items-center gap-x-4">
        <PlanIcon isFeatured={isFeatured} hasPrice={!!price} />
        <h3 className="text-slate-900 font-semibold tracking-wide uppercase text-sm leading-5">
          {planName}
        </h3>
      </div>

      {price && (
        <div className="mt-4 flex items-baseline gap-x-1">
          {pricePrefix && (
            <span className="text-base font-medium text-slate-500">
              {pricePrefix}
            </span>
          )}
          <span className="text-4xl font-bold tracking-tight text-blue-600" style={{ fontFamily: 'Inter, sans-serif' }}>
            ${price}
          </span>
          <span className="text-lg font-semibold text-slate-500">/mo</span>
        </div>
      )}

      {monthlyCredits && (
        <div className="mt-2">
          <span className="text-sm font-bold text-slate-600 tracking-[-0.2px]" style={{ fontFamily: 'Inter, sans-serif' }}>
            {monthlyCredits}
          </span>
        </div>
      )}

      <p className="mt-4 text-sm text-slate-600 leading-[150%] tracking-[-0.2px]" style={{ fontFamily: 'Inter, sans-serif' }}>
        {subtitle}
      </p>

      <Button
        variant="outline"
        className="mt-6 w-full h-10 text-sm font-semibold tracking-tight border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
        onClick={onCtaClick}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {ctaText}
      </Button>
    </div>
  );
};

export default PricingCard;