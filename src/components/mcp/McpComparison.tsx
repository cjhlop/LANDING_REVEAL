"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { LayoutGrid, Check, Minus, X, Info } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type State = "yes" | "partial" | "no";

type Cell = {
  state: State;
  tip?: string;
};

type Row = {
  capability: string;
  weight?: boolean;
  ds: Cell;
  fibbler: Cell;
  vector: Cell;
  zenabm: Cell;
  pipes: Cell;
};

const columns: { key: string; label: string; ds?: boolean }[] = [
  { key: "ds", label: "DemandSense MCP", ds: true },
  { key: "fibbler", label: "Fibbler" },
  { key: "vector", label: "Vector" },
  { key: "zenabm", label: "ZenABM" },
  { key: "pipes", label: "Data pipes" },
];

const rows: Row[] = [
  {
    capability: "LinkedIn ad engagement over MCP",
    ds: { state: "yes", tip: "Impression-level" },
    fibbler: { state: "yes", tip: "Impression-level" },
    vector: { state: "yes" },
    zenabm: { state: "yes" },
    pipes: { state: "partial", tip: "Export-level, not native MCP" },
  },
  {
    capability: "Website visitor identity",
    ds: { state: "yes", tip: "Person + company" },
    fibbler: { state: "partial", tip: "Company-level only — no PII by design" },
    vector: { state: "yes", tip: "Person-level" },
    zenabm: { state: "no", tip: "Not shipped yet" },
    pipes: { state: "no" },
  },
  {
    capability: "CRM state in the same answer",
    ds: { state: "yes", tip: "Optional" },
    fibbler: { state: "partial", tip: "Required to start" },
    vector: { state: "no" },
    zenabm: { state: "yes" },
    pipes: { state: "no" },
  },
  {
    capability: "All three streams joined in one record",
    weight: true,
    ds: { state: "yes" },
    fibbler: { state: "no" },
    vector: { state: "no" },
    zenabm: { state: "no" },
    pipes: { state: "no" },
  },
  {
    capability: "Works without a CRM connected",
    ds: { state: "yes" },
    fibbler: { state: "no" },
    vector: { state: "yes" },
    zenabm: { state: "yes" },
    pipes: { state: "yes" },
  },
];

const stateStyles: Record<State, string> = {
  yes: "bg-emerald-50 text-emerald-600 ring-1 ring-inset ring-emerald-200",
  partial: "bg-amber-50 text-amber-600 ring-1 ring-inset ring-amber-200",
  no: "bg-red-50 text-red-500 ring-1 ring-inset ring-red-200",
};

const StateIcon = ({ state }: { state: State }) => {
  if (state === "yes") return <Check className="w-3.5 h-3.5" strokeWidth={3} />;
  if (state === "partial")
    return <Minus className="w-3.5 h-3.5" strokeWidth={3} />;
  return <X className="w-3.5 h-3.5" strokeWidth={3} />;
};

const StatusBadge = ({ cell }: { cell: Cell }) => {
  const badge = (
    <span
      className={cn(
        "inline-flex items-center justify-center w-6 h-6 rounded-full",
        stateStyles[cell.state]
      )}
    >
      <StateIcon state={cell.state} />
    </span>
  );

  return (
    <div className="inline-flex items-center justify-center gap-1.5">
      {badge}
      {cell.tip && (
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-blue-200 text-blue-500 hover:bg-blue-50"
              aria-label={cell.tip}
            >
              <Info className="w-2.5 h-2.5" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="max-w-[190px] text-center">
            {cell.tip}
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  );
};

const LegendItem = ({ state, label }: { state: State; label: string }) => (
  <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-gray-700">
    <span
      className={cn(
        "inline-flex items-center justify-center w-4 h-4 rounded-full",
        stateStyles[state]
      )}
    >
      <StateIcon state={state} />
    </span>
    {label}
  </span>
);

const McpComparison = () => {
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.1 });
  const [tableRef, tableInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.05,
  });

  return (
    <TooltipProvider delayDuration={100}>
      <section
        id="compare"
        className="w-full bg-white py-16 md:py-24 lg:py-32 border-b border-gray-100 scroll-mt-24"
        aria-labelledby="mcp-compare-heading"
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
              <SectionBadge icon={LayoutGrid} text="The landscape" />
            </div>
            <h2
              id="mcp-compare-heading"
              className="mt-6 text-[40px] font-bold text-gray-900 tracking-tight leading-[1.1]"
            >
              Where this sits among the{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                tools you know
              </span>
            </h2>
            <p className="mt-6 text-xl text-gray-500 leading-relaxed">
              These are all reasonable tools. The difference is which streams
              they join. As of July 2026:
            </p>
          </div>

          <div
            ref={tableRef}
            className={cn(
              "mt-12 md:mt-16 rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-700",
              tableInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] border-collapse text-sm">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="sticky left-0 z-10 bg-[#122D4D] text-left align-bottom px-4 py-4 text-[13px] font-semibold text-white"
                    >
                      Capability
                    </th>
                    {columns.map((col) => (
                      <th
                        key={col.key}
                        scope="col"
                        className={cn(
                          "align-bottom px-4 py-4 text-center text-[13px] font-semibold text-white leading-tight",
                          col.ds ? "bg-[#24397A]" : "bg-[#122D4D]"
                        )}
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => {
                    const cells: Cell[] = [
                      row.ds,
                      row.fibbler,
                      row.vector,
                      row.zenabm,
                      row.pipes,
                    ];
                    return (
                      <tr key={i} className="border-t border-gray-100">
                        <th
                          scope="row"
                          className={cn(
                            "sticky left-0 z-[1] text-left px-4 py-4 text-[13.5px] font-semibold text-gray-900 border-r border-gray-100 leading-snug",
                            row.weight ? "bg-blue-50/70" : "bg-white"
                          )}
                        >
                          {row.capability}
                        </th>
                        {cells.map((cell, ci) => {
                          const isDs = ci === 0;
                          return (
                            <td
                              key={ci}
                              className={cn(
                                "px-4 py-4 text-center align-middle",
                                isDs
                                  ? row.weight
                                    ? "bg-blue-100/70"
                                    : "bg-blue-50/60"
                                  : row.weight
                                    ? "bg-blue-50/70"
                                    : i % 2 === 1
                                      ? "bg-[#FAFCFF]"
                                      : "bg-white"
                              )}
                            >
                              <StatusBadge cell={cell} />
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12.5px] text-gray-500 leading-relaxed">
            <span className="inline-flex flex-wrap items-center gap-x-4 gap-y-2">
              <LegendItem state="yes" label="Yes" />
              <LegendItem state="partial" label="Partial" />
              <LegendItem state="no" label="No" />
            </span>
            <span>
              Availability as published by each vendor, July 2026. Hover any{" "}
              <Info className="inline w-3 h-3 -mt-0.5 text-blue-500" /> for
              detail.
            </span>
          </p>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default McpComparison;
