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
exports.Producto = void 0;
const typeorm_1 = require("typeorm");
const Categoria_entity_1 = require("./Categoria.entity");
const Carrito_entity_1 = require("./Carrito.entity");
let Producto = class Producto {
};
exports.Producto = Producto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Producto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30 }),
    __metadata("design:type", String)
], Producto.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 120 }),
    __metadata("design:type", String)
], Producto.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'real' }),
    __metadata("design:type", Number)
], Producto.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 4 }),
    __metadata("design:type", String)
], Producto.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Categoria_entity_1.Categoria, (categoria) => categoria.producto, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'fk_categoria_producto' }),
    __metadata("design:type", Categoria_entity_1.Categoria)
], Producto.prototype, "fk_categoria_producto", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Carrito_entity_1.Carrito, (carrito) => carrito.productos),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Producto.prototype, "carritos", void 0);
exports.Producto = Producto = __decorate([
    (0, typeorm_1.Entity)()
], Producto);
//# sourceMappingURL=producto.entity.js.map