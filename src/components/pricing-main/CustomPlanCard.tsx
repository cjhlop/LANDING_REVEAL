import { Button } from "@/components/ui/button";
import { Check, Building2 } from "lucide-react";

type CustomPlanCardProps = {
  planName: string;
  subtitle: string;
  features: string[];
  ctaText: string;
};

const CustomPlanCard = ({
  planName,
  subtitle,
  features,
  ctaText,
}: CustomPlanCardProps) => {
  return (
    <div className="rounded-2xl p-8 w-full bg-white border border-gray-200">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        {/* Info section */}
        <div className="flex-shrink-0 lg:w-1/4">
          <div className="flex items-center gap-x-4">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
              <Building2 className="text-white" />
            </div>
            <h3 className="text-slate-900 font-semibold tracking-wide uppercase">
              {planName}
            </h3>
          </div>
          <p className="mt-4 text-base font-semibold text-slate-800">
            {subtitle}
          </p>
        </div>

        {/* Features section */}
        <div className="flex-1">
          <ul
            role="list"
            className="space-y-4 text-sm leading-6 text-slate-600 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0"
          >
            {features.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <Check
                  className="h-6 w-5 flex-none text-blue-500"
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="flex-shrink-0">
          <Button
            variant="outline"
            className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 h-12 text-base font-semibold px-8"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomPlanCard;