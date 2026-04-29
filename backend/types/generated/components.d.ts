import type { Schema, Struct } from '@strapi/strapi';

export interface SharedFeatures extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    description: 'Caracter\u00EDsticas y amenities de una propiedad';
    displayName: 'Caracter\u00EDsticas';
    icon: 'list';
  };
  attributes: {
    bathrooms: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    bedrooms: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    builtArea: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    floorNumber: Schema.Attribute.Integer;
    hasElevator: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    hasGarden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    hasGym: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    hasPool: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    hasSecurity: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    hasTerrace: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isFurnished: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    parkingSpots: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    petFriendly: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    totalArea: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    yearBuilt: Schema.Attribute.Integer;
  };
}

export interface SharedLocation extends Struct.ComponentSchema {
  collectionName: 'components_shared_locations';
  info: {
    description: 'Datos de ubicaci\u00F3n de una propiedad';
    displayName: 'Ubicaci\u00F3n';
    icon: 'map-marker-alt';
  };
  attributes: {
    address: Schema.Attribute.String & Schema.Attribute.Required;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    country: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Colombia'>;
    latitude: Schema.Attribute.Decimal;
    longitude: Schema.Attribute.Decimal;
    neighborhood: Schema.Attribute.String;
    state: Schema.Attribute.String;
    zipCode: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'Configuraci\u00F3n SEO para contenido';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaRobots: Schema.Attribute.Enumeration<
      [
        'index, follow',
        'index, nofollow',
        'noindex, follow',
        'noindex, nofollow',
      ]
    > &
      Schema.Attribute.DefaultTo<'index, follow'>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedTags extends Struct.ComponentSchema {
  collectionName: 'components_shared_tags';
  info: {
    description: 'Etiquetas para clasificaci\u00F3n';
    displayName: 'Etiqueta';
    icon: 'tag';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.features': SharedFeatures;
      'shared.location': SharedLocation;
      'shared.seo': SharedSeo;
      'shared.tags': SharedTags;
    }
  }
}
