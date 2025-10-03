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
    iconBg: "bg-blue-600",
    iconColor: "text-white",
    title: "Advanced LinkedIn Integration",
    benefits: [
      "Go beyond basic LinkedIn targeting",
      "Access data LinkedIn doesn't provide", 
      "Optimize ad performance automatically",
      "Extend LinkedIn audiences to other channels"
    ]
  },
  {
    icon: DollarSign,
    iconBg: "bg-orange-500", 
    iconColor: "text-white",
    title: "Smart Budget Management",
    benefits: [
      "Set account-level budget caps",
      "Create strategic campaign groups",
      "Monitor performance in real-time", 
      "Prevent overspend automatically"
    ]
  },
  {
    icon: TrendingUp,
    iconBg: "bg-blue-600",
    iconColor: "text-white", 
    title: "Complete Journey Tracking",
    benefits: [
      "Follow prospects across channels",
      "Understand the full buying process",
      "Measure marketing impact accurately",
      "Optimize based on revenue, not clicks"
    ]
  }
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
      className={cn("difference-section-v2", className)}
      role="region"
      aria-labelledby="difference-heading"
    >
      <div className="difference-container-v2">
        {/* Header */}
        <div ref={headerRef} className="difference-header-v2">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm border border-blue-100">
            <Zap className="h-4 w-4" />
            THE DEMANDSENSE DIFFERENCE
          </div>
          
          {headerInView ? (
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight">
              Here's What Makes<br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">DemandSense Unique</span>:
            </h2>
          ) : (
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight opacity-0">
              Here's What Makes DemandSense Unique:
            </h2>
          )}
          
          <h2 id="difference-heading" className="sr-only">
            Here's What Makes DemandSense Unique
          </h2>
        </div>

        {/* Feature Cards */}
        <div 
          ref={cardsRef}
          className={cn(
            "difference-cards-grid-v2 transition-all duration-1000 ease-out",
            cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          role="list"
        >
          {FEATURES.map((feature, index) => (
            <article
              key={feature.title}
              className={cn(
                "difference-card-v2 transition-all duration-700 ease-out",
                cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ 
                transitionDelay: cardsInView ? `${index * 150}ms` : '0ms' 
              }}
              role="listitem"
            >
              {/* Icon */}
              <div className="difference-icon-container-v2">
                <div className={cn("difference-icon-v2", feature.iconBg)}>
                  <feature.icon className={cn("h-6 w-6", feature.iconColor)} />
                </div>
              </div>

              {/* Title */}
              <h3 className="difference-card-title-v2">
                {feature.title}
              </h3>

              {/* Benefits List */}
              <ul className="difference-benefits-list-v2" role="list">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li 
                    key={benefitIndex}
                    className={cn(
                      "difference-benefit-item-v2 transition-all duration-500 ease-out",
                      cardsInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    )}
                    style={{ 
                      transitionDelay: cardsInView ? `${(index * 150) + (benefitIndex * 100) + 200}ms` : '0ms' 
                    }}
                    role="listitem"
                  >
                    <div className="difference-check-icon-v2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="difference-benefit-text-v2">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(DifferenceSection);