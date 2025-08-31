import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  position?: "left" | "right";
};

const FeatureImage: React.FC<Props> = ({ src, alt, className, position = "left" }) => {
  // These transforms create the "bleed" effect by scaling the image up
  // and moving it outwards from the center of its grid column.
  // The effect is only applied on large screens (lg and up).
  const transformClasses = position === 'left' 
    ? 'lg:scale-200 lg:-translate-x-1/4' 
    : 'lg:scale-200 lg:translate-x-1/4';

  return (
    <div className={cn("relative", className)}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-auto shadow-xl ring-1 ring-gray-900/10 transition-transform duration-500 ease-out",
          transformClasses
        )}
        loading="lazy"
      />
    </div>
  );
};

export default React.memo(FeatureImage);