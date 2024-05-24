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
exports.RolService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rol_entity_1 = require("../../entidades/rol.entity");
const typeorm_2 = require("typeorm");
let RolService = class RolService {
    constructor(rolRepo) {
        this.rolRepo = rolRepo;
    }
    async crearRol(data) {
        try {
            const rol = await this.rolRepo.find({ where: [{ nombre: data.nombre }] });
            if (rol.length > 0) {
                return {
                    statusCode: 200,
                    message: 'Rol ya creado'
                };
            }
            else {
                const nuevoRol = this.rolRepo.create(data);
                return {
                    statusCode: 201,
                    message: 'Rol creado',
                    response: await this.rolRepo.save(nuevoRol)
                };
            }
        }
        catch (error) {
            return {
                statusCode: 500,
                message: 'Error Interno'
            };
        }
    }
    async consultarTodos() {
        return await this.rolRepo.find();
    }
    async consultarTodosId(id) {
        return await this.rolRepo.findOne({ where: { id: id } });
    }
    async actualizarRol(id, data) {
        try {
            const rol = await this.rolRepo.findOne({ where: { id: id } });
            if (rol) {
                await this.rolRepo.merge(rol, data);
                return {
                    statusCode: 201,
                    message: 'El rol ha sido actualizado',
                    response: await this.rolRepo.save(rol)
                };
            }
            else {
                return {
                    statusCode: 200,
                    message: 'Rol no encontrado'
                };
            }
        }
        catch (error) {
            return {
                statusCode: 500,
                message: 'Error Interno'
            };
        }
    }
    async eliminarRol(id) {
        try {
            const rol = await this.rolRepo.findOne({ where: { id: id } });
            if (rol) {
                await this.rolRepo.delete(rol);
                return {
                    statusCode: 202,
                    message: 'El rol ha sido eliminado'
                };
            }
            else {
                return {
                    statusCode: 200,
                    message: 'Rol no encontrado'
                };
            }
        }
        catch (error) {
            return {
                statusCode: 500,
                message: 'Error Interno'
            };
        }
    }
};
exports.RolService = RolService;
exports.RolService = RolService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rol_entity_1.Rol)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RolService);
//# sourceMappingURL=rol.service.js.map