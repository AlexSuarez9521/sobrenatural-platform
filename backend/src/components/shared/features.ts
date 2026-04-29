export default {
  collectionName: 'components_shared_features',
  info: {
    displayName: 'Características',
    description: 'Características y amenities de una propiedad',
    icon: 'list',
  },
  category: 'shared',
  attributes: {
    bedrooms: {
      type: 'integer',
      min: 0,
      default: 0,
    },
    bathrooms: {
      type: 'integer',
      min: 0,
      default: 0,
    },
    parkingSpots: {
      type: 'integer',
      min: 0,
      default: 0,
    },
    totalArea: {
      type: 'decimal',
      min: 0,
    },
    builtArea: {
      type: 'decimal',
      min: 0,
    },
    floorNumber: {
      type: 'integer',
    },
    yearBuilt: {
      type: 'integer',
    },
    hasPool: {
      type: 'boolean',
      default: false,
    },
    hasGym: {
      type: 'boolean',
      default: false,
    },
    hasElevator: {
      type: 'boolean',
      default: false,
    },
    hasSecurity: {
      type: 'boolean',
      default: false,
    },
    hasGarden: {
      type: 'boolean',
      default: false,
    },
    hasTerrace: {
      type: 'boolean',
      default: false,
    },
    isFurnished: {
      type: 'boolean',
      default: false,
    },
    petFriendly: {
      type: 'boolean',
      default: false,
    },
  },
};
