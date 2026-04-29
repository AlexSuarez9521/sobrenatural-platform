import Container from '@/components/ui/Container'
import { CheckCircle, Award, Users, Building2, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Nosotros',
  description: 'Conoce a Sobrenatural Inmobiliaria. Mas de 5 anos de experiencia en el mercado inmobiliario de Santa Marta.',
}

const values = [
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Integridad',
    description: 'Actuamos con honestidad y transparencia en cada transaccion. Tu confianza es nuestro mayor activo.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Excelencia',
    description: 'Buscamos la mejor opcion para cada cliente, analizando el mercado con rigor profesional.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Compromiso',
    description: 'Te acompanamos desde el primer contacto hasta la entrega de llaves. Tu objetivo es el nuestro.',
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Conocimiento local',
    description: 'Conocemos cada barrio, cada calle y cada oportunidad del mercado inmobiliario samario.',
  },
]

const stats = [
  { number: '5+', label: 'Anos de experiencia' },
  { number: '50+', label: 'Propiedades gestionadas' },
  { number: '100+', label: 'Clientes satisfechos' },
  { number: '8+', label: 'Barrios cubiertos' },
]

export default function NosotrosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-36 lg:pt-44 pb-16 bg-primary-800">
        <Container>
          <div className="max-w-3xl">
            <span className="text-accent-400 font-bold text-sm uppercase tracking-widest">Sobre nosotros</span>
            <h1 className="text-4xl lg:text-display-1 font-display text-white mt-4 mb-6 text-balance">
              Tu inmobiliaria de confianza en Santa Marta
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Desde 2019, Sobrenatural Inmobiliaria se ha dedicado a conectar personas con su hogar ideal
              en la hermosa ciudad de Santa Marta. Nuestro equipo de expertos conoce cada rincon de esta
              ciudad y esta listo para ayudarte.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-800 font-display">{stat.number}</div>
                <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Oficina de Sobrenatural Inmobiliaria"
                className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
              />
            </div>
            <div>
              <span className="text-accent-600 font-bold text-sm uppercase tracking-widest">Nuestra mision</span>
              <h2 className="text-h2 font-display text-primary-800 mt-3 mb-4 text-balance">
                Hacer realidad el sueno de tener un hogar
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                En Sobrenatural Inmobiliaria creemos que todos merecen un lugar donde crear recuerdos.
                Nuestra mision es facilitar el proceso de compra, venta y arriendo de propiedades
                en Santa Marta, brindando un servicio personalizado, transparente y eficiente.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Nos diferenciamos por nuestro profundo conocimiento del mercado local, nuestra red
                de contactos y nuestro compromiso absoluto con la satisfaccion de nuestros clientes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent-600 font-bold text-sm uppercase tracking-widest">Nuestros valores</span>
            <h2 className="section-title mt-2 text-balance">Lo que nos define</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent-300/50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-800 text-accent-400 rounded-xl flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-800 mb-2">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent-600 font-bold text-sm uppercase tracking-widest">Nuestro equipo</span>
            <h2 className="section-title mt-2 text-balance">Profesionales a tu servicio</h2>
            <p className="text-slate-500 mt-4 text-body">
              Un equipo apasionado por el mercado inmobiliario samario
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Alexander Suarez',
                role: 'Director General',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
              },
              {
                name: 'Maria Fernanda Lopez',
                role: 'Agente Inmobiliario',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
              },
              {
                name: 'Carlos Mendoza',
                role: 'Asesor Legal',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary-800">{member.name}</h3>
                <p className="text-slate-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-800">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Listo para encontrar tu propiedad ideal?
            </h2>
            <p className="text-white/70 mb-8">
              Nuestro equipo esta listo para ayudarte en cada paso del proceso.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/propiedades"
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                Ver propiedades
              </Link>
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all border border-white/20"
              >
                <Phone className="w-5 h-5" />
                Llamar ahora
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
