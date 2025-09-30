import * as React from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Zap, Users, BarChart3, Bot } from "lucide-react";
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

// Enhanced ListItem without dots
const EnhancedListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; description?: string }
>(({ className, title, children, description, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-gray-50 hover:shadow-sm border border-transparent hover:border-gray-200",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-gray-900">{title}</div>
          {(description || children) && (
            <p className="line-clamp-2 text-xs leading-relaxed text-gray-600">
              {description || children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
EnhancedListItem.displayName = "EnhancedListItem";

const NavLink: React.FC<Props> = (props) => {
  if ("items" in props) {
    const { label, items, className, trailing, useNavigationMenu } = props;

    // Use NavigationMenu for "Features" with enhanced 4-column layout
    if (useNavigationMenu && label === "Features") {
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
                {/* 4-column grid layout */}
                <div className="grid grid-cols-4 gap-6 p-6 w-[920px]">
                  
                  {/* Column 1: LinkedIn Ads */}
                  <div className="space-y-4">
                    {/* Enhanced big card */}
                    <NavigationMenuLink asChild>
                      <Link
                        to="/#linkedin-ads"
                        className="group/card relative flex flex-col justify-between rounded-xl bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 p-5 h-36 no-underline outline-none transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] border border-blue-100/50 hover:border-blue-200"
                      >
                        {/* Icon */}
                        <div className="flex items-center justify-between">
                          <div className="p-2 rounded-lg bg-blue-500/10 group-hover/card:bg-blue-500/20 transition-colors duration-300">
                            <Zap className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="w-2 h-2 rounded-full bg-blue-400/60 group-hover/card:bg-blue-500 transition-colors duration-300" />
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-2">
                          <div className="text-lg font-semibold text-gray-900 group-hover/card:text-blue-900 transition-colors duration-300">
                            LinkedIn Ads
                          </div>
                          <p className="text-sm leading-tight text-gray-600 group-hover/card:text-blue-700 transition-colors duration-300">
                            Optimize your LinkedIn advertising campaigns with smart controls.
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    
                    {/* 3 enhanced small items */}
                    <div className="space-y-2">
                      <EnhancedListItem
                        href="/#ad-scheduling"
                        title="Smart Scheduling"
                        description="Run ads when audience is most active"
                      />
                      <EnhancedListItem
                        href="/#frequency-management"
                        title="Frequency Control"
                        description="Prevent audience fatigue"
                      />
                      <EnhancedListItem
                        href="/#budget-optimization"
                        title="Budget Optimization"
                        description="Maximize ROI with smart spending"
                      />
                    </div>
                  </div>

                  {/* Column 2: Audience Intelligence */}
                  <div className="space-y-4">
                    {/* Enhanced big card */}
                    <NavigationMenuLink asChild>
                      <Link
                        to="/#audience-intelligence"
                        className="group/card relative flex flex-col justify-between rounded-xl bg-gradient-to-br from-emerald-50 via-emerald-50 to-emerald-100 p-5 h-36 no-underline outline-none transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:scale-[1.02] border border-emerald-100/50 hover:border-emerald-200"
                      >
                        {/* Icon */}
                        <div className="flex items-center justify-between">
                          <div className="p-2 rounded-lg bg-emerald-500/10 group-hover/card:bg-emerald-500/20 transition-colors duration-300">
                            <Users className="h-5 w-5 text-emerald-600" />
                          </div>
                          <div className="w-2 h-2 rounded-full bg-emerald-400/60 group-hover/card:bg-emerald-500 transition-colors duration-300" />
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-2">
                          <div className="text-lg font-semibold text-gray-900 group-hover/card:text-emerald-900 transition-colors duration-300">
                            Audience Intelligence
                          </div>
                          <p className="text-sm leading-tight text-gray-600 group-hover/card:text-emerald-700 transition-colors duration-300">
                            Build strategic audiences based on real engagement data.
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    
                    {/* 3 enhanced small items */}
                    <div className="space-y-2">
                      <EnhancedListItem
                        href="/#visitor-tracking"
                        title="Visitor Tracking"
                        description="Identify anonymous website visitors"
                      />
                      <EnhancedListItem
                        href="/#intent-signals"
                        title="Intent Signals"
                        description="Detect buying intent patterns"
                      />
                      <EnhancedListItem
                        href="/#account-exclusions"
                        title="Smart Exclusions"
                        description="Exclude non-fit prospects automatically"
                      />
                    </div>
                  </div>

                  {/* Column 3: Analytics & Attribution */}
                  <div className="space-y-4">
                    {/* Enhanced big card */}
                    <NavigationMenuLink asChild>
                      <Link
                        to="/#analytics"
                        className="group/card relative flex flex-col justify-between rounded-xl bg-gradient-to-br from-purple-50 via-purple-50 to-purple-100 p-5 h-36 no-underline outline-none transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-[1.02] border border-purple-100/50 hover:border-purple-200"
                      >
                        {/* Icon */}
                        <div className="flex items-center justify-between">
                          <div className="p-2 rounded-lg bg-purple-500/10 group-hover/card:bg-purple-500/20 transition-colors duration-300">
                            <BarChart3 className="h-5 w-5 text-purple-600" />
                          </div>
                          <div className="w-2 h-2 rounded-full bg-purple-400/60 group-hover/card:bg-purple-500 transition-colors duration-300" />
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-2">
                          <div className="text-lg font-semibold text-gray-900 group-hover/card:text-purple-900 transition-colors duration-300">
                            Analytics & Attribution
                          </div>
                          <p className="text-sm leading-tight text-gray-600 group-hover/card:text-purple-700 transition-colors duration-300">
                            Track full customer journey and measure true ROI.
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    
                    {/* 3 enhanced small items */}
                    <div className="space-y-2">
                      <EnhancedListItem
                        href="/#revenue-attribution"
                        title="Revenue Attribution"
                        description="Connect campaigns to actual revenue"
                      />
                      <EnhancedListItem
                        href="/#multi-channel"
                        title="Multi-Channel Insights"
                        description="Unify data across all channels"
                      />
                      <EnhancedListItem
                        href="/#performance-reports"
                        title="Performance Reports"
                        description="Comprehensive campaign analytics"
                      />
                    </div>
                  </div>

                  {/* Column 4: Automation & AI */}
                  <div className="space-y-4">
                    {/* Enhanced big card */}
                    <NavigationMenuLink asChild>
                      <Link
                        to="/#automation"
                        className="group/card relative flex flex-col justify-between rounded-xl bg-gradient-to-br from-orange-50 via-orange-50 to-orange-100 p-5 h-36 no-underline outline-none transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 hover:scale-[1.02] border border-orange-100/50 hover:border-orange-200"
                      >
                        {/* Icon */}
                        <div className="flex items-center justify-between">
                          <div className="p-2 rounded-lg bg-orange-500/10 group-hover/card:bg-orange-500/20 transition-colors duration-300">
                            <Bot className="h-5 w-5 text-orange-600" />
                          </div>
                          <div className="w-2 h-2 rounded-full bg-orange-400/60 group-hover/card:bg-orange-500 transition-colors duration-300" />
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-2">
                          <div className="text-lg font-semibold text-gray-900 group-hover/card:text-orange-900 transition-colors duration-300">
                            Automation & AI
                          </div>
                          <p className="text-sm leading-tight text-gray-600 group-hover/card:text-orange-700 transition-colors duration-300">
                            AI-powered optimization and automated workflows.
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    
                    {/* 3 enhanced small items */}
                    <div className="space-y-2">
                      <EnhancedListItem
                        href="/#ai-optimization"
                        title="AI Optimization"
                        description="Automated campaign improvements"
                      />
                      <EnhancedListItem
                        href="/#smart-alerts"
                        title="Smart Alerts"
                        description="Get notified of important changes"
                      />
                      <EnhancedListItem
                        href="/#workflow-automation"
                        title="Workflow Automation"
                        description="Streamline repetitive tasks"
                      />
                    </div>
                  </div>

                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
    }

    // Use NavigationMenu for "Resources" with original layout
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
                <ul className="grid gap-3 p-4 md:w-[400px]">
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