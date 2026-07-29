"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ShieldCheck, Maximize2 } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import demandsenseLogo from "@/assets/demandsense.png";

type Answer = {
  question: string;
  alt: string;
  reply: string;
};

const answers: Answer[] = [
  {
    question:
      "Which open opportunities saw our LinkedIn ads before they entered the pipeline?",
    alt: "Opportunities report: accounts with the highest LinkedIn engagement scores, open deal counts and pipeline value over the last 90 days. Company names and spend redacted.",
    reply:
      "A few notes: two accounts stand out with very high engagement scores (5,800+), meaning they had heavy LinkedIn ad exposure before landing in your pipeline. Strong signal these ads did real work as top-of-funnel warmers. One agency has the most open deals (3) and the highest pipeline value ($27.7K) of the group. These figures reflect the last 90 days of pipeline activity against a 90-day LinkedIn engagement lookback.",
  },
  {
    question: "Brief me on [account] before my call.",
    alt: "Call brief for a single account: ad impressions across campaigns, click count, and site-visit behaviour. Company name and spend redacted.",
    reply:
      'Important reality-check before this call: the picture is thinner than the headline "highest engagement score" suggests. They\'ve been exposed to your ads 5,676 times across 16 campaigns, but only clicked three times, all from a single mid-funnel retargeting campaign. And the one recorded site visit lasted 0 seconds — a bounce, not a real read. So don\'t walk in assuming deep familiarity with your content. A better opener is introducing what you do rather than referencing pages they\'ve "already seen," since the behavioral evidence doesn\'t support that they\'ve absorbed much of it.',
  },
  {
    question:
      "Draft this month's client report: reach, identified visitors, top engaged accounts, versus last month.",
    alt: "Monthly client report: reach, identified sessions, identification rate and top engaged accounts, compared month over month. Company names and spend redacted.",
    reply:
      "Now with two clean full months, a real trend emerges: June's extra budget bought fewer raw impressions per dollar (−4.7% daily impressions). Despite that, identified sessions more than doubled (+108%) and the identification rate nearly doubled too (6.3% → 12.2%). There's now a genuine 3-month trend worth calling out: identification rate has climbed every month — 6.3% → 12.2% → 22.8%. That's not noise, that's a real trajectory, and it's happening while raw reach has stayed flat.",
  },
];

/** Dark product window frame, matching the app's chat/report panels. */
const ReportFrame = ({
  alt,
  onOpen,
}: {
  alt: string;
  onOpen: () => void;
}) => (
  <button
    type="button"
    onClick={onOpen}
    aria-label="Open full report"
    className="group block w-full text-left rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden cursor-zoom-in"
  >
    <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-800 bg-slate-900/50">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
      </div>
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
        <img
          src={demandsenseLogo}
          alt=""
          aria-hidden="true"
          className="w-4 h-4 rounded"
        />
        DemandSense
      </div>
    </div>
    {/* Screenshot placeholder */}
    <div
      className="relative aspect-[16/10] w-full bg-slate-950 flex items-center justify-center"
      role="img"
      aria-label={alt}
    >
      <span className="text-[11px] font-medium uppercase tracking-widest text-slate-600">
        Screenshot
      </span>
      <span className="absolute bottom-3 right-3 w-9 h-9 rounded-lg bg-white/90 text-gray-900 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
        <Maximize2 className="w-4 h-4" />
      </span>
    </div>
  </button>
);

const AnswerBlock = ({
  answer,
  index,
  onOpen,
}: {
  answer: Answer;
  index: number;
  onOpen: (alt: string) => void;
}) => {
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.15 });
  const flipped = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      {/* Text column: question bubble + reply — both left-anchored */}
      <div
        className={cn(
          "flex flex-col gap-4",
          flipped ? "lg:order-2" : "lg:order-1"
        )}
      >
        {/* You asked — indented from left, capped ~85%, blue tint */}
        <div className="ml-[15%] w-[85%] rounded-2xl rounded-br-md border border-blue-100 bg-blue-50/60 p-4 md:p-5 shadow-sm">
          <span className="block text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-2">
            You asked
          </span>
          <p className="text-lg md:text-xl leading-snug text-gray-900">
            {answer.question}
          </p>
        </div>

        {/* DemandSense reply — flush left with avatar, capped ~95% */}
        <div className="flex items-start gap-3 w-[95%]">
          <img
            src={demandsenseLogo}
            alt=""
            aria-hidden="true"
            className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg"
          />
          <div className="rounded-2xl rounded-tl-md border border-gray-100 bg-white text-gray-600 p-4 md:p-5 shadow-sm">
            <span className="block text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
              DemandSense
            </span>
            <p className="text-[15px] leading-relaxed">{answer.reply}</p>
          </div>
        </div>
      </div>

      {/* Screenshot column */}
      <div className={flipped ? "lg:order-1" : "lg:order-2"}>
        <ReportFrame alt={answer.alt} onOpen={() => onOpen(answer.alt)} />
      </div>
    </div>
  );
};

const McpRealAnswers = ({
  onOpenLightbox,
}: {
  onOpenLightbox: (alt: string) => void;
}) => {
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.1 });

  return (
    <>
      <section
        id="answers"
        className="w-full bg-[#F5F9FF] py-16 md:py-24 lg:py-32 border-b border-gray-100 scroll-mt-24"
        aria-labelledby="mcp-answers-heading"
      >
        <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div
            ref={ref}
            className={cn(
              "max-w-3xl mx-auto text-center transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="flex justify-center">
              <SectionBadge icon={ShieldCheck} text="Proof, not promises" />
            </div>
            <h2
              id="mcp-answers-heading"
              className="mt-6 text-[40px] font-bold text-gray-900 tracking-tight leading-[1.1]"
            >
              Real answers,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                not demo data
              </span>
            </h2>
            <p className="mt-6 text-xl text-gray-500 leading-relaxed">
              Every question on this page ran against a live account before it
              earned its place. When the data was thinner than it looked, the
              assistant said so instead of flattering the account. That honesty
              is deliberate — and tested. Three answers, exactly as returned;
              company names and spend redacted, nothing else edited.{" "}
              <b className="font-semibold text-gray-800">
                Every report comes ready to download as HTML or PDF.
              </b>
            </p>
          </div>

          {/* Q&A blocks */}
          <div className="mt-12 md:mt-20 flex flex-col gap-14 md:gap-24">
            {answers.map((answer, i) => (
              <AnswerBlock
                key={i}
                answer={answer}
                index={i}
                onOpen={onOpenLightbox}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Anchor used by the mobile sticky CTA bar */}
      <span id="mbar-anchor" aria-hidden="true" />
    </>
  );
};

export default McpRealAnswers;