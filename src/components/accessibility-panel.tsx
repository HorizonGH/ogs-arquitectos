import { useState, useEffect } from "react";
import { Accessibility } from "lucide-react";

type OptionKey = "bw" | "large-text" | "high-contrast" | "reduce-motion";
type Prefs = Partial<Record<OptionKey, boolean>>;

const OPTIONS: { key: OptionKey; label: string; desc: string; cssClass: string }[] = [
  {
    key: "bw",
    label: "Sin color de acento",
    desc: "Reemplaza el color mostaza por gris",
    cssClass: "a11y-bw",
  },
  {
    key: "large-text",
    label: "Texto grande",
    desc: "Aumenta el tamaño de fuente",
    cssClass: "a11y-large-text",
  },
  {
    key: "high-contrast",
    label: "Alto contraste",
    desc: "Aumenta el contraste de texto",
    cssClass: "a11y-high-contrast",
  },
  {
    key: "reduce-motion",
    label: "Reducir animaciones",
    desc: "Detiene animaciones y transiciones",
    cssClass: "a11y-reduce-motion",
  },
];

const LS_KEY = "ogs-a11y";

function loadPrefs(): Prefs {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function savePrefs(prefs: Prefs) {
  localStorage.setItem(LS_KEY, JSON.stringify(prefs));
}

function Toggle({ on, onToggle, label }: { on: boolean; onToggle: () => void; label: string }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={onToggle}
      className={`relative inline-flex h-5 w-9 shrink-0 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
        on ? "bg-foreground" : "bg-muted-foreground/40"
      }`}
    >
      <span
        className={`pointer-events-none block size-4 rounded-full bg-background shadow-sm transition-transform my-0.5 ${
          on ? "translate-x-4" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

export function AccessibilityPanel() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({});

  useEffect(() => {
    const stored = loadPrefs();
    setPrefs(stored);
    for (const opt of OPTIONS) {
      document.documentElement.classList.toggle(opt.cssClass, !!stored[opt.key]);
    }
  }, []);

  function toggle(key: OptionKey) {
    setPrefs((prev: Prefs) => {
      const next: Prefs = { ...prev, [key]: !prev[key] };
      savePrefs(next);
      const opt = OPTIONS.find((o) => o.key === key)!;
      document.documentElement.classList.toggle(opt.cssClass, !!next[key]);
      return next;
    });
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">
      {open && (
        <div className="rounded-md border border-border bg-card shadow-2xl w-64">
          <div className="border-b border-border px-4 py-3">
            <p className="text-xs font-extrabold uppercase tracking-widest text-foreground">
              Accesibilidad
            </p>
          </div>
          <ul className="divide-y divide-border">
            {OPTIONS.map((opt) => (
              <li key={opt.key} className="flex items-center justify-between gap-3 px-4 py-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground leading-tight">{opt.label}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">{opt.desc}</p>
                </div>
                <Toggle
                  on={!!prefs[opt.key]}
                  onToggle={() => toggle(opt.key)}
                  label={opt.label}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Opciones de accesibilidad"
        aria-expanded={open}
        title="Accesibilidad"
        className="grid size-12 place-items-center rounded-full border-2 border-border bg-card text-foreground shadow-xl transition-transform hover:scale-110 hover:border-foreground/40 active:scale-95"
      >
        <Accessibility className="size-5" />
      </button>
    </div>
  );
}
