import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { MetricData } from './types';

interface MetricCardProps extends MetricData {
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  change,
  changeType,
  className = '',
}) => {
  return (
    <div className={`p-4 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-showcase-text-secondary">{label}</span>
        {change && (
          <div className="flex items-center gap-1">
            <span
              className={`text-sm ${
                changeType === 'positive'
                  ? 'text-showcase-positive'
                  : 'text-showcase-negative'
              }`}
            >
              {change}
            </span>
            {changeType === 'positive' ? (
              <TrendingUp className="h-3 w-3 text-showcase-positive" />
            ) : (
              <TrendingDown className="h-3 w-3 text-showcase-negative" />
            )}
          </div>
        )}
      </div>
      <div className="text-2xl font-semibold text-showcase-text-primary">{value}</div>
    </div>
  );
};