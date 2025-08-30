import * as React from "react";
import { cn } from "@/lib/utils";
import FeatureImagePlaceholder from "@/components/features/FeatureImagePlaceholder";
import BentoCard, { type BentoCardProps } from "./BentoCard";
import SubscribeForm from "./SubscribeForm";

export type BentoItem = {
  title: string;
  description: string;
  withForm?: boolean;
};

export type BentoGridProps = {
  className?: string;
  items?: BentoItem[]; // if not provided, a sensible default is used
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
  const cards: Array<Pick<BentoCardProps, "title" | "description" | "media" | "footer">> = [
    {
      title: items[0]?.title ?? DEFAULT_ITEMS[0].title,
      description: items[0]?.description ?? DEFAULT_ITEMS[0].description,
      media: <FeatureImagePlaceholder className="h-[373px]" alt="Bento illustration large" />,
      footer: undefined,
    },
    {
      title: items[1]?.title ?? DEFAULT_ITEMS[1].title,
      description: items[1]?.description ?? DEFAULT_ITEMS[1].description,
      media: <FeatureImagePlaceholder className="h-[352px]" alt="Bento illustration small" />,
      footer: items[1]?.withForm ? <SubscribeForm /> : undefined,
    },
    {
      title: items[2]?.title ?? DEFAULT_ITEMS[2].title,
      description: items[2]?.description ?? DEFAULT_ITEMS[2].description,
      media: <FeatureImagePlaceholder className="h-[352px]" alt="Bento illustration medium" />,
      footer: undefined,
    },
    {
      title: items[3]?.title ?? DEFAULT_ITEMS[3].title,
      description: items[3]?.description ?? DEFAULT_ITEMS[3].description,
      media: <FeatureImagePlaceholder className="h-[352px]" alt="Bento illustration medium" />,
      footer: undefined,
    },
  ];

  return (
    <section
      className={cn("bento-section", className)}
      role="region"
      aria-labelledby="bento-heading"
    >
      <div className="bento-container">
        <header className="bento-header">
          <h2 id="bento-heading" className="bento-heading">
            {heading}
          </h2>
          {subheading ? <p className="bento-subheading">{subheading}</p> : null}
        </header>

        <div className="bento-grid" role="list">
          <div className="col-span-12 lg:col-span-8" role="listitem">
            <BentoCard
              id="bento-card-1"
              title={cards[0].title}
              description={cards[0].description}
              media={cards[0].media}
              mediaClassName="h-[373px]"
              footer={cards[0].footer}
            />
          </div>

          <div className="col-span-12 lg:col-span-4" role="listitem">
            <BentoCard
              id="bento-card-2"
              title={cards[1].title}
              description={cards[1].description}
              media={cards[1].media}
              mediaClassName="h-[352px]"
              footer={cards[1].footer}
            />
          </div>

          <div className="col-span-12 lg:col-span-6" role="listitem">
            <BentoCard
              id="bento-card-3"
              title={cards[2].title}
              description={cards[2].description}
              media={cards[2].media}
              mediaClassName="h-[352px]"
              footer={cards[2].footer}
            />
          </div>

          <div className="col-span-12 lg:col-span-6" role="listitem">
            <BentoCard
              id="bento-card-4"
              title={cards[3].title}
              description={cards[3].description}
              media={cards[3].media}
              mediaClassName="h-[352px]"
              footer={cards[3].footer}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(BentoGrid);