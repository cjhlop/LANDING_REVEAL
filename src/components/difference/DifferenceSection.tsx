import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { CheckCircle2, Linkedin, DollarSign, TrendingUp, Zap } from "lucide-react";

export type DifferenceSectionProps = {
  className?: string;
};

const FEATURES = [
  {
    icon: Linkedin,
    iconBg: "from-blue-600 to-blue-400",
    title: "Advanced LinkedIn Integration",
    benefits: [
      "Go beyond basic LinkedIn targeting",
      "Access data LinkedIn doesn't provide",
      "Optimize ad performance automatically",
      "Extend LinkedIn audiences to other channels",
    ],
  },
  {
    icon: DollarSign,
    iconBg: "from-orange-500 to-amber-400",
    title: "Smart Budget Management",
    benefits: [
      "Set account-level budget caps",
      "Create strategic campaign groups",
      "Monitor performance in real-time",
      "Prevent overspend automatically",
    ],
  },
  {
    icon: TrendingUp,
    iconBg: "from-purple-600 to-fuchsia-500",
    title: "Complete Journey Tracking",
    benefits: [
      "Follow prospects across channels",
      "Understand the full buying process",
      "Measure marketing impact accurately",
      "Optimize based on revenue, not clicks",
    ],
  },
];

const DifferenceSection: React.FC<DifferenceSectionProps> = ({ className }) => {
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: "0px 0px -20% 0px",
  });

  const [cardsRef, cardsInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <section
      className={cn(
        "relative w-full bg-gradient-to-b from-white to-gray-50 px-[112px] py-[112px] overflow-hidden",
        className
      )}
      role="region"
      aria-labelledby="difference-heading"
    >
      {/* Aurora background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-24 -left-16 w-[520px] h-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(45% 45% at 50% 50%, rgba(56,117,246,0.18) 0%, rgba(56,117,246,0.10) 35%, rgba(56,117,246,0) 70%)",
            filter: "blur(20px)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -right-20 w-[560px] h-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(45% 45% at 50% 50%, rgba(250,140,22,0.16) 0%, rgba(250,140,22,0.10) 35%, rgba(250,140,22,0) 70%)",
            filter: "blur(22px)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="max-w-[1216px] mx-auto relative">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-200/50 shadow-sm">
            <Zap className="h-4 w-4 text-blue-600" />
            THE DEMANDSENSE DIFFERENCE
          </div>

          {headerInView ? (
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight">
              Here’s What Makes{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                DemandSense Unique
              </span>
            </h2>
          ) : (
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight opacity-0">
              Here’s What Makes DemandSense Unique
            </h2>
          )}
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out",
            cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          role="list"
        >
          {FEATURES.map((feature, index) => (
            <article
              key={feature.title}
              role="listitem"
              aria-label={feature.title}
              className="group relative"
              style={{ transitionDelay: cardsInView ? `${index * 150}ms` : "0ms" }}
            >
              {/* Magic gradient ring wrapper */}
              <div className="magic-border rounded-2xl">
                <div className="relative rounded-[calc(var(--magic-radius)-3px)] bg-white/60 backdrop-blur-xl border border-white/50 shadow-xl">
                  {/* Decorative corner glow */}
                  <div
                    className="absolute -top-6 -right-6 w-28 h-28 rounded-full"
                    style={{
                      background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(56,117,246,0.18) 0%, rgba(56,117,246,0) 70%)",
                      filter: "blur(14px)",
                    }}
                    aria-hidden="true"
                  />

                  {/* Content */}
                  <div className="p-8">
                    {/* Icon badge */}
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center rounded-2xl p-1 bg-white/70 backdrop-blur border border-gray-200 shadow-sm">
                        <div
                          className={cn(
                            "w-12 h-12 rounded-xl grid place-content-center text-white shadow-inner",
                            "bg-gradient-to-br",
                            feature.iconBg
                          )}
                        >
                          <feature.icon className="h-6 w-6" />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                      {feature.title}
                    </h3>

                    {/* Benefits */}
                    <ul className="space-y-3" role="list">
                      {feature.benefits.map((benefit, bIndex) => (
                        <li
                          key={bIndex}
                          className={cn(
                            "flex items-start gap-3 transition-all duration-500 ease-out",
                            cardsInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
                          )}
                          style={{
                            transitionDelay: cardsInView
                              ? `${index * 150 + bIndex * 90 + 200}ms`
                              : "0ms",
                          }}
                          role="listitem"
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="h-5 w-5 text-blue-600" />
                          </div>
                          <span className="text-gray-700 leading-relaxed text-[15px]">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hover lift and subtle tilt (CSS-only) */}
              <div className="absolute inset-0 rounded-2xl transition-transform duration-300 ease-out group-hover:-translate-y-1.5 pointer-events-none" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(DifferenceSection);