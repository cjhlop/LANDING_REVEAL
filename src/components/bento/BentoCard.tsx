import * as React from "react";
import { cn } from "@/lib/utils";
import RandomIcon from "@/components/navbar/RandomIcon";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useInViewOnce } from "@/hooks/use-in-view-once";

export type BentoCardProps = {
  title: string;
  description: string;
  media: React.ReactNode;
  className?: string;
  mediaClassName?: string;
  id?: string;
  defaultExpanded?: boolean;
  footer?: React.ReactNode;
  appearFrom?: "left" | "right"; // direction for card entrance
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
  appearFrom = "left",
}) => {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = React.useState<boolean>(defaultExpanded ?? true);

  // Animate the whole card when it enters the viewport (gentle slide from left/right)
  const [cardRef, cardInView] = useInViewOnce<HTMLElement>({
    threshold: 0.15,
    root: null,
    rootMargin: "0px 0px -12% 0px",
  });

  // Animate the inner content only once the card is almost fully visible (rise from bottom)
  const [bodyRef, bodyInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.9,
    root: null,
    rootMargin: "0px 0px 0px 0px",
  });

  React.useEffect(() => {
    setExpanded(defaultExpanded ?? !isMobile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  const contentId = id ? `${id}-content` : undefined;

  const cardReveal =
    "reveal " +
    (appearFrom === "left" ? "reveal-fade-left" : "reveal-fade-right") +
    (cardInView ? " is-inview" : "");

  const bodyReveal = "reveal reveal-fade-up" + (bodyInView ? " is-inview" : "");

  return (
    <article
      ref={cardRef}
      className={cn("bento-card", className, cardReveal)}
      role="article"
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      {/* Full-bleed background media */}
      <div className={cn("bento-card-media", mediaClassName)} aria-hidden="true">
        {media}
      </div>
      {/* Subtle bottom gradient for text readability */}
      <div className="bento-card-overlay" aria-hidden="true" />

      {/* Foreground content */}
      <div ref={bodyRef} className={cn("bento-card-body", bodyReveal)}>
        <div className="flex items-start gap-2">
          <div className="bento-title-icon" aria-hidden="true">
            <RandomIcon className="size-5 text-gray-500" title="Decorative icon" />
          </div>
          <h3 id={id ? `${id}-title` : undefined} className="bento-card-title">
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

        {/* Mobile toggle */}
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