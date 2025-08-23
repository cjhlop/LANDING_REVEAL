import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { MenuButtonProps } from './types';
import { useRandomIcon } from '@/hooks/use-random-icon';

export const MenuButton = React.memo(({
  icon: Icon,
  label,
  hasDropdown = false,
  isActive = false,
  isSubItem = false,
  onClick,
  useRandomIcon: randomize = false,
  controlsId,
  'aria-expanded': ariaExpanded,
  'aria-label': ariaLabel,
}: MenuButtonProps) => {
  const RandomIcon = useRandomIcon(label);
  const IconToRender = randomize ? RandomIcon : Icon;

  return (
    <button
      className={`sidebar-menu-button ${isActive ? 'sidebar-menu-button--active' : ''} ${
        isSubItem ? 'sidebar-menu-button--sub' : ''
      }`}
      onClick={onClick}
      role="menuitem"
      aria-expanded={hasDropdown ? ariaExpanded : undefined}
      aria-controls={hasDropdown ? controlsId : undefined}
      aria-label={ariaLabel || label}
      type="button"
    >
      <div className="sidebar-menu-button__content">
        <div className="sidebar-menu-button__icon-wrapper" aria-hidden="true">
          <IconToRender className="sidebar-menu-button__icon" size={24} />
        </div>
        <span className="sidebar-menu-button__label">{label}</span>
      </div>
      {hasDropdown && (
        <div className="sidebar-menu-button__dropdown-icon" aria-hidden="true">
          <ChevronRight 
            className={`sidebar-dropdown-chevron ${ariaExpanded ? 'sidebar-dropdown-chevron--expanded' : ''}`} 
            size={16} 
          />
        </div>
      )}
    </button>
  );
});