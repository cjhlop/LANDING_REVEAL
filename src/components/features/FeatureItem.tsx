import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";

export type FeatureItemProps = {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  imageSlot: React.ReactNode;
  imagePosition?: "left" | "right";
  className?: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
  imageSlot,
  imagePosition = "left",
  className,
}) => {
  // Scroll-in animations
  const [imgRef, imgInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -12% 0px",
  });
  const [copyRef, copyInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -12% 0px",
  });

  const imgReveal =
    "reveal " +
    (imagePosition === "left" ? "reveal-fade-left" : "reveal-fade-right") +
    (imgInView ? " is-inview" : "");

  const copyReveal = "reveal reveal-fade-up" + (copyInView ? " is-inview" : "");

  const content = (
    <div ref={copyRef} className={`${copyReveal} relative z-10`} aria-live="polite">
      <div className={"stagger" + (copyInView ? " is-inview" : "")}>
        <div className="feature-icon-badge stagger-item" aria-hidden="true">
          {icon}
        </div>

        <div className="mt-4 space-y-3">
          <h3 className="feature-title stagger-item">{title}</h3>
          <div className="feature-desc stagger-item">{description}</div>
        </div>
      </div>
    </div>
  );

  const imageWrapped = (
    <div
      ref={imgRef}
      className={cn(
        imgReveal,
        "relative z-0",
      )}
      aria-hidden="true"
    >
      {imageSlot}
    </div>
  );

  return (
    <article
      className={cn(
        "feature-item grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center",
        className,
      )}
      role="article"
      aria-label={title}
    >
      {imagePosition === "left" ? (
        <>
          {imageWrapped}
          {content}
        </>
      ) : (
        <>
          {content}
          {imageWrapped}
        </>
      )}
    </article>
  );
};

export default React.memo(FeatureItem);