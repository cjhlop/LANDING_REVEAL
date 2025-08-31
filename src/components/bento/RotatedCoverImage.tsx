import * as React from "react";
import { cn } from "@/lib/utils";

type RotatedCoverImageProps = {
  src: string;
  alt?: string;
  rotationDeg?: number;
  coverPercent?: number; // wrapper size relative to card to ensure coverage when rotated
  className?: string;
  opacity?: number; // base opacity (0 to 1)
  hovered?: boolean; // controlled hover state from parent
  hoverOpacity?: number; // target opacity on hover (0 to 1)
  hoverZoomScale?: number; // scale on hover
};

const RotatedCoverImage: React.FC<RotatedCoverImageProps> = ({
  src,
  alt = "",
  rotationDeg = 45,
  coverPercent = 165, // ~1.65x to comfortably cover at 45deg
  className,
  opacity = 1,
  hovered = false,
  hoverOpacity,
  hoverZoomScale = 1.08,
}) => {
  const effectiveOpacity = hovered && typeof hoverOpacity === "number" ? hoverOpacity : opacity;

  return (
    <div
      className={cn("absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
      style={{
        opacity: effectiveOpacity,
        transition: "opacity 600ms var(--ease-out-quart)",
        willChange: "opacity",
      }}
    >
      {/* Scale wrapper so we don't clobber the rotate+translate transform */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: `${coverPercent}%`,
          height: `${coverPercent}%`,
          transform: `translate(-50%, -50%) scale(${hovered ? hoverZoomScale : 1})`,
          transformOrigin: "center center",
          transition: "transform 800ms var(--ease-out-quart)",
          willChange: "transform",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: `rotate(${rotationDeg}deg)`,
            transformOrigin: "center center",
          }}
        >
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(RotatedCoverImage);