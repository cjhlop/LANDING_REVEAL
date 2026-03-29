import * as React from "react";
import { cn } from "@/lib/utils";
import TestimonialCard, { type Testimonial } from "./TestimonialCard";
import { useInViewOnce } from "@/hooks/use-in-view-once";

export type TestimonialSectionProps = {
  items?: Testimonial[];
  className?: string;
};

const DEFAULT_ITEMS: Testimonial[] = [
  {
    company: "BlueStar US",
    quote: "Just wanted to say that I've been using DemandSense for almost a full week, and the early returns are pretty awesome. CPMs are down between 30-40%, impressions are up between 50-100+%, and clicks are up between 30-60%.",
    author: { name: "James Korte", role: "Director of Marketing", avatarSrc: "/avatars/James Korte.png" },
  },
  {
    company: "Vim",
    quote: "Linkedin Ad Scheduling of DemandSense is my favorite feature too, and it saves me thousands of $$ every month. I've been using it for 2+ years!",
    author: { name: "Or Livne", role: "Growth Marketing Lead", avatarSrc: "/avatars/Or Livne.svg" },
  },
  {
    company: "Project Scale",
    quote: "I'm a HUGE fan of DemandSense… probably reduced my cost per lead by 60% the second I turned it on. It's literally been the difference between a campaign being incredibly successful, or burning a hole in my pocket.",
    author: { name: "Jason Squires", role: "Founder", avatarSrc: "/avatars/Jason Squires.jpg" },
  },
];

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  items = DEFAULT_ITEMS,
  className,
}) => {
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
  });

  const marqueeItems = React.useMemo(() => [...items, ...items, ...items], [items]);

  return (
    <section className={cn("testimonial-section bg-white", className)} role="region" aria-labelledby="testimonial-heading">
      <div className="testimonial-container">
        <div ref={headerRef} className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={cn(
            "text-[40px] font-bold text-gray-900 mb-6 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Built for the B2B marketers who own <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">the LinkedIn numbers</span>
          </h2>
          <h2 id="testimonial-heading" className="sr-only">Built for the B2B marketers who own the LinkedIn numbers</h2>
        </div>

        <div className="relative mt-12">
          <div className="testimonial-fade testimonial-fade--left" aria-hidden="true" />
          <div className="testimonial-fade testimonial-fade--right" aria-hidden="true" />
          <div className="overflow-hidden py-8">
            <div className="flex animate-scroll-left">
              {marqueeItems.map((t, idx) => (
                <div key={`${t.author.name}-${idx}`} className="flex-[0_0_330px] min-w-0 mr-6 py-4 testimonial-wrapper">
                  <TestimonialCard item={t} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(TestimonialSection);