import React from 'react';

interface DonutChartProps {
  organicValue: number;
  paidValue: number;
  className?: string;
}

export const DonutChart: React.FC<DonutChartProps> = ({
  organicValue,
  paidValue,
  className = '',
}) => {
  const total = organicValue + paidValue;
  const organicPercentage = (organicValue / total) * 100;
  const paidPercentage = (paidValue / total) * 100;

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const organicStrokeDasharray = (organicPercentage / 100) * circumference;
  const paidStrokeDasharray = (paidPercentage / 100) * circumference;

  return (
    <div className={`relative w-24 h-24 ${className}`} role="img" aria-label="Traffic distribution chart">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        {/* Organic traffic arc */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${organicStrokeDasharray} ${circumference}`}
          className="text-showcase-chart-organic"
        />
        {/* Paid traffic arc */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${paidStrokeDasharray} ${circumference}`}
          strokeDashoffset={-organicStrokeDasharray}
          className="text-showcase-chart-paid"
        />
      </svg>
    </div>
  );
};