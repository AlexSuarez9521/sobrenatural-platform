export default {
  kind: 'collectionType',
  collectionName: 'properties',
  info: {
    singularName: 'property',
    pluralName: 'properties',
    displayName: 'Propiedad',
    description: 'Inmuebles en venta y arriendo',
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
    propertyType: {
      type: 'enumeration',
      enum: [
        'apartamento',
        'casa',
        'casa_campestre',
        'casa_de_playa',
        'penthouse',
        'local',
        'lote',
        'oficina',
        'bodega',
        'cabana',
        'edificio',
        'finca',
        'duplex',
        'apartaestudio',
      ],
      required: true,
    },
    businessType: {
      type: 'enumeration',
      enum: ['venta', 'arriendo', 'venta_arriendo'],
      required: true,
    },
    price: {
      type: 'biginteger',
      required: false,
    },
    priceCurrency: {
      type: 'enumeration',
      enum: ['COP', 'USD'],
      default: 'COP',
    },
    rentPrice: {
      type: 'biginteger',
    },
    rentPeriod: {
      type: 'enumeration',
      enum: ['mensual', 'anual', 'diario'],
      default: 'mensual',
    },
    description: {
      type: 'richtext',
    },
    shortDescription: {
      type: 'text',
    },
    location: {
      type: 'component',
      component: 'shared.location',
      required: true,
    },
    features: {
      type: 'component',
      component: 'shared.features',
    },
    images: {
      type: 'media',
      multiple: true,
      allowedTypes: ['images'],
    },
    featuredImage: {
      type: 'media',
      multiple: false,
      allowedTypes: ['images'],
    },
    agent: {
      type: 'relation',
      relation: 'manyToOne',
      target: 'api::agent.agent',
    },
    status: {
      type: 'enumeration',
      enum: ['available', 'sold', 'rented', 'reserved', 'inactive'],
      default: 'available',
    },
    featured: {
      type: 'boolean',
      default: false,
    },
    tags: {
      type: 'component',
      component: 'shared.tags',
      repeatable: true,
    },
    seo: {
      type: 'component',
      component: 'shared.seo',
    },
  },
};
