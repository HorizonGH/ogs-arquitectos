import {
  ArrowDownRight,
  Building2,
  ClipboardCheck,
  DraftingCompass,
  HardHat,
  Ruler,
  type LucideIcon,
} from "lucide-react";

import patioImage from "@/assets/project-casa-patio.jpg";
import galleryImage from "@/assets/project-galeria.jpg";
import brisasImage from "@/assets/project-brisas.jpg";

export type Service = { icon: LucideIcon; number: string; title: string; text: string };

export const services: Service[] = [
  { icon: Ruler, number: "01", title: "Levantamiento técnico", text: "Documentación precisa del estado actual para tomar decisiones con claridad." },
  { icon: DraftingCompass, number: "02", title: "Diseño arquitectónico", text: "Proyectos funcionales y sensibles al contexto, desde el concepto hasta el detalle." },
  { icon: Building2, number: "03", title: "Diseño de interiores", text: "Ambientes coherentes donde materialidad, luz y uso trabajan como un solo sistema." },
  { icon: HardHat, number: "04", title: "Dirección de obra", text: "Seguimiento técnico para proteger la intención del proyecto durante su ejecución." },
  { icon: ClipboardCheck, number: "05", title: "Asesoramiento", text: "Criterio profesional para evaluar inmuebles, inversiones y posibilidades de intervención." },
  { icon: ArrowDownRight, number: "06", title: "Rehabilitación", text: "Nueva vida para estructuras existentes, preservando su carácter y su memoria." },
];

export const projects = [
  { image: patioImage, title: "Casa Patio", place: "La Habana Vieja", year: "2026", type: "Rehabilitación residencial" },
  { image: galleryImage, title: "Galería Central", place: "Centro Habana", year: "2025", type: "Reúso adaptativo" },
  { image: brisasImage, title: "Casa Brisas", place: "Playas del Este", year: "2025", type: "Vivienda unifamiliar" },
];
