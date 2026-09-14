import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { services, projects } from "@/lib/site-content";
import heroImage from "@/assets/ogs-hero.jpg";

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
          alt="Residencia contemporánea entre palmas en La Habana"
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
              <span className="h-px w-10 bg-primary" /> Arquitectura · Diseño · Ciudad
            </p>
            <h1
              className="max-w-4xl text-5xl font-extrabold leading-[1.03] text-background sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up"
              style={{ animationDelay: "180ms" }}
            >
              Diseñamos espacios que <span className="text-primary">permanecen.</span>
            </h1>
          </div>
          <div
            className="border-l-2 border-primary pl-6 animate-fade-up"
            style={{ animationDelay: "350ms" }}
          >
            <p className="mb-7 text-base leading-relaxed text-background/80">
              Arquitectura contemporánea que reconoce el lugar, transforma lo existente y mejora la vida cotidiana.
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
      <div className="overflow-hidden border-y border-border bg-surface py-5 select-none">
        <div className="flex animate-marquee whitespace-nowrap">
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
          <Reveal className="mt-10">
            <Button asChild variant="architectural" size="lg">
              <Link to="/servicios">Todos los servicios <ArrowRight /></Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase text-primary-strong">Obra seleccionada</p>
              <h2 className="text-4xl font-extrabold sm:text-5xl">Proyectos recientes</h2>
            </div>
            <Link to="/proyectos" className="text-sm font-semibold text-primary-strong hover:underline">
              Ver todos
            </Link>
          </Reveal>
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-12">
            {projects.map((project, index) => (
              <Reveal key={project.title} className={colClass(index)} delay={index * 100}>
                <article>
                  <div className={`group relative overflow-hidden bg-carbon ${index === 1 ? "aspect-[2/3]" : "aspect-[4/3]"}`}>
                    <img
                      src={project.image}
                      alt={`${project.title}, ${project.type} en ${project.place}`}
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
              Cada proyecto comienza por escuchar el lugar.
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
