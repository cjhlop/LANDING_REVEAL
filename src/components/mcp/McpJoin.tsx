"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { GitMerge } from "lucide-react";
import SectionBadge from "@/components/SectionBadge";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import LogoSlot from "@/components/mcp/LogoSlot";
import demandsenseLogo from "@/assets/demandsense.png";

const SOURCES = [
  { title: "LinkedIn ad exposure", sub: "impression-level" },
  { title: "Identified website visitors", sub: "person + company" },
  { title: "CRM state", sub: "optional" },
];

const CLIENTS = [
  { name: "Claude", src: "/assets/logo-claude.png" },
  { name: "ChatGPT", src: "/assets/logo-chatgpt.png" },
];

type Pt = { x: number; y: number };
type Conn = { d: string; head: Pt; angle: number };

const McpJoin = () => {
  const [ref, inView] = useInViewOnce<HTMLDivElement>({ threshold: 0.1 });
  const [diagramRef, diagramInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
  });

  // Refs for measuring real positions
  const stageRef = React.useRef<HTMLDivElement>(null);
  const sourceRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const boxRef = React.useRef<HTMLDivElement>(null);
  const clientRef = React.useRef<HTMLDivElement>(null);

  const [size, setSize] = React.useState({ w: 0, h: 0 });
  const [conns, setConns] = React.useState<Conn[]>([]);

  const measure = React.useCallback(() => {
    const stage = stageRef.current;
    const box = boxRef.current;
    const client = clientRef.current;
    if (!stage || !box || !client) return;

    const base = stage.getBoundingClientRect();
    const rel = (r: DOMRect) => ({
      left: r.left - base.left,
      right: r.right - base.left,
      top: r.top - base.top,
      bottom: r.bottom - base.top,
      cy: r.top - base.top + r.height / 2,
    });

    const b = rel(box.getBoundingClientRect());
    const c = rel(client.getBoundingClientRect());

    // extend into elements by this many px for visible contact
    const bite = 3;

    const next: Conn[] = [];

    // three source -> box left edge
    sourceRefs.current.forEach((el) => {
      if (!el) return;
      const s = rel(el.getBoundingClientRect());
      const startX = s.right - bite; // start inside the card
      const startY = s.cy;
      const endX = b.left + bite; // end inside the box
      const endY = b.cy;
      // horizontal control points for a smooth S / straight
      const midX = (startX + endX) / 2;
      const d = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
      next.push({ d, head: { x: endX, y: endY }, angle: 0 });
    });

    // box right edge -> client left edge
    {
      const startX = b.right - bite;
      const startY = b.cy;
      const endX = c.left + bite;
      const endY = c.cy;
      const midX = (startX + endX) / 2;
      const d = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
      next.push({ d, head: { x: endX, y: endY }, angle: 0 });
    }

    setSize({ w: base.width, h: base.height });
    setConns(next);
  }, []);

  React.useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(() => measure());
    if (stageRef.current) ro.observe(stageRef.current);
    window.addEventListener("resize", measure);
    // remeasure after fonts/layout settle
    const t = setTimeout(measure, 300);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, [measure]);

  React.useEffect(() => {
    if (diagramInView) measure();
  }, [diagramInView, measure]);

  return (
    <section
      className="w-full bg-[#F5F9FF] py-16 md:py-24 lg:py-32 border-b border-gray-100"
      aria-labelledby="mcp-join-heading"
    >
      <style>{`
        .mcp-join-border {
          position: relative;
          --magic-radius: 1rem;
          border-radius: var(--magic-radius);
          padding: 2px;
          background: conic-gradient(
            from var(--rotate, 0deg) at 50% 50%,
            #3875F6, #A3C7FF, #FA8C16, #A3C7FF, #3875F6
          );
          animation: spin 5s linear infinite;
        }
        .mcp-join-border > * {
          border-radius: calc(var(--magic-radius) - 2px);
        }
        .mcp-join-border::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: var(--magic-radius);
          background: conic-gradient(
            from var(--rotate, 0deg) at 50% 50%,
            #3875F6, #A3C7FF, #FA8C16, #A3C7FF, #3875F6
          );
          filter: blur(18px);
          opacity: 0.55;
          animation: spin 5s linear infinite;
          pointer-events: none;
          z-index: -1;
        }

        @media (prefers-reduced-motion: reduce) {
          .mcp-svg-particle { display: none; }
          .mcp-join-border,
          .mcp-join-border::after { animation: none; }
        }
      `}</style>

      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={cn(
            "max-w-3xl mx-auto text-center transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <div className="flex justify-center">
            <SectionBadge icon={GitMerge} text="The join" />
          </div>
          <h2
            id="mcp-join-heading"
            className="mt-6 text-[40px] font-bold text-gray-900 tracking-tight leading-[1.1]"
          >
            What DemandSense MCP does{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              differently
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed">
            You already pipe LinkedIn, your CRM, and a visitor-ID tool into
            Claude through separate connectors. The catch: your AI then has to
            join three raw feeds itself — reconciling what each one means,
            carrying data between calls, mis-copying on the way. DemandSense
            joins them into one buyer record before the model ever sees it.
          </p>
        </div>

        {/* Diagram */}
        <div
          ref={diagramRef}
          className={cn(
            "mt-14 md:mt-20 transition-all duration-700",
            diagramInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          aria-label="Diagram: three data streams — LinkedIn ad exposure, identified website visitors, and CRM state — are joined into one buyer record, which is queryable from Claude and ChatGPT."
        >
          {/* Desktop: horizontal, 3 columns; SVG measured against this stage */}
          <div
            ref={stageRef}
            className="hidden md:grid grid-cols-[1fr_auto_1fr_auto_auto] items-center gap-x-16 lg:gap-x-24 relative"
          >
            {/* Measured SVG layer: connector lines AND particle dots share one coordinate system */}
            <svg
              className="absolute inset-0 pointer-events-none z-20"
              width={size.w}
              height={size.h}
              viewBox={`0 0 ${size.w || 1} ${size.h || 1}`}
              aria-hidden="true"
            >
              <defs>
                <filter
                  id="mcp-glow-blue"
                  x="-200%"
                  y="-200%"
                  width="500%"
                  height="500%"
                >
                  <feDropShadow
                    dx="0"
                    dy="0"
                    stdDeviation="3"
                    floodColor="#3875F6"
                    floodOpacity="0.7"
                  />
                </filter>
                <filter
                  id="mcp-glow-orange"
                  x="-200%"
                  y="-200%"
                  width="500%"
                  height="500%"
                >
                  <feDropShadow
                    dx="0"
                    dy="0"
                    stdDeviation="3"
                    floodColor="#FA8C16"
                    floodOpacity="0.7"
                  />
                </filter>
              </defs>

              {/* Static connector lines, each with a stable id its particle rides */}
              {conns.map((c, i) => (
                <path
                  key={`line-${i}`}
                  id={`mcp-path-${i}`}
                  d={c.d}
                  fill="none"
                  stroke="#3875F6"
                  strokeOpacity={0.2}
                  strokeWidth={1.5}
                />
              ))}

              {/* Particle dots — SVG circles riding the SAME path via mpath */}
              {conns.map((c, i) => (
                <React.Fragment key={`dot-${i}`}>
                  <circle
                    className="mcp-svg-particle"
                    r={3}
                    fill="#3875F6"
                    filter="url(#mcp-glow-blue)"
                  >
                    <animateMotion
                      dur="3s"
                      begin={`${i * 0.5}s`}
                      repeatCount="indefinite"
                      rotate="0"
                      calcMode="linear"
                    >
                      <mpath href={`#mcp-path-${i}`} />
                    </animateMotion>
                  </circle>

                  {/* Right/output path only (index 3): second orange accent dot */}
                  {i === 3 && (
                    <circle
                      className="mcp-svg-particle"
                      r={3}
                      fill="#FA8C16"
                      filter="url(#mcp-glow-orange)"
                    >
                      <animateMotion
                        dur="3s"
                        begin={`${i * 0.5 + 1.5}s`}
                        repeatCount="indefinite"
                        rotate="0"
                        calcMode="linear"
                      >
                        <mpath href={`#mcp-path-${i}`} />
                      </animateMotion>
                    </circle>
                  )}
                </React.Fragment>
              ))}
            </svg>

            {/* Col 1: Sources */}
            <div className="flex flex-col gap-6 relative z-10">
              {SOURCES.map((s, i) => (
                <div
                  key={s.title}
                  ref={(el) => (sourceRefs.current[i] = el)}
                  className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex items-center gap-3"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3875F6] flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[15px] font-semibold text-gray-900 leading-tight">
                      {s.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Col 2: spacer */}
            <div aria-hidden="true" />

            {/* Col 3: Join node with animated magic border */}
            <div className="flex justify-center relative z-10">
              <div className="mcp-join-border" ref={boxRef}>
                <div className="bg-[#122D4D] px-10 py-10 text-center shadow-xl relative">
                  <img
                    src={demandsenseLogo}
                    alt="DemandSense"
                    className="absolute top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-md"
                  />
                  <div className="text-white font-bold text-lg leading-tight mt-4">
                    One buyer
                    <br />
                    record
                  </div>
                </div>
              </div>
            </div>

            {/* Col 4: spacer */}
            <div aria-hidden="true" />

            {/* Col 5: Clients */}
            <div className="relative z-10" ref={clientRef}>
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-3">
                  Your AI client
                </div>
                <div className="flex gap-3 justify-center">
                  {CLIENTS.map((c) => (
                    <LogoSlot key={c.name} src={c.src} name={c.name} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: vertical */}
          <div className="md:hidden flex flex-col items-center gap-4">
            <div className="flex flex-col gap-3 w-full">
              {SOURCES.map((s) => (
                <div
                  key={s.title}
                  className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex items-center gap-3"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3875F6] flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-gray-900 leading-tight">
                      {s.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-0 h-6 border-l-2 border-blue-200" aria-hidden="true" />

            <div className="mcp-join-border w-40">
              <div className="bg-[#122D4D] px-8 py-6 text-center shadow-xl relative">
                <img
                  src={demandsenseLogo}
                  alt="DemandSense"
                  className="absolute top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-md"
                />
                <div className="text-white font-bold text-lg leading-tight mt-4">
                  One buyer
                  <br />
                  record
                </div>
              </div>
            </div>

            <div className="w-0 h-6 border-l-2 border-blue-200" aria-hidden="true" />

            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm w-full text-center">
              <div className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-3">
                Your AI client
              </div>
              <div className="flex gap-3 justify-center">
                {CLIENTS.map((c) => (
                  <LogoSlot key={c.name} src={c.src} name={c.name} />
                ))}
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500 leading-relaxed">
            Joined once, on our side — not three connectors your AI has to
            reconcile on every question.
          </p>
        </div>

        {/* Prose */}
        <div className="mt-12 max-w-2xl mx-auto space-y-4">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            Three streams become one record before your AI ever sees the data.
            That is the whole product: DemandSense resolves website visitors at
            the person and company level, not only by reverse-IP company lookup,
            and matches that identity to impression-level LinkedIn ad engagement
            and to your CRM.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            Because the join happens first, your AI burns fewer tokens and gets
            fewer answers wrong than it would stitching three connectors
            together on every question.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            The LinkedIn side runs on advanced Marketing Partner APIs most ads
            managers never touch — engagement you can't pull from Campaign
            Manager. Where LinkedIn's own company hub stops at 15,000 companies,
            DemandSense reads the whole file, even past 50,000.
          </p>
          <p className="text-lg font-semibold text-gray-900 leading-relaxed">
            DemandSense does the joining before your AI ever sees the data. One
            record in, one answer out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default McpJoin;