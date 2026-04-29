export default {
  collectionName: 'components_shared_seos',
  info: {
    displayName: 'SEO',
    description: 'Configuración SEO para contenido',
    icon: 'search',
  },
  category: 'shared',
  attributes: {
    metaTitle: {
      type: 'string',
      required: true,
      maxLength: 60,
    },
    metaDescription: {
      type: 'text',
      required: true,
      maxLength: 160,
    },
    keywords: {
      type: 'string',
    },
    canonicalUrl: {
      type: 'string',
    },
    metaRobots: {
      type: 'enumeration',
      enum: [
        'index, follow',
        'index, nofollow',
        'noindex, follow',
        'noindex, nofollow',
      ],
      default: 'index, follow',
    },
    structuredData: {
      type: 'json',
    },
  },
};
