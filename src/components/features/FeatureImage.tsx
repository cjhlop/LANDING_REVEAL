import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  position?: "left" | "right";
};

const FeatureImage: React.FC<Props> = ({ src, alt, className, position = "left" }) => {
  // Use transform-origin to control the direction of the scale.
  // An image on the left will scale from its right edge (origin-right), expanding leftwards.
  // An image on the right will scale from its left edge (origin-left), expanding rightwards.
  const transformClasses = position === 'left' 
    ? 'group-hover:lg:scale-[3] group-hover:fhd:scale-[2.25] lg:origin-right' 
    : 'group-hover:lg:scale-[3] group-hover:fhd:scale-[2.25] lg:origin-left';

  return (
    <div className={cn(
      "relative magic-border rounded-2xl transition-transform duration-500 ease-out",
      transformClasses,
      className
    )}>
      <img
        src={src}
        alt={alt}
        className="relative z-[1] w-full h-auto rounded-2xl"
        loading="lazy"
      />
    </div>
  );
};

export default React.memo(FeatureImage);