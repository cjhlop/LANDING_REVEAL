import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionBadge from "@/components/SectionBadge";
import { HelpCircle } from "lucide-react";

const FAQS = [
  {
    question: "What is website visitor tracking?",
    answer: "Website visitor tracking involves monitoring and analyzing the behavior of users on your website. It tracks sessions, page views, time on site, and engagement levels. Advanced solutions like DemandSense go further by identifying the companies behind anonymous traffic, providing a clear picture of who is visiting and what they are interested in."
  },
  {
    question: "How does anonymous website visitor tracking work?",
    answer: "Anonymous visitor tracking works by analyzing IP addresses and behavioral patterns. When a user visits your site, their IP address is matched against a massive database of corporate networks and business identifiers. This allows the software to reveal the company name, industry, and size without the visitor needing to fill out a form."
  },
  {
    question: "Which tool is best for website visitor tracking in 2025?",
    answer: "While there are many tools available, DemandSense is positioned as a next-generation solution for 2025. It combines high-accuracy identification with real-time intent scoring and seamless CRM integration, making it ideal for B2B growth teams looking for actionable data rather than just vanity metrics."
  },
  {
    question: "How can I identify companies visiting my website?",
    answer: "You can identify companies by using a B2B visitor identification tool like DemandSense. It uses reverse IP lookup technology to match visitor IP addresses to specific organizations, giving you firmographic data such as company name, revenue, employee count, and technology stack."
  },
  {
    question: "Is website visitor tracking GDPR compliant?",
    answer: "Yes, reputable website visitor tracking tools like DemandSense are designed to be GDPR compliant. They focus on identifying business entities (companies) rather than personal private data of individuals without consent. Always ensure your privacy policy discloses the use of tracking technologies."
  },
  {
    question: "What is the difference between tracking and identification?",
    answer: "Tracking refers to monitoring actions—what pages were visited, how long a session lasted, and where the traffic came from. Identification goes a step further by revealing *who* performed those actions, specifically which company the visitor represents, turning anonymous data into potential leads."
  },
  {
    question: "How does visitor tracking support ABM?",
    answer: "Visitor tracking is the backbone of Account-Based Marketing (ABM). It allows you to see if your target accounts are actually visiting your site. By tracking their engagement, you can trigger timely sales outreach or retargeting campaigns when high-value accounts show buying intent."
  },
  {
    question: "What is the best anonymous website visitor tracking software?",
    answer: "The best software balances match rate accuracy with data depth. DemandSense excels by not only identifying companies but also scoring their buying intent based on behavior, helping sales teams prioritize the right accounts at the right time."
  },
  {
    question: "How do real-time visitor tracking tools work?",
    answer: "Real-time tools capture data packets as they happen. As a user navigates your site, the system instantly processes their requests, matches their IP, and updates your dashboard or CRM immediately, allowing for instant alerts and rapid sales responses."
  },
  {
    question: "What intent data does Reveal Intent provide?",
    answer: "Reveal Intent provides data on buying readiness, including frequency of return visits, depth of engagement (e.g., visiting pricing pages), and consumption of specific content topics. This helps distinguish between casual browsers and serious buyers."
  }
];

const VisitorFAQ = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <SectionBadge icon={HelpCircle} text="Common Questions" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2043] mb-4">
            Frequently Asked Questions
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
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default VisitorFAQ;