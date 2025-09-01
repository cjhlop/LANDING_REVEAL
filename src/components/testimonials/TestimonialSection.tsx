import * as React from "react";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard, { type Testimonial } from "./TestimonialCard";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { useInViewOnce } from "@/hooks/use-in-view-once";

export type TestimonialSectionProps = {
  items?: Testimonial[];
  autoPlay?: boolean;
  intervalMs?: number;
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
  autoPlay = true,
  intervalMs = 3800,
  className,
}) => {
  const [eyebrowRef, eyebrowInView] = useInViewOnce<HTMLParagraphElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
  });

  // Make multiple cards visible and smoothly draggable
  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true, // allow smooth, premium-feel glide
      skipSnaps: false,
    },
    [],
  );

  const [isPaused, setPaused] = React.useState(false);

  // Autoplay (step to next snap on an interval, pause on hover/drag)
  React.useEffect(() => {
    if (!autoPlay || !emblaApi) return;
    let raf: number | null = null;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = now - last;
      if (dt >= intervalMs && !isPaused) {
        emblaApi.scrollNext();
        last = now;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [emblaApi, autoPlay, intervalMs, isPaused]);

  // Pause autoplay when the user interacts
  React.useEffect(() => {
    if (!emblaApi) return;
    const onPointerDown = () => setPaused(true);
    const onPointerUp = () => setPaused(false);
    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUp);
    emblaApi.on("scroll", onPointerDown);
    return () => {
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("pointerUp", onPointerUp);
      emblaApi.off("scroll", onPointerDown);
    };
  }, [emblaApi]);

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section
      className={cn("testimonial-section", className)}
      role="region"
      aria-labelledby="testimonial-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
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

          {/* Always render the title so it never disappears */}
          <AnimatedTitle text="Our customer reviews" className="features-animated-title" />
          {/* Hidden semantic heading for aria-labelledby */}
          <h2 id="testimonial-heading" className="sr-only">
            Our customer reviews
          </h2>

          <p className="text-[16px] leading-[150%] tracking-[-0.3px] text-[#7C7C7C]">
            See what designers and developers are saying about their experience with Palm UI.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-12">
          {/* Soft white edges */}
          <div className="testimonial-fade testimonial-fade--left" aria-hidden="true" />
          <div className="testimonial-fade testimonial-fade--right" aria-hidden="true" />

          <div
            className="embla testimonial-viewport"
            ref={viewportRef}
            role="listbox"
            aria-label="Testimonials carousel"
          >
            <div className="embla__container px-4">
              {items.map((t, idx) => (
                <div
                  key={`${t.author.name}-${idx}`}
                  className="embla__slide flex-[0_0_330px] min-w-0"
                  role="option"
                  aria-selected={false}
                >
                  <TestimonialCard item={t} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            type="button"
            className="testimonial-arrow testimonial-arrow--inside testimonial-arrow--left"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="testimonial-arrow testimonial-arrow--inside testimonial-arrow--right"
            onClick={scrollNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(TestimonialSection);