import * as React from "react";
import ButtonGroup from "../ButtonGroup";

export type CTASectionProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
};

const CTASection: React.FC<CTASectionProps> = ({
  eyebrow = "Website sections",
  title = "Get started with DemandSense",
  subtitle = "Get everything you need to build beautiful websites quickly and effortlessly.",
  primaryLabel = "Get started",
  secondaryLabel = "Learn more",
  onPrimaryClick,
  onSecondaryClick,
  className,
}) => {
  const handlePrimary = React.useCallback(() => {
    if (onPrimaryClick) return onPrimaryClick();
    document.dispatchEvent(new CustomEvent("open-get-access"));
  }, [onPrimaryClick]);

  const handleSecondary = React.useCallback(() => {
    if (onSecondaryClick) return onSecondaryClick();
    if (typeof window !== "undefined") {
      const id = "features-heading";
      const el = document.getElementById(id);
      if (el && "scrollIntoView" in el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.hash = "#features";
      }
    }
  }, [onSecondaryClick]);

  return (
    <section
      className={`w-full bg-white px-[112px] py-16 md:py-[64px] ${className ?? ""}`}
      role="region"
      aria-labelledby="cta-title"
    >
      <div className="max-w-[1216px] mx-auto">
        <div
          className="cta-card w-full rounded-2xl px-5 md:px-5 py-20 md:py-20 flex flex-col items-center text-center"
          role="group"
          aria-label="Call to action"
        >
          {/* Header stack */}
          <div className="max-w-[553px] mx-auto">
            <p
              className="text-[14px] leading-5 tracking-[1.3px] uppercase text-[#ABABAB] font-['DM Mono']"
              aria-label={eyebrow}
            >
              {eyebrow}
            </p>
            <h2
              id="cta-title"
              className="mt-3 text-[40px] leading-[120%] tracking-[-1.5px] text-black font-medium font-sans"
            >
              {title}
            </h2>
            <p className="mt-3 text-[16px] leading-[150%] tracking-[-0.3px] text-[#7C7C7C]">
              {subtitle}
            </p>
          </div>

          {/* Actions */}
          <div
            className="mt-10"
            role="group"
            aria-label="Primary actions"
          >
            <ButtonGroup
              primaryLabel={primaryLabel}
              secondaryLabel={secondaryLabel}
              onPrimaryClick={handlePrimary}
              onSecondaryClick={handleSecondary}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(CTASection);