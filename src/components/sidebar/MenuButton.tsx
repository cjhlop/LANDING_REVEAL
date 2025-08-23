import React from 'react';
import { ChevronRight } from 'lucide-react';
import { MenuButtonProps } from './types';

export const MenuButton: React.FC<MenuButtonProps> = ({
  icon: Icon,
  label,
  hasDropdown = false,
  isActive = false,
  isSubItem = false,
  onClick,
  'aria-expanded': ariaExpanded,
  'aria-label': ariaLabel,
}) => {
  return (
    <button
      className={`sidebar-menu-button ${isActive ? 'sidebar-menu-button--active' : ''} ${
        isSubItem ? 'sidebar-menu-button--sub' : ''
      }`}
      onClick={onClick}
      role="menuitem"
      aria-expanded={hasDropdown ? ariaExpanded : undefined}
      aria-label={ariaLabel || label}
    >
      <div className="sidebar-menu-button__content">
        <div className="sidebar-menu-button__icon-wrapper">
          <Icon className="sidebar-menu-button__icon" size={24} />
        </div>
        <span className="sidebar-menu-button__label">{label}</span>
      </div>
      {hasDropdown && (
        <div className="sidebar-menu-button__dropdown-icon">
          <ChevronRight 
            className={`sidebar-dropdown-chevron ${ariaExpanded ? 'sidebar-dropdown-chevron--expanded' : ''}`} 
            size={16} 
          />
        </div>
      )}
    </button>
  );
};