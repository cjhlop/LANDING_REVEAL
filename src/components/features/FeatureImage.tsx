import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

const FeatureImage: React.FC<Props> = ({ src, alt, className }) => {
  return (
    <div className={cn(
      "relative magic-border rounded-2xl",
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