import React, { useState } from 'react';
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
import { MenuButton } from './MenuButton';
import { SubMenu } from './SubMenu';
import { SidebarProps } from './types';

export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    analytics: true, // Analytics is expanded by default as per the design
  });

  const toggleMenu = (menuKey: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  const analyticsSubItems = [
    { label: 'Outreach Campaigns', isActive: false },
    { label: 'LinkedIn Ads Budget Rep...', isActive: false },
    { label: 'Hour-by-hour Reporting', isActive: false },
    { label: 'LinkedIn Ads', isActive: false },
    { label: 'Ads Hub (beta)', isActive: false },
    { label: 'Website Visitors', isActive: true },
  ];

  return (
    <aside 
      className={`sidebar ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="sidebar__container">
        {/* Header Section */}
        <div className="sidebar__header">
          {/* Close Button */}
          <button 
            className="sidebar__close-button"
            aria-label="Close sidebar"
          >
            <X size={24} />
          </button>
          
          {/* Logo */}
          <div className="sidebar__logo">
            <h1 className="sidebar__logo-text">IMPACTABLE</h1>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="sidebar__nav" role="menubar">
          <div className="sidebar__nav-section">
            <MenuButton
              icon={LayoutDashboard}
              label="Dashboard"
              onClick={() => console.log('Dashboard clicked')}
            />
            
            <MenuButton
              icon={Users}
              label="Audiences"
              hasDropdown={true}
              onClick={() => toggleMenu('audiences')}
              aria-expanded={expandedMenus.audiences}
            />
            
            <MenuButton
              icon={List}
              label="Lists"
              onClick={() => console.log('Lists clicked')}
            />
            
            <MenuButton
              icon={Megaphone}
              label="Campaign Management"
              hasDropdown={true}
              onClick={() => toggleMenu('campaigns')}
              aria-expanded={expandedMenus.campaigns}
            />
            
            <MenuButton
              icon={Linkedin}
              label="LinkedIn Ads Tuning"
              hasDropdown={true}
              onClick={() => toggleMenu('linkedin')}
              aria-expanded={expandedMenus.linkedin}
            />
            
            <div className="sidebar__analytics-section">
              <MenuButton
                icon={BarChart3}
                label="Analytics"
                hasDropdown={true}
                onClick={() => toggleMenu('analytics')}
                aria-expanded={expandedMenus.analytics}
              />
              
              <SubMenu 
                items={analyticsSubItems}
                isOpen={expandedMenus.analytics || false}
              />
            </div>
          </div>
        </nav>

        {/* Footer Section */}
        <div className="sidebar__footer">
          <MenuButton
            icon={AlertCircle}
            label="Report issue"
            onClick={() => console.log('Report issue clicked')}
          />
          
          <MenuButton
            icon={Settings}
            label="Settings"
            hasDropdown={true}
            onClick={() => toggleMenu('settings')}
            aria-expanded={expandedMenus.settings}
          />
        </div>
      </div>
    </aside>
  );
};