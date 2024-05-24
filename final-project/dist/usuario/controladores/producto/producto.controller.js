"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoController = void 0;
const common_1 = require("@nestjs/common");
const producto_service_1 = require("../../servicios/producto/producto.service");
const producto_dto_1 = require("../../dto/producto.dto");
const swagger_1 = require("@nestjs/swagger");
let ProductoController = class ProductoController {
    constructor(productoService) {
        this.productoService = productoService;
    }
    async crearProducto(createProductoDto) {
        return await this.productoService.crearProducto(createProductoDto);
    }
    async consultarProductos() {
        return await this.productoService.consultarTodos();
    }
    async consultarProducto(id) {
        return await this.productoService.consultarProducto(id);
    }
    async actualizarProducto(id, updateProductoDto) {
        return await this.productoService.actualizarProducto(id, updateProductoDto);
    }
    async eliminarProducto(id) {
        return await this.productoService.eliminarProducto(id);
    }
};
exports.ProductoController = ProductoController;
__decorate([
    (0, common_1.Post)('crearProducto'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo producto' }),
    (0, swagger_1.ApiBody)({ type: producto_dto_1.productoDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Producto creado con éxito' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos de producto inválidos' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [producto_dto_1.productoDto]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "crearProducto", null);
__decorate([
    (0, common_1.Get)('consultarProductos'),
    (0, swagger_1.ApiOperation)({ summary: 'Consultar todos los productos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta exitosa' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "consultarProductos", null);
__decorate([
    (0, common_1.Get)('consultarProducto/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Consultar un producto por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta exitosa' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Producto no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "consultarProducto", null);
__decorate([
    (0, common_1.Put)('actualizarProducto/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un producto por ID' }),
    (0, swagger_1.ApiBody)({ type: producto_dto_1.productoDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Producto actualizado con éxito' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Producto no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, producto_dto_1.productoDto]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "actualizarProducto", null);
__decorate([
    (0, common_1.Delete)('eliminarProducto/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un producto por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Producto eliminado con éxito' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Producto no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "eliminarProducto", null);
exports.ProductoController = ProductoController = __decorate([
    (0, common_1.Controller)('producto'),
    (0, swagger_1.ApiTags)('Producto'),
    __metadata("design:paramtypes", [producto_service_1.ProductoService])
], ProductoController);
//# sourceMappingURL=producto.controller.js.map