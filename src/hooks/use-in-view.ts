import * as React from "react";

export type UseInViewOptions = {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  once?: boolean;
};

export function useInView<T extends Element>({
  threshold = 0.2,
  root = null,
  rootMargin = "0px",
  once = true,
}: UseInViewOptions = {}) {
  const [inView, setInView] = React.useState(false);
  const nodeRef = React.useRef<T | null>(null);

  const setRef = React.useCallback((node: T | null) => {
    nodeRef.current = node;
  }, []);

  React.useEffect(() => {
    const node = nodeRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    let didUnobserve = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === node) {
            if (entry.isIntersecting) {
              setInView(true);
              if (once && !didUnobserve) {
                observer.unobserve(entry.target);
                didUnobserve = true;
              }
            } else if (!once) {
              setInView(false);
            }
          }
        });
      },
      { threshold, root, rootMargin },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, once]);

  return { ref: setRef, inView } as const;
}