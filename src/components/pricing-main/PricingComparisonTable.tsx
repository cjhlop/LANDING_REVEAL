import { Check, X, Clock } from "lucide-react";
import PricingCard from "./PricingCard";

const features = [
  {
    name: "Ad Scheduling",
    basic: true,
    plus: true,
    pro: "coming-soon",
  },
  {
    name: "Frequency Cap",
    basic: true,
    plus: true,
    pro: "coming-soon",
  },
  {
    name: "Budget Control",
    basic: true,
    plus: true,
    pro: "coming-soon",
  },
  {
    name: "Audience Tuning",
    basic: true,
    plus: true,
    pro: "coming-soon",
  },
  {
    name: "Performance Overview",
    basic: true,
    plus: true,
    pro: "coming-soon",
  },
  {
    name: "Hourly Breakdown",
    basic: true,
    plus: true,
    pro: "coming-soon",
  },
  {
    name: "Unlock Website Visitor ID Module",
    basic: false,
    plus: true,
    pro: "coming-soon",
  },
  {
    name: "Monthly Data Credits to be used for either web ID or uncovering sales leads from key accounts",
    basic: false,
    plus: true,
    pro: "coming-soon",
  },
  {
    name: "Ability to uncover sales leads with contact info",
    basic: false,
    plus: true,
    pro: "coming-soon",
  },
  {
    name: "Influenced Revenue",
    basic: false,
    plus: false,
    pro: "coming-soon",
    blur: true,
  },
  {
    name: "AI Co-Pilot",
    basic: false,
    plus: false,
    pro: "coming-soon",
    blur: true,
  },
  {
    name: "Custom Dashboards",
    basic: false,
    plus: false,
    pro: "coming-soon",
    blur: true,
  },
  {
    name: "Ad Intelligence",
    basic: false,
    plus: false,
    pro: "coming-soon",
    blur: true,
  },
];

const plans = [
  {
    planName: "Basic",
    price: "99",
    monthlyCredits: "",
    subtitle: "Everything you need to start optimizing LinkedIn ads.",
    ctaText: "Start Trial",
  },
  {
    planName: "Plus",
    price: "149",
    monthlyCredits: "Basic + 250 monthly data credits.",
    isFeatured: true,
    subtitle: "Smarter insights and stronger targeting for scaling teams.",
    ctaText: "Start Trial",
  },
  {
    planName: "Pro",
    price: "249",
    monthlyCredits: "Coming Soon",
    subtitle: "The complete toolkit for performance-driven marketers.",
    ctaText: "Notify Me",
    isComingSoon: true,
  },
];

type PricingComparisonTableProps = {
  onPlusClick?: () => void;
};

const PricingComparisonTable = ({ onPlusClick }: PricingComparisonTableProps) => {
  const renderFeatureValue = (value: boolean | string) => {
    if (value === "coming-soon") {
      return (
        <div className="flex items-center justify-center gap-1">
          <Clock className="h-4 w-4 text-gray-400" />
          <span className="text-xs text-gray-500">Coming Soon</span>
        </div>
      );
    }
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-blue-500 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-gray-400 mx-auto" />
      );
    }
    return (
      <span 
        className="text-sm text-slate-600 leading-[150%] tracking-[-0.2px]" 
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {value}
      </span>
    );
  };

  return (
    <div className="mt-16">
      {/* Pricing Cards Row - aligned with table columns */}
      <div className="mb-8">
        <div className="grid grid-cols-4">
          {/* Header cell */}
          <div className="py-6 px-6 flex items-end">
          </div>
          {/* Pricing cards aligned with columns */}
          {plans.map((plan) => (
            <div key={plan.planName} className="p-4">
              <PricingCard
                {...plan}
                onCtaClick={
                  plan.planName === "Plus" ? onPlusClick : undefined
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 font-medium text-slate-800 w-1/4">
                </th>
                <th 
                  className="text-center py-4 px-4 font-medium text-slate-800 w-1/4 tracking-[-0.2px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Basic
                </th>
                <th 
                  className="text-center py-4 px-4 font-medium text-slate-800 w-1/4 tracking-[-0.2px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Plus
                </th>
                <th 
                  className="text-center py-4 px-4 font-medium text-slate-800 w-1/4 tracking-[-0.2px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Pro
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={feature.name}
                  className={`border-b border-gray-100 ${
                    index % 2 === 0 ? "bg-slate-50/50" : "bg-white"
                  }`}
                >
                  <td 
                    className={`py-4 px-6 font-medium text-slate-700 leading-[150%] tracking-[-0.3px] ${
                      feature.blur ? "blur-[3px] select-none" : ""
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {feature.name}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {renderFeatureValue(feature.basic)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {renderFeatureValue(feature.plus)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {renderFeatureValue(feature.pro)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PricingComparisonTable;