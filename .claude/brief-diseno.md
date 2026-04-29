# Brief: Auditoría y Rediseño Frontend — Sobrenatural Inmobiliaria

## Contexto del Proyecto
- **Proyecto**: sobrenatural.busticco.com (Inmobiliaria en Santa Marta, Colombia)
- **Stack**: Next.js 14 + React + TypeScript + Tailwind CSS
- **Backend**: Strapi CMS (API REST en /api)
- **Desplegado en**: Docker + Traefik + VPS Hostinger

## Estado Actual (LO QUE HAY)

### Estructura Frontend
```
frontend/src/
  app/
    page.tsx                 → Home (Hero + Destacadas + Por qué elegirnos + CTA + Barrios)
    layout.tsx               → Root layout
    globals.css              → Estilos globales + utilidades
    properties-data.json     → Datos mock de propiedades
    contacto/page.tsx        → Página de contacto
    propiedades/page.tsx     → Listado de propiedades
    propiedades/[slug]/page.tsx → Detalle de propiedad
  components/
    Navbar.tsx               → Nav sticky con logo + links + WhatsApp CTA
    HeroSection.tsx          → Hero con imagen + stats + CTA
    PropertyCard.tsx         → Card de propiedad
    Footer.tsx               → Footer
  lib/
    strapi.ts                → Cliente Strapi
```

### Paleta Actual
- **Brand**: `#0E3E76` (azul oscuro) → `#3D85C6` (azul medio)
- **Accent**: `#8FCE00` (verde lima)
- **Background**: `#F7F7F7` (gris claro)
- **Texto**: `#212529` (casi negro)
- **Font**: Inter

### Componentes Actuales
1. **Navbar**: Sticky, logo, links (Inicio/Propiedades/Contacto), CTA WhatsApp
2. **HeroSection**: Barra azul superior + Hero image + Stats + 2 CTAs
3. **PropertyCard**: Imagen + badges + título + specs + precio
4. **Footer**: Básico

## PROBLEMAS IDENTIFICADOS (por el cliente)

1. **Diseño no profesional**: El cliente dice "aún no me gustó el diseño front"
2. **Falta de identidad visual fuerte**: No hay un concepto de marca claro
3. **Tipografía básica**: Solo Inter, sin jerarquía tipográfica clara
4. **Espaciado inconsistente**: Algunas secciones muy juntas
5. **Sin animaciones**: Todo estático, sin micro-interacciones
6. **Mobile podría mejorar**: Necesita refinamiento responsive
7. **Sin página "Nosotros"**: Falta sección de equipo/empresa
8. **Sin testimonios visibles**: No hay sección de reseñas en home
9. **Sin integración real con Strapi**: Usa JSON mock, no consume API real
10. **Sin filtros avanzados**: La página de propiedades es muy básica
11. **Sin SEO optimizado**: Falta metadata, schema.org, OpenGraph
12. **Sin performance optimizada**: Imágenes sin optimizar, sin lazy loading avanzado

## OBJETIVOS

### Objetivo Principal
Transformar el frontend en un **sitio web inmobiliario de clase mundial**, comparable a:
- Properati / Zillow / Realtor.com (pero para mercado colombiano)
- Sitios de lujo como Sotheby's Realty o Christie's International

### Objetivos Específicos
1. **Diseño premium**: Que se sienta lujoso, confiable, profesional
2. **UX excepcional**: Navegación intuitiva, carga rápida, transiciones suaves
3. **Integración real con Strapi**: Conectar con el backend real
4. **SEO completo**: Meta tags, schema.org, sitemap, OpenGraph
5. **Performance**: Lighthouse 90+ en todos los rubros
6. **Responsive perfecto**: Mobile-first, tablet, desktop
7. **Accesibilidad**: WCAG 2.1 AA

## ENTREGABLES ESPERADOS

### Fase 1: Auditoría (primero)
- [ ] Análisis de diseño actual vs referencias
- [ ] Reporte de problemas de UX/UI
- [ ] Propuesta de nueva arquitectura visual
- [ ] Moodboard / referencias de diseño
- [ ] Plan de mejoras priorizado

### Fase 2: Rediseño Visual
- [ ] Nueva paleta de colores (mantener identidad pero elevarla)
- [ ] Sistema tipográfico completo (heading, body, captions)
- [ ] Componentes de UI rediseñados (cards, botones, formularios)
- [ ] Micro-animaciones y transiciones
- [ ] Espaciado y grid system consistente

### Fase 3: Nuevas Páginas/Secciones
- [ ] Página "Nosotros" (historia, equipo, valores)
- [ ] Sección de testimonios en Home
- [ ] Página de propiedades con filtros avanzados
- [ ] Página de detalle de propiedad mejorada
- [ ] Blog/Noticias (conectado a Strapi)
- [ ] Página de barrios/zonas

### Fase 4: Integración Backend
- [ ] Conectar con Strapi API real (no JSON mock)
- [ ] Implementar SSR/SSG para SEO
- [ ] Sitemap dinámico
- [ ] Metadata dinámica por página

### Fase 5: Optimización
- [ ] Optimización de imágenes (next/image)
- [ ] Lazy loading avanzado
- [ ] Core Web Vitals optimizados
- [ ] Accesibilidad auditada

## RESTRICCIONES
- Mantener Next.js 14 App Router
- Mantener TypeScript
- Mantener Tailwind CSS
- No cambiar backend Strapi (solo integrar con API existente)
- Colores de marca deben respetar la identidad (azul + verde)
- Debe funcionar en el VPS actual (Docker)

## REFERENCIAS DE DISEÑO
- https://www.sothebysrealty.com (lujo, limpio)
- https://www.properati.com.co (funcional, claro)
- https://www.zillow.com (moderno, información densa)
- https://www.vivanuncios.com.co (mercado local)

## INFRAESTRUCTURA
- VPS Hostinger (Ubuntu)
- Docker Swarm con Traefik
- Apps bind to 127.0.0.1 ports
- Network: dokploy-network
- Dominio: sobrenatural.busticco.com
- SSL: Let's Encrypt

## COMANDOS ÚTILES
```bash
# Ver frontend local
cd /home/openclaw/projects/sobrenatural-platform/frontend
npm run dev

# Build
cd /home/openclaw/projects/sobrenatural-platform/frontend
npm run build

# Ver backend Strapi
https://sobrenatural.busticco.com/admin
# admin@sobrenaturalinmobiliaria.com / Sobrenatural2026!

# API disponible
https://sobrenatural.busticco.com/api/properties
https://sobrenatural.busticco.com/api/agents
https://sobrenatural.busticco.com/api/testimonials
```

## NOTA IMPORTANTE
El cliente quiere algo **MUY COMPLETO Y PROFESIONAL**. No acepta diseños mediocres. Quiere que el sitio transmita:
- Confianza y seguridad
- Experiencia y conocimiento del mercado
- Atención personalizada
- Lujo sin ser pretencioso
- Tecnología moderna
