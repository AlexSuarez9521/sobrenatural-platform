export default {
  kind: 'collectionType',
  collectionName: 'blog_posts',
  info: {
    singularName: 'blog-post',
    pluralName: 'blog-posts',
    displayName: 'Blog Post',
    description: 'Artículos del blog inmobiliario',
  },
  options: {
    draftAndPublish: true,
  },
  pluginOptions: {},
  attributes: {
    title: {
      type: 'string',
      required: true,
      unique: true,
    },
    slug: {
      type: 'uid',
      targetField: 'title',
    },
    excerpt: {
      type: 'text',
    },
    content: {
      type: 'richtext',
      required: true,
    },
    coverImage: {
      type: 'media',
      multiple: false,
      allowedTypes: ['images'],
    },
    author: {
      type: 'string',
      required: true,
    },
    publishedDate: {
      type: 'date',
    },
    category: {
      type: 'enumeration',
      enum: [
        'mercado',
        'consejos',
        'tendencias',
        'decoracion',
        'legal',
        'finanzas',
        'general',
      ],
      required: true,
    },
    tags: {
      type: 'component',
      component: 'shared.tags',
      repeatable: true,
    },
    featured: {
      type: 'boolean',
      default: false,
    },
    seo: {
      type: 'component',
      component: 'shared.seo',
    },
  },
};
