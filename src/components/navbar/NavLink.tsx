import * as React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

type BaseProps = {
  label: string;
  className?: string;
};

type PlainLink = BaseProps & {
  to: string;
  children?: never;
  items?: never;
  trailing?: React.ReactNode;
};

type MenuItem = {
  label: string;
  to?: string;
  onSelect?: () => void;
};

type MenuLink = BaseProps & {
  to?: never;
  items: MenuItem[];
  trailing?: React.ReactNode;
};

type Props = PlainLink | MenuLink;

const baseClasses =
  "group relative text-sm leading-5 tracking-[-0.2px] text-gray-500 hover:text-gray-900 transition-all duration-200 inline-flex items-center gap-1 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-1";

const NavLink: React.FC<Props> = (props) => {
  if ("items" in props) {
    const { label, items, className, trailing } = props;
    const [open, setOpen] = React.useState(false);
    
    return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          className={`${baseClasses} ${className ?? ""}`}
          aria-label={`${label} menu`}
          aria-haspopup="menu"
          aria-expanded={open}
        >
          <span className="relative">
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full" />
          </span>
          {trailing ?? (
            <ChevronDown
              className={cn(
                "size-4 text-gray-400 transition-all duration-200",
                "group-hover:text-gray-600",
                open ? "rotate-180" : "rotate-0"
              )}
              aria-hidden="true"
            />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="start" 
          className="min-w-40 mt-2 border border-gray-200 shadow-lg bg-white/95 backdrop-blur-sm"
          sideOffset={4}
        >
          {items.map((item, idx) => (
            <DropdownMenuItem
              key={`${item.label}-${idx}`}
              onSelect={(e) => {
                if (item.onSelect) item.onSelect();
                if (!item.to) e.preventDefault();
              }}
              className="focus:bg-gray-100 hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
            >
              {item.to ? (
                <Link 
                  to={item.to} 
                  className="w-full block py-1 text-gray-700 hover:text-gray-900 transition-colors duration-150"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="w-full block py-1 text-gray-700">{item.label}</span>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  const { label, to, className, trailing } = props;
  return (
    <Link 
      to={to} 
      className={`${baseClasses} ${className ?? ""}`}
    >
      <span className="relative">
        {label}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full" />
      </span>
      {trailing}
    </Link>
  );
};

// Add missing cn import
import { cn } from "@/lib/utils";

export default React.memo(NavLink);