import { experience } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { ChipList } from "@/components/ui/chip";
import { TextLink } from "@/components/ui/text-link";

export function Experience() {
  return (
    <Section id="experiencia" label="Experiencia">
      <ol className="space-y-12 border-l border-hairline">
        {experience.map((job) => (
          <li key={job.company} className="relative pl-7">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[4.5px] size-2 rounded-full bg-ink"
            />
            <p className="font-mono text-label tracking-widest text-muted uppercase">
              {job.period}
            </p>
            <h3 className="mt-2 text-h3 font-semibold">
              {job.role}{" "}
              <span className="font-normal text-muted">
                en{" "}
                {job.companyUrl ? (
                  <TextLink
                    href={job.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {job.company}
                  </TextLink>
                ) : (
                  job.company
                )}
              </span>
            </h3>
            <p className="mt-1 text-small text-muted">{job.location}</p>
            <ul className="mt-4 max-w-[70ch] list-disc space-y-2.5 pl-4 text-small text-muted marker:text-hairline">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="mt-4">
              <ChipList items={job.stack} />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
