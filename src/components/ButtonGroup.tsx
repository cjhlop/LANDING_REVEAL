import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ButtonGroupProps = {
  primaryLabel?: string;
  onPrimaryClick?: () => void;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon" | "hero";
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  primaryLabel = "Add",
  onPrimaryClick,
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
        className="bg-[#3875f6] hover:bg-blue-700"
      >
        {primaryLabel}
      </Button>
    </div>
  );
};

export default React.memo(ButtonGroup);