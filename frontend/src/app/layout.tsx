import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0E3E76',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://sobrenatural.busticco.com'),
  title: {
    default: 'Sobrenatural Inmobiliaria | Propiedades en Santa Marta',
    template: '%s | Sobrenatural Inmobiliaria',
  },
  description: 'Encuentra la propiedad de tus suenos en Santa Marta, Rodadero, Pozos Colorados y Minca. Expertos en venta y arriendo de casas, apartamentos y locales comerciales. Asesoria personalizada gratuita.',
  keywords: [
    'inmobiliaria Santa Marta',
    'apartamentos Santa Marta',
    'casas Rodadero',
    'propiedades Santa Marta',
    'arriendo Santa Marta',
    'venta de casas Santa Marta',
    'inmobiliaria Rodadero',
    'apartamentos Pozos Colorados',
    'propiedades Minca',
    'inmobiliaria Colombia',
  ],
  authors: [{ name: 'Sobrenatural Inmobiliaria' }],
  creator: 'Sobrenatural Inmobiliaria',
  publisher: 'Sobrenatural Inmobiliaria',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://sobrenatural.busticco.com',
    siteName: 'Sobrenatural Inmobiliaria',
    title: 'Sobrenatural Inmobiliaria | Propiedades en Santa Marta',
    description: 'Encuentra la propiedad de tus suenos en Santa Marta. Expertos en venta y arriendo.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sobrenatural Inmobiliaria - Propiedades en Santa Marta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobrenatural Inmobiliaria | Propiedades en Santa Marta',
    description: 'Encuentra la propiedad de tus suenos en Santa Marta. Expertos en venta y arriendo.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://sobrenatural.busticco.com',
  },
  category: 'real estate',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Sobrenatural Inmobiliaria',
              description: 'Inmobiliaria especializada en propiedades en Santa Marta, Rodadero, Pozos Colorados y Minca.',
              url: 'https://sobrenatural.busticco.com',
              telephone: '+573001234567',
              email: 'info@sobrenaturalinmobiliaria.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Santa Marta',
                addressRegion: 'Magdalena',
                addressCountry: 'CO',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '11.2404',
                longitude: '-74.2110',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '14:00',
                },
              ],
              sameAs: [
                'https://wa.me/573001234567',
              ],
              priceRange: '$$$',
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
