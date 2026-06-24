import * as React from "react";
import { cn } from "@/lib/utils";

export type GrowthChartIconProps = React.SVGProps<SVGSVGElement>;

const GrowthChartIcon: React.FC<GrowthChartIconProps> = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-5 h-5", className)}
      aria-hidden="true"
      {...props}
    >
      {/* Rising bars */}
      <rect x="3" y="15" width="4" height="6" rx="1.2" />
      <rect x="10" y="11" width="4" height="10" rx="1.2" />
      <rect x="17" y="13" width="4" height="8" rx="1.2" />

      {/* Upward curved arrow */}
      <path
        d="M3.5 11.5C7 7.5 12 6.5 17 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13.5 4.2L18 3.2L18.5 7.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GrowthChartIcon;