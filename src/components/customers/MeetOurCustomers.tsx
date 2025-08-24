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

        <div className="meet-customers-content">
          <CustomerLogosGrid
            logos={logos}
            className="meet-customers-logos"
            {...gridProps}
          />
        </div>

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