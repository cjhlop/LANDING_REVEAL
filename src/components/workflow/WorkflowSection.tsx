import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Target, Search, Users, Zap, TrendingUp } from "lucide-react";
import ButtonGroup from "../ButtonGroup";

export type WorkflowSectionProps = {
  className?: string;
};

// Updated positions to match the new dramatic growth curve
const WORKFLOW_STEPS = [
  {
    id: "sense",
    icon: Search,
    title: "Sense",
    description: "Identify anonymous website visitors and detect buying intent signals across LinkedIn and your website in real-time.",
    position: { x: 8, y: 85 }, // Start very low
    delay: 0,
  },
  {
    id: "segment",
    icon: Users,
    title: "Segment", 
    description: "Build strategic audiences using firmographic, demographic, and behavioral data to create highly targeted campaigns.",
    position: { x: 25, y: 70 }, // Initial climb
    delay: 400,
  },
  {
    id: "target",
    icon: Target,
    title: "Target",
    description: "Deploy precision LinkedIn campaigns with smart scheduling, frequency controls, and budget optimization.",
    position: { x: 55, y: 35 }, // Big jump up
    delay: 800,
  },
  {
    id: "optimize",
    icon: Zap,
    title: "Optimize",
    description: "AI-powered campaign optimization automatically adjusts targeting, timing, and spend for maximum performance.",
    position: { x: 92, y: 10 }, // Rocket ship finale
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
                  <stop offset="0%" stopColor="#EF4444" stopOpacity="0.9" />
                  <stop offset="20%" stopColor="#F59E0B" stopOpacity="0.9" />
                  <stop offset="40%" stopColor="#10B981" stopOpacity="0.9" />
                  <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="pathGradientGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#EF4444" stopOpacity="0.3" />
                  <stop offset="20%" stopColor="#F59E0B" stopOpacity="0.3" />
                  <stop offset="40%" stopColor="#10B981" stopOpacity="0.3" />
                  <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Background glow path */}
              <path
                d="M 8 85 Q 12 82, 16 78 Q 20 74, 25 70 Q 30 65, 35 58 Q 40 50, 45 42 Q 50 35, 55 35 Q 60 35, 65 30 Q 70 25, 75 20 Q 80 15, 85 12 Q 88 10, 92 10"
                fill="none"
                stroke="url(#pathGradientGlow)"
                strokeWidth="8"
                opacity="0.4"
                className={cn(
                  "workflow-glow-path transition-all duration-[4500ms] ease-out",
                  workflowInView ? "opacity-40" : "opacity-0"
                )}
                style={{
                  strokeDasharray: workflowInView ? "none" : "500",
                  strokeDashoffset: workflowInView ? "0" : "500",
                  transitionDelay: "600ms"
                }}
              />
              
              {/* Main Dynamic Growth Path - Dramatic rocket trajectory */}
              <path
                d="M 8 85 Q 12 82, 16 78 Q 20 74, 25 70 Q 30 65, 35 58 Q 40 50, 45 42 Q 50 35, 55 35 Q 60 35, 65 30 Q 70 25, 75 20 Q 80 15, 85 12 Q 88 10, 92 10"
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="2.5"
                filter="url(#glow)"
                className={cn(
                  "workflow-animated-path transition-all duration-[4500ms] ease-out",
                  workflowInView ? "opacity-100" : "opacity-0"
                )}
                style={{
                  strokeDasharray: workflowInView ? "none" : "500",
                  strokeDashoffset: workflowInView ? "0" : "500",
                  transitionDelay: "800ms"
                }}
              />
              
              {/* Debug circles to show exact path points */}
              {WORKFLOW_STEPS.map((step) => (
                <circle
                  key={`debug-${step.id}`}
                  cx={step.position.x}
                  cy={step.position.y}
                  r="2"
                  fill="#fff"
                  opacity="0.9"
                  className={cn(
                    "transition-all duration-1000",
                    workflowInView ? "opacity-90 scale-100" : "opacity-0 scale-50"
                  )}
                  style={{
                    transitionDelay: `${1200 + (WORKFLOW_STEPS.indexOf(step) * 200)}ms`
                  }}
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
                  workflowInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-75"
                )}
                style={{
                  position: 'absolute',
                  left: `${step.position.x}%`,
                  top: `${step.position.y}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 30,
                  transition: 'all 1200ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transitionDelay: workflowInView ? `${step.delay + 1400}ms` : '0ms'
                }}
                role="article"
                aria-label={`Step ${index + 1}: ${step.title}`}
              >
                {/* Icon Circle - positioned exactly on path */}
                <div className="workflow-step-icon-circle">
                  <div className="workflow-step-icon-bg">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Enhanced Pulse Animation */}
                  <div 
                    className={cn(
                      "workflow-step-pulse",
                      workflowInView ? "animate-ping" : ""
                    )}
                    style={{ 
                      animationDelay: `${step.delay + 3000}ms`,
                      animationDuration: '2s',
                      animationIterationCount: '3'
                    }}
                  />
                  
                  {/* Secondary pulse for more drama */}
                  <div 
                    className={cn(
                      "workflow-step-pulse-secondary absolute inset-0 w-12 h-12 rounded-xl bg-white opacity-10",
                      workflowInView ? "animate-ping" : ""
                    )}
                    style={{ 
                      animationDelay: `${step.delay + 3500}ms`,
                      animationDuration: '3s',
                      animationIterationCount: '2'
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