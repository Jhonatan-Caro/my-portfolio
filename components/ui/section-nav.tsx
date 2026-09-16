"use client";

import { useEffect, useState } from "react";

type Props = {
  sections: { id: string; label: string }[];
};

export function SectionNav({ sections }: Props) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      // Franja central de la ventana: la sección que la ocupa es la activa
      { rootMargin: "-30% 0px -60% 0px" },
    );
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="Secciones">
      <ul className="space-y-2.5">
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`group inline-flex items-center gap-3 font-mono text-label tracking-widest transition-colors ${
                  isActive ? "text-accent" : "text-muted hover:text-ink"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-px transition-all ${
                    isActive
                      ? "w-10 bg-accent"
                      : "w-5 bg-hairline group-hover:w-8 group-hover:bg-muted"
                  } motion-reduce:transition-none`}
                />
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
