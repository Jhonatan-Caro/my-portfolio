import type { ReactNode } from "react";

type Props = {
  id: string;
  label: string;
  children: ReactNode;
};

export function Section({ id, label, children }: Props) {
  return (
    <section id={id} className="scroll-mt-16 py-10">
      <h2 className="font-mono text-label tracking-[0.2em] text-muted uppercase">
        {label}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
