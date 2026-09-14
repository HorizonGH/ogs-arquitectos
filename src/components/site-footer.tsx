import { ArrowRight, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Brand } from "@/components/site-header";
import { Reveal } from "@/components/reveal";

const MAPS_URL =
  "https://www.google.com/maps/search/calle+armas+n+976,+san+mariano+y+Santa+Catalina,+municipio+10+de+octubre/@23.0893899,-82.3601518,16.5z/data=!4m2!2m1!6e1?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D";

const nav = [
  {
    heading: "Estudio",
    links: [
      { label: "Quiénes somos", to: "/estudio" },
      { label: "Proyectos", to: "/proyectos" },
      { label: "Contacto", to: "/contacto" },
    ],
  },
  {
    heading: "Servicios",
    links: [
      { label: "Levantamiento técnico", to: "/servicios" },
      { label: "Diseño e intervención", to: "/servicios" },
      { label: "Asesoramiento de obra", to: "/servicios" },
      { label: "Documentación", to: "/servicios" },
      { label: "Diseño gráfico", to: "/servicios" },
      { label: "Presupuestos", to: "/servicios" },
    ],
  },
];

const contact = [
  { icon: Phone, label: "+53 54867902", href: "tel:+5354867902" },
  { icon: Mail, label: "orlietglezs@gmail.com", href: "mailto:orlietglezs@gmail.com" },
  { icon: Instagram, label: "@ogs_arquitectos", href: "https://instagram.com/ogs_arquitectos" },
  { icon: MapPin, label: "Calle Armas n° 976, municipio 10 de Octubre, La Habana", href: MAPS_URL },
];

export function SiteFooter() {
  return (
    <footer className="bg-carbon text-background">
      {/* CTA */}
      <div className="mx-auto max-w-7xl px-5 pt-24 md:px-10 md:pt-32">
        <Reveal>
          <p className="mb-4 text-xs font-extrabold uppercase text-primary">¿Tiene un proyecto?</p>
          <div className="flex flex-col items-start justify-between gap-9 border-b border-background/20 pb-16 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-5xl font-extrabold leading-tight sm:text-6xl md:text-7xl">
              Conversemos sobre cómo hacerlo posible.
            </h2>
            <Button asChild variant="architectural" size="lg">
              <a href="mailto:orlietglezs@gmail.com">
                Escríbanos <ArrowRight />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Main footer grid */}
      <Reveal className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.5fr] md:gap-8">

          {/* Brand + description */}
          <div className="flex flex-col gap-6">
            <Brand inverse />
            <p className="max-w-xs text-sm leading-relaxed text-background/60">
              Estudio de arquitectura e interiorismo con sede en La Habana. Diseñamos espacios precisos, responsables y duraderos.
            </p>
            <a
              href="https://instagram.com/ogs_arquitectos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-background/60 transition-colors hover:text-primary"
            >
              <Instagram className="size-4" /> @ogs_arquitectos
            </a>
          </div>

          {/* Nav columns */}
          {nav.map(({ heading, links }) => (
            <div key={heading}>
              <p className="mb-5 text-xs font-extrabold uppercase tracking-widest text-primary">{heading}</p>
              <ul className="space-y-3">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-background/65 transition-colors hover:text-background"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <p className="mb-5 text-xs font-extrabold uppercase tracking-widest text-primary">Contacto</p>
            <ul className="space-y-4">
              {contact.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-2 text-sm text-background/65 transition-colors hover:text-background"
                  >
                    <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-6 md:flex-row md:items-center md:px-10">
          <span className="text-xs text-background/40">© 2026 OGS Arquitectos. Todos los derechos reservados.</span>
          <span className="text-xs text-background/40">La Habana, Cuba</span>
        </div>
      </div>

      {/* Horizon.gh powered-by strip */}
      <div className="border-t border-background/10 bg-[#111]">
        <a
          href="https://horizon-gh.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-auto flex max-w-7xl items-center justify-center gap-3 px-5 py-4 md:px-10"
        >
          <span className="text-xs text-background/35 transition-colors duration-300 group-hover:text-background/60">
            Powered by
          </span>
          <img
            src="/HorizonLogo.png"
            alt="Horizon.gh"
            className="h-6 w-auto transition-opacity duration-300 group-hover:opacity-90"
            style={{ filter: "invert(1) hue-rotate(180deg)" }}
          />
          <span className="text-sm font-bold text-background/70 transition-colors duration-300 group-hover:text-background">
            Horizon<span className="text-[#10C8B4]">.gh</span>
          </span>
        </a>
      </div>

    </footer>
  );
}
