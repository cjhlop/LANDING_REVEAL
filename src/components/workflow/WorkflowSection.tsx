import * as React from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { Target, Search, Users, Zap, TrendingUp } from "lucide-react";
import ButtonGroup from "../ButtonGroup";

export type WorkflowSectionProps = {
  className?: string;
};

const WORKFLOW_STEPS = [
  {
    id: "sense",
    icon: Search,
    title: "Sense",
    description: "Identify anonymous website visitors and detect buying intent signals across LinkedIn and your website in real-time.",
    position: { x: 15, y: 75 }, // Start point
    delay: 0,
  },
  {
    id: "segment",
    icon: Users,
    title: "Segment", 
    description: "Build strategic audiences using firmographic, demographic, and behavioral data to create highly targeted campaigns.",
    position: { x: 35, y: 45 }, // First peak
    delay: 400,
  },
  {
    id: "target",
    icon: Target,
    title: "Target",
    description: "Deploy precision LinkedIn campaigns with smart scheduling, frequency controls, and budget optimization.",
    position: { x: 65, y: 55 }, // Valley point
    delay: 800,
  },
  {
    id: "optimize",
    icon: Zap,
    title: "Optimize",
    description: "AI-powered campaign optimization automatically adjusts targeting, timing, and spend for maximum performance.",
    position: { x: 85, y: 25 }, // Final peak
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
          {/* Animated Path SVG - Extended beyond boundaries */}
          <div className="workflow-path-container">
            <svg
              className="workflow-path-svg"
              viewBox="-10 -10 120 120"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
                  <stop offset="33%" stopColor="#10B981" stopOpacity="0.9" />
                  <stop offset="66%" stopColor="#F59E0B" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.9" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Beautiful graph line extending beyond boundaries */}
              <polyline
                points="-5,85 5,80 15,75 25,60 35,45 45,50 55,48 65,55 75,40 85,25 95,20 105,15"
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
                className={cn(
                  "workflow-animated-path transition-all duration-[4000ms] ease-out",
                  workflowInView ? "opacity-100" : "opacity-0"
                )}
                style={{
                  strokeDasharray: workflowInView ? "none" : "500",
                  strokeDashoffset: workflowInView ? "0" : "500",
                  transitionDelay: "600ms"
                }}
              />
              
              {/* Key workflow points - only visible ones */}
              <circle cx="15" cy="75" r="1.5" fill="#3B82F6" opacity="0.7" />
              <circle cx="35" cy="45" r="1.5" fill="#10B981" opacity="0.7" />
              <circle cx="65" cy="55" r="1.5" fill="#F59E0B" opacity="0.7" />
              <circle cx="85" cy="25" r="1.5" fill="#8B5CF6" opacity="0.7" />
            </svg>
          </div>

          {/* Workflow Steps - Positioned exactly on key points */}
          <div className="workflow-steps">
            {WORKFLOW_STEPS.map((step, index) => (
              <div
                key={step.id}
                className={cn(
                  "workflow-step transition-all duration-1000 ease-out",
                  workflowInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-90"
                )}
                style={{
                  left: `${step.position.x}%`,
                  top: `${step.position.y}%`,
                  transitionDelay: workflowInView ? `${step.delay + 1500}ms` : '0ms'
                }}
                role="article"
                aria-label={`Step ${index + 1}: ${step.title}`}
              >
                {/* Step Card */}
                <div className="workflow-step-card">
                  {/* Icon positioned on the left side, centered vertically */}
                  <div className="workflow-step-icon-container">
                    <div className="workflow-step-icon">
                      <div className="workflow-step-icon-bg">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      
                      {/* Pulse Animation - appears after path completes */}
                      <div 
                        className={cn(
                          "workflow-step-pulse transition-all duration-1500",
                          workflowInView ? "animate-ping" : ""
                        )}
                        style={{ 
                          animationDelay: `${step.delay + 2800}ms`,
                          animationDuration: '2s'
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
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