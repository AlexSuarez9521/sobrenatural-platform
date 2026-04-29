'use client'

import Container from '@/components/ui/Container'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 lg:pt-32">
      {/* Header */}
      <section className="bg-primary-800 text-white py-16 lg:py-20">
        <Container>
          <span className="text-accent-400 font-bold text-sm uppercase tracking-widest">Contacto</span>
          <h1 className="text-4xl lg:text-display-1 font-display mt-3 mb-4">
            Estamos aqui para ayudarte
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Ponte en contacto con nosotros y te responderemos lo antes posible
          </p>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 lg:p-10">
                <h2 className="text-h3 font-display text-primary-800 mb-2">Envianos un mensaje</h2>
                <p className="text-slate-500 mb-8">
                  Completa el formulario y un asesor se comunicara contigo
                </p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-primary-800 mb-1.5">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all bg-slate-50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary-800 mb-1.5">
                        Telefono
                      </label>
                      <input
                        type="tel"
                        placeholder="300 123 4567"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all bg-slate-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary-800 mb-1.5">
                      Correo electronico
                    </label>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all bg-slate-50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary-800 mb-1.5">
                      Asunto
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all bg-slate-50 focus:bg-white cursor-pointer">
                      <option>Quiero comprar una propiedad</option>
                      <option>Quiero arrendar</option>
                      <option>Quiero vender mi inmueble</option>
                      <option>Quiero publicar mi inmueble</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary-800 mb-1.5">
                      Mensaje
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Cuentanos que estas buscando..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-4 text-base"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact info card */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h3 className="text-h5 text-primary-800 mb-6">Informacion de contacto</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-primary-50 text-accent-500 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 text-sm">Direccion</h4>
                      <p className="text-slate-500 text-sm">Santa Marta, Magdalena, Colombia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-primary-50 text-accent-500 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 text-sm">Telefono</h4>
                      <a href="tel:+573001234567" className="text-slate-500 text-sm hover:text-accent-500 transition-colors">
                        +57 300 123 4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-primary-50 text-accent-500 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 text-sm">Correo</h4>
                      <a href="mailto:info@sobrenaturalinmobiliaria.com" className="text-slate-500 text-sm hover:text-accent-500 transition-colors">
                        info@sobrenaturalinmobiliaria.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-primary-50 text-accent-500 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 text-sm">Horario</h4>
                      <p className="text-slate-500 text-sm">Lun - Vie: 8:00 AM - 6:00 PM</p>
                      <p className="text-slate-500 text-sm">Sab: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-accent-500 hover:bg-accent-600 text-white rounded-2xl p-8 text-center transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Prefieres WhatsApp?</h3>
                <p className="text-white/90 text-sm">
                  Escribenos directamente y te responderemos al instante
                </p>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
