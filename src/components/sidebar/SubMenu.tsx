import React from 'react';
import type { SubMenuProps } from './types';

export const SubMenu = React.memo(({ items, isOpen, id }: SubMenuProps) => {
  return (
    <div
      id={id}
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
          type="button"
        >
          <span className="sidebar-submenu-item__label">{item.label}</span>
        </button>
      ))}
    </div>
  );
});