"use client";

import { useEffect } from "react";

/** Progressive enhancement: content stays visible even without JavaScript. */
export function ScrollReveal() {
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      !("animate" in Element.prototype)
    )
      return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const seen = new WeakSet<Element>();
    const animations = new Map<HTMLElement, Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          observer.unobserve(element);
          if (seen.has(element)) continue;
          seen.add(element);
          if (preference.matches || element.contains(document.activeElement))
            continue;
          const animation = element.animate(
            [
              { opacity: 0.65, transform: "translateY(14px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 560,
              delay: Math.min(Number(element.dataset.revealDelay) || 0, 140),
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            },
          );
          animations.set(element, animation);
          animation.onfinish = () => animations.delete(element);
        }
      },
      { threshold: 0.08 },
    );

    const cancelAnimations = () => {
      for (const animation of animations.values()) animation.cancel();
      animations.clear();
    };
    const syncPreference = () => {
      observer.disconnect();
      cancelAnimations();
      if (!preference.matches) {
        for (const element of elements)
          if (!seen.has(element)) observer.observe(element);
      }
    };
    // Keyboard navigation should never have to wait for a reveal.
    const onFocus = (event: FocusEvent) => {
      for (const [element, animation] of animations) {
        if (event.target instanceof Node && element.contains(event.target)) {
          animation.cancel();
          animations.delete(element);
        }
      }
    };
    syncPreference();
    preference.addEventListener("change", syncPreference);
    document.addEventListener("focusin", onFocus);
    return () => {
      observer.disconnect();
      cancelAnimations();
      preference.removeEventListener("change", syncPreference);
      document.removeEventListener("focusin", onFocus);
    };
  }, []);
  return null;
}
