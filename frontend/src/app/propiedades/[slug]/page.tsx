import Link from 'next/link'
import Container from '@/components/ui/Container'
import { MapPin, Bed, Bath, Maximize, Phone, MessageCircle, Share2, Heart, ArrowLeft, Check } from 'lucide-react'

// Mock data - en produccion vendria de Strapi
const propertiesData = [
  {
    id: 1,
    title: 'Apartamento con vista al mar en Rodadero',
    slug: 'apartamento-vista-mar-rodadero',
    propertyType: 'Apartamento',
    businessType: 'Venta',
    price: 450000000,
    rentPrice: null,
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    neighborhood: 'Rodadero',
    city: 'Santa Marta',
    address: 'Calle 10 # 2-45, Rodadero',
    featured: true,
    featuredImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
    shortDescription: 'Espectacular apartamento con vista panoramica al mar Caribe.',
    description: 'Este hermoso apartamento ofrece una vista inigualable al mar Caribe desde todos sus espacios. Cuenta con acabados de primera calidad, cocina integral moderna, balcon amplio y acceso directo a la playa.\n\nEl conjunto residencial cuenta con piscina, gimnasio, zonas BBQ y parqueadero privado. Ubicado a solo 5 minutos del centro comercial y con facil acceso a restaurantes y zonas turisticas.\n\nIdeal para inversion o como residencia permanente.',
  },
  {
    id: 2,
    title: 'Casa campestre en Minca',
    slug: 'casa-campestre-minca',
    propertyType: 'Casa',
    businessType: 'Venta',
    price: 380000000,
    rentPrice: null,
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    neighborhood: 'Minca',
    city: 'Santa Marta',
    address: 'Vereda Minca, Km 12',
    featured: true,
    featuredImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    shortDescription: 'Hermosa casa campestre rodeada de naturaleza y tranquilidad.',
    description: 'Casa campestre ubicada en la magica zona de Minca, rodeada de vegetacion nativa y con vista a la Sierra Nevada.\n\nLa propiedad cuenta con 4 habitaciones amplias, 3 banos, cocina tipo americana, terraza y jardin con frutales. Perfecta para descansar del bullicio de la ciudad.',
  },
  {
    id: 3,
    title: 'Apartamento en Pozos Colorados',
    slug: 'apartamento-pozos-colorados',
    propertyType: 'Apartamento',
    businessType: 'Arriendo',
    price: null,
    rentPrice: 2500000,
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    neighborhood: 'Pozos Colorados',
    city: 'Santa Marta',
    address: 'Carrera 4 # 15-20, Pozos Colorados',
    featured: false,
    featuredImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
    shortDescription: 'Moderno apartamento en zona exclusiva de Santa Marta.',
    description: 'Apartamento moderno en una de las zonas mas exclusivas de Santa Marta. Cerca de centros comerciales, universidades y con facil acceso a la via principal.',
  },
]

export async function generateStaticParams() {
  return propertiesData.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const property = propertiesData.find((p) => p.slug === slug)

  if (!property) {
    return {
      title: 'Propiedad no encontrada',
    }
  }

  return {
    title: `${property.title} - ${property.businessType}`,
    description: property.shortDescription,
    openGraph: {
      images: [{ url: typeof property.featuredImage === 'string' ? property.featuredImage : '' }],
    },
  }
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const property = propertiesData.find((p: any) => p.slug === slug)

  if (!property) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center pt-28">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary-800 mb-4">Propiedad no encontrada</h1>
          <Link href="/propiedades" className="btn-primary">
            Ver todas las propiedades
          </Link>
        </div>
      </div>
    )
  }

  const formatPrice = (price: number | null) => {
    if (!price) return 'Consultar'
    return `$${price.toLocaleString('es-CO')}`
  }

  const businessTypeLabel = property.businessType === 'Venta' ? 'En Venta' : 'En Arriendo'

  return (
    <div className="min-h-screen bg-slate-50 pt-28 lg:pt-32">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <Container>
          <div className="flex items-center gap-2 text-sm text-slate-500 py-4">
            <Link href="/" className="hover:text-primary-700 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/propiedades" className="hover:text-primary-700 transition-colors">Propiedades</Link>
            <span>/</span>
            <span className="text-primary-800 font-medium truncate">{property.title}</span>
          </div>
        </Container>
      </div>

      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[550px] bg-slate-200">
        <img
          src={typeof property.featuredImage === 'string' ? property.featuredImage : 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80'}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-800/20 to-transparent" />

        {/* Back button */}
        <div className="absolute top-6 left-4 sm:left-8">
          <Link
            href="/propiedades"
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-primary-800 font-semibold px-4 py-2.5 rounded-xl hover:bg-white transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Link>
        </div>

        {/* Action buttons */}
        <div className="absolute top-6 right-4 sm:right-8 flex gap-2">
          <button
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-slate-500 hover:text-red-500 transition-colors shadow-sm"
            aria-label="Agregar a favoritos"
          >
            <Heart className="w-5 h-5" />
          </button>
          <button
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-slate-500 hover:text-primary-700 transition-colors shadow-sm"
            aria-label="Compartir"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <Container className="pb-8">
            <div className="flex gap-2 mb-4">
              <span className="badge bg-white/95 text-slate-700 backdrop-blur-sm">{property.propertyType}</span>
              <span className={`badge ${property.businessType === 'Venta' ? 'bg-primary-700' : 'bg-accent-500'} text-white`}>
                {businessTypeLabel}
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-h1 font-display text-white max-w-3xl">
              {property.title}
            </h1>
          </Container>
        </div>
      </div>

      {/* Content */}
      <Container className="py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            {/* Price & Location Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 lg:p-8">
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                <MapPin className="w-5 h-5 text-accent-500" />
                <span>{property.address || `${property.neighborhood}, ${property.city}`}</span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {property.bedrooms !== null && property.bedrooms > 0 && (
                  <div className="text-center p-4 bg-slate-50 rounded-xl">
                    <Bed className="w-6 h-6 text-accent-500 mx-auto mb-2" />
                    <div className="text-xl font-bold text-primary-800">{property.bedrooms}</div>
                    <div className="text-xs text-slate-500">Habitaciones</div>
                  </div>
                )}
                {property.bathrooms !== null && property.bathrooms > 0 && (
                  <div className="text-center p-4 bg-slate-50 rounded-xl">
                    <Bath className="w-6 h-6 text-accent-500 mx-auto mb-2" />
                    <div className="text-xl font-bold text-primary-800">{property.bathrooms}</div>
                    <div className="text-xs text-slate-500">Banos</div>
                  </div>
                )}
                {property.area !== null && property.area > 0 && (
                  <div className="text-center p-4 bg-slate-50 rounded-xl">
                    <Maximize className="w-6 h-6 text-accent-500 mx-auto mb-2" />
                    <div className="text-xl font-bold text-primary-800">{property.area}</div>
                    <div className="text-xs text-slate-500">m2</div>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-baseline gap-6 pt-6 border-t border-slate-100">
                {property.price !== null && property.price > 0 && (
                  <div>
                    <span className="text-sm text-slate-500">Precio de venta</span>
                    <div className="text-3xl font-bold text-primary-800 font-display">{formatPrice(property.price)}</div>
                  </div>
                )}
                {property.rentPrice !== null && property.rentPrice > 0 && (
                  <div>
                    <span className="text-sm text-slate-500">Precio de arriendo</span>
                    <div className="text-2xl font-bold text-accent-500 font-display">
                      {formatPrice(property.rentPrice)}
                      <span className="text-base font-normal text-slate-400">/mes</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 lg:p-8">
              <h2 className="text-h4 text-primary-800 mb-4">Descripcion</h2>
              <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                {property.description || property.shortDescription || 'No hay descripcion disponible.'}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 lg:p-8">
              <h2 className="text-h4 text-primary-800 mb-6">Caracteristicas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Cocina integral',
                  'Parqueadero privado',
                  'Zonas verdes',
                  'Seguridad 24h',
                  'Ascensor',
                  'Piscina',
                  'Gimnasio',
                  'Zonas BBQ',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent-500 shrink-0" />
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 lg:p-8 sticky top-28">
              <h3 className="text-h5 text-primary-800 mb-2">Te interesa esta propiedad?</h3>
              <p className="text-slate-500 text-sm mb-6">
                Contactanos ahora y uno de nuestros agentes te atendera personalmente.
              </p>

              <div className="space-y-3">
                <a
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-4"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
                <a href="tel:+573001234567" className="btn-secondary w-full py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar ahora
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h4 className="text-sm font-semibold text-primary-800 mb-3">Compartir</h4>
                <div className="flex gap-3">
                  <a
                    href={`https://wa.me/?text=Mira esta propiedad: https://sobrenatural.busticco.com/propiedades/${property.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-green-500 text-white rounded-xl flex items-center justify-center hover:bg-green-600 transition-colors"
                    aria-label="Compartir por WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://sobrenatural.busticco.com/propiedades/${property.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors"
                    aria-label="Compartir por Facebook"
                  >
                    <Share2 className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
