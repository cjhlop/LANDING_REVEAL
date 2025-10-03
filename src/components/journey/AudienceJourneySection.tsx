import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Target, UserCheck, Database, Zap, Play } from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";

/**
 * CSS Variables Mapping (assumes these exist in globals.css):
 * --brand-primary: #3875F6
 * --text-primary: #111827 (gray-900)
 * --text-muted: #6B7280 (gray-500)
 * --bg-elevated: #F8FAFC (gray-50)
 * --radius-lg: 0.75rem
 * --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
 */

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

// Vertical offset for each milestone to create ascending effect
const MILESTONE_OFFSETS = [0, -80, -160, -210]; // in pixels, negative = move up

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
      {/* Icon button */}
      <button
        type="button"
        className={cn(
          "milestone-icon relative flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-gray-200 shadow-sm transition-all duration-200",
          "hover:border-blue-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
          isHovered && "border-blue-400 shadow-md"
        )}
        aria-label={step.title}
      >
        <Icon className="h-6 w-6 text-blue-600" />
      </button>

      {/* Vertical accent line - taller */}
      <div
        className="milestone-line w-px h-20 bg-gradient-to-b from-blue-600/30 to-transparent mt-4 mb-6"
        aria-hidden="true"
      />

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

        {/* Journey Path + Milestones */}
        <div
          ref={milestonesRef}
          className="relative"
        >
          {/* Desktop: Ascending Path (SVG) - More pronounced with higher steps */}
          <div className="hidden lg:block absolute top-0 left-0 right-0 h-64 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3875F6" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#3875F6" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              {/* Ascending path with 3 more pronounced steps - higher vertical differences */}
              <path
                d="M 0 220 L 260 220 L 280 140 L 560 140 L 580 60 L 860 60 L 880 10 L 1200 10"
                stroke="url(#pathGradient)"
                strokeWidth="2.5"
                fill="none"
                className="transition-opacity duration-300"
              />
            </svg>
          </div>

          {/* Milestones Grid - Items will self-position vertically via transform */}
          <div
            className={cn(
              "relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-10 pt-72 lg:pt-64",
              "lg:items-end" // Changed from items-start to items-end for proper baseline
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