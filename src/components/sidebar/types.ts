import { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface MenuItemProps {
  icon: LucideIcon;
  label: string;
  hasDropdown?: boolean;
  isActive?: boolean;
  isSubItem?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

export interface SidebarProps {
  className?: string;
  randomizeIcons?: boolean;
}

export interface MenuButtonProps {
  icon: LucideIcon;
  label: string;
  hasDropdown?: boolean;
  isActive?: boolean;
  isSubItem?: boolean;
  onClick?: () => void;
  useRandomIcon?: boolean;
  controlsId?: string;
  'aria-expanded'?: boolean;
  'aria-label'?: string;
}

export interface SubMenuProps {
  items: Array<{
    label: string;
    isActive?: boolean;
    onClick?: () => void;
  }>;
  isOpen: boolean;
  id?: string;
}