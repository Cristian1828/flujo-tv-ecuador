# Flujo TV Ecuador — Landing (Astro + Tailwind)

Landing estática optimizada para conversión y SEO, enfocada en **tecnología y facilidad de uso** (ángulo Ecuador). El objetivo es explicar el servicio de forma clara, resolver objeciones (compatibilidad, velocidad, activación) y llevar al usuario a contacto por WhatsApp.

Última actualización: **2026-01-23**

---

## 1) Qué es esta landing

Esta landing presenta **Flujo TV** como una plataforma de streaming para el ecosistema Android (móvil/tablet y dispositivos de TV por HDMI) con:

- Hero de alto impacto con estética tipo “app/dashboard”.
- Secciones de beneficios, cómo funciona, planes, descargas y preguntas frecuentes.
- CTAs orientadas a WhatsApp.
- SEO técnico completo (metas + JSON-LD + canonical + robots/sitemap).

---

## 2) Stack y arquitectura

- **Astro**: páginas y componentes `.astro`.
- **Tailwind CSS**: estilos utilitarios con diseño consistente.
- **Assets** en `public/` (incluyendo imágenes `.webp`).
- Config centralizada en TypeScript para precios/enlaces.

---

## 3) Reglas de producto (importante)

Compatibilidad y mensajes permitidos (aplicados en el copy):

- **SOLO Android**: Android (móvil/tablet), TV Box, Fire Stick, Google TV, Xiaomi Stick.
- **No compatible**: Roku.
- Samsung/LG: se aclara que requiere **TV Box / Stick / dispositivo compatible** (no app nativa).
- Requiere **internet estable**.

Nota comercial:

- No se ofrece “devolución de dinero” como promesa. Se usa “soporte garantizado” / “activación asegurada” cuando corresponde.
- Límite comercial: **hasta 3 pantallas simultáneas** (según configuración/copy actual).

---

## 4) Secciones incluidas (UX)

- **Header**: navegación por anclas + CTA de compra.
- **Hero**: propuesta de valor y estilo visual premium.
- **Beneficios**: argumentos directos, sin párrafos largos.
- **Cómo funciona**: guía simple del proceso.
- **Planes**: tabla comparativa con CTAs.
- **Descargas**: dos rutas (Sala / Móvil) con links y guía.
- **Preguntas**: FAQs en acordeón y JSON-LD FAQPage.
- **Footer**: marca, aviso legal, enlaces de contenido y seguridad/pagos.

---

## 5) Mejoras implementadas (detalle)

### 5.1 Planes (conversión y claridad)

- Se eliminó el bloque “Instalación guiada” de la landing para reducir fricción.
- Se ajustó el bloque de planes para:
	- Título: **“Planes Flexibles sin contratos.”**
	- CTAs homogéneas: **“Quiero empezar ya”**.
	- Beneficios consistentes en todos los planes.
	- Badges (stickers) y checks para lectura rápida.
	- Precios actualizados (ver configuración).

### 5.2 Descargas (distribución y limpieza)

- Se reemplazó la sección de dispositivos por **“Descargas”**.
- Dos tarjetas:
	- **Experiencia de Sala** (TV Box / Fire Stick / Google TV / Xiaomi Stick).
	- **Experiencia Móvil** (celulares y tablets Android).
- Se optimizó para no saturar: listas cortas, mensajes directos.

### 5.3 FAQ (objeciones principales)

- Se reestructuró para que el título/descripcion estén arriba y las cards debajo en **2 columnas**.
- Se usaron resaltados para puntos clave (Android, 3 pantallas, 20 Mbps, 10 minutos).
- Se mejoró el botón “+” con ícono centrado.
- Se mantuvo JSON-LD de FAQPage para SEO, limpiando HTML para el schema.

### 5.4 Assets y rendimiento

- Se migraron imágenes clave a **.webp** (logo y fondos) para mejor performance.

### 5.5 Footer (legibilidad y confianza)

- Se construyó un footer de 3 columnas con:
	- Marca + aviso legal.
	- Navegación por contenido.
	- Pagos y seguridad (SSL).
- Contacto mostrado de forma clara con **íconos + enlaces** (WhatsApp y correo).
- Se priorizó legibilidad: fondo oscuro premium con acentos muy sutiles.

---

## 6) Configuración (dónde editar)

### Config principal

- `src/config/site.ts`
	- Dominio / canonical
	- WhatsApp (`whatsappNumber`)
	- Email soporte (`supportEmail`)
	- Planes (precios, labels, features)
	- Links de descarga (APK)

### SEO global

- `src/layouts/Layout.astro`
	- metas OG/Twitter
	- canonical
	- JSON-LD (Service/Offer)

### Archivos públicos

- `public/robots.txt`
- `public/sitemap.xml`
- `public/*.webp`

---

## 7) Comandos (dev/build)

Requisitos:

- Node.js LTS

Comandos:

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

---

## 8) Estructura del proyecto

- `src/pages/index.astro`: composición de secciones.
- `src/components/`: componentes de UI por sección.
- `src/layouts/Layout.astro`: layout + SEO.
- `src/config/site.ts`: configuración central.
- `public/`: assets y archivos SEO.

---

## 9) Notas de despliegue

Este proyecto es estático y se puede desplegar en cualquier hosting compatible con el output de Astro (Vercel/Netlify/Cloudflare Pages/hosting tradicional con `dist/`).

---

## 10) Seguridad (Snyk)

Este entorno no tiene instalado Snyk CLI, y no hay un “snyk_code_scan tool” disponible aquí para ejecutar un escaneo automático antes del push.

Si deseas un escaneo:

- Instala Snyk CLI y ejecuta `snyk code test` y `snyk test` en este proyecto antes de desplegar.
