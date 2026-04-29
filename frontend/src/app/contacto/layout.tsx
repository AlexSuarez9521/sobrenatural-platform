import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta a Sobrenatural Inmobiliaria. Estamos listos para ayudarte a encontrar tu propiedad ideal en Santa Marta.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
