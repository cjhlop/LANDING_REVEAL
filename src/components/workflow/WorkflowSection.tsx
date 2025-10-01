import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Target, Search, Users, Zap, TrendingUp } from "lucide-react";
import ButtonGroup from "../ButtonGroup";

export type WorkflowSectionProps = {
  className?: string;
};

// Updated positions for more dramatic curve with steeper climbs and valleys
const WORKFLOW_STEPS = [
  {
    id: "sense",
    icon: Search,
    title: "Sense",
    description: "Identify anonymous website visitors and detect buying intent signals across LinkedIn and your website in real-time.",
    position: { x: 8, y: 88 }, // Start very low
    delay: 0,
  },
  {
    id: "segment",
    icon: Users,
    title: "Segment", 
    description: "Build strategic audiences using firmographic, demographic, and behavioral data to create highly targeted campaigns.",
    position: { x: 28, y: 65 }, // Steady climb
    delay: 400,
  },
  {
    id: "target",
    icon: Target,
    title: "Target",
    description: "Deploy precision LinkedIn campaigns with smart scheduling, frequency controls, and budget optimization.",
    position: { x: 58, y: 25 }, // DRAMATIC breakthrough jump
    delay: 800,
  },
  {
    id: "optimize",
    icon: Zap,
    title: "Optimize",
    description: "AI-powered campaign optimization automatically adjusts targeting, timing, and spend for maximum performance.",
    position: { x: 92, y: 8 }, // Rocket ship finale
    delay: 1200,
  },
];

const WorkflowSection: React.FC<WorkflowSectionProps> = ({ className }) => {
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: "0px 0px -20% 0px",
  });

  const [workflowRef, workflowInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
  });

  const [hoveredStep, setHoveredStep] = React.useState<string | null>(null);

  const handleGetStarted = () => {
    document.dispatchEvent(new CustomEvent("open-get-access"));
  };

  const handleLearnMore = () => {
    const featuresSection = document.getElementById("features-heading");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className={cn("workflow-section", className)}
      role="region"
      aria-labelledby="workflow-heading"
    >
      <div className="workflow-container">
        {/* Header */}
        <div ref={headerRef} className="workflow-header">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm border border-blue-100">
            <TrendingUp className="h-4 w-4" />
            HOW IT WORKS
          </div>
          
          {headerInView ? (
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight">
              DemandSense Gives You Complete<br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Control Over Your Pipeline</span>
            </h2>
          ) : (
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight opacity-0">
              DemandSense Gives You Complete Control Over Your Pipeline
            </h2>
          )}
          
          <h2 id="workflow-heading" className="sr-only">
            How DemandSense Works
          </h2>
          
          <p className={cn(
            "text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 transition-opacity duration-700",
            headerInView ? "opacity-100" : "opacity-0"
          )}>
            From anonymous visitors to qualified leads, DemandSense transforms your B2B marketing with intelligent automation and precise targeting.
          </p>

          {/* CTA Buttons */}
          <div className={cn(
            "transition-all duration-700 delay-300",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <ButtonGroup
              primaryLabel="Get Started"
              secondaryLabel="Watch Demo"
              onPrimaryClick={handleGetStarted}
              onSecondaryClick={handleLearnMore}
            />
          </div>
        </div>

        {/* Workflow Visualization */}
        <div 
          ref={workflowRef}
          className="workflow-visualization"
        >
          {/* Animated Path SVG */}
          <div className="workflow-path-container">
            <svg
              className="workflow-path-svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                {/* Enhanced gradient with more dramatic colors */}
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DC2626" stopOpacity="1" />
                  <stop offset="25%" stopColor="#EA580C" stopOpacity="1" />
                  <stop offset="50%" stopColor="#059669" stopOpacity="1" />
                  <stop offset="75%" stopColor="#2563EB" stopOpacity="1" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="1" />
                </linearGradient>
                
                {/* Variable thickness gradient for dramatic effect */}
                <linearGradient id="thicknessGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DC2626" stopOpacity="0.6" />
                  <stop offset="25%" stopColor="#EA580C" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#059669" stopOpacity="0.8" />
                  <stop offset="75%" stopColor="#2563EB" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="1" />
                </linearGradient>

                {/* Enhanced glow filter */}
                <filter id="dramaticGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feGaussianBlur stdDeviation="6" result="bigBlur"/>
                  <feMerge> 
                    <feMergeNode in="bigBlur"/>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                {/* Breakthrough moment glow */}
                <filter id="breakthroughGlow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feGaussianBlur stdDeviation="8" result="bigBlur"/>
                  <feGaussianBlur stdDeviation="12" result="hugeBlur"/>
                  <feMerge> 
                    <feMergeNode in="hugeBlur"/>
                    <feMergeNode in="bigBlur"/>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Background mega-glow for dramatic effect */}
              <path
                d="M 8 88 Q 15 85, 20 80 Q 25 75, 28 65 Q 35 50, 45 35 Q 52 28, 58 25 Q 70 15, 80 12 Q 86 9, 92 8"
                fill="none"
                stroke="url(#thicknessGradient)"
                strokeWidth="16"
                opacity="0.3"
                className={cn(
                  "transition-all duration-[5000ms] ease-out",
                  workflowInView ? "opacity-30" : "opacity-0"
                )}
                style={{
                  strokeDasharray: workflowInView ? "none" : "600",
                  strokeDashoffset: workflowInView ? "0" : "600",
                  transitionDelay: "400ms"
                }}
              />

              {/* Medium glow layer */}
              <path
                d="M 8 88 Q 15 85, 20 80 Q 25 75, 28 65 Q 35 50, 45 35 Q 52 28, 58 25 Q 70 15, 80 12 Q 86 9, 92 8"
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="8"
                opacity="0.6"
                filter="url(#dramaticGlow)"
                className={cn(
                  "transition-all duration-[4500ms] ease-out",
                  workflowInView ? "opacity-60" : "opacity-0"
                )}
                style={{
                  strokeDasharray: workflowInView ? "none" : "550",
                  strokeDashoffset: workflowInView ? "0" : "550",
                  transitionDelay: "600ms"
                }}
              />
              
              {/* Main Dynamic Growth Path - More dramatic with steeper climbs */}
              <path
                d="M 8 88 Q 15 85, 20 80 Q 25 75, 28 65 Q 35 50, 45 35 Q 52 28, 58 25 Q 70 15, 80 12 Q 86 9, 92 8"
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="3.5"
                filter="url(#breakthroughGlow)"
                className={cn(
                  "workflow-main-path transition-all duration-[4000ms] ease-out cursor-pointer",
                  workflowInView ? "opacity-100" : "opacity-0",
                  hoveredStep ? "drop-shadow-2xl" : ""
                )}
                style={{
                  strokeDasharray: workflowInView ? "none" : "500",
                  strokeDashoffset: workflowInView ? "0" : "500",
                  transitionDelay: "800ms"
                }}
                onMouseEnter={() => setHoveredStep("path")}
                onMouseLeave={() => setHoveredStep(null)}
              />

              {/* Breakthrough moment highlight - extra glow at the big jump */}
              <circle
                cx="58"
                cy="25"
                r="8"
                fill="none"
                stroke="#059669"
                strokeWidth="2"
                opacity="0"
                className={cn(
                  "transition-all duration-1000",
                  workflowInView ? "opacity-40 animate-pulse" : "opacity-0"
                )}
                style={{
                  transitionDelay: "3000ms",
                  filter: "url(#breakthroughGlow)"
                }}
              />
              
              {/* Step indicator circles with enhanced visibility */}
              {WORKFLOW_STEPS.map((step, index) => (
                <circle
                  key={`indicator-${step.id}`}
                  cx={step.position.x}
                  cy={step.position.y}
                  r="3"
                  fill="#fff"
                  stroke="url(#pathGradient)"
                  strokeWidth="2"
                  className={cn(
                    "transition-all duration-1000",
                    workflowInView ? "opacity-100 scale-100" : "opacity-0 scale-50",
                    hoveredStep === step.id ? "scale-150 drop-shadow-lg" : ""
                  )}
                  style={{
                    transitionDelay: `${1400 + (index * 300)}ms`,
                    filter: "url(#dramaticGlow)"
                  }}
                />
              ))}
            </svg>
          </div>

          {/* Workflow Steps with enhanced micro-interactions */}
          <div className="workflow-steps">
            {WORKFLOW_STEPS.map((step, index) => (
              <div
                key={step.id}
                className={cn(
                  "workflow-step group",
                  workflowInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-75"
                )}
                style={{
                  position: 'absolute',
                  left: `${step.position.x}%`,
                  top: `${step.position.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 30,
                  transition: 'all 1400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transitionDelay: workflowInView ? `${step.delay + 1600}ms` : '0ms'
                }}
                role="article"
                aria-label={`Step ${index + 1}: ${step.title}`}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Enhanced Icon Circle with micro-interactions */}
                <div className="workflow-step-icon-circle">
                  <div className={cn(
                    "workflow-step-icon-bg transition-all duration-300",
                    hoveredStep === step.id ? "scale-110 shadow-2xl" : "scale-100"
                  )}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Enhanced Pulse Animation with staggered timing */}
                  <div 
                    className={cn(
                      "workflow-step-pulse",
                      workflowInView ? "animate-ping" : ""
                    )}
                    style={{ 
                      animationDelay: `${step.delay + 3200}ms`,
                      animationDuration: '3s',
                      animationIterationCount: hoveredStep === step.id ? 'infinite' : '2'
                    }}
                  />
                  
                  {/* Breakthrough moment - extra dramatic pulse for "Target" */}
                  {step.id === 'target' && (
                    <div 
                      className={cn(
                        "absolute inset-0 w-12 h-12 rounded-xl bg-green-400 opacity-20",
                        workflowInView ? "animate-ping" : ""
                      )}
                      style={{ 
                        animationDelay: `${step.delay + 3800}ms`,
                        animationDuration: '2s',
                        animationIterationCount: '4'
                      }}
                    />
                  )}
                </div>

                {/* Enhanced Content Card with hover effects */}
                <div className={cn(
                  "workflow-step-card transition-all duration-300",
                  hoveredStep === step.id ? "scale-105 shadow-2xl bg-white/15" : "scale-100"
                )}>
                  <div className="workflow-step-content">
                    <h3 className="workflow-step-title">
                      {step.title}
                    </h3>
                    <p className="workflow-step-description">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(WorkflowSection);