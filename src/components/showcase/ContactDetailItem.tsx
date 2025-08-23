import React from 'react';
import { ContactDetail } from './types';

interface ContactDetailItemProps extends ContactDetail {
  className?: string;
}

export const ContactDetailItem: React.FC<ContactDetailItemProps> = ({
  icon: Icon,
  label,
  value,
  isLink = false,
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-between py-3 ${className}`}>
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-showcase-icon" aria-hidden="true" />
        <span className="text-sm text-showcase-text-secondary">{label}</span>
      </div>
      {isLink ? (
        <a
          href={value.startsWith('http') ? value : `mailto:${value}`}
          className="text-sm text-showcase-link hover:text-showcase-link-hover transition-colors"
        >
          {value}
        </a>
      ) : (
        <span className="text-sm text-showcase-text-primary font-medium">{value}</span>
      )}
    </div>
  );
};