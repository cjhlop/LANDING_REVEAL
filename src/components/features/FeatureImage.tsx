import * as React from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type FeatureImageProps = {
  src: string;
  alt?: string;
  className?: string;
  bleed?: boolean;
  bleedSide?: "left" | "right";
};

const FeatureImage: React.FC<FeatureImageProps> = ({
  src,
  alt = "Feature image",
  className,
  bleed = false,
  bleedSide = "right",
}) => {
  const sideClasses =
    bleed && bleedSide === "left"
      ? "lg:ml-[-64px] xl:ml-[-96px] 2xl:ml-[-128px]"
      : bleed && bleedSide === "right"
        ? "lg:mr-[-64px] xl:mr-[-96px] 2xl:mr-[-128px]"
        : "";

  const origin = bleedSide === "left" ? "origin-left" : "origin-right";

  return (
    <div
      className={cn("relative w-full", className, sideClasses)}
      role="img"
      aria-label={alt}
    >
      <AspectRatio ratio={16 / 9}>
        {/* Subtle glow behind for premium feel */}
        {bleed ? (
          <div
            className={cn(
              "pointer-events-none absolute -inset-6 rounded-2xl blur-2xl",
              bleedSide === "left" ? "bg-gradient-to-r from-sky-400/10 to-orange-300/10" : "bg-gradient-to-l from-orange-300/10 to-sky-400/10",
            )}
            aria-hidden="true"
          />
        ) : null}

        <div
          className={cn(
            "relative h-full w-full overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_10px_30px_rgba(17,24,39,0.08)] transform-gpu transition-transform",
            bleed ? `${origin} lg:scale-[1.06] xl:scale-[1.1]` : "",
          )}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Inner hairline to mimic a device/frame edge */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5"
            aria-hidden="true"
          />
        </div>
      </AspectRatio>
    </div>
  );
};

export default React.memo(FeatureImage);