'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Search, Home, MapPin, DollarSign, ArrowRight } from 'lucide-react'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const duration = 2000
          const step = (timestamp: number) => {
            if (!start) start = timestamp
            const progress = Math.min((timestamp - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) {
              requestAnimationFrame(step)
            }
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-3xl lg:text-4xl font-bold text-accent-500 font-display">
      {count}{suffix}
    </div>
  )
}

export default function HeroSection() {
  const [searchType, setSearchType] = useState('all')
  const [searchZone, setSearchZone] = useState('all')

  return (
    <section className="relative min-h-[90vh] flex items-center pt-36 lg:pt-40">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80"
          alt="Propiedades en Santa Marta"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/85 to-primary-700/60" />
      </div>

      <div className="container-main relative z-10 py-12 lg:py-20">
        <div className="max-w-3xl">
          {/* Overline */}
          <div className="inline-flex items-center gap-2 bg-accent-500/20 backdrop-blur-sm border border-accent-500/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-semibold">Inmobiliaria en Santa Marta</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-display-1 font-display text-white leading-[1.1] mb-6 animate-fade-up animation-delay-100 text-balance">
            Encuentra tu{' '}
            <span className="text-accent-400">hogar ideal</span>{' '}
            en el corazon del Caribe
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl leading-relaxed animate-fade-up animation-delay-200">
            Propiedades exclusivas en Santa Marta, Rodadero, Pozos Colorados y Minca.
            Venta y arriendo con el mejor servicio personalizado.
          </p>

          {/* Search box */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 lg:p-6 animate-fade-up animation-delay-300">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Type select */}
              <div className="relative">
                <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-700" />
                <select
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white rounded-xl text-slate-700 font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-500"
                >
                  <option value="all">Tipo de propiedad</option>
                  <option value="casa">Casa</option>
                  <option value="apartamento">Apartamento</option>
                  <option value="local">Local Comercial</option>
                  <option value="lote">Lote</option>
                </select>
              </div>

              {/* Zone select */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-700" />
                <select
                  value={searchZone}
                  onChange={(e) => setSearchZone(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white rounded-xl text-slate-700 font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-500"
                >
                  <option value="all">Todas las zonas</option>
                  <option value="rodadero">Rodadero</option>
                  <option value="pozos-colorados">Pozos Colorados</option>
                  <option value="bellavista">Bellavista</option>
                  <option value="minca">Minca</option>
                  <option value="centro">Centro Historico</option>
                </select>
              </div>

              {/* Search button */}
              <Link
                href="/propiedades"
                className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Search className="w-5 h-5" />
                Buscar
              </Link>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-8 animate-fade-up animation-delay-400">
            <Link
              href="/propiedades"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Ver propiedades
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/573001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 backdrop-blur-sm border border-white/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contactar asesor
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 lg:mt-20 pt-8 border-t border-white/20 grid grid-cols-3 gap-6 max-w-lg animate-fade-up animation-delay-500">
          <div className="text-center">
            <AnimatedCounter target={50} suffix="+" />
            <div className="text-white/70 text-sm font-medium mt-1">Propiedades</div>
          </div>
          <div className="text-center">
            <AnimatedCounter target={8} suffix="+" />
            <div className="text-white/70 text-sm font-medium mt-1">Barrios</div>
          </div>
          <div className="text-center">
            <AnimatedCounter target={100} suffix="+" />
            <div className="text-white/70 text-sm font-medium mt-1">Clientes</div>
          </div>
        </div>
      </div>
    </section>
  )
}
