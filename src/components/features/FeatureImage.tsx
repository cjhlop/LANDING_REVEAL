import * as React from "react";
import { cn } from "@/lib/utils";

type FeatureImageProps = {
  src: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
};

const FeatureImage: React.FC<FeatureImageProps> = ({
  src,
  alt = "",
  className,
  imgClassName,
}) => {
  return (
    <div
      className={cn(
        "w-full h-[463px] md:h-[420px] sm:h-[320px] rounded-2xl overflow-hidden ring-1 ring-gray-200 bg-white",
        className,
      )}
      role="img"
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        className={cn("w-full h-full object-cover", imgClassName)}
        loading="lazy"
      />
    </div>
  );
};

export default React.memo(FeatureImage);