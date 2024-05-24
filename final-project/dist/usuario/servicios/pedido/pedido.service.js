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
exports.PedidoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Pedido_entity_1 = require("../../entidades/Pedido.entity");
let PedidoService = class PedidoService {
    constructor(pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }
    async crearPedido(createPedidoDto) {
        const pedido = this.pedidoRepository.create(createPedidoDto);
        return await this.pedidoRepository.save(pedido);
    }
    async consultarTodos() {
        return await this.pedidoRepository.find({ relations: ['carrito'] });
    }
    async consultarPedido(id) {
        return await this.pedidoRepository.findOne({ where: { id }, relations: ['carrito'] });
    }
    async actualizarPedido(id, updatePedidoDto) {
        await this.pedidoRepository.update(id, updatePedidoDto);
        return this.consultarPedido(id);
    }
    async eliminarPedido(id) {
        await this.pedidoRepository.delete(id);
    }
};
exports.PedidoService = PedidoService;
exports.PedidoService = PedidoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Pedido_entity_1.Pedido)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PedidoService);
//# sourceMappingURL=pedido.service.js.map