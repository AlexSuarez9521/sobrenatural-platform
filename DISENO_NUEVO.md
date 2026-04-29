# Disenio Nuevo - Sobrenatural Inmobiliaria

## Sistema de Disenio Completo v2.0

---

## 1. PALETA DE COLORES REFINADA

### Colores Primarios
| Nombre | Hex | Uso |
|--------|-----|-----|
| primary-50 | `#e8f0f8` | Fondos hover sutiles |
| primary-100 | `#c5d9f0` | Bordes light |
| primary-200 | `#9fbfe6` | Separadores |
| primary-300 | `#79a5dc` | Elementos deshabilitados |
| primary-400 | `#5c91d4` | Links secundarios |
| primary-500 | `#3D85C6` | Botones secundarios |
| primary-600 | `#145BAD` | Botones primarios hover |
| primary-700 | `#0F437F` | Headings, textos importantes |
| primary-800 | `#0E3E76` | **Color marca principal** |
| primary-900 | `#0a2d56` | Fondos oscuros |

### Colores de Acento
| Nombre | Hex | Uso |
|--------|-----|-----|
| accent-50 | `#f4fce3` | Fondos de badges |
| accent-100 | `#e3f7b8` | Hover states |
| accent-200 | `#d0f28a` | Highlights |
| accent-300 | `#bded5c` | Indicadores activos |
| accent-400 | `#a3d900` | Variante clara |
| accent-500 | `#8FCE00` | **Color acento principal** |
| accent-600 | `#7ab300` | Hover de acento |
| accent-700 | `#659900` | Textos en acento |

### Colores Neutros
| Nombre | Hex | Uso |
|--------|-----|-----|
| slate-50 | `#f8fafc` | Fondo principal |
| slate-100 | `#f1f5f9` | Cards, secciones alternas |
| slate-200 | `#e2e8f0` | Bordes, separadores |
| slate-300 | `#cbd5e1` | Placeholders |
| slate-400 | `#94a3b8` | Textos deshabilitados |
| slate-500 | `#64748b` | Textos secundarios |
| slate-600 | `#475569` | Textos body |
| slate-700 | `#334155` | Textos importantes |
| slate-800 | `#1e293b` | **Texto principal** |
| slate-900 | `#0f172a` | Headings oscuros |

### Colores Semanticos
| Nombre | Hex | Uso |
|--------|-----|-----|
| success | `#22c55e` | Confirmaciones, disponible |
| warning | `#f59e0b` | Alertas, pendiente |
| error | `#ef4444` | Errores, no disponible |
| info | `#3b82f6` | Informacion |

---

## 2. SISTEMA TIPOGRAFICO

### Fuentes
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800&display=swap');
```

- **Display**: `Playfair Display` - Headlines, hero text, titulos de seccion
- **Body**: `Inter` - Parrafos, labels, navigation, UI elements

### Escala Tipografica
| Token | Font | Size | Weight | Line Height | Letter Spacing | Uso |
|-------|------|------|--------|-------------|----------------|-----|
| display-1 | Playfair | 72px (4.5rem) | 700 | 1.1 | -0.02em | Hero principal |
| display-2 | Playfair | 60px (3.75rem) | 700 | 1.15 | -0.02em | Hero secundario |
| h1 | Playfair | 48px (3rem) | 700 | 1.2 | -0.01em | Titulos de pagina |
| h2 | Playfair | 36px (2.25rem) | 600 | 1.25 | -0.01em | Titulos de seccion |
| h3 | Inter | 30px (1.875rem) | 600 | 1.3 | 0 | Subtitulos |
| h4 | Inter | 24px (1.5rem) | 600 | 1.35 | 0 | Card titles |
| h5 | Inter | 20px (1.25rem) | 600 | 1.4 | 0 | Labels importantes |
| h6 | Inter | 18px (1.125rem) | 600 | 1.4 | 0 | Labels |
| body-lg | Inter | 18px (1.125rem) | 400 | 1.75 | 0 | Parrafos destacados |
| body | Inter | 16px (1rem) | 400 | 1.75 | 0 | Parrafos normales |
| body-sm | Inter | 14px (0.875rem) | 400 | 1.6 | 0 | Descripciones |
| caption | Inter | 12px (0.75rem) | 500 | 1.5 | 0.02em | Labels, badges |
| overline | Inter | 12px (0.75rem) | 700 | 1.5 | 0.08em | Etiquetas uppercase |

---

## 3. ESPACIADO

### Escala
| Token | Valor | Uso |
|-------|-------|-----|
| space-1 | 4px | Micro ajustes |
| space-2 | 8px | Icon gaps |
| space-3 | 12px | Component internal |
| space-4 | 16px | Standard padding |
| space-5 | 24px | Card padding |
| space-6 | 32px | Section internal |
| space-7 | 48px | Between components |
| space-8 | 64px | Between sections |
| space-9 | 96px | Major sections |
| space-10 | 128px | Hero spacing |

### Secciones
- **Padding vertical secciones**: 96px (py-24)
- **Padding vertical hero**: 128px (py-32)
- **Max-width container**: 1280px (max-w-7xl)
- **Container padding**: 16px mobile, 24px tablet, 32px desktop

---

## 4. COMPONENTES REDISENIADOS

### 4.1 Navbar V2
```
Altura: 80px desktop, 64px mobile
Fondo: blanco con backdrop-blur-md
Sombra: subtle on scroll (0 1px 3px rgba(0,0,0,0.05))

Estructura:
- Logo (izquierda)
- Links centrales: Inicio | Propiedades | Barrios | Nosotros | Contacto
- Buscador (icono expandable)
- CTA WhatsApp (derecha)
- Mobile: hamburger menu

Estados:
- Default: bg-white/80 backdrop-blur
- Scrolled: shadow-sm bg-white/95
- Active link: text-primary-800 font-semibold border-bottom accent
- Hover link: text-primary-600 bg-primary-50 rounded-lg
```

### 4.2 HeroSection V2
```
Layout: Full-width, min-height 85vh

Fondo:
- Imagen/video con overlay gradient
- Gradient: from-primary-900/90 via-primary-800/80 to-primary-700/60

Contenido:
- Overline: "INMOBILIARIA EN SANTA MARTA" (accent-500, uppercase, tracking-wide)
- Headline: Playfair Display, 72px, blanco
  "Encuentra tu hogar ideal en el corazon del Caribe"
- Subheadline: Inter, 20px, blanco/80
  "Propiedades exclusivas en Santa Marta, Rodadero, Pozos Colorados y mas"
- Buscador integrado: Barra de busqueda con filtros (tipo, zona, precio)
- CTAs: "Ver propiedades" (primary) + "Contactar asesor" (outline blanco)

Stats bar (abajo):
- 50+ Propiedades | 8+ Barrios | 100+ Clientes satisfechos
- Dividers verticales, numeros en Playfair 36px

Animaciones:
- Fade-in up para texto (stagger 0.1s)
- Scale-in para buscador
- Counter animation para stats
```

### 4.3 PropertyCard V2
```
Layout: Vertical card, aspect-[4/3] imagen

Imagen:
- Object-fit cover, aspect ratio 4:3
- Hover: scale 1.05, transition 500ms
- Overlay gradient: from-black/40 via-transparent to-transparent
- Badge top-left: Tipo (Casa, Apartamento)
- Badge top-right: Destacada (estrella dorada)
- Badge bottom-left: Estado (Venta/Arriendo) con color semantico

Contenido:
- Ubicacion: Icono + Barrio, Ciudad (slate-500, 14px)
- Titulo: Inter 600, 18px, primary-800, 2 lineas max
- Descripcion: Inter 400, 14px, slate-500, 2 lineas
- Specs: 3 hab | 2 ban | 120m2 (iconos + texto)
- Precio: Playfair 700, 24px, primary-800
  Formato: $450.000.000 COP o $2.500.000/mes
- Agente: Avatar pequeno + nombre (opcional)

Hover effects:
- Card: translateY(-4px), shadow-xl
- Imagen: scale 1.05
- Boton "Ver detalle" aparece en overlay

Acciones:
- Favorito (bookmark icon)
- Compartir (share icon)
- Comparar (checkbox)
```

### 4.4 TestimonialCard
```
Layout: Card con fondo slate-50, border slate-200

Contenido:
- Comillas decorativas (accent-500, 48px)
- Texto testimonio: Inter 400, 16px, slate-700, italic
- Divider (accent-500, 40px width)
- Avatar: 48px redondo
- Nombre: Inter 600, 16px, primary-800
- Rol: Inter 400, 14px, slate-500
- Rating: 5 estrellas (amber-400)

Estilo:
- Padding: 32px
- Border-radius: 16px
- Sombra: subtle
```

### 4.5 Footer V2
```
Layout: 4 columnas desktop, 1 columna mobile

Fondo: primary-900
Texto: white/80

Columnas:
1. Brand:
   - Logo blanco
   - Tagline: "Tu inmobiliaria de confianza en Santa Marta"
   - Redes sociales (icons)

2. Navegacion:
   - Inicio, Propiedades, Barrios, Nosotros, Contacto
   - Link hover: accent-500

3. Servicios:
   - Venta de propiedades
   - Arriendo
   - Avaluos
   - Asesoria legal

4. Contacto:
   - Direccion
   - Telefono
   - Email
   - Horario de atencion
   - Boton WhatsApp prominente

Bottom bar:
- Copyright
- Links legales (Privacidad, Terminos)
- Powered by

Padding: 80px top, 40px bottom
```

---

## 5. ANIMACIONES Y MICRO-INTERACCIONES

### 5.1 Entradas
```css
/* Fade up */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Scale in */
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
```

### 5.2 Hover Effects
```css
/* Card lift */
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -12px rgba(0,0,0,0.15);
}

/* Image zoom */
.image-zoom {
  transition: transform 0.5s ease;
}
.image-zoom:hover {
  transform: scale(1.05);
}

/* Button shine */
.btn-shine {
  position: relative;
  overflow: hidden;
}
.btn-shine::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
  transform: rotate(30deg) translateX(-100%);
  transition: transform 0.6s ease;
}
.btn-shine:hover::after {
  transform: rotate(30deg) translateX(100%);
}
```

### 5.3 Scroll Animations
- Intersection Observer para trigger
- Stagger: 0.1s entre elementos
- Duration: 0.6s
- Easing: cubic-bezier(0.22, 1, 0.36, 1)

### 5.4 Loading States
```css
/* Skeleton */
.skeleton {
  background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

---

## 6. BREAKPOINTS Y RESPONSIVE

```javascript
screens: {
  'xs': '475px',
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

### Mobile First
- Base: < 640px
- Cards: 1 columna
- Hero: texto centrado, buscador apilado
- Navbar: hamburger menu
- Footer: 1 columna

### Tablet
- sm: 640px+
- Cards: 2 columnas
- Hero: texto izquierda, buscador inline

### Desktop
- lg: 1024px+
- Cards: 3 columnas
- Full layout

### Wide
- xl: 1280px+
- Container max-width: 1280px
- Cards pueden ser 4 columnas en listados

---

## 7. SOMBREADOS Y EFECTOS

### Box Shadows
```javascript
boxShadow: {
  'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  'card': '0 4px 20px -4px rgba(14, 62, 118, 0.15)',
  'card-hover': '0 20px 40px -12px rgba(14, 62, 118, 0.2)',
}
```

### Border Radius
```javascript
borderRadius: {
  'sm': '6px',
  'DEFAULT': '8px',
  'md': '12px',
  'lg': '16px',
  'xl': '20px',
  '2xl': '24px',
  'full': '9999px',
}
```

---

## 8. ACCESIBILIDAD

### Requisitos WCAG 2.1 AA
- [ ] Contraste minimo 4.5:1 para texto normal
- [ ] Contraste minimo 3:1 para texto grande (18px+ bold)
- [ ] Todos los elementos interactivos focusables
- [ ] Focus visible con outline accent
- [ ] ARIA labels para iconos
- [ ] Alt text para todas las imagenes
- [ ] Skip to content link
- [ ] Navegacion por teclado completa

### Focus States
```css
:focus-visible {
  outline: 2px solid #8FCE00;
  outline-offset: 2px;
}
```

---

## 9. ASSETS NECESARIOS

### Imagenes
- [ ] Hero background (Santa Marta drone shot, 1920x1080)
- [ ] Placeholder propiedades (generico elegante)
- [ ] Avatares agentes
- [ ] Iconos de barrios (4 imagenes)
- [ ] Logo SVG (version blanca y color)

### Iconos
- Usar Lucide React (ya incluido en Next.js)
- Tamaños: 16px, 20px, 24px, 32px
- Stroke width: 1.5px (default), 2px (bold)

---

## 10. CHECKLIST DE IMPLEMENTACION

### Semana 1: Fundamentos + Componentes Core
- [ ] Actualizar tailwind.config.ts con sistema completo
- [ ] Actualizar globals.css con variables y animaciones
- [ ] Actualizar layout.tsx con metadata y SEO
- [ ] Crear nuevos componentes UI base (Button, Input, Badge)
- [ ] Redisenar Navbar
- [ ] Redisenar HeroSection
- [ ] Redisenar PropertyCard
- [ ] Crear TestimonialCard
- [ ] Redisenar Footer

### Semana 2: Paginas + Integracion
- [ ] Reconstruir Home con nuevas secciones
- [ ] Crear pagina Nosotros
- [ ] Mejorar pagina Propiedades
- [ ] Mejorar pagina Detalle Propiedad
- [ ] Mejorar pagina Contacto
- [ ] Integrar API Strapi real
- [ ] Implementar metadata dinamica
- [ ] Crear sitemap

### Semana 3: Polish + Optimizacion
- [ ] Animaciones de scroll
- [ ] Lazy loading imagenes
- [ ] Optimizacion Core Web Vitals
- [ ] Testing responsive
- [ ] Testing accesibilidad
- [ ] Lighthouse audit (meta: 90+ todo)
