export default {
  kind: 'collectionType',
  collectionName: 'pages',
  info: {
    singularName: 'page',
    pluralName: 'pages',
    displayName: 'Página',
    description: 'Páginas estáticas del sitio',
  },
  options: {
    draftAndPublish: true,
  },
  pluginOptions: {},
  attributes: {
    title: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'uid',
      targetField: 'title',
    },
    content: {
      type: 'richtext',
      required: true,
    },
    excerpt: {
      type: 'text',
    },
    coverImage: {
      type: 'media',
      multiple: false,
      allowedTypes: ['images'],
    },
    seo: {
      type: 'component',
      component: 'shared.seo',
    },
    order: {
      type: 'integer',
      default: 0,
    },
    showInNavigation: {
      type: 'boolean',
      default: true,
    },
  },
};
