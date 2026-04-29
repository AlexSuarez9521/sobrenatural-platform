'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Blue brand header bar */}
      <div className="bg-brand-800 text-white py-3">
        <div className="container-main flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Santa Marta, Colombia
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +57 300 123 4567
            </span>
          </div>
          <span className="text-accent font-semibold">¡Asesoría gratuita!</span>
        </div>
      </div>

      {/* Hero with image */}
      <div className="relative min-h-[500px] md:min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80"
            alt="Propiedades en Santa Marta"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-800/85 to-brand-700/70"></div>
        </div>

        <div className="container-main relative z-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-semibold">+50 propiedades disponibles</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              INMOBILIARIA EN{' '}
              <span className="text-accent">SANTA MARTA</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/85 mb-10 max-w-xl leading-relaxed">
              Expertos en propiedades en Santa Marta, Rodadero, Pozos Colorados y Minca. 
              Venta y arriendo con el mejor servicio.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/propiedades" className="btn-primary text-base px-8 py-4">
                Ver Propiedades
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-brand-800 font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contáctanos
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-3xl font-extrabold text-accent">50+</div>
                <div className="text-white/70 text-sm font-medium">Propiedades</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-accent">8+</div>
                <div className="text-white/70 text-sm font-medium">Barrios</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-accent">100%</div>
                <div className="text-white/70 text-sm font-medium">Confianza</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
