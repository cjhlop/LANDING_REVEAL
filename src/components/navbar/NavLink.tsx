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
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-2.5 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-tight text-gray-900">{title}</div>
        {(description || children) && (
          <p className="text-xs leading-relaxed text-gray-600 line-clamp-2">
            {description || children}
          </p>
        )}
      </a>
    </NavigationMenuLink>
  );
});
ListItem.displayName = "ListItem";

const NavLink: React.FC<Props> = (props) => {
  if ("items" in props) {
    const { label, items, className, trailing, useNavigationMenu } = props;

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
                <div className="grid grid-cols-4 gap-4 p-6 w-[960px]">
                  
                  <div className="space-y-3 min-w-0">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/#linkedin-ads"
                        className="group/card relative flex flex-col justify-between rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-4 h-32 no-underline outline-none transition-all duration-200 hover:shadow-md border border-blue-100 hover:border-blue-200 min-w-0"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="p-1.5 rounded-lg bg-white/80 shadow-sm flex-shrink-0">
                            <Zap className="h-4 w-4 text-blue-600" />
                          </div>
                        </div>
                        
                        <div className="space-y-1 min-w-0">
                          <div className="text-base font-semibold text-gray-900 leading-tight">
                            LinkedIn Ads
                          </div>
                          <p className="text-xs leading-tight text-gray-600 line-clamp-3">
                            Optimize your LinkedIn advertising campaigns with smart controls.
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    
                    <div className="space-y-1">
                      <ListItem
                        href="/#ad-scheduling"
                        title="Smart Scheduling"
                        description="Run ads when audience is most active"
                      />
                      <ListItem
                        href="/#frequency-management"
                        title="Frequency Control"
                        description="Prevent audience fatigue"
                      />
                      <ListItem
                        href="/#budget-optimization"
                        title="Budget Optimization"
                        description="Maximize ROI with smart spending"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 min-w-0">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/website-visitors"
                        className="group/card relative flex flex-col justify-between rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 h-32 no-underline outline-none transition-all duration-200 hover:shadow-md border border-emerald-100 hover:border-emerald-200 min-w-0"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="p-1.5 rounded-lg bg-white/80 shadow-sm flex-shrink-0">
                            <Users className="h-4 w-4 text-emerald-600" />
                          </div>
                        </div>
                        
                        <div className="space-y-1 min-w-0">
                          <div className="text-base font-semibold text-gray-900 leading-tight">
                            Audience Intelligence
                          </div>
                          <p className="text-xs leading-tight text-gray-600 line-clamp-3">
                            Build strategic audiences based on real engagement data.
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    
                    <div className="space-y-1">
                      <ListItem
                        href="/website-visitors"
                        title="Visitor Tracking (WebID)"
                        description="Identify anonymous website visitors"
                      />
                      <ListItem
                        href="/#intent-signals"
                        title="Intent Signals"
                        description="Detect buying intent patterns"
                      />
                      <ListItem
                        href="/#account-exclusions"
                        title="Smart Exclusions"
                        description="Exclude non-fit prospects automatically"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 min-w-0">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/#analytics"
                        className="group/card relative flex flex-col justify-between rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-4 h-32 no-underline outline-none transition-all duration-200 hover:shadow-md border border-purple-100 hover:border-purple-200 min-w-0"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="p-1.5 rounded-lg bg-white/80 shadow-sm flex-shrink-0">
                            <BarChart3 className="h-4 w-4 text-purple-600" />
                          </div>
                        </div>
                        
                        <div className="space-y-1 min-w-0">
                          <div className="text-base font-semibold text-gray-900 leading-tight">
                            Analytics & Attribution
                          </div>
                          <p className="text-xs leading-tight text-gray-600 line-clamp-3">
                            Track full customer journey and measure true ROI.
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    
                    <div className="space-y-1">
                      <ListItem
                        href="/#revenue-attribution"
                        title="Revenue Attribution"
                        description="Connect campaigns to actual revenue"
                      />
                      <ListItem
                        href="/#multi-channel"
                        title="Multi-Channel Insights"
                        description="Unify data across all channels"
                      />
                      <ListItem
                        href="/benchmark"
                        title="Benchmark Report"
                        description="Compare performance with industry standards"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 min-w-0">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/#automation"
                        className="group/card relative flex flex-col justify-between rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-4 h-32 no-underline outline-none transition-all duration-200 hover:shadow-md border border-orange-100 hover:border-orange-200 min-w-0"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="p-1.5 rounded-lg bg-white/80 shadow-sm flex-shrink-0">
                            <Bot className="h-4 w-4 text-orange-600" />
                          </div>
                        </div>
                        
                        <div className="space-y-1 min-w-0">
                          <div className="text-base font-semibold text-gray-900 leading-tight">
                            Automation & AI
                          </div>
                          <p className="text-xs leading-tight text-gray-600 line-clamp-3">
                            AI-powered optimization and automated workflows.
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    
                    <div className="space-y-1">
                      <ListItem
                        href="/#ai-optimization"
                        title="AI Optimization"
                        description="Automated campaign improvements"
                      />
                      <ListItem
                        href="/#smart-alerts"
                        title="Smart Alerts"
                        description="Get notified of important changes"
                      />
                      <ListItem
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