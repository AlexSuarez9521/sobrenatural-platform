import PropertyCard from '@/components/PropertyCard'
import propertiesData from '../properties-data.json'

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-wide py-12">
          <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">Catálogo</span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Todas las propiedades
          </h1>
          <p className="text-gray-500 mt-3">
            {propertiesData.length} propiedades disponibles en Santa Marta y alrededores
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertiesData.map((property: any) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  )
}
