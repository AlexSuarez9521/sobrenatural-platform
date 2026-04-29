declare const _default: ({ env }: {
    env: any;
}) => {
    connection: {
        client: string;
        connection: {
            host: any;
            port: any;
            database: any;
            user: any;
            password: any;
            ssl: {
                rejectUnauthorized: any;
            };
            schema: any;
        };
        pool: {
            min: any;
            max: any;
        };
        acquireConnectionTimeout: any;
    };
};
export default _default;
