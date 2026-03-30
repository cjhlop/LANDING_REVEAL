"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { useNavigate } from "react-router-dom";
import { 
  CheckCircle2, 
  Zap,
  Eye,
  MousePointer2,
  Target
} from "lucide-react";
import SectionBadge from "./SectionBadge";
import ButtonGroup from "./ButtonGroup";

const AudienceExplorerSection = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const cellsRef = React.useRef<HTMLDivElement>(null);
  const beamsRef = React.useRef<SVGSVGElement>(null);
  const innerRef = React.useRef<HTMLDivElement>(null);

  const features = [
    {
      title: "See which companies engage with your ads",
      desc: "Identify the companies interacting with your ads and which campaigns they respond to.",
      icon: MousePointer2,
      color: "blue"
    },
    {
      title: "See people and companies who visit your website",
      desc: "Connect ad engagement with website visits to understand interest.",
      icon: Eye,
      color: "orange"
    },
    {
      title: "Build audiences from real engagement",
      desc: "Turn engaged companies into audiences for your next campaigns.",
      icon: Target,
      color: "emerald"
    }
  ];

  React.useEffect(() => {
    if (!inView || !cellsRef.current || !beamsRef.current || !innerRef.current) return;

    const audiences = [
      'Fintech Founders - 15k',
      'IT Directors (US) - 89k',
      'Fortune 500 VPs - 42k',
      'SaaS Decision Makers - 124k',
      'Marketing Ops - 67k',
      'B2B CMOs - 28k',
      'RevOps Leaders - 33k',
    ];

    const nodePositions = [
      [0,0],[1,0],[5,1],[1,2],
      [5,2],[1,4],[3,4],[5,4],
      [3,5],[5,5],
    ];

    const hiddenPositions = [[3,1],[4,1],[3,2],[4,2]];
    const COLS = 6;
    const ROWS = 6;

    // Clear existing
    cellsRef.current.innerHTML = '';
    beamsRef.current.innerHTML = '';

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const i = row * COLS + col;
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.style.cssText = `
          border: 1px solid #f1f5f9;
          transition: all 0.5s ease;
          transition-delay: ${i * 15}ms;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
        `;

        const isHidden = hiddenPositions.some(([c,r]) => c === col && r === row);
        if (isHidden) cell.style.opacity = '0';

        const nodeIdx = nodePositions.findIndex(([c,r]) => c === col && r === row);
        if (nodeIdx !== -1) {
          cell.style.borderColor = 'rgba(56,117,246,0.4)';
          const node = document.createElement('div');
          node.className = 'grid-node';
          node.title = audiences[nodeIdx % audiences.length];
          node.style.cssText = `
            width: 8px;
            height: 8px;
            background: #3875F6;
            border-radius: 50%;
            position: relative;
          `;
          
          const ping = document.createElement('div');
          ping.style.cssText = `
            position: absolute;
            inset: -4px;
            border: 1px solid #3875F6;
            border-radius: 50%;
            animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
            animation-delay: ${nodeIdx * 0.4}s;
          `;
          node.appendChild(ping);
          cell.appendChild(node);
        }

        cellsRef.current.appendChild(cell);
      }
    }

    // Draw beams using actual container dimensions
    const rect = innerRef.current.getBoundingClientRect();
    const W = rect.width;
    const H = rect.height;
    const pad = 16;
    const gap = 6;
    const cellW = (W - pad * 2 - gap * (COLS - 1)) / COLS;
    const cellH = (H - pad * 2 - gap * (ROWS - 1)) / ROWS;
    const cx = W / 2;
    const cy = H / 2;

    beamsRef.current.setAttribute('viewBox', `0 0 ${W} ${H}`);

    const durations = [2.86, 2.84, 2.98, 2.13, 2.21, 2.96, 3.75, 2.41, 2.6, 2.3];

    nodePositions.forEach(([col, row], i) => {
      const x = pad + col * (cellW + gap) + cellW / 2;
      const y = pad + row * (cellH + gap) + cellH / 2;
      const dur = durations[i % durations.length];

      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', cx.toString());
      line.setAttribute('y1', cy.toString());
      line.setAttribute('x2', x.toString());
      line.setAttribute('y2', y.toString());
      line.setAttribute('stroke', 'rgba(56,117,246,0.15)');
      line.setAttribute('stroke-width', '1');
      
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('r', '2.5');
      circle.setAttribute('fill', '#3875F6');
      
      const animMotion = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
      animMotion.setAttribute('dur', `${dur}s`);
      animMotion.setAttribute('repeatCount', 'indefinite');
      animMotion.setAttribute('path', `M ${cx} ${cy} L ${x} ${y}`);
      
      const animOpacity = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
      animOpacity.setAttribute('attributeName', 'opacity');
      animOpacity.setAttribute('values', '0;1;0');
      animOpacity.setAttribute('dur', `${dur}s`);
      animOpacity.setAttribute('repeatCount', 'indefinite');
      
      circle.appendChild(animMotion);
      circle.appendChild(animOpacity);
      g.appendChild(line);
      g.appendChild(circle);
      beamsRef.current?.appendChild(g);
    });

  }, [inView]);

  return (
    <section 
      ref={ref}
      className="w-full bg-[#F5F9FF] px-6 sm:px-12 md:px-[112px] py-16 md:py-24 lg:py-40 overflow-hidden border-b border-gray-100"
    >
      <style>{`
        @property --rotate {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes spin {
          from { --rotate: 0deg; }
          to   { --rotate: 360deg; }
        }

        #grid-magic-border {
          position: relative;
          --magic-radius: 1.5rem;
          border-radius: var(--magic-radius);
          padding: 3px;
          height: auto;
          width: 100%;
          background: conic-gradient(
            from var(--rotate) at 50% 50%,
            #3875F6, #A3C7FF, #FA8C16, #A3C7FF, #3875F6
          );
          animation: spin 5s linear infinite;
        }

        #grid-magic-border > * {
          border-radius: calc(var(--magic-radius) - 3px);
          overflow: hidden;
        }

        .grid-inner {
          height: 100%;
          width: 100%;
          background: white;
          border-radius: inherit;
          position: relative;
          overflow: hidden;
          aspect-ratio: 1;
        }

        .grid-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#e2e8f0 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.4;
        }

        .grid-cells {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: repeat(6, 1fr);
          gap: 6px;
          padding: 16px;
          z-index: 1;
        }

        .grid-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 3;
        }

        .center-hub {
          width: 80px;
          height: 80px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          position: relative;
        }

        .center-ping {
          position: absolute;
          inset: -4px;
          border-radius: 24px;
          border: 2px solid #3875F6;
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          opacity: 0;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(1.4);
            opacity: 0;
          }
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
        }

        .grid-beams {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
        }
      `}</style>

      <div className="max-w-[1216px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Content */}
        <div className="lg:col-span-5 space-y-6 md:space-y-8 order-1 text-center lg:text-left">
          <div className={cn(
            "flex justify-center lg:justify-start transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <SectionBadge icon={Zap} text="EXPAND WHAT WORKS" />
          </div>

          <h2 className={cn(
            "text-[40px] font-bold text-gray-900 tracking-tight leading-[1.1] transition-all duration-700 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Use engagement signals to reach companies showing intent
          </h2>

          <p className={cn(
            "text-base text-gray-600 leading-relaxed transition-all duration-700 delay-200 max-w-2xl mx-auto lg:mx-0",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            See which companies engage and use that to decide where to put more budget next. Connect ad activity with website visits and act on it.
          </p>

          <div className="space-y-3 max-w-xl mx-auto lg:mx-0">
            {features.map((item, i) => (
              <div 
                key={i}
                className={cn(
                  "group relative flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-white transition-all duration-500 hover:border-blue-200 hover:shadow-sm",
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                )}
                style={{ transitionDelay: `${(i * 150) + 400}ms` }}
              >
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110",
                  item.color === 'blue' ? "bg-blue-50 text-blue-600" :
                  item.color === 'orange' ? "bg-orange-50 text-orange-600" :
                  "bg-emerald-50 text-emerald-600"
                )}>
                  <item.icon className="size-4" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900">{item.title}</h4>
                  <p className="text-[10px] sm:text-xs text-gray-500 leading-tight">{item.desc}</p>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="size-3.5 text-blue-600" />
                </div>
              </div>
            ))}
          </div>

          <div className={cn(
            "pt-4 transition-all duration-700 delay-800 flex justify-center lg:justify-start",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <ButtonGroup 
              primaryLabel="Try It Now" 
              secondaryLabel="Read More"
              onSecondaryClick={() => navigate("/website-visitors")}
              size="lg"
            />
          </div>
        </div>

        {/* Right: Grid Animation Visual */}
        <div className="lg:col-span-7 relative order-2">
          <div className={cn(
            "relative w-full transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            <div className="magic-border" id="grid-magic-border">
              <div className="grid-inner" ref={innerRef}>
                <div className="grid-bg"></div>
                <div className="grid-cells" ref={cellsRef}></div>
                <svg className="grid-beams" ref={beamsRef} aria-hidden="true"></svg>
                <div className="grid-center">
                  <div className="center-hub">
                    <div className="center-inner">
                      <div className="center-logo">
                        <svg width="100%" height="100%" viewBox="0 0 48 58"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.0066 0.169122H18.7844V18.0483H19.0066
                            C20.4392 18.0097 21.865 18.2584 23.1998 18.78
                            C24.5347 19.3015 25.7515 20.0852 26.7784 21.0848
                            C27.8053 22.0844 28.6215 23.2796 29.1789 24.5999
                            C29.7362 25.9202 30.0234 27.3388 30.0234 28.7719
                            C30.0234 30.205 29.7362 31.6235 29.1789 32.9438
                            C28.6215 34.2641 27.8053 35.4593 26.7784 36.4589
                            C25.7515 37.4585 24.5347 38.2422 23.1998 38.7638
                            C21.865 39.2853 20.4392 39.5341 19.0066 39.4955
                            H18.7844V57.3746H19.0066
                            C22.7912 57.4188 26.5468 56.7116 30.0561 55.2939
                            C33.5653 53.8762 36.7583 51.7762 39.4502 49.1156
                            C42.142 46.4551 44.2791 43.2868 45.7377 39.7943
                            C47.1962 36.3019 47.9473 32.5547 47.9473 28.7699
                            C47.9473 24.9851 47.1962 21.238 45.7377 17.7455
                            C44.2791 14.2531 42.142 11.0848 39.4502 8.42423
                            C36.7583 5.76365 33.5653 3.66368 30.0561 2.24597
                            C26.5468 0.828274 22.7912 0.121031 19.0066 0.165219
                            V0.169122Z" fill="#122D4D"/>
                          <path d="M18.7844 18.0643L0.000549316 0.169495
                            V57.492L18.7844 39.3516V18.0643Z" fill="#FA8C16"/>
                        </svg>
                        <div className="center-ping"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AudienceExplorerSection;