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
    <div
      className={cn("relative magic-border", className)}
      // The border-radius for rounded-lg is 0.5rem. We set it here for the magic-border effect.
      style={{ '--magic-radius': '0.5rem' } as React.CSSProperties}
    >
      <div className="relative z-[1] w-full h-full rounded-lg overflow-hidden ring-1 ring-gray-900/10">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default React.memo(FeatureImage);