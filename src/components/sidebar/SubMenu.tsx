import React from 'react';
import type { SubMenuProps } from './types';

export const SubMenu: React.FC<SubMenuProps> = ({ items, isOpen }) => {
  return (
    <div 
      className={`sidebar-submenu ${isOpen ? 'sidebar-submenu--open' : ''}`}
      role="menu"
      aria-hidden={!isOpen}
    >
      {items.map((item, index) => (
        <button
          key={index}
          className={`sidebar-submenu-item ${item.isActive ? 'sidebar-submenu-item--active' : ''}`}
          onClick={item.onClick}
          role="menuitem"
          aria-label={item.label}
        >
          <span className="sidebar-submenu-item__label">{item.label}</span>
        </button>
      ))}
    </div>
  );
};