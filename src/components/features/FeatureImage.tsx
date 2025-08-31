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
  // Stronger negative margins so the frame crosses the container and reaches (or passes) the viewport edge.
  const sideClasses =
    bleed && bleedSide === "left"
      ? "lg:ml-[-200px] xl:ml-[-320px] 2xl:ml-[-18vw]"
      : bleed && bleedSide === "right"
        ? "lg:mr-[-200px] xl:mr-[-320px] 2xl:mr-[-18vw]"
        : "";

  // Scale harder so it feels intentionally oversized (origin pinned to bleed side).
  const origin = bleedSide === "left" ? "origin-left" : "origin-right";
  const scaleClasses = bleed
    ? `${origin} lg:scale-[1.25] xl:scale-[1.40] 2xl:scale-[1.55]`
    : "";

  return (
    <div
      className={cn("relative w-full max-w-none", className, sideClasses)}
      role="img"
      aria-label={alt}
    >
      <AspectRatio ratio={16 / 9}>
        {/* Soft glow for premium feel (follows bleed side) */}
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
            {/* Inner hairline to mimic device/frame edge */}
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