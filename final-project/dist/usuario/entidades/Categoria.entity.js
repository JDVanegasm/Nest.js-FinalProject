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
exports.Categoria = void 0;
const typeorm_1 = require("typeorm");
const producto_entity_1 = require("./producto.entity");
let Categoria = class Categoria {
};
exports.Categoria = Categoria;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Categoria.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30 }),
    __metadata("design:type", String)
], Categoria.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 120 }),
    __metadata("design:type", String)
], Categoria.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => producto_entity_1.Producto, (producto) => producto.fk_categoria_producto),
    __metadata("design:type", Array)
], Categoria.prototype, "producto", void 0);
exports.Categoria = Categoria = __decorate([
    (0, typeorm_1.Entity)()
], Categoria);
//# sourceMappingURL=Categoria.entity.js.map