import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { CheckCircle2, Linkedin, DollarSign, TrendingUp, Zap } from "lucide-react";
import SectionBadge from "../SectionBadge";

const FEATURES = [
  { icon: Linkedin, iconBg: "bg-blue-600", title: "Advanced LinkedIn Integration", benefits: ["Go beyond basic LinkedIn targeting", "Access data LinkedIn doesn't provide", "Optimize ad performance automatically", "Extend LinkedIn audiences to other channels"] },
  { icon: DollarSign, iconBg: "bg-orange-500", title: "Smart Budget Management", benefits: ["Set account-level budget caps", "Create strategic campaign groups", "Monitor performance in real-time", "Prevent overspend automatically"] },
  { icon: TrendingUp, iconBg: "bg-blue-600", title: "Complete Journey Tracking", benefits: ["Follow prospects across channels", "Understand the full buying process", "Measure marketing impact accurately", "Optimize based on revenue, not clicks"] }
];

const DifferenceSection: React.FC = () => {
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.3 });
  const [cardsRef, cardsInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className="difference-section-v2" role="region" aria-labelledby="difference-heading">
      <div className="difference-container-v2">
        <div ref={headerRef} className="text-center mb-20">
          <div className={cn(
            "flex justify-center transition-all duration-700",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={Zap} text="The DemandSense Difference" />
          </div>
          
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-8 mb-6 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Here's What Makes <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">DemandSense Unique</span>
          </h2>
        </div>

        <div ref={cardsRef} className={cn("difference-cards-grid-v2 transition-all duration-1000 ease-out", cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")} role="list">
          {FEATURES.map((feature, index) => (
            <article key={feature.title} className="difference-card-v2" style={{ transitionDelay: cardsInView ? `${index * 150}ms` : '0ms' }}>
              <div className="difference-icon-container-v2">
                <div className={cn("difference-icon-v2", feature.iconBg)}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="difference-card-title-v2">{feature.title}</h3>
              <ul className="difference-benefits-list-v2" role="list">
                {feature.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="difference-benefit-item-v2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="difference-benefit-text-v2">{benefit}</span>
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