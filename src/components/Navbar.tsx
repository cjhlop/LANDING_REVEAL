"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { NavLink, Logo, RandomIcon, GetAccessDialog } from "./navbar/index";

export type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isHydrated, setIsHydrated] = React.useState(false);

  // Handle scroll state for backdrop blur effect
  React.useEffect(() => {
    setIsHydrated(true);
    
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change (simulated)
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded-md focus:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Skip to main content
      </a>

      <header
        role="banner"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          isScrolled 
            ? "bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-sm" 
            : "bg-white/75 backdrop-blur-md border-b border-white/20",
          className,
        )}
      >
        <nav
          role="navigation"
          aria-label="Primary navigation"
          className="w-full max-w-[1260px] mx-auto h-20 px-5 md:px-6 lg:px-8"
        >
          <div className="flex items-center justify-between h-full">
            {/* Desktop Navigation - Left */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink
                label="Getting started"
                useNavigationMenu={true}
                items={[
                  { 
                    label: "Quick Start", 
                    to: "/#quick-start",
                    description: "Get up and running with DemandSense in minutes."
                  },
                  { 
                    label: "LinkedIn Integration", 
                    to: "/#linkedin-integration",
                    description: "Connect your LinkedIn Ads account and start optimizing."
                  },
                  { 
                    label: "Best Practices", 
                    to: "/#best-practices",
                    description: "Learn proven strategies for B2B LinkedIn advertising success."
                  },
                ]}
              />
              <NavLink
                label="Products"
                items={[
                  { label: "LinkedIn Ads Optimization", to: "/#linkedin-ads" },
                  { label: "Website Visitor Tracking", to: "/#visitor-tracking" },
                  { label: "Audience Intelligence", to: "/#audience-intelligence" },
                ]}
              />
              <NavLink
                label="Resources"
                items={[
                  { label: "Documentation", to: "/docs" },
                  { label: "Case Studies", to: "/case-studies" },
                  { label: "Blog", to: "/blog" },
                ]}
              />
              <NavLink
                label="Pricing"
                to="/pricing"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">
                {isMobileMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>

            {/* Center Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Logo />
            </div>

            {/* Desktop Actions - Right */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                size="lg"
                variant="outline"
                className="h-11 rounded-lg px-5 border-[#3875F6] bg-transparent text-[#3875F6] hover:bg-blue-500/10 hover:text-[#3875F6] hover:border-[#2c5cc5] font-medium tracking-tight transition-all duration-200 hover:shadow-sm"
                asChild
              >
                <Link to="/#contact" aria-label="Contact us">
                  Contact
                </Link>
              </Button>
              <GetAccessDialog />
            </div>

            {/* Mobile CTA */}
            <div className="md:hidden">
              <GetAccessDialog />
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 md:hidden"
            aria-hidden="true"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-gray-600/50 backdrop-blur-sm" />
          </div>
        )}

        {/* Mobile Menu Panel */}
        <div
          id="mobile-menu"
          className={cn(
            "fixed top-20 left-0 right-0 z-50 md:hidden bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ease-out",
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="px-5 py-6 space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {/* Mobile Navigation Links */}
            <div className="space-y-4">
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-900 px-3">Getting Started</h3>
                <div className="space-y-1">
                  <Link
                    to="/#quick-start"
                    className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Quick Start
                  </Link>
                  <Link
                    to="/#linkedin-integration"
                    className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    LinkedIn Integration
                  </Link>
                  <Link
                    to="/#best-practices"
                    className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Best Practices
                  </Link>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-900 px-3">Products</h3>
                <div className="space-y-1">
                  <Link
                    to="/#linkedin-ads"
                    className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    LinkedIn Ads Optimization
                  </Link>
                  <Link
                    to="/#visitor-tracking"
                    className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Website Visitor Tracking
                  </Link>
                  <Link
                    to="/#audience-intelligence"
                    className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Audience Intelligence
                  </Link>
                </div>
              </div>

              <Link
                to="/pricing"
                className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <Button
                size="lg"
                variant="outline"
                className="w-full h-11 rounded-lg border-[#3875F6] bg-transparent text-[#3875F6] hover:bg-blue-500/10 hover:text-[#3875F6] font-medium tracking-tight"
                asChild
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link to="/#contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20" aria-hidden="true" />
    </>
  );
};

export default React.memo(Navbar);

// Named re-exports so consumers can import from '@/components/Navbar'
export { default as Logo } from "./navbar/Logo";
export { default as NavLink } from "./navbar/NavLink";
export { default as RandomIcon } from "./navbar/RandomIcon";