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
exports.Carrito = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("./usuario.entity");
const producto_entity_1 = require("./producto.entity");
let Carrito = class Carrito {
};
exports.Carrito = Carrito;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Carrito.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30 }),
    __metadata("design:type", String)
], Carrito.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], Carrito.prototype, "productoId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], Carrito.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => usuario_entity_1.usuario, usuario => usuario.carrito),
    __metadata("design:type", usuario_entity_1.usuario)
], Carrito.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => producto_entity_1.Producto, (producto) => producto.carritos),
    __metadata("design:type", Array)
], Carrito.prototype, "productos", void 0);
exports.Carrito = Carrito = __decorate([
    (0, typeorm_1.Entity)()
], Carrito);
//# sourceMappingURL=Carrito.entity.js.map