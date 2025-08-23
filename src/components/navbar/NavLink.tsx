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
  "text-sm leading-5 tracking-[-0.2px] text-gray-500 hover:text-gray-900 transition-colors inline-flex items-center gap-1";

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
          <span>{label}</span>
          {trailing ?? (
            <ChevronDown
              className="size-4 text-gray-400 group-data-[state=open]:rotate-180 transition-transform"
              aria-hidden="true"
            />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="min-w-40">
          {items.map((item, idx) => (
            <DropdownMenuItem
              key={`${item.label}-${idx}`}
              onSelect={(e) => {
                if (item.onSelect) item.onSelect();
                // Keep default behavior for links rendered below
                if (!item.to) e.preventDefault();
              }}
              className="focus:bg-gray-100"
            >
              {item.to ? (
                <Link to={item.to} className="w-full">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  const { label, to, className, trailing } = props;
  return (
    <Link to={to} className={`${baseClasses} ${className ?? ""}`}>
      <span>{label}</span>
      {trailing}
    </Link>
  );
};

export default React.memo(NavLink);