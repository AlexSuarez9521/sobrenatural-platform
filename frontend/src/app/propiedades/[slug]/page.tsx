import Link from 'next/link'
import propertiesData from '../../properties-data.json'

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const property = (propertiesData as any[]).find((p) => p.slug === slug)

  if (!property) {
    return (
      <div className="container-wide py-24 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Propiedad no encontrada</h1>
        <Link href="/propiedades" className="btn-primary">
          Ver todas las propiedades
        </Link>
      </div>
    )
  }

  const formatPrice = (price: number | null) => {
    if (!price) return ''
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(price)
  }

  const imageUrl = property.featuredImage?.url || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80'

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-wide py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-600 transition-colors">Inicio</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/propiedades" className="hover:text-brand-600 transition-colors">Propiedades</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-slate-800 font-medium truncate max-w-[200px]">{property.title}</span>
          </nav>
        </div>
      </div>

      <div className="container-wide py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-elevated bg-white">
              <div className="relative aspect-[16/10]">
                <img
                  src={imageUrl}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm uppercase">
                    {property.propertyType}
                  </span>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm uppercase ${
                    property.businessType === 'Venta' ? 'bg-brand-600 text-white' : 'bg-emerald-600 text-white'
                  }`}>
                    {property.businessType}
                  </span>
                </div>
              </div>
            </div>

            {/* Title & Price */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">{property.title}</h1>
                  <div className="flex items-center gap-1.5 text-gray-500 mt-2">
                    <svg className="w-5 h-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium">{property.location?.neighborhood}, {property.location?.city}</span>
                  </div>
                </div>
                <div className="text-right">
                  {property.price && (
                    <div className="text-3xl font-bold text-slate-900">{formatPrice(property.price)}</div>
                  )}
                  {property.rentPrice && (
                    <div className="text-lg text-emerald-600 font-semibold">
                      {property.price ? 'o ' : ''}{formatPrice(property.rentPrice)}/mes
                    </div>
                  )}
                </div>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                {property.bedrooms !== undefined && property.bedrooms > 0 && (
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <svg className="w-6 h-6 text-brand-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12V8m0 0l-8-8-8 8m8-8v8m-8 4h16M4 16v4m16-4v4" />
                    </svg>
                    <div className="text-2xl font-bold text-slate-900">{property.bedrooms}</div>
                    <div className="text-sm text-gray-500">Habitaciones</div>
                  </div>
                )}
                {property.bathrooms !== undefined && property.bathrooms > 0 && (
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <svg className="w-6 h-6 text-brand-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <div className="text-2xl font-bold text-slate-900">{property.bathrooms}</div>
                    <div className="text-sm text-gray-500">Baños</div>
                  </div>
                )}
                {property.area !== undefined && property.area > 0 && (
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <svg className="w-6 h-6 text-brand-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <div className="text-2xl font-bold text-slate-900">{property.area}</div>
                    <div className="text-sm text-gray-500">m²</div>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            {property.shortDescription && (
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-gray-100">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Descripción</h2>
                <p className="text-gray-600 leading-relaxed">{property.shortDescription}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 sticky top-28">
              <h3 className="text-lg font-bold text-slate-900 mb-2">¿Te interesa esta propiedad?</h3>
              <p className="text-gray-500 text-sm mb-6">
                Contáctanos ahora y agenda una visita. Te responderemos lo antes posible.
              </p>
              <div className="space-y-3">
                <a
                  href={`https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20la%20propiedad%3A%20${encodeURIComponent(property.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="tel:+573001234567"
                  className="btn-outline w-full"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Llamar ahora
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 font-bold text-lg">
                    SI
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Sobrenatural Inmobiliaria</div>
                    <div className="text-sm text-gray-500">Agente inmobiliario</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
