import {
  Calculator,
  DraftingCompass,
  FileText,
  HardHat,
  Palette,
  Ruler,
  type LucideIcon,
} from "lucide-react";

export type Service = { icon: LucideIcon; number: string; title: string; text: string };

export const services: Service[] = [
  { icon: Ruler, number: "01", title: "Levantamiento y defectación técnica", text: "Medición precisa y documentación del estado real del espacio, base indispensable para cualquier intervención." },
  { icon: DraftingCompass, number: "02", title: "Diseño e intervención de espacios", text: "Proyectos funcionales y sensibles al contexto, desde el concepto hasta el detalle constructivo." },
  { icon: HardHat, number: "03", title: "Asesoramiento técnico de ejecución", text: "Criterio profesional durante la ejecución para garantizar coherencia entre el proyecto y la obra." },
  { icon: FileText, number: "04", title: "Documentación de obra", text: "Planos, memorias y expedientes técnicos gestionados con rigor para cada etapa del proyecto." },
  { icon: Palette, number: "05", title: "Diseño gráfico y de identidad", text: "Imagen visual coherente para proyectos, marcas y espacios que necesitan comunicar con claridad." },
  { icon: Calculator, number: "06", title: "Elaboración de presupuestos", text: "Estimaciones detalladas que permiten planificar con precisión los recursos de cada obra." },
];

export const projects = [
  { image: "/images/cafe-chiquijai.png", title: "Café Chiquijai", place: "La Habana", year: "2024", type: "Diseño de interiores" },
  { image: "/images/duplex.png", title: "Dúplex", place: "La Habana", year: "2024", type: "Vivienda dúplex" },
  { image: "/images/cafeteria_interior_barra.jpg", title: "Cafetería", place: "La Habana", year: "2024", type: "Diseño de interiores" },
  { image: "/images/vivienda-redisenno.png", title: "Vivienda Rediseño", place: "La Habana", year: "2023", type: "Rehabilitación residencial" },
];
