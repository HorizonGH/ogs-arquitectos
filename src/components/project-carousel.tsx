import { useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  images: string[];
  alt: string;
  className?: string;
}

export function ProjectCarousel({ images, alt, className }: Props) {
  const [current, setCurrent] = useState(0);
  const hasMany = images.length > 1;

  const advance = () => {
    if (!hasMany) return;
    setCurrent((c) => (c + 1) % images.length);
  };

  return (
    <div
      role={hasMany ? "button" : undefined}
      aria-label={hasMany ? "Ver siguiente imagen" : undefined}
      tabIndex={hasMany ? 0 : undefined}
      onClick={advance}
      onKeyDown={hasMany ? (e) => e.key === "Enter" && advance() : undefined}
      className={cn(
        "group relative aspect-[4/3] overflow-hidden bg-carbon",
        hasMany && "cursor-pointer select-none",
        className,
      )}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === 0 ? alt : `${alt} — foto ${i + 1}`}
          width={900}
          height={675}
          loading="lazy"
          decoding="async"
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 group-hover:scale-[1.025]",
            i === current ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        />
      ))}

      {/* Counter badge — visible on hover */}
      {hasMany && (
        <span className="absolute right-0 top-0 grid min-w-12 place-items-center bg-primary px-3 py-2 text-xs font-bold tabular-nums text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
          {current + 1} / {images.length}
        </span>
      )}

      {/* Dot indicators — always visible when multiple images */}
      {hasMany && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 pointer-events-none">
          {images.map((_, i) => (
            <span
              key={i}
              className={cn(
                "block h-1.5 rounded-full bg-white shadow transition-all duration-500",
                i === current ? "w-5 opacity-90" : "w-1.5 opacity-40",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
