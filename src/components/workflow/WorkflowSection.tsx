import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Target, Search, Users, Zap, TrendingUp } from "lucide-react";
import ButtonGroup from "../ButtonGroup";

export type WorkflowSectionProps = {
  className?: string;
};

// Updated positions to match the new dynamic growth curve
const WORKFLOW_STEPS = [
  {
    id: "sense",
    icon: Search,
    title: "Sense",
    description: "Identify anonymous website visitors and detect buying intent signals across LinkedIn and your website in real-time.",
    position: { x: 10, y: 80 }, // Start low
    delay: 0,
  },
  {
    id: "segment",
    icon: Users,
    title: "Segment", 
    description: "Build strategic audiences using firmographic, demographic, and behavioral data to create highly targeted campaigns.",
    position: { x: 30, y: 60 }, // First rise
    delay: 400,
  },
  {
    id: "target",
    icon: Target,
    title: "Target",
    description: "Deploy precision LinkedIn campaigns with smart scheduling, frequency controls, and budget optimization.",
    position: { x: 60, y: 45 }, // Small dip then rise
    delay: 800,
  },
  {
    id: "optimize",
    icon: Zap,
    title: "Optimize",
    description: "AI-powered campaign optimization automatically adjusts targeting, timing, and spend for maximum performance.",
    position: { x: 90, y: 20 }, // Strong final growth
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
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
                  <stop offset="25%" stopColor="#10B981" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.9" />
                  <stop offset="75%" stopColor="#EF4444" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.9" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Dynamic Growth Path - More interesting with ups and downs */}
              <path
                d="M 10 80 Q 15 75, 20 70 Q 25 65, 30 60 Q 35 55, 40 58 Q 45 61, 50 55 Q 55 49, 60 45 Q 65 41, 70 35 Q 75 29, 80 25 Q 85 21, 90 20"
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="1.2"
                filter="url(#glow)"
                className={cn(
                  "workflow-animated-path transition-all duration-[4000ms] ease-in-out",
                  workflowInView ? "opacity-100" : "opacity-0"
                )}
                style={{
                  strokeDasharray: workflowInView ? "none" : "400",
                  strokeDashoffset: workflowInView ? "0" : "400",
                  transitionDelay: "800ms"
                }}
              />
              
              {/* Debug circles to show exact path points */}
              {WORKFLOW_STEPS.map((step) => (
                <circle
                  key={`debug-${step.id}`}
                  cx={step.position.x}
                  cy={step.position.y}
                  r="1.5"
                  fill="#fff"
                  opacity="0.9"
                />
              ))}
            </svg>
          </div>

          {/* Workflow Steps - Using the same coordinate system as SVG */}
          <div className="workflow-steps">
            {WORKFLOW_STEPS.map((step, index) => (
              <div
                key={step.id}
                className={cn(
                  "workflow-step",
                  workflowInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-90"
                )}
                style={{
                  position: 'absolute',
                  left: `${step.position.x}%`,
                  top: `${step.position.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 30,
                  transition: 'all 1000ms ease-out',
                  transitionDelay: workflowInView ? `${step.delay + 1200}ms` : '0ms'
                }}
                role="article"
                aria-label={`Step ${index + 1}: ${step.title}`}
              >
                {/* Icon Circle - positioned exactly on path */}
                <div className="workflow-step-icon-circle">
                  <div className="workflow-step-icon-bg">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Pulse Animation */}
                  <div 
                    className={cn(
                      "workflow-step-pulse",
                      workflowInView ? "animate-ping" : ""
                    )}
                    style={{ 
                      animationDelay: `${step.delay + 2500}ms`,
                      animationDuration: '2s'
                    }}
                  />
                </div>

                {/* Content Card - positioned relative to icon */}
                <div className="workflow-step-card">
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