import { projects } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { CategoryTag, ChipList } from "@/components/ui/chip";
import { IconExternal } from "@/components/ui/icons";

export function Projects() {
  return (
    <Section id="proyectos" label="Proyectos">
      <div className="space-y-5">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-md border border-hairline bg-raised p-5 transition-colors hover:border-muted sm:p-6"
          >
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {project.tags.map((tag) => (
                <CategoryTag key={tag.label} tag={tag} />
              ))}
            </div>
            <h3 className="mt-3 text-h3 font-semibold">{project.name}</h3>
            <p className="mt-0.5 text-small text-muted">{project.tagline}</p>
            <div className="mt-3 flex flex-wrap gap-4 font-mono text-label">
              {project.siteUrl && (
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted underline decoration-hairline underline-offset-4 transition-colors hover:text-ink"
                >
                  Sitio web
                  <IconExternal />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted underline decoration-hairline underline-offset-4 transition-colors hover:text-ink"
                >
                  Repositorio
                  <IconExternal />
                </a>
              )}
            </div>
            <p className="mt-4 max-w-[70ch] text-small text-muted">
              {project.summary}
            </p>
            <ul className="mt-3 max-w-[70ch] list-disc space-y-2 pl-4 text-small text-muted marker:text-hairline">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="mt-5">
              <ChipList items={project.stack} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
