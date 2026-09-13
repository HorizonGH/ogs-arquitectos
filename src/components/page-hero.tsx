import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: ReactNode }) {
  return (
    <section className="bg-carbon pb-16 pt-12 md:pb-24 md:pt-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1.2fr_1fr] md:items-end md:px-10">
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-primary">
            <span className="h-px w-10 bg-primary" /> {eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] text-background sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </div>
        <p className="border-l-2 border-primary pl-6 text-base leading-relaxed text-background/75">{intro}</p>
      </div>
    </section>
  );
}
