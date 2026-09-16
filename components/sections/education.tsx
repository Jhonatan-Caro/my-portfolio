import { education } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { ChipList } from "@/components/ui/chip";

export function Education() {
  return (
    <Section id="formacion" label="Formación">
      <ol className="space-y-10 border-l border-hairline">
        {education.map((item) => (
          <li key={item.title} className="relative pl-7">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[4.5px] size-2 rounded-full bg-ink"
            />
            <p className="font-mono text-label tracking-widest text-muted uppercase">
              {item.period}
            </p>
            <h3 className="mt-2 text-h3 font-semibold">{item.title}</h3>
            <p className="mt-1 text-small text-muted">{item.school}</p>
            <div className="mt-4">
              <ChipList items={item.stack} />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
