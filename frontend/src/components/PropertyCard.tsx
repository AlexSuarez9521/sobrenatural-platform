'use client'

import Link from 'next/link'
import { MapPin, Bed, Bath, Maximize, Heart, Share2 } from 'lucide-react'

interface Property {
  id: number
  title: string
  slug: string
  propertyType: string
  businessType: string
  price: number | null
  rentPrice: number | null
  bedrooms: number | null
  bathrooms: number | null
  area: number | null
  location?: { city: string; neighborhood: string }
  featuredImage?: string | { url: string }
  city?: string
  neighborhood?: string
  featured?: boolean
  shortDescription?: string
  description?: string
  address?: string
}

function formatPrice(price: number | null): string {
  if (!price) return 'Consultar'
  if (price >= 1_000_000_000) {
    return `$${(price / 1_000_000_000).toFixed(1).replace(/\.0$/, '')}M`
  }
  return `$${(price / 1_000_000).toFixed(0)}M`
}

function formatPriceFull(price: number | null): string {
  if (!price) return 'Consultar precio'
  return `$${price.toLocaleString('es-CO')}`
}

export default function PropertyCard({ property }: { property: Property }) {
  const imageUrl = typeof property.featuredImage === 'string'
    ? property.featuredImage
    : property.featuredImage?.url || '/images/placeholder.jpg'

  const businessTypeColor = property.businessType === 'Venta'
    ? 'bg-primary-700 text-white'
    : 'bg-accent-500 text-white'

  const businessTypeLabel = property.businessType === 'Venta' ? 'En Venta' : 'En Arriendo'

  return (
    <Link href={`/propiedades/${property.slug}`} className="group block">
      <article className="card-property h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src={imageUrl}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-smooth"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="badge bg-white/95 text-slate-700 shadow-sm backdrop-blur-sm">
              {property.propertyType}
            </span>
          </div>

          <div className="absolute top-3 right-3 flex gap-2">
            {property.featured && (
              <span className="badge bg-amber-400 text-slate-900 shadow-sm flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Destacada
              </span>
            )}
          </div>

          {/* Business type badge - bottom left */}
          <div className="absolute bottom-3 left-3">
            <span className={`badge ${businessTypeColor} shadow-sm`}>
              {businessTypeLabel}
            </span>
          </div>

          {/* Hover actions */}
          <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-500 hover:text-red-500 transition-colors shadow-sm"
              aria-label="Agregar a favoritos"
              onClick={(e) => e.preventDefault()}
            >
              <Heart className="w-4 h-4" />
            </button>
            <button
              className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-500 hover:text-primary-700 transition-colors shadow-sm"
              aria-label="Compartir propiedad"
              onClick={(e) => e.preventDefault()}
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {/* Location */}
          <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-2">
            <MapPin className="w-4 h-4 text-accent-500" />
            <span>{property.location?.neighborhood || property.neighborhood || property.location?.city || property.city || 'Santa Marta'}</span>
          </div>

          {/* Title */}
          <h3 className="text-base font-bold text-primary-800 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors leading-snug">
            {property.title}
          </h3>

          {/* Description */}
          <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-1">
            {property.shortDescription || `Hermoso ${property.propertyType.toLowerCase()} en ${property.location?.neighborhood || property.neighborhood || property.location?.city || property.city || 'Santa Marta'}`}
          </p>

          {/* Specs */}
          <div className="flex items-center gap-4 text-slate-500 text-sm mb-4">
            {property.bedrooms !== null && property.bedrooms > 0 && (
              <span className="flex items-center gap-1">
                <Bed className="w-4 h-4" />
                {property.bedrooms} hab
              </span>
            )}
            {property.bathrooms !== null && property.bathrooms > 0 && (
              <span className="flex items-center gap-1">
                <Bath className="w-4 h-4" />
                {property.bathrooms} bañ
              </span>
            )}
            {property.area !== null && property.area > 0 && (
              <span className="flex items-center gap-1">
                <Maximize className="w-4 h-4" />
                {property.area} m²
              </span>
            )}
          </div>

          {/* Price */}
          <div className="pt-3 border-t border-slate-100 flex items-baseline justify-between">
            <div className="flex flex-col">
              {property.price !== null && property.price > 0 && (
                <span className="text-xl font-bold text-primary-800 font-display">{formatPriceFull(property.price)}</span>
              )}
              {property.rentPrice !== null && property.rentPrice > 0 && (
                <span className="text-sm text-slate-500">
                  {property.price !== null && property.price > 0 ? 'o ' : ''}
                  <span className="font-semibold text-accent-500">{formatPriceFull(property.rentPrice)}</span>
                  <span className="text-slate-400">/mes</span>
                </span>
              )}
              {((property.price === null || property.price === 0) && (property.rentPrice === null || property.rentPrice === 0)) && (
                <span className="text-lg font-bold text-primary-800">Consultar</span>
              )}
            </div>
            <span className="text-accent-500 text-sm font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
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
