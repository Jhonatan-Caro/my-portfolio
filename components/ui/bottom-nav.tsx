import type { ReactNode } from "react";
import {
  IconBriefcase,
  IconFolder,
  IconHome,
  IconMail,
} from "@/components/ui/icons";

const items: { href: string; label: string; icon: ReactNode; accent?: boolean }[] = [
  { href: "#inicio", label: "Inicio", icon: <IconHome /> },
  { href: "#experiencia", label: "Experiencia", icon: <IconBriefcase /> },
  { href: "#proyectos", label: "Proyectos", icon: <IconFolder /> },
  { href: "#contacto", label: "Contacto", icon: <IconMail />, accent: true },
];

export function BottomNav() {
  return (
    <nav
      aria-label="Navegación principal"
      className="fixed bottom-5 left-1/2 z-20 -translate-x-1/2"
    >
      <ul className="flex items-center gap-1 rounded-lg border border-hairline bg-raised/90 p-1.5 backdrop-blur">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`flex flex-col items-center gap-1 rounded-sm px-3.5 py-2 font-mono text-label transition-colors ${
                item.accent
                  ? "border border-accent/40 bg-accent/10 text-accent hover:bg-accent/15"
                  : "text-muted hover:bg-chip hover:text-ink"
              }`}
            >
              <span className="text-[1.05rem] leading-none">{item.icon}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
