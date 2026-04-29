import Link from 'next/link'

interface Property {
  id: number
  title: string
  slug: string
  propertyType: string
  businessType: string
  price: number | null
  rentPrice: number | null
  bedrooms?: number
  bathrooms?: number
  area?: number
  location?: { city?: string; neighborhood?: string }
  featuredImage?: { url: string }
  featured?: boolean
  shortDescription?: string
}

export default function PropertyCard({ property }: { property: Property }) {
  const imageUrl = property.featuredImage?.url || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80'

  const formatPrice = (price: number | null) => {
    if (!price) return ''
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(price)
  }

  const formatCompactPrice = (price: number | null) => {
    if (!price) return ''
    if (price >= 1000000000) return `$${(price / 1000000000).toFixed(1)}M`
    if (price >= 1000000) return `$${(price / 1000000).toFixed(0)}M`
    return formatPrice(price)
  }

  return (
    <Link href={`/propiedades/${property.slug}`} className="group block">
      <article className="card-property h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={imageUrl}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm uppercase tracking-wide">
              {property.propertyType}
            </span>
            <span className={`text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm uppercase tracking-wide ${
              property.businessType === 'Venta' 
                ? 'bg-brand-600 text-white' 
                : 'bg-emerald-600 text-white'
            }`}>
              {property.businessType}
            </span>
          </div>

          {property.featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Destacada
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {/* Location */}
          <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-2">
            <svg className="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{property.location?.neighborhood || 'Santa Marta'}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-brand-600 transition-colors leading-snug">
            {property.title}
          </h3>

          {/* Description */}
          {property.shortDescription && (
            <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-1">{property.shortDescription}</p>
          )}

          {/* Specs */}
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
            {property.bedrooms !== undefined && property.bedrooms > 0 && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12V8m0 0l-8-8-8 8m8-8v8m-8 4h16M4 16v4m16-4v4" />
                </svg>
                {property.bedrooms} hab
              </span>
            )}
            {property.bathrooms !== undefined && property.bathrooms > 0 && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                {property.bathrooms} bañ
              </span>
            )}
            {property.area !== undefined && property.area > 0 && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                {property.area} m²
              </span>
            )}
          </div>

          {/* Price */}
          <div className="pt-4 border-t border-gray-100 flex items-baseline justify-between">
            <div className="flex flex-col">
              {property.price && (
                <span className="text-xl font-bold text-slate-900">{formatCompactPrice(property.price)}</span>
              )}
              {property.rentPrice && (
                <span className="text-sm text-gray-500">
                  {property.price ? 'o ' : ''}
                  <span className="font-semibold text-emerald-600">{formatCompactPrice(property.rentPrice)}</span>
                  <span className="text-gray-400">/mes</span>
                </span>
              )}
            </div>
            <span className="text-brand-600 text-sm font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
              Ver más
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
