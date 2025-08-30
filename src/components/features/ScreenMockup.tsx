import * as React from "react";
import { cn } from "@/lib/utils";

export type ScreenMockupProps = {
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

const ScreenMockup: React.FC<ScreenMockupProps> = ({ imageSrc = "/placeholder.svg", imageAlt = "Product screen mockup", className }) => {
  return (
    <div
      className={cn(
        "feature-mockup relative w-full aspect-[3/2] rounded-xl overflow-hidden",
        "shadow-[0_32px_64px_rgba(10,13,18,0.18)] ring-1 ring-black/5 bg-white",
        className,
      )}
      role="img"
      aria-label={imageAlt}
    >
      <img src={imageSrc} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
    </div>
  );
};

export default React.memo(ScreenMockup);