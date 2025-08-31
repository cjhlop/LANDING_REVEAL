"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard, { type Testimonial } from "./TestimonialCard";

export type TestimonialSliderProps = {
  items?: Testimonial[];
  className?: string;
  options?: EmblaOptionsType;
  ariaLabel?: string;
};

const DEFAULT_ITEMS: Testimonial[] = [
  {
    company: "base",
    quote:
      "Palm UI saved us weeks of design work. The components are beautifully crafted and easy to plug in.",
    author: {
      name: "Alex Carter",
      role: "Product Designer, Base",
      avatarSrc:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=160&h=160&fit=crop&crop=faces",
    },
  },
  {
    company: "Astra",
    quote:
      "We shipped our MVP faster than ever. The design system stayed consistent across the whole app.",
    author: {
      name: "Jamie Lee",
      role: "Frontend Engineer, Astra",
      avatarSrc:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=160&h=160&fit=crop&crop=faces",
    },
  },
  {
    company: "Atlas",
    quote:
      "The components are delightful and well documented. Our team productivity went through the roof.",
    author: {
      name: "Priya Natarajan",
      role: "Engineering Manager, Atlas",
      avatarSrc:
        "https://images.unsplash.com/photo-1544005316-04ce1f1a1a46?q=80&w=160&h=160&fit=crop&crop=faces",
    },
  },
];

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  items = DEFAULT_ITEMS,
  className,
  options,
  ariaLabel = "Testimonials",
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    align: "center",
    skipSnaps: false,
    ...options,
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = React.useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollNext();
    }
  };

  const isSingle = items.length <= 1;

  return (
    <section
      className={cn("testimonial-section", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="testimonial-container">
        {/* Slider viewport with overlay controls */}
        <div className="testimonial-viewport">
          <div
            className="embla"
            ref={emblaRef}
            tabIndex={0}
            onKeyDown={onKeyDown}
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="embla__container" role="list">
              {items.map((item, idx) => (
                <div
                  className="embla__slide"
                  key={`${item.company}-${idx}`}
                  role="listitem"
                  aria-label={`Slide ${idx + 1} of ${items.length}`}
                  aria-current={selectedIndex === idx}
                >
                  <div className="testimonial-surface">
                    <TestimonialCard item={item} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side controls inside slider */}
          <button
            type="button"
            className="testimonial-arrow testimonial-arrow--inside testimonial-arrow--left"
            aria-label="Previous testimonial"
            onClick={scrollPrev}
            disabled={isSingle}
          >
            <ChevronLeft className="size-4 text-gray-600" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="testimonial-arrow testimonial-arrow--inside testimonial-arrow--right"
            aria-label="Next testimonial"
            onClick={scrollNext}
            disabled={isSingle}
          >
            <ChevronRight className="size-4 text-gray-600" aria-hidden="true" />
          </button>
        </div>
      </div>
      <h2 className="sr-only">Customer testimonials</h2>
    </section>
  );
};

export default React.memo(TestimonialSlider);