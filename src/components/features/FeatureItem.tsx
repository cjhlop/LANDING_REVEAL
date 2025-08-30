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
  const IconMemo = React.useMemo(() => <RandomIcon className="size-5 text-gray-700" title="Random feature icon" />, []);

  const onGetStarted = () => {
    document.dispatchEvent(new CustomEvent("open-get-access"));
  };

  const content = (
    <div className="feature-copy" aria-live="polite">
      <div className="feature-icon-badge" aria-hidden="true">
        {IconMemo}
      </div>

      <div className="mt-4 space-y-7">
        <div className="space-y-3">
          <p className="feature-label">{label}</p>
          <h3 className="feature-title">{title}</h3>
          <p className="feature-desc">{description}</p>
        </div>

        <div className="flex items-center gap-3" role="group" aria-label={`${title} actions`}>
          <Button
            size="sm"
            className="h-9 rounded-full bg-gray-900 text-white hover:bg-gray-800"
            onClick={onGetStarted}
            aria-label={`Get started with ${title}`}
          >
            Get started
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="h-9 rounded-full border-gray-200 text-gray-900 hover:bg-gray-50"
            aria-label={`Learn more about ${title}`}
          >
            Learn more
          </Button>
        </div>
      </div>
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
          {imageSlot}
          {content}
        </>
      ) : (
        <>
          {content}
          {imageSlot}
        </>
      )}
    </article>
  );
};

export default React.memo(FeatureItem);