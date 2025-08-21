import React from 'react';
import { CheckCircle } from 'lucide-react';

interface FeatureItemProps {
  text: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => {
  return (
    <div className="flex items-center gap-2" role="listitem">
      <CheckCircle className="h-5 w-5 text-dyad-blue fill-dyad-blue/10" aria-hidden="true" />
      <p className="text-base text-dyad-feature-text font-normal leading-tight">{text}</p>
    </div>
  );
};