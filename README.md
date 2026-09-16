# Portfolio — Jhonatan Caro Suárez

Portfolio personal de una sola página construido con Next.js 16 (App Router), React 19 y Tailwind CSS v4.

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

- `app/` — layout raíz (fuentes Fraunces e Instrument Sans, metadatos) y página principal.
- `components/sections/` — secciones de la página: hero, experiencia, proyectos, formación, competencias y contacto.
- `components/ui/` — piezas reutilizables: navegación por secciones con scroll-spy, barra flotante inferior, botones, chips y tags de categoría, estado de disponibilidad con reloj, enlaces e iconos SVG (`icons.tsx` incluye una plantilla comentada para añadir iconos nuevos).
- `lib/content.ts` — todo el contenido del portfolio en un solo archivo; edita aquí los textos.
- `public/CV-Jhonatan-Caro-Datos-IA.pdf` — CV descargable (copia del original en `document/`).

## Build y despliegue

El proyecto se exporta como sitio estático (`output: 'export'`) pensado para servirse desde S3 o cualquier hosting estático:

```bash
npm run build
```

El resultado queda en `out/`.
