import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ButtonGroupProps = {
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon" | "hero";
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  primaryLabel = "Add",
  secondaryLabel = "Cancel",
  onPrimaryClick,
  onSecondaryClick,
  className,
  size = "default",
}) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Primary Button */}
      <Button
        variant="default"
        size={size}
        onClick={onPrimaryClick}
        aria-label={primaryLabel}
      >
        {primaryLabel}
      </Button>

      {/* Secondary Button */}
      <Button
        variant="outline"
        size={size}
        onClick={onSecondaryClick}
        aria-label={secondaryLabel}
      >
        {secondaryLabel}
      </Button>
    </div>
  );
};

export default React.memo(ButtonGroup);