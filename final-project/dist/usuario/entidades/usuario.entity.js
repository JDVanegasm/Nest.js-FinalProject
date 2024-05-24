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
exports.usuario = void 0;
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const rol_entity_1 = require("./rol.entity");
const Carrito_entity_1 = require("./Carrito.entity");
const Pedido_entity_1 = require("./Pedido.entity");
let usuario = class usuario {
};
exports.usuario = usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], usuario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], usuario.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], usuario.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], usuario.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], usuario.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 15 }),
    __metadata("design:type", String)
], usuario.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], usuario.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], usuario.prototype, "direccion", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], usuario.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rol_entity_1.Rol, (rol) => rol.usuario, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'fk_rol_user' }),
    __metadata("design:type", rol_entity_1.Rol)
], usuario.prototype, "fk_rol_user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Carrito_entity_1.Carrito, carrito => carrito.usuario, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Carrito_entity_1.Carrito)
], usuario.prototype, "carrito", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Pedido_entity_1.Pedido, (Pedido) => Pedido.fk_Pedido_user),
    __metadata("design:type", Array)
], usuario.prototype, "Pedido", void 0);
exports.usuario = usuario = __decorate([
    (0, typeorm_1.Entity)()
], usuario);
//# sourceMappingURL=usuario.entity.js.map