import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-primary-500 text-white py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700/90 to-primary-500/80" />
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Inmobiliaria en Santa Marta
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Encuentra la propiedad de tus sueños. Venta y arriendo de apartamentos, casas, locales y más.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/propiedades"
            className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Ver propiedades
          </Link>
          <Link
            href="/contacto"
            className="bg-white hover:bg-gray-100 text-primary-500 font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  )
}
