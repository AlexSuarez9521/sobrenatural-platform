export default {
  collectionName: 'components_shared_tags',
  info: {
    displayName: 'Etiqueta',
    description: 'Etiquetas para clasificación',
    icon: 'tag',
  },
  category: 'shared',
  attributes: {
    label: {
      type: 'string',
      required: true,
    },
    value: {
      type: 'string',
      required: true,
    },
  },
};
