import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
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

const MAPS_URL =
  "https://www.google.com/maps/search/calle+armas+n+976,+san+mariano+y+Santa+Catalina,+municipio+10+de+octubre/@23.0893899,-82.3601518,16.5z/data=!4m2!2m1!6e1?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D";

const details = [
  {
    label: "Directora",
    value: "Arq. Orliet González Santanache",
    icon: null,
  },
  {
    label: "Teléfono",
    value: "+53 54867902",
    href: "tel:+5354867902",
    icon: Phone,
  },
  {
    label: "Correo",
    value: "orlietglezs@gmail.com",
    href: "mailto:orlietglezs@gmail.com",
    icon: Mail,
  },
  {
    label: "Instagram",
    value: "@ogs_arquitectos",
    href: "https://instagram.com/ogs_arquitectos",
    icon: Instagram,
  },
  {
    label: "Dirección",
    value: "Calle Armas n° 976, e/ San Mariano y Santa Catalina, municipio 10 de Octubre, La Habana",
    href: MAPS_URL,
    icon: MapPin,
  },
] as const;

function ContactoPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Hablemos"
        title="Contacto"
        intro="Cuéntenos dónde está el inmueble, qué necesita y en qué plazo. Le respondemos con los próximos pasos."
      />

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 md:grid-cols-2 md:px-10">
          <Reveal>
            <h2 className="text-4xl font-extrabold sm:text-5xl">Escríbanos directamente</h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Una primera conversación basta para saber si podemos ayudarle y qué alcance tendría el trabajo.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="architectural" size="lg">
                <a href="mailto:orlietglezs@gmail.com">
                  Enviar correo <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+5354867902">
                  Llamar <Phone className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" className="gap-2 bg-[#25D366] text-white hover:bg-[#1ebe5d]">
                <a href="https://wa.me/5354867902" target="_blank" rel="noopener noreferrer">
                  WhatsApp <MessageCircle className="size-4" />
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <dl className="space-y-6">
              {details.map(({ label, value, href, icon: Icon }) => (
                <div key={label} className="border-t-2 border-foreground pt-4">
                  <dt className="text-xs font-extrabold uppercase text-primary-strong">{label}</dt>
                  <dd className="mt-2 flex items-start gap-2 text-base font-bold leading-snug">
                    {Icon && <Icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />}
                    {href ? (
                      <a
                        className="hover:text-primary-strong transition-colors"
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {value}
                      </a>
                    ) : (
                      <span>{value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b-2 border-primary pb-0.5 text-sm font-bold transition-colors hover:text-primary-strong"
              >
                <MapPin className="size-4" /> Ver en Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
