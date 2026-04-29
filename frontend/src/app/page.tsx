import HeroSection from '@/components/HeroSection'
import PropertyCard from '@/components/PropertyCard'
import Link from 'next/link'
import propertiesData from './properties-data.json'

export default function HomePage() {
  const featured = propertiesData.slice(0, 6)

  return (
    <div>
      <HeroSection />

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Inmuebles Destacados
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre las mejores propiedades en Santa Marta y sus alrededores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((property: any) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/propiedades"
              className="inline-block border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Ver todas las propiedades
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-500 mb-4">
            ¿Buscas vender o arrendar tu inmueble?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Publica tu propiedad con nosotros y llega a miles de compradores potenciales en Santa Marta.
          </p>
          <Link
            href="/contacto"
            className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  )
}
