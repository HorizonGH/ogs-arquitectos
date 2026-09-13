import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const navLinks = [
  { label: "Servicios", to: "/servicios" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Estudio", to: "/estudio" },
  { label: "Contacto", to: "/contacto" },
] as const;

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="OGS Arquitectos, inicio">
      <span className={`relative block size-9 shrink-0 ${inverse ? "bg-primary" : "bg-carbon"}`}>
        <span className={`absolute bottom-1.5 right-1.5 h-3 w-1.5 ${inverse ? "bg-carbon" : "bg-background"}`} />
      </span>
      <span className={`text-base font-extrabold ${inverse ? "text-primary" : "text-foreground"}`}>
        OGS Arquitectos
      </span>
    </Link>
  );
}

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-30 border-b border-background/20"
          : "sticky top-0 z-30 border-b border-background/20 bg-carbon"
      }
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:h-24 md:px-10">
        <Brand inverse />
        <nav className="hidden items-center gap-9 md:flex" aria-label="Navegación principal">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-semibold text-background transition-colors hover:text-primary"
            >
              {label}
            </Link>
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
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={closeMenu}
              className="block border-b border-background/15 py-4 text-lg font-bold text-background"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
