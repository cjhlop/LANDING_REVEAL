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
  X
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { MenuButton } from './MenuButton';
import { SubMenu } from './SubMenu';
import type { SidebarProps } from './types';

export const Sidebar: React.FC<SidebarProps> = ({ className = '', randomizeIcons = true }) => {
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    analytics: true,
  });

  const [searchValue, setSearchValue] = useState('');
  const [searchError, setSearchError] = useState<string | null>(null);

  const toggleMenu = useCallback((menuKey: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  }, []);

  const validateSearch = useCallback((value: string) => {
    if (value.length > 30) return 'Max 30 characters.';
    if (!/^[a-zA-Z0-9\s]*$/.test(value)) return 'Use letters, numbers, and spaces only.';
    return null;
  }, []);

  const onSearchChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    const next = e.target.value;
    const err = validateSearch(next);
    setSearchError(err);
    if (!err) setSearchValue(next);
  }, [validateSearch]);

  const analyticsSubItems = useMemo(() => {
    const base = [
      { label: 'Outreach Campaigns', isActive: false },
      { label: 'LinkedIn Ads Budget Report', isActive: false },
      { label: 'Hour-by-hour Reporting', isActive: false },
      { label: 'LinkedIn Ads', isActive: false },
      { label: 'Ads Hub (beta)', isActive: false },
      { label: 'Website Visitors', isActive: true },
    ];
    if (!searchValue) return base;
    const q = searchValue.toLowerCase();
    return base.filter(item => item.label.toLowerCase().includes(q));
  }, [searchValue]);

  const analyticsMenuId = 'submenu-analytics';

  return (
    <aside 
      className={`sidebar w-[250px] ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="sidebar__container">
        {/* Header */}
        <div className="sidebar__header">
          <button 
            className="sidebar__close-button"
            aria-label="Close sidebar"
            type="button"
          >
            <X size={24} />
          </button>
          <div className="sidebar__logo">
            <h1 className="sidebar__logo-text">IMPACTABLE</h1>
          </div>
        </div>

        {/* Optional search (validated) */}
        <form
          className="mb-4"
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
            />
            {searchError && (
              <p
                id="sidebar-search-error"
                className="mt-1 text-xs text-red-600"
                role="alert"
              >
                {searchError}
              </p>
            )}
          </div>
        </form>

        {/* Main Navigation */}
        <nav className="sidebar__nav" role="menubar">
          <div className="sidebar__nav-section">
            <MenuButton
              icon={LayoutDashboard}
              label="Dashboard"
              onClick={() => {}}
              useRandomIcon={randomizeIcons}
            />
            
            <MenuButton
              icon={Users}
              label="Audiences"
              hasDropdown={true}
              onClick={() => toggleMenu('audiences')}
              aria-expanded={!!expandedMenus.audiences}
              controlsId="submenu-audiences"
              useRandomIcon={randomizeIcons}
            />
            
            <MenuButton
              icon={List}
              label="Lists"
              onClick={() => {}}
              useRandomIcon={randomizeIcons}
            />
            
            <MenuButton
              icon={Megaphone}
              label="Campaign Management"
              hasDropdown={true}
              onClick={() => toggleMenu('campaigns')}
              aria-expanded={!!expandedMenus.campaigns}
              controlsId="submenu-campaigns"
              useRandomIcon={randomizeIcons}
            />
            
            <MenuButton
              icon={Linkedin}
              label="LinkedIn Ads Tuning"
              hasDropdown={true}
              onClick={() => toggleMenu('linkedin')}
              aria-expanded={!!expandedMenus.linkedin}
              controlsId="submenu-linkedin"
              useRandomIcon={randomizeIcons}
            />

            <div className="sidebar__analytics-section">
              <MenuButton
                icon={BarChart3}
                label="Analytics"
                hasDropdown={true}
                onClick={() => toggleMenu('analytics')}
                aria-expanded={!!expandedMenus.analytics}
                controlsId={analyticsMenuId}
                useRandomIcon={randomizeIcons}
              />
              
              <SubMenu 
                id={analyticsMenuId}
                items={analyticsSubItems}
                isOpen={!!expandedMenus.analytics}
              />
            </div>
          </div>
        </nav>

        {/* Footer Section */}
        <div className="sidebar__footer">
          <MenuButton
            icon={AlertCircle}
            label="Report issue"
            onClick={() => {}}
            useRandomIcon={randomizeIcons}
          />
          
          <MenuButton
            icon={Settings}
            label="Settings"
            hasDropdown={true}
            onClick={() => toggleMenu('settings')}
            aria-expanded={!!expandedMenus.settings}
            controlsId="submenu-settings"
            useRandomIcon={randomizeIcons}
          />
        </div>
      </div>
    </aside>
  );
};