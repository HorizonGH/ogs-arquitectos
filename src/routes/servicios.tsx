import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/site-content";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios | OGS Arquitectos" },
      {
        name: "description",
        content:
          "Levantamiento técnico, diseño e intervención de espacios, asesoramiento de obra, documentación, diseño gráfico y presupuestos en La Habana.",
      },
      { property: "og:title", content: "Servicios | OGS Arquitectos" },
      {
        property: "og:description",
        content: "Acompañamos cada proyecto desde la primera medición hasta el último detalle construido.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServiciosPage,
});

const process = [
  { number: "01", title: "Diagnóstico", text: "Visita, medición y lectura del contexto para entender el punto de partida." },
  { number: "02", title: "Propuesta", text: "Estrategia de intervención, alcance, plazos y criterios de materialidad." },
  { number: "03", title: "Proyecto", text: "Desarrollo técnico completo con planos, detalles y documentación de obra." },
  { number: "04", title: "Ejecución", text: "Acompañamiento en obra para garantizar coherencia entre idea y resultado." },
];

function ServiciosPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Lo que hacemos"
        title="Servicios integrales de arquitectura"
        intro="Cubrimos todas las etapas del proceso: desde documentar lo existente hasta dirigir la obra terminada."
      />

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid grid-cols-1 border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, number, title, text }) => (
              <article key={number} className="group min-h-72 border-b border-r border-border bg-card p-7 transition-colors hover:bg-primary md:p-9">
                <div className="mb-12 flex items-start justify-between">
                  <Icon className="size-8 text-primary-strong transition-colors group-hover:text-primary-foreground" strokeWidth={1.6} />
                  <span className="text-xs font-bold text-muted-foreground group-hover:text-primary-foreground/65">{number}</span>
                </div>
                <h2 className="mb-3 text-xl font-extrabold">{title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/80">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="mb-3 text-xs font-extrabold uppercase text-primary-strong">Cómo trabajamos</p>
          <h2 className="mb-12 text-4xl font-extrabold sm:text-5xl">Un proceso claro en cuatro etapas</h2>
          <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {process.map(({ number, title, text }) => (
              <div key={number} className="border-t-2 border-foreground pt-5">
                <span className="text-xs font-bold text-primary-strong">{number}</span>
                <h3 className="mt-2 text-xl font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
