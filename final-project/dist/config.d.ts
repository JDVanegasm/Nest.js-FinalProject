declare const _default: (() => {
    postgres: {
        host: string;
        name: string;
        user: string;
        password: string;
        schema: string;
        port: number;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    postgres: {
        host: string;
        name: string;
        user: string;
        password: string;
        schema: string;
        port: number;
    };
}>;
export default _default;
