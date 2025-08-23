import React from 'react';
import { ChevronRight } from 'lucide-react';
import { BreadcrumbItem } from './types';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-1 text-sm" role="navigation" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <ChevronRight className="h-4 w-4 text-showcase-separator" aria-hidden="true" />
          )}
          {item.href && !item.isActive ? (
            <a
              href={item.href}
              className="text-showcase-link hover:text-showcase-link-hover transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span
              className={
                item.isActive
                  ? 'text-showcase-text-primary font-medium'
                  : 'text-showcase-link'
              }
            >
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};