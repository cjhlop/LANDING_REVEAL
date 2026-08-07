import { useEffect, useRef } from "react";

/**
 * Scroll-reveal: fade-up 24px, 500ms ease-out, staggered 80ms per child,
 * triggered when 15% of the element is in the viewport.
 *
 * Attach the returned ref to a container. Direct children marked with the
 * `data-reveal` attribute animate in, staggered by their order.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = Array.from(
      el.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      items.forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "none";
      });
      return;
    }

    // Initial hidden state
    items.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(24px)";
      item.style.transition =
        "opacity 500ms cubic-bezier(0.16,1,0.3,1), transform 500ms cubic-bezier(0.16,1,0.3,1)";
      item.style.willChange = "opacity, transform";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          const index = items.indexOf(target);
          const delay = Math.max(0, index) * 80;
          target.style.transitionDelay = `${delay}ms`;
          target.style.opacity = "1";
          target.style.transform = "none";
          observer.unobserve(target);
        });
      },
      { threshold: 0.15 },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return ref;
}
