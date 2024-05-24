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
exports.CarritoController = void 0;
const common_1 = require("@nestjs/common");
const carrito_service_1 = require("../../servicios/carrito/carrito.service");
const carrito_dto_1 = require("../../dto/carrito.dto");
const swagger_1 = require("@nestjs/swagger");
let CarritoController = class CarritoController {
    constructor(carritoService) {
        this.carritoService = carritoService;
    }
    async crearCarrito(createCarritoDto) {
        return await this.carritoService.crearCarrito(createCarritoDto);
    }
    async consultarCarritos() {
        return await this.carritoService.consultarTodos();
    }
    async consultarCarrito(id) {
        return await this.carritoService.consultarCarrito(id);
    }
    async actualizarCarrito(id, updateCarritoDto) {
        return await this.carritoService.actualizarCarrito(id, updateCarritoDto);
    }
    async eliminarCarrito(id) {
        return await this.carritoService.eliminarCarrito(id);
    }
};
exports.CarritoController = CarritoController;
__decorate([
    (0, common_1.Post)('crearCarrito'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo carrito' }),
    (0, swagger_1.ApiBody)({ type: carrito_dto_1.carritoDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Carrito creado con éxito' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos de carrito inválidos' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [carrito_dto_1.carritoDto]),
    __metadata("design:returntype", Promise)
], CarritoController.prototype, "crearCarrito", null);
__decorate([
    (0, common_1.Get)('consultarCarritos'),
    (0, swagger_1.ApiOperation)({ summary: 'Consultar todos los carritos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta exitosa' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarritoController.prototype, "consultarCarritos", null);
__decorate([
    (0, common_1.Get)('consultarCarrito/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Consultar un carrito por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta exitosa' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Carrito no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarritoController.prototype, "consultarCarrito", null);
__decorate([
    (0, common_1.Put)('actualizarCarrito/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un carrito por ID' }),
    (0, swagger_1.ApiBody)({ type: carrito_dto_1.carritoDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Carrito actualizado con éxito' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Carrito no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, carrito_dto_1.carritoDto]),
    __metadata("design:returntype", Promise)
], CarritoController.prototype, "actualizarCarrito", null);
__decorate([
    (0, common_1.Delete)('eliminarCarrito/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un carrito por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Carrito eliminado con éxito' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Carrito no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarritoController.prototype, "eliminarCarrito", null);
exports.CarritoController = CarritoController = __decorate([
    (0, common_1.Controller)('carrito'),
    (0, swagger_1.ApiTags)('Carrito'),
    __metadata("design:paramtypes", [carrito_service_1.CarritoService])
], CarritoController);
//# sourceMappingURL=carrito.controller.js.map