'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80"
          alt="Santa Marta"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
      </div>

      <div className="container-wide relative z-10 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">+50 propiedades disponibles en Santa Marta</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Encuentra el hogar de tus sueños en{' '}
            <span className="text-brand-400">Santa Marta</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
            Expertos en propiedades en Santa Marta, Rodadero, Pozos Colorados y Minca. 
            Venta y arriendo con el mejor servicio.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/propiedades" className="btn-primary text-base px-8 py-4">
              Ver propiedades
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contacto" className="btn-outline text-base px-8 py-4 border-white/30 text-white hover:bg-white/10 hover:text-white">
              Contáctanos
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 pt-8 border-t border-white/20 grid grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-white/60 text-sm">Propiedades</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">8+</div>
              <div className="text-white/60 text-sm">Barrios</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-white/60 text-sm">Confianza</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
