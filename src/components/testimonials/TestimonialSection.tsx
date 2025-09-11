import * as React from "react";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "@/components/ui/testimonial-card";

const DEFAULT_ITEMS = [
    {
        company: "BlueStar US",
        quote: "Just wanted to say that I've been using DemandSense for almost a full week, and the early returns are pretty awesome. CPMs are down between 30-40%, impressions are up between 50-100+%, and clicks are up between 30-60%. This is beyond what I expected, quite pleased.",
        author: {
            name: "James Korte",
            role: "Director of Marketing at BlueStar US",
            avatarSrc: "/avatars/James Korte.png",
        },
    },
    {
        company: "Vim",
        quote: "Linkedin Ad Scheduling of DemandSense is my favorite feature too, and it saves me thousands of $$ every month. I’ve been using it for 2+ years! Guys, stop and talk with Justin and the team about purchasing this ROI tool now!",
        author: {
            name: "Or Livne",
            role: "Growth Marketing Lead at Vim",
            avatarSrc: "/avatars/Or Livne.svg",
        },
    },
    {
        company: "Opteo",
        quote: "🙌 We’ve found this and the ad scheduling super useful. 👏",
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
        quote: "I’m a HUGE fan of DemandSense… probably reduced my cost per lead by 60% the second I turned it on. It’s literally been the difference between a campaign being incredibly successful, or burning a hole in my pocket. 👏",
        author: {
            name: "Jason Squires",
            role: "Founder at Project Scale",
            avatarSrc: "/avatars/Jason Squires.jpg",
        },
    },
];

const TestimonialSection: React.FC<{ className?: string }> = ({ className }) => {
    const testimonials = React.useMemo(() => DEFAULT_ITEMS.map(item => ({
        author: {
            name: item.author.name,
            handle: `@${item.company.replace(/\s+/g, '')}`,
            avatar: item.author.avatarSrc,
        },
        text: item.quote,
    })), []);

    return (
        <section className={cn(
            "bg-background text-foreground",
            "py-12 sm:py-24 md:py-32 px-0",
            className
        )}>
            <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
                <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
                    <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
                        Our customer reviews
                    </h2>
                    <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
                        See what designers and developers are saying about their experience with DemandSense.
                    </p>
                </div>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
                        <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                            {[...Array(2)].map((_, setIndex) => (
                                testimonials.map((testimonial, i) => (
                                    <TestimonialCard
                                        key={`${setIndex}-${i}`}
                                        {...testimonial}
                                    />
                                ))
                            ))}
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;