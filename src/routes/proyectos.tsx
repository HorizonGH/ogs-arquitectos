import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { projects } from "@/lib/site-content";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos | OGS Arquitectos" },
      {
        name: "description",
        content: "Proyectos reales de OGS Arquitectos: remodelación residencial, interiorismo comercial y diseño arquitectónico.",
      },
      { property: "og:title", content: "Proyectos | OGS Arquitectos" },
      {
        property: "og:description",
        content: "Una selección de viviendas, cafeterías e interiores desarrollados por OGS Arquitectos.",
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

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-x-8 gap-y-20 md:grid-cols-12">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={
                  index === 0
                    ? "md:col-span-7"
                    : index === 1
                      ? "md:col-span-5 md:pt-28"
                      : index === 2
                        ? "md:col-span-5"
                        : index === 3
                          ? "md:col-span-7 md:pt-24"
                          : "md:col-span-8 md:col-start-3"
                }
              >
                <div className={`group relative overflow-hidden bg-carbon ${project.orientation === "portrait" ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                  <img
                    src={project.image}
                    alt={`${project.title}, ${project.type}`}
                    width={project.orientation === "portrait" ? 1024 : 1280}
                    height={project.orientation === "portrait" ? 1280 : 960}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                  <span className="absolute right-0 top-0 grid size-12 place-items-center bg-primary text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowDownRight />
                  </span>
                </div>
                <div className="grid gap-4 border-t-2 border-foreground pt-4 sm:grid-cols-[1fr_1.1fr]">
                  <div>
                    <p className="mb-2 text-xs font-extrabold text-primary-strong">0{index + 1}</p>
                    <h2 className="text-2xl font-extrabold sm:text-3xl">{project.title}</h2>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">{project.type}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:pt-7">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
