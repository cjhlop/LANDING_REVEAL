"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Users, Briefcase, Building2 } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import { Button } from "@/components/ui/button";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const EARLY_ACCESS_URL = "https://tally.so/r/Gx4O5O";

type Door = {
  icon: React.ElementType;
  title: string;
  body: string;
};

const doors: Door[] = [
  {
    icon: Briefcase,
    title: "Consultants and agencies",
    body: "The joined report becomes your deliverable. Walk into every client call with the list nobody else can produce, and turn every insight into content with receipts. Works on a client account without asking them for CRM access.",
  },
  {
    icon: Building2,
    title: "In-house B2B marketers",
    body: "Find the pipeline you already paid for: ICP-fit companies your ads warmed and your CRM missed. Hand sales a named, warm list instead of an MQL count that means something different in every tool.",
  },
];

const DoorCard = ({ door, index }: { door: Door; index: number }) => {
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.15 });
  const Icon = door.icon;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={cn(
        "bg-white border border-gray-100 rounded-2xl p-7 md:p-8 shadow-sm transition-all duration-500",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <span className="inline-flex w-11 h-11 rounded-xl bg-blue-50 text-blue-600 items-center justify-center">
        <Icon className="w-5 h-5" />
      </span>
      <h3 className="mt-5 text-2xl font-bold text-gray-900 tracking-tight">
        {door.title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-gray-600">
        {door.body}
      </p>
    </div>
  );
};

const McpWhoFor = () => {
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      className="w-full bg-white py-16 md:py-24 lg:py-32 border-b border-gray-100"
      aria-labelledby="mcp-who-heading"
    >
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "max-w-2xl mx-auto text-center transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <div className="flex justify-center">
            <SectionBadge icon={Users} text="Who it's for" />
          </div>
          <h2
            id="mcp-who-heading"
            className="mt-6 text-[40px] font-bold text-gray-900 tracking-tight leading-[1.1]"
          >
            Who this is{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              for
            </span>
          </h2>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
          {doors.map((door, i) => (
            <DoorCard key={i} door={door} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className={cn(
            "mt-12 md:mt-16 flex flex-col items-center text-center gap-4 transition-all duration-700",
            ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Button
            variant="hero"
            size="hero"
            className="shadow-xl shadow-blue-500/20"
            asChild
          >
            <a href={EARLY_ACCESS_URL}>Get early access</a>
          </Button>
          <p className="text-sm text-gray-500 leading-relaxed max-w-md">
            Free during early access, with a 30-day DemandSense trial. No card.
            2-minute application.
          </p>
        </div>
      </div>
    </section>
  );
};

export default McpWhoFor;