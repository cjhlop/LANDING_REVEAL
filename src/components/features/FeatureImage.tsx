import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  position?: "left" | "right";
};

const FeatureImage: React.FC<Props> = ({ src, alt, className }) => {
  return (
    <div className={cn("relative", className)}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-auto rounded-lg ring-1 ring-gray-900/10",
        )}
        loading="lazy"
      />
    </div>
  );
};

export default React.memo(FeatureImage);