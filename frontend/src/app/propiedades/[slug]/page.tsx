import Link from 'next/link'
import propertiesData from '../../properties-data.json'

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const property = (propertiesData as any[]).find((p) => p.slug === slug)

  if (!property) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-3xl font-bold text-primary-500 mb-4">Propiedad no encontrada</h1>
        <Link href="/propiedades" className="text-accent-500 hover:underline">
          ← Volver a propiedades
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

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <Link href="/propiedades" className="text-primary-500 hover:underline mb-6 inline-block">
          ← Volver a propiedades
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-80 md:h-96 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-lg">Imagen de la propiedad</span>
          </div>

          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary-500 text-white text-sm font-semibold px-4 py-1 rounded-full uppercase">
                {property.propertyType}
              </span>
              <span className="bg-accent-500 text-white text-sm font-semibold px-4 py-1 rounded-full uppercase">
                {property.businessType}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              {property.title}
            </h1>

            <p className="text-gray-600 text-lg mb-6">
              {property.location?.city || 'Santa Marta'}
              {property.location?.neighborhood ? `, ${property.location.neighborhood}` : ''}
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              {property.price && (
                <div>
                  <p className="text-sm text-gray-500">Precio de venta</p>
                  <p className="text-2xl font-bold text-accent-600">{formatPrice(property.price)}</p>
                </div>
              )}
              {property.rentPrice && (
                <div>
                  <p className="text-sm text-gray-500">Precio de arriendo</p>
                  <p className="text-2xl font-bold text-accent-600">{formatPrice(property.rentPrice)}</p>
                </div>
              )}
            </div>

            <div className="prose max-w-none mb-8">
              <h3 className="text-xl font-bold text-primary-500 mb-3">Descripción</h3>
              <p className="text-gray-700">
                {property.shortDescription || 'Hermosa propiedad ubicada en una de las mejores zonas de Santa Marta.'}
              </p>
            </div>

            <Link
              href="/contacto"
              className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Contactar agente
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
