import * as React from "react";
import { cn } from "@/lib/utils";
import FeatureImagePlaceholder from "@/components/features/FeatureImagePlaceholder";
import BentoCard, { type BentoCardProps } from "./BentoCard";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import RotatedCoverImage from "./RotatedCoverImage";

export type BentoItem = {
  title: string;
  description: React.ReactNode;
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
    title: "Find Hidden Revenue Opportunities",
    description: (
      <div className="space-y-3">
        <p>
          Most B2B companies only see a fraction of their potential buyers. Your ideal customers are:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Visiting your website anonymously</li>
          <li>Researching solutions on LinkedIn</li>
          <li>Engaging with your ads</li>
        </ul>
        <p>But you can&apos;t identify them. DemandSense changes that.</p>
      </div>
    ),
  },
  {
    title: "Complete Marketing Intelligence",
    description: (
      <div className="space-y-3">
        <p>See your true marketing performance:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access social and website engagement data</li>
          <li>Track full-journey customer insights</li>
          <li>Measure direct revenue impact</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Stop Wasting Ad Budget",
    description: (
      <div className="space-y-3">
        <p>LinkedIn advertisers face three critical challenges:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Not pinpointing audiences well enough</li>
          <li>Same accounts seeing ads repeatedly without converting</li>
          <li>Inefficient ad spend during low-engagement hours</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Prove Marketing Impact",
    description: (
      <div className="space-y-3">
        <p>Marketing teams struggle to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Connect campaigns to actual revenue</li>
          <li>Track prospects across multiple channels</li>
          <li>Measure true ROI of LinkedIn advertising</li>
          <li>Show impact of marketing activities on sales</li>
        </ul>
      </div>
    ),
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
      media: (
        <RotatedCoverImage
          src="/media/hover-sidebar.png"
          alt="DemandSense dashboard rotated background"
          rotationDeg={24}
          coverPercent={170}
        />
      ),
      footer: undefined,
      appearFrom: "left",
    },
    {
      title: items[1]?.title ?? DEFAULT_ITEMS[1].title,
      description: items[1]?.description ?? DEFAULT_ITEMS[1].description,
      media: <FeatureImagePlaceholder className="h-full" alt="Bento illustration small" />,
      footer: undefined,
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