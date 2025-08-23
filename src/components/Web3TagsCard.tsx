import React from 'react';
import { FeatureCardWrapper } from './FeatureCardWrapper';
import { FeatureButton } from './FeatureButton';
import { Code, TrendingUp, Zap, LayoutGrid, Accessibility, Cloud, Link } from 'lucide-react';

export const Web3TagsCard: React.FC = () => {
  const tags = [
    { name: 'Web 3.0 development', icon: Code },
    { name: 'Growth', icon: TrendingUp },
    { name: 'APIs', icon: Zap },
    { name: 'Go-to-Market Solutions', icon: LayoutGrid },
    { name: 'Easy-to-use interface', icon: Accessibility },
    { name: 'Scalable', icon: Cloud },
    { name: 'Fast Integrations', icon: Link },
    { name: 'Accessibility', icon: Accessibility },
  ];

  return (
    <FeatureCardWrapper
      title="Web 3.0 development"
      description="Crafting tomorrow's digital landscape today"
      className="relative"
    >
      <div className="flex flex-wrap gap-3 mt-4">
        {tags.map((tag) => (
          <FeatureButton key={tag.name} text={tag.name} icon={tag.icon} />
        ))}
      </div>
    </FeatureCardWrapper>
  );
};