import { Check, X } from "lucide-react";
import PricingCard from "./PricingCard";

const features = [
  {
    name: "Ad Scheduling / Frequency Cap / Budget Control / Audience Tuning",
    starter: true,
    growth: true,
    pro: true,
  },
  {
    name: "Performance Overview & Hourly Breakdown",
    starter: true,
    growth: true,
    pro: true,
  },
  {
    name: "Multichannel Insights",
    starter: true,
    growth: true,
    pro: true,
  },
  {
    name: "Audience Insights",
    starter: false,
    growth: true,
    pro: true,
  },
  {
    name: "Website Visitor Identification",
    starter: false,
    growth: "2 credits per identified visitor",
    pro: "2 credits per identified visitor",
  },
  {
    name: "Audience Explorer",
    starter: false,
    growth: "1 credit per contact",
    pro: "1 credit per contact",
  },
  {
    name: "AI Co-Pilot",
    starter: "4 credits per query",
    growth: "4 credits per query",
    pro: "4 credits per query",
  },
  {
    name: "Influenced Revenue & Attribution Reports",
    starter: false,
    growth: false,
    pro: "Early access",
  },
  {
    name: "Refresh Cycle",
    starter: "Every 24h",
    growth: "Every 24h",
    pro: "Every 24h",
  },
];

const plans = [
  {
    planName: "Starter",
    price: "99",
    monthlyCredits: "400",
    subtitle: "Everything you need to start optimizing LinkedIn ads.",
    ctaText: "Start Trial",
  },
  {
    planName: "Growth",
    price: "149",
    monthlyCredits: "1,350",
    isFeatured: true,
    subtitle: "Smarter insights and stronger targeting for scaling teams.",
    ctaText: "Start Trial",
  },
  {
    planName: "Pro",
    price: "249",
    monthlyCredits: "3,000",
    subtitle: "The complete toolkit for performance-driven marketers.",
    ctaText: "Start Trial",
  },
];

type PricingComparisonTableProps = {
  onProClick?: () => void;
};

const PricingComparisonTable = ({ onProClick }: PricingComparisonTableProps) => {
  const renderFeatureValue = (value: boolean | string) => {
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
                  plan.planName === "Pro" ? onProClick : undefined
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
                  Starter
                </th>
                <th 
                  className="text-center py-4 px-4 font-medium text-slate-800 w-1/4 tracking-[-0.2px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Growth
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
                    className="py-4 px-6 font-medium text-slate-700 leading-[150%] tracking-[-0.3px]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {feature.name}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {renderFeatureValue(feature.starter)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {renderFeatureValue(feature.growth)}
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