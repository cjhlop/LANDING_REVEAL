"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { MessageSquareText, Check, Copy } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import { useInViewOnce } from "@/hooks/use-in-view-once";

type Prompt = {
  question: string;
  payoff: string;
  crm?: boolean;
};

const prompts: Prompt[] = [
  {
    question:
      "ICP-fit companies that saw our ads, visited, and aren't in our CRM yet.",
    payoff:
      "Net-new warm accounts your pipeline doesn't know exist. The report nobody else can hand you. It also catches the near-miss: accounts already in your CRM that never got a deal.",
    crm: true,
  },
  {
    question:
      "Which ICP-fit accounts are showing ad and site activity this week?",
    payoff:
      "A live watchlist on the accounts that matter, fused from ad and site signal.",
  },
  {
    question: "At [account], which people visited after seeing our ads?",
    payoff:
      "The buying committee by name and title, not a company logo and a guess.",
  },
  {
    question:
      "Which accounts are we paying to reach that have never once visited the site?",
    payoff: "Frequency you can cut tomorrow without touching pipeline.",
  },
  {
    question: "Who should sales call this week?",
    payoff:
      "A ranked list of accounts warmed by ads and active on the site right now.",
  },
  {
    question:
      "Which CRM accounts went quiet but keep visiting the site after seeing our ads?",
    payoff:
      "A re-engagement list nobody is working: no deal in sight, but still coming back after seeing your ads.",
    crm: true,
  },
  {
    question: "What changed for [account] this quarter?",
    payoff:
      "A QBR narrative built from ad exposure, site visits, and CRM stage changes.",
    crm: true,
  },
];

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = React.useState(false);
  const timer = React.useRef<number | null>(null);

  React.useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const handleCopy = () => {
    const done = () => {
      setCopied(true);
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1500);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(done).catch(done);
    } else {
      done();
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy this question"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[13px] font-medium transition-colors",
        copied
          ? "border-blue-200 text-blue-600"
          : "border-gray-200 text-gray-500 hover:border-blue-200 hover:text-blue-600"
      )}
    >
      {copied ? (
        <Check className="w-3.5 h-3.5" />
      ) : (
        <Copy className="w-3.5 h-3.5" />
      )}
      {copied ? "Copied" : "Copy"}
    </button>
  );
};

const PromptCard = ({ prompt, index }: { prompt: Prompt; index: number }) => {
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 2) * 80}ms` }}
      className={cn(
        "flex flex-col gap-3 bg-white border border-gray-100 rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-500 hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <p className="text-[17px] leading-snug font-semibold text-gray-900">
        {prompt.question}
      </p>
      <p className="text-sm leading-relaxed text-gray-500">{prompt.payoff}</p>
      <div className="flex items-center justify-between gap-3 mt-auto pt-2">
        {prompt.crm ? (
          <span className="inline-flex items-center rounded-md border border-blue-200 bg-blue-50 px-2 py-1 font-mono text-[10.5px] font-medium tracking-tight text-blue-600">
            with CRM
          </span>
        ) : (
          <span aria-hidden="true" />
        )}
        <CopyButton text={prompt.question} />
      </div>
    </div>
  );
};

const McpWhatElse = () => {
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="ask"
      className="w-full bg-[#F5F9FF] py-16 md:py-24 lg:py-32 border-b border-gray-100 scroll-mt-24"
      aria-labelledby="mcp-ask-heading"
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
            <SectionBadge
              icon={MessageSquareText}
              text="One question, one answer"
            />
          </div>
          <h2
            id="mcp-ask-heading"
            className="mt-6 text-[40px] font-bold text-gray-900 tracking-tight leading-[1.1]"
          >
            What else you can{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              ask
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed">
            Each of these is one question in your AI client. No exports, no
            dashboards, no stitching three tools together by hand.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-5xl mx-auto">
          {prompts.map((prompt, i) => (
            <PromptCard key={i} prompt={prompt} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default McpWhatElse;
