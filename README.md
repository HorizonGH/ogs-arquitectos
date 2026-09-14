# Aura Design System

RolColor EstimadoUso en UIClases sugeridas (Tailwind)PrimarioAmarillo Mostaza (#F2C202)Botones de CTA, enlaces, íconos, subrayados y acentos visuales.bg-yellow-500, text-yellow-500Fondo OscuroGris Carbón (#333333)Sección Hero, Footer, o modo oscuro completo.bg-gray-800, text-whiteTexto OscuroNegro Suave (#1A1A1A)Textos de párrafos, encabezados en fondos claros.text-gray-900Fondo ClaroBlanco / Gris muy claroFondos generales de las páginas de servicios y FAQs.bg-white, bg-gray-50

Tipografía

El logo utiliza una fuente sans-serif geométrica de trazos gruesos.

Fuente principal recomendada: Montserrat, Poppins o Plus Jakarta Sans. Transmiten estabilidad y modernidad.

Encabezados (H1, H2, H3): Utilizar pesos font-bold o font-extrabold con un tracking (espaciado entre letras) ligeramente ajustado (tracking-tight) para replicar la solidez del logo.

Cuerpo de texto: Peso font-normal con un interlineado amplio (leading-relaxed) para facilitar la lectura de los detalles técnicos en las páginas de servicios.

Componentes y Sistema de Diseño

Dado el isotipo cuadrado del logo, la interfaz debe reflejar esa misma geometría arquitectónica:

Botones: Bordes completamente rectos (rounded-none) o mínimamente redondeados (rounded-sm). Usar el amarillo primario con texto en gris carbón para máximo contraste.

Tarjetas (Cards): Para el "Resumen de Servicios" y "Proyectos más populares", emplea contenedores limpios. Fondo blanco sobre fondo gris muy claro, con sombras muy sutiles (shadow-sm o shadow-md) y bordes rectos.

Imágenes: Las fotografías de arquitectura y espacios intervenidos deben dominar. Utiliza imágenes a sangre (edge-to-edge) o encuadradas en bloques geométricos estrictos.

Aplicación a la Estructura (Layout)

Hero (Home): Fondo gris carbón (referencia al archivo webp) o un slider de imágenes de proyectos con un overlay oscuro. Texto del encabezado en blanco y botón de "Ver Proyectos" en amarillo.

Secciones de Servicios: Emplea un grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3) para listar el levantamiento técnico, diseño, asesoramiento, etc. Cada ítem debe tener un ícono minimalista en amarillo.

Páginas de Proyecto Individual: Prioriza una galería tipo masonry o un carrusel expansivo. El texto explicativo debe estar en una columna lateral estructurada (año, ubicación, tipo de intervención) usando la tipografía sans-serif oscura sobre fondo blanco.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a1bb00fb-c35a-45d2-911a-a812e34093d5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
