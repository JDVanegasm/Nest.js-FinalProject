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
exports.RolController = void 0;
const common_1 = require("@nestjs/common");
const rol_dto_1 = require("../../dto/rol.dto");
const rol_service_1 = require("../../servicios/rol/rol.service");
const swagger_1 = require("@nestjs/swagger");
let RolController = class RolController {
    constructor(rolService) {
        this.rolService = rolService;
    }
    async crearRol(data) {
        return await this.rolService.crearRol(data);
    }
    async consultarRoles() {
        return await this.rolService.consultarTodos();
    }
    async consultarRolId(id) {
        return await this.rolService.consultarTodosId(id);
    }
    async actualizarRol(id, data) {
        return await this.rolService.actualizarRol(id, data);
    }
    async eliminarRol(id) {
        return await this.rolService.eliminarRol(id);
    }
};
exports.RolController = RolController;
__decorate([
    (0, common_1.Post)('crearRol'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo rol' }),
    (0, swagger_1.ApiBody)({ type: rol_dto_1.crearRolDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Rol creado con éxito' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos de rol inválidos' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rol_dto_1.crearRolDto]),
    __metadata("design:returntype", Promise)
], RolController.prototype, "crearRol", null);
__decorate([
    (0, common_1.Get)('consultarRoles'),
    (0, swagger_1.ApiOperation)({ summary: 'Consultar todos los roles' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Roles consultados correctamente' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RolController.prototype, "consultarRoles", null);
__decorate([
    (0, common_1.Get)('consultarRolId/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Consultar un rol por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'ID del rol a consultar' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Rol consultado correctamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Rol no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RolController.prototype, "consultarRolId", null);
__decorate([
    (0, common_1.Put)('actualizarRol/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un rol específico por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'ID del rol a actualizar' }),
    (0, swagger_1.ApiBody)({ type: rol_dto_1.actualizarRolDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Rol actualizado correctamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Rol no encontrado' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, rol_dto_1.actualizarRolDto]),
    __metadata("design:returntype", Promise)
], RolController.prototype, "actualizarRol", null);
__decorate([
    (0, common_1.Delete)('eliminarRol/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un rol específico por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'ID del rol a eliminar' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Rol eliminado correctamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Rol no encontrado' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RolController.prototype, "eliminarRol", null);
exports.RolController = RolController = __decorate([
    (0, common_1.Controller)('rol'),
    (0, swagger_1.ApiTags)('Rol'),
    __metadata("design:paramtypes", [rol_service_1.RolService])
], RolController);
//# sourceMappingURL=rol.controller.js.map