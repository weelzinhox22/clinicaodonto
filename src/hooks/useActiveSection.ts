import { useEffect, useState } from "react";

const SECTION_IDS = [
  "tratamentos",
  "sobre",
  "equipe",
  "resultados",
  "faq",
  "contato",
] as const;

export type ActiveSection = (typeof SECTION_IDS)[number] | null;

/**
 * Returns the ID of the section currently most visible in the viewport.
 * Uses IntersectionObserver for performance.
 */
export function useActiveSection(): ActiveSection {
  const [active, setActive] = useState<ActiveSection>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          // Trigger when the top of the section hits ~30% from the viewport top
          rootMargin: "-20% 0px -60% 0px",
          threshold: 0,
        },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return active;
}
