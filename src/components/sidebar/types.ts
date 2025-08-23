import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

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
}

export interface MenuButtonProps {
  icon: LucideIcon;
  label: string;
  hasDropdown?: boolean;
  isActive?: boolean;
  isSubItem?: boolean;
  onClick?: () => void;
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
}