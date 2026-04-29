import PropertyCard from '@/components/PropertyCard'
import Container from '@/components/ui/Container'
import { Search, SlidersHorizontal } from 'lucide-react'

export const metadata = {
  title: 'Propiedades',
  description: 'Explora todas nuestras propiedades en venta y arriendo en Santa Marta, Rodadero, Pozos Colorados y mas.',
}

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
    featured: true,
    featuredImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    shortDescription: 'Espectacular apartamento con vista panoramica al mar Caribe.',
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
    featured: true,
    featuredImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    shortDescription: 'Hermosa casa campestre rodeada de naturaleza y tranquilidad.',
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
    featured: false,
    featuredImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    shortDescription: 'Moderno apartamento en zona exclusiva de Santa Marta.',
  },
  {
    id: 4,
    title: 'Casa en Bellavista',
    slug: 'casa-bellavista',
    propertyType: 'Casa',
    businessType: 'Venta',
    price: 520000000,
    rentPrice: null,
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    neighborhood: 'Bellavista',
    city: 'Santa Marta',
    featured: false,
    featuredImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    shortDescription: 'Hermosa casa familiar en tranquilo barrio residencial.',
  },
  {
    id: 5,
    title: 'Local comercial en Centro Historico',
    slug: 'local-centro-historico',
    propertyType: 'Local',
    businessType: 'Arriendo',
    price: null,
    rentPrice: 3500000,
    bedrooms: 0,
    bathrooms: 1,
    area: 60,
    neighborhood: 'Centro Historico',
    city: 'Santa Marta',
    featured: false,
    featuredImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    shortDescription: 'Excelente ubicacion para tu negocio en el corazon de Santa Marta.',
  },
  {
    id: 6,
    title: 'Lote en Pozos Colorados',
    slug: 'lote-pozos-colorados',
    propertyType: 'Lote',
    businessType: 'Venta',
    price: 280000000,
    rentPrice: null,
    bedrooms: 0,
    bathrooms: 0,
    area: 500,
    neighborhood: 'Pozos Colorados',
    city: 'Santa Marta',
    featured: false,
    featuredImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    shortDescription: 'Amplio lote en zona de alta valorizacion.',
  },
]

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 lg:pt-32">
      {/* Header */}
      <section className="bg-primary-800 text-white py-16 lg:py-20">
        <Container>
          <span className="text-accent-400 font-bold text-sm uppercase tracking-widest">Catalogo</span>
          <h1 className="text-4xl lg:text-display-1 font-display mt-3 mb-4">
            Todas las propiedades
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            {propertiesData.length} propiedades disponibles en Santa Marta y zonas aledanas
          </p>
        </Container>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-slate-100 py-6">
        <Container>
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por nombre, zona o tipo..."
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              <select className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent-500 cursor-pointer">
                <option value="all">Tipo de propiedad</option>
                <option value="casa">Casa</option>
                <option value="apartamento">Apartamento</option>
                <option value="local">Local Comercial</option>
                <option value="lote">Lote</option>
              </select>

              <select className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent-500 cursor-pointer">
                <option value="all">Zona</option>
                <option value="rodadero">Rodadero</option>
                <option value="pozos-colorados">Pozos Colorados</option>
                <option value="bellavista">Bellavista</option>
                <option value="minca">Minca</option>
                <option value="centro">Centro</option>
              </select>

              <select className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent-500 cursor-pointer">
                <option value="all">Negocio</option>
                <option value="venta">Venta</option>
                <option value="arriendo">Arriendo</option>
              </select>

              <select className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent-500 cursor-pointer">
                <option value="recientes">Mas recientes</option>
                <option value="precio-asc">Precio: menor a mayor</option>
                <option value="precio-desc">Precio: mayor a menor</option>
              </select>

              <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary-800 text-white rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors">
                <SlidersHorizontal className="w-4 h-4" />
                Filtrar
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Grid */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propertiesData.map((property: any) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Empty state / Load more */}
          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold px-8 py-3 rounded-xl hover:bg-slate-50 transition-colors">
              Cargar mas propiedades
            </button>
          </div>
        </Container>
      </section>
    </div>
  )
}
