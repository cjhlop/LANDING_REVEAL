import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { BookOpen, ArrowRight, Quote } from "lucide-react";
import SectionBadge from "../SectionBadge";

const CASE_STUDIES = [
  {
    company: "TechFlow",
    metric: "40% Reduction in CPA",
    quote: "DemandSense changed how we look at LinkedIn. We stopped wasting money at night and started scaling what works.",
    author: "Sarah Jenkins, VP Marketing",
    image: "/media/feature-share-smart.png",
  },
  {
    company: "GlobalScale",
    metric: "5.8x ROAS Proven",
    quote: "Finally, a tool that connects the dots between our ad spend and actual CRM revenue. It's a game changer.",
    author: "Marcus Chen, Growth Lead",
    image: "/media/audience-tuning.webp",
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

        {/* Original Case Studies Layout */}
        <div className="space-y-12">
          {CASE_STUDIES.map((study, i) => (
            <div 
              key={study.company}
              className={cn(
                "flex flex-col md:flex-row items-center gap-12 p-8 rounded-3xl bg-gray-50 border border-gray-100 transition-all duration-700",
                headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${(i * 200) + 400}ms` }}
            >
              <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-lg">
                <img src={study.image} alt={study.company} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-tight">
                  <span className="text-3xl">{study.metric}</span>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 h-8 w-8 text-blue-100 -z-10" />
                  <p className="text-xl text-gray-700 italic leading-relaxed">"{study.quote}"</p>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{study.author}</div>
                  <div className="text-sm text-gray-500">{study.company}</div>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                  Read full story <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;