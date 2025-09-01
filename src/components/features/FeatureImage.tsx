import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  position?: "left" | "right";
};

const FeatureImage: React.FC<Props> = ({ src, alt, className, position = "left" }) => {
  // On large screens, scale the image and pull it towards the edge of the screen
  // to create a "bleed" effect.
  const transformClasses = position === 'left' 
    ? 'lg:scale-125 lg:-translate-x-1/4' 
    : 'lg:scale-125 lg:translate-x-1/4';

  return (
    <div className={cn("relative", className)}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-auto rounded-lg ring-1 ring-gray-900/10",
          transformClasses
        )}
        loading="lazy"
      />
    </div>
  );
};

export default React.memo(FeatureImage);