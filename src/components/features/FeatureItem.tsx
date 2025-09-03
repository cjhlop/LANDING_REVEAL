import * as React from "react";
import { cn } from "@/lib/utils";
import RandomIcon from "@/components/navbar/RandomIcon";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import ButtonGroup from "../ButtonGroup";

export type FeatureItemProps = {
  label: string;
  title: string;
  description: React.ReactNode;
  imageSlot: React.ReactNode;
  imagePosition?: "left" | "right";
  className?: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({
  label,
  title,
  description,
  imageSlot,
  imagePosition = "left",
  className,
}) => {
  const IconMemo = React.useMemo(
    () => <RandomIcon className="size-5 text-gray-700" title="Random feature icon" />,
    [],
  );

  const onGetStarted = () => {
    document.dispatchEvent(new CustomEvent("open-get-access"));
  };

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
          {IconMemo}
        </div>

        <div className="mt-4 space-y-7">
          <div className="space-y-3">
            <p className="feature-label stagger-item">{label}</p>
            <h3 className="feature-title stagger-item">{title}</h3>
            <div className="feature-desc stagger-item">{description}</div>
          </div>

          <div
            className="stagger-item"
            role="group"
            aria-label={`${title} actions`}
          >
            <ButtonGroup
              primaryLabel="Get started"
              secondaryLabel="Learn more"
              onPrimaryClick={onGetStarted}
            />
          </div>
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