import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import RotatedCoverImage from "./RotatedCoverImage";

export type BentoCardProps = {
  title: string;
  description: React.ReactNode;
  media: React.ReactNode;
  className?: string;
  mediaClassName?: string;
  id?: string;
  defaultExpanded?: boolean;
  footer?: React.ReactNode;
  appearFrom?: "left" | "right";
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
  const [hovered, setHovered] = React.useState(false);

  const [cardRef, cardInView] = useInViewOnce<HTMLElement>({
    threshold: 0.15,
    root: null,
    rootMargin: "0px 0px -12% 0px",
  });

  const [bodyRef, bodyInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.9,
    root: null,
    rootMargin: "0px 0px 0px 0px",
  });

  React.useEffect(() => {
    setExpanded(defaultExpanded ?? !isMobile);
  }, [isMobile, defaultExpanded]);

  const contentId = id ? `${id}-content` : undefined;

  const cardReveal =
    "reveal " +
    (appearFrom === "left" ? "reveal-fade-left" : "reveal-fade-right") +
    (cardInView ? " is-inview" : "");

  const bodyReveal = "reveal reveal-fade-up" + (bodyInView ? " is-inview" : "");

  const mediaWithHover = React.useMemo(() => {
    if (React.isValidElement(media) && media.type === RotatedCoverImage) {
      return React.cloneElement(media as React.ReactElement<any>, { hovered });
    }
    return media;
  }, [media, hovered]);

  return (
    <article
      ref={cardRef}
      className={cn(
        "bento-card group relative rounded-2xl overflow-hidden h-[500px] flex flex-col transition-all duration-300",
        "bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300",
        className,
        cardReveal
      )}
      role="article"
      aria-labelledby={id ? `${id}-title` : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Full-bleed background media */}
      <div className={cn("bento-card-media absolute inset-0", mediaClassName)} aria-hidden="true">
        {mediaWithHover}
      </div>

      {/* Refined gradient overlay for better text readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Foreground content */}
      <div ref={bodyRef} className={cn("relative z-10 p-8 mt-auto", bodyReveal)}>
        <div className="stagger" style={{ opacity: bodyInView ? 1 : 0 }}>
          {/* Title with improved typography */}
          <h3 
            id={id ? `${id}-title` : undefined} 
            className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight stagger-item"
          >
            {title}
          </h3>

          {/* Description with better spacing */}
          <div
            id={contentId}
            className={cn(
              "text-base leading-relaxed text-gray-700 stagger-item",
              expanded ? "expanded" : "collapsed"
            )}
            aria-live="polite"
          >
            <div className="space-y-3">{description}</div>
            {footer ? <div className="mt-4">{footer}</div> : null}
          </div>

          {/* Mobile toggle with refined styling */}
          <div className="mt-4 md:hidden stagger-item">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="h-9 px-4 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 rounded-lg transition-all duration-200"
              aria-controls={contentId}
              aria-expanded={expanded}
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? "Show less" : "Show more"}
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default React.memo(BentoCard);