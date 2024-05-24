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
exports.actualizarUsuarioDto = exports.crearUsuarioDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const rol_entity_1 = require("../entidades/rol.entity");
const swagger_2 = require("@nestjs/swagger");
function stringToDate({ value }) {
    return new Date(value);
}
class crearUsuarioDto {
}
exports.crearUsuarioDto = crearUsuarioDto;
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], crearUsuarioDto.prototype, "cedula", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], crearUsuarioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], crearUsuarioDto.prototype, "apellido", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(stringToDate),
    __metadata("design:type", Date)
], crearUsuarioDto.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], crearUsuarioDto.prototype, "telefono", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], crearUsuarioDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], crearUsuarioDto.prototype, "correo", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], crearUsuarioDto.prototype, "password", void 0);
__decorate([
    (0, swagger_2.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", rol_entity_1.Rol)
], crearUsuarioDto.prototype, "fk_rol_user", void 0);
class actualizarUsuarioDto extends (0, swagger_1.PartialType)(crearUsuarioDto) {
}
exports.actualizarUsuarioDto = actualizarUsuarioDto;
//# sourceMappingURL=usuario.dto.js.map