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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarritoProducto = void 0;
const typeorm_1 = require("typeorm");
const producto_entity_1 = require("./producto.entity");
const carrito_entity_1 = require("./carrito.entity");
let CarritoProducto = class CarritoProducto {
};
exports.CarritoProducto = CarritoProducto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CarritoProducto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], CarritoProducto.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => producto_entity_1.Producto, producto => producto.carritos),
    __metadata("design:type", producto_entity_1.Producto)
], CarritoProducto.prototype, "producto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => carrito_entity_1.Carrito, carrito => carrito.productos),
    __metadata("design:type", carrito_entity_1.Carrito)
], CarritoProducto.prototype, "carrito", void 0);
exports.CarritoProducto = CarritoProducto = __decorate([
    (0, typeorm_1.Entity)()
], CarritoProducto);
//# sourceMappingURL=CarritoProducto.entity.js.map