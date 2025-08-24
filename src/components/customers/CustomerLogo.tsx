import React from 'react';
import { cn } from '@/lib/utils';

export interface CustomerLogoProps {
  name: string;
  logoSrc?: string;
  className?: string;
  width?: number;
  height?: number;
}

const CustomerLogo: React.FC<CustomerLogoProps> = ({
  name,
  logoSrc,
  className,
  width = 120,
  height = 32,
}) => {
  return (
    <div
      className={cn(
        "customer-logo-container",
        className
      )}
      role="img"
      aria-label={`${name} logo`}
    >
      {logoSrc ? (
        <img
          src={logoSrc}
          alt={`${name} logo`}
          width={width}
          height={height}
          className="customer-logo-image"
          loading="lazy"
        />
      ) : (
        <div
          className="customer-logo-placeholder"
          style={{ width, height }}
          aria-label={`${name} logo placeholder`}
        >
          {name}
        </div>
      )}
    </div>
  );
};

export default CustomerLogo;