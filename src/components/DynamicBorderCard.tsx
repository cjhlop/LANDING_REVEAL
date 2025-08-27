import React from "react";
import { cn } from "@/lib/utils";

type DynamicBorderCardProps = {
  className?: string;
  children?: React.ReactNode;
};

const DynamicBorderCard: React.FC<DynamicBorderCardProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "dynamic-border relative overflow-hidden rounded-[10px] bg-black/75 flex items-center justify-center",
        className
      )}
      role="img"
      aria-label="Dynamic border showcase"
    >
      {/* Inner cover to create the border effect gap */}
      <div className="absolute inset-[5px] rounded-[8px] bg-[#181818] z-[1]" />
      {/* Content layer */}
      <div className="relative z-[2] w-full h-full flex items-center justify-center px-6">
        {children}
      </div>
    </div>
  );
};

export default DynamicBorderCard;