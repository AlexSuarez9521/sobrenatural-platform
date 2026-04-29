import NewsletterForm from '@/components/NewsletterForm'
import HeroSection from '@/components/HeroSection'
import PropertyCard from '@/components/PropertyCard'
import TestimonialCard from '@/components/TestimonialCard'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { ArrowRight, CheckCircle, MapPin, Users, Shield, Zap, Home, Search } from 'lucide-react'

// Mock data (en produccion vendria de Strapi)
const featuredProperties = [
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
]

const testimonials = [
  {
    id: 1,
    name: 'Maria Fernanda Lopez',
    role: 'Compro en Rodadero',
    content: 'Excelente servicio. Encontraron la casa perfecta para mi familia en menos de un mes. El equipo de Sobrenatural es muy profesional y atento.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    role: 'Vendio su apartamento',
    content: 'Vendi mi propiedad en tiempo record y al mejor precio del mercado. Su asesoria legal fue invaluable durante todo el proceso.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana Patricia Ruiz',
    role: 'Arrienda en Pozos Colorados',
    content: 'Me ayudaron a encontrar el apartamento ideal cerca de mi trabajo. El proceso fue rapido y sin complicaciones. Altamente recomendados.',
    rating: 5,
  },
]

const zones = [
  { name: 'Rodadero', count: 15, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80' },
  { name: 'Pozos Colorados', count: 8, img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80' },
  { name: 'Bellavista', count: 6, img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80' },
  { name: 'Minca', count: 4, img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },
]

const features = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'Confianza y seguridad',
    description: 'Todas nuestras propiedades estan verificadas. Te acompanamos en todo el proceso legal.',
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    title: 'Las mejores ubicaciones',
    description: 'Propiedades en Rodadero, Pozos Colorados, Bellavista, Minca y mas.',
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Atencion personalizada',
    description: 'Te escuchamos y te mostramos solo las opciones que realmente se ajustan a ti.',
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: 'Proceso agil',
    description: 'Desde la primera visita hasta la firma, optimizamos cada paso para tu comodidad.',
  },
  {
    icon: <Home className="w-7 h-7" />,
    title: 'Cartera exclusiva',
    description: 'Acceso a propiedades exclusivas que no encontraras en ningun otro lugar.',
  },
  {
    icon: <CheckCircle className="w-7 h-7" />,
    title: 'Garantia de satisfaccion',
    description: 'Si no encuentras lo que buscas, te devolvemos tu tiempo. Nuestro compromiso es real.',
  },
]

export default function HomePage() {
  return (
    <div>
      <HeroSection />

      {/* Featured Properties */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-accent-600 font-bold text-sm uppercase tracking-widest">Destacadas</span>
              <h2 className="section-title mt-2 text-balance">Inmuebles Destacados</h2>
              <p className="text-slate-500 mt-3 max-w-xl text-body">
                Seleccion exclusiva de las mejores propiedades en venta y arriendo
              </p>
            </div>
            <Link
              href="/propiedades"
              className="inline-flex items-center text-primary-700 font-bold hover:text-accent-500 transition-colors group"
            >
              Ver todas las propiedades
              <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property: any) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-24 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent-600 font-bold text-sm uppercase tracking-widest">Por que elegirnos</span>
            <h2 className="section-title mt-2 text-balance">La mejor manera de encontrar tu hogar</h2>
            <p className="text-slate-500 mt-4 text-body">
              Mas de 5 anos de experiencia en el mercado inmobiliario de Santa Marta nos respaldan
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((item, i) => (
              <div
                key={i}
                className="group text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent-300/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-800 text-accent-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent-600 font-bold text-sm uppercase tracking-widest">Testimonios</span>
            <h2 className="section-title mt-2 text-balance">Lo que dicen nuestros clientes</h2>
            <p className="text-slate-500 mt-4 text-body">
              La satisfaccion de nuestros clientes es nuestro mayor orgullo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/85" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 text-balance">
              Buscas vender o arrendar tu inmueble?
            </h2>
            <p className="text-lg text-white/75 mb-10 max-w-2xl mx-auto">
              Publica tu propiedad con nosotros y llega a miles de compradores potenciales en Santa Marta y todo Colombia. Asesoria gratuita.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contacto" className="btn-primary text-base px-8 py-4">
                Publicar mi propiedad
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white text-base px-8 py-4"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Escribenos por WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 lg:py-24 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent-600 font-bold text-sm uppercase tracking-widest">Zonas</span>
            <h2 className="section-title mt-2 text-balance">Explora por barrio</h2>
            <p className="text-slate-500 mt-4 text-body">
              Descubre las mejores propiedades en cada zona de Santa Marta
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {zones.map((zone) => (
              <Link
                key={zone.name}
                href="/propiedades"
                className="group relative aspect-[4/3] rounded-xl overflow-hidden"
              >
                <img
                  src={zone.img}
                  alt={zone.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-800/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg">{zone.name}</h3>
                  <p className="text-white/80 text-sm">{zone.count} propiedades</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-800">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-display font-bold text-white mb-3">
              Recibe las mejores propiedades en tu email
            </h3>
            <p className="text-white/70 mb-6">
              Suscribete y se el primero en conocer nuevas propiedades exclusivas
            </p>
            <NewsletterForm />
          </div>
        </Container>
      </section>
    </div>
  )
}
