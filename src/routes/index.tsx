import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Building2,
  ClipboardCheck,
  DraftingCompass,
  HardHat,
  Menu,
  Ruler,
  X,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/ogs-hero.jpg";
import patioImage from "@/assets/project-casa-patio.jpg";
import galleryImage from "@/assets/project-galeria.jpg";
import brisasImage from "@/assets/project-brisas.jpg";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
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

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#inicio" className="group inline-flex items-center gap-3" aria-label="OGS Arquitectos, inicio">
      <span className={`relative block size-9 shrink-0 ${inverse ? "bg-primary" : "bg-carbon"}`}>
        <span className={`absolute bottom-1.5 right-1.5 h-3 w-1.5 ${inverse ? "bg-carbon" : "bg-background"}`} />
      </span>
      <span className={`text-base font-extrabold ${inverse ? "text-primary" : "text-foreground"}`}>
        OGS Arquitectos
      </span>
    </a>
  );
}

type Service = { icon: LucideIcon; number: string; title: string; text: string };

const services: Service[] = [
  { icon: Ruler, number: "01", title: "Levantamiento técnico", text: "Documentación precisa del estado actual para tomar decisiones con claridad." },
  { icon: DraftingCompass, number: "02", title: "Diseño arquitectónico", text: "Proyectos funcionales y sensibles al contexto, desde el concepto hasta el detalle." },
  { icon: Building2, number: "03", title: "Diseño de interiores", text: "Ambientes coherentes donde materialidad, luz y uso trabajan como un solo sistema." },
  { icon: HardHat, number: "04", title: "Dirección de obra", text: "Seguimiento técnico para proteger la intención del proyecto durante su ejecución." },
  { icon: ClipboardCheck, number: "05", title: "Asesoramiento", text: "Criterio profesional para evaluar inmuebles, inversiones y posibilidades de intervención." },
  { icon: ArrowDownRight, number: "06", title: "Rehabilitación", text: "Nueva vida para estructuras existentes, preservando su carácter y su memoria." },
];

const projects = [
  { image: patioImage, title: "Casa Patio", place: "La Habana Vieja", year: "2026", type: "Rehabilitación residencial" },
  { image: galleryImage, title: "Galería Central", place: "Centro Habana", year: "2025", type: "Reúso adaptativo" },
  { image: brisasImage, title: "Casa Brisas", place: "Playas del Este", year: "2025", type: "Vivienda unifamiliar" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-background/20">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:h-24 md:px-10">
          <Brand inverse />
          <nav className="hidden items-center gap-9 md:flex" aria-label="Navegación principal">
            {[["Servicios", "#servicios"], ["Proyectos", "#proyectos"], ["Estudio", "#estudio"], ["Contacto", "#contacto"]].map(([label, href]) => (
              <a key={label} href={href} className="text-sm font-semibold text-background transition-colors hover:text-primary">{label}</a>
            ))}
          </nav>
          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-11 place-items-center text-background md:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-background/20 bg-carbon px-5 py-6 md:hidden" aria-label="Navegación móvil">
            {[['Servicios', '#servicios'], ['Proyectos', '#proyectos'], ['Estudio', '#estudio'], ['Contacto', '#contacto']].map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu} className="block border-b border-background/15 py-4 text-lg font-bold text-background">{label}</a>
            ))}
          </nav>
        )}
      </header>

      <section id="inicio" className="relative flex min-h-[92svh] items-end bg-carbon">
        <img src={heroImage} alt="Residencia contemporánea entre palmas en La Habana" width={1920} height={1280} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-carbon/55" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-16 pt-36 md:grid-cols-[1fr_320px] md:items-end md:px-10 md:pb-20">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-primary"><span className="h-px w-10 bg-primary" /> Arquitectura · Diseño · Ciudad</p>
            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.03] text-background sm:text-6xl md:text-7xl lg:text-8xl">
              Diseñamos espacios que <span className="text-primary">permanecen.</span>
            </h1>
          </div>
          <div className="border-l-2 border-primary pl-6">
            <p className="mb-7 text-base leading-relaxed text-background/80">Arquitectura contemporánea que reconoce el lugar, transforma lo existente y mejora la vida cotidiana.</p>
            <Button asChild variant="architectural" size="lg"><a href="#proyectos">Ver proyectos <ArrowRight /></a></Button>
          </div>
        </div>
        <a href="#servicios" aria-label="Ir a servicios" className="absolute bottom-0 right-0 grid size-14 place-items-center bg-primary text-primary-foreground md:size-20"><ArrowDownRight /></a>
      </section>

      <section id="servicios" className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-12 grid gap-5 border-b border-border pb-9 md:grid-cols-2 md:items-end">
            <div><p className="mb-3 text-xs font-extrabold uppercase text-primary-strong">Lo que hacemos</p><h2 className="text-4xl font-extrabold sm:text-5xl">Servicios integrales</h2></div>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:justify-self-end">Acompañamos cada proyecto desde la primera medición hasta el último detalle construido.</p>
          </div>
          <div className="grid grid-cols-1 border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, number, title, text }) => (
              <article key={number} className="group min-h-72 border-b border-r border-border bg-card p-7 transition-colors hover:bg-primary md:p-9">
                <div className="mb-12 flex items-start justify-between"><Icon className="size-8 text-primary-strong transition-colors group-hover:text-primary-foreground" strokeWidth={1.6} /><span className="text-xs font-bold text-muted-foreground group-hover:text-primary-foreground/65">{number}</span></div>
                <h3 className="mb-3 text-xl font-extrabold">{title}</h3><p className="text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/80">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5"><div><p className="mb-3 text-xs font-extrabold uppercase text-primary-strong">Obra seleccionada</p><h2 className="text-4xl font-extrabold sm:text-5xl">Proyectos recientes</h2></div><span className="text-sm font-semibold text-muted-foreground">2025 — 2026</span></div>
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-12">
            {projects.map((project, index) => (
              <article key={project.title} className={index === 0 ? "md:col-span-8" : index === 1 ? "md:col-span-4" : "md:col-span-7 md:col-start-6"}>
                <div className={`group relative overflow-hidden bg-carbon ${index === 1 ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <img src={project.image} alt={`${project.title}, ${project.type} en ${project.place}`} width={1200} height={912} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
                  <span className="absolute right-0 top-0 grid size-12 place-items-center bg-primary text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100"><ArrowDownRight /></span>
                </div>
                <div className="mt-5 grid grid-cols-[1fr_auto] gap-4 border-t-2 border-foreground pt-4"><div><h3 className="text-2xl font-extrabold">{project.title}</h3><p className="mt-1 text-sm text-muted-foreground">{project.type}</p></div><div className="text-right text-xs font-semibold text-muted-foreground"><p>{project.place}</p><p>{project.year}</p></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="estudio" className="bg-primary py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div><p className="text-xs font-extrabold uppercase text-primary-foreground/65">Nuestro enfoque</p><span className="mt-8 block size-20 border-8 border-primary-foreground"><span className="ml-11 mt-11 block size-3 bg-primary" /></span></div>
          <div><h2 className="max-w-3xl text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl">Cada proyecto comienza por escuchar el lugar.</h2><p className="mt-7 max-w-2xl text-base leading-relaxed text-primary-foreground/75">Somos un estudio de arquitectura enfocado en soluciones precisas, responsables y duraderas. Diseñamos desde la realidad del clima, la ciudad y las personas que habitan cada espacio.</p></div>
        </div>
      </section>

      <footer id="contacto" className="bg-carbon text-background">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <p className="mb-4 text-xs font-extrabold uppercase text-primary">¿Tiene un proyecto?</p>
          <div className="flex flex-col items-start justify-between gap-9 border-b border-background/20 pb-16 md:flex-row md:items-end"><h2 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">Conversemos sobre cómo hacerlo posible.</h2><Button asChild variant="architectural" size="lg"><a href="mailto:estudio@ogsarquitectos.com">Escríbanos <ArrowRight /></a></Button></div>
          <div className="flex flex-col gap-8 pt-10 md:flex-row md:items-end md:justify-between"><Brand inverse /><div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-background/65"><span>La Habana, Cuba</span><a className="hover:text-primary" href="mailto:estudio@ogsarquitectos.com">estudio@ogsarquitectos.com</a><span>© 2026</span></div></div>
        </div>
      </footer>
    </main>
  );
}
