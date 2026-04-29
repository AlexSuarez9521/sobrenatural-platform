import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo-original.png"
              alt="Sobrenatural Inmobiliaria"
              width={180}
              height={65}
              className="h-12 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-brand-200 text-sm leading-relaxed">
              Expertos en propiedades en Santa Marta y sus alrededores. 
              Venta y arriendo con el mejor servicio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Enlaces</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-brand-200 hover:text-accent transition-colors text-sm">Inicio</Link></li>
              <li><Link href="/propiedades" className="text-brand-200 hover:text-accent transition-colors text-sm">Propiedades</Link></li>
              <li><Link href="/contacto" className="text-brand-200 hover:text-accent transition-colors text-sm">Contacto</Link></li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Tipos</h4>
            <ul className="space-y-2">
              <li><span className="text-brand-200 text-sm">Apartamentos</span></li>
              <li><span className="text-brand-200 text-sm">Casas</span></li>
              <li><span className="text-brand-200 text-sm">Locales</span></li>
              <li><span className="text-brand-200 text-sm">Fincas</span></li>
              <li><span className="text-brand-200 text-sm">Penthouses</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-brand-200 text-sm">
                <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Santa Marta, Magdalena
              </li>
              <li className="flex items-center gap-2 text-brand-200 text-sm">
                <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +57 300 123 4567
              </li>
              <li className="flex items-center gap-2 text-brand-200 text-sm">
                <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@sobrenaturalinmobiliaria.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-800 text-center">
          <p className="text-brand-300 text-sm">
            © {new Date().getFullYear()} Sobrenatural Inmobiliaria. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
