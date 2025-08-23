import type { LucideIcon } from 'lucide-react';

/**
 * Data-driven menu model
 */
export interface SidebarSubItem {
  id: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface SidebarMenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  hasDropdown?: boolean;
  isActive?: boolean;
  children?: SidebarSubItem[];
  onClick?: () => void;
}

export interface SidebarProps {
  className?: string;
  randomizeIcons?: boolean;
  items?: SidebarMenuItem[]; // top block
  analyticsSection?: {
    parent: Omit<SidebarMenuItem, 'children'>;
    children: SidebarSubItem[];
  };
  footerItems?: SidebarMenuItem[]; // bottom block
  defaultExpandedKeys?: string[]; // ids that start expanded (e.g., ["analytics"])
  onNavigate?: (id: string) => void;
  onSubNavigate?: (id: string) => void;
  filterEnabled?: boolean; // show the filter input (default true)
}

/**
 * Presentational component props (internal)
 */
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
    id?: string;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
  }>;
  isOpen: boolean;
  id?: string;
}

/**
 * Compatibility alias to satisfy existing exports.
 */
export type MenuItemProps = SidebarMenuItem;