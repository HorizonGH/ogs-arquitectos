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
  { icon: Ruler, number: "01", title: "Levantamiento técnico", text: "Medición precisa y documentación del estado real del espacio, base indispensable para cualquier intervención." },
  { icon: DraftingCompass, number: "02", title: "Diseño e intervención de espacios", text: "Proyectos funcionales y sensibles al contexto, desde el concepto hasta el detalle constructivo." },
  { icon: HardHat, number: "03", title: "Asesoramiento técnico de obra", text: "Criterio profesional durante la ejecución para garantizar coherencia entre el proyecto y la obra." },
  { icon: FileText, number: "04", title: "Elaboración de documentación técnica", text: "Planos, memorias y expedientes técnicos gestionados con rigor para cada etapa del proyecto." },
  { icon: Palette, number: "05", title: "Diseño gráfico, de mobiliario e identidad", text: "Imagen visual coherente para proyectos, marcas y espacios que necesitan comunicar con claridad." },
  { icon: Calculator, number: "06", title: "Elaboración de presupuestos de construcción", text: "Estimaciones detalladas que permiten planificar con precisión los recursos de cada obra." },
];

export type Project = { images: string[]; title: string; place: string; year: string; type: string; note?: string };

export const projects: Project[] = [
  {
    images: [
      "/images/proyectos/vivienda-moderna/1.webp",
      "/images/proyectos/vivienda-moderna/2.webp",
      "/images/proyectos/vivienda-moderna/3.webp",
      "/images/proyectos/vivienda-moderna/4.webp",
      "/images/proyectos/vivienda-moderna/5.webp",
      "/images/proyectos/vivienda-moderna/6.webp",
    ],
    title: "Vivienda moderna",
    place: "Municipio Playa, Provincia La Habana",
    year: "2025",
    type: "Diseño arquitectónico y proyecto de interiorismo",
  },
  {
    images: [
      "/images/proyectos/tienda-decoracion/1.webp",
      "/images/proyectos/tienda-decoracion/2.webp",
      "/images/proyectos/tienda-decoracion/3.webp",
      "/images/proyectos/tienda-decoracion/4.webp",
    ],
    title: "Diseño y remodelación de Tienda de decoración",
    place: "Provincia La Habana",
    year: "2025",
    type: "Diseño arquitectónico y ejecución de obra",
    note: "Proyecto realizado en colaboración con JN SRL",
  },
  {
    images: [
      "/images/proyectos/chiquijay/1.webp",
      "/images/proyectos/chiquijay/2.webp",
      "/images/proyectos/chiquijay/3.webp",
      "/images/proyectos/chiquijay/4.webp",
      "/images/proyectos/chiquijay/5.webp",
      "/images/proyectos/chiquijay/6.webp",
      "/images/proyectos/chiquijay/7.webp",
    ],
    title: "Cafetería y tienda Chiquijay",
    place: "Municipio Plaza de La Revolución, Provincia La Habana",
    year: "2025",
    type: "Diseño arquitectónico y ejecución de obra",
    note: "Proyecto realizado en colaboración con Construcciones PROCREA SRL",
  },
  {
    images: [
      "/images/proyectos/remodelacion-vivienda/1.webp",
      "/images/proyectos/remodelacion-vivienda/2.webp",
      "/images/proyectos/remodelacion-vivienda/3.webp",
      "/images/proyectos/remodelacion-vivienda/4.webp",
      "/images/proyectos/remodelacion-vivienda/5.webp",
      "/images/proyectos/remodelacion-vivienda/6.webp",
      "/images/proyectos/remodelacion-vivienda/7.webp",
    ],
    title: "Remodelación de vivienda unifamiliar",
    place: "Municipio Habana Vieja, Provincia La Habana",
    year: "2025",
    type: "Diseño arquitectónico, remodelación y ejecución de obra",
    note: "Proyecto realizado en colaboración con Construcciones PROCREA SRL",
  },
  {
    images: [
      "/images/proyectos/defectacion/1.webp",
      "/images/proyectos/defectacion/2.webp",
      "/images/proyectos/defectacion/3.webp",
      "/images/proyectos/defectacion/4.webp",
    ],
    title: "Remodelación y defectación técnica de edificio de oficinas",
    place: "Municipio Playa, Provincia La Habana",
    year: "2026",
    type: "Defectación técnica y remodelación de fachada",
    note: "Proyecto realizado en colaboración con REYNOVA SURL",
  },
  {
    images: [
      "/images/proyectos/centro-elaboracion/1.webp",
      "/images/proyectos/centro-elaboracion/2.webp",
      "/images/proyectos/centro-elaboracion/3.webp",
      "/images/proyectos/centro-elaboracion/4.webp",
      "/images/proyectos/centro-elaboracion/5.webp",
    ],
    title: "Diseño de centro de elaboración",
    place: "Municipio Arroyo Naranjo, Provincia La Habana",
    year: "2025–2026",
    type: "Diseño arquitectónico, remodelación y ejecución de obra",
    note: "Proyecto realizado en colaboración con Construcciones PROCREA",
  },
];
