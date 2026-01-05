import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionBadge from "@/components/SectionBadge";
import { HelpCircle } from "lucide-react";
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
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className={cn(
          "text-center mb-16 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <div className="flex justify-center mb-6">
            <SectionBadge icon={HelpCircle} text="Common Questions" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F2043] mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Frequently Asked</span> Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about tracking and identifying your B2B traffic.
          </p>
        </div>

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
    </section>
  );
};

export default FAQSection;