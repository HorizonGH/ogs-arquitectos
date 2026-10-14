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

export type ProjectImage = { src: string; alt: string };

export type Project = { images: ProjectImage[]; title: string; place: string; year: string; type: string; description: string; note?: string };

export const projects: Project[] = [
  {
    images: [
      { src: "/images/proyectos/vivienda-moderna/1.webp", alt: "Render exterior de vivienda blanca de dos plantas con terraza techada, barandas blancas y escalera exterior lateral" },
      { src: "/images/proyectos/vivienda-moderna/2.webp", alt: "Render de fachada estrecha de dos plantas con balcón, revestimiento de piedra y cerca de lamas blancas" },
      { src: "/images/proyectos/vivienda-moderna/3.webp", alt: "Render de sala de estar con escalera blanca, pared de cuadros, sillones de ratán y estantería de madera iluminada" },
      { src: "/images/proyectos/vivienda-moderna/4.webp", alt: "Render de sala y pasillo de entrada con sillones de ratán, sofá blanco y tres cuadros botánicos en la pared" },
      { src: "/images/proyectos/vivienda-moderna/5.webp", alt: "Render nocturno de comedor con mesa de madera, panel de listones, lámparas colgantes en espiral y reloj de pared" },
      { src: "/images/proyectos/vivienda-moderna/6.webp", alt: "Render de baño con bañera exenta y pared de azulejo azul, junto a un tocador con espejo redondo iluminado" },
    ],
    title: "Vivienda moderna",
    description:
      "El proyecto parte de la intervención de un terreno que cuenta actualmente con una vivienda construida. El diseño se concibe a partir del desarrollo de elementos de arquitectura moderna combinado con componentes tradicionales, como uso de celosías en vanos, herrería metálica y enchapes en muros exteriores.",
    place: "Municipio Playa, Provincia La Habana",
    year: "2025",
    type: "Diseño arquitectónico y proyecto de interiorismo",
  },
  {
    images: [
      { src: "/images/proyectos/tienda-decoracion/1.webp", alt: "Interior terminado de tienda de regalos con estanterías blancas, escalera de madera y entrepiso acristalado con el rótulo «Regalos Cuba»" },
      { src: "/images/proyectos/tienda-decoracion/2.webp", alt: "Lámina comparativa del local antes y después de la obra, con esquemas constructivos acotados de la escalera y el entrepiso" },
      { src: "/images/proyectos/tienda-decoracion/3.webp", alt: "Local en obra con la escalera y el entrepiso recién revestidos en blanco y un operario trabajando sobre un andamio" },
      { src: "/images/proyectos/tienda-decoracion/4.webp", alt: "Vista general del local durante la obra, con la escalera metálica en proceso de revestimiento y el entrepiso con ventanales" },
    ],
    title: "Diseño y remodelación de Tienda de decoración",
    description:
      "El diseño comprende la intervención de una vivienda para concebir un negocio de tienda de decoración. Se emplearon elementos de panelería ligera como pladur y perfiles metálicos conservando la estructura del espacio.",
    place: "Provincia La Habana",
    year: "2025",
    type: "Diseño arquitectónico y ejecución de obra",
    note: "Proyecto realizado en colaboración con JN SRL",
  },
  {
    images: [
      { src: "/images/proyectos/chiquijay/1.webp", alt: "Render de cafetería con paredes verde oliva, barra de ladrillo iluminada, lámparas de mimbre y rótulo luminoso «chic & hide»" },
      { src: "/images/proyectos/chiquijay/2.webp", alt: "Cafetería terminada con barra de ladrillo blanco, caja registradora, estante de botellas y pared verde con dibujos enmarcados" },
      { src: "/images/proyectos/chiquijay/3.webp", alt: "Render de tienda de alimentos con paredes verde claro, estanterías llenas de productos, plantas colgantes y puerta de cristal a la calle" },
      { src: "/images/proyectos/chiquijay/4.webp", alt: "Render de minimercado con estanterías de madera, mostrador de caja, plantas colgantes y rótulo «Mini Mark» en la pared" },
      { src: "/images/proyectos/chiquijay/5.webp", alt: "Local en obra con paredes y columna pintadas de verde y la barra de ladrillo rojo ya levantada" },
      { src: "/images/proyectos/chiquijay/6.webp", alt: "Almacén con paredes blancas, repisas de obra empotradas y varios congeladores horizontales nuevos" },
      { src: "/images/proyectos/chiquijay/7.webp", alt: "Local terminado con repisas blancas, congeladores, mostrador y puerta de cristal doble hacia la calle arbolada" },
    ],
    title: "Cafetería y tienda Chiquijay",
    description:
      "La propuesta es una intervención de un local de uso comercial de un edificio multifamiliar. Se mantuvo la estructura existente, que integra elementos de panelería ligera en estantes y paredes y montaje de lámparas colgantes en techo. La decoración se concibe a partir del uso de iluminación indirecta, enchapes en paredes y muebles de hierro y madera.",
    place: "Municipio Plaza de La Revolución, Provincia La Habana",
    year: "2025",
    type: "Diseño arquitectónico y ejecución de obra",
    note: "Proyecto realizado en colaboración con Construcciones PROCREA SRL",
  },
  {
    images: [
      { src: "/images/proyectos/remodelacion-vivienda/1.webp", alt: "Render de sala de doble altura con sofá gris, escalera de acero y madera y piso de damero rojo y blanco" },
      { src: "/images/proyectos/remodelacion-vivienda/2.webp", alt: "Render de sala y comedor con pared azul, lámpara de anillos, sofá gris en L y piso de damero rojo y blanco" },
      { src: "/images/proyectos/remodelacion-vivienda/3.webp", alt: "Render de patio exterior con paredes verde salvia, sofá de exterior, parrilla, meseta de acero y plantas" },
      { src: "/images/proyectos/remodelacion-vivienda/4.webp", alt: "Render de dormitorio con cama de madera, escritorio, armario de puertas correderas de cristal y cuadro azul" },
      { src: "/images/proyectos/remodelacion-vivienda/5.webp", alt: "Escalera metálica negra ejecutada sobre piso de damero marrón y blanco" },
      { src: "/images/proyectos/remodelacion-vivienda/6.webp", alt: "Pasillo terminado con arco blanco y puertas de persiana blancas hacia el baño" },
      { src: "/images/proyectos/remodelacion-vivienda/7.webp", alt: "Habitación terminada en blanco con armario empotrado de puerta corredera y cajonera" },
    ],
    title: "Remodelación de vivienda unifamiliar",
    description:
      "La remodelación se realizó en un espacio existente donde se respetó su forma original, se ejecutó un entrepiso para concebir dos niveles, para lo cual se trabajó el diseño de una escalera interior. En Planta Baja se diseñaron zonas de uso público como sala, cocina y comedor y en Planta Alta se trabajaron áreas de uso privado como habitaciones y servicios sanitarios.",
    place: "Municipio Habana Vieja, Provincia La Habana",
    year: "2025",
    type: "Diseño arquitectónico, remodelación y ejecución de obra",
    note: "Proyecto realizado en colaboración con Construcciones PROCREA SRL",
  },
  {
    images: [
      { src: "/images/proyectos/defectacion/1.webp", alt: "Render de la fachada rehabilitada de un edificio ecléctico de dos plantas en azul claro, con arcos y palmas" },
      { src: "/images/proyectos/defectacion/2.webp", alt: "Render en perspectiva del edificio rehabilitado en tonos azules, con arcos, rejas, escalinata de mármol y verja" },
      { src: "/images/proyectos/defectacion/3.webp", alt: "Render frontal del edificio azul entre dos edificios blancos, con palmas en la acera" },
      { src: "/images/proyectos/defectacion/4.webp", alt: "Plano de elevación frontal del edificio con las zonas de humedad marcadas en rojo y las grietas señaladas y acotadas" },
    ],
    title: "Remodelación y análisis técnico de edificio de oficinas",
    description:
      "El trabajo realizado comprende actividades de levantamiento, inspección visual, registro fotográfico y análisis técnico del estado constructivo de un edificio de oficinas. Esto permitió tomar decisiones y realizar propuestas de intervención de la edificación en fachada y locales interiores.",
    place: "Municipio Playa, Provincia La Habana",
    year: "2026",
    type: "Defectación técnica y remodelación de fachada",
    note: "Proyecto realizado en colaboración con REYNOVA SURL",
  },
  {
    images: [
      { src: "/images/proyectos/centro-elaboracion/1.webp", alt: "Render de la fachada del centro de elaboración, edificio blanco de dos plantas con ventanas de marco oscuro" },
      { src: "/images/proyectos/centro-elaboracion/2.webp", alt: "Render en vista aérea de la nave del centro de elaboración, con cubierta metálica y muro perimetral de bloques" },
      { src: "/images/proyectos/centro-elaboracion/3.webp", alt: "Render de sala de curado con jamones colgados de rieles, mesas de acero inoxidable y paredes blancas" },
      { src: "/images/proyectos/centro-elaboracion/4.webp", alt: "Render de sala de producción con mesas de acero, fregaderos, embutidoras y armarios refrigerados azules" },
      { src: "/images/proyectos/centro-elaboracion/5.webp", alt: "Render de obrador de embutidos con mesas de acero inoxidable, picadora, embutidoras y botes de especias" },
    ],
    title: "Diseño de centro de elaboración",
    description:
      "A solicitud del cliente, se elaboró la propuesta de diseño de un centro de elaboración para el procesamiento de carne y embutidos. El trabajo parte de la intervención de un terreno existente, donde se proponen áreas de producción, zona comercial y administración. Se tuvieron en cuenta factores imprescindibles como procesos de trabajo, flujos, organización de espacios, instalaciones y acondicionamiento del inmueble.",
    place: "Municipio Arroyo Naranjo, Provincia La Habana",
    year: "2025–2026",
    type: "Diseño arquitectónico, remodelación y ejecución de obra",
    note: "Proyecto realizado en colaboración con Construcciones PROCREA",
  },
];
