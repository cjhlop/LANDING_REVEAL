import * as React from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

type Variant = "fade" | "slide-left" | "slide-up";

type RevealProps<T extends keyof JSX.IntrinsicElements = "div"> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  variant?: Variant;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  onInView?: (visible: boolean) => void;
  // Optional override to control visibility externally
  active?: boolean;
} & React.ComponentPropsWithoutRef<T>;

export function Reveal<T extends keyof JSX.IntrinsicElements = "div">({
  as,
  className,
  children,
  variant = "fade",
  threshold,
  rootMargin,
  once,
  onInView,
  active,
  ...rest
}: RevealProps<T>) {
  const Component = (as || "div") as any;
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold,
    rootMargin,
    once,
  });

  const visible = typeof active === "boolean" ? active : inView;

  React.useEffect(() => {
    if (onInView) onInView(visible);
  }, [visible, onInView]);

  return (
    <Component
      ref={ref}
      data-variant={variant}
      className={cn(
        "reveal",
        visible && "in-view",
        variant === "slide-left" && "reveal-slide-left",
        variant === "slide-up" && "reveal-slide-up",
        variant === "fade" && "reveal-fade",
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}

type RevealGroupProps = {
  className?: string;
  children?: React.ReactNode;
  variant?: Variant;
  stepMs?: number;
  startDelayMs?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  // Optional override to control visibility externally (e.g., after parent in-view)
  active?: boolean;
};

export const RevealGroup: React.FC<RevealGroupProps> = ({
  className,
  children,
  variant = "slide-left",
  stepMs = 80,
  startDelayMs = 120,
  threshold,
  rootMargin,
  once,
  active,
}) => {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold,
    rootMargin,
    once,
  });

  const visible = typeof active === "boolean" ? active : inView;

  const enhancedChildren = React.Children.toArray(children).map((child, i) => {
    if (React.isValidElement(child)) {
      const prevClass = (child.props as any)?.className ?? "";
      return React.cloneElement(child as React.ReactElement, {
        className: cn("reveal-child", prevClass),
        style: {
          ...(child.props as any)?.style,
          // These CSS vars control stagger delay and are used in globals.css
          ["--i" as any]: i,
        },
      });
    }
    return child;
  });

  return (
    <div
      ref={ref}
      className={cn(
        "reveal-group",
        visible && "in-view",
        variant === "slide-left" && "reveal-slide-left",
        variant === "slide-up" && "reveal-slide-up",
        variant === "fade" && "reveal-fade",
        className,
      )}
      style={
        {
          ["--step-ms" as any]: `${stepMs}ms`,
          ["--start-delay-ms" as any]: `${startDelayMs}ms`,
        } as React.CSSProperties
      }
      aria-hidden={false}
    >
      {enhancedChildren}
    </div>
  );
};