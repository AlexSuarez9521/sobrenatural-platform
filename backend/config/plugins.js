"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    'users-permissions': {
        config: {
            jwtSecret: process.env.JWT_SECRET || 'jwt-secret',
        },
    },
    graphql: {
        enabled: true,
        config: {
            defaultLimit: 10,
            maxLimit: 50,
            shadowCRUD: true,
            playgroundAlways: true,
            depthLimit: 7,
            amountLimit: 100,
        },
    },
});
