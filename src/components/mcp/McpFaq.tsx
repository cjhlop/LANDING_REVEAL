"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { HelpCircle } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What is DemandSense MCP?",
    a: "DemandSense MCP joins LinkedIn ad exposure, person- and company-level visitor identity, and CRM state into one dataset you query from Claude, ChatGPT, or any MCP client. One record in, one answer out.",
  },
  {
    q: "Do I need a CRM?",
    a: "No. Out of the box you get identified visitors matched to ad exposure, by name. Connect your CRM and you also get the report this page keeps mentioning: ICP-fit companies that saw your ads, visited your site, and aren't in your CRM yet.",
  },
  {
    q: "Is this just another MCP?",
    a: "Most MCPs give your AI raw access to one tool and make it do the joining. Anthropic's own engineering has written about tool definitions overloading context and models mis-copying data between tools. DemandSense does the joining before your AI ever sees the data. One record in, one answer out. Third-party benchmarks of unified data models point the same way: AI answer accuracy improved 17–23 percentage points when queries ran through a unified model (Cube, 2026 — a study of unified data models generally, not of this product).",
  },
  {
    q: "Where does the data come from?",
    a: "Three places. LinkedIn impression-level engagement through an official LinkedIn Marketing Partner integration, including data you can't export from Campaign Manager. Person and company-level identification of your website visitors. And your CRM, if you connect one.",
  },
  {
    q: "What does 'LinkedIn Buyer Intelligence' mean?",
    a: "LinkedIn Buyer Intelligence is the practice of joining LinkedIn ad exposure data with website visitor identity and CRM records to see which buyers your ads actually reach. DemandSense MCP is a LinkedIn Buyer Intelligence tool.",
  },
  {
    q: "What does it cost?",
    a: "Nothing during early access. It comes with a DemandSense install, which has a free 30-day trial. No card required.",
  },
  {
    q: "How do I get access?",
    a: "Join the waitlist. Onboarding runs in small batches during early access, so spots open as we go.",
  },
];

const McpFaq = () => {
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="faq"
      className="w-full bg-white py-16 md:py-24 lg:py-32 border-b border-gray-100 scroll-mt-24"
      aria-labelledby="mcp-faq-heading"
    >
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "max-w-2xl mx-auto text-center transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <div className="flex justify-center">
            <SectionBadge icon={HelpCircle} text="FAQ" />
          </div>
          <h2
            id="mcp-faq-heading"
            className="mt-6 text-[40px] font-bold text-gray-900 tracking-tight leading-[1.1]"
          >
            Questions people{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              ask
            </span>
          </h2>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-gray-100">
                <AccordionTrigger className="text-left font-semibold text-gray-900 py-6 hover:text-blue-600 transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default McpFaq;