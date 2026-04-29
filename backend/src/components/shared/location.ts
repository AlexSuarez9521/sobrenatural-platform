export default {
  collectionName: 'components_shared_locations',
  info: {
    displayName: 'Ubicación',
    description: 'Datos de ubicación de una propiedad',
    icon: 'map-marker-alt',
  },
  category: 'shared',
  attributes: {
    address: {
      type: 'string',
      required: true,
    },
    city: {
      type: 'string',
      required: true,
    },
    state: {
      type: 'string',
    },
    country: {
      type: 'string',
      default: 'Colombia',
    },
    neighborhood: {
      type: 'string',
    },
    latitude: {
      type: 'decimal',
    },
    longitude: {
      type: 'decimal',
    },
    zipCode: {
      type: 'string',
    },
  },
};
