import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { services, projects } from "@/lib/site-content";
import heroImage from "@/assets/ogs-hero.webp";

// Datos de negocio local para Google (búsqueda local y Maps)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OGS Arquitectos",
  description:
    "Estudio de arquitectura con sede en La Habana, especializado en diseño, asesoramiento y diagnóstico técnico de espacios comerciales y residenciales.",
  telephone: "+53 54867902",
  email: "ogsarquitectos@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle 23 n.º 809, entre A y B, Vedado",
    addressLocality: "La Habana",
    addressRegion: "La Habana",
    addressCountry: "CU",
  },
  hasMap: "https://www.google.com/maps/search/?api=1&query=Calle+23+809,+Vedado,+La+Habana,+Cuba",
  areaServed: { "@type": "City", name: "La Habana" },
  founder: { "@type": "Person", name: "Orliet González Santanache", jobTitle: "Arquitecto" },
  sameAs: ["https://instagram.com/ogs_arquitectos"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OGS Arquitectos | Arquitectura en La Habana" },
      {
        name: "description",
        content: "Estudio de arquitectura en La Habana: diseño, levantamiento técnico, obra y asesoramiento integral.",
      },
      { property: "og:title", content: "OGS Arquitectos | Arquitectura en La Habana" },
      {
        property: "og:description",
        content: "Espacios contemporáneos construidos desde el contexto, la precisión y la permanencia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessSchema) }],
  }),
  component: Index,
});

const colClass = (index: number) => {
  if (index === 0) return "md:col-span-8";
  if (index === 1) return "md:col-span-4";
  if (index === 2) return "md:col-span-6";
  return "md:col-span-6";
};

const MARQUEE_WORDS = ["Arquitectura", "Diseño", "Rehabilitación", "Interiorismo", "La Habana", "Cuba", "Obra", "Precisión", "Permanencia"];

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader overlay />

      {/* Hero */}
      <section id="inicio" className="relative flex min-h-[92svh] items-end bg-carbon">
        <img
          src={heroImage}
          alt="Render de vivienda blanca de dos plantas con terraza techada, escalera exterior y árboles alrededor"
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-carbon/55" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-20 pt-36 md:grid-cols-[1fr_320px] md:items-end md:px-10 md:pb-24">
          <div>
            <p
              className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-primary animate-fade-up"
              style={{ animationDelay: "50ms" }}
            >
              <span className="h-px w-10 bg-primary" /> Arquitectura · Diseño · Ejecución
            </p>
            <h1
              className="max-w-4xl text-5xl font-extrabold leading-[1.03] text-background sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up"
              style={{ animationDelay: "180ms" }}
            >
              Transformamos sus ideas <span className="text-primary">en realidad.</span>
            </h1>
          </div>
          <div
            className="border-l-2 border-primary pl-6 animate-fade-up"
            style={{ animationDelay: "350ms" }}
          >
            <p className="mb-7 text-base leading-relaxed text-background/80">
              Proyectos de diseño y arquitectura que transforman espacios y mejoran la calidad de vida de sus usuarios.
            </p>
            <Button asChild variant="architectural" size="lg">
              <Link to="/proyectos">Ver proyectos <ArrowRight /></Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-background/40">
          <ChevronDown className="size-6" />
        </div>
      </section>

      {/* Marquee strip */}
      <div aria-hidden="true" className="overflow-hidden border-y border-border bg-surface py-5 select-none">
        <div className="marquee-track flex animate-marquee whitespace-nowrap">
          {[0, 1].map((i) => (
            <span key={i} className="flex shrink-0 items-center gap-10 pr-10 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {MARQUEE_WORDS.map((word) => (
                <span key={word} className="flex items-center gap-10">
                  <span>{word}</span>
                  <span className="text-primary">·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="mb-14 grid gap-5 border-b border-border pb-10 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase text-primary-strong">Lo que hacemos</p>
              <h2 className="text-4xl font-extrabold sm:text-5xl">Servicios integrales</h2>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:justify-self-end">
              Acompañamos cada proyecto desde la primera medición hasta el último detalle construido.
            </p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 3).map(({ icon: Icon, number, title, text }) => (
                <article key={number} className="group min-h-72 border-b border-r border-border bg-card p-7 transition-colors hover:bg-primary md:p-9">
                  <div className="mb-12 flex items-start justify-between">
                    <Icon className="size-8 text-primary-strong transition-colors group-hover:text-primary-foreground" strokeWidth={1.6} />
                    <span className="text-xs font-bold text-muted-foreground group-hover:text-primary-foreground/65">{number}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-extrabold">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/80">{text}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="mb-14">
            <p className="mb-3 text-xs font-extrabold uppercase text-primary-strong">Obra seleccionada</p>
            <h2 className="text-4xl font-extrabold sm:text-5xl">Proyectos recientes</h2>
          </Reveal>
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-12">
            {projects.map((project, index) => (
              <Reveal key={project.title} className={colClass(index)} delay={index * 100}>
                <article>
                  <div className={`group relative overflow-hidden bg-carbon ${index === 1 ? "aspect-[2/3]" : "aspect-[4/3]"}`}>
                    <img
                      src={project.images[0]?.src}
                      alt={project.images[0]?.alt ?? ""}
                      width={1200}
                      height={912}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                    <span className="absolute right-0 top-0 grid size-12 place-items-center bg-primary text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                      <ArrowDownRight />
                    </span>
                  </div>
                  <div className="mt-5 grid grid-cols-[1fr_auto] gap-4 border-t-2 border-foreground pt-4">
                    <div>
                      <h3 className="text-2xl font-extrabold">{project.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{project.type}</p>
                    </div>
                    <div className="text-right text-xs font-semibold text-muted-foreground">
                      <p>{project.place}</p>
                      <p>{project.year}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-primary py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <Reveal>
            <p className="text-xs font-extrabold uppercase text-primary-foreground/65">Nuestro enfoque</p>
            <span className="mt-8 block size-20 border-8 border-primary-foreground">
              <span className="ml-11 mt-11 block size-3 bg-primary" />
            </span>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="max-w-3xl text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl">
              Cada proyecto comienza por conocer el contexto.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
              Somos un estudio de arquitectura enfocado en soluciones precisas, responsables y duraderas. Diseñamos desde la realidad del clima, la ciudad y las personas que habitan cada espacio.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline" size="lg">
                <Link to="/estudio">Conocer el estudio <ArrowRight /></Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
