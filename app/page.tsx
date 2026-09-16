import { Sidebar } from "@/components/sections/sidebar";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { AiFocus } from "@/components/sections/ai-focus";
import { Education } from "@/components/sections/education";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { BottomNav } from "@/components/ui/bottom-nav";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col lg:flex-row">
      <Sidebar />
      {/* pb amplio para que la barra flotante no tape el final */}
      <main className="min-w-0 flex-1 px-6 pt-6 pb-36 sm:px-10 lg:pt-24">
        <Experience />
        <Projects />
        <AiFocus />
        <Education />
        <Skills />
        <Contact />
      </main>
      <BottomNav />
    </div>
  );
}
