import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { BookOpen, ArrowRight, Quote } from "lucide-react";
import SectionBadge from "../SectionBadge";
import { Button } from "@/components/ui/button";

const CASE_STUDIES = [
  {
    company: "TechFlow",
    metric: "40% Reduction in CPA",
    description: "How TechFlow used smart scheduling to eliminate nighttime waste and scale their LinkedIn lead gen.",
    image: "/media/feature-share-smart.png",
    color: "blue"
  },
  {
    company: "GlobalScale",
    metric: "5.8x ROAS Proven",
    description: "GlobalScale connected their CRM to DemandSense to finally prove the revenue impact of their brand ads.",
    image: "/media/audience-tuning.webp",
    color: "orange"
  }
];

const CaseStudies = () => {
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="w-full bg-white px-8 md:px-[112px] py-24 border-b border-gray-100">
      <div className="max-w-[1216px] mx-auto">
        {/* Standardized Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div className={cn(
            "flex justify-center transition-all duration-700",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={BookOpen} text="Success Stories" />
          </div>

          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-8 mb-6 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Real Results from <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Real Teams</span>
          </h2>

          <p className={cn(
            "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-opacity duration-700 delay-200",
            headerInView ? "opacity-100" : "opacity-0"
          )}>
            Discover how leading B2B companies are using DemandSense to transform their LinkedIn performance and drive predictable revenue.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study, i) => (
            <div 
              key={study.company}
              className={cn(
                "group relative bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-xl hover:border-blue-100",
                headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${(i * 200) + 400}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.company} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className={cn(
                    "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                    study.color === 'blue' ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"
                  )}>
                    {study.metric}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.company}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {study.description}
                </p>
                <Button variant="outline" className="group/btn">
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;