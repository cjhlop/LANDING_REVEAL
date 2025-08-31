import * as React from "react";
import { cn } from "@/lib/utils";

type RotatedCoverImageProps = {
  src: string;
  alt?: string;
  rotationDeg?: number;
  coverPercent?: number; // wrapper size relative to card to ensure coverage when rotated
  className?: string;
  opacity?: number; // 0 to 1
};

const RotatedCoverImage: React.FC<RotatedCoverImageProps> = ({
  src,
  alt = "",
  rotationDeg = 45,
  coverPercent = 165, // ~1.65x to comfortably cover at 45deg
  className,
  opacity = 1,
}) => {
  return (
    <div
      className={cn("absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
      style={{ opacity }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: `${coverPercent}%`,
          height: `${coverPercent}%`,
          transform: `translate(-50%, -50%) rotate(${rotationDeg}deg)`,
          transformOrigin: "center center",
        }}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default React.memo(RotatedCoverImage);