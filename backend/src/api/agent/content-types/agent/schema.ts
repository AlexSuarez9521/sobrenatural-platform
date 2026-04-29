export default {
  kind: 'collectionType',
  collectionName: 'agents',
  info: {
    singularName: 'agent',
    pluralName: 'agents',
    displayName: 'Agente',
    description: 'Agentes inmobiliarios',
  },
  options: {
    draftAndPublish: true,
  },
  pluginOptions: {},
  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'uid',
      targetField: 'name',
    },
    email: {
      type: 'email',
      required: true,
    },
    phone: {
      type: 'string',
    },
    whatsapp: {
      type: 'string',
    },
    bio: {
      type: 'richtext',
    },
    position: {
      type: 'string',
    },
    photo: {
      type: 'media',
      multiple: false,
      allowedTypes: ['images'],
    },
    properties: {
      type: 'relation',
      relation: 'oneToMany',
      target: 'api::property.property',
      mappedBy: 'agent',
    },
    linkedin: {
      type: 'string',
    },
    instagram: {
      type: 'string',
    },
    isActive: {
      type: 'boolean',
      default: true,
    },
    seo: {
      type: 'component',
      component: 'shared.seo',
    },
  },
};
