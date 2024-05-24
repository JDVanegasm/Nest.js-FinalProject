"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("./entidades/usuario.entity");
const usuario_controller_1 = require("./controladores/usuario.controller");
const usuario_services_1 = require("./servicios/usuario.services");
const rol_entity_1 = require("./entidades/rol.entity");
const rol_controller_1 = require("./controladores/rol/rol.controller");
const rol_service_1 = require("./servicios/rol/rol.service");
const producto_entity_1 = require("./entidades/producto.entity");
const producto_controller_1 = require("./controladores/producto/producto.controller");
const producto_service_1 = require("./servicios/producto/producto.service");
const Categoria_entity_1 = require("./entidades/Categoria.entity");
const categoria_controller_1 = require("./controladores/categoria/categoria.controller");
const categoria_service_1 = require("./servicios/categoria/categoria.service");
const Carrito_entity_1 = require("./entidades/Carrito.entity");
const carrito_controller_1 = require("./controladores/carrito/carrito.controller");
const carrito_service_1 = require("./servicios/carrito/carrito.service");
const Pedido_entity_1 = require("./entidades/Pedido.entity");
const pedido_controller_1 = require("./controladores/pedido/pedido.controller");
const pedido_service_1 = require("./servicios/pedido/pedido.service");
let UsuarioModule = class UsuarioModule {
};
exports.UsuarioModule = UsuarioModule;
exports.UsuarioModule = UsuarioModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([usuario_entity_1.usuario,
                rol_entity_1.Rol,
                producto_entity_1.Producto,
                Categoria_entity_1.Categoria,
                Carrito_entity_1.Carrito,
                Pedido_entity_1.Pedido])],
        controllers: [usuario_controller_1.UsuarioController,
            rol_controller_1.RolController,
            producto_controller_1.ProductoController,
            categoria_controller_1.CategoriaController,
            carrito_controller_1.CarritoController,
            pedido_controller_1.PedidoController
        ],
        providers: [usuario_services_1.usuarioService,
            rol_service_1.RolService,
            producto_service_1.ProductoService,
            categoria_service_1.CategoriaService,
            carrito_service_1.CarritoService,
            pedido_service_1.PedidoService],
        exports: [usuario_services_1.usuarioService,
            rol_service_1.RolService,
            producto_service_1.ProductoService,
            categoria_service_1.CategoriaService,
            carrito_service_1.CarritoService,
            pedido_service_1.PedidoService]
    })
], UsuarioModule);
//# sourceMappingURL=usuario.module.js.map