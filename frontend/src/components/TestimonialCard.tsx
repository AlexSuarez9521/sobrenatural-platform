import { Star, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  avatar?: string
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Quote icon */}
      <Quote className="w-10 h-10 text-accent-500/30 mb-4" />

      {/* Content */}
      <p className="text-slate-700 leading-relaxed mb-6 italic">
        "{testimonial.content}"
      </p>

      {/* Divider */}
      <div className="w-12 h-1 bg-accent-500 rounded-full mb-4" />

      {/* Author */}
      <div className="flex items-center gap-3">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-lg">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div className="flex-1">
          <h4 className="font-semibold text-primary-800">{testimonial.name}</h4>
          <p className="text-sm text-slate-500">{testimonial.role}</p>
        </div>
        {/* Rating */}
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating
                  ? 'text-amber-400 fill-amber-400'
                  : 'text-slate-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
