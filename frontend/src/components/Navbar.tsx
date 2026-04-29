import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-primary-500 text-white sticky top-0 z-50 shadow-lg">
      <div className="container-custom flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Sobrenatural Inmobiliaria
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-accent-500 transition">Inicio</Link>
          <Link href="/propiedades" className="hover:text-accent-500 transition">Propiedades</Link>
          <Link href="/contacto" className="hover:text-accent-500 transition">Contacto</Link>
        </div>
      </div>
    </nav>
  )
}
