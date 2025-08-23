import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  gradientBg?: boolean;
}

export const FeatureCardWrapper: React.FC<FeatureCardWrapperProps> = ({
  title,
  description,
  children,
  className,
  titleClassName,
  descriptionClassName,
  gradientBg = false,
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col p-6 rounded-2xl shadow-lg overflow-hidden",
        gradientBg ? "bg-gradient-to-br from-white to-feature-light-green/10" : "bg-white",
        className
      )}
      role="region"
      aria-label={`Feature: ${title}`}
    >
      <div className="mb-4">
        <h3 className={cn("font-manrope text-xl font-bold text-feature-dark-text leading-tight", titleClassName)}>
          {title}
        </h3>
        <p className={cn("font-manrope text-sm text-feature-gray-text leading-snug", descriptionClassName)}>
          {description}
        </p>
      </div>
      {children}
    </div>
  );
};