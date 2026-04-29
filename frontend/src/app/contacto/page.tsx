export default function ContactPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">Contacto</h1>
          <p className="text-gray-600">
            Estamos aquí para ayudarte a encontrar tu propiedad ideal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold text-primary-500 mb-6">Información de contacto</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Teléfono:</strong> +57 300 499 4252</p>
              <p><strong>Email:</strong> inmobiliariasobrenatural@gmail.com</p>
              <p><strong>Dirección:</strong> Santa Marta, Magdalena, Colombia</p>
              <p><strong>WhatsApp:</strong> +57 300 499 4252</p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-primary-500 mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <span className="bg-primary-500 text-white px-4 py-2 rounded-lg">Facebook</span>
                <span className="bg-primary-500 text-white px-4 py-2 rounded-lg">Instagram</span>
                <span className="bg-primary-500 text-white px-4 py-2 rounded-lg">X</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-primary-500 mb-6">Escríbenos</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  placeholder="+57 300 000 0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  placeholder="Estoy interesado en..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 rounded-lg transition duration-300"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
