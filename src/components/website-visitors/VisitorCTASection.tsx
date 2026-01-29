"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { CheckCircle2, ArrowRight, Zap, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/SectionBadge";

const VisitorCTASection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });

  const features = [
    {
      icon: Users,
      title: "See who’s really visiting",
      desc: "Turn anonymous traffic into visible companies and people.",
    },
    {
      icon: Target,
      title: "Segment by intent",
      desc: "Automatically split traffic into high, medium, and low intent audiences.",
    },
    {
      icon: Zap,
      title: "Use the audiences right away",
      desc: "Run campaigns, route to sales, or nurture, based on real intent.",
    },
  ];

  return (
    <section
      ref={ref}
      className="w-full bg-white px-6 md:px-[112px] py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1216px] mx-auto">
        <div
          className={cn(
            "cta-card w-full rounded-[32px] px-8 md:px-16 py-20 md:py-24 flex flex-col items-center text-center relative overflow-hidden border border-blue-100 shadow-xl",
            "transition-all duration-1000 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="max-w-3xl mx-auto mb-16 relative z-10">
            <div className="flex justify-center mb-8">
              <SectionBadge icon={Zap} text="GET A 30-DAY FREE TRIAL" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F2043] mb-8 tracking-tight leading-[1.1]">
              Sign up and see your traffic turn into{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                campaign-ready audiences
              </span>{" "}
              in real time
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              See how DemandSense identifies companies and people, scores intent,
              and turns raw traffic into segmented audiences you can actually
              run campaigns on.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16 relative z-10">
            {features.map((feature, i) => (
              <div
                key={i}
                className={cn(
                  "bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 text-left group",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col items-center gap-6 relative z-10">
            <Button
              variant="hero"
              size="hero"
              className="group shadow-xl shadow-blue-500/20"
              onClick={() => document.dispatchEvent(new CustomEvent("open-get-access"))}
            >
              Get A 30-Day Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex flex-col items-center gap-1">
              <p className="text-sm font-medium text-gray-900">
                Set up in 5 minutes
              </p>
              <p className="text-xs text-gray-500">
                to see your audiences and their buying intent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorCTASection;