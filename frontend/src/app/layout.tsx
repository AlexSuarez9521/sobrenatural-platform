import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sobrenatural Inmobiliaria | Propiedades en Santa Marta',
  description: 'Encuentra la propiedad de tus sueños en Santa Marta. Casas, apartamentos, locales y más. Venta y arriendo.',
  keywords: 'inmobiliaria Santa Marta, apartamentos Santa Marta, casas Rodadero, propiedades Santa Marta, arriendo Santa Marta',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
