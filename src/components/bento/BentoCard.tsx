import * as React from "react";
import { cn } from "@/lib/utils";
import RandomIcon from "@/components/navbar/RandomIcon";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export type BentoCardProps = {
  title: string;
  description: string;
  media: React.ReactNode;
  className?: string;
  mediaClassName?: string;
  id?: string;
  defaultExpanded?: boolean;
  footer?: React.ReactNode; // optional CTA or form
};

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  description,
  media,
  className,
  mediaClassName,
  id,
  defaultExpanded,
  footer,
}) => {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = React.useState<boolean>(defaultExpanded ?? true);

  React.useEffect(() => {
    // Collapse description by default on mobile, expand on larger screens
    setExpanded(defaultExpanded ?? !isMobile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  const contentId = id ? `${id}-content` : undefined;

  return (
    <article
      className={cn("bento-card", className)}
      role="article"
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <div className={cn("bento-card-media", mediaClassName)} aria-hidden="true">
        {media}
      </div>

      <div className="bento-card-body">
        <div className="flex items-start gap-2">
          <div className="bento-title-icon" aria-hidden="true">
            <RandomIcon className="size-5 text-gray-500" title="Decorative icon" />
          </div>
          <h3
            id={id ? `${id}-title` : undefined}
            className="bento-card-title"
          >
            {title}
          </h3>
        </div>

        <div
          id={contentId}
          className={cn("bento-card-desc", expanded ? "expanded" : "collapsed")}
          aria-live="polite"
        >
          <p className="bento-card-desc-text">{description}</p>
          {footer ? <div className="mt-3">{footer}</div> : null}
        </div>

        {/* Mobile toggle for description visibility */}
        <div className="mt-3 md:hidden">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="h-8 px-3 border-gray-200 text-gray-900 hover:bg-gray-50 rounded-md"
            aria-controls={contentId}
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Hide details" : "Show details"}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default React.memo(BentoCard);