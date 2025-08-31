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
  // We now use ONLY transforms to control bleed direction (no negative margins).
  const sideClasses = ""; // layout remains stable; overflow is clipped by the section

  // Pin the scale origin to the bleed side and scale on large screens.
  const origin = bleedSide === "left" ? "origin-left" : "origin-right";
  const scaleClasses = bleed
    ? `${origin} lg:scale-[1.5] xl:scale-[1.7] 2xl:scale-[1.9]`
    : "";

  // Translate content toward the bleed side so the enlarged image actually exits the viewport.
  const translateClasses = bleed
    ? bleedSide === "left"
      ? "lg:-translate-x-[6vw] xl:-translate-x-[8vw] 2xl:-translate-x-[10vw]"
      : "lg:translate-x-[6vw] xl:translate-x-[8vw] 2xl:translate-x-[10vw]"
    : "";

  return (
    <div
      className={cn("relative w-full max-w-none", className, sideClasses)}
      role="img"
      aria-label={alt}
    >
      <AspectRatio ratio={16 / 9}>
        {/* Soft premium glow following bleed direction */}
        {bleed ? (
          <div
            className={cn(
              "pointer-events-none absolute -inset-8 rounded-2xl blur-2xl",
              bleedSide === "left"
                ? "bg-gradient-to-r from-sky-400/10 to-orange-300/10"
                : "bg-gradient-to-l from-orange-300/10 to-sky-400/10",
            )}
            aria-hidden="true"
          />
        ) : null}

        <div
          className={cn(
            "relative h-full w-full overflow-visible transform-gpu transition-transform",
            scaleClasses,
            translateClasses,
          )}
        >
          <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_16px_48px_rgba(17,24,39,0.12)]">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            {/* Inner hairline to mimic a device/frame edge */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5"
              aria-hidden="true"
            />
          </div>
        </div>
      </AspectRatio>
    </div>
  );
};

export default React.memo(FeatureImage);