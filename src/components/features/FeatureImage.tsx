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
    ? 'lg:scale-[3] fhd:scale-[2.25] lg:origin-right' 
    : 'lg:scale-[3] fhd:scale-[2.25] lg:origin-left';

  return (
    <div className={cn("relative magic-border", className)} style={{ '--magic-radius': '1rem' } as React.CSSProperties}>
      <div className="relative z-[1] rounded-2xl overflow-hidden">
        <img
          src={src}
          alt={alt}
          className={cn(
            "w-full h-auto transition-transform duration-500 ease-out",
            transformClasses
          )}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default React.memo(FeatureImage);