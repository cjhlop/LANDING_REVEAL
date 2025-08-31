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
  // Use viewport-based negative margins so the image truly bleeds past the screen edge.
  const sideClasses =
    bleed && bleedSide === "left"
      ? "lg:ml-[-10vw] xl:ml-[-12vw] 2xl:ml-[-15vw]"
      : bleed && bleedSide === "right"
        ? "lg:mr-[-10vw] xl:mr-[-12vw] 2xl:mr-[-15vw]"
        : "";

  // Pin the scale origin to the bleed side and scale hard on larger screens.
  const origin = bleedSide === "left" ? "origin-left" : "origin-right";
  const scaleClasses = bleed
    ? `${origin} lg:scale-[1.5] xl:scale-[1.7] 2xl:scale-[1.9]`
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