import { skills } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { ChipList } from "@/components/ui/chip";

export function Skills() {
  return (
    <Section id="stack" label="Stack">
      <dl className="space-y-6">
        {skills.map((group) => (
          <div key={group.label}>
            <dt className="text-small font-medium text-ink">{group.label}</dt>
            <dd className="mt-2.5">
              <ChipList items={group.items} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
