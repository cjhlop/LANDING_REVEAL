import React, { useCallback } from 'react';
import type { SubMenuProps } from './types';

export const SubMenu = React.memo(({ items, isOpen, id }: SubMenuProps) => {
  const moveFocus = useCallback((current: HTMLButtonElement, dir: 'next' | 'prev' | 'first' | 'last') => {
    const container = current.closest('[role="menu"]');
    if (!container) return;
    const buttons = Array.from(container.querySelectorAll<HTMLButtonElement>('.sidebar-submenu-item'));
    if (buttons.length === 0) return;

    const currentIndex = buttons.indexOf(current);
    let targetIndex = currentIndex;

    if (dir === 'first') targetIndex = 0;
    else if (dir === 'last') targetIndex = buttons.length - 1;
    else if (dir === 'next') targetIndex = Math.min(buttons.length - 1, currentIndex + 1);
    else if (dir === 'prev') targetIndex = Math.max(0, currentIndex - 1);

    buttons[targetIndex]?.focus();
  }, []);

  const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    const key = e.key;
    const target = e.currentTarget;
    if (key === 'ArrowDown') {
      e.preventDefault();
      moveFocus(target, 'next');
    } else if (key === 'ArrowUp') {
      e.preventDefault();
      moveFocus(target, 'prev');
    } else if (key === 'Home') {
      e.preventDefault();
      moveFocus(target, 'first');
    } else if (key === 'End') {
      e.preventDefault();
      moveFocus(target, 'last');
    }
  };

  return (
    <div
      id={id}
      className={`sidebar-submenu ${isOpen ? 'sidebar-submenu--open' : ''}`}
      role="menu"
      aria-hidden={!isOpen}
    >
      {items.map((item, index) => (
        <button
          key={item.id ?? index}
          className={`sidebar-submenu-item ${item.isActive ? 'sidebar-submenu-item--active' : ''}`}
          onClick={item.onClick}
          onKeyDown={handleKeyDown}
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