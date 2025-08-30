import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type FeatureChecklistProps = {
  items: string[];
  className?: string;
};

const FeatureChecklist: React.FC<FeatureChecklistProps> = ({ items, className }) => {
  return (
    <ul className={cn("feature-checklist space-y-3 pl-4", className)} role="list" aria-label="Key capabilities">
      {items.map((text, idx) => (
        <li key={idx} className="flex items-start gap-3" role="listitem">
          <span
            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(105,65,198,0.10)] ring-1 ring-[rgba(105,65,198,0.18)] mt-[2px] flex-shrink-0"
            aria-hidden="true"
          >
            <Check className="h-4 w-4 text-[#6941C6]" />
          </span>
          <span className="text-[18px] leading-7 text-[#535862]">{text}</span>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(FeatureChecklist);