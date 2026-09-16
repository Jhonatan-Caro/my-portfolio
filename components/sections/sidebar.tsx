import Image from "next/image";
import { profile, sections } from "@/lib/content";
import { ButtonLink, IconButtonLink } from "@/components/ui/button-link";
import { Availability } from "@/components/ui/availability";
import { SectionNav } from "@/components/ui/section-nav";
import {
  IconDownload,
  IconGitHub,
  IconLinkedIn,
  IconMail,
} from "@/components/ui/icons";

export function Sidebar() {
  return (
    <aside
      id="inicio"
      className="relative flex scroll-mt-16 flex-col justify-between overflow-hidden px-6 pt-16 pb-10 sm:px-10 lg:sticky lg:top-0 lg:h-screen lg:w-[45%] lg:pt-24 lg:pb-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_40%_35%,#221607_0%,transparent_70%)]"
      />
      <div className="relative">
        <Image
          src={profile.photo}
          alt={`Retrato de ${profile.name}`}
          width={1622}
          height={2048}
          priority
          className="size-20 rounded-full border border-hairline object-cover object-top"
        />
        <h1 className="mt-6 text-display font-semibold text-ink">
          {profile.name}
        </h1>
        <p className="mt-3 text-small text-muted">{profile.role}</p>
        <p className="mt-6 max-w-[46ch] text-small text-muted">
          {profile.intro}
        </p>
        <div className="mt-6">
          <Availability label="Disponible para trabajar" />
        </div>
        <p className="mt-2 font-mono text-label text-muted/70">
          {profile.availability}
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-2">
          <ButtonLink href={`mailto:${profile.email}`} variant="primary">
            <IconMail />
            Escríbeme
          </ButtonLink>
          <ButtonLink href={profile.cvPath} download>
            <IconDownload />
            CV
          </ButtonLink>
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
      </div>
      <div className="relative mt-14 hidden lg:block">
        <SectionNav sections={sections} />
      </div>
    </aside>
  );
}
