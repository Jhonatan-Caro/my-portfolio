import type { ReactNode } from "react";
import type { ProjectTag } from "@/lib/content";

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-sm border border-hairline bg-chip px-2.5 py-1 font-mono text-label text-muted">
      {children}
    </span>
  );
}

export function ChipList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item} className="contents">
          <Chip>{item}</Chip>
        </li>
      ))}
    </ul>
  );
}

const tagColors: Record<ProjectTag["color"], string> = {
  frontend: "bg-cat-frontend",
  backend: "bg-cat-backend",
  ai: "bg-cat-ai",
  data: "bg-cat-data",
};

export function CategoryTag({ tag }: { tag: ProjectTag }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-label text-muted">
      <span
        aria-hidden="true"
        className={`size-1.5 rounded-full ${tagColors[tag.color]}`}
      />
      {tag.label}
    </span>
  );
}
