import React from 'react';
import { X } from 'lucide-react';
import { Tag } from './types';

interface TagComponentProps extends Tag {
  className?: string;
}

export const TagComponent: React.FC<TagComponentProps> = ({
  label,
  variant = 'default',
  onRemove,
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 bg-showcase-tag-bg border border-showcase-border rounded-full text-sm text-showcase-text-secondary ${className}`}
      role="button"
      tabIndex={0}
    >
      <span>{label}</span>
      {variant === 'removable' && onRemove && (
        <button
          onClick={onRemove}
          className="p-1 hover:bg-showcase-hover rounded-full transition-colors"
          aria-label={`Remove ${label} tag`}
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </div>
  );
};