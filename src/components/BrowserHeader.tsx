import * as React from "react";
import { cn } from "@/lib/utils";

type BrowserHeaderProps = {
  title: string;
  className?: string;
};

const BrowserHeader: React.FC<BrowserHeaderProps> = ({ title, className }) => {
  return (
    <div
      className={cn(
        "w-full bg-gray-50/90 border-b border-gray-200 rounded-t-xl",
        "px-4 py-2 flex items-center gap-3",
        "backdrop-blur-sm"
      , className)}
      role="group"
      aria-label={`${title} window header`}
    >
      {/* Traffic lights */}
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="inline-block h-3 w-3 rounded-full bg-red-400 ring-1 ring-red-300/60" />
        <span className="inline-block h-3 w-3 rounded-full bg-yellow-400 ring-1 ring-yellow-300/60" />
        <span className="inline-block h-3 w-3 rounded-full bg-green-400 ring-1 ring-green-300/60" />
      </div>

      {/* Centered title chip */}
      <div className="flex-1 flex justify-center">
        <div className="max-w-[60%] truncate px-3 py-1.5 rounded-md bg-white border border-gray-200 text-sm font-medium text-gray-700">
          {title}
        </div>
      </div>

      {/* Spacer to balance the lights on the right */}
      <div className="w-10" aria-hidden="true" />
    </div>
  );
};

export default React.memo(BrowserHeader);