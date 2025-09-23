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
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
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
    iconBg: "bg-gradient-to-br from-orange-500 to-orange-600", 
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
    iconBg: "bg-gradient-to-br from-green-500 to-green-600",
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
      className={cn("difference-section", className)}
      role="region"
      aria-labelledby="difference-heading"
    >
      <div className="difference-container">
        {/* Header */}
        <div ref={headerRef} className="difference-header">
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
            "difference-cards-grid transition-all duration-1000 ease-out",
            cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          role="list"
        >
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "difference-card-wrapper transition-all duration-700 ease-out",
                cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ 
                transitionDelay: cardsInView ? `${index * 150}ms` : '0ms' 
              }}
              role="listitem"
            >
              {/* Magic Border - only visible on hover */}
              <div className="difference-magic-border">
                <article className="difference-card">
                  {/* Clean white background */}
                  <div className="absolute inset-0 bg-white rounded-2xl" />
                  
                  {/* Content */}
                  <div className="relative z-10 p-8">
                    {/* Icon */}
                    <div className="difference-icon-wrapper mb-6">
                      <div className={cn("difference-icon", feature.iconBg)}>
                        <feature.icon className={cn("h-6 w-6", feature.iconColor)} />
                      </div>
                      
                      {/* Subtle accent dots - brand colors only */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full opacity-60 transition-opacity duration-300" />
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full opacity-40 transition-opacity duration-300 delay-75" />
                    </div>

                    {/* Title */}
                    <h3 className="difference-card-title mb-6">
                      {feature.title}
                    </h3>

                    {/* Benefits List */}
                    <ul className="difference-benefits-list" role="list">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li 
                          key={benefitIndex}
                          className={cn(
                            "difference-benefit-item transition-all duration-500 ease-out",
                            cardsInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                          )}
                          style={{ 
                            transitionDelay: cardsInView ? `${(index * 150) + (benefitIndex * 100) + 200}ms` : '0ms' 
                          }}
                          role="listitem"
                        >
                          <div className="difference-check-icon">
                            <CheckCircle2 className="h-5 w-5 text-blue-600" />
                          </div>
                          <span className="difference-benefit-text">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className={cn(
          "difference-bottom-accent transition-all duration-1000 ease-out delay-700",
          cardsInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-600 rounded-full mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default React.memo(DifferenceSection);