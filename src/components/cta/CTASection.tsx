import * as React from "react";
import ButtonGroup from "../ButtonGroup";
import { Rocket } from "lucide-react";

export type CTASectionProps = {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
};

const CTASection: React.FC<CTASectionProps> = ({
  eyebrow = "Website sections",
  title = (
    <>
      Get started with{" "}
      <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        DemandSense
      </span>
    </>
  ),
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
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-100">
              <Rocket className="h-4 w-4" />
              {eyebrow}
            </div>
            
            <h2
              id="cta-title"
              className="text-4xl md:text-5xl font-bold text-[#0F2043] mb-6 tracking-tight"
            >
              {title}
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
              size="lg"
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