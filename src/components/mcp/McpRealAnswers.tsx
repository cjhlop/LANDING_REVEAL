"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

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

/** Browser-window style report frame, tuned for the dark band. */
const ReportFrame = ({ alt }: { alt: string }) => (
  <div className="rounded-2xl border border-white/10 bg-white shadow-2xl shadow-black/30 overflow-hidden">
    <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-white">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
      </div>
      <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
        <span className="w-4 h-4 rounded bg-[#122D4D]" aria-hidden="true" />
        DemandSense
      </div>
    </div>
    {/* Screenshot placeholder */}
    <div
      className="aspect-[16/10] w-full bg-gray-50 flex items-center justify-center"
      role="img"
      aria-label={alt}
    >
      <span className="text-xs font-medium uppercase tracking-widest text-gray-300">
        Screenshot
      </span>
    </div>
  </div>
);

const McpRealAnswers = () => {
  return (
    <>
      <section
        id="answers"
        className="w-full bg-[#0F172A] text-slate-100 py-16 md:py-24 lg:py-32 scroll-mt-24"
        aria-labelledby="mcp-answers-heading"
      >
        <div className="max-w-[1216px] mx-auto px-5 md:px-6 lg:px-8">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-blue-400">
              Proof, not promises
            </p>
            <h2
              id="mcp-answers-heading"
              className="mt-3.5 text-[32px] md:text-[40px] font-bold tracking-tight leading-[1.15] text-white"
            >
              Real answers, not demo data
            </h2>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Every question on this page ran against a live account before it
              earned its place. When the data was thinner than it looked, the
              assistant said so instead of flattering the account. That honesty
              is deliberate — and tested. Three answers, exactly as returned;
              company names and spend redacted, nothing else edited.{" "}
              <b className="font-semibold text-white">
                Every report comes ready to download as HTML or PDF.
              </b>
            </p>
          </div>

          {/* Q&A blocks */}
          <div className="mt-12 md:mt-16 flex flex-col gap-14 md:gap-20">
            {answers.map((answer, i) => {
              const flipped = i % 2 === 1;
              return (
                <div
                  key={i}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                >
                  {/* Text column: question bubble + reply */}
                  <div
                    className={cn(
                      "flex flex-col gap-4",
                      flipped ? "lg:order-2" : "lg:order-1"
                    )}
                  >
                    <div className="self-start max-w-xl rounded-2xl rounded-bl-sm border border-white/15 bg-white/[0.07] p-4 md:p-5">
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-2">
                        You asked
                      </span>
                      <p className="text-lg md:text-xl leading-snug text-slate-50">
                        {answer.question}
                      </p>
                    </div>

                    <div className="flex items-start gap-3 max-w-xl">
                      <span
                        className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-md bg-[#122D4D]"
                        aria-hidden="true"
                      />
                      <div className="rounded-2xl rounded-tl-sm bg-white text-gray-800 p-4 md:p-5">
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                          DemandSense
                        </span>
                        <p className="text-[15px] leading-relaxed">
                          {answer.reply}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Screenshot column */}
                  <div className={flipped ? "lg:order-1" : "lg:order-2"}>
                    <ReportFrame alt={answer.alt} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Invisible anchor used by a later step (mobile sticky CTA) */}
      <span id="mbar-anchor" aria-hidden="true" />
    </>
  );
};

export default McpRealAnswers;
