import React from 'react';
import { FeatureCardWrapper } from './FeatureCardWrapper';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export const InviteTeamCard: React.FC = () => {
  return (
    <FeatureCardWrapper
      title="For growing teams"
      description="Tailored support to give you progress"
      className="relative flex-grow"
      gradientBg={true}
    >
      <div className="relative flex items-center justify-center h-full mt-4">
        {/* Figma's Vector 25 line graphic - simplified with Tailwind */}
        <div className="absolute w-full h-full flex items-center justify-center">
          <svg className="absolute w-full h-full" viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 50 100 C 150 50, 350 150, 450 100"
              stroke="#E5E7EB"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <Button
          className={cn(
            "relative z-10 flex items-center gap-2 px-6 py-3 rounded-full bg-white text-feature-dark-text shadow-md hover:bg-gray-50 transition-colors",
            "border border-feature-border"
          )}
          aria-label="Invite user to this team"
        >
          <Mail className="h-4 w-4 text-feature-dark-text" aria-hidden="true" />
          Invite user to this team
        </Button>
      </div>
      {/* Figma's Ellipse (Text input) - simplified as a blurred circle */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-feature-light-green/10 rounded-full blur-3xl -z-10" />
    </FeatureCardWrapper>
  );
};