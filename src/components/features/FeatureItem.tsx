import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import RandomIcon from "@/components/navbar/RandomIcon";

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

  const content = (
    <div className="relative z-10" aria-live="polite">
      <div>
        <div className="feature-icon-badge" aria-hidden="true">
          {IconMemo}
        </div>

        <div className="mt-4 space-y-7">
          <div className="space-y-3">
            <p className="feature-label">{label}</p>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-desc">{description}</p>
          </div>

          <div
            className="flex items-center gap-2"
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
      className="relative z-0"
      aria-hidden="true"
    >
      {imageSlot}
    </div>
  );

  return (
    <article
      className={cn(
        "feature-item group grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center",
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