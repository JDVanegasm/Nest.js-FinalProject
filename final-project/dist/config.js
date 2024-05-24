"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('config', () => {
    return {
        postgres: {
            host: process.env.DB_HOST,
            name: process.env.DB_DATABASE,
            user: process.env.DB_USUARIO || 'postgres',
            password: process.env.DB_PASSWORD || 'Mapache.dormilon2405',
            schema: 'public',
            port: parseInt(process.env.DB_PORT, 10),
        },
    };
});
//# sourceMappingURL=config.js.map