import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

const FeatureImage: React.FC<Props> = ({ src, alt, className }) => {
  return (
    <div className={cn("relative", className)}>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto rounded-xl shadow-lg"
        loading="lazy"
      />
    </div>
  );
};

export default React.memo(FeatureImage);