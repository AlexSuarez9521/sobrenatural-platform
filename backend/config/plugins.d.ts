declare const _default: () => {
    'users-permissions': {
        config: {
            jwtSecret: string;
        };
    };
    graphql: {
        enabled: boolean;
        config: {
            defaultLimit: number;
            maxLimit: number;
            shadowCRUD: boolean;
            playgroundAlways: boolean;
            depthLimit: number;
            amountLimit: number;
        };
    };
};
export default _default;
