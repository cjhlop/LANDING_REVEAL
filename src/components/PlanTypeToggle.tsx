import React from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlanTypeToggleProps {
  selectedType: 'teams' | 'individuals';
  onToggle: (type: 'teams' | 'individuals') => void;
}

export const PlanTypeToggle: React.FC<PlanTypeToggleProps> = ({ selectedType, onToggle }) => {
  return (
    <div className="flex items-center gap-6" role="radiogroup" aria-label="Select plan type">
      <button
        className={cn(
          "flex items-center gap-2 text-lg font-medium transition-colors",
          selectedType === 'teams' ? "text-dyad-blue" : "text-dyad-gray-text hover:text-dyad-dark-text"
        )}
        onClick={() => onToggle('teams')}
        role="radio"
        aria-checked={selectedType === 'teams'}
      >
        <CheckCircle className="h-6 w-6" aria-hidden="true" />
        For teams
      </button>
      <div className="w-px h-6 bg-gray-300" aria-hidden="true" />
      <button
        className={cn(
          "flex items-center gap-2 text-lg font-medium transition-colors",
          selectedType === 'individuals' ? "text-dyad-blue" : "text-dyad-gray-text hover:text-dyad-dark-text"
        )}
        onClick={() => onToggle('individuals')}
        role="radio"
        aria-checked={selectedType === 'individuals'}
      >
        <CheckCircle className="h-6 w-6" aria-hidden="true" />
        For Individuals
      </button>
    </div>
  );
};