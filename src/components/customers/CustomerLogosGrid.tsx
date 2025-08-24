import React from 'react';
import { cn } from '@/lib/utils';
import CustomerLogo, { CustomerLogoProps } from './CustomerLogo';

export interface CustomerLogosGridProps {
  logos: CustomerLogoProps[];
  className?: string;
  rows?: number;
  itemsPerRow?: number;
}

const CustomerLogosGrid: React.FC<CustomerLogosGridProps> = ({
  logos,
  className,
  rows = 2,
  itemsPerRow = 5,
}) => {
  // Split logos into rows and duplicate for seamless scrolling
  const logoRows = React.useMemo(() => {
    const result: CustomerLogoProps[][] = [];
    for (let i = 0; i < rows; i++) {
      const startIndex = i * itemsPerRow;
      const endIndex = startIndex + itemsPerRow;
      const rowLogos = logos.slice(startIndex, endIndex);
      // Duplicate the row for seamless scrolling
      result.push([...rowLogos, ...rowLogos]);
    }
    return result;
  }, [logos, rows, itemsPerRow]);

  return (
    <div
      className={cn("customer-logos-grid", className)}
      role="region"
      aria-label="Customer logos"
    >
      {logoRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={cn(
            "customer-logos-row",
            rowIndex === 0 ? "animate-scroll-left" : "animate-scroll-right"
          )}
          role="list"
          aria-label={`Logo row ${rowIndex + 1}`}
        >
          {row.map((logo, logoIndex) => (
            <div
              key={`${rowIndex}-${logoIndex}`}
              className="customer-logo-item"
              role="listitem"
            >
              <CustomerLogo {...logo} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CustomerLogosGrid;