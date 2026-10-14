export const SITE_URL = "https://ogs-arquitectos.vercel.app";
export const SITE_NAME = "OGS Arquitectos";

export const OG_IMAGE = {
  url: `${SITE_URL}/og-image.webp`,
  width: 1424,
  height: 752,
  alt: "Logotipo de OGS Arquitectos sobre fondo gris con un plano de planta en línea amarilla",
};

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).href;

// Canonical y og:url de cada página
export function pageSeo(path: string) {
  const url = absoluteUrl(path);
  return {
    meta: [{ property: "og:url", content: url }],
    links: [{ rel: "canonical", href: url }],
  };
}

export const jsonLd = (data: object) => ({ type: "application/ld+json", children: JSON.stringify(data) });

export function breadcrumbSchema(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name, item: absoluteUrl(path) },
    ],
  };
}
