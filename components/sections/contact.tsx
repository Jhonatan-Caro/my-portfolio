import { profile } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { ButtonLink, IconButtonLink } from "@/components/ui/button-link";
import {
  IconDownload,
  IconGitHub,
  IconLinkedIn,
  IconMail,
} from "@/components/ui/icons";

export function Contact() {
  return (
    <Section id="contacto" label="Contacto">
      <p className="max-w-[60ch] text-small text-muted">
        Si crees que puedo encajar en tu equipo, escríbeme y hablamos.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-4 inline-block text-h3 font-semibold text-ink underline decoration-hairline underline-offset-8 transition-colors hover:decoration-accent"
      >
        {profile.email}
      </a>
      <div className="mt-8 flex flex-wrap items-center gap-2">
        <ButtonLink href={profile.cvPath} download>
          <IconDownload />
          Descargar CV
        </ButtonLink>
        <IconButtonLink
          href={`mailto:${profile.email}`}
          aria-label="Enviar correo"
        >
          <IconMail />
        </IconButtonLink>
        <IconButtonLink
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <IconGitHub />
        </IconButtonLink>
        <IconButtonLink
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <IconLinkedIn />
        </IconButtonLink>
      </div>
      <p className="mt-14 font-mono text-label text-muted/70">
        Hecho con Next.js y Tailwind, servido como estático desde Amazon S3.
      </p>
    </Section>
  );
}
