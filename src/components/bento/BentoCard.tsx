import * as React from "react";
import { cn } from "@/lib/utils";
import RandomIcon from "@/components/navbar/RandomIcon";
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
  const [hovered, setHovered] = React.useState(false);

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
        "relative rounded-2xl bg-blue-900/40 backdrop-blur-sm shadow-lg ring-1 ring-blue-700/50 overflow-hidden h-[500px] flex flex-col transition-all duration-300 hover:ring-blue-600/70 hover:shadow-xl",
        className,
        cardReveal
      )}
      role="article"
      aria-labelledby={id ? `${id}-title` : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Full-bleed background media */}
      <div className={cn("absolute inset-0 w-full h-full", mediaClassName)} aria-hidden="true">
        {mediaWithHover}
      </div>
      {/* Subtle bottom gradient for text readability */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-blue-950/90 via-blue-950/60 to-transparent pointer-events-none" aria-hidden="true" />

      {/* Foreground content */}
      <div ref={bodyRef} className={cn("relative z-10 p-8 mt-auto", bodyReveal)}>
        <div className="flex items-start gap-2">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-800/50 border border-blue-600/50" aria-hidden="true">
            <RandomIcon className="size-5 text-blue-200" title="Decorative icon" />
          </div>
          <h3 id={id ? `${id}-title` : undefined} className="text-[24px] leading-[140%] tracking-[-0.5px] text-white font-medium">
            {title}
          </h3>
        </div>

        <div
          id={contentId}
          className={cn("mt-3 text-[14px] leading-[150%] text-blue-100", expanded ? "expanded" : "collapsed")}
          aria-live="polite"
        >
          <div className="tracking-[-0.2px]">{description}</div>
          {footer ? <div className="mt-3">{footer}</div> : null}
        </div>

        {/* Mobile toggle */}
        <div className="mt-3 md:hidden">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="h-8 px-3 border-blue-600/50 bg-blue-900/50 text-blue-100 hover:bg-blue-800/50 rounded-md"
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