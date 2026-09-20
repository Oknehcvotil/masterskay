"use client";

import { useEffect } from "react";

/** Prepare only offscreen blocks. Never reposition already-visible content. */
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
          seen.add(element);
          element.classList.remove("reveal-pending");
          if (preference.matches || element.contains(document.activeElement))
            continue;
          // No translation, stagger delay or animation of layout dimensions.
          const animation = element.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 420,
            easing: "ease-out",
          });
          animations.set(element, animation);
          animation.onfinish = () => animations.delete(element);
        }
      },
      { threshold: 0, rootMargin: "0px 0px 80px 0px" },
    );

    const showImmediately = (element: HTMLElement) => {
      observer.unobserve(element);
      seen.add(element);
      element.classList.remove("reveal-pending");
      animations.get(element)?.cancel();
      animations.delete(element);
    };
    const reset = () => {
      observer.disconnect();
      for (const animation of animations.values()) animation.cancel();
      animations.clear();
      for (const element of elements)
        element.classList.remove("reveal-pending");
    };
    const prepare = () => {
      reset();
      if (preference.matches) return;
      for (const element of elements) {
        // The first screen and restored scroll positions must never flash or fade out.
        if (seen.has(element)) continue;
        if (element.getBoundingClientRect().top <= window.innerHeight + 80) {
          seen.add(element);
          continue;
        }
        element.classList.add("reveal-pending");
        observer.observe(element);
      }
    };
    const onFocus = (event: FocusEvent) => {
      for (const element of elements) {
        if (event.target instanceof Node && element.contains(event.target))
          showImmediately(element);
      }
    };
    // A direct section link or browser Back must not arrive at a fading target.
    const onHashChange = () => {
      let target: HTMLElement | null;
      try {
        target = document.getElementById(
          decodeURIComponent(location.hash.slice(1)),
        );
      } catch {
        return;
      }
      if (!target) return;
      for (const element of elements) {
        if (target.contains(element) || element.contains(target))
          showImmediately(element);
      }
    };
    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        reset();
        for (const element of elements) seen.add(element);
      }
    };
    prepare();
    onHashChange();
    preference.addEventListener("change", prepare);
    document.addEventListener("focusin", onFocus);
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("pageshow", onPageShow);
    return () => {
      reset();
      preference.removeEventListener("change", prepare);
      document.removeEventListener("focusin", onFocus);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);
  return null;
}
