import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | OGS Arquitectos" },
      {
        name: "description",
        content: "Escríbanos para conversar sobre su proyecto de arquitectura, interiorismo o rehabilitación en La Habana.",
      },
      { property: "og:title", content: "Contacto | OGS Arquitectos" },
      { property: "og:description", content: "Cuéntenos su idea y le respondemos con los próximos pasos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactoPage,
});

const details = [
  { label: "Correo", value: "estudio@ogsarquitectos.com", href: "mailto:estudio@ogsarquitectos.com" },
  { label: "Ubicación", value: "La Habana, Cuba" },
  { label: "Horario", value: "Lunes a viernes, 9:00 — 17:00" },
];

function ContactoPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Hablemos"
        title="Contacto"
        intro="Cuéntenos dónde está el inmueble, qué necesita y en qué plazo. Le respondemos con los próximos pasos."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-10">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Escríbanos directamente</h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              Una primera conversación basta para saber si podemos ayudarle y qué alcance tendría el trabajo.
            </p>
            <div className="mt-8">
              <Button asChild variant="architectural" size="lg">
                <a href="mailto:estudio@ogsarquitectos.com">
                  Enviar correo <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
          <dl className="space-y-6">
            {details.map(({ label, value, href }) => (
              <div key={label} className="border-t-2 border-foreground pt-4">
                <dt className="text-xs font-extrabold uppercase text-primary-strong">{label}</dt>
                <dd className="mt-1 text-lg font-bold">
                  {href ? (
                    <a className="hover:text-primary-strong" href={href}>
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
