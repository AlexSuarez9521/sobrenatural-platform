import Link from 'next/link'

interface Property {
  id: number
  title: string
  slug: string
  propertyType: string
  businessType: string
  price: number | null
  rentPrice: number | null
  location?: { city?: string; neighborhood?: string }
  featuredImage?: { url: string }
  shortDescription?: string
}

export default function PropertyCard({ property }: { property: Property }) {
  const imageUrl = property.featuredImage?.url
    ? `${process.env.STRAPI_API_URL || 'http://localhost:1337'}${property.featuredImage.url}`
    : '/images/placeholder.jpg'

  const formatPrice = (price: number | null) => {
    if (!price) return ''
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-56">
            <img
              src={imageUrl}
              alt={property.title}
              className="w-full h-full object-cover"
            />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
            {property.propertyType}
          </span>
          <span className="bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
            {property.businessType}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-primary-500 mb-2 line-clamp-2">
          <Link href={`/propiedades/${property.slug}`}>{property.title}</Link>
        </h3>
        <p className="text-gray-500 text-sm mb-3">
          {property.location?.city || 'Santa Marta'}
          {property.location?.neighborhood ? `, ${property.location.neighborhood}` : ''}
        </p>
        <div className="flex flex-wrap gap-2 text-accent-600 font-bold">
          {property.price && <span>{formatPrice(property.price)}</span>}
          {property.rentPrice && <span>{formatPrice(property.rentPrice)}</span>}
        </div>
        {property.shortDescription && (
          <p className="text-gray-600 text-sm mt-3 line-clamp-2">{property.shortDescription}</p>
        )}
      </div>
    </div>
  )
}
