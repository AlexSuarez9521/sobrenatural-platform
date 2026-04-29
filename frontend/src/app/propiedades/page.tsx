import PropertyCard from '@/components/PropertyCard'
import propertiesData from '../properties-data.json'

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <div className="bg-brand-800 text-white py-12">
        <div className="container-main">
          <span className="text-accent font-bold text-sm uppercase tracking-wider">Catálogo</span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-2">TODAS LAS PROPIEDADES</h1>
          <p className="text-white/70 mt-2">{propertiesData.length} propiedades disponibles</p>
        </div>
      </div>

      {/* Grid */}
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertiesData.map((property: any) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  )
}
