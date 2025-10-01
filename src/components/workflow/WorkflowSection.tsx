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
    position: { x: 12, y: 78 }, // Start low
    delay: 0,
  },
  {
    id: "segment",
    icon: Users,
    title: "Segment", 
    description: "Build strategic audiences using firmographic, demographic, and behavioral data to create highly targeted campaigns.",
    position: { x: 32, y: 35 }, // Rise up
    delay: 400,
  },
  {
    id: "target",
    icon: Target,
    title: "Target",
    description: "Deploy precision LinkedIn campaigns with smart scheduling, frequency controls, and budget optimization.",
    position: { x: 58, y: 55 }, // Dip down
    delay: 800,
  },
  {
    id: "optimize",
    icon: Zap,
    title: "Optimize",
    description: "AI-powered campaign optimization automatically adjusts targeting, timing, and spend for maximum performance.",
    position: { x: 88, y: 25 }, // Final rise to peak
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
              
              {/* Dynamic wavy path with multiple rises and falls */}
              <path
                d="M 12 78 
                   Q 18 85, 22 75 
                   Q 26 65, 32 35 
                   Q 38 15, 45 45 
                   Q 52 65, 58 55 
                   Q 64 45, 70 40 
                   Q 76 35, 82 30 
                   Q 85 28, 88 25"
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="1"
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
              
              {/* Path dots for precise positioning */}
              <circle cx="12" cy="78" r="0.8" fill="#3B82F6" opacity="0.4" />
              <circle cx="32" cy="35" r="0.8" fill="#10B981" opacity="0.4" />
              <circle cx="58" cy="55" r="0.8" fill="#F59E0B" opacity="0.4" />
              <circle cx="88" cy="25" r="0.8" fill="#8B5CF6" opacity="0.4" />
              
              {/* Additional wave points for visual reference */}
              <circle cx="22" cy="75" r="0.4" fill="#3B82F6" opacity="0.2" />
              <circle cx="45" cy="45" r="0.4" fill="#10B981" opacity="0.2" />
              <circle cx="70" cy="40" r="0.4" fill="#F59E0B" opacity="0.2" />
            </svg>
          </div>

          {/* Workflow Steps - Positioned exactly on path points */}
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
                  transitionDelay: workflowInView ? `${step.delay + 1200}ms` : '0ms'
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
                          animationDelay: `${step.delay + 2500}ms`,
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