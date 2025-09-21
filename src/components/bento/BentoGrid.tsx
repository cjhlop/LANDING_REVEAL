import * as React from "react";
import { cn } from "@/lib/utils";
import BentoCard, { type BentoCardProps } from "./BentoCard";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import RotatedCoverImage from "./RotatedCoverImage";
import { CheckCircle2, AlertTriangle } from "lucide-react";

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
        <ul className="space-y-2" role="list">
          <li className="flex items-start gap-2" role="listitem">
            <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
            <span>Visiting your website anonymously</span>
          </li>
          <li className="flex items-start gap-2" role="listitem">
            <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
            <span>Researching solutions on LinkedIn</span>
          </li>
          <li className="flex items-start gap-2" role="listitem">
            <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
            <span>Engaging with your ads</span>
          </li>
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
        <ul className="space-y-2" role="list">
          <li className="flex items-start gap-2" role="listitem">
            <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
            <span>Access social and website engagement data</span>
          </li>
          <li className="flex items-start gap-2" role="listitem">
            <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
            <span>Track full-journey customer insights</span>
          </li>
          <li className="flex items-start gap-2" role="listitem">
            <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
            <span>Measure direct revenue impact</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Stop Wasting Ad Budget",
    description: (
      <div className="space-y-3">
        <p>LinkedIn advertisers face three critical challenges:</p>
        <ul className="space-y-2" role="list">
          <li className="flex items-start gap-2" role="listitem">
            <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
            <span>Not pinpointing audiences well enough</span>
          </li>
          <li className="flex items-start gap-2" role="listitem">
            <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
            <span>Same accounts seeing ads repeatedly without converting</span>
          </li>
          <li className="flex items-start gap-2" role="listitem">
            <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
            <span>Inefficient ad spend during low-engagement hours</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Prove Marketing Impact",
    description: (
      <div className="space-y-3">
        <p>Marketing teams struggle to:</p>
        <ul className="space-y-2" role="list">
          <li className="flex items-start gap-2" role="listitem">
            <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
            <span>Connect campaigns to actual revenue</span>
          </li>
          <li className="flex items-start gap-2" role="listitem">
            <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
            <span>Track prospects across multiple channels</span>
          </li>
          <li className="flex items-start gap-2" role="listitem">
            <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
            <span>Measure true ROI of LinkedIn advertising</span>
          </li>
          <li className="flex items-start gap-2" role="listitem">
            <CheckCircle2 className="h-6 w-6 text-gray-800 mt-0.5" aria-hidden="true" />
            <span>Show impact of marketing activities on sales</span>
          </li>
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
          opacity={0.25}
          hoverOpacity={0.3}
          hoverZoomScale={1.08}
        />
      ),
      footer: undefined,
      appearFrom: "left",
    },
    {
      title: items[1]?.title ?? DEFAULT_ITEMS[1].title,
      description: items[1]?.description ?? DEFAULT_ITEMS[1].description,
      media: (
        <RotatedCoverImage
          src="/media/card2.png"
          alt="Card #2 background"
          rotationDeg={24}
          coverPercent={170}
          opacity={0.25}
          hoverOpacity={0.3}
          hoverZoomScale={1.08}
        />
      ),
      footer: undefined,
      appearFrom: "right",
    },
    {
      title: items[2]?.title ?? DEFAULT_ITEMS[2].title,
      description: items[2]?.description ?? DEFAULT_ITEMS[2].description,
      media: (
        <RotatedCoverImage
          src="/media/card3.png"
          alt="Card #3 background"
          rotationDeg={24}
          coverPercent={170}
          opacity={0.25}
          hoverOpacity={0.3}
          hoverZoomScale={1.08}
        />
      ),
      footer: undefined,
      appearFrom: "left",
    },
    {
      title: items[3]?.title ?? DEFAULT_ITEMS[3].title,
      description: items[3]?.description ?? DEFAULT_ITEMS[3].description,
      media: (
        <RotatedCoverImage
          src="/media/card4.png"
          alt="Card #4 background"
          rotationDeg={24}
          coverPercent={170}
          opacity={0.25}
          hoverOpacity={0.3}
          hoverZoomScale={1.08}
        />
      ),
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-100">
              <AlertTriangle className="h-4 w-4" />
              Common Challenges We Solve
            </div>
            
            {headerInView ? (
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Common Challenges</span> We Solve
              </h2>
            ) : (
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight opacity-0">
                Common Challenges We Solve
              </h2>
            )}
            
            {/* Hidden heading for aria-labelledby association */}
            <h2 id="bento-heading" className="sr-only">
              {heading}
            </h2>
            
            {subheading ? (
              <p className={cn(
                "text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed transition-opacity duration-700",
                headerInView ? "opacity-100" : "opacity-0"
              )}>
                {subheading}
              </p>
            ) : (
              <p className={cn(
                "text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed transition-opacity duration-700",
                headerInView ? "opacity-100" : "opacity-0"
              )}>
                Identify the key obstacles preventing your B2B marketing success and discover how DemandSense solves them.
              </p>
            )}
          </div>
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