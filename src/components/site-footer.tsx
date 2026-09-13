import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Brand } from "@/components/site-header";

export function SiteFooter() {
  return (
    <footer className="bg-carbon text-background">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <p className="mb-4 text-xs font-extrabold uppercase text-primary">¿Tiene un proyecto?</p>
        <div className="flex flex-col items-start justify-between gap-9 border-b border-background/20 pb-16 md:flex-row md:items-end">
          <h2 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Conversemos sobre cómo hacerlo posible.
          </h2>
          <Button asChild variant="architectural" size="lg">
            <a href="mailto:estudio@ogsarquitectos.com">
              Escríbanos <ArrowRight />
            </a>
          </Button>
        </div>
        <div className="flex flex-col gap-8 pt-10 md:flex-row md:items-end md:justify-between">
          <Brand inverse />
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-background/65">
            <span>La Habana, Cuba</span>
            <a className="hover:text-primary" href="mailto:estudio@ogsarquitectos.com">
              estudio@ogsarquitectos.com
            </a>
            <span>© 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
