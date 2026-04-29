import PropertyCard from '@/components/PropertyCard'
import propertiesData from '../properties-data.json'

export default function PropertiesPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
            Todas las Propiedades
          </h1>
          <p className="text-gray-600">
            Encuentra tu propiedad ideal en Santa Marta y alrededores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertiesData.map((property: any) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  )
}
