/**
 * Cliente API para Strapi CMS
 * Proporciona funciones tipadas para interactuar con el backend
 */

const STRAPI_URL = process.env.STRAPI_API_URL || 'http://localhost:1337'

export interface StrapiResponse<T> {
  data: T | null
  meta?: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface Property {
  id: number
  attributes: {
    title: string
    slug: string
    description: string
    shortDescription: string
    price: number
    rentPrice: number | null
    bedrooms: number
    bathrooms: number
    area: number
    propertyType: 'Casa' | 'Apartamento' | 'Local' | 'Lote' | 'Finca'
    businessType: 'Venta' | 'Arriendo' | 'Venta y Arriendo'
    featured: boolean
    address: string
    city: string
    neighborhood: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    featuredImage?: {
      data?: {
        attributes: {
          url: string
          alternativeText: string
        }
      }
    }
    gallery?: {
      data?: Array<{
        attributes: {
          url: string
          alternativeText: string
        }
      }>
    }
    agent?: {
      data?: {
        attributes: {
          name: string
          phone: string
          email: string
          photo?: {
            data?: {
              attributes: {
                url: string
              }
            }
          }
        }
      }
    }
  }
}

export interface Agent {
  id: number
  attributes: {
    name: string
    phone: string
    email: string
    position: string
    bio: string
    photo?: {
      data?: {
        attributes: {
          url: string
        }
      }
    }
  }
}

export interface Testimonial {
  id: number
  attributes: {
    name: string
    role: string
    content: string
    rating: number
    createdAt: string
  }
}

/**
 * Funcion base para hacer peticiones a la API de Strapi
 */
export async function fetchAPI<T>(
  path: string,
  options: RequestInit = {}
): Promise<StrapiResponse<T>> {
  const url = new URL(path, STRAPI_URL)

  try {
    const res = await fetch(url.toString(), {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      // Cache durante 60 segundos para datos que no cambian frecuentemente
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      console.error(`API error: ${res.status} ${res.statusText} - ${url.toString()}`)
      return { data: null }
    }

    return res.json()
  } catch (error) {
    console.error('Fetch error:', error)
    return { data: null }
  }
}

/**
 * Obtener todas las propiedades
 */
export async function getProperties(params = ''): Promise<StrapiResponse<Property[]>> {
  return fetchAPI<Property[]>(`/api/properties?populate=*${params ? '&' + params : ''}`)
}

/**
 * Obtener una propiedad por slug
 */
export async function getProperty(slug: string): Promise<StrapiResponse<Property[]>> {
  return fetchAPI<Property[]>(`/api/properties?filters[slug][$eq]=${slug}&populate=*`)
}

/**
 * Obtener propiedades destacadas
 */
export async function getFeaturedProperties(): Promise<StrapiResponse<Property[]>> {
  return fetchAPI<Property[]>('/api/properties?filters[featured][$eq]=true&populate=*')
}

/**
 * Obtener propiedades por tipo de negocio (Venta/Arriendo)
 */
export async function getPropertiesByBusinessType(type: string): Promise<StrapiResponse<Property[]>> {
  return fetchAPI<Property[]>(`/api/properties?filters[businessType][$eq]=${type}&populate=*`)
}

/**
 * Obtener propiedades por tipo (Casa/Apartamento/etc)
 */
export async function getPropertiesByType(type: string): Promise<StrapiResponse<Property[]>> {
  return fetchAPI<Property[]>(`/api/properties?filters[propertyType][$eq]=${type}&populate=*`)
}

/**
 * Obtener propiedades por zona/barrio
 */
export async function getPropertiesByNeighborhood(neighborhood: string): Promise<StrapiResponse<Property[]>> {
  return fetchAPI<Property[]>(`/api/properties?filters[neighborhood][$containsi]=${neighborhood}&populate=*`)
}

/**
 * Buscar propiedades por texto
 */
export async function searchProperties(query: string): Promise<StrapiResponse<Property[]>> {
  return fetchAPI<Property[]>(`/api/properties?filters[$or][0][title][$containsi]=${query}&filters[$or][1][description][$containsi]=${query}&filters[$or][2][neighborhood][$containsi]=${query}&populate=*`)
}

/**
 * Obtener todos los agentes
 */
export async function getAgents(): Promise<StrapiResponse<Agent[]>> {
  return fetchAPI<Agent[]>('/api/agents?populate=*')
}

/**
 * Obtener todos los testimonios
 */
export async function getTestimonials(): Promise<StrapiResponse<Testimonial[]>> {
  return fetchAPI<Testimonial[]>('/api/testimonials?populate=*')
}

/**
 * Obtener la URL completa de una imagen de Strapi
 */
export function getImageUrl(imageData: any): string {
  if (!imageData?.data?.attributes?.url) {
    return '/images/placeholder.jpg'
  }
  const url = imageData.data.attributes.url
  if (url.startsWith('http')) return url
  return `${STRAPI_URL}${url}`
}

/**
 * Obtener la URL de una imagen con tamaño especifico
 */
export function getImageUrlWithSize(imageData: any, size: 'thumbnail' | 'small' | 'medium' | 'large' = 'medium'): string {
  if (!imageData?.data?.attributes?.formats?.[size]?.url) {
    return getImageUrl(imageData)
  }
  const url = imageData.data.attributes.formats[size].url
  if (url.startsWith('http')) return url
  return `${STRAPI_URL}${url}`
}
