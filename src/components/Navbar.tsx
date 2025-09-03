import * as React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NavLink, Logo, RandomIcon, GetAccessDialog } from "./navbar/index";

export type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <header
      role="navigation"
      aria-label="Main"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-md border-b border-white/20",
        className,
      )}
    >
      <div className="w-full max-w-[1260px] mx-auto h-20 px-5 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Left links */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            label="Features"
            items={[
              { label: "Automation", to: "/#automation" },
              { label: "Collaboration", to: "/#collaboration" },
              { label: "Analytics", to: "/#analytics" },
            ]}
          />
          <NavLink
            label="Products"
            items={[
              { label: "Web", to: "/#web" },
              { label: "Mobile", to: "/#mobile" },
              { label: "Components", to: "/#components" },
            ]}
          />
          <NavLink
            label="About"
            to="/#about"
            trailing={<RandomIcon className="ml-1 size-4 text-gray-400" title="Random decorative icon" />}
          />
        </nav>

        {/* Center logo */}
        <div className="flex-1 flex justify-center">
          <Logo />
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Button
            size="lg"
            variant="outline"
            className="h-11 rounded-lg px-5 border-[#3875F6] bg-transparent text-[#3875F6] hover:bg-blue-500/10 hover:text-[#3875F6] font-medium tracking-tight"
            asChild
          >
            <Link to="/#contact" aria-label="Contact">
              Contact
            </Link>
          </Button>
          {/* Get access dialog button */}
          <GetAccessDialog />
        </div>
      </div>
    </header>
  );
};

export default React.memo(Navbar);

// Named re-exports so consumers can import from '@/components/Navbar'
export { default as Logo } from "./navbar/Logo";
export { default as NavLink } from "./navbar/NavLink";
export { default as RandomIcon } from "./navbar/RandomIcon";