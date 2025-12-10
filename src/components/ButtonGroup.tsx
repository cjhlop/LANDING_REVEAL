import * as React from "react";
import { Button } from "@/components/ui/button";
import { RandomIcon } from "@/components/Navbar";
import { cn } from "@/lib/utils";

export type ButtonGroupProps = {
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  primaryLabel = "Add",
  secondaryLabel = "Cancel",
  onPrimaryClick,
  onSecondaryClick,
  className,
}) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Primary Button */}
      <Button
        variant="default"
        onClick={onPrimaryClick}
        aria-label={primaryLabel}
        className="gap-2"
      >
        <RandomIcon className="size-4 text-white/80" title="Decorative icon" />
        <span>{primaryLabel}</span>
      </Button>

      {/* Secondary Button */}
      <Button
        variant="outline"
        onClick={onSecondaryClick}
        aria-label={secondaryLabel}
        className="gap-2"
      >
        <RandomIcon className="size-4 text-[#3875F6]" title="Decorative icon" />
        <span>{secondaryLabel}</span>
      </Button>
    </div>
  );
};

export default React.memo(ButtonGroup);