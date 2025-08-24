import React from 'react';
import { cn } from '@/lib/utils';
import CustomerLogosGrid, { CustomerLogosGridProps } from './CustomerLogosGrid';
import { CustomerLogoProps } from './CustomerLogo';

export interface MeetOurCustomersProps {
  title?: string;
  subtitle?: string;
  logos: CustomerLogoProps[];
  className?: string;
  showGradients?: boolean;
  gridProps?: Partial<CustomerLogosGridProps>;
}

const MeetOurCustomers: React.FC<MeetOurCustomersProps> = ({
  title = "Meet our customers",
  subtitle = "Helping the best teams succeed, from new startups to big companies.",
  logos,
  className,
  showGradients = true,
  gridProps = {},
}) => {
  return (
    <section
      className={cn("meet-customers-section", className)}
      role="region"
      aria-labelledby="meet-customers-title"
    >
      <div className="meet-customers-container">
        {/* Horizontal Layout: Text Left, Logos Right */}
        <div className="meet-customers-layout">
          {/* Header Section - Left Side */}
          <div className="meet-customers-header">
            <h2
              id="meet-customers-title"
              className="meet-customers-title"
            >
              {title}
            </h2>
            <p className="meet-customers-subtitle">
              {subtitle}
            </p>
          </div>

          {/* Logos Grid - Right Side */}
          <div className="meet-customers-content">
            <CustomerLogosGrid
              logos={logos}
              className="meet-customers-logos"
              {...gridProps}
            />
          </div>
        </div>

        {/* Gradient Overlays */}
        {showGradients && (
          <>
            <div
              className="meet-customers-gradient meet-customers-gradient-left"
              aria-hidden="true"
            />
            <div
              className="meet-customers-gradient meet-customers-gradient-right"
              aria-hidden="true"
            />
          </>
        )}
      </div>
    </section>
  );
};

export default MeetOurCustomers;