import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  alt?: string;
};

const FeatureImagePlaceholder: React.FC<Props> = ({ className, alt = "Feature illustration placeholder" }) => {
  return (
    <div
      className={cn(
        "feature-img bg-gray-100 rounded-2xl w-full h-[463px] md:h-[420px] sm:h-[320px] flex items-center justify-center",
        className,
      )}
      role="img"
      aria-label={alt}
    >
      <div className="flex items-center gap-4 opacity-50">
        <div className="h-10 w-10 rounded-full bg-gray-300" />
        <div className="feature-triangle" aria-hidden="true" />
        <div className="h-10 w-10 bg-gray-300 rounded-md" />
      </div>
    </div>
  );
};

export default React.memo(FeatureImagePlaceholder);