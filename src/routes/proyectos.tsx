import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/site-content";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos | OGS Arquitectos" },
      {
        name: "description",
        content: "Obra seleccionada de OGS Arquitectos en La Habana: rehabilitación, reúso adaptativo y vivienda.",
      },
      { property: "og:title", content: "Proyectos | OGS Arquitectos" },
      {
        property: "og:description",
        content: "Una selección de intervenciones recientes con su ubicación, año y tipo de intervención.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProyectosPage,
});

function ProyectosPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Obra seleccionada"
        title="Proyectos"
        intro="Cada obra responde al clima, la ciudad y a las personas que la habitan. Estos son algunos trabajos recientes."
      />

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-x-8 gap-y-24">
            {projects.map((project, index) => (
              <Reveal key={project.title}>
                <article className="grid gap-6 md:grid-cols-12 md:items-start">
                  <div
                    className={`group relative overflow-hidden bg-carbon md:col-span-8 ${
                      index % 2 === 1 ? "md:order-2" : ""
                    } aspect-[4/3]`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title}, ${project.type} en ${project.place}`}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                    <span className="absolute right-0 top-0 grid size-12 place-items-center bg-primary text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                      <ArrowDownRight />
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h2 className="border-t-2 border-foreground pt-5 text-4xl font-extrabold">{project.title}</h2>
                    <dl className="mt-7 space-y-4">
                      <div className="flex justify-between border-b border-border pb-3">
                        <dt className="text-sm font-semibold text-muted-foreground">Año</dt>
                        <dd className="text-sm font-bold">{project.year}</dd>
                      </div>
                      <div className="flex justify-between border-b border-border pb-3">
                        <dt className="text-sm font-semibold text-muted-foreground">Ubicación</dt>
                        <dd className="text-sm font-bold">{project.place}</dd>
                      </div>
                      <div className="flex justify-between border-b border-border pb-3">
                        <dt className="text-sm font-semibold text-muted-foreground">Intervención</dt>
                        <dd className="text-sm font-bold">{project.type}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
