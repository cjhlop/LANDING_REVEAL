import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Target, UserCheck, Database, Zap, Play } from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";

type JourneyStep = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const DEFAULT_STEPS: JourneyStep[] = [
  {
    icon: Target,
    title: "Target",
    description:
      "Use our audience builder to target across millions of behaviors in B2B and B2C.",
  },
  {
    icon: UserCheck,
    title: "Identify",
    description:
      "Match site traffic to user or company profiles for first-party reactivation.",
  },
  {
    icon: Database,
    title: "Match",
    description:
      "Enrich with our database to connect and unify any available data points.",
  },
  {
    icon: Zap,
    title: "Activate",
    description:
      "Sync audiences to any ad platform, CRM, or sales tool—continuously.",
  },
];

type MilestoneProps = {
  step: JourneyStep;
  index: number;
  isInView: boolean;
};

// Linear progression - evenly spaced
const MILESTONE_OFFSETS = [0, -120, -240, -360];

const Milestone: React.FC<MilestoneProps> = ({ step, index, isInView }) => {
  const Icon = step.icon;
  const [isHovered, setIsHovered] = React.useState(false);
  const verticalOffset = MILESTONE_OFFSETS[index] || 0;

  return (
    <div
      className={cn(
        "milestone-item flex flex-col items-center text-center transition-all duration-500 ease-out",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ 
        transitionDelay: isInView ? `${index * 150}ms` : "0ms",
        transform: `translateY(${verticalOffset}px)`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="listitem"
    >
      {/* Data point marker on graph */}
      <div className="relative mb-4">
        {/* Vertical grid line from icon to baseline */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-blue-200/60 to-transparent pointer-events-none"
          style={{ 
            height: `${Math.abs(verticalOffset) + 60}px`,
            top: '56px'
          }}
          aria-hidden="true"
        />
        
        {/* Icon button - data point */}
        <button
          type="button"
          className={cn(
            "milestone-icon relative flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 transition-all duration-300 z-10",
            isHovered 
              ? "border-blue-500 shadow-lg shadow-blue-500/30 scale-110" 
              : "border-blue-300 shadow-md"
          )}
          aria-label={step.title}
        >
          <Icon className={cn(
            "h-6 w-6 transition-colors duration-300",
            isHovered ? "text-blue-600" : "text-blue-500"
          )} />
          
          {/* Pulse ring on hover */}
          {isHovered && (
            <span className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-base leading-relaxed text-gray-600 max-w-[260px]">
        {step.description}
      </p>
    </div>
  );
};

export type AudienceJourneySectionProps = {
  className?: string;
  id?: string;
  variant?: "light" | "dark";
  items?: JourneyStep[];
};

const AudienceJourneySection: React.FC<AudienceJourneySectionProps> = ({
  className,
  id = "audience-journey",
  variant = "light",
  items = DEFAULT_STEPS,
}) => {
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: "0px 0px -20% 0px",
  });

  const [milestonesRef, milestonesInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });

  const handleGetStarted = () => {
    document.dispatchEvent(new CustomEvent("open-get-access"));
  };

  return (
    <section
      id={id}
      className={cn(
        "audience-journey-section relative w-full bg-gradient-to-b from-gray-50 to-white px-[112px] py-[112px] overflow-hidden",
        className
      )}
      role="region"
      aria-labelledby={`${id}-heading`}
    >
      <div className="max-w-[1216px] mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-24 space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-100">
            <Target className="h-4 w-4" />
            AUDIENCE JOURNEY
          </div>

          {headerInView ? (
            <h2
              id={`${id}-heading`}
              className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight"
            >
              Take Back Control of Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Audiences
              </span>
            </h2>
          ) : (
            <h2
              id={`${id}-heading`}
              className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight opacity-0"
            >
              Take Back Control of Your Audiences
            </h2>
          )}

          <p
            className={cn(
              "text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed transition-opacity duration-700",
              headerInView ? "opacity-100" : "opacity-0"
            )}
          >
            Build, identify, enrich, and activate audiences with precision—on your terms.
          </p>

          {/* CTA Group */}
          <div
            className={cn(
              "flex items-center justify-center gap-4 mt-8 transition-opacity duration-700",
              headerInView ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: headerInView ? "200ms" : "0ms" }}
          >
            <Button
              size="lg"
              className="h-11 rounded-lg px-6 bg-[#3875F6] hover:bg-[#2c5cc5] text-white font-medium tracking-tight transition-all duration-200 hover:shadow-md"
              onClick={handleGetStarted}
            >
              Sign up now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 rounded-lg px-6 border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium tracking-tight transition-all duration-200"
            >
              <Play className="h-4 w-4 mr-2" />
              Watch how it works
            </Button>
          </div>
        </div>

        {/* Graph Visualization */}
        <div
          ref={milestonesRef}
          className="relative"
        >
          {/* Premium Graph Background */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Grid pattern */}
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#E5E7EB" strokeWidth="0.5" opacity="0.5"/>
                </pattern>
                
                {/* Linear gradient for straight line */}
                <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3875F6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#3875F6" stopOpacity="0.7" />
                </linearGradient>
                
                {/* Area under line gradient */}
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3875F6" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#3875F6" stopOpacity="0.02" />
                </linearGradient>
                
                {/* Animated impulse gradient */}
                <linearGradient id="impulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0">
                    <animate attributeName="offset" values="0;0.2;0.4" dur="3s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="20%" stopColor="#60A5FA" stopOpacity="1">
                    <animate attributeName="offset" values="0.2;0.4;0.6" dur="3s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="40%" stopColor="#60A5FA" stopOpacity="0">
                    <animate attributeName="offset" values="0.4;0.6;0.8" dur="3s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>
                
                {/* Glow filter */}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Grid background */}
              <rect width="1200" height="500" fill="url(#grid)" opacity="0.4"/>
              
              {/* Horizontal reference lines */}
              <line x1="0" y1="450" x2="1200" y2="450" stroke="#D1D5DB" strokeWidth="1" opacity="0.6"/>
              <line x1="0" y1="350" x2="1200" y2="350" stroke="#D1D5DB" strokeWidth="1" opacity="0.4"/>
              <line x1="0" y1="250" x2="1200" y2="250" stroke="#D1D5DB" strokeWidth="1" opacity="0.4"/>
              <line x1="0" y1="150" x2="1200" y2="150" stroke="#D1D5DB" strokeWidth="1" opacity="0.4"/>
              <line x1="0" y1="50" x2="1200" y2="50" stroke="#D1D5DB" strokeWidth="1" opacity="0.4"/>
              
              {/* STRAIGHT DIAGONAL LINE - matching red reference */}
              <line
                x1="50"
                y1="480"
                x2="1200"
                y2="20"
                stroke="url(#curveGradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              
              {/* Area under line */}
              <polygon
                points="50,480 1200,20 1200,500 50,500"
                fill="url(#areaGradient)"
              />
              
              {/* Animated impulse overlay */}
              <line
                x1="50"
                y1="480"
                x2="1200"
                y2="20"
                stroke="url(#impulseGradient)"
                strokeWidth="5"
                filter="url(#glow)"
                strokeLinecap="round"
              />
              
              {/* Traveling particle along straight line */}
              <circle r="5" fill="#60A5FA" filter="url(#glow)">
                <animate
                  attributeName="cx"
                  values="50;1200"
                  dur="3s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values="480;20"
                  dur="3s"
                  repeatCount="indefinite"
                />
                <animate attributeName="opacity" values="0;1;1;0.5" dur="3s" repeatCount="indefinite" />
              </circle>
              
              {/* Data point markers on line */}
              <circle cx="350" cy="360" r="4" fill="#3875F6" opacity="0.6"/>
              <circle cx="650" cy="240" r="4" fill="#3875F6" opacity="0.6"/>
              <circle cx="950" cy="120" r="4" fill="#3875F6" opacity="0.6"/>
              <circle cx="1200" cy="20" r="4" fill="#3875F6" opacity="0.6"/>
            </svg>
          </div>

          {/* Milestones Grid */}
          <div
            className={cn(
              "relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-10 pt-72 lg:pt-[420px]",
              "lg:items-end"
            )}
            role="list"
            aria-label="Audience journey steps"
          >
            {items.map((step, index) => (
              <Milestone
                key={step.title}
                step={step}
                index={index}
                isInView={milestonesInView}
              />
            ))}
          </div>

          {/* Mobile: Vertical Timeline */}
          <div
            className="lg:hidden absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/30 via-blue-600/20 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default React.memo(AudienceJourneySection);