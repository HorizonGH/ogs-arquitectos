import type { ReactNode } from "react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";

export type LegalSection = { title: string; body: ReactNode };

export function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />
      <PageHero eyebrow="Información legal" title={title} intro={intro} />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <p className="mb-12 text-xs font-semibold text-muted-foreground">Última actualización: {updated}</p>
          <div className="space-y-12">
            {sections.map(({ title, body }) => (
              <section key={title} className="border-t-2 border-foreground pt-5">
                <h2 className="text-xl font-extrabold">{title}</h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground [&_a]:font-semibold [&_a]:text-primary-strong [&_a:hover]:underline [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                  {body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
