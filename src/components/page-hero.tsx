import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: ReactNode }) {
  return (
    <section className="bg-carbon pb-20 pt-14 md:pb-28 md:pt-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1.2fr_1fr] md:items-end md:px-10">
        <div>
          <p
            className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-primary animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            <span className="h-px w-10 bg-primary" /> {eyebrow}
          </p>
          <h1
            className="max-w-3xl text-5xl font-extrabold leading-[1.02] text-background sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            {title}
          </h1>
        </div>
        <p
          className="border-l-2 border-primary pl-6 text-lg leading-relaxed text-background/75 animate-fade-up"
          style={{ animationDelay: "380ms" }}
        >
          {intro}
        </p>
      </div>
    </section>
  );
}
