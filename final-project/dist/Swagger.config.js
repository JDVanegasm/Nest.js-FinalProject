"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
const setupSwagger = (app) => {
    const config = new swagger_1.DocumentBuilder().build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
};
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=Swagger.config.js.map