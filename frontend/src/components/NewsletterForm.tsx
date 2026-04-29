'use client'

export default function NewsletterForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Tu correo electronico"
        className="flex-1 px-5 py-3 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
      />
      <button
        type="submit"
        className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl"
      >
        Suscribirme
      </button>
    </form>
  )
}
