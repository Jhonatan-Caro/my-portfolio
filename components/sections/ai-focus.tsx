import { aiFocus } from "@/lib/content";
import { Section } from "@/components/ui/section";

export function AiFocus() {
  return (
    <Section id="ia" label={aiFocus.title}>
      <p className="max-w-[70ch] text-small text-muted">{aiFocus.intro}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {aiFocus.items.map((item) => (
          <article
            key={item.title}
            className="rounded-md border border-hairline bg-raised p-5"
          >
            <h3 className="text-body font-semibold">{item.title}</h3>
            <p className="mt-2 text-small text-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
