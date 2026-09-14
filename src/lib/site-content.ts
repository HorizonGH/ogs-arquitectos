import {
  ArrowDownRight,
  Building2,
  ClipboardCheck,
  DraftingCompass,
  HardHat,
  Ruler,
  type LucideIcon,
} from "lucide-react";

import remodelacionImage from "@/assets/remodelacion-vivienda.webp.asset.json";
import propuestaImage from "@/assets/propuesta-residencial.webp.asset.json";
import cafeteriaImage from "@/assets/cafeteria-azul.webp.asset.json";
import cafeChiquijaiImage from "@/assets/cafe-chiquijai.webp.asset.json";
import viviendaImage from "@/assets/vivienda-unifamiliar.webp.asset.json";

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
  {
    image: remodelacionImage.url,
    title: "Remodelación de vivienda",
    type: "Diseño interior residencial",
    description: "Transformación integral de las áreas sociales con una paleta serena, iluminación cálida y mobiliario a medida.",
    orientation: "portrait" as const,
  },
  {
    image: propuestaImage.url,
    title: "Vivienda con patio",
    type: "Propuesta de remodelación",
    description: "Reorganización de una vivienda para conectar sala, comedor, cocina y patio en una secuencia continua.",
    orientation: "landscape" as const,
  },
  {
    image: cafeteriaImage.url,
    title: "Cafetería azul",
    type: "Remodelación comercial",
    description: "Una intervención de alto contraste que integra fachada, barra y áreas de servicio en una identidad coherente.",
    orientation: "portrait" as const,
  },
  {
    image: cafeChiquijaiImage.url,
    title: "Café Chiquijai",
    type: "Interiorismo comercial",
    description: "Vegetación, luz natural y tonos verdes construyen una atmósfera fresca para café y tienda especializada.",
    orientation: "portrait" as const,
  },
  {
    image: viviendaImage.url,
    title: "Vivienda unifamiliar",
    type: "Diseño arquitectónico",
    description: "Estudio de fachada contemporánea con volúmenes blancos, planos pétreos y protección solar integrada.",
    orientation: "landscape" as const,
  },
];
