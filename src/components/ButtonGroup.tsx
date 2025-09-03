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
      {/* Primary Button (Add) - Active/hovered style from screenshot */}
      <Button
        className="h-10 px-4 rounded-lg bg-[#3875F6] hover:bg-[#2c5cc5] text-white font-medium tracking-tight inline-flex items-center justify-center gap-2"
        onClick={onPrimaryClick}
        aria-label={primaryLabel}
      >
        <RandomIcon className="size-4 text-white/80" title="Decorative icon" />
        <span>{primaryLabel}</span>
      </Button>

      {/* Secondary Button (Cancel) - Now with transparent background */}
      <Button
        variant="outline"
        className="h-10 px-4 rounded-lg border-[#3875F6] bg-transparent text-[#3875F6] hover:bg-blue-500/10 hover:text-[#3875F6] font-medium tracking-tight inline-flex items-center justify-center gap-2"
        onClick={onSecondaryClick}
        aria-label={secondaryLabel}
      >
        <RandomIcon className="size-4 text-[#3875F6]" title="Decorative icon" />
        <span>{secondaryLabel}</span>
      </Button>
    </div>
  );
};

export default React.memo(ButtonGroup);