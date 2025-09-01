import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type FeatureItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  checklist: string[];
  imageSlot: React.ReactNode;
  imagePosition?: "left" | "right";
  className?: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
  checklist,
  imageSlot,
  imagePosition = "left",
  className,
}) => {
  const content = (
    <div className="flex flex-col justify-center">
      <div className="feature-icon-badge" aria-hidden="true">
        {icon}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-desc">{description}</p>
      <ul className="feature-checklist" role="list">
        {checklist.map((item, index) => (
          <li key={index}>
            <Check className="size-5 text-violet-600" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <article
      className={cn(
        "feature-item grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center",
        className,
      )}
      role="article"
      aria-label={title}
    >
      {imagePosition === "left" ? (
        <>
          {imageSlot}
          {content}
        </>
      ) : (
        <>
          {content}
          {imageSlot}
        </>
      )}
    </article>
  );
};

export default React.memo(FeatureItem);