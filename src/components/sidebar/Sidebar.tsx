import React, { useCallback, useMemo, useState } from 'react';
import {
  LayoutDashboard,
  Users,
  List,
  Megaphone,
  Linkedin,
  BarChart3,
  AlertCircle,
  Settings,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { MenuButton } from './MenuButton';
import { SubMenu } from './SubMenu';
import type { SidebarMenuItem, SidebarProps, SidebarSubItem } from './types';

function useInitialExpanded(keys?: string[]) {
  return useMemo(() => {
    const map: Record<string, boolean> = {};
    (keys ?? ['analytics']).forEach((k) => (map[k] = true));
    return map;
  }, [keys]);
}

export const Sidebar: React.FC<SidebarProps> = ({
  className = '',
  randomizeIcons = true,
  items: itemsProp,
  analyticsSection: analyticsProp,
  footerItems: footerItemsProp,
  defaultExpandedKeys,
  onNavigate,
  onSubNavigate,
  filterEnabled = true,
}) => {
  // Default data mirrors your current structure and Figma spec.
  const defaultTopItems: SidebarMenuItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'audiences', label: 'Audiences', icon: Users, hasDropdown: true },
    { id: 'lists', label: 'Lists', icon: List },
    { id: 'campaign-management', label: 'Campaign Management', icon: Megaphone, hasDropdown: true },
    { id: 'linkedin-tuning', label: 'Linkedin Ads Tuning', icon: Linkedin, hasDropdown: true },
  ];

  const defaultAnalyticsChildren: SidebarSubItem[] = [
    { id: 'outreach-campaigns', label: 'Outreach Campaigns' },
    { id: 'linkedin-ads-budget-report', label: 'Linkedin Ads Budget Report' },
    { id: 'hour-by-hour-reporting', label: 'Hour-by-hour Reporting' },
    { id: 'linkedin-ads', label: 'Linkedin Ads' },
    { id: 'ads-hub', label: 'Ads Hub (beta)' },
    { id: 'website-visitors', label: 'Website Visitors', isActive: true },
  ];

  const defaultAnalytics: { parent: Omit<SidebarMenuItem, 'children'>; children: SidebarSubItem[] } = {
    parent: { id: 'analytics', label: 'Analytics', icon: BarChart3, hasDropdown: true },
    children: defaultAnalyticsChildren,
  };

  const defaultFooter: SidebarMenuItem[] = [
    { id: 'report-issue', label: 'Report issue', icon: AlertCircle },
    { id: 'settings', label: 'Settings', icon: Settings, hasDropdown: true },
  ];

  const topItems = itemsProp ?? defaultTopItems;
  const analytics = (analyticsProp ?? defaultAnalytics) as { parent: Omit<SidebarMenuItem, 'children'>; children: SidebarSubItem[] };
  const footerItems = footerItemsProp ?? defaultFooter;

  const initialExpanded = useInitialExpanded(defaultExpandedKeys);
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>(initialExpanded);

  const [searchValue, setSearchValue] = useState('');
  const [searchError, setSearchError] = useState<string | null>(null);

  const validateSearch = useCallback((value: string) => {
    if (value.length > 30) return 'Max 30 characters.';
    if (!/^[a-zA-Z0-9\s]*$/.test(value)) return 'Use letters, numbers, and spaces only.';
    return null;
  }, []);

  const onSearchChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const next = e.target.value;
      const err = validateSearch(next);
      setSearchError(err);
      if (!err) setSearchValue(next);
    },
    [validateSearch],
  );

  const toggleMenu = useCallback((menuId: string) => {
    setExpandedMenus((prev) => ({ ...prev, [menuId]: !prev[menuId] }));
  }, []);

  // Filter analytics submenu items only (per spec)
  const filteredAnalyticsItems = useMemo(() => {
    const base = analytics.children;
    if (!searchValue) return base;
    const q = searchValue.toLowerCase();
    return base.filter((item) => item.label.toLowerCase().includes(q));
  }, [analytics.children, searchValue]);

  const analyticsMenuId = `${analytics.parent.id}-submenu`;

  const handleTopClick = useCallback(
    (item: SidebarMenuItem) => {
      if (item.hasDropdown) {
        toggleMenu(item.id);
      } else {
        item.onClick?.();
        onNavigate?.(item.id);
      }
    },
    [onNavigate, toggleMenu],
  );

  const handleSubClick = useCallback(
    (sub: SidebarSubItem) => {
      sub.onClick?.();
      if (sub.id) onSubNavigate?.(sub.id);
    },
    [onSubNavigate],
  );

  return (
    <aside
      className={`sidebar ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="sidebar__container">
        {/* Top Section */}
        <div className="flex flex-col">
          {/* Header with Logo */}
          <div className="sidebar__header">
            <div className="sidebar__logo">
              <h1 className="sidebar__logo-text">IMPACTABLE</h1>
            </div>
          </div>

          {/* Search Filter */}
          {filterEnabled && (
            <form
              className="mb-6"
              role="search"
              aria-label="Filter sidebar items"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <Input
                  placeholder="Filter items…"
                  inputMode="text"
                  aria-label="Filter items"
                  aria-invalid={!!searchError}
                  aria-describedby={searchError ? 'sidebar-search-error' : undefined}
                  onChange={onSearchChange}
                  className="bg-blue-800 border-blue-700 text-white placeholder-blue-300 focus:border-blue-500 focus:ring-blue-500"
                />
                {searchError && (
                  <p id="sidebar-search-error" className="mt-1 text-xs text-red-400" role="alert">
                    {searchError}
                  </p>
                )}
              </div>
            </form>
          )}

          {/* Main Navigation */}
          <nav className="sidebar__nav" role="menubar" aria-label="Primary">
            <div className="sidebar__nav-section">
              {topItems.map((item) => (
                <MenuButton
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  hasDropdown={item.hasDropdown}
                  isActive={item.isActive}
                  onClick={() => handleTopClick(item)}
                  aria-expanded={item.hasDropdown ? !!expandedMenus[item.id] : undefined}
                  controlsId={item.hasDropdown ? `${item.id}-submenu` : undefined}
                  useRandomIcon={randomizeIcons}
                />
              ))}

              {/* Analytics section with submenu */}
              <div className="sidebar__analytics-section">
                <MenuButton
                  icon={analytics.parent.icon}
                  label={analytics.parent.label}
                  hasDropdown={true}
                  isActive={analytics.parent.isActive}
                  onClick={() => toggleMenu(analytics.parent.id)}
                  aria-expanded={!!expandedMenus[analytics.parent.id]}
                  controlsId={analyticsMenuId}
                  useRandomIcon={randomizeIcons}
                />
                <SubMenu
                  id={analyticsMenuId}
                  items={filteredAnalyticsItems.map((it) => ({
                    id: it.id,
                    label: it.label,
                    isActive: it.isActive,
                    onClick: () => handleSubClick(it),
                  }))}
                  isOpen={!!expandedMenus[analytics.parent.id]}
                />
              </div>
            </div>
          </nav>
        </div>

        {/* Footer Section */}
        <div className="sidebar__footer" aria-label="Secondary">
          {footerItems.map((item) => (
            <MenuButton
              key={item.id}
              icon={item.icon}
              label={item.label}
              hasDropdown={item.hasDropdown}
              isActive={item.isActive}
              onClick={() => handleTopClick(item)}
              aria-expanded={item.hasDropdown ? !!expandedMenus[item.id] : undefined}
              controlsId={item.hasDropdown ? `${item.id}-submenu` : undefined}
              useRandomIcon={randomizeIcons}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};