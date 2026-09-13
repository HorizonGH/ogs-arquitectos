import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/estudio")({
  head: () => ({
    meta: [
      { title: "Estudio | OGS Arquitectos" },
      {
        name: "description",
        content: "Somos un estudio de arquitectura en La Habana enfocado en soluciones precisas, responsables y duraderas.",
      },
      { property: "og:title", content: "Estudio | OGS Arquitectos" },
      {
        property: "og:description",
        content: "Nuestro enfoque: escuchar el lugar, trabajar con precisión y construir para que permanezca.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EstudioPage,
});

const values = [
  { title: "Contexto", text: "Cada decisión nace del clima, la calle y la vida que ya existe en el lugar." },
  { title: "Precisión", text: "Documentación rigurosa y detalles resueltos antes de levantar el primer muro." },
  { title: "Permanencia", text: "Materiales y soluciones que envejecen bien y resisten el paso del tiempo." },
];

const facts = [
  { value: "+10", label: "Años de experiencia" },
  { value: "+40", label: "Proyectos desarrollados" },
  { value: "100%", label: "Seguimiento en obra" },
];

function EstudioPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Nuestro enfoque"
        title="Cada proyecto comienza por escuchar el lugar."
        intro="Un estudio pequeño y cercano, con criterio técnico y atención a cada detalle del proceso."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <span className="block size-20 border-8 border-foreground">
            <span className="ml-11 mt-11 block size-3 bg-primary" />
          </span>
          <div>
            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
              Arquitectura responsable, hecha desde la realidad de cada encargo.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Trabajamos con clientes que buscan claridad: saber qué se puede hacer, cuánto cuesta y cómo se construye.
              Por eso empezamos siempre por documentar lo existente y explicar cada decisión con planos y criterios
              comprensibles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-10 md:grid-cols-3">
            {values.map(({ title, text }) => (
              <div key={title} className="border-t-2 border-foreground pt-5">
                <h3 className="text-xl font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 md:px-10">
          {facts.map(({ value, label }) => (
            <div key={label}>
              <p className="text-5xl font-extrabold text-primary-foreground">{value}</p>
              <p className="mt-2 text-sm font-semibold text-primary-foreground/70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
