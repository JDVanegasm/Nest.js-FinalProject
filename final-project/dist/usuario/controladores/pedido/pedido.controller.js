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
exports.PedidoController = void 0;
const common_1 = require("@nestjs/common");
const pedido_service_1 = require("../../servicios/pedido/pedido.service");
const pedido_dto_1 = require("../../dto/pedido.dto");
const swagger_1 = require("@nestjs/swagger");
let PedidoController = class PedidoController {
    constructor(pedidoService) {
        this.pedidoService = pedidoService;
    }
    async crearPedido(createPedidoDto) {
        return await this.pedidoService.crearPedido(createPedidoDto);
    }
    async consultarPedidos() {
        return await this.pedidoService.consultarTodos();
    }
    async consultarPedido(id) {
        return await this.pedidoService.consultarPedido(id);
    }
    async actualizarPedido(id, updatePedidoDto) {
        return await this.pedidoService.actualizarPedido(id, updatePedidoDto);
    }
    async eliminarPedido(id) {
        return await this.pedidoService.eliminarPedido(id);
    }
};
exports.PedidoController = PedidoController;
__decorate([
    (0, common_1.Post)('crearPedido'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo pedido' }),
    (0, swagger_1.ApiBody)({ type: pedido_dto_1.pedidoDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Pedido creado con éxito' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos de pedido inválidos' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pedido_dto_1.pedidoDto]),
    __metadata("design:returntype", Promise)
], PedidoController.prototype, "crearPedido", null);
__decorate([
    (0, common_1.Get)('consultarPedidos'),
    (0, swagger_1.ApiOperation)({ summary: 'Consultar todos los pedidos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta exitosa' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PedidoController.prototype, "consultarPedidos", null);
__decorate([
    (0, common_1.Get)('consultarPedido/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Consultar un pedido por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta exitosa' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pedido no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PedidoController.prototype, "consultarPedido", null);
__decorate([
    (0, common_1.Put)('actualizarPedido/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un pedido por ID' }),
    (0, swagger_1.ApiBody)({ type: pedido_dto_1.pedidoDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pedido actualizado con éxito' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pedido no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pedido_dto_1.pedidoDto]),
    __metadata("design:returntype", Promise)
], PedidoController.prototype, "actualizarPedido", null);
__decorate([
    (0, common_1.Delete)('eliminarPedido/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un pedido por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pedido eliminado con éxito' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pedido no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PedidoController.prototype, "eliminarPedido", null);
exports.PedidoController = PedidoController = __decorate([
    (0, common_1.Controller)('pedido'),
    (0, swagger_1.ApiTags)('Pedido'),
    __metadata("design:paramtypes", [pedido_service_1.PedidoService])
], PedidoController);
//# sourceMappingURL=pedido.controller.js.map