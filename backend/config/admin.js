"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    auth: {
        secret: process.env.ADMIN_JWT_SECRET || 'admin-jwt-secret',
    },
    apiToken: {
        salt: process.env.API_TOKEN_SALT || 'api-token-salt',
    },
    transfer: {
        token: {
            salt: process.env.TRANSFER_TOKEN_SALT || 'transfer-token-salt',
        },
    },
    url: '/admin',
    autoOpen: false,
    watchIgnoreFiles: [
        '**/config/sync/**',
    ],
};
