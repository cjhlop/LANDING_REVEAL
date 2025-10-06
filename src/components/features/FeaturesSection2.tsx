import * as React from "react";
import FeatureItem from "./FeatureItem";
import FeatureImage from "./FeatureImage";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { CheckCircle2, Zap } from "lucide-react";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";

export type FeaturesSection2Props = {
  className?: string;
};

const TITLE = "Meet The Ultimate LinkedIn Centric Business Growth Platform";
const SUBTITLE =
  "Maintain a detailed and easily accessible record of all team interactions with our comprehensive conversation history.";

type WorkflowFeature = {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const WORKFLOW_FEATURES: WorkflowFeature[] = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

const FeaturesSection2: React.FC<FeaturesSection2Props> = ({ className }) => {
  const [headerRef, headerInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: "0px 0px -20% 0px",
  });

  return (
    <section
      className={cn("features-section", className)}
      role="region"
      aria-labelledby="features-heading-2"
    >
      {/* Header */}
      <div className="features-header" ref={headerRef}>
        {/* Eyebrow chip */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-100">
            <Zap className="h-4 w-4" />
            The DemandSense Advantage
          </div>
          
          {/* Visible animated title */}
          {headerInView ? (
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight">
              Meet The Ultimate <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">LinkedIn Centric</span> Business Growth Platform
            </h2>
          ) : (
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight leading-tight opacity-0">
              Meet The Ultimate LinkedIn Centric Business Growth Platform
            </h2>
          )}
          
          {/* Hidden heading for aria-labelledby association */}
          <h2 id="features-heading-2" className="sr-only">
            {TITLE}
          </h2>

          <p className={cn(
            "text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed transition-opacity duration-700",
            headerInView ? "opacity-100" : "opacity-0"
          )}>
            Smart budget controls and optimal ad frequency powered by AI-driven insights for maximum LinkedIn performance.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="features-rows">
        <FeatureItem
          label="demand"
          title="Sense Demand"
          description={
            <div className="space-y-3">
              <p className="text-[16px] leading-[150%] tracking-[-0.3px] text-[#7C7C7C]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
                dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-6 max-w-xl space-y-6 text-[16px] leading-[150%] text-[#666]">
                {WORKFLOW_FEATURES.map((f) => (
                  <div key={f.name} className="relative pl-9">
                    <dt className="inline font-medium text-gray-900">
                      <f.icon aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-[#3875f6]" />
                      {f.name}
                    </dt>{" "}
                    <dd className="inline text-[#7C7C7C]">{f.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          }
          imageSlot={<FeatureImage src="/media/feature-share-smart.png" alt="DemandSense dashboard showing campaign scheduling" position="left" />}
          imagePosition="left"
          showIcon={false}
        />

        <FeatureItem
          label="audiences"
          title="Segment"
          description={
            <div className="space-y-3">
              <p className="text-[16px] leading-[150%] tracking-[-0.3px] text-[#7C7C7C]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
                dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-6 max-w-xl space-y-6 text-[16px] leading-[150%] text-[#666]">
                {WORKFLOW_FEATURES.map((f) => (
                  <div key={f.name} className="relative pl-9">
                    <dt className="inline font-medium text-gray-900">
                      <f.icon aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-[#3875f6]" />
                      {f.name}
                    </dt>{" "}
                    <dd className="inline text-[#7C7C7C]">{f.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          }
          imageSlot={<FeatureImage src="/media/feature-share-smart.png" alt="Streamlined workspace illustration" position="right" />}
          imagePosition="right"
          showIcon={false}
        />

        {/* 3rd block: Deploy faster text block (images unchanged) */}
        <FeatureItem
          label="Deploy faster"
          title="A better workflow"
          showIcon={false}
          description={
            <div className="space-y-3">
              <p className="text-[16px] leading-[150%] tracking-[-0.3px] text-[#7C7C7C]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
                dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-6 max-w-xl space-y-6 text-[16px] leading-[150%] text-[#666]">
                {WORKFLOW_FEATURES.map((f) => (
                  <div key={f.name} className="relative pl-9">
                    <dt className="inline font-medium text-gray-900">
                      <f.icon aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-[#3875f6]" />
                      {f.name}
                    </dt>{" "}
                    <dd className="inline text-[#7C7C7C]">{f.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          }
          imageSlot={<FeatureImage src="/media/feature-share-smart.png" alt="Illustration for data privacy and security" position="left" />}
          imagePosition="left"
        />
      </div>
    </section>
  );
};

export default React.memo(FeaturesSection2);