import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { CheckCircle2, Linkedin, DollarSign, TrendingUp, Zap, ArrowRight } from "lucide-react";

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
      className={cn("difference-section-premium", className)}
      role="region"
      aria-labelledby="difference-heading"
    >
      <div className="difference-container-premium">
        {/* Header */}
        <div ref={headerRef} className="difference-header-premium">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-orange-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm border border-blue-100">
            <Zap className="h-4 w-4" />
            THE DEMANDSENSE DIFFERENCE
          </div>
          
          {headerInView ? (
            <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight">
              Here's What Makes<br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent">DemandSense Unique</span>
            </h2>
          ) : (
            <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight opacity-0">
              Here's What Makes DemandSense Unique
            </h2>
          )}
          
          <h2 id="difference-heading" className="sr-only">
            Here's What Makes DemandSense Unique
          </h2>

          <p className={cn(
            "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-opacity duration-700",
            headerInView ? "opacity-100" : "opacity-0"
          )}>
            Three powerful capabilities that set us apart from every other B2B marketing platform
          </p>
        </div>

        {/* Feature Cards */}
        <div 
          ref={cardsRef}
          className={cn(
            "difference-cards-grid-premium transition-all duration-1000 ease-out",
            cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          role="list"
        >
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "difference-card-wrapper-premium transition-all duration-700 ease-out",
                cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ 
                transitionDelay: cardsInView ? `${index * 150}ms` : '0ms' 
              }}
              role="listitem"
            >
              <article className="difference-card-premium group">
                {/* Gradient background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10 p-10">
                  {/* Icon with animated glow */}
                  <div className="difference-icon-wrapper-premium mb-8">
                    <div className={cn("difference-icon-premium", feature.iconBg)}>
                      <feature.icon className={cn("h-7 w-7", feature.iconColor)} />
                    </div>
                    
                    {/* Animated glow ring */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </div>

                  {/* Title with arrow */}
                  <div className="flex items-start justify-between mb-8">
                    <h3 className="difference-card-title-premium">
                      {feature.title}
                    </h3>
                    <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-4" />
                  </div>

                  {/* Benefits List */}
                  <ul className="difference-benefits-list-premium" role="list">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li 
                        key={benefitIndex}
                        className={cn(
                          "difference-benefit-item-premium transition-all duration-500 ease-out",
                          cardsInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                        )}
                        style={{ 
                          transitionDelay: cardsInView ? `${(index * 150) + (benefitIndex * 100) + 200}ms` : '0ms' 
                        }}
                        role="listitem"
                      >
                        <div className="difference-check-icon-premium">
                          <CheckCircle2 className="h-5 w-5 text-blue-600" />
                        </div>
                        <span className="difference-benefit-text-premium">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-orange-500 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </article>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className={cn(
          "difference-bottom-accent-premium transition-all duration-1000 ease-out delay-700",
          cardsInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          <div className="relative">
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-orange-500 rounded-full mx-auto" />
            <div className="absolute inset-0 w-32 h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-orange-500 rounded-full mx-auto blur-lg opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(DifferenceSection);