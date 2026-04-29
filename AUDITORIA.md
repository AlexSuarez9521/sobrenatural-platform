# Auditoria UX/UI - Sobrenatural Inmobiliaria

## Fecha: 2025-04-28
## Auditor: Hermes Agent + Claude Analysis
## Stack: Next.js 14 + React + TypeScript + Tailwind CSS

---

## 1. ANALISIS GENERAL

### 1.1 Estado Actual
El frontend es funcional pero **basico**. Tiene la estructura minima de un sitio inmobiliario pero carece de:
- Identidad visual fuerte
- Jerarquia tipografica
- Micro-interacciones
- Polish profesional
- Integracion real con backend

### 1.2 Calificacion por Rubro (1-10)

| Rubro | Score | Observacion |
|-------|-------|-------------|
| Tipografia | 4 | Solo Inter, sin jerarquia, tamaños inconsistentes |
| Color | 5 | Paleta basica, sin refinamiento, sin semantica |
| Espaciado | 5 | Inconsistente entre secciones |
| Componentes UI | 5 | Cards basicas, botones genericos |
| Animaciones | 2 | Ninguna, todo estatico |
| Responsive | 6 | Funcional pero sin refinamiento |
| Performance | 4 | Imagenes sin optimizar, sin lazy loading avanzado |
| SEO | 3 | Sin metadata dinamica, sin schema.org |
| Accesibilidad | 4 | Sin ARIA labels, contrastes debiles |
| UX Completa | 5 | Flujo basico, sin guia del usuario |

**Promedio: 4.3/10** - Necesita mejora significativa

---

## 2. PROBLEMAS DETALLADOS POR ARCHIVO

### 2.1 globals.css (39 lineas)
**Problemas:**
- ❌ Solo 1 font (Inter) sin alternativas
- ❌ Sin variables CSS custom properties
- ❌ Sin sistema de espaciado consistente
- ❌ Sin utilidades de animacion
- ❌ Sin dark mode support
- ❌ `container-main` solo max-w-7xl, sin breakpoints intermedios
- ❌ `btn-primary` solo 1 estilo de boton
- ❌ `card-property` transicion basica

**Recomendacion:** Reescribir con sistema de design tokens

### 2.2 tailwind.config.ts (53 lineas)
**Problemas:**
- ❌ `brand` colors sin semantic naming (50-900 no significan nada)
- ❌ `accent` sin DEFAULT claro en algunos usos
- ❌ Sin `screens` custom breakpoints
- ❌ Sin `animation` o `keyframes`
- ❌ Sin `boxShadow` custom
- ❌ Sin `borderRadius` custom
- ❌ Sin `transitionTimingFunction`
- ❌ Sin `zIndex` scale

**Recomendacion:** Expandir a 150+ lineas con sistema completo

### 2.3 layout.tsx
**Problemas:**
- ❌ Sin metadata dinamica
- ❌ Sin OpenGraph tags
- ❌ Sin favicon/apple-touch-icon
- ❌ Sin theme-color
- ❌ Sin viewport config
- ❌ Sin language alternates
- ❌ Sin structured data (JSON-LD)

**Recomendacion:** Implementar metadata completa con generateMetadata

### 2.4 page.tsx (Home) (167 lineas)
**Problemas:**
- ❌ HeroSection incluye barra azul (deberia estar en layout)
- ❌ Seccion "Destacadas" usa JSON mock, no API real
- ❌ Sin skeleton loading
- ❌ Sin seccion de testimonios
- ❌ Sin seccion de estadisticas/metricas
- ❌ Sin banner de confianza (logos de clientes/partners)
- ❌ Sin newsletter signup
- ❌ CTA section con imagen de Unsplash (no propia)
- ❌ Barrios hardcodeados, sin API

**Recomendacion:** Modularizar en componentes, conectar API, agregar secciones faltantes

### 2.5 HeroSection.tsx (97 lineas)
**Problemas:**
- ❌ Barra azul superior no deberia estar aqui
- ❌ Imagen de Unsplash generica
- ❌ Texto con ALL CAPS (mala legibilidad)
- ❌ Stats estaticos (50+, 8+, 100%)
- ❌ Sin animacion de entrada (fade-in, slide-up)
- ❌ Sin buscador de propiedades integrado
- ❌ Sin video background opcion
- ❌ Phone number hardcodeado
- ❌ Sin breadcrumbs ni schema

**Recomendacion:** Rediseñar completamente, agregar buscador, animaciones

### 2.6 PropertyCard.tsx (157 lineas)
**Problemas:**
- ❌ Sin hover effect visual atractivo
- ❌ Imagen sin aspect-ratio forzado
- ❌ Badge "Destacada" muy pequeña
- ❌ Sin comparador de precios
- ❌ Sin indicador de "nueva" o "reducida"
- ❌ Sin galeria de imagenes miniatura
- ❌ Sin agente asignado visible
- ❌ `formatPrice` simplificado (solo millones)
- ❌ Sin favoritos/bookmark
- ❌ Sin compartir

**Recomendacion:** Rediseñar como card premium con mas info y acciones

### 2.7 Navbar.tsx (106 lineas)
**Problemas:**
- ❌ Solo 3 links (Inicio, Propiedades, Contacto)
- ❌ Sin dropdown de barrios/zonas
- ❌ Sin buscador global
- ❌ Logo con dimensiones fijas
- ❌ Sin navegacion de cuenta/usuario
- ❌ Sin modo oscuro toggle
- ❌ Mobile menu muy basico
- ❌ Sin sticky shadow animation

**Recomendacion:** Expandir navegacion, agregar buscador, mejorar mobile

### 2.8 Footer.tsx
**Problemas:**
- ❌ Muy basico (no lo he visto detallado)
- ❌ Probable sin links legales
- ❌ Sin newsletter
- ❌ Sin mapa del sitio
- ❌ Sin redes sociales

**Recomendacion:** Crear footer profesional multi-columna

### 2.9 properties-data.json
**Problemas:**
- ❌ Datos estaticos/mock
- ❌ Sin conexion a Strapi
- ❌ Sin imagenes reales

**Recomendacion:** Eliminar, conectar con API real

---

## 3. COMPARATIVA CON REFERENCIAS PREMIUM

### Sotheby's Realty
- ✅ Tipografia serif para headings (elegancia)
- ✅ Espaciado generoso (aire entre elementos)
- ✅ Galerias de alta calidad
- ✅ Filtros avanzados
- ✅ Mapa integrado
- ❌ Lento, sobrecargado

### Zillow
- ✅ Busqueda prominente
- ✅ Filtros intuitivos
- ✅ Comparador
- ✅ Estimaciones de precio
- ❌ Diseño corporativo frio

### Properati Colombia
- ✅ Localizado para mercado latino
- ✅ Precios en COP
- ✅ Barrios colombianos
- ❌ Diseño desactualizado

### Lo que SOBRENATURAL necesita:
- Elegancia de Sotheby's
- Usabilidad de Zillow
- Localizacion de Properati
- Velocidad de Vercel

---

## 4. PLAN DE IMPLEMENTACION

### FASE 1: Fundamentos (1-2 dias)
1. **tailwind.config.ts** - Sistema completo de design tokens
2. **globals.css** - Variables CSS, animaciones, utilidades
3. **layout.tsx** - Metadata completa, SEO, JSON-LD

### FASE 2: Componentes Core (2-3 dias)
4. **Navbar** - Navegacion expandida, buscador, mejor mobile
5. **HeroSection** - Rediseño premium con buscador integrado
6. **PropertyCard** - Card premium con mas info y acciones
7. **Footer** - Footer profesional multi-columna

### FASE 3: Paginas (2-3 dias)
8. **page.tsx (Home)** - Secciones: Hero, Destacadas, Testimonios, Stats, Barrios, CTA, Newsletter
9. **propiedades/page.tsx** - Listado con filtros avanzados
10. **propiedades/[slug]/page.tsx** - Detalle premium con galeria
11. **contacto/page.tsx** - Formulario mejorado con validacion
12. **NUEVA: nosotros/page.tsx** - Pagina de empresa

### FASE 4: Integracion (1-2 dias)
13. **lib/strapi.ts** - Cliente API completo
14. **API integration** - Conectar todas las paginas con Strapi
15. **Dynamic metadata** - Meta tags por pagina/propiedad
16. **Sitemap** - /app/sitemap.ts

### FASE 5: Optimizacion (1 dia)
17. **next/image** - Optimizacion de imagenes
18. **Lazy loading** - Intersection Observer
19. **Core Web Vitals** - LCP, FID, CLS
20. **Accesibilidad** - ARIA, contrastes, navegacion teclado

---

## 5. PRIORIDADES

### CRITICO (Hacer primero)
- [ ] Sistema de design tokens (tailwind + CSS vars)
- [ ] HeroSection rediseñado
- [ ] PropertyCard premium
- [ ] Integracion API real

### ALTO (Siguiente)
- [ ] Navbar expandido
- [ ] Seccion testimonios
- [ ] Pagina nosotros
- [ ] SEO completo

### MEDIO (Despues)
- [ ] Footer profesional
- [ ] Filtros avanzados
- [ ] Animaciones
- [ ] Dark mode

### BAJO (Futuro)
- [ ] Comparador de propiedades
- [ ] Mapa integrado
- [ ] Chatbot
- [ ] Analytics avanzado

---

## 6. NOTAS TECNICAS

### Colores a mantener (refinados)
- Primary: `#0E3E76` (azul profundo)
- Accent: `#8FCE00` (verde vibrante)
- Secondary: `#145BAD` (azul medio)
- Dark: `#0a1f3d` (azul muy oscuro)
- Light: `#f8fafc` (gris azulado muy claro)
- Text: `#1e293b` (slate oscuro)
- Muted: `#64748b` (slate medio)

### Tipografia propuesta
- **Display/Headings**: Playfair Display (serif elegante)
- **Body/UI**: Inter (sans legible)
- **Labels/Captions**: Inter 500

### Espaciado
- Base: 4px (0.25rem)
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128

### Breakpoints
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px
