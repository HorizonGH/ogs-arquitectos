import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ProjectCarousel } from "@/components/project-carousel";
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
        intro="Cada proyecto responde a las necesidades de cada cliente, teniendo en cuenta el contexto, soluciones espaciales, funcionales y constructivas. Estos son algunos de los trabajos desarrollados por el estudio."
      />

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-x-8 gap-y-24">
            {projects.map((project, index) => (
              <Reveal key={project.title}>
                <article className="grid gap-6 md:grid-cols-12 md:items-start">
                  <ProjectCarousel
                    images={project.images}
                    alt={`${project.title}, ${project.type} en ${project.place}`}
                    className={`md:col-span-8 ${index % 2 === 1 ? "md:order-2" : ""}`}
                  />
                  <div className="md:col-span-4">
                    <h2 className="border-t-2 border-foreground pt-4 text-2xl font-extrabold leading-snug">{project.title}</h2>
                    <dl className="mt-6 space-y-3">
                      <div className="flex justify-between gap-4 border-b border-border pb-2">
                        <dt className="text-xs font-semibold text-muted-foreground shrink-0">Año</dt>
                        <dd className="text-xs font-bold text-right">{project.year}</dd>
                      </div>
                      <div className="flex justify-between gap-4 border-b border-border pb-2">
                        <dt className="text-xs font-semibold text-muted-foreground shrink-0">Ubicación</dt>
                        <dd className="text-xs font-bold text-right">{project.place}</dd>
                      </div>
                      <div className="flex justify-between gap-4 border-b border-border pb-2">
                        <dt className="text-xs font-semibold text-muted-foreground shrink-0">Intervención</dt>
                        <dd className="text-xs font-bold text-right">{project.type}</dd>
                      </div>
                    </dl>
                    {project.note && (
                      <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground italic">{project.note}</p>
                    )}
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
