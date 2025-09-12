import * as React from "react";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/hooks/use-in-view-once";

type Feature = {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const features: Feature[] = [
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

const FeatureWorkflow: React.FC = () => {
  const [textRef, textInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
  });
  const [imgRef, imgInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
  });

  return (
    <article
      className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 sm:gap-y-20 items-start"
      role="article"
      aria-label="A better workflow"
    >
      {/* Copy */}
      <div className={cn("lg:pt-4 lg:pr-8", "reveal reveal-fade-right", textInView ? "is-inview" : "")} ref={textRef}>
        <div className="lg:max-w-lg">
          <p className="text-[12px] leading-5 tracking-[1.2px] uppercase text-[#7C7C7C] font-['DM Mono']">
            Deploy faster
          </p>
          <h3 className="mt-2 text-[32px] leading-[120%] tracking-[-0.9px] text-black font-medium">
            A better workflow
          </h3>
          <p className="mt-6 text-[16px] leading-[150%] tracking-[-0.3px] text-[#7C7C7C]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
            dolor cupiditate blanditiis ratione.
          </p>

          <dl className="mt-10 max-w-xl space-y-6 text-[16px] leading-[150%] text-[#666] lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-medium text-gray-900">
                  <feature.icon
                    aria-hidden="true"
                    className="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                  />
                  {feature.name}
                </dt>{" "}
                <dd className="inline text-[#7C7C7C]">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Images */}
      <div
        className={cn("relative", "reveal reveal-fade-left", imgInView ? "is-inview" : "")}
        ref={imgRef}
        aria-hidden="true"
      >
        {/* Dark image */}
        <img
          alt="Product screenshot (dark)"
          src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
          width={2432}
          height={1442}
          className="hidden dark:block max-w-none w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-white/10"
          loading="lazy"
        />
        {/* Light image */}
        <img
          alt="Product screenshot"
          src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
          width={2432}
          height={1442}
          className="block dark:hidden max-w-none w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
          loading="lazy"
        />
      </div>
    </article>
  );
};

export default React.memo(FeatureWorkflow);