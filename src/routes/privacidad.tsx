import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, type LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad | OGS Arquitectos" },
      { name: "description", content: "Cómo trata OGS Arquitectos los datos personales de quienes le contactan." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: PrivacidadPage,
});

const sections: LegalSection[] = [
  {
    title: "Responsable del tratamiento",
    body: (
      <p>
        Orliet González Santanache (OGS Arquitectos), Calle 23 n.º 809, entre A y B, Vedado, La Habana, Cuba. Contacto:{" "}
        <a href="mailto:ogsarquitectos@gmail.com">ogsarquitectos@gmail.com</a>.
      </p>
    ),
  },
  {
    title: "Qué datos recogemos",
    body: (
      <>
        <p>
          El sitio no tiene formularios ni cuentas de usuario. Solo recibimos los datos que usted decida enviarnos al
          escribirnos por correo electrónico, WhatsApp o Instagram, o al llamarnos: normalmente su nombre, sus datos de
          contacto y la información sobre su proyecto.
        </p>
        <p>No usamos cookies de analítica ni de publicidad.</p>
      </>
    ),
  },
  {
    title: "Para qué los usamos",
    body: (
      <p>
        Usamos esos datos solo para responder a su consulta, preparar presupuestos y, si llega a contratarnos, llevar a
        cabo el encargo. La base para tratarlos es su propia solicitud o, en su caso, el contrato. No los vendemos ni
        los usamos para enviarle publicidad.
      </p>
    ),
  },
  {
    title: "Cuánto tiempo los conservamos",
    body: (
      <p>
        Mientras dure la consulta o el encargo y, después, durante el tiempo necesario para atender posibles
        responsabilidades derivadas del trabajo. Si no llega a contratarnos, puede pedirnos que los borremos en
        cualquier momento.
      </p>
    ),
  },
  {
    title: "Servicios de terceros",
    body: (
      <>
        <p>Algunos servicios externos pueden recibir datos técnicos cuando usa el sitio:</p>
        <ul>
          <li>
            Google Fonts: el navegador descarga la tipografía desde servidores de Google, que recibe su dirección IP.
          </li>
          <li>El proveedor de alojamiento del sitio puede registrar datos técnicos de la visita, como la IP.</li>
          <li>
            Si escribe por correo (Gmail), WhatsApp o Instagram, esos servicios tratan sus datos según sus propias
            políticas. Algunos de ellos pueden almacenarlos fuera de su país.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Preferencias de accesibilidad",
    body: (
      <p>
        Si usa el panel de accesibilidad, sus preferencias (texto grande, alto contraste, etc.) se guardan solo en su
        navegador para recordarlas la próxima vez. No se envían a ningún servidor y puede borrarlas limpiando los datos
        del sitio en su navegador.
      </p>
    ),
  },
  {
    title: "Sus derechos",
    body: (
      <p>
        Puede pedirnos que le digamos qué datos suyos tenemos, que los corrijamos o que los borremos, u oponerse a que
        los usemos. Para ello, escríbanos a <a href="mailto:ogsarquitectos@gmail.com">ogsarquitectos@gmail.com</a>. Si
        reside en la Unión Europea, también puede reclamar ante la autoridad de protección de datos de su país.
      </p>
    ),
  },
];

function PrivacidadPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      intro="Qué datos personales recibimos, para qué los usamos y cómo puede ejercer sus derechos."
      updated="octubre de 2026"
      sections={sections}
    />
  );
}
