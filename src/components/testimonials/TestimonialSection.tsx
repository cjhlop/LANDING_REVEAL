import * as React from "react";
import { cn } from "@/lib/utils";
import TestimonialCard, { type Testimonial } from "./TestimonialCard";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { useInViewOnce } from "@/hooks/use-in-view-once";

export type TestimonialSectionProps = {
  items?: Testimonial[];
  className?: string;
};

const DEFAULT_ITEMS: Testimonial[] = [
  {
    company: "Graphite",
    quote:
      "Palm UI saved us weeks of design work. The components are beautifully crafted and easy to plug in.",
    author: { name: "Alex Carter", role: "Product Designer, Base" },
  },
  {
    company: "Astra",
    quote:
      "I’ve tried dozens of UI kits—this is by far the cleanest and most versatile one yet.",
    author: { name: "Samantha Lee", role: "Product Designer, Nova" },
  },
  {
    company: "Astra",
    quote:
      "The design quality is top-tier. It gave our MVP a polished feel right from day one.",
    author: { name: "Jordan Kim", role: "Frontend Engineer, Atlas" },
  },
  {
    company: "Layer",
    quote:
      "It’s rare to find a kit that works perfectly out of the box. Palm UI just gets it right.",
    author: { name: "Daniel White", role: "Head of Design, Frameworks" },
  },
  {
    company: "Base",
    quote:
      "Palm UI made designing websites so much faster. Clean layouts, modern patterns, easy to customize.",
    author: { name: "Alex Carte", role: "Product Designer, Google" },
  },
];

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  items = DEFAULT_ITEMS,
  className,
}) => {
  const [eyebrowRef, eyebrowInView] = useInViewOnce<HTMLParagraphElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
  });

  // Duplicate the list to achieve a seamless, continuous loop
  const marqueeItems = React.useMemo(() => [...items, ...items], [items]);

  return (
    <section
      className={cn("testimonial-section", className)}
      role="region"
      aria-labelledby="testimonial-heading"
    >
      <div className="testimonial-container">
        {/* Header */}
        <div className="max-w-[613px] mx-auto text-center space-y-3 sm:space-y-4">
          <p
            ref={eyebrowRef}
            className={cn(
              "text-[14px] leading-5 tracking-[1.3px] uppercase text-[#ABABAB] font-['DM Mono'] reveal reveal-fade-up",
              eyebrowInView ? "is-inview" : "",
            )}
          >
            TESTIMONIALS
          </p>

          <AnimatedTitle text="Our customer reviews" className="features-animated-title" />
          <h2 id="testimonial-heading" className="sr-only">
            Our customer reviews
          </h2>

          <p className="text-[16px] leading-[150%] tracking-[-0.3px] text-[#7C7C7C]">
            See what designers and developers are saying about their experience with Palm UI.
          </p>
        </div>

        {/* Continuous marquee */}
        <div className="relative mt-12">
          {/* Soft white edges */}
          <div className="testimonial-fade testimonial-fade--left" aria-hidden="true" />
          <div className="testimonial-fade testimonial-fade--right" aria-hidden="true" />

          <div
            className="overflow-hidden px-4"
            role="listbox"
            aria-label="Testimonials continuous carousel"
          >
            <div className="flex gap-6 animate-scroll-left">
              {marqueeItems.map((t, idx) => (
                <div
                  key={`${t.author.name}-${idx}`}
                  className="flex-[0_0_330px] min-w-0"
                  role="option"
                  aria-selected={false}
                >
                  <TestimonialCard item={t} />
                </div>
              ))}
            </div>
          </div>
          {/* Arrows removed for a clean, continuous stream */}
        </div>
      </div>
    </section>
  );
};

export default React.memo(TestimonialSection);