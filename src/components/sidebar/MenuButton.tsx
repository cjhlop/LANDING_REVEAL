import React, { useState } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);
  const RandomIcon = useRandomIcon(label);
  const IconToRender = randomize ? RandomIcon : Icon;

  const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    const key = e.key;
    if (key === 'Enter' || key === ' ') {
      e.preventDefault();
      onClick?.();
      return;
    }
    if (hasDropdown) {
      if (key === 'ArrowRight' && !ariaExpanded) {
        e.preventDefault();
        onClick?.();
        return;
      }
      if (key === 'ArrowLeft' && ariaExpanded) {
        e.preventDefault();
        onClick?.();
        return;
      }
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <button
      className={`sidebar-menu-button ${isActive ? 'sidebar-menu-button--active' : ''} ${
        isSubItem ? 'sidebar-menu-button--sub' : ''
      }`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="menuitem"
      aria-expanded={hasDropdown ? ariaExpanded : undefined}
      aria-controls={hasDropdown ? controlsId : undefined}
      aria-label={ariaLabel || label}
      type="button"
    >
      <div className="sidebar-menu-button__content">
        <div className="sidebar-menu-button__icon-wrapper" aria-hidden="true">
          <IconToRender 
            className={`sidebar-menu-button__icon transition-all duration-200 ${
              isHovered || isActive ? 'scale-110' : 'scale-100'
            }`} 
            size={20} 
          />
        </div>
        <span className="sidebar-menu-button__label">{label}</span>
      </div>
      {hasDropdown && (
        <div className="sidebar-menu-button__dropdown-icon" aria-hidden="true">
          <ChevronRight
            className={`sidebar-dropdown-chevron ${ariaExpanded ? 'sidebar-dropdown-chevron--expanded' : ''}`}
            size={14}
          />
        </div>
      )}
    </button>
  );
});

MenuButton.displayName = 'MenuButton';