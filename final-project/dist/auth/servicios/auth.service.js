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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const usuario_entity_1 = require("../../usuario/entidades/usuario.entity");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usuarioRepo, jwtService) {
        this.usuarioRepo = usuarioRepo;
        this.jwtService = jwtService;
    }
    async login(correo, password) {
        try {
            const user = await this.usuarioRepo.find({ where: [{ correo: correo, password: password }], relations: ["fk_rol_user"] });
            if (user.length == 0) {
                return {
                    statusCode: 404,
                    message: "Usuario o contraseña incorrectos"
                };
            }
            const payload = { username: user[0].correo, sub: user[0].cedula, roles: user[0].fk_rol_user.nombre };
            return {
                statusCode: 200,
                user: user,
                access_token: this.jwtService.sign(payload),
                Response: true
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                message: 'Error Interno'
            };
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map