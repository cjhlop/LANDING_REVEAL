import * as React from "react";
import { cn } from "@/lib/utils";

type FeatureImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

const FeatureImage: React.FC<FeatureImageProps> = ({ src, alt = "Feature image", className }) => {
  return (
    <div
      className={cn(
        "feature-img rounded-2xl overflow-hidden w-full h-[463px] md:h-[420px] sm:h-[320px]",
        className,
      )}
      role="img"
      aria-label={alt}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </div>
  );
};

export default React.memo(FeatureImage);