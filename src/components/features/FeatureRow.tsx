import * as React from "react";
import FeaturedIcon, { FeaturedIconName } from "./FeaturedIcon";
import FeatureChecklist from "./FeatureChecklist";
import ScreenMockup from "./ScreenMockup";
import { cn } from "@/lib/utils";

export type FeatureRowProps = {
  title: string;
  description: string;
  bullets: string[];
  mockup?: { imageSrc?: string; imageAlt?: string };
  reverse?: boolean;
  iconName?: FeaturedIconName;
  className?: string;
  id?: string;
};

const FeatureRow: React.FC<FeatureRowProps> = ({
  title,
  description,
  bullets,
  mockup,
  reverse = false,
  iconName,
  className,
  id,
}) => {
  return (
    <section
      id={id}
      className={cn("feature-row grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center", className)}
      role="region"
      aria-labelledby={`${id ?? title}-heading`}
    >
      <div className={cn("flex flex-col gap-6", reverse ? "order-2 lg:order-1" : "order-1")}>
        <div className="flex flex-col gap-6">
          <FeaturedIcon name={iconName} title={`${title} icon`} aria-hidden />
          <div className="flex flex-col gap-3">
            <h3 id={`${id ?? title}-heading`} className="text-[30px] leading-[38px] font-semibold text-[#181D27] tracking-[-0.01em]">
              {title}
            </h3>
            <p className="text-[18px] leading-[28px] text-[#535862]">{description}</p>
          </div>
        </div>
        <FeatureChecklist items={bullets} />
      </div>

      <div className={cn(reverse ? "order-1 lg:order-2" : "order-2")}>
        <ScreenMockup imageSrc={mockup?.imageSrc} imageAlt={mockup?.imageAlt} />
      </div>
    </section>
  );
};

export default React.memo(FeatureRow);