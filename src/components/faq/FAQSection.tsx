import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionBadge from "@/components/SectionBadge";
import { HelpCircle, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const FAQS = [
  {
    question: "How does WebID™ identify anonymous visitors?",
    answer: "WebID™ uses our proprietary B2B identity graph, which maps over 280 million professional profiles to corporate network IP addresses. When someone visits your site, we match their network signature against our database to reveal their company, job title, and verified contact details in real-time."
  },
  {
    question: "Is DemandSense GDPR and CCPA compliant?",
    answer: "Absolutely. We take data privacy seriously. Our platform is designed to identify business entities and professional personas using publicly available and verified B2B data. We do not track personal private browsing habits, and we provide full transparency and opt-out capabilities to remain 100% compliant with global regulations."
  },
  {
    question: "How much can I really save on LinkedIn ad spend?",
    answer: "On average, our customers see a 30-40% reduction in wasted spend. This is achieved through smart scheduling (pausing ads when your audience isn't active), frequency capping (preventing ad fatigue), and automated audience tuning that excludes non-fit prospects from your campaigns."
  },
  {
    question: "Does it integrate with my existing CRM?",
    answer: "Yes, DemandSense features deep, bi-directional integrations with Salesforce, HubSpot, and Marketo. You can automatically push identified high-intent leads into your CRM and pull deal data back into DemandSense to prove exact campaign ROI."
  },
  {
    question: "How long does it take to set up?",
    answer: "You can be up and running in less than 5 minutes. Setup involves adding a lightweight tracking script to your website (via GTM or directly) and connecting your LinkedIn Campaign Manager account. Data begins flowing into your dashboard immediately."
  },
  {
    question: "What is the difference between a 'Company' and 'Individual' match?",
    answer: "A Company match identifies the organization visiting your site (e.g., 'Someone from Microsoft is here'). An Individual match goes deeper, revealing the specific person (e.g., 'Sarah Jenkins, VP of Marketing at Microsoft'). Our transparent pricing means you only pay 1 credit regardless of whether we find just the company or both the person and the company."
  }
];

const FAQSection = () => {
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="w-full bg-white px-6 md:px-[112px] py-24 lg:py-32 border-t border-gray-100"
    >
      <div className="max-w-[1216px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Header (Restored) */}
          <div className="lg:col-span-5 space-y-6">
            <div className={cn(
              "transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <SectionBadge icon={HelpCircle} text="Support" />
            </div>

            <h2 className={cn(
              "text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight transition-all duration-700 delay-100",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              Everything you <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">need to know</span>
            </h2>

            <p className={cn(
              "text-lg text-gray-600 leading-relaxed transition-all duration-700 delay-200",
              inView ? "opacity-100" : "opacity-0"
            )}>
              Can't find the answer you're looking for? Reach out to our customer success team and we'll get back to you within 24 hours.
            </p>

            <div className={cn(
              "pt-4 transition-all duration-700 delay-300",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <button className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group">
                Contact Support 
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Side: Accordion (Stylized like website-visitors) */}
          <div className={cn(
            "lg:col-span-7 transition-all duration-1000 delay-300",
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-[#0F2043] font-semibold hover:text-blue-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;