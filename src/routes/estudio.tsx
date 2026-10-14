import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { breadcrumbSchema, jsonLd, pageSeo } from "@/lib/seo";

const seo = pageSeo("/estudio");

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
      ...seo.meta,
    ],
    links: seo.links,
    scripts: [jsonLd(breadcrumbSchema("Estudio", "/estudio"))],
  }),
  component: EstudioPage,
});

const values = [
  { title: "Contexto", text: "Cada decisión nace del entorno y la vida social existente en el lugar." },
  { title: "Precisión", text: "Documentación rigurosa y detalles resueltos antes de levantar el primer muro." },
  { title: "Permanencia", text: "Soluciones y materiales que permanecen y resisten el paso del tiempo." },
];

const facts = [
  {
    title: "Diseño y visualización",
    text: "Estudio especializado en ejecución y visualización gráfica de trabajos de diseño y arquitectura.",
  },
  {
    title: "Seguimiento de obra",
    text: "Seguimiento y asesoramiento de procesos constructivos en todas las especialidades: Arquitectura, Estructura, Albañilería, Instalaciones, Carpintería y Acabados.",
  },
];

const team = [
  {
    photo: "/images/Picture1.webp",
    name: "Arq. Orliet González Santanache",
    role: "CEO y arquitecto principal",
    bio: "Especializado en diseño, visualización gráfica y ejecución de proyectos de arquitectura e ingeniería, desde la fase de ideas conceptuales hasta la fase ejecutiva. Arquitecto con experiencia laboral en control técnico de inversiones en el sector de la construcción y desarrollo de soluciones de diseño para proyectos de remodelación de espacios comerciales y residenciales tanto en el sector estatal como privado.",
  },
  {
    photo: "/images/Picture3.webp",
    name: "Alejandro Benítez Cruz",
    role: "Modelado 3D y representación gráfica",
    bio: "Estudiante de Arquitectura, con experiencia en proyectos de diseño arquitectónico en áreas como arquitectura hospitalaria, residencial, urbanismo y arquitectura del paisaje. Su formación incluye además estudios vinculados al Patrimonio Mundial. Cuenta con desempeño laboral en proyectos arquitectónicos, levantamientos y modelación 3D, integrando competencias técnicas y gráficas para la representación y visualización de propuestas arquitectónicas.",
  },
  {
    photo: "/images/Picture2.webp",
    name: "Liván Blanco González",
    role: "Modelado 3D y representación gráfica",
    bio: "Estudiante de Arquitectura con experiencia laboral real en proyectos con varios profesionales y formación complementada con trabajo de campo. Habilidades en visualización arquitectónica, representación gráfica y técnica y modelado 3D, logrando resultados competentes que transmiten la intención del proyecto. Destacado durante su formación docente en trabajos académicos con enfoques conceptuales que combinan precisión y sensibilidad.",
  },
];

function EstudioPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="Nuestro enfoque"
        title="Cada proyecto comienza por conocer el contexto."
        intro="Un estudio pequeño y cercano, con criterio técnico y atención a cada detalle del proceso."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <span className="block size-20 border-8 border-foreground">
            <span className="ml-11 mt-11 block size-3 bg-primary" />
          </span>
          <div>
            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
              Proyectos responsables, hechos desde la realidad de cada encargo.
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
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:px-10">
          {facts.map(({ title, text }) => (
            <div key={title} className="border-t-2 border-primary-foreground pt-5">
              <h3 className="text-2xl font-extrabold text-primary-foreground">{title}</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/75">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-14 border-b border-border pb-10">
            <p className="mb-3 text-xs font-extrabold uppercase text-primary-strong">Quiénes somos</p>
            <h2 className="text-4xl font-extrabold sm:text-5xl">Equipo de trabajo</h2>
          </div>
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {team.map(({ photo, name, role, bio }) => (
              <article key={name}>
                <div className="aspect-[4/5] overflow-hidden bg-surface">
                  <img
                    src={photo}
                    alt={name}
                    loading="lazy"
                    className="size-full object-cover object-top grayscale"
                  />
                </div>
                <div className="mt-5 border-t-2 border-foreground pt-4">
                  <h3 className="text-xl font-extrabold">{name}</h3>
                  <p className="mt-1 text-xs font-bold uppercase text-primary-strong">{role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{bio}</p>
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
