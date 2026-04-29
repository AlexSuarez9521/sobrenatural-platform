"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
        keys: env.array('APP_KEYS', ['key1', 'key2', 'key3', 'key4']),
    },
    url: env('PUBLIC_URL', ''),
    proxy: {
        enabled: true,
        ssl: true,
    },
    webhooks: {
        populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
});
