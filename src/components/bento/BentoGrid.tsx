import * as React from "react";
import { cn } from "@/lib/utils";
import FeatureImagePlaceholder from "@/components/features/FeatureImagePlaceholder";
import BentoCard, { type BentoCardProps } from "./BentoCard";
import SubscribeForm from "./SubscribeForm";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { useInViewOnce } from "@/hooks/use-in-view-once";

export type BentoItem = {
  title: string;
  description: string;
  withForm?: boolean;
};

export type BentoGridProps = {
  className?: string;
  items?: BentoItem[];
  heading?: string;
  subheading?: string;
};

const DEFAULT_ITEMS: BentoItem[] = [
  {
    title: "Built for speed",
    description:
      "Designed to perform seamlessly across screen sizes—fast and fluid.",
  },
  {
    title: "Smooth on every screen",
    description:
      "Built to adjust beautifully on any display. From tablets to phones, your layout holds steady.",
    withForm: true,
  },
  {
    title: "Pixel-perfect layout",
    description:
      "We maintain structure and balance so your content looks polished, no matter the device.",
  },
  {
    title: "Auto-adaptive UI",
    description:
      "We maintain structure and balance so your content looks polished, no matter the device.",
  },
];

const BentoGrid: React.FC<BentoGridProps> = ({
  className,
  items = DEFAULT_ITEMS,
  heading = "Common Challenges We Solve",
  subheading,
}) => {
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: "0px 0px -20% 0px",
  });

  const cards: Array<Pick<BentoCardProps, "title" | "description" | "media" | "footer" | "appearFrom">> = [
    {
      title: items[0]?.title ?? DEFAULT_ITEMS[0].title,
      description: items[0]?.description ?? DEFAULT_ITEMS[0].description,
      media: <FeatureImagePlaceholder className="h-full" alt="Bento illustration large" />,
      footer: undefined,
      appearFrom: "left",
    },
    {
      title: items[1]?.title ?? DEFAULT_ITEMS[1].title,
      description: items[1]?.description ?? DEFAULT_ITEMS[1].description,
      media: <FeatureImagePlaceholder className="h-full" alt="Bento illustration small" />,
      footer: items[1]?.withForm ? <SubscribeForm /> : undefined,
      appearFrom: "right",
    },
    {
      title: items[2]?.title ?? DEFAULT_ITEMS[2].title,
      description: items[2]?.description ?? DEFAULT_ITEMS[2].description,
      media: <FeatureImagePlaceholder className="h-full" alt="Bento illustration medium" />,
      footer: undefined,
      appearFrom: "left",
    },
    {
      title: items[3]?.title ?? DEFAULT_ITEMS[3].title,
      description: items[3]?.description ?? DEFAULT_ITEMS[3].description,
      media: <FeatureImagePlaceholder className="h-full" alt="Bento illustration medium" />,
      footer: undefined,
      appearFrom: "right",
    },
  ];

  return (
    <section
      className={cn("bento-section", className)}
      role="region"
      aria-labelledby="bento-heading"
    >
      <div className="bento-container">
        <header className="bento-header" ref={headerRef}>
          {headerInView ? (
            <AnimatedTitle text={heading} className="features-animated-title" />
          ) : (
            <h2 className="bento-heading opacity-0">{heading}</h2>
          )}
          {/* Hidden heading for aria-labelledby association */}
          <h2 id="bento-heading" className="sr-only">
            {heading}
          </h2>
          {subheading ? <p className="bento-subheading">{subheading}</p> : null}
        </header>

        {/* Grid: 12 columns; top row 8/4, second row 6/6 */}
        <div className="bento-grid" role="list">
          <div className="col-span-12 lg:col-span-8" role="listitem">
            <BentoCard
              id="bento-card-1"
              title={cards[0].title}
              description={cards[0].description}
              media={cards[0].media}
              mediaClassName="h-full"
              footer={cards[0].footer}
              appearFrom={cards[0].appearFrom}
            />
          </div>

          <div className="col-span-12 lg:col-span-4" role="listitem">
            <BentoCard
              id="bento-card-2"
              title={cards[1].title}
              description={cards[1].description}
              media={cards[1].media}
              mediaClassName="h-full"
              footer={cards[1].footer}
              appearFrom={cards[1].appearFrom}
            />
          </div>

          <div className="col-span-12 lg:col-span-6" role="listitem">
            <BentoCard
              id="bento-card-3"
              title={cards[2].title}
              description={cards[2].description}
              media={cards[2].media}
              mediaClassName="h-full"
              footer={cards[2].footer}
              appearFrom={cards[2].appearFrom}
            />
          </div>

          <div className="col-span-12 lg:col-span-6" role="listitem">
            <BentoCard
              id="bento-card-4"
              title={cards[3].title}
              description={cards[3].description}
              media={cards[3].media}
              mediaClassName="h-full"
              footer={cards[3].footer}
              appearFrom={cards[3].appearFrom}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(BentoGrid);