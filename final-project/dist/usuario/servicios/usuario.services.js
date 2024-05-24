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
exports.usuarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../entidades/usuario.entity");
const typeorm_2 = require("@nestjs/typeorm");
let usuarioService = class usuarioService {
    constructor(usuarioRepo) {
        this.usuarioRepo = usuarioRepo;
    }
    prueba() {
        return 'Mi primer servicio';
    }
    async crearUsuario(data) {
        try {
            const user = await this.usuarioRepo.find({ where: [{ cedula: data.cedula }, { correo: data.correo }] });
            if (user.length > 0) {
                return {
                    statusCode: 200,
                    message: 'Usuario ya creado'
                };
            }
            else {
                const nuevoUsuario = this.usuarioRepo.create(data);
                return {
                    statusCode: 201,
                    message: 'Usuario creado',
                    response: await this.usuarioRepo.save(nuevoUsuario)
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
        return await this.usuarioRepo.find({
            relations: ["fk_rol_user"]
        });
    }
    async consultarTodosCedula(cedula) {
        return await this.usuarioRepo.findOne({ where: { cedula: cedula }, relations: ["fk_rol_user"] });
    }
    async actualizarUsuario(cedula, data) {
        try {
            const user = await this.usuarioRepo.findOne({ where: { cedula: cedula } });
            if (user) {
                await this.usuarioRepo.merge(user, data);
                return {
                    statusCode: 201,
                    message: 'El usuario ha sido actualizado',
                    response: await this.usuarioRepo.save(user)
                };
            }
            else {
                return {
                    statusCode: 200,
                    message: 'Usuario no encontrado'
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
    async eliminarUsuario(cedula) {
        try {
            const user = await this.usuarioRepo.findOne({ where: { cedula: cedula } });
            if (user) {
                await this.usuarioRepo.delete(user);
                return {
                    statusCode: 202,
                    message: 'El usuario ha sido eliminado'
                };
            }
            else {
                return {
                    statusCode: 200,
                    message: 'Usuario no encontrado'
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
exports.usuarioService = usuarioService;
exports.usuarioService = usuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(usuario_entity_1.usuario)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], usuarioService);
//# sourceMappingURL=usuario.services.js.map