import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import RandomIcon from "@/components/navbar/RandomIcon";
import { useInViewOnce } from "@/hooks/use-in-view-once";

export type FeatureItemProps = {
  label: string;
  title: string;
  description: string;
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
            <p className="feature-desc stagger-item">{description}</p>
          </div>

          <div
            className="flex items-center gap-2 stagger-item"
            role="group"
            aria-label={`${title} actions`}
          >
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg font-medium tracking-tight"
              onClick={onGetStarted}
              aria-label={`Get started with ${title}`}
            >
              Get started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-200 text-gray-900 hover:bg-gray-50 px-5 py-2.5 rounded-lg font-medium tracking-tight"
              aria-label={`Learn more about ${title}`}
            >
              Learn more
            </Button>
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
        "feature-item grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center lg:py-32",
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