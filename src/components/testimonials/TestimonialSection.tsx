import * as React from "react";
import { cn } from "@/lib/utils";
import TestimonialCard, { type Testimonial } from "./TestimonialCard";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { MessageSquare } from "lucide-react";

export type TestimonialSectionProps = {
  items?: Testimonial[];
  className?: string;
};

const DEFAULT_ITEMS: Testimonial[] = [
  {
    company: "BlueStar US",
    quote:
      "Just wanted to say that I've been using DemandSense for almost a full week, and the early returns are pretty awesome. CPMs are down between 30-40%, impressions are up between 50-100+%, and clicks are up between 30-60%. This is beyond what I expected, quite pleased.",
    author: {
      name: "James Korte",
      role: "Director of Marketing at BlueStar US",
      avatarSrc: "/avatars/James Korte.png",
    },
  },
  {
    company: "Vim",
    quote:
      "Linkedin Ad Scheduling of DemandSense is my favorite feature too, and it saves me thousands of $$ every month. I've been using it for 2+ years! Guys, stop and talk with Justin and the team about purchasing this ROI tool now!",
    author: {
      name: "Or Livne",
      role: "Growth Marketing Lead at Vim",
      avatarSrc: "/avatars/Or Livne.svg",
    },
  },
  {
    company: "Opteo",
    quote: "🙌 We've found this and the ad scheduling super useful. 👏",
    author: {
      name: "Hayley Dixon",
      role: "Head Of Marketing at Opteo",
      avatarSrc: "/avatars/Hayley Dixon.svg",
    },
  },
  {
    company: "Aussie Founders",
    quote: "DemandSense user here. Early days, but definitely feel like I'm 🔥 less 💰",
    author: {
      name: "Kieron Brown",
      role: "B2B Strategy and Execution Partner at Aussie Founders",
      avatarSrc: "/avatars/Kieron Brown.png",
    },
  },
  {
    company: "Marketixa",
    quote: "Been using your ad scheduling tool since yesterday. CPC went 50% down.",
    author: {
      name: "Kristof Bardos",
      role: "Ad Creative Expert | Owner at Marketixa",
      avatarSrc: "/avatars/Kristof Bardos.svg",
    },
  },
  {
    company: "Project Scale",
    quote:
      "I'm a HUGE fan of DemandSense… probably reduced my cost per lead by 60% the second I turned it on. It's literally been the difference between a campaign being incredibly successful, or burning a hole in my pocket. 👏",
    author: {
      name: "Jason Squires",
      role: "Founder at Project Scale",
      avatarSrc: "/avatars/Jason Squires.jpg",
    },
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
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-100">
            <MessageSquare className="h-4 w-4" />
            TESTIMONIALS
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
            Our <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">customer reviews</span>
          </h2>
          <h2 id="testimonial-heading" className="sr-only">
            Our customer reviews
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See what designers and developers are saying about their experience with DemandSense.
          </p>
        </div>

        {/* Continuous marquee */}
        <div className="relative mt-12">
          {/* Soft white edges */}
          <div className="testimonial-fade testimonial-fade--left" aria-hidden="true" />
          <div className="testimonial-fade testimonial-fade--right" aria-hidden="true" />

          <div
            className="overflow-hidden py-8"
            role="listbox"
            aria-label="Testimonials continuous carousel"
          >
            <div className="flex animate-scroll-left">
              {marqueeItems.map((t, idx) => (
                <div
                  key={`${t.author.name}-${idx}`}
                  className="flex-[0_0_330px] min-w-0 mr-6 py-4 testimonial-wrapper"
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