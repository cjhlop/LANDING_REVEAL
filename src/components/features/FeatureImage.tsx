import * as React from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type FeatureImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

const FeatureImage: React.FC<FeatureImageProps> = ({ src, alt = "Feature image", className }) => {
  return (
    <div className={cn("relative w-full", className)} role="img" aria-label={alt}>
      <AspectRatio ratio={16 / 9}>
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_10px_30px_rgba(17,24,39,0.08)]">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Inner hairline to mimic a device/frame edge */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" aria-hidden="true" />
        </div>
      </AspectRatio>
    </div>
  );
};

export default React.memo(FeatureImage);