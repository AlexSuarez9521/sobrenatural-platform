import HeroSection from '@/components/HeroSection'
import PropertyCard from '@/components/PropertyCard'
import Link from 'next/link'
import propertiesData from './properties-data.json'

export default function HomePage() {
  const featuredProperties = propertiesData.slice(0, 6)

  return (
    <div>
      <HeroSection />

      {/* Featured Properties */}
      <section className="py-20 bg-light">
        <div className="container-main">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-accent font-bold text-sm uppercase tracking-wider">Destacadas</span>
              <h2 className="section-title mt-2">INMUEBLES DESTACADOS</h2>
              <p className="text-gray-500 mt-3 max-w-xl">
                Selección exclusiva de las mejores propiedades en venta y arriendo
              </p>
            </div>
            <Link
              href="/propiedades"
              className="inline-flex items-center text-brand-700 font-bold hover:text-accent transition-colors group"
            >
              Ver todas las propiedades
              <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property: any) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-bold text-sm uppercase tracking-wider">¿Por qué elegirnos?</span>
            <h2 className="section-title mt-2">La mejor manera de encontrar tu hogar</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Confianza y seguridad',
                desc: 'Todas nuestras propiedades están verificadas. Te acompañamos en todo el proceso legal.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Las mejores ubicaciones',
                desc: 'Propiedades en Rodadero, Pozos Colorados, Bellavista, Minca y más.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Atención personalizada',
                desc: 'Te escuchamos y te mostramos solo las opciones que realmente se ajustan a ti.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-2xl bg-light border border-gray-200 hover:border-accent/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-800 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-800 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-900/85"></div>
        </div>
        <div className="container-main relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            ¿Buscas vender o arrendar tu inmueble?
          </h2>
          <p className="text-lg text-white/75 mb-10 max-w-2xl mx-auto">
            Publica tu propiedad con nosotros y llega a miles de compradores potenciales en Santa Marta y todo Colombia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contacto" className="btn-primary text-base px-8 py-4">
              Publicar mi propiedad
            </Link>
            <a
              href="https://wa.me/573001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg transition-all backdrop-blur-sm border border-white/20"
            >
              Escríbeme por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 bg-light">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-bold text-sm uppercase tracking-wider">Zonas</span>
            <h2 className="section-title mt-2">Explora por barrio</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Rodadero', count: 15, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80' },
              { name: 'Pozos Colorados', count: 8, img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80' },
              { name: 'Bellavista', count: 6, img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80' },
              { name: 'Minca', count: 4, img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },
            ].map((zone) => (
              <Link
                key={zone.name}
                href="/propiedades"
                className="group relative aspect-[4/3] rounded-xl overflow-hidden"
              >
                <img
                  src={zone.img}
                  alt={zone.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-800/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg">{zone.name}</h3>
                  <p className="text-white/80 text-sm">{zone.count} propiedades</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
