import * as React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

type BaseProps = {
  label: string;
  className?: string;
};

type PlainLink = BaseProps & {
  to: string;
  children?: never;
  items?: never;
  trailing?: React.ReactNode;
  useNavigationMenu?: never;
};

type MenuItem = {
  label: string;
  to?: string;
  onSelect?: () => void;
  description?: string;
};

type MenuLink = BaseProps & {
  to?: never;
  items: MenuItem[];
  trailing?: React.ReactNode;
  useNavigationMenu?: boolean;
};

type Props = PlainLink | MenuLink;

const baseClasses =
  "group relative text-sm leading-5 tracking-[-0.2px] text-gray-500 hover:text-gray-900 transition-all duration-200 inline-flex items-center gap-1 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-1";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; description?: string }
>(({ className, title, children, description, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {(description || children) && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {description || children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const NavLink: React.FC<Props> = (props) => {
  if ("items" in props) {
    const { label, items, className, trailing, useNavigationMenu } = props;

    // Use NavigationMenu for "Getting started" submenu
    if (useNavigationMenu) {
      return (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={cn(
                "group relative text-sm leading-5 tracking-[-0.2px] text-gray-500 hover:text-gray-900 transition-all duration-200 bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent h-auto px-1 py-2",
                className
              )}>
                <span className="relative">
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full" />
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          DemandSense
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          The ultimate LinkedIn-centric business growth platform for B2B companies.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {items.map((item, idx) => (
                    <ListItem
                      key={`${item.label}-${idx}`}
                      href={item.to || "#"}
                      title={item.label}
                      description={item.description}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
    }

    // Use regular DropdownMenu for other menus
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

export default React.memo(NavLink);