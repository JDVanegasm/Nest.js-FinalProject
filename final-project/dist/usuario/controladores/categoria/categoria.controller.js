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
exports.CategoriaController = void 0;
const common_1 = require("@nestjs/common");
const categoria_service_1 = require("../../servicios/categoria/categoria.service");
const categoria_dto_1 = require("../../dto/categoria.dto");
const swagger_1 = require("@nestjs/swagger");
let CategoriaController = class CategoriaController {
    constructor(categoriaService) {
        this.categoriaService = categoriaService;
    }
    async crearCategoria(createCategoriaDto) {
        return await this.categoriaService.crearCategoria(createCategoriaDto);
    }
    async consultarCategorias() {
        return await this.categoriaService.consultarTodas();
    }
    async consultarCategoria(id) {
        return await this.categoriaService.consultarCategoria(id);
    }
    async actualizarCategoria(id, updateCategoriaDto) {
        return await this.categoriaService.actualizarCategoria(id, updateCategoriaDto);
    }
    async eliminarCategoria(id) {
        return await this.categoriaService.eliminarCategoria(id);
    }
};
exports.CategoriaController = CategoriaController;
__decorate([
    (0, common_1.Post)('crearCategoria'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nueva categoría' }),
    (0, swagger_1.ApiBody)({ type: categoria_dto_1.categoriaDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Categoría creada con éxito' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos de categoría inválidos' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [categoria_dto_1.categoriaDto]),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "crearCategoria", null);
__decorate([
    (0, common_1.Get)('consultarCategorias'),
    (0, swagger_1.ApiOperation)({ summary: 'Consultar todas las categorías' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta exitosa' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "consultarCategorias", null);
__decorate([
    (0, common_1.Get)('consultarCategoria/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Consultar una categoría por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta exitosa' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Categoría no encontrada' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "consultarCategoria", null);
__decorate([
    (0, common_1.Put)('actualizarCategoria/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar una categoría por ID' }),
    (0, swagger_1.ApiBody)({ type: categoria_dto_1.categoriaDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Categoría actualizada con éxito' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Categoría no encontrada' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, categoria_dto_1.categoriaDto]),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "actualizarCategoria", null);
__decorate([
    (0, common_1.Delete)('eliminarCategoria/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una categoría por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Categoría eliminada con éxito' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Categoría no encontrada' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "eliminarCategoria", null);
exports.CategoriaController = CategoriaController = __decorate([
    (0, common_1.Controller)('categoria'),
    (0, swagger_1.ApiTags)('Categoria'),
    __metadata("design:paramtypes", [categoria_service_1.CategoriaService])
], CategoriaController);
//# sourceMappingURL=categoria.controller.js.map