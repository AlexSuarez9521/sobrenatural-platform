const STRAPI_URL = process.env.STRAPI_API_URL || 'http://localhost:1337'

export async function fetchAPI(path: string, options: RequestInit = {}) {
  const url = new URL(path, STRAPI_URL)
  const res = await fetch(url.toString(), {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  })
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`)
  }
  return res.json()
}

export async function getProperties(params = '') {
  return fetchAPI(`/api/properties?populate=*${params}`)
}

export async function getProperty(slug: string) {
  return fetchAPI(`/api/properties?filters[slug][$eq]=${slug}&populate=*`)
}

export async function getFeaturedProperties() {
  return fetchAPI('/api/properties?filters[featured][$eq]=true&populate=*')
}

export async function getAgents() {
  return fetchAPI('/api/agents?populate=*')
}

export async function getBlogPosts() {
  return fetchAPI('/api/blog-posts?populate=*')
}
