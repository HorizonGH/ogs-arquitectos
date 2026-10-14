import { createFileRoute, Link } from "@tanstack/react-router";

import { LegalPage, type LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso legal | OGS Arquitectos" },
      { name: "description", content: "Datos del titular y condiciones de uso del sitio web de OGS Arquitectos." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: AvisoLegalPage,
});

const sections: LegalSection[] = [
  {
    title: "Titular del sitio web",
    body: (
      <ul>
        <li>Titular: Orliet González Santanache, que opera con el nombre comercial OGS Arquitectos.</li>
        <li>
          Dirección: Calle 23 n.º 809, entre A y B, Vedado, Municipio Plaza de la Revolución, La Habana, Cuba.
        </li>
        <li>
          Correo electrónico: <a href="mailto:ogsarquitectos@gmail.com">ogsarquitectos@gmail.com</a>
        </li>
        <li>
          Teléfono: <a href="tel:+5354867902">+53 54867902</a>
        </li>
      </ul>
    ),
  },
  {
    title: "Objeto",
    body: (
      <p>
        Este sitio web presenta los servicios, proyectos y equipo de OGS Arquitectos y ofrece vías de contacto con el
        estudio. Su contenido es informativo y no constituye una oferta vinculante. Las condiciones de cada encargo se
        acuerdan por escrito con cada cliente.
      </p>
    ),
  },
  {
    title: "Propiedad intelectual",
    body: (
      <>
        <p>
          Los textos, fotografías, renders, planos y demás material gráfico del sitio pertenecen a OGS Arquitectos o a
          sus colaboradores, que han autorizado su uso. No se permite reproducirlos, distribuirlos ni modificarlos sin
          autorización previa por escrito.
        </p>
        <p>
          Algunas imágenes son renders o propuestas de diseño y pueden no coincidir exactamente con la obra
          construida.
        </p>
      </>
    ),
  },
  {
    title: "Enlaces a terceros",
    body: (
      <p>
        El sitio enlaza a servicios externos como Google Maps, Instagram y WhatsApp. OGS Arquitectos no controla esos
        servicios ni es responsable de su contenido ni de sus políticas, que conviene consultar en cada caso.
      </p>
    ),
  },
  {
    title: "Responsabilidad",
    body: (
      <p>
        El estudio procura que la información del sitio sea correcta y esté actualizada, pero no garantiza que esté
        libre de errores ni que el sitio funcione sin interrupciones.
      </p>
    ),
  },
  {
    title: "Datos personales",
    body: (
      <p>
        El tratamiento de los datos de quienes contactan con el estudio se explica en la{" "}
        <Link to="/privacidad">política de privacidad</Link>.
      </p>
    ),
  },
];

function AvisoLegalPage() {
  return (
    <LegalPage
      title="Aviso legal"
      intro="Datos del titular del sitio y condiciones de uso."
      updated="octubre de 2026"
      sections={sections}
    />
  );
}
